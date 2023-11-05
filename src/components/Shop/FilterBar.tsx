import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCouch } from "@fortawesome/free-solid-svg-icons";

import style from "./style.module.css";

const Sidebar = () => {
  return (
    <div className={` ${style.filer_bar}`}>
      <h4 className={`fs-5 fw-semibold py-3 mb-3 ${style.side_bar_head}`}>Categories</h4>
      <ul className="list-unstyled ps-0">
        <li className="my-2">Indoor Products</li>
        <li className="mb-2">
          <button
            className={`btn btn-toggle px-0 py-2 collapsed w-100 d-flex justify-content-between ${style.btn_toggle}`}
            data-bs-toggle="collapse"
            data-bs-target="#living"
            aria-expanded="false"
          >
            <span>
              <FontAwesomeIcon icon={faCouch} className={style.category_icon} />
              Living Room
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="collapse" id="living">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <button className="btn text-start w-100">Sofa</button>
              </li>
              <li>
                <button className="btn text-start w-100">Chear</button>
              </li>
              <li>
                <button className="btn text-start w-100">TV Stand</button>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-2">
          <button
            className={`btn btn-toggle px-0 py-2 collapsed w-100 d-flex justify-content-between ${style.btn_toggle}`}
            data-bs-toggle="collapse"
            data-bs-target="#dining"
            aria-expanded="false"
          >
            <span>
              <FontAwesomeIcon icon={faCouch} className={style.category_icon} />
              Dining Room
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="collapse" id="dining">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <button className="btn text-start w-100">Sofa</button>
              </li>
              <li>
                <button className="btn text-start w-100">Chear</button>
              </li>
              <li>
                <button className="btn text-start w-100">TV Stand</button>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-2">
          <button
            className={`btn btn-toggle px-0 py-2 collapsed w-100 d-flex justify-content-between ${style.btn_toggle}`}
            data-bs-toggle="collapse"
            data-bs-target="#bed"
            aria-expanded="false"
          >
            <span>
              <FontAwesomeIcon icon={faCouch} className={style.category_icon} />
              Bed Room
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="collapse" id="bed">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <button className="btn text-start w-100">Sofa</button>
              </li>
              <li>
                <button className="btn text-start w-100">Chear</button>
              </li>
              <li>
                <button className="btn text-start w-100">TV Stand</button>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-2">
          <button
            className={`btn btn-toggle px-0 py-2 collapsed w-100 d-flex justify-content-between ${style.btn_toggle}`}
            data-bs-toggle="collapse"
            data-bs-target="#office"
            aria-expanded="false"
          >
            <span>
              <FontAwesomeIcon icon={faCouch} className={style.category_icon} />
              Office
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="collapse" id="office">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <button className="btn text-start w-100">Sofa</button>
              </li>
              <li>
                <button className="btn text-start w-100">Chear</button>
              </li>
              <li>
                <button className="btn text-start w-100">TV Stand</button>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-2">
          <button
            className={`btn btn-toggle px-0 py-2 collapsed w-100 d-flex justify-content-between ${style.btn_toggle}`}
            data-bs-toggle="collapse"
            data-bs-target="#kitchen"
            aria-expanded="false"
          >
            <span>
              <FontAwesomeIcon icon={faCouch} className={style.category_icon} />
              Kitchen
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="collapse" id="kitchen">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <button className="btn text-start w-100">Sofa</button>
              </li>
              <li>
                <button className="btn text-start w-100">Chear</button>
              </li>
              <li>
                <button className="btn text-start w-100">TV Stand</button>
              </li>
            </ul>
          </div>
        </li>
        <li className="my-2">Outdoor Products</li>
        <li className="mb-2">
          <button
            className={`btn btn-toggle px-0 py-2 collapsed w-100 d-flex justify-content-between ${style.btn_toggle}`}
            data-bs-toggle="collapse"
            data-bs-target="#Oliving"
            aria-expanded="false"
          >
            <span>
              <FontAwesomeIcon icon={faCouch} className={style.category_icon} />
              Outdoor for Living
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="collapse" id="Oliving">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <button className="btn text-start w-100">Sofa</button>
              </li>
              <li>
                <button className="btn text-start w-100">Chear</button>
              </li>
              <li>
                <button className="btn text-start w-100">TV Stand</button>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-2">
          <button
            className={`btn btn-toggle px-0 py-2 collapsed w-100 d-flex justify-content-between ${style.btn_toggle}`}
            data-bs-toggle="collapse"
            data-bs-target="#Odining"
            aria-expanded="false"
          >
            <span>
              <FontAwesomeIcon icon={faCouch} className={style.category_icon} />
              Outdoor for Dining
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="collapse" id="Odining">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <button className="btn text-start w-100">Sofa</button>
              </li>
              <li>
                <button className="btn text-start w-100">Chear</button>
              </li>
              <li>
                <button className="btn text-start w-100">TV Stand</button>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-2">
          <button
            className={`btn btn-toggle px-0 py-2 collapsed w-100 d-flex justify-content-between ${style.btn_toggle}`}
            data-bs-toggle="collapse"
            data-bs-target="#WindowAndDoor"
            aria-expanded="false"
          >
            <span>
              <FontAwesomeIcon icon={faCouch} className={style.category_icon} />
              Windows and Doors
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="collapse" id="WindowAndDoor">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <button className="btn text-start w-100">Sofa</button>
              </li>
              <li>
                <button className="btn text-start w-100">Chear</button>
              </li>
              <li>
                <button className="btn text-start w-100">TV Stand</button>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-2">
          <button
            className={`btn btn-toggle px-0 py-2 collapsed w-100 d-flex justify-content-between ${style.btn_toggle}`}
            data-bs-toggle="collapse"
            data-bs-target="#WallArt"
            aria-expanded="false"
          >
            <span>
              <FontAwesomeIcon icon={faCouch} className={style.category_icon} />
              Wall Arts
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="collapse" id="WallArt">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <button className="btn text-start w-100">Sofa</button>
              </li>
              <li>
                <button className="btn text-start w-100">Chear</button>
              </li>
              <li>
                <button className="btn text-start w-100">TV Stand</button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
