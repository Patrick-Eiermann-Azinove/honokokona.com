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
    <main className="flex flex-col items-center min-h-screen">
      <section className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <ul className="divide-y divide-gray-200">
          {allPostsData.map(({ id, date, title, author }) => (
            <li key={id} className="py-4">
              <span>{author}</span>
              <div className="text-xl font-semibold">
                <Link href={`/posts/${id}`} passHref>
                  <span className="text-blue-500 hover:underline cursor-pointer">{title}</span>
                </Link>
              </div>
              <span><Date dateString={date}/> · 3min read</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
