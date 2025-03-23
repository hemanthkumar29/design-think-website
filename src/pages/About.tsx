
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
                Lendi Institute of Engineering and Technology (LIET) is one of the premier engineering colleges 
                located in Vizianagaram, Andhra Pradesh. Established with a vision to impart quality technical 
                education, LIET has grown into a center of excellence.
              </p>
              <p className="text-lg">
                The Department of Electrical and Electronics Engineering is committed to providing 
                students with both theoretical knowledge and practical skills needed to excel in the field. 
                Through Design Thinking & Innovation courses, we encourage our students to develop creative 
                solutions to real-world problems.
              </p>
              <p className="text-lg">
                With state-of-the-art laboratories, experienced faculty, and industry partnerships, 
                we prepare our students to become innovative engineers ready to contribute to society.
              </p>
              
              <Button className="mt-4" onClick={() => window.open("https://lendi.org", "_blank")}>
                Visit College Website <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://lendi.org/GRCL/logo.png" 
                alt="Lendi Institute of Engineering and Technology" 
                className="w-full h-auto object-cover"
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
