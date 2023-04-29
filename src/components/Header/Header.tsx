import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';
import Router from 'next/router';
import React from 'react';
import Modal from '../ui/Modal';

function addComponent () {
    Router.push('./Login/login.tsx')
  }

const Header = () => {
  return (
    <header className='transparent-header fixed top-0 left-0 z-[100] flex w-full justify-between bg-white px-4 py-3.5 sm:bg-transparent sm:px-6 lg:py-6 2xl:px-7 3xl:px-8 4xl:py-9 4xl:px-16'>
        <div>
            <Link className='brand-logo inline-flex w-full max-w-[120px] text-black focus:outline-none sm:text-white xl:max-w-[125px] 2xl:max-w-[135px] 3xl:max-w-[150px]' href={'/'}>
                <Image src={'/images/logo.svg'} alt='Header Logo' width={150} height={120}/>
            </Link>
        </div>
        <div><Modal text="Log In"/></div>
    </header>
  )
}

export default Header
