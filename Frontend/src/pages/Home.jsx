import React from 'react'

function Home() {
    return (
        <div className='bg-black text-white'>
            {/* Hero Section */}
            <section className='relative h-screen'>
                <img 
                    src='UI material-20260418T180644Z-3-001/UI material/Home/background.png' 
                    alt='Hero Background' 
                    className='absolute inset-0 w-full h-full object-cover opacity-40'
                />
                <div className='relative z-10 flex items-center justify-between px-16 py-32'>
                    <div className='max-w-2xl'>
                        <h1 className='text-6xl font-bold mb-6 text-white'>AeroTech Solutions</h1>
                        <p className='text-xl text-gray-300 mb-8'>Revolutionary Drone Technology for Precision Agriculture</p>
                        <button className='bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition text-lg'>
                            Get Started
                        </button>
                    </div>
                    <div className='hidden lg:block'>
                        <img 
                            src='UI material-20260418T180644Z-3-001/UI material/Home/man with drone.png' 
                            alt='Man with Drone' 
                            className='w-96 h-auto'
                        />
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className='py-20 px-16 bg-gray-900'>
                <h2 className='text-5xl font-bold mb-16 text-center'>Our Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {/* Service 1 */}
                    <div className='bg-black p-8 rounded-lg hover:shadow-lg hover:shadow-green-500 transition'>
                        <div className='bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-bold mb-4'>Crop Health Monitoring</h3>
                        <p className='text-gray-400'>Real-time monitoring of crop health using advanced drone technology and AI analysis.</p>
                    </div>

                    {/* Service 2 */}
                    <div className='bg-black p-8 rounded-lg hover:shadow-lg hover:shadow-green-500 transition'>
                        <div className='bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-bold mb-4'>Field Mapping</h3>
                        <p className='text-gray-400'>Precise field mapping and data collection for optimized farming strategies.</p>
                    </div>

                    {/* Service 3 */}
                    <div className='bg-black p-8 rounded-lg hover:shadow-lg hover:shadow-green-500 transition'>
                        <div className='bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-bold mb-4'>Precision Agriculture</h3>
                        <p className='text-gray-400'>Advanced analytics for precision farming and resource optimization.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className='py-20 px-16 text-center bg-green-600'>
                <h2 className='text-4xl font-bold mb-6'>Ready to Transform Your Farm?</h2>
                <p className='text-xl mb-8 text-gray-100'>Get a free consultation from our experts today</p>
                <button className='bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition text-lg'>
                    Book Free Consultation
                </button>
            </section>
        </div>
    )
}

export default Home
