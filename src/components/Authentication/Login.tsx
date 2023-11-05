import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "../../services/api-client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  username: z
    .string({ required_error: "Username is Required" })
    .min(6, { message: "Username is at least 6 characters" }),
  password: z
    .string({ required_error: "Password Must be Filled" })
    .min(8, { message: "Password is at Least 8 charactera" }),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const navigation = useNavigate();
  const [viewPass, setViewPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    apiClient
      .post("/auth/jwt/create/", data)
      .then((res) => {
        localStorage.setItem("refresh", res.data.refresh);
        localStorage.setItem("access", res.data.access);
        if (res.status == 200) {
          navigation("/");
        }
      })
      .catch((errors) => console.log(errors));
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <form
        method="POST"
        className={`card p-5 ${style.form_login}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="my-3">
          <h3 className={style.form_title}>Login</h3>
        </div>
        <div className="my-2">
          <label className="fs-6 w-100 cl-primary fw-medium ">
            Username
            <input
              type="text"
              className={`form-control ${style.form_input}`}
              {...register("username")}
            />
          </label>
          {errors.username && (
            <p className="text-danger"> {errors.username.message} </p>
          )}
        </div>
        <div className="my-2">
          <div className={`col-12 col-md mb-3 ${style.password_group}`}>
            <label className="fs-6 w-100 form-label cl-primary fw-medium ">
              Password
              <input
                type={viewPass ? "text" : "password"}
                className={`form-control ${style.form_input}`}
                {...register("password")}
              />
              <label
                className={style.password_toggler}
                onClick={() => setViewPass(!viewPass)}
              >
                {viewPass ? (
                  <FontAwesomeIcon icon={faEye} className="cl-primary" />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} className="cl-primary" />
                )}
              </label>
            </label>
            {errors.password && (
              <p className="text-danger"> {errors.password.message} </p>
            )}
          </div>
        </div>
        <button type="submit" className={style.form_button}>
          Login
        </button>

        <div className="mt-3 d-flex">
          <p className="mx-1">Forgot Password? </p>
          <a href="/reset-password" className="mx-1">
            Reset
          </a>
        </div>

        <div className="mb-3 d-flex">
          <p className="mx-1">Do not have account? </p>
          <a href="/signup" className="mx-1">
            Signup
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
