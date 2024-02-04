import React from 'react';
// import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className='flex items-center'>
      {/* <div className='flex gap-1 text-sm text-yellow-400'>
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
      </div> */}
      <div>
        <span>
          <i
            style={{ color }}
            className={
              value >= 1
                ? 'fas fa-star'
                : value >= 0.5
                ? 'fas fa-star-half-alt'
                : 'fa fa-star'
            }></i>
        </span>
        <span>
          <i
            style={{ color }}
            className={
              value >= 2
                ? 'fas fa-star'
                : value >= 1.5
                ? 'fas fa-star-half-alt'
                : 'fa fa-star'
            }></i>
        </span>
        <span>
          <i
            style={{ color }}
            className={
              value >= 3
                ? 'fas fa-star'
                : value >= 2.5
                ? 'fas fa-star-half-alt'
                : 'fa fa-star'
            }></i>
        </span>

        <span>
          <i
            style={{ color }}
            className={
              value >= 4
                ? 'fas fa-star'
                : value >= 4.5
                ? 'fas fa-star-half-alt'
                : 'fa fa-star'
            }></i>
        </span>

        <span>
          <i
            style={{ color }}
            className={
              value >= 5
                ? 'fas fa-star'
                : value >= 5.5
                ? 'fas fa-star-half-alt'
                : 'fa fa-star'
            }></i>
        </span>
        <span>{text && text}</span>
      </div>
      <div className='text-xs text-gray-500 ml-3'>(150)</div>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

// Rating.prototype = {
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string,
// };

export default Rating;
