import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    
      <div className="flex flex-col min-h-scree">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="py-6 text-center text-black-800 border-t bg-blue-600">
          {new Date().getFullYear()} SOFTWARE COMPANY. All rights reserved
        </footer>
      </div>
   
  );
}

export default App;