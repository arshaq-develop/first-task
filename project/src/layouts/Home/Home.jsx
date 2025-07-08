import React from 'react'
// import '../components/Home.module.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Sidebar
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul>
                <li><Link to={'/register'} >Register</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
              </ul>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default Home