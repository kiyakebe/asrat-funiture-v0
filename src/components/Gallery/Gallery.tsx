import { useEffect, useState } from "react";
import style from "./style.module.css";
import apiClient from "../../services/api-client";
import { Products } from "../Shop/ProductList";

const Gallery = () => {
  const [images, setImages] = useState<Products[]>([]);

  useEffect(() => {
    apiClient
      .get("/store/products/")
      .then((res) => {
        setImages(res.data.results);
        console.log();
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container-lg py-5">
      <div className={style.gap_top}></div>
      <div className={`${style.gallery}`}>
        {images &&
          images.map((image) => {
            return (
              <div key={image.id}>
                <img src={image.cover_image} alt="" />
              </div>
            );
          })}
        {images &&
          images.map((image) => {
            return (
              <div key={image.id}>
                <img src={image.cover_image} alt="" />
              </div>
            );
          })}
        {images &&
          images.map((image) => {
            return (
              <div key={image.id}>
                <img src={image.cover_image} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
