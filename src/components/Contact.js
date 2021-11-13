//[TODO]: Change ABC name with firm name
import { useState } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet';
import "./Contact.css"

 const Contact = () =>{
   // const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  {/*
  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  } */}
    return (
	<div>
	  <Helmet>
	    <title> Law Firm | Contact </title>
	  </Helmet>
	<div className="Contact">
        <h3> Want to learn more about how ABC Law can help you?  Please call, email or use the contact form below. </h3>
	<div className="contact-form">
	<div className="contact-form-1">
	<form onSubmit={handleSubmit}>
          <label>
            <p>Name</p>
            <input className="small-font-text" type="text" name="Fname" placeholder="First Name" required/> 
            <input className="small-font-text" type="text" name="Lname" placeholder="Last Name" required/>
          </label>
	  <label>
	    <p>Email</p>
	    <input type="email" name="email" required/>
	 </label>
	<label>
	 <p>Message </p>
	 <textarea name="message"/>
	</label> <br />
        <button className="ContactSubmit" type="submit">Submit</button>
	</form>
	</div>
	<div className="contact-form-2">
	   <h2> PHONE <br /></h2><p className="contact-form-2-content"> (91) 9616000016</p>
	   <h2> EMAIL <br /></h2><p className="contact-form-2-content"> lawfirmjabalpur@gmail.com</p>
	   <h2> ADDRESS </h2> <p className="contact-form-2-content"> Legal Associate 14 Narsingh <br/> Building Ranital Square <br />
								    Jabalpur Madhya Pradesh </p>
	</div>
	</div>
     </div> </div>
    )
}
export default Contact;
