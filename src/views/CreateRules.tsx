import FormRules from "../components/FormRules";

const CreateRule = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Registrar reglas</div>
        <div className="card-body">
          <FormRules type="create" />
        </div>
      </div>
    </div>
  );
};

export default CreateRule;
