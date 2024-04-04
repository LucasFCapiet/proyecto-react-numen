import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderCart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    let totalPrice = 0;
    const result = await axios.get("http://localhost:5000/orderitem");
    setItems(result.data);
    result.data.map((prices) => {
      totalPrice += prices.qty * Number(prices.price);
    });
    setTotal(totalPrice);
  };
  const deleteOrder = async (id) => {
    let isDelete = window.confirm("Are you sure to delete this item?");
    if (isDelete) {
      await axios.delete(`http://localhost:5000/orderitem/${id}`);
      loadItems();
    }



  };

  const incDec = async (a, b, c, d, e) => {
    if (c === "dec") {
      if (a === 1) {
        deleteOrder(b);
        return;
      } else {
        a -= 1;
      }
    } else {
      if (a === 20) {
        a = 20;
        alert("You can't order more than 20 items");
        return;
      } else {
        a += 1;
      }
    }
    const order = { name: d, price: e, qty: a };
    await axios.put(`http://localhost:5000/orderitem/${b}`, order);
    loadItems();
  };
  return (
    <>
      <div className="order-area">
        <div className="order-total">Your Order</div>
      </div>
      {items.map((item, index) => (
        <div className="order-card" key={index}>
          <div className="order-item">{item.name}</div>
          <div className="order-qty">
            <button
              className="qty-btn"
              onClick={() =>
                incDec(item.qty, item.id, "dec", item.name, item.price)
              }
            >
              -
            </button>
            <input type="text" className="qty-input" value={item.qty} />
            <button
              className="qty-btn"
              onClick={() =>
                incDec(item.qty, item.id, "inc", item.name, item.price)
              }
            >
              +
            </button>
          </div>
          <div className="order-price">${item.qty * Number(item.price)}</div>
          <button className="delete-btn" onClick={() => deleteOrder(item.id)}>
            Remove
          </button>
        </div>
      ))}
      ;
      <div className="order-total">
        <div className="total">Total</div>
        <div className="total-price">$ {total}</div>
        <div className="place-order-btn">Place Order</div>
      </div>
    </>
  );
};

export default OrderCart;
