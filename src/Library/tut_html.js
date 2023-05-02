import ScrollToTop from "react-scroll-to-top";
import {Link} from "react-router-dom";
import Footer from "../Footer";
import Cookie from "../component/cookie";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';

function tryitYourself(){
  document.getElementById('page').style.display="none";
  document.getElementById('edtr').style.display="flex";
}

function Bck(){
  document.getElementById('page').style.display="block";
  document.getElementById('edtr').style.display="none";

}

function myResult(){
  let result = document.getElementById("dm");
  
  if(result.innerHTML == "Result"){
   result.innerHTML = "Editor";
  }
  else if (result.innerHTML == "Editor") {
   result.innerHTML = "Result";
  }
  
  document.getElementById('myOut').classList.toggle('show');
 document.getElementById("editor").classList.toggle('hide');
 document.getElementById("bck").classList.toggle('hide');
}



function openNav() {
  document.getElementById("myNav").style.width = "60%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



function Compile() {
  var html = document.getElementById("html");
  // var css = document.getElementById("css");
  // var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;
  code.open();
    code.writeln(
      html.value 
    );
    code.close();
}
 

const code= "<!DOCTYPEhtml>\n<html>\n<head>\n<title>\nPage Title\n</title>\n</head>\n<body>\n<h1>This is a heading tag</h1>\n<p>This is a paragraph tag</p>\n</body>\n</html>"


const TutHtml = () => {
    return (
        <>
        
        <div id="navbarx">
    <Link to="/"><img src={require('../img/logo.png')} className="logo" title="Home" />
    <span className="lg-nm">&nbsp;AsvanLauncher</span>
    <span className="log">&nbsp;ASVL</span>
    </Link>
    <i className="fa fa-ellipsis-v" style={{position:"absolute" , right:"20px" , bottom:"14px"  , cursor:"pointer"} }></i>
    </div>

    <div className="topnav">
        <Link to="/"><a><i className='fa fa-home'></i>&ensp;Home</a></Link>
        <Link to="/library"><a className="active"><i className='fa fa-book'></i>&ensp;Library</a></Link>
        <Link to="/contact"><a><i className='fa fa-phone'></i>&ensp;Contact</a></Link>
        <Link to="/dic"><a><i className='fa fa-search-plus'></i>&ensp;ITD</a></Link>
        <Link to="/collection"><a><i className='fa fa-clone'></i>&ensp;Tools</a></Link>
    </div>
    <br className="br"/>
    <br className="br"/>
   


   <div id="page">
    
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={closeNav}>&times;</a>
    
  
  <div className="overlay-content">
  
    <ul>
    <a className="tut-act">HTML Introduction</a>
  <Link to="/tut_edi">
  <a>HTMLEditors</a>
  </Link>
  <a>HTML Elements</a>
  <a>HTML Attributes</a>
  <a>HTML Headings</a>
  <a>HTML Paragraph</a>
  <a>HTML Styles</a>
  <a>HTML Formatting</a>
  <a>HTML Quotations</a>
  <a>HTML Comments</a>
  <a>HTML Colors</a>
  <a>HTML Links</a>
  <a>HTML Css</a>
  <a>HTML Images</a>
  <a>HTML Favicon</a>
  <a>HTML Footers</a>
  <a>HTML Tables</a>
  <a>HTML Lists</a>
  <a>HTML nbsp</a>
  <a>HTML Figures</a>
  <a>HTML Audios</a>
  <a>HTML Iframe</a>
  <a>HTML Blockquote</a>
  <a>HTML Charset</a>
  <a>HTML Rseponsive</a>
  <a>HTML ComputerCode</a>
  <a>HTMLURL Encode</a>
  <a>HTML Emojis</a>
  <a>HTML Semantics</a>
  <a>HTML Layout</a>
  <a>HTML Head</a>
  <a>HTML File Path</a>
  <a>HTML Javascript</a>
  <h6>HTML FORMS</h6>
  <a>HTML Forms</a>
  <a>HTML Form Attributes</a>
  
    </ul>
    </div>
    </div>
  
    

<span className="pot" style={{backgroundColor:"grey", width:"100%",fontSize:"30px", cursor:"pointer"}} onClick={openNav}>&#9776; 
</span>
    {/* <div className="scrollmenu" style={{position: "fixed", top:"80px"}}>
    <a className="scroact">HTML</a>
        <a>CSS</a>
        <a>JS</a>
        <a>PYTHON</a>
        <a >PHP</a>
        <a>REACT</a>
        <a>DJANGO</a>
        <a>SQL</a>
        <a>XML</a>
        <a>JSON</a>
        <a>JAVA</a>
        
    </div> */}
  
    <div className="main">
<div className="sidenav">
<h6>HTML Tutorial</h6> 
  <a className="tut-act">HTML Introduction</a>
  <Link to="/tut_edi">
  <a>HTMLEditors</a>
  </Link>
  <a>HTML Elements</a>
  <a>HTML Attributes</a>
  <a>HTML Headings</a>
  <a>HTML Paragraph</a>
  <a>HTML Styles</a>
  <a>HTML Formatting</a>
  <a>HTML Quotations</a>
  <a>HTML Comments</a>
  <a>HTML Colors</a>
  <a>HTML Links</a>
  <a>HTML Css</a>
  <a>HTML Images</a>
  <a>HTML Favicon</a>
  <a>HTML Footers</a>
  <a>HTML Tables</a>
  <a>HTML Lists</a>
  <a>HTML nbsp</a>
  <a>HTML Figures</a>
  <a>HTML Audios</a>
  <a>HTML Iframe</a>
  <a>HTML Blockquote</a>
  <a>HTML Charset</a>
  <a>HTML Rseponsive</a>
  <a>HTML ComputerCode</a>
  <a>HTMLURL Encode</a>
  <a>HTML Emojis</a>
  <a>HTML Semantics</a>
  <a>HTML Layout</a>
  <a>HTML Head</a>
  <a>HTML File Path</a>
  <a>HTML Javascript</a>
  <h6>HTML FORMS</h6>
  <a>HTML Forms</a>
  <a>HTML Form Attributes</a>
</div>

  <h6 style={{fontSize:"40px", textAlign:"left", fontWeight:"400", margin:"10px 0" , color:"green"}}>HTML Introduction</h6>
  <br/>
<button style={{background:"#3bb0de",color:"white", borderRadius:"50%", width:"50px" , height:"50px", border:"none"}}>
  <i className="fa fa-chevron-left"></i>
  </button>
  <Link to="/tut_edi">
  <button style={{background:"#3bb0de",color:"white", borderRadius:"50%", width:"50px" , height:"50px", border:"none",position:"absolute", right:"10px"}}>
  <i className="fa fa-chevron-right"></i>
  </button>
  </Link>
  <br/>
  <br/>
  <div className="html_int">
  
  <p>HTML is the standard markup language for Web pages.</p>

<p>With HTML you can create your own Website.</p>

<p>HTML is easy to learn - You will enjoy it!</p>

  </div>
 

 
<br/>
<br/>
 <h3 style={{color:"orange"}}>Easy to learn HTML using our "Try it Yourself" button</h3>
 <p>As a beginner, our "Try it Yourself" can help you edit the html code to see the result</p>


<h5 className="green">Example</h5>

  <div className="html_ed">
&lt;!DOCTYPE html&gt;<br/>
&lt;html&gt;<br/>&lt;head&gt;<br/>&lt;title&gt;Page Title&lt;/title&gt;<br/>
&lt;/head&gt;<br/>&lt;body&gt;<br/><br/>&lt;h1&gt;This is a Heading tag&lt;/h1&gt;<br/>&lt;p&gt;This is a paragraph tag.&lt;/p&gt;<br/><br/>
&lt;/body&gt;<br/>&lt;/html&gt;
  </div>
<button style={{backgroundColor:"#3bb0de", width:"200px", height:"50px",borderRadius:"10px", border:"none",color:"white", padding:"10px 12px"}} onClick={tryitYourself}>
  Try it Yourself
  </button>

  <br/>

<br/>

<FroalaEditorComponent tag='textarea' style={{height:"130px"}}/>


<h3>HTML Exercise</h3>


<div>

</div>

  <Footer />

</div>



<Cookie />


</div>


<div class="div-flex" id="edtr" style={{display:"none"}}>
<button className="bck" id="bck" title="Back to page" onClick={Bck}><i className="fa fa-chevron-left"></i></button>
     <button onClick={myResult} className="demo" id="dm">Result</button>

<div className="editor split" id="editor">
  <textarea id="html" style={{whiteSpace:"pre-line"}} onKeyUp={Compile} placeholder="type your code here ...">
  {code}
  </textarea>
    </div>

    
    <div className="iframe-split" id="myOut">
    <iframe  id="code"></iframe>
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

      
          
        </>
    )
}


export default TutHtml;