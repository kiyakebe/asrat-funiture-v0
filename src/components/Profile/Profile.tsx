import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import axios from "axios";
import { FormData as User } from "../Authentication/Signup";
// import { config } from "@fortawesome/fontawesome-svg-core";

const Profile = () => {
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    const token = localStorage.getItem("access");
    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `JWT ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const userProfile = () => {
      axios
        .get("http://127.0.0.1:8000/auth/users/me/")
        .then((res) => {
          setUserData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    userProfile();
    axios.interceptors.response.eject(1);
  }, []);

  return (
    <div>
      <div className="row">
        <label className="col">First Name</label>
        {userData && <p className="col">{userData.first_name}</p>}
      </div>
    </div>
  );
};

export default Profile;
