import React, { useEffect } from 'react'
import "./DiscoverSection.css"

const DiscoverSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className="discover-section-body">
        <div className="discover-section-container">
            <p>Summer is here.</p>
            <button onClick={() => {document.getElementById('slogan').scrollIntoView({ behavior: 'smooth'});}}>Discover</button>
        </div>
    </div>
  )
}

export default DiscoverSection