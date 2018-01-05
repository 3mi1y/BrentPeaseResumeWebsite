import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

// these are the pages that will contain more specific components
import About from '../Pages/About'
import CareerHistory from '../Pages/CareerHistory'
import Home from '../Pages/Home'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navBar: {
    width: '100%'
  }
}

const Layout = () => {
  return (
    <Router>
      <div style={styles.container}>
        <NavBar style={styles.navBar} />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/careerhistory' component={CareerHistory} />
        <Footer />
      </div>
    </Router>
  )
}

export default Layout