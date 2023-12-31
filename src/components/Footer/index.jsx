import React from "react";

function Footer() {

  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__container">
          <div className="row__large-6">
            <div className="site-footer__img">
              <img className="lazyload" src="/ondo.svg" />
            </div>
            {/* <div className="site-footer__text"> The Space Technology and Applications Mastery, Innovation and Advancement (STAMINA4Space) Program is a space research &amp; development program funded by the Department of Science and Technology (DOST) and implemented by the DOST-Advanced Science and Technology Institute University of the Philippines Diliman (UPD). It aims to further develop deep expertise that enable and sustain the growth of a local scientific-industrial base in space technology and applications in the Philippines. </div> */}
          </div>
          <div className="row__large-6 site-footer__right">
            <p>General Inquiries</p>
            <div className="site-footer__info">
              info@ondosat.com
            </div>
            <div className="site-footer__text">
            New Horizons tower, 4 Olympic street, 1st Khoroo, Sukhbaatar District, Ulaanbaatar, Mongolia
              {/* <a href="/contact" target="_blank"> Contact Page</a> */}
              .
            </div>
            <div className="site-footer__social-title">Follow us:</div>
            <div className="site-footer__social-icons">
              <div className="site-footer__social-item">
                <a target="_blank" href="https://www.facebook.com/ondospace.co">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
