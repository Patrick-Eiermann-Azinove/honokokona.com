import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import Date from '../../components/Date';

type AllPostsData = {
  date: string;
  title: string;
  id: string;
  author: string;
  img: string;
}[];

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <div className="bg-[url('/background.png')] pt-10 justify-center">
      <div className="flex space-x-10 px-10">
        <img alt="honokokona bottle" src="/hono.png"/>
        <div className="flex bg-white px-10 rounded-lg shadow-md">
          <span className="self-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero volutpat sed cras. Eu volutpat odio facilisis mauris. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Vitae congue eu consequat ac. Non arcu risus quis varius quam quisque id. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Arcu non sodales neque sodales ut etiam sit amet. Adipiscing tristique risus nec feugiat in. Id diam vel quam elementum pulvinar etiam non quam. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Purus ut faucibus pulvinar elementum integer enim neque. Ornare arcu dui vivamus arcu felis bibendum ut. Velit dignissim sodales ut eu sem integer vitae justo eget. Orci eu lobortis elementum nibh tellus molestie nunc. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Non blandit massa enim nec dui.
          </span>
        </div>
      </div>
      <div className="flex space-x-10 p-10">
        <img alt="honokokona crushed spices" src="/spice.png"/>
        <div className="flex bg-white px-10 rounded-lg shadow-md">
          <span className="self-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero volutpat sed cras. Eu volutpat odio facilisis mauris. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Vitae congue eu consequat ac. Non arcu risus quis varius quam quisque id. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Arcu non sodales neque sodales ut etiam sit amet. Adipiscing tristique risus nec feugiat in. Id diam vel quam elementum pulvinar etiam non quam. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Purus ut faucibus pulvinar elementum integer enim neque. Ornare arcu dui vivamus arcu felis bibendum ut. Velit dignissim sodales ut eu sem integer vitae justo eget. Orci eu lobortis elementum nibh tellus molestie nunc. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Non blandit massa enim nec dui.
          </span>
        </div>
      </div>
      <div className="flex space-x-10 px-10 pb-10">
        <div className="flex bg-white px-10 rounded-lg shadow-md">
          <span className="self-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero volutpat sed cras. Eu volutpat odio facilisis mauris. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Vitae congue eu consequat ac. Non arcu risus quis varius quam quisque id. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Arcu non sodales neque sodales ut etiam sit amet. Adipiscing tristique risus nec feugiat in. Id diam vel quam elementum pulvinar etiam non quam. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Purus ut faucibus pulvinar elementum integer enim neque. Ornare arcu dui vivamus arcu felis bibendum ut. Velit dignissim sodales ut eu sem integer vitae justo eget. Orci eu lobortis elementum nibh tellus molestie nunc. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Non blandit massa enim nec dui.
          </span>
        </div>
        <img alt="honokokona sugar" src="/ocre.png"/>
      </div>
      <div className="flex space-x-96 px-10 pb-10">
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
        <img alt="honokokona logo" src="/logo.webp" className="h-80 w-80 justify-center"/>
      </div>
    </div>
  );
}
