import React from 'react';
import Link from 'next/link';   
import { Button } from './ui/Button'; 
import NavBar from './NavBar';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-text-default'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href="/">
          <h1 className='text-4xl font-semibold cursor-pointer'>
            Saif <span className='text-accent'>.</span>
          </h1>
        </Link>

        <div className='hidden xl:flex items-center gap-8'>
          <NavBar />
          <Link href="/contact">
            <Button className="w-20 bg-accent text-text-default hover:bg-accent-hover" >Hire me</Button> 
          </Link>
        </div>

        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
