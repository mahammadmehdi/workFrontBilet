
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import AddPages from './pages/AddPages'
import Wishlist from './pages/Wishlist'
import Detail from './pages/Detail'

function App() {


  return (
    <>
      <BrowserRouter >
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
        <Route path="/" element={<Home></Home>} /> 
        <Route path="/addPages" element={<AddPages></AddPages>} />
        <Route path="/wishlist" element={<Wishlist></Wishlist>} />
        <Route path="/detail/:id" element={<Detail></Detail>} /> 


        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
