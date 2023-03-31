import DarkMode from "./component/drk";

function Footer() {
    return (
        <footer>
            <div className='ft-main-item'>
                <h6 className='ft-title'>Asvan-Launcher</h6>
                <small>A global digital website that has great impact in education. Earn trust and flexibility with us as an ASVL  user and partner.</small>
            </div>
            <section className="ft-main">
                <div className="ft-main-item">
                <h2 className="ft-title">About</h2>
                <ul>
                    <li><a>Services</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Customers</a></li>
                    <li><a>Careers</a></li>
                </ul>
            </div>
            <div className="ft-main-item">
                <h2 className="ft-title">Resources</h2>
                <ul>
                    <li><a>Docs</a></li>
                    <li><a>Blog</a></li>
                    <li><a>eBooks</a></li>
                    <li><a>Webinars</a></li>
                </ul>
            </div>

            <div className="ft-main-item">
                <h2 className="ft-title">Settings</h2>
                <a style={{color : "lightgrey"}}>Enable Dark Mode</a>
                <DarkMode />
            </div>
            <div className="ft-main-item">
                <h2 className="ft-title">Contact</h2>
                <ul>
                    <li><a>Help</a></li>
                    <li><a>Sales</a></li>
                    <li><a>Advertise</a></li>
                
                </ul>
            </div>
            <div className="ft-main-item">
                <h2 className="ft-title">Stay Updated</h2>
                <p>Subscribe to our newsletter to get our latest news.</p>
                <form>
                    <input type="email" name="email" placeholder="Enter email address"/>
                    <input type="submit" value="Subscribe"/>
                </form>
            </div>
        </section>
        
        <section className="ft-social">
            <ul className="ft-social-list">
                <li><a><i className="fa fa-facebook"></i></a></li>
                <li><a><i className="fa fa-twitter"></i></a></li>
                <li><a><i className="fa fa-whatsapp"></i></a></li>
                <li><a><i className="fa fa-github"></i></a></li>
                <li><a><i className="fa fa-linkedin"></i></a></li>
                <li><a><i className="fa fa-youtube"></i></a></li>
            </ul>
        </section>
        
        <section className="ft-legal">
            <ul className="ft-legal-list">
                <li><a>Terms &amp; Conditions</a></li>
                <li><a>Privacy Policy</a></li>&emsp;
                 <p>Designed by <a>Dorby-Launch</a></p>
                <li>&copy; 2022 Copyright.</li>
            </ul>

        </section>
    </footer>
    )
}

export default Footer;