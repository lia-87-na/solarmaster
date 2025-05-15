import React from 'react'
import './footer.scss'
import Logo from '../logo/Logo'
import Nav from '../nav/Nav'
import { SiFacebook } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer>
      <div className='footer_content'>
        <Logo />
        <Nav />
      </div>

      <p>
        <a id='fb' href="https://www.facebook.com/profile.php?id=61572027511001" rel="noreferrer" target='_blank'><SiFacebook /></a>
        <a id='insta' href="https://www.instagram.com/solarmasterarmenia/" rel="noreferrer" target='_blank'><FaSquareInstagram /></a>
      </p>

      <p>©Հեղինակային բոլոր իրավունքները պաշտպանված են :Solar Master 2025:<span >Կայքի հեղինակ`<a title='Քո կայքը պատվիրիր այստեղ' rel="noreferrer" href="https://www.facebook.com/lianna.galstyan.296747" target='_blank'>  Լիաննա Գալստյան </a></span>
      </p>
    </footer>
  )
}
