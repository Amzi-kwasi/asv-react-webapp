import "../asv.css";
import { Link } from "react-router-dom";
import React from 'react';
import ScrollToTop from "react-scroll-to-top"
import TNav from "../component/topnav"
import "./dashboard.css";
import "../sys.css";




const Dashboard = () => {
    return (
      <>
      <TNav />
      
      <div className="topnav" id='mxw_nav'>
        <Link to="/"><a  title='home'><i className='fa fa-home'></i>&ensp;Home</a></Link>
        <Link to="/library"><a title='library'><i className='fa fa-book'></i>&ensp;Library</a></Link>
        <Link to="/contact"><a title='contact'><i className='fa fa-phone'></i>&ensp;Contact</a></Link>
        <Link to="/dic"><a title='search'><i className='fa fa-search-plus'></i>&ensp;ITD</a></Link>
        <Link to="/collection"><a className='active' title='collections'><i className='fa fa-clone'></i>&ensp;Tools</a></Link>
    </div>
    <br className='br'/>
    <br className='br'/>
    <div className="sub-nav">
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>Dashboard</a>
    </div>


   
  

{/* <div className="d-flex align-items-center justify-content-between">
  <a href="/home" className="logox d-flex align-items-center">
    <img src={require("../assets/img/logo.png")} alt=""/>
    <span className="d-none d-lg-block">ASVl</span>
  </a>
  <i className="fa fa-list toggle-sidebar-btn"></i>
</div>

<div className="search-bar">
  <form className="search-form d-flex align-items-center" method="POST" action="#">
    <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
    <button type="submit" title="Search"><i className="fa fa-search"></i></button>
  </form>
</div> */}




<aside id="sidebarx" className="sidebarx">

    <ul className="sidebarx-nav" id="sidebarx-nav">

      <li className="nav-item">
        <a className="nav-link " href="index.html">
          <i className="fa fa-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i className="fa fa-menu-button-wide"></i><span>Components</span><i className="fa fa-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="components-alerts.html">
              <i className="fa fa-circle"></i><span>Alerts</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="fa fa-circle"></i><span>Accordion</span>
            </a>
          </li>
          <li>
            <a href="components-badges.html">
              <i className="fa fa-circle"></i><span>Badges</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbxs.html">
              <i className="fa fa-circle"></i><span>Breadcrumbxs</span>
            </a>
          </li>
          <li>
            <a href="components-buttons.html">
              <i className="fa fa-circle"></i><span>Buttons</span>
            </a>
          </li>
          <li>
            <a href="components-cards.html">
              <i className="fa fa-circle"></i><span>Cards</span>
            </a>
          </li>
          <li>
            <a href="components-carousel.html">
              <i className="fa fa-circle"></i><span>Carousel</span>
            </a>
          </li>
          <li>
            <a href="components-list-group.html">
              <i className="fa fa-circle"></i><span>List group</span>
            </a>
          </li>
          <li>
            <a href="components-modal.html">
              <i className="fa fa-circle"></i><span>Modal</span>
            </a>
          </li>
          <li>
            <a href="components-tabs.html">
              <i className="fa fa-circle"></i><span>Tabs</span>
            </a>
          </li>
          <li>
            <a href="components-pagination.html">
              <i className="fa fa-circle"></i><span>Pagination</span>
            </a>
          </li>
          <li>
            <a href="components-progress.html">
              <i className="fa fa-circle"></i><span>Progress</span>
            </a>
          </li>
          <li>
            <a href="components-spinners.html">
              <i className="fa fa-circle"></i><span>Spinners</span>
            </a>
          </li>
          <li>
            <a href="components-tooltips.html">
              <i className="fa fa-circle"></i><span>Tooltips</span>
            </a>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i className="fa fa-journal-text"></i><span>Forms</span><i className="fa fa-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="forms-elements.html">
              <i className="fa fa-circle"></i><span>Form Elements</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html">
              <i className="fa fa-circle"></i><span>Form Layouts</span>
            </a>
          </li>
          <li>
            <a href="forms-editors.html">
              <i className="fa fa-circle"></i><span>Form Editors</span>
            </a>
          </li>
          <li>
            <a href="forms-validation.html">
              <i className="fa fa-circle"></i><span>Form Validation</span>
            </a>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i className="fa fa-layout-text-window-reverse"></i><span>Tables</span><i className="fa fa-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="tables-general.html">
              <i className="fa fa-circle"></i><span>General Tables</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
              <i className="fa fa-circle"></i><span>Data Tables</span>
            </a>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i className="fa fa-bar-chart"></i><span>Charts</span><i className="fa fa-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="charts-chartjs.html">
              <i className="fa fa-circle"></i><span>Chart.js</span>
            </a>
          </li>
          <li>
            <a href="charts-apexcharts.html">
              <i className="fa fa-circle"></i><span>ApexCharts</span>
            </a>
          </li>
          <li>
            <a href="charts-echarts.html">
              <i className="fa fa-circle"></i><span>ECharts</span>
            </a>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i className="fa fa-gem"></i><span>Iconxs</span><i className="fa fa-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="iconxs-bootstrap.html">
              <i className="fa fa-circle"></i><span>Bootstrap Icons</span>
            </a>
          </li>
          <li>
            <a href="iconxs-remix.html">
              <i className="fa fa-circle"></i><span>Remix Icons</span>
            </a>
          </li>
          <li>
            <a href="iconxs-boxiconxs.html">
              <i className="fa fa-circle"></i><span>Boxicons</span>
            </a>
          </li>
        </ul>
      </li>

      <li className="nav-heading">Pages</li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="users-profile.html">
          <i className="fa fa-person"></i>
          <span>Profile</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-faq.html">
          <i className="fa fa-question-circle"></i>
          <span>F.A.Q</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-contact.html">
          <i className="fa fa-envelope"></i>
          <span>Contact</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-register.html">
          <i className="fa fa-card-list"></i>
          <span>Register</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-login.html">
          <i className="fa fa-box-arrow-in-right"></i>
          <span>Login</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-error-404.html">
          <i className="fa fa-dash-circle"></i>
          <span>Error 404</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-blank.html">
          <i className="fa fa-file-earmark"></i>
          <span>Blank</span>
        </a>
      </li>

    </ul>

  </aside>



  <main id="main" className="main">

<div className="pagetitle">
  <h1>Dashboard</h1>
  {/* <nav>
    <ol className="breadcrumbx">
      <li className="breadcrumbx-item"><a href="index.html">Home</a></li>
      <li className="breadcrumbx-item active">Dashboard</li>
    </ol>
  </nav> */}
</div>

<section className="section dashboard">
  <div className="row">

  
    <div className="col-lg-8">
      <div className="row">

      
        <div className="col-xxl-4 col-md-6">
          <div className="card info-card sales-card">

            <div className="filter">
              <a className="iconx" href="#" data-bs-toggle="dropdown"><i className="fa fa-three-dots"></i></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a className="dropdown-item" href="#">Today</a></li>
                <li><a className="dropdown-item" href="#">This Month</a></li>
                <li><a className="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">Sales <span>| Today</span></h5>

              <div className="d-flex align-items-center">
                <div className="card-iconx rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa fa-cart"></i>
                </div>
                <div className="ps-3">
                  <h6>145</h6>
                  <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="col-xxl-4 col-md-6">
          <div className="card info-card revenue-card">

            <div className="filter">
              <a className="iconx" href="#" data-bs-toggle="dropdown"><i className="fa fa-three-dots"></i></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a className="dropdown-item" href="#">Today</a></li>
                <li><a className="dropdown-item" href="#">This Month</a></li>
                <li><a className="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">Revenue <span>| This Month</span></h5>

              <div className="d-flex align-items-center">
                <div className="card-iconx rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa fa-currency-dollar"></i>
                </div>
                <div className="ps-3">
                  <h6>$3,264</h6>
                  <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="col-xxl-4 col-xl-12">

          <div className="card info-card customers-card">

            <div className="filter">
              <a className="iconx" href="#" data-bs-toggle="dropdown"><i className="fa fa-three-dots"></i></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a className="dropdown-item" href="#">Today</a></li>
                <li><a className="dropdown-item" href="#">This Month</a></li>
                <li><a className="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">Customers <span>| This Year</span></h5>

              <div className="d-flex align-items-center">
                <div className="card-iconx rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa fa-people"></i>
                </div>
                <div className="ps-3">
                  <h6>1244</h6>
                  <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>

                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="col-12">
          <div className="card">

            <div className="filter">
              <a className="iconx" href="#" data-bs-toggle="dropdown"><i className="fa fa-three-dots"></i></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a className="dropdown-item" href="#">Today</a></li>
                <li><a className="dropdown-item" href="#">This Month</a></li>
                <li><a className="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div className="card-body">
              <h5 className="card-title">Reports <span>/Today</span></h5>

              
              <div id="reportsChart"></div>
              </div>

</div>
</div>


<div className="col-12">
<div className="card recent-sales overflow-auto">

  <div className="filter">
    <a className="iconx" href="#" data-bs-toggle="dropdown"><i className="fa fa-three-dots"></i></a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>

      <li><a className="dropdown-item" href="#">Today</a></li>
      <li><a className="dropdown-item" href="#">This Month</a></li>
      <li><a className="dropdown-item" href="#">This Year</a></li>
    </ul>
  </div>

  <div className="card-body">
    <h5 className="card-title">Recent Sales <span>| Today</span></h5>

    <table className="table table-borderless datatable">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><a href="#">#2457</a></th>
          <td>Brandon Jacob</td>
          <td><a href="#" className="text-primary">At praesentium minu</a></td>
          <td>$64</td>
          <td><span className="badge bg-success">Approved</span></td>
        </tr>
        <tr>
          <th scope="row"><a href="#">#2147</a></th>
          <td>Bridie Kessler</td>
          <td><a href="#" className="text-primary">Blanditiis dolor omnis similique</a></td>
          <td>$47</td>
          <td><span className="badge bg-warning">Pending</span></td>
        </tr>
        <tr>
          <th scope="row"><a href="#">#2049</a></th>
          <td>Ashleigh Langosh</td>
          <td><a href="#" className="text-primary">At recusandae consectetur</a></td>
          <td>$147</td>
          <td><span className="badge bg-success">Approved</span></td>
        </tr>
        <tr>
          <th scope="row"><a href="#">#2644</a></th>
          <td>Angus Grady</td>
          <td><a href="#" className="text-primar">Ut voluptatem id earum et</a></td>
          <td>$67</td>
          <td><span className="badge bg-danger">Rejected</span></td>
        </tr>
        <tr>
          <th scope="row"><a href="#">#2644</a></th>
          <td>Raheem Lehner</td>
          <td><a href="#" className="text-primary">Sunt similique distinctio</a></td>
          <td>$165</td>
          <td><span className="badge bg-success">Approved</span></td>
        </tr>
      </tbody>
    </table>

  </div>

</div>
</div>


<div className="col-12">
<div className="card top-selling overflow-auto">

  <div className="filter">
    <a className="iconx" href="#" data-bs-toggle="dropdown"><i className="fa fa-three-dots"></i></a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>

      <li><a className="dropdown-item" href="#">Today</a></li>
      <li><a className="dropdown-item" href="#">This Month</a></li>
      <li><a className="dropdown-item" href="#">This Year</a></li>
    </ul>
  </div>

  <div className="card-body pb-0">
    <h5 className="card-title">Top Selling <span>| Today</span></h5>

    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">Preview</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Sold</th>
          <th scope="col">Revenue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><a href="#"><img src={require("../assets/img/product-1.jpg")} alt=""/></a></th>
          <td><a href="#" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
          <td>$64</td>
          <td className="fw-bold">124</td>
          <td>$5,828</td>
        </tr>
        <tr>
          <th scope="row"><a href="#"><img src={require("../assets/img/product-2.jpg")} alt=""/></a></th>
          <td><a href="#" className="text-primary fw-bold">Exercitationem similique doloremque</a></td>
          <td>$46</td>
          <td className="fw-bold">98</td>
          <td>$4,508</td>
        </tr>
        <tr>
          <th scope="row"><a href="#"><img src={require("../assets/img/product-3.jpg")} alt=""/></a></th>
          <td><a href="#" className="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
          <td>$59</td>
          <td className="fw-bold">74</td>
          <td>$4,366</td>
        </tr>
        <tr>
          <th scope="row"><a href="#"><img src={require("../assets/img/product-4.jpg")} alt=""/></a></th>
          <td><a href="#" className="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
          <td>$32</td>
          <td className="fw-bold">63</td>
          <td>$2,016</td>
        </tr>
        <tr>
          <th scope="row"><a href="#"><img src={require("../assets/img/product-5.jpg")} alt=""/></a></th>
          <td><a href="#" className="text-primary fw-bold">Sit unde debitis delectus repellendus</a></td>
          <td>$79</td>
          <td className="fw-bold">41</td>
          <td>$3,239</td>
        </tr>
      </tbody>
    </table>

  </div>

</div>
</div>

</div>
</div>


<div className="col-lg-4">


<div className="card">
<div className="filter">
<a className="iconx" href="#" data-bs-toggle="dropdown"><i className="fa fa-three-dots"></i></a>
<ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
  <li className="dropdown-header text-start">
    <h6>Filter</h6>
  </li>

  <li><a className="dropdown-item" href="#">Today</a></li>
  <li><a className="dropdown-item" href="#">This Month</a></li>
  <li><a className="dropdown-item" href="#">This Year</a></li>
</ul>
</div>

<div className="card-body">
<h5 className="card-title">Recent Activity <span>| Today</span></h5>

<div className="activity">

  <div className="activity-item d-flex">
    <div className="activite-label">32 min</div>
    <i className='fa fa-circle-fill activity-badge text-success align-self-start'></i>
    <div className="activity-content">
      Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
    </div>
  </div>

  <div className="activity-item d-flex">
    <div className="activite-label">56 min</div>
    <i className='fa fa-circle-fill activity-badge text-danger align-self-start'></i>
    <div className="activity-content">
      Voluptatem blanditiis blanditiis eveniet
    </div>
  </div>

  <div className="activity-item d-flex">
    <div className="activite-label">2 hrs</div>
    <i className='fa fa-circle-fill activity-badge text-primary align-self-start'></i>
    <div className="activity-content">
      Voluptates corrupti molestias voluptatem
    </div>
  </div>

  <div className="activity-item d-flex">
    <div className="activite-label">1 day</div>
    <i className='fa fa-circle-fill activity-badge text-info align-self-start'></i>
    <div className="activity-content">
      Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
    </div>
  </div>

  <div className="activity-item d-flex">
    <div className="activite-label">2 days</div>
    <i className='fa fa-circle-fill activity-badge text-warning align-self-start'></i>
    <div className="activity-content">
      Est sit eum reiciendis exercitationem
    </div>
  </div>

  <div className="activity-item d-flex">
    <div className="activite-label">4 weeks</div>
    <i className='fa fa-circle-fill activity-badge text-muted align-self-start'></i>
    <div className="activity-content">
      Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
    </div>
  </div>

</div>

</div>
</div>


<div className="card">
<div className="filter">
<a className="iconx" href="#" data-bs-toggle="dropdown"><i className="fa fa-three-dots"></i></a>
<ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
  <li className="dropdown-header text-start">
    <h6>Filter</h6>
  </li>

  <li><a className="dropdown-item" href="#">Today</a></li>
  <li><a className="dropdown-item" href="#">This Month</a></li>
  <li><a className="dropdown-item" href="#">This Year</a></li>
</ul>
</div>

<div className="card-body pb-0">
<h5 className="card-title">Budget Report <span>| This Month</span></h5>

<div id="budgetChart" style={{minHeight: "400px"}} className="echart"></div>

</div>
          </div>

          
          <div className="card">
            <div className="filter">
              <a className="iconx" href="#" data-bs-toggle="dropdown"><i className="fa fa-three-dots"></i></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a className="dropdown-item" href="#">Today</a></li>
                <li><a className="dropdown-item" href="#">This Month</a></li>
                <li><a className="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div className="card-body pb-0">
              <h5 className="card-title">Website Traffic <span>| Today</span></h5>

              <div id="trafficChart" style={{minHeight: "400px"}} className="echart"></div>
              </div>
          </div>

          
          <div className="card">
            <div className="filter">
              <a className="iconx" href="#" data-bs-toggle="dropdown"><i className="fa fa-three-dots"></i></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a className="dropdown-item" href="#">Today</a></li>
                <li><a className="dropdown-item" href="#">This Month</a></li>
                <li><a className="dropdown-item" href="#">This Year</a></li>
              </ul>
            </div>

            <div className="card-body pb-0">
              <h5 className="card-title">News &amp; Updates <span>| Today</span></h5>

              <div className="news">
                <div className="post-item clearfix">
                  <img src={require("../assets/img/news-1.jpg")} alt=""/>
                  <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                  <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                </div>

                <div className="post-item clearfix">
                  <img src={require("../assets/img/news-2.jpg")} alt=""/>
                  <h4><a href="#">Quidem autem et impedit</a></h4>
                  <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                </div>

                <div className="post-item clearfix">
                  <img src={require("../assets/img/news-3.jpg")} alt=""/>
                  <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                  <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                </div>

                <div className="post-item clearfix">
                  <img src={require("../assets/img/news-4.jpg")} alt=""/>
                  <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                  <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                </div>

                <div className="post-item clearfix">
                  <img src={require("../assets/img/news-5.jpg")} alt=""/>
                  <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                  <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

  </main>


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
  
  export default Dashboard;

