import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header className="mt-10 px-4 sm:px-6 lg:px-8">
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center text-center">
        {/* Profile Photo */}
        {/* <img
          src="/my-photo.png"
          alt="Jorge's photo"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg sm:mr-8 mb-6 sm:mb-0"
        /> */}

        {/* Heading and Subtitle */}
        <div className="flex flex-col items-center justify-center text-center h-full">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Jorge Miralles Filippini
          </h1>
          <h2 className="text-xl sm:text-2xl font-light mt-2">
            Quantitative Finance | MSc. in Computational Mechanics
          </h2>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="mt-6 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto p-4 sm:p-8">
        <p>
          Quantitative engineer with a background in <strong>applied mathematics</strong>,
          <strong> risk modelling</strong>, and <strong>computational finance</strong>.
          I combine experience in <strong>software engineering</strong> and
          <strong> mathematical modelling</strong> to build data-driven tools for
          pricing, volatility, and portfolio risk analysis.
        </p>

        <p className="mt-4">
          MSc in <strong>Computational Mechanics</strong> (TUM) and
          Master’s in <strong>Quantitative Finance</strong> (UNED).
          Skilled in <strong>Python, C#, Monte Carlo simulation, GARCH/EVT</strong>,
          and <strong>numerical optimisation</strong>.
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex justify-center">
        <SocialLinks />
      </div>
    </header>
  );
}
