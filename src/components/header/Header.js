import React, { useState } from 'react'
import './header.scss'
import Nav from '../nav/Nav'
import Logo from '../logo/Logo'
import { IoMdMenu } from "react-icons/io";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <Logo />

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <IoMdMenu />
            </div>

            <nav className={menuOpen ? 'open' : ''}>

                <Nav onLinkClick={() => setMenuOpen(false)} />

            </nav>

            <marquee behavior="normal" direction="left">
                Եկեք լուսավորենք Ձեր Էներգետիկ ապագան:
                Հեռ.` +374 91 300040 , +374 55 300040:
                Հասցե` Պարույր Սևակ 9:

            </marquee>
        </header>
    )
}

