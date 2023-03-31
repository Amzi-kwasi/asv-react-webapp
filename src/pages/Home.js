import CarouselContainer from '../component/CarouselContainer';
import Footer from '../Footer';
import "../sys.css";
import "../asv.css";
// import { $ } from "jquery";
// import Nav from "../component/Nav";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
// import ReactLanguageSelect from 'react-languages-select';
import TNav from "../component/topnav";
// import { ReactVideeo } from "reactjs-media";


// //onSelect Method
// onSelectLanguage(languageCode){
//     console.log(languageCode)
// }

// //component render
// <ReactLanguageSelect
// defaultLanguage="en"
// onSelect={this.onSelectLanguage} />

// $("#fader").on("input",function () {
//     $('#v-28').css("font-size", $(this).val() + "px");
// });


var myVar;

function myViews() {
  myVar = setTimeout(showPage, 7000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}




const Home = () => {
  return(
    <body onLoad={myViews}>
    <div id="loader">
    <section className="smoke-section">
        <video  autoPlay loop>
          <source src={require('../videos/smoke.mp4')} type="video/mp4"/>
        </video>
        <h1 className="smoke-h1">
            <span>A</span>
            <span>S</span>
            <span>V</span>
            <span>A</span>
            <span>N</span>
            <span>-</span>
            <span>L</span>
            <span>A</span>
            <span>U</span>
            <span>N</span>
            <span>C</span>
            <span>H</span>
            <span>E</span>
            <span>R</span>
        </h1>
    </section>
</div>

<div id="myDiv" style={{display:"none"}}>
   <TNav />
   <div className="topnav" id='mxw_nav'>
        <Link to="/"><a className='active' title='Home'><i className='fa fa-home'></i>&ensp;Home</a></Link>
        <Link to="/library"><a title='Library'><i className='fa fa-book'></i>&ensp;Library</a></Link>
        <Link to="/contact"><a title='Contact'><i className='fa fa-phone'></i>&ensp;Contact</a></Link>
        <Link to="/dic"><a title='Search'><i className='fa fa-search-plus'></i>&ensp;ITD</a></Link>
        <Link to="/collection"><a title='Tools'><i className='fa fa-clone'></i>&ensp;Tools</a></Link>
    </div>
    <br/>
    <br/>
    <br className='br'/>
    <br className='br'/>
    <CarouselContainer />
    <br/>
    <br/>
    {/* <div className="font-size"><p>Font size:</p><output for="fader" id="fontsize">50</output></div>
   <input className="none" type="range" min="0" max="100" value="0" id="fader" step="1" />
   <text id="v-28" className="changeMe" y="0.8em" fill="white" stroke="black" stroke-width="0" transform="translate(35,20.5) ">This is the text you want to change the font size</text> */}
{/*   
    <ReactLanguageSelect
    names={"both"}  searchable={true}
    searchPlaceholder="Search for a language"  defaultLanguage="en" alignOptions="right" /> */}
{/* 

<div id="about" className="about-area area-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline text-center">
              <h2 className='abt'>SERVICES</h2>
            </div>
          </div>
        </div>
        <div className="row">
          
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="well-left">
              <div className="single-well">
                <a href="#">
                  <img src={require('../img/about/1.jpg')} alt=""/>
                </a>
              </div>
            </div>
          </div>
        
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="well-middle">
              <div className="single-well">
                <a href="#">
                  <h4 className="sec-head sw-p">project Maintenance</h4>
                </a>
                <p className='sw-p'>
                  Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit adipisci quaerat unde at nequeRedug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure
                </p>
                <ul>
                  <li className='sw-li'>
                    <i className="fa fa-check"></i> Interior design Package
                  </li>
                  <li className='sw-li'>
                    <i className="fa fa-check"></i> Building House
                  </li>
                  <li className='sw-li'>
                    <i className="fa fa-check"></i> Reparing of Residentail Roof
                  </li>
                  <li className='sw-li'>
                    <i className="fa fa-check"></i> Renovaion of Commercial Office
                  </li>
                  <li className='sw-li'>
                    <i className="fa fa-check"></i> Make Quality Products
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div> */}

    <br/>

    <div className="container-fluid py-5 py-lg-0 feature">
        <div className="row py-5 py-lg-0">
            <div className="col-lg-4 p-0">
                <div className="feature-item d-flex align-items-center border-right px-5 mb-4 mb-lg-0">
                    <i className="fa fa-diamond display-3 text-primary mr-4"></i>
                    <div className="">
                        <h5 className="mb-3 animate__animated animate__fadeInDown">OUR AIM</h5>
                        <p className="m-0 animate__animated animate__fadeInUp">Our Aim is to convey specific, helpful information to users so that our users learn something new.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="feature-item d-flex align-items-center border-right px-5 mb-4 mb-lg-0">
                    <i className="fa fa-question-circle-o display-3 text-primary mr-4"></i>
                    <div className="">
                        <h5 className="mb-3 animate__animated animate__fadeInDown">ABOUT US</h5>
                        <p className="m-0 animate__animated animate__fadeInUp">A global digital service solution that supports users all over the world to get helpful information. Earn flexibility with us as an ASVL partner.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="feature-item d-flex align-items-center px-5">
                    <i className="fa fa-graduation-cap display-3 text-primary mr-4"></i>
                    <div className="">
                        <h5 className="mb-3 animate__animated animate__fadeInDown">24/7 Support</h5>
                        <p className="m-0">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-8 text-center text-lg-right animate__animated animate__fadeInLeft">
        <div className="d-inline-flex align-items-center">
            <div className="d-inline-flex flex-column text-center pr-3 ">
                <a className="btn btn-lg btn-primary mt-3 mt-md-4 px-4 registerbtn" >Register Online</a>
            </div>
        </div>
    </div>





    <div className="container-fluid mb-5 py-5">
        <div className="row align-items-center">
            <div className="col-lg-6 px-0">
                <img  className="img-fluid" src={require('../img/yr.jpg')} alt="Image" />
            </div>
            <div className="col-lg-6 py-5 py-lg-0 px-3 px-lg-5">
                <h5 className="text-primary mb-3">About Us</h5>
                <h1 className="mb-4" style={{color: "orange"}}>5 Years Experience <h2 style={{textTransform: "none", color:"orangered"}}>In Web Design, eLearning Platforms etc.</h2></h1>
                <p>Asvan-Launcher has been designed to connect our users to a market of possibilities and to give our cherished users smarter options to study far.</p>
                <div className="row py-2">
                    <div className="col-sm-6">
                        <i className="flaticon-approved display-3 text-primary"></i>
                        <h5 className="mt-2">Cherished Users</h5>
                        <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                    </div>
                    <div className="col-sm-6">
                        <i className="flaticon-medal display-3 text-primary"></i>
                        <h5 className="mt-2">Award Winning</h5>
                        <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="reviews-area">
      <div className="row g-0">
        <div className="col-lg-6">
          <img src={require("../img/about/2.jpg")} alt="" className="img-fluid"/>
        </div>
        <div className="col-lg-6 work-right-text d-flex align-items-center">
          <div className="px-5 py-5 py-lg-0">
            <h2>working with us</h2>
            <h5>Web Design, Ready Home, Construction and Co-operate Outstanding Buildings.</h5>
            <a href="/contact" className="ready-btn scrollto">Contact us</a>
          </div>
        </div>
      </div>
    </div>


    <div className="container-fluid bg-primary my-5 py-5 text-center">
        <div className="row pt-5">
            <div className="col-lg-3 col-sm-6 mb-5">
                <h5 className="fa fa-user mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white" style={{width: "50px", height: "50px"}}></h5>
                <h4 className="display-4 text-white mb-3" data-toggle="counter-up">10</h4>
                <h6 className="text-white m-0">Our Developers</h6>
            </div>
            <div className="col-lg-3 col-sm-6 mb-5">
                <h5 className="fa fa-users mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white" style={{width: "50px", height: "50px"}}></h5>
                <h4 className="display-4 text-white mb-3" data-toggle="counter-up">1500</h4>
                <h6 className="text-white m-0">Happy Client</h6>
            </div>
            <div className="col-lg-3 col-sm-6 mb-5">
                <h5 className="fa fa-shield mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white" style={{width: "50px", height: "50px"}}></h5>
                <h4 className="display-4 text-white mb-3" data-toggle="counter-up">1000</h4>
                <h6 className="text-white m-0">Project Complete</h6>
            </div>
            <div className="col-lg-3 col-sm-6 mb-5">
                <h5 className="fa fa-group mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white" style={{width: "50px", height: "50px"}}></h5>
                <h4 className="display-4 text-white mb-3" data-toggle="counter-up">1k</h4>
                <h6 className="text-white m-0">Users</h6>
            </div>
        </div>
    </div>


        <video controls style={{width:"50px",height:"70px"}}>
          <source src={require('../videos/asvl.mp4')} type="video/mp4"/>
        </video>


    <div className="container pt-5">
        <div className="row">
            <div className="col-lg-5 mb-5">
                <h5 className="text-primary mb-3">Why Choose Us?</h5>
                <h1 className="night">Quality Services</h1>
                <img className="img-thumbnail mb-4 p-3" src={require('../img/smile.jpg')} alt="Images" />
                <p>
                    Reliable info
                </p>
                <a  className="btn btn-lg btn-primary mt-2">Learn More</a>
            </div>
            <div className="col-lg-7">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center mb-3">
                                <h3 className="fa fa-book font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px", height: "45px"}}></h3>
                                <h6 className="text-truncate m-0">library</h6>
                            </div>
                            <p>Learning from our source is easy. By clicking on the library icon, you are able to search for a topic to study.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center mb-3">
                                <h3 className="fa fa-users font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px", height: "45px"}}></h3>
                                <h6 className="text-truncate m-0">Trained Developers</h6>
                            </div>
                            <p>Our Developers are well-trained and have dedicated their time and energy to provide good and helpful information to our users.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center mb-3">
                                <h3 className="fa fa-diamond font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px", height: "45px"}}></h3>
                                <h6 className="text-truncate m-0">Quality Service</h6>
                            </div>
                            <p>We are ready to give our users and clients a quality service to their expectations</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center mb-3">
                                <h3 className="fa fa-graduation-cap font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px", height: "45px"}}></h3>
                                <h6 className="text-truncate m-0">Hospitability</h6>
                            </div>
                            <p>This website is user-friendly.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center mb-3">
                                <h3 className="fa fa-laptop d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px", height: "45px"}}></h3>
                                <h6 className="text-truncate m-0">Latest Updates</h6>
                            </div>
                            <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos rebum sit</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center mb-3">
                                <h3 className="fa fa-shield font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px", height: "45px"}}></h3>
                                <h6 className="text-truncate m-0">24/7 Support</h6>
                            </div>
                            <p>Our support is genuine and we are ready to give our users the necessary updates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<br/>



