// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Device from "./components/device";
import Subscription from "./components/subscription";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/device" element={<Device />} />
        <Route path="/" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  );
}