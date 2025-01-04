import React from 'react'
import Layout from '../../components/layout/Layout'
import UserMenu from '../../components/layout/UserMenu'

const Dashboard = () => {
  return (
    <Layout>
        <div className="grid grid-cols-12 bottom-0">
          <div className="col-span-3">
            <UserMenu/>
          </div>
          <div className="col-span-9">dashboard</div>
        </div>
        
      </Layout>
  )
}

export default Dashboard
