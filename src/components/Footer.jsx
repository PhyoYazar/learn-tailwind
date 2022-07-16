import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div className=''>
          <h6 className='font-bold uppercase pt-2'>Solutions</h6>
          <ul className=''>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Data</li>
            <li className='py-1'>Cloud</li>
          </ul>
        </div>
        <div className=''>
          <h6 className='font-bold uppercase pt-2'>Support</h6>
          <ul className=''>
            <li className='py-1'>Pricing</li>
            <li className='py-1'>Documentation</li>
            <li className='py-1'>Guides</li>
            <li className='py-1'>API status</li>
          </ul>
        </div>
        <div className=''>
          <h6 className='font-bold uppercase pt-2'>Company</h6>
          <ul className=''>
            <li className='py-1'>About</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Job</li>
            <li className='py-1'>Press</li>
            <li className='py-1'>Partners</li>
          </ul>
        </div>
        <div className=''>
          <h6 className='font-bold uppercase pt-2'>Legal</h6>
          <ul className=''>
            <li className='py-1'>Claims</li>
            <li className='py-1'>Privacy</li>
            <li className='py-1'>Terms</li>
            <li className='py-1'>Policies</li>
            <li className='py-1'>Conditions</li>
          </ul>
        </div>

        <div className='col-span-2 pt-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletter</p>
          <p className='py-4'>
            The latest news, articles and resources, sent to your inbox weekly.
          </p>

          <form className='flex flex-col sm:flex-row'>
            <input
              type='email'
              className='w-full rounded-md mb-4 p-2 mr-4'
              placeholder='Enter email'
            />
            <button className='p-2 mb-4'>Subscribe</button>
          </form>
        </div>
      </div>

      <div
        className='max-w-[1240px] mx-auto px-2 py-4 mt-2 flex justify-between items-center flex-col sm:flex-row
       text-center text-gray-500'
      >
        <p className=''>2022 Workflow, LLC, All rights reserved.</p>
        <div className='flex gap-2 text-2xl mt-4 sm:mt-0'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
