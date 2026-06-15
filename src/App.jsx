// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />

        {/* phải đặt CUỐI CÙNG */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}