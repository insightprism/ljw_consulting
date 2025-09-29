import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ExecutiveBio = ({ executive }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="aspect-w-3 aspect-h-4 bg-gray-200">
        {executive.image ? (
          <img
            src={executive.image}
            alt={executive.name}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-64 bg-gradient-to-br from-navy-700 to-navy-500 flex items-center justify-center">
            <span className="text-white text-4xl font-heading">
              {executive.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-heading font-bold text-navy-900 mb-2">
          {executive.name}
        </h3>
        <p className="text-lg text-gray-700 mb-4">{executive.title}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {executive.expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-navy-100 text-navy-700 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="text-gray-600 mb-6">
          {isExpanded ? executive.bio.detailed : executive.bio.summary}
        </p>

        <div className="space-y-4 mb-6">
          <h4 className="font-semibold text-navy-900">Key Achievements</h4>
          {executive.achievements.map((achievement, index) => (
            <div key={index} className="flex items-start">
              <span className="text-2xl font-bold text-gold mr-4">
                {achievement.metric}
              </span>
              <span className="text-gray-600 pt-1">
                {achievement.description}
              </span>
            </div>
          ))}
        </div>

        {isExpanded && (
          <div className="space-y-4 mb-6">
            <h4 className="font-semibold text-navy-900">Education</h4>
            <ul className="list-disc list-inside text-gray-600">
              {executive.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-navy-700 hover:text-navy-900 font-medium"
          >
            {isExpanded ? 'Show Less' : 'Read Full Bio'}
          </button>

          {executive.linkedIn && (
            <a
              href={executive.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-700 hover:text-navy-900"
            >
              <FaLinkedin size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExecutiveBio;