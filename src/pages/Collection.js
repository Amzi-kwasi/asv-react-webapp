import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import React from 'react';
import ScrollToTop from "react-scroll-to-top"
import TNav from "../component/topnav";
import { Player } from "video-react";
import Footer from "../Footer";





function myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInputs");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}




const Collection = () => {
    return (
      <>
      <TNav />
      <div className="topnav" id='mxw_nav'>
        <Link to="/"><a title="Home"><i className='fa fa-home'></i>&ensp;Home</a></Link>
        <Link to="/library"><a title="Library"><i className='fa fa-book'></i>&ensp;Library</a></Link>
        <Link to="/contact"><a title="Contact"><i className='fa fa-phone'></i>&ensp;Contact</a></Link>
        <Link to="/dic"><a title="Search"><i className='fa fa-search-plus'></i>&ensp;ITD</a></Link>
        <Link to="/collection"><a title="Tools" className="active"><i className='fa fa-clone'></i>&ensp;Tools</a></Link>
    </div>
    <br/>
    <br/>
    <br className="br"/>
    <br className="br"/>
       <div className="row div-row">
        <div className="col-lg-4">
            <div className=" list">
                <img src={require('../img/el.png')} className="list-img align-items-center" alt="image" />
                <h className="h uni">E-Learning</h>
                <p className="h-a uni">Learn more</p>
                <p className="h-2 uni">2021</p> 
                
            </div>
        </div>
        <div className="col-lg-4 ">
        <Link to="/dashbrd"><div className=" list">
                <img src={require('../img/dashboard.png')} className="list-img align-items-center" alt="image" />
                <h className="h">Dashboard</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2021</p>
               
            </div>
            </Link>
        </div>
        <div className="col-lg-4">
            <div className=" list">
                <img src={require('../img/ecommerce.png')} className="list-img align-items-center" alt="image" />
                <h className="h uni">Ecommerce</h>
                <p className="h-a uni">Learn more</p>
                <p className="h-2 uni">2023</p>
                
            </div>
        </div>
    </div>

    <div className="row div-row">
        <div className="col-lg-4">
            <Link to="/board"><div className=" list">
                <img src={require('../img/whiteboard.jpg')} className="list-img align-items-center" alt="image" />
                <h className="h">Whiteboard</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2021</p>
                
            </div>
            </Link>
        </div>

        <div className="col-lg-4 ">
            <div className=" list">
                <img src={require('../img/sales.png')} className="list-img align-items-center" alt="image" />
                <h className="h">Sales</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2020</p>
                
            </div>
        </div>
        <div className="col-lg-4">
            <div className=" list">
                <img src={require('../img/time.png')} className="list-img align-items-center" alt="image" />
                <h className="h uni">Time</h>
                <p className="h-a uni">Learn more</p>
                <p className="h-2 uni">2020</p>
                
            </div>
        </div>
    </div>
    <div className="row div-row">
        <div className="col-lg-4">
            <Link to="/website"><div className=" list"  style={{cursor:"pointer"}}>
                <img src={require('../img/web.png')} className="list-img align-items-center" alt="image" />
                <h className="h">Website</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2021</p>
                
            </div>
            </Link>
        </div>
        

        <div className="col-lg-4">
            <Link to="/"><div className=" list"  style={{cursor:"pointer"}}>
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="image" />
                <h className="h">Spreadsheet</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2022</p>
                
            </div>
            </Link>
        </div>
        
        <div className="col-lg-4 " title="Online Note Editor">
            <Link to="/note"><div className=" list">
                <img src={require('../img/note.png')} className="list-img align-items-center" alt="image" />
                <h className="h">Note Editor</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2023</p>
            </div>
            </Link>
        </div>



        <div className="col-lg-4 " title="Code Editor">
            <Link to="/code"><div className=" list">
                <img src={require('../img/code.png')} className="list-img align-items-center" alt="image" />
                <h className="h">Code Editor</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2022</p>
               
            </div>
            </Link>
        </div>

        <div className="col-lg-4">
            <Link to="/gly"><div className=" list"  style={{cursor:"pointer"}}>
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="image" />
                <h className="h">Gallery</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2022</p>
                
            </div>
            </Link>
        </div>

        <div className="col-lg-4 " title="Document">
            <Link to="/doc"><div className=" list">
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="image" />
                <h className="h">Document</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2023</p>
               
            </div>
            </Link>
        </div>


        <div className="col-lg-4">
            <div className=" list">
                <img src={require('../img/contact.png')} className="list-img align-items-center" alt="image" />
                <h className="h uni">Contact</h>
                <p className="h-a uni">Learn more</p>
                <p className="h-2 uni">2021</p>
                
            </div>
        </div>
    </div>
{/* 
    <nav>
        <div className="nav-content">
            <div className="toggle-btn">
                <i className="fa fa-plus" title="Create a new"></i>
            </div>
            <span>
                <a href="document.html" style={{backgroundColor:"deepskyblue"}} title="Document"><i className="material-icons">W</i></a>
            </span>
            <span>
                <a href="presentation.html" style={{backgroundColor:"orange"}} title="Presentation"><i className="material-icons">P</i></a>
            </span>
            <span>
                <a href="spreadsheet.html" style={{backgroundColor:"green"}} title="Spreadsheet"><i className="material-icons">S</i></a>
            </span>
            <span>
                <a href="memo.html" style={{backgroundColor:"grey"}} title="Memo"><i className="material-icons">T</i></a>
            </span>
            <span>
                <a href="sales.html" style={{backgroundColor:"indigo"}} title="scan"><i className="fa fa-shopping-cart"></i></a>
            </span>
        </div>
    </nav> */}


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
  
  export default Collection;