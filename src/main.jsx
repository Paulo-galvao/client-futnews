import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import App from './App.jsx'
import Search from './pages/Search/Search.jsx'
import NoPage from './pages/NoPage/NoPage.jsx'
import Auth from './pages/Auth/Auth.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Profile from './pages/Profile/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/search/:title' element={<Search/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
