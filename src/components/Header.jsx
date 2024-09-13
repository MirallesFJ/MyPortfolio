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
          Hi, I'm Jorge, a software engineer with a master’s degree in
          Computational Mechanics, where I developed a strong foundation in
          Applied Mathematics, Numerical Methods, Computational Modeling &
          Simulation, and Software Development.
        </p>
        <p>
          My experience spans developing front-end and back-end systems,
          including building scalable web applications using Angular, Node.js,
          PostgreSQL, and InfluxDB. I have worked on projects that range from
          creating human-machine interfaces (HMI) for industrial automation to
          conducting R&D in AI-driven robotics.
        </p>
        <p>
          Now, I am focused on applying my mathematical and programming
          expertise to quantitative finance, algorithmic trading, fintech and
          web technologies. where I aim to contribute by developing robust,
          high-performance models and software solutions.
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
