
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import PageSEO from '@/components/SEO/PageSEO';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title="About Lendi Institute"
        description="Learn about Lendi Institute of Engineering and Technology, one of the premier engineering colleges in Vizianagaram, Andhra Pradesh, and our Design Thinking & Innovation program."
        keywords="Lendi Institute, engineering college, Vizianagaram, Andhra Pradesh, EEE department, design thinking, innovation"
      />
      
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Our College</h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Lendi Institute of Engineering and Technology</h2>
              <p className="text-lg">
                Lendi Institute of Engineering and Technology is a premier institution dedicated to academic excellence, 
                innovation, and holistic student development. With a strong commitment to fostering a culture of creativity 
                and critical thinking, our college empowers students to become problem solvers and industry-ready professionals.
              </p>
              <p className="text-lg">
                Our state-of-the-art infrastructure, experienced faculty, and research-driven approach create a dynamic 
                learning environment that nurtures technical expertise and entrepreneurial spirit. We emphasize hands-on 
                learning, interdisciplinary collaboration, and real-world applications to equip students with the skills 
                required for the evolving global landscape.
              </p>
              <p className="text-lg">
                Through various initiatives in design thinking and innovation, we encourage students to explore innovative 
                solutions, participate in hackathons, and contribute to groundbreaking projects that address real-world 
                challenges. Our institution serves as a hub for aspiring engineers, researchers, and entrepreneurs to 
                turn ideas into reality and drive impactful change.
              </p>
              <p className="text-lg">
                At Lendi Institute of Engineering and Technology, we are shaping the future by integrating education, 
                technology, and creativity to inspire the next generation of innovators.
              </p>
              
              <Button className="mt-4" onClick={() => window.open("https://lendi.edu.in/", "_blank")} aria-label="Visit Lendi College Website">
                Visit College Website <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://lendi.org/GRCL/logo.png" 
                alt="Lendi Institute of Engineering and Technology Campus" 
                className="w-full h-auto object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/800x600?text=Lendi+College";
                }}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
