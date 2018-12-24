import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import IconWrap from './IconWrap';
import Label from './Label';
import ActiveField from './ActiveField';
import SuggestionBox from './SuggestionBox';
import { setActiveField } from '../../actions/main';

class AutosuggestionField extends Component{
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            value: '',
            suggestionListActive: false,
            focused: false,
            tried: 0,
            done: false,
        };
    }

    onClickHandle = () => {
        console.log(this.props, "PROPS AUTO");
        this.props.dispatch(setActiveField(this.props.name));
        this.setState({
            active: true,
            suggestionListActive: true,
        });
        setTimeout(() => {
            this.textInput.focus();
        });
    };

    focusoutInputHandle = () => {
        setTimeout(() => {
            if (this.state.value === '') {
                this.setState({
                    active: false,
                    suggestionListActive: false,
                });
            }
        }, 150);
    };

    onValueChangeHandle = (e) => {
        this.setState({
            value: e.target.value,
            focused: false,
            selected: false,
        });
    };

    onKeyDownHandle = (e) => {
        console.log(e.which);
        if (e.which === 13 || e.which === 9) {
            e.preventDefault();
            e.stopPropagation();
            const ddd = this.filterData(this.props.data, this.state.value)[0];
            this.selectItem(ddd.city_name + ' (' + ddd.ap_code + ')' );
        }
    };

    selectActive = () => {
        this.setState({
            focused: true,
            suggestionListActive: false,
        })
    };

    filterData = (data, val) =>
        data.filter(city =>
            city.ap_code.toLowerCase().indexOf(val.toLowerCase()) !== -1 ||
            city.country_name.toLowerCase().indexOf(val.toLowerCase()) !== -1 ||
            city.city_name.toLowerCase().indexOf(val.toLowerCase()) !== -1);

    selectItem = (value) => {
        this.setState({
            value,
            selected: true,
        });
        this.selectActive();
    };

    render() {
        const { active, suggestionListActive, value, focused, selected } = this.state;
        const { iconClass, data, second, activeField, name } = this.props;
        const isActive = !!active ? 'active ' : '';
        const isSecond = !!second ? 'second ' : '';
        const isSelected = !!selected ? 'selected ' : '';
        console.log(activeField, '<----activeField');
        return (
            <div
                onClick={this.onClickHandle}
                className={"autosuggestion-field-wrap " + isActive + isSecond + isSelected}
            >
                <IconWrap iconClass={iconClass + ' ' + isSecond} />
                {activeField === name && active ?
                    <ActiveField
                        focusoutInputHandle={this.focusoutInputHandle}
                        activeThis={this}
                        onValueChangeHandle={this.onValueChangeHandle}
                        onKeyDownHandle={this.onKeyDownHandle}
                        value={value}
                    /> :
                    <Label text={'Od'} />}
                {/*{suggestionListActive && !focused && active && <SuggestionBox selectItem={this.selectItem} data={this.filterData(data, value)} />}*/}
                {activeField === name && suggestionListActive && !focused && <SuggestionBox selectItem={this.selectItem} data={this.filterData(data, value)} />}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        activeField: state.activeField,
    }
};

export default connect(mapStateToProps)(AutosuggestionField);
