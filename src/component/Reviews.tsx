const Reviews = () => {
  const data = [
    {
      id: 1,
      count: '4.8/5',
      text: 'Average Rating',
      color: '#07771C',
    },
    {
      id: 2,
      count: '2,000+',
      text: 'Reviews',
      color: '#E4903E',
    },
    {
      id: 3,
      count: '5K+',
      text: 'Happy customers',
      color: '#07771C',
    },
    {
      id: 4,
      count: '99.8%',
      text: 'Satisfaction rating',
      color: '#E4903E',
    },
  ]

  return (
    <section className='grid grid-cols-12 mt-16 md:mt-20 px-4 md:px-0'>
      <div className='col-span-12 xl:col-span-8 xl:col-start-3'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {data.map((item) => (
            <div
              key={item.id}
              className='bg-white shadow-md rounded-xl p-6 text-center transition-transform duration-300 hover:scale-105'
            >
              <h1
                className='text-3xl md:text-4xl font-bold mb-2'
                style={{ color: item.color }}
              >
                {item.count}
              </h1>
              <p className='text-gray-600'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
