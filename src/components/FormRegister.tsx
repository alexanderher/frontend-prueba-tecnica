import { Formik, Form, Field, ErrorMessage } from "formik";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { create_register, update_register } from "../actions/actions";

interface IForm {
  type: "create" | "edit";
  person?: any;
}

const FormRegister: FC<IForm> = ({ type, person }) => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    id: "",
    type: "",
    sugar: "",
    fat: "",
    oxygen: "",
    ...person,
  };
  const schema = Yup.object().shape({
    name: Yup.string().required("obligatorio"),
    id: Yup.string()
      .nullable()
      .required("obligatorio")
      .max(20, "Máximo 20 caracteres"),
    type: Yup.string().required("obligatorio"),
    sugar: Yup.number()
      .nullable()
      .required("obligatorio")
      .min(0, "minimo 0")
      .max(100, "máximo 100"),
    fat: Yup.number()
      .nullable()
      .required("obligatorio")
      .min(0, "minimo 0")
      .max(100, "máximo 100"),
    oxygen: Yup.number()
      .nullable()
      .required("obligatorio")
      .min(0, "minimo 0")
      .max(100, "máximo 100"),
  });

  const submit = async (values: any, actions: any) => {
    try {
      if (type === "create") {
        await create_register(values);
        actions.resetForm();
        navigate("../list/user", { replace: true })

      } else {
        await update_register(values.id, values);
        navigate("../list/user", { replace: true })
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      enableReinitialize
      onSubmit={submit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      {({ handleChange }) => {
        return (
          <Form>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <label htmlFor="name_id" className="form-label">
                  Nombre
                </label>
                <Field
                  type="text"
                  id="name_id"
                  name="name"
                  className="form-control"
                  aria-describedby="nombre del reto"
                  autoComplete="off"
                  maxLength={80}
                  onChange={(e: any) => {
                    e.preventDefault();
                    const { value } = e.target;
                    const regex = new RegExp(
                      /^[A-Za-z0-9\s\\Ñ\\ñ\\áéíóúüÁÉÍÓÚÜ,.;:()¿?¡!"]*$/g
                    );
                    if (regex.test(value.toString())) {
                      handleChange(e);
                    }
                  }}
                />
                <span className="text-danger mb-3">
                  {<ErrorMessage className="text-danger" name="name" />}
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <label htmlFor="id_id" className="form-label">
                  Cedula
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="id_id"
                  name="id"
                  autoComplete="off"
                  maxLength={250}
                  style={{ height: "38px" }}
                />
                <span className="text-danger mb-3">
                  {<ErrorMessage className="text-danger" name="id" />}
                </span>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <label htmlFor="type_id" className="form-label">
                  Tipo de sangre
                </label>
                <Field
                  as="select"
                  className="form-control"
                  id="type_id"
                  name="type"
                  autoComplete="off"
                  maxLength={100}
                  style={{ height: "38px" }}
                >
                  <option value="" defaultChecked>
                    Seleccionar...
                  </option>
                  <option value="A +">A +</option>
                  <option value="B +">B +</option>
                  <option value="AB +">AB +</option>
                  <option value="O +">O +</option>
                  <option value="A -">A -</option>
                  <option value="B -">B -</option>
                  <option value="AB -">AB -</option>
                  <option value="O -">O -</option>
                </Field>
                <span className="text-danger mb-3">
                  {<ErrorMessage className="text-danger" name="type" />}
                </span>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <label htmlFor="sugar_id" className="form-label">
                  % Azucar
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="sugar_id"
                  name="sugar"
                  autoComplete="off"
                  style={{ height: "38px" }}
                />
                <span className="text-danger mb-3">
                  {<ErrorMessage className="text-danger" name="sugar" />}
                </span>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <label htmlFor="fat_id" className="form-label">
                  % Grasa
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="fat_id"
                  name="fat"
                  autoComplete="off"
                  style={{ height: "38px" }}
                />
                <span className="text-danger mb-3">
                  {<ErrorMessage className="text-danger" name="fat" />}
                </span>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <label htmlFor="oxygen_id" className="form-label">
                  % Oxigeno
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="oxygen_id"
                  name="oxygen"
                  autoComplete="off"
                  style={{ height: "38px" }}
                />
                <span className="text-danger mb-3">
                  {<ErrorMessage className="text-danger" name="oxygen" />}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-primary my-3">
                  Guardar
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormRegister;
