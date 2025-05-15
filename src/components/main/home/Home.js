import React from 'react'
import homeImage from './../../images/homeimage.jpg'
import './home.scss'
export default function Home() {
    return (
        <div className='home' id='home'>
            <img src={homeImage} alt="solarMaster" />
            <div className='homeContent'>
                <h1 className='display-1'>Solar Master</h1>
                <div className='buttons'>
                    <a href="#service">Ծառայություններ</a>
                    <a href="#contact">Կապ Մեզ հետ</a>
                </div>
            </div>
        </div>
    )
}
