import React, { Component } from 'react';

class GeneralInfo extends Component{
    render(){
        const { name, email, phoneNumber } = this.props;
    return(
        <div className="flex flex-col w-2/5">
        <label>Name</label>
        <input></input>
        <label>E-mail</label>
        <input></input>
        <label>Phone Number</label>
        <input></input>
        </div>
    );
    }
}

export { GeneralInfo }