import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className= "menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to ="/">Menu</Link> </li>
                    <li> <Link to ="/harley">Harley</Link> </li>
                    <li> <Link to ="/suzuki">Suzuki</Link> </li>
                    <li> <Link to ="/honda">Honda</Link> </li>
                    <li> <Link to ="/yamaha">Yamaha</Link> </li>
                    <li> <Link to ="/lambreta">Lambreta</Link> </li>
                </ul>
            </nav>
        </header>
    )
}