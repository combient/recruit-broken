import { useState, useEffect } from 'react';

function Countries() {
    const fetchCountries = () => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(countries => countries.json())
            .then(countries => setCountries());
    }

    useEffect(() => {
        fetchCountries();
    });

    const [sortDesc, setSortDirection] = useState(true);
    const [countries, setCountries] = useState([]);
    
    const sortCountries = (sortOn) => {
        switch (sortOn) {
            case 'name':
                // Sort on name
            case 'population':
                // Sort on population
            case 'size':
                // Sort on size
        }
    }

    return (
        <div>
            <h1>Countries</h1>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => sortCountries('name')}>Name</th>
                        <th onClick={() => sortCountries('population')}>Population</th>
                        <th onClick={() => sortCountries('size')}>Size</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries.map(country => <tr key={country.cca2}>
                            <td>{country.name.common}</td>
                            <td>{country.population}</td>
                            <td>{country.area}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Countries;
