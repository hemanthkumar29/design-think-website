
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, School, GraduationCap } from 'lucide-react';
import PageSEO from '@/components/SEO/PageSEO';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title="About Lendi Institute"
        description="Learn about Lendi Institute of Engineering and Technology and our Electrical & Electronics Engineering department."
        keywords="Lendi Institute, engineering college, Vizianagaram, Andhra Pradesh, EEE department, electrical engineering"
      />
      
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Us</h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* About College Section */}
            <div className="glass-card p-8 rounded-lg space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <School className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-primary">About College</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Lendi Institute of Engineering and Technology is a premier institution dedicated to academic excellence, 
                  innovation, and holistic student development. Located in Vizianagaram, Andhra Pradesh, we strive to 
                  be at the forefront of engineering education.
                </p>
                <p className="text-muted-foreground">
                  Our state-of-the-art infrastructure, experienced faculty, and research-driven approach create a dynamic 
                  learning environment that nurtures technical expertise and entrepreneurial spirit. We emphasize hands-on 
                  learning and real-world applications.
                </p>
                <div className="pt-4">
                  <Button onClick={() => window.open("https://lendi.edu.in/", "_blank")} className="group">
                    Visit College Website 
                    <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* About Department Section */}
            <div className="glass-card p-8 rounded-lg space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-primary">About Department</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The Department of Electrical & Electronics Engineering (EEE) at Lendi Institute is committed to 
                  excellence in education, research, and innovation. Our program provides comprehensive training in 
                  electrical engineering fundamentals and emerging technologies.
                </p>
                <p className="text-muted-foreground">
                  Our curriculum integrates theoretical knowledge with practical applications, preparing students for 
                  the challenges of the industry. Through our Design Thinking & Innovation program, students develop 
                  creative problem-solving skills and human-centered design approaches.
                </p>
                <p className="text-muted-foreground">
                  The department features well-equipped laboratories, experienced faculty members, and strong industry 
                  connections. We encourage student participation in research projects, technical competitions, and 
                  innovative ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

