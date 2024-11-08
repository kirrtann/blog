import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="bg-[#ECE9E2]">
      <NavBar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
