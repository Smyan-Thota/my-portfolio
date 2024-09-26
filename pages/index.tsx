import { NextPage } from 'next';
import { profile } from '../data/profile';

const Home: NextPage = () => {
  return (
    <div className="prose lg:prose-xl mx-auto">
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p>{profile.location}</p>
      <p>{profile.summary}</p>
      <div>
        <h3>Contact</h3>
        <p>Email: {profile.email}</p>
        <p>LinkedIn: <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></p>
      </div>
    </div>
  );
};

export default Home;