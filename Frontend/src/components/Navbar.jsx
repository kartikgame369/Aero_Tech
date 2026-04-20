import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar({ userProfileImage }){
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    return(
        <nav className='bg-black text-white px-8 py-4 sticky top-0 z-50'>
            <div className='flex items-center justify-between'>
                {/* Logo and Brand Name */}
                <Link to="/" className='flex items-center gap-3 hover:opacity-80 transition'>
                    <img src='UI material-20260418T180644Z-3-001/UI material/Home/header logo.png' alt='AeroTech Logo' className='h-10 w-50' />   
                </Link>

                {/* Navigation Items */}
                <ul className='flex items-center gap-8'>
                    <li><Link to="/" className='hover:text-green-500 cursor-pointer transition'>Home</Link></li>
                    <li><Link to="/team" className='hover:text-green-500 cursor-pointer transition'>About us</Link></li>
                    <li><Link to="/services" className='hover:text-green-500 cursor-pointer transition'>Services</Link></li>
                    <li><Link to="/testimonials" className='hover:text-green-500 cursor-pointer transition'>Pages</Link></li>
                    <li><Link to="/blog" className='hover:text-green-500 cursor-pointer transition'>Blog</Link></li>
                    <li><a href='#contact' className='hover:text-green-500 cursor-pointer transition'>Contact</a></li>
                </ul>

                {/* Right Side Icons and Buttons */}
                <div className='flex items-center gap-6'>
                    {/* Search Icon */}
                    <button className='hover:text-green-500 transition'>
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                        </svg>
                    </button>

                    {/* Cart Icon */}
                    <button className='hover:text-green-500 transition'>
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
                        </svg>
                    </button>

                    {/* Call Button */}
                    <button className='flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition'>
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                        </svg>
                        <span className='text-sm'>Call Anytime</span>
                    </button>

                    {/* Book Now Button */}
                    <button className='bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-semibold transition'>
                        BOOK NOW
                    </button>

                    {/* Login/Signup Button */}
                    <button 
                        onClick={() => setIsLoginOpen(!isLoginOpen)}
                        className='bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-semibold transition'
                    >
                        Login/Signup
                    </button>

                    {/* User Profile Circle */}
                    <button className='flex items-center justify-center w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 transition overflow-hidden'>
                        {userProfileImage ? (
                            <img src={userProfileImage} alt='User Profile' className='w-full h-full object-cover' />
                        ) : (
                            <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 12a3 3 0 100-6 3 3 0 000 6z' />
                                <path fillRule='evenodd' d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7 12a5 5 0 1110 0 5 5 0 01-10 0z' />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;