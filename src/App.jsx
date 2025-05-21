import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-produk" element={<Homepage />} />
      <Route path="/profil/:id" element={<Homepage />} />
    </Routes>
  )
}

export default App
