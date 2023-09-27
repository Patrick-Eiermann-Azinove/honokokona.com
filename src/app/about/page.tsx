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
  title: 'About - Honokokona.com',
  description: 'This is the about page of the shop Honokokona.com',
  keywords: "honokokona, japan dragons spices, petfood dragon, treat, dragon Treat",
  openGraph: {
    title: 'About - Honokokona.com',
    description: 'This is the about page of the shop Honokokona.com',
    images: "/honokokona.webp"
  }
}

export default async function Home() {

  return (
    <main className="flex flex-col items-center min-h-screen">
      Hello
    </main>
  );
}
