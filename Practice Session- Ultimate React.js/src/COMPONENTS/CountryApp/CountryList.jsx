import React from "react";

const CountryList = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.cca3}>
          <h3>{country.name.common}</h3>
          <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
          <p>Region: {country.region}</p>
          <p>Population: {country.population.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
