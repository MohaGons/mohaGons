import React, { createContext } from 'react';

export const MohaContext = createContext()

class MohaContextProvider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mohas: [],
        };
    }

    render(){
        return (
            <MohaContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </MohaContext.Provider>
        );
    }
}

export default MohaContextProvider;