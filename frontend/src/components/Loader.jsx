import React from 'react';

const Loader = ({text}) => {
  return (
    <div className='w-12 h-12 rounded-full animate-spin border-8 border-solid border-purple-500 border-t-transparent shadow-md'>
    {text}
  </div>
  )
}

export default Loader
