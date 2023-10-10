import React from 'react';

import Header from "@components/Header";
import Footer from "@components/Footer";

function Contact() {

  return (
    <>
      <Header />
      <div className="container">
        <div className="contact">
          <div className="contact__head">
            <div className="contact__head-title">
              General inquiries:
            </div>
            <div className="contact__head-sub">
              <div className="contact__head-sub-email">
                <a href='mailto: info@ondosat.com'>
                  info@ondosat.com
                </a>
              </div>
              <div class="contact__head-sub-social">
                <a target="_blank" href="https://www.facebook.com/ondospace.co">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact__body">
            <div className="contact__body-title mt-4">
              For inquiries specific to the different project teams:
            </div>
            <div className="contact__body-box row">
              <div className="contact__body-box-item col-md-6 contact__box">
                <div className="contact__body-box-item-title">
                  <div className='pe-2'>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </div>
                  <div className='text-white'>
                    PROJECT 1: OPTIKAL
                  </div>
                </div>
                <div className="contact__body-box-item-email">
                  <b>Email:</b> <br/> optikal.s4sprogram@gmail.com
                </div>
                <div className="contact__body-box-item-address">
                  <b>Address:</b> <br/> National Institute of Physics, University of the Philippines Diliman, Quezon City, Philippines
                </div>
                <div className="contact__body-box-item-number">
                  <b>Telephone Number:</b> <br/> 8981-8500 loc 3707
                </div>
              </div>

              <div className="contact__body-box-item col-md-6 contact__box">
                <div className="contact__body-box-item-title">
                  <div className='pe-2'>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </div>
                  <div className='text-white'>
                    PROJECT 1: OPTIKAL
                  </div>
                </div>
                <div className="contact__body-box-item-email">
                  <b>Email:</b> <br/> optikal.s4sprogram@gmail.com
                </div>
                <div className="contact__body-box-item-address">
                  <b>Address:</b> <br/> National Institute of Physics, University of the Philippines Diliman, Quezon City, Philippines
                </div>
                <div className="contact__body-box-item-number">
                  <b>Telephone Number:</b> <br/> 8981-8500 loc 3707
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )

}

export default Contact;
