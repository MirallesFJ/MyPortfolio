import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';

export default function ProjectDetails({ project }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-white p-5 mx-auto"
      style={{ maxWidth: '600px' }}
    >
      {/* Project Title */}
      <h3 className="text-2xl font-bold">
        {project.title || 'Title not available.'}
      </h3>

      {/* Project Description */}
      <p className="text-base text-gray-200 my-4 leading-relaxed text-pretty">
        {project.description || 'Description not available.'}
      </p>

      {/* Technology Stack */}
      <div className="flex flex-wrap justify-center sm:justify-start space-x-2 mt-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-700 hover:bg-gray-600 rounded-xl px-3 py-1 text-sm m-1 flex items-center transition duration-200 ease-in-out"
          >
            {tech === 'React' && (
              <FontAwesomeIcon icon={faReact} className="text-lg mr-2" />
            )}
            {tech === 'Python' && (
              <FontAwesomeIcon icon={faPython} className="text-lg mr-2" />
            )}
            {tech}
          </span>
        ))}
      </div>

      {/* Project Image */}
      <img
        src={project.images}
        alt={project.title}
        className="object-cover rounded-lg mb-2 max-w-full sm:max-w-lg shadow-lg"
      />
    </div>
  );
}
