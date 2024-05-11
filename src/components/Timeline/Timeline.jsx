import schoolIcon from '../../assets/school.svg';
import workIcon from '../../assets/work.svg';

export default function Timeline({ timelineElements }) {
  return (
    <div className="flex flex-col space-y-4 px-4 sm:px-6 lg:px-8 py-6">
      {timelineElements.map((element) => {
        const colors = [
          'bg-red-500',
          'bg-blue-500',
          'bg-yellow-500',
          'bg-purple-500',
          'bg-orange-500',
          'bg-green-500',
          'bg-teal-500',
        ];

        const color = `bg-${element.color}-500`;

        return (
          <div key={element.id} className="flex flex-col items-center">
            <div
              className={`border border-gray-600 rounded-lg px-6 py-4 bg-gray-800 w-full sm:w-96 text-center z-10 transition duration-200 ease-in-out hover:bg-gray-700 hover:border-gray-400 hover:shadow-lg`}
            >
              <div className="flex justify-center mb-4 sm:justify-start">
                <img
                  src={element.icon === 'school' ? schoolIcon : workIcon}
                  alt="icon"
                  className={`${color} w-8 p-1 rounded-lg`}
                />
              </div>

              <div className="text-xl font-medium">{element.title}</div>
              <div className="text-gray-300 mb-4 text-xs sm:text-sm">
                {element.location} | {element.date}
              </div>

              <div className="text-left mb-4">{element.description}</div>

              <div className="flex flex-wrap justify-center sm:justify-start">
                {element.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Vertical timeline line (only on larger screens) */}
            <div className={`${color} w-px h-12 sm:h-16 opacity-50`}></div>
          </div>
        );
      })}
    </div>
  );
}
