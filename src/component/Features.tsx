import { Heart, IceCreamBowl, Users } from 'lucide-react'

const data = [
  {
    id: 1,
    title: 'pure & natural',
    description:
      'We source only the finest natural ingredients from their native regions, ensuring maximum potency and purity.',
    icon: <IceCreamBowl className='w-8 h-8 text-green-600' />,
  },
  {
    id: 2,
    title: 'Quality Assured',
    description:
      'Every product undergoes rigorous third-party testing to meet the highest standards of quality and safety.',
    icon: <IceCreamBowl className='w-8 h-8 text-blue-600' />,
  },
  {
    id: 3,
    title: 'Customer First',
    description:
      'Over 50,000 satisfied customers trust us for their wellness journey. Your health is our priority.',
    icon: <Users className='w-8 h-8 text-orange-500' />,
  },
  {
    id: 4,
    title: 'Wellness Mission',
    description:
      'Were dedicated to making authentic wellness products accessible to everyone, everywhere.',
    icon: <Heart className='w-8 h-8 text-red-500' />,
  },
]

const Features = () => {
  return (
    <section className='grid grid-cols-12 mt-10 md:mt-20 px-4 md:px-0'>
      <div className='col-span-12 xl:col-span-8 xl:col-start-3'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {data.map((item) => (
            <div
              key={item.id}
              className='p-4 rounded-xl border border-gray-200 hover:shadow-md transition'
            >
              <div className='mb-3'>{item.icon}</div>

              <h1 className='text-lg md:text-2xl font-semibold capitalize'>
                {item.title}
              </h1>

              <p className='text-sm md:text-base text-justify md:text-left text-[#4B5563] mt-2 leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
