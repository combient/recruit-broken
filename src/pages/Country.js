import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SearchCountry() {
    const fetchCountry = (code) => {
        if (!code) return;
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then(response => response.json())
            .then(json => json[0])
            .then(country => setCountry(country));
    }

    let params = useParams();

    useEffect(() => {
        if (params.code) fetchCountry(params.code);
    }, [params]);

    const [country, setCountry] = useState({});

    return (
        <div>
            <h1>Country</h1>
            <h2>{country?.name?.common} {country.flag}</h2>
        </div>
    );
}

export default SearchCountry;
