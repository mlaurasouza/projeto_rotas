import React from 'react'
import Titulo from '../Titulo/Titulo.js'
import './City.css'
import CityHeader from './CityHeader.js'

export default function City() {
    return (
        <div>
            <Titulo texto="Categorias de City"/>
            <CityHeader/>
            <div className="city">
            </div>
        </div>
    )
}