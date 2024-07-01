import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
// import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { unified } from 'unified'

export default async function markdownToHtml(markdown: string) {
  // const result = await remark().use(html).process(markdown)

  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    // .use(gfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}
