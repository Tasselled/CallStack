import React from "react";
import "../stylesheets/welcomePageStyles.scss";
import WelcomePageNavBar from "../containers/public/WelcomePageNavBar";
import PublicContainer from "../containers/public/PublicContainer";
import Footer from "../containers/public/Footer";
import FooterFooter from "../containers/public/FooterFooter";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="welcomePage">
      <i className="fa-solid fa-otter mobileLogo"></i>
      <Link className="publicNavBarLink mobileSign" to="/loginpage">
        Sign In
      </Link>
      <Link
        className="publicNavBarLink publicSignupButton mobileSign"
        to="/signuppage"
      >
        Sign Up
      </Link>
      <WelcomePageNavBar />
      <PublicContainer />
      <hr />
      <Footer />
      <FooterFooter />
    </div>
  );
}
