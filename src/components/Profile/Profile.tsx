import { useEffect } from "react";
import apiClient from "../../services/api-client";
import axios from "axios";
// import { config } from "@fortawesome/fontawesome-svg-core";

const token = localStorage.getItem("access");
axios.interceptors.request.use(
  config => {
    config.headers.Authorization = `JWT ${token}`
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

const Profile = () => {
  useEffect(() => {
    const userProfile = () => {
      axios
        .get("http://127.0.0.1:8000/auth/users/me/")
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    userProfile();
  }, []);

  return <div>djfksjd</div>;
};

export default Profile;
