import React from "react";
import Mynavbar from "../Navbar/Mynavbar";

const DashboardAdmin = () => {
  return (
    <main className="main_container">
      <Mynavbar />
      <div className="section_container ">
        <section className="au-breadcrumb m-t-75">
          <div className="section__content section__content--p30">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="au-breadcrumb-content">
                    <div className="au-breadcrumb-left">
                      <ul className="list-unstyled list-inline au-breadcrumb__list">
                        <li className="list-inline-item active">
                          <a href="#">Home</a>
                        </li>
                        <li className="list-inline-item seprate">
                          <span>/</span>
                        </li>
                        <li className="list-inline-item">Dashboard</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="main-content">
          <div className="section__content section__content--p30">
            <div className="container-fluid">
              <div className="row" style={{ marginTop: "-30px" }}>
                <div className="col-sm-6 col-lg-4">
                  <div className="overview-item overview-item--c1">
                    <div className="overview__inner">
                      <div className="overview-box clearfix">
                        <div className="icon">
                          <i className="zmdi zmdi-shopping-cart" />
                        </div>
                        <div className="text">
                          <h2>{/*?= $bar['count'] ?*/}</h2>
                          <span>Barang</span>
                        </div>
                      </div>
                      <div className="overview-chart">
                        <canvas id="widgetChart1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="overview-item overview-item--c2">
                    <div className="overview__inner">
                      <div className="overview-box clearfix">
                        <div className="icon">
                          <i className="zmdi zmdi-calendar-note" />
                        </div>
                        <div className="text">
                          <h2>{/*?= $mer; ?*/}</h2>
                          <span>Merek</span>
                        </div>
                      </div>
                      <div className="overview-chart">
                        <canvas id="widgetChart2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="overview-item overview-item--c3">
                    <div className="overview__inner">
                      <div className="overview-box clearfix">
                        <div className="icon">
                          <i className="zmdi zmdi-account-o" />
                        </div>
                        <div className="text">
                          <h2>{/*?= $dis; ?*/}</h2>
                          <span>Distributor</span>
                        </div>
                      </div>
                      <div className="overview-chart">
                        <canvas id="widgetChart3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardAdmin;
