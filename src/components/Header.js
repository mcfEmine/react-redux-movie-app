import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import {Visibility, Menu, Container, Image, List, Dropdown} from "semantic-ui-react";
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper"


class Header extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    stickOverlay = () => this.setState({ overlayFixed: true })

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickOverlay = () => this.setState({ overlayFixed: false })

    unStickTopMenu = () => this.setState({ menuFixed: false })

    render() {
        const { menuFixed, overlayFixed, overlayRect } = this.state

        return (
            < div >
            <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
            >
            <Menu borderless
        fixed={menuFixed ? 'top' : undefined}
        style={menuFixed ? fixedMenuStyle : menuStyle}  >
            <Container text>
        <Menu.Item>
        <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
            </Menu.Item>
            <Menu.Item header>My Proje</Menu.Item>
        <Menu.Item as='a'> <Link to = "movies"> Movies </Link></Menu.Item>
        <Menu.Item as='a'> <Link to = "esnaf"> Esnaf </Link></Menu.Item>
        <Menu.Item as='a'>Add New Movies</Menu.Item>
        <Menu.Item as='a'>Add New Esnaf</Menu.Item>

        <Menu.Menu position='right'>
            <Dropdown text='Dropdown' pointing className='link item'>
            <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
        <Dropdown.Item>List Item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Header Item</Dropdown.Header>
        <Dropdown.Item>
        <i className='dropdown icon' />
            <span className='text'>Submenu</span>
            <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
        <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown.Item>
        <Dropdown.Item>List Item</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </Menu.Menu>
        </Container>
        </Menu>
        </Visibility>
            < /div>
    )
        ;
    }
}

export default Header;
