// import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import fof from "../assets/bg/fof.svg";

const FOF = () => {
  return (
    <div className={style.fof}>
      <div className="d d-flex flex-column align-items-center gap-5">
        <img src={fof} alt="" className={style.fof_img} />
        <div>
          <h1 className="cl-primary text-center">Page not found</h1>
          <p className="text-center">
            <span className="me-3">Back to home</span>
            <a href="/">Back</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FOF;
