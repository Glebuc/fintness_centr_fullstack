import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Admin/Sidebar';
import { withAuth } from './Wrapper';


const UserPanel = () => {
  return (
      <div className="flex h-screen bg-gray-200">
        <Sidebar />
        <div className="flex-1 p-4 bg-white">
          <div className='mt-5'><Outlet /></div>
        </div>
      </div>
  );
}

export default withAuth(UserPanel);
