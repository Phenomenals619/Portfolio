import React from "react";
import { FaHtml5, FaCss3Alt, FaJava, FaGithub } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { GrOracle } from "react-icons/gr";

const Skill = () => {
  return (
    <>
      <div
        id="skills"
        className='p-20 pt-5 min-h-[calc(100vh-69px)] bg-[url("unknown.jpg")] bg-cover flex justify-start'
      >
        <div className="mt-15 bg-blue-200/[0.5] rounded-sm shadow-lg text-black min-w-md  max-w-md">
          <h1 className="text-4xl pt-5 text-center font-bold text-blue-950">
            SKILLS{" "}
          </h1>
          <div className=" p-10 flex-col flex items-start justify-start gap-20">
            <div className="flex justify-around w-full">
              <div>
                <h1 className="text-2xl font-semibold">Frontend</h1>
                <div className="flex items-center gap-2">
                  <p>
                    <FaHtml5 size={40} color="red" />
                  </p>
                  <p>
                    <FaCss3Alt size={40} color="blue" />
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Backend</h1>
                <div className="flex items-center gap-2">
                  <p>
                    <FaJava size={40} color="red" />
                  </p>
                  <p>
                    <SiSpringboot size={40} color="green" />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-around w-full">
              <div>
                <h1 className="text-2xl font-semibold">Database</h1>
                <div className="flex  gap-2">
                  <p>
                    <GrOracle size={40} color="red" />
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Tools</h1>
                <div className="flex items-center gap-2">
                  <p>
                    <FaGithub size={40} color="black" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
