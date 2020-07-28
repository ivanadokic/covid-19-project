import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import NavBar from './components/NavBar';
import SummaryCard from './components/SummaryCard'
import CountryList from './components/CountryList'


function SummaryPage() {

  return (
    <div>I am the summary page</div>
  )
}
function CountriesPage() {

  return (
    <div>I am the countries page</div>
  )
}
function App() {
  const [latest, setLatest] = useState([]);  //react hooks store information into strings
  const [results, setResults] = useState([]); //from second api
  const [searchCountries, setsearchCountries] = useState("");
  const filterCountries = results.filter(item => {
    return searchCountries !== "" ? item.country.toLowerCase().includes(searchCountries.toLowerCase()) : item;
  })

  useEffect(() => {
    axios
      .all([ //using both api
        axios.get("http://localhost:3000/summaries"),
        axios.get("http://localhost:3000/countries")

      ])

      .then(responseArr => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);
  const date = new Date(parseInt(latest.updated));//updated returns miliseconds so we need to make it in day time format
  const lastUpdated = date.toString();
  return (
    <div>

      <Router>
        <NavBar />
        <Route path='/summary' component={SummaryPage}></Route>
        <Route exact path={'/countries'} component={CountriesPage}></Route>
        <CardDeck>
          <SummaryCard title="Global Cases" bg="secondary" lastUpdated={lastUpdated} total={latest.cases} />
          <SummaryCard title="Global Deaths" bg="danger" lastUpdated={lastUpdated} total={latest.deaths} />
          <SummaryCard title="Global Recovered" bg="success" lastUpdated={lastUpdated} total={latest.recovered} />
        </CardDeck>
        <Form>
          <Form.Group controlId="formGroupSearch">
            <Form.Label>Search Country</Form.Label>
            <Form.Control type="text"
              placeholder="Enter Country name"
              onChange={e => setsearchCountries(e.target.value)} />
          </Form.Group>
        </Form>
        <CountryList countries={filterCountries} />
      </Router>
    </div >
  );
}

export default App;
