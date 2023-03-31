import Nav from "../component/Nav";
import React from "react";
import TNav from "../component/topnav";
import { Link } from "react-router-dom";

class Dic extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
          <TNav />
          <div className="topnav" id='mxw_nav'>
        <Link to="/"><a title="Home"><i className='fa fa-home'></i>&ensp;Home</a></Link>
        <Link to="/library"><a title="Library"><i className='fa fa-book'></i>&ensp;Library</a></Link>
        <Link to="/contact"><a title="Contact"><i className='fa fa-phone'></i>&ensp;Contact</a></Link>
        <Link to="/dic"><a title="Search" className="active"><i className='fa fa-search-plus'></i>&ensp;ITD</a></Link>
        <Link to="/collection"><a title="Tools"><i className='fa fa-clone'></i>&ensp;Tools</a></Link>
    </div>
    
          <br/>
          <br/>
            <h4 className="pls">Loading...</h4>
            
            <div className="navbarc" id="myNavbarc">
             <Link to="/"><a className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus act" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div>

             </div> 
   
        return (
          <>
        <div className = "App">
            <h1>List of abbreviations</h1>  {
                items.map((item) => ( 
                    <table className="table">
                    <tr>
                    <th className="th">Abbreviation</th>
                    <th >Meaning</th>
                    <th >Sup</th>
                    </tr>
                    <tr key = { item.id }>
                    <td>{ item.username }</td> 
                    <td>{ item.name }</td> 
                    <td>{ item.email }</td> 
                    </tr>
                    </table>
                ))
            }
        </div>
        
    
        </>
    );
}
}
   

  
  export default Dic;