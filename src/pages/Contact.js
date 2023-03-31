import Nav from "../component/Nav";
import Footer from "../Footer";
import Form from "../component/Form";
import { Link } from "react-router-dom";
import TNav from "../component/topnav";



const Contact = () => {
    return (
     <>
     <TNav />
     <div className="topnav" id='mxw_nav'>
        <Link to="/"><a title="Home"><i className='fa fa-home'></i>&ensp;Home</a></Link>
        <Link to="/library"><a title="Library"><i className='fa fa-book'></i>&ensp;Library</a></Link>
        <Link to="/contact"><a className="active" title="Contact"><i className='fa fa-phone'></i>&ensp;Contact</a></Link>
        <Link to="/dic"><a title="Search"><i className='fa fa-search-plus'></i>&ensp;ITD</a></Link>
        <Link to="/collection"><a title="Tools"><i className='fa fa-clone'></i>&ensp;Tools</a></Link>
    </div>
    <br/>
    <br/>

    <div className="page-heading products-head header-text animate__animated animate__zoomIn">
      <div className="container" >
        <div className="row">
          <div className="col-md-12">
            <div className="text-content">
              <h4>Contact</h4>
              <h2>Contact for any query</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      <div className="contactdiv">
      <div className="container-fluid pt-5">
       </div>
        <div className="rowl">
            <div className="col-12 p-0">
                <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115650.5715450949!2d-0.249770358009287!3d5.591375400867234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e1!3m2!1sen!2sgh!4v1655749477102!5m2!1sen!2sgh" frameborder="0"  allowfullscreen=""></iframe>
            </div>
        </div>
    </div>

    <Form />
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
                <img src={require('../img/phil.jpg')} className="img-fluid" alt=""/>
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
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member animate__animated animate__fadeInUp" data-aos-delay="300">
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
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member animate__animated animate__fadeInUp" data-aos-delay="400">
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
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>


    {/* <div className="container pt-5 pb-3">
        <div className="d-flex flex-column text-center mb-5">
            <h5 className="text-primary mb-3">Developers</h5>
            <h1 className="m-0">Meet Our Team</h1>
        </div>
        <div className="row">
            <div className="col-lg-6 mb-4">
                <div className="row mb-2 align-items-center">
                    <div className="col-6 text-right">
                        <h6>Amzi .O. Akrofi</h6>
                        <h6 className="text-muted font-weight-normal text-capitalize mb-2">Front and Backend Developer</h6>
                        <p>Ipsum tempor tempor dolor no est diam duo dolore, dolor eos dolor amet erat clita amet.</p>
                        <div className="d-flex justify-content-end">
                            <a ><i className="fab fa-twitter mr-3"></i></a>
                            <a ><i className="fab fa-facebook-f mr-3"></i></a>
                            <a ><i className="fab fa-linkedin-in mr-3"></i></a>
                            <a ><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-6">
                        <img className="img-thumbnail p-3" src={require('../img/amz.jpg')} alt="Image" />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="row mb-2 align-items-center">
                    <div className="col-6">
                        <img className="img-thumbnail p-3" src={require('../img/phil.jpg')} alt="Image" />
                    </div>
                    <div className="col-6 text-left">
                        <h6>Philemon Acheampong</h6>
                        <h6 className="text-muted font-weight-normal text-capitalize mb-2">Backend Developer</h6>
                        <p>Ipsum tempor tempor dolor no est diam duo dolore, dolor eos dolor amet erat clita amet.</p>
                        <div className="d-flex justify-content-start">
                            <a ><i className="fab fa-twitter mr-3"></i></a>
                            <a ><i className="fab fa-facebook-f mr-3"></i></a>
                            <a ><i className="fab fa-linkedin-in mr-3"></i></a>
                            <a ><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="row mb-2 align-items-center">
                    <div className="col-6 text-right">
                        <h6>Isaac Acheampong</h6>
                        <h6 className="text-muted font-weight-normal text-capitalize mb-2">Database</h6>
                        <p>Ipsum tempor tempor dolor no est diam duo dolore, dolor eos dolor amet erat clita amet.</p>
                        <div className="d-flex justify-content-end">
                            <a ><i className="fab fa-twitter mr-3"></i></a>
                            <a ><i className="fab fa-facebook-f mr-3"></i></a>
                            <a ><i className="fab fa-linkedin-in mr-3"></i></a>
                            <a ><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-6">
                        <img className="img-thumbnail p-3" src={require('../img/isaac.jpg')} alt="Image" />
                    </div>
                </div>
            </div>
          </div>  
  </div>  */}
<br/>
<br/>

  <div>
    <h5 className="orange"><i className="fa fa-phone"></i> Call Us Now</h5>
  <p>For more info call us on :</p>
  <li><a href="tel:0549271528">0549271528</a></li>
  <li><a href="tel:0243126855">0243126855</a></li>
  </div>
  <Footer />
  <div className="navbarc" id="myNavbarc">
             <Link to="/"><a className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a  className="fa fa-phone act" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div>

</>
 
    )
  }
  
  export default Contact;