/* eslint-disable */
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Columned from 'react-columned';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { fetchCountries } from '../actions/index'
import CountryCard from './CountryCard'
import CountryForm from './CountryForm'

class CountryList extends Component {
  componentDidMount() {
    this.props.fetchCountries()
  }
  // const[searchCountries, setsearchCountries] = useState("");
  // filterCountries = this.props.countries.filter(item => {
  //   return searchCountries !== "" ? item.country.toLowerCase().includes(searchCountries.toLowerCase()) : item;
  // })
  // allcountries = filterCountries.map((data, i) => {
  //   return (
  //     <CountryCard
  //       key={i}
  //       {...data}
  //     />
  //   );
  // });
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