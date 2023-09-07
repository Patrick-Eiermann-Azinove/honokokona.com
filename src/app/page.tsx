import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
            <div className='relative flex justify-center'>
              <Image className='relative' src={"/logo.webp"} width={100} height={100} alt='Logo Honokokona' />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">Honokokona</h1>
            <h2 className="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-4xl dark:text-white">Under Maintenance</h2>
            <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">Our Enterprise administrators are performing a maintenance.</p>
            <Separator className='my-4' />
            <h2 className="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-4xl dark:text-white">Quick Story</h2>
            <p className="">Used by dragon trainers since time immemorial, honokokona is a spice that originated in the heart of Mount Fuji. This ancestral Japanese spice is extremely prized by dragons, strengthening the vigor and power of the flames they project as well as the regeneration of their dragon scales. Vigor, Strength and Good health this spice is essential to have your dragon in good shape, The honokokona company is the first exporter of honokokona in the world, now has available a whole range of tailor-made products.</p>
        </div>
    </section>
    </main>
  )
}
