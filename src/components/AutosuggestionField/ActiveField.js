import React from 'react';
import Label from './Label';


const ActiveField = ({ activeThis, focusoutInputHandle, onValueChangeHandle, value, onKeyDownHandle }) => {
    return <div className="autosuggestion-field-active">
        <Label text={'Od'} />
        <input
            className="autosuggestion-field-input"
            type={'text'}
            value={value}
            onKeyDown={onKeyDownHandle}
            onChange={onValueChangeHandle}
            ref={(input) => { activeThis.textInput = input; }}
            onBlur={(e) => {
                focusoutInputHandle(e);
            }}
        />
    </div>;
};

export default ActiveField;