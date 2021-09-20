import React from 'react'
import './Inicio.css'
import Titulo from '../Titulo/Titulo.js'
import Logo from '../../Imagens/motos.jpg';

export default function Inicio() {
    return (
        <>
            <Titulo texto="Menu Principal do Projeto" />
            <div className="inicio">
                <figure>
                    <img id="logo" src={Logo} align="center" />
                </figure>
            </div>
        </>
    )
}