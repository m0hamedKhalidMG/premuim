import './App.css';

import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom'
import  { useEffect } from 'react';
import { useNavigate ,useLocation } from 'react-router-dom';
import { NavBar } from './components/sidebar';
import { Factory } from './components/factory';
const router = createBrowserRouter([
  {
    path : '/',
    element : <Factory></Factory>
  },
  ])

  function App() {
    return (
      <>
      
          <RouterProvider router={router} />
      </>
    );
  }


export default App;
