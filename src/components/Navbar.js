import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center ml-auto d-flex flex-row">
                    <li className="nav-item mr-3">
                        <Link to="/" className="nav-link">
                            Home 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            About Us
                        </Link>
                    </li>
                </ul>
                <Link to="/login" className="ml-3">
                    <ButtonContainer>
                        Login/Signup
                    </ButtonContainer>
                </Link>
                <Link to="/cart" className="ml-3">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus"></i>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;
