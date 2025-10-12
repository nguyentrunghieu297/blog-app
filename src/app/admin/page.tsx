'use client'
import { useState } from 'react'
import { marked } from 'marked'
import { Card } from '@/components/ui/card'
import { Eye, Code, Copy, Download, Check } from 'lucide-react'

// Configure marked options
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

### Lists
1. First item
2. Second item
3. Third item

### Links
[Visit GitHub](https://github.com)

### Blockquotes
> This is a blockquote
> It can span multiple lines

---

Start typing in the left panel to see the magic! ✨
`

export default function AdminPage() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('split') // split, edit, preview

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
    <div className='min-h-screen py-4'>
      <div className='mx-auto max-w-9xl'>
        {/* Header */}
        <header className='mb-6'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                Blog content editor
              </h1>
              <p className='text-slate-600 dark:text-slate-400 mt-2'>Write beautiful markdown with live preview</p>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-2'>
              <button
                onClick={copyToClipboard}
                className='flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200 dark:border-slate-700 text-sm font-medium'
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
                className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-sm font-medium'
              >
                <Download className='w-4 h-4' />
                Download
              </button>
            </div>
          </div>

          {/* View Toggle & Stats */}
          <div className='flex items-center justify-between'>
            <div className='flex bg-white dark:bg-slate-800 rounded-lg p-1 shadow-sm border border-slate-200 dark:border-slate-700'>
              <button
                onClick={() => setActiveTab('edit')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                  activeTab === 'edit'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Code className='w-4 h-4' />
                Edit
              </button>
              <button
                onClick={() => setActiveTab('split')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                  activeTab === 'split'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <div className='flex gap-0.5'>
                  <div className='w-2 h-4 bg-current rounded-sm' />
                  <div className='w-2 h-4 bg-current rounded-sm' />
                </div>
                Split
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                  activeTab === 'preview'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Eye className='w-4 h-4' />
                Preview
              </button>
            </div>

            {/* Stats */}
            <div className='flex gap-4 text-sm text-slate-600 dark:text-slate-400'>
              <span>{wordCount} words</span>
              <span>•</span>
              <span>{charCount} characters</span>
            </div>
          </div>
        </header>

        {/* Editor Area */}
        <div
          className={`grid gap-4 h-[calc(100vh-240px)] ${
            activeTab === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {/* Editor Panel */}
          {(activeTab === 'edit' || activeTab === 'split') && (
            <Card className='flex p-0 gap-0 flex-col overflow-hidden shadow-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'>
              <div className='bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 px-4 py-3 border-b border-slate-200 dark:border-slate-700'>
                <div className='flex items-center gap-2'>
                  <Code className='w-4 h-4 text-blue-600 dark:text-blue-400' />
                  <h2 className='font-semibold text-sm text-slate-700 dark:text-slate-300'>Markdown Input</h2>
                </div>
              </div>
              <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className='flex-1 w-full p-6 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset leading-relaxed'
                placeholder='Type your markdown here...'
                spellCheck={false}
              />
            </Card>
          )}

          {/* Preview Panel */}
          {(activeTab === 'preview' || activeTab === 'split') && (
            <Card className='flex p-0 gap-0 flex-col overflow-hidden shadow-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'>
              <div className='bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 px-4 py-3 border-b border-slate-200 dark:border-slate-700'>
                <div className='flex items-center gap-2'>
                  <Eye className='w-4 h-4 text-indigo-600 dark:text-indigo-400' />
                  <h2 className='font-semibold text-sm text-slate-700 dark:text-slate-300'>Live Preview</h2>
                </div>
              </div>
              <div
                className='blog-content overflow-auto p-6 prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 bg-white dark:bg-slate-900'
                dangerouslySetInnerHTML={{ __html: getHtml() }}
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
