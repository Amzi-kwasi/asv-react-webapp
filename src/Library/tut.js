import Footer from "../Footer";
// import { Outlet, Link } from "react-router-dom";
import "../component/Navbarscroll";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import TNav from "../component/topnav";


 
    



function TutPage() {
  alert("Sign-in for more");

    return(
        <>
        <TNav />
        <div className="topnav" id='mxw_nav'>
        <Link to="/"><a><i className='fa fa-home'></i>&ensp;Home</a></Link>
        <Link to="/library"><a className="active"><i className='fa fa-book'></i>&ensp;Library</a></Link>
        <Link to="/contact"><a><i className='fa fa-phone'></i>&ensp;Contact</a></Link>
        <Link to="/dic"><a><i className='fa fa-search-plus'></i>&ensp;ITD</a></Link>
        <Link to="/collection"><a><i className='fa fa-clone'></i>&ensp;Tools</a></Link>
    </div>
    <br className="br"/>
    <br className="br"/>
    <div className="sub-nav">
        <Link to="/library"><a style={{cursor: "pointer" , color:"#009000"}}>Library</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><Link to="/lrn"><a>Learn to Code</a></Link>
    </div>
    <br/>
    <div className="page-heading tut-head header-text animate__animated animate__zoomIn">
      <div className="container" >
        <div className="row">
          <div className="col-md-12">
            <div className="text-content">
              <h2>Learn to Code</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <div>
    <h6 style={{color:"#E45F4E"}}>Coding Languagess</h6>
    </div>
    <hr style={{border: "0.5px solid lightgrey"}}/>

{/* 
    
    <Link to="/tut_html"><div className="list-p" style={{backgroundColor:"aqua"}}>
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="image" />
                
                <h1 className="c-a">HTML</h1>
                
            </div>
        </Link>
        
        <Link to="/tut_html"><div className="list-p" style={{backgroundColor:"yellow"}}>
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="image" />
                
                <h1 className="c-a">CSS</h1>
                
            </div>
        </Link> */}
            


            <section className="scurve">
              <div className="curve">
                <p>Hi</p>
              </div>
            </section>


            <br/>

        <ScrollToTop smooth />
        <div className="navbarc" id="myNavbarc">
             <Link to="/"><a className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book act" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div>
        <Footer />
        </>
    )
}

export default TutPage;