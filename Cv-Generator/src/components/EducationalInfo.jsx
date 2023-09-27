import React, { Component } from 'react';

class EducationalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedSchoolName: '',
      editedTitleOfStudy: '',
      editedDateOfStudy: '',
    };
  }

  handleSchoolNameChange = (event) => {
    this.setState({ editedSchoolName: event.target.value });
  };

  handleTitleOfStudyChange = (event) => {
    this.setState({ editedTitleOfStudy: event.target.value });
  };

  handleDateOfStudyChange = (event) => {
    this.setState({ editedDateOfStudy: event.target.value });
  };

  handleSubmit = () => {
    const { editedSchoolName, editedTitleOfStudy, editedDateOfStudy } = this.state;
    this.props.onUpdate({
      schoolName: editedSchoolName,
      titleOfStudy: editedTitleOfStudy,
      dateOfStudy: editedDateOfStudy,
    });
  };

  render() {
    const { schoolName, titleOfStudy, dateOfStudy } = this.props;
    const { editedSchoolName, editedTitleOfStudy, editedDateOfStudy } = this.state;

    return (
      <div className="flex flex-col w-3/5 ml-16">
        <label>School Name</label>
        <input type="text" value={editedSchoolName} onChange={this.handleSchoolNameChange} />
        <label>Title of Study</label>
        <input type="text" value={editedTitleOfStudy} onChange={this.handleTitleOfStudyChange} />
        <label>Date of Study</label>
        <input type="text" value={editedDateOfStudy} onChange={this.handleDateOfStudyChange} />
        <button className='bg-verdigris' onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export { EducationalInfo };
