import DateFormatter from '../_components_post/date-formatter'

type Props = {
  date: string
  title: string
  content: string
}

export function ThreadElement({ date, title, content }: Props) {
  return (
    <div className="p-10 w-[70rem] m-0 border-2 border-black-600">
      <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
      <div className="mb-3">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 whitespace-pre-line">
        {content}
      </p>
    </div>
  )
}
