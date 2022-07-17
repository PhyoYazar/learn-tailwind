import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] py-12 mx-auto'>
        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-6 capitalize'>
            The right price for your research.
          </h3>
          <p className='text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut
            omnis impedit vitae esse commodi doloribus?
          </p>
        </div>

        <div className='grid md:grid-cols-2'>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm'>
              Standard
            </span>
            <div className=''>
              <p className='text-6xl font-bold py-4 flex'>
                $49
                <span className='text-xl text-slate-500 flex items-end'>
                  /mo
                </span>
              </p>
            </div>

            <p className='text-2xl text-slate-500 py-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className='text-2xl'>
              <ul className='py-4'>
                <li className='flex'>
                  <CheckIcon className='w-8 mr-5 text-green-500' />
                  Lorem, ipsum dolor.
                </li>
                <li className='flex'>
                  <CheckIcon className='w-8 mr-5 text-green-500' />
                  Lorem, ipsum dolor.
                </li>
                <li className='flex'>
                  <CheckIcon className='w-8 mr-5 text-green-500' />
                  Lorem, ipsum dolor.
                </li>
                <li className='flex'>
                  <CheckIcon className='w-8 mr-5 text-green-500' />
                  Lorem, ipsum dolor.
                </li>
                <li className='flex'>
                  <CheckIcon className='w-8 mr-5 text-green-500' />
                  Lorem, ipsum dolor.
                </li>
              </ul>
              <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-xl text-sm'>
              Standard
            </span>
            <div className=''>
              <p className='text-6xl font-bold py-4 flex'>
                $49
                <span className='text-xl text-slate-500 flex items-end'>
                  /mo
                </span>
              </p>
            </div>

            <p className='text-2xl text-slate-500 py-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className='text-2xl'>
              <ul className='py-4'>
                <li className='flex'>
                  <CheckIcon className='w-8 mr-5 text-green-500' />
                  Lorem, ipsum dolor.
                </li>
                <li className='flex'>
                  <CheckIcon className='w-8 mr-5 text-green-500' />
                  Lorem, ipsum dolor.
                </li>
                <li className='flex'>
                  <CheckIcon className='w-8 mr-5 text-green-500' />
                  Lorem, ipsum dolor.
                </li>
                <li className='flex'>
                  <CheckIcon className='w-8 mr-5 text-green-500' />
                  Lorem, ipsum dolor.
                </li>
                <li className='flex'>
                  <CheckIcon className='w-8 mr-5 text-green-500' />
                  Lorem, ipsum dolor.
                </li>
              </ul>
              <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
