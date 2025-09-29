import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import CaseStudyCard from '../components/cards/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';
import { FaCheckCircle, FaChartLine, FaUserTie, FaHandshake, FaBolt, FaShieldAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LJW Consulting - We Fix, Execute, and Deliver</title>
        <meta name="description" content="Turnaround consulting with 90+ years experience. We don't just advise - we take control and deliver results." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              We Don't Just Advise.<br />
              We Fix, Execute, and Deliver.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              When 70% of turnarounds fail, you need executives who make decisions, not PowerPoints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="secondary" size="large">
                Get Your 30-Minute Reality Check
              </Button>
              <Button to="/case-studies" variant="outline" size="large">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy-900 mb-6">
              The Hard Truth About Business Turnarounds
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-danger mb-2">70%</div>
                <p className="text-gray-600">of turnarounds fail to deliver sustainable results</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-danger mb-2">$1-5M</div>
                <p className="text-gray-600">lost per month in distressed companies</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-danger mb-2">18mo</div>
                <p className="text-gray-600">average time consultants take to show results</p>
              </div>
            </div>
            <p className="text-xl text-gray-700 mt-12">
              Traditional consultants give you reports. Investment bankers restructure debt.
              Lawyers reorganize entities. <span className="font-bold text-navy-900">But who actually fixes your business?</span>
            </p>
            <p className="text-3xl font-heading font-bold text-gold mt-8">We do.</p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy-900 text-center mb-12">
              Our Fundamental Difference: We Take the Wheel
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Others Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-danger mr-3 mt-1">✕</span>
                    <p className="text-gray-600"><strong>McKinsey:</strong> "Here's your strategic roadmap."</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-danger mr-3 mt-1">✕</span>
                    <p className="text-gray-600"><strong>Restructuring Advisors:</strong> "You should cut costs by 20%."</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-danger mr-3 mt-1">✕</span>
                    <p className="text-gray-600"><strong>Interim Executives:</strong> "I'll fix finance."</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">What We Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-success mr-3 mt-1">✓</span>
                    <p className="text-gray-600"><strong>LJW:</strong> "We'll drive the car."</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-success mr-3 mt-1">✓</span>
                    <p className="text-gray-600"><strong>LJW:</strong> "We'll decide which costs and handle the fallout."</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-success mr-3 mt-1">✓</span>
                    <p className="text-gray-600"><strong>LJW:</strong> "We'll fix finance AND HR AND operations, simultaneously."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">The Authority Difference</h3>
              <p className="text-gray-700 mb-4">
                We don't make recommendations. We make decisions. Our engagements require:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaCheckCircle className="text-success mr-3" />
                  <span>Executive authority on operational decisions</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-success mr-3" />
                  <span>Direct access to all stakeholders</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-success mr-3" />
                  <span>Ability to make personnel changes</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-success mr-3" />
                  <span>Budget control for our scope areas</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 270-Day Transformation */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy-900 text-center mb-12">
              The 270-Day Transformation
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="text-gold font-bold text-lg mb-2">Days 0-30</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Rapid Triage</h3>
                <p className="text-gray-600 mb-4">We assess the patient while stopping the bleeding.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cash flow analysis</li>
                  <li>• Leadership assessment</li>
                  <li>• Quick wins: $1-3M immediate cash</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="text-gold font-bold text-lg mb-2">Days 30-90</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Stabilization</h3>
                <p className="text-gray-600 mb-4">We take control and calm the chaos.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cash management protocols</li>
                  <li>• Critical personnel decisions</li>
                  <li>• Cash flow positive by day 90</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="text-gold font-bold text-lg mb-2">Days 90-270</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Transformation</h3>
                <p className="text-gray-600 mb-4">We rebuild the engine while driving.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Financial architecture redesign</li>
                  <li>• Team restructuring</li>
                  <li>• Sustainable systems</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="text-gold font-bold text-lg mb-2">Days 270+</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Transition</h3>
                <p className="text-gray-600 mb-4">We hand back a healthy company.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Train permanent team</li>
                  <li>• Document processes</li>
                  <li>• 90-day warranty</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy-900 text-center mb-12">
              Proof: Real Companies, Real Results, Real Money
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  caseStudy={study}
                  onClick={() => window.location.href = '/case-studies'}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button to="/case-studies" size="large">
                View All Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why LJW */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-center mb-12">
              Why CEOs and Boards Choose LJW
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <FaUserTie className="text-5xl text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">We've Walked in Your Shoes</h3>
                <p className="text-gray-300">We've been the executives making payroll and facing the board.</p>
              </div>

              <div className="text-center">
                <FaChartLine className="text-5xl text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Complete Solution</h3>
                <p className="text-gray-300">Finance, HR, and Operations in one integrated team.</p>
              </div>

              <div className="text-center">
                <FaShieldAlt className="text-5xl text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">We Take Responsibility</h3>
                <p className="text-gray-300">With executive authority comes accountability.</p>
              </div>

              <div className="text-center">
                <FaBolt className="text-5xl text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Speed of Execution</h3>
                <p className="text-gray-300">Decisions that take committees months take us days.</p>
              </div>

              <div className="text-center">
                <FaHandshake className="text-5xl text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Knowledge Transfer</h3>
                <p className="text-gray-300">When we leave, you're stronger, not dependent.</p>
              </div>

              <div className="text-center">
                <FaCheckCircle className="text-5xl text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Selective Engagement</h3>
                <p className="text-gray-300">We only take clients we can help succeed.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold py-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy-900 mb-6">
              Ready to Turn Your Business Around?
            </h2>
            <p className="text-xl text-navy-700 mb-8 max-w-2xl mx-auto">
              We'll spend 30 minutes understanding your situation and give you our honest assessment.
              No PowerPoints. No junior associates. Just three executives who know the way out.
            </p>
            <Button to="/contact" variant="primary" size="large">
              Get Your 30-Minute Reality Check
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;