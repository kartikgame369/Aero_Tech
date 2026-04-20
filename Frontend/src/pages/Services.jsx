import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Services() {
    const navigate = useNavigate()
    const [activeService, setActiveService] = useState(null)

    const services = [
        {
            id: 1,
            title: 'Crop Health Monitoring',
            description: 'Advanced drone imaging with AI-powered analysis to detect crop diseases early and optimize treatment.',
            longDescription: 'Our cutting-edge drone technology combined with artificial intelligence helps you monitor your crops in real-time. Early disease detection means faster intervention and better yields.',
            image: 'UI material-20260418T180644Z-3-001/UI material/main our services home_services page/crop health.jpg',
            features: ['Real-time monitoring', 'Disease detection', 'Treatment recommendations'],
            benefits: ['Early disease detection', '40% reduction in crop loss', 'Automated alerts', 'Historical data tracking'],
            icon: '🌾'
        },
        {
            id: 2,
            title: 'Field Mapping',
            description: 'High-resolution aerial mapping to create detailed field maps for better farm management.',
            longDescription: 'Create precise 3D models and maps of your fields with cm-level accuracy. Perfect for planning, analysis, and future reference.',
            image: 'UI material-20260418T180644Z-3-001/UI material/main our services home_services page/field mapping.png',
            features: ['3D mapping', 'Boundary detection', 'Area calculation'],
            benefits: ['Accurate field measurements', 'Better planning', 'Boundary identification', 'Change tracking'],
            icon: '📍'
        },
        {
            id: 3,
            title: 'Precision Agriculture',
            description: 'Data-driven farming solutions to maximize yield and minimize resource waste.',
            longDescription: 'Optimize every aspect of your farming with data-driven decisions. Use AI analytics to determine the best fertilizer, water, and pesticide amounts for each field zone.',
            image: 'UI material-20260418T180644Z-3-001/UI material/main our services home_services page/Precision agri.png',
            features: ['Yield optimization', 'Resource planning', 'Cost reduction'],
            benefits: ['30% yield increase', '25% cost savings', 'Sustainable farming', 'Custom recommendations'],
            icon: '📊'
        },
        {
            id: 4,
            title: 'HMC Analysis',
            description: 'Comprehensive analysis using Heat Map Composite technology for informed decisions.',
            longDescription: 'Advanced Heat Map Composite technology reveals patterns in your fields that are invisible to the naked eye. Make informed decisions based on visual data.',
            image: 'UI material-20260418T180644Z-3-001/UI material/main our services home_services page/HMC.png',
            features: ['Heat mapping', 'Pattern analysis', 'Predictive insights'],
            benefits: ['Identify problem areas', 'Prevent issues', 'Maximize efficiency', 'Data visualization'],
            icon: '🔥'
        }
    ]

    const whyChooseUs = [
        { icon: '✈️', title: 'Drone Fleet', description: 'Latest drone technology with extended flight time' },
        { icon: '🤖', title: 'AI-Powered', description: 'Advanced machine learning for accurate analysis' },
        { icon: '📱', title: 'Easy to Use', description: 'Simple dashboard accessible from anywhere' },
        { icon: '24/7', title: '24/7 Support', description: 'Expert support team ready to help anytime' },
        { icon: '💰', title: 'Affordable', description: 'Flexible pricing options for all farm sizes' },
        { icon: '🎯', title: 'Accurate', description: 'Precision data you can rely on' }
    ]

    const process = [
        { step: 1, title: 'Schedule', description: 'Book your service at your convenience' },
        { step: 2, title: 'Deploy', description: 'Our drones survey your fields' },
        { step: 3, title: 'Analyze', description: 'AI analyzes the data instantly' },
        { step: 4, title: 'Deliver', description: 'Get insights through our dashboard' },
        { step: 5, title: 'Support', description: 'Our experts help you take action' }
    ]

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Hero Header */}
            <section className='relative py-32 px-16 overflow-hidden'>
                <div className='absolute inset-0 opacity-30'>
                    <img 
                        src='UI material-20260418T180644Z-3-001/UI material/main our services home_services page/background.png' 
                        alt='Background' 
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='relative z-10'>
                    <h1 className='text-6xl font-bold mb-6 text-green-400'>Our Premium Services</h1>
                    <p className='text-2xl text-gray-300 max-w-3xl mb-8'>Transform your agriculture with cutting-edge drone technology and AI-powered insights</p>
                    <div className='flex gap-4'>
                        <button className='bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-bold transition'>
                            View Pricing
                        </button>
                        <button className='border-2 border-green-600 hover:border-green-500 px-8 py-3 rounded-lg font-bold transition'>
                            Request Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Grid with Enhanced Cards */}
            <section className='py-20 px-16'>
                <div className='mb-12'>
                    <h2 className='text-4xl font-bold text-center mb-4'>Featured Services</h2>
                    <p className='text-gray-400 text-center max-w-2xl mx-auto'>Choose the services that best fit your farming needs</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {services.map((service) => (
                        <div 
                            key={service.id} 
                            className='group bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-green-500/50 transition duration-300 cursor-pointer'
                            onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                        >
                            {/* Image Container */}
                            <div className='relative h-40 overflow-hidden'>
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className='w-full h-full object-cover group-hover:scale-110 transition duration-300'
                                />
                                <div className='absolute inset-0 bg-black/40'></div>
                                <div className='absolute top-4 right-4 text-3xl'>{service.icon}</div>
                            </div>

                            {/* Content */}
                            <div className='p-4'>
                                <h3 className='text-lg font-bold mb-2 group-hover:text-green-400 transition'>{service.title}</h3>
                                <p className='text-gray-400 mb-4 text-sm'>{service.description}</p>

                                {/* Features List */}
                                <div className='space-y-1 mb-4'>
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className='flex items-center text-green-400 text-xs'>
                                            <svg className='w-4 h-4 mr-2 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' />
                                            </svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Expandable Benefits */}
                                {activeService === service.id && (
                                    <div className='bg-gray-700/30 p-3 rounded-lg mb-4 border border-green-600/30'>
                                        <p className='text-xs font-semibold text-green-400 mb-2'>Key Benefits:</p>
                                        <ul className='space-y-1'>
                                            {service.benefits.map((benefit, idx) => (
                                                <li key={idx} className='text-gray-300 text-xs flex items-center'>
                                                    <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <button className='w-full bg-green-600 hover:bg-green-700 py-2 px-3 text-sm rounded-lg font-bold transition group-hover:shadow-lg group-hover:shadow-green-500/50'>
                                    {activeService === service.id ? 'Hide Details' : 'View Details'}
                                </button>

                                {service.id === 1 && (
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            navigate('/services/disease-detection')
                                        }}
                                        className='w-full bg-blue-600 hover:bg-blue-700 py-2 px-3 text-sm rounded-lg font-bold transition mt-2 group-hover:shadow-lg group-hover:shadow-blue-500/50'
                                    >
                                        Try Disease Detection
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className='py-20 px-16 bg-gray-900'>
                <h2 className='text-4xl font-bold text-center mb-12'>Why Choose AeroTech?</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {whyChooseUs.map((item, idx) => (
                        <div key={idx} className='bg-black p-6 rounded-lg border border-green-600/30 hover:border-green-500 transition'>
                            <p className='text-4xl mb-4'>{item.icon}</p>
                            <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
                            <p className='text-gray-400'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className='py-20 px-16'>
                <h2 className='text-4xl font-bold text-center mb-12'>How It Works</h2>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                    {process.map((item, idx) => (
                        <div key={idx} className='text-center'>
                            <div className='bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold'>
                                {item.step}
                            </div>
                            <h4 className='font-bold mb-2'>{item.title}</h4>
                            <p className='text-gray-400 text-sm'>{item.description}</p>
                            {idx < process.length - 1 && (
                                <div className='hidden md:block text-green-600 text-2xl mt-4'>→</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Table */}
            <section className='py-20 px-16 bg-gray-900'>
                <h2 className='text-4xl font-bold text-center mb-12'>Service Comparison</h2>
                <div className='overflow-x-auto'>
                    <table className='w-full text-sm'>
                        <thead>
                            <tr className='border-b-2 border-green-600'>
                                <th className='text-left py-4 px-6 font-bold'>Feature</th>
                                <th className='text-center py-4 px-6'>Crop Health</th>
                                <th className='text-center py-4 px-6'>Field Mapping</th>
                                <th className='text-center py-4 px-6'>Precision Ag</th>
                                <th className='text-center py-4 px-6'>HMC Analysis</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { feature: 'Real-time Data', crop: '✓', field: '✓', precision: '✓', hmc: '✓' },
                                { feature: 'AI Analysis', crop: '✓', field: '✗', precision: '✓', hmc: '✓' },
                                { feature: '3D Mapping', crop: '✗', field: '✓', precision: '✓', hmc: '✗' },
                                { feature: 'Historical Tracking', crop: '✓', field: '✓', precision: '✓', hmc: '✓' },
                                { feature: 'Mobile App', crop: '✓', field: '✓', precision: '✓', hmc: '✓' }
                            ].map((row, idx) => (
                                <tr key={idx} className='border-b border-gray-700 hover:bg-gray-800 transition'>
                                    <td className='py-4 px-6 font-semibold'>{row.feature}</td>
                                    <td className='text-center py-4 px-6 text-green-400'>{row.crop}</td>
                                    <td className='text-center py-4 px-6 text-green-400'>{row.field}</td>
                                    <td className='text-center py-4 px-6 text-green-400'>{row.precision}</td>
                                    <td className='text-center py-4 px-6 text-green-400'>{row.hmc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Statistics */}
            <section className='py-20 px-16'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
                    <div className='bg-gray-900 p-8 rounded-lg'>
                        <p className='text-5xl font-bold text-green-400 mb-3'>500+</p>
                        <p className='text-gray-400'>Active Users</p>
                    </div>
                    <div className='bg-gray-900 p-8 rounded-lg'>
                        <p className='text-5xl font-bold text-green-400 mb-3'>50K+</p>
                        <p className='text-gray-400'>Acres Monitored</p>
                    </div>
                    <div className='bg-gray-900 p-8 rounded-lg'>
                        <p className='text-5xl font-bold text-green-400 mb-3'>30%</p>
                        <p className='text-gray-400'>Avg Yield Increase</p>
                    </div>
                    <div className='bg-gray-900 p-8 rounded-lg'>
                        <p className='text-5xl font-bold text-green-400 mb-3'>98%</p>
                        <p className='text-gray-400'>Accuracy Rate</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 px-16 text-center bg-green-600'>
                <h2 className='text-4xl font-bold mb-6'>Ready to Get Started?</h2>
                <p className='text-xl text-gray-100 mb-8 max-w-2xl mx-auto'>Join hundreds of farmers already using AeroTech to increase yields and reduce costs</p>
                <div className='flex flex-col sm:flex-row justify-center gap-4'>
                    <button className='bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition'>
                        Book Free Consultation
                    </button>
                    <button className='border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition'>
                        Download Brochure
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Services
