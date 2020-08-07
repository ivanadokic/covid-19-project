export const fetchCountries = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/countries')
      .then(resp => resp.json())
      .then(countries => {
        dispatch({ type: "SET_COUNTRIES", payload: countries })
      })
  }
}
