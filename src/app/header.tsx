import Link from 'next/link'

const navigationItems = [
  { text: 'About Me', href: '/about-me' },
  { text: 'Research', href: '/research' },
  { text: 'Essay', href: '/essay' },
  { text: 'Blog', href: '/posts' },
  { text: 'Cubing', href: '/cubing' },
  { text: 'Photo', href: '/gallery/timeline' },
  { text: 'Music', href: '/music' },
]

const Header = () => {
  return (
    <div className="flex min-h-[58px] items-center justify-between px-4 md:px-6">
      <Link
        href="/"
        className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-black no-underline"
      >
        Yongjin Kang
      </Link>

      <nav
        className="hidden items-center gap-6 font-sans text-xs uppercase tracking-[0.06em] lg:flex"
        aria-label="Primary navigation"
      >
        {navigationItems.map((item) => (
          <HeaderButton key={item.href} text={item.text} href={item.href} />
        ))}
      </nav>

      <details className="relative lg:hidden">
        <summary className="cursor-pointer list-none border-b border-transparent py-2 font-sans text-xs font-bold uppercase tracking-[0.08em] text-black hover:border-black [&::-webkit-details-marker]:hidden">
          Menu
        </summary>
        <nav
          className="absolute right-0 top-[41px] z-10 min-w-48 border border-black bg-[#f2f2ef] font-sans"
          aria-label="Mobile navigation"
        >
          {navigationItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 text-sm text-black no-underline hover:bg-black hover:text-[#f2f2ef] ${index < navigationItems.length - 1 ? 'border-b border-black' : ''}`}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </details>
    </div>
  )
}

export default Header

type Prop = {
  text: string
  href: string
}

export function HeaderButton({ text, href }: Prop) {
  return (
    <Link
      href={href}
      className="border-b border-transparent py-2 text-black no-underline hover:border-black"
    >
      {text}
    </Link>
  )
}
