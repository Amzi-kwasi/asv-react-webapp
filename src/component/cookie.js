import "../cookie.css";

var timeout = 10000;
setTimeout(function(){
document.getElementById("cookieNotice").style.display="none";
}, timeout);


// Set cookie consent
function acceptCookieConsent(){
	var cookiediv = document.getElementById("cookieNotice");
  
	cookiediv.style.display = "none";
}

function Cookie(){
    return(
        
<div id="cookieNotice" className="light display-right" >
  <div id="closeIcon" >
  </div>
  <div className="title-wrap">
    <h4>Cookie Consent</h4>
  </div>
  <div className="content-wrap">
    <div className="msg-wrap">
      <p>This website uses cookies or similar technologies, to enhance your browsing experience and provide personalized recommendations. By continuing to use our website, you agree to our  <a style={{color:"#115cfa"}}>Privacy Policy</a></p>
      <div className="btn-wrap">
        <button className="btn-primary" onClick={acceptCookieConsent} >Accept</button>
      </div>
    </div>
  </div>
</div>

        
    )
}

export default Cookie;