import React from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'

const Users = () => {
  return (
    <Layout>
    
    <div className="grid grid-cols-12 bottom-0">
      <div className="col-span-3">
        <AdminMenu/>
      </div>
      <div className="col-span-9">Users</div>
    </div>
    
    
  </Layout>
  )
}

export default Users
