import FooterDescription from "./1_FooterDescription/FooterDescription";
import FooterProducs from "./2_FooterProducs/FooterProducs";
import FooterLinks from "./3_FooterLinks/FooterLinks";
import FooterContact from "./4_FooterContact/FooterContact";
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className={`container-fluid ${style.container_footer}`}>
      <div className="container-md d-flex align-items-center h-100">
        <div className="row justify-content-between align-content-center flex-wrap w-100">
          <FooterDescription />
          <FooterProducs />
          <FooterLinks />
          <FooterContact />
        </div>
      </div>
      <div className="container-md py-4 mt-5 border-top">
        <div className="row ">
          <div
            className={` ${style.terms_privecy} col-md d-flex align-items-center justify-content-center justify-content-md-start`}
          >
            <span className="text-white">&copy; Asrat Furniture</span>
            <i
              className={` ${style.fa_circle} fa-circle fa-solid text-white`}
            ></i>
            <span>
              <a className="text-white text-decoration-none" href="#">
                Terms
              </a>
            </span>
            <i
              className={` ${style.fa_circle} fa-circle fa-solid text-white`}
            ></i>
            <span>
              <a className="text-white text-decoration-none" href="#">
                Privecy
              </a>
            </span>
          </div>
          <div className="col-md d-flex my-2 justify-content-center justify-content-md-end">
            <span className="text-white justify-self-end">
              Developed by{" "}
              <a className="text-white" href="#">
                <i className="fa-solid fa-heart"></i> Lenege Technologies
              </a>
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
