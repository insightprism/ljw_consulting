import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import CaseStudyCard from '../components/cards/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState(null);

  return (
    <>
      <Helmet>
        <title>Case Studies - LJW Consulting</title>
        <meta name="description" content="Real companies, real results. See how we've delivered 3-5X ROI for distressed companies." />
      </Helmet>

      <section className="bg-gradient-to-br from-navy-900 to-navy-700 text-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Real Companies. Real Results. Real Money.
            </h1>
            <p className="text-xl text-gray-300">
              Every engagement delivers minimum 2X ROI. Most deliver 3-5X.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                caseStudy={study}
                onClick={() => setSelectedStudy(study)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for detailed case study */}
      {selectedStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
          >
            <button
              onClick={() => setSelectedStudy(null)}
              className="float-right text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-4">
              {selectedStudy.client}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-navy-900 mb-2">The Challenge</h3>
                <p className="text-gray-700">{selectedStudy.challenge}</p>
                <p className="text-gray-600 mt-2">{selectedStudy.situation}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-navy-900 mb-2">Our Solution</h3>
                <ul className="space-y-2">
                  {selectedStudy.solution.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-success mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-navy-900 mb-2">The Results</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(selectedStudy.results).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded">
                      <p className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-xl font-bold text-navy-900">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {selectedStudy.testimonial && (
                <div className="bg-navy-50 p-6 rounded-lg">
                  <p className="text-lg italic text-gray-700 mb-2">
                    "{selectedStudy.testimonial}"
                  </p>
                  <p className="text-sm text-gray-600">- {selectedStudy.testimonialAuthor}</p>
                </div>
              )}

              {selectedStudy.ourTake && (
                <div className="bg-gold bg-opacity-10 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-navy-900 mb-2">Our Investment & Return</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Fixed Fee</p>
                      <p className="text-xl font-bold text-navy-900">{selectedStudy.ourTake.fee}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Performance Bonus</p>
                      <p className="text-xl font-bold text-navy-900">{selectedStudy.ourTake.performanceBonus}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total</p>
                      <p className="text-xl font-bold text-gold">{selectedStudy.ourTake.total}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CaseStudies;