import { useState, useEffect } from 'react';

export default function Navbar() {
  // State to track if the navbar should be transparent or opaque
  const [isTop, setIsTop] = useState(true);

  // Listen for scroll events to update the state
  useEffect(() => {
    const handleScroll = () => {
      // Set isTop to true if the scroll position is at the top, false otherwise
      setIsTop(window.scrollY === 0);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  return (
    <nav
      className={`${
        isTop ? 'bg-gray-800' : 'bg-gray-700'
      } p-4 fixed top-3 z-30 mx-auto rounded-2xl transition-colors duration-300`}
    >
      <div className="flex justify-center space-x-8 text-white">
        <a href="#header" className="hover:text-blue-400">
          <strong>Home</strong>
        </a>
        <a href="#projects" className="hover:text-blue-400">
          <strong>Projects</strong>
        </a>
        <a href="#experience" className="hover:text-blue-400">
          <strong>Experience</strong>
        </a>
        <a href="#contact" className="hover:text-blue-400">
          <strong>Contact</strong>
        </a>
      </div>
    </nav>
  );
}
