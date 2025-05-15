import React from 'react'
import './contact.scss'

export const contact = [
    {
        title: "Կապ",
        text1: "solarmaster.am@gmail.com",
        text2: "+37491300040"
    },
    {
        title: "Հասցե",
        text1: "0026 ք. Երևան, ",
        text2: "Զեյթուն  Պարույր Սևակ 9"
    },
    {
        title: "Աշխատանքային  օր և ժամ",
        text1: "Երկուշաբթի-շաբաթ",
        text2: "08:00  - 18:30 "
    }
]

export default function Contact() {
    return (
        <div id='contact'>
            <h2>Կապ մեզ հետ</h2>

            {contact.map((elem, index) => (
                <div className='contact_block' key={index}>
                    <h2>{elem.title}</h2>
                    {elem.title === "Կապ" ? (
                        <>
                            <p><a href={`mailto:${elem.text1}`}>{elem.text1}</a></p>
                            <p><a href={`tel:${elem.text2}`}>{elem.text2}</a></p>
                        </>
                    ) : (
                        <>
                            <p>{elem.text1}</p>
                            <p>{elem.text2}</p>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

