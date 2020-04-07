
import React from 'react';
import './contact.css'


export default class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state={
     firstName:'',
     lastName:'',
     email:'',
     phoneNumber:'',
     message:'',
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

// activation and deactivation of floating lables.
activateField= event=>{
this.setState({[`${event.target.name}Active`]:true});
}

deActivateField= event=>{
  this.setState({[`${event.target.name}Active`]:false});
}

disableFocus= event=> {
  if (event.target.value ===""){
    this.deActivateField(event);
  }
}
// ...ends here.

// first Name.
fNameChangeHandler=(event)=>{
  this.setState({firstName: event.target.value})
}
// ....ends


// start validating Last Name field onChange and onBlur.
validateLNField=()=>{
  this.setState({lastNameError : !this.state.lastName?
     "* Last Name is required." : ""
    })
  }
lNameOnBlur= event=>{
  this.disableFocus(event);
   this.validateLNField();
}

lNameChangeHandler= (event)=>{
   this.setState({lastName: event.target.value}, ()=>{
    this.validateLNField(); 
   })
 }
// ...validation ends here.


 //  start validating email.
 validEmail= () => {
 // RegExp for email validation.
 const emailRegex= RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
 this.setState({emailError:!emailRegex.test(this.state.email)?
 "* Please enter a valid email." : ""
 });
}


emailOnBlur=(event)=> {
this.disableFocus(event);
this.validEmail();
}

emailChangeHandler=(event)=>{
  this.setState({email:event.target.value},() =>{
   this.validEmail();  
  })
}
//email validation ends here.


//start phoneNumber validation.
validPhoneNumber=()=>{
// U.S phone Numbers Only(10 digits validation).
  const phoneNumberRegExp= (/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/);
  this.setState({phoneNumberError:!this.state.phoneNumber.match(phoneNumberRegExp)?
  "* Valid phone number is required." : ""
  });
  
}

phoneNumberOnBlur=(event)=> {
  this.disableFocus(event);
  this.validPhoneNumber();
  }
 
phoneNumberChangeHandler= (event)=>{
  this.setState({phoneNumber:event.target.value},()=>{
    this.validPhoneNumber();
  })
}


// start validating message field onChange and onBlur.
validateMessageField=()=>{
  this.setState({messageError: !this.state.message?
     "* Please leave us a message." : ""
    })
  }
messageOnBlur= event=>{
  this.disableFocus(event);
   this.validateMessageField();
}

messageChangeHandler= (event)=>{
   this.setState({message: event.target.value}, ()=>{
    this.validateMessageField(); 
   })
 }
// ...validation ends here.


requiredFields=()=>{
     // Access field values here and validate them
  const {lastName, email, phoneNumber}=this.state;
  if (email && phoneNumber && lastName) {
  return true;
  } 
  // return false; /* same as  writing else {return false}*/
  return false;
}


onKeyPress=(event) => {
  if (event.which === 13){ /* prventing key 13 from submittng form when pressing Enter*/ 
    event.preventDefault();
  };
}
  

handleSubmit= (event)=>{
  event.preventDefault();
    console.log(this.state);
  // clearing form after submitting.
  this.setState({
    firstName:'',
     lastName:'',
     email:'',
     phoneNumber:'',
     message:'',
    });
  };



  render () {

        // enable submit after required fields are filled out.
        const isEnabled = this.requiredFields();
    return (
        <form className="formContainer" onKeyPress= {this.onKeyPress} onSubmit={this.handleSubmit}>
          <h1>Contact Us:</h1>
          <div className="fieldGroup">
             <input 
             name="firstName"
             type="text"
             value={this.state.firstName}
             onFocus= {this.activateField}
             onBlur= {this.disableFocus}
             onChange={this.fNameChangeHandler} noValidate/>
             <label htmlFor= "firstName" className={this.state.firstNameActive? "active" : "" }>First Name:</label>
          </div>
            

          <div className="fieldGroup">
             <input 
             name="lastName"
             type="text"
             value={this.state.lastName}
             onFocus= {this.activateField}
             onBlur= {this.lNameOnBlur}
             onChange={this.lNameChangeHandler} noValidate/>
             <label htmlFor= "lastName" className={this.state.lastNameActive? "active" : "" }> Last Name:</label>
             <span style={{fontSize:"8px",color:"red"}}> {this.state.lastNameError} </span>
          </div>
         
         
            
        
          
          <div className="fieldGroup">
             <input 
             name="email"
             value={this.state.email}
             type="text"
             onFocus= {this.activateField}
             onBlur= {this.emailOnBlur}
             onChange={this.emailChangeHandler} noValidate/>
             <label htmlFor= "firstName" className={this.state.emailActive? "active" : "" }>Email:</label>
             <span style={{fontSize:"8px",color:"red"}}> {this.state.emailError}</span>
          </div>
          
         
          
         
          
          <div className="fieldGroup">
             <input 
             name="phoneNumber"
             type="text"
             value={this.state.phoneNumber}
             onFocus= {this.activateField}
             onBlur= {this.phoneNumberOnBlur}
             onChange={this.phoneNumberChangeHandler} noValidate/>
             <label htmlFor= "phoneNumber" className={this.state.phoneNumberActive? "active" : "" }>Phone Number</label>
             <span style={{fontSize:"8px",color:"red"}}> {this.state.phoneNumberError}</span>
          </div>
            
          <div className="fieldGroup">
            
            <textarea 
              name="message"
              value={this.state.message}
              onFocus= {this.activateField}
              onBlur= {this.messageOnBlur}
              onChange={this.messageChangeHandler} noValidate>
              </textarea>
              <label htmlFor="message" className={this.state.messageActive? "active" : "" }>Message</label>
              <span style={{fontSize:"8px",color:"red",display:"block"}}> {this.state.messageError} </span>
          </div>

  <button type="submit" disabled={!isEnabled}> Submit </button>
       
  </form>
  )
 }
}



