import React, { Component } from 'react'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: true,
      error: null,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) =>
        this.setState({
          users: data,
          loading: false,
        })
      )
      .catch((error) =>
        this.setState({
          error: error.toString(),
          loading: false,
        })
      )
  }

  render() {
    const { users, loading, error } = this.state

    if (loading) {
      return <p>Loading users...</p>
    }

    if (error) {
      return <p>Error: {error}</p>
    }

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default function App() {
  return (
    <div>
      <h1>Welcome to the User Directory</h1>
      <UserList />
    </div>
  )
}
