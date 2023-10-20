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

import { UserContextProvider } from "./contexts/UserContext";
import { PayDProvider } from "./contexts/PaymentDContext";
import Adress from "./component/Adress";
import { UserProvider } from "./contexts/RegisterContext";

//admin
import Admin_Layout from "./component/Admin_Layout";
import Admin_IndexPage from "./pages/Admin_IndexPage";
import Admin_LoginPage from "./pages/Admin_LoginPage";
import { UserContextProviderA } from "./contexts/Admin_UserContext";
import { MenuContextProvider } from "./contexts/Admin_MenuContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <UserContextProviderA>
          <MenuContextProvider>
            <PayDProvider>
              <UserProvider>
                <Routes>
                  <Route path="/user" element={<Layout />}>
                    <Route index element={<IndexPage />} />
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="register_adress" element={<Adress />}></Route>
                    <Route path="yaggwan" element={<Yaggwan />}></Route>
                    <Route
                      path="payment_delivery"
                      element={<PaymentPage />}
                    ></Route>
                    <Route
                      path="payment_pickup"
                      element={<PaymentPage_Pickup />}
                    ></Route>
                    <Route path="select" element={<SelectShopPage />}></Route>
                    <Route path="food" element={<FoodSelect />}></Route>
                  </Route>
                </Routes>
                <Routes>
                  <Route path="/admin" element={<Admin_Layout />}>
                    <Route index element={<Admin_IndexPage />} />
                    <Route path="login" element={<Admin_LoginPage />} />
                  </Route>
                </Routes>
              </UserProvider>
            </PayDProvider>
          </MenuContextProvider>
        </UserContextProviderA>
      </UserContextProvider>
    </>
  );
}

export default App;
