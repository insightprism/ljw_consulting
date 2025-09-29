import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">LJW Consulting</h3>
            <p className="text-gray-300 mb-4">
              We Don't Just Advise. We Fix, Execute, and Deliver.
            </p>
            <p className="text-gray-300">
              Turnaround consulting with 90+ years of battle-tested experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-gold transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-gold transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@ljwconsulting.com"
                className="flex items-center text-gray-300 hover:text-gold transition-colors"
              >
                <FaEnvelope className="mr-2" />
                info@ljwconsulting.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-300 hover:text-gold transition-colors"
              >
                <FaPhone className="mr-2" />
                (123) 456-7890
              </a>
              <a
                href="https://linkedin.com/company/ljw-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-gold transition-colors"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} LJW Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-gold text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-gold text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;