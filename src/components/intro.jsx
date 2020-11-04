import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import Pdf from '../resume/Berkeley_Vago_Hughes_CV_Resume.pdf';

class Intro extends React.Component {
  render() {
    return (
      //<div id="home" className="intro route bg-image " style={{backgroundImage: "url("+ bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
    <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Berkeley Vago-Hughes</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
              <div className="socialsIntro">
                <ul>
                  <li>
                    <a
                      href="https://github.com/Berkeley19"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-github-outline"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/berkeley-vago-hughes-058977159/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-linkedin-outline"></i>
                      </span>
                    </a>
                    
                  </li>
                  <li>
                    <a
                      href={Pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-document-text"></i>
                      </span>
                    </a>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
