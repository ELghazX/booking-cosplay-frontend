import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router";
import Homepage from './pages/Homepage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      {/* ini contoh */}
      <Route path="/halaman" element={<Homepage />} />
      <Route path="/login" element={<Homepage />} />
      <Route path="/register" element={<Homepage />} />
      <Route path="/detail-produk" element={<Homepage />} />
      <Route path="/profil/:id" element={<Homepage />} />
    </Routes>

  )
}

export default App
