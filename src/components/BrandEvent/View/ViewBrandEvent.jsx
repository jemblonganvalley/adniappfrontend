import React from "react";
import Navbar from "../../Navbar/Mynavbar";
import "./ViewBrandEvent.css";
const ViewBrandEvent = () => {
  return (
    <main className="main_container">
      <Navbar />

      <section className="section_container">
        <section class="au-breadcrumb">
          <div class="section__content section__content--p30">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="au-breadcrumb-content">
                    <div class="au-breadcrumb-left">
                      <ul class="list-unstyled list-inline au-breadcrumb__list">
                        <li class="list-inline-item active">
                          <a href="#">Home</a>
                        </li>
                        <li class="list-inline-item seprate">
                          <span>/</span>
                        </li>
                        <li class="list-inline-item">Brand Events</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="main-content" style={{ marginTop: "-60px" }}>
          <div className="section__content section__content--p30">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div
                      className="au-card-title"
                      style={{
                        backgroundImage:
                          "url(https://i.ibb.co/yhWhYmd/bg-title-01-1.jpg)",
                      }}
                    >
                      <div className="bg-overlay bg-overlay--blue"></div>
                      <h3>
                        <i className="zmdi zmdi-account-calendar"></i>
                        Brand Events
                      </h3>
                    </div>
                    <div className="card-body">
                      <a href="?page=addBarang" className="btn btn-primary">
                        <i className="fa fa-plus"></i> Tambah Barang
                      </a>
                      <br />
                      <br />
                      <div className="table-responsive">
                        <table
                          id="example"
                          className="table table-borderless table-striped table-earning"
                        >
                          <thead>
                            <tr>
                              <th>Id</th>
                              <th>Event_name</th>
                              <th>Event_start_date</th>
                              <th>Event_end_date</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>2</td>
                              <td>3</td>
                              <td>4</td>
                              <td>5</td>
                              <td className="text-center">
                                <div className="btn-group">
                                  <a
                                    href="?page=ViewBrandEventDetail&id=<?php echo $ds['kd_barang'] ?>"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Detail"
                                    className="btn btn-warning"
                                  >
                                    <i className="fa fa-search"></i>
                                  </a>
                                  <a
                                    href="?page=ViewBrandEventEdit&edit&id=<?= $ds['kd_barang'] ?>"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit"
                                    className="btn btn-info"
                                  >
                                    <i className="fa fa-edit"></i>
                                  </a>
                                  <button
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Delete"
                                    className="btn btn-danger"
                                  >
                                    <i
                                      className="fa fa-trash"
                                      id="btdelete<?php echo $no; ?>"
                                    ></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ViewBrandEvent;
