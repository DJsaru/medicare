import "./footer.css";

export default function Footer() {
  return (
    <>
      <div>
        <section className="line-break">
          <div className="foot-ele">
            <span className="img-in">
              <img src="./logo.png" alt="logo" />
            </span>
            <div className="foot-eml">
              <input
                type="text"
                autoComplete="off"
                name="Email"
                id="email"
                placeholder="email"
                required
              />
              <span className="gmail-in">
                <h1> Gmail</h1>
              </span>
            </div>
            <div className="about-in">
              <h1> About Us</h1>
              <span className="link-one">
                <h2>Link...</h2>
                <h2>Link...</h2>
                <h2>Link...</h2>
              </span>
            </div>
            <div className="links-in">
              <h1>Quick Links</h1>
              <span className="link-one">
                <h2>Link...</h2>
                <h2>Link...</h2>
                <h2>Link...</h2>
              </span>
            </div>
            <div className="owner-in">
              <h1> Created By</h1>
              <span className="link-one">
                <h2>Sarang Jaybhaye</h2>
                <h2>9356438974</h2>
              </span>
            </div>
            <div className="soc-med">
              <span className="soc-logo-one">
                <img src="./insta.png" alt="logo" />
              </span>
              <span className="soc-logo-two">
                <img src="./fb.png" alt="logo" />
              </span>
              <span className="soc-logo-three">
                <img src="./gmail.png" alt="logo" />
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
