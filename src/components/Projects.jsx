import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';
import ProjectDetails from './ProjectDetails';
import projects from '../assets/projects';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleOpenDetails(project) {
    setSelectedProject(project);
    setIsModalOpen(true);
  }

  return (
    <div className="p-10 space-y-8">
      {' '}
      {/* Added spacing between sections */}
      <h2 className="text-center text-3xl font-bold mb-6">My Projects</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="flex flex-col items-center justify-center flex-wrap">
              {' '}
              {/* Added flex-wrap */}
              <h3 className="text-xl font-bold my-4">{project.title}</h3>
              <p className="text-base text-gray-200 my-4 leading-relaxed text-center">
                {' '}
                {/* Centered text for narrow screens */}
                {project.descriptionShort}
              </p>
              <img
                src={project.imagePreview}
                alt={project.title}
                className="object-cover rounded-lg my-4 w-full sm:w-auto" // Adaptable width for images
              />
              <button
                onClick={() => handleOpenDetails(project)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Details
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {isModalOpen && (
        <ProjectDetailsModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          {selectedProject ? (
            <ProjectDetails project={selectedProject} />
          ) : null}
        </ProjectDetailsModal>
      )}
    </div>
  );
}
