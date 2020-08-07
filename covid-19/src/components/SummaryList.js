import React, { Component } from 'react';
import SummaryCard from './SummaryCard';
import { connect } from 'react-redux'
import { fetchSummaries } from '../actions/summaries'


class SummaryList extends Component {
  componentDidMount() {
    this.props.fetchSummaries()
  }
  render() {
    console.log(this.props)
    return (this.props.summaries.map((data, i) => <SummaryCard data={data} key={i} />))
  }

}

function mapStateToProps(state) {
  return { summaries: state.summaries }
}
export default connect(mapStateToProps, { fetchSummaries })(SummaryList);