import "./Profile.css"
import firebase from "../../firebaseConfig"
import { useState, useEffect } from 'react'
import imagenes from "../../assets/imagenes";
import { getAuth } from "firebase/auth";
import { collection, getFirestore, getDocs } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyBo1Ipp8tLlVkDTkOktAqoydBJVzdHLq2U",
    authDomain: "proyectofinal-a6a61.firebaseapp.com",
    projectId: "proyectofinal-a6a61",
    storageBucket: "proyectofinal-a6a61.appspot.com",
    messagingSenderId: "1099495123910",
    appId: "1:1099495123910:web:3572b00941a0b95dca20c7"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
  
async function getUserInfo() {
    const userInfo = [];  // Array to store game info objects
  
    try {
      const querySnapshot = await getDocs(collection(db, "Usuario"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data.Email)
        console.log(userInfo)
        userInfo.push({ Nombre: data.Name, Apellido: data.LastN, ID: data.Id, Correo: data.Email });
      });
    } catch (error) {
      console.error("Error fetching user info:", error);
      // Handle errors appropriately, e.g., return an empty array or throw a custom error
    }
  
    return userInfo;
  }

const Profile = () => {

    const handleLogout = () => {
        const auth = getAuth(firebase);
        auth.signOut()
        .then(() => {

            console.log('Sesión cerrada exitosamente');
            console.log(userInfo.Name)
            console.log(userInfo.LastN)
            console.log(userInfo.Email)
            console.log(userInfo.Id)
            console.log("Hola")
            navigate("/");
        })
        .catch((error) => {
            console.error('Error al cerrar sesión:', error);
        });
    }

    const [userInfo, setUserInfo] = useState({
        Email: '',
        Name: '',
        LastN: '',
        Id: '',
    });

    useEffect(() => {
        // async function fetchGameInfo() {
        //     try {
        //       const gameInfoData = await getGameInfo();
        //       setGameInfo(gameInfoData);
        //     } catch (error) {
        //       console.error("Error al obtener la información de los videojuegos:", error);
        //     }
        //   }
        // const db = getFirestore(app)
        // console.log("Holaaaaaa")
        // const uid = firebase.auth().currentUser.uid;
        // console.log(uid)

        // db.ref(`Usuario/${uid}`).on('value', (snapshot) => {
        //     const data = snapshot.val();
        //     setUsuario({
        //       Email: data.Email,
        //       Name: data.Name,
        //       LastN: data.LastN,
        //       Id: data.Id,
        //     });
        //   });
        function fetchUserInfo() {
            try {
              const userInfoData = getUserInfo();
              setUserInfo(userInfoData);
            } catch (error) {
              console.error("Error al obtener la información de los usuarios", error);
            }
          }
          console.log("A")
          fetchUserInfo();
          console.log("a")
    }, []);


    const navigate = useNavigate()

    const agrupaciones = () => {
        navigate("/grupos")
    }

    const main = () => {
        navigate("/main")
    }

    return(
        <div> 
            <div className="logo"><img src={imagenes.logo}/><div className="ubi">Perfil de usuario</div></div>
            <div className="mainBar">
                <button onClick={main} className="button">Pagina principal</button>
                <button onClick={handleLogout} className="button">Cerrar Sesion</button> 
                <button onClick={agrupaciones} className="button">Agrupaciones</button> 
            </div>
            <div className="usuario"><h1 className="t1">{userInfo.Name} {userInfo.LastN}</h1><div className="d1">Correo: {userInfo.Email} , ID: {userInfo.Id}</div></div>
          
        </div>
    )

}
export default Profile