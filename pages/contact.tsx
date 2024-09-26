import { NextPage } from 'next';
import { profile } from '../data/profile';

const Contact: NextPage = () => {
  return (
    <div className="prose lg:prose-xl mx-auto">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me through any of the following channels:</p>
      <ul>
        <li>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li>LinkedIn: <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></li>
      </ul>
      {/* You can add a contact form here if you want */}
    </div>
  );
};

export default Contact;