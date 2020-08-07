/* eslint-disable */

export const fetchSummaries = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/summaries')
      .then(resp => resp.json())
      .then(summaries => {

        dispatch({ type: "SET_SUMMARIES", payload: summaries })
      })
  }

}