import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import BookingPanel from '../containers/BookingPanel';
import { createStore } from 'redux'
import mainReducer from '../reducers/main';

// import {
//     increment,
//     decrement
// } from '../actions/main';

class Widget extends Component {
    constructor(props) {
        super(props);

        this.store = createStore(mainReducer);

        //tmp
        this.store.subscribe(() =>
            console.log(this.store.getState(), "_-__-___--____--")
        );
        // //tmp
        // store.dispatch(increment());
        // store.dispatch(increment());
        // store.dispatch(decrement());
    }

    render() {
        return (
            <ReduxProvider store={this.store}>
                <BookingPanel key={Math.random()} data={this.props.data} wholeStore={this.store.getState()} />
            </ReduxProvider>
        );
    }
}

export default Widget;
