const DetailBrandEvent = () => {
  return (
    <div className="main-content" style={{ marginTop: 20 }}>
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <img
                    className="align-self-center mr-3"
                    width={70}
                    src="img/<?php echo $detail['foto_merek'] ?>"
                    alt
                  />
                  <h4 className="text-right">
                    {/*?= $detail['nama_barang'] ?*/}
                  </h4>
                </div>
                <div className="card-body">
                  <img
                    style={{ minHeight: 200, width: "100%", display: "block" }}
                    src="img/<?php echo $detail['gambar'] ?>"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h3>Detail Barang</h3>
                </div>
                <div className="card-body">
                  <table className="table" cellPadding={10}>
                    <tbody>
                      <tr>
                        <td>Kode Barang</td>
                        <td>:</td>
                        <td style={{ fontWeight: "bold", color: "red" }}>
                          {/*?php echo $detail['kd_barang']; ?*/}
                        </td>
                      </tr>
                      <tr>
                        <td>Nama Barang</td>
                        <td>:</td>
                        <td>{/*?php echo $detail['nama_barang']; ?*/}</td>
                      </tr>
                      <tr>
                        <td>Merek</td>
                        <td>:</td>
                        <td>{/*?php echo $detail['merek']; ?*/}</td>
                      </tr>
                      <tr>
                        <td>Distributor</td>
                        <td>:</td>
                        <td>{/*?php echo $detail['nama_distributor']; ?*/}</td>
                      </tr>
                      <tr>
                        <td>Tanggal Masuk</td>
                        <td>:</td>
                        <td>{/*?php echo $detail['tanggal_masuk']; ?*/}</td>
                      </tr>
                      <tr>
                        <td>Harga</td>
                        <td>:</td>
                        <td>
                          {/*?php echo "Rp.".number_format($detail['harga_barang'])."-,"; ?*/}
                        </td>
                      </tr>
                      <tr>
                        <td>Stok</td>
                        <td>:</td>
                        <td>{/*?php echo $detail['stok_barang'] ?*/}</td>
                      </tr>
                      <tr>
                        <td>Keterangan</td>
                        <td>:</td>
                        <td>{/*?php echo $detail['keterangan'] ?*/}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <a href="?page=viewBarang" className="btn btn-danger">
            <i className="fa fa-repeat" /> Kembali
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailBrandEvent;
