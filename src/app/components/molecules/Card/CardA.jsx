/*import axios from "axios";
import React from "react";

const CardA({ imgUrl, productName, price, price2 }) {
  let qty = 1;
  const addItem = async (a, b) => {
    let isExisting = false;
    const result = await axios.get("http://localhost:5000/orderitem");
    if (result.data.length === 0) {
      const order = { productName: a, price: b, qty: qty };
      axios.post("http://localhost:5000/orderitem", order);
    } else {
      result.data.map((orderItem) => {
        if (a === orderItem.productName) {
          orderItem.qty += 1;
          const order = { productName: a, price: b, qty: orderItem.qty };
          axios.put(`http://localhost:5000/orderitem/${orderItem._id}`, order);
          isExisting=true;
        }
      });
      if (isExisting == false) {
        const order = { productName: a, price: b, qty: qty };
        axios.post("http://localhost:5000/orderitem", order);
      }
    }
  };
  return (
    <div className="w-48 flex flex-col h-25 rounded-lg shadow-md shadow-custom-gray hover:border-[#fcfcfc] hover:border-2 hover:shadow-custom-gray transition-all duration-100 ease-in-out">
      <img className="rounded-t-lg " src={imgUrl} alt={productName} />
      <h1 className="text-center h-full text-pretty px-0.5 bg-[#2068AC] text-[#fcfcfc] font-extralight text-[1rem]">
        {productName}
      </h1>
      <div className="flex justify-center gap-2 bg-[#2D2A30]">
        <p className="text-[#fcfcfc] font-bold text-lg">${price}</p>
        <p className="line-through decoration-2 text-[#ce5638b6] font-bold text-md">
          ${price2}
        </p>
      </div>
      <button
        className="bg-[#409B57] py-1 text-[#fcfcfc] text-lg font-bold rounded-b-lg hover:bg-[#47a15e]"
        onClick={() => addItem(productName, price)}
      >
        COMPRAR
      </button>
    </div>
  );
}

export default CardA;
*/