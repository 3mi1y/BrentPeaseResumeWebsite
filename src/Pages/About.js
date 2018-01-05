import React from 'react'
import {Parallax, Background} from 'react-parallax'
import CareerList from '../Components/CareerList'

const styles = {
  container: {
    width: '100%',
    height: '100%'
  },
  text: {
    fontFamily: 'Montserrat',
    color: '#333',
    fontSize: '3.5vh'
  },
  smallContainer: {
    backgroundColor: 'rgb(250, 250, 250)',
    marginTop: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2%'
  },
  descriptionContainer: {
    backgroundColor: 'rgb(250, 250, 250)',
    marginTop: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2%'
  },
  biggerContainer: {
    backgroundColor: 'rgb(250, 250, 250)',
    marginTop: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-around',
    padding: '2%'
  },
  boiseState: {
    backgroundColor: 'rgb(250, 250, 250)',
    marginTop: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-around',
    padding: '2%'
  },
  careerHistoryContainer: {
    height: '100vh',
    backgroundColor: 'rgb(250, 250, 250)',
    marginTop: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '3%'
  },
  careerTimelineContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerOne: {
    fontFamily: 'Montserrat',
    fontSize: '6vh',
    color: '#333',
    borderBottom: '1px solid grey',
    // padding: '0px',
    // margin: '0px'
  },
  headerTwo: {
    fontFamily: 'Montserrat',
    color: 'grey',
    fontSize: '5vh',
    // padding: '0px',
    // margin: '0px'
  },
  headerThree: {
    color: 'grey',
    fontFamily: 'Montserrat',
    fontSize: '3vh'
  },
  whyBrentPease: {
    height: '100vh',
    width: '100%',
    backgroundColor: 'rgb(250, 250, 250)',
    paddingTop: '5%',
    paddingBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  whyContainer: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  reasons: {
    width: '100%',
    borderLeft: '20px solid rgba(186, 187, 190, .9)',
    paddingLeft: '10%'
  },
  imageContainer: {
    width: '50%',
    marginTop: '10%'
  },
  image: {
    width: '100%',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
  textChunk: {
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    padding: '3%',
    width: '80%',
    marginBottom: '5%'
  }
}

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.whyBrentPease} >
        <div style={styles.whyContainer}>
          <h1 style={styles.headerOne}>Why Brent <strong>Pease</strong></h1>
          <div style={styles.reasons}>
            <h2 style={styles.headerTwo}>Talented Teacher</h2>
            <h2 style={styles.headerTwo}>Team First</h2>
            <h2 style={styles.headerTwo}>Driven</h2>
            <h2 style={styles.headerTwo}>A Vision to Win</h2>
          </div>
        </div>
        <div style={styles.imageContainer} >
          <img src='https://cbssports.com/images/collegefootball/Brent-Pease-Fired-Florida.jpg' style={styles.image} />
        </div>
      </div>
      <Parallax bgImage="http://jacksonville.com/sites/default/files/BrentPease.jpg" strength={400} >
         <br />
        <div style={styles.careerHistoryContainer} >
          <h1 style={styles.headerOne} >Brief career history</h1>
          <h2 style={styles.headerThree}>14 wins in first two seasons of the Chris Peterson era at Washington</h2>
          <h2 style={styles.headerThree}>11-2 overall record at Florida (2012)</h2>
          <h2 style={styles.headerThree}>Four top 10 final rankings at Boise State (2006, 2009, 2010, 2011)</h2>
          <h2 style={styles.headerThree}>Undefeated season (14-0) and Fiesta Bowl Champions at Boise State in 2009</h2>
          <h2 style={styles.headerThree}>Undefeated season (13-0) and Fiesta Bowl Champions at Boise State in 2006</h2>
          <h2 style={styles.headerThree}>D-1AA National Champions at the University of Montana (1995)</h2>
        </div>
        </Parallax>
        {/* <Parallax bgImage="https://cdn.vox-cdn.com/thumbor/8JkK0llQo7EnaCrbsnxebTE07hE=/0x289:2200x1756/1200x800/filters:focal(0x289:2200x1756)/cdn.vox-cdn.com/uploads/chorus_image/image/48509249/usa-today-8314935.0.jpg" strength={400} >
          <br />
          <div style={styles.careerTimelineContainer} >
            <CareerList />
          </div>
        </Parallax> */}
        <Parallax bgImage="https://cdn.vox-cdn.com/thumbor/0ThLuG6adnmMUWQaToGp8yHw6Nk=/0x0:2852x1901/1200x800/filters:focal(0x0:2852x1901)/cdn.vox-cdn.com/uploads/chorus_image/image/24287465/20131119_kkt_sv7_035.0.jpg" strength={400} >
         <br />
        <div style={styles.boiseState} >
          <h1 style={styles.headerOne}>73-6 in six seasons at Boise State</h1>
          <h2 style={styles.headerTwo}>"What did you learn at Boise State?"</h2>
          <div style={styles.textChunk}>
            <p style={styles.text}>
              "Our successful run at Boise State was the result of the staff holding to our 
              core values and creating a teaching model that allowed the players to take ownership in The Process.
              We proved that education and relationships with players is valuable. The success of our players
              was evident on the field, academically, and socially. In recruiting, we proved that if you 
              first, hold to your values as a program, and then recruit to that model you will be successful." 
            </p>
            <p style={styles.text}>- Brent Pease</p>
          </div>
        </div>
        </Parallax>
        {/* <Parallax bgImage="http://cdn.wpsdo9mwq9.maxcdn-edge.com/wp-content/uploads/2013/09/Pease_Brent_Florida_Gators_USA_Today_001.jpg" strength={400} > */}
        <Parallax bgImage="http://media.mlive.com/spartans_impact/photo/kellen-moore-boise-statejpg-f44ee4889c8a6ba3.jpg" strength={400} >
         <br />
        <div style={styles.smallContainer} >
          <h1 style={styles.headerOne}>Developing Quarterbacks</h1>
          <p style={styles.text}>
            <strong>Did you know...</strong> With Brent Pease as Offensive Coordinator / Quarterbacks coach, 
            Kellen Moore threw for 43 TD / 9 INT and led the Broncos to a 12-1 season in 2011.
            Moore was recognized as a finalist for the Maxwell Award.
          </p>
          <p style={styles.text}>
            <strong>Also...</strong> Pease also developed All-American / Walter Payton Award finalist Brian Ah Yat at Montana and 
            overacheivers, Jared Lorenzen and Shane Boyd, at Kentucky.
          </p>
        </div>
        </Parallax>
        <Parallax bgImage="https://nbccollegefootballtalk.files.wordpress.com/2010/11/titus-young2.jpg" strength={400} >
         <br />
        <div style={styles.smallContainer} >
          <h1 style={styles.headerOne}>Developing Wide Receivers</h1>
          <h2 style={styles.headerTwo}>2010 National Wide Receivers Coach of the Year</h2>
          <p style={styles.text}>
            <strong>Did you know...</strong> Under Pease's leadership as wide receivers coach, Titus Young and Austin Pettis 
            earned All-WAC honors in 2009 and 2010.
          </p>
        </div>
        </Parallax>
        <Parallax bgImage="https://cdn.vox-cdn.com/thumbor/1k82dp1bZ-wW-Q3SctcpBqzy52k=/0x290:2518x1969/1200x800/filters:focal(0x290:2518x1969)/cdn.vox-cdn.com/uploads/chorus_image/image/24292657/20131126_kkt_sv7_662.0.jpg" strength={400} >
         <br />
        <div style={styles.descriptionContainer} >
          <h1 style={styles.headerOne}>2012 Success at Florida</h1>
          <p style={styles.text}>
            <strong>Did you know...</strong> Under Pease's leadership, the 2012 Florida Gators finished the regular season 11-1.
          </p>
          <h2 style={styles.headerTwo}>5 Huge Wins</h2>
          <ul>
            <li style={styles.text}>20-17 at No. 5 Texas A&amp;M</li>
            <li style={styles.text}>14-6 vs. No. 14 LSU</li>
            <li style={styles.text}>31-17 at No. 23 Vanderbilt</li>
            <li style={styles.text}>44-11 vs. No. 8 South Carolina</li>
            <li style={styles.text}>37-26 at No. 10 Florida State</li>
          </ul>
        </div>
        </Parallax>
        <Parallax bgImage="https://hailfloridahail.com/wp-content/blogs.dir/213/files/2013/12/7925646.jpg" strength={400} >
         <br />
        <div style={styles.biggerContainer} >
          <h1 style={styles.headerOne}>What Happened in 2013</h1>
          <h2 style={styles.headerTwo}>What went wrong?</h2>
          <div style={styles.textChunk}>
            <p style={styles.text}>
              "In the coaching profession, there are no excuses. It's our challenge to adapt to our players 
              skills to what they can individually and collectively handle and execute. As an offense, eight of our top twelve players 
              including our starting quarterback suffered injuries and that really negated our 
              identity of playing physical and creating explosive plays. In the end, we weren't 
              able to manufacture enough consistency with the younger and less experienced players."
            </p>
            <p style={styles.text}>- Brent Pease</p>
          </div>
        </div>
        </Parallax>
        <Parallax bgImage="https://cdn.vox-cdn.com/thumbor/gtUbJcudoh9tVyc5DVqc0ppPU9A=/0x571:2464x2214/1200x800/filters:focal(0x571:2464x2214)/cdn.vox-cdn.com/uploads/chorus_image/image/48476269/usa-today-8314924.0.jpg" strength={400} >
         <br />
        <div style={styles.biggerContainer} >
          <h1 style={styles.headerOne}>Back with Chris Petersen</h1>
          <h2 style={styles.headerTwo}>What did you learn?</h2>
          <div style={styles.textChunk}>
            <p style={styles.text}>
              "It was a great feeling to rejoin Coach Peterson at Washington along with most of the original 
              staff. Accountability is at the forefront of the culture when you work and play under Chris Peterson. 
              That accountability is the greatest quality to have. At Boise State, we set a standard that led to success. At Washington, we were able 
              to implement the same standard which set the foundation for the success you're seeing today in the Huskies program."
            </p>
            <p style={styles.text}>- Brent Pease</p>
          </div>
        </div>
        </Parallax>
        <Parallax bgImage='https://cdn.vox-cdn.com/thumbor/8JkK0llQo7EnaCrbsnxebTE07hE=/0x289:2200x1756/1200x800/filters:focal(0x289:2200x1756)/cdn.vox-cdn.com/uploads/chorus_image/image/48509249/usa-today-8314935.0.jpg' strength={400}>
        {/* <Parallax bgImage="http://s3.amazonaws.com/sidearm.sites/gatorzone.com/images/2012/1/11/_gallery_dl_photos_51_Brent-Pease-DL.jpg" strength={400} > */}
         <br />
        <div style={styles.descriptionContainer} >
          <h1 style={styles.headerOne}>Moving Forward</h1>
          <h2 style={styles.headerTwo}>What are your goals moving forward?</h2>
          <div style={styles.textChunk}>
            <p style={styles.text}>
              "My goal moving forward is to continue to improve as a coach and as a person. I believe we must find the best version
              of ourselves. I strive to help players find the best version of themselves while building self-esteem and teaching them 
              to enjoy The Process along the way."
            </p>
            <p style={styles.text}>- Brent Pease</p>
          </div>
        </div>
        </Parallax>
    </div>
  )
}

export default About
