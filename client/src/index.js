import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from "./redux/store/index"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Auxiliar from "./components/Auxiliar/Auxiliar"
import Error404 from "./components/Error404/Error404"
import Favorite from "./components/Favorite/Favorite"
import Detail from "./components/Detail/Detail"
import Form from "./components/Form/Form"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"


ReactDOM.render(

  
  <Provider store={store}>
    <BrowserRouter>
        <React.StrictMode>
        <Navbar/>
        <Routes>
                
               
                <Route exact  path="/" element={<App/>}/>
                <Route exact  path="/login" element={<Login/>}  />
                <Route exact  path="/register"  element={<Register/>} />
                <Route exact  path="/home" element={<Home />} />
                <Route exact  path="/character/:id" element={<Detail/>}/>
                <Route exact  path="/create" element={<Form/>} />
                <Route exact  path="/henry" element={<Auxiliar/>} />
                <Route exact  path="/activity/:id" element={<Auxiliar/>} />
                <Route exact  path="/upload" element={<Auxiliar/>} />
                <Route exact  path="/favorite" element={<Favorite/>} />
                <Route exact  path="*" element={<Error404/>} />
        
                </Routes>
         
        

        
        </React.StrictMode>
      </BrowserRouter>
  </Provider>


,
document.getElementById('root')
);

