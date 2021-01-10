import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from 'react-router-dom';

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
                    {/* <img src={} width="180" height="50"/> */}
                </NavLink></Menu.Item>
                <Menu.Item className="link"><NavLink exact activeClassName="active" to="/test">
                    Liste des tickets
                </NavLink></Menu.Item>
                <Menu.Item className="link"><NavLink exact activeClassName="active" to="/cryptopage">
                    Mes tickets
                </NavLink></Menu.Item>
            </Menu>
        </Header>
    )
};


export default LayoutHeader;