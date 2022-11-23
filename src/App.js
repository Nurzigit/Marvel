import './App.css';

//import page
import {MainPage} from "./components/MainPage";
import {Comics} from "./components/Comics"
import {Events} from "./components/Events";
import {About} from "./components/About";
import {DrawerAppBar} from "./components/AppBar";
import {Routes, Route} from "react-router-dom";
function App() {
    return (
        <div className="App">
            <DrawerAppBar/>
            <Routes>
                <Route path="/Home" element={<MainPage/>} />
                <Route path="/Comics" element={<Comics/>} />
                <Route path="/Events" element={<Events/>} />
                <Route path="/About" element={<About/>} />
            </Routes>
        </div>
    );
}

export default App;
