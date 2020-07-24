export const fetchCountries = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/countries')
            .then(resp => resp.json())
            .then(countries => {
                dispatch({ type: "SET_COUNTRIES", payload: countries })
            })
    }
}


export const addCountry = country => {
    return (dispatch) => {
        return fetch('http://localhost:3000/countries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ country: country })
        })
            .then(resp => resp.json())
            .then(country => {
                dispatch({ type: "ADD_COUNTRIES", payload: countries })
            })
    }
}

export const removeCountry = countryId => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/countries/${countrytId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(country => {
                dispatch({ type: "REMOVE_COUNTRY", payload: countryId })
            })
    }
}