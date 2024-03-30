import { useNavigate } from "react-router-dom"
import { getAuth} from "firebase/auth";
import firebase from "../../firebaseConfig"
import imagenes from "../../assets/imagenes";
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

    const agrupaciones = () => {
        navigate("/grupos")
    }

    return(
        <div >
            <div className="logo"><img src={imagenes.logo}/><div className="ubi">Página principal</div></div>
            <div className="mainBar">
                <button onClick={perfil} className="button">Perfil de Usuario</button>
                <button onClick={handleLogout} className="button">Cerrar Sesion</button> 
                <button onClick={agrupaciones} className="button">Agrupaciones</button> 
            </div>
            <div className="mision"><h1 className="t1">Misión</h1><div className="d1">Facilitar y fortalecer la participación estudiantil en la Universidad Metropolitana a través de una plataforma innovadora y colaborativa. Nuestra misión es proporcionar a los estudiantes una herramienta integral para la gestión eficiente de agrupaciones estudiantiles, fomentando la interacción, el desarrollo personal y el sentido de pertenencia, con el objetivo de enriquecer su experiencia universitaria y contribuir al crecimiento y diversidad de las comunidades estudiantiles. </div></div>
            <div className="vision"><h1 className="t2">Visión</h1><div className="d2">Ser la plataforma líder en la gestión de Agrupaciones Estudiantiles, reconocida por su excelencia en el diseño, la usabilidad y la participación activa de los estudiantes. Nos visualizamos como la referencia tecnológica que impulsa la conexión entre estudiantes y agrupaciones, promoviendo un ambiente universitario enriquecedor donde cada estudiante encuentra su espacio de interés, contribuyendo al desarrollo integral de la comunidad estudiantil en la Universidad Metropolitana.</div></div>
            <div className="objetivo"><h1 className="t3">Objetivo</h1><div className="d3">Ser la plataforma líder en la gestión de Agrupaciones Estudiantiles, reconocida por su excelencia en el diseño, la usabilidad y la participación activa de los estudiantes. Nos visualizamos como la referencia tecnológica que impulsa la conexión entre estudiantes y agrupaciones, promoviendo un ambiente universitario enriquecedor donde cada estudiante encuentra su espacio de interés, contribuyendo al desarrollo integral de la comunidad estudiantil en la Universidad Metropolitana.</div></div>
        </div>
    )
}

export default Main