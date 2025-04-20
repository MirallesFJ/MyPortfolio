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
          Hi, I'm Jorge — a software engineer with a strong quantitative
          background and a passion for solving analytical problems through code.
          I hold a master’s degree in Computational Mechanics from the Technical
          University of Munich, where I focused on applied mathematics,
          numerical methods, and high-performance computing for simulation and
          risk analysis.
        </p>

        <p className="mt-4">
          My professional experience spans fullstack development, industrial
          automation, and R&D in reinforcement learning for robotics. I've built
          real-world systems using technologies like .NET, C#, Angular, Node.js,
          and PostgreSQL — while applying structured, test-driven approaches in
          agile environments.
        </p>

        <p className="mt-4">
          I'm currently pursuing a Master’s in Quantitative Finance, deepening
          my expertise in financial econometrics, derivatives, and risk
          modeling. My goal is to bridge the gap between engineering and
          finance, bringing together strong technical skills and a sharp
          analytical mindset to tackle complex problems in modern financial
          markets.
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex justify-center">
        <SocialLinks />
      </div>
    </header>
  );
}
