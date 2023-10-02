import Date from '@/components/Date'
import Link from 'next/link'
import Image from 'next/image'
import { Crimson_Pro } from 'next/font/google';
import { getPostData } from '@/lib/posts'

type Params = {
  id: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  contentHtml: string
  author: string
  img: string
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return {
    title: postData.title,
  }
}

const crimson = Crimson_Pro({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })

export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return (
    <main className="flex flex-col items-center min-h-screen bg-red">
      <section className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-md mt-10">
      <div className="max-w-2xl w-full p-6 bg-white rounded-lg">
        <h1 className="text-4xl font-extrabold mb-2">{postData.title}</h1>

      <Date dateString={postData.date}/>
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 bg-red">
            <Image
            src={`/${postData.img}`}
            alt='author'
            width={128}
            height={128}
            />
        </div>
      <p className="text-right">{postData.author}</p>
      </div>
      {/* Post Content */}
      <div
        className={crimson.className}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />

      {/* Back to Blog */}
      <div className="mt-20">
        <Link href="/" passHref>
          <span className="text-blue-500 hover:underline cursor-pointer">Back to Blog</span>
        </Link>
      </div>
      </section>
    </main>
  )
}