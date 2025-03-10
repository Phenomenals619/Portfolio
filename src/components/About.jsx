import React from "react";

const About = () => {
  return (
    <>
      <div
        id="about"
        className='p-20 pt-5 min-h-[calc(100vh-71px)] bg-cover flex justify-end' style={{ backgroundImage: `url('gojo.jpg')` }}

      >
        <div className="mt-15 bg-blue-200/[0.5]  inline-block rounded-sm shadow-lg text-black min-w-md max-w-md">
          <div className="flex items-center justify-center p-10 flex-col">
            <h1 className="text-4xl font-bold text-blue-950">ABOUT US </h1>
            <p className="text-lg mt-2 italic indent-8">
              I'm a backend developer with a passion for building scalable,
              high-performance systems. Currently, I work at Pornhub, where I
              develop and optimize backend infrastructure to handle massive
              traffic and data loads efficiently.
            </p>
            <p className="text-lg mt-2 italic indent-8">
              With expertise in technologies like [mention your tech stack:
              Node.js, Python, Golang, etc.], databases, caching strategies, and
              API development, I focus on creating seamless, secure, and fast
              experiences for users worldwide.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
