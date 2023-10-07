
import { Outlet } from 'react-router-dom';
import Footer from '../Sheard/footer';
import Navbar from '../Sheard/Navbar';
import { Toaster } from 'react-hot-toast';

const Root = () => {
      return (
            <div >
                 <div className="max-w-6xl mx-auto"> <Navbar></Navbar></div>
                  <Outlet></Outlet>
                  <Footer></Footer>
                  <Toaster></Toaster>
            </div>
      );
};

export default Root;