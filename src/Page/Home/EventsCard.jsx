import React from 'react';
import { Link } from 'react-router-dom';

const EventsCard = ({ data }) => {
      const { id, title, image, price, short_description } = data || {}
      return (
            <div className="flex  flex-col max-h-[400px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className=" -mt-6  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white  ">
                        <img
                              src={image}
                              alt="img-blur-shadow"

                        />
                  </div>
                  <div className="p-6">
                        <h5 className="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                              {title}
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                              {short_description}
                        </p>
                  </div>
                  <div className="p-6 pt-0">
                        <Link to={`/deteles/${id}`}>
                              <button

                                    className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                              >
                                    Read More
                              </button>
                        </Link>
                  </div>
            </div>
      );
};

export default EventsCard;