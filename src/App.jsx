
import Login from "./screens/Login/Login"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from "./screens/Register/Register"
import Main from "./screens/MainPage/Main"
import Profile from "./screens/Profile/Profile"

const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />}  />
                    <Route path="/profile" element={<Profile />}  />
                    <Route path="/main" element={<Main/>}  />
                </Routes>
            </Router>                       
            
        </div>
    )
}

export default App


