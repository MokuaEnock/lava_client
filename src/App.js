import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/pages/navbar";
import Landing from "./components/pages/landing/landiing";
import About from "./components/pages/about/about";
import Contact from "./components/pages/contact/contact";
import Authentication from "./components/pages/auth/auth";
import Footer from "./components/pages/footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
