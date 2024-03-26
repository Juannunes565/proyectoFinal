import "./Register.css"
import firebase from "../../firebaseConfig"
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";

const Register = () =>{

    const handleRegister = async(event)  =>{
        event.preventDefault()
        const email1 = document.getElementById("email-R").value
        const password1 = document.getElementById("password1-R").value
        const password2 = document.getElementById("password2-R").value
        const name = document.getElementById("name-R").value
        const lastName = document.getElementById("LastName-R").value
        const id = document.getElementById("id-R").value
        

        if (email1=="" || password1 ==""|| password2 =="" || name =="" || lastName == "" || id ==""){
                alert("No puede dejar campos vacios!!!")
        }else{
            try {
                if(password1==password2){
                    const auth = getAuth()
                    await createUserWithEmailAndPassword(auth,email1,password1)
                    alert('usuario creado con exito!!!')
                }else{
                    alert("Las contraseñas no coinciden!!!")
                }            
            } catch (error) {
                alert(error.message)
            }
            
        }
    }
    

    const numeric = (event) =>{
        const teclaPresionada = event.key;
        if(teclaPresionada=== "Backspace"){
            return
        }
        if (teclaPresionada === " ") {
            event.preventDefault(); 
            return;
        }
        if (isNaN(teclaPresionada)) {
            event.preventDefault(); 
        }
    }
    return (
        <div className="container-Register">            
            <form className="subcontainer-Register" onSubmit ={handleRegister}>
                <h2>Registrarse</h2>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese email</legend>
                    <input type="text" id="email"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese contraseña</legend>
                    <input type="password" id="password1-R"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Confirme contraseña</legend>
                    <input type="password" id="password2-R"></input>
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