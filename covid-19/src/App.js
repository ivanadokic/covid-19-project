import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import SummaryList from './components/SummaryList'
import CountryList from './components/CountryList'
import { connect } from 'react-redux'
import { fetchSummaries } from './actions/summaries'

class App extends Component {

  componentDidMount() {
    this.props.fetchSummaries()
  }

  render() {

    return (
      < div >
        <Router>
          <NavBar />
          <Switch>

            <Route exact path={'/summary'} render={(routerProps) => <SummaryList {...routerProps} />} />
            <Route exact path={'/countries'} render={(routerProps) => <CountryList {...routerProps} />} />
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
