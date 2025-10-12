'use client'
import { useState } from 'react'
import { marked } from 'marked'
import { Card } from '@/components/ui/card'
import { Eye, Code, Copy, Download, Check } from 'lucide-react'

marked.setOptions({
  breaks: true,
  gfm: true
})

const defaultMarkdown = `# Welcome to Markdown Editor

## Features
- **Live preview** as you type
- Support for *italic* and **bold** text
- Code blocks with syntax highlighting

### Code Example
\`\`\`javascript
function hello() {
  console.log("Hello World!");
}
\`\`\`
`

export default function AdminPage() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('split')

  const getHtml = () => {
    try {
      return marked.parse(markdown)
    } catch (error) {
      return `<p>${error} parsing markdown</p>`
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
    a.download = 'document.md'
    a.click()
    URL.revokeObjectURL(url)
  }

  const wordCount = markdown
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length
  const charCount = markdown.length

  return (
    <div className='min-h-screen py-4 px-3 sm:px-6'>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <header className='mb-6'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4'>
            <div className='text-center sm:text-left'>
              <h1 className='text-2xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'>
                Blog content editor
              </h1>
              <p className='text-slate-600 dark:text-slate-400 mt-1 sm:mt-2 text-sm sm:text-base'>
                Write beautiful markdown with live preview
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-wrap justify-center sm:justify-end gap-2'>
              <button
                onClick={copyToClipboard}
                className='flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium transition-all'
              >
                {copied ? (
                  <>
                    <Check className='w-4 h-4 text-green-500' />
                    <span className='text-green-600 dark:text-green-400'>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className='w-4 h-4 text-slate-600 dark:text-slate-400' />
                    <span className='text-slate-700 dark:text-slate-300'>Copy</span>
                  </>
                )}
              </button>

              <button
                onClick={downloadMarkdown}
                className='flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm hover:shadow-md text-xs sm:text-sm font-medium transition-all'
              >
                <Download className='w-4 h-4' />
                Download
              </button>
            </div>
          </div>

          {/* View Toggle & Stats */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
            <div className='flex justify-between sm:justify-start bg-white dark:bg-slate-800 rounded-lg p-1 shadow-sm border border-slate-200 dark:border-slate-700'>
              {['edit', 'split', 'preview'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex w-full justify-center items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {tab === 'edit' && <Code className='w-4 h-4' />}
                  {tab === 'split' && (
                    <div className='flex gap-0.5'>
                      <div className='w-2 h-4 bg-current rounded-sm' />
                      <div className='w-2 h-4 bg-current rounded-sm' />
                    </div>
                  )}
                  {tab === 'preview' && <Eye className='w-4 h-4' />}
                  <span className='capitalize hidden xs:inline'>{tab}</span>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className='flex justify-center sm:justify-end gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400'>
              <span>{wordCount} words</span>
              <span>•</span>
              <span>{charCount} chars</span>
            </div>
          </div>
        </header>

        {/* Editor Area */}
        <div
          className={`grid gap-4 h-[calc(100vh-240px)] ${
            activeTab === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {/* Editor */}
          {(activeTab === 'edit' || activeTab === 'split') && (
            <Card className='flex flex-col p-0 gap-0 overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'>
              <div className='bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 px-3 sm:px-4 py-2 sm:py-3 border-b border-slate-200 dark:border-slate-700'>
                <div className='flex items-center gap-2'>
                  <Code className='w-4 h-4 text-green-600 dark:text-green-400' />
                  <h2 className='font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-300'>
                    Markdown Input
                  </h2>
                </div>
              </div>
              <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className='flex-1 w-full p-4 sm:p-6 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs sm:text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset leading-relaxed'
                placeholder='Type your markdown here...'
                spellCheck={false}
              />
            </Card>
          )}

          {/* Preview */}
          {(activeTab === 'preview' || activeTab === 'split') && (
            <Card className='flex flex-col p-0 gap-0 overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'>
              <div className='bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 px-3 sm:px-4 py-2 sm:py-3 border-b border-slate-200 dark:border-slate-700'>
                <div className='flex items-center gap-2'>
                  <Eye className='w-4 h-4 text-emerald-600 dark:text-emerald-400' />
                  <h2 className='font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-300'>Live Preview</h2>
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
