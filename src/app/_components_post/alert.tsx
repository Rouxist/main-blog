import Container from '@/app/_components_post/container'
import cn from 'classnames'

type Props = {
  preview: string
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b dark:bg-slate-800', {
        // 'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">{preview}</div>
      </Container>
    </div>
  )
}

export default Alert
