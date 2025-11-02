export default function QuantProjects() {
  return (
    <div className="p-10 space-y-10">
      <h2 className="text-center text-3xl font-bold mb-6 tracking-tight">
        My Quantitative Finance Projects
      </h2>

      <div className="flex flex-col items-center gap-8">
        {/* Project Title */}
        <h3 className="text-2xl font-semibold text-blue-400 text-center">
          Interactive Risk & Portfolio Analysis Dashboards
        </h3>

        {/* Project Image */}
        <a
          href="https://mfj-qf.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-2xl transform transition-transform hover:scale-[1.02] duration-200"
        >
          <img
            src="quant-proj.png"
            alt="Quantitative Finance Dashboards"
            className="rounded-xl shadow-2xl w-full"
          />
        </a>

        {/* Project Description */}
        <div className="w-full max-w-2xl space-y-5 text-center">
          <p className="text-gray-300 leading-relaxed">
            A collection of Python-based dashboards for quantitative finance,
            integrating econometric modeling, simulation, and interactive data
            visualization through Streamlit.
          </p>

          {/* Skills / Technologies */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Python',
              'Financial Econometrics',
              'Risk Modeling',
              'Volatility Modeling',
              'Portfolio Optimization',
              'Monte Carlo Simulation',
              'Derivatives Pricing',
              'Time Series Analysis',
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#1E2A44]/80 hover:bg-[#24365A] rounded-full text-sm text-white transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Open App Button */}
          <div className="flex justify-center pt-4">
            <a
              href="https://mfj-qf.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400
                         text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-blue-400/30
                         transition-all duration-200 ease-in-out transform hover:-translate-y-[2px] active:translate-y-[1px]"
            >
              🚀 Open App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
