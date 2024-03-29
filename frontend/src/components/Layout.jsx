import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const dropdowns = [
  {
    href: '/',
    imgsrc: 'images/icons/sofa.svg',
    name: 'Sofa-y',
  },
  {
    href: '/',
    imgsrc: 'images/icons/terrace.svg',
    name: 'terrace',
  },
  {
    href: '/sofa',
    imgsrc: 'images/icons/sofa.svg',
    name: 'Sofa',
  },
  {
    href: '/bed',
    imgsrc: 'images/icons/bed.svg',
    name: 'bed',
  },

  {
    href: '/office',
    imgsrc: 'images/icons/office.svg',
    name: 'Office',
  },
  {
    href: '/products/sofa',
    imgsrc: 'images/icons/outdoor-cafe.svg',
    name: 'Outdoor',
  },
  {
    href: '/products/sofa',
    imgsrc: 'images/icons/bed-2.svg',
    name: 'Mattress',
  },
];

const navlinks = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/pages/shop',
    name: 'Shop',
  },
  {
    href: '/about',
    name: 'About Us',
  },
  {
    href: '/contact',
    name: 'Contact US',
  },
];

const Layout = () => {
  return (
    <>
      {/* header */}
      <header className='py-4 shadow-sm bg-white'>
        <div className='container flex items-center justify-between'>
          <Link to='/' relative='path'>
            <img
              style={{
                backgroundImage: `url(${
                  'public/images/logo.svg'
                })`,
              }}
              alt='Logo'
              className='w-32'
            />
          </Link>

          <div className='w-full max-w-xl relative flex'>
            <span className='absolute left-4 top-3 text-lg text-gray-400'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </span>
            <input
              type='text'
              name='search'
              id='search'
              className='w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex'
              placeholder='search'
            />
            <button className='bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex'>
              Search
            </button>
          </div>

          <div className='flex items-center space-x-4'>
            <Link
              href='/'
              className='text-center text-gray-700 hover:text-primary transition relative'>
              <div className='text-2xl'>
                <i className='fa-regular fa-heart'></i>
              </div>
              <div className='text-xs leading-3'>Wishlist</div>
              <div className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
                8
              </div>
            </Link>
            <Link
              href='/cart'
              className='text-center text-gray-700 hover:text-primary transition relative'>
              <div className='text-2xl'>
                <i className='fa-solid fa-bag-shopping'></i>
              </div>
              <div className='text-xs leading-3'>Cart</div>
              <div className='absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
                2
              </div>
            </Link>
            <Link
              href='/profile'
              className='text-center text-gray-700 hover:text-primary transition relative'>
              <div className='text-2xl'>
                <i className='fa-regular fa-user'></i>
              </div>
              <div className='text-xs leading-3'>Account</div>
            </Link>
          </div>
        </div>
      </header>
      {/* <!-- ./header --> */}

      {/* <!-- navbar --> */}
      <nav className='bg-gray-800'>
        <div className='container flex '>
          <div className='px-8 py-4 bg-[#fd3d57] md:flex items-center cursor-pointer relative group hidden'>
            <span className='text-white'>
              <i className='fa-solid fa-bars'></i>
            </span>
            <span className='capitalize ml-2 text-white hidden'>
              All Categories
            </span>

            {/* <!-- dropdown --> */}
            <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible'>
              {dropdowns.map((dropdown) => (
                <Link
                  key={dropdown.name}
                  to={dropdown.link}
                  className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                  <img
                    src={`public/${dropdown.imgsrc}`}
                    alt='sofa'
                    className='w-5 h-5 object-contain'
                  />
                  <span className='ml-6 text-gray-600 text-sm'>
                    {dropdown.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className='flex items-center justify-between flex-grow md:pl-12 py-5'>
            <div className='flex items-center space-x-6 capitalize'>
              {navlinks.map((navlink) => (
                <Link
                  to={navlink.href}
                  key={navlink.name}
                  className='text-gray-200 hover:text-white transition'>
                  {navlink.name}
                </Link>
              ))}
            </div>
            <Link
              to='login'
              className='text-gray-200 hover:text-white transition'>
              Login
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
      <div>
        {/*  footer  */}
        <footer className='bg-white pt-16 pb-12 border-t border-gray-100'>
          <div className='container grid grid-cols-1 '>
            <div className='col-span-1 space-y-4'>
              <img src='assets/images/logo.svg' alt='logo' className='w-30' />
              <div className='mr-2'>
                <p className='text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  hic?
                </p>
              </div>
              <div className='flex space-x-5'>
                <a href='#' className='text-gray-400 hover:text-gray-500'>
                  <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='#' className='text-gray-400 hover:text-gray-500'>
                  <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href='#' className='text-gray-400 hover:text-gray-500'>
                  <i className='fa-brands fa-twitter-square'></i>
                </a>
                <a href='#' className='text-gray-400 hover:text-gray-500'>
                  <i className='fa-brands fa-github-square'></i>
                </a>
              </div>
            </div>

            <div className='col-span-2 grid grid-cols-2 gap-4'>
              <div className='grid grid-cols-2 gap-4 md:gap-8'>
                <div>
                  <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                    Solutions
                  </h3>
                  <div className='mt-4 space-y-4'>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Marketing
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Analitycs
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Commerce
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Insights
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                    Support
                  </h3>
                  <div className='mt-4 space-y-4'>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Pricing
                    </a>
                    {/* <!-- <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</a> --> */}
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Guides
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      API Status
                    </a>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-8'>
                <div>
                  <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                    Solutions
                  </h3>
                  <div className='mt-4 space-y-4'>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Marketing
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Analitycs
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Commerce
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Insights
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
                    Support
                  </h3>
                  <div className='mt-4 space-y-4'>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Pricing
                    </a>
                    {/* <!-- <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</a> --> */}
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      Guides
                    </a>
                    <a
                      href='#'
                      className='text-base text-gray-500 hover:text-gray-900 block'>
                      API Status
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* ./footer  */}

        {/*  copyright  */}
        <div className='bg-gray-800 py-4'>
          <div className='container flex items-center justify-between'>
            <p className='text-white'>
              &copy; TailCommerce - All Right Reserved
            </p>
            <div>
              <img
                src='assets/images/methods.png'
                alt='methods'
                className='h-5'
              />
            </div>
          </div>
        </div>
        {/*./copyright */}
      </div>
    </>
  );
};

export default Layout;
