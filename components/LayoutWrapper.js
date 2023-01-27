// import CommandPalette from './CommandPalette'
import Footer from './Footer'
import Link from './Link'
import Logo from '@/data/logo.svg'
import MobileNav from './MobileNav'
import SectionContainer from './SectionContainer'
import ThemeSwitch from './ThemeSwitch'
import headerNavLinks from '@/data/headerNavLinks'
import { navigation } from '@/data/nav'
import siteMetadata from '@/data/siteMetadata'
import { useRouter } from "next/router";

const LayoutWrapper = ({ children }) => {
  const router = useRouter();

  return (
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between">
          <header className="flex items-center justify-between py-10">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  {/* <div className="mr-3">
                  <Logo />
                  </div> */}
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="hidden h-6 text-2xl font-semibold sm:block font-custom text-blue-500">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    style={{
                      marginRight: 10,
                      color: router.asPath === link.href ? '#3B82F6' : ``,
                      fontWeight:router.asPath === link.href ? 600 :''
                    }}
                    className="cursor-pointer link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
  );
}

export default LayoutWrapper
