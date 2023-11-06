import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import style from "./style.module.css";

export interface Products {
  id: number;
  title: string;
  description: string;
  slug: string;
  inventory: number;
  unit_price: number;
  collection: number;
  cover_image: string;
}

const ProductList = ({ filter_key }: { filter_key: number }) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  //   const filter_key = filter;

  useEffect(() => {
    apiClient
      .get("/store/products/")
      .then((res) => {
        setProducts(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  //   if(filter_key){
  //     setFilteredProducts(products.filter(product => product.collection = filter_key));
  //   }else{
  //     setFilteredProducts(products);
  //   }

  return (
    <div className={style.product_list}>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.cover_image} className={style.product_img} />
            <h3>{product.title}</h3>
            <h6>{product.unit_price}</h6>
            <p>{`#${product.collection}`}</p>
          </div>
        );
      })}
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.cover_image} className={style.product_img} />
            <h3>{product.title}</h3>
            <h6>{product.unit_price}</h6>
            <p>{`#${product.collection}`}</p>
          </div>
        );
      })}
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.cover_image} className={style.product_img} />
            <h3>{product.title}</h3>
            <h6>{product.unit_price}</h6>
            <p>{`#${product.collection}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
