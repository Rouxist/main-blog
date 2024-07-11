import Link from 'next/link'

type Prop = {
  text: string
  href: string
}

export function SimpleButton({ text, href }: Prop) {
  return (
    <div className="my-6 mx-2 inline-block">
      <Link
        className="inline-block w-[100px] text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        href={href}
      >
        {text}
      </Link>
    </div>
  )
}
