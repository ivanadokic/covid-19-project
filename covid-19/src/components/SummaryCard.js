
/* eslint-disable */
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchSummaries } from '../actions/summaries'


function SummaryCard({ data }) {

  const date = new Date(parseInt(data.updated))
  const newdate = date.toString()

  return (
    < CardDeck >
      <Card
        bg="secondary"
        text="white"
        className="text-center"
        style={{ margin: "20px" }}
      >
        <Card.Body>
          <Card.Title>Global cases </Card.Title>
          <Card.Text>
            {data.cases}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small> Last updated {newdate}</small>

        </Card.Footer>
      </Card >

      <Card
        bg="danger"
        text="white"
        className="text-center"
        style={{ margin: "20px" }}>

        <Card.Body>
          <Card.Title>Global deaths</Card.Title>
          <Card.Text>
            {data.deaths}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small> Last updated {newdate}</small>
        </Card.Footer>
      </Card>
      <Card
        bg="success"
        text="white"
        className="text-center"
        style={{ margin: "20px" }}>

        <Card.Body>
          <Card.Title>Global recovered</Card.Title>
          <Card.Text>
            {data.recovered}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Last updated {newdate}</small>
        </Card.Footer>
      </Card>
    </CardDeck >

  )

}


export default SummaryCard