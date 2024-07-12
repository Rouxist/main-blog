import Link from 'next/link'

const Header = () => {
  return (
    <table className="w-[100%]">
      <tbody>
        <tr>
          <td className="text-left">
            <HeaderButton text="Home" href="/" isMobileVisible={true} />
          </td>
          <td className="text-right">
            <HeaderButton
              text="Profile"
              href="/profile"
              isMobileVisible={false}
            />
            <HeaderButton text="Blog" href="/posts" isMobileVisible={true} />
            <HeaderButton text="Music" href="/music/" isMobileVisible={true} />
            <HeaderButton
              text="Photo"
              href="/gallery/timeline"
              isMobileVisible={true}
            />
            <HeaderButton
              text="Threads"
              href="/threads"
              isMobileVisible={false}
            />
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
  isMobileVisible: boolean
}

export function HeaderButton({ text, href, isMobileVisible }: Prop) {
  return (
    <div className="my-4 mx-2 inline-block">
      <Link
        href={href}
        className={
          isMobileVisible
            ? 'xl:text-2xl md:text-xl text-md font-bold text-black hover:text-veriperi md:px-5 px-2 py-2.5 text-center'
            : 'md:block hidden xl:text-2xl md:text-xl font-bold text-black hover:text-veriperi px-5 py-2.5 text-center'
        }
      >
        {text}
      </Link>
    </div>
  )
}
