import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { Products } from "./ProductList";

import car_img from "../../assets/icons/cart.png";
interface CartItem {
  id: number;
  product: Products;
  quantity: number;
  total_price: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const displayCart = () => {
      apiClient
        .get(`/store/carts/4ee3b74e-1000-411e-aca2-a4e1b661cf07/items/`)
        .then((res) => {
          console.log(res);
          setCartItems(res.data);
        })
        .catch((error) => console.log(error));
    };
    displayCart();
  }, []);

  const handleRemove = (item_id: number) => {
    apiClient
      .delete(
        `/store/carts/4ee3b74e-1000-411e-aca2-a4e1b661cf07/items/${item_id}/`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((errors) => console.log(errors));
  };

  return (
    <div className="container-md">
      <div className="py-1">.</div>
      <h4 className="cl-primary">YOUR CARTS</h4>
      <table className="w-100">
        <thead>
          <tr>
            <td>Image</td>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item.id} className="btoder border-bottom">
                <td>
                  <img src={car_img} alt="" width={"60rem"} />
                </td>
                <td>{item.product.title}</td>
                <td>{item.quantity}</td>
                <td>{item.product.unit_price}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Total Price</td>
            <td></td>
            <td></td>
            {/* <td>{cartItems.total_price}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
