import { useNavigate } from "react-router-dom"
import {useEffect, useState} from "react";
import { getAuth} from "firebase/auth";
import firebase from "../../firebaseConfig"
import imagenes from "../../assets/imagenes";
import "./Grupos.css"
import Agrupaciones from "../../assets/agrupaciones.json"



const Grupos = () => {

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

    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")

    const showData = async () => {
        setUsers(Agrupaciones)
      }   
  
      const searcher = (e) => {
          setSearch(e.target.value)   
      }
   
       const results = !search ? users : users.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
      
       useEffect( ()=> {
        showData()
      }, [])

    const navigate = useNavigate()

    const perfil = () => {
        navigate("/profile")
    }

    const main = () => {
        navigate("/main")
    }

    return(
        <div>
            <div className="logo"><img src={imagenes.logo}/><div className="ubi">Agrupaciones</div></div>
            <div className="mainBar">
                <button onClick={perfil} className="button">Perfil de Usuario</button>
                <button onClick={handleLogout} className="button">Cerrar Sesion</button> 
                <button onClick={main} className="button">Página principal</button> 
                
            </div>
            <div className="barra">
                <center><input value={search} onChange={searcher} type="text" placeholder='Buscar por nombre...' className='form-control'/></center>
            </div>
            <div className="gr">
                {
                    results.map( grupo => {
                        return(
                            <div className="box" key={grupo.nombre}>
                                <h1 className="t">{grupo.nombre}</h1>
                                <div className="text">
                                    <h3>Misión: </h3>{grupo.mision} <br/>
                                    <h3>Visión: </h3>{grupo.vision} <br/>
                                    <h3>Contacto: </h3>{grupo.contacto} <br/>
                                </div>
                                <br/>
                                <br/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Grupos