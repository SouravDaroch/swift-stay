import React from 'react'
import { Link } from 'react-router'

const CTASection = () => {
  return (
   <section className="py-18 px-6">
        <div className="max-w-5xl mx-auto bg-linear-to-r from-black to-blue-500 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400 rounded-full opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Ready to find your <br /> dream stay?
            </h2>
            <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto">
              Join 10,000+ people who found their homes in Pune and Hyderabad without paying a single rupee in brokerage.
            </p>
           
            <Link to={"/properties"} className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black hover:bg-gray-100 transition-all shadow-xl active:scale-95">
              Browse All Properties
            </Link>
          </div>
        </div>
      </section>)
}

export default CTASection