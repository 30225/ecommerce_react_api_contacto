// var registrarse = function(){

//}

// const registrarse = ()=>{

//}

//var registrarse = function(nombre){

//}

//const registrarse = nombre => {

// }

//var sumar = function(a,b){
// return a+b
// }
// const sumar = (a,b)=>a+b
// const sumar = (a,b)=>{
//  return a+b 
//}
const getData = ()=>{
    const http = new XMLHttpRequest()
    //Response (Como trabajamos la respuesta)
    http.onreadystatechange = ()=>{
        console.log("onreadystatechange")
        console.log(http.status)
        console.log(http.readyState)
        if(http.status==200 && http.readyState==4){
            document.getElementById("mensaje").innerHTML = http.responseText
        }
    }
    //request (solicitud)
    http.open("GET","http://127.0.0.1:5500/gracias.txt",true)
    http.send()
}
const getData2 = ()=>{
    const http = new XMLHttpRequest()
    //Response (Como trabajamos la respuesta)
    http.onreadystatechange = ()=>{
        console.log("onreadystatechange")
        console.log(http.status)
        console.log(http.readyState)
        if(http.status==200 && http.readyState==4){
            document.getElementById("mensaje").innerHTML = http.responseText
        }
    }
    //request (solicitud)
    http.open("GET","http://127.0.0.1:5500/completar.txt",true)
    http.send()
}
const registrarse =()=>{
    const nombre = document.getElementById("nombre_id").value
    const apellido = document.getElementById("apellido_id").value
    const email = document.getElementById("email_id").value
    const password = document.getElementById("password_id").value
    const select = document.getElementById("tipocontacto_id")
    const telefono = document.getElementById("telefono_id").value
    const descripcion = document.getElementById("descripcion_id").value
    const asunto = document.getElementById("asunto_id").value
    console.log(nombre,apellido,email,password,asunto,telefono)
    console.log(select.options[select.selectedIndex].value)

    if( select.options[select.selectedIndex].value==0){
        document.getElementById("tipocontacto_id").style.backgroundColor="red"
        document.getElementById("tipocontacto_error").innerHTML = "El campo es obligatorio"
    }else{
        document.getElementById("tipocontacto_error").innerHTML = ""
        document.getElementById("tipocontacto_id").style.backgroundColor=""
    }

    if(nombre==""){
        document.getElementById("nombre_id").style.backgroundColor="red"
        document.getElementById("nombre_error").innerHTML = "El campo es obligatorio"
    }else{
        document.getElementById("nombre_error").innerHTML = ""
        document.getElementById("nombre_id").style.backgroundColor=""
    }
    if(apellido==""){
        document.getElementById("apellido_id").style.backgroundColor="red"
        document.getElementById("apellido_error").innerHTML = "El campo es obligatorio"
    }else{
        document.getElementById("apellido_error").innerHTML = ""
        document.getElementById("apellido_id").style.backgroundColor=""
    }
    if(email==""){
        document.getElementById("email_id").style.backgroundColor="red"
        document.getElementById("email_error").innerHTML = "El campo es obligatorio"
    }else{
        document.getElementById("email_error").innerHTML = ""
        document.getElementById("email_id").style.backgroundColor=""
    }
    if(password==""){
        document.getElementById("password_id").style.backgroundColor="red"
        document.getElementById("password_error").innerHTML = "El campo es obligatorio"
    }else{
        document.getElementById("password_error").innerHTML = ""
        document.getElementById("password_id").style.backgroundColor=""
    }
    if(telefono==""){
        document.getElementById("telefono_id").style.backgroundColor="red"
        document.getElementById("telefono_error").innerHTML = "El campo es obligatorio"

    }else{
        document.getElementById("telefono_error").innerHTML = ""
        document.getElementById("telefono_id").style.backgroundColor=""
    }
    if(descripcion==""){
        document.getElementById("descripcion_id").style.backgroundColor="red"
        document.getElementById("descripcion_error").innerHTML = "El campo es obligatorio"

    }else{
        document.getElementById("descripcion_error").innerHTML = ""
        document.getElementById("descripcion_id").style.backgroundColor=""
    }
    if(asunto==""){
        document.getElementById("asunto_id").style.backgroundColor="red"
        document.getElementById("asunto_error").innerHTML = "El campo es obligatorio"

    }else{
        document.getElementById("asunto_error").innerHTML = ""
        document.getElementById("asunto_id").style.backgroundColor=""
    }
    if(asunto!="" && descripcion!="" && telefono!="" && password!="" && email!="" && nombre!="" && apellido!=""){
        getData()
    }else{
        getData2()
    }
    //document.getElementById("mensaje").innerHTML = "Gracias "+nombre+","+apellido+" por registrarse"
    //document.getElementById("mensaje").innerHTML =`Gracias ${nombre} , ${apellido} por registrarse`
}

