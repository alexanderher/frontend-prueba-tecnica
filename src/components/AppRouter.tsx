import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateRegister from "../views/CreateRegister";
import CreateRule from "../views/CreateRules";
import EditRegister from "../views/EditRegister";
import EditRule from "../views/EditRule";
import Home from "../views/Home";
import ListRegister from "../views/ListRegister";
import ListRule from "../views/ListRule";
import Template from "./Template";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Template>
              <Home />
            </Template>
          }
        />
        <Route
          path="/create/user"
          element={
            <Template>
              <CreateRegister />
            </Template>
          }
        />
        <Route
          path="/create/rule"
          element={
            <Template>
              <CreateRule />
            </Template>
          }
        />
        <Route
          path="/edit/user/:id"
          element={
            <Template>
              <EditRegister />
            </Template>
          }
        />
        <Route
          path="/edit/rule/:id"
          element={
            <Template>
              <EditRule />
            </Template>
          }
        />
        <Route
          path="/list/user"
          element={
            <Template>
              <ListRegister />
            </Template>
          }
        />
        <Route
          path="/list/rule"
          element={
            <Template>
              <ListRule />
            </Template>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
