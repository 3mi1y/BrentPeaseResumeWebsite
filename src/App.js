import React, { Component } from 'react'
import Layout from './Layout/Layout'

const styles = {
  myContainer: {
    width: '100%'
  }
}

class App extends Component {
  render () {
    return (
      <div style={styles.myContainer} >
        <Layout style={styles.myContainer} />
      </div>
    )
  }
}

export default App;
