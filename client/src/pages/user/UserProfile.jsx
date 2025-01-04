import React from 'react'
import UserMenu from '../../components/layout/UserMenu'
import Layout from '../../components/layout/Layout'

const UserProfile = () => {
  return (
    <Layout>
    <div className="grid grid-cols-12 bottom-0">
      <div className="col-span-3">
        <UserMenu/>
      </div>
      <div className="col-span-9">Profile</div>
    </div>
    
  </Layout>
  )
}

export default UserProfile
