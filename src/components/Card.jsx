import React from 'react'

const Card = (cardData) => {
  return (
    <div className='rounded-3xl h-90 bg-white w-80 p-4 border border-solid border-gray-300 flex flex-col gap-6'>
      <div className='rounded-2xl h-40 bg-slate-400 w-86 p-10'>

      </div>
      <p className='text-[#0D0D0D]  text-base font-normal tracking-normal text-left'>
      {cardData.date}

      </p>
      <p className='font-poppins text-xl font-semibold leading-6 tracking-normal '>
        {cardData.description}
      </p>
    </div>
  )
}

export default Card
