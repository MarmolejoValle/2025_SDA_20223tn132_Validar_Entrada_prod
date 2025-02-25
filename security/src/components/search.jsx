import { Field, Form, Formik } from "formik";
import { useEffect, useState } from 'react';
import * as Yup from 'yup';


const validationSchema = Yup.object({
    search: Yup.string().matches(/[A-Za-z0-9]+(?: [A-Za-z0-9]+)*/, 'Campo requerido').required('Requerido')
});
export default function Search({ placeholder }) {
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        fetch("http://localhost:8080/users/search/" + values.search, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Respuesta del servidor:", data);
                alert("Registro exitoso!");
                resetForm();
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
        <div className="m-10">
            <Formik
                initialValues={{ search: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {({ isSubmitting }) => (

                    <Form>
                        <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <Field type="text" name="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-200 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
                            <button type="submit" disabled={isSubmitting} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                        </div>
                    </Form>

                )}
            </Formik>
        </div>);
}