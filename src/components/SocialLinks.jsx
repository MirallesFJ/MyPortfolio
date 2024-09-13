import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

export default function SocialLinks() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
      {/* LinkedIn Link */}
      <a
        href="http://www.linkedin.com/in/jomifi"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-blue-500 text-white flex items-center px-2 py-2 rounded-md transition duration-200 ease-in-out"
        style={{ maxWidth: '150px' }} // Set a maximum width to constrain the box size
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
        <span className="ml-1">LinkedIn</span> {/* Reduced the margin-left */}
      </a>

      {/* Email Link */}
      <a
        href="mailto:j.miralles@hotmail.es"
        className="bg-gray-800 hover:bg-green-500 text-white flex items-center px-2 py-2 rounded-md transition duration-200 ease-in-out"
        style={{ maxWidth: '150px' }}
      >
        <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
        <span className="ml-1">Contact</span>
      </a>

      {/* CV Link */}
      <a
        href="/CV-2024-09-GEN-ENG.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 hover:bg-gray-500 text-white flex items-center px-2 py-2 rounded-md transition duration-200 ease-in-out"
        style={{ maxWidth: '150px' }}
      >
        <FontAwesomeIcon icon={faFile} className="text-lg" />
        <span className="ml-1">CV</span>
      </a>

      {/* GitHub Link */}
      <a
        href="https://github.com/MirallesFJ"
        className="bg-gray-800 hover:bg-red-500 text-white flex items-center px-2 py-2 rounded-md transition duration-200 ease-in-out"
        style={{ maxWidth: '150px' }}
      >
        <FontAwesomeIcon icon={faGithub} className="text-lg" />
        <span className="ml-1">GitHub</span>
      </a>
    </div>
  );
}
