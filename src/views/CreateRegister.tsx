import FormRegister from "../components/FormRegister";

const CreateRegister = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Registrar</div>
        <div className="card-body">
          <FormRegister type="create" />
        </div>
      </div>
    </div>
  );
};

export default CreateRegister;
