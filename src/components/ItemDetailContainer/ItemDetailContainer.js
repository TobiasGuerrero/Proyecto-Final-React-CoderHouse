import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(Response => {
            setProduct(Response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [itemId])

    return(
        <div className="itemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer