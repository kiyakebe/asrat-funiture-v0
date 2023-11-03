import style from "../style.module.css";
import image from "../../../assets/bg/exp.jpg";

const Experience = () => {
  return (
    <div className="container-md my-4">
      <div className="row gap-5">
        <div className=" col-12 col-md-4 flex-grow-1">
          <img
            src={image}
            alt="Sofa Image"
            className={style.exp_img}
            height="100%"
            width="100%"
          />
        </div>
        <div className="col-12 col-md-7 d-flex align-items-center">
          <div className="">
            <h2 className="fw-semibold cl-primary mb-4">
              We Provide You The <br /> Best Experience
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              delectus vero accusantium at, ipsum molestias. Nisi odio aliquid
              delectus, eos voluptate alias, quis blanditiis veritatis voluptas
              incidunt, deleniti inventore. Voluptatibus.
            </p>
            <div className="row mt-4">
              <div className="col flex-shrink-1">
                <h1 className="fw-semibold cl-primary">10</h1>
                <h5>Years of Experiance</h5>
              </div>
              <div className="col flex-shrink-1">
                <h1 className="fw-semibold cl-primary">35</h1>
                <h5>Award Gained</h5>
              </div>
              <div className="col flex-shrink-1">
                <h1 className="fw-semibold cl-primary">374</h1>
                <h5>Furnitures Sold</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
