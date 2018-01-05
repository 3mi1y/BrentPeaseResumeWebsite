import React from 'react'

const styles = {
  container: {
    width: '300px',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    backgroundColor: 'white',
    margin: '.5%',
    marginTop: '1%',
    marginBottom: '1%',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '3%'
  },
  image: {
    maxWidth: '100%'
  },
  years: {
    fontFamily: 'Montserrat',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '25px'
  },
  positions: {
    fontFamily: 'Quattrocento',
    color: '#a3a3a3',
    fontSize: '17px',
    marginTop: '5px',
    paddingTop: '0px'
  },
  positionHeader: {
    color: '#333',
    fontSize: '17px',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    paddingBottom: '0px',
    marginBottom: '0px'
  },
  imageContainer: {
    width: '100%',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '250px',
    paddingTop: '50%'
  }
}

const CareerCard = ({image, positions, timeline}) => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={image} style={styles.image} />
      </div>
      <div style={styles.text}>
        {
          positions.map(position => {
            return <div><p style={styles.positions}>{position}</p></div>
          })
        }
        <p style={styles.years}>{timeline}</p>
      </div>
    </div>
  )
}

export default CareerCard
