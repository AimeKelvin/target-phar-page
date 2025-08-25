'use client';

import React from 'react';
import {
  MdEmail,
  MdLocalHospital,
  MdLocationPin,
  MdMedicalServices,
} from 'react-icons/md';
import {
  RiCustomerService2Line,
  RiStethoscopeLine,
} from 'react-icons/ri';
import {
  FaUserNurse,
  FaHeartbeat,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';
import RevealOnScroll from '@/utils/RevealOnScroll';

function Footer() {
  return (
    <RevealOnScroll>
    <footer className="relative text-white w-full">
      <hr className="my-8 border-[#6fab1d] sm:mx-auto" />

      <div className="mx-auto max-w-screen-xl px-6 lg:py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Map Section */}
        <div className="w-full h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Target Complex Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.777787593034!2d29.642826415250913!3d-1.5015958368491825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d2d91b576b0eeb%3A0xa2679921d19a5145!2sRuhengeri%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1692937612345!5m2!1sen!2sus"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Departments */}
        <div>
          <h2 className="text-[#6fab1d] font-semibold uppercase mb-5 border-b-2 border-[#6fab1d] inline-block pb-1">
            Departments
          </h2>
          <ul className="text-gray-900 ml-32 space-y-4 mt-4">
            <li className="flex items-center gap-3">
              <MdLocalHospital className="text-[#6fab1d] text-xl" />
              <a href="#" className="hover:text-[#6fab1d] transition">Surgery</a>
            </li>
            <li className="flex items-center gap-3">
              <FaUserNurse className="text-[#6fab1d] text-xl" />
              <a href="#" className="hover:text-[#6fab1d] transition">Women's Health</a>
            </li>
            <li className="flex items-center gap-3">
              <MdMedicalServices className="text-[#6fab1d] text-xl" />
              <a href="#" className="hover:text-[#6fab1d] transition">Radiology</a>
            </li>
            <li className="flex items-center gap-3">
              <FaHeartbeat className="text-[#6fab1d] text-xl" />
              <a href="#" className="hover:text-[#6fab1d] transition">Cardioc</a>
            </li>
            <li className="flex items-center gap-3">
              <RiStethoscopeLine className="text-[#6fab1d] text-xl" />
              <a href="#" className="hover:text-[#6fab1d] transition">Medicine</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-[#6fab1d] font-semibold uppercase mb-5 border-b-2 border-[#6fab1d] inline-block pb-1">
            Get in Touch
          </h2>
          <ul className="text-gray-900 space-y-4">
            <li className="flex items-center gap-3">
              <MdEmail className="text-[#6fab1d] text-xl" />
              <span>healthtarget18@gmail.com</span>
            </li>

            <li>
              <h3 className="text-[#6fab1d] font-bold mt-4 mb-1">Wholesale</h3>
              <div className="flex items-center gap-3">
                <MdEmail className="text-[#6fab1d] text-xl" />
                <span>healthtarget18@gmail.com</span>
              </div>
            </li>

            <li>
              <h3 className="text-[#6fab1d] font-bold mt-4 mb-1">Parapharmacy</h3>
              <div className="flex items-center gap-3">
                <MdEmail className="text-[#6fab1d] text-xl" />
                <span>iraguhapharmacie@gmail.com</span>
              </div>
            </li>

            <li>
              <h3 className="text-[#6fab1d] font-bold mt-4 mb-1">Retail Pharmacy</h3>
              <div className="flex items-center gap-3">
                <RiCustomerService2Line className="text-[#6fab1d] text-xl" />
                <span>Mon to Sun: 24/7</span>
              </div>
            </li>

            <li className="mt-4 space-y-1 font-semibold text-gray-900">
              <div>+250 783 117 737</div>
              <div>+250 783 284 720</div>
            </li>

            <li className="mt-6 font-semibold flex items-center gap-2 text-[#6fab1d]">
              <MdLocationPin className="text-xl" />
              <span>FJRQ+HQ7, Ruhengeri</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="w-full mt-10 text-center">
        <h3 className="text-gray-900 font-semibold mb-4 uppercase tracking-wide">
          Connect with us
        </h3>
        <div className="flex justify-center items-center gap-6">
          <a href="https://wa.me/250783117737" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-[#6fab1d] text-2xl hover:scale-110 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#6fab1d] text-2xl hover:scale-110 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-[#6fab1d] text-2xl hover:scale-110 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-[#6fab1d] text-2xl hover:scale-110 transition" />
          </a>
        </div>
      </div>

      <hr className="my-8 sm:mx-auto" />
    </footer>
    </RevealOnScroll>
  );
}

export default Footer;
