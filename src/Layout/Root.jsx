
import { Outlet } from 'react-router-dom';
import Footer from '../Sheard/footer';
import Navbar from '../Sheard/Navbar';

const Root = () => {
      return (
            <div >
                 <div className="max-w-6xl mx-auto"> <Navbar></Navbar></div>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Root;