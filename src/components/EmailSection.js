import React from 'react'
import "./EmailSection.css"

const EmailSection = () => {
  return (
    <div className="email-section-body">
      <input type="text" placeholder="Enter your e-mail to recieve promotions and offers"></input>
      <button>Submit</button>
    </div>
  )
}

export default EmailSection