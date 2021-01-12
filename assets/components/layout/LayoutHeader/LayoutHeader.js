import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from 'react-router-dom';
import "../LayoutHeader/layoutheader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const { Header } = Layout;

const LayoutHeader = () => {

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item className="linkHome"><NavLink exact activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} size="2x"/>
                </NavLink></Menu.Item>
                <Menu.Item className="link"><NavLink exact activeClassName="active" to="/cryptopage">
                    Les cryptomonnaies
                </NavLink></Menu.Item>
                <Menu.Item className="link"><NavLink exact activeClassName="active" to="/bourse">
                    La bourse
                </NavLink></Menu.Item>
            </Menu>
        </Header>
    )
};


export default LayoutHeader;