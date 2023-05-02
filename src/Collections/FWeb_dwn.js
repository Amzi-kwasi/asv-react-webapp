import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import React from 'react';
import ScrollToTop from "react-scroll-to-top"
import TNav from "../component/topnav";
import "../animate.min.css";




const downloadTxtFile = () => {
    // text content
    const texts = ["line 1", "line 2", "line 3"]
// file object
    const file = new Blob(texts, {type: 'text/plain'});
// anchor link
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "ASVL-Ecommerce" + Date.now() + ".zip";
// simulate link click
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}



const FWeb = () => {
    return (
      <>
      <TNav />
      <div className="topnav" id='mxw_nav'>
        <Link to="/"><a><i className='fa fa-home'></i>&ensp;Home</a></Link>
        <Link to="/library"><a><i className='fa fa-book'></i>&ensp;Library</a></Link>
        <Link to="/contact"><a><i className='fa fa-phone'></i>&ensp;Contact</a></Link>
        <Link to="/dic"><a><i className='fa fa-search-plus'></i>&ensp;ITD</a></Link>
        <Link to="/collection"><a className="active"><i className='fa fa-clone'></i>&ensp;Tools</a></Link>
    </div>
    <br className="br"/>
    <br className="br"/>
    <div className="sub-nav">
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><Link to="/website"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Website</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Free Website Temp</a>
    </div>
    <br/>
    <br/>


    <div className="page-heading product-heading header-text animate__animated animate__zoomIn">
      <div className="container" >
        <div className="row">
          <div className="col-md-12">
            <div className="text-content">
              <h2>Free Website Templates</h2>
            </div>
          </div>
        </div>
      </div>
    </div>


      <br/>
      <br/>


<div className="about" id="efl">
    <div className="container">
    <div className="row">

<div className="col-lg-6">
  <img src={require('../img/web_temp/eflyer.png')} className="fweb_img" alt=""/>
</div>

<div className="col-lg-6">
<br/>

    <h5 style={{color:"#007bb5", textAlign:"center", fontWeight:"700"}}>Eflyer Shopping Website</h5>
 <p>High quality HTML website templates created with the Bootstrap framework. Website templates are quick and easy solution that can help you to launch a website. They are affordable and can be easily edited even if you have very low knowledge of web development.

All our templates are very easy to use and customize. The code and files are well organized and structured, allowing you to start your project in no time.

Our templates are modern, 100% responsive, look beautiful on every screen size, work on all devices, big or small screens, laptops, tablets or mobile phones. Create any kind of website, whether it is corporate, personal portfolio, creative agency, startup business, digital studio or any other business that needs a creative and easy to use website.

</p>

<div>
     <button id="downloadBtn" className="cus-btn" onClick={downloadTxtFile} value="download" title="Download">Download Source Code</button>
</div>

</div>

</div>
</div>
</div>

<br/>

<br/>


<div className="about" id="gp">
    <div className="container">
    <div className="row">

<div className="col-lg-6">
  <img src={require('../img/web_temp/gp.png')} className="fweb_img" alt=""/>
</div>

<div className="col-lg-6">
<br/>

    <h5 style={{color:"#007bb5", textAlign:"center", fontWeight:"700"}}>GP</h5>
 <p>High quality HTML website templates created with the Bootstrap framework. Website templates are quick and easy solution that can help you to launch a website. They are affordable and can be easily edited even if you have very low knowledge of web development.

All our templates are very easy to use and customize. The code and files are well organized and structured, allowing you to start your project in no time.

Our templates are modern, 100% responsive, look beautiful on every screen size, work on all devices, big or small screens, laptops, tablets or mobile phones. Create any kind of website, whether it is corporate, personal portfolio, creative agency, startup business, digital studio or any other business that needs a creative and easy to use website.

</p>

<div>
     <button id="downloadBtn" className="cus-btn" onClick={downloadTxtFile} value="download" title="Download">Download Source Code</button>
</div>

</div>

</div>
</div>
</div>

<br/>
<br/>


<div className="about" id="crft">
    <div className="container">
    <div className="row">

<div className="col-lg-6">
  <img src={require('../img/web_temp/caraft.png')} className="fweb_img" alt=""/>
</div>

<div className="col-lg-6">
<br/>

    <h5 style={{color:"#007bb5", textAlign:"center", fontWeight:"700"}}>Caraft</h5>
 <p>High quality HTML website templates created with the Bootstrap framework. Website templates are quick and easy solution that can help you to launch a website. They are affordable and can be easily edited even if you have very low knowledge of web development.

All our templates are very easy to use and customize. The code and files are well organized and structured, allowing you to start your project in no time.

Our templates are modern, 100% responsive, look beautiful on every screen size, work on all devices, big or small screens, laptops, tablets or mobile phones. Create any kind of website, whether it is corporate, personal portfolio, creative agency, startup business, digital studio or any other business that needs a creative and easy to use website.

</p>

<div>
     <button id="downloadBtn" className="cus-btn" onClick={downloadTxtFile} value="download" title="Download">Download Source Code</button>
</div>

</div>

</div>
</div>
</div>

<br/>
<br/>


<div className="about" id="eb">
    <div className="container">
    <div className="row">

<div className="col-lg-6">
  <img src={require('../img/web_temp/ebusiness.png')} className="fweb_img" alt=""/>
</div>

<div className="col-lg-6">
<br/>

    <h5 style={{color:"#007bb5", textAlign:"center", fontWeight:"700"}}>ebusiness</h5>
 <p>High quality HTML website templates created with the Bootstrap framework. Website templates are quick and easy solution that can help you to launch a website. They are affordable and can be easily edited even if you have very low knowledge of web development.

All our templates are very easy to use and customize. The code and files are well organized and structured, allowing you to start your project in no time.

Our templates are modern, 100% responsive, look beautiful on every screen size, work on all devices, big or small screens, laptops, tablets or mobile phones. Create any kind of website, whether it is corporate, personal portfolio, creative agency, startup business, digital studio or any other business that needs a creative and easy to use website.

</p>

<div>
     <button id="downloadBtn" className="cus-btn" onClick={downloadTxtFile} value="download" title="Download">Download Source Code</button>
</div>

</div>

</div>
</div>
</div>

<br/>
<br/>


<div className="about" id="ldg">
    <div className="container">
    <div className="row">

<div className="col-lg-6">
  <img src={require('../img/web_temp/lodge.png')} className="fweb_img" alt=""/>
</div>

<div className="col-lg-6">
<br/>

    <h5 style={{color:"#007bb5", textAlign:"center", fontWeight:"700"}}>Lodge</h5>
 <p>High quality HTML website templates created with the Bootstrap framework. Website templates are quick and easy solution that can help you to launch a website. They are affordable and can be easily edited even if you have very low knowledge of web development.

All our templates are very easy to use and customize. The code and files are well organized and structured, allowing you to start your project in no time.

Our templates are modern, 100% responsive, look beautiful on every screen size, work on all devices, big or small screens, laptops, tablets or mobile phones. Create any kind of website, whether it is corporate, personal portfolio, creative agency, startup business, digital studio or any other business that needs a creative and easy to use website.

</p>

<div>
     <button id="downloadBtn" className="cus-btn" onClick={downloadTxtFile} value="download" title="Download">Download Source Code</button>
</div>

</div>

</div>
</div>
</div>

<br/>
<br/>



<div className="about" id="six">
    <div className="container">
    <div className="row">

<div className="col-lg-6">
  <img src={require('../img/web_temp/sixteen.png')} className="fweb_img" alt=""/>
</div>

<div className="col-lg-6">
<br/>

    <h5 style={{color:"#007bb5", textAlign:"center", fontWeight:"700"}}>Sixteen Clothing</h5>
 <p>High quality HTML website templates created with the Bootstrap framework. Website templates are quick and easy solution that can help you to launch a website. They are affordable and can be easily edited even if you have very low knowledge of web development.

All our templates are very easy to use and customize. The code and files are well organized and structured, allowing you to start your project in no time.

Our templates are modern, 100% responsive, look beautiful on every screen size, work on all devices, big or small screens, laptops, tablets or mobile phones. Create any kind of website, whether it is corporate, personal portfolio, creative agency, startup business, digital studio or any other business that needs a creative and easy to use website.

</p>

<div>
     <button id="downloadBtn" className="cus-btn" onClick={downloadTxtFile} value="download" title="Download">Download Source Code</button>
</div>

</div>

</div>
</div>
</div>

<br/>
<br/>



<div className="about" id="ust">
    <div className="container">
    <div className="row">

<div className="col-lg-6">
  <img src={require('../img/web_temp/ustora.png')} className="fweb_img" alt=""/>
</div>

<div className="col-lg-6">
<br/>

    <h5 style={{color:"#007bb5", textAlign:"center", fontWeight:"700"}}>Ustora</h5>
 <p>High quality HTML website templates created with the Bootstrap framework. Website templates are quick and easy solution that can help you to launch a website. They are affordable and can be easily edited even if you have very low knowledge of web development.

All our templates are very easy to use and customize. The code and files are well organized and structured, allowing you to start your project in no time.

Our templates are modern, 100% responsive, look beautiful on every screen size, work on all devices, big or small screens, laptops, tablets or mobile phones. Create any kind of website, whether it is corporate, personal portfolio, creative agency, startup business, digital studio or any other business that needs a creative and easy to use website.

</p>

<div>
     <button id="downloadBtn" className="cus-btn" onClick={downloadTxtFile} value="download" title="Download">Download Source Code</button>
</div>

</div>

</div>
</div>
</div>

<br/>
<br/>



<div className="about" id="ygh">
    <div className="container">
    <div className="row">

<div className="col-lg-6">
  <img src={require('../img/web_temp/yoghurt.png')} className="fweb_img" alt=""/>
</div>

<div className="col-lg-6">
<br/>

    <h5 style={{color:"#007bb5", textAlign:"center", fontWeight:"700"}}>Freeeze</h5>
 <p>High quality HTML website templates created with the Bootstrap framework. Website templates are quick and easy solution that can help you to launch a website. They are affordable and can be easily edited even if you have very low knowledge of web development.

All our templates are very easy to use and customize. The code and files are well organized and structured, allowing you to start your project in no time.

Our templates are modern, 100% responsive, look beautiful on every screen size, work on all devices, big or small screens, laptops, tablets or mobile phones. Create any kind of website, whether it is corporate, personal portfolio, creative agency, startup business, digital studio or any other business that needs a creative and easy to use website.

</p>

<div>
     <button id="downloadBtn" className="cus-btn" onClick={downloadTxtFile} value="download" title="Download">Download Source Code</button>
</div>

</div>

</div>
</div>
</div>

<br/>
<br/>







    <ScrollToTop smooth/>
       <div className="navbarc" id="myNavbarc">
             <Link to="/"><a className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone act" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div>
        
      
      </>
    )
  }
  
  export default FWeb;