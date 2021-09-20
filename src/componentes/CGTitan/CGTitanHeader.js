import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'

export default function CGTitanHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/">Menu</Link> </li>
                    <li> <Link to="/city">Voltar</Link> </li>
                    <li> <Link to="/cgtitan">Painel</Link> </li>
                    <li> <Link to="/cgtitan">Tanque</Link> </li>
                    <li> <Link to="/cgtitan">Carenagem</Link> </li>
                    <li> <Link to="/cgtitan">Rodas</Link> </li>
                    <li> <Link to="/cgtitan">Freios</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

