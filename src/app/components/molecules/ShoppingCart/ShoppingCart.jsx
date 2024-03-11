"use client"
import { TYPES } from "@/app/actions/shoppingActions";
import { useReducer } from "react";
import Product from "./Product";
import CartItem from "./CartItem";
import shoppingReducer from "./shoppingReducer";
import { shoppingInitialState } from "./shoppingReducer";

const ShoppingCart = () => {
  
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const addToCart = (id) => {
    console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const deleteFromCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div id="shopping_window" className="shopping-window">
      <div className="window">
      <button id="close_cart">X</button>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, index) => (
          <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <button onClick={clearCart}>Limpiar Carrito</button>


      
      </div>
      
    </div>
  );
  
};

const open_cart = document.getElementById('open_cart');
const shopping_window = document.getElementById('shopping_window');
const close_cart = document.getElementById('close_cart');

open_cart.addEventListener('click', () => {
  shopping_window.classList.add('show');  
});

close_cart.addEventListener('click', () => {
  shopping_window.classList.remove('show');
});

export default ShoppingCart;

