import { useEffect } from "react";
import style from "./style.module.css";
import { Outlet } from "react-router-dom";


const Shop = () => {
  useEffect(() => {
    document.title = "Furniture Shopping";
  });

  return (
    <>
      <div className={style.header_space}></div>
      
      <Outlet />
    </>
  );
};

export default Shop;
