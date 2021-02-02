import React from "react";

const TambahBrandEvent = () => {
  return (
    <div className="main-content" style={{ marginTop: 20 }}>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form method="post" encType="multipart/form-data">
                <div className="card">
                  <div
                    className="au-card-title"
                    style={{ backgroundImage: 'url("images/bg-title-01.jpg")' }}
                  >
                    <div className="bg-overlay bg-overlay--blue" />
                    <h3>
                      <i className="zmdi zmdi-account-calendar" />
                      Data Barang
                    </h3>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor>Kode barang</label>
                          <input
                            type="text"
                            style={{ fontWeight: "bold", color: "red" }}
                            className="form-control"
                            name="kode_barang"
                            defaultValue="<?php echo $autokode; ?>"
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor>Nama barang</label>
                          <input
                            type="text"
                            placeholder="Nama Barang"
                            className="form-control"
                            name="nama_barang"
                            defaultValue="<?php echo @$_POST['nama_barang'] ?>"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor>Merek</label>
                          <select name="merek_barang" className="form-control">
                            <option value=" ">Pilih merek</option>
                            {/*?php foreach($getMerek as $mr) { ?*/}
                            <option value="<?= $mr['kd_merek'] ?>">
                              {/*?= $mr['merek'] ?*/}
                            </option>
                            {/*?php } ?*/}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor>Distributor</label>
                          <select name="distributor" className="form-control">
                            <option value=" ">Pilih distributor</option>
                            {/*?php foreach($getDistr as $dr) { ?*/}
                            <option value="<?= $dr['kd_distributor'] ?>">
                              {/*?= $dr['nama_distributor'] ?*/}
                            </option>
                            {/*?php } ?*/}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor>Harga barang</label>
                          <input
                            type="number"
                            className="form-control"
                            name="harga"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor>Stok barang</label>
                          <input
                            type="number"
                            className="form-control"
                            name="stok"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor>Foto</label>
                          <input
                            type="file"
                            className="form-control"
                            name="foto"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor>Keterangan</label>
                          <input
                            type="text"
                            className="form-control"
                            name="ket"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button name="getSimpan" className="btn btn-primary">
                      <i className="fa fa-download" /> Simpan
                    </button>
                    <button type="reset" className="btn btn-danger">
                      <i className="fa fa-eraser" /> Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahBrandEvent;
