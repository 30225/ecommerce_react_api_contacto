import React, {useState} from "react"
import {Link} from "react-router-dom"

function Producto({categoria,id,price,title}){
    const [mensaje,setMensaje] = useState('')
    const [cantidad,setCantidad] = useState(1)

    const comprar = ()=>{
        setMensaje('Producto agregado al carrito')
    }
    const agregarCarrito = ()=>{
        setCantidad(cantidad + 1)
    }
    //console.log(props)
    return (
        <div>
            <h2>{title}</h2>
            <p>{categoria}</p>
            <p>{price}</p>
            <p>Cantidad : {cantidad}</p>
            <button onClick={comprar} >Comprar</button>
            <button onClick={agregarCarrito} >Agregar al carrito</button>
            <button><Link to={`/productos/${id}`}>Ver detalle</Link></button>
            <div>{mensaje}</div>
        </div>
    )
    
}

export default Producto