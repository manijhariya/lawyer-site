//[TODO] Add Phone Number and email id in DetailAbout function
//[TODO] imagelink
import React from 'react'
import { Helmet } from 'react-helmet';
import "./about.css";


import ProfilePhoto from "../img/ProfilePhoto.jpg"

function About() {
    return (
	<div className = "about-section">
            <div className = "about-text-section">
                <h3 className = "about-section-heading">We Fight You Win</h3>
                <p className = "about-section-text">With more than a dozen attorneys and 
                    decades of experience, our knowledge translates to more cases won, 
                    higher settlements, and happier clients.</p>
                <p className = "about-section-text">An attorney can make or break a case based on how the case is documented, developed, and positioned for insurance companies and juries – we make sure that nothing is missed in your case and our results prove it.</p>
                <p className = "about-section-text" >
                It’s no surprise Bighorn Law was named in the Top 100 personal injury attorneys in the nation in 2020.
                </p>
                <button className = "about-section-text-btn">Our Story</button>
            </div>
            <div className = "about-img-section">
            </div>
        </div>
    )
}
function DetailAbout() {
	return (
	<div>
	  <Helmet>
	    <title> Law Firm | About </title>
	  </Helmet>
	<div className="about-container" align="left">
	 <div className="about-container-section-1">
	 <h1>Vipul Saraswat </h1>
         <h3>(91) Phone Number | Email-id </h3>
	 <p className="AboutContent"> Vipul is a seasoned employment litigator and trusted advisor to both individuals and companies. 
             </p> <p className="AboutContent">
	      Vipul has been practicing employment law exclusively for his entire legal career.  He has handled hundreds of employment disputes involving sexual harassment, discrimination, equal pay, trade secrets, whistleblowers, retaliation and restrictive covenants, among others.  He is deeply committed to every case that he selects and optimizes the litigation strategy for his client’s goals, whether that is an early resolution or taking a case to trial.  
Vipul translates complex legal issues into business-minded solutions. 
            </p><p className="AboutContent">  
            He advises individual and corporate clients on all types of employment issues, including employment policies and handbooks, internal investigations, terminations, disability accommodations, and employment agreements.  
Vipul conducts workplace training programs on harassment prevention, leadership and management skills, diversity, inclusion and respect in the workplace.  He is a frequent presenter at legal and industry conferences on employment law and compliance. 
Prior to founding Law Firm, Vipul was a partner at Baker McKenzie, a global law firm, and Littler Mendelson, the world’s largest employment and labor practice.  He graduated from Columbia Law School and Duke University. 
 </p>
	 </div>
	 <div className="about-cotainer-section-2">
	 <img className="profilephoto" src={ProfilePhoto} alt="ProfilePhoto"></img>
	 <h4 className="eduction-headers"> Eduction
	 <p className="educationContent"> Columbia Law School, J.D., 2008 <br/>
			Duke University, B.A.. 2005 </p> </h4>
	<h4 className="eduction-headers"> Court Admission <br />
	<p className="educationContent"> High Court Jabalpur 2010 </p> </h4>
	 </div>
	</div>
	</div>
)
}

export default About
export {DetailAbout}
