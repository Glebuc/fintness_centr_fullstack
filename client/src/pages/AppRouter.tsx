import React from 'react'
import {Routes,Route} from 'react-router-dom'
import SignIn from './SignInPage'
import SignUp from './SignUpPage'
import Main from './MainPage'
import UserPanel from './UserPanelPage'
import News from './NewsPage'
const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/registration' element={<SignUp/>}/>
            <Route path='/' element={<Main/>}/>
            <Route path='/user' element={<UserPanel/>}/>
            <Route path='/news' element={<News/>}/>
        </Routes>
    </div>
  )
}

export default AppRouter