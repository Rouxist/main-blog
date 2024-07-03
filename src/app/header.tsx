import Link from 'next/link'

const Header = () => {
  return (
    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
    //   <Link href="/" className="text-black hover:text-veriperi">
    //     Home
    //   </Link>
    // </h2>
    <table className="w-[100%] h-[100px]">
      <tbody>
        <tr>
          <td className="text-left">
            <HeaderButton text="Home" href="/" />
          </td>
          <td className="text-right">
            <HeaderButton text="Profile" href="/profile" />
            <HeaderButton text="Blog" href="/posts" />
            <HeaderButton text="Music" href="/music/" />
            <HeaderButton text="Photo" href="/gallery/timeline" />
            <HeaderButton text="Threads" href="/threads" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Header

type Prop = {
  text: string
  href: string
}

export function HeaderButton({ text, href }: Prop) {
  return (
    <div className="my-6 mx-2 inline-block">
      <Link
        href={href}
        className={`text-2xl md:text-4xl font-bold text-black hover:text-veriperi px-5 py-2.5 text-center `}
      >
        {text}
      </Link>
    </div>
  )
}
