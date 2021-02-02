const EditBrandEvent = () => {
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
                  <div className="card-body">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor>Kode barang</label>
                            <input
                              type="text"
                              className="form-control"
                              name="kode_barang"
                              defaultValue="<?php echo $data['kd_barang']; ?>"
                              readOnly
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor>Nama barang</label>
                            <input
                              type="text"
                              className="form-control"
                              name="nama_barang"
                              defaultValue="<?php echo @$data['nama_barang'] ?>"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor>Merek</label>
                            <select
                              name="merek_barang"
                              className="form-control"
                            >
                              <option value=" ">Pilih merek</option>
                              {/*?php foreach($getMerek as $mr) { ?*/}
                              {/*?php if ($mr['kd_merek'] == $data['kd_merek']){ ?*/}
                              <option value="<?= $mr['kd_merek'] ?>" selected>
                                {/*?= $mr['merek'] ?*/}
                              </option>
                              {/*?php }else{ ?*/}
                              <option value="<?= $mr['kd_merek'] ?>">
                                {/*?= $mr['merek'] ?*/}
                              </option>
                              {/*?php } ?*/}
                              {/*?php } ?*/}
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor>Distributor</label>
                            <select name="distributor" className="form-control">
                              <option value=" ">Pilih distributor</option>
                              {/*?php foreach($getDistr as $dr) { ?*/}
                              {/*?php if ($dr['kd_distributor'] == $data['kd_distributor']){ ?*/}
                              <option
                                value="<?= $dr['kd_distributor'] ?>"
                                selected
                              >
                                {/*?= $dr['nama_distributor'] ?*/}
                              </option>
                              {/*?php }else{ ?*/}
                              <option value="<?= $dr['kd_distributor'] ?>">
                                {/*?= $dr['nama_distributor'] ?*/}
                              </option>
                              {/*?php } ?*/}
                              {/*?php } ?*/}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor>Harga barang</label>
                            <input
                              type="number"
                              className="form-control"
                              name="harga"
                              defaultValue="<?php echo $data['harga_barang'] ?>"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor>Stok barang</label>
                            <input
                              type="number"
                              className="form-control"
                              name="stok"
                              defaultValue="<?php echo $data['stok_barang'] ?>"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor>Keterangan</label>
                            <input
                              type="text"
                              className="form-control"
                              name="ket"
                              defaultValue="<?php echo $data['keterangan'] ?>"
                            />
                          </div>
                          <div className="form-group" id="fotoF">
                            <label htmlFor>Foto</label>
                            <div className="row">
                              <div className="col-6">
                                <input
                                  type="file"
                                  name="foto"
                                  id="gambar"
                                  className="form-control-file"
                                />
                              </div>
                              <div className="col-6">
                                <div>
                                  <img
                                    style={{ marginTop: "-20px" }}
                                    alt
                                    src="img/<?= $data['gambar'] ?>"
                                    width={120}
                                    className="img-responsive"
                                    id="pict"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button name="getSimpan" className="btn btn-primary">
                      <i className="fa fa-download" /> Update
                    </button>
                    <a href="?page=viewBarang" className="btn btn-danger">
                      <i className="fa fa-repeat" /> Kembali
                    </a>
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
export default EditBrandEvent;
