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




function APg1() {
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
        <Link to="/library"><a style={{cursor: "pointer" , color:"#009000"}}>Library</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><Link to="/arch"><a style={{cursor: "pointer",color:"#009000"}}>Architectural Drawing</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a>Introduction to Architectural Drawing</a>
    </div>
    <br/>
    <br/>
    <div className="scrollmenu">
        <a className="scroact">Introduction To Architectural Drawing</a>
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
    <h5 className="orange">Architectural Drawing</h5>
    <a className="green">Introduction</a>
    <br/>
    <p>
    1. <i className="blue">Definition of Architectural Drawing.—</i>Architectural
drawing is the special language of the architect, which he uses
to convey to his client impressions of how a contemplated building will appear when completed. It is also used to convey to the
contractors and workmen who perform the work of erection
the information regarding size, form, materials, dimensions,
etc. necessary to enable them to estimate the probable cost of
the building, and to erect the building as the architect conceives it in his own mind
    </p>  

    <p>
    Architectural drawing is based on the principles of projection
drawing, which are applied in making the working drawings
required for the erection of the building. It also employs the
principles of perspective in drawings that show the building as it
will actually appear when viewed from some particular point.
    </p>
    <p>
    2. Architectural drawing does not require the extreme
accuracy that is called for in some forms of mechanical drawing.
A sufficient degree of accuracy is obtained by placing lines of
dimensions on the drawings to define the limits of certain portions of a building. Where precision is required, large-size
drawings are made which show details at exact size. 
    </p>

    <p>
    Freehand drawing is employed to a great extent in architectural drawing. In designing a building the architect generally
finds it helpful and often absolutely necessary to make numerous
freehand studies or sketches illustrating various portions of the
design. In making these studies a thorough knowledge of freehand drawing and facility in handling a pen or pencil are essential. Familiarity with the principles of perspective drawing will
also be found invaluable. These freehand studies, the architect's
first conception of a problem, are generally made with a soft pencil and without the use of instruments. In laying out a
working drawing, instruments such as are used in mechanical
and geometrical drawing are employed, and harder pencils are
used than those used in making the studies.
The elements of beauty' and character should always be considered in making an architectural drawing. These elements are
not often considered in mechanical drawing, where the principal aims are accuracy and economy in the use of materials.
Although utilitarian considerations also enter into architectural
drawing, they must be studied in conjunction with the expression of beauty and character.

    </p>

    <p>
    3. <i className="blue">Importance of Architectural Drawing.—</i>As has been
stated, architectural drawing is the special language of the
architect. Without its use no building of any importance could
be erected. The subject should be understood by all those interested in the construction of buildings, and in the education of
an architect a thorough knowledge of its meaning is fundamental.
A person who is desirious of becoming an architect is urged
to study this most important subject thoroughly. He should
practice drawing whenever he has time to do so. A student
of this course should draw carefully and studiously all the
plates and exercises called for in the texts on Architectural
Drawing and send them to the Schools for correction. He
should also, as a means of self-improvement, study and copy
as many as possible of the other drawings that are shown in
the illustrations throughout these texts, but these drawings
not to be sent to the Schools for correction.
    </p>
    <p>
    By doing this work the student may feel assured that he is
improving himself in a way that will be of the greatest advantage to him when the time comes for him to do practical architectural work. The beginner should always endeavor to have
his work neat and clean with clear, sharp lines and careful
lettering, as neatness is very desirable. He should not, however,
forget that his object is not only to draw lines neatly and
accurately, but to make them convey useful ideas. Otherwise the
drawing is of little practical value.
    </p>

    <p>
    4. <i className="blue">Technique of Architectural Drawing.—</i>.Methods used
in the production of drawings are described in previous texts,
which also include instructions regarding the use of drawing
boards, T-squares, triangles, drawing instruments, papers, pencils, pens, etc., and require the making of a series of elementary
drawings.
    </p>

    <p>
    5. <i className="blue">Nature of Architectural Drawing.—</i>Architectural drawing, in its complete sense, does not consist merely in making
marks, lines, letters, and numerals on sheets of paper. It is
the language used to express ideas of the design of buildings
and their numerous parts, and to show the construction of the
buildings and the application of the materials of which the buildings are to be made.
The numerous uses of architectural drawing as applied to
design, construction, and the uses of materials cannot be taught
in a single lesson. The subject is presented gradually, only
enough design and construction being considered at one time
to explain the drawing that is being made.
    </p>

    <h6 className="green">DESCRIPTION OF CLASSES</h6>
<p>
6. Classification.—It is customary, in the course of presenting a complete conception of a proposed building, to make
several kinds of drawings. These include preliminary studies,
preliminary sketches, working drawings, scale details, and fullsize details.
The preliminary studies are the freehand sketches which the
architect or draftsman makes when formulating his ideas for
a building. The preliminary sketches are those made to show
to the client so that he may get a good general idea of the proposed building and may make any changes that he desires before the permanent and detailed drawings are made. Both
the studies and the sketches will be described in a succeeding
text.
</p>
<img src={require("../img/arc-1.png")} className="hls-img" alt="/"/>
<img src={require("../img/arc-2.png")} className="hls-img" alt="/"/>
<img src={require("../img/arc-3.png")} className="hls-img" alt="/"/>
<img src={require("../img/arc-4.png")} className="hls-img" alt="/"/>
<img src={require("../img/arc-5.png")} className="hls-img" alt="/"/>
<img src={require("../img/arc-6.png")} className="hls-img" alt="/"/>    
<img src={require("../img/arc-7.png")} className="hls-img" alt="/"/>

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


export default APg1;