import { TYPES } from "@/app/actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      imgUrl: "/imgs/NOTEBOOK-GFAST-N°-550W-01.jpg",
      name: "NOTEBOOK GFAST N-550W",
      quantity: 1,
      desc: [
        "Procesador:Intel Core i5 1035G4",
        "Batería:4000 mAh",
        "Memoria de almacenamiento:480 Gb",
        "Puertos Usb: 2 x USB 3.0 1 x Type C",
        "Tamaño de pantalla: 15.6” FHD IPS (1920 x1080)",
        "Pantalla Táctil:NO",
        "Puertos Hdmi:1",
        "Puerto Ethernet: NO",
        "Cámara:SI 2MP",
        "Teclado Numérico:Retroiluminado + Pad Numerico",
        "Entradas USB: 3",
      ],
      price: 599500,
      price2: 610100,
    },

    {
      id: 2,
      imgUrl: "/imgs/MOTO-G13.webp",
      name: "MOTO G13 128 GB ROSE GOLD 4 GB RAM",
      quantity: 1,
      desc: [
        "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
        "Pantalla IPS de 6.5'",
        "Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx.",
        "Cámara delantera de 8Mpx.",
        "Procesador MediaTek Helio G85 Octa-Core de 2GHz con 4GB de RAM.",
        "Batería de 5000mAh.",
        "Memoria interna de 128GB.",
        "Resistente a las salpicaduras.",
        "Con reconocimiento facial y sensor de huella dactilar.",
      ],
      price: 189999,
      price2: 259999,
    },

    {
      id: 3,
      imgUrl: "/imgs/CONSOLA-FAMILY-PORTATIL.jpg",
      name: "CONSOLA FAMILY PORTATIL SUPREME",
      quantity: 1,
      desc: [
        "Incluye 400 juegos.",
        "Tamaño de la pantalla 2.8'.",
        "Capacidad de la batería 600 mAh",
        "Procesador 8 bits",
        "Control de volumen lateral",
      ],
      price: 15400,
      price2: 17000,
    },

    {
      id: 4,
      imgUrl: "/imgs/PARLANTE-JBL-FLIP-5.jpg",
      name: "PARLANTE BT JBL FLIP 5",
      quantity: 1,
      desc: [
        "Colores: Consultar disponibilidad",
        "Potencia de salida (RMS): 20 W",
        "Autonomía de la batería: 12 h",
        "Incluye batería recargable: Sí",
        "Con Bluetooth: Sí",
        "Conectores de entrada: USB-C",
      ],
      price: 209000,
      price2: 251200,
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, newItem],
          };
    }
    case TYPES.REMOVE_ONE_PRODUCT: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }
    default:
      return state;
  }
}
export default shoppingReducer;
