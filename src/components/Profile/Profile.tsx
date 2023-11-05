import { useEffect, useState } from "react";
import axios from "axios";
import { FormData as User } from "../Authentication/Signup";
import style from "./style.module.css";

import profile from "../../assets/profile/user.jpg";

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
    <div
      className={`d-flex justify-content-center align-items-center ${style.profile}`}
    >
      <div className="d-flex flex-column align-items-center">
        <img className={style.profile_pic} src={profile} alt="" />

        <h3 className="text-center cl-primary fw-semibold my-2">
          {userData?.first_name} {userData?.last_name}
        </h3>
        <table className="my-3">
          <tbody>
            <tr className="py-3">
              <td className="px-2 py-2">Phone</td>
              <td className="px-2 py-2 fw-medium fst-italic">{userData?.phone_no}</td>
            </tr>
            <tr className="py-3">
              <td className="px-2 py-2">Username</td>
              <td className="px-2 py-2 fw-medium fst-italic">{userData?.username}</td>
            </tr>
            <tr className="py-3">
              <td className="px-2 py-2">Email</td>
              <td className="px-2 py-2 fw-medium fst-italic">{userData?.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
