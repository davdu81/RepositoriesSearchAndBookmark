//Dependencies
﻿import React from 'react';
import { Grid, Row, Navbar, Nav, NavItem } from 'react-bootstrap';

//main layout to save all the form template
//redponsive layout that change the navBar by the screen width

const Layout = (props) => {
      return (
            <Grid>
              <Row className="show-grid">
                <Navbar inverse collapseOnSelect>
                   <Navbar.Header>
                      <Navbar.Brand>
                         Isracard
                      </Navbar.Brand>
                   <Navbar.Toggle />
                   </Navbar.Header>
                       <Navbar.Collapse>
                         <Nav>
                           <NavItem eventKey={1} href="/">
                               Home
                           </NavItem>
                           <NavItem eventKey={2} href="/default/bookmarks">
                             Bookmarks
                           </NavItem>
                         </Nav>

                       </Navbar.Collapse>
                 </Navbar>


                     {props.children}

               </Row>
            </Grid>
     );
}

export default Layout;
