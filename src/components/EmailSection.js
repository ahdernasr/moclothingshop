import React from 'react'
import "./EmailSection.css"

const EmailSection = () => {
  return (
    <div className="email-section-body">
      <input id="email-input" type="text" placeholder="Enter your e-mail to recieve promotions and offers"></input>
      <button onClick={() => {
        alert("Success! Subscribed to mailing list.");
        document.getElementById("email-input").value = "";
        }}>Submit</button>
    </div>
  )
}

export default EmailSection