import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Koleksi  from './pages/Koleksi';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Regis';
import Detail  from './pages/Detail';
import Userprofile from './pages/Userprofile';
import Riwayat from './pages/Riwayat';
import Editbooking from './pages/Editbooking';
import DetailBooking from './pages/DetailBooking';
import Pendingbooking from './pages/Pendingbooking';
import Confirmedbooking from './pages/Confirmedbooking';
import Cancelledbooking from './pages/Cancelledbooking';
import Bookinghistory from './pages/Bookinghistory';
import Item from './pages/Item';
import Tambahkostum from './pages/Tambahkostum';
import Ubahkostum from './pages/Ubahkostum';
import Tambahaksesoris from './pages/Tambahaksesoris';
import Ubahaksesoris from './pages/Ubahaksesoris';
import DetailItem from './pages/Detailitem';

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
      <Route path="/register" element={<Register />} />
      <Route path="/detail-kostum/:id" element={<Detail />} />
      <Route path="/edit-booking/:id" element={<ProtectedRoute><Editbooking /></ProtectedRoute>} />
      <Route path="/pending-booking" element={<ProtectedRoute><Pendingbooking /></ProtectedRoute>} />
      <Route path="/confirmed-booking" element={<ProtectedRoute><Confirmedbooking /></ProtectedRoute>} />
      <Route path="/cancelled-booking" element={<ProtectedRoute><Cancelledbooking /></ProtectedRoute>} />
      <Route path="/booking-history" element={<ProtectedRoute><Bookinghistory /></ProtectedRoute>} />
      <Route path="/item" element={<ProtectedRoute><Item /></ProtectedRoute>} />
      <Route path="/tambah-kostum" element={<ProtectedRoute><Tambahkostum /></ProtectedRoute>} />
      <Route path="/ubah-kostum/:id" element={<ProtectedRoute><Ubahkostum /></ProtectedRoute>} />
      <Route path="/tambah-aksesoris" element={<ProtectedRoute><Tambahaksesoris /></ProtectedRoute>} />\
      <Route path="/ubah-aksesoris/:id" element={<ProtectedRoute><Ubahaksesoris /></ProtectedRoute>} />
      <Route path="/user-profile" element={<ProtectedRoute><Userprofile /></ProtectedRoute>} />
      <Route path="/detail-booking/:id" element={<ProtectedRoute><DetailBooking /></ProtectedRoute>} />
      <Route path="/detail-item/:id" element={<ProtectedRoute><DetailItem /></ProtectedRoute>} />
      <Route path="/riwayat" element={<ProtectedRoute><Riwayat /></ProtectedRoute>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
