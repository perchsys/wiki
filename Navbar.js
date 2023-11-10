import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import "../styles/navbar.css";
import { Link } from 'react-router-dom';
import img from '../img/download.png'

function Navbar() 
{
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);

  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [toggleMenu, setToggleMenu] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo">
          <Link to="/"><img style={{ width: '60px' }} src={img} alt="Logo" /></Link>
        </div>
        <div className='dropdown'>


          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Login
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="adminlogin">Admin</Dropdown.Item>
              <Dropdown.Item href="userlogin">User</Dropdown.Item>
              <Dropdown.Item href="leadlogin">Lead</Dropdown.Item>
             
            </Dropdown.Menu>
          </Dropdown></div>


      </nav>


    </>
  );
}




export default Navbar;
