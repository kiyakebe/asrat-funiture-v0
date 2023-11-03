import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import image from "../../../assets/bg/proc.jpg";

import style from '../style.module.css'

const Process = () => {
  return (
    <div className="container-md my-5">
      <div className="p-3"></div>
      <div className="row gap-5 align-items-center">
        <div className="col-12 col-md-6">
          <h3 className="cl-primary my-5" style={{ textAlign: "left" }}>
            We Provide You The Best Experience
          </h3>
          <div className="col d-flex align-items-start my-4">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="cl-secondary fs-3"
              />
            </div>
            <div>
              <h5 className="cl-primary mb-4">
                Register and Get Started for Free
              </h5>
              <p className={`text-dark fs-7 text-justify ${style.border_line}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam consequatur voluptatum non dolore praesentium repellat
                reiciendis, sapiente laboriosam nesciunt esse!
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start my-4">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="cl-secondary fs-3"
              />
            </div>
            <div>
              <h5 className="cl-primary mb-4">
                Talented University Students
              </h5>
              <p className={`text-dark fs-7 text-justify ${style.border_line}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                minus deleniti harum provident cum laudantium obcaecati tempore
                nam animi ex.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start my-4">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="cl-secondary fs-3"
              />
            </div>
            <div>
              <h5 className="cl-primary mb-4">
                Local Currence and Language
              </h5>
              <p className={`text-dark fs-7 text-justify ${style.border_line}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                ipsa optio impedit error, facilis sit assumenda blanditiis
                pariatur quasi vel!
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 flex-grow-1 d-flex justify-content-center">
          <img src={image} className={style.proc_img} />
        </div>
      </div>
    </div>
  );
};

export default Process;
