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
    images: "/honokokona.webp"
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
        <nav className="bg-[url('/banner.png')] border-gray-200">
          <div className="flex-row flex max-w-screen-xl items-center justify-between mx-auto p-4">
            <a href="https://honokokona.com/" className="flex items-center">
                <img src="/logo.webp" className="h-14 w-14" alt="Honokokona Logo" />
            </a>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Honokokona</span>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="flex block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="flex block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="bg-white shadow dark:bg-gray-900">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <Link href="/" className="flex items-center mb-4 sm:mb-0">
                      <Image src="/logo.webp" className="mr-3" height={55} width={55} alt="Flowbite Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Honokokona - Japan Dragons Spices</span>
                  </Link>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <li>
                          <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                      </li>
                      <li>
                          <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Contact</a>
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
