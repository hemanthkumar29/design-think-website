
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';
import { mentorData } from '@/data/teamsData';
import { Award, BookOpen, Lightbulb, Users, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageSEO 
        title="About"
        description="Learn about the Design Thinking & Innovation program in the Department of Electrical & Electronic Engineering at Lendi Institute of Engineering & Technology."
        keywords="design thinking, innovation, electrical engineering, EEE department, Lendi Institute, about us, engineering education"
      />
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-6">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <span className="inline-block py-1 px-3 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Design Thinking & Innovation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering the next generation of engineers through creative problem-solving, 
              human-centered design, and innovative thinking methodologies.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                To cultivate innovative thinking and practical problem-solving skills in electrical engineering students
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Foster creative thinking and breakthrough solutions to engineering challenges</p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">Build strong teamwork skills and collaborative problem-solving approaches</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Impact</h3>
                <p className="text-gray-600">Create meaningful solutions that address real-world problems and challenges</p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Design Thinking Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our structured approach to innovation follows proven design thinking methodologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Empathize", description: "Understand user needs and challenges", color: "bg-blue-500" },
                { step: "2", title: "Define", description: "Frame the problem clearly", color: "bg-orange-500" },
                { step: "3", title: "Ideate", description: "Generate creative solutions", color: "bg-green-500" },
                { step: "4", title: "Prototype", description: "Build and test concepts", color: "bg-purple-500" },
                { step: "5", title: "Test", description: "Validate and iterate", color: "bg-red-500" }
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}>
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentor Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Meet Our Mentor
              </h2>
              <p className="text-lg text-gray-600">
                Guided by experienced faculty in design thinking and innovation
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
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
                    <h3 className="text-2xl font-bold text-blue-900">{mentorData.name}</h3>
                    <p className="text-orange-600 font-semibold text-lg">{mentorData.title}</p>
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

        {/* Achievement Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Program Highlights</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Key achievements and features of our Design Thinking & Innovation program
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">17+</h3>
                <p className="text-gray-600">Active Teams</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">100+</h3>
                <p className="text-gray-600">Students Engaged</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">50+</h3>
                <p className="text-gray-600">Innovative Projects</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">5</h3>
                <p className="text-gray-600">Design Phases</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Innovation Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Be part of a community that transforms ideas into impactful solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/teams" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
              >
                Explore Teams
              </a>
              
              <a 
                href="/smart-assessment" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
              >
                Smart Assessment
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
