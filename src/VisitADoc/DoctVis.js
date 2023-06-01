import { Link, useNavigate } from "react-router-dom";
import "./Doc.css";
import { useState } from "react";

export default function DoctorVisit() {
  const [DocDetails] = useState([
    {
      id: 1,
      name: "Sarang Jaybhaye",
      speciality: "Heart Specialist",
      Experience: "7",
      Address: "Sinhgad College, Vadgaon Budruk, Pune,Maharashtra 411041",
      img: "https://as1.ftcdn.net/v2/jpg/02/60/39/00/1000_F_260390071_RraE7AykggXPS50PEmYjpT3RgKUhgvux.jpg",
    },
    {
      id: 2,
      name: "Aditya Jannawar",
      speciality: "Heart Specialist",
      Experience: "7",
      Address: "Sinhgad College, Vadgaon Budruk, Pune,Maharashtra 411041",
      img: "https://as1.ftcdn.net/v2/jpg/02/60/39/00/1000_F_260390071_RraE7AykggXPS50PEmYjpT3RgKUhgvux.jpg",
    },
  ]);

  const Nav = useNavigate();
  const appo = () => {
    Nav("/visitADoc");
  };

  return (
    <>
      <div>
        <span className="head">
          <h1 className="font"> DOCTOR DETAILS </h1>
          <nav>
            <Link to="/visitADoc/appoint">
              <div className="box" onClick={appo}>
                {" "}
                Appointment | +{" "}
              </div>
            </Link>
          </nav>
        </span>
      </div>

      <div>
        <div className="doc-block">
          <div className="doc-img">
            {DocDetails.map((det, id) => (
              <div key={id}>
                <img src={det.img} alt="doc-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
