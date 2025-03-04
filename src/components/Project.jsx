import React from "react";

const Project = () => {
  return (
    <div
      id="project"
      className='p-20 pt-5 min-h-[calc(100vh-69px)] bg-[url("Yinlin.jpg")] bg-cover flex justify-end'
    >
      <div className="mt-15 bg-blue-200/[0.5] rounded-sm shadow-lg text-black min-w-md  max-w-md p-5">
        <h1 className="text-4xl pt-5 text-center font-bold text-blue-950">
          PROJECT{" "}
        </h1>
        <div className="w-full bg-gray-800/[0.9] mt-5 text-white px-5 rounded-sm">
          <h1 className="text-2xl font-semibold pt-5">College Management System</h1>
          <p className="indent-16 italic mt-5">
            The College Management System is a robust web application designed
            to streamline and automate various administrative and academic
            processes within an educational institution. It provides a
            centralized platform for managing student records, faculty details,
            course registrations, attendance tracking, examinations, and fee
            payments.
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-green-400 px-2 py-1 rounded-sm text-black mt-10 mb-5 cursor-pointer">
              Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
