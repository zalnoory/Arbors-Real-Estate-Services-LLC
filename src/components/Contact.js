
import React from 'react';

 import './contact.css'
import { setNestedObjectValues } from 'formik';




// U.S phone Numbers Only( 10 digits validation)
/*const phoneRegExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\{3}[\s\-]?\d{4}$/,*/





export default class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state={
     firstName:'',
     lastName:'',
     email:'',
     phoneNumber:'',
     message:'',
     firstNameError:'',
     lastNameError:'',
     emailError:'',
     phoneNumberError:'',
     messageError:'',
     firstNameActive:false,
     lastNameActive:false,
     emailActive:false,
     phoneNumberActive:false,
      messageActive:false,
     }
   
  }

activateField= event=>{

  this.setState({[`${event.target.name}Active`]:true});
}

deActivateField= event=>{
  this.setState({[`${event.target.name}Active`]:false});
}

disableFocus= event=>{
  if (event.target.value===""){
    this.deActivateField(event);
  }
}

  handleChange= (event)=>{
    let name= event.target.name;
    let value= event.target.value;
    this.setState({[name]: value});
  }
    

requiredFileds=()=>{
  const {lastName, email, phoneNumber, message }=this.state.fields;
  if( email && phoneNumber && lastName && message){
  return true;
  } 
  return false; /* same as  writing else {return false}*/
}


onKeyPress=(event) => {
  if (event.which === 13){ /* prventing key 13 from submittng form when pressing Enter*/ 
    event.preventDefault();
  }
}
  
  render () {
        // enable submit after required fields are filled out.
        const isEnabled= this.requiredFileds();


  return (
        <form className="formContainer" onKeyPress= {this.onKeyPress}>
          <h1>Contact Us:</h1>
          <div className="fieldGroup">
             <input 
             name="firstName"
             type="text"
             value={this.state.fields.firstName}
             onFocus= {this.activateField}
             onBlur= {this.disableFocus}
             onChange={this.handleChange} noValidate/>
             
             <label htmlFor= "firstName" className={this.state.firstNameActive? "active" : "" }>First Name:</label>
          </div>
            

          <div className="fieldGroup">
             <input 
             name="lastName"
             type="text"
             value={this.state.fields.lastName}
             onFocus= {this.activateField}
             onBlur= {this.disableFocus}
             onChange={this.handleChange} noValidate/>
             <label htmlFor= "lastName" className={this.state.lastNameActive? "active" : "" }>Last Name:</label>
          </div>
            
          <div className="fieldGroup">
             <input 
             name="email"
             type="text"
             value={this.state.fields.email}
             onFocus= {this.activateField}
             onBlur= {this.disableFocus}
             onChange={this.handleChange} noValidate/>
             <label htmlFor= "firstName" className={this.state.emailActive? "active" : "" }>Email:</label>
          </div>
            

          <div className="fieldGroup">
             <input 
             name="phoneNumber"
             type="text"
             value={this.state.fields.phoneNumber}
             onFocus= {this.activateField}
             onBlur= {this.disableFocus}
             onChange={this.handleChange} noValidate/>
             <label htmlFor= "phoneNumber" className={this.state.phoneNumberActive? "active" : "" }>Phone Number</label>
          </div>
            
          <div className="fieldGroup">
            
            <textarea 
              name="message"
              value={this.state.fields.message}
              onFocus= {this.activateField}
              onBlur= {this.disableFocus}
              onChange={this.handleChange} noValidate>
             
              </textarea>
              <label htmlFor="message" className={this.state.messageActive? "active" : "" }>Message</label>
          </div>

  <button disabled={!isEnabled}> Submit </button>
       
  </form>
  )
  }
}



