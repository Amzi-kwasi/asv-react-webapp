import { Link } from "react-router-dom";
import React from 'react';





const LearnCd = () => {
    return (
      <>

<section className="sece">
	<span className="spn"></span>
	<span className="spn"></span>
	<span className="spn"></span>
	<span className="spn"></span>
	<span className="spn"></span>
	<span className="spn"></span>
	<span className="spn"></span>
	<span className="spn"></span>
	<span className="spn"></span>
	<span className="spn"></span>

</section>

<a style={{color:"white", top:"20px", position:"fixed", right:"20px"}}>
				Sign-in
			  </a>

      <div className="contt">
   	   	<h1>Learn to Code</h1>
   	   	<p>Welcome to our code tutorials.</p>
        <Link to="/library">
   	   	<button className="butn" type="button"><a className="sa"></a>BACK</button>
   	   </Link>
	   <Link to="/tut_pg">
       <button className="butn" type="button"><a className="sa"></a> EXPLORE</button>
   	   </Link>
	   <br/>

	   <p style={{fontSize:"25px", color:"grey"}}>Already have an account?</p>
	   <Link to="/">
	   <center style={{color:"green"}}>Sign-up</center>
	   </Link>
	   </div>
   
      </>
    )
  }
  
  export default LearnCd;