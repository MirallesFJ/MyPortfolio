export default function HorizontalNavBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 z-20 group">
      <div className="flex items-center justify-between transition-all duration-300 ease-in-out p-2 group-hover:px-8">
        {/* Menu Icon (Visible at the Start) */}
        <div className="flex-shrink-0">
          <span className="text-white text-2xl group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
            ≡
          </span>
        </div>

        {/* Navigation Links (Visible on Hover) */}
        <div className="hidden flex-1 group-hover:flex justify-evenly text-white">
          <a
            href="#header"
            className="hover:text-blue-400 transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#experience"
            className="hover:text-blue-400 transition-all duration-200"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
