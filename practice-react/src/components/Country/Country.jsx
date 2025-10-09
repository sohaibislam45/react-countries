import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {

  // console.log(country)
  const getCountryLabel = (area, population) => {
  if (area < 10000 && population < 1000000) return "Tiny country & Small population";
  if (area < 10000 && population >= 1000000) return "Tiny country & Large population";

  if (area < 100000 && population < 1000000) return "Small country & Small population";
  if (area < 100000 && population >= 1000000) return "Small country & Large population";

  if (area < 1000000 && population < 1000000) return "Medium country & Small population";
  if (area < 1000000 && population >= 1000000) return "Medium country & Large population";

  if (area >= 1000000 && population < 1000000) return "Large country & Small population";
  return "Large country & Large population";
};

  const [visited,setVisited]=useState(false);

  const handleClick = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
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
    <div className={`country-card ${visited && 'country-visited'}`}>
      {<img src={flag.png} alt={flag.alt} />}
      <h2>Name : {countryName.common}</h2>
      <p>Official Name : {countryName.official}</p>
      <p>Region : {region}</p>
      <p>
        Population: {population} ({getCountryLabel(country.area.area, population)})
      </p>
      <p>Capital : {capital.join(', ')}</p>
      <p>Language : {language.join(', ')}</p>
      <p>Currency : {currencyName} ({currencySymbol})</p>
      <button onClick={handleClick}>{visited?"Visited":"Not Visited"}</button>
    </div>
  );
};



export default Country;