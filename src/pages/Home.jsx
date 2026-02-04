import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedStays from '../components/FeaturedStays';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import Testimonials from '../components/Testimonials';

const Home = () => {
    // Always scroll to top when landing on Home
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-in fade-in duration-700">
            {/* 1. Impact Section (Search & Headline) */}
            <Hero />

            {/* 2. Trust Building Section (Why SwiftStay?) */}
            <WhyChooseUs />


            {/* 3. The Money Section (Actual Listings) */}
            <div className="bg-white">
                <FeaturedStays />
            </div>

            {/* 4. Call to Action (CTA) Section */}
            <CTASection />

            <Testimonials />


        </div>
    );
};

export default Home;