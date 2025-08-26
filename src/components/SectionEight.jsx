import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function AnimatedFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-transparent font-mono backdrop-blur-3xl text-gray-300 py-20 px-4 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Brand */}
          <div className="mb-10 md:mb-0 text-center md:text-left footer-card">
            <h2 className="text-3xl font-bold gradient-text floating">Artificial intelligence</h2>
            <p className="mt-4 text-black max-w-md text-lg">
              Creating <span className="gradient-text font-semibold">innovative solutions</span> for the digital world. 
              Transforming ideas into reality.
            </p>
            <div className="mt-6 flex space-x-4 justify-center md:justify-start">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                Get Started
              </button>
              <button className="px-4 py-2 border border-gray-600 rounded-lg text-black font-medium hover:bg-white/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10 md:mb-0">
            <div className="footer-card">
              <h3 className="text-xl font-semibold mb-5 gradient-text">Company</h3>
              <ul className="space-y-3" >
                {['About', 'Careers', 'Contact', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-black hover:text-white footer-link inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-card">
              <h3 className="text-xl font-semibold mb-5 gradient-text">Resources</h3>
              <ul className="space-y-3">
                {['Help Center', 'Partners', 'Community', 'Events'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-black hover:text-white footer-link inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-card">
              <h3 className="text-xl font-semibold mb-5 gradient-text">Legal</h3>
              <ul className="space-y-3">
                {['Privacy', 'Terms', 'Cookie Policy', 'Licenses'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-black hover:text-white footer-link inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Social + Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Your Company. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="social-icon text-gray-400 hover:text-[#1877F2]">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="social-icon text-gray-400 hover:text-[#1DA1F2]">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="social-icon text-gray-400 hover:text-[#E4405F]">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="social-icon text-gray-400 hover:text-[#0A66C2]">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a href="#" className="social-icon text-gray-400 hover:text-[#181717]">
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .gradient-text {
          background: linear-gradient(90deg, #6366f1, #ec4899, #f59e0b, #10b981);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 8s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .footer-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .footer-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: linear-gradient(90deg, #ec4899, #6366f1);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover {
          transform: translateY(-2px);
        }
        
        .footer-link:hover:after {
          width: 100%;
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-4px) scale(1.2);
        }
        
        .footer-card {
          transition: transform 0.4s ease;
        }
        
        .footer-card:hover {
          transform: translateY(-5px);
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </footer>
  );
}
