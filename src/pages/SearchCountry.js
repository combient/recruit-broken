import { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchCountry() {
    const fetchCountries = (query) => {
        fetch(`https://restcountries.com/v3.1/name/${query}`)
            .then(response => response.json())
            .then(json => setCountries(json.status !== 404 ? json : []))
    }
    const [countries, setCountries] = useState([]);

    return (
        <div>
            <h1>Search Country</h1>
            <input type="text" onChange={(e) => fetchCountries()} />
            <ul>
                {
                    countries.map(country => <li key={country.cca2}>
                        <Link to={`/country/${country.cca2}`}>{country.name.common}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default SearchCountry;
