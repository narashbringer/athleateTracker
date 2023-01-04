import { useState } from "react";
import { useForm } from "react-hook-form";

import { trpc } from "../../utils/trpc";



const AddCaraWeek = (studentId) => {
    const createCara = trpc.caraHours.create.useMutation();
    const { register, handleSubmit, reset } = useForm();
    const [emergencyModalOpen, setEmergencyModalOpen] = useState(false)
    const  toggleEmergencyModal = () => {
        setEmergencyModalOpen(!emergencyModalOpen)
    }
    const onCreateCara = handleSubmit((e) => {
        console.log(e)
        createCara.mutate({ name: e.Name,
            Totalhours: e.Hours,
            Week: e.Week,
            studentId: studentId.studentId });
            toggleEmergencyModal()
            reset()

    });
  return (<>
    <button
        className="
        w-1/2 md:w-1/4 mx-auto justify-right
            text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleEmergencyModal}
        data-modal-toggle="cara-modal">
        Add CARA Week
        </button>
<div 
id="cara-modal" 
aria-hidden="false"  
className={`fixed top-0 mx-auto justify-center items-center z-50 ${!emergencyModalOpen? "hidden": ""} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
    <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" 
            onClick={toggleEmergencyModal}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8 text-black">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Student</h3>
                <form className="space-y-3" onSubmit={onCreateCara}>
                    <div className="flex flex-row gap-2">
        <div>
        <label htmlFor="Name" className="text-lg">Name</label>
        <input type="text" {...register("Name", { required: true })} id="Name" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:placeholder-gray-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"/>
        </div>
        <div >
        <label htmlFor="Hours" className="text-lg">Hours</label>
        <input type="text" {...register("Hours", { required: true })} id="Hours" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:placeholder-gray-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"/>
        </div>
</div>
<div className="flex flex-row gap-2">
        <div>
        <label htmlFor="week" className="text-lg">Week</label>
        <input type="text" {...register("Week", { required: true })} id="week" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:placeholder-gray-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"/>
        </div>
        </div>
        <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Create EC</button>
    </form>
</div>
</div>
</div>
</div>
</>
  );
};

export default AddCaraWeek;
