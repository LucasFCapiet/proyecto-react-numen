

const Product = ({ data, addToCart }) => {
  const { id, name, price, imgUrl } = data;
  return (
    <div className="product">
      <h4>{name}</h4>
      <img className="w-24 h-15" src={imgUrl} alt="" />
      <h5>$ {price}</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default Product;
