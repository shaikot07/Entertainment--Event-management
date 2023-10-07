import { useLoaderData } from "react-router-dom";
import Banner from "../../Sheard/Banner";
import Navbar from "../../Sheard/Navbar";
import EventsCard from "./EventsCard";
import { FaCircleCheck } from "react-icons/fa6";

const Home = () => {
      const data = useLoaderData()
      // console.log(data);
      return (
            <div>
                  <Banner></Banner>

                  <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-poppins font-bold text-center mt-20">Choose Your Event</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 mb-20 space-y-10">
                              {
                                    data.map(ndata => <EventsCard key={ndata.id} data={ndata}></EventsCard>)
                              }
                        </div>
                        {/* fast  booking sextion  */}
                        <div className="mb-20 ">
                              <h3 className="text-4xl text-center font-poppins font-bold mt-10 mb-20">Fast  Booking Your Event</h3>
                              <div className=" grid grid-cols-1  md:grid-cols-3 gap-6">

                                    <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                                          <div  data-aos="fade-right" className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                                                <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                                                      basics
                                                </p>
                                                <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                                                      <span className="mt-2 text-4xl">$</span>29
                                                      <span className="self-end text-4xl">/mo</span>
                                                </h1>
                                          </div>
                                          <div className="p-0">
                                                <ul className="flex flex-col gap-4">
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  5 team members
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  200+ components
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  40+ built-in pages
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  1 year free updates
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  Life time technical support
                                                            </p>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div className="mt-12 p-0">
                                                <button
                                                      className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                      type="button"
                                                      data-ripple-dark="true"
                                                >
                                                      Buy Now
                                                </button>
                                          </div>
                                    </div>
                                    <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                                          <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                                                <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                                                      standard
                                                </p>
                                                <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                                                      <span className="mt-2 text-4xl">$</span>29
                                                      <span className="self-end text-4xl">/mo</span>
                                                </h1>
                                          </div>
                                          <div className="p-0">
                                                <ul className="flex flex-col gap-4">
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  5 team members
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  200+ components
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  40+ built-in pages
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  1 year free updates
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  Life time technical support
                                                            </p>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div className="mt-12 p-0">
                                                <button
                                                      className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                      type="button"
                                                      data-ripple-dark="true"
                                                >
                                                      Buy Now
                                                </button>
                                          </div>
                                    </div>
                                    <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                                          <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                                                <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                                                      Premium
                                                </p>
                                                <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                                                      <span className="mt-2 text-4xl">$</span>29
                                                      <span className="self-end text-4xl">/mo</span>
                                                </h1>
                                          </div>
                                          <div className="p-0">
                                                <ul className="flex flex-col gap-4">
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  5 team members
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  200+ components
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  40+ built-in pages
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  1 year free updates
                                                            </p>
                                                      </li>
                                                      <li className="flex items-center gap-4">
                                                            <FaCircleCheck></FaCircleCheck>
                                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                                  Life time technical support
                                                            </p>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div className="mt-12 p-0">
                                                <button
                                                      className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                      type="button"
                                                      data-ripple-dark="true"
                                                >
                                                      Buy Now
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        {/* upcomming event  */}
                        <div>
                              <div className="mt-20 mb-20"><h2 className="text-4xl font-poppins font-bold text-center">Up coming Events</h2></div>
                              <div className=" mt-10 mb-20 grid  grid-cols-1 md:grid-cols-3 gap-6">

                                    <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                                          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/BP1ZXMv/upc-03.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                                          </div>
                                          <div  data-aos="fade-up-right" className="relative p-6 py-14 px-6 md:px-12">
                                                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-[#EC4899] antialiased">
                                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, architecto.
                                                </h2>
                                                <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                                                      Tania Andrew
                                                </h5>

                                          </div>
                                    </div>
                                    <div  data-aos="fade-up-left" className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                                          <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/VYR13Cr/upc-02.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                                          </div>
                                          <div className="relative p-6 py-14 px-6 md:px-12">
                                                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-[#EC4899] antialiased">
                                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, architecto.
                                                </h2>
                                                <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                                                      Tania Andrew
                                                </h5>

                                          </div>
                                    </div>
                                    <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                                          <div  data-aos="fade-up-right" className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/SPksK2S/upc-01.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                                          </div>
                                          <div className="relative p-6 py-14 px-6 md:px-12">
                                                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-[#EC4899] antialiased">
                                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, architecto.
                                                </h2>
                                                <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                                                      Tania Andrew
                                                </h5>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Home;