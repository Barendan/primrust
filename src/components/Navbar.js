import React, { useEffect } from 'react'
// import $ from 'jquery'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavbarComponent = () => {

	useEffect(() => {

      // $('body').scrollspy({target: '#main-nav'})
      // $('.icon').click(function() {
      //     console.log('leggo', this.hash);
      //     $(window).scrollTop($('#donate').offset().top - 50);
      // })

  	},[])

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" id="main-nav">
			<Navbar.Brand href="/">
				<img src="https://files.facepunch.com/s/c0444ba57c9a.svg" alt="Rust" width="112" height="28"/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />

			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#discord">Discord</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#modified">Modified</Nav.Link>
					<Nav.Link href="#clips">Media</Nav.Link>
					<Nav.Link href="#donate">Donate</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavbarComponent