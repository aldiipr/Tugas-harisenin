import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'



export default function RootRouter () {
  return (
        <Routes>
            <Route path='/'>
                <Route index element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Login' element={<Login />} />

            </Route>
            
        </Routes>
  )
}
