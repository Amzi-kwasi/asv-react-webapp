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
    document.getElementById("font").style.fontSize="34px";

}


function Electronic() {
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
        <Link to="/library"><a style={{cursor: "pointer" , color:"#009000"}}>Library</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><Link to="/main"><a style={{cursor: "pointer",color:"#009000"}}>Computer System</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>Electronic Component</a>
    </div>
    <br/>
    <br/>
    <div className="scrollmenu">
        <a href="/Hardware">Hardware Component</a>
        <a href="/Net">Networking Component</a>
        <a href="/Electronic" className="scroact">Electronic Component</a>
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
  

<div class="maincont" id="font">
        <h4 className="bluev" id="txt">Electronic Component</h4>
        <p>An electronic component is any basic discrete device or physical entity in an electronic system used to affect electrons or their associated fields. Examples of electronic component are:</p>
       
        <h6 className="green">Capacitors</h6>
        <p>A capacitor is a device that stores electrical energy in an electric field. It is a passive electronic component with two terminals.</p>
        <img src={require('../img/capacitors.jfif')} alt="img" className="img"/>

       <br/>
       <br/>
       <h6 className="green">Resistor</h6>
       <p>A resistor is a passive electrical component with the primary function to limit the flow of electric current. Resistors are used for many purposes. A few examples include limiting electric current, voltage division, heat generation, matching and loading circuits, gain control, and setting time constants. They are commercially available with resistance values over a range of more than nine orders of magnitude. They can be used as electric brakes to dissipate kinetic energy from trains, or be smaller than a square millimeter for electronics.</p>
       <img src={require('../img/resistor.jfif')} className="img"/>
       <br/>
       <br/>
       <h6 className="green">Transistor</h6>
       <p>A Transistor is a semi-conductor device used to amplify and switch electronic signals and electrical power. The transistor is one of the basic building blocks of modern electronics. It is composed of semiconductor material, usually with at least three terminals for connection to an electronic circuit.</p>
       <img src={require('../img/transistor.jfif')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Diode</h6>
       <p>An electronic device that allows current to flow in one direction only.</p>
       <img src={require('../img/diode.jfif')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Inductor</h6>
       <p>Inductors are typically used as energy storage devices in switched-mode power devices to produce DC current. The inductor, which stores energy, supplies energy to the circuit to maintain current flow during “off” switching periods, thus enabling topographies where output voltage exceeds input voltage</p>
       <img src={require('../img/inductor.jfif')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Switch</h6>
       <p>The function of an electric switch is to regulate the current between the load and source of power. The power source is the electrons that push through the circuits. The voltage is the quantity of force or pressure applied by the power source. Power sources must have a negative and positive endpoint.</p>
       <img src={require('../img/switches.jfif')} className="img"/>
       <br/>
       <br/>


       <h6 className="green">Transformer</h6>
       <p>A transformer is a device that transfers electric energy from one alternating-current circuit to one or more other circuits, either increasing (stepping up) or reducing (stepping down) the voltage. Transformers are employed for widely varying purposes; e.g., to reduce the voltage of conventional power circuits to operate low-voltage devices, such as doorbells and toy electric trains, and to raise the voltage from electric generators so that electric power can be transmitted over long distances.</p>
       <img src={require('../img/transformer.jfif')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">LED</h6>
       <p>LEDs (Light Emitting Diodes) are semiconductor light sources that combine a P-type semiconductor (larger hole concentration) with an N-type semiconductor (larger electron concentration). Applying a sufficient forward voltage will cause the electrons and holes to recombine at the P-N junction, releasing energy in the form of light.Two types of LEDs are available, a lamp type (leaded) and a chip type (surface mount). Users can select the ideal type based on set requirements.</p>
       <img src={require('../img/LED.jfif')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Integrated Circuit (IC)</h6>
       <p>An IC can function as an amplifier, oscillator, timer, counter, logic gate, computer memory, microcontroller or microprocessor. An IC is the fundamental building block of all modern electronic devices.</p>
       <img src={require('../img/ic.jfif')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Battery</h6>
       <p>A battery is a device that stores chemical energy and converts it to electrical energy. The chemical reactions in a battery involve the flow of electrons from one material (electrode) to another, through an external circuit. The flow of electrons provides an electric current that can be used to do work.</p>
       <img src={require('../img/battery.jfif')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Fuse</h6>
       <p>In electronics and electrical engineering, a fuse is an electrical safety device that operates to provide overcurrent protection of an electrical circuit. Its essential component is a metal wire or strip that melts when too much current flows through it, thereby stopping or interrupting the current.</p>
       <img src={require('../img/Fuse.jfif')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Relay</h6>
       <p>Relays are the switches which aim at closing and opening the circuits electronically as well as electromechanically. It controls the opening and closing of the circuit contacts of an electronic circuit. When the relay contact is open (NO), the relay isn’t energize with the open contact. However, if it is closed (NC), the relay isn’t energize given the closed contact. However, when energy (electricity or charge) is supplied, the states are prone to change.</p>
       <img src={require('../img/rrelay.jfif')} className="img"/>
       <br/>
       <br/>


       <h6 className="green">Potentiometer</h6>
       <p>The potentiometer is a three-wire resistive device that acts as a voltage divider producing a continuously variable voltage output signal which is proportional to the physical position of the wiper along the track.</p>
       <img src={require('../img/po.jfif')} className="img"/>
       <br/>
       <br/>


        <h6 className="green">Thermistor</h6>
       <p>The Thermistor is a solid state temperature sensing device which acts a bit like an electrical resistor but is temperature sensitive. Thermistors can be used to produce an analogue output voltage with variations in ambient temperature and as such can be referred to as a transducer. This is because it creates a change in its electrical properties due to an external and physical change in heat.</p>
       <img src={require('../img/th.jfif')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Zener Diode</h6>
       <p>Zener diodes are used for voltage regulation, as reference elements, surge suppressors, and in switching applications and clipper circuits. The load voltage equals breakdown voltage VZ of the diode. The series resistor limits the current through the diode and drops the excess voltage when the diode is conducting.</p>
       <img src={require('../img/z.png')} className="img"/>
       <br/>
       <br/>


       <h6 className="green">Semi-Conductor</h6>
       <p>A semiconductor can help controlled flow of electricity. The basic function of such a device is to switch ON and OFF the flow of electricity as and when required. A semiconductor device can perform the function of a vacuum tube with hundreds of times its volume.</p>
       <img src={require('../img/Sm.avif')} className="img"/>
       <br/>
       <br/>


       <h6 className="green">MOSFET</h6>
       <p>The MOSFET is the most common type of transistor today. Their primary use is to control conductivity, or how much electricity can flow, between its source and drain terminals based on the amount of voltage applied to its gate terminal</p>
       <img src={require('../img/mosfet.png')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Motor</h6>
       <p>A motor converts electrical energy into mechanical energy. It is estimated that nearly half of the world's energy consumption is consumed by motors. Therefore, increasing motor efficiency is expected to have a significant impact on the global energy crisis. Here we will explain the operating principle of motors, beginning with the basics</p>
       <img src={require('../img/motor.jfif')} className="img"/>
       <br/>
       <br/>


       <h6 className="green">Circuit Breaker</h6>
       <p>A circuit breaker is an electrical switch designed to protect an electrical circuit from damage caused by overcurrent/overload or short circuit. Its basic function is to interrupt current flow after protective relays detect a fault.</p>
       <img src={require('../img/circuitb.jfif')} className="img"/>
       <br/>
       <br/>


       <h6 className="green">Printed Circuit Board (PCB)</h6>
       <p>Almost every electronic device you can think of contains at least one PCB. Phones, computers, tablets, televisions, cars – you name it. The main function of a PCB is to connect different components on the device and allow for communication between them.</p>
       <img src={require('../img/printedcir.jfif')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Cathode Ray Tube (CRT)</h6>
       <p>A cathode-ray tube (CRT) is a vacuum tube containing one or more electron guns, which emit electron beams that are manipulated to display images on a phosphorescent screen. The images may represent electrical waveforms (oscilloscope), pictures (television set, computer monitor), radar targets, or other phenomena.</p>
       <img src={require('../img/crt.png')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Speaker</h6>
       <p>The speaker converts the electric signal of the microphone into the corresponding sound wave. Speakers are transducers that convert electromagnetic waves into sound waves. The speakers receive audio input from a device such as a computer or an audio receiver. This input may be either in analog or digital form. Analog speakers simply amplify the analog electromagnetic waves into sound waves. Since sound waves are produced in analog form, digital speakers must first convert the digital input to an analog signal, then generate the sound waves.</p>
       <img src={require('../img/speaker.jfif')} className="img"/>
       <br/>
       <br/>

       <h6 className="green">Photodiode</h6>
       <p>A photodiode is a light-sensitive semiconductor diode.[1] It produces current when it absorbs photons. The package of a photodiode allows light (or infrared or ultraviolet radiation, or X-rays) to reach the sensitive part of the device.</p>
       <img src={require('../img/photod.jfif')} className="img"/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>


       
       <img src={require('../img/elecomp.jfif')} className="img"/>
        

       
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

export default Electronic;