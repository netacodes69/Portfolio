import React from "react";
import employeeMSImage from "../assets/employee-ms.jpg"; // Correct variable name

const project = {
  name: "MERN Stack Hospital Management System Web Application",
  technologies: "MongoDB, Express, React, Node.js",
  image: employeeMSImage,
  github: "https://github.com/netacodes69",
};

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Project</h2>
        <div className="flex justify-center">
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 max-w-md">
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.technologies}</p>
            <a
              href={project.github}
              className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
