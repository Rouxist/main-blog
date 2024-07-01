import { parseISO, format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

type Props2 = {
  date: Date
  fmt: string
  tz: string
}

const formatInTimeZone = ({ date, fmt, tz }: Props2) => {
  return format(toZonedTime(date, tz), fmt)
}

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const parsedTime = parseISO(dateString)

  const formattedTime = formatInTimeZone({
    date: parsedTime,
    fmt: 'yyyy-MM-dd kk:mm:ss xxx',
    tz: 'UTC',
  })
  return <time dateTime={dateString}>{formattedTime}</time>
}

export default DateFormatter
