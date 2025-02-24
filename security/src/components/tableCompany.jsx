import ModalCompany from "./modalCompany"
import { useState } from "react";
import Search from "./search";
export default function ListCompany({ users = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-gray-900">Empresas Registradas</h3>
      <div>
        <Search/>
      </div>
      <table className="w-full mt-4 text-left table-auto min-w-max">
        <thead className="bg-gray-200">
          <tr>
            <th
              className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
              <p
                className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                id
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
            <th
              className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
              <p
                className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                Razon Social
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
            <th
              className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
              <p
                className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                Rfc
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
            <th
              className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
              <p
                className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                Telefono
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
            <th
              className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
              <p
                className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                Contacto
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
            <th
              className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
              <p
                className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                Correo
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index} className="border-b" onClick={() => {setIsOpen(true); setUser(user)}} >
              <td className="p-4 border-b border-slate-200">
                <p
                  className="text-sm text-slate-900">
                  {user?.id}
                </p></td>
              <td className="p-4 border-b border-slate-200">
                <p
                  className="text-sm text-slate-900">
                  {user?.companyName}
                </p></td>
              <td className="p-4 border-b border-slate-200">
                <p
                  className="text-sm text-slate-900">
                  {user?.rfc}
                </p></td>
              <td className="p-4 border-b border-slate-200">
                <p
                  className="text-sm text-slate-900">
                  {user?.phoneNumber}
                </p></td>
              <td className="p-4 border-b border-slate-200">
                <p
                  className="text-sm text-slate-900">
                  {user?.contact}
                </p></td>
              <td className="p-4 border-b border-slate-200">
                <p
                  className="text-sm text-slate-900">
                  {user?.mail}
                </p></td>
            </tr>
          ))}
        </tbody>
      </table>



      <ModalCompany isOpen={isOpen} onClose={() => setIsOpen(false)} title="" user={user}/>



    </div>

  )

}