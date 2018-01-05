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

const PlayerHistory = () => {
  return (
    <div>
      <CareerCard
        image={'http://n8d.flywheelsites.com/wp-content/uploads/2010/09/pset91-bpease-213x300.jpg'}
        positions={['Starting quarterback for the Houston Oilers for three games in 1987', 'Spent the 1988 season as the backup to current Hall of Famer, Warren Moon']}
      />
      <CareerCard
        image={'http://prod.static.vikings.clubs.nfl.com/nfl-assets/img/gbl-ico-team/MIN/logos/home/large.png'}
        positions={['Drafted by the Minnesota Vikings']}
        timeline={'1987'}
      />
    </div>
  )
}

export default PlayerHistory
