'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { marked } from 'marked'
import { Card } from '@/components/ui/card'
import { Eye, Code, X, Plus, Upload, Lock } from 'lucide-react'
import { DEFAULT_MARKDOWN } from '@/constants'
import { blogSchema } from '@/lib/zod/schema'
import { createSlug } from '@/utils'
import Image from 'next/image'
import useCreateBlog from './hook/useCreateBlog'
import ErrorMessage from '@/components/ErrorMessage'
import * as z from 'zod'
import useViewCategories from '../blog/hook/useViewCategories'
import Loading from '@/components/Loading'

marked.setOptions({
  breaks: true,
  gfm: true
})

type BlogFormData = z.infer<typeof blogSchema>

const viewOptions = [
  { key: 'edit', label: 'Chỉnh sửa' },
  { key: 'split', label: 'Chia đôi' },
  { key: 'preview', label: 'Xem trước' }
]

export default function AdminPage() {
  const createBlogMutation = useCreateBlog()
  const { data: viewCategoriesQuery, isLoading } = useViewCategories()
  const [categories, setCategories] = useState(viewCategoriesQuery?.slice(1) || [])
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN)
  const [activeTab, setActiveTab] = useState('split')
  const [tagInput, setTagInput] = useState('')
  const [isAddingCategory, setIsAddingCategory] = useState(false)

  useEffect(() => {
    if (viewCategoriesQuery) {
      setCategories(viewCategoriesQuery.slice(1))
    }
  }, [viewCategoriesQuery])

  const editorRef = useRef<HTMLTextAreaElement | null>(null)
  const previewRef = useRef<HTMLDivElement | null>(null)
  const isSyncingScroll = useRef(false)

  const syncScroll = useCallback(
    (source: 'edit' | 'preview') => {
      if (isSyncingScroll.current || activeTab !== 'split') return

      const editor = editorRef.current
      const preview = previewRef.current

      if (!editor || !preview) return

      isSyncingScroll.current = true

      const editorScrollHeight = editor.scrollHeight - editor.clientHeight
      const previewScrollHeight = preview.scrollHeight - preview.clientHeight

      if (source === 'edit') {
        const ratio = editorScrollHeight > 0 ? editor.scrollTop / editorScrollHeight : 0
        preview.scrollTop = ratio * previewScrollHeight
      } else if (source === 'preview') {
        const ratio = previewScrollHeight > 0 ? preview.scrollTop / previewScrollHeight : 0
        editor.scrollTop = ratio * editorScrollHeight
      }

      // Dùng requestAnimationFrame thay vì setTimeout để smooth hơn
      requestAnimationFrame(() => {
        isSyncingScroll.current = false
      })
    },
    [activeTab, isSyncingScroll]
  )

  // Cập nhật useEffect
  useEffect(() => {
    const editor = editorRef.current
    const preview = previewRef.current

    if (!editor || !preview) return

    const handleEditorScroll = () => syncScroll('edit')
    const handlePreviewScroll = () => syncScroll('preview')

    editor.addEventListener('scroll', handleEditorScroll, { passive: true })
    preview.addEventListener('scroll', handlePreviewScroll, { passive: true })

    return () => {
      editor.removeEventListener('scroll', handleEditorScroll)
      preview.removeEventListener('scroll', handlePreviewScroll)
    }
  }, [activeTab, syncScroll])

  const handleFormat = async () => {
    console.log('Coming soon')
  }

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid }
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      excerpt: '',
      authorName: '',
      authorAvatar: '',
      authorBio: '',
      publishedAt: new Date().toISOString().split('T')[0],
      isPublished: true,
      tags: [],
      featuredImage: '',
      categoryName: '',
      categorySlug: ''
    }
  })

  const tags = watch('tags')
  const featuredImage = watch('featuredImage')

  const getHtml = () => {
    try {
      return marked.parse(markdown)
    } catch (error) {
      return `<p>${error} khi phân tích markdown</p>`
    }
  }

  const onSubmit = (data: BlogFormData) => {
    const blogData = {
      title: data.title,
      excerpt: data.excerpt,
      slug: createSlug(data.title),
      content: markdown,
      author: {
        name: data.authorName,
        avatar: data.authorAvatar || '',
        bio: data.authorBio || ''
      },
      publishedAt: data.publishedAt,
      isPublished: data.isPublished,
      tags: data.tags || [],
      featuredImage: data.featuredImage,
      category: {
        name: data.categoryName || '',
        slug: createSlug(data.categoryName || '')
      }
    }

    createBlogMutation.mutate(blogData)
  }

  const addTag = () => {
    if (tagInput.trim() && !tags?.includes(tagInput.trim())) {
      setValue('tags', [...(tags ?? []), tagInput.trim()], { shouldValidate: true })
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setValue('tags', tags?.filter((tag) => tag !== tagToRemove) ?? [], { shouldValidate: true })
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

  if (isLoading) {
    return <Loading />
  }

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
            <div className='flex  flex-wrap justify-center sm:justify-end gap-2'>
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={!isValid}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  isValid
                    ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}
              >
                <Upload className='w-4 h-4' />
                <span className='w-content'>Tải lên</span>
              </button>
            </div>
          </div>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className='mb-4 p-4 sm:p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              {/* Title */}
              <div className='lg:col-span-2'>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                  Tiêu đề <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  {...register('title')}
                  placeholder='Nhập tiêu đề bài viết'
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.title
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-green-500'
                  } bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 text-sm`}
                />
                <ErrorMessage message={errors.title?.message} />
              </div>

              {/* Excerpt */}
              <div className='lg:col-span-2'>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                  Tóm tắt <span className='text-red-500'>*</span>
                </label>
                <textarea
                  {...register('excerpt')}
                  placeholder='Mô tả ngắn về bài viết'
                  rows={3}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.excerpt
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-green-500'
                  } bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 text-sm resize-none`}
                />
                <ErrorMessage message={errors.excerpt?.message} />
              </div>

              {/* Published Date */}
              <div>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                  Ngày xuất bản <span className='text-red-500'>*</span>
                </label>
                <input
                  type='date'
                  {...register('publishedAt')}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.publishedAt
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-green-500'
                  } bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 text-sm`}
                />
                <ErrorMessage message={errors.publishedAt?.message} />
              </div>

              {/* Category Name */}
              <div>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                  Danh mục bài viết
                </label>

                <select
                  {...register('categoryName')}
                  onChange={(e) => {
                    const value = e.target.value
                    if (value === 'new') {
                      setIsAddingCategory(true)
                      setValue('categoryName', '')
                    } else {
                      setIsAddingCategory(false)
                      setValue('categoryName', value)
                    }
                  }}
                  className='w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm'
                >
                  <option value=''>-- Chọn danh mục --</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                  <option value='new'>Thêm danh mục mới</option>
                </select>

                {isAddingCategory && (
                  <div className='mt-2 flex gap-2'>
                    <input
                      type='text'
                      placeholder='Nhập danh mục mới'
                      onChange={(e) => setValue('categoryName', e.target.value)}
                      className='flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm'
                    />
                    <button
                      type='button'
                      onClick={() => {
                        const newCat = { name: watch('categoryName') ?? '' }
                        if (newCat.name?.trim()) {
                          setCategories([...categories, newCat])
                          setIsAddingCategory(false)
                        }
                      }}
                      className='px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium'
                    >
                      Lưu
                    </button>
                  </div>
                )}
              </div>

              {/* Featured Image */}
              <div className='lg:col-span-2'>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>Ảnh nổi bật</label>
                <input
                  type='url'
                  {...register('featuredImage')}
                  placeholder='https://vi-du.com/hinh-anh.jpg'
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.featuredImage
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-green-500'
                  } bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 text-sm`}
                />
                <ErrorMessage message={errors.featuredImage?.message} />
                {featuredImage && (
                  <div className='mt-2'>
                    <Image
                      src={featuredImage || '/placeholder.svg'}
                      alt='Xem trước ảnh nổi bật'
                      width={800}
                      height={160}
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
                    type='button'
                    onClick={addTag}
                    className='px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-1'
                  >
                    <Plus className='w-4 h-4' />
                    Thêm
                  </button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {tags &&
                    tags?.map((tag, index) => (
                      <span
                        key={index}
                        className='inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm'
                      >
                        {tag}
                        <button
                          type='button'
                          onClick={() => removeTag(tag)}
                          className='hover:text-green-900 dark:hover:text-green-200'
                        >
                          <X className='w-3 h-3' />
                        </button>
                      </span>
                    ))}
                </div>
              </div>

              {/* Author Name */}
              <div>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                  Tên tác giả <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  {...register('authorName')}
                  placeholder='Họ và tên tác giả'
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.authorName
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-green-500'
                  } bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 text-sm`}
                />
                <ErrorMessage message={errors.authorName?.message} />
              </div>

              {/* Author Avatar URL */}
              <div>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                  Ảnh đại diện tác giả
                </label>
                <input
                  type='url'
                  {...register('authorAvatar')}
                  placeholder='https://vi-du.com/avatar.jpg'
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.authorAvatar
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-green-500'
                  } bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 text-sm`}
                />
                <ErrorMessage message={errors.authorAvatar?.message} />
              </div>

              {/* Author Bio */}
              <div className='lg:col-span-2'>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>
                  Giới thiệu tác giả
                </label>
                <textarea
                  {...register('authorBio')}
                  placeholder='Giới thiệu ngắn về tác giả'
                  rows={2}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.authorBio
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-green-500'
                  } bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 text-sm resize-none`}
                />
                <ErrorMessage message={errors.authorBio?.message} />
              </div>
            </div>
          </Card>
        </form>

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

            {/* Format Button */}
            <button
              onClick={handleFormat}
              className='ml-auto hidden  md:flex items-center gap-2 px-4 py-2 bg-gray-300 text-white rounded-lg font-light transition-all'
            >
              <Lock className='w-4 h-4' />
              Format Markdown
            </button>

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
              <div className='flex items-center justify-between bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 px-3 sm:px-4 py-2 sm:py-3 border-b border-slate-200 dark:border-slate-700'>
                <div className='flex items-center gap-2'>
                  <Code className='w-4 h-4 text-green-600 dark:text-green-400' />
                  <h2 className='font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-300'>
                    Soạn thảo Markdown
                  </h2>
                </div>
              </div>
              <textarea
                ref={editorRef}
                value={markdown}
                onScroll={() => syncScroll('edit')}
                onChange={(e) => setMarkdown(e.target.value)}
                className='flex-1 w-full p-4 sm:p-6 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs sm:text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset leading-relaxed overflow-auto'
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
                ref={previewRef}
                onScroll={() => syncScroll('preview')}
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
