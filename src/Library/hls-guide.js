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


function Hls() {
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
        <Link to="/library"><a style={{cursor: "pointer" , color:"#009000"}}>Library</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><Link to="/health"><a style={{cursor: "pointer",color:"#009000"}}>Healthy Lifestyle</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>Healthy Living Guide</a>
    </div>
    <br/>
    <br/>
    <div className="scrollmenu">
        <a className="scroact">Healthy Living Guide</a>
        <a>Popular Diets <i style={{color:"orange"}}>Do they actually work for weight loss?</i></a>
        <a>Stress And Health</a>
        <a>10 Tips To Keep Moving</a>
    </div>
  
    <div className="buttons">
        <span className="btnx" onClick={Sml} id="act">A</span>
        <span className="btnx" onClick={Mdm}>A</span>
        <span className="btnx" onClick={Big}>A</span>
    </div>
    <br/>
    <br/>
    

    <div className="maincont" id="font">
    <h5 className="orange">Nutrition and Immunity</h5>
       <img src={require('../img/hlsps.png')} alt="/" className="hls-img"/>
        
<br/>
       <h5 className="orange">Do Vitamin or Herbal supplement help?</h5> <p>A deficiency of just a single nutrient can alter the body’s immune response. Animal studies have found that deficiencies in zinc, selenium, iron, copper, folic acid, and vitamins A, B6, C, D, and E can alter immune responses.6 These nutrients help the immune system in several ways: working as an antioxidant to protect healthy cells, supporting growth and activity of immune cells, and producing antibodies. Epidemiological studies find that those who are poorly nourished are at greater risk of bacterial, viral, and other infections.</p> <p>Eating a good quality diet can prevent deficiencies in these nutrients. However, there are certain situations in which one cannot always eat a variety of nutritious foods, and certain populations that have increased nutrient needs. In these cases a vitamin and mineral supplement may help to fill nutritional gaps. These supplements are relatively inexpensive, typically costing less than 10 cents per day. Studies have shown that vitamin supplementation can improve immune responses in these populations.6-8 Low-income households, pregnant and lactating women, infants and toddlers, and the critically ill are examples of groups at risk.</p> <p>The elderly are a particularly high- risk group. The immune response generally declines with increasing age as the number and quality of immune cells decreases. This causes a higher risk of poorer outcomes if the elderly develop chronic or acute diseases. In addition, about one-third of elderly individuals in industrialized countries have nutrient deficiencies.6 Some reasons include a poorer appetite due to chronic diseases, depression, or loneliness; multiple medications that can interfere with nutrient absorption and appetite; malabsorption due to intestinal issues; and increased nutrient needs due to hypermetabolic states with acute or chronic conditions. Diet variety may also be limited due to budget constraints or lower interest in cooking for one person; poor dentition (e.g. missing teeth, ill-fitting dentures); mental impairment; or lack of transportation and resources to obtain healthy food.</p> <p>A general multivitamin/mineral supplement providing the recommended dietary allowances (RDA) may be used in these cases, unless otherwise directed by one’s physician. Megadose supplements (many times the RDA) do not appear justified, and can sometimes be harmful or even suppress the immune system (e.g. as with zinc). Remember that supplements are not a substitute for a good diet because no supplements contain all the benefits of healthful foods.</p>
<br/>
<img src={require('../img/hls_plt.png')} alt="/" className="hls-img"/>
    <br/>

    <h5 className="red">What is Precision Nutrition</h5>
    <p>
    Precision nutrition may sound like
a new fad diet, but it is actually a
credible emerging area of research
supported by the National Institutes of Health under the umbrella
of precision medicine.1,2 Precision
medicine seeks to improve the
personalized treatment of diseases,
and precision nutrition is specific to
dietary intake. Both develop interventions to prevent or treat chronic
diseases based on a person’s unique
characteristics like DNA, race, gender,
health history, and lifestyle habits.
Both aim to provide safer and more
effective ways to prevent and treat
disease by providing more accurate
and targeted strategies. Precision
nutrition assumes that each person
may have a different response to
specific foods and nutrients, so that
the best diet for one individual may
look very different than the best
diet for another. How often are we
tempted to follow a flashy diet that
a celebrity or friend promoted in
helping them to lose 20 pounds or
“cure” their diabetes? The concept of
precision nutrition would discourage
this practice, as our individual blueprint might require a unique dietary
plan to be successful.
    </p>
    <p>
    Precision nutrition also considers
the microbiome, trillions of bacteria
in our bodies that play a key role in
various daily internal operations.
What types and how much bacteria
we have are unique to each individual. Our diets can determine which
types of bacteria live in our digestive tracts, and according to precision
nutrition the reverse is also true: the
types of bacteria we house might determine how we break down certain
foods and what types of foods are
most beneficial for our bodies.
    </p>
    <h6 className="green">How Does It Work?</h6>
    <p>
    Precision nutrition, also referred to as
personalized nutrition, focuses on the
individual rather than groups of people. Many research studies on nutrition and types of diets provide useful
information for communities and the
general population. High-quality nutrition studies have shown that for the
average person, eating more vegetables, whole grains, and lean proteins
while eating fewer highly processed
foods made with added sugars and
salt can help reduce the risk of various
diseases. Yet, when studies such as the PREDICT 1 trial focus on
individual responses to food, they
have found substantial variations
in blood responses of glucose and
triglycerides even if individuals are
eating identical meals.3
 The person’s
microbiome was found to cause
variations in blood triglycerides after
a meal. Non-food factors like sleep,
physical activity, and time of meals
also played a role in causing variations in blood levels of glucose and
triglycerides after meals.3
 Therefore,
an individual may see additional benefits if following personalized nutrition guidance beyond general health
recommendations. Precision nutrition
evaluates one’s DNA, microbiome,
and metabolic response to specific
foods or dietary patterns to determine
the most effective eating plan to prevent or treat disease.
    </p>
<aside style={{background:"lightgrey" , border:"1px dotted black"}}>
    <h6 className="blue">Precision Nutrition And Disease Management</h6>
    <p style={{color:"black" , fontSize:"13px"}}>
    There are specific dietary treatments based on genetic data that have been
used for years: a gluten-free diet for the management of celiac disease, a
lactose-free diet for those with lactose intolerance, and the avoidance of
dietary phenylalanine (an amino acid in protein foods and some artificial
sweeteners) for an inherited disorder called phenylketonuria. However precision nutrition is in its early stages and too soon to introduce as a treatment
for chronic diseases in the general population. Research is being conducted
on the application of precision nutrition for obesity, metabolic syndrome,
certain cancers, and type 2 diabetes.
    </p>
    </aside>
    
    
    
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


export default Hls;