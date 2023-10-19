import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Airtable from 'airtable';
import { getProducts } from "../../services/airtable/Airtable";
import { useNavigate } from 'react-router-dom';

// Configura tu token de acceso y el ID de la base de datos
const accessToken = process.env.ACCESS_TOKEN;
const baseId = process.env.BASE_ID;

const base = new Airtable({ accessToken }).base(baseId);

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");
    const { cart, clearCart, totalPrice } = useContext(CartContext);
    const navigate = useNavigate();

    const updateInventory = async (cart) => {
        try {
            // Obtén los productos desde Airtable
            const products = await getProducts();

            cart.forEach(async (cartItem) => {
                const productInAirtable = products.find((product) => product.id === cartItem.id);

                if (productInAirtable) {
                    const newStock = productInAirtable.stock - cartItem.quantity;
                    console.log("Actualizando stock para el producto id: ", productInAirtable.id);

                    // Utiliza una solicitud PATCH para actualizar el campo "stock"
                    base('products').update([
                        {
                            id: productInAirtable.productid,
                            fields: { stock: newStock },
                        },
                    ], (err, records) => {
                        if (err) {
                            console.error("Error al actualizar el stock en Airtable:", err);
                        } else {
                            console.log(`Stock actualizado para el producto id: ${productInAirtable.id}`);
                        }
                    });
                }
            });
        } catch (error) {
            console.log("Error en la actualización del inventario:\n", error);
        }
    };


    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        // Verifica si el carrito está vacío
        if (cart.length === 0) {
            setLoading(false);
            navigate(`/AeroCool/`);
            console.log("empty cart")
            return;
        }

        try {
            const orderItems = cart.map((item) => `${item.name} (Cantidad: ${item.quantity}) - Precio: ${item.price * item.quantity} $`);

            const orderItemsText = `Productos en la orden:\n${orderItems.join("\n")}`;

            const orderFields = {
                BuyerName: name,
                BuyerPhone: phone,
                BuyerEmail: email,
                Items: orderItemsText,
                TotalPrice: totalPrice,
            };

            // Utiliza la función 'create' para agregar un nuevo registro a la tabla 'request'
            base('request').create(
                [
                    {
                        fields: orderFields,
                    },
                ],
                (err, records) => {
                    if (err) {
                        console.error("Error al crear la orden en Airtable:", err);
                    } else {
                        const orderCreatedId = records[0].getId();
                        setOrderId(orderCreatedId);
                        updateInventory(cart);
                        clearCart();
                    }
                }
            );
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1 className="checkoutH1">Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1 className="checkoutH1">El ID de su orden es: {orderId}</h1>;
    }

    return (
        <div className="checkoutContainer">
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;
