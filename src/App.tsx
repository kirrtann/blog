import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import About from "./components/About";
import Subcrib from "./components/Subcrib";
import Contact from "./components/Contact";
import Licenses from "./components/Licenses";
import Changelog from "./components/Changelog";

function App() {
  return (
    <div className="bg-[#ECE9E2]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Subcrib" element={<Subcrib />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Licenses" element={<Licenses />} />
        <Route path="/Changelog" element={<Changelog />} />
      </Routes>
    </div>
  );
}

export default App;
