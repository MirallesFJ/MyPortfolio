const projects = [
  {
    id: 0,
    title: 'PLC Software Development for Industrial Automation',
    descriptionShort:
      'Developed PLC software for a fully automated production unit using TwinCAT3 and TwinCAT-HMI.',
    description:
      'Designed and implemented the software for a fully automated industrial production station using TwinCAT3 and TwinCAT-HMI. Covered the entire development cycle — from early prototyping and simulation to production deployment. This was a highly interdisciplinary project combining software, electrical, pneumatic, and mechanical engineering. I led the full software effort, including simulation testing and system integration.',
    imagePreview: '/twincat.jpg',
    images: '/twincat.jpg',
    tech: [
      'TwinCAT',
      'TwinCAT-HMI',
      'Industrial Physics',
      'PLC',
      'Simulation',
      'GitLab',
      'Agile',
      'Scrum',
    ],
  },
  {
    id: 1,
    title: 'Books Web App',
    descriptionShort:
      'A personal project to practice full-stack web development while building a useful app for book lovers.',
    description:
      'A continuously developed full-stack web app designed for book lovers. This project serves as a practical playground for experimenting with modern frontend frameworks, UI design, and eventually smart contract integration. The long-term goal is to connect the application to the blockchain to explore decentralized interactions.',
    imagePreview: '/books-web-app.png',
    images: '/book-demo.gif',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'REST APIs'],
  },
  {
    id: 2,
    title: 'Reinforcement Learning in Simulated Environments',
    descriptionShort:
      'Deep RL project focused on training agents in simulation using modern toolkits like Gym, MuJoCo, and Stable Baselines3.',
    description:
      'Research project exploring Deep Reinforcement Learning through simulation. After evaluating various simulation environments, a custom Air Hockey game was used to train RL agents. The project involved intensive hyperparameter tuning, environment customization, and exploration of learning dynamics. This was also the topic of my MSc. thesis at TUM.',
    imagePreview: '/rl-1.png',
    images: ['/air-hockey.gif'],
    tech: [
      'Python',
      'OpenAI Gym',
      'MuJoCo',
      'Stable Baselines3',
      'C#',
      'Deep Reinforcement Learning',
    ],
  },
  {
    id: 3,
    title: 'Dynamic Multibody Analysis of a Racing Motorcycle',
    descriptionShort:
      'FEM and MBD study of a race motorcycle for MotoStudent. Focused on suspension optimization and performance simulation.',
    description:
      'Full FEM and dynamic multibody analysis of the MS6 motorcycle for MotoStudent competition. Simulated handling under real-world conditions using Altair tools. Optimized geometry and suspension parameters to improve maneuverability and vibration performance. Also contributed to component design using SolidWorks.',
    imagePreview: '/dynamic-analysis.png',
    images: '/dynamic-analysis.gif',
    tech: [
      'Multibody Simulation',
      'FEM',
      'CAD',
      'Altair Hypermesh',
      'Solidworks',
    ],
  },
  // {
  //   id: 4,
  //   title: 'Backend Framework for Industrial Automation (.NET)',
  //   descriptionShort:
  //     'Designed and implemented core backend features for an industrial control system using C# and .NET 8.',
  //   description:
  //     'Contributed to the development of backend software for an industrial automation system, with focus on control logic, system coordination, and hardware integration. The project required close collaboration with hardware and system engineers, modular architecture, and rigorous testing practices.',
  //   imagePreview: '/automation-net.png',
  //   images: ['/automation-net-diagram.png'],
  //   tech: [
  //     'C#',
  //     '.NET 8',
  //     'Microservices',
  //     'OOP',
  //     'Integration Testing',
  //     'Software Architecture',
  //   ],
  // },
  {
    id: 5,
    title: 'Quantitative Finance Projects (Work in Progress)',
    descriptionShort:
      'Models developed during my Quantitative Finance Master: econometrics, risk modeling, derivatives, and portfolio optimization.',
    description:
      'Ongoing set of projects developed as part of my Master in Quantitative Finance. Current work includes financial time series modeling, volatility forecasting, portfolio optimization algorithms, and valuation of derivatives using statistical and computational tools. More content coming soon as coursework and research evolve.',
    imagePreview: '/montecarlo.png',
    images: ['/montecarlo.png'],
    tech: [
      'Python',
      'Financial Econometrics',
      'Risk Modeling',
      'Volatility Modeling',
      'Portfolio Optimization',
      'Monte Carlo Simulation',
      'Derivatives',
      'Time Series',
    ],
  },
];

export default projects.reverse();
