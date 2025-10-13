'use client'

import { useState } from 'react'
import { marked } from 'marked'
import { Card } from '@/components/ui/card'
import { Eye, Code, Copy, Download, Check, X, Plus } from 'lucide-react'
import { DEFAULT_MARKDOWN } from '@/constants'
import Image from 'next/image'

marked.setOptions({
  breaks: true,
  gfm: true
})

interface BlogMetadata {
  title: string
  excerpt: string
  authorName: string
  authorAvatar: string
  authorBio: string
  publishedAt: string
  readTime: string
  tags: string[]
  featuredImage: string
  categoryName: string
  categorySlug: string
}

const viewOptions = [
  { key: 'edit', label: 'Chỉnh sửa' },
  { key: 'split', label: 'Chia đôi' },
  { key: 'preview', label: 'Xem trước' }
]

export default function AdminPage() {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('split')

  const [metadata, setMetadata] = useState<BlogMetadata>({
    title: '',
    excerpt: '',
    authorName: '',
    authorAvatar: '',
    authorBio: '',
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: '',
    tags: [],
    featuredImage: '',
    categoryName: '',
    categorySlug: ''
  })

  const [tagInput, setTagInput] = useState('')

  const getHtml = () => {
    try {
      return marked.parse(markdown)
    } catch (error) {
      return `<p>${error} khi phân tích markdown</p>`
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'tai-lieu.md'
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportBlogData = () => {
    const blogData = {
      id: Date.now().toString(),
      title: metadata.title,
      excerpt: metadata.excerpt,
      content: getHtml(),
      author: {
        name: metadata.authorName,
        avatar: metadata.authorAvatar,
        bio: metadata.authorBio
      },
      publishedAt: metadata.publishedAt,
      readTime: metadata.readTime,
      tags: metadata.tags,
      featuredImage: metadata.featuredImage,
      category: {
        name: metadata.categoryName,
        slug: metadata.categorySlug,
        count: 0
      }
    }

    const dataStr = JSON.stringify(blogData, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'bai-viet.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const addTag = () => {
    if (tagInput.trim() && !metadata.tags.includes(tagInput.trim())) {
      setMetadata({ ...metadata, tags: [...metadata.tags, tagInput.trim()] })
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setMetadata({ ...metadata, tags: metadata.tags.filter((tag) => tag !== tagToRemove) })
  }

  const handleTagInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag()
    }
  }

  const wordCount = markdown
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length
  const charCount = markdown.length

  return (
    <div className='min-h-screen py-4 px-3 sm:px-6'>
      <div className='mx-auto max-w-9xl'>
        {/* Header */}
        <header className='mb-6'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4'>
            <div className='text-center sm:text-left'>
              <h1 className='text-2xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'>
                Thông tin bài viết
              </h1>
              <p className='text-slate-600 dark:text-slate-400 mt-1 sm:mt-2 text-sm sm:text-base'>
                Quản lý và chỉnh sửa dữ liệu bài viết dưới định dạng JSON hoặc Markdown
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-wrap justify-center sm:justify-end gap-2'>
              <button
                onClick={copyToClipboard}
                className='flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium transition-all'
              >
                {copied ? (
                  <>
                    <Check className='w-4 h-4 text-green-500' />
                    <span className='text-green-600 dark:text-green-400'>Đã sao chép!</span>
                  </>
                ) : (
                  <>
                    <Copy className='w-4 h-4 text-slate-600 dark:text-slate-400' />
                    <span className='text-slate-700 dark:text-slate-300'>Sao chép</span>
                  </>
                )}
              </button>

              <button
                onClick={downloadMarkdown}
                className='flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium transition-all'
              >
                <Download className='w-4 h-4 text-slate-600 dark:text-slate-400' />
                <span className='text-slate-700 dark:text-slate-300'>Tải Markdown</span>
              </button>

              <button
                onClick={exportBlogData}
                className='flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-all'
              >
                <Download className='w-4 h-4' />
                <span>Xuất bài viết</span>
              </button>
            </div>
          </div>
        </header>

        <Card className='mb-4 p-4 sm:p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {/* Title */}
            <div className='lg:col-span-2'>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>Tiêu đề *</label>
              <input
                type='text'
                value={metadata.title}
                onChange={(e) => setMetadata({ ...metadata, title: e.target.value })}
                placeholder='Nhập tiêu đề bài viết'
                className='w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm'
              />
            </div>

            {/* Excerpt */}
            <div className='lg:col-span-2'>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>Tóm tắt *</label>
              <textarea
                value={metadata.excerpt}
                onChange={(e) => setMetadata({ ...metadata, excerpt: e.target.value })}
                placeholder='Mô tả ngắn về bài viết'
                rows={3}
                className='w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none'
              />
            </div>

            {/* Author Name */}
            <div>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>Tên tác giả *</label>
              <input
                type='text'
                value={metadata.authorName}
                onChange={(e) => setMetadata({ ...metadata, authorName: e.target.value })}
                placeholder='Họ và tên tác giả'
                className='w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm'
              />
            </div>

            {/* Author Avatar URL */}
            <div>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                Ảnh đại diện tác giả
              </label>
              <input
                type='url'
                value={metadata.authorAvatar}
                onChange={(e) => setMetadata({ ...metadata, authorAvatar: e.target.value })}
                placeholder='https://vi-du.com/avatar.jpg'
                className='w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm'
              />
            </div>

            {/* Author Bio */}
            <div className='lg:col-span-2'>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                Giới thiệu tác giả
              </label>
              <textarea
                value={metadata.authorBio}
                onChange={(e) => setMetadata({ ...metadata, authorBio: e.target.value })}
                placeholder='Giới thiệu ngắn về tác giả'
                rows={2}
                className='w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none'
              />
            </div>

            {/* Published Date */}
            <div>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                Ngày xuất bản *
              </label>
              <input
                type='date'
                value={metadata.publishedAt}
                onChange={(e) => setMetadata({ ...metadata, publishedAt: e.target.value })}
                className='w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm'
              />
            </div>

            {/* Read Time */}
            <div>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>Thời gian đọc</label>
              <input
                type='text'
                value={metadata.readTime}
                onChange={(e) => setMetadata({ ...metadata, readTime: e.target.value })}
                placeholder='Ví dụ: 5 phút đọc'
                className='w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm'
              />
            </div>

            {/* Featured Image */}
            <div className='lg:col-span-2'>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>Ảnh nổi bật</label>
              <input
                type='url'
                value={metadata.featuredImage}
                onChange={(e) => setMetadata({ ...metadata, featuredImage: e.target.value })}
                placeholder='https://vi-du.com/hinh-anh.jpg'
                className='w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm'
              />
              {metadata.featuredImage && (
                <div className='mt-2'>
                  <Image
                    src={metadata.featuredImage || '/placeholder.svg'}
                    alt='Xem trước ảnh nổi bật'
                    className='w-full h-40 object-cover rounded-lg'
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              )}
            </div>

            {/* Tags */}
            <div className='lg:col-span-2'>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>Thẻ (Tags)</label>
              <div className='flex gap-2 mb-2'>
                <input
                  type='text'
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagInputKeyDown}
                  placeholder='Thêm thẻ và nhấn Enter'
                  className='flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm'
                />
                <button
                  onClick={addTag}
                  className='px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-1'
                >
                  <Plus className='w-4 h-4' />
                  Thêm
                </button>
              </div>
              <div className='flex flex-wrap gap-2'>
                {metadata.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm'
                  >
                    {tag}
                    <button onClick={() => removeTag(tag)} className='hover:text-green-900 dark:hover:text-green-200'>
                      <X className='w-3 h-3' />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Category Name */}
            <div>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>Tên danh mục</label>
              <input
                type='text'
                value={metadata.categoryName}
                onChange={(e) => setMetadata({ ...metadata, categoryName: e.target.value })}
                placeholder='Ví dụ: Lịch sử'
                className='w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm'
              />
            </div>

            {/* Category Slug */}
            <div>
              <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                Đường dẫn danh mục (Slug)
              </label>
              <input
                type='text'
                value={metadata.categorySlug}
                onChange={(e) => setMetadata({ ...metadata, categorySlug: e.target.value })}
                placeholder='Ví dụ: lich-su'
                className='w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm'
              />
            </div>
          </div>
        </Card>

        {/* View Toggle & Stats */}
        <div className='mb-4'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
            <div className='flex justify-between sm:justify-start bg-white dark:bg-slate-800 rounded-lg p-1 shadow-sm border border-slate-200 dark:border-slate-700'>
              {viewOptions.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex w-full lg:w-auto justify-center items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                    activeTab === key
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {key === 'edit' && <Code className='w-4 h-4' />}
                  {key === 'split' && (
                    <div className='flex gap-0.5'>
                      <div className='w-2 h-4 bg-current rounded-sm' />
                      <div className='w-2 h-4 bg-current rounded-sm' />
                    </div>
                  )}
                  {key === 'preview' && <Eye className='w-4 h-4' />}
                  <span className='hidden lg:inline'>{label}</span>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className='flex justify-center sm:justify-end gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400'>
              <span>{wordCount} từ</span>
              <span>•</span>
              <span>{charCount} ký tự</span>
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div
          className={`grid gap-4 h-[calc(100vh-240px)] ${
            activeTab === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {/* Editor */}
          {(activeTab === 'edit' || activeTab === 'split') && (
            <Card className='flex flex-col p-0 gap-0 overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'>
              <div className='bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 px-3 sm:px-4 py-2 sm:py-3 border-b border-slate-200 dark:border-slate-700'>
                <div className='flex items-center gap-2'>
                  <Code className='w-4 h-4 text-green-600 dark:text-green-400' />
                  <h2 className='font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-300'>
                    Soạn thảo Markdown
                  </h2>
                </div>
              </div>
              <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className='flex-1 w-full p-4 sm:p-6 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs sm:text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset leading-relaxed'
                placeholder='Nhập nội dung Markdown tại đây...'
                spellCheck={false}
              />
            </Card>
          )}

          {/* Preview */}
          {(activeTab === 'preview' || activeTab === 'split') && (
            <Card className='flex flex-col p-0 gap-0 overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'>
              <div className='bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 px-3 sm:px-4 py-2 sm:py-3 border-b border-slate-200 dark:border-slate-700'>
                <div className='flex items-center gap-2'>
                  <Eye className='w-4 h-4 text-emerald-600 dark:text-emerald-400' />
                  <h2 className='font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-300'>
                    Xem trước trực tiếp
                  </h2>
                </div>
              </div>
              <div
                className='blog-content overflow-auto p-4 sm:p-6 prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-2xl sm:prose-h1:text-3xl prose-h2:text-xl sm:prose-h2:text-2xl prose-a:text-green-600 dark:prose-a:text-green-400 prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 bg-white dark:bg-slate-900'
                dangerouslySetInnerHTML={{ __html: getHtml() }}
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
