import React from "react";
import GroupPic from '../Group\ 77.png';
export default function Hero() {
    return (
        <section className = 'heroSection' >
        <div className = 'heroImageContainer'>
        <img className = 'heroImage' src={GroupPic} alt= 'with multiple pictures inside of it of people playing music, singing and doing various other activities'/>
        </div>
        <div className = 'heroDescriptionContainer'>
        <h1>Online Experiences </h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
        </div>
        </section>
    );
}