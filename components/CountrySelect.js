import React from 'react';
import Select from 'react-select';
import { getNames } from 'country-list';
import Flag from 'react-world-flags';

const CountrySelect = ({ value, onChange }) => {
    const countries = getNames().map(name => ({
        value: name,
        label: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Flag code={name} style={{ width: 20, marginRight: 10 }} />
                {name}
            </div>
        ),
        name
    }));

    const handleCountryChange = selectedCountry => {
        onChange(selectedCountry.name);
    };

    const customStyles = {
        control: provided => ({
            ...provided,
            backgroundColor: 'white'
        }),
        menu: provided => ({
            ...provided,
            zIndex: 9999, // Увеличим z-index, чтобы выпадающее меню было поверх других элементов
            backgroundColor: 'white' // Убедимся, что фон меню непрозрачен
        })
    };

    return (
        <Select
            options={countries}
            onChange={handleCountryChange}
            value={countries.find(country => country.name === value)}
            styles={customStyles}
        />
    );
};

export default CountrySelect;
