import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Update from './pages/Update'
import Image from './pages/Image'
export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/image/:id' element={<Image />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
