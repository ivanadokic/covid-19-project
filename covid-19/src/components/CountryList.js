/* eslint-disable */
import React, { Component } from 'react';

import Columned from 'react-columned';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux'
import { fetchCountries } from '../actions/index'
import CountryCard from './CountryCard'


class CountryList extends Component {
  componentDidMount() {
    this.props.fetchCountries()
  }

  render() {
    const allcountries = this.props.countries.map((data, i) => <CountryCard data={data} key={i} />)
    return (
      < Columned>{allcountries}</Columned >
    )
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries

  }

}

export default connect(mapStateToProps, { fetchCountries })(CountryList);