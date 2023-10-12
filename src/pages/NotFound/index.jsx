import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";

function NotFound() {

  return (
    <>
      <Header />

      {/* main */}
      <main className="row mx-0">
        <div className="container">
          <section className="not-found">
            <div className="row justify-content-center py-3">
              <div className="col-12 text-center">
                <div className="not-found__containt">
                  <h2>404!</h2>
                  <p>We're sorry, but the page you were looking for doesn't exist</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default NotFound;
