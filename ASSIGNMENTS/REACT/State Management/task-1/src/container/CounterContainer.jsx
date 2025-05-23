import React from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increment, decrement, reset } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    counter: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),

    decrement: () => dispatch(decrement()),

    reset: () => dispatch(reset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
