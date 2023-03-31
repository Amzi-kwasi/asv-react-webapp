import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import React from 'react';
import ScrollToTop from "react-scroll-to-top"
import TNav from "../component/topnav";
import "../animate.min.css";
import background from "../img/slide-1.jpg";
// import background2 from "../img/slide-2.jpg";
// import background3 from "../img/slide-3.jpg";
// import { Helmet } from "react-helmet";





const Ecom= () => {
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
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>Website</a>
    </div>
    <br/>
    <br/>


    <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">

        
          <div className="carousel-item active" style={{ backgroundImage: `url(${background})` }}>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown">Grow Your Business</h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div>
                  <a href="/blog" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>


{/* <div style={{backgroundColor:"#262626" , color:"white",height:"250px", border:"2px solid gold"}}>
    <h2 style={{color:"gold", textAlign:"center"}}>Free Html Css Templates</h2>
    <br/>
    <p>All 100+ Html5 templates are absolutely 100% free. We have grouped the Website into catdegories: 
    You can use free templates for your commercial or personal or learning purposes. Please <Link to="/contact">contact</a> us if you have any question.
    </p>
</div> */}

<br/>
   <h5 className="blueviolet">Free Website Templates</h5>
   <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <Link to="/website"><li>All</li></Link>
              <li  class="filter-active">Ecommerce</li>
              <li>One Page</li>
              <li>Education</li>
              <li>Health</li>
            </ul>
          </div>
        </div>

<section className="collection-main" id="myUL">
            <div className="collection-main-item">
                    <Link to="/fweb#efl"><img src={require('../img/web_temp/eflyer.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
                    </Link>
            </div>
            <div className="collection-main-item">
                    <Link to="/fweb#gp"><img src={require('../img/web_temp/gp.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item">
            <Link to="/fweb#crft"><img src={require('../img/web_temp/caraft.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>

            <div className="collection-main-item">
                <Link to="/fweb#eb"><img src={require('../img/web_temp/ebusiness.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>

            <div className="collection-main-item">
                <Link to="/fweb#ldg"><img src={require('../img/web_temp/lodge.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item">
                <Link to="/fweb#six"><img src={require('../img/web_temp/sixteen.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item">
                <Link to="/fweb#ust"><img src={require('../img/web_temp/ustora.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div> 
           
            
            <div className="collection-main-item">
                <Link to="/fweb"><img src={require('../img/web_temp/furni.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
          
       
            <div className="collection-main-item">
                <Link to="/fweb"><img src={require('../img/web_temp/malefash.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item">
                <Link to="/fweb"><img src={require('../img/web_temp/tropiko.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            

        </section>


<br/>
<br/>
        <div className="col-lg-8 text-center text-lg-right animate__animated animate__fadeInLeft">
        <div className="d-inline-flex align-items-center">
            <div className="d-inline-flex flex-column text-center pr-3 ">
                <a className="btn btn-lg btn-primary mt-3 mt-md-4 px-4 registerbtn" >Create your own website</a>
            </div>
        </div>
    </div>

   


    <ScrollToTop smooth/>
       <div className="navbarc" id="myNavbarc">
             <Link to="//fweb"><a className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone act" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div>
        
      
      </>
    )
  }
  
  export default Ecom;