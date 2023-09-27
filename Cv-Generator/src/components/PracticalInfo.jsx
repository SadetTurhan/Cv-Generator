import React, { Component } from 'react';

class PracticalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedCompanyName: '',
      editedTitle: '',
      editedDate: '',
      editedResponsibilities: '',
    };
  }

  handleCompanyNameChange = (event) => {
    this.setState({ editedCompanyName: event.target.value });
  };

  handleTitleChange = (event) => {
    this.setState({ editedTitle: event.target.value });
  };

  handleDateChange = (event) => {
    this.setState({ editedDate: event.target.value });
  };

  handleResponsibilitiesChange = (event) => {
    this.setState({ editedResponsibilities: event.target.value });
  };

  handleSubmit = () => {
    const {
      editedCompanyName,
      editedTitle,
      editedDate,
      editedResponsibilities,
    } = this.state;
    this.props.onUpdate({
      companyName: editedCompanyName,
      title: editedTitle,
      date: editedDate,
      responsibilities: editedResponsibilities,
    });
  };

  render() {
    const { companyName, title, date, responsibilities } = this.props;
    const {
      editedCompanyName,
      editedTitle,
      editedDate,
      editedResponsibilities,
    } = this.state;

    return (
      <div className="flex flex-col w-2/5">
        <label>Company Name</label>
        <input type="text" value={editedCompanyName} onChange={this.handleCompanyNameChange} />
        <label>Title</label>
        <input type="text" value={editedTitle} onChange={this.handleTitleChange} />
        <label>Date</label>
        <input type="text" value={editedDate} onChange={this.handleDateChange} />
        <label>Responsibilities</label>
        <input
          type="text"
          value={editedResponsibilities}
          onChange={this.handleResponsibilitiesChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export  { PracticalInfo };
