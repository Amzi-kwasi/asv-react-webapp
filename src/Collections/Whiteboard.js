import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import ScrollToTop from "react-scroll-to-top"
import TNav from "../component/topnav"
import Canvas from "../component/Canvas";




const Whitebrd = () => {
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
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>Whiteboard</a>
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
        <div style={{overflowX:"auto"}}>
        <Canvas
        height={1500}
        width={1500} 
      />
      </div>

      </>
    )
  }
  
  export default Whitebrd;