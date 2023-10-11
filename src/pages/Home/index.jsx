import React from "react";

import { Link } from "react-router-dom";

import Header from "@components/Header";
import Footer from "@components/Footer";

function Home() {

  return (
    <>
      <Header />
      <div className="row large-hero" style={{margin: "0px"}}>
        <div className="row__large-6">
          <picture>
            <img className="large-hero__image lazyload" src={`/images/sat-1.png`} alt="Ocean view" />
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
          <a href="https://www3.nhk.or.jp/lnews/kitakyushu/20221128/5020012312.html">
            <label className="timeline__event-icon"></label>
          </a>
          <div className="timeline__event-copy">
            <a href="https://www3.nhk.or.jp/lnews/kitakyushu/20221128/5020012312.html">
              <p className="timeline__event-thumbnail">28 November 2022</p>
              <img className="timeline__img-thumbnail lazyload" src="https://www.nishinippon.co.jp/uploads/image/1457174/large_IP221128JAA000225000.jpg" />
            </a>
            <p></p>
            <p>
              <strong>九州工業大学とモンゴル政府や企業 宇宙開発で連携協定</strong>
            </p>
            <p>
              <span style={{fontWeight: 400}}>(www3.nhk.or.jp) 北九州市にある九州工業大学は、モンゴルでの宇宙開発のためにモンゴル政府や企業などと連携していくことになり、２８日は、元横綱・白鵬の宮城野親方が立会人となって協定の締結式が行われました。</span>
            </p>
            <p></p>
            <div className="timeline__more-link">
              <a href="https://www3.nhk.or.jp/lnews/kitakyushu/20221128/5020012312.html">
                Learn More &nbsp;
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </li>

        <li className="timeline__event">
          <a href="https://www.nishinippon.co.jp/item/n/1020892/">
            <label className="timeline__event-icon"></label>
          </a>
          <div className="timeline__event-copy">
            <a href="https://www.nishinippon.co.jp/item/n/1020892/">
              <p className="timeline__event-thumbnail">
                28 November 2022
              </p>
              <img className="timeline__img-thumbnail lazyload" src="https://www.nishinippon.co.jp/uploads/image/1457174/large_IP221128JAA000225000.jpg" />
            </a>
            <p></p>
            <p>
              <strong>衛星開発で「大金星を」　モンゴルの宇宙ベンチャーと九工大が協定　宮城野親方エール</strong>
            </p>
            <p>(www.nishinippon.co.jp) 九州工業大（北九州市戸畑区）と、同大留学経験者が共同創設者となったモンゴルの宇宙ベンチャー「オンド　スペース」、モンゴル政府の3者は、同国の人工衛星開発を支援する連携協定を結んだ。</p>
            <div className="timeline__more-link">
              <a href="https://www.nishinippon.co.jp/item/n/1020892/">
                Learn More &nbsp;
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            <p></p>
          </div>
        </li>

        <li className="timeline__event">
          <a href="https://www.nikkan.co.jp/articles/view/655659">
            <label className="timeline__event-icon"></label>
          </a>
          <div className="timeline__event-copy">
            <a href="https://www.nikkan.co.jp/articles/view/655659">
              <p className="timeline__event-thumbnail">28 November 2022</p>
              <img className="timeline__img-thumbnail lazyload" src="https://www.nishinippon.co.jp/uploads/image/1457174/large_IP221128JAA000225000.jpg" />
            </a>
            <p></p>
            <p>
              <strong>九州工大、宇宙開発でモンゴルと連携</strong>
            </p>
            <p>(www.nikkan.co.jp)【北九州】九州工業大学は２８日、モンゴルと卒業生数人が創設に携わった同国のＯＮＤＯスペースと連携協定...</p>
            <p></p>
            <div className="timeline__more-link">
              <a href="https://www.nikkan.co.jp/articles/view/655659">
                Learn More &nbsp;
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </li>

      </ul>

      <Footer />
    </>
  )
}

export default Home;
