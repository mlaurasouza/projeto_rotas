import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'

export default function CityHeader() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/">Menu</Link> </li>
                    <li> <Link to="/honda">Voltar</Link> </li>
                    <li> <Link to="/city">Pop</Link> </li>
                    <li> <Link to="/city">Biz</Link> </li>
                    <li> <Link to="/city">CG Fan</Link> </li>
                    <li> <Link to="/cgtitan">CG Titan</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

