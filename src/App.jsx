import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Koleksi  from './pages/Koleksi';
import About from './pages/About';
// import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Regis';
import Detail  from './pages/Detail';
import Userprofile from './pages/Userprofile';
import Editbooking from './pages/Editbooking';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/detail-produk" element={<Detail />} /> */}
      {/* <Route path="/profil/:id" element={<Profile />} /> */}
      <Route path="/koleksi" element={<Koleksi />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Regis" element={<Register />} />
      <Route path="/Userprofile" element={<Userprofile />} />
      <Route path="/Detail" element={<Detail />} />
      <Route path="/Editbooking" element={<Editbooking />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
