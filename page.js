import React from 'react';
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pd-24'>
          <div className='text-center xl:text-left'>
            <span className='text-accent text-xl'>Full Stack Software Developer</span>
            <h1 style={{ marginTop: "30px" }} className='h1'>
              Hello I'm <br />
              <span className='text-accent'>Saif El Islem Bousselmi<span className='text-text-default'>.</span></span>
            </h1>
            <p className='max-w-[500px] mt-12 text-text-default'>
              I'm proficient in both front-end and back-end technologies, enabling me to build complete web applications from user interfaces to server-side logic with many languages.
            </p>
          </div>
          <div>
            <div className='mt-12 xl:mt-0'>
              <img src= "" alt='Hero' className='w-full' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
