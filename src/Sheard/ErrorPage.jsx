import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
      return (
            <div className='bg-slate-600 w-[500px] mx-auto mt-32 h-[400px] flex items-center gap-6 justify-center p-6'>
                  <div>
                  <h2 className='text-3xl text-red-600 font-poppins font-bold text-center' >Opppps !</h2>
                  <h2 className='text-3xl text-red-600 font-poppins font-bold' >Data Not Found</h2>
                  <div className='flex justify-center'><Link className='btn text-center' to='/'>Go back Home</Link></div>
                  </div>
            </div>
      );
};

export default ErrorPage;