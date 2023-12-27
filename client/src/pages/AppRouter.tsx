import {Routes,Route, Navigate} from 'react-router-dom'
import NotFound from './NotFoundPage'
import UserPanel from './UserPanelPage'
import Layout from '../components/Layout/Layout'
import {publicRoutes} from '../routes'
import React, { useContext } from 'react';
import News from '../components/Admin/News_admin'
import Price from '../components/Admin/Price_admin'
import Trainers from '../components/Admin/Trainers_admin'


const AppRouter: React.FC = () => {
  const token = localStorage.getItem('token');
  return (
    <Routes>
      {token && (
          <Route path="/user-panel/*" element={<UserPanel />}>
            <Route index element={<News />} />
            <Route path="news" element={<News />} />
            <Route path="price" element={<Price />} />
            <Route path="trainers" element={<Trainers />} />
          </Route>
        )}
      <Route path="/" element={<Layout />}>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter