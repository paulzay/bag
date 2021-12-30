import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Country from './Country';

type Props = {

}
const Countries: FC<Props> = () => {
  const [countries, setCountries] = useState([]);

  const getData = () => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        const output = [].concat.apply([], res.data);

        setCountries(output)
        console.log(output)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      {countries.map(country => (
        <Country country={country} />
      ))}

    </div>
  )
}

export default Countries
