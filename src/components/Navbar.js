
import React from 'react'
import "./navbar.css";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { Container } from './Container';
import logo from "../img/logo.png"

function Navbar() 
{
    const [width, setWidth] = useState(window.innerWidth);
    const [isMenuIconClicked, setMenuIconClicked] = useState(false);
    useEffect(() => 
    {
        window.addEventListener("resize", handleResize);
    }, [])

    function handleResize()
    {
        setWidth(window.innerWidth);
    }
    const triggerText = 'Appointment';
    const onSubmit = (event) => {
      event.preventDefault(event);
      console.log(event.target.name.value);
      console.log(event.target.email.value);
    };
    return (
        <nav className = "navbar">
            <div className = "navbar-icon">
               <Link to="/"> <img src = {logo} alt="" className = "law-icon"></img> </Link>
            </div>
            {
                width > 768 ? 
                <ul className = "menu-items">
                    <li className = "items-active"><Link className="nav-a" to="/">Home</Link></li>
		    <li className = "items"><Link className="nav-a" to="/Services">How we Help</Link> </li>
                    <li className = "items"><Link className="nav-a" to="/aboutus">About</Link> </li>
                    <li className = "items"><Link className="nav-a" to="/contactus">Contact</Link></li>
                    <li> <span><Container triggerText={triggerText} onSubmit={onSubmit} /> </span></li>
                </ul>
                :
                <div>
                    <img src = "/menu.svg" alt="" className = "menu-icon" onClick = {() => setMenuIconClicked(!isMenuIconClicked)}></img>
                    {isMenuIconClicked ? 
                    <div className = "menu-items-mobiles">
                        <ul className = "menu-items">
                        <li className = "items-active"><Link to="/">Home</Link></li>
		    	<li className = "items"><Link to="/Services">How we Help</Link> </li>
                    	<li className = "items"><Link to="/aboutus">About</Link> </li>
                    	<li className = "items"><Link to="/contactus">Contact</Link></li>
                    	<li> <span><Container triggerText={triggerText} onSubmit={onSubmit} /> </span></li>
                        </ul> 
                    </div> 
                    : 
                    <></>
                    }
                </div>
                
            }
            
        </nav>
    )
}

export default Navbar

