import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top"
import TNav from "../component/topnav";



function Sml(){
    document.getElementById("font").style.fontSize="16px";
}

function Mdm(){
    document.getElementById("font").style.fontSize="25px";
}
function Big(){
    document.getElementById("font").style.fontSize="34px";

}





           
        //Save the value function - save it to localStorage as (ID, VALUE)
        function saveValue(e){
            var id = e.id;  // get the sender's id to save it . 
            var val = e.value; // get the value. 
            
              document.getElementById("doc-1").value = getSavedValue("doc-1");
           // document.getElementById("doc-2").value = getSavedValue("doc-2");

            localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
        }

        

        //get the saved value function - return the value of "v" from localStorage. 
        function getSavedValue(v){
            if (!localStorage.getItem(v)) {
                return "";// You can change this to your defualt value. 
            }
            return localStorage.getItem(v);
        }



export default function Doc() {
    const [url, setUrl] =useState('');
    const uploader = (file) =>{
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
        localStorage.setItem('recent-image',reader.result)
        setUrl(localStorage.getItem('recent-image'));
})
    reader.readAsDataURL(file);
}
useEffect(() => {
    setUrl(localStorage.getItem('recent-image'));
}, [])

    
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
        <Link to="/collection"><a style={{cursor:'pointer' , color:'#009000'}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>Document</a>
    </div>
    <br/>
    <br/>

    <div>
        
        <img src ={url}/>
    </div>

    <div className="buttons">
        <span className="btnx" onClick={Sml} id="act">A</span>
        <span className="btnx" onClick={Mdm}>A</span>
        <span className="btnx" onClick={Big}>A</span>
    </div>
    <br/>
    <br/>

    <div id="font" class="maincont">

<textarea type="text"  name="doc-1" id="doc-1" onKeyUp={saveValue} style={{width:"100%" , height:"200vh",border:"none"}} placeholder="|"></textarea>
{/* 
<textarea type="text"  name="doc-2" id="doc-2" onKeyUp={saveValue} style={{width:"100%" , height:"200vh",border:"none"}} placeholder="|"></textarea> */}

</div>

      <ScrollToTop smooth/>
       <div className="navbarc" id="myNavbarc">
             <Link to="/"><a className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone act" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div>
    </>
  );
}