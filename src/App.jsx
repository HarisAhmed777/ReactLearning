import React, { createContext, useState } from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Usememo from './components/Usememo'
import UseCallback from './components/UseCallback'
import FuncltionalComponent from './components/FuncltionalComponent'
import ClassComponent from './components/ClassComponent'
import ExampleofUseContext from './components/ExampleofUseContext'
import HOC from './components/HOC'


export const ThemeContext = createContext();

const App = () => {
  const [theme,setTheme] = useState(false);
  const toggletheme = ()=>{
    setTheme((curr)=>!curr);
  }
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
        {
          path:'/useContext',
          element:<ExampleofUseContext/>
        },
        {
          path:'/hoc',
          element:<HOC/>
        },
        


      ]
    }
  ])
  return (
    <ThemeContext.Provider value={{theme,toggletheme}}>
    <RouterProvider router={routes}/>
    </ThemeContext.Provider>
  )
}

export default App