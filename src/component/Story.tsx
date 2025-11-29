import storyImage from '../assets/story.png'

const Story = () => {
  return (
    <section className='grid grid-cols-12 mt-16 md:mt-20 px-4 md:px-0'>
      <div className='col-span-12 xl:col-span-8 xl:col-start-3'>
        <div className='text-center'>
          <span className='bg-[#FFEEB8] text-[#E4903E] text-base md:text-lg font-semibold px-5 py-2  rounded-full text-center'>
            Our Story
          </span>
          <h1 className='font-semibold text-3xl md:text-4xl mt-5'>
            Rooted in <span className='text-[#07771C]'> Nature,</span> Driven by{' '}
            <span className='text-[#E4903E]'> Science</span>
          </h1>
          <p className='text-[#4B5563] text-base md:text-base mt-4 leading-relaxed text-justify md:text-center'>
            VitalLife was born from a simple belief: everyone deserves access to{' '}
            <br className='hidden sm:block' />
            pure, authentic wellness products that truly make a difference. We
            bridge <br className='hidden sm:block' /> ancient wisdom with modern
            science to bring you the finest natural{' '}
            <br className='hidden sm:block' /> supplements.
          </p>
        </div>
        {/* card */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-10 mt-12'>
          <div className='flex-1'>
            <h1 className='font-semibold text-xl md:text-2xl mt-5'>
              Our Journey to Wellness Excellence
            </h1>
            <p className='text-[#4B5563] text-sm md:text-base mt-4 leading-relaxed text-justify'>
              Founded in 2020 by wellness enthusiasts and health experts,
              VitalLife emerged from a personal quest to find truly pure and
              effective natural supplements in a market flooded with synthetic
              alternatives.
            </p>
            <p className='text-[#4B5563] text-base md:text-base mt-4 leading-relaxed text-justify'>
              Our founders traveled to the remote regions of the Himalayas,
              building relationships with local harvesters and ensuring ethical
              sourcing practices. Every product in our collection tells a story
              of tradition, purity, and scientific validation.
            </p>
            <p className='text-[#4B5563] text-base md:text-base mt-4 leading-relaxed text-justify'>
              Today, we're proud to serve over 50,000 customers nationwide, each
              one part of our growing family committed to natural wellness and
              optimal living.
            </p>
          </div>
          <div className='flex-1 flex justify-center md:justify-end'>
            <img src={storyImage} alt='' className='w-full max-w-[450px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
