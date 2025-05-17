import React from 'react'
import Home1 from './home/Home1'
import Services from './home/Services'
import BookingSteps from './home/Booking'
import Navbar from './Navbar'
import Testimonials from './home/Testimonials'
import Media from './home/Media'
import Footer1 from './Footer1'
const Home = () => {
  return (
    <div>
    <Navbar></Navbar>
      <Home1></Home1>
      <Services></Services>
      <BookingSteps></BookingSteps>
      <Testimonials/>
      <Media/>
     
    </div>
  )
}

export default Home
