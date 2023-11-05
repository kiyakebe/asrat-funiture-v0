import { useEffect } from "react";
import FilterBar from "../components/Shop/FilterBar";
import style from "./style.module.css";

const Shop = () => {
  useEffect(() => {
    document.title = "Furniture Shopping";
  });

  return (
    <>
      <div className={style.header_space}></div>
      <div className="container-lg d-flex">
        <FilterBar />
        <div>
          c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />
          c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />
          c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />
          c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />
          c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />
          c<br />
        </div>
      </div>
    </>
  );
};

export default Shop;
