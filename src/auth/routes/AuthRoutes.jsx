import React from 'react'
import { LoginPage } from '../pages/LoginPage'
import {Routes, Route} from 'react-router-dom'
import { RegisterPage } from '../pages/RegisterPage'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path={"/*"} element={<LoginPage/>} />
        <Route path={"/signin"} element={<RegisterPage/>} />
    </Routes>
  )
}
