import { Star } from 'lucide-react'
import customar1 from '../assets/customar1.png'
import customar2 from '../assets/customar2.png'
import customar3 from '../assets/custompar3.png'
const CustomersSays = () => {
  const customarData = [
    {
      id: 1,
      description:
        '"The Premium Himalayan Shilajit has completely transformed my energy levels. I feel more focused and energetic throughout the day."',
      image: customar1,
      name: 'Rajesh Kumar',
      place: 'mumbai',
    },
    {
      id: 2,
      description:
        '"Amazing plant-based protein! Mixes well, tastes great, and I can see real results in my fitness journey."',
      image: customar2,
      name: 'Priya sharma',
      place: 'Agra',
    },
    {
      id: 3,
      description:
        '"Pure quality and authentic products. The customer service is exceptional and delivery is always on time."',
      image: customar3,
      name: 'Amit patel',
      place: 'banglore',
    },
  ]
  return (
    <div className='grid grid-cols-12 mt-10 md:mt-20 px-4 md:px-0'>
      <div className='col-span-12 xl:col-span-8 xl:col-start-3'>
        <div className='text-center'>
          <button className='bg-[#FFEEB8] text-[#E4903E] px-4 sm:px-6 py-1 rounded-full font-semibold text-sm sm:text-base'>
            customer story
          </button>
          <h1 className='text-[#000000] font-semibold text-2xl md:text-3xl mt-4'>
            What Our <span className='text-[#07771C]'>Customers </span>Say
          </h1>
          <p className='text-base md:text-lg text-[#4B5563] mt-2'>
            Join thousands of satisfied customers who have transformed their{' '}
            <br className='hidden sm:block' />
            wellness journey with VitalLife.
          </p>
        </div>
        {/* Card */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5 mt-10 md:mt-14 '>
          {customarData.map((c) => (
            <div
              key={c.id}
              className=' bg-[#F0FFF0] rounded-md p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
            >
              <div className='flex gap-1'>
                <Star color='#E4903E' size={18} />
                <Star color='#E4903E' size={18} />
                <Star color='#E4903E' size={18} />
                <Star color='#E4903E' size={18} />
                <Star color='#E4903E' size={18} />
              </div>
              <div className='mt-1 md:mt-3 font-normal text-[13px] md:text-sm text-[#4B5563]'>
                {c.description}
              </div>
              <div className='flex gap-2 items-center mt-6 md:mt-8'>
                <img
                  src={c.image}
                  alt='customar'
                  className='w-[48px] h-[48px]'
                />
                <div className=''>
                  <h2 className='text-base font-medium text-[#000000]'>
                    {c.name}
                  </h2>
                  <p className='text-[11px] md:text-[12px] text-[#4B5563]'>
                    {c.place}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomersSays
