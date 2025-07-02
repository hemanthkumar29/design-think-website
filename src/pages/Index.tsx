import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { mentorData } from '@/data/teamsData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';
import { ChevronRight, Lightbulb, Users, Award, BookOpen } from 'lucide-react';
import Badge from '@/components/ui/Badge';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');
    
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
        element.classList.remove('opacity-0');
      }, 200 * index);
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageSEO 
        title="EEE-A Design Thinking & Innovation - Lendi Institute"
        description="Explore innovative projects and solutions developed by EEE-A students at Lendi Institute of Engineering and Technology through Design Thinking methodology."
        keywords="design thinking, innovation, EEE, electrical engineering, Lendi Institute, student projects, technology solutions"
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-lendi-blue-50 via-white to-lendi-orange-50">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <Badge className="px-4 py-2 text-sm font-medium bg-lendi-blue-100 text-lendi-blue-800">
            EEE Department A - Lendi Institute
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lendi-blue-700 via-lendi-blue-600 to-lendi-orange-600">
            Design Thinking & Innovation
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering future engineers through innovative problem-solving methodologies. 
            Discover cutting-edge projects and solutions developed by our talented EEE-A students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/teams')}
              className="px-8 py-6 text-lg bg-white text-lendi-blue-600 border-2 border-lendi-blue-600 hover:bg-lendi-blue-600 hover:text-white transition-all duration-300 font-semibold"
            >
              Explore Teams
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('features')}
              className="px-8 py-6 text-lg bg-white text-lendi-blue-600 border-2 border-lendi-blue-600 hover:bg-lendi-blue-600 hover:text-white transition-all duration-300 font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Approach to Innovation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to design thinking that empowers students to solve real-world problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Creative Problem Solving</h3>
              <p className="text-gray-600">Innovative approaches to complex engineering challenges</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaborative Learning</h3>
              <p className="text-gray-600">Team-based approach to design and innovation</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence in Design</h3>
              <p className="text-gray-600">Recognition for outstanding project outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-20 px-6 bg-lendi-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Innovation Showcase
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the latest projects and solutions developed by our students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 1</h3>
              <p className="text-gray-600">Description of project 1</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 2</h3>
              <p className="text-gray-600">Description of project 2</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project 3</h3>
              <p className="text-gray-600">Description of project 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Mentor
            </h2>
            <p className="text-lg text-gray-600">
              Guided by experienced faculty in design thinking and innovation
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="relative">
                <div className="aspect-square max-w-sm mx-auto overflow-hidden rounded-lg">
                  <img 
                    src={mentorData.image} 
                    alt={`${mentorData.name} - ${mentorData.title}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://lendi.edu.in//cloud/2024/12/27/1735293134_cropped-image.jpg.jpg";
                    }}
                  />
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{mentorData.name}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{mentorData.title}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{mentorData.bio}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    Lendi Institute of Engineering & Technology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-lendi-blue-600 to-lendi-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Innovation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how our students are transforming ideas into impactful solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/smart-assessment')} 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              View Smart Assessment
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/about')} 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
