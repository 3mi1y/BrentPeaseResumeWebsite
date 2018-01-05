import React from 'react'
import {Link} from 'react-router-dom'
import Facebook from 'react-icons/lib/fa/facebook-official'
import Instagram from 'react-icons/lib/fa/instagram'
import Pinterest from 'react-icons/lib/fa/pinterest'
import Twitter from 'react-icons/lib/fa/twitter-square'

const styles = {
  container: {
    backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: '1%',
    fontFamily: 'Montserrat',
    color: 'white',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    paddingBottom: '5%'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '20%',
    paddingLeft: '20px',
    fontFamily: 'Oswald',
    fontSize: '14px',
    marginTop: '2%',
    fontFamily: 'Montserrat'
  },
  icons: {
    fontSize: '40px',
    paddingLeft: '3%',
    marginBottom: '0px',
    paddingBottom: '0px',
    color: 'white'
  },
  contactColumn: {
    borderLeft: '1px dotted black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '80%',
    paddingLeft: '20px',
    fontFamily: 'Montserrat'
  },
  columnHeader: {
    fontSize: '30px',
    marginBottom: '19px'
  },
  contactInfo: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '0px',
    margin: '0px'
  },
  headerIcons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '0px',
    borderBottom: '1px solid grey'
  },
  infoItem: {
    padding: '3%',
    margin: '0px',
    paddingBottom: '5px',
    fontSize: '15px'
  },
  linkItem: {
    color: 'white',
    textDecoration: 'none'
  }
}

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <Link to='/' style={styles.linkItem}><p>Home</p></Link>
        <Link to='/about' style={styles.linkItem}><p>Why Brent Pease</p></Link>
        <Link to='/careerhistory' style={styles.linkItem}><p>Career History</p></Link>
        <a href='https://drive.google.com/file/d/0B9l52gb23huHM3NDQzA3M0xVTDRVcHo2cjROUFAtTzFqUWkw/view?usp=sharing' target='blank' style={styles.linkItem}><p>Printable Resume</p></a>
      </div>
      <div style={styles.contactColumn}>
        <div style={styles.headerIcons}>
          <h2 style={styles.columnHeader}>Contact Me</h2>
          <a href='https://twitter.com/CoachPease' target='blank' style={styles.icons}><Twitter /></a>
        </div>
        <div style={styles.contactInfo}>
          <p style={styles.infoItem}>Cell: (206) 291-3894</p>
          <p style={styles.infoItem}>Email: brentpease10@gmail.com</p>
          <p style={styles.infoItem}>Address: 609 East Pine Ridge Drive - Harrison, ID 83833</p>
        </div>
      </div>
    </div>
  )
}

export default Footer