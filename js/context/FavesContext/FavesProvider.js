import React, { Component } from 'react';
// import the Realm helpers you just created here
const FavesContext = React.createContext();
class FavesProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faveIds: [],
        };
    }
    // more code will go here!
    render() {
        return (
            <FavesContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </FavesContext.Provider>
        );
    }
}
export { FavesProvider };
export default FavesContext;