import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Contact Information */}
        <div className="md:col-span-1 text-center md:text-left">
          <h2 className="text-lg font-bold">Contact Information</h2>
          <p className="text-sm">
            <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
            j.miralles@hotmail.es
          </p>
          {/* <p className="text-sm">Phone: +123-456-7890</p> */}
          <p className="text-sm">
            <FontAwesomeIcon className="mr-4" icon={faLocationDot} />
            Munich, Germany
          </p>
        </div>
        <SocialLinks />

        {/* Quick Links (Optional) */}
        <div className="hidden md:block ml-40">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="mt-2 text-sm">
            <li>
              <a href="#header" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-blue-400">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Jorge Miralles. All rights reserved.
      </div>
    </footer>
  );
}
