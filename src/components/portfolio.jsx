import React from "react";

//import stock
import f1 from "../img/f1.jpg";
import f2 from "../img/f2.jpg";
import f3 from "../img/f3.jpg";
import f4 from "../img/f4.jpg";
import f5 from "../img/f5.jpg";
import f6 from "../img/f6.jpg";
import f0 from "../img/fFinal.jpg";

import sf0 from "../img/endSF.jpg";
import sf1 from "../img/sf1.jpg";
import sf2 from "../img/sf2.jpg";
import sf3 from "../img/sf3.jpg";
import sf5 from "../img/sf5.jpg";
import sf6 from "../img/sf6.jpg";

import r1 from "../img/r1.jpg";
import r2 from "../img/r2.jpg";
import r3 from "../img/r3.jpg";
import r4 from "../img/r4.jpg";
import r0 from "../img/aUnixPic.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <div className="line-mf">
                </div>
                 <div className='title-s'>Here are a few of my projects</div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-4">
            <div className="work-box">
                <a href={sf0} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={sf0} alt="" className="img-fluid" />
                  </div>
                </a>
                <a
                  href={sf1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sf2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sf3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sf5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sf6}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Health and Fitness Web Application</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python Django SQLite
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a
                            href="https://github.com/Berkeley19/Sourcefit"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="inner">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={f0} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={f0} alt="" className="img-fluid" />
                  </div>
                </a>
                <a
                  href={f1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={f2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={f3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={f6}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="work-content">
                  <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Native TODO application</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Flutter SQFLite iOS Android
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a
                            href="https://github.com/Berkeley19/Task_Manager_flutter"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="inner">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={r0} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={r0} alt="" className="img-fluid" />
                  </div>
                </a>
                <a
                  href={r4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={r2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={r1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={r3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Unix System Programming in C</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            C
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a
                            href="https://github.com/Berkeley19/unixCommandsInC"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="inner">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
