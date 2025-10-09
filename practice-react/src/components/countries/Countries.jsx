import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countriesArray = countriesData.countries;
    const [visitedCountries, setVisitedCountries]=useState([]);
    const handleVisitedCountries=(country)=>{
        console.log(country);
        const newVisitedCountry=[...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }
    return (
        <div>
            <p style={{ color: 'yellow', fontSize: '60px', fontWeight:'bold', textAlign:'center'}}>Countries : {countriesArray.length} |  Visited : {visitedCountries.length}</p>
            <h3>These are the countries that you visited:</h3>
            <ol>
                {
                    visitedCountries.map(country=><li key={country.ccn3.ccn3}>{country.name.common}</li>)
                }
            </ol>
            <div className='card'>
                {
                    countriesArray.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;