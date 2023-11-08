import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import axios from "axios";

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
  let cartId = "";
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
    quantity: 1,
  };

  console.log(cartId);

  const handleAddToCart = () => {
    apiClient
      .post(`/store/carts/${cartId}/items/`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  // const handleOrder = () => {
  //   apiClient
  //     .get(`/store/carts/9d80b0a7-31c7-401b-a6fd-25209f2115c5/items/`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const handleOrder = () => {
    const order_data = {
      cart_id: "056f3c11-4c2c-470d-a723-fd61ff17b737",
    };

    const token = localStorage.getItem("access");
    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `JWT ${token}`;
        console.log(`JWT ${token}`);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axios
      .post("http://127.0.0.1:8000/store/orders/", order_data)
      .then((res) => {
        localStorage.removeItem("cart_id")
        console.log(res)
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={style.product_list}>
      {products.map((product) => {
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
                    onClick={handleOrder}
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
