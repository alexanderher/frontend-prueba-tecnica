import { Formik, Form, Field, ErrorMessage } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { create_rule, update_rule} from "../actions/actions";

interface IForm {
  type: 'create' | 'edit'
  person?: any;
}

const FormRegister: FC<IForm> = ({ type, person }) => {
  const initialValues = {
    name: "",
    sugar_min: null,
    sugar_max: null,
    fat_min: null,
    fat_max: null,
    oxygen_min: null,
    oxygen_max: null,
    ...person,
  };
  const schema = Yup.object().shape({
    name: Yup.string().required("obligatorio"),
    sugar_min: Yup.number()
      .nullable()
      .required("obligatorio")
      .min(0, "minimo 0")
      .max(100, "máximo 100"),
    sugar_max: Yup.number()
      .nullable()
      .required("obligatorio")
      .min(0, "minimo 0")
      .max(100, "máximo 100"),
    fat_min: Yup.number()
      .nullable()
      .required("obligatorio")
      .min(0, "minimo 0")
      .max(100, "máximo 100"),
    fat_max: Yup.number()
      .nullable()
      .required("obligatorio")
      .min(0, "minimo 0")
      .max(100, "máximo 100"),
    oxygen_min: Yup.number()
      .nullable()
      .required("obligatorio")
      .min(0, "minimo 0")
      .max(100, "máximo 100"),
    oxygen_max: Yup.number()
      .nullable()
      .required("obligatorio")
      .min(0, "minimo 0")
      .max(100, "máximo 100"),
  });

  const submit = async (values: any, actions: any) => {
    console.log("voy a crear");
    try {
      if(type === 'create') {
        await create_rule(values);
      } else {
        await update_rule(values.id, values)
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
                <span className="text-danger mb-3">{<ErrorMessage className='text-danger' name="name" />}</span>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <label htmlFor="sugar_id" className="form-label">
                  % Azucar minimo
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="sugar_min_id"
                  name="sugar_min"
                  autoComplete="off"
                  style={{ height: "38px" }}
                />
                <span className="text-danger mb-3">{<ErrorMessage className='text-danger' name="sugar_min" />}</span>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <label htmlFor="sugar_id" className="form-label">
                  % Azucar maximo
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="sugar_max_id"
                  name="sugar_max"
                  autoComplete="off"
                  style={{ height: "38px" }}
                />
                <span className="text-danger mb-3">{<ErrorMessage className='text-danger' name="sugar_max" />}</span>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <label htmlFor="fat_id" className="form-label">
                  % Grasa minimo
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="fat_min_id"
                  name="fat_min"
                  autoComplete="off"
                  style={{ height: "38px" }}
                />
                <span className="text-danger mb-3">{<ErrorMessage className='text-danger' name="fat_min" />}</span>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <label htmlFor="fat_id" className="form-label">
                  % Grasa maximo
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="fat_max_id"
                  name="fat_max"
                  autoComplete="off"
                  style={{ height: "38px" }}
                />
                <span className="text-danger mb-3">{<ErrorMessage className='text-danger' name="fat_max" />}</span>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <label htmlFor="oxygen_id" className="form-label">
                  % Oxigeno minimo
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="oxygen_min_id"
                  name="oxygen_min"
                  autoComplete="off"
                  style={{ height: "38px" }}
                />
                <span className="text-danger mb-3">{<ErrorMessage className='text-danger' name="oxygen_min" />}</span>
                
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <label htmlFor="oxygen_id" className="form-label">
                  % Oxigeno maximo
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="oxygen_max_id"
                  name="oxygen_max"
                  autoComplete="off"
                  style={{ height: "38px" }}
                />
                <span className="text-danger mb-3">{<ErrorMessage className='text-danger' name="oxygen_max" />}</span>
                
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
