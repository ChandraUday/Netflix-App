import React, { useEffect, useState } from 'react'
import "./css/nav.css"
import firebase from 'firebase'

function Nav() {

  const [show,handleShow]=useState(false);

  const transitionNavbar=()=>{
      if(window.scrollY>100)
      {
        handleShow(true);
      }
      else
      {
        handleShow(false);
      }    
  }

  useEffect(()=>{
     window.addEventListener("scroll",transitionNavbar);

     return ()=>{
      window.removeEventListener("scroll",transitionNavbar);
     }
  },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
         <div className='nav_content'>
               <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="" className='logo'/>
               <button className="nav_logo" onClick = { () =>firebase.auth().signOut()}>
                Sign Out
               </button> 
                
         </div>
    </div>
  )
}

export default Nav