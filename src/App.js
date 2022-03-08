import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import AuthContainer from './components/Login-Signup/AuthContainer.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <AuthContainer/>
    </Router>
  );
}

export default App;
