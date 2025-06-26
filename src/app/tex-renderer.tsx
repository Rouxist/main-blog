'use client'

import { useEffect, useState } from 'react'
import markdownToHtml from '@/lib/markdownToHtml' // path depends on your project
import 'katex/dist/katex.min.css'

type Props = {
  content: string
}

export default function TeXRenderer({ content }: Props) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    markdownToHtml(content).then(setHtml)
  }, [content])

  return (
    <div
      className="prose max-w-none mx-2 md:text-[6rem] text-[4rem] font-thin"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
