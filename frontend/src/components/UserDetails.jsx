import React from 'react';
import DeleteAllUser from './DeleteAllUser.js';
import styled from 'styled-components';
import { fakeUserData } from '../api/index.jsx';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice.jsx';
import DisplayUsers from './DisplayUsers.jsx';

const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (name) => {
    dispatch(addUser(name));
  };

  return (
    <div className='content'>
      <div className='admin-table'>
        <div className='admin-subtitle'>List of User Details</div>
        <button
          className='btn add-btn'
          onClick={() => addNewUser(fakeUserData())}>
          Add New Users
        </button>
      </div>
      <ul>
        <DisplayUsers />
      </ul>
      <hr />
      <DeleteAllUser />
    </div>
  );
};

export default UserDetails;
