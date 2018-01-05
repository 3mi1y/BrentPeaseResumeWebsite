import React from 'react'
import { Link } from 'react-router-dom'
import Home from 'react-icons/lib/fa/home'


const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)',
    // backgroundColor: 'rgba(250, 250, 250, .95)',
    fontFamily: 'Montserrat',
    padding: '0px',
    margin: '0px',
    position: 'static',
    zIndex: '1',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
  horizontalLinks: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    listStyle: 'none',
    marginBottom: '1%'
  },
  linkItem: {
    color: 'white',
    letterSpacing: '2px',
    textDecoration: 'none',
    paddingLeft: '24px',
    paddingRight: '24px'
  },
  image: {
    maxWidth: '40%',
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    marginBottom: '4%',
    marginTop: '4%'
  }
}

const NavBar = () => {
  console.log(styles.linkItem)
  return (
    <div style={styles.container} >
      <ul style={styles.horizontalLinks} >
        <li><Link className="navbar-brand" to='/' style={styles.linkItem} ><strong>Home</strong></Link></li>
        <li><Link className="navbar-brand" to='/about' style={styles.linkItem} >Why Brent Pease</Link></li>
        <li><Link className="navbar-brand" to='/careerhistory' style={styles.linkItem}>Career History</Link></li>
        <li><a className="navbar-brand" href='https://drive.google.com/file/d/0B9l52gb23huHM3NDQzA3M0xVTDRVcHo2cjROUFAtTzFqUWkw/view?usp=sharing' style={styles.linkItem} target='blank'>Printable Resume</a></li> 
      </ul>
    </div>
  )
}

export default NavBar
