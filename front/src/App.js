import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Contacts from "./components/Contacts";
import Menu from "./components/Menu";
import Main from "./components/Main";

function App() {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                    <Route index element={<Main/>}/>
                    <Route path="/about-us" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/contact" element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
