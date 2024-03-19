import React from 'react'

const Card = (cardData) => {
  return (
    <div className='rounded-3xl h-90 bg-[#bfa7d4] w-96 max-w-80 p-4 border border-solid border-gray-300'>
      <div className='rounded-2xl h-40 bg-slate-400 w-86 p-10'>

      </div>
      <p className='text-[#0D0D0D]  text-base font-normal leading-5 tracking-normal text-left'>
      {cardData.date}

      </p>
      <h1 className='font-bold my-6 caret-yellow-50'>
        {cardData.title}
      </h1>
      <p className='font-poppins text-xl font-semibold leading-6 tracking-normal text-base'>
        {cardData.description}
      </p>
    </div>
  )
}

export default Card
