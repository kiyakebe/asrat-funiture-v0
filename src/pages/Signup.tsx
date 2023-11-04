import { useEffect } from "react";
import Signupcomp from "../components/Authentication/Signup";

const Signup = () => {
  useEffect(() => {
    document.title = "Register on Asrat Furniture"
  })

  return <Signupcomp />;
};

export default Signup;
