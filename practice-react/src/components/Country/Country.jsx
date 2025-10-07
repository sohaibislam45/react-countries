import React from 'react';
import './Country.css'

const Country = ({ country }) => {

    console.log(country)


    const handleClick=()=>{
      console.log('Clicked');
    }

  const countryName = country.name;
  const flag = country.flags.flags;
  const population = country.population.population;
  const capital = country.capital.capital;
  const region = country.region.region;
  const language = Object.values(country.languages.languages);
  const currencyObj = country.currencies.currencies;
  const currencyName = Object.values(currencyObj)[0]?.name;
  const currencySymbol = Object.values(currencyObj)[0]?.symbol;

  return (
    <div className='country-card'>
      {<img src={flag.png} alt={flag.alt} />}
      <h2>Name : {countryName.common}</h2>
      <p>Official Name : {countryName.official}</p>
      <p>Region : {region}</p>
      <p>Population : {population.toLocaleString()}</p>
      <p>Capital : {capital.join(', ')}</p>
      <p>Language : {language.join(', ')}</p>
      <p>Currency : {currencyName} ({currencySymbol})</p>
      <button onClick={handleClick}>Not Visited</button>
    </div>
  );
};



export default Country;