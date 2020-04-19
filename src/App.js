import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Writers from './components/Writers'

class App extends Component {
  // state
  state = {
    writers: [],
  }

  // componentDidMount() {
  //   fetch('/writers')
  //     .then((res) => res.json())
  //     .then((writers) => this.setState({ writers }))
  // }

  // Using Async-Await
  async componentDidMount() {
    const writers = await (await fetch('/writers')).json()

    this.setState({ writers })
  }

  render() {
    // console.log(this.state.writers)

    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path='/writers'
            render={(props) => (
              <Writers {...props} writers={this.state.writers} />
            )}
          />
        </Switch>
      </Router>
    )
  }
}

export default App
