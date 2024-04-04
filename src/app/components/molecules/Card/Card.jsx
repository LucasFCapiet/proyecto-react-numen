import axios from "axios";
import React from "react";

const Card = (props) => {
  let qty = 1;

  const addItem = async (a, b) => {
    let isExisting = false;
    const result = await axios.get("http://localhost:5000/orderitem");
    result.data.forEach((orderItem) => {
      if (a === orderItem.name) {
        orderItem.qty += 1;
        const order = {
          name: a,
          price: b,
          qty: orderItem.qty,
        };
        axios.put(`http://localhost:5000/orderitem/${orderItem.id}`, order);
        isExisting = true;
      }
    });
    if (!isExisting) {
      const order = {
        name: a,
        price: b,
        qty: qty,
      };
      axios.post("http://localhost:5000/orderitem", order);
    }
  };
  return (
    <div className="flex flex-wrap">
      {props.details.map((value, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={value.img} />
          </div>
          <div>
            <p className="card-title text-balance text-xxxl font-bold text-[#ffffff]">{value.title}</p>
            {/*<p className="description">{value.description}</p>*/}
            <p className="text-lg font-bold">$ {value.price}</p>
            <p className="line-through font-light text-[#8d8080]">$ {value.price2}</p>
            <button
              className="add-btn"
              onClick={() => addItem(value.title, value.price)}
            >
              <svg
                className="h-8 w-8 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
