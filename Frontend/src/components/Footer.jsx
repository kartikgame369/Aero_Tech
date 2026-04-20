import React from "react";

function Footer() {
    return (
        <footer className='bg-black text-white border-t border-green-600'>
            {/* Main Footer */}
            <div className='px-16 py-20'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
                    {/* Brand Section */}
                    <div>
                        <div className='flex items-center gap-3 mb-6'>
                            <img 
                                src='UI material-20260418T180644Z-3-001/UI material/Home/header logo.png' 
                                alt='AeroTech Logo' 
                                className='h-10 w-10'
                            />
                            <span className='text-xl font-bold'>AeroTech</span>
                        </div>
                        <p className='text-gray-400'>Transforming agriculture with innovative drone technology and AI solutions.</p>
                        <div className='flex gap-4 mt-6'>
                            <a href='#' className='bg-green-600 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition'>
                                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                                </svg>
                            </a>
                            <a href='#' className='bg-green-600 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition'>
                                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7-1.33.67-4.67 1.33-5-4z' />
                                </svg>
                            </a>
                            <a href='#' className='bg-green-600 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition'>
                                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='text-lg font-bold mb-6'>Quick Links</h4>
                        <ul className='space-y-3'>
                            <li><a href='#' className='text-gray-400 hover:text-green-400 transition'>Home</a></li>
                            <li><a href='#' className='text-gray-400 hover:text-green-400 transition'>Services</a></li>
                            <li><a href='#' className='text-gray-400 hover:text-green-400 transition'>About Us</a></li>
                            <li><a href='#' className='text-gray-400 hover:text-green-400 transition'>Blog</a></li>
                            <li><a href='#' className='text-gray-400 hover:text-green-400 transition'>Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className='text-lg font-bold mb-6'>Services</h4>
                        <ul className='space-y-3'>
                            <li><a href='#' className='text-gray-400 hover:text-green-400 transition'>Crop Monitoring</a></li>
                            <li><a href='#' className='text-gray-400 hover:text-green-400 transition'>Field Mapping</a></li>
                            <li><a href='#' className='text-gray-400 hover:text-green-400 transition'>Precision Agriculture</a></li>
                            <li><a href='#' className='text-gray-400 hover:text-green-400 transition'>Consultancy</a></li>
                            <li><a href='#' className='text-gray-400 hover:text-green-400 transition'>Support</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className='text-lg font-bold mb-6'>Get in Touch</h4>
                        <div className='space-y-4'>
                            <div className='flex items-start'>
                                <svg className='w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                                </svg>
                                <span className='text-gray-400'>contact@aerotech.com</span>
                            </div>
                            <div className='flex items-start'>
                                <svg className='w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.542 1.518 1.685 3.427 3.339 5.081.653.653 1.421 1.409 2.634 2.209l.087.06c.27.196.549.453.675.645.125.192.154.46.154.46l1.02 4.93a1 1 0 01-.766 1.22l-1.921.485A2 2 0 102.969 15.422l-1.286-1.031A1 1 0 012 13.057V3z' />
                                </svg>
                                <span className='text-gray-400'>+91 99999-99999</span>
                            </div>
                            <div className='flex items-start'>
                                <svg className='w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' />
                                </svg>
                                <span className='text-gray-400'>India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-800 pt-8 mt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center text-gray-400'>
                        <p>&copy; 2024 AeroTech. All rights reserved.</p>
                        <div className='flex gap-6 mt-4 md:mt-0'>
                            <a href='#' className='hover:text-green-400 transition'>Privacy Policy</a>
                            <a href='#' className='hover:text-green-400 transition'>Terms of Service</a>
                            <a href='#' className='hover:text-green-400 transition'>Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;