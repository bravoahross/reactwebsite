import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import JohnDeere from "./pages/jobpages/JohnDeere";
import NTE from "./pages/jobpages/NTE";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/JohnDeere" element={<JohnDeere/>} />
          <Route path="/NTE" element={<NTE/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
