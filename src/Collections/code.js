import "../sys.css";
import "../asv.css";
import React from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top"
import TNav from "../component/topnav";
import CodeEditor from '@uiw/react-textarea-code-editor';
// import Editor from 'react-simple-code-editor'; 
// import { highlight, languages } from 'prismjs/components/prism-core';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-javascript'; 
// import 'prismjs/themes/prism.css';



export default function Code() { 

  document.documentElement.setAttribute('data-color-mode', 'dark');
  document.documentElement.setAttribute('data-color-mode', 'light');
  
  const [code, setCode] = React.useState( `function add(a, b) {\n return a + b;\n}` ); 
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
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>Code Editor</a>
    </div>
    <br/>
    <br/>


    {/* <Editor value={code} onValueChange={code => setCode(code)} 
   highlight={code => highlight(code, languages.js)} padding={10} 
   style={{ fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 12, }} /> 
 */}




    <CodeEditor value={code} language="js" 
  placeholder="Please enter JS code."
   onChange={(evn) => setCode(evn.target.value)} data-color-mode="dark" 
   padding={15} style={{ fontSize: 12, backgroundColor: "#f5f5f5", fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace', }} 
   />


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