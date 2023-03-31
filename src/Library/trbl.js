import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import TNav from "../component/topnav";

function Sml(){
    document.getElementById("font").style.fontSize="16px";
}

function Mdm(){
    document.getElementById("font").style.fontSize="25px";
}
function Big(){
    document.getElementById("font").style.fontSize="35px";

}



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



function Trbl() {
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
        <Link to="/library"><a style={{cursor: "pointer" , color:"#009000"}}>Library</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><Link to="/main"><a style={{cursor: "pointer",color:"#009000"}}>Computer System</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>TroubleShooting</a>
    </div>
    <br/>
    <br/>
    <div className="scrollmenu">
        <a href="/Hardware">Hardware Component</a>
        <a href="/Net">Networking Component</a>
        <a href="/Electronic">Electronic Component</a>
        <a href="/trbl" className="scroact">TroubleShooting</a>
        <a href="/Peri/#i1">I\O Dev</a>
        <a href="/Peri">Peripherals</a>
        <a>Troubleshoot</a>
        <a>Expansion c</a>
        <a>EMI</a>
        <a>Storage & Power</a>
        <a >Custom Config</a>
        <a>TCP/Ip</a>
        <a>Display Devices</a>
        <a>Printers</a>
        <a>Mobile Devices</a>
        <a>Security</a>
        <a>Ethical Hacking</a>
        <a>Wireless networks</a>
        <a>Mobile operating</a>
        <a></a>
        <a>Network services</a>
        <a>Windows edition</a>
        <a>OPA</a>
        <a>Video stuctures</a>
    </div>
  
    <div className="buttons">
        <span className="btnx" onClick={Sml} id="act">A</span>
        <span className="btnx" onClick={Mdm}>A</span>
        <span className="btnx" onClick={Big}>A</span>
    </div>
    <br/>
    <br/>

    <div className="maincont" id="font">
       <h5 className="orange">Computer System Troubleshooting</h5>
       <p>Computer System troubleshooting relies on hardware diagnostic tools.</p>
       <h6 className="green">What are Hardware Diagnostic Tools?</h6>
       <p>These are special software written for express purpose of examing the state or locating problems with a hardware or the operating system (OS) environment in which the hardware operates.</p>
       <input type="text" id="myInputs" onKeyUp={myFunction} placeholder="Search Component failure here..." class="search" />
    <table id="myTable">
        <tr style={{backgroundColor: "grey" , color: "white"}}>
            <th style={{width:"30.3%"}}>Component failure</th>
            <th style={{width:"30.3%"}}>Causes</th>
            <th style={{width:"30.3%"}}>Symptoms</th>
        </tr>
        <tr>
            <td className="td-clr">Memory (RAM) failure</td>
            <td>
                <ul>
                    <li>a. Boot failure</li>
                    <li>b. Installation issues</li>
                    <li>c. excessive heats and debris</li>
                    <li>d. data corruption</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>a. Blue screen of death (BOD) during install procedure of windows.</li>
                    <li>b. Random crashes/blue screen errors during running of windows.</li>
                    <li>c. Distorted graphics or screens.</li>
                    <li>d. Failure for the computer to boot.</li>
                </ul>
            </td>
        </tr>
        <tr>
        <td className="td-clr">HDD failure</td>
            <td>
                <ul>
                    <li>a. Physical Damage eg:</li>
                    <li>i. worn-out parts</li>
                    <li>ii. stiction</li>
                    <li>iii. Manufacturer faults</li>
                    <br/>
                    <li>b. Mechanical faults</li>
                    <li>i. heat crash</li>
                    <li>ii. Bad sectors</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>a. Blue screen of death (BOD) during install procedure of windows.</li>
                    <li>b. Random crashes/blue screen errors during running of windows.</li>
                    <li>c. Distorted graphics or screens.</li>
                    <li>d. Failure for the computer to boot.</li>
                </ul>
            </td>
         </tr>
        </table>
    
    <h6 className="green">Define Your Symptoms</h6>
<p>When a PC breaks down, the cause might be as simple as a loose wire or connector, or as
complicated as an IC or sub-assembly failure. Before you open your tool box, you must
have a firm understanding of all the symptoms. Think about the symptoms carefully—for
example:</p>
<ul>

<li>- Is the disk or tape inserted properly?</li>
<li>- Is the power or activity LED lit?</li>
<li>- Does this problem occur only when the computer is tapped or moved?</li> 
</ul>

<p>
By recognizing and understanding your symptoms, it can be much easier to trace a problem
to the appropriate assembly or component. Take the time to write down as many symptoms
as you can. This note-taking might seem tedious now, but once you have begun your repair,
a written record of symptoms and circumstances will help to keep you focused on the task
at hand. It will also help to jog your memory if you must explain the symptoms to someone
else at a later date. As a professional troubleshooter, you must of-ten log problems or
otherwise document your activities anyway. 

</p>
    
<h6 className="green">Identify and Isolate</h6>
<p>
Before you try to isolate a problem within a piece of computer hardware, you must first be
sure that the equipment itself is causing the problem. In many circumstances, this will be
fairly obvious, but some situations might appear ambiguous (i.e., there is no power, no
DOS prompt, etc.). Always remember that a PC works because of an intimate mingling of
hardware and software. A faulty or improperly configured piece of software can cause
confusing system errors. Chapter 3 touched on some of the problems that operating systems
can encounter</p>
<p>
When you are confident that the failure lies in your system’s hardware, you can begin to
identify possible problem areas. Because this book is designed to deal with sub-assembly
troubleshooting, start your diagnostics there. The troubleshooting procedures throughout
this book will guide you through the major sections of today’s popular PC components and
peripherals, and aid you in deciding which sub-assembly might be at fault. When you have
identified a potential problem area, you can begin the actual repair process and swap the
suspect sub-assembly.  
</p>

<h6 className="green">Replace</h6>
<p>Because computers and their peripherals are designed as collections of sub-assemblies, it is
almost always easier to replace a sub-assembly outright, rather than attempt to troubleshoot
the sub-assembly to its component level. Even if you had the time, documentation, and test
equipment to isolate a defective component, many complex parts are proprietary, so it is
highly unlikely that you would be able to obtain replacement components without a
significant hassle. The labor and frustration factor involved in such an endeavor is often
just as expensive as replacing the entire sub-assembly to begin with (perhaps even more
expensive). On the other hand, manufacturers and their distributors often stock a selection
of sub-assemblies and supplies. You might need to know the manufacturers part number
for the sub-assembly to obtain a new one. </p>
 <p>
 During a repair, you might reach a roadblock that requires you to leave your equipment for
a day or two, or maybe longer. This generally happens after an order has been placed for
new parts, and you are waiting for those parts to come in. Make it a point to reassemble
your system as much as possible before leaving it. Gather any loose parts in plastic bags,
seal them shut, and mark them clearly. If you are working with electronic circuitry, be sure
to use good-quality anti-static boxes or bags for storage. Partial re-assembly (combined
with careful notes) will help you remember how the unit goes together later on. Another
problem with the fast technological progress we enjoy is that parts rarely stay on the shelf
long. That video board you bought last year is no longer available.
</p>   
    
    </div>

    
    <ScrollToTop smooth/>
    <div className="navbarc" id="myNavbarc">
             <Link to="/"><a className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book act" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div>

        </>
    )
}


export default Trbl;