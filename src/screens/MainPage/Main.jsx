import { Link, useNavigate } from "react-router-dom"
import { getAuth} from "firebase/auth";
import firebase from "../../firebaseConfig"
import "./Main.css"



const Main = () => {

    const handleLogout = () => {
        const auth = getAuth(firebase);
        auth.signOut()
        .then(() => {
            console.log('Sesión cerrada exitosamente');
            navigate("/");
        })
        .catch((error) => {
            console.error('Error al cerrar sesión:', error);
        });
    }

    const navigate = useNavigate()

    const perfil = () => {
        navigate("/profile")
    }

    return(
        <div >
            <div className="mainBar">
                <button onClick={perfil} className="button">Perfil de Usuario</button>
                <button onClick={handleLogout} className="button">Cerrar Sesion</button> 
                <button className="button">Agrupaciones</button> 
            </div>
            <h2 id="text">UNIMET</h2>
        </div>
    )
}

export default Main