import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck';
import SummaryCard from './components/SummaryCard'
import connect from 'react-redux'


const CardDeck = ({ summary }) => {
  return (

    < CardDeck >
      <SummaryCard title="Global Cases" bg="secondary" total={summary.cases} />
      <SummaryCard title="Global Deaths" bg="danger" total={summary.deaths} />
      <SummaryCard title="Global Recovered" bg="success" total={summary.recovered} />
    </CardDeck >
  )
}

export default CardDeck

