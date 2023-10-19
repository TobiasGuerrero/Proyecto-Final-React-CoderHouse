import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { getProducts } from "../../services/airtable/Airtable"; // Importa la función getProducts desde tu archivo Airtable.js
import loadingScreen from "../loadingScreen/loadingScreen";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Utiliza "id" para obtener el ID del producto de la URL
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        // Utiliza la función getProducts para obtener los productos desde Airtable
        getProducts()
            .then((products) => {
                const foundProduct = products.find((prod) => prod.id === id);

                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    console.log(`Producto con ID ${id} no encontrado.`);
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [id]); // Usa "id" como dependencia

    return (
        <div className="ItemDetailContainer">
            {loading ? loadingScreen() : <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;