<section id="cta" className="cta">
      <div className="container">

        <div className="text-center">
          <h3>Call To Action</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a className="cta-btn" href="/contact">Call To Action</a>
        </div>

      </div>
    </section>
    <br/>


<section id="team" className="team">
      <div className="container animate__animated animate__fadeInUp">

        <div className="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member animate__animated animate__fadeInUp"  data-aos-delay="100">
              <div className="member-img">
                <img src={require('../assets/img/team/team-1.jpg')} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-instagram"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member animate__animated animate__fadeInUp" data-aos-delay="200">
              <div className="member-img">
                <img src={require('../img/phil.jpg')} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-instagram"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Philemon Acheampong</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member animate__animated animate__fadeInUp" data-aos-delay="300">
              <div className="member-img">
                <img src={require('../assets/img/team/team-3.jpg')} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-instagram"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member animate__animated animate__fadeInUp" data-aos-delay="400">
              <div className="member-img">
                <img src={require('../assets/img/team/team-4.jpg')} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-instagram"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <br/>

    <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5">
            <h5 className="text-primary mb-3">What we do</h5>
        </div>
        <div className="row pb-3">
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card mb-2 p-3">
        
                    <div className="card-body bg-secondary d-flex align-items-center p-0">
                        <h3 className="fa fa-code font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px" , height: "45px"}}></h3>
                        <h6 className="card-title text-white text-truncate m-0">Website and WebApp Design</h6>
                    </div>
                    <div className="card-footer">
                       <img src={require('../img/code.png')}  style={{width: "95%"}}  />
                       <p>We design amazing webapps and websites which are user-friendly and from simple minimal pages to complex dynamic platforms </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card mb-2 p-3">
        
                    <div className="card-body bg-secondary d-flex align-items-center p-0">
                        <h3 className="fa fa-shopping-cart font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px" , height: "45px"}}></h3>
                        <h6 className="card-title text-white text-truncate m-0">Ecommerce Solution</h6>
                    </div>
                    <div className="card-footer">
                        <img src={require('../img/Bitmap.png')} style={{width: "95%"}}  />
                    <p>Our ecommerce website solutions have all the necessary features you'll need to achieve great results</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card mb-2 p-3">
        
                    <div className="card-body bg-secondary d-flex align-items-center p-0">
                        <h3 className="fa fa-bullhorn font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px" , height: "45px"}}></h3>
                        <h6 className="card-title text-white text-truncate m-0">Digital Marketing</h6>
                    </div>
                    <div className="card-footer">
                        <img src={require('../img/about.jpg')} style={{width: "95%"}}  />
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card mb-2 p-3">
        
                    <div className="card-body bg-secondary d-flex align-items-center p-0">
                        <h3 className="fa fa-bullhorn font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px" , height: "45px"}}></h3>
                        <h6 className="card-title text-white text-truncate m-0">Learning platforms</h6>
                    </div>
                    <div className="card-footer">
                        <img src={require('../img/stu.jpg')} style={{width: "95%"}}  />
                        <p>Our Library can help you obtain educational knowledge</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <div className="card mb-2 p-3">
        
                    <div className="card-body bg-secondary d-flex align-items-center p-0">
                        <h3 className="fa fa-line-chart font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{width: "45px" , height: "45px"}}></h3>
                        <h6 className="card-title text-white text-truncate m-0">SEO & PPC</h6>
                    </div>
                    <div className="card-footer">
                      <img src={require('../img/SEO-and-PPC.png')} style={{width: "95%"}}  />
                        <p>Our search engine optimization can help you to compete and stand out with the best top ranking result.</p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>

