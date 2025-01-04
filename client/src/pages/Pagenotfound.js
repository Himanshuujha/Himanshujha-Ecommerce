import React from 'react'
import Layout from '../components/layout/Layout'

const Pagenotfound = () => {
  return (
    <Layout title='404-Page not found'>
      <div className=' flex flex-col justify-center items-center min-h-[70vh] bg-gray-100'>
        <h1 className='text-9xl font-bold text-gray-800 mb-4'>404</h1>
        <p className='text-2xl text-gray-600'>Oops! Page not found</p>
        <p className='text-lg text-gray-500 mt-2'>
          The page you're looking for doesn't exist.
        </p>
      </div>
    </Layout>
  )
}

export default Pagenotfound
