import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
    });

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error("El producto ya fue agregado.");
        }
    };

    const removeItem = itemId => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = itemId => {
        return cart.some(prod => prod.id === itemId);
    };

    const totalPrice = cart.reduce((acum, item) => acum + item.quantity * item.price, 0 );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice }}>
        {children}
    </CartContext.Provider>
    );
};
