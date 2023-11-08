import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

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
  let cartId = ""

  // const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  useEffect(() => {
    apiClient
      .get("/store/products/")
      .then((res) => {
        setProducts(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  if (localStorage.getItem("cart_id")) {
    cartId = JSON.stringify(localStorage.getItem("cart_id"));
    console.log(cartId)
  } else {
    const createCart = () => {
      apiClient
        .post("/store/carts/")
        .then((res) => {
          localStorage.setItem("cart_id", res.data.id);
          cartId = JSON.stringify(res.data.id);
        })
        .catch((error) => console.log(error));
    };
    createCart();
  }

  const data = {
    product_id: 7,
    quantity: 3,
  };

  const handleAddToCart = () => {};

  const handleOrder = () => {
    apiClient
      .get("/store/carts/931de929-5e96-4cc6-b273-6442af7006c4/items/")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={style.product_list}>
      {products.map((product) => {
        {
          // console.log(product.id);
        }
        return (
          <div key={product.id} className={style.product_card}>
            <img src={product.cover_image} className={style.product_img} />
            <div className="d-flex my-3 p-2">
              <div className="fle flex-grow-1">
                <h5 className="text-capitalize cl-primary">{product.title}</h5>
                <h6>{product.unit_price} ETB</h6>
                <p>{`#${product.collection}`}</p>
              </div>
              <div className="d-flex flex-column align-self-end">
                <button className="btn">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={style.icons}
                    onClick={handleAddToCart}
                  />
                </button>
                <button className="btn">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className={style.icons}
                  />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
