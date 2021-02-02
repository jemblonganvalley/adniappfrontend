import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";
import DetailBrandEvent from "./components/BrandEvent/Detail/DetailBrandEvent";
import ViewBrands from "./components/Brands/View/ViewBrands";
import ViewBrandEvent from "./components/BrandEvent/View/ViewBrandEvent";
import EditBrandEvent from "./components/BrandEvent/Edit/EditBrandEvent";
import TambahBrandEvent from "./components/BrandEvent/Tambah/TambahBrandEvent";
import DetailBrands from "./components/Brands/Detail/DetailBrands";
import EditBrands from "./components/Brands/Edit/EditBrands";
import TambahBrands from "./components/Brands/Tambah/TambahBrands";
import TambahFixtures from "./components/Fixtures/Tambah/TambahFixtures";
import EditFixtures from "./components/Fixtures/Edit/EditFixtures";
import DetailFixtures from "./components/Fixtures/Detail/DetailFixtures";
import ViewFixtures from "./components/Fixtures/View/ViewFixtures";
import Statistic from "./components/Statistic/Statistic";
import Mynavbar from "./components/Navbar/Mynavbar";
import DashboardAdmin from "./components/DashboardAdmin/DashboardAdmin";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid bg-dark">
        <img
          src="https://picsum.photos/seed/190/900"
          alt="andi apps"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            opacity: "0.6",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />

        <Switch>
          //statistic
          <Route path="/statistic">
            <Statistic />
          </Route>
          //fixtures
          <Route path="/tambah-fixtures">
            <TambahFixtures />
          </Route>
          <Route path="/edit-fixtures">
            <EditFixtures />
          </Route>
          <Route path="/detail-fixtures">
            <DetailFixtures />
          </Route>
          <Route path="/fixtures">
            <ViewFixtures />
          </Route>
          //brands
          <Route path="/tambah-brands">
            <TambahBrands />
          </Route>
          <Route path="/edit-brands">
            <EditBrands />
          </Route>
          <Route path="/detail-brands">
            <DetailBrands />
          </Route>
          <Route path="/brands">
            <ViewBrands />
          </Route>
          //brand-event
          <Route path="/tambah-brand-events">
            <TambahBrandEvent />
          </Route>
          <Route path="/edit-brand-evens">
            <EditBrandEvent />
          </Route>
          <Route path="/detail-brand-events">
            <DetailBrandEvent />
          </Route>
          <Route path="/brand-events">
            <ViewBrandEvent />
          </Route>
          //dashboard
          <Route path="/dashboard">
            <DashboardAdmin />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
