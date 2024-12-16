import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'

export default function NavBar() {
    return (
        <div>
            <div className='navbar'>
                <img src="https://images.squarespace-cdn.com/content/v1/5cc9672bca525b25ad911c0f/1583837890625-W34C4U7NVK6KP3P3KM4Y/Website-Wordmark.png"
                 alt="logo" 
                 style={{ width: '20%', height: '20%', top: '0px', }}
                 />
                <div className='Link'>
                    <Link to='/'></Link><t />
                    <Link to='/' style={{fontFamily:'Montserrat'}} >Home</Link>
                    <Link to='/about'style={{fontFamily:'Montserrat'}} >Abosut Us</Link>
                    <Link to='/card' style={{fontFamily:'Montserrat'}} >Recipes</Link>
                </div>
            </div>
        </div>
    )
}
