import React from 'react'
import { connect } from 'react-redux'

function CounterApp({ count, increment, decrement }) {
  return (
    <div className="bg-white w-50 mx-auto p-5">
      <h1 className="fs-3">Counter App</h1>
      <div className="p-3">
        <h3>The count initial state value is: {count}</h3>
        <div className="space-x-2">
          <button
            type="button"
            className="bg-blue-900 text-white rounded-2xl p-2"
            onClick={increment}
          >
            +
          </button>
          <button
            type="button"
            className="bg-blue-900 text-white rounded-2xl p-2"
            onClick={decrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)
