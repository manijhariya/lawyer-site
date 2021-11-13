import React from 'react';
import "./Form.css"
export const Form = ({ onSubmit }) => {
return (
<form onSubmit={onSubmit}>
  <div className="form-group">
      <label htmlFor="name">Name</label> <br />
    <input className="form-control" id="name" />
  </div> 
  
  <div className="form-group">
    <label htmlFor="email">Phone Number</label> <br/>
    <input type="email" className="form-control" id="email"
     placeholder="(91) xxxxxxx"
    />
</div>
  <div className="form-group">
    <label htmlFor="message">Short Message</label> <br/>
    <textarea className="form-control" id="message"
     placeholder="Tell us in brief" 
    />
  <br />
</div>
  <div className="form-group">
    <button className="form-control btn btn-primary" type="submit">
      Submit
    </button>
</div>
</form>
);
};
export default Form;
