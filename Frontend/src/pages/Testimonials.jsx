import React from 'react'

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            role: 'Farm Owner',
            text: 'AeroTech transformed my farming operations. The drone monitoring helps me make data-driven decisions and increased my yield by 30%.',
            image: 'UI material-20260418T180644Z-3-001/UI material/Our Testimonials/UI aeroTech (6).png',
            rating: 5
        },
        {
            id: 2,
            name: 'Priya Singh',
            role: 'Agricultural Consultant',
            text: 'Impressive technology and excellent customer support. AeroTech is my go-to solution for precision agriculture consultancy.',
            image: 'UI material-20260418T180644Z-3-001/UI material/Our Testimonials/UI aeroTech (7).png',
            rating: 5
        },
        {
            id: 3,
            name: 'Amit Patel',
            role: 'Large Farm Operator',
            text: 'The field mapping and analysis tools are incredibly accurate. Saved us thousands in pesticide costs alone.',
            image: 'UI material-20260418T180644Z-3-001/UI material/Our Testimonials/UI aeroTech (8).png',
            rating: 5
        }
    ]

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Header */}
            <section className='py-20 px-16 bg-green-600'>
                <h1 className='text-5xl font-bold mb-6'>What Our Clients Say</h1>
                <p className='text-xl text-gray-100 max-w-2xl'>Real results from real farmers</p>
            </section>

            {/* Testimonials Grid */}
            <section className='py-20 px-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className='bg-gray-900 p-8 rounded-lg hover:shadow-lg hover:shadow-green-500 transition'>
                            {/* Star Rating */}
                            <div className='flex mb-4'>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className='text-gray-300 mb-8 italic'>"{testimonial.text}"</p>

                            {/* Client Info */}
                            <div className='flex items-center'>
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                    className='w-12 h-12 rounded-full object-cover mr-4'
                                />
                                <div>
                                    <p className='font-bold'>{testimonial.name}</p>
                                    <p className='text-green-400 text-sm'>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className='py-20 px-16 bg-gray-900'>
                <h2 className='text-4xl font-bold mb-12 text-center'>Our Impact</h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
                    <div>
                        <p className='text-5xl font-bold text-green-400 mb-2'>500+</p>
                        <p className='text-gray-400'>Happy Clients</p>
                    </div>
                    <div>
                        <p className='text-5xl font-bold text-green-400 mb-2'>50K+</p>
                        <p className='text-gray-400'>Acres Monitored</p>
                    </div>
                    <div>
                        <p className='text-5xl font-bold text-green-400 mb-2'>30%</p>
                        <p className='text-gray-400'>Avg Yield Increase</p>
                    </div>
                    <div>
                        <p className='text-5xl font-bold text-green-400 mb-2'>24/7</p>
                        <p className='text-gray-400'>Customer Support</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 px-16 text-center'>
                <h2 className='text-4xl font-bold mb-6'>Join Hundreds of Satisfied Farmers</h2>
                <p className='text-xl text-gray-400 mb-8'>Get your free consultation today</p>
                <button className='bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-bold transition text-lg'>
                    Get Started Now
                </button>
            </section>
        </div>
    )
}

export default Testimonials
