import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

const Benefits = () => {
  return (
    <div className="container-md py-5" id="hanging-icons">
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
            <FontAwesomeIcon
              icon={faMoneyBillWave}
              className="text-success fs-3"
            />
          </div>
          <div>
            <h2 className="text-success medium-italic">Best Quality</h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              voluptatibus asperiores perferendis nobis rem a.
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
            <FontAwesomeIcon
              icon={faMoneyBillWave}
              className="text-success fs-3"
            />
          </div>
          <div>
            <h2 className="text-success medium-italic">Free Shipping</h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit
              dolor magni consequuntur asperiores molestias!
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
            <FontAwesomeIcon
              icon={faMoneyBillWave}
              className="text-success fs-3"
            />
          </div>
          <div>
            <h2 className="text-success medium-italic">Warranty</h2>
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
