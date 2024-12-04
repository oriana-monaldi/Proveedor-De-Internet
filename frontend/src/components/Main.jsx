import React from 'react';
import { Link } from 'react-router-dom';
import BotonInicio from './BotonInicio';

const Main = () => {
    return (
        <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('./src/assets/main.jpg')" }} 
        >
        <h1 className="text-white text-4xl text-center mt-20 flex items-center justify-center font-montserrat mb-96">
            Compañía Proveedora De Internet
        </h1>
        <div className="flex justify-center mt-4">
            <Link to='/cliente'>
            <BotonInicio />
            </Link>
        </div>
        </div>
    );
}

export default Main;
