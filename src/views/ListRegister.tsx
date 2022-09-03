import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { list_register } from "../actions/actions";
import TableRegister from "../components/TableRegister";

const ListRegister = () => {
  const navigate = useNavigate();
  const [ users, setUsers]  = useState<any>([]);
  const get_users = async () => {
    try {
      const response = await list_register();      
      setUsers(response)
     
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_users();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card-header my-3">
        <i
          style={{ color: "#6accbc", cursor: "pointer" }}
          className="fa fa-plus"
          aria-hidden="true"
          onClick={() => navigate("../create/user", { replace: true })}
        >
          {" "}
          <span> Crear</span>{" "}
        </i>
        <div>Lista de Registros</div>
      </div>
      <div className="card">
        <div className="card-body">
          <TableRegister data={users} get_users={get_users} />
        </div>
      </div>
    </div>
  );
};

export default ListRegister;
