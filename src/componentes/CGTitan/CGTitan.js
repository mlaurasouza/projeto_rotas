import React from 'react'
import Titulo from '../Titulo/Titulo.js'
import './CGTitan.css'
import CGTitanHeader from './CGTitanHeader.js'

export default function CGTitan() {
    return (
        <div>
            <Titulo texto="Itens CG Titan"/>
            <CGTitanHeader/>
            <div className="cgtitan">
            </div>
        </div>
    )
}