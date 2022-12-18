import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

function Detalle(){
    const {id} = useParams()
    const [producto,setProducto] = useState({})
    const [loading,setLoading] = useState(true)

    console.log("id",id)
    useEffect(
        ()=>{
            fetch(`https://api.mercadolibre.com/items/${id}`)
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                setProducto(data)
                setLoading(false)
            })    

        },
        [id]
    );
    if(loading){
        return (
            <div>Cargando ...</div>
        )
    }else{
        return (
            <div>
                <p>{producto.title}</p>
                <p>Condicion: {producto.condition}</p>
                <p>$ {producto.price}</p>
                <p>Catalogo del producto: {producto.catalog_product_id}</p>
            </div>
        )
    }
}
export default Detalle