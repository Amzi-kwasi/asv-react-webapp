import TNav from "../component/topnav";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";


function Sml(){
    document.getElementById("font").style.fontSize="16px";
}

function Mdm(){
    document.getElementById("font").style.fontSize="25px";
}
function Big(){
    document.getElementById("font").style.fontSize="35px";

}



function Net() {
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
        <Link to="/library"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Library</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><Link to="/main"><a style={{cursor: "pointer",color:"#009000"}}>Computer System</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Networking Component</a>
    </div>
    <br/>
    <br/>
    <div className="scrollmenu">
        <a href="/Hardware">Hardware Component</a>
        <a href="/Net" className="scroact">Networking Component</a>
        <a href="/Electronic">Electronic Component</a>
        <a href="/trbl">TroubleShooting</a>
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
        <h4 class="bluev">Networking Components</h4>
        <p>Network cabling can link one computer to another, but most networks are far grander in scale than two simple machines. There are variety of networking devices that provides connectivity to the networks, make the network bigger, and offer auxiliary services to end users.</p>
        <h5 class="orange">Connectivity Devices</h5>
        <p>We all know that if you want to be part of a computer network, you need to attach to that network somehow. Using network cables is one way to accomplish this,but not everyone is in a position to just plug a cable in and go. In addition,if you want to grow your network beyond a few simple connections, you need to use a special class of networking devices known as <i class="green">connectivity devices.</i> There are several categories of connectivity devices. We will now discuss the most important and frequently used connectivity devices.</p>
        <a href="#md1">Modems</a>
        <br />
        <a href="#hb1">Hubs</a><br />
        <a href="#re1">Repeaters and Extenders</a><br />
        <a href="#pp1">Patch Panel</a><br />
        <a href="#br1">Bridges</a><br />
        <a href="#sw1">Switches</a><br />
        <a href="#rou1">Routers</a><br />
        <br /><br /><br />
        <h6 class="green" id="md1">Modems</h6>
        <p>Modems are hardware devices that enables computer to transmit and receive information over telephone lines or radio lines by converting digital data into analog signal used in telephone or radio lines. Modems got their name because they modulate and demodulate (mo-dem) digital signals that computer uses into analog signals.</p>
        <p>In the early to mid-1990s, modems were practically the only device available to get onto the internet. Many companies also used them to allow users who were not in the office to dial into the local network. It allows single service to use single internet service provider(ISP). The fastest modems transferred data at 56Kbps.</p>
        <img src={require('../img/modem.jfif')} class="img" alt="modem" /><br /><br />
        <h6 class="green" id="hb1">Hubs</h6>
        <p>A <i class="gold">hub</i> is a device that is used to link several computers together. Hubs are very simple devices that possess no real intelligence. They simply repeat any signal that comes in on one port and copy it to the other ports (a process that is also called <i>broadcasting). They sometimes referred to as <i class="gold">multiport repeaters.</i></i></p>
        <p>There are two types of Hubs. They are:</p>
        <li>Active hubs</li>
        <li>Passive hubs</li>
        <p><i class="green">Active hubs</i> use eltronics to simplify and clean up signal before it is broadcast to the other parts. Active hubs can therefore be used to extend the length of a network. <i class="green">Passive hubs</i> connects all ports together electrically but do not have their own power source.</p>
        <img src={require('../img/hub.png')} class="img" alt="hub" /><br /><br />
        <h6 class="green" id="re1">Repeaters and Extenders</h6>
        <p>A <i>repeater, or extender,</i> is a small, powered device that receives a signal, amplifies it, and sends it on its way. The whole purpose of a repeater is to extend the functional distance of a cable run. For example, you know that UTP is limited to 100 meters, but what if you need to make a cable run that is 160 meters long? (one answer could be to use fiber, but pretend that's not an option!) You could run two lengths of cable with a repeater in the center and it would work. Repeaters and extenders work at the Physical Layer (Layer 1) of the OSI model.</p>
        <img src={require('../img/repeater.jfif')} class="img" alt="rep" /><br /><br />
        <h6 class="green" id="pp1">Patch Panels</h6>
        <p>A <i>patch panel</i> is essentially a large hub thaat is reck mounted. It houses multiple cable connections but possesses no network intelligence. Its sole purpose is to connect cables together. Short patch cables are used to plug into the front-panel connectors, and there are longer, more permanent cables on the back side.</p>
        <img src={require('../img/panel.jfif')} class="img"alt="pan" /><br /><br />
        <h6 class="green" id="br1">Bridges</h6>
        <p>Bridges operate in the Data Link Layer (Layer 2) of the OSI model. They join similar topologies, and they are used to divide network segments into multiple collision domains. Bridges are not able to distinguish one protocol from another because higher levels of the OSI model are not available to them. If a bridge is aware of the destination MAC address, it can forward packets to the correct segments, otherwise, it forwards the packets to all segments. Bridges are more intelligent than repeaters, but they are unable to move data across multiple networks simultaneously.</p>
        <p>The main disadvantages of bridges is that they broadcast packets. Bridges also can't perform intelligent path selection, meaning that the path from the sender to the destination will always be the same regardless of network conditions. To stop broadcasts or perform intelligent path selection, you need a router.</p>
        <img src={require('../img/bridges.jfif')} class="img" alt="brid" />
        <h6 class="green" id="sw1">Switches</h6>
        <p>A network switch is a device that operates at the Data Link layer of the OSI model—Layer 2. It takes in packets being sent by devices that are connected to its physical ports and sends them out again, but only through the ports that lead to the devices the packets are intended to reach. They can also operate at the network layer--Layer 3 where routing occurs.
        </p>
        <p>Once a device is connected to a switch, the switch notes its media access control (MAC) address, a code that’s baked into the device’s network-interface card (NIC) that attaches to an ethernet cable that attaches to the switch. The switch uses the MAC address to identify which attached device outgoing packets are being sent from and where to deliver incoming packets.</p>
        <img src={require('../img/switch.jfif')} class="img" alt="swi" /><br /><br />
        <h6 class="green" id="rou1">Routers</h6>
        <p>A <i class="green">router</i> is a device that connects two or more packet-switched networks or subnetworks. It serves two primary functions: managing traffic between these networks by forwarding data packets to their intended IP addresses, and allowing multiple devices to use the same Internet connection.</p>
        <p>There are several types of routers, but most routers pass data between LANs (local area networks) and WANs (wide area networks). A LAN is a group of connected devices restricted to a specific geographic area. A LAN usually requires a single router.</p>
        <p>A WAN, by contrast, is a large network spread out over a vast geographic area. Large organizations and companies that operate in multiple locations across the country, for instance, will need separate LANs for each location, which then connect to the other LANs to form a WAN. Because a WAN is distributed over a large area, it often necessitates multiple routers and switches.</p>
    </div>

    <ScrollToTop smooth/>
         <div className="navbarc" id="myNavbarc">
             <Link to="/"><a className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div>

        </>
    )
}

export default Net;