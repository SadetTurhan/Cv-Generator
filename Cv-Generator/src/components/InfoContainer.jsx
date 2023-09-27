import React, { Component } from 'react';
import { GeneralInfo } from "./GeneralInfo"
import { EducationalInfo } from "./EducationalInfo"
import { PracticalInfo } from "./PracticalInfo"

class InfoContainer extends Component {
  constructor(props) {
  super(props);

  this.state = {
    generalInfo: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
    },
    education: {
      schoolName: 'University of Example',
      titleOfStudy: 'Computer Science',
      dateOfStudy: '2015 - 2019',
    },
    experience: {
      companyName: 'Tech Company',
      title: 'Software Engineer',
      responsibilities: 'Developed web applications.',
      date: '2020 - Present',
    },
  };
}
//handler functions 

handleGeneralInfoUpdate = (data) => {
  this.setState({
    generalInfo: data,
  });
};
handleEducationInfoUpdate = (data) => {
  this.setState({
    education: data,
  });
};
handlePracticalInfoUpdate = (data) => {
  this.setState({
    experience: data,
  });
};
//

  render(){
    const { generalInfo, education, experience } = this.state;
    return (
      <div className="grid grid-cols-3 gap-0">
      <div className="rounded-lg bg-pistachio ml-8 p-8 mt-8 border-2 border-black">
        <GeneralInfo {...generalInfo} onUpdate={this.handleGeneralInfoUpdate} />
        <EducationalInfo {...education} onUpdate={this.handleEducationInfoUpdate}/>
        <PracticalInfo {...experience} onUpdate={this.handlePracticalInfoUpdate}/>
      </div>
            <div className="rounded-lg col-span-2 border-2 border-black mx-8 bg-pistachio mt-8">
               <div className="border-2 border-black m-8 bg-ghostWhite">
                  <p className='text-center'>Personal Info</p>
                    <div className='border-2 border-black'>
                      <p>{this.state.generalInfo.name}</p>
                      <p>{this.state.generalInfo.email}</p>
                      <p>{this.state.generalInfo.phoneNumber}</p>
                    </div>
               </div>
               <div className="border-2 border-black m-8 bg-ghostWhite">
                  <p className='text-center'>Educational Info</p>
                    <div className='border-2 border-black'>
                      <p>{this.state.education.schoolName}</p>
                      <p>{this.state.education.titleOfStudy}</p>
                      <p>{this.state.education.dateOfStudy}</p>
                    </div>
               </div>
               <div className="border-2 border-black m-8 bg-ghostWhite">
                  <p className='text-center'>Work History</p>
                    <div className='border-2 border-black'>
                      <p>{this.state.experience.companyName}</p>
                      <p>{this.state.experience.title}</p>
                      <p>{this.state.experience.date}</p>
                      <p>{this.state.experience.responsibilities}</p>
                    </div>
               </div>
            </div>
      </div>
    );
  }
}
  
  export { InfoContainer }
  