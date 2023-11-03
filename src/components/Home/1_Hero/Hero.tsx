import styles from "../style.module.css";

const Hero = () => {
  return (
    <div className={` ${styles.hero_slide_container}`}>
      <div className={`container-lg px-3 h-100 `}>
        
        <div className="row h-100 flex-lg-row-reverse align-items-center">
          <div className="col-10 col-sm-8 col-lg-6"></div>
          <div className={`col-lg-6 ${styles.hero_description}`}>
            <h2 className={`mb-3 ${styles.lead_head}`}>
              <span>Top</span> Quality, Reliable <span>and</span> Durable{" "}
              <span>Furnitures</span>
            </h2>
            <p className={`mb-5`}>
              Finish your dream with our Furniture featuring Sass variables and
              mixins, responsive grid system, extensive prebuilt components, and
              powerful JavaScript plugins.
            </p>
            <button type="button" className={` ${styles.hero_ripple} `}>
              Go Shopping
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
