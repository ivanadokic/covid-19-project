/* eslint-disable */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { fetchCountries } from '../actions/index'
import CountryCard from './CountryCard'

function CountryForm({ data }) {

  // filterCountries = data.countries.filter(item => {
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

  return (

    <Form>
      <Form.Group controlId="formGroupSearch">
        <Form.Label>Search Country</Form.Label>
        <Form.Control type="text"
          placeholder="Enter Country name"
          onChange={e => setsearchCountries(e.target.value)} />
      </Form.Group>
    </Form >
  )



  return (
    < CountryCard />
  )


}


function mapStateToProps(state) {
  return { countries: state.countries }
}
export default connect(mapStateToProps, { fetchCountries })(CountryForm);