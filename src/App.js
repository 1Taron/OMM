import "./App.css";
import "./css/Font.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import IndexPage from "./pages/IndexPage";
import Login from "./component/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
      <Route path="/Login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
