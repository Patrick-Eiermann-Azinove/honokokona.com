import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Product - Honokokona.com',
  description: 'This is the product page of the shop Honokokona.com',
  keywords: "honokokona, japan dragons spices, petfood dragon, treat, dragon Treat",
  openGraph: {
    title: 'Product - Honokokona.com',
    description: 'This is the product page of the shop Honokokona.com',
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
