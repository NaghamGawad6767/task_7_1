
import './App.css'
import About from './page/About/About'
import Home from './page/Home/Home'
import Contact from './page/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
export default function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={< Home/>}/>  
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    <Footer/>  
    </>
  )
}

