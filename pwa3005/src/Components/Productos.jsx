import React from "react"
import { useState,useEffect } from "react"
import Producto from "./Producto"

function Productos(){
    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)
    const [buscar,setBuscar] = useState('motorola')
    useEffect(
        ()=>{
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`)
            .then(response=>response.json())
            .then(data=>{
                console.log(data)
                setProductos(data.results)
                setLoading(false)
            })    

        },
        [buscar]
    );
    const filtrar = ()=>{
            setProductos([
                {
                    id:2,
                    title:"Motorola moto z",
                    price:"50000"
                }
            ])
    }
    const handleChangeBuscar = (event)=>{
        setBuscar(event.target.value)
    }

    let titulo = "Listado de productos"
    if(loading){
        return (
            <div>Cargando ...</div>
        )
    }else{
        return (
            <div>
                <h1>{titulo}</h1>
                <input type="text" value={buscar} onChange={handleChangeBuscar} />
                {productos.map(producto=><Producto id={producto.id} title={producto.title} price={producto.price} categoria={producto.categoria} />)}

                <button onClick={filtrar}>Filtrar</button>
            </div>
        ) 
    }
   
    
}

export default Productos