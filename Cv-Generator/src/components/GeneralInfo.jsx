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
            <div className="flex flex-col w-2/5">
              <label>Name</label>
              <input type="text" value={editedName} onChange={this.handleNameChange} />
              <label>E-mail</label>
              <input type="text" value={editedEmail} onChange={this.handleEmailChange} />
              <label>Phone Number</label>
              <input
                type="text"
                value={editedPhoneNumber}
                onChange={this.handlePhoneNumberChange}
              />
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          );
    }
}

export { GeneralInfo }