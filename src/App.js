import logo from './logo.svg';
import download from './download.png';
import './App.css';
import {Route,Routes } from 'react-router-dom';
import Register from './components/Register';
import Signin from './components/signin';
import Reg from './Reg';
import Goods from './components/Goods';

function App() {

  return (
    <div className="App" >
    <h1>CRUD</h1>
 
      <Routes>
        <Route exact path="/" element={<Reg/>}/>
        <Route exact path="/signin" element={<Signin/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/goods" element={<Goods/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
