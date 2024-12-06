import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Sections/Home';
import AllReviews from './Components/Sections/AllReviews';
import Login from './Components/Sections/Auth/Login';
import Register from './Components/Sections/Auth/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import MyReview from './Components/Sections/MyReview';
import GameWatchlist from './Components/Sections/GameWatchlist';
import AddReview from './Components/Sections/AddReview';
import PrivateRout from './Components/PrivateRout/PrivateRout';
import ReviewDetails from './Components/Sections/ReviewDetails';
import UpdateReview from './Components/Sections/UpdateReview';
import ErrorPage from './Components/Sections/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chill-gamer-server-lac.vercel.app/allreviews')
      },
      {
        path: '/allreviews',
        element: <AllReviews></AllReviews>,
        loader: () => fetch('https://chill-gamer-server-lac.vercel.app/allreviews')
      },
      {
        path: '/reviewdetails/:id',
        element: <PrivateRout>
          <ReviewDetails></ReviewDetails>
        </PrivateRout>,
        loader: ({ params }) => fetch(`https://chill-gamer-server-lac.vercel.app/allreviews/${params.id}`)
      },
      {
        path: '/addreviews',
        element:
          <PrivateRout>
            <AddReview></AddReview>
          </PrivateRout>
      },
      {
        path: '/myreview',
        element:
          <PrivateRout>
            <MyReview></MyReview>
          </PrivateRout>,
        loader: () => fetch('https://chill-gamer-server-lac.vercel.app/allreviews')
      },
      {
        path: '/watchlist',
        element:
          <PrivateRout>
            <GameWatchlist></GameWatchlist>
          </PrivateRout>,
        loader: () => fetch('https://chill-gamer-server-lac.vercel.app/watchlist')
      },
      {
        path: '/updatereview/:id',
        element:
          <PrivateRout>
            <UpdateReview></UpdateReview>
          </PrivateRout>,
        loader: ({ params }) => fetch(`https://chill-gamer-server-lac.vercel.app/allreviews/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: '*',
    element: <div className='w-full h-[100vh] flex justify-center items-center'><h1 className=' text-center text-5xl'> <span className='text-black'>404</span> <br /> <span className='text-red-500'>Page Not Found!</span></h1></div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
