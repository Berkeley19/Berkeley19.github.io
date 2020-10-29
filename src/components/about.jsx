import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "First Class Honours graduate from the University of East Anglia. Finished up my final year as an international student at Hong Kong University and Vreiji Universiteit Amsterdam. I love to build exciting new software from websites to card games, while enjoying bouldering and tennis on the side. I've worked with a wide variety of programming languages/frameworks. For side-projects and prototypes I stick with Python/Javascript for efficiency, however whenever I need the most performance possible I go for C++."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
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

export default About;
