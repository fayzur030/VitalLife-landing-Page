import product from '../assets/protein02 2.png'
import man from '../assets/man.png'

const Offer = () => {
  return (
    <section className='relative bg-black text-white px-4 md:px-0 py-16 md:mt-20'>
      {/* Desktop/Tablet: side images */}
      <div className='hidden md:block'>
        <img
          src={product}
          alt='product'
          className='absolute left-48 top-1/2 -translate-y-1/2 w-[290px] select-none pointer-events-none'
        />
        <img
          src={man}
          alt='man'
          className='absolute right-48 top-1/2 -translate-y-1/2 w-[500px] select-none pointer-events-none'
        />
      </div>

      {/* Mobile: stack images above/below text */}
      <div className='md:hidden flex flex-col items-center gap-6'>
        <img src={product} alt='product' className='w-40 sm:w-48 select-none pointer-events-none' />
      </div>

      {/* Center Text */}
      <div className='relative max-w-2xl mx-auto text-center z-10 mt-6 md:mt-0 px-2'>
        <button className='bg-[#A8E8B4] text-[#07771C] px-4 sm:px-6 py-1 rounded-full font-semibold text-sm sm:text-base'>
          Limited Time Offer
        </button>

        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold mt-4'>
          Start Your Wellness Journey Today
        </h1>

        <p className='mt-3 text-sm sm:text-base md:text-lg leading-relaxed'>
          Join over 50,000 customers who have transformed their health
          <br className='hidden sm:block' /> with our premium natural supplements. Get exclusive benefits
          <br className='hidden sm:block' /> when you order now!
        </p>

        <button className='mt-4 sm:mt-5 md:mt-12 border border-green-600 text-[#07771C] px-4 sm:px-6 py-2 rounded-md font-medium hover:bg-[#A8E8B4] transition text-sm sm:text-base'>
          Shop Now & Save 30%
        </button>
      </div>

      {/* Mobile: right image below text */}
      <div className='md:hidden flex justify-center mt-6'>
        <img src={man} alt='man' className='w-48 sm:w-56 select-none pointer-events-none' />
      </div>
    </section>
  )
}

export default Offer
