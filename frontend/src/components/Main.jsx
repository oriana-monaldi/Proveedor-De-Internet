import React from 'react';
import {Link} from 'react-router-dom'
import BotonInicio from './BotonInicio'

const Main = () => {
    return (
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('./src/assets/main.jpg')" }} 
        >
            <h1 className="text-white text-4xl text-center mt-20 flex items-center justify-center">Compañía Proveedora De Internet</h1>
            <Link to='/cliente'>
                <BotonInicio />
            </Link>
        </div>
    );
}

export default Main;
