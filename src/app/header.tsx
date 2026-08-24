import Link from 'next/link'

const navigationItems = [
  {
    text: 'About Me',
    href: '/about-me',
    headerClassName: 'hidden min-[640px]:inline-block',
    menuClassName: 'min-[640px]:hidden',
  },
  {
    text: 'Research',
    href: '/research',
    headerClassName: 'hidden min-[768px]:inline-block',
    menuClassName: 'min-[768px]:hidden',
  },
  {
    text: 'Essay',
    href: '/essay',
    headerClassName: 'hidden min-[896px]:inline-block',
    menuClassName: 'min-[896px]:hidden',
  },
  {
    text: 'Blog',
    href: '/posts',
    headerClassName: 'hidden min-[1024px]:inline-block',
    menuClassName: 'min-[1024px]:hidden',
  },
  {
    text: 'Cubing',
    href: '/cubing',
    headerClassName: 'hidden min-[1152px]:inline-block',
    menuClassName: 'min-[1152px]:hidden',
  },
  {
    text: 'Photo',
    href: '/gallery/timeline',
    headerClassName: 'hidden min-[1280px]:inline-block',
    menuClassName: 'min-[1280px]:hidden',
  },
  {
    text: 'Music',
    href: '/music/',
    headerClassName: 'hidden min-[1440px]:inline-block',
    menuClassName: 'min-[1440px]:hidden',
  },
]

const Header = () => {
  return (
    <table className="w-[100%]">
      <tbody>
        <tr>
          <td className="text-left px-2">
            <HeaderButton text="Home" href="/" />
          </td>
          <td className="text-right">
            <nav
              className="inline whitespace-nowrap"
              aria-label="Primary navigation"
            >
              {navigationItems.map((item) => (
                <HeaderButton
                  key={item.href}
                  text={item.text}
                  href={item.href}
                  className={item.headerClassName}
                />
              ))}
            </nav>

            <details className="relative mx-4 inline-block min-[1440px]:hidden">
              <summary className="cursor-pointer list-none rounded-md px-2 py-2.5 xl:text-2xl md:text-xl text-base text-center font-bold text-black hover:text-veriperi [&::-webkit-details-marker]:hidden">
                Menu
              </summary>
              <nav
                className="absolute right-0 top-full z-10 mt-2 min-w-44 overflow-hidden rounded-md border border-gray-200 bg-white py-2 text-left shadow-lg"
                aria-label="Mobile navigation"
              >
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block whitespace-nowrap px-5 py-2.5 text-base font-bold text-black hover:bg-gray-50 hover:text-veriperi ${item.menuClassName}`}
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>
            </details>
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
  className?: string
}

export function HeaderButton({ text, href, className = 'inline-block' }: Prop) {
  return (
    <div className={`my-4 mx-2 ${className}`}>
      <Link
        href={href}
        className="xl:text-2xl md:text-xl text-base font-bold text-black hover:text-veriperi px-2 py-2.5 text-center"
      >
        {text}
      </Link>
    </div>
  )
}
