import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'

export default function HondaHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/">Menu</Link> </li>
                    <li> <Link to="/">Voltar</Link> </li>
                    <li> <Link to="/city">City</Link> </li>
                    <li> <Link to="/honda">Trail</Link> </li>
                    <li> <Link to="/honda">Off Road</Link> </li>
                    <li> <Link to="/honda">Sport</Link> </li>
                    <li> <Link to="/honda">Scooter</Link> </li>
                </ul>
            </nav>
        </header>
    )
}