import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get_rule } from "../actions/actions";
import FormRule from "../components/FormRules";

const EditRule = () => {
  const { id } = useParams();
  const [ user, setUser]  = useState<any>({});
  const get_user = async () => {
    try {
      if (id) {
        const response = await get_rule(id);
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
          <FormRule type="edit" person={user}/>
        </div>
      </div>
    </div>
  );
};

export default EditRule;
