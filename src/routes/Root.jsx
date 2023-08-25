import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastrar from '../pages/Cadastrar';
import Administrar from '../pages/Administrar';
import Editar from '../pages/Editar';

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/administrar" element={<Administrar/>} />
                <Route path="/administrar/editar/:id" element={<Editar/>} />
                <Route path="/administrar/cadastrar" element={ <Cadastrar /> } />
            </Routes>
        </Router>
    );  
}

export default Root;