import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import './Topbar.css';
import { Link} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const [showNavColor, setShowNavColor] = useState(false);
  
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    
      <MDBNavbar expand='lg' dark bgColor='primary' className="head">
        <MDBContainer fluid>
          <MDBNavbarBrand href='/home' className='header'>BLOOD BANK</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              
              
              <MDBNavbarItem>
                <MDBNavbarLink href='/donate'>Donate</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='/donor'>Donor List </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
              <div className="logout">
                <button onClick={handleLogout}>
                    Log out
                </button>
              </div>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

     
            
   
  );
}