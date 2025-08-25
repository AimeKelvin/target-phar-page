import React from 'react'
import Image from 'next/image'
import { MdEmail } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri'


function Footer() {
    return (
        <div>
            <footer className="bg-black/30 backdrop-blur-3xl ">
                <hr className="my-8 border-gray-200 sm:mx-auto dark:border-emerald-400/40" />
                <div className="mx-auto w-full max-w-screen-xl p-8 lg:py-10">
                    <div className="md:flex gap-8 md:justify-between p-8">
                        <div className="text-left mb-8 md:mb-0 w-full md:w-1/3">
    <a href="#" className="items-center">
       
<Image
  src="/Logo.png" 
  alt="Target Complex Logo"
  width={170}
  height={80}
  className="mb-6"
/>
        <span className="text-sm leading-loose text-gray-500 dark:text-gray-400">
            TARGET Complex is a Conglomerate company composed of IRAGUHA PHARMACY LTD, HEATH TARGET PARA-PHARMACEUTICALS LTD and TARGET PARA-PHARMACEUTICAL WHOLESALES LTD.
        </span>
    </a>
</div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 text-left">
                            <div>
                                <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Department
                                </h2>
                                <span className="block w-14 h-[3px] bg-emerald-400 mb-5"></span>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-blue-400">Surgery</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-blue-400">Women's Health</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-blue-400">Radiology</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-blue-400">Cardioc</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-blue-400">Medicine</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Support
                                </h2>
                                <span className="block w-14 h-[3px] bg-emerald-400 mb-5"></span>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-blue-400">Terms &amp; Conditions</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-blue-400">Privacy Policy</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-blue-400">Company Support</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-blue-400">FAQs</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:text-blue-400">Company License</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Get in Touch
                                </h2>
                                <span className="block w-14 h-[3px] bg-emerald-400 mb-5"></span>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-3 inline-flex gap-2 items-center">
                                        <MdEmail />
                                        <a className="hover:text-blue-400">healthtarget18@gmail.com</a>
                                    </li>
                                    <li className="mb-6">
                                        <h3 className="text-base text-emerald-400 font-bold">Wholesale</h3>
                                    </li>
                                    <li className="mb-3 inline-flex gap-2 items-center">
                                        <MdEmail />
                                        <a className="hover:text-blue-400">healthtarget18@gmail.com</a>
                                    </li>
                                    <li className="mb-6">
                                        <h3 className="text-base text-emerald-400 font-bold">Parapharmacy</h3>
                                    </li>
                                    <li className="mb-3 inline-flex gap-2 items-center">
                                        <MdEmail />
                                        <a className="hover:text-blue-400">iraguhapharmacie@gmail.com</a>
                                    </li>
                                    <li className="mb-6">
                                        <h3 className="text-base text-emerald-400 font-bold">Retail pharmacy</h3>
                                    </li>
                                    <li className="mb-3 inline-flex gap-2 items-center">
                                        <RiCustomerService2Line />
                                        <a className="hover:text-blue-400">Mon to Sun : 24/7</a>
                                    </li>
                                    <li className="mb-6 grid grid-cols-1 text-gray-400 font-bold text-base gap-2">
                                        <a className="hover:text-blue-400">+250 783 117 737</a>
                                        <a className="hover:text-blue-400">+250 783 284 720</a>
                                    </li>
                                    <li className="mb-3 inline-flex gap-2 items-center">
                                        <h3 className="text-base text-emerald-400 font-bold">Location: FJRQ+HQ7, Ruhengeri</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                 <hr className="my-8 border-gray-200 sm:mx-auto dark:border-emerald-400/40" />
                <div className="flex flex-col sm:flex-row sm:justify-between items-center text-sm px-4 pb-6">
                    <span className="mb-4 sm:mb-0">© 2023, Designed & Developed by <span className="font-bold text-gray-300">😮‍💨</span></span>


                    <form action="#" className="w-full sm:w-auto">
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                            <div className="relative w-full sm:w-64">
                                <label htmlFor="email" className="sr-only">Email address</label>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-5 py-2 text-white text-sm bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </footer>
        </div>
    )
}

export default Footer
