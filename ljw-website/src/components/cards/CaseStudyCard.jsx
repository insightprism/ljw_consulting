import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const CaseStudyCard = ({ caseStudy, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="inline-block px-3 py-1 bg-navy-100 text-navy-700 text-sm rounded-full">
          {caseStudy.industry}
        </span>
        <span className="text-gray-500 text-sm">{caseStudy.revenue} Revenue</span>
      </div>

      <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">
        {caseStudy.client}
      </h3>

      <p className="text-gray-600 mb-4 line-clamp-2">
        {caseStudy.challenge}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-gold">
            {caseStudy.results.roi}
          </p>
          <p className="text-sm text-gray-500">ROI</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-navy-700">
            {caseStudy.results.timeline}
          </p>
          <p className="text-sm text-gray-500">Timeline</p>
        </div>
      </div>

      {caseStudy.results.ebitdaImprovement && (
        <div className="border-t pt-4">
          <p className="text-sm text-gray-500 mb-1">EBITDA Improvement</p>
          <p className="text-xl font-bold text-success">
            {caseStudy.results.ebitdaImprovement}
          </p>
        </div>
      )}

      <div className="mt-4 flex items-center text-navy-700 hover:text-navy-900">
        <span className="font-medium mr-2">Read Full Case Study</span>
        <FaArrowRight />
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;