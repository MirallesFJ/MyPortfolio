const projects = [
  {
    id: 0,
    title: 'Books Web App',
    descriptionShort:
      'Side project that I am developing to practice my Web Development skills.',
    description:
      'Side project that I am developing to practice my Web Development skills. This is a continously developed project where I put into practice the new Web Development skills that I learn while creating a usefull app for book-lovers like myself. The idea is to create a full-stack web app and try to conect it to the blockchain.',
    imagePreview: '/books-web-app.png',
    images: '/book-demo.gif',
    tech: ['React', 'Tailwind CSS'],
  },
  {
    id: 1,
    title: 'PLC Software Development',
    descriptionShort:
      'Developed PLC software for a fully automated production station using TwinCAT3 and TwinCAT-HMI.',
    description:
      'Developed PLC software for a fully automated production station using TwinCAT3 and TwinCAT-HMI. Was involved in the whole development process, from concept to release in production. This project was a cross-disciplinary project, involving multiple disciplines, including mechanical, electrical, pneumatic, and software engineering. I was responsible for the entire software development and simulation.',
    imagePreview: '/twincat.jpg',
    images: '/twincat.jpg',
    tech: [
      'TwinCAT',
      'TwinCAT-HMI',
      'Industrial Physics',
      'Agile Methods',
      'Scrum',
      'Git',
      'GitLab',
      'Systems engineering',
    ],
  },
  {
    id: 2,
    title: 'Reinforcement Learning in Simulated Environments for Robot-Control',
    descriptionShort:
      'This project explores Deep Reinforcement Learning in simulated environments. It starts with key concepts, then examines software, tools, and methods. A comparison of simulators reveals which work best. The project trains a smart agent in an Air Hockey game, focusing on hyperparameter tuning. It concludes with suggestions for future research.',
    description:
      'The project explores training smart agents using Deep Reinforcement Learning in simulated environments. It begins with an overview of key Reinforcement Learning concepts, then dives into the software, tools, and methodology used in this study. A thorough comparison of simulators is conducted to determine their compatibility with Reinforcement Learning, explaining why some are unsuitable for this purpose. The study culminates in training a smart agent to perform increasingly challenging tasks in an Air Hockey game environment, with an emphasis on hyperparameter tuning for optimal learning. The thesis concludes by suggesting possible directions for future research and development in this field.',
    imagePreview: '/rl-1.png',
    images: ['/air-hockey.gif'],
    tech: [
      'Python',
      "OpenAI's GYM",
      'MuJoCo',
      'C#',
      'Stable Baselines 3',
      'Deep Reinforcement Learning',
    ],
  },
  {
    id: 3,
    title: 'Dynamic Multibody Analysis of a Racing Motorcycle',
    descriptionShort:
      "This project analyzed the MS6 motorcycle, developed by the MotoStudent team 'MOTO-MAQLAB-UC3M,' to study its performance in various track conditions. Using Multi-Body-Dynamics software, the study identified the best front and rear suspension settings for improved maneuverability.",
    description:
      'The project focused on conducting a comprehensive dynamic study of the MS6 motorcycle, developed by the MotoStudent team "MOTO-MAQLAB-UC3M." Using advanced Multi-Body-Dynamics software, the project aimed to simulate the real-world behavior of the motorcycle under various track conditions. This approach enabled a thorough understanding of how design elements and material choices affect the motorcycle\'s overall performance, with a specific emphasis on its geometry and suspension system. The study also determined the optimal front and rear suspension settings, including stiffness and preload, to ensure improved maneuverability and adaptability. This dynamic model served as a foundation for further studies on load cases and vibrations, ultimately contributing to more efficient and high-performing motorcycle designs.',
    imagePreview: '/dynamic-analysis.png',
    images: '/dynamic-analysis.gif',
    tech: [
      'Multibody Dynamic Analysis',
      'Simulation',
      'FEM',
      'Altair Hypermesh',
      'CAD',
      'Solidworks',
      'Altair Hypermesh',
    ],
  },
];

export default projects;
