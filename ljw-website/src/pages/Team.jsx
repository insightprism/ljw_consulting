import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ExecutiveBio from '../components/cards/ExecutiveBio';
import { executives } from '../data/executives';

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - LJW Consulting</title>
        <meta name="description" content="Meet the LJW Consulting leadership team. Three veteran executives with 90+ years of combined experience in turnarounds and transformations." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 text-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Operators, Not Observers
            </h1>
            <p className="text-xl text-gray-300">
              We're not consultants who studied turnarounds in business school.
              We're executives who've lived them, led them, and delivered results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
              90+ Years of Battle-Tested Experience
            </h2>
            <p className="text-lg text-gray-700">
              LJW Consulting brings together three former executives who've sat in your chair,
              faced your pressures, and delivered real turnarounds. We don't learn on your dime —
              we've already been through the fire and know exactly what it takes to succeed.
            </p>
          </motion.div>

          {/* Combined Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gold mb-2">90+</div>
              <p className="text-gray-600">Years Combined Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gold mb-2">$500M+</div>
              <p className="text-gray-600">Value Created</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gold mb-2">25+</div>
              <p className="text-gray-600">Successful Turnarounds</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gold mb-2">3-5X</div>
              <p className="text-gray-600">Average ROI Delivered</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Bios */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-12">
            Meet Your Turnaround Team
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <motion.div
                key={executive.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ExecutiveBio executive={executive} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Team */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold text-navy-900 text-center mb-12">
              Why This Team Works
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gold rounded-full p-3 mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Complete Executive Coverage</h3>
                  <p className="text-gray-700">
                    Finance, HR, and Operations — the three critical functions that must work together
                    in any successful turnaround. We don't need to coordinate with other firms or
                    wait for committee decisions. We are the committee.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold rounded-full p-3 mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Been There, Done That</h3>
                  <p className="text-gray-700">
                    We've faced angry banks, hostile unions, toxic cultures, and bleeding cash flows.
                    We don't panic because we've seen it all before. We know which battles to fight
                    and which fires to let burn.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold rounded-full p-3 mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Unified Approach</h3>
                  <p className="text-gray-700">
                    We've worked together on multiple engagements. We know each other's strengths,
                    trust each other's judgment, and move as one unit. No politics, no territorialism,
                    just results.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold rounded-full p-3 mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Skin in the Game</h3>
                  <p className="text-gray-700">
                    We prefer performance-based compensation because we believe in our ability to deliver.
                    When we win, you win bigger. When we take on your challenge, we're all in —
                    our reputation and compensation depend on your success.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ready to Work with Executives Who Execute?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help turn your business around.
              30 minutes, no PowerPoints, just straight talk about your situation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gold text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Schedule Your Reality Check
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;