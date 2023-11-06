import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import apiClient from "./services/api-client";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Components
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Gallery from "./pages/Gallery";

// Authentication
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage";
import ForgotPass from "./components/Authentication/ForgotPass";
import SetNewPass from "./components/Authentication/SetNewPass";
import FOF from "./pages/FOF";

function App() {
  const [islogedin, setIsLodegin] = useState(false);

  useEffect(() => {
    const access = localStorage.getItem("access");
    const data = { token: access };
    const checkLigedin = () => {
      apiClient
        .post("/auth/jwt/verify/", data)
        .then(() => {
          setIsLodegin(true);
        })
        .catch((errors) => setIsLodegin(false));
    };
    access && checkLigedin();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          {islogedin && <Route path="/profile" element={<ProfilePage />} />}
          <Route path="*" element={<FOF />} />
        </Route>

        {!islogedin && <Route path="/login" element={<Login />} />}
        {!islogedin && <Route path="/signup" element={<Signup />} />}
        {!islogedin && <Route path="/reset-password" element={<ForgotPass />} />}
        {!islogedin && <Route path="/set-new-password" element={<SetNewPass />} />}
      </Routes>
      {location.pathname}
    </Router>
  );
}

export default App;
