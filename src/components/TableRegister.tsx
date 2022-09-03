import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { delete_register } from "../actions/actions";

interface ITable {
  data: any[];
  get_users: () => any;
}

const TableRegister: FC<ITable> = ({ data, get_users }) => {
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
          <th scope="col">status</th>
          <th scope="col">Editar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody  /*style={{position: 'relative',background: '#b5bac9', zIndex: 100, opacity: 1}}*/>
      {/* <i style={{position: 'absolute', top: '50%', left: '50%'}} className="fa fa-spinner fa-spin" aria-hidden="true"></i> */}
      {data?.map(register => 
        
        <tr>
          <th scope="row">{register?.id}</th>
          <td>{register?.name}</td>
          <td>{register?.type}</td>
          <td>{register?.sugar}</td>
          <td>{register?.oxygen}</td>
          <td>{register?.fat}</td>
          <td className={`${register?.status === 'BAJO' ? 'text-success': ''}`}>{register?.status === 'UNDEFINED' ? '-' : register?.status }</td>
          <td>
            <i
              className="fa fa-pencil"
              style={{color: '#6accbc', cursor: 'pointer'}}
              aria-hidden="true"
              onClick={() => {
                navigate(`../edit/user/${register?.id}`, { replace: true });
              }}
            ></i>
          </td>
          <td>
            <i
              className="fa fa-trash-o"
              style={{color: 'red', cursor: 'pointer'}}
              aria-hidden="true"
              onClick={async () => {
                await delete_register(register?.id);
                await get_users();

              }}
            ></i>
          </td>
        </tr>
        )}
        
       
      </tbody>
    </table>
  );
};

export default TableRegister;
