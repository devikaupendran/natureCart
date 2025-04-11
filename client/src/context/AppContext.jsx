import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from '../assets/assets';
import toast from 'react-hot-toast';

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();

    const currencySymbol = import.meta.env.VITE_CURRENCY;

    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);

    const [cartItems, setCartItems] = useState({});

    //function to fetch data from the assets
    const fetchProducts = async () => {
        setProducts(dummyProducts);
    }

    //function to add to cart
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        }
        else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success('Add to Cart');
    }

    //update cart Item quantity
    const updateCartitem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart updated");
    }

    //Remove product from cart
    const removeCartItem = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId]
            }
        }
        toast.success("Removed from Cart");
        setCartItems(cartData)
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    const value = {
        navigate,
        user, setUser,
        isSeller, setIsSeller,
        showUserLogin, setShowUserLogin,
        products, currencySymbol,
        cartItems, addToCart, updateCartitem, removeCartItem
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => {
    return useContext(AppContext)
}