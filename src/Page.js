import React from 'react'
import MainAuth from './pages/Authentication/MainAuth'
import { Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin_user_dashboard/Admin'

const Page = () => {
  return (
    <Routes>
      <Route index element={<MainAuth />}/>
      <Route path='/Admin' element={<Admin />}/>
    </Routes>
  )
}

export default Page