import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddMusic from './Components/AddMusic';
import Dashboard from './Components/Dashboard';
import LandingPage from './Components/LandingPage';
import LoginForm from './Components/LoginForm';
import Signup from './Components/Signup';
import './index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "Signin",
    element: <LoginForm />,
  },
  {
    path: "Signup",
    element: <Signup />,
  },
  {
    path: "Dashboard",
    element: <Dashboard/>
  },
  {
    path:"AddMusic",
    element: <AddMusic/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
