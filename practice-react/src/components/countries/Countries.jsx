import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countriesArray = countriesData.countries;
    return (
        <div>
            <p style={{ color: 'red', fontSize: '60px', fontWeight:'bold', textAlign:'center', marginBottom: '40px' }}>Countries: {countriesArray.length}</p>
            <div className='card'>
                {
                    countriesArray.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;