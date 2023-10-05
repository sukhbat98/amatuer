import React, { useMemo, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const initDownloadFiles = [
  {
    title : "Maya-3 and Maya-4 High Level Specifications",
    content: "",
    downloadLink: "https://stamina4space.upd.edu.ph/wp-content/uploads/2021/10/Maya-3-Maya-4_-High-level-Specifications.docx-1.pdf",
  },
  {
    title : "Diwata-2 Amateur Radio Unit (ARU) Utilization Manual",
    content: `
    <p>
      A guide on how to access Diwata-2’s Amateur Radio Unit (ARU), which was designated PO-101 by
      <a href='https://www.amsat.org/diwata-2-designated-philippines-oscar-101-po-101/'>
        AMSAT
      </a>
      on April 12, 2019.
    </p>
    <p>
      Schedule of ON times:
      <a href="https://twitter.com/Diwata2PH">https://twitter.com/Diwata2PH</a>
    </p>
    `,
    downloadLink: "https://stamina4space.upd.edu.ph/wp-content/uploads/2020/10/Diwata-2-ARU-Utilization-Manual.pdf",
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
                <input className="form-control" style={{backgroundColor: "rgb(16, 18, 25)", borderColor: "#212529", border: "1px solid #212529", color: "#fff"}} type="search" placeholder="Search" />
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
            {/* {displayDownloadFiles} */}
            {
              downloadFiles.map((downloadFile, idx) => (
                <div key={idx} className="manuals__download-item row mb-3">
                  <div className="manuals__download-icon col-lg-1">
                    <img alt="123" className="" src="https://stamina4space.upd.edu.ph/wp-content/themes/stamina4space/assets/images/dl-icon.png" />
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
