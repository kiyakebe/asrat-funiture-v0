import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Furniture from "./pages/Furniture";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/furniture" element={<Furniture />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/profile" element={<Gallery />}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
