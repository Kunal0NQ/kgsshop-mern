import React from 'react';
import NotFound from '../../public/images/error.jpg';

const ErrorPage = ({ error, resetErrorBoundry }) => {
  console.log('Error Occured', error);
  return (
    <div className='max-w-[100vh] flex justify-center align-middle mt-[5rem] '>
      <img
        src={NotFound}
        alt='Page Not found'
        className='w-[40%] h-auto mb-[1rem]'
      />
      <p className='mt-[1rem] text-[2rem] '>
        Something went wrong. Try clicking the refresh page button to relode the
        application.{''}{' '}
        <button
          type='button'
          onClick={resetErrorBoundry}
          className='w-fit border-none px-[10px] py-[5px]  text-[18px] cursor-pointer rounded-md bg-[#bd1d3d]'>
          Refresh Page
        </button>
      </p>
    </div>
  );
};

export default ErrorPage;
