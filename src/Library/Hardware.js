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



function Hardware() {
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
        <Link to="/library"><a style={{cursor: "pointer" , color:"#009000"}}>Library</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><Link to="/main"><a style={{cursor: "pointer",color:"#009000"}}>Computer System</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>Hardware Component</a>
    </div>
    <br/>
    <br/>
    <div className="scrollmenu">
        <a className="scroact">Hardware Component</a>
        <a href="/Net">Networking Component</a>
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
        <h5 className="bluev">A Computer</h5>
        <p>A personal computer (PC) is a computing device made up of many distinct electronic components that all function comes together in order to accomplish some useful task,such as adding up the numbers in a spreadsheet or helping you write a letter.
        </p><br/>
        <i>In this chapter,we will learn how to identify system components common to most personal computers, including the following:</i><br/>
        <i className="green">.Motherboards</i><br/>
        <i className="green">.Processors</i><br/>
        <i className="green">.Memory</i><br/>
        <i className="green">.Cooling systems</i>
        <br/><br/>
        <h6 className="green">Computer Hardware</h6>
        <p>Computer hardware includes the physical parts of a computer, such as the case,[1] central processing unit (CPU), random access memory (RAM), monitor, mouse, keyboard, computer data storage, graphics card, sound card, speakers and motherboard.</p>
        <br/>
        <h6 className="green">Computer Peripherals</h6>
        <p>Peripherals are the components of a computer which communicate with the processor (CPU) but are not located <i style={{color:"red"}}>directly</i> on the motherboard </p>
        <p>Some peripherals are linked by expansion cards in the expansion slots on the motherboard connected directly on the ports via cables attached to them.</p>
        <br/>
        <h5 className="orange">Motherboard</h5>
        <h6 className="green">Identifying Components of Motherboards</h6>
        <img id="myImg" src={require('../img/mother.jpg')} alt="Motherboard" className="img" />


        <br/>
        <i>Figure 1.1</i>
        <br/>
        <p>The spine of the computer is the <i>motherboard</i>,otherwise known as the system board/main board. This is the <i>printed circuit board(PCB),</i>which is a conductive series of pathways laminated to a non-conductive substrate that lines the bottom of the computer and is often of a uniform color,such as olive,brown,or blue.Figure 1.1 shows a typical PC system board,as seen from above.On system board,you will find the central processing unit (CPU),underlying circuitry,expansion slots,video components,RAM,and a variety of other chips.
        </p>
        <h6 className="green">System Board Form Factors</h6>
        <p>System boards are classified by their form factor(design),such as ATX,micro ATX, and ITX.<i>Exercise care and vigilance when acquiring a motherboard and case separately.</i></p>
        <h5 className="bluev">System Board Components</h5>
        <p>it's time to look at the components found on the motherboard and their locations relative to each other. Many of the following components can be found on a typical motherboard:</p>
        <h6 className="green">Chipset:</h6>
        <p>A chipset is a collection of chips or circuits that perform interface and peripheral functions for the processor. Chipset are often given a name and model number by the original manufacturer.They are made up of one/several integrated circuit chips. Intel-based motherboards, for example,typically use two chips.Chipsets can be divided into two major functional groups, called NORTHBRIDGE and SOUTHBRIDGE.</p>
        <h6 className="green">Expansion Slots</h6>
        <img  src={require('../img/expansion.png')} alt="Expansion" className="img" />
        <br/>
        <p>The most visible parts of any motherboard are the <i>expansion slots.</i>These slots are used to install various devices in the computer to expand it's capabilities.Some expansion devices that might be installed in these slots include video,network,sound, and disk interface cards.</p>
        <p>Main types of expansion slots used in computers:</p><br/>
        <i className="gold">1.PCI</i><br/><i className="gold">2.PCIe</i><br/>
        <i className="gold">3.PCI-X</i>
        <h6 className="green">Memory slots and Cache</h6>
        <img src={require('../img/memory.png')} className="img" alt="memory" />
        <p>Memory or random acess memory(RAM) slots are the next most notable slots on a motherboard.These slots are design for the modules that hold memory chips that make up primary memory,which is used to store current used data and instructions for the CPU. </p>
        <p>For the most part, PC's today use memory chips arranged on a small circuit board.A <i>dual inline memory module(DIMM)</i> is one type of circuit board.Memory slots are easy to identify on a motherboard.We have many types of memory slots and cache.</p>
        <h6 className="green">Central processing unit and Processor socket</h6>
        <img src={require('../img/cpu.png')} className="img" alt="cpu" />
        <p>The "brain" of the computer is the <i style={{color:"orange"}}>central processing unit(CPU).</i> There's no computer without a CPU. There are so many types of CPU.Typically,in today's computers,the processor is the easiest component to identify on the motherboard.It is usually the component that has either a fan or a heat sink(usually both)attached to it.These devices are use to draw away and disperse the heat that a processor generates.This is done because heat is the enemy of microelectronics. Theoretically, a pentium(or higher) processor generates enough heat that,without the heat sink,it would permanently damage itself and the motherboard in a matter of hours or even minutes.The CPU is locked in place by an L-shaped arm that borders two of the socket's edges</p>
        <h6 className="green">Power Connectors</h6>
        <p>In addition to these sockets and slots of the motherboard, a special connector (the 20-pin white block connector) allows the motherboard to be connected to the power supply to receive power.</p>
        <h6 className="green">Firmware</h6>
        <p>is the name given to any software that is encoded in hardware, usually a read only memory (ROM)chip,and it can be run without extra instructions from the operating system.The best example of firmware is a computer's basic input/output system(BIOS)routinewhich is burn into a chip.Also some expansion cards,such as SCSI cards and graphics adapters,use their own firmware utilities.</p>
        <p><i className="green">Firmware</i> refers to programs stored on ROM chips. Programs stored on ROM chips are collectively known as <a style={{color : "blue"}}>BIOS</a>.</p>
        <h6 className="green">BIOS</h6>
        <p><i className="green">Bios</i>is a software built into the mainboard that determines what the computer can do without access to programs on the hard disk.</p>
        <p>Computer bios is stored on ROM-chips for older mainboards and flash chips on newer motherboard. Bios are updated when necessary</p>
        <p><i className="blue">Functions of BIOS :</i> It stores and controls all the hardware devices connected ton the computer that never changes such as the keyboard and the mouse. It also enables hardware devices to communicate internally or the devices use the bios for their internal needs. The mainfunction of the BIOSis to perform a process known as a<a style={{color : "blue"}}>power-on-self-test</a></p>
        <h6 className="green">POST</h6>
        <p>This is a special program stored on the ROM chip. POST is initiated when the computer is :</p>
        <li>Turned on</li>
        <li>Reset</li><br/>
        <p><i className="blue">Function of POST :</i> It checks out the system every time the computer boots.</p>
        <h6 className="green">CMOS and CMOS Battery</h6>
        <p>Your PC has to keep certain settings when it's turned off and it's power cord is unplugged:</p><br/>
        <a>.Date</a><br/><a>.Time</a><br/><a>.Memory</a><br/><a>.Boot sequence</a><br/><a>CPU settings,such as overlocking and many more</a><br/>
        <p>The first commonly used chip made from CMOS tech was a type of memory chip. The term CMOS stands for <i style={{color: "blueviolet"}}>Complementary Metal Oxide Semiconductor(CMOS)</i></p><br/>
        <h6 className="green">Front-and Top-Panel Connectors</h6>
        <p>The front panel connectors, also known as the <i className="gold">front panel headers or FPanel</i>, is a block of connectors on a motherboard that controls the power on, power reset, beep code speaker and the <a style={{color : "blue"}}>LED</a> light indicators on your PC case/chassis. All motherboards have front panel connectors that a PC case connects to. The following list includes the majority of these landmarks.(power buttonand power light)</p>
        <li>Power button</li>
        <li>Power Light</li>
        <li>Reset button</li>
        <li>Drive activity lights</li>
        <li>Audio jacks</li>
        <li>USB ports</li>
    
    <br/>

    <h6 className="blue">Power Supply</h6>
    <p>A power supply unit (PSU) converts alternating current (AC) electric power to low-voltage direct current (DC) power for the computer. Laptops can run on built-in rechargeable battery.[7] The PSU typically uses a switched-mode power supply (SMPS), with power MOSFETs (power metal–oxide–semiconductor field-effect transistors) used in the converters and regulator circuits of the SMPS.</p>
    
    <h6 className="blue">Computer Case</h6>
    <p>The computer case encloses most of the components of the system. It provides mechanical support and protection for internal elements such as the motherboard, disk drives, and power supplies, and controls and directs the flow of cooling air over internal components. The case is also part of the system to control electromagnetic interference radiated by the computer and protects internal parts from electrostatic discharge. Large tower cases provide space for multiple disk drives or other peripherals and usually stand on the floor, while desktop cases provide less expansion room. All-in-one style designs include a video display built into the same case. Portable and laptop computers require cases that provide impact protection for the unit. Hobbyists may decorate the cases with colored lights, paint, or other features, in an activity called case modding.</p>
    
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


export default Hardware;