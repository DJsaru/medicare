import Cards from "./Cards";
import "./depart.css";
import Footer from "../Footer/footer";

export default function Departments() {
  return (
    <div>
      <div className="head">
        <h1 className="font"> DOCTOR DETAILS </h1>
      </div>

      <div className="doc-one">
        <h1> All Departments </h1>
        <p>
          LOREM.....Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum{" "}
          <p className="p1">
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of{" "}
          </p>{" "}
          <p className="p2">
            type and scramble it to make a type specimen book.
          </p>
        </p>
      </div>
      <div className="dep-cards">
        <Cards />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
