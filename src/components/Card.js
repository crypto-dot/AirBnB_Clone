import React from "react";

export default function Card() {
    return (
        <div className = 'card'>
            <img src='' alt='of Katie Zaferes'/>
            <div className= 'onlineStatus'>SOLD OUT</div>
            <div className = 'cardInfo'>
                <div>5.0 <span className = 'locationText'>(6) <span className = 'ellipse'></span> USA </span></div>
                <div className = 'description'>Life lessons with </div>
                <div className= 'Pricing'><em>From $136</em> / person</div>
            </div>
        </div>
    )
}