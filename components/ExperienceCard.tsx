import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, date, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <h3 className="text-xl text-gray-600">{company}</h3>
      <p className="text-gray-500 mb-4">{date}</p>
      <ul className="list-disc pl-5">
        {description.map((item, index) => (
          <li key={index} className="text-gray-700 mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;