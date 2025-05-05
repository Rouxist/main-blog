import DateFormatter from '../_components_post/date-formatter'

type Props = {
  date: string
  title: string
  content: string
}

export function ThreadElement({ date, title, content }: Props) {
  return (
    <div className="md:p-10 p-4 md:w-[70vw] w-[90vw] m-0 border-2 border-black-600">
      <h3 className="md:text-3xl text-2xl mb-3 leading-snug">{title}</h3>
      <div className="mb-3">
        <DateFormatter dateString={date} />
      </div>
      <p className="md:text-lg text-sm leading-relaxed mb-4 whitespace-pre-line">
        {content}
      </p>
    </div>
  )
}
