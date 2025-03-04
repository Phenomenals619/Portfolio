import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className='p-20 pt-5 min-h-[calc(100vh-69px)] bg-[url("gojo.jpeg")] bg-cover flex justify-end'
      >
        <div className="mt-15 bg-blue-200/[0.5] rounded-sm shadow-lg text-black min-w-md  max-w-md p-5">
          <h1 className="text-4xl pt-5 text-center font-bold text-blue-950 mb-2">
            CONTACT{" "}
          </h1>
          <form action="" className="bg-yellow-100 rounded-sm p-5 flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" placeholder="Enter your name" className="border-1 focus:outline-2 border-green-700 px-2 py-1"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input type="text" name="" id="" placeholder="Enter your name" className="border-1 focus:outline-2 border-green-700 px-2 py-1"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Message</label>
              <textarea name="" id="" className="border-1 border-green-700 px-2 py-1 focus:outline-2 focus:ring-green-700"></textarea>
            </div>
            <button className="bg-green-500 font-bold py-1 px-2">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
