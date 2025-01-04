import React from 'react'
import Layout from '../components/layout/Layout'

const Policy = () => {
  return (
    <Layout className=''>
    <div className="flex flex-col md:flex-row justify-center mt-20 items-center gap-8 p-8">
      {/* Left section with image */}
      <div className="w-full md:w-1/2">
        <img
          src="/images/contactus.jpeg"
          alt="contactus"
          className="w-full h-auto"
        />
      </div>

      {/* Right section with contact info */}
      <div className="w-full md:w-1/3 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold bg-gray-900 p-4 text-center rounded-lg mb-4">
          Privacy Policy
        </h1>
        
        <div className="space-y-3">
          <p className="flex items-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa mollitia vero, rem error consectetur molestias nesciunt nulla alias perspiciatis voluptatibus asperiores ipsam aut nihil voluptatem vel, at neque! Libero.
          </p>
          <p className="flex items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt asperiores temporibus consectetur odit fugiat, quia dicta. Aut nobis ipsam possimus voluptatem, sit libero facere fuga nihil nemo. Nobis, consectetur eos.
          </p>
          <p className="flex items-center">
          </p>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Policy
