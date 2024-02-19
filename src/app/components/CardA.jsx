import React from "react";


function CardA({imgUrl, productName, price1, price2}) {
  return (
    <div className="w-48 flex flex-col h-25 rounded-lg">
      <img className="rounded-t-lg" src={imgUrl} alt={productName} />
      <h1 className="text-center">{productName}</h1>
      <div className="flex justify-center gap-2">
        <p>{price1}</p>
        <p className="line-through">{price2}</p>
        
      </div>
      <button className="bg-orange-500 text-white font-bold rounded-b-lg">Comprar</button>
    </div>
  );
}

export default CardA;
