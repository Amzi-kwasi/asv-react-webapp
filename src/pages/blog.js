import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import React from 'react';
import ScrollToTop from "react-scroll-to-top"
import TNav from "../component/topnav";
import Footer from "../Footer";



const Blog = () => {
    return (
      <>
      <TNav />
      <div className="topnav" id='mxw_nav'>
        <Link to="/" className="active"><a><i className='fa fa-home'></i>&ensp;Home</a></Link>
        <Link to="/library"><a><i className='fa fa-book'></i>&ensp;Library</a></Link>
        <Link to="/contact"><a><i className='fa fa-phone'></i>&ensp;Contact</a></Link>
        <Link to="/dic"><a><i className='fa fa-search-plus'></i>&ensp;ITD</a></Link>
        <Link to="/collection"><a><i className='fa fa-clone'></i>&ensp;Tools</a></Link>
    </div>
    <br className="br"/>
    <br className="br"/>
    <div className="sub-nav">
        <Link to="/"><a style={{cursor: "pointer" , color:"#009000"}}>Home</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>Blog</a>
    </div>
    <br/>
       
    <div className="page-heading pdt-head header-text animate__animated animate__zoomIn">
      <div className="container" >
        <div className="row">
          <div className="col-md-12">
            <div className="text-content">
              <h2>Blog</h2>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div className="blog-page area-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="page-head-blog">
              <div className="single-blog-page">
                
                <form action="#">
                  <div className="search-option">
                    <input type="text" placeholder="Search..."/>
                    <button className="button" type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </form>
                
              </div>
              <div className="single-blog-page">
                
                <div className="left-blog">
                  <h4>recent post</h4>
                  <div className="recent-post">
                    
                    <div className="recent-single-post">
                      <div className="post-img">
                        <a href="#">
                          <img src={require("../img/1.jpg")} alt=""/>
                        </a>
                      </div>
                      <div className="pst-content">
                        <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                      </div>
                    </div>
                    
                    <div className="recent-single-post">
                      <div className="post-img">
                        <a href="#">
                          <img src={require("../img/2.jpg")} alt=""/>
                        </a>
                      </div>
                      <div className="pst-content">
                        <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                      </div>
                    </div>
                   
                    <div className="recent-single-post">
                      <div className="post-img">
                        <a href="#">
                          <img src={require("../img/3.jpg")} alt=""/>
                        </a>
                      </div>
                      <div className="pst-content">
                        <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                      </div>
                    </div>
                    
                    <div className="recent-single-post">
                      <div className="post-img">
                        <a href="#">
                          <img src={require("../img/4.jpg")} alt=""/>
                        </a>
                      </div>
                      <div className="pst-content">
                        <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
              </div>
              <div className="single-blog-page">
                <div className="left-blog">
                  <h4>categories</h4>
                  <ul>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Project</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">wordpress</a>
                    </li>
                    <li>
                      <a href="#">Joomla</a>
                    </li>
                    <li>
                      <a href="#">Html</a>
                    </li>
                    <li>
                      <a href="#">Website</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-blog-page">
                <div className="left-blog">
                  <h4>archive</h4>
                  <ul>
                    <li>
                      <a href="#">07 July 2016</a>
                    </li>
                    <li>
                      <a href="#">29 June 2016</a>
                    </li>
                    <li>
                      <a href="#">13 May 2016</a>
                    </li>
                    <li>
                      <a href="#">20 March 2016</a>
                    </li>
                    <li>
                      <a href="#">09 Fabruary 2016</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-blog-page">
                <div className="left-tags blog-tags">
                  <div className="popular-tag left-side-tags left-blog">
                    <h4>popular tags</h4>
                    <ul>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Project</a>
                      </li>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Website</a>
                      </li>
                      <li>
                        <a href="#">Joomla</a>
                      </li>
                      <li>
                        <a href="#">Html</a>
                      </li>
                      <li>
                        <a href="#">wordpress</a>
                      </li>
                      <li>
                        <a href="#">Masonry</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <a href="/">
                      <img src={require("../img/1.jpg")} alt=""/>
                    </a>
                  </div>
                  <div className="blog-meta">
                    <span className="comments-type">
                      <i className="bi bi-chat"></i>
                      <a href="#">11 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="bi bi-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href="#">Post my imagine Items</a>
                    </h4>
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit.
                    </p>
                  </div>
                  <span>
                    <a href="/" className="ready-btn">Read more</a>
                  </span>
                </div>
              </div>
              
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <a href="/">
                      <img src={require("../img/2.jpg")} alt=""/>
                    </a>
                  </div>
                  <div className="blog-meta">
                    <span className="comments-type">
                      <i className="bi bi-chat"></i>
                      <a href="#">7 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="bi bi-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href="#">Post my imagine Items</a>
                    </h4>
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit.
                    </p>
                  </div>
                  <span>
                    <a href="/" className="ready-btn">Read more</a>
                  </span>
                </div>
              </div>
              
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <a href="/">
                      <img src={require("../img/3.jpg")} alt=""/>
                    </a>
                  </div>
                  <div className="blog-meta">
                    <span className="comments-type">
                      <i className="bi bi-chat"></i>
                      <a href="#">13 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="bi bi-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href="#">Post my imagine Items</a>
                    </h4>
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit.
                    </p>
                  </div>
                  <span>
                    <a href="/" className="ready-btn">Read more</a>
                  </span>
                </div>
              </div>
             
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <a href="/">
                      <img src={require("../img/4.jpg")} alt=""/>
                    </a>
                  </div>
                  <div className="blog-meta">
                    <span className="comments-type">
                      <i className="bi bi-chat"></i>
                      <a href="#">1 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="bi bi-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href="#">Post my imagine Items</a>
                    </h4>
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit.
                    </p>
                  </div>
                  <span>
                    <a href="/" className="ready-btn">Read more</a>
                  </span>
                </div>
              </div>
             
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <a href="/">
                      <img src={require("../img/5.jpg")} alt=""/>
                    </a>
                  </div>
                  <div className="blog-meta">
                    <span className="comments-type">
                      <i className="bi bi-chat"></i>
                      <a href="#">10 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="bi bi-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href="#">Post my imagine Items</a>
                    </h4>
                    <p>
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit.
                    </p>
                  </div>
                  <span>
                    <a href="/" className="ready-btn">Read more</a>
                  </span>
                </div>
              </div>
              
              <div className="blog-pagination">
                <ul className="pagination">
                  <li className="page-item"><a href="#" className="page-link">&lt;</a></li>
                  <li className="page-item active"><a href="#" className="page-link">1</a></li>
                  <li className="page-item"><a href="#" className="page-link">2</a></li>
                  <li className="page-item"><a href="#" className="page-link">3</a></li>
                  <li className="page-item"><a href="#" className="page-link">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  

  
    <ScrollToTop smooth/>
       <div className="navbarc" id="myNavbarc">
             <Link to="/"><a className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone act" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div>

      <Footer />
      </>
    )
  }
  
  export default Blog;