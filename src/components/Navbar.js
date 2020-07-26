import React, { useState, useEffect } from 'react'
import $ from 'jquery'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavbarComponent = () => {

	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
	    $('.navbar-nav a').click(function(e) {
	        e.preventDefault();
	        let anchor = $(this).text().toLowerCase();

	        $('html, body').animate({
	            scrollTop: $('#' + anchor).offset().top
	        }, 500);
	    });
	    $('.container-fluid').on("click", function(event){
	    	setExpanded(false)
	    });
  	},[])

	return (
		<Navbar expanded={expanded} collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top" id="main-nav">
			<Navbar.Brand href="/">
				<img src="/images/primlogo1.png" alt="Server Logo" className="primlogo"/>
			</Navbar.Brand>
			<Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link onClick={() => setExpanded(false)} href="#discord">Discord</Nav.Link>
					<Nav.Link onClick={() => setExpanded(false)} href="#features">Features</Nav.Link>
					<Nav.Link onClick={() => setExpanded(false)} href="#modified">Modified</Nav.Link>
					<Nav.Link onClick={() => setExpanded(false)} href="#donate">Donate</Nav.Link>
					<Nav.Link onClick={() => setExpanded(false)} href="#clips">Clips</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavbarComponent