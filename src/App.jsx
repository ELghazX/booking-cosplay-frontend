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
import Admin from './pages/Admin';
import Editbooking from './pages/Editbooking';



function App() {
  function ProtectedRoute({ children }) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-produk" element={<Detail />} />
      {/* <Route path="/profil/:id" element={<Profile />} /> */}
      <Route path="/koleksi" element={<Koleksi />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Regis" element={<Register />} />
      <Route path="/Userprofile" element={<Userprofile />} />
      <Route path="/detail-kostum/:id" element={<Detail />} />

      <Route path="/Editbooking" element={<Editbooking />} />
      <Route path="/userprofile" element={
        <ProtectedRoute>
          <Userprofile />
        </ProtectedRoute>
      } />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      {/* Tambahkan route lainnya sesuai kebutuhan */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
