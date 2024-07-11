import { motion } from "framer-motion"

import { PROJECTS } from "../index"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl my-20 text-center">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span className="text-purple-500 bg-neutral-900 mr-2 rounded px-2 py-1 text-sm font-medium " key={index}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default Projects
