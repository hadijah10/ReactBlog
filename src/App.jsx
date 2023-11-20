import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import RootLayout from './component/RootLayout'
import Login from './pages/Login'
import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Post from './pages/Post' 
import Blog from './pages/Blog';
import NotFound from './pages/NotFound'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='post' element={<Post />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        </Route>
    )
  )
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
