import React, { Component } from "react";
import "styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footersubdiv">
            <div id="languagediv">
              <a href="#" className="language" id="currentlang">
                English (UK)
              </a>
              <a href="#" className="language">
                മലയാളം
              </a>
              <a href="#" className="language">
                தமிழ்
              </a>
              <a href="#" className="language">
                ಕನ್ನಡ
              </a>
              <a href="#" className="language">
                हिन्दी
              </a>
              <a href="#" className="language">
                اردو
              </a>
              <a href="#" className="language">
                বাংলা
              </a>
              <a href="#" className="language">
                తెలుగు{" "}
              </a>
              <a href="#" className="language">
                Español
              </a>
              <a href="#" className="language">
                Português (Brasil)
              </a>
              <a href="#" className="language">
                Français (France)
              </a>
              <a href="#" id="morelang">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </a>
            </div>
            <hr id="hrfinal" />
            <div id="extralinksdiv">
              <a href="#" className="extralinks">
                Sign Up
              </a>
              <a href="#" className="extralinks">
                Log In
              </a>
              <a href="#" className="extralinks">
                Messenger
              </a>
              <a href="#" className="extralinks">
                Facebook Lite
              </a>
              <a href="#" className="extralinks">
                Find Friends
              </a>
              <a href="#" className="extralinks">
                People
              </a>
              <a href="#" className="extralinks">
                Profiles
              </a>
              <a href="#" className="extralinks">
                Pages
              </a>
              <a href="#" className="extralinks">
                Page categories
              </a>
              <a href="#" className="extralinks">
                Places
              </a>
              <a href="#" className="extralinks">
                Games
              </a>
              <a href="#" className="extralinks">
                Locations
              </a>
              <a href="#" className="extralinks">
                Marketplace
              </a>
              <a href="#" className="extralinks">
                Groups
              </a>
              <a href="#" className="extralinks">
                Instagram
              </a>
              <a href="#" className="extralinks">
                Local
              </a>
              <a href="#" className="extralinks">
                Fundraisers
              </a>
              <a href="#" className="extralinks">
                About
              </a>
              <a href="#" className="extralinks">
                Create ad
              </a>
              <a href="#" className="extralinks">
                Create Page
              </a>
              <a href="#" className="extralinks">
                Developers
              </a>
              <a href="#" className="extralinks">
                Careers
              </a>
              <a href="#" className="extralinks">
                Privacy
              </a>
              <a href="#" className="extralinks">
                Cookies
              </a>
              <a href="#" className="extralinks">
                AdChoices
              </a>
              <a href="#" className="extralinks">
                Terms
              </a>
              <a href="#" className="extralinks">
                Account security
              </a>
              <a href="#" className="extralinks">
                Login help
              </a>
              <a href="#" className="extralinks">
                Help
              </a>
            </div>
            <div id="copyrightdiv">
              <span id="copyright">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  id="copyrightfblink"
                >
                  Facebook
                </a>{" "}
                © 2019
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
