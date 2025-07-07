import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Count from './pages/Count/Count';


const App = () => {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/blog' element={<Blogs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/count' element={<Count/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
