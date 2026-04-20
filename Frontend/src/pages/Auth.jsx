import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Auth() {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // Login form state
    const [loginData, setLoginData] = useState({
        emailId: '',
        password: ''
    })

    // Signup form state
    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        password: '',
        confirmPassword: ''
    })

    const API_BASE_URL = 'http://localhost:5000'

    // Handle Logout
    const handleLogout = async () => {
        try {
            await axios.post(
                `${API_BASE_URL}/logout`,
                {},
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setError('')
            setSuccess('Logged out successfully')
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } catch (err) {
            console.error('Logout error:', err)
        }
    }

    // Handle Login Input Change
    const handleLoginChange = (e) => {
        const { name, value } = e.target
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }))
        setError('')
    }

    // Handle Signup Input Change
    const handleSignupChange = (e) => {
        const { name, value } = e.target
        setSignupData(prev => ({
            ...prev,
            [name]: value
        }))
        setError('')
    }

    // Handle Login Submit
    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess('')

        try {
            if (!loginData.emailId || !loginData.password) {
                setError('Please fill in all fields')
                setLoading(false)
                return
            }

            const response = await axios.post(
                `${API_BASE_URL}/login`,
                {
                    emailId: loginData.emailId,
                    password: loginData.password
                },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            // Handle successful login
            if (response.data.success) {
                // Store token in localStorage
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token)
                }
                if (response.data.user) {
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                }

                setSuccess(response.data.message || 'Login successful! Redirecting...')
                setLoginData({ emailId: '', password: '' })
                
                setTimeout(() => {
                    navigate('/')
                }, 1500)
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || 'Login failed. Please try again.'
            setError(errorMessage)
        } finally {
            setLoading(false)
        }
    }

    // Handle Signup Submit
    const handleSignupSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess('')

        try {
            // Validation
            if (!signupData.firstName || !signupData.lastName || !signupData.emailId || !signupData.password) {
                setError('Please fill in all fields')
                setLoading(false)
                return
            }

            if (signupData.password !== signupData.confirmPassword) {
                setError('Passwords do not match')
                setLoading(false)
                return
            }

            if (signupData.password.length < 6) {
                setError('Password must be at least 6 characters')
                setLoading(false)
                return
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(signupData.emailId)) {
                setError('Please enter a valid email address')
                setLoading(false)
                return
            }

            const response = await axios.post(
                `${API_BASE_URL}/signup`,
                {
                    firstName: signupData.firstName,
                    lastName: signupData.lastName,
                    emailId: signupData.emailId,
                    password: signupData.password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            // Handle successful signup
            if (response.data.success) {
                setSuccess(response.data.message || 'Signup successful! Please login now.')
                setTimeout(() => {
                    setSignupData({ firstName: '', lastName: '', emailId: '', password: '', confirmPassword: '' })
                    setIsLogin(true)
                }, 1500)
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || 'Signup failed. Please try again.'
            setError(errorMessage)
        } finally {
            setLoading(false)
        }
    }

    // Handle Google Login
    const handleGoogleLogin = () => {
        // Google OAuth implementation
        // You'll need to set up Google OAuth in your backend
        console.log('Google login clicked - implement OAuth flow')
        // For now, show a message
        setError('Google login will be available soon. Please use email/password.')
    }

    return (
        <div className='bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center py-12 px-4'>
            {/* Main Container */}
            <div className='w-full max-w-md'>
                {/* Card */}
                <div className='bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-green-600/30'>
                    {/* Header */}
                    <div className='bg-green-600 py-8 px-6 text-center'>
                        <h1 className='text-3xl font-bold text-white mb-2'>AeroTech</h1>
                        <p className='text-green-100'>{isLogin ? 'Welcome Back' : 'Join Us'}</p>
                    </div>

                    {/* Content */}
                    <div className='p-8'>
                        {/* Error Message */}
                        {error && (
                            <div className='bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-6 text-sm'>
                                ✗ {error}
                            </div>
                        )}

                        {/* Success Message */}
                        {success && (
                            <div className='bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-6 text-sm'>
                                ✓ {success}
                            </div>
                        )}

                        {/* Login Form */}
                        {isLogin ? (
                            <form onSubmit={handleLoginSubmit} className='space-y-4'>
                                <div>
                                    <label className='block text-gray-300 text-sm font-semibold mb-2'>Email</label>
                                    <input
                                        type='email'
                                        name='emailId'
                                        value={loginData.emailId}
                                        onChange={handleLoginChange}
                                        placeholder='your@email.com'
                                        className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none transition'
                                        disabled={loading}
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-300 text-sm font-semibold mb-2'>Password</label>
                                    <input
                                        type='password'
                                        name='password'
                                        value={loginData.password}
                                        onChange={handleLoginChange}
                                        placeholder='••••••••'
                                        className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none transition'
                                        disabled={loading}
                                    />
                                </div>

                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            </form>
                        ) : (
                            <form onSubmit={handleSignupSubmit} className='space-y-4'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label className='block text-gray-300 text-sm font-semibold mb-2'>First Name</label>
                                        <input
                                            type='text'
                                            name='firstName'
                                            value={signupData.firstName}
                                            onChange={handleSignupChange}
                                            placeholder='John'
                                            className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none transition'
                                            disabled={loading}
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-gray-300 text-sm font-semibold mb-2'>Last Name</label>
                                        <input
                                            type='text'
                                            name='lastName'
                                            value={signupData.lastName}
                                            onChange={handleSignupChange}
                                            placeholder='Doe'
                                            className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none transition'
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className='block text-gray-300 text-sm font-semibold mb-2'>Email</label>
                                    <input
                                        type='email'
                                        name='emailId'
                                        value={signupData.emailId}
                                        onChange={handleSignupChange}
                                        placeholder='your@email.com'
                                        className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none transition'
                                        disabled={loading}
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-300 text-sm font-semibold mb-2'>Password</label>
                                    <input
                                        type='password'
                                        name='password'
                                        value={signupData.password}
                                        onChange={handleSignupChange}
                                        placeholder='••••••••'
                                        className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none transition'
                                        disabled={loading}
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-300 text-sm font-semibold mb-2'>Confirm Password</label>
                                    <input
                                        type='password'
                                        name='confirmPassword'
                                        value={signupData.confirmPassword}
                                        onChange={handleSignupChange}
                                        placeholder='••••••••'
                                        className='w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:outline-none transition'
                                        disabled={loading}
                                    />
                                </div>

                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {loading ? 'Signing up...' : 'Sign Up'}
                                </button>
                            </form>
                        )}

                        {/* Google Login Button */}
                        <div className='mt-6'>
                            <button
                                onClick={handleGoogleLogin}
                                className='w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 rounded-lg transition'
                            >
                                <svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor'>
                                    <path d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/>
                                    <path d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/>
                                    <path d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/>
                                    <path d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/>
                                </svg>
                                Continue with Google
                            </button>
                        </div>

                        {/* Toggle Form */}
                        <div className='mt-6 pt-6 border-t border-gray-600 text-center'>
                            <p className='text-gray-400 text-sm'>
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    type='button'
                                    onClick={() => {
                                        setIsLogin(!isLogin)
                                        setError('')
                                        setSuccess('')
                                    }}
                                    className='text-green-400 hover:text-green-300 font-semibold transition'
                                >
                                    {isLogin ? 'Sign Up' : 'Login'}
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className='bg-gray-900 px-8 py-4 text-center text-gray-400 text-xs border-t border-gray-700'>
                        <p>By continuing, you agree to our Terms & Privacy Policy</p>
                    </div>
                </div>

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className='w-full mt-6 text-gray-400 hover:text-gray-300 flex items-center justify-center gap-2 transition'
                >
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z' />
                    </svg>
                    Back to Home
                </button>
            </div>
        </div>
    )
}

export default Auth
