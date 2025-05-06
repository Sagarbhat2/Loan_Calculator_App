import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate=useNavigate()
  const handlechnage=()=>{
    navigate('/');
  }
  return (
    <div className="text-center ">
      <h2 className="text-2xl text-red-600 relative top-32 sm:top-32">Something went wrong!</h2>
      <button onClick={handlechnage} className='relative top-40 border p-3 text-blue-400'>GO HOME</button>
    </div>
  );
};

export default ErrorPage;
