import React from 'react';
import { MapPin, Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className='w-8 md:w-10'>
                <img src="src/assets/Logo.png" alt="Logo" className='object-contain w-full rounded-xl' />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">SwiftStay.</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Simplifying the search for premium properties in India's leading IT hubs.
              Find your perfect stay in Pune and Hyderabad with zero brokerage.
            </p>
            <div className="flex gap-4 pt-2">
              <Instagram size={20} className="hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-blue-500 cursor-pointer transition-colors" />
              <Linkedin size={20} className="hover:text-blue-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Featured Stays</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pune Properties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hyderabad Properties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">List Your Home</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>hello@swiftstay.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 leading-tight">
                <MapPin size={18} className="text-blue-500 mt-1" />
                <span>Hitech City, Hyderabad<br />Maharashtra, Pune</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <p>© 2026 SwiftStay Technologies Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-300 cursor-pointer">Sitemap</span>
            <span className="hover:text-gray-300 cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;