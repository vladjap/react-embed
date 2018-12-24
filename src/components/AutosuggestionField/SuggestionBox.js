import React from 'react';

const SuggestionBox = ({ data, selectItem }) => {
    return (
        <div className="suggestion-box">
            {!!data && data.map((city, key) => {
                return <div key={key} className="item" onClick={() => selectItem(city.city_name + ' (' +city.ap_code + ')')}>
                    <div>{city.city_name}</div>
                    <div className="country-name-label">{city.country_name}</div>
                </div>
            })}
        </div>
    )
};

export default SuggestionBox;