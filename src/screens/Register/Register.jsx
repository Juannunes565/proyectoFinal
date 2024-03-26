import "./Register.css"

const Register = () =>{

    const handleRegister = () =>{
        const email1 = document.getElementById("email-R").value
        const password1 = document.getElementById("password1-R").value
        const password2 = document.getElementById("password2-R").value
        const name = document.getElementById("name-R").value
        const lastName = document.getElementById("LastName-R").value
        const id = document.getElementById("id-R").value

        if (password1 == password2){
                
        }else{
            alert("Las contraseñas no coinciden!!!!")
        }
    }

    const numeric = () =>{
        alert("!!!!")
    }
    return (
        <div className="container-Register">            
            <form className="subcontainer-Register">
                <h2>Registrarse</h2>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese email</legend>
                    <input type="text" id="email-R"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese contraseña</legend>
                    <input type="text" id="password1-R"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Confirme contraseña</legend>
                    <input type="text" id="password2-R"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese su nombre</legend>
                    <input type="text" id="name-R"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese su apellido</legend>
                    <input type="text" id="LastName-R"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese su cedula</legend>
                    <input type="text" id="id-R" onKeyDown = {numeric}></input>
                </fieldset>
                <input type="submit" value="Register" onSubmit ={handleRegister}></input>
            </form>
        </div>
    )

}

export default Register