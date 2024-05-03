import React from 'react'
import './dash.css'
import Profile from '../profile/Profile'
import portrait from '../../assets/imgs/portrait.avif';

function DashScreen() {
  return (
    <>
    <div className="dash-container flex">
    <div className="dashboard-left">
    <div className="sales">
      <div className="sales-f">
        <h3>Sales</h3>
        <a href="">Active</a>
      </div>
      <div className="sales-f">
        <h3>Assignment Link</h3>
        <a href="">assign.com</a>
      </div>
      <div className="sales-f">
        <h3>Assignment hour</h3>
       <p>3 hour</p>
      </div>
      <div className="sales-f">
        <h3>Assignment end</h3>
       <p>11 march 2025</p>
      </div>
    </div>
    <div className="conditate-score">
      <div className="sales-f">
        <h3>conditate</h3>
        <p>Score</p>
      </div>
    </div>
    </div>
    <div className="dashboard-right">
    <div className="dashboard-right-inner">
    <Profile/>
    <div className="details">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, praesentium? Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    </div>
    <div className="video">
    <img src={portrait} alt="" />
    </div>
    </div>
    </div>
    </>
  )
}

export default DashScreen