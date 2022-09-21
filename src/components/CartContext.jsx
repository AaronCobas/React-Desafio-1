import { createContext, useState } from "react";
export const CartContext = createContext();
const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const addItem = (item, count) => {
        if (isInCart(item.id)){
            const indexItem = cartList.findIndex(ele => ele.item.id === item.id);
            cartList[indexItem].count = cartList[indexItem].count + count;
        } else{
        setCartList([...cartList, {item, count}])
        }
    }
    const clear = () => {
        setCartList([])
    }
    const isInCart = (id) => {
        return cartList.find(item => item.item.id === id) ? true : false;
    }
    const removeProduct = (id) => {
        setCartList(cartList.filter(item => item.item.id !== id));
    }
    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            clear,
            isInCart,
            removeProduct,
            }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider