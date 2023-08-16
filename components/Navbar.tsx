import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <Link href='/'>
            <div className='flex items-center cursor-pointer'>
                <Image height={35} width={40} src='/small_assets/openzor.jpg' />
                <span className='font-bold ml-2 text-purple-500 '> BlogHub</span>
            </div>
        </Link>
        <ul className='flex items-center'>
            <li className='mr-6 font-medium text-white'>
            <a href="#">Products</a>
            </li>
            <li className='mr-6 font-medium text-white'>
            <a href="#">Products</a>
            </li>
            <li className='mr-6 font-medium text-white'>
            <a href="#">Products</a>
            </li>
            <li className='mr-6 font-medium text-white'>
            <a href="#">Products</a>
            </li>
        </ul>
        <ul className='flex items-center'>
            <li className='mr-6 font-medium text-gray-200'>
                <a href='#' className='hover:text-gray-50'>Login</a>
            </li>
            <li className='mr-6 font-medium text-gray-200'>
                <a href='#' className='bg-purple-400 py-2 px-4 rounded-sm text-white hover:bg-purple-700 transition-all'>Signup</a>
            </li>

        </ul>
    </nav>
  )
}

export default Navbar