import React from 'react'
import CareerCard from './CareerCard'

const styles = {
  container: {
    width: '100%',
    backgroundColor: 'rgb(250, 250, 250)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginLeft: '30px',
    marginRight: '70%',
    fontFamily: 'Montserrat',
    fontSize: '6vh',
    color: '#333',
    borderBottom: '1px solid grey'
  }
}

const CareerList = () => {
  return (
    <div>
      <div style={styles.container}>
        <CareerCard 
          image={'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/University_of_Texas_at_El_Paso_logo.svg/1280px-University_of_Texas_at_El_Paso_logo.svg.png'}
          positions={['Offensive Coordinator / Quarterbacks']}
          timeline={'2016 - 2017'}
        />
        <CareerCard 
          image={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Washington_Huskies_logo.svg/2000px-Washington_Huskies_logo.svg.png'}
          positions={['Wide Receivers']}
          timeline={'2014-2015'}
        />
        <CareerCard 
          image={'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Florida_Gators_logo.svg/1280px-Florida_Gators_logo.svg.png'}
          positions={['Offensive Coordinator / Quarterbacks']}
          timeline={'2012-2013'}
        />
        <CareerCard 
          image={'http://brandstandards.boisestate.edu/wp-content/uploads/2013/01/boisestate-stackedlogo-2color-RGB.jpg'}
          positions={[
            'Offensive Coordinator / Quarterbacks (2011)',
            'Wide Receivers / Assistant Head Coach (2007 - 2010) ',
            'Wide Receivers (2006)'
          ]}
          timeline={'2006-2011'}
        />
        <CareerCard 
          image={'https://www.baylor.edu/content/imglib/1/4/2/1/142120.png'}
          positions={['Offensive Coordinator / Quarterbacks']}
          timeline={'2003 - 2005'}
        />
        <CareerCard 
          image={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kentucky_Wildcats_logo.svg/2000px-Kentucky_Wildcats_logo.svg.png'}
          positions={['Offensive Coordinator / Quarterbacks']}
          timeline={'2001 - 2002'}
        />
        <CareerCard 
          image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Northern_Arizona_Athletics_logo.svg/1200px-Northern_Arizona_Athletics_logo.svg.png'}
          positions={[' Offensive Coordinator / Quarterbacks / Assistant Head Coach']}
          timeline={'1999 - 2000'}
        />
        <CareerCard 
          image={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Montana_Griz_logo.svg/2000px-Montana_Griz_logo.svg.png'}
          positions={[
            'Offensive Coordinator (1996 - 1998)',
            'Offensive Assistant (1991 - 1995)'
          ]}
          timeline={'1991 - 1998'}
        />
      </div>
    </div>
  )
}

export default CareerList
