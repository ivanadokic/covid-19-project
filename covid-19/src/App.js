import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import NavBar from './components/NavBar';
import SummaryCard from './components/SummaryCard'
import CountryList from './components/CountryList'
import { connect } from 'react-redux'
import { fetchSummaries } from './actions/summaries'
import { render } from '@testing-library/react';

class App extends Component {
  // const[latest, setLatest] = useState([]);  //react hooks store information into strings
  // const[results, setResults] = useState([]); //from second api
  // const [searchCountries, setsearchCountries] = useState("");
  // const filterCountries = results.filter(item => {
  //   return searchCountries !== "" ? item.country.toLowerCase().includes(searchCountries.toLowerCase()) : item;
  // })


  // useEffect(() => {
  //   axios
  //     .all([ //using both api
  //       axios.get("http://localhost:3000/summaries"),
  //       axios.get("http://localhost:3000/countries")

  //     ])

  //     .then(responseArr => {
  //       setLatest(responseArr[0].data);
  //       setResults(responseArr[1].data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  // }, []);
  // const date = new Date(parseInt(latest.updated));//updated returns miliseconds so we need to make it in day time format
  // const lastUpdated = date.toString();
  componentDidMount() {
    this.props.fetchSummaries()
  }


  render() {

    return (
      < div >
        <Router>
          <NavBar />
          <Switch>
            <Route path='/summary' component={SummaryCard}></Route>
            <Route exact path={'/countries'} render={(routerProps) => <CountryList {...routerProps} />} />
            {/* {...routerProps} countries={results} */}

          </Switch>
          < CardDeck >
            <SummaryCard title="Global Cases" bg="secondary" total={this.props.summaries} />
            <SummaryCard title="Global Deaths" bg="danger" total={this.props.summaries} />
            <SummaryCard title="Global Recovered" bg="success" total={this.props.summaries} />
          </CardDeck >

          {/* lastUpdated={lastUpdated} total={latest.cases} 
          lastUpdated={lastUpdated} total={latest.deaths}
          lastUpdated={lastUpdated} total={latest.recovered} */}
          {/* <Form>
          <Form.Group controlId="formGroupSearch">
            <Form.Label>Search Country</Form.Label>
            <Form.Control type="text"
              placeholder="Enter Country name"
              onChange={e => setsearchCountries(e.target.value)} />
          </Form.Group>
        </Form> */}

        </Router>
      </div >
    )

  }
}
const mapStateToProps = state => {
  return {
    summaries: state.summaries[0]

  }

}

export default connect(mapStateToProps, { fetchSummaries })(App);
