import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import style from "./style.module.css";

const schema = z.object({
  email: z
    .string({ required_error: "Username is Required" })
    .min(6, { message: "Username is at least 6 characters" })
});

type FormData = z.infer<typeof schema>;

const ForgotPass = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/auth/jwt/create/", data)
      .then((res) => {
        localStorage.setItem("refresh", res.data.refresh);
        localStorage.setItem("access", res.data.access);
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
          <h3 className={style.form_title}>Reset</h3>
        </div>
        <div className="my-3">
          <label className="fs-6 w-100 form-label">
            Email
            <input
              type="text"
              className={`form-control ${style.form_input}`}
              {...register("email")}
            />
          </label>
          {errors.email && (
            <p className="text-danger"> {errors.email.message} </p>
          )}
        </div>
        <button type="submit" className={style.form_button}>
          Reset
        </button>

        <div className="mt-3 d-flex">
          <p className="mx-1">Forgot Password? </p>
          <a href="/login" className="mx-1">
            Login
          </a>
        </div>
      </form>

    </div>
  );
};

export default ForgotPass;

