import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Homepage from './pages/homepage';
import navbar from './pages/navbar';
import SeeMore from "./pages/seemorepage1";
// import Navbar1 from './com/navbar';
// C:\Users\hp\Desktop\webapiassigmrnt\frontend-31a-Nishan324\src\App.js
 
function App(){
  return(
<Router>
  <navbar/>
<ToastContainer/>

  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/homepage' element={<Homepage/>}/>
    <Route path='/seemore' element={<SeeMore/>}/>
    
  </Routes>
</Router>
  );
}
 
export default App