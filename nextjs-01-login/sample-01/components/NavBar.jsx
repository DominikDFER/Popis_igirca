import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';

import PageLink from './PageLink';
import AnchorLink from './AnchorLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);
  const header = [
  {label: 'Id', key:'id'},
  {label: 'Name', key:'name'},
  {label: 'Zanr', key:'žanr'},
  {label: 'Publisher', key:'publisher'},
  {label: 'Voice chat', key:'voice_chat'},
  {label: 'Year of release', key:'year_of_release'},
  {label: 'Review', key:'review'},
  {label: 'Pg rating', key:'pg_raring'},
  {label: 'Price', key:'price'},
  {label: 'Singleplayer multiplayer or both', key:'singleplayer_multiplayer_or_both'},
  {label: 'Time to complete', key:'time_to_complete'}
  ];
  const data =[
    { id:"1",name:'Red dead redemption 2', žanr:'Vestern',publisher: 'Rockstar games', voice_chat:'yes', year_of_release:  "2018", review:'very positive',pg_raring: "0",price: "60",singleplayer_multiplayer_or_both: 'both',time_to_complete: "49" },
   {id:"2",name:'Star Wars Battlefron 2', žanr:'Shooter',publisher: 'Electronic Arts', voice_chat:'yes', year_of_release: "2015", review:'very positive', pg_raring:"16",price: "40", singleplayer_multiplayer_or_both:'both', time_to_complete:"57" },
   {id:"3",name:'League of Legends', žanr:'MOBA',publisher: 'Riot Games',voice_chat: 'yes',  year_of_release:"2009", review:'positive',pg_raring: "10", price:"0", singleplayer_multiplayer_or_both:'both', time_to_complete:"0" },
   {id:"4",name:'Dead by Daylight', žanr:'Action', publisher:'Behaviour Interactive Inc.',voice_chat: 'no', year_of_release: "2016", review:'very positive', pg_raring:"18", price:"0", singleplayer_multiplayer_or_both:'multiplayer', time_to_complete:"0"},   
   {id:"5",name:'Grand Theft Auto 5', žanr:'Action', publisher:'Rockstar Games', voice_chat:'no', year_of_release: "2015",review: 'very positive',pg_raring: "18", price:"24", singleplayer_multiplayer_or_both:'both', time_to_complete:"31" },   
   {id:"6",name:'Transistor',žanr:'Action', publisher:'Supergiant Games',voice_chat: 'no',year_of_release: "2014", review:'very positive', pg_raring:"12", price:"17", singleplayer_multiplayer_or_both:'singleplayer', time_to_complete:"15" },   
   {id:"7",name:'Hades', žanr:'RPG', publisher:'Supergiant Games',voice_chat: 'no', year_of_release:"2020", review:'overwhelmingly positive', pg_raring:"0",price: "21", singleplayer_multiplayer_or_both:'singleplayer', time_to_complete:"23" },   
   {id:"8",name:'Dota 2', žanr:'MOBA',publisher: 'Valve', voice_chat:'no',  year_of_release:"2013", review:'mostly positive', pg_raring:"0", price:"0", singleplayer_multiplayer_or_both:'multiplayer', time_to_complete:"0" },   
   {id:"9",name:'The Legend of Zelda: Breath of the Wild', žanr:'Action-adventure', publisher:'Nitendo', voice_chat:'no',  year_of_release:"2017",review: 'very positive', pg_raring:"10",price: "60",singleplayer_multiplayer_or_both: 'singleplayer', time_to_complete:"50"},   
   {id:"10",name:'World of Tanks', žanr:'Vehicular combat', publisher:'Wargaming', voice_chat:'yes', year_of_release: "2010", review:'very positive', pg_raring:"7", price:"0", singleplayer_multiplayer_or_both:'multiplayer',time_to_complete: "0"}
  ];
  const csvReport = {
    filename : 'Popis_Igrica.csv',
    headers : header,
    data : data
  }

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand className="logo" />
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              <NavItem>
                <PageLink href="/" className="nav-link" testId="navbar-home">
                  Home
                </PageLink>
              </NavItem>
              {user && (
                <>
              <CSVLink {...csvReport}> Osvjezi preslike CSV</CSVLink>
              <button type="button" onClick={exportData}>
      Osvjezi preslike JSON
      </button>
                </>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <AnchorLink
                    href="/api/auth/login"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Log in
                  </AnchorLink>
                </NavItem>
              )}
              {user && (
                <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-desktop"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header data-testid="navbar-user-desktop">
                      {user.name}
                    </DropdownItem>
                    <DropdownItem className="dropdown-profile" tag="span">
                      <PageLink href="/profile" icon="user" testId="navbar-profile-desktop">
                        Profile
                      </PageLink>
                    </DropdownItem>
                    <DropdownItem id="qsLogoutBtn">
                      <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
                        Log out
                      </AnchorLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <AnchorLink
                  href="/api/auth/login"
                  className="btn btn-primary btn-block"
                  tabIndex={0}
                  testId="navbar-login-mobile">
                  Log in
                </AnchorLink>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6 className="d-inline-block" data-testid="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <PageLink href="/profile" icon="user" testId="navbar-profile-mobile">
                    Profile
                  </PageLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <AnchorLink
                    href="/api/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    testId="navbar-logout-mobile">
                    Log out
                  </AnchorLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
