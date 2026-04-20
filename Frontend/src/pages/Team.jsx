import React from 'react'

function Team() {
    const teamMembers = [
        {
            id: 1,
            name: 'Team Member 1',
            role: 'Lead Drone Pilot',
            image: 'UI material-20260418T180644Z-3-001/UI material/our team/@1.png',
            bio: 'Expert in drone operations and aerial imaging'
        },
        {
            id: 2,
            name: 'Team Member 2',
            role: 'Agricultural Specialist',
            image: 'UI material-20260418T180644Z-3-001/UI material/our team/@2.png',
            bio: 'PhD in Agricultural Science with 10+ years experience'
        },
        {
            id: 3,
            name: 'Team Member 3',
            role: 'AI & Data Scientist',
            image: 'UI material-20260418T180644Z-3-001/UI material/our team/@3.png',
            bio: 'Specialized in machine learning for agricultural analytics'
        },
        {
            id: 4,
            name: 'Team Member 4',
            role: 'Field Operations Manager',
            image: 'UI material-20260418T180644Z-3-001/UI material/our team/@4.png',
            bio: 'Manages on-ground operations and client relationships'
        },
        {
            id: 5,
            name: 'Team Member 5',
            role: 'Software Engineer',
            image: 'UI material-20260418T180644Z-3-001/UI material/our team/@5.png',
            bio: 'Develops cutting-edge software solutions'
        }
    ]

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Header */}
            <section className='py-20 px-16 bg-green-600'>
                <h1 className='text-5xl font-bold mb-6'>Our Team</h1>
                <p className='text-xl text-gray-100 max-w-2xl'>Meet the experts behind AeroTech</p>
            </section>

            {/* Team Members Grid */}
            <section className='py-20 px-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
                    {teamMembers.map((member) => (
                        <div key={member.id} className='group text-center'>
                            <div className='relative mb-6 overflow-hidden rounded-lg'>
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className='w-full h-72 object-cover group-hover:scale-105 transition duration-300'
                                />
                                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition'></div>
                            </div>
                            <h3 className='text-xl font-bold mb-2'>{member.name}</h3>
                            <p className='text-green-400 font-semibold mb-3'>{member.role}</p>
                            <p className='text-gray-400 text-sm'>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Values */}
            <section className='py-20 px-16 bg-gray-900'>
                <h2 className='text-4xl font-bold mb-12 text-center'>Why Our Team Stands Out</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='text-center'>
                        <div className='bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-bold mb-3'>Industry Experts</h3>
                        <p className='text-gray-400'>Years of combined experience in agriculture and drone technology</p>
                    </div>
                    <div className='text-center'>
                        <div className='bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M6.707 6.707a1 1 0 010 1.414L5.414 9l1.293 1.293a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0zm7.586 0a1 1 0 010 1.414L14.586 9l-1.293 1.293a1 1 0 101.414 1.414l2-2a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 0zM9 5a1 1 0 011 1v4a1 1 0 11-2 0V6a1 1 0 011-1z' />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-bold mb-3'>Tech Innovators</h3>
                        <p className='text-gray-400'>Constantly developing new solutions and improving our technology</p>
                    </div>
                    <div className='text-center'>
                        <div className='bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v2h8v-2zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-2a4 4 0 00-8 0v2a2 2 0 002 2h4a2 2 0 002-2z' />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-bold mb-3'>Client Focused</h3>
                        <p className='text-gray-400'>Dedicated to delivering exceptional results for every client</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team
