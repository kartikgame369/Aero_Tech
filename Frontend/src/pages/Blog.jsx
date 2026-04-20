import React from 'react'

function Blog() {
    const blogPosts = [
        {
            id: 1,
            title: 'Revolutionizing Agriculture with Drone Technology',
            excerpt: 'Discover how drones are transforming modern farming practices and increasing yields.',
            date: '2024-10-20',
            image: 'UI material-20260418T180644Z-3-001/UI material/FROM THE BLOG/b1.jpg',
            category: 'Technology'
        },
        {
            id: 2,
            title: 'Precision Farming: A Guide for Modern Farmers',
            excerpt: 'Learn the fundamentals of precision agriculture and how to implement it on your farm.',
            date: '2024-10-19',
            image: 'UI material-20260418T180644Z-3-001/UI material/FROM THE BLOG/b2.jpg',
            category: 'Guide'
        },
        {
            id: 3,
            title: 'Case Study: 40% Yield Increase Using AeroTech',
            excerpt: 'Real-world results from a large-scale farm implementing our drone monitoring solutions.',
            date: '2024-10-18',
            image: 'UI material-20260418T180644Z-3-001/UI material/FROM THE BLOG/B3.jpg',
            category: 'Case Study'
        }
    ]

    return (
        <div className='bg-black text-white min-h-screen'>
            {/* Header */}
            <section className='py-20 px-16 bg-green-600'>
                <h1 className='text-5xl font-bold mb-6'>From The Blog</h1>
                <p className='text-xl text-gray-100 max-w-2xl'>Latest insights and updates from AeroTech</p>
            </section>

            {/* Blog Posts */}
            <section className='py-20 px-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {blogPosts.map((post) => (
                        <article key={post.id} className='bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-green-500 transition group cursor-pointer'>
                            {/* Image */}
                            <div className='relative h-56 overflow-hidden'>
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className='w-full h-full object-cover group-hover:scale-105 transition duration-300'
                                />
                                <div className='absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className='p-6'>
                                <p className='text-gray-400 text-sm mb-3'>
                                    {new Date(post.date).toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}
                                </p>
                                <h3 className='text-xl font-bold mb-3 group-hover:text-green-400 transition'>
                                    {post.title}
                                </h3>
                                <p className='text-gray-400 mb-6'>{post.excerpt}</p>
                                <a href='#' className='text-green-400 font-semibold hover:text-green-300 transition flex items-center'>
                                    Read More
                                    <svg className='w-4 h-4 ml-2' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className='py-20 px-16 bg-gray-900'>
                <div className='max-w-2xl mx-auto text-center'>
                    <h2 className='text-4xl font-bold mb-6'>Stay Updated</h2>
                    <p className='text-gray-400 mb-8'>Subscribe to our newsletter for the latest agriculture and drone technology insights</p>
                    <form className='flex gap-4'>
                        <input 
                            type='email' 
                            placeholder='Enter your email' 
                            className='flex-1 px-4 py-3 rounded-lg bg-black border border-green-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-400'
                        />
                        <button 
                            type='submit'
                            className='bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-bold transition'
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Blog
