import React from "react";

import { Link } from "react-router-dom";

import Header from "@components/Header";
import Footer from "@components/Footer";

function Home() {

  return (
    <>
      <Header />
      <main className="row large-hero" style={{margin: "0px"}}>
        <div className="row__large-6">
          <picture>
            <img className="large-hero__image lazyload" src={`/images/sat-1.png`} alt="Ocean view" />
          </picture>
        </div>
        <div className="row__large-6">
          <h1 className="large-hero__name">
            OWLSAT- 1 and OWLSAT-2  /Big font/
          </h1>
          <p className="large-hero__text">
            ONDOSAT-OWL-1 is a 0.5U cubesat and will be the first satellite of collabration project of ondo space llc and Mongolian Radio Sport Federation (MRSF).  ONDOSAT-OWL-1 is a part of the ONDOSAT-OWL CubeSat constellation of two satellites, along with ONDOSAT-OWL-1 and ONDOSAT-OWL-2.Main mission provides a message store-and-forward capability to the amateur operators on amatuer UHF band.The mission objective is to demonstrate S&F operations, including scheduled and unscheduled uplink of S&F data from amateur radio operators in Mongolia and all over the globe. The data will be stored onboard and transmitted to compatible ground stations in Mongolia. The purpose of the mission is to provide the amateur radio community in Mongolia with a reliable satellite platform to evaluate their uplink equipment by sending S&F messages to the satellite and validate a successful downlinks. Besides this mission, The ONDOSAT-OWL CubeSats are to broadcast encrypted short messages through its beacon within the 435-438MHz frequency band. This mission offers the amateur radio community the chance to decode these messages using a publicly accessible key provided on the official ONDOSAT-OWL website. Accomplished individuals who successfully decrypt the messages will be recognized on the official website and will receive a special QSL card as a token of achievement from the ONDOSAT-OWL project.
          </p>
          <div className="large-hero__button">
            <a href="manuals">
              <button className="large-hero__button-light">
                BROWSE MANUALS
              </button>
            </a>
          </div>
        </div>
      </main>

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

      <div className="timeline-section">
        <h1 className="timeline-section__title">OWLSAT- 1 and OWLSAT-2  timelime /Big font/</h1>
        <div className="timeline-section__subtitle">Follow OWLSAT- 1 and OWLSAT-2 space journey.</div>
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
