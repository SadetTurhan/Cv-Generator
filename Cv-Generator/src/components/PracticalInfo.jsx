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
      <div className="flex flex-col w-3/5 ml-16">
        <label>Company Name</label>
        <input className='border-2 bg-gray-200' type="text" value={editedCompanyName} onChange={this.handleCompanyNameChange} />
        <label>Title</label>
        <input className='border-2 bg-gray-200' type="text" value={editedTitle} onChange={this.handleTitleChange} />
        <label>Date</label>
        <input className='border-2 bg-gray-200' type="text" value={editedDate} onChange={this.handleDateChange} />
        <label>Responsibilities</label>
        <input
        className='border-2 bg-gray-200'
          type="text"
          value={editedResponsibilities}
          onChange={this.handleResponsibilitiesChange}
        />
        <button className='bg-verdigris mx-8 my-4' onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export  { PracticalInfo };
