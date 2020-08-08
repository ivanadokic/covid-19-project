import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from './components/NavBar';
import SummaryList from './components/SummaryList'
import CountryList from './components/CountryList'
import CountryForm from './components/CountryForm'
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
            {/* <Route exact path='/country' render={(routerProps) => <CountryForm {...routerProps} />} /> */}

            <Route path='/countries/form' component={CountryForm}></Route>



          </Switch>

        </Router>
      </div >
    )

  }
}
const mapStateToProps = state => {
  return {
    summaries: state.summaries

  }

}


export default connect(mapStateToProps, { fetchSummaries })(App);
