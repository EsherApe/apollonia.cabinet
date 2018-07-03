import React, {Component} from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header className='header'>
                <Container>
                    <Navbar light expand="md" className='header__navbar'>
                        <NavbarBrand href="/" className='header__logo font-weight-bold'>Apollonia</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="./" className='m-auto header__link header__link--active active d-flex align-items-center justify-content-center font-weight-bold'>SIGN IN</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="./" className='m-auto header__link d-flex align-items-center justify-content-center font-weight-bold'>REGISTER</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </header>
        )
    }
}

export default Header;