<br/>
<br/>

<div id="blog" className="blog-area">
      <div className="blog-inner area-padding">
        <div className="blog-overly"></div>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2>Latest News</h2>
              </div>
            </div>
          </div>
          <div className="row">
           
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single-blog">
                <div className="single-blog-img">
                  <a href="/blog">
                    <img src={require("../img/1.jpg")} alt=""/>
                  </a>
                </div>
                <div className="blog-meta">
                  <span className="comments-type">
                    <i className="fa fa-comment-o"></i>
                    <a href="#">13 comments</a>
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                  </span>
                </div>
                <div className="blog-text">
                  <h4>
                    <a href="/blog">Assumenda repud eum veniam</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
                  </p>
                </div>
                <span>
                  <a href="/blog" className="ready-btn">Read more</a>
                </span>
              </div>
              
            </div>
           
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single-blog">
                <div className="single-blog-img">
                  <a href="/blog">
                    <img src={require("../img/2.jpg")} alt=""/>
                  </a>
                </div>
                <div className="blog-meta">
                  <span className="comments-type">
                    <i className="fa fa-comment-o"></i>
                    <a href="#">130 comments</a>
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                  </span>
                </div>
                <div className="blog-text">
                  <h4>
                    <a href="/blog">Explicabo magnam quibusdam.</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
                  </p>
                </div>
                <span>
                  <a href="/blog" className="ready-btn">Read more</a>
                </span>
              </div>
             
            </div>

            {/* <div>
            <ReactVideo src="" poster="../img/loader.gif" primaryColor="red" autoplay/>
            </div> */}
            
           
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single-blog">
                <div className="single-blog-img">
                  <a href="/blog">
                    <img src={require("../img/3.jpg")} alt=""/>
                  </a>
                </div>
                <div className="blog-meta">
                  <span className="comments-type">
                    <i className="fa fa-comment-o"></i>
                    <a href="#">10 comments</a>
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                  </span>
                </div>
                <div className="blog-text">
                  <h4>
                    <a href="/blog">Lorem ipsum dolor sit amet</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
                  </p>
                </div>
                <span>
                  <a href="/blog" className="ready-btn">Read more</a>
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>


{/* 
<section id="faq" className="faq section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i className="fa fa-question-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="fa fa-angle-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i className="fa fa-question-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="fa fa-angle-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i className="fa fa-question-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="fa fa-angle-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="fa fa-question-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="fa fa-angle-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="fa fa-question-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="fa fa-angle-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section> */}

    <br/>

    
<ScrollToTop smooth />

  <div className="navbarc" id="myNavbarc">
             <Link to="/"><a className="fa fa-home act" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div>

        
<Footer />

</div>
    </body>
  )
};

export default Home;