import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header className="mt-10 px-4 sm:px-6 lg:px-8">
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center">
        {/* Profile Photo */}
        <img
          src="/my-photo.png"
          alt="Jorge's photo"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg sm:mr-8 mb-6 sm:mb-0"
        />

        {/* Heading and Subtitle */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Jorge Miralles Filippini
          </h1>
          <h2 className="text-xl sm:text-2xl font-light mt-2">
            MSc. Computational Mechanics
          </h2>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="mt-6 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto p-4 sm:p-8">
        <p>
          Hi, I'm Jorge, a software engineer with a master's degree in
          computational mechanics, focusing on applied mathematics, software
          development, and reinforcement learning.
        </p>
        <p className="mt-4">
          I have experience in PLC software development, contributing to
          innovative automated production systems and AI-based robotics
          applications.
        </p>
        <p className="mt-4">
          Now, I'm looking to transition into web and web3 development to
          leverage my skills in creating robust, scalable web applications.
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex justify-center">
        <SocialLinks />
      </div>
    </header>
  );
}
