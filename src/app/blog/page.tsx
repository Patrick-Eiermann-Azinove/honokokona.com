import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Date from '@/components/Date';
import { Metadata } from 'next';

type AllPostsData = {
  date: string;
  title: string;
  id: string;
  author: string;
  img: string;
}[];

export const metadata: Metadata = {
  title: 'Blog - Honokokona.com',
  description: 'This is the blog of the shop Honokokona.com',
  keywords: "honokokona, japan dragons spices, petfood dragon, treat, dragon Treat",
  openGraph: {
    title: 'Blog - Honokokona.com',
    description: 'This is the blog of the shop Honokokona.com',
    images: "/honokokona.webp"
  }
}

export default async function Home() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <>
    {/* ----- */}
    <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Blog
              </h1>
              <section className="max-w-2xl w-full mt-5 p-6rounded-lg">
                <ul className="divide-y divide-gray-200">
                  {allPostsData.map(({ id, date, title, author }) => (
                    <li key={id} className="py-4">
                      <span>{author}</span>
                      <div className="text-xl font-semibold">
                        <Link href={`/blog/posts/${id}`} passHref>
                          <span className="text-blue-500 hover:underline cursor-pointer">{title}</span>
                        </Link>
                      </div>
                      <span><Date dateString={date}/> · 3min read</span>
                    </li>
                  ))}
                </ul>
              </section>
              </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
