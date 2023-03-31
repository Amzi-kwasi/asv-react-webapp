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


function Peri() {
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
        <Link to="/library"><a style={{cursor: "pointer" , color:"#009000"}}>Library</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><Link to="/main"><a style={{cursor: "pointer",color:"#009000"}}>Computer System</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>Peripherals</a>
    </div>
    <br/>
    <br/>
    <div className="scrollmenu">
        <a>Hardware Component</a>
        <a href="/Net">Networking Component</a>
        <a href="/Electronic">Electronic Component</a>
        <a href="/trbl">TroubleShooting</a>
        <a href="/Peri/#i1" className="scroact">I\O Dev</a>
        <a href="/Peri" className="scroact">Peripherals</a>
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
        <h4 className="bluev">Installing and Configuring Expansion Cards</h4>
        <p>An <i className="green" id="ex">expansion card</i> (also known as adapter card) is simply a circuit board that you install into a computer to increase the capabilities of that computer. Expansion cards come in varying formats for different uses, but the important thing to note is that no matter what function a card has, the card being installed must match the bus type of the motherboard into which it is being installed. The following are the four most common categories of expansion cards installed today:</p>
        <li><a href="#vid">Video</a></li>
        <li><a href="#mul">Multimedia</a></li>
        <li><a href="#io">I/O</a></li>
        <li><a href="#com">Communications</a></li>
        <br/><br/>
        <h5 className="orange" id="vid">Video</h5>
        <p>A <i className="gold">video adapter</i> is the expansion card that you put into a computer to allow the computer to display information on some kind of monitor. A video card is also responsible for converting the data sent to it by the CPU into the pixels,addresses, and other items required for display.</p>
        <img src={('/')} className="img" /><br/><br/>
        <h5 className="orange" id="mul">Multimedia</h5>
        <p>The most basic and prolific multimedia adapter is the sound card. TV tuner cards and video capture are newer multimedia adapters that continue to gain in popularity due to decreasing cost and the rise of the internet as a forum for creative sharing</p>
        <h6 className="green">Sound Card</h6>
        <p>Sound Card are devices that convert computer signals into sound. A sound card is typically small, round, 1/8" jacks on the back of it for connecting microphones, headphones, and speakers as well as other sound equipment. Many sound card today used to have a DA15 game port, which can be used either for joysticks or <a href="techterms.html#midi">MIDI</a> controllers.</p>
        <img src={('/')} className="img" /><br/><br/>
        <h6 className="green">TV Tuner Card And Video Capture Cards</h6>
        <p>A<i className="green"> TV tuner card</i> is a className of internal and external devices that allows you to connect a broadcast signal, such as home cable television, to your computer and display the output on the computer monitor. Most TV tuner cards act as <i>video capture cards</i> as well. A <i className="gold">video capture card</i> can also be a stand-alone device, and it is often used to save a video stream to the computer for later manipulation or sharing.</p>
        <h5 className="orange" id="io">I/O</h5>
        <p>I/O card is often used as catchall phrase for any <a href="#ex">expansion card</a> that enhances the system, allowing it to interface with devices that offer input to the system, output from the system,or both. The following are common examples of modern I/O cards:</p>
        <li>USB cards</li>
        <li>FireWire cards</li>
        <li>Thunderbolt cards</li>
        <li>Storage cards, such as <a href="techterms.html#esata">eSATA</a></li>
        <br/>
        <p>These cards are to be installed in a compatible slot on the motherboard. Their configuration is minimal, and it is usually completed through the Plug and Play process.</p>
        <h5 className="orange" id="com">Communications</h5>
        <p>Communications adapters give a computer the ability to transmit information to other devices that might be too distant to cable up to directly. Network adapters and modems are the two most popular types of communications adapters. In contrast, modems allow direct domestic or international communication between two devices across the <a href="techterms.html#pstn">PSTN</a>.</p><br/>
        <hr/>
        <h6 className="red"><u>Network Interface Card <a href="techterms.html#nic">(NIC)</a></u></h6>
        <p>A <i className="red">network interface card</i> is an expansion card that connects a computer to a network so that it can communicate with other computers on the network. NIC can also stand for <i className="blue">network interface controller.</i> It translates the data from the parallel data stream used in the computer into the serial data stream that makes up the frames used on the network.</p>
        <img src={('/')} className="img" /><br/><br/>
        <h6 className="red">Cellular Cards</h6>
        <p>Almost every celullar service provider offers a line of adapters that can be installed into or inserted on the outside of desktop and laptop computers. some advanced users have modified wireless access points to allow the insertion of such adapters into <a href="techterms.html#usb">USB</a> interfaces to act as the <a href="techterms.html#wan">WAN</a> gateway to obtain Internet access for their attached clients.</p>
        <img src={('/')} className="img" /><br/><br/>
        <h6 className="green">Modem</h6>
        <p>Modems are hardware devices that enables computer to transmit and receive information over telephone lines or radio lines by converting digital data into analog signal used in telephone or radio lines. Modems got their name because they modulate and demodulate (mo-dem) digital signals that computer uses into analog signals.</p>
        <p>In the early to mid-1990s, modems were practically the only device available to get onto the internet. Many companies also used them to allow users who were not in the office to dial into the local network. It allows single service to use single internet service provider(ISP). The fastest modems transferred data at 56Kbps.</p>
        <img src={('/')} className="img" /><br/><br/>
        <h6 className="green">Riser Cards</h6>
        <p>A Riser card is a printed circuit board that gives a computer motherboard the option for additional expansion cards to be added to the computer.</p>
        <img src={('/')} className="img" /><br/><br/>
        <h6 className="green">Adapter Configuration</h6>
        <p>Expansion cards might require configuration. However, most can be recognized automatically by a Plug and Play operating system. Some modern adapters,however, require more specific configuration steps during installation. For example =, two or more <a href="techterms.html#pci">PCIe</a> graphics adapters that supports <a href="techterms.html#sli">SLI</a> must be bridged together with special hardware that comes with the adapters. Wireless network adapters tend to be easier to configure than wireless one.</p>
        <h4 className="bluev"><u>Common Ports and Connectors</u></h4>
        <p>A <i className="blue">port</i> is an interface or a point of connection between the computer and its peripheral devices.</p>
        <h5 className="orange">FUNCTIONS OF PORTS</h5>
        <p>
            <li>It acts as point of attachment where the cables from the peripheral devices can be plugged in.</li>
        </p>
        <p>
            <li>It allows transmission of signals or data from a device to another device.</li>
        </p>
        <h6 className="orange">Types of Ports</h6>
        <p>There are two (2) types of ports namely;</p>
        <p><b className="blue">Serial ports</b>: uses single communication line. Eg:D-subminature or D-Sub connector that carry RS-232 signals.</p>
        <p><b className="blue">Parallel ports</b>: uses more than one communication line Eg: printer ports.</p>
        <h6 className="green">Examples of Ports</h6>
       
        <h5 className="orange">Video Display Cables and Connectors</h5>
        <p>While the analog VGA-spawned standards might keep the computing industry satisfied for years yet to come, the sector in the market driving development of non-VGA specifications has become increasingly more prevalent. The following sections present the details of the main types of video display.</p>
        <h6 className="yellow"><a href="techterms.html#dvi">DVI</a></h6>
        <p>It is used to connect a video source, such as a video display controller to a display device, such as a computer monitor.
            <a href="techterms.html#dvi">DVI</a> was developed by the <mark style={{backgroundColor: "#ffff00"}}>Digital Display Working Group</mark>. At first glance, the <a href="techterms.html#dvi">DVI</a> connector might look like a standard D-sub connector, but on closer inspection, it begins to look somewhat different.</p>
        <p>There are three main categories of <a href="techterms.html#dvi">DVI</a> connectors.</p>
        <p><b className="red">DVI-A :</b> An analog-only connector. The source must produce analog output, and the monitor for must understand analog input.</p>
        <p><b className="red">DVI-D :</b> An digital-only connector. The source must produce digital output, and the monitor must understand digital input.</p>
        <p><b className="red">DVI-I :</b> A combination analog/digital connector. The source and monitor must both support the same technology, but this cable works with either a digital or an analog signal. </p>
        <p>DVI-A and DVI-I analog quality is superior to that of VGA, but it's is still analog, meaning that it is more susceptible to noise.However, the DVI analog signal will travel farther than a VGA signal before degrading beyond usability.</p>
        <img src={('/')} className="img" />
        <b>DVI-A-to-VGA adapter.</b>
        <br/><br/>
        <hr/>
        <h6><a href="techterms.html#hdmi">HDMI</a></h6>
        <p><a href="techterms.html#hdmi">HDMI</a> is an all-digital technology that advanced the work of <a href="techterms.html#dvi">DVI</a> to include the same dual-link resolutions using a standard <a href="techterms.html#hdmi">HDMI</a> cable but with higher motion-picture frame rates and digital audio right on the same connector. <a href="techterms.html#hdmi">HDMI</a> cabling also supports an optional <a href="techterms.html#cec">CEC</a> feature that allows transmission of signals from a remote control unit to control multiple devices without seperate cabling to carry infrared signals.</p>
        <p>The <a href="techterms.html#hdmi">HDMI</a> connectors is not the same as the one used for <a href="techterms.html#dvi">DVI</a>. Nevertheless, the two technologies are electrically compatible. <a href="techterms.html#hdmi">HDMI</a> is compatible with <a href="techterms.html#dvi">DVI</a>-D and DVI-I interfaces through proper adapters, but <a href="techterms.html#hdmi">HDMI</a>'s audio and remote control pass-through features are lost.</p>
        <p><a href="techterms.html#hdmi">HDMI</a> cables should meet the signal requirements of the latest specification. As a result, and as with <a href="techterms.html#dvi">DVI</a>, the maximum cable length is somewhat variable. For <a href="techterms.html#hdmi">HDMI</a>,cable length no farther than 15 meters, while adding electronics within the cable to create an active version cabling to 50 meters, respectively.</p>
        <img src={('/')} className="img" /><br/><br/>
        <h6 className="blue">Component Video</h6>
        <p>When analog technologies outside the <a href="techterms.html#vga">VGA</a> realm are used for broadcast video, you are generally able to get better-quality video by splitting the <i className="red">red</i>,<i className="green">green</i>, and <i className="blue">blue</i> components in the signal into different streams right at the source. The technology known as <i className="pink">component video performs a signal-splitting function similar to RGB separation.</i></p>
        <p>RGB separation, which requires full-bandwidth <i className="red">red</i>,<i className="green">green</i>, and <i className="blue">blue</i> signals as well as a fourth pathway for synchronization, the most popular implementations of component video uses one uncompressed signal and two compressed signals, reducing the overall band-width needed.</p>
        <img src={('/')} className="img" /><br/><br/>
        <h6 className="blue">Composite Video</h6>
        <p>Composite video is an <b>analog video signal format that carries standard definition video as a single channel.</b> Video information is encoded on one channel, unlike the higher quality S-video and the even higher component video. In all these video formats, audio is carried on a separate connection.</p>
        <p>When the preceding component video technologies are not feasible, the last related standard, composite video, combines all luna and chroma leads into one. Composite video is truly the bottom of the analog-video barrel. However, the <a href="techterms.html#ntsc">NTSC</a> signal received by over-the-air antennas or by cable-<a href="techterms.html#tv">TV</a> feeds is composite video, making it a very common video signal. A single <i className="yellow">yellow</i> <a href="techterms.html#rca">RCA</a> jack, the composite jack is rather common on computers and home and industrial video components.</p>
        <p>If you have a three-connector cable on your home video equipment, such as a <a href="techterms.html#dvd">DVD</a> player connected to a <a href="techterms.html#tv">TV</a>, odds are that the tips will be <i className="yellow">yellow</i>, <i className="red">red</i>, and white. The red and white leads are for left and right stereo audio; the yellow lead your composite video.</p>
        <h6 className="blue">DisplayPort</h6>
        <p><i className="green">DisplayPort</i> is a royalty-free digital interface from the Video Electronics Standards Association (<a href="techterms.html#vesa">VESA</a>) that uses less power than other digital interfaces and <a href="techterms.html#vga">VGA</a>. A simple adapter allows <a href="techterms.html#hdmi">HDMI</a> and <a href="techterms.html#dvi">DVI</a> voltages to be lowered to those required by DisplayPort because it is functionally similar to <a href="techterms.html#hdmi">HDMI</a> and <a href="techterms.html#dvi">DVI.</a> DisplayPort cables can extend 3 meters unless an active cable powers the run, in which case the cable can extend to 33 meters</p>
        <p>The DisplayPort(DP) connector latches itself to the receptacle with two tiny hooks in the same mannet as micro-B <a href="techterms.html#usb">USB</a> connectors. A push-button mechanism serves to release the hooks for removal of the connector from the receptacle.</p>
        <br/>
        <br/>

        <h5 className="h5s" id="i1">Input Devices</h5>
        <p>An input device is one that transfers information from outside the computer system to an internal storage location,such as system RAM,video RAM,flash memory, or disk storage. Without output devices,computer would be unable to change from their defaut boot-up state. The following input device are covered in the subsequent sections:</p>
        <p>i.<a href="#mse1">Mouse</a><img src={require('../img/mouse.jfif')} className="sml-img" /> </p>
        <p>ii.<a href="#ky1">Keyboard</a><img src={require('../img/keyboard.jfif')} className="sml-img" /> </p>
        <p>iii.<a href="#td1">Touchpad</a><img src={require('../img/touchpad.jfif')} className="sml-img" /> </p>
        <p>iv.<a href="#sc1">Scanner</a><img src={require('../img/scanner.jfif')} className="sml-img" /> </p>
        <p>v.<a href="#br1">Barcode reader</a><img src={require('../img/barcodered.jfif')} className="sml-img" /> </p>
        <p>vi.<a href="#dz1">Digitizer</a><img src={require('../img/digi.jfif')} className="sml-img" /> </p>
        <p>vii.<a href="#bm1">Biometric devices</a><img src={require('../img/biometric.jfif')} className="sml-img" /> </p>
        <p>viii.<a href="#gm1">Joysticks and Gamepads</a><img src={require('../img/joystick.jfif')} className="sml-img" /> </p>
        <p>ix.<a href="#ms1">Motion sensors</a><img src={require('../img/motionsenses.jfif')} className="sml-img" /></p>
        <p>x.<a href="#scd1">Smart card reader</a><img src={require('../img/smartreader.jfif')} className="sml-img" /> </p>
        <p>xi.<a href="#md1">Multimedia devices</a></p> <br/><br/>


        <h6 className="hv" id="mse1">Mouse</h6>
        <p>A mouse is a hand-fitting device that uses some form of motion-detection mechanism to translate its own physical two-dimensional movement into onscreen cursor motion. The computer mouse was born in 1970s at Xero's Palo Alto Research Center (PARC).Many variations of the mouse exit,including trackballs,tablets,touchpads,and pointing sticks. A mouse pad is a special surface that improves mechanical mouse traction while offering very little resistance to the mouse itself. The mouse today can be wired to the computer system or wirelessly. The wireless mouse uses batteries to power itself,and the optical varieties deplete these batteries more quickly than their mechanical counterparts.</p>
        <img src={require('../img/mouse.jfif')} className="img" /><br/><br/>
        <h6 className="hv" id="td1">Touchpad</h6>
        <p>Many modern laptops have built-in pointing device that can take the place of a mouse.<i style={{color:"red"}}>Touchpads are flat panels,</i>which are most often positioned in the same plane as the keyboard--between the spacebar and the user -- sometimes with buttons that supply right-clicks of the mouse. The user controls the onscreen pointer by tracing its path on the surface of the touchpad,some of which include a tactile click feature that takes the place of the left-button click.</p>
        <img src={require('../img/touchpad.jfif')} className="img" /><br/><br/>
        <h6 className="hv" id="ky1">Keyboard</h6>
        <p>A computer keyboard is a peripheral input device modeled after the typewriter keyboard which uses an arrangement of buttons or keys to act as mechanical levers or elctronic switches. In normal usage, a keyboard is used as a text entity interface for typing text,numbers,and symbols into application software such as word processor,web browser etc. Technically speaking,the keys on a keyboard complete individual circuits when each one is pressed. The computer uses a keyboard controller chip or function to interpret the code as the corresponding key sequence. The computer then decides what action to take based on the key sequence and what it means to the computer and the active application,including simply displaying the characters printed on the key.</p> <img src={require('../img/keyboard.jfif')} className="img" /><br/><br/>
        <h6 className="hv" id="sc1">Scanner</h6>
        <p>Scanners use light to reflect off of a surface and measure the relative reflections of the different dots that makes up the grid that the scanner is able to detect.The tighter the grid (the more dots per inch [DPI] supported), the higher the resolution of the resulting image. Charge Coupled Devices(CCDs) are a common choice in today's scanners. CCDs convert the light they receive into electrical impulses,which is then forwarded to the software producing the scan for further processing into an image that is a facsimile of the original object being scanned.</p> <img src={require('../img/scanner.jfif')} className="img" /><br/><br/>
        <h6 className="hv" id="br1">Barcode Reader</h6>
        <p>A <i style={{color: "chocolate"}}>barcode reader</i> (barcode scanner) is a specialised input device commonly used in retail and other industrial sectors that mange inventory. Barcode readers can use LEDs or lasers as light source and can scan one or two-dimensional barcodes. With today's smartphone tech being what it is, the built-in cameras can act as scanners, and the scanning app can interpret what the camera sees. A QR code is an encoded image that allows the scanning application to decode large amounts of text, and it can be used to represent simple text or popular strings,such as a website's URL,a phone number,a GEO location,an email address,or an SMS message.</p> <img src={require('../img/barcodered.jfif')} className="img" /><br/><br/>
        <h6 className="hv" id="dz1">Digitizer</h6>
        <p>One way to reproduce incredibly good artwork faithfully in digital form for computer use is to place the analog artwork on top of a sensor and use a stylus to trace the artwork after choosing an onscreen "crayon" or "pen". The end result can be a work of art almost as good as the original. The device used to trace an analog source and turn it into aa digital representation is a <i style={{color: "green"}}>digitizer</i>. As an input device,however, a digitizer or digitizing tablet takes pen strokes in the analog world and turns them into a digital rendering through the software controlling the digitizer. These device are also commonly used to annotate presentations with the option to save or discard the annotations with each presentation.</p> <img src={require('../img/digi.jfif')} className="img" /><br/><br/>
        <h6 className="hv" id="bm1">Biometric Devices</h6>
        <p>Any device that measures one or more physical or behavioral features of an organism is considered as a <i style={{color:"blueviolet"}}>biometric device</i>, or literally, a device that measures life. When the same device forwards this biometric information to the computer, it becomes an input device. The list includes fingerprint scanner, retinal and iris scanners,voice recognition devices,and facial recognition devices, to name a few.A computer can this input to authenticate the user based on prestablished biometric information captured during user setup.</p>
        <img src={require('../img/biometric.jfif')} className="img" /><br/><br/>
        <h6 className="gold" id="gm1">Gamepads and Joysticks</h6>
        <p>As long as there have been gaming applications for the personal computer, there have been standard and speciality controllers for some of those games. Two popular types of controllers have been the generic <i className="green">joystick,</i>a controller with one or more buttons and a stick of varying length and girth, and the often proprietary <i className="green">gamepad,</i>usually comprising function and directional buttons specific to the gaming console in use. Through the years, standardized PC connections have included the DA15 game port, also known as <i className="green">joystick port, the RS-232 port, and the USB port.</i></p><img src={require('../img/joystick.jfif')} className="img" /><br/><br/>
        <h6 className="gold" id="ms1">Motion Sensor</h6>
        <p>A <i className="green">motion sensor,</i> or motion detector, is an electronic device that uses a sensor to nearby people or objects. Motion sensors are an important component of any security system and with newer systems, right to your mobile phone. If you have subscribed to an alarm monitoring service, motion sensors can even be configured to send an alert to your monitoring team.</p>
        <p> Motion sensors are commonly used to:</p>
        <li>Detect when a potential intruder is near to or inside your home or business.</li>
        <li>Alert you if people enter restricted areas. At home, this might be the basement or garage.</li>
        <li>Save energy by powering lights in an area only when needed.</li><br/>
        <img src={require('../img/motionsenses.jfif')} className="img" /><br/><br/>
        <h6 className="gold" id="scd1">Smart Card Reader</h6>
        <p>Smart card readers <mark> are used with smart cards which are a type of plastic technology card with a built-in chip used for. electronic processes including personal identification, access control, authentication, and financial transactions.</mark> Smart card readers obtain or “read” this type of data. A <i className="green">smart card reader </i>attaches to the system internally or externally by USB or sometimes through a dedicated adapter. </p>
        <img src={require('../img/smartreader.jfif')} className="img" /><br/><br/>
        <h5 className="bluev">Multimedia Input Devices</h5>
        <p>Multimedia input devices vary in functionality based on the type of input being gathered. Two broad categories of multimedia input are <i className="green">audio</i> and <i className="green">video</i>. The following sections present information on these multimedia input devices:</p>
        <li><a href="#wbc1">Webcams</a></li>
        <li><a href="#midi">MIDI-enabled devices</a></li>
        <li><a href="#dc">Digital cameras and camcorders</a></li>
        <li><a href="#mp">Microphone</a></li>
        <br/><br/>
        <h6 className="red" id="wbc1">Webcams</h6>
        <p>A <i className="green">webcam</i> is a video camera connected to a computer, allowing its images to be seen by internet users. A webcam connects directly to the computer through an I/O interface, such as <a href="techterms.html#usb">USB</a> or <a href="techterms.html#wifi">WiFi</a> and it does not have self-contained recording mechanism. Its main function is to <i className="green">transmit pictures over the internet or transfer its captured video directly to the host computer.</i></p>
        <h6 className="red" id="midi">MIDI Devices</h6>
        <p>A <i className="blue"><a href="techterms.html#midi">MIDI</a> device</i> or <a href="techterms.html#midi">MIDI</a> controller is any hardware or software that generates and transmits <a href="techterms.html#midi">MIDI</a> data to <a href="techterms.html#midi">MIDI</a>-enabled devices, typically to trigger sounds and control parameters of an electronic music performance. <a href="techterms.html#midi">MIDI</a> was invented in 1983. There are types of MIDI controllers. They are:</p>
        <li>Synthesizer</li>
        <li>Music sequencer</li>
        <li>Drum machine</li>
        <li>Sampler</li>
        <li>Sound module</li>
        <br/><br/>
        <h6 className="red" id="dc">Digital Cameras and Camcorders</h6>
        <p>A <i className="green">digital camera</i> is a device that takes pictures and records them to digital media of some sort for later access. A <i className="blue">camcorders</i> is a video capture device that performs a similar function to that of the digital camera but for moving video. Most of today's multimedia recording devices perform the functions of both the digital camera and the digital camcorder. Depending on the device, both pictures and video can be stored on the same or different media within the same device. In fact, the most ic smartphone can perform both these functions, often with exceptional quality.</p>
        <p>The mechanism by which the digital information is transferred to a computer varries somewhat among these devices. In some cases, a cable--<a href="techterms.html#usb">USB</a>, for instance--can be attached between the device and the computer.</p>
        <h6 className="red" id="mp">Microphone</h6>
        <p><i className="green">Microphone</i> is a device that convert sound waves into varying electrical signals. The result can be recorded, transmitted, or altered in a variety of ways, including amplication.</p>
        <p>When installing a microphone, you must match its connector with an available one on the computer.</p>

        <h5 className="bluev">Output Devices</h5>
        <p>An output device is any piece of computer hardware equipment which converts information into a human-perceptible form or, historically, into a physical machine-readable form for use with other non-computerized equipment. Examples of output devices are:</p>
        <li><a href="#printer">Printer</a></li>
        <li><a href="#monitor">Monitor</a></li>
        <li><a href="#ddy">Display Devices</a></li>
        <li><a href="#loud">Loudspeaker</a></li>
        <li><a href="#plotter">Plotter</a></li>
        <li><a href="#projector">Projector</a></li>
        <li><a href="">Headphones</a></li>
        <li><a href="">Sound card</a></li>
        <li><a href="">Video card</a></li>
        <li><a href="">Laser printer</a></li>
        <li><a href="techterms.html#gps">GPS</a></li>
        <li><a href="">Refreshable braille display</a></li>
        <li><a href="">Cathode-ray Tube</a></li>
        <li><a href="">Speakers</a></li>
        <li><a href="techterms.html#led">Led</a></li>
        <li><a href="">Motherboard</a></li>
        <li><a href="techterms.html#lcd">LCD</a></li>
        <li><a href="">Plasma display</a></li>
        <li><a href="">Sound</a></li>
        <li><a href="techterms.html#vga">VGA</a></li>
        <li><a href="">Laptop</a></li>
        <br/><br/>
        <h6 className="blue" id="printer">Printer</h6>
        <p>A <i className="green">printer</i> is an external hardware output device that takes the electronic data stored on a computer or other device and generates a hard copy. <i className="blue">or</i> A printer is an output peripheral device that produce text and graphics on a paper (hardcopy).</p>
        <h6 className="yellow">Characteristics of Character Printer</h6>
        <li>Print out one character at a time, much like a typewriter.</li>
        <li>The spped is slow (50-500) characters per second.</li>
        <li>They are cheap</li>
        <li>They are used in small business</li>
        <br/>
        <h6 className="yellow">Characteristics of Line Printer</h6>
        <li>Print a line at a time</li>
        <li>Used with mainframe computers</li>
        <br/>
        <h6 className="orange">Different between Impact and Non-Impact Printers</h6>
        <table style={{width:"100%"}}>
            <tr>
                <th>Impact Printers</th>
                <th>Non-impact Printers</th>
            </tr>
            <tr>
                <td>
                    <li>Uses print mechanism where type head has direct contact with the printer medium(paper)</li>
                </td>
                <td>
                    <li>Print mechanism does not have direct contact with paper (medium)</li>
                </td>
            </tr>
            <tr>
                <td>
                    <li>Print mechanism where the type head hits an inked ribbon against paper like a typewriter.</li>
                </td>
                <td>
                    <li>Uses technique such as ink, spray, heat and laser to form a printed copy.</li>
                </td>
            </tr>
        </table>
        <br/><br/>
        <h6 class="blue" id="monitor">Monitor</h6>
        <p>A <i class="green">computer monitor</i> is an output device that displays information in pictorial or text form. A monitor usually comprises a visual display, some circuitry, a casing, and a power supply.</p>
        <h6 class="blue" id="ddy">Display Devices</h6>
        <p>A display device is an output device for presentation of information in visual or tactile form. When the input information that is supplied has an electrical signal the display is called an <i class="blue">electronic display.</i></p>
        <h6 class="blue" id="loud">Loudspeaker</h6>
        <p>A <i class="green">loudspeaker</i> or speaker is an electroacoustic tranducer, that is, a device that converts an electrical audio signal into a corresponding sound.</p>
        <h6 class="blue" id="plotter">Plotter</h6>
        <p>A plotter is a machine that produces vector graphics drawings. Plotters draw lines on paper using a pen, or in some applications,use a knife to cut a material like vinyl or leather.</p>
        <h6 class="blue" id="projector">Projector</h6>
        <p>A Projector is an optical device that projects an image onto a surface,commonly a projection screen. Most projectors create an image by shinning a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers.</p>
        <h6 class="blue" id="headphone">Headphones</h6>
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


export default Peri;