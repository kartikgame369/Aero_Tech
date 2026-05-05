import React from 'react'

function Home() {
    return (
        <div className='bg-[#0b0f0a] text-white'>
            {/* Hero Section */}
            <section className='relative h-screen'>
                <img 
                    src='UI material-20260418T180644Z-3-001/UI material/Home/background.png' 
                    alt='Hero Background' 
                    className='absolute inset-0 w-full h-full object-cover opacity-40'
                />
                <div className='absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-[#0b0f0a]'></div>
                <div className='relative z-10 flex items-center justify-between px-16 py-32'>
                    <div className='max-w-2xl'>
                        <div className='inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm mb-6'>
                            <span className='w-2 h-2 bg-lime-400 rounded-full'></span>
                            Trusted by 500+ farms
                        </div>
                        <h1 className='text-6xl font-bold mb-6 text-white'>AeroTech Solutions</h1>
                        <p className='text-xl text-gray-200 mb-8'>Revolutionary Drone Technology for Precision Agriculture</p>
                        <button className='bg-linear-to-r from-lime-500 to-green-600 hover:from-lime-400 hover:to-green-500 text-white px-8 py-3 rounded-full font-bold transition text-lg shadow-lg shadow-green-500/20'>
                            Get Started
                        </button>
                        <div className='mt-10 flex flex-wrap gap-6 text-sm text-gray-200'>
                            <div className='flex items-center gap-2'>
                                <span className='text-lime-400 font-semibold'>98%</span> detection accuracy
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-lime-400 font-semibold'>30%</span> avg yield lift
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-lime-400 font-semibold'>24/7</span> expert support
                            </div>
                        </div>
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
            <section className='py-20 px-16 bg-[#0f1510]'>
                <h2 className='text-5xl font-bold mb-4 text-center'>Our Services</h2>
                <p className='text-center text-gray-300 mb-12'>Smart tools for healthier crops and better harvests</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {/* Service 1 */}
                    <div className='bg-black/60 border border-white/10 p-8 rounded-2xl hover:shadow-lg hover:shadow-green-500/20 transition'>
                        <div className='bg-linear-to-br from-lime-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-bold mb-4'>Crop Health Monitoring</h3>
                        <p className='text-gray-400'>Real-time monitoring of crop health using advanced drone technology and AI analysis.</p>
                    </div>

                    {/* Service 2 */}
                    <div className='bg-black/60 border border-white/10 p-8 rounded-2xl hover:shadow-lg hover:shadow-green-500/20 transition'>
                        <div className='bg-linear-to-br from-lime-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-bold mb-4'>Field Mapping</h3>
                        <p className='text-gray-400'>Precise field mapping and data collection for optimized farming strategies.</p>
                    </div>

                    {/* Service 3 */}
                    <div className='bg-black/60 border border-white/10 p-8 rounded-2xl hover:shadow-lg hover:shadow-green-500/20 transition'>
                        <div className='bg-linear-to-br from-lime-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6'>
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
            <section className='py-20 px-16 text-center bg-linear-to-r from-lime-500 to-green-600'>
                <h2 className='text-4xl font-bold mb-6'>Ready to Transform Your Farm?</h2>
                <p className='text-xl mb-8 text-gray-100'>Get a free consultation from our experts today</p>
                <button className='bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition text-lg shadow-md'>
                    Book Free Consultation
                </button>
            </section>
        </div>
    )
}

export default Home
