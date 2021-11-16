import React from 'react';
import "./Form.css"
export const Form = ({ onSubmit }) => {
return (
<form onSubmit={onSubmit}>
  <div className="form-group">
      <label className="form-label" htmlFor="name">Name</label> <br />
    <input className="form-control" id="name" placeholder="Full Name"/>
  </div>
  <div className="form-group">
    <label className="form-label" htmlFor="phone">Phone Number</label> <br/>
    <input type="tel" className="form-control" id="phone" pattern="[0-9]{10}"
     placeholder="(91) xxxxxxx"
    />
</div>
  <div className="form-group">
    <label className="form-label" htmlFor="message">Short Message</label> <br/>
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
