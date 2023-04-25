import "../cookie.css";
import ScrollToTop from "react-scroll-to-top";
import {Link} from "react-router-dom";
import Footer from "../Footer";
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






// Set cookie consent
function acceptCookieConsent(){
	
	document.getElementById("cookieNotice").style.display = "none";
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
 
function Copyme() {
    // Get the text field
    var copied = document.getElementById("cpy")
    var copyText = "<!DOCTYPEhtml>\n<html>\n<head>\n<title>\nPage Title\n</title>\n</head>\n<body>\n<h1>This is a heading tag</h1>\n<p>This is a paragraph tag</p>\n</body>\n</html>"
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    if (copied.innerHTML == "Copy"){
        copied.innerHTML = "Copied"
    }
    
  }


const TutEdi = () => {
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
    <h6>HTML Tutorial</h6>
   <Link to="/tut_html"><a>HTML Introduction</a></Link>
  <a className="tut-act">HTMLEditors</a>
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
  
    <div class="main">
<div class="sidenav">
   <h6>HTML Tutorial</h6>
   <Link to="/tut_html"><a>HTML Introduction</a></Link>
  <a className="tut-act">HTMLEditors</a>
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

  <h6 style={{fontSize:"40px", textAlign:"left", fontWeight:"400", margin:"10px 0" , color:"green"}}>HTML Editors</h6>
  <br/>
<Link to="/tut_html"><button style={{background:"#3bb0de",color:"white", borderRadius:"50%", width:"50px" , height:"50px", border:"none"}}>
  <i className="fa fa-chevron-left"></i>
  </button>
  </Link>
  <button style={{background:"#3bb0de",color:"white", borderRadius:"50%", width:"50px" , height:"50px", border:"none",position:"absolute", right:"10px"}}>
  <i className="fa fa-chevron-right"></i>
  </button>
  <br/>
  <br/>
  <div className="html_int">
  
  <p>A simple text editor is all you need to learn HTMl.</p>
  </div>
 

 
<br/>
<br/>
 <h3 style={{color:"orange"}}>Simply Learn HTML Using Notepad or our <Link to="/code"><a>CodeEditor</a></Link></h3>
 <p>To begin a work you need the right tools for the work. This applies in learning HTML.
    To create webpages you need to have a good HTML editor.
 </p>
 <p>As a beginner,we recommend you to use our <Link to="/code"><a>CodeEditor</a></Link> or a PC Notepad.
 </p>
 <p>To be able to create your first page using Notepad, please follow the steps below.</p>

<br/>
<hr/>
<br/>

<h3 style={{color:"brown"}}>Using Notepad</h3>
<br/>
<h4 style={{color:"#3bb0de"}}>Step 1: Open Notepad (PC)</h4>
<p>Open the Start Menu</p>
<p>On the start menu type Notepad(Windows 8 or earlier)</p>
<hr/>
<h4 style={{color:'#3bb0de'}}>Step 2: Write Some HTML</h4>
<p>Below is an HTML code. Copy it into the Notepad.</p>

  <div className="html_ed" value="HTML Code" id="copytext">
    <a onClick={Copyme} id="cpy" style={{color:"green",right:"40px",cursor:"pointer",fontSize:"15px", position:"absolute"}}>
        Copy
        </a>
<br/>
&lt;!DOCTYPE html&gt;<br/>
&lt;html&gt;<br/>&lt;head&gt;<br/>&lt;title&gt;Page Title&lt;/title&gt;<br/>
&lt;/head&gt;<br/>&lt;body&gt;<br/><br/>&lt;h1&gt;This is a Heading tag&lt;/h1&gt;<br/>&lt;p&gt;This is a paragraph tag.&lt;/p&gt;<br/><br/>
&lt;/body&gt;<br/>&lt;/html&gt;
  </div>

  <br/>
<hr/>
<h4 style={{color:"#3bb0de"}}>Step 3: Save the HTML Page</h4>
<p>Save the html file on the computer. You can choose to save it in your "Document" folder. Select <b>File &gt; Save as</b> in the Notepad menu.</p>
<p>Name the file "index.<mark>html</mark>". The ".html" shows that you are creating a webpage. So dont forget to save it with the ".html".</p>
<br/>
<hr/>

<h4 style={{color:"#3bb0de"}}>Step 4: Open the HTML page in your Browser</h4>
<p>Open the saved file in your browser by double clicking on it, or right click on the file and choose "Open with" and choose your favorite browser.</p>
<br/>
<p>There are many code editor on the net.</p>
<p>The list below shows some professional code editors you can use now.</p>
<ul>
    <li style={{color:"orange"}}>Visual Studio(PC) IDE</li>
    <li style={{color:"orange"}}>Sublime Text(PC)</li>
    <li style={{color:"orange"}}>Atom</li>
    <li style={{color:"orange"}}>TextMate</li>
    <li style={{color:"orange"}}>Komodo Edit</li>
    <li style={{color:"orange"}}>TextPad</li>
    <li style={{color:"orange"}}>Text Edit</li>
    <li style={{color:"orange"}}>Metapad</li>
    <li style={{color:"orange"}}>Multi-Edit</li>
    <li style={{color:"orange"}}>E</li>
    <li style={{color:"orange"}}>Kite</li>
    <li style={{color:"orange"}}>RJ TextEd</li>
    <li style={{color:"orange"}}>BlueFish</li>
    <li style={{color:"orange"}}>... and many more</li>

</ul>


<h5 style={{color:"#3bb0de"}}>Why Use ASV Code Editor</h5>
<p>Asvan-Launcher website has a built-in code editor that can help beginners to easily learn HTML</p>
<p>It is very easy to use and it is user-friendly too</p>

<p>Just give it a try</p>
<p>Path:<a style={{color:"#3bb0de"}}>Tools &gt;<Link to="/code"><a>Code Editor</a></Link></a></p>
<b>Click on it to see how it works</b>

<FroalaEditorComponent tag='textarea'/>


<h3>HTML Exercise</h3>


<div>

</div>

  <Footer />

</div>
        
<div id="cookieNotice" className="light display-right" >
  <div id="closeIcon" >
  </div>
  <div className="title-wrap">
    <h4>Cookie Consent</h4>
  </div>
  <div className="content-wrap">
    <div className="msg-wrap">
      <p>This website uses cookies or similar technologies, to enhance your browsing experience and provide personalized recommendations. By continuing to use our website, you agree to our  <a style={{color:"#115cfa"}}>Privacy Policy</a></p>
      <div className="btn-wrap">
        <button className="btn-primary" onClick={acceptCookieConsent} >Accept</button>
      </div>
    </div>
  </div>
</div>


</div>


<div class="div-flex" id="edtr" style={{display:"none"}}>
<button className="bck" id="bck" title="Back to page" onClick={Bck}><i className="fa fa-chevron-left"></i></button>
     <button onClick={myResult} className="demo" id="dm">Result</button>

<div className="editor split" id="editor">
  <textarea id="html" style={{whiteSpace:"pre-line"}} onKeyUp={Compile} placeholder="type your code here ...">
  &lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;
Page Title
&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;h1&gt;
This is a Heading tag
&lt;/h1&gt;
&lt;p&gt;
This is a paragraph tag.
&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;

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


export default TutEdi;