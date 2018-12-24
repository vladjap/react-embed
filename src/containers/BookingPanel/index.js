import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutosuggestionField from '../../components/AutosuggestionField';

const OriginDestinationSwitch = () => {
    return (<div className="origin-destination-switch button-icon">
        <i className=" icon-swap-horiz origin-destination-switcher-icon" />
    </div>);
};

class BookingPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
        }
    }
    render() {
        return <div key={Math.random()} className="booking-panel-wrap">
            <AutosuggestionField
                data={this.props.data}
                iconClass={"icon-airplane-origin"}
                name={'origin'}
            />
            <OriginDestinationSwitch />
            <AutosuggestionField
                data={this.props.data}
                iconClass={"icon-airplane-destination"}
                second={true}
                name={'destination'}
            />
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        activeField: state.activeField,
    }
};

export default connect(mapStateToProps)(BookingPanel);