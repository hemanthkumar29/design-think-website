import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { mentorData } from '@/data/teamsData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');
    
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
        element.classList.remove('opacity-0');
      }, 200 * index); // Faster animation sequence
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
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-white -z-10"></div>
          <div 
            className="absolute inset-0 opacity-10 -z-10 mask-image-blur"
            aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-8 animate-on-load opacity-0 transform transition-all duration-700 hover:scale-105">
              <img 
                src="https://lendi.org/GRCL/logo.png" 
                alt="Lendi Institute of Engineering and Technology Logo" 
                className="h-24 md:h-32 w-auto drop-shadow-lg"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight animate-on-load opacity-0">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Design Thinking & Innovation
              </span>
              <br />
              <span className="text-foreground mt-4 block text-3xl md:text-4xl">EEE-A</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-on-load opacity-0">
              Exploring innovative solutions to engineering challenges through 
              creative problem-solving and human-centered design.
            </p>
            
            <Button 
              size="lg" 
              onClick={() => navigate('/teams')} 
              className="animate-on-load opacity-0 group relative overflow-hidden px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              aria-label="Explore teams and projects"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Teams
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </section>
        
        <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              <span className="inline-block py-1 px-3 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium mb-2">
                Leadership
              </span>
              <br />
              Meet Our Mentor
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative group animate-on-load opacity-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative overflow-hidden rounded-lg max-w-[400px] max-h-[500px] mx-auto">
                  <img 
                    src={mentorData.image} 
                    alt={`${mentorData.name} - ${mentorData.title}`} 
                    className="w-full h-full object-cover rounded-lg transform transition-transform duration-700 group-hover:scale-105"
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
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    {mentorData.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{mentorData.title}</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{mentorData.bio}</p>
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
