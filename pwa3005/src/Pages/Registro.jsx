import React from "react"
function Registro(){
    return (
        <div>
                    <form name="registro_form" onsubmit="registrarse(); return false">
                        <div>
                            <label>Nombre</label>
                            <input type="text" name="nombre" id="nombre_id"/>
                        </div>
                        <div id="nombre_error">
                        </div>
                        <div>
                            <label>Apellido</label>
                            <input type="text" name="apellido" id="apellido_id"/>
                        </div>
                        <div id="apellido_error">
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" id="email_id"/>
                        </div>
                        <div id="email_error">
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <input type="password" name="password" id="password_id"/>
                        </div>
                        <div id="password_error">
                        </div>
                        <div>
                            <label>Telefono</label>
                            <input type="text" name="telefono" id="telefono_id"/>
                        </div>
                        <div id="telefono_error">
                        </div>

                        <div>
                            <label>Tipo de contacto</label>
                            <select name="tipocontacto" id="tipocontacto_id">
                                <option value="0"></option>
                                <option value="1">Soporte</option>
                                <option value="2">Ventas</option>
                            </select>
                        </div>
                        <div id="tipocontacto_error"></div>
                        <div>
                            <label>Asunto</label>
                            <input type="text" name="asunto" id="asunto_id"/>
                        </div>
                        <div id="asunto_error"></div>
                        <div>
                            <label>Descripcion</label>
                            <input type="text" name="descripcion" id="descripcion_id"/>
                        </div>
                        <div id="descripcion_error"></div>
                        <div id="mensaje"> </div>
                        <button type="submit">Registrarse</button>
                    </form>
        </div>
    )
}

export default Registro