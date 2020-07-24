export default (state = [], action) => {

    switch (action.type) {
        case "SET_COUNTRIES":
            return [...action.payload]
        case "ADD_COUNTRY":
            return [...state, action.payload]
        case "REMOVE_COUNTRY":
            let newCountries = state.filter(country => country.id !== action.payload)
            return [...newCountries]
        default:
            return state
    }
}