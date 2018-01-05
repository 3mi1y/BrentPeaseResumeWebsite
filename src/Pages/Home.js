import React from 'react'
import { Parallax, Background } from 'react-parallax'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(250, 250, 250)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  playerBox: {
    width: '70%',
    marginBottom: '10%',
    marginTop: '10%',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
  playerCard: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: '0%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  playerImage: {
    width: '100%'
  },
  playerInfo: {
    width: 'calc(100% - 60px)',
    backgroundColor: 'white',
    fontFamily: 'Montserrat',
    color: 'rgb(51, 51, 51)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight: '30px',
    paddingLeft: '30px',
    paddingTop: '3%',
    paddingBottom: '5%'
  },
  paragraphText: {
    fontSize: '2.0vh'
  },
  link: {
    textDecoration: 'none',
    border: '1px solid grey',
    borderRadius: '5px',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '4%',
    paddingRight: '4%',
    color: 'grey'
  }
}

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.playerBox} >
        <div style={styles.playerCard}>
          <img src='http://www.idahostatesman.com/sports/college/mountain-west/boise-state-university/boise-state-football/satp2o/picture48150515/alternates/FREE_640/Brent%20Pease' style={styles.playerImage} />
        </div>
        <div style={styles.playerInfo} >
          <div>
            <h1>Brent Pease</h1>
            <p style={styles.paragraphText}>
            At one point, Brent Pease was one of the most sought after offensive coordinators in the nation; his experience after an exceptional run at Boise State includes stints at Florida, Washington, and UTEP; 
            Pease has served an integral role in two undefeated seasons, an SEC Eastern Division championship, a D1-AA national championship, and rekindling the Washington Huskies’ program; recognized as the National Wide Receivers Coach of the Year in 2010; has established a proven track record as a proven play-caller, talent evaluator, recruiter, developer of quarterbacks and wide receivers, and as a winner; determined to inspire competitive excellence.
            </p>
          </div>
          <a href='https://drive.google.com/file/d/0B9l52gb23huHM3NDQzA3M0xVTDRVcHo2cjROUFAtTzFqUWkw/view?usp=sharing' target='blank' style={styles.link}><p>Printable Resume</p></a>
        </div>
      </div>
    </div>
  )
}

export default Home
