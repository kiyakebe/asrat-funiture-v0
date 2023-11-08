import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/api-client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import style from "./style.module.css";

const schema = z
  .object({
    first_name: z
      .string()
      .min(3, { message: "First name must be at east 3 charcters" }),
    last_name: z
      .string()
      .min(3, { message: "Last name must be at east 3 charcters" }),
    email: z
      .string({ required_error: "Email is Required" })
      .email({ message: "Invalid email address" })
      .min(4, { message: "Must be at least 4 characters" }),
    username: z
      .string()
      .min(6, { message: "username must be atlest 6 characters" }),
    password: z
      .string({ required_error: "Password Must be Filled" })
      .min(8, { message: "Password is at Least 8 charactera" }),
    conPassword: z.string(),
    phone_no: z
      .string()
      .min(10, { message: "Phone number is at least 10 figures" }),
  })
  .refine((data) => data.password === data.conPassword, {
    message: "Password does not match",
    path: ["conPassword"],
  });

export type FormData = z.infer<typeof schema>;

const Signup = () => {
  const [viewPass, setViewPass] = useState(false);
  const [viewPassC, setViewPassC] = useState(false);

  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    apiClient
      .post("/auth/users/", data)
      .then((res) => {
        console.log(res.status === 201);
        if (res.status === 201) {
          navigation("/login");
        }
      })
      .catch((errors) => {
        console.log(errors.message);
      });
    console.log(data);
  };

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <form
          method="POST"
          className={`card p-5 ${style.form}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="my-3">
            <h4 className={style.form_title}>CREATE ACCOUNT</h4>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label className={`fs-6 w-100 cl-primary fw-medium `}>
                First Name
                <input
                  type="text"
                  className={`form-control ${style.form_input}`}
                  {...register("first_name")}
                />
              </label>
              {errors.first_name && (
                <p className="text-danger"> {errors.first_name.message} </p>
              )}
            </div>
            <div className="col-12 col-md-6 mb-3">
              <label className={`fs-6 w-100 cl-primary fw-medium `}>
                Last Name
                <input
                  type="text"
                  className={`form-control ${style.form_input}`}
                  {...register("last_name")}
                />
              </label>
              {errors.last_name && (
                <p className="text-danger"> {errors.last_name.message} </p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md mb-3">
              <label className={`fs-6 w-100 cl-primary fw-medium `}>
                Email
                <input
                  type="email"
                  className={`form-control ${style.form_input}`}
                  {...register("email")}
                />
              </label>
              {errors.email && (
                <p className="text-danger"> {errors.email.message} </p>
              )}
            </div>
            <div className="col-12 col-md mb-3">
              <label className={`fs-6 w-100 cl-primary fw-medium `}>
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
          </div>

          <div className="row">
            <div className={`col-12 col-md mb-3 ${style.password_group}`}>
              <label  className={`fs-6 w-100 cl-primary fw-medium `}>
                Password
                <input
                  type={viewPass ? "text" : "password"}
                  autoComplete="new-password"
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
            <div className={`col-12 col-md mb-3 ${style.password_group}`}>
              <label  className={`fs-6 w-100 cl-primary fw-medium `}>
                Confirm Password
                <input
                  type={viewPassC ? "text" : "password"}
                  className={`form-control ${style.form_input}`}
                  {...register("conPassword")}
                />
                <label
                  className={style.password_toggler}
                  onClick={() => setViewPassC(!viewPassC)}
                >
                  {viewPassC ? (
                    <FontAwesomeIcon icon={faEye} className="cl-primary" />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} className="cl-primary" />
                  )}
                </label>
              </label>
              {errors.conPassword && (
                <p className="text-danger"> {errors.conPassword.message} </p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md mb-3">
              <label className={`fs-6 w-100 cl-primary fw-medium `}>
                Phone Number
                <input
                  type="text"
                  className={`form-control ${style.form_input}`}
                  {...register("phone_no")}
                />
              </label>
              {errors.phone_no && (
                <p className="text-danger"> {errors.phone_no.message} </p>
              )}
            </div>
          </div>

          <button type="submit" className={style.form_button}>
            Signup
          </button>
          <div className="mt-3 mb-3 d-flex">
            <p className="mx-1">Already have account? </p>
            <a href="/login" className="mx-1">
              Login
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
