import axios from "axios";
import React, { useEffect, useState } from "react";

import { ThemeContext } from "../NavBar/DarkMode";
import { useContext } from "react";

const OrderCart = () => {
  const { theme } = useContext(ThemeContext)
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    let totalPrice = 0;
    const result = await axios.get("http://localhost:8080/orderitem");
    setItems(result.data);
    result.data.map((prices) => {
      totalPrice += prices.qty * Number(prices.price);
    });
    setTotal(totalPrice);
  };
  const deleteOrder = async (id) => {
    let isDelete = window.confirm("Are you sure to delete this item?");
    if (isDelete) {
      await axios.delete(`http://localhost:8080/orderitem/${id}`);
      loadItems();
    }
  };

  const deleteAll = async () => {
    let isDelete = window.confirm("Are you sure to delete all items?");
    if (isDelete) {
      const allItems = await axios.get(`http://localhost:8080/orderitem`);

      for (let item of allItems.data) {
        await axios.delete(`http://localhost:8080/orderitem/${item.id}`);
      }
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
    await axios.put(`http://localhost:8080/orderitem/${b}`, order);
    loadItems();
  };
  return (
    <>
    <div className={`${theme}`}>
      <div className={`order-area ${theme}`}>
        <div className="order-total">Pedido</div>
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
          <button className="delete-btn p-2" onClick={() => deleteOrder(item.id)}>
            Quitar
          </button>
        </div>
      ))}
      ;
      <div className="order-total">
        <div className="total">Total</div>
        <div className="total-price">$ {total}</div>
        <div className="place-order-btn">Comprar</div>
        <div className="remove-all-btn" onClick={() => deleteAll()}>
        <svg className="h-8 w-8 text-slate-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
</svg>
        </div>
      </div>
    </div>
    </>
  );
};

export default OrderCart;
