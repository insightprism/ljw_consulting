import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Button from '../components/ui/Button';
import { FaEnvelope, FaPhone, FaLinkedin, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact - LJW Consulting</title>
        <meta name="description" content="Get your 30-minute reality check. Let's discuss how we can help turn your business around." />
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
              Get Your 30-Minute Reality Check
            </h1>
            <p className="text-xl text-gray-300">
              No PowerPoints. No junior associates. Just straight talk about your situation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-heading font-bold text-navy-900 mb-6">
                  Tell Us About Your Situation
                </h2>

                {submitSuccess && (
                  <div className="bg-success bg-opacity-10 border border-success text-success p-4 rounded-lg mb-6">
                    Thank you for your submission. We'll be in touch within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
                      />
                      {errors.name && (
                        <p className="text-danger text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        {...register('title', { required: 'Title is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
                      />
                      {errors.title && (
                        <p className="text-danger text-sm mt-1">{errors.title.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      {...register('company', { required: 'Company is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
                    />
                    {errors.company && (
                      <p className="text-danger text-sm mt-1">{errors.company.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
                      />
                      {errors.email && (
                        <p className="text-danger text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
                      />
                      {errors.phone && (
                        <p className="text-danger text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Revenue
                      </label>
                      <select
                        {...register('revenue')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
                      >
                        <option value="">Select range</option>
                        <option value="50-100M">$50M - $100M</option>
                        <option value="100-250M">$100M - $250M</option>
                        <option value="250-500M">$250M - $500M</option>
                        <option value="500M+">$500M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Urgency
                      </label>
                      <select
                        {...register('urgency')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (Crisis)</option>
                        <option value="30-days">Within 30 days</option>
                        <option value="90-days">Within 90 days</option>
                        <option value="planning">Planning phase</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Challenge
                    </label>
                    <select
                      {...register('challenge')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
                    >
                      <option value="">Select challenge</option>
                      <option value="cash-flow">Cash Flow Crisis</option>
                      <option value="profitability">Profitability Issues</option>
                      <option value="leadership">Leadership/Culture Problems</option>
                      <option value="operational">Operational Inefficiencies</option>
                      <option value="growth">Growth Challenges</option>
                      <option value="multiple">Multiple Issues</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us more (optional)
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
                      placeholder="Briefly describe your situation and what you hope to achieve..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="large"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Your Reality Check'}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-heading font-bold text-navy-900 mb-6">
                  Direct Contact
                </h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-navy-900 mb-4">Reach Out Directly</h3>
                    <div className="space-y-4">
                      <a
                        href="mailto:info@ljwconsulting.com"
                        className="flex items-center text-gray-700 hover:text-navy-700"
                      >
                        <FaEnvelope className="mr-3 text-gold" />
                        info@ljwconsulting.com
                      </a>
                      <a
                        href="tel:+1234567890"
                        className="flex items-center text-gray-700 hover:text-navy-700"
                      >
                        <FaPhone className="mr-3 text-gold" />
                        (123) 456-7890
                      </a>
                      <a
                        href="https://linkedin.com/company/ljw-consulting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-navy-700"
                      >
                        <FaLinkedin className="mr-3 text-gold" />
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="bg-navy-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-navy-900 mb-4">What Happens Next?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <FaClock className="text-gold mt-1 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">Within 24 Hours</p>
                          <p className="text-sm text-gray-600">We'll review your submission and reach out to schedule your reality check.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gold font-bold mr-3">2.</span>
                        <div>
                          <p className="font-medium text-gray-900">30-Minute Call</p>
                          <p className="text-sm text-gray-600">We'll discuss your situation, assess if we can help, and outline potential next steps.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gold font-bold mr-3">3.</span>
                        <div>
                          <p className="font-medium text-gray-900">Go/No-Go Decision</p>
                          <p className="text-sm text-gray-600">We'll tell you honestly if we can deliver the ROI you need. If not, we'll suggest alternatives.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gold bg-opacity-10 p-6 rounded-lg border-2 border-gold">
                    <h3 className="font-semibold text-navy-900 mb-2">Two Questions to Consider</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <strong>What's the cost of waiting?</strong><br />
                        Most distressed companies lose $1-5M per month. A 6-month delay costs more than our entire engagement.
                      </li>
                      <li>
                        <strong>Who else will actually do the work?</strong><br />
                        Your team is overwhelmed. Traditional consultants don't execute. We do all three.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;