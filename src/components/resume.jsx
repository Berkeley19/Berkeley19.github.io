import React, { Component } from 'react';
export default  class Resume extends Component {

constructor() {
    super();
    this.state = {
        education: [
            { UniversityName: "University of East Anglia", Specialization: "Computer Science with a Year Abroad", TimeInEducation: "Sep. 2017 - July 2020", RelevantModules: "ffsa" },
            { UniversityName: "Vreiji Universiteit Amsterdam", Specialization: "International Computer Science Student", TimeInEducation: "Feb. 2020 - July 2020", RelevantModules: "asd" },
            { UniversityName: "Hong Kong University", Specialization: "International Computer Science Student", TimeInEducation: "Aug. 2019 - Dec. 2020", RelevantModules: "Noice" },
        ],
        work: [
            { CompanyName: "Legerity Limited", Role: "Software Engineer Intern", TimeAtJob: "July. 2019 - Aug. 2019", WorkConducted: "Took fleet" },
        ]
    };
    }

  render() {

    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                this.state.education && this.state.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.Specialization}
                          <span>&bull;</span> <em className="date">{item.TimeInEducation}</em></p>
                          <p>
                          {item.RelevantModules}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                this.state.work && this.state.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
      </section>
    );
  }
}