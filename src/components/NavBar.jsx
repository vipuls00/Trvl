import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardMain from './CardMain';
import './NavBar.css'
export const NavBar = () => {
    const [button, setbutton] = useState(true);
    let showbutton = () => {
        if (window.innerWidth <= 960) {
            setbutton(false);
        } else {
            setbutton(true);
        }
    };
    useEffect(() => {
        showbutton();
    }, []);
    window.addEventListener('resize', showbutton);
    return (

        <nav className='navbar navbar-expand-lg fixed-top '  >
            <div className="container-fluid">
                <a href="#" className='navbar-brand mb-0 h1 text-white'>Trvl  <i class="fa fa-trello" aria-hidden="true"></i> </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                </div>
                <div className="collapse navbar-collapse fixed-right" id="navbarNavDropdown" >

                    <ul className="  navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link text-white"  href="#about">About</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link text-white"  href="#services">Services</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link text-white"  href="#Sendreq">Send Request</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Products</a>
                        </li>

                    </ul>
                </div>

                <button type="button" class="btn btn-outline-secondary text-white ">Register</button>
                {button && <button type="button" class="btn btn-outline-secondary text-white ">Sign Up</button>


                }
            </div>


        </nav>
    )
}
