import React from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Usememo from './components/Usememo'
import UseCallback from './components/UseCallback'
import FuncltionalComponent from './components/FuncltionalComponent'
import ClassComponent from './components/ClassComponent'

const App = () => {
  const routes = createBrowserRouter([
    {
      path :'/',
      element:<Layout/>,
      children:[
        {
          path :'/',
          element:<HomePage/>
        },
        {
          path :'/usememo',
          element:<Usememo/>
        },
        {
          path:'/usecallback',
          element:<UseCallback/>
        },
        {
          path:'/functioncomponent',
          element:<FuncltionalComponent/>
        },
        {
          path:'/classcomponent',
          element:<ClassComponent/>
        },

      ]
    }
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App