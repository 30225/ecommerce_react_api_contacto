import React from "react"

function Login(){

    return (
        <div>
            <form>
                <div>
                    <label >Correo electronico</label>
                    <input type="text" />

                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" id="password_id"/>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Login