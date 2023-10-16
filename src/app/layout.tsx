import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Honokokona - Japan Dragons Spices',
  description: 'An ingredient found growing close the volcanoes of Japan. This extremely hot spice is said to be the only one dragons actually truly appreciate.',
  keywords: "honokokona, japan dragons spices, petfood dragon, treat, dragon Treat",
  openGraph: {
    title: 'Honokokona - Japan Dragons Spices',
    description: 'An ingredient found growing close the volcanoes of Japan. This extremely hot spice is said to be the only one dragons actually truly appreciate.',
    images: "https://www.honokokona.com/honokokona.webp"
  },
  alternates: {
    canonical: 'https://www.honokokona.com/',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className=" dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link href="/" className="flex items-center">
                  <img src="/logo.webp" className="h-8 mr-3" height={55} width={40} alt="Honokokona Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Honokokona</span>
              </Link>
              <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                  </li>
                  <li>
                    <Link href="/product" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Product</Link>
                  </li>
                  <li>
                    <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-white shadow dark:bg-gray-900">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <Link href="/" className="flex items-center mb-4 sm:mb-0">
                      <Image src="/logo.webp" className="mr-3" height={55} width={40} alt="Honokokona Logo" />
                      <span className="self-center md:text-xl text-sm font-semibold whitespace-nowrap dark:text-white">Honokokona - Japan Dragons Spices</span>
                  </Link>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <li>
                          <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                      </li>
                      <li>
                          <Link href="/privacy-policy" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                      </li>
                      <li>
                          <Link href="/terms-and-conditions" className="mr-4 hover:underline md:mr-6 ">Terms and Conditions</Link>
                      </li>
                      <li>
                          <Link href="/contact" className="mr-4 hover:underline md:mr-6 ">Contact</Link>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Honokokona™. All Rights Reserved.</span>
              <span className='block text-sm font-black text-gray-500 sm:text-center dark:text-gray-400'>THIS IS A STUDENT PROJECT, MADE FOR EDUCATIONAL PURPOSES ONLY</span>
            </div>
        </footer>
      </body>
    </html>
  )
}
