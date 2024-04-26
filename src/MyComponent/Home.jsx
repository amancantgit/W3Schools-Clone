import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Header from './header';
import Footer from './footer';
import Advertisement from './advertisement';
import logo from '../assets/dark-mode.png'


let arr = ["Java", "HTML", ".Net", "Php", "JavaScript", "TypeScript", "jQuery", "Angular", "React", "Vue", "Node", "Spring", "MongoDB", "Rust", "Go", "Swift", "Scala", "Ruby", "MySQL", "PostgreSQL", "Django", "Kotlin", "SASS", "Git", "GitHub", "DSA", "AWS"];

export default function Home() {
    const [user, setUser] = useState(arr);
    const [darkMode, setDarkMode] = useState(false);

    // Toggle Modes
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // SEARCH USER
    function handleSearch(text) {
        const filteredUser = arr.filter((val) => val.includes(text));
        setUser(filteredUser);
    }

    return (
        <>
            <Header passingprops={handleSearch} darkMode={darkMode}/>
            
            <button onClick={toggleDarkMode} id='dark'>
              <img src={logo} alt="" style={{height: '20px', margin: "auto"}}/>
            </button>

            <Navbar style={{ position: 'sticky', top: '0', zIndex: '33' }} collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container id='parentCon' style={{ overflow: 'auto', scrollbarWidth: 'none' }} fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto" navbarScroll>
                            {user.map((val) => (
                                <NavLink id='nav-link' className={({ isActive }) => isActive ? "activelink" : ""} to={val}>{val}</NavLink>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div style={{ display: 'flex', height: '97vh'  }}>
                <div id='main-outlet' >
                    <Outlet />
                </div>

                <div id='add'>
                    <Advertisement darkMode={darkMode} />
                </div>
            </div>

            <Footer />


        </>
    );
}
