import "./login.css";

export default function UserLog() {
  return (
    <div>
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
            <span>
              <div>
                <span>
                  <div>
                    <img
                      className="log-brand-logo"
                      src={require("./Logo.png")}
                    />
                    <h1 className="log-brand-name"> Medicare </h1>
                  </div>
                  <div className="log-body">
                    <h1>Login To Your Account</h1>
                    <span>
                      <h2>Don't have an account?</h2>
                      <h3> Sign up is free!</h3>
                    </span>
                  </div>
                  <div className="log-login-logo">
                    <span>
                      <span className="log-logo-one">
                        <img src={require("./gmail.png")} />
                      </span>
                      <span className="log-logo-two">
                        <img src={require("./fb.png")} />
                      </span>
                      <span className="log-logo-thr">
                        <img src={require("./twit.png")} />
                      </span>
                    </span>
                  </div>
                  <div className="log-break">
                    <span className="log-line-lft"></span>
                    <span>
                      <h1>or</h1>
                    </span>
                    <span className="log-line-rgt"></span>
                  </div>
                  <div className="log-div">
                    <div className="log-form">
                      <input
                        type="text"
                        autoComplete="off"
                        name="Fname"
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        autoComplete="off"
                        name="pass"
                        id="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <div className="log-forg">
                    <h1>Forgot Password?</h1>
                  </div>
                  <div className="log-in">
                    <button type="log-in">Login with email</button>
                  </div>
                </span>
              </div>
            </span>
          </div>
        </div>
        -------------------------
      </div>
    </div>
  );
}
