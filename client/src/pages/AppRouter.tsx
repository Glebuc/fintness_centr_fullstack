import {Routes,Route} from 'react-router-dom'
import NotFound from './NotFoundPage'
import Layout from '../components/Layout/Layout'
import {userRoutes, adminRoutes, publicRoutes} from '../routes'
import {Context} from '../index'
import React, { useContext } from 'react';



const AppRouter = () => {
  const isAuth = false
  const {user} = useContext(Context)

  console.log(user)
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}>
              {user.isAuth && userRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component}  />
              )}
              {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component}  />
              )}
              <Route path='*' element={<NotFound/>} />
            </Route>
        </Routes>
    </div>
  )
}

export default AppRouter