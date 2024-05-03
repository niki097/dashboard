import React from 'react'
import profileimg from '../../assets/imgs/profileimg.jpg'
import '../dashboard/dash.css'

function Profile() {
  return (
   <>
   <div className="profile-info-container">
        <div className="profile-info-inner">
            <img src={profileimg} alt="" />
            <div className="">
                <h3>Nikita Saini</h3>
                <p>nikitasaini09@gmail.com</p>
            </div>
            <h1>78%</h1>
        </div>
    </div>
   </>
  )
}

export default Profile