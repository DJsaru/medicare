import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import "./nav.css";

//pages
import Blogs from "../Blog/Blog";
import Resources from "../Resources/Resources";
import Departments from "../Department/depart";
import DoctorVisit from "../VisitADoc/DoctVis";
import Home from "../Home/home";
import Appoint from "../LoginForm/Appoint/form";

export default function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar-home">
          <Link to="/">Home</Link>
          <NavLink to="/department"> Departments </NavLink>
          <NavLink to="/visitADoc"> Visit A Doctor </NavLink>
          <NavLink to="/resources"> Resources </NavLink>
          <NavLink to="/blog"> Blog </NavLink>
          <input type="text" placeholder="Search..." />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/department" element={<Departments />} />
            <Route path="/visitADoc" element={<DoctorVisit />} />
            <Route path="/visitADoc/appoint" element={<Appoint />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blogs />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
