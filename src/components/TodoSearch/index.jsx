import React from 'react'

function TodoSearch () {
  return (
    <div className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1 my-4'>
      <svg
        className='w-6 h-6 text-gray-400'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
      <input
        type='text'
        placeholder='Llorar'
        className='flex-1 bg-transparent outline-none'
      />
    </div>
  )
}

export { TodoSearch }
