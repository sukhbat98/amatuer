import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";

function Amatuer() {

  return (
    <>
      <Header />

      {/* Main content*/}
      <div className="amatuer">
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
      </div>

      <Footer />
    </>
  )
}

export default Amatuer;
