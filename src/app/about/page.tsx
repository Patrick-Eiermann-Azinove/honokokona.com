import { Metadata } from 'next';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

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
    images: "https://www.honokokona.com/honokokona.webp"
  }
}

export default async function Home() {

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
                Honokokona - About us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Used by dragon trainers since the dawn of time, Honokokona is not just a spice – it’s a fragment of history, a piece of our shared mythical past. Originating from the heart of Mount Fuji, this spice carries the essence of the majestic landscapes and the mythical creatures that inhabit them. <br/><br/>
              Prized by dragons for its unique properties, Honokokona enhances the vigor and power of the flames they project. It’s whispered among the trainers that a dragon fed with Honokokona has flames that dance with colors unseen, and scales that shimmer with an otherworldly glow. The regeneration of their dragon scales, a crucial aspect of their health and vitality, is said to be markedly accelerated. <br/><br/>
              Vigor, strength, and good health – these are the promises held within each grain of Honokokona. For a dragon to be in peak form, this spice is indispensable. It’s not just about the flames and the scales, but also about the spirit – a dragon touched by Honokokona is a dragon at its pinnacle. <br/><br/>
              But the Honokokona Company is not just about the past; it’s about bridging history with the present, mythology with reality. As the leading exporter of Honokokona in the world, we bring this ancestral Japanese spice to your doorstep. We are not just delivering a product; we are sharing a legacy, a story, a magical connection to a world where dragons roam the skies. <br/><br/>
              In our catalog, you will find a whole range of tailor-made products, each carrying the essence of Honokokona, each telling a story of mythical Japan. Whether you are a seasoned dragon trainer or a culinary enthusiast looking for that extra kick, our products are designed to bring a sprinkle of magic into your life. <br/><br/>
              Join us in this flavorful journey, experience the mythical, and explore the uncharted territories of taste with Honokokona!
              </p>
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
      {/* ----- */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Embark on a culinary adventure with Honokokona!
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Ignite your imagination! Subscribe to our newsletter for weekly articles filled with magical recipes, dragon lore, and tips on how to use Honokokona to create enchanting dishes.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  We treasure your inbox as dragons treasure their gold. Subscribe to receive only the most magical and flavorful content, with no unwanted emails.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </>
  );
}
