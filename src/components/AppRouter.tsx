import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateRegister from "../views/CreateRegister";
import EditRegister from "../views/EditRegister";
import Home from "../views/Home";
import ListRegister from "../views/ListRegister";
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
          path="/edit/user/:id"
          element={
            <Template>
              <EditRegister />
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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
