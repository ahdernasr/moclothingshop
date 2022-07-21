import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="about-us">
        <h1>About us</h1>
        <p>
          TEMPUS is a clothing brand based in Ottawa since 2003. We aim to
          produce high quality clothing for every season using high quality
          materials worldwide while using eco friendly humanitarian methods.
        </p>
        <hr></hr>
        <p>
          TEMPUS est une marque de vêtements basée à Ottawa depuis 2003. Nous
          visons à produire des des vêtements de qualité pour chaque saison en
          utilisant des matériaux de haute qualité dans le monde entier tout en
          utilisant eco méthodes humanitaires amicales.
        </p>
      </div>
      <div className="footer-partition left-partition">
        <p>Feel Hot.</p>
        <p>Be Hot.</p>
        <p>Dress Hot.</p>
      </div>
      <div className="footer-partition middle-partition">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Home</p>
        </Link>
        <Link to="/tops" style={{ textDecoration: "none" }}>
          <p>Tops</p>
        </Link>
        <Link to="/bottoms" style={{ textDecoration: "none" }}>
          <p>Bottoms</p>
        </Link>
        <Link to="/accessories" style={{ textDecoration: "none" }}>
          <p>Accessories</p>
        </Link>
        <Link to="/sale" style={{ textDecoration: "none" }}>
          <p>Sale</p>
        </Link>
      </div>
      <div className="footer-partition right-partition">
        <Link
          to="/contactus"
          style={{ textDecoration: "none", color: "white" }}
        >
          <p>Contact Us</p>
        </Link>
        <div>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><svg width="26" height="26" version="1.1" viewBox="0 0 512 512">
            <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z" />
          </svg></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><svg
            width="28"
            height="28"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.7 56.7"
            enableBackground="new 0 0 56.7 56.7"
          >
            <g>
              <path
                d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
              />
              <circle cx="41.5" cy="16.4" r="2.9" />
              <path
                d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
              />
            </g>
          </svg>
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer"><svg width="28" height="28" version="1.1" viewBox="0 0 512 512">
            <path d="M255.998,0.001c-141.384,0 -255.998,114.617 -255.998,255.998c0,108.456 67.475,201.171 162.707,238.471c-2.24,-20.255 -4.261,-51.405 0.889,-73.518c4.65,-19.978 30.018,-127.248 30.018,-127.248c0,0 -7.659,-15.334 -7.659,-38.008c0,-35.596 20.632,-62.171 46.323,-62.171c21.839,0 32.391,16.399 32.391,36.061c0,21.966 -13.984,54.803 -21.203,85.235c-6.03,25.482 12.779,46.261 37.909,46.261c45.503,0 80.477,-47.976 80.477,-117.229c0,-61.293 -44.045,-104.149 -106.932,-104.149c-72.841,0 -115.597,54.634 -115.597,111.095c0,22.004 8.475,45.596 19.052,58.421c2.09,2.535 2.398,4.758 1.776,7.343c-1.945,8.087 -6.262,25.474 -7.111,29.032c-1.117,4.686 -3.711,5.681 -8.561,3.424c-31.974,-14.884 -51.963,-61.627 -51.963,-99.174c0,-80.755 58.672,-154.915 169.148,-154.915c88.806,0 157.821,63.279 157.821,147.85c0,88.229 -55.629,159.232 -132.842,159.232c-25.94,0 -50.328,-13.476 -58.674,-29.394c0,0 -12.838,48.878 -15.95,60.856c-5.782,22.237 -21.382,50.109 -31.818,67.11c23.955,7.417 49.409,11.416 75.797,11.416c141.389,0 256.003,-114.612 256.003,-256.001c0,-141.381 -114.614,-255.998 -256.003,-255.998Z" />
          </svg></a>
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p id="logo">TEMPUS™</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
