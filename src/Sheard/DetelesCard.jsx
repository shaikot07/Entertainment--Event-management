import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const DetelesCard = () => {
      const { id } = useParams()
      const convertId = parseInt(id)
      //      console.log(convertId);
      const [detelesData, setDetelesData] = useState([])
      const [useData, setUseData] = useState({})
      const { image, price, title, long_description } = useData || {}
      useEffect(() => {
            fetch('../../public/data.json')
                  .then((res) => res.json())
                  .then((data) => {
                        setDetelesData(data);
                        const foundData = data.find((item) => item.id === convertId);
                        setUseData(foundData)
                  })
                  .catch((error) => console.error('Error fetching data:', error));
      }, [id]);

      return (
            <div>
                 
                  <div className='mt-10 mb-20 text-center flex justify-center items-center'>
                        <div className="relative flex w-[800px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                              <div className="relative  -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                                    <img
                                          src={image}
                                          alt="img-blur-shadow"
                                          layout="fill"
                                    />
                              </div>
                              <div className="p-6">
                                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                          {title}
                                    </h5>
                                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                          {long_description}
                                    </p>
                              </div>
                              <p className='text-3xl text-[#EC4899] font bold mt-5 mb-5'>$:<span>{price}</span> </p>
                              <div className="p-6 pt-0">
                                    <Link to="/"><button className='btn btn-primary'>Go back</button></Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default DetelesCard;