import React from 'react'
import { LandingPage } from '../pages/LandingPage'
import {Routes, Route} from 'react-router-dom'

export const AppRoutes = () => {

  return (
    <Routes>
        <Route path="/*" element={<LandingPage/>}/>
    </Routes>
  )
}
