import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../services/airtable/Airtable"; // Importa la función getProducts desde tu archivo airtable.js
import loadingScreen from "../loadingScreen/loadingScreen";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        // Utiliza la función getProducts para obtener los productos desde Airtable
        getProducts()
            .then((products) => {
                // Filtra los productos según la categoría si categoryId está definido
                const filteredProducts = categoryId ? products.filter((product) => product.category === categoryId) : products;

                filteredProducts.sort((a, b) => parseInt(a.id) - parseInt(b.id));
                
                setProducts(filteredProducts);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? loadingScreen() : <ItemList products={products} />}
            <div>{loading}</div>
        </div>
    );
};

export default ItemListContainer;