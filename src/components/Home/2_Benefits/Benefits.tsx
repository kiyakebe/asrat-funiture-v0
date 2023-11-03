import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

import style from "../style.module.css";

const Benefits = () => {
  return (
    <div className="container-md py-5 mt-5 " id="hanging-icons">
      <div className={`d-flex align-items-center my-4 ${style.benefit}`}>
        <h2 className="cl-primary fw-semibold">
          Benefits You Get When <br />
          Using Our Service
        </h2>
      </div>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square bg-light text-dark flex-shrink-0 me-4">
            <FontAwesomeIcon
              icon={faMoneyBillWave}
              className="fs-4 cl-secondary"
            />
          </div>
          <div>
            <h4 className="cl-primary mb-4">Best Quality</h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              voluptatibus asperiores perferendis nobis rem a.
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square bg-light text-dark flex-shrink-0 me-4">
            <FontAwesomeIcon
              icon={faMoneyBillWave}
              className="fs-4 cl-secondary"
            />
          </div>
          <div>
            <h4 className="cl-primary mb-4">Free Shipping</h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit
              dolor magni consequuntur asperiores molestias!
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square bg-light text-dark flex-shrink-0 me-4">
            <FontAwesomeIcon
              icon={faMoneyBillWave}
              className="fs-4 cl-secondary"
            />
          </div>
          <div>
            <h4 className="cl-primary mb-4">Warranty</h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              voluptatibus quam vero alias commodi nostrum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
