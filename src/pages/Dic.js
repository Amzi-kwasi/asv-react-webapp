import { useState, useEffect } from "react";
import TNav from "../component/topnav";
import { Link } from "react-router-dom";

const loading= {
  fontSize: "25px",
  textAlign:"center"
}


setTimeout(function(){
  document.getElementById("loading").style.display="none";
}, 15000)


function Dic(){

var path = "https://dummyjson.com/products";
var [dic, setDic]= useState([]);

useEffect(() => {
fetch(path)
.then(main => main.json())
.then(main => setDic(main.products))
},[])
        return (
          <>
      <TNav />
          <div className="topnav" id='mxw_nav'>
        <Link to="/"><a title="Home"><i className='fa fa-home'></i>&ensp;Home</a></Link>
        <Link to="/library"><a title="Library"><i className='fa fa-book'></i>&ensp;Library</a></Link>
        <Link to="/contact"><a title="Contact"><i className='fa fa-phone'></i>&ensp;Contact</a></Link>
        <Link to="/dic"><a title="Search" className="active"><i className='fa fa-search-plus'></i>&ensp;ITD</a></Link>
        <Link to="/collection"><a title="Tools"><i className='fa fa-clone'></i>&ensp;Tools</a></Link>
    </div>
    
          <br/>
          <br/>
          <br/>
          <br/> 

      {dic.map((items) => (
      
<div className="row div-row" key={items.id}>
  <div className=" col-lg-4 ">
          <img src={items.thumbnail} className="align-items-center" alt=""/>
          <h3>{items.title}</h3>
          <h5>{items.description}</h5>
          <h4 style={{color:"blueviolet`"}}>{items.brand}</h4>
          <h5 style={{color:"red"}}>${items.price}</h5>
  </div>
  </div>
      ))}


      <h3 id="loading" style={loading}>Loading...</h3>

        <div className="navbarc" id="myNavbarc">
             <Link to="/"><a className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus act" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div> 

        </>
    );

}
  
  export default Dic;