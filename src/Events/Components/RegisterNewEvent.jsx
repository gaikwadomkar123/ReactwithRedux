import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import eventsServiceObject from "../Services/events-service";
import { useNavigate } from "react-router-dom";

const RegisterNewEvent = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const confirmation = await eventsServiceObject.insertNewEvent(data);
        if(confirmation){
            navigate("/events");
        }
    };
    return (
        <div className='ml-40 mr-40'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Event Id</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                        name="eventId"
                        {...register("eventId", {
                            required: true
                        })}
                    />
                    {errors.eventId && errors.eventId.type === "required" && (
                        <p className="text-red-500">Event Id is required.</p>
                    )}
                </div>
                <div className="form-control">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Event Code</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="eventCode"
                        {...register("eventCode", {
                            required: true,
                            minLength: 6
                        })}
                    />
                    {errors.eventCode && errors.eventCode.type === "required" && (
                        <p className="text-red-500">Event Code is required.</p>
                    )}
                    {errors.eventCode && errors.eventCode.type === "minLength" && (
                        <p className="text-red-500">
                            Event Code should be at-least 6 characters.
                        </p>
                    )}
                </div>
                <div className="form-control">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Event Name</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="eventName"
                        {...register("eventName", {
                            required: true
                        })}
                    />
                    {errors.eventName && errors.eventName.type === "required" && (
                        <p className="text-red-500">Event Name is required.</p>
                    )}

                </div>
                <div className="form-control">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Event Description</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="description"
                        {...register("description")}
                    />
                </div>
                <div className="form-control">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Start Date</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="date"
                        name="startDate"
                        {...register("startDate")}
                    />
                </div>
                <div className="form-control">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>End Date</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="date"
                        name="endDate"
                        {...register("endDate")}
                    />
                </div>
                <div className="form-control">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Event Charges</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                        name="fees"
                        {...register("fees")}
                    />
                </div>
                <div className="form-control">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Total Attendance</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                        name="seatsFilled"
                        {...register("seatsFilled")}
                    />
                </div>
                <div className="form-control text-center mt-10">
                    <label></label>
                    <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Register New Event</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterNewEvent;