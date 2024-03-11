const CartItem = ({ data, deleteFromCart }) => {
  let { id, name, price, quantity , imgUrl } = data;
  return (
    <div className="cart-item">
      <h4>{name}</h4>
      <img className="w-24 h-15" src={imgUrl} alt="" />
      <h5>
        $ {price} x {quantity} = ${price * quantity}
      </h5>
      <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
      <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  );
};

export default CartItem;
