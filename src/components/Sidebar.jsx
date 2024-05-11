export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full z-20 group">
      <div className="bg-gray-800 w-16 h-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out group-hover:w-48">
        {/* Icon or Menu Symbol to Indicate Sidebar */}
        <span className="text-white text-xl group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
          ≡
        </span>

        {/* Navigation Links (Visible on Hover) */}
        <div className="hidden group-hover:flex flex-col space-y-4 mt-8 text-white">
          <a href="#header" className="hover:text-blue-400">
            Home
          </a>
          <a href="#experience" className="hover:text-blue-400">
            Experience
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
