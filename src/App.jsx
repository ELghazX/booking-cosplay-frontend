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
import DetailBooking from './pages/DetailBooking';
import Pendingbooking from './pages/Pendingbooking';
import Confirmedbooking from './pages/Confirmedbooking';
import Cancelledbooking from './pages/Cancelledbooking';
import Bookinghistory from './pages/Bookinghistory';


function App() {
  function ProtectedRoute({ children }) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      return <Navigate to="/" />;
    }
    return children;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/koleksi" element={<Koleksi />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Userprofile" element={<Userprofile />} />
      <Route path="/detail-kostum/:id" element={<Detail />} />
      <Route path="/detail-booking" element={
        <ProtectedRoute>
          <DetailBooking />
        </ProtectedRoute>
      } />

      <Route path="/Editbooking" element={<Editbooking />} />
      <Route path="/Pendingbooking" element={<Pendingbooking />} />
      <Route path="/Confirmedbooking" element={<Confirmedbooking />} />
      <Route path="/Cancelledbooking" element={<Cancelledbooking />} />
      <Route path="/Bookinghistory" element={<Bookinghistory />} />
      <Route path="/userprofile" element={
        <ProtectedRoute>
          <Userprofile />
        </ProtectedRoute>
      } />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
