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
            <h1 className="overview__name-small">OWLSAT- 1 and OWLSAT-2  overview  /Big font/</h1>
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
                    <div className="overview__table-text">0.9kg</div>
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
                    <div className="overview__table-text">10cm x 10 cm x 5 cm (Stowed State)</div>
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
                      <li>Mission Board:
                        <ul>
                          <li> Store-and-Forward (S&F) mission for the amateur operators on amatuer UHF band </li>
                          <li> Camera Mission (OVCAM), which will capture images of the Earth from space </li>
                          <li> Remote sensor mission based on low-power RF module for demonstration of remote data collection, in order to monitor enviromental hazards in remote areas of Mongolia </li>
                        </ul>
                      </li>
                      <li>Main Boards:
                        <ul>
                          <li> Experimental on-board computer (OBC), an original research & development of the ONDOSAT-OBC, The goal of the new OBC is to become a foundation for future CubeSats. </li>
                          <li> Experimental Passive attitude control system </li>
                          <li> Experimental Electrical Power System (EPS), an original research & development of the ONDOSAT-EPS </li>
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
                    <div className="overview__table-text">Target: 2024 Q1 </div>
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
                      <li className="overview__table-text"> To give continuity to two missions; Imaging Mission (OVCAM) and Store & Forward (S&F) mission </li>
                      <li className="overview__table-text"> To serve the Amateur radio community with S&F mission </li>
                      <li className="overview__table-text"> To design, build, test and demonstrate Experimental On-Board Computer (ONDOSAT-OBC) </li>
                      <li className="overview__table-text"> To demonstrate the Passive Attitude Control System </li>
                      <li className="overview__table-text"> To demonstrate the Remote sensor mission based on low-power RF module </li>
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
