//import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom"
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import Menu from './Components/Menu';
import Detalle from './Pages/Detalle';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/alta" element={<Registro />} />
           <Route path="/ingresar" element={<Login />} />
           <Route path="/productos/:id" element={<Detalle />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
