import "./Register.css"
import firebase from "../../firebaseConfig"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () =>{

    
    const handleRegister = async(e) => {
        e.preventDefault()
        
        try{
            const auth = getAuth(firebase)

            const data = {
                email: e.target.email.value,
                password: e.target.password.value,
                confirmPassword: e.target.confirmPassword.value,
                name: e.target.name.value,
                lastName: e.target.lastName.value,
                id: e.target.id.value
            }

            if(data.password != data.confirmPassword){
                alert("Contraseña no valida")
            }
            else{
                await createUserWithEmailAndPassword(auth, data.email, data.password)
                alert("Perfil creado con exito!")                
            }
        }
        catch(e){
            console.log(e)
        }
    }
    

    return (
        <div className="container-Register">            
            <form onSubmit={handleRegister} className="subcontainer-Register">
                <h2>Registrarse</h2>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese email</legend>
                    <input type="text" id="email"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese contraseña</legend>
                    <input type="text" id="password"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Confirme contraseña</legend>
                    <input type="text" id="confirmPassword"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese su nombre</legend>
                    <input type="text" id="name"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese su apellido</legend>
                    <input type="text" id="lastName"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese su cedula</legend>
                    <input type="text" id="id"></input>
                </fieldset>
                <input type="submit" value="Register"></input>
            </form>
        </div>
    )

}

export default Register