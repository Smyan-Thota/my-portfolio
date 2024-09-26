import { NextPage } from 'next';
import { profile } from '../data/profile';

const About: NextPage = () => {
  return (
    <div className="prose lg:prose-xl mx-auto">
      <h1>About Me</h1>
      <p>{profile.summary}</p>
      <h2>Education</h2>
      {profile.education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.school}</p>
          <p>{edu.date}</p>
        </div>
      ))}
    </div>
  );
};

export default About;