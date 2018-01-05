import React from 'react'
// import CareerCard from '../Components/CareerCard'
import CareerList from '../Components/CareerList'
import PlayerHistory from '../Components/PlayerHistory'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(250, 250, 250)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '10%'
  },
  header: {
    fontFamily: 'Montserrat',
    fontSize: '10vh',
    margin: '7%',
    color: '#333',
    borderBottom: '1px solid #cecece'
  }
}

const CareerHistory = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Coaching History</h1>
      <CareerList />
      <h1 style={styles.header}>Playing History</h1>
      <PlayerHistory />
    </div>
  )
}

export default CareerHistory
