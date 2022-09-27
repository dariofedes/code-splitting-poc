import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading'
const Login = React.lazy(() => import('./pages/Login/Login' /* webpackChunkName: "login" */))
const Admin = React.lazy(() => import('./pages/Admin/Admin' /* webpackChunkName: "admin" */))

export default function App() {
  return (
    <BrowserRouter className="App">
      <Header /> 
      <Suspense fallback={Loading}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
