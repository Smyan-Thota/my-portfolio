import { NextPage } from 'next';
import ExperienceCard from '../components/ExperienceCard';
import { profile } from '../data/profile';

const Experience: NextPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Work Experience</h1>
      {profile.experience.map((exp, index) => (
        <ExperienceCard
          key={index}
          title={exp.title}
          company={exp.company}
          date={exp.date}
          description={exp.description}
        />
      ))}
    </div>
  );
};

export default Experience;