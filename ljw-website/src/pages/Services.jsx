import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - LJW Consulting</title>
        <meta name="description" content="Our 270-day transformation methodology. From rapid triage to complete turnaround." />
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
              The 270-Day Transformation
            </h1>
            <p className="text-xl text-gray-300">
              A proven methodology that takes companies from crisis to cash flow positive
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Phase 1 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-navy-900">Days 0-30: Rapid Triage</h2>
                    <p className="text-gray-600">Assess and stabilize</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Complete cash flow analysis with daily positioning
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Leadership assessment - who's helping, who's hurting
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Identify immediate revenue leaks and cost hemorrhages
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Quick wins: typically find $1-3M in immediate cash
                  </li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-navy-900">Days 30-90: Stabilization</h2>
                    <p className="text-gray-600">Take control and calm the chaos</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Implement cash management protocols
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Make critical personnel decisions
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Renegotiate urgent vendor/customer terms
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Install basic performance metrics
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Typical result: Cash flow positive by day 90
                  </li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    3
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-navy-900">Days 90-270: Transformation</h2>
                    <p className="text-gray-600">Rebuild the engine while driving</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Redesign financial architecture and reporting
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Restructure teams and accountability
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Revamp sales compensation and customer profitability
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Implement operational improvements
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Build sustainable systems, not band-aids
                  </li>
                </ul>
              </div>

              {/* Phase 4 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gold text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    4
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-navy-900">Days 270+: Transition</h2>
                    <p className="text-gray-600">Hand back a healthy company</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Train permanent leadership team
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Document all systems and processes
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    Gradual handoff with support
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    90-day warranty period post-engagement
                  </li>
                </ul>
              </div>
            </motion.div>

            <div className="mt-16 text-center">
              <Button to="/contact" size="large">
                Start Your Transformation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;