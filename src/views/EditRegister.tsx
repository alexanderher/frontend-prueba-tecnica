import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get_register } from "../actions/actions";
import FormRegister from "../components/FormRegister";

const EditRegister = () => {
  const { id } = useParams();
  const [ user, setUser]  = useState<any>({});
  const get_user = async () => {
    try {
      if (id) {
        const response = await get_register(id);
        console.log(response);
        
        setUser(response)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_user();
  }, []);
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Editar</div>
        <div className="card-body">
          <FormRegister type="edit" person={user}/>
        </div>
      </div>
    </div>
  );
};

export default EditRegister;
