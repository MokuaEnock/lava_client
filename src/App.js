import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/pages/navbar";
import Landing from "./components/pages/landing/landiing";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Landing />} />
        <Route path="/contact" element={<Landing />} />
        <Route path="/auth" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
