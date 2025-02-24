import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import ListCompany from './components/tableCompany'

const validationSchema = Yup.object({
  companyName: Yup.string().matches(/[A-Za-z0-9]+(?: [A-Za-z0-9]+)*/, 'Formato inválido').required('Requerido'),
  rfc: Yup.string().required('Requerido').matches(/^[A-ZÑ&]{3}\d{6}[A-Z0-9]{3}$/, "Formato invalido"),
  phoneNumber: Yup.string().matches(/\+?[0-9]{12}/, 'Debe contener exactamente 12 números').required('Requerido'),
  contact: Yup.string().matches(/[A-Za-z0-9]+(?: [A-Za-z0-9]+)*/, 'Formato inválido').required('Requerido'),
  mail: Yup.string().email('Correo inválido').required('Requerido'),
});

export default function RegistroEmpresa() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users/all")
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.error("Error al obtener usuarios:", error));
  }, []);
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    fetch("http://localhost:8080/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data);
        alert("Registro exitoso!");
        resetForm();

        fetch("http://localhost:8080/users/all")
          .then(response => response.json())
          .then(data => setUsers(data.data)) // Actualiza el estado con los nuevos datos
          .catch(error => console.error("Error al actualizar usuarios:", error));

      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        alert("Hubo un error al enviar el formulario.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Registro de empresa</h2>
        <p className="mt-2 text-lg text-gray-600">Ingresa tus datos</p>
      </div>
      <Formik
        initialValues={{ companyName: '', rfc: '', phoneNumber: '', contact: '', mail: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mx-auto mt-16 max-w-xl sm:mt-20 border-solid p-10">
            <div className="grid grid-cols-1 gap-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900">Razón Social</label>
                <Field name="companyName" type="text" className="input-field w-full border-1 border-gray-200 rounded-md" />
                <ErrorMessage name="companyName" component="div" className="text-red-600" />
              </div>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-900">RFC</label>
                  <Field name="rfc" type="text" className="input-field  border-1 border-gray-200 rounded-md" />
                  <ErrorMessage name="rfc" component="div" className="text-red-600" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900">Teléfono</label>
                  <Field name="phoneNumber" type="tel" className="input-field border-1 border-gray-200 rounded-md" />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-600" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900">Contacto</label>
                <Field name="contact" type="text" className="input-field w-full border-1 border-gray-200 rounded-md" />
                <ErrorMessage name="contact" component="div" className="text-red-600" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900">Correo</label>
                <Field name="mail" type="email" className="input-field w-full border-1 border-gray-200 rounded-md" />
                <ErrorMessage name="mail" component="div" className="text-red-600" />
              </div>
              <div className="mt-5 flex justify-end">
                <button type="submit" disabled={isSubmitting} className="w-20 bg-indigo-600 text-white px-3.5 py-2.5 rounded-md shadow-sm hover:bg-indigo-500">
                  Enviar
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ListCompany users={users}></ListCompany>
    </div>

  );
}
