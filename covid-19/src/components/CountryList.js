/* eslint-disable */
import React, { Component } from 'react';
import Columned from 'react-columned';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import { fetchCountries } from '../actions/index'
import CountryCard from './CountryCard'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CountryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      filter: ''
    };
    // this.setSearchCountries = this.setSearchCountries.bind(this); // binds the context of this to the
  }

  componentDidMount() {
    this.props.fetchCountries()
  }
  setSearchCountries = e => {
    e.preventDefault()
    this.setState({
      search: this.state.filter
    })
  }

  handleChange = e => {
    e.preventDefault
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  render() {

    const filterCountry = this.props.countries.filter(item => item.country.toLowerCase().includes(this.state.search.toLowerCase()))
    const allcountries = filterCountry.map((data, i) => <CountryCard data={data} key={i} />)

    return (
      <div>
        <form class="form-inline">
          < Form onSubmit={this.setSearchCountries}>
            <Form.Group controlId="formGroupSearch">
              <Form.Label>Search Country</Form.Label>
              <Form.Control
                type="text"
                style={{ margin: "10px" }}
                placeholder="Enter Country name"
                name="filter"
                value={this.state.filter}
                onChange={this.handleChange}
              />
              <Button variant="success" type="submit" >
                Search
              </Button>


            </Form.Group>
          </Form >
        </form>
        < Columned>{allcountries}</Columned >
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries

  }

}

export default connect(mapStateToProps, { fetchCountries })(CountryList);