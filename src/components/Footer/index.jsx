import React from "react";

function Footer() {

  return (
    <>
      <div className="site-footer">
        <div className="site-footer__container">
          <div className="row__large-7">
            <div className="site-footer__img">
              <img src="/images/ondo.svg" />
            </div>
            <div className="site-footer__text"> The Space Technology and Applications Mastery, Innovation and Advancement (STAMINA4Space) Program is a space research &amp; development program funded by the Department of Science and Technology (DOST) and implemented by the DOST-Advanced Science and Technology Institute University of the Philippines Diliman (UPD). It aims to further develop deep expertise that enable and sustain the growth of a local scientific-industrial base in space technology and applications in the Philippines. </div>
          </div>
          <div className="row__large-4 site-footer__right">
            <p>General Inquiries</p>
            <div className="site-footer__info">
              info@stamina4space.upd.edu.ph
            </div>
            <div className="site-footer__text">
              For specific inquiries addressed to the different <br /> project teams, check out our
              <a href="/contact-us-page" target="_blank">Contact Page</a>
              .
            </div>
            <div className="site-footer__social-title">Follow us</div>
            <div className="site-footer__social-icons">
              <div className="site-footer__social-item">
                <a target="_blank" href="https://www.facebook.com/STAMINA4Space/">
                  <img className="" src="https://stamina4space.upd.edu.ph/wp-content/themes/stamina4space/assets/images/facebook.png" />
                </a>
              </div>
              <div className="site-footer__social-item">
                <a target="_blank" href="https://twitter.com/stamina4space?lang=en">
                  <img src="https://stamina4space.upd.edu.ph/wp-content/themes/stamina4space/assets/images/twitter.png" />
                </a>
              </div>
              <div className="site-footer__social-item">
                <a target="_blank" href="https://www.instagram.com/stamina4space/?hl=en">
                  <img src="https://stamina4space.upd.edu.ph/wp-content/themes/stamina4space/assets/images/instagram.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
