import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase/FireBaseConfig"
import loadingScreen from "../loadingScreen/loadingScreen"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "products", itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            {loading ? loadingScreen() : <ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailContainer