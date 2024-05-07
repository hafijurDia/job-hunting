import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistic from './components/Statistics/Statistic';
import Blog from './components/Blog/Blog';
import AppliedJob from './components/AppliedJob/Applied-Job';
import Main from './components/Layout/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"statistics",
        element:<Statistic></Statistic>,
      },
      {
        path:"blog",
        element:<Blog></Blog>,
      },
      {
        path:"applied-job",
        element:<AppliedJob></AppliedJob>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
