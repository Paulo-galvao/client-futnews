import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router"
import './index.css'
import App from './App.jsx'
import Search from './pages/Search/Search.jsx'
import NoPage from './pages/NoPage/NoPage.jsx'
import Auth from './pages/Auth/Auth.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Profile from './pages/Profile/Profile.jsx'
import AddNews from './pages/AddNews/AddNews.jsx'
import UserProvider from './Context/UserContext.jsx'
import UpdateNews from './pages/UpdateNews/UpdateNews.jsx'
import DeleteNews from './pages/DeleteNews/DeleteNews.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: '/search/:title',
    element: <Search/>
  },
  {
    path: '/auth',
    element: <Auth/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/search/:title',
    element: <Search/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '*',
    element: <NoPage/>
  },
  {
    path: '/addnews',
    element: <AddNews/>
  },
  {
    path: '/updatenews/:id',
    element: <UpdateNews/>
  },
  {
    path: '/deletenews/:id',
    element: <DeleteNews/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </StrictMode>
)
