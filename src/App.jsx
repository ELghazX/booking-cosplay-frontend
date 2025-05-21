import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-produk" element={<Home />} />
      <Route path="/profil/:id" element={<Home />} />
    </Routes>
  )
}

export default App
