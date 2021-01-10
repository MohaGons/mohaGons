import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from "./components/layout/AppLayout";
import "antd/dist/antd.css";

class App extends React.Component{
    render(){
        return (
            <AppLayout />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));