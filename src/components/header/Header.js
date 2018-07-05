import React, {Component, Fragment} from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import './header.scss';
import {Link} from 'react-router-dom';
import HeaderNavAuthorized from "./HeaderNavAuthorized";
import HeaderNavNotAuthorized from "./HeaderNavNotAuthorized";

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isAuthorized: true
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const headerNav = () => {
            return this.state.isAuthorized ? <HeaderNavAuthorized/> : <HeaderNavNotAuthorized/>
        };
        return (
            <header className='header'>
                <Container>
                    <Navbar light expand="md" className='header__navbar'>
                        <NavbarBrand tag={Link} to="/" className='header__logo font-weight-bold'>Apollonia</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            {headerNav()}
                        </Collapse>
                    </Navbar>
                </Container>
            </header>
        )
    }
}

export default Header;