import React from 'react'
import { MdEmail } from 'react-icons/md'
import { RiCustomerService2Line } from 'react-icons/ri'

function Footer() {
    return (
        <div>
            <footer className="">
                <div className="mx-auto w-full max-w-screen-xl p-8 lg:py-10">
                    <div className="md:flex gap-8 md:justify-between p-8">
                        <div className="text-left mb-8 md:mb-0 w-full md:w-1/3">
                            <a href="#" className="items-center">
                                <img
                                    src="https://targetcomplex.com/images/uploaded/3/Screenshot_2023-08-24_225212.png"
                                    className="h-24 me-3 mb-6"
                                    alt="FlowBite Logo"
                                />
                                <span className="text-l leading-loose text-gray-500 dark:text-gray-400">
                                    TARGET Complex is a Conglomerate company composed of IRAGUHA PHARAMCY LTD , HEATH TARGET PARA-PHARMACEUTICALS LTD and TARGET PARA-PHARMACEUTICAL WHOLSALES LTD .
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
                                        <h3 className="text-2xl text-emerald-400 font-bold">Wholesale</h3>
                                    </li>
                                    <li className="mb-3 inline-flex gap-2 items-center">
                                        <MdEmail />
                                        <a className="hover:text-blue-400">healthtarget18@gmail.com</a>
                                    </li>
                                    <li className="mb-6">
                                        <h3 className="text-2xl text-emerald-400 font-bold">Parapharmacy</h3>
                                    </li>
                                    <li className="mb-3 inline-flex gap-2 items-center">
                                        <MdEmail />
                                        <a className="hover:text-blue-400">iraguhapharmacie@gmail.com</a>
                                    </li>
                                    <li className="mb-6">
                                        <h3 className="text-2xl text-emerald-400 font-bold">Retail pharmacy</h3>
                                    </li>
                                    <li className="mb-3 inline-flex gap-2 items-center">
                                        <RiCustomerService2Line />
                                        <a className="hover:text-blue-400">Mon to Sun : 24/7</a>
                                    </li>
                                    <li className="mb-6 grid grid-cols-1 text-gray-400 font-bold text-2xl gap-2">
                                        <a className="hover:text-blue-400">+250 783 117 737</a>
                                        <a className="hover:text-blue-400">+250 783 284 720</a>
                                    </li>
                                    <li className="mb-3 inline-flex gap-2 items-center">
                                        <h3 className="text-2xl text-emerald-400 font-bold">Location: FJRQ+HQ7, Ruhengeri</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div className="sm:flex sm:items-center sm:justify-between p-4">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        Copyright © 2023, Designed & Developed by <span className='text-gray-300 font-bold'>KCSOFT</span>
                    </span>
                    <form action="#">
                        <div className="items-center mx-auto mb-3 mt-4 space-y-4 sm:w-1/2 sm:flex sm:space-y-0">
                            <div className="relative w-full">
                                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                </div>
                                <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />
                            </div>
                            <div>
                                <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </footer>
        </div>
    )
}

export default Footer
