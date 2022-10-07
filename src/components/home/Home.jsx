import React from 'react'
import Header from '../header/Header'
import './home.css';

const Home = () => {
  return (
    <div className='Home'>
   <Header />
    <div className='MainHome'>
      <div className="leftDiv">
<h1 className='infoHeading'>INFORMATION
TECHNOLOGY</h1>
<p className='subheading'>Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Atque molestiae, enim error
    sapiente, nemo cupiditate dignissimos ducimus possimus 
    corrupti, aliquam deserunt laboriosam doloremque 
  veniam nobis quo ipsam id recusandae quidem.</p>
  <button className='seeMore'>See More Action</button>
  <button className='learnMore'>Learn More</button>
      </div>
      <div className="rightDiv">
<img  src="./images/mother_board.png" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Home