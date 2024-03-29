import React, { Component } from 'react';

class GeneralInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
          editedName: '',
          editedEmail: '',
          editedPhoneNumber: '',
        };
      }
      handleNameChange = (event) => {
        this.setState({ editedName: event.target.value });
      };
    
      handleEmailChange = (event) => {
        this.setState({ editedEmail: event.target.value });
      };
    
      handlePhoneNumberChange = (event) => {
        this.setState({ editedPhoneNumber: event.target.value });
      };
      handleSubmit = () => {
        const { editedName, editedEmail, editedPhoneNumber } = this.state;
        this.props.onUpdate({
          name: editedName,
          email: editedEmail,
          phoneNumber: editedPhoneNumber,
        });
      };
    render(){
        const { name, email, phoneNumber } = this.props;
        const { editedName, editedEmail, editedPhoneNumber } = this.state;
        return (
            <div className="flex flex-col w-3/5 ml-16">
              <label>Name</label>
              <input className='border-2 bg-gray-200' type="text" value={editedName} onChange={this.handleNameChange} />
              <label>E-mail</label>
              <input className='border-2 bg-gray-200' type="text" value={editedEmail} onChange={this.handleEmailChange} />
              <label>Phone Number</label>
              <input
              className='border-2 bg-gray-200'
                type="text"
                value={editedPhoneNumber}
                onChange={this.handlePhoneNumberChange}
              />
              <button className='bg-verdigris mx-8 my-4' onClick={this.handleSubmit}>Add</button>
            </div>
          );
    }
}

export { GeneralInfo }