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





const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  };


  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

const downloadTxtFile = () => {
    // text content
    const texts = ["line 1", "line 2", "line 3"]
// file object
    const file = new Blob(texts, {type: 'text/plain'});
// anchor link
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "ASVL-Ecommerce" + Date.now() + ".txt";
// simulate link click
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}

 function ecom(){
    document.getElementById("ecm").style.display="flex";
    document.getElementById("all-item").style.display="none";
    document.getElementById("ecm-a").classList.add("filter-active")
    document.getElementById("all-btn").classList.remove("filter-active")
 }

function all(){
    document.getElementById('all-item').style.display="flex";
    document.getElementById('ecm').style.display="none";
    document.getElementById("all-btn").classList.add("filter-active")
    document.getElementById("ecm-a").classList.remove("filter-active")
}

const Website = () => {
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
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Website</a>
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


<br/>
   <h5 className="blueviolet">Free Website Templates</h5>
         
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li onClick={all} className="filter-active" id="all-btn">All</li>
              <li onClick={ecom} id="ecm-a">Ecommerce</li>
              <li>One Page</li>
              <li>Education</li>
              <li>Health</li>
            </ul>
          </div>
        
<section className="collection-main myUL" id="all-item">
            <div className="collection-main-item" >
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
                <Link to="/fweb"><img src={require('../img/web_temp/yoghurt.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>

            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/consult.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/dewi.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/flattern.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/creative.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/day.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/delicious.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/bethany.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/furni.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/estage.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/knightone.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/gymster.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/imperial.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/buzzed.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/deni.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div> <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/bizland.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item">
                <Link to="/fweb"><img src={require('../img/web_temp/malefash.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/maxim.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/medicio.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/medilab.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/melodi.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/mentor.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/mical.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>

            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/moderna.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
             <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/multi.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/music.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/myfmly.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>

            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/myport.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/onepage.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/presento.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/remember.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>

            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/rock.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/safecam.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/sailor.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/shuffle.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/simple.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/softland.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/solar.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/space.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/squad.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item">
                <Link to="/fweb"><img src={require('../img/web_temp/tempo.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item">
                <Link to="/fweb"><img src={require('../img/web_temp/tropiko.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/upconst.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/yummy.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>
            <div className="collection-main-item" >
                <Link to="/fweb"><img src={require('../img/web_temp/zenblog.png')} className="col-img animate__animated animate__zoomIn" alt="col"/>
            </Link>
            </div>

        </section>


<br/>
<br/>


<section className="collection-main myUL" style={{display:"none"}} id="ecm">
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

        <div className="col-lg-8 text-center text-lg-right animate__animated animate__fadeInLeft">
        <div className="d-inline-flex align-items-center">
            <div className="d-inline-flex flex-column text-center pr-3 ">
                <a className="btn btn-primary mt-3 mt-md-4 px-4 registerbtn" >Edit Templates</a>
            </div>
        </div>
    </div>

   
<div className="btnDiv">
     <button id="downloadBtn" onClick={downloadTxtFile} value="download">Download Source Code</button>
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
  
  export default Website;