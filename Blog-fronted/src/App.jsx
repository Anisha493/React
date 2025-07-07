import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import CreateBlog from './pages/CreateBlog/CreateBlog';
import UpdateBlog from './pages/UpdateBlog/UpdateBlog';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/blogDetail/:id" element={<BlogDetail/>} />
        <Route path="/createBlog" element={<CreateBlog/>} />
        <Route path="/updateBlog/:id" element={<UpdateBlog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
