import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const cartView = ({ match }) => {
  const { productId } = match.params;
  const history = useHistory();
  return <div>cartView</div>;
};

export default cartView;
