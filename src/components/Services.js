import React from 'react'
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import SexualHarr from "../img/sexual_harr.jpg";
import FamilyLaw from "../img/familylaw.jpg";
import Divorce from "../img/divorce.jpg";
import Visitation from "../img/visitation.jpg";
import CrimeDef from "../img/crimdef.jpg";
import Dui from "../img/dui.jpg";


import "./services.css"
function Services() {
    return (
        <div className = "our-services">
            <h3 className = "our-services-heading">How we help</h3>
            <div className = "our-services-cards">
                <div className = "our-services-card">
		    <Link to="/Services">
                    <img src = {FamilyLaw} alt = "img" className = "services-image"></img>
                    <div className = "card-overlay">
                    </div>
                    <p className = "our-services-card-heading">Family Law</p>
                    <p className = "our-services-card-text">Learn more</p>
		    </Link>
                </div>
                <div className = "our-services-card">
		    <Link to="/Services">
                    <img src = {SexualHarr} alt = "img" className = "services-image"></img>
                    <div className = "card-overlay">
                    </div>
                    <p className = "our-services-card-heading">Sexual Harrasment</p>
                    <p className = "our-services-card-text">Learn more</p>
		   </Link>
                </div>
                <div className = "our-services-card">
		    <Link to="/Services">
                    <img src = {CrimeDef} alt = "img" className = "services-image"></img>
                    <div className = "card-overlay">
                    </div>
                    <p className = "our-services-card-heading">Crime and Defence</p>
                    <p className = "our-services-card-text">Learn more</p>
		    </Link>
                </div>
                <div className = "our-services-card">
		    <Link to="/Services">
                    <img src = {Divorce} alt = "img" className = "services-image"></img>
                    <div className = "card-overlay">
                    </div>
                    <p className = "our-services-card-heading">Divorce</p>
                    <p className = "our-services-card-text">Learn more</p>
		    </Link>
                </div>
                <div className = "our-services-card">
		    <Link to="/Services">
                    <img src = {Visitation} alt = "img" className = "services-image"></img>
                    <div className = "card-overlay">
                    </div>
                    <p className = "our-services-card-heading">Child Visitation</p>
                    <p className = "our-services-card-text">Learn more</p>
		    </Link>
                </div>
                <div className = "our-services-card">
		    <Link to="/Services">
                    <img src = {Dui} alt = "img" className = "services-image"></img>
                    <div className = "card-overlay">
                    </div>
                    <p className = "our-services-card-heading">Disputes and Investigations</p>
                    <p className = "our-services-card-text">Learn more</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function DetailServices() {
    function MyImage(props) 
    {
	const userType = props.type;
	if (userType === "1"){
		return <img className="tab-image-1" src={FamilyLaw} alt=""/>;
	}
	if (userType === "2"){
		return <img className="tab-image-1" src={SexualHarr} alt=""/>;
	}
	if (userType === "3"){
		return <img className="tab-image-1" src={CrimeDef} alt=""/>;
	}
	if (userType === "4"){
		return <img className="tab-image-1" src={Divorce} alt=""/>;
	}
	if (userType === "5"){
		return <img className="tab-image-1" src={Visitation} alt=""/>;
	}
	if (userType === "6"){
		return <img className="tab-image-1" src={Dui} alt=""/>;
	}
	return <img className="tab-image-1" alt="Hello" />;
    }
    function MyContent(props){
    	const userType = props.type;
	if (userType === "1"){
		return <div> <h4> Family Law Advocacy You Can Trust </h4>
Getting through life’s multifaceted changes is made less stressful with a knowledgeable legal advocate on your side. At DeRoberts Law Firm, our success has come from compassionately attending to our clients’ needs while aggressively litigating when necessary, making family transitions as smooth as possible.

<br /> <br />
Due to the sensitivity of family relationships and the costs of litigation, we do our best to achieve the outcomes you want without going to trial. A lot of our success in negotiation has come from preparing for every case as if we were going to trial. Building up a strong case gives you leverage in negotiations and usually leads to favorable settlements.

<br /> <br />
Transitioning from a two-parent family to being a single-parent family can be difficult emotionally and financially. We are here for you every step of the way. We help you anticipate and address changes to your tax status, health benefits and credit rating as well as the amount of time you spend with your children, and the types of activities you get to do with them.

 </div>;
	}
	if (userType === "2"){
		return <div> <h4> Sexual Harassment </h4>
Sexual harassment continues to be one of the most pervasive problems in our workplaces.  Many people who experience sexual harassment at work unfortunately feel they must suffer in silence or risk retaliation for coming forward.  Our firm can help whether you have experienced sexual harassment or retaliation for resisting a sexual advance or reporting harassing conduct.

<h4> WHAT IS SEXUAL HARASSMENT </h4>
Sexual harassment is illegal under Title VII, the New York State Human Rights Law, the New York City Human Rights Law, and other state and local laws.  Generally, unlawful sexual harassment includes unwelcome or offensive conduct based on sex, sexual orientation, gender identity or expression, pregnancy or transgender status.  Sexual harassment can include unwanted sexual advances, unwelcome touching, demeaning comments, sex stereotyping or hostile actions directed at someone because of their sex.  

There is no place for sexual harassment in the workplace, whether done by a manager, executive, co-worker, subordinate, client or contractor.   Legal protections against sexual harassment extend beyond the physical workplace.  Behavior that occurs offsite or online can also constitute harassment.

<h4>HOW WE HELP </h4>
We represent employees and executives who have been subjected to sexual harassment or suffered retaliation for opposing or reporting such conduct.   We also work with companies to remedy and prevent sexual harassment through investigations, trainings and policies. </div>;
	}
	if (userType === "3"){
		return <div> <h4> Vigorous Defense For Any Criminal Charge </h4>
A criminal conviction has the potential for long-term and major side effects. In addition to jail or prison, a criminal record can affect your current job, as well as future educational, employment and housing opportunities. You may face fines, restrictions on your driving privileges and many other hardships.
<br /> <br />
DeRoberts Law Firm, located in Syracuse, New York, can fight your criminal charges and the consequences. We do this by offering you experience, dedication and the personal attention of our attorney throughout the duration of your case.
<br /> <br />
Drunk driving (DWI) charges – Including repeat or felony DWI, how to fight your DWI, first-offense DWI charges, when to refuse or not refuse a DWI test, other alcohol-related charges, drinking charges for those under the age of 21, retaining your driving privileges and making sure you understand the potential DWI penalties
Drug crimes – Defense for drug possession, drug trafficking or drug conspiracy related to marijuana, cocaine, crack cocaine, meth, heroin and prescription narcotics
<br /> <br />
Criminal defense in federal court – Defending those with federal drug charges, fraud or other white collar crimes and making sure you understand the potential federal sentence for your charges
Sex crimes – Includes rape, date rape, sexual abuse and child sexual abuse, as well as prostitution/solicitation and indecent exposure

</div>;
	}
	if (userType === "4"){
		return <div> <h4> Give Happy Ending to Your Beautiful Relationship </h4> Legal issues involving your family are some of the most emotionally trying times you will ever face. <br/> <br/>
	Law Firm is here to ease the burden of stress when you are contending with the many facets of divorce disputes. <br/><br/>
In New York, each party is entitled to half of the marital estate. The marital estate is defined as all of the assets that were obtained during the course of the marriage. The valuation of the assets is often one of the most highly contested aspects of any divorce. Law Firm has more than 25 years of experience. He has the skill and knowledge necessary to make the most favorable asset valuation for your needs possible.
	  </div>
	}
	if (userType === "5"){
		return <div> <h4> Vigation and Child Care </h4> The first step to choosing a child care provider is determining whether potential providers have a license from your state or local government. Licensing does not guarantee quality; however, it sets minimum requirements and ensures that programs are monitored for compliance with these requirements.
<br />
Child care licensing regulations cover many topics, including the following:
<br />
The number of children one adult can care for a time (child-staff ratio) and the number of children allowed in a class (group size)
<br /><br/>
Child care licensing requirements vary from state to state. The National Database of Child Care Licensing Regulations includes contact information and websites for state licensing departments. You can choose your state and view, download, and search the child care licensing regulations that apply to child care centers, family child care homes, and other licensed child care programs.
<br />
You can also contact the government agency responsible for child care licensing to find out whether a provider has a license and view the provider’s licensing record. Most states include records of child care licensing inspections in the search results for each provider. States without records available on the web can give you this information over the phone or at the agency office.



</div>;
	}
	if (userType === "6"){
		return <div> <h4> Law Enforcement solutions </h4> Law enforcement investigations close cases and can prevent new crimes from occurring. Training in research-based investigative procedures and access to tools and resources can help law enforcement officers carry out successful investigations.
<br /><br />
NIJ research enhances the forensic aspects of investigations and supports the creation and maintenance of investigative resources, such as manuals, databases and training courses.
<br /><br />
NIJ has funded research in several areas relevant to investigations, including crime mapping, forensic tool testing and evidence reliability. NIJ also directly funds some aspects of cold-case investigations.</div>;
	}
	return <p> "Undefined" </p>;
    }
    const [value,setValue] = React.useState("1");
    return (
	<div>
	  <Helmet>
	    <title> Law Firm | Services </title>
	  </Helmet>
        <div className="our-services-1">
	    <div className="our">
            <center><h3 className = "our-services-heading-1">How we help</h3></center>
            </div>
	    <div className="service-cotent">
	    <p className = "our-services-body"> <br/>We represent executives and employees in all types of employment disputes and advisory matters.  Some of our key practice areas are : <br /> <br /></p>
	    <Paper square>
        	<Tabs
          	value={value}
          	textColor="primary"
          	indicatorColor="primary"
          	onChange={(event,newValue) => {
            	setValue(newValue);
          	}}
        	>
          <Tab label="Family Law" value="1" />
          <Tab label="Sexual Harrasment" value="2" />
          <Tab label="Crime Defence" value="3" />
          <Tab label="Divorce" value="4" />
	  <Tab label="Visitation" value="5" />
	  <Tab label="Disputes and Investigations" value="6" />
        </Tabs>
        <div className="tab-body">
         <div className="tab-image">
           <MyImage type={value}/>
         </div>
         <div className="tab-content">
           <MyContent type={value}/>
         </div>
        </div>

      </Paper>
	</div>
	</div>
      </div>
    )
}

export default Services
export {DetailServices}
