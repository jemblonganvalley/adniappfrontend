import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid bg-dark">
        <img
          src="https://picsum.photos/seed/150/900"
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
        <MyNavbar />
        <Switch>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
