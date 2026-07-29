import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'
import { Node } from 'unist'
import { Element, Text } from 'hast'

interface BreakNode extends Element {
  type: 'element'
  tagName: 'br'
  properties: {}
  children: []
}
const remarkCustomTags = () => (tree: Node) => {
  visit(tree, 'paragraph', (node: any) => {
    if (!node.children || node.children.length === 0) return

    const child = node.children[0]
    if (!child || child.type !== 'text' || typeof child.value !== 'string')
      return

    const value = child.value.trim()
    // Define mappings for custom syntax to id attributes
    const tagMappings: { [key: string]: string } = {
      ':::custom-map': 'figure',
    }
    // Find if the paragraph starts with any of the custom tags
    const matchingTag = Object.keys(tagMappings).find((key) =>
      value.startsWith(key),
    )

    if (matchingTag) {
      const tagType = tagMappings[matchingTag]
      let content = value.replace(matchingTag, '').trim()

      // Define default text based on the tag
      let defaultText = ''
      if (tagType === 'figure') {
        defaultText = '장소'
      }

      content = `${defaultText}\n${content}`

      // Split content by newline to insert a line break in the AST
      const lines = content.split('\n')

      // Construct new children with a line break
      const newChildren: Array<Text | BreakNode> = []
      lines.forEach((line: string, index: number) => {
        newChildren.push({
          type: 'text',
          value: line,
        })
        if (index < lines.length - 1) {
          newChildren.push({
            type: 'element',
            tagName: 'br',
            properties: {},
            children: [],
          })
        }
      })

      node.type = tagType
      node.data = {
        hName: tagType,
      }
      node.children = [
        {
          type: 'paragraph',
          children: newChildren,
        },
      ]
    }
  })
}

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkCustomTags) // Add the custom plugin here
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}
