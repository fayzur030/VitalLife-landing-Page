import { ShoppingCart, Star } from 'lucide-react'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'

const Product = () => {
  const productData = [
    {
      id: 1,
      image: product1,
      title: 'MP combat protein (5kg)',
      description:
        'Pure, authentic Himalayan Shilajit resin sourced from high-altitude mountains.',
      price: '₹3999',
      discount: '₹4999',
      rating: 4.3,
    },
    {
      id: 2,
      image: product2,
      title: 'Pure Shilajit triple gold (780mg)',
      description:
        'Our premium grade Shilajit with added gold particles for enhanced bioavailability and potency.',
      price: '₹998',
      discount: '₹1299',
      rating: 5,
    },
    {
      id: 3,
      image: product3,
      title: 'Optimum whey protein (3kg)',
      description:
        'Clean mass gainer with organic ingredients. Perfect for lean muscle.',
      price: '₹2499',
      discount: '₹3400',
      rating: 4.3,
    },
  ]

  return (
    <div className='grid grid-cols-12 mt-16 md:mt-20 px-4 md:px-0'>
      <div className='col-span-12 xl:col-span-8 xl:col-start-3'>
        {/* Heading */}
        <div className='text-center'>
          <span className='bg-[#A8E8B4] text-[#07771C] text-base md:text-lg font-semibold px-5 py-2 rounded-full'>
            Our product
          </span>

          <h1 className='font-semibold text-3xl md:text-4xl mt-5'>
            Premium <span className='text-[#07771C]'>Natural</span> Supplements
          </h1>

          <p className='text-[#4B5563] text-base mt-4 leading-relaxed text-justify md:text-center'>
            Discover our carefully curated collection of authentic wellness
            products, <br className='hidden sm:block' /> each one tested for
            purity and potency.
          </p>
        </div>

        {/* Product Cards */}
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {productData.map((p) => (
            <div
              key={p.id}
              className='shadow-sm rounded-xl border p-4  hover:shadow-md transition flex flex-col relative'
            >
              {/* Rating Badge Top-Right */}
              <div className='flex items-center gap-1 absolute top-3 right-3 bg-yellow-200 text-yellow-700 px-2 py-1 rounded-lg z-10'>
                <Star color='#E4903E' size={16} />
                <span className='font-medium text-sm md:text-base'>
                  {p.rating}
                </span>
              </div>

              <img
                src={p.image}
                alt={p.title}
                className='w-full h-auto rounded-lg mt-6'
              />

              {/* Title */}
              <h1 className='text-black text-base md:text-lg font-bold mt-4'>
                {p.title}
              </h1>

              {/* Description */}
              <p className='text-sm text-gray-600 mt-2 leading-relaxed flex-grow'>
                {p.description}
              </p>

              {/* Price */}
              <div className='flex items-center gap-3 mt-3'>
                <span className='text-xl md:text-2xl font-bold text-[#468852]'>
                  {p.price}
                </span>
                <span className='text-sm text-gray-500 line-through mt-2'>
                  {p.discount}
                </span>
              </div>

              <div className='mt-5 flex items-center justify-between gap-4'>
                <ShoppingCart size={28} className='text-green-600' />
                <button className='bg-[#07771C] text-white px-4 py-2 w-full rounded-lg hover:bg-green-700 transition'>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
