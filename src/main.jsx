import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import LogIn from './Components/LogIn.jsx';
import SingUp from './Components/SIngUp.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('https://coffe-store-server-sooty-gamma.vercel.app/coffee')
  },
  {
    path: "/addcoffee",
    element: <AddCoffee />,
  },
  {
    path: "/UpdateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`https://coffe-store-server-sooty-gamma.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/singup",
    element: <SingUp />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch("https://coffe-store-server-sooty-gamma.vercel.app/user")
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
