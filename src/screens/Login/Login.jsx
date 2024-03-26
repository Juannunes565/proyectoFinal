import "./Login.css"



const Login = () => {
    
    const handleLogin = async() => {
                     
    }

    return (        
        <div className="container-Login">
            <form onSubmit={handleLogin} className="subcontainer-Login">
                <h2>Iniciar sesion</h2>
                <fieldset className="fieldset-Login">
                    <legend>Ingrese email</legend>
                    <input type="text" id="email"></input>
                </fieldset>
                <fieldset className="fieldset-Login">
                    <legend>Ingrese contraseña</legend>
                    <input type="text" id="password"></input>
                </fieldset>
                <input type="submit"></input>
            </form>
        </div>        
    )

}

export default Login