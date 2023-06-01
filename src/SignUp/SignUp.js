import "./signup.css";

export default function SignUp() {
  return (
    <div className="bg-clr">
      <div className="container-back">
        <span>
          <div className="rgt-h-side">
            <h1> Welcome </h1>
            <p> To </p>
          </div>
          <div className="rgt-h-side-med">
            <h1> Medicare Account </h1>
          </div>
        </span>
      </div>
      <div>
        <div className="container-up">
          <div>
            <img className="log-brand-logo" src={require("./Logo.png")} />
            <h1 className="log-brand-name"> Medicare </h1>
          </div>
          <div className="log-body-s">
            <h1>Sign Up Free!</h1>
            <div className="sign-div">
              <div className="log-form">
                <input
                  type="text"
                  autoComplete="off"
                  name="FullName"
                  id="fullname"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="sign-form">
                <input
                  type="text"
                  autoComplete="off"
                  name="Fname"
                  id="emails"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  autoComplete="off"
                  name="pass"
                  id="passwords"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="sign-in">
              <button type="sign-in">Sign up with email</button>
            </div>
            <div className="signfot">
              <h1>Already have an acoount?</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
