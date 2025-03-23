
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { mentorData } from '@/data/teamsData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';

const Index = () => {
  const navigate = useNavigate();

  // Animation classes to apply sequentially
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');
    
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
        element.classList.remove('opacity-0');
      }, 300 * index);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PageSEO 
        title="Home" 
        description="Explore innovative solutions to engineering challenges through creative problem-solving and human-centered design at Lendi Institute's Design Thinking & Innovation program."
        keywords="design thinking, innovation, electrical engineering, EEE, Lendi Institute, engineering projects, creative solutions"
      />
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10"></div>
          <div 
            className="absolute inset-0 opacity-20 -z-10 mask-image-blur"
            aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          <div className="max-w-5xl mx-auto text-center animate-on-load opacity-0">
            {/* College Logo */}
            <div className="flex justify-center mb-8 animate-on-load opacity-0">
              <img 
                src="https://lendi.org/GRCL/logo.png" 
                alt="Lendi Institute of Engineering and Technology Logo" 
                className="h-24 md:h-32 w-auto"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              <span className="gradient-text">Design Thinking & Innovation</span>
              <br />
              <span className="text-foreground">EEE A</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-on-load opacity-0">
              Exploring innovative solutions to engineering challenges through 
              creative problem-solving and human-centered design.
            </p>
            
            <Button 
              size="lg" 
              onClick={() => navigate('/teams')} 
              className="animate-on-load opacity-0 bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Explore teams and projects"
            >
              Get Started
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70" aria-hidden="true">
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-1">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-[pulse_2s_infinite]"></div>
            </div>
          </div>
        </section>
        
        {/* Mentor Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              <span className="inline-block py-1 px-3 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium mb-2">Leadership</span>
              <br />
              Meet Our Mentor
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative group animate-on-load opacity-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={mentorData.image} 
                    alt={`${mentorData.name} - ${mentorData.title}`} 
                    className="w-full h-auto rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://lendi.edu.in//cloud/2024/12/27/1735293134_cropped-image.jpg.jpg";
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-6 animate-on-load opacity-0">
                <div>
                  <h3 className="text-2xl font-bold">{mentorData.name}</h3>
                  <p className="text-blue-600 font-medium">{mentorData.title}</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{mentorData.bio}</p>
                
                <div className="pt-4">
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
