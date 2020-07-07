import React, { useEffect } from 'react'
import $ from 'jquery'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavbarComponent = () => {

	useEffect(() => {
	    $('.navbar-nav a').click(function(e) {
	        e.preventDefault();
	        let anchor = $(this).text().toLowerCase();

	        $('html, body').animate({
	            scrollTop: $('#' + anchor).offset().top
	        }, 500);
	    });
  	},[])

	return (
		<Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top" id="main-nav">
			<Navbar.Brand href="/">
				<img src="https://files.facepunch.com/s/c0444ba57c9a.svg" alt="Rust" width="112" height="28"/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#discord">Discord</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#modified">Modified</Nav.Link>
					<Nav.Link href="#donate">Donate</Nav.Link>
					<Nav.Link href="#clips">Clips</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavbarComponent