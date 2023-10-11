import "./App.css";
import "./css/Font.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import IndexPage from "./pages/IndexPage";
import Login from "./component/Login";
import Register from "./component/Register";
import Yaggwan from "./component/Yaggwan";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/yaggwan" element={<Yaggwan />}></Route>
      <Route path="/payment" element={<PaymentPage />}></Route>
    </Routes>
  );
}

export default App;
