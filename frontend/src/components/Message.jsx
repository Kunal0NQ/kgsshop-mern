import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Message = ({ variants, children }) => {
  let type = variants;
  const notify = () =>
    toast.type(`${children}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });

  return (
    <div>
      Message:
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};
export default Message;
