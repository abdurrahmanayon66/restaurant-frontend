"use client";
import React from 'react';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';
import client4 from '../assets/images/client4.png';
import client5 from '../assets/images/client5.png';
import client6 from '../assets/images/client6.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [client1, client2, client3, client4, client5, client6];

const ClientsSection = () => {
  return (
    <div className='pt-12 md:pt-32 pb-28 flex flex-col items-center overflow-hidden bg-white font-poppins'>
      <div className='gap-y-2 flex flex-col items-center mb-16 text-center px-4'>
        <h2 className='text-[#A52A2A] text-base'>Partners & Clients</h2>
        <h1 className='text-3xl md:text-5xl text-black font-bold'>We work with the best people</h1>
      </div>

      <div className="relative overflow-hidden w-full max-w-full md:max-w-7xl px-4 md:px-0 md:mx-48">
        <motion.div
          className="flex gap-x-5 md:gap-x-16"
          animate={{ x: ['-100%', '0%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: 10,
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex-shrink-0 w-[100px] h-[88px] md:w-[145px] md:h-[128px] relative">
              <Image
                src={client}
                alt={`Client ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className='w-[145px] h-[128px]'
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientsSection;
