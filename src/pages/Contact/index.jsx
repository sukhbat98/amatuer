import React, { useState, useMemo } from 'react';

import Header from "@components/Header";
import Footer from "@components/Footer";

const initProjects = [
  {
    icon: "fa fa-eye",
    title: "PROJECT 1: OPTIKAL",
    email: 'optikal.s4sprogram@gmail.com',
    address: 'National Institute of Physics, University of the Philippines Diliman, Quezon City, Philippines',
    phone: '8981-8500 loc 3707',
  },
  {
    icon: "fa fa-wrench",
    title: "PROJECT 2: PHL-50",
    email: 'project-phl50@stamina4space.upd.edu.ph',
    address: 'University Laboratory for Small Satellites and Space Engineering Systems Building 1 (ULyS³ES-1), Electrical and Electronics Engineering Institute, University of the Philippines Diliman, Quezon City, Philippines',
    phone: '8981-8500 loc 3305',
  },
]

function Contact() {
  const [projects, setProjects] = useState(initProjects)

  const displayProjects = useMemo(() => {
    if (projects.length === 0) {
      return null
    }

    let returnValue = []
    projects.map((project, idx) => {
      returnValue.push(
        <div key={idx} className="contact__body-box-item col-md-6 contact__box">
          <div className="contact__body-box-item-title">
            <div className='pe-2'>
              <i className={project.icon} aria-hidden="true"></i>
            </div>
            <div className='text-white'>
              {project.title}
            </div>
          </div>
          <div className="contact__body-box-item-email">
            <b>Email:</b> <br/> {project.email}
          </div>
          <div className="contact__body-box-item-address">
            <b>Address:</b> <br/> {project.address}
          </div>
          <div className="contact__body-box-item-number">
            <b>Telephone Number:</b> <br/> {project.phone}
          </div>
        </div>
      )
    })

    return returnValue
  }, projects)

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
              <div className="contact__head-sub-social">
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
              {displayProjects}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )

}

export default Contact;
