import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dic from "./pages/Dic";
import Collection from "./pages/Collection";
import Library from "./pages/Library";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Hardware from "./Library/Hardware";
import Net from "./Library/Net";
import LearnCd from "./Library/learn_code";
import Electronic from "./Library/Electronic";
import Peri from "./Library/Peri";
import Main from "./Library/main";
import Health from "./Library/health";
import Hls from "./Library/hls-guide";
import Arch from "./Library/arch";
import APg1 from "./Library/arc_pg1";
import Trbl from "./Library/trbl";
import Whitebrd from "./Collections/Whiteboard";
import Website from "./Collections/Website";
import Dashboard from "./Collections/dashboard";
import FWeb from "./Collections/FWeb_dwn";
import Blog from "./pages/blog";
import Ecom from "./Collections/ecom_web";
import Note from "./Collections/note";
import Code from "./Collections/code";
import Doc from "./Collections/document";
import Gly from "./Collections/gallery/gallery";
import TutPage from "./Library/tut";
import TutHtml from "./Library/tut_html";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
         <Route path="/" element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="collection" element={<Collection />} />
          <Route path="dic" element={<Dic />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="hardware" element={<Hardware />} />
          <Route path="net" element={<Net />} />
          <Route path="electronic" element={<Electronic />} />
          <Route path="peri" element={<Peri />} />
          <Route path="main" element={<Main />} />
          <Route path="health" element={<Health />} />
          <Route path="hls" element={<Hls />} />
          <Route path="arch" element={<Arch />} />
          <Route path="arc_pg1" element={<APg1 />} />
          <Route path="trbl" element={<Trbl />} />
          <Route path="board" element={<Whitebrd />} />
          <Route path="website" element={<Website />} />
          <Route path="dashbrd" element={<Dashboard />} />
          <Route path="fweb" element={<FWeb />} />
          <Route path="blog" element={<Blog />} />
          <Route path="ecom_web" element={<Ecom />} />
          <Route path="note" element={<Note />} />
          <Route path="code" element={<Code />} />
          <Route path="doc" element={<Doc />} />
          <Route path="gly" element={<Gly />} />
          <Route path="lrn" element={<LearnCd />} />
          <Route path="tut_pg" element={<TutPage />} />
          <Route path="tut_html" element={<TutHtml />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);