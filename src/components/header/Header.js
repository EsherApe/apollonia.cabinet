import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';
import {signIn, logOut} from '../../AC';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import HeaderNavAuthorized from "./HeaderNavAuthorized";
import HeaderNavNotAuthorized from "./HeaderNavNotAuthorized";
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

    handleSignIn = () => {
        const {signIn} = this.props;
        signIn();
    };

    handleLogOut = () => {
        const {logOut} = this.props;
        logOut();
    };

    render() {
        const headerNav = () => {
            return this.props.isAuthorized ? <HeaderNavAuthorized logOut={this.handleLogOut}/> : <HeaderNavNotAuthorized signIn={this.handleSignIn}/>
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

Header.propTypes = {
    signIn: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
};

export default connect((state, ownProps) => ({
    isAuthorized: state.auth.get('isAuthorized')
}), {signIn, logOut})(Header);