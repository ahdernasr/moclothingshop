import React from 'react'
import "./InfoBar.css"

const InfoBar = () => {
  return (
    <div className="info-bar-container">
        <div className="info-bar-left">Use code "OTTAWA" for 10% of all orders </div>
        <p>|</p>
        <div className="info-bar-middle">Free delivery for orders over 80 CAD</div>
        <p>|</p>
        <div className="info-bar-right">New releases at the start of every month</div>
    </div>
  )
}

export default InfoBar