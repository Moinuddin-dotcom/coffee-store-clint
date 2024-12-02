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
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addcoffee",
    element: <AddCoffee />,
  },
  {
    path: "/UpdateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
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
    loader: () => fetch("http://localhost:5000/user")
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
