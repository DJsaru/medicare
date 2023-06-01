import Footer from "../../Footer/footer";
import "./form.css";
import { useState } from "react";

export default function Appoint() {
  const [user, setUser] = useState({
    Fname: "",
    Lname: "",
    Age: "",
    Gender: "",
    Email: "",
    Contact: "",
    Address: "",
    City: "",
    Time: "",
    Date: "",
  });

  let name, value;
  const getData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const {
      Fname,
      Lname,
      Age,
      Gender,
      Email,
      Contact,
      Address,
      City,
      Time,
      Date,
    } = user;
    if (
      !Fname ||
      !Lname ||
      !Age ||
      !Gender ||
      !Email ||
      !Contact ||
      !Address ||
      !City ||
      !Time ||
      !Date
    ) {
      setUser({
        Fname: "",
        Lname: "",
        Age: "",
        Gender: "",
        Email: "",
        Contact: "",
        Address: "",
        City: "",
        Time: "",
        Date: "",
      });
      return alert("please fill information!!!");
    }

    const res = await fetch(
      "https://medicare-7138b-default-rtdb.firebaseio.com/for.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fname,
          Lname,
          Age,
          Gender,
          Email,
          Contact,
          Address,
          City,
          Time,
          Date,
        }),
      }
    ).then((response) => window.location.reload());
  };

  return (
    <>
      <section className="grid-container">
        <>
          <form action="">
            <div>
              <h1 className="hero-app">APPOINTMENT</h1>
            </div>
            <div className="header-top">
              <h1 className="head-one"> GET AN APPOINTMENT</h1>
              <p className="head-line-1"></p>
              <p className="head-line-2"> + </p>
              <p className="head-line-3"></p>
            </div>
            <div className="containers">
              <div className="cont-det">
                <div className="first">
                  <label htmlFor="firstName">First Name</label> <br />
                  <input
                    type="text"
                    autoComplete="off"
                    name="Fname"
                    id="firstName"
                    placeholder="firstName"
                    required
                    value={user.Fname}
                    onChange={getData}
                  />
                </div>
                <div className="last">
                  <label htmlFor="lasttName">Last Name</label> <br />
                  <input
                    type="text"
                    autoComplete="off"
                    name="Lname"
                    id="lastName"
                    placeholder="lastName"
                    required
                    value={user.Lname}
                    onChange={getData}
                  />
                </div>
                <div className="age">
                  <label htmlFor="age">Age</label> <br />
                  <input
                    type="number"
                    autoComplete="off"
                    name="Age"
                    id="age"
                    placeholder="age"
                    required
                    value={user.Age}
                    onChange={getData}
                  />
                </div>
                <div className="gender">
                  <label htmlFor="gender">Gender</label> <br />
                  <input
                    type="text"
                    autoComplete="off"
                    name="Gender"
                    id="gender"
                    placeholder="gender"
                    required
                    value={user.Gender}
                    onChange={getData}
                  />
                  {/* <select name="Gender" id="gender" placeholder='gender' required>
                        <option> Gender </option>   
                        <option> Male </option>
                        <option> Female </option>
                        <option> Other </option>
                        value={user.Gender} onChange={getData}
                        </select> */}
                </div>
                <div className="email">
                  <label htmlFor="email">E-Mail Address</label> <br />
                  <input
                    type="text"
                    autoComplete="off"
                    name="Email"
                    id="email"
                    placeholder="email"
                    required
                    value={user.Email}
                    onChange={getData}
                  />
                </div>
                <div className="contact">
                  <label htmlFor="contactNo">Contact Number</label> <br />
                  <input
                    type="number"
                    autoComplete="off"
                    name="Contact"
                    id="contactNo"
                    placeholder="contactNo"
                    required
                    value={user.Contact}
                    onChange={getData}
                  />
                </div>
                <div className="address">
                  <label htmlFor="address">Address</label> <br />
                  <input
                    type="text"
                    autoComplete="off"
                    name="Address"
                    id="address"
                    placeholder="address"
                    required
                    value={user.Address}
                    onChange={getData}
                  />
                </div>
                <div className="city">
                  <label htmlFor="city">City</label> <br />
                  <input
                    type="text"
                    autoComplete="off"
                    name="City"
                    id="city"
                    placeholder="city"
                    required
                    value={user.City}
                    onChange={getData}
                  />
                </div>
                <div className="timing">
                  <label htmlFor="timing">Timing</label> <br />
                  <input
                    type="time"
                    autoComplete="off"
                    name="Time"
                    id="timing"
                    placeholder="time"
                    required
                    value={user.Time}
                    onChange={getData}
                  />
                </div>
                <div className="date">
                  <label htmlFor="date">Date to visit</label> <br />
                  <input
                    type="date"
                    autoComplete="off"
                    name="Date"
                    id="date"
                    placeholder="date"
                    required
                    value={user.Date}
                    onChange={getData}
                  />
                </div>
                <div className="submit">
                  <button type="submit" onClick={postData}>
                    GET AN APPOINTMET
                  </button>
                </div>
              </div>
            </div>
          </form>
        </>
      </section>

      <div className="form-foot">
        <Footer />
      </div>
    </>
  );
}
