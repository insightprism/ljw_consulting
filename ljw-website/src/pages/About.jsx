import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - LJW Consulting</title>
        <meta name="description" content="Learn about LJW Consulting's approach to business turnarounds and why we succeed where others fail." />
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
              Fixing Businesses from the Inside Out
            </h1>
            <p className="text-xl text-gray-300">
              We're not consultants. We're executives who take control and deliver results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8 text-lg text-gray-700"
            >
              <p>
                LJW Consulting was founded on a simple premise: distressed companies don't need more advice - 
                they need executives who can make hard decisions and execute under pressure.
              </p>

              <p>
                After decades of watching traditional consulting firms deliver impressive PowerPoints while 
                companies continued to burn cash, we decided to take a different approach. We don't advise 
                from the sidelines. We step into the arena, take operational control, and do what needs to be done.
              </p>

              <h2 className="text-2xl font-heading font-bold text-navy-900 mt-12">
                Our Philosophy
              </h2>

              <div className="bg-navy-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Execution Over Strategy
                </h3>
                <p className="text-gray-700">
                  The best strategy means nothing if it isn't executed. We focus on doing, not just planning. 
                  While others study the problem, we're already implementing solutions.
                </p>
              </div>

              <div className="bg-navy-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Authority With Accountability
                </h3>
                <p className="text-gray-700">
                  We require executive authority because we take accountability for results. 
                  When we have the power to act, we deliver. No excuses, no committees, no delays.
                </p>
              </div>

              <div className="bg-navy-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Integrated Solutions
                </h3>
                <p className="text-gray-700">
                  Finance, HR, and Operations must be fixed together. Our three-partner model ensures 
                  all critical functions move in lockstep toward recovery.
                </p>
              </div>

              <h2 className="text-2xl font-heading font-bold text-navy-900 mt-12">
                Our Commitment
              </h2>

              <p>
                Every engagement we take on comes with three performance metrics:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-3">1.</span>
                  <span><strong>Minimum 2X ROI:</strong> If we can't deliver at least twice our fee in measurable value, we won't take the engagement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-3">2.</span>
                  <span><strong>Stabilize Cash Flow in 90 Days:</strong> We'll stabilize your cash position within three months and be cash flow positive by the time our engagement is complete.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold font-bold mr-3">3.</span>
                  <span><strong>Knowledge Transfer:</strong> When we leave, your team will be stronger and self-sufficient, not dependent on consultants.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-navy-900 mt-12">
                Why We Succeed Where Others Fail
              </h2>

              <p>
                Traditional consulting fails for three reasons: lack of authority, lack of accountability, 
                and lack of experience. We solve all three:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">Authority</div>
                  <p className="text-gray-600">We make decisions, not recommendations</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">Accountability</div>
                  <p className="text-gray-600">We own the outcomes, good or bad</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">Experience</div>
                  <p className="text-gray-600">We've been in your shoes before</p>
                </div>
              </div>
            </motion.div>

            <div className="mt-16 text-center">
              <Button to="/contact" size="large">
                Discuss Your Situation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;