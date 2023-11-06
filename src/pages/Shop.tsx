import { useEffect } from "react";
import FilterBar from "../components/Shop/FilterBar";
import style from "./style.module.css";
import ProductList from "../components/Shop/ProductList";
import Cart from "../components/Shop/Cart";
import ProductDetail from "../components/Shop/ProductDetail";
import Wish from "../components/Shop/Wish";

const Shop = () => {
  useEffect(() => {
    document.title = "Furniture Shopping";
  });

  return (
    <>
      <div className={style.header_space}></div>
      <div className="container-lg d-flex">
        <FilterBar />
        <ProductList filter_key={0}/>
      </div>
      <div>
        <Cart />
        <ProductDetail />
        <Wish />
      </div>
    </>
  );
};

export default Shop;
