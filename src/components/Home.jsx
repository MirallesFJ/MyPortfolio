import Header from './Header.jsx';
import Timelines from './Timeline/Timelines.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Projects from './Projects.jsx';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-gray-600 to-black text-white">
        {/* Header Section */}
        <div
          id="header"
          className="flex flex-col items-center justify-center min-h-screen mx-auto max-w-5xl p-8"
        >
          <Header />
          <h1 className="text-lg sm:text-xl font-semibold text-center mb-4 my-4 font-italic">
            Note: This website is still in development...
          </h1>

          {/* Projects Section */}
          <div
            id="projects"
            className="container mx-auto mt-16 sm:mt-24 px-4 sm:px-6 lg:px-8"
          >
            <Projects />
          </div>

          {/* Experience/Timeline Section */}
          <div id="experience" className="mt-16 sm:mt-24 px-4 sm:px-6 lg:px-8">
            <Timelines />
          </div>
        </div>

        {/* Footer Section */}
        <div
          id="contact"
          className="bg-black text-center py-6 px-4 sm:px-6 lg:px-8"
        >
          <Footer />
        </div>
      </div>
    </>
  );
}
