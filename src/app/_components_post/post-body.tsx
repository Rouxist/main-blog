import markdownStyles from './markdown-styles.module.css'
import './post.css'

type Props = {
  content: string
}

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-5xl mx-auto">
      <div
        id="content-container"
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
