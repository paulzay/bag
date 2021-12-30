import React from 'react'
// type Props = {
//   country: any
// }
function Country(props: any) {
  const { country } = props;
  return (
    <div className="country-card">
      <img src="" alt="flag" />
      <div className="card-body">
        <h2>{country.name.common}</h2>
        <p>Population: {country.population}</p>
        <p>Capital: {country.capital}</p>
        <p>Currency: {country.currencies}</p>
      </div>
    </div>
  )
}

export default Country
