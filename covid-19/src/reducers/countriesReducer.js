export default (state = [], action) => {
  switch (action.type) {
    case 'SET_COUNTRIES':

      return [...action.payload]
    default:
      return state
  }

}