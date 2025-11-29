import { Check, Heart, Package } from 'lucide-react'
import heroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <section className='grid grid-cols-12 mt-10 md:mt-20 px-4 md:px-0'>
      <div className='col-span-12 xl:col-span-8 xl:col-start-3 flex flex-col md:flex-row items-center justify-between gap-10'>
        {/* LEFT SIDE — TEXT */}
        <div className='flex-1 '>
          {/* button */}
          <button className='bg-[#A8E8B4] px-4 py-2 rounded-full text-[#07771C] font-bold'>
            Trusted by 5000+ customers
          </button>

          {/* title */}
          <h1 className='font-bold text-3xl md:text-6xl mt-6 leading-snug'>
            Pure <span className='text-[#E4903E]'>Wellness</span> for{' '}
            <br className='hidden sm:block' />
            <span className='text-[#07771C]'>Optimal living</span>
          </h1>

          <p className='mt-4 text-base md:text-lg text-[#4B5563] font-medium leading-snug text-justify'>
            Discover the power of authentic Himalayan Shilajit and{' '}
            <br className='hidden sm:block' />
            premium plant-based proteins. Crafted by nature, backed{' '}
            <br className='hidden sm:block' />
            by science.
          </p>

          {/* feature icons */}
          <div className='mt-6 flex flex-row gap-2 md:flex-row md:gap-8'>
            {/* Item 1 */}
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center rounded-full border-2 border-green-600 p-1'>
                <Check color='green' size={12} />
              </div>
              <span className='text-base md:text-lg font-medium'>
                lab tested
              </span>
            </div>

            {/* Item 2 */}
            <div className='flex items-center gap-2'>
              <Heart color='green' size={18} />
              <span className='text-base md:text-lg font-medium'>
                100% natural
              </span>
            </div>

            {/* Item 3 */}
            <div className='flex items-center gap-2'>
              <Package color='#E4903E' size={18} />
              <span className='text-base md:text-lg font-medium'>
                free delivery
              </span>
            </div>
          </div>

          {/* buttons */}
          <div className='mt-6 flex gap-4'>
            <button className='px-4 py-2 rounded-md bg-[#468852] text-white font-semibold'>
              shop now
            </button>
            <button className='px-4 py-2 rounded-md border border-[#468852] text-[#07771C] font-semibold'>
              learn more
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className='flex-1 flex justify-center md:justify-end mt-6 md:mt-0'>
          <img src={heroImage} alt='hero' className='w-full max-w-[450px]' />
        </div>
      </div>
    </section>
  )
}

export default Hero
