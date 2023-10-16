import React, {useState} from "react";
import ProductCard from "../Product/ProductCard";

export const Cart = React.createContext({
    cart:0,
});

const CartContext = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (data) => {
        setCart([...cart, {...data, quantity:1}])
    }

    return (
        <Cart.Provider value={{cart,setCart,ProductCard,addToCart}}>
         {props.children}
        </Cart.Provider>
    )
}
export default CartContext