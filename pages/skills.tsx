import { NextPage } from 'next';
import { profile } from '../data/profile';

const Skills: NextPage = () => {
  return (
    <div className="prose lg:prose-xl mx-auto">
      <h1>Skills</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {profile.skills.map((skill, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;