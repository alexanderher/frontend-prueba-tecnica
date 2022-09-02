import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { delete_register } from "../actions/actions";

interface ITable {
  data: any[];
}

const TableRegister: FC<ITable> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Cédula</th>
          <th scope="col">Nombre</th>
          <th scope="col">Tipo de sangre</th>
          <th scope="col">% Azucar</th>
          <th scope="col">% Oxigeno</th>
          <th scope="col">% Grasa</th>
          <th scope="col">Editar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody  /*style={{position: 'relative',background: '#b5bac9', zIndex: 100, opacity: 1}}*/>
      {/* <i style={{position: 'absolute', top: '50%', left: '50%'}} className="fa fa-spinner fa-spin" aria-hidden="true"></i> */}
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <i
              className="fa fa-pencil"
              style={{color: '#6accbc', cursor: 'pointer'}}
              aria-hidden="true"
              onClick={() => {
                navigate("../edit/user/:id", { replace: true });
              }}
            ></i>
          </td>
          <td>
            <i
              className="fa fa-trash-o"
              style={{color: 'red', cursor: 'pointer'}}
              aria-hidden="true"
              onClick={() => {
                delete_register('1')
              }}
            ></i>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>
            <i
              className="fa fa-pencil"
              style={{color: '#6accbc', cursor: 'pointer'}}
              aria-hidden="true"
              onClick={() => {
                navigate("../edit/user/:id", { replace: true });
              }}
            ></i>
          </td>
          <td>
            <i
              className="fa fa-trash-o"
              style={{color: 'red', cursor: 'pointer'}}
              aria-hidden="true"
              onClick={() => {
               
              }}
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableRegister;
