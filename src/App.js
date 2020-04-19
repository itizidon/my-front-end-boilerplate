import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class App extends React.Component {
  render() {
    console.log(this.props.state)
    return <div>My App Component</div>
  }
}

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps, null)(App)
