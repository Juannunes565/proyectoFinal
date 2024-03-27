import "./Login.css"
import firebase from "../../firebaseConfig"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate} from 'react-router-dom';

const auth = getAuth(firebase)

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value   
           
        
       try {
        await signInWithEmailAndPassword(auth, email, password)
        alert("Sesion iniciada con exito!")
        navigate("/main")
        
       } catch (error) {
        alert("Correo o contraseña invalidos!!!")
        console.log(error)
        
       }
        
    
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
                
                <input type="submit" value="Iniciar Sesión"></input>
                
                <p>No tienes cuenta?</p>
                <Link to="/register">Crear Usuario</Link>
            </form>
            
        </div>        
    )

}

export default Login