import React from 'react'
import './nav.scss'

export default function Nav({ onLinkClick }) {
    return (
        <ul>
            <li onClick={onLinkClick}><a href="#about">Մեր մասին</a></li>
            <li onClick={onLinkClick}><a href="#service">Ծառայություններ</a></li>
            <li onClick={onLinkClick}><a href="#review">Կարծիքներ</a></li>
            <li onClick={onLinkClick}><a href="#contact">Կապ մեզ հետ</a></li>
        </ul>
    )
}
