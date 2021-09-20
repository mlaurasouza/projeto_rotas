import React from 'react'
import Titulo from '../Titulo/Titulo.js'
import './Honda.css'
import HondaHeader from './HondaHeader.js'

export default function Honda() {
    return (
        <div>
            <HondaHeader />
            <Titulo texto="Menu Principal das Opções de Honda" />
            <div className="honda">
            </div>
        </div>
    )
}