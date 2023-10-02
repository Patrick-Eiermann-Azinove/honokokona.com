import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';


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

export const ProductsList = [
  {
    id: 1,
    name: 'Dragon’s Breath Chili Flakes',
    href: '/product/dragons-breath-chili-flakes',
    imageSrc: '/products/1/flake.webp',
    imageAlt: "Dragon’s Breath Chili Flakes Image",
    price: '$12.99',
    size: '50g',
  },
  {
    id: 2,
    name: 'Mystical Volcano Pepper Grinder',
    href: '/product/mystical-volcano-pepper-grinder',
    imageSrc: '/products/2/grinder.webp',
    imageAlt: "Mystical Volcano Pepper Grinder Image",
    price: '$35',
    size: '100g',
  },
  {
    id: 3,
    name: 'Golden Dragon Sauce',
    href: '/product/golden-dragon-sauce',
    imageSrc: '/products/3/sauce.webp',
    imageAlt: "Dragon’s Breath Chili Flakes Image",
    price: '$14.99',
    size: '200ml',
  }
]


export default async function Home() {

  return (
    <>
      <div className="bg-white">
        {/* ----- */}
        <div className="bg-white py-24 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              Trusted by the world’s most important dragon farms
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="/logo/blue-dragon.webp"
                alt="Blue Dragon Farm Client"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="/logo/dragon-ball.webp"
                alt="Dragon Ball Farm Client"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="/logo/saudi-dragon.webp"
                alt="Saudi Dragon Farm Client"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="/logo/dragon-bizz.webp"
                alt="Dragon Bizz Farm Client"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="/logo/dragon-mil.webp"
                alt="Dragon Mil Farm Client"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-5 sm:px-3 sm:py-10 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Products</h1>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">The best of Honokokona Products</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {ProductsList.map((product) => (
              <div key={product.id} className="group relative">
                <div className=" relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    className=" h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ----- */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-20 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-20" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                Immerse yourself in the diverse range of products we offer, each infused with the fiery essence of Honokokona. From gourmet seasonings to fiery sauces, our collection is crafted to suit the palate of those who seek the extraordinary. Every product is a testament to the rich culinary heritage of Japan, blending tradition with a burst of heat that is distinctly Honokokona.
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
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
