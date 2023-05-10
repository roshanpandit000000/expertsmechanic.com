import { createContext, useReducer, useState } from "react";

export const Store = createContext();

const initialState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM": {

      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.name === newItem.name
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];  
            console.log(action.payload, "existitem",existItem)
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.name !== action.payload.name
      );
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState([]);
  const [searchInfo, setSearchInfo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
    modalOpen,
    setModalOpen,
    selectedVehicle,
    setSelectedVehicle,
    searchInfo,
    setSearchInfo,
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
