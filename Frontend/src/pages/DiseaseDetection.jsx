import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DiseaseDetection() {
    const navigate = useNavigate()
    const [selectedDataset, setSelectedDataset] = useState(null)
    const [uploadedFile, setUploadedFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState(null)
    const [error, setError] = useState('')

    const serviceBaseUrl = import.meta.env.VITE_CROP_SERVICE_URL || 'http://localhost:8080'

    const handleFileUpload = (e) => {
        setUploadedFile(e.target.files[0])
        setSelectedDataset('upload')
    }

    const handlePredefined = () => {
        setSelectedDataset('predefined')
    }

    const handleProcess = () => {
        if (!selectedDataset) {
            alert('Please select or upload a dataset first')
            return
        }

        if (selectedDataset !== 'upload' || !uploadedFile) {
            setError('Please upload a crop image or video to run detection.')
            return
        }

        setError('')
        setResult(null)
        setIsLoading(true)

        const formData = new FormData()
        formData.append('file', uploadedFile)

        fetch(`${serviceBaseUrl}/upload_file`, {
            method: 'POST',
            body: formData
        })
            .then(async (response) => {
                if (!response.ok) {
                    const message = await response.text()
                    throw new Error(message || 'Upload failed')
                }
                return response.json()
            })
            .then((data) => {
                setResult(data)
            })
            .catch((err) => {
                setError(err.message || 'Something went wrong')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className='bg-gray-50 min-h-screen'>
            {/* Header */}
            <section className='bg-black text-white py-8 px-16'>
                <button 
                    onClick={() => navigate('/services')}
                    className='mb-6 flex items-center text-green-400 hover:text-green-300 transition'
                >
                    <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z' />
                    </svg>
                    Back to Services
                </button>
                <div className='flex items-center gap-2 mb-4'>
                    <span className='text-2xl'>🌾</span>
                    <h2 className='text-xl font-semibold text-green-400'>Health Monitoring Of Crops</h2>
                </div>
                <h1 className='text-5xl font-bold'>DISEASE DETECTION</h1>
                <p className='text-gray-300 mt-4 max-w-2xl'>Upload your crop dataset or use our predefined datasets to detect diseases and compare crop health</p>
            </section>

            {/* Main Content */}
            <section className='py-20 px-16 max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    
                    {/* Uploading Dataset */}
                    <div className='bg-white rounded-xl shadow-lg p-8 border-2 border-green-200 hover:border-green-500 transition'>
                        <div className='mb-6'>
                            <h2 className='text-2xl font-bold text-gray-800'>
                                <span className='text-green-500'>Uploading </span>
                                <span className='text-green-500'>Dataset</span>
                            </h2>
                        </div>
                        <p className='text-gray-600 mb-8'>Upload the dataset for the specific crop you wish to compare.</p>
                        
                        <label className='block'>
                            <input 
                                type='file' 
                                onChange={handleFileUpload}
                                className='hidden'
                            />
                            <div className='bg-green-50 border-2 border-dashed border-green-400 rounded-lg p-8 cursor-pointer hover:border-green-600 transition text-center'>
                                <div className='text-5xl mb-4'>
                                    {uploadedFile ? '✓' : '📁'}
                                </div>
                                <h3 className='font-bold text-gray-800 mb-4'>IMPORT YOUR FILES</h3>
                                
                                <div className='flex gap-6 justify-center mb-4'>
                                    <div className='text-center'>
                                        <div className='text-3xl mb-2'>📄</div>
                                        <p className='font-semibold text-gray-700'>Google drive</p>
                                    </div>
                                    <div className='text-center'>
                                        <div className='text-3xl mb-2'>📁</div>
                                        <p className='font-semibold text-gray-700'>Browse</p>
                                    </div>
                                </div>

                                {uploadedFile && (
                                    <p className='text-green-600 font-semibold mt-4'>
                                        ✓ {uploadedFile.name}
                                    </p>
                                )}
                            </div>
                        </label>

                        <button 
                            onClick={() => setSelectedDataset('upload')}
                            className={`w-full mt-6 py-3 px-4 rounded-lg font-bold transition ${
                                selectedDataset === 'upload' 
                                    ? 'bg-green-600 text-white shadow-lg' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {selectedDataset === 'upload' ? '✓ Selected' : 'Select This Option'}
                        </button>
                    </div>

                    {/* Predefined Dataset */}
                    <div className='bg-white rounded-xl shadow-lg p-8 border-2 border-green-200 hover:border-green-500 transition'>
                        <div className='mb-6'>
                            <h2 className='text-2xl font-bold text-gray-800'>
                                <span className='text-green-500'>Predefined </span>
                                <span className='text-green-500'>Dataset</span>
                            </h2>
                        </div>
                        <p className='text-gray-600 mb-8'>Select the predefined dataset that corresponds to the crop you have chosen.</p>
                        
                        <div className='bg-green-50 border-2 border-dashed border-green-400 rounded-lg p-8 text-center'>
                            <div className='text-5xl mb-4'>📊</div>
                            <h3 className='font-bold text-gray-800 mb-6'>IMPORT YOUR FILES</h3>
                            
                            <div className='flex gap-6 justify-center mb-6'>
                                <div className='text-center'>
                                    <div className='text-3xl mb-2'>📄</div>
                                    <p className='font-semibold text-gray-700'>Google drive</p>
                                </div>
                                <div className='text-center'>
                                    <div className='text-3xl mb-2'>📁</div>
                                    <p className='font-semibold text-gray-700'>Browse</p>
                                </div>
                            </div>

                            <div className='bg-white rounded-lg p-4 mt-4'>
                                <p className='text-sm text-gray-600'>Available crops:</p>
                                <div className='mt-3 space-y-2'>
                                    <p className='text-green-600 font-semibold'>• Rice Crop Dataset</p>
                                    <p className='text-green-600 font-semibold'>• Wheat Crop Dataset</p>
                                    <p className='text-green-600 font-semibold'>• Corn Crop Dataset</p>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={handlePredefined}
                            className={`w-full mt-6 py-3 px-4 rounded-lg font-bold transition ${
                                selectedDataset === 'predefined' 
                                    ? 'bg-green-600 text-white shadow-lg' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {selectedDataset === 'predefined' ? '✓ Selected' : 'Select This Option'}
                        </button>
                    </div>
                </div>

                {/* Process Button */}
                <div className='text-center mt-12'>
                    <button 
                        onClick={handleProcess}
                        className='bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg text-lg shadow-lg transition transform hover:scale-105 disabled:opacity-70'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Analyzing...' : 'Process your Data'}
                    </button>
                </div>

                {error && (
                    <div className='mt-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center'>
                        {error}
                    </div>
                )}

                {result && (
                    <div className='mt-8 bg-white rounded-xl shadow-lg p-8 border-2 border-green-200'>
                        <h3 className='text-2xl font-bold text-gray-800 mb-4'>Detection Result</h3>
                        {result.prediction && (
                            <div className='text-lg text-gray-700'>
                                Detected: <span className='font-bold text-green-600'>{result.prediction}</span>
                            </div>
                        )}
                        {result.class_percentages && (
                            <div>
                                <p className='text-gray-700 mb-4'>Dominant class and confidence by frames:</p>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    {Object.entries(result.class_percentages).map(([label, value]) => (
                                        <div key={label} className='bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-gray-700'>
                                            <span className='font-semibold text-green-700'>{label}</span>: {value.toFixed(2)}%
                                        </div>
                                    ))}
                                </div>
                                {result.frame_with_highest_class && (
                                    <div className='mt-6'>
                                        <p className='text-gray-700 mb-3'>Sample frame:</p>
                                        <img
                                            src={`${serviceBaseUrl}${result.frame_with_highest_class}`}
                                            alt='Detected frame'
                                            className='w-full max-w-md rounded-lg border border-green-200'
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </section>

            {/* Information Section */}
            <section className='bg-gray-100 py-20 px-16'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center'>How Disease Detection Works</h2>
                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-white p-6 rounded-lg shadow'>
                            <div className='text-4xl mb-4'>1️⃣</div>
                            <h3 className='text-xl font-bold text-gray-800 mb-3'>Upload/Select</h3>
                            <p className='text-gray-600'>Upload your crop dataset or select from our predefined datasets</p>
                        </div>

                        <div className='bg-white p-6 rounded-lg shadow'>
                            <div className='text-4xl mb-4'>2️⃣</div>
                            <h3 className='text-xl font-bold text-gray-800 mb-3'>AI Analysis</h3>
                            <p className='text-gray-600'>Our advanced AI analyzes the data to detect diseases and health issues</p>
                        </div>

                        <div className='bg-white p-6 rounded-lg shadow'>
                            <div className='text-4xl mb-4'>3️⃣</div>
                            <h3 className='text-xl font-bold text-gray-800 mb-3'>Get Results</h3>
                            <p className='text-gray-600'>Receive detailed reports with recommendations for treatment</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Preview */}
            <section className='py-20 px-16 bg-black text-white'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-3xl font-bold mb-12 text-center'>What You'll Get</h2>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-gray-900 p-8 rounded-lg border border-green-600'>
                            <h3 className='text-xl font-bold text-green-400 mb-4'>📊 Disease Report</h3>
                            <ul className='space-y-2 text-gray-300'>
                                <li>✓ Disease identification</li>
                                <li>✓ Severity levels</li>
                                <li>✓ Affected areas mapping</li>
                                <li>✓ Confidence scores</li>
                            </ul>
                        </div>

                        <div className='bg-gray-900 p-8 rounded-lg border border-green-600'>
                            <h3 className='text-xl font-bold text-green-400 mb-4'>💡 Recommendations</h3>
                            <ul className='space-y-2 text-gray-300'>
                                <li>✓ Treatment options</li>
                                <li>✓ Prevention strategies</li>
                                <li>✓ Resource allocation</li>
                                <li>✓ Timeline for action</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DiseaseDetection
