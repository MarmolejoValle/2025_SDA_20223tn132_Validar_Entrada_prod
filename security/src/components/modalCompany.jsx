import { motion } from "framer-motion";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, user }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center  bg-neutral-50 shadow-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white p-6 rounded-2xl shadow-xl w-96 relative"
            >
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-black">
                    <X size={20} />
                </button>
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">

                    <div className="flex flex-col items-center pb-10 pt-10">
                        
                        <h5 className="mb-1 text-xl font-medium text-gray-900">{user?.companyName}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user?.id}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user?.rfc}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user?.phoneNumber}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user?.contact}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user?.mail}</span>


                        <div className="flex mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar</a>
                            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-white-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-red-700 dark:bg-red-800 dark:text-gray-400 dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700">Eliminar</a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
