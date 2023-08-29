import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";

function App() {
    //axios config
    axios.defaults.baseURL = "http://localhost:5100/";
    axios.defaults.withCredentials = true;
    return (
        <div>
            <Register />
        </div>
    );
}
export default App;
