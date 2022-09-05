import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { delete_rule } from "../actions/actions";

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
          <th scope="col">% Azucar_min</th>
          <th scope="col">% Azucar_max</th>
          <th scope="col">% Oxigeno_min</th>
          <th scope="col">% Oxigeno_max</th>
          <th scope="col">% Grasa_min</th>
          <th scope="col">% Grasa_max</th>
          <th scope="col">Editar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody  /*style={{position: 'relative',background: '#b5bac9', zIndex: 100, opacity: 1}}*/>
      {/* <i style={{position: 'absolute', top: '50%', left: '50%'}} className="fa fa-spinner fa-spin" aria-hidden="true"></i> */}
      {data.map(rule => 
         <tr>
         <th scope="row">{rule?.id}</th>
         <td>{rule?.risk_level}</td>
         <td>{rule?.sugar_min}</td>
         <td>{rule?.sugar_max}</td>
         <td>{rule?.oxygen_min}</td>
         <td>{rule?.oxygen_max}</td>
         <td>{rule?.fat_min}</td>
         <td>{rule?.fat_max}</td>
         <td>
           <i
             className="fa fa-pencil"
             style={{color: '#6accbc', cursor: 'pointer'}}
             aria-hidden="true"
             onClick={() => {
               navigate(`../edit/rule/${rule?.id}`, { replace: true });
             }}
           ></i>
         </td>
         <td>
           <i
             className="fa fa-trash-o"
             style={{color: 'red', cursor: 'pointer'}}
             aria-hidden="true"
             onClick={async () => {
               await delete_rule(rule?.id);
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
