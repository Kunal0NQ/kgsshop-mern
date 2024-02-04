import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from './productsSlice';
import { Link } from 'react-router-dom';
import Product from '../../../components/Product';
import Loader from '../../../components/Loader';
import Rating from '../../../components/Rating';
import { useGetProductsQuery } from '../api/apiSlice';
const ProductsView = () => {
  const productsList = useSelector((state) => state.products);
  // const { pending, error, products } = productsList;
  const dispatch = useDispatch();
  const {
    data: products,
    isLoading: isProductLoading,
    isSuccess: isProductSuccess,
    isError: isProductError,
    error: prouctError,
  } = useGetProductsQuery({ refetchOnMountOrArgChange: true })
  useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  console.log(products)
  return <>
  {products &&
      products.map((product) => (
        <Link
          to={`/products/${product._id}`}
          key={product._id}
          className='bg-white shadow rounded overflow-hidden group'>
          <div className='relative'>
            <img src={product.image} alt='product 1' className='w-full' />
            <div
              className='absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>
              <a
                href='#'
                className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                title='view product'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </a>
              <a
                href='#'
                className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
                title='add to wishlist'>
                <i className='fa-solid fa-heart'></i>
              </a>
            </div>
          </div>
          <div className='pt-4 pb-3 px-4'>
            <a href='#'>
              <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
                {product.name}
              </h4>
            </a>
            <div className='flex items-baseline mb-1 space-x-2'>
              <p className='text-xl text-primary font-semibold'>
                ₹{product.price}
              </p>
              <p className='text-sm text-gray-400 line-through'>$55.90</p>
            </div>
            
            {/* <div className='flex items-center'>
              <div className='flex gap-1 text-sm text-yellow-400'>
                <span>
                  <i className='fa-solid fa-star'></i>
                </span>
                <span>
                  <i className='fa-solid fa-star'></i>
                </span>
                <span>
                  <i className='fa-solid fa-star'></i>
                </span>
                <span>
                  <i className='fa-solid fa-star'></i>
                </span>
                <span>
                  <i className='fa-solid fa-star'></i>
                </span>
              </div>
              <div className='text-xs text-gray-500 ml-3'>({product.countInStock})</div>
            </div> */}
            {/* Rating */}
            <Rating />
          </div>
          {/* <button  className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'>
            Add to cart
          </button> */}
        </Link>
      ))}
  </>
  
};

export default ProductsView;
