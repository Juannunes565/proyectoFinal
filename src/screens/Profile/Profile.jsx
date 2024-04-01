import "./Profile.css";
import firebase from "../../firebaseConfig";
import { useState, useEffect } from 'react';
import imagenes from "../../assets/imagenes";
import { getAuth } from "firebase/auth";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
apiKey: "AIzaSyBo1Ipp8tLlVkDTkOktAqoydBJVzdHLq2U",
authDomain: "proyectofinal-a6a61.firebaseapp.com",
projectId: "proyectofinal-a6a61",
storageBucket: "proyectofinal-a6a61.appspot.com",
messagingSenderId: "1099495123910",
appId: "1:1099495123910:web:3572b00941a0b95dca20c7" };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function getUserInfo() {
    const userInfo = [];  // Array para almacenar objetos de información de usuario

    try {
        const querySnapshot = await getDocs(collection(db, "Usuario"));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            userInfo.push({ Nombre: data.Name, Apellido: data.LastN, ID: data.Id, Correo: data.Email });
        });
    } catch (error) {
        console.error("Error al obtener información de usuario:", error);
    }

    return userInfo;
}

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        Email: '',
        Name: '',
        LastN: '',
        Id: '',
    });

    useEffect(() => {
        async function fetchUserInfo() {
            try {
                const userInfoData = await getUserInfo();
                if (userInfoData.length > 0) {
                    setUserInfo(userInfoData[0]); // Solo almacenamos el primer objeto de userInfoData
                }
            } catch (error) {
                console.error("Error al obtener información de usuario", error);
            }
        }

        fetchUserInfo();
    }, []);

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

    const agrupaciones = () => {
        navigate("/grupos")
    }

    const main = () => {
        navigate("/main")
    }

    return(
        <div> 
            <div className="logo">
                <img src={imagenes.logo}/>
                <div className="ubi">Perfil de usuario</div>
            </div>
            <div className="mainBar">
                <button onClick={main} className="button">Pagina principal</button>
                <button onClick={handleLogout} className="button">Cerrar Sesion</button> 
                <button onClick={agrupaciones} className="button">Agrupaciones</button> 
            </div>
            <div className="usuario">
                <h1 className="t1">{userInfo.Name} {userInfo.LastN}</h1>
                <div className="d1">Correo: {userInfo.Email} , ID: {userInfo.Id}</div>
            </div>
        </div>
    );
}

export default Profile;
