import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";

const Card = (props) => {
  let qty = 1;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const addItem = async (a, b) => {
    let isExisting = false;
    const result = await axios.get("http://localhost:8080/orderitem");

    result.data.forEach((orderItem) => {
      if (a === orderItem.name) {
        orderItem.qty += 1;
        const order = {
          name: a,
          price: b,
          qty: orderItem.qty,
        };
        axios.put(`http://localhost:8080/orderitem/${orderItem.id}`, order);
        isExisting = true;
      }
    });
    if (!isExisting) {
      const order = {
        name: a,
        price: b,
        qty: qty,
      };
      axios.post("http://localhost:8080/orderitem", order);
    }
  };

  const openModal = (item) => {
    setCurrentItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="flex flex-wrap">
      {props.details.map((value, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={value.img} />
          </div>
          <div>
            <p className="card-title text-balance text-xxxl font-bold text-[#ffffff]">
              {value.title}
            </p>
            {/*<p className="description">{value.description}</p>*/}
            <p className="text-lg font-bold">$ {value.price}</p>
            <p className="line-through font-light text-[#8d8080]">
              $ {value.price2}
            </p>
            <button className="add-btn" onClick={() => openModal(value)}>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Descripción del producto"
        className="fixed overflow-y-auto top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000]/50 z-50 bg-opacity-50 "
      >
        <div className="relative border-[#e2ddddc9] border-1 mt-6 p-4 bg-[#ffffff] flex flex-col items-center justify-center  max-sm:w-full max-sm:h-full">
          <button
            className="absolute top-0 right-0 m-2 bg-[#000000] text-[#ffffff] w-10 h-8 rounded-md hover:bg-[#1a1a1a]/90"
            onClick={closeModal}
          >
            X
          </button>
          <h2 className="text-2xl font-extrabold mx-10">{currentItem.title}</h2>
          <img
            className="max-lg:w-[25rem] max 2xl: w-[25rem] 2xl:w-[25rem]  sm:w-2rem -mb-6"
            src={currentItem.img}
          />
          <ul className="mb-5 text-xl font-light text-[#000000]">
            {currentItem.description &&
              currentItem.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
          </ul>
          <button
            className="add-btn bg-[#000000] text-[#ffffff] w-24 h-8 rounded-md hover:bg-[#000000]/90"
            onClick={() => {
              addItem(currentItem.title, currentItem.price);
              closeModal();
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
