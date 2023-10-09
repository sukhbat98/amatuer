import React from "react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {

  return (
    <>
      <Header />
      <div>
        <div className="row large-hero">
          <div className="row__large-6">
            <picture>
              <img className="large-hero__image" src={`/images/maya-5.png`} alt="Ocean view" />
            </picture>
          </div>
          <div className="row__large-6">
            <h1 className="large-hero__name">
              Maya-5 and Maya-6
            </h1>
            <p className="large-hero__text">
              Maya-5 and Maya-6 are the second set of Philippine university-built CubeSats, currently being developed by the second batch of STeP-UP scholars. The project aims to gain and locally extend the knowledge and skills on satellite development acquired from foreign schooling and utilize the domestic capabilities for satellite development. The two cube satellites share the same bus but differ in mission payload. Maya-5 has the same mission payload as that of the Maya-2, and Maya-6 has the experimental on-board computer (OBC-EX) mission payload, which controls the attitude determination and control system (ADCS) and hentenna (HNT) missions. The development of Maya-5 and Maya-6 aims to continue and build on the country’s initiatives on satellite development while transitioning to locally available components and fabricated boards, and manufactured structural frames by designing, building, testing, launching, and operating satellites that will serve as the heritage for future CubeSat missions.
            </p>
            <div className="large-hero__button">
              <Link to="manuals">
                <button className="large-hero__button-light">
                  BROWSE MANUALS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="overview">
        <div className="overview__container">
          <h1 className="overview__name-small">Maya-5 and Maya-6 overview</h1>
          <table className="overview__table">
            <tbody>
              <tr>
                <td>
                  <div className="overview__table-text">Class</div>
                </td>
                <td>
                  <div className="overview__table-text">Cube Satellite (Cubesat)</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="overview__table-text">Mass</div>
                </td>
                <td>
                  <div className="overview__table-text">-1 kg</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="overview__table-text">Type</div>
                </td>
                <td>
                  <div className="overview__table-text">Technology Demonstration</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="overview__table-text">Dimensions</div>
                </td>
                <td>
                  <div className="overview__table-text">10cm x 10 cm x 10 cm (Stowed State)</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="overview__table-text">Orbit</div>
                </td>
                <td>
                  <div className="overview__table-text">Low Earth</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="overview__table-text">Payloads</div>
                </td>
                <td className="overview__table-text">
                  <ul>
                    <li> Mission Board 1 <ul>
                        <li> Maya-5 <ul>
                            <li> Attitude Determination and Control System (ADCS), which is the primary source of attitude information of the satellite </li>
                            <li> Hentenna (HNT), which is an experimental communication system that uses the satellite structure as an antenna </li>
                          </ul>
                        </li>
                        <li> Maya-6 <ul>
                            <li> Experimental on-board computer (OBC-EX), an original development of the STeP-UP project. The goal of the OBC-EX is to become a foundation for future CubeSats, which will have an integrated system that can act as a secondary on-board computer, determine and control the satellite’s attitude, and use the satellite’s structure as a communication system to the ground station. </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>Mission Board 2 (Maya-5 and Maya-6) <ul>
                        <li> Camera Mission (CAM), which will capture images of the Earth from space </li>
                        <li> Image Classification Unit (ICU) mission, which is an on-board image processor that uses Machine Learning to classify the images taken by the Camera Mission </li>
                        <li> Automatic Packet Reporting System- Digipeater (APRS-DP), which is an amateur radio based, real-time, local and digital communication system which can receive packets, process them and retransmit them back on the same frequency </li>
                        <li> Store and Forward (S&amp;F) mission, which collects data from specific distributed sensors all around remote locations on Earth, “stores” them in the CubeSat and “forwards” it to a designated ground station once it passes over it </li>
                      </ul>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="overview__table-text">Launch</div>
                </td>
                <td>
                  <div className="overview__table-text">Target: 2022 </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="overview__table-text">Release</div>
                </td>
                <td>
                  <div className="overview__table-text">To be determined</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="overview__table-text">Mission</div>
                </td>
                <td>
                  <ul>
                    <li className="overview__table-text"> To give continuity to two missions; Imaging Mission (CAM) and Store &amp; Forward (SF-WARD) </li>
                    <li className="overview__table-text"> To serve the Amateur radio community with APRS-Digipeater mission (APRS-DP) </li>
                    <li className="overview__table-text"> To design, build, test and demonstrate Experimental On-Board Computer (OBC-EX) </li>
                    <li className="overview__table-text"> To demonstrate CubeSat structure as antenna (HNT) </li>
                    <li className="overview__table-text"> To demonstrate the on-board image classification unit (ICU) </li>
                    <li className="overview__table-text"> To expand database of COTS components useful in space applications (TMCR) </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="overview__table-text">Status</div>
                </td>
                <td>
                  <div className="overview__table-text">Under Development</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="timeline-section">
        <h1 className="timeline-section__title">Maya-5 and Maya-6 timeline</h1>
        <div className="timeline-section__subtitle">Follow Maya-5's and Maya-6's space journey.</div>
      </div>

      <ul className="timeline">
        <li className="timeline__event">
          <a href="https://stamina4space.upd.edu.ph/timeline/24-september-2020/">
            <label className="timeline__event-icon"></label>
          </a>
          <div className="timeline__event-copy">
            <a href="https://stamina4space.upd.edu.ph/timeline/24-september-2020/">
              <p className="timeline__event-thumbnail">24 September 2020</p>
              <img className="timeline__img-thumbnail" src=" https://stamina4space.upd.edu.ph/wp-content/uploads/2021/06/STeP-UP-Batch-2-Orientation.png" />
            </a>
            <p></p>
            <p>
              <strong>DOST-SEI conducted the scholarship orientation for the accepted 8 graduate students.</strong>
            </p>
            <p>
              <span style={{fontWeight: 400}}>The following are part of the second batch of scholars, who successfully passed and admitted to the program by the UP Diliman National Graduate School of Engineering and endorsed to DOST-SEI: <br/> · Alvarez, Anna Ruth <br/> · Co, Joseph Jonathan <br/> · Collamar, Ronald <br/> · Chua, Angela Clarisse <br/> · Doloriel, Chandler Timm <br/> · Macaraeg, Khazmir Camille Valerie <br/> · Remocaldo, Genesis <br/> · Tagabi, Gio Asher </span>
            </p>
            <p></p>
          </div>
        </li>

        <li className="timeline__event">
          <a href="https://stamina4space.upd.edu.ph/timeline/06-november-2020/">
            <label className="timeline__event-icon"></label>
          </a>
          <div className="timeline__event-copy">
            <a href="https://stamina4space.upd.edu.ph/timeline/06-november-2020/">
              <p className="timeline__event-thumbnail">06 November 2020</p>
              <img className="timeline__img-thumbnail" src=" https://stamina4space.upd.edu.ph/wp-content/uploads/2021/06/Scholars-and-tasks.jpg" />
            </a>
            <p></p>
            <p>
              <strong>STeP-UP Batch 2 Scholars Kick-off meeting</strong>
            </p>
            <p>The kickoff meeting aimed to introduce the new batch of scholars to partners and stakeholders of the program, share the plans and ongoing activities of both the first and second batches of the scholars taking the nanosatellite engineering graduate track, and promote and raise awareness on satellite development and space initiatives to encourage the youth to take more interest in space science and technology.</p>
            <div className="timeline__more-link">
              <a href="https://www.up.edu.ph/up-to-train-8-new-filipino-satellite-makers/?fbclid=IwAR0XvcvUJSjb43bFSHdTiyiHJIPHwP-TnCAXiN-pvFL6yv35Vk5fOWTeYrg">
                Learn More &nbsp;
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            <p></p>
          </div>
        </li>

        <li className="timeline__event">
          <a href="https://stamina4space.upd.edu.ph/timeline/27-november-2020/">
            <label className="timeline__event-icon"></label>
          </a>
          <div className="timeline__event-copy">
            <a href="https://stamina4space.upd.edu.ph/timeline/27-november-2020/">
              <p className="timeline__event-thumbnail">27 November 2020</p>
              <img className="timeline__img-thumbnail" src=" https://stamina4space.upd.edu.ph/wp-content/uploads/2021/06/STeP-UP-Batch-2_MDR_2.png" />
            </a>
            <p></p>
            <p>
              <strong>Mission Design Review (MDR)</strong>
            </p>
            <p>Mission Design Review (MDR) of the Maya-5 and Maya-6 cube satellites, where the plans for development were presented by the Batch 2 of the STeP-UP Project scholars.</p>
            <p></p>
          </div>
        </li>

        <li className="timeline__event">
          <a href="https://stamina4space.upd.edu.ph/timeline/july-8-2021/">
            <label className="timeline__event-icon"></label>
          </a>
          <div className="timeline__event-copy">
            <a href="https://stamina4space.upd.edu.ph/timeline/july-8-2021/">
              <p className="timeline__event-thumbnail">July 8, 2021</p>
              <img data-src=" https://stamina4space.upd.edu.ph/wp-content/uploads/2021/07/Screenshot-303.png" className="timeline__img-thumbnail" src=" https://stamina4space.upd.edu.ph/wp-content/uploads/2021/07/Screenshot-303.png" />
            </a>
            <p></p>
            <p>
              <b>Preliminary Design Review (PDR)</b>
            </p>
            <p>Preliminary Design Review (PDR) of the Maya-5 and Maya-6 cube satellites presented to the STAMINA4Space Program and stakeholders.</p>
            <p></p>
          </div>
        </li>

        <li className="timeline__event">
          <a href="https://stamina4space.upd.edu.ph/timeline/august-2022/">
            <label className="timeline__event-icon"></label>
          </a>
          <div className="timeline__event-copy">
            <a href="https://stamina4space.upd.edu.ph/timeline/august-2022/">
              <p className="timeline__event-thumbnail">August 2022</p>
              <img className="timeline__img-thumbnail" src=" https://stamina4space.upd.edu.ph/wp-content/uploads/2022/11/A-1-scaled.jpg" />
            </a>
            <p></p>
            <p>
              <strong> Scholars go to Japan for Maya-5 and Maya-6 CubeSat Testing </strong>
            </p>
            <p></p>
          </div>
        </li>

        <li className="timeline__event">
          <a href="https://stamina4space.upd.edu.ph/timeline/september-2022-2/">
            <label className="timeline__event-icon"></label>
          </a>
          <div className="timeline__event-copy">
            <a href="https://stamina4space.upd.edu.ph/timeline/september-2022-2/">
              <p className="timeline__event-thumbnail">September 2022</p>
              <img className="img-thumbnail" src="https://stamina4space.upd.edu.ph/wp-content/uploads/2022/11/307123717_3216772658581831_8149970886562737132_n.jpg" />
            </a>
            <p></p>
            <p>
              <strong> Maya-3 &amp; Maya-4 testing phase in Japan completed </strong>
              <br/> The 2nd Batch of STeP-UP Scholars completes the sandwich program under the Master of Science (MS) and Master of Engineering (MEng) in Electrical Engineering – nanosatellite engineering track of the UP Electrical and Electronics Engineering Institute. This scholarship is an initiative of our Space Science and Technology Proliferation through University Partnerships (STeP-UP) Project and supported by the&nbsp;Science Education Institute – Department of Science and Technology.
            </p>
            <p>The sandwich program in Japan includes satellite environmental test training, Maya-5 &amp; 6 cube satellites’ final assembly, and flight model(FM) tests. <br/>
            </p>
            <p></p>
          </div>
        </li>

        <li className="timeline__event">
          <a href="https://stamina4space.upd.edu.ph/timeline/19-july-2023/">
            <label className="timeline__event-icon"></label>
          </a>
          <div className="timeline__event-copy">
            <a href="https://stamina4space.upd.edu.ph/timeline/19-july-2023/">
              <p className="timeline__event-thumbnail">19 July 2023</p>
              <img className="timeline__img-thumbnail" src="https://stamina4space.upd.edu.ph/wp-content/uploads/2023/07/m5m6.jpg" />
            </a>
            <p></p>
            <p>
              <strong>PH-built cube satellites, Maya-5 and Maya-6, deployed to space</strong>
            </p>
            <p>The Philippines’ second batch of locally developed cube satellites (CubeSats) Maya-5 and Maya-6 were successfully released to space from the International Space Station (ISS) on 19 July 2023 at 3:00 p.m. PST as a part of the “Kibo” or Japanese Experiment Module (JEM) Small Satellite Orbital Deployer-26 (J-SSOD-26) CubeSat deployment mission.</p>
            <p>
              <a className="timeline__more-link" href="https://stamina4space.upd.edu.ph/2023/07/19/ph-built-cube-satellites-maya-5-and-maya-6-deployed-to-space//">
                Learn More &nbsp;
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </p>
            <p></p>
          </div>
        </li>
      </ul>

      <Footer />
    </>
  )
}

export default Home;
