import React, { Component } from 'react'

class LoggerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('🔁 Component updated! Current count:', this.state.count)
  }

  componentWillUnmount() {
    console.log('Component will unmount!')
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default LoggerComponent
