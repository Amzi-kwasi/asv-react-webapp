// import { useEffect, useState } from "react";
// import uuid from "react-uuid";
// import Main from "./main/Main";
// import Sidebar from "./sidebar/Sidebar";
import "./note.css";
import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top"
import TNav from "../component/topnav";

function Notepad() {
  // const [notes, setNotes] = useState(
  //   localStorage.notes ? JSON.parse(localStorage.notes) : []
  // );
  // const [activeNote, setActiveNote] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes));
  // }, [notes]);

  // const onAddNote = () => {
  //   const newNote = {
  //     id: uuid(),
  //     title: "Untitled Note",
  //     body: "",
  //     lastModified: Date.now(),
  //   };

  //   setNotes([newNote, ...notes]);
  //   setActiveNote(newNote.id);
  // };

  // const onDeleteNote = (noteId) => {
  //   setNotes(notes.filter(({ id }) => id !== noteId));
  // };

  // const onUpdateNote = (updatedNote) => {
  //   const updatedNotesArr = notes.map((note) => {
  //     if (note.id === updatedNote.id) {
  //       return updatedNote;
  //     }

  //     return note;
  //   });

  //   setNotes(updatedNotesArr);
  // };

  // const getActiveNote = () => {
  //   return notes.find(({ id }) => id === activeNote);
  // };

  return (
    <>
      
<TNav />
      <div className="topnav" id='mxw_nav'>
        <Link to="/"><a><i className='fa fa-home'></i>&ensp;Home</a></Link>
        <Link to="/library"><a><i className='fa fa-book'></i>&ensp;Library</a></Link>
        <Link to="/contact"><a><i className='fa fa-phone'></i>&ensp;Contact</a></Link>
        <Link to="/dic"><a><i className='fa fa-search-plus'></i>&ensp;ITD</a></Link>
        <Link to="/collection"><a className="active"><i className='fa fa-clone'></i>&ensp;Tools</a></Link>
    </div>
<br className="br"/>
<br className="br"/>
    <div className="sub-nav">
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Notepad</a>
    </div>
    <br/>
    <br/>

      {/* <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} /> */}
    
      <ScrollToTop smooth/>
       <div className="navbarc" id="myNavbarc">
             <Link to="/"><a className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></a></Link>
             <Link to="/library"><a className="fa fa-book" title="library"><br/><small className="smaller">Library</small></a></Link>
             <Link to="/contact"><a  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></a></Link>
             <Link to="/dic"><a className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></a></Link>
             <Link to="/collection"><a className="fa fa-clone act" title="collection"><br/><small className="smaller">Tools</small></a></Link>
        </div>
    </>
  );
}

export default Notepad;
