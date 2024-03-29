"use client";
import { TYPES } from "@/app/actions/shoppingActions";

import { useReducer, useEffect } from "react";
import shoppingInitialState from "./shoppingInitialState";
import Product from "./Product";
import CartItem from "./CartItem";
import shoppingReducer from "./shoppingReducer";

import axios from "axios";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cart: "http://localhost:5000/cart",
    };
    const responseProducts = await axios.get(ENDPOINTS.products),
      responseCart = await axios.get(ENDPOINTS.cart);

    const data = {
      products: responseProducts.data,
      cart: responseCart.data,
    };

    dispatch({ type: TYPES.READ_STATE, payload: data });
  };
  useEffect(() => {
    updateState();
  }, []);

  if (typeof window !== "undefined") {
    const open_cart = document.getElementById("open_cart");
    const shopping_window = document.getElementById("shopping_window");
    const close_cart = document.getElementById("close_cart");
    const close_promotional = document.getElementById("close_promotional");

    open_cart.addEventListener("click", () => {
      shopping_window.classList.add("show");
    });

    close_cart.addEventListener("click", () => {
      shopping_window.classList.remove("show");
    });

    close_promotional.addEventListener("click", () => {
      grid_container.classList.add("noshow");
    });
  }

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
        <div className="flex flex-col">
          <button id="close_cart" className="text-right">
            X
          </button>
          <h2 className="font-bold text-xl text-center mb-1">
            Carrito de Compras
          </h2>
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-row">
            <div className="flex flex-col">
              {" "}
              <h3 className="text-lg font-bold mb-2">Productos</h3>
              <div className="flex flex-col justify-center items-center ">
                {products.map((product) => (
                  <Product
                    key={product.id}
                    data={product}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Carrito</h3>
            <div className="box">
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  data={item}
                  deleteFromCart={deleteFromCart}
                />
              ))}
            </div>
            <button
              className="bg-[#2c2c2c] rounded-full px-4 py-1 text-custom-white font-semibold hover:bg-[#5e5e5e]"
              onClick={clearCart}
            >
              Limpiar Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
