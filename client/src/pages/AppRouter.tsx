import React from 'react'
import {Routes,Route} from 'react-router-dom'
import SignIn from './SignInPage'
import SignUp from './SignUpPage'
import Main from './MainPage'
import UserPanel from './UserPanelPage'
import News from './NewsPage'
import NotFound from './NotFoundPage'
import TimeTable from './TimeTablePage'
import Trainers from './TrainersPage'
import Layout from '../components/Layout/Layout'


const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/login' element={<SignIn/>}/>
              <Route path='/registration' element={<SignUp/>}/>
              <Route path='/' element={<Main/>}/>
              <Route path='/user' element={<UserPanel/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/trainers' element={<Trainers/>}/>
              <Route path='/time' element={<TimeTable/>}/>
              <Route path='*' element={<NotFound/>} />
            </Route>
        </Routes>
    </div>
  )
}

export default AppRouter