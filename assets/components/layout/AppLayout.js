import React from "react";
import { Layout } from "antd";
import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutFooter from "./LayoutFooter/LayoutFooter";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes/Routes.js";

const { Content } = Layout;

const AppLayout = () => {

    return (
        <Router>
        <Layout>
        <LayoutHeader/>
        <Content
            style={{
                padding: '0 50px',
                marginTop: 64
            }}
        >
             <div style={{ background: '#fff', padding: 24, minHeight: 800  }}>
                 <Routes/>
             </div>
        </Content>
        <LayoutFooter/>
        </Layout>
        </Router>
    );
};

export default AppLayout;