// "use client";

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Rating from '../components/Rating';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../redux/features/products/productsSlice';
import { useGetProductQuery } from '../redux/features/api/apiSlice';

const ProductScreen = () => {

  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(fetchProductDetails(id));
 
  }, [dispatch]);

  // const productDetails = useSelector((state) => state.products);
  // const { pending, error, fulfilled, product } = productDetails;

  const {
    data: product,
    isLoading: isProductLoading,
    isSuccess: isProductSuccess,
    isError: isProductError,
    error: prouctError,
  } = useGetProductQuery(id)

  // useGetProductQuery({id:id, refetchOnMountOrArgChange: true })
  // const product = useSelector((state) =>
  //   state.product.find((product) => product.id === productId)
  // );

  console.log('product', product);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
    // history.pushState(`/cart/65a9dc2f302203edc0b100da?qty=${qty}`);
  };

  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role='alert'>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className='container py-4 flex items-center gap-3'>
        <Link to='/' className='text-primary text-base'>
          <i className='fa-solid fa-house'></i>
        </Link>
        <span className='text-sm text-gray-400'>
          <i className='fa-solid fa-chevron-right'></i>
        </span>
        <p className='text-gray-600 font-medium'>Product</p>
      </div>
      {product && (
        <div>
          <div>
            <h2 className='text-3xl font-medium uppercase mb-2'>
              {product.name}
            </h2>
            <div className='flex items-baseline mb-1 space-x-2 font-roboto mt-4'>
              <p className='text-xl text-primary font-semibold'>$45.00</p>
              <p className='text-base text-gray-400 line-through'>$55.00</p>
            </div>
          </div>
          <div className='mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5'>
             {/* <select >
             
            </select> */}
            <div className='relative'>

              <select value={qty} onChange={(e) => setQty(e.target.value)} className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'>
                {<option></option>}
              </select>
              <span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4'
                  viewBox='0 0 24 24'>
                  <path d='M6 9l6 6 6-6'></path>
                </svg>
              </span>
            </div>
           
            <button
              onClick={addToCartHandler}
              className='bg-[#fd3d57] border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition'>
              <i className='fa-solid fa-bag-shopping'></i> Add to cart
            </button>
            <a
              href='#'
              className='border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition'>
              <i className='fa-solid fa-heart'></i> Wishlist
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;

// <ErrorBoundary
// FallbackComponent={ErrorFallback}
// onReset={() => {
//   // reset the state of your app so the error doesn't happen again
// }}>
// <div>
//
//   {/* Product Details */}
//   {pending ? (
//     'pending'
//   ) : error ? (
//     'error'
//   ) : (
//     <div className='container grid grid-cols-2 gap-6'>
//       <div>
//         <img
//           src='../assets/images/products/product1.jpg'
//           alt='product'
//           className='w-full'
//         />
//         <div className='grid grid-cols-5 gap-4 mt-4'>
//           <img
//             src='../assets/images/products/product2.jpg'
//             alt='product2'
//             className='w-full cursor-pointer border border-primary'
//           />
//           <img
//             src='../assets/images/products/product3.jpg'
//             alt='product2'
//             className='w-full cursor-pointer border'
//           />
//           <img
//             src='../assets/images/products/product4.jpg'
//             alt='product2'
//             className='w-full cursor-pointer border'
//           />
//           <img
//             src='../assets/images/products/product5.jpg'
//             alt='product2'
//             className='w-full cursor-pointer border'
//           />
//           <img
//             src='../assets/images/products/product6.jpg'
//             alt='product2'
//             className='w-full cursor-pointer border'
//           />
//         </div>
//       </div>

//       <div>
//         <h2 className='text-3xl font-medium uppercase mb-2'>
//           {product.name}
//         </h2>
//         <div className='flex items-center mb-4'>
//           <div className='flex gap-1 text-sm text-yellow-400'>
//             <span>
//               <i className='fa-solid fa-star'></i>
//             </span>
//             <span>
//               <i className='fa-solid fa-star'></i>
//             </span>
//             <span>
//               <i className='fa-solid fa-star'></i>
//             </span>
//             <span>
//               <i className='fa-solid fa-star'></i>
//             </span>
//             <span>
//               <i className='fa-solid fa-star'></i>
//             </span>
//           </div>
//           <div className='text-xs text-gray-500 ml-3'>(150 Reviews)</div>
//         </div>
//         <div className='space-y-2'>
//           <p className='text-gray-800 font-semibold space-x-2'>
//             <span>Availability: </span>
//             <span className='text-green-600'>In Stock</span>
//           </p>
//           <p className='space-x-2'>
//             <span className='text-gray-800 font-semibold'>Brand: </span>
//             <span className='text-gray-600'>Apex</span>
//           </p>
//           <p className='space-x-2'>
//             <span className='text-gray-800 font-semibold'>
//               Category:{' '}
//             </span>
//             <span className='text-gray-600'>Sofa</span>
//           </p>
//           <p className='space-x-2'>
//             <span className='text-gray-800 font-semibold'>SKU: </span>
//             <span className='text-gray-600'>BE45VGRT</span>
//           </p>
//         </div>
//         <div className='flex items-baseline mb-1 space-x-2 font-roboto mt-4'>
//           <p className='text-xl text-primary font-semibold'>$45.00</p>
//           <p className='text-base text-gray-400 line-through'>$55.00</p>
//         </div>

//         <p className='mt-4 text-gray-600'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
//           eius eum reprehenderit dolore vel mollitia optio consequatur hic
//           asperiores inventore suscipit, velit consequuntur, voluptate
//           doloremque iure necessitatibus adipisci magnam porro.
//         </p>

//         <div className='pt-4'>
//           <h3 className='text-sm text-gray-800 uppercase mb-1'>Size</h3>
//           <div className='flex items-center gap-2'>
//             <div className='size-selector'>
//               <input
//                 type='radio'
//                 name='size'
//                 id='size-xs'
//                 className='hidden'
//               />
//               <label
//                 htmlFor='size-xs'
//                 className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
//                 XS
//               </label>
//             </div>
//             <div className='size-selector'>
//               <input
//                 type='radio'
//                 name='size'
//                 id='size-sm'
//                 className='hidden'
//               />
//               <label
//                 htmlFor='size-sm'
//                 className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
//                 S
//               </label>
//             </div>
//             <div className='size-selector'>
//               <input
//                 type='radio'
//                 name='size'
//                 id='size-m'
//                 className='hidden'
//               />
//               <label
//                 htmlFor='size-m'
//                 className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
//                 M
//               </label>
//             </div>
//             <div className='size-selector'>
//               <input
//                 type='radio'
//                 name='size'
//                 id='size-l'
//                 className='hidden'
//               />
//               <label
//                 htmlFor='size-l'
//                 className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
//                 L
//               </label>
//             </div>
//             <div className='size-selector'>
//               <input
//                 type='radio'
//                 name='size'
//                 id='size-xl'
//                 className='hidden'
//               />
//               <label
//                 htmlFor='size-xl'
//                 className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
//                 XL
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className='pt-4'>
//           <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
//             Color
//           </h3>
//           <div className='flex items-center gap-2'>
//             <div className='color-selector'>
//               <input
//                 type='radio'
//                 name='color'
//                 id='red'
//                 className='hidden'
//               />
//               <label
//                 htmlFor='red'
//                 className='border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block'
//                 style={{ backgroundColor: '#fc3d57' }}></label>
//             </div>
//             <div className='color-selector'>
//               <input
//                 type='radio'
//                 name='color'
//                 id='black'
//                 className='hidden'
//               />
//               <label
//                 htmlFor='black'
//                 className='border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block'
//                 style={{ backgroundColor: '#000' }}></label>
//             </div>
//             <div className='color-selector'>
//               <input
//                 type='radio'
//                 name='color'
//                 id='white'
//                 className='hidden'
//               />
//               <label
//                 htmlFor='white'
//                 className='border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block'
//                 style={{ backgroundColor: '#fff' }}></label>
//             </div>
//           </div>
//         </div>

//         <div className='mt-4'>
//           <h3 className='text-sm text-gray-800 uppercase mb-1'>
//             Quantity
//           </h3>
//           <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max'>
//             <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>
//               -
//             </div>
//             <div className='h-8 w-8 text-base flex items-center justify-center'>
//               4
//             </div>
//             <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>
//               +
//             </div>
//           </div>
//         </div>

//         <div className='mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5'>
//           <a
//             href='#'
//             className='bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition'>
//             <i className='fa-solid fa-bag-shopping'></i> Add to cart
//           </a>
//           <a
//             href='#'
//             className='border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition'>
//             <i className='fa-solid fa-heart'></i> Wishlist
//           </a>
//         </div>

//         <div className='flex gap-3 mt-4'>
//           <a
//             href='#'
//             className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center'>
//             <i className='fa-brands fa-facebook-f'></i>
//           </a>
//           <a
//             href='#'
//             className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center'>
//             <i className='fa-brands fa-twitter'></i>
//           </a>
//           <a
//             href='#'
//             className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center'>
//             <i className='fa-brands fa-instagram'></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   )}
// </div>
// </ErrorBoundary>
