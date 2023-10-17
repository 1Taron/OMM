import "./App.css";
import "./css/Font.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import IndexPage from "./pages/IndexPage";
import Login from "./component/Login";
import Register from "./component/Register";
import Yaggwan from "./component/Yaggwan";
import PaymentPage from "./pages/PaymentPage";
import PaymentPage_Pickup from "./pages/PaymentPage_Pickup";
import SelectShopPage from "./pages/SelectShopPage";
import FoodSelect from "./pages/FoodSelect";

import { UserContextProvider } from "./UserContext";
function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/yaggwan" element={<Yaggwan />}></Route>
          <Route path="/payment_delivery" element={<PaymentPage />}></Route>
          <Route
            path="/payment_pickup"
            element={<PaymentPage_Pickup />}
          ></Route>
          <Route path="/select" element={<SelectShopPage />}></Route>
          <Route path="/food" element={<FoodSelect />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
