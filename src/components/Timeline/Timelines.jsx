import Timeline from './Timeline.jsx';
import experienceElements from '../../assets/experienceElements.js';
import educationElements from '../../assets/educationElements.js';
export default function Timelines() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:mt-6">
        {/* Experience Section */}
        <section className="text-white lg:w-3/4 p-8 text-left lg:text-left">
          <h1 className="text-2xl font-extrabold text-left mx-5">Experience</h1>

          <Timeline timelineElements={experienceElements}></Timeline>
        </section>

        {/* Education Section */}
        <section className="text-white lg:w-5/12 p-8 lg:text-left lg:ml-4">
          <h1 className="text-2xl font-extrabold text-left mx-5">Education</h1>
          <Timeline timelineElements={educationElements}></Timeline>
        </section>
      </div>
      <p>
        Timeline-Credits: https://github.com/alekspopovic/timeline/tree/master
      </p>
    </>
  );
}
