import React, { useMemo, useState } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";

const initDownloadFiles = [
  {
    title: "ONDOSAT-OWL Antenna Radiation Pattern",
    content: "",
    downloadLink: "/assets/pdf/ONDOSAT-OWL Antenna Radiation Pattern.pdf",
  },
  {
    title: "ONDOSAT-OWL CAD Drawings",
    content: "",
    downloadLink: "/assets/pdf/ONDOSAT-OWL CAD Drawings.pdf",
  },
  {
    title: "ONDOSAT-OWL CW Timing",
    content: "",
    downloadLink: "/assets/pdf/ONDOSAT-OWL CW timing.pdf",
  },
  {
    title: "ONDOSAT-OWL Power-Budget",
    content: "",
    downloadLink: "/assets/pdf/ONDOSAT-OWL Power-Budget.pdf",
  },
]

function Manuals() {
  const [searchValue, setSearchValue] = useState("")
  const [downloadFiles, setDownloadFiles] = useState(initDownloadFiles)

  const handleSearch = (value) => {
    setSearchValue(value)
    let filtered = initDownloadFiles.filter((downloadFile) => downloadFile.title.toLowerCase().includes(value.toLowerCase())
    )

    setDownloadFiles(filtered)
  }

  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  const handleSearchBtn = () => {
    let filtered = initDownloadFiles.filter((downloadFile) => downloadFile.title.toLowerCase().includes(searchValue.toLowerCase())
    )

    setDownloadFiles(filtered)
  }

  return (
    <>
      <Header />
      <div className="manuals manuals__downloads">
        <div className="row">
          <div className="col-lg-9">
            <div className="manuals__title">Manuals</div>
            <div className="manuals__sub-title">Download these manuals</div>
          </div>
          <div className="col-lg-3">
            <div className="manuals__search">
              <div className="input-group search-box">
                <input className="form-control" style={{borderColor: "#212529", border: "1px solid #212529", color: "#fff"}} type="search" placeholder="Search" />
                <button className="btn btn-outline-dark" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* download files */}
        <div className="manuals__wrapper">
          <div className="manuals__download-items-container">
            {
              downloadFiles.map((downloadFile, idx) => (
                <div key={idx} className="manuals__download-item row mb-3">
                  <div className="manuals__download-icon col-lg-1">
                    <i className="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="col-lg-10">
                    <div className="manuals__download-item-title my-2">{downloadFile.title}</div>
                    <div className="manuals__download-item-content" dangerouslySetInnerHTML={renderHTML(downloadFile.content)}>
                    </div>
                  </div>
                  <div className="manuals__download-actions col-lg-1">
                    <a href={downloadFile.downloadLink}>
                      <i className="fa fa-download" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Manuals;
