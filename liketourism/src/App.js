import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Home from "./pages/Home"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Citydetail from './pages/Citydetail';



function App() {
  return (
    <div>
       <Router>
      <div>

        <Header></Header>

          <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/Citydetail" element={<Citydetail/>}/>

       

          

         
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
