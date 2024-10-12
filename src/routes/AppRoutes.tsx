import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteMap } from '../utils/constants'

const AppRoutes = () => {

  return (
    <>
      <Routes>
        {
          RouteMap?.map((route, index) => (
            <>
              <Route key={index} path={route.URL} element={<route.element />} />
            </>

          ))
        }
      </Routes>
    </>
  )
}

export default AppRoutes