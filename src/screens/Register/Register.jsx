import "./Register.css"
import firebase from "../../firebaseConfig";


import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import {getFirestore, collection, addDoc} from "firebase/firestore";


const db = getFirestore(firebase);
const collectionRef = collection(db, "Usuario");


const Register = () =>{

    const navigate = useNavigate()
    

    const handleRegister = async(event)  =>{
        event.preventDefault()
        const email1 = document.getElementById("email-R").value
        const password1 = document.getElementById("password1-R").value
        const password2 = document.getElementById("password2-R").value
        const name = document.getElementById("name-R").value
        const lastName = document.getElementById("LastName-R").value
        const id = document.getElementById("id-R").value

        const data = {
            Email : email1,
            Name : name,
            LastN : lastName,
            Id : id

        }
        

        if (email1=="" || password1 ==""|| password2 =="" || name =="" || lastName == "" || id ==""){
                alert("No puede dejar campos vacios!!!")
        }else{
            try {
                if(password1==password2){
                    const auth = getAuth()
                    await createUserWithEmailAndPassword(auth,email1,password1)
                    await addDoc(collectionRef, data);
                    alert('usuario creado con exito!!!');
                    navigate("/login")
                    
                    
                    
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
                    <input type="text" id="email-R"></input>
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
                    <input type="text" id="name-R"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese su apellido</legend>
                    <input type="text" id="LastName-R"></input>
                </fieldset>
                <fieldset className="fieldset-Register">
                    <legend>Ingrese su cedula</legend>
                    <input type="text" id="id-R" onKeyDown={numeric}></input>
                </fieldset>
                <input type="submit" value="Register" ></input>
                <p>Ya tienes cuenta?</p>
                <Link to="/">Iniciar Sesion</Link>
            </form>
        </div>
    )

}

export default Register