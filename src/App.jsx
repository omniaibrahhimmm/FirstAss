import './App.css'
import Layout from './Layout/Layout.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Home from './Home/Home.jsx' 
import About from './About/About.jsx'
import Contact from './ContactInfo/ContactInfo.jsx'
import Contacts from './Contact/Contacts.jsx'
import Portfolio from './Portfolio/Portfolio.jsx'
import NotFound from './NotFound/NotFound.jsx'
import Footer from './footer/Footer.jsx'

import { createBrowserRouter,Link, RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Layout/>, 
      errorElement:(<div className='bg-danger vh-100 d-flex justify-content-center align-content-center text-center'>NotFound</div>
),
      children:[
{ index:true, element: <Home /> },
{ path: '/about', element: <About /> },
    {path:'/Portfolio', element: <Portfolio/>
    }, 
    { path: '/Contacts', element: <Contacts/> },
  
  
  
  
  
  
  
  
  
    {
        path: '*', element:<NotFound/>
      }
  
  ] }
  ])

  return (
    <>
      

      <RouterProvider router={router} />
    </>
  )
}

export default App
