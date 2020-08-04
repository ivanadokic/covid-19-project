/* eslint-disable */
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Columned from 'react-columned';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { fetchCountries } from '../actions/index'



class CountryList extends Component {
  componentDidMount() {
    this.props.fetchCountries()
  }
  // const[searchCountries, setsearchCountries] = useState("");
  filterCountries = this.props.countries.filter(item => {
    return searchCountries !== "" ? item.country.toLowerCase().includes(searchCountries.toLowerCase()) : item;
  })
  allcountries = filterCountries.map((data, i) => {
    return (
      <CountryCard
        key={i}
        {...data}
      />
    );
  });
  render() {
    return (
      < Columned>{allcountries}</Columned >
    )
  }
}


function CountryCard(data) {
  return (<Card
    bg="light"
    text="dark"
    className="text-center"
    style={{ margin: "10px" }}
  >

    <Card.Img variant="top" src={data.flag} />
    <Card.Body>
      <Card.Title>{data.country}</Card.Title>
      <Card.Text>Cases {data.cases}</Card.Text>

      <Card.Text>Recovered {data.recovered}</Card.Text>
      <Card.Text>Active {data.active}</Card.Text>
      <Card.Text>Critical {data.critical}</Card.Text>
      <Card.Text>Tests {data.tests}</Card.Text>
      <Card.Text>Today's cases {data.today_cases}</Card.Text>
      <Card.Text>Today's deaths {data.today_deaths}</Card.Text>
      <Card.Text>Population {data.population}</Card.Text>
    </Card.Body>
  </Card>);


  return (<Form>
    <Form.Group controlId="formGroupSearch">
      <Form.Label>Search Country</Form.Label>
      <Form.Control type="text"
        placeholder="Enter Country name"
        onChange={e => setsearchCountries(e.target.value)} />
    </Form.Group>
  </Form>
  );
}
const mapStateToProps = state => {
  return {
    countries: state.countries

  }

}

export default connect(mapStateToProps, { fetchCountries })(CountryList);