import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from './components/NavBar';
import SummaryList from './components/SummaryList'
import CountryList from './components/CountryList'
import { connect } from 'react-redux'
import { fetchSummaries } from './actions/summaries'


class App extends Component {


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
            <Route path='/summary' component={SummaryList}></Route>
            <Route exact path={'/countries'} render={(routerProps) => <CountryList {...routerProps} />} />


          </Switch>

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
