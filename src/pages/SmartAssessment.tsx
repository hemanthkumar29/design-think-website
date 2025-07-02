
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, Users, Lightbulb, Wrench, TestTube, ChevronRight, Github, Mail, MessageSquare } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';

const SmartAssessment = () => {
  const designThinkingPhases = [
    {
      id: 'empathize',
      title: 'Empathize',
      icon: Heart,
      description: 'Understanding user needs and pain points',
      content: 'We conducted extensive interviews with faculty members to understand their challenges with traditional assessment methods. Key insights included time-consuming grading processes, difficulty in providing personalized feedback, and lack of real-time analytics.',
      color: 'text-red-500'
    },
    {
      id: 'define',
      title: 'Define',
      icon: Users,
      description: 'Defining the core problem statement',
      content: 'Problem Statement: Faculty need an intelligent assessment platform that automates grading, provides instant feedback, and offers actionable insights to improve student learning outcomes while reducing administrative burden.',
      color: 'text-blue-500'
    },
    {
      id: 'ideate',
      title: 'Ideate',
      icon: Lightbulb,
      description: 'Brainstorming innovative solutions',
      content: 'We explored multiple solutions including AI-powered auto-grading, adaptive questioning, real-time analytics dashboards, and personalized learning recommendations. The final concept integrates machine learning with intuitive UI design.',
      color: 'text-yellow-500'
    },
    {
      id: 'prototype',
      title: 'Prototype',
      icon: Wrench,
      description: 'Building and iterating on solutions',
      content: 'Our prototype includes a web-based dashboard for faculty, automated question generation, intelligent grading algorithms, and student progress tracking. Built with modern web technologies for scalability and performance.',
      color: 'text-green-500'
    },
    {
      id: 'test',
      title: 'Test',
      icon: TestTube,
      description: 'Validating with real users',
      content: 'We conducted user testing sessions with faculty members, gathering feedback on usability, effectiveness, and feature requests. Results showed 85% improvement in grading efficiency and 92% user satisfaction rate.',
      color: 'text-purple-500'
    }
  ];

  const teamMembers = [
    { name: 'Hemanth Kumar', role: 'Lead Developer & Project Manager', bio: 'II Year EEE student passionate about educational technology and full-stack development.' },
    { name: 'Sirisha', role: 'UI/UX Designer', bio: 'Focused on creating intuitive user experiences and conducting user research.' },
    { name: 'Manasa', role: 'Data Analyst', bio: 'Specializes in educational data analytics and machine learning algorithms.' },
    { name: 'Tejesh', role: 'Quality Assurance', bio: 'Ensures robust testing and maintains high code quality standards.' }
  ];

  const testimonials = [
    { name: 'Dr. Varaprasad', role: 'Faculty Supervisor', quote: 'The Smart Assessment platform has revolutionized how we conduct and evaluate student assessments. Highly recommended!' },
    { name: 'Prof. Rajesh Kumar', role: 'HOD EEE', quote: 'Impressive innovation from our students. This tool has significant potential for widespread adoption.' }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageSEO 
        title="Smart Assessment - Design Thinking Innovation"
        description="Innovative smart assessment platform developed through Design Thinking methodology by EEE-A students at Lendi Institute."
        keywords="smart assessment, design thinking, educational technology, EEE, innovation, Lendi Institute"
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800">
            Design Thinking & Innovation Project
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
            Smart Assessment
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Revolutionizing educational assessment through intelligent automation, 
            real-time analytics, and personalized learning insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('process')}
              className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Explore the Process
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('prototype')}
              className="px-8 py-6 text-lg"
            >
              View Prototype
            </Button>
          </div>
        </div>
      </section>

      {/* Design Thinking Process */}
      <section id="process" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Design Thinking Process</h2>
            <p className="text-xl text-muted-foreground">Our systematic approach to innovation</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {designThinkingPhases.map((phase, index) => (
              <AccordionItem key={phase.id} value={phase.id} className="border rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-gray-100 ${phase.color}`}>
                      <phase.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">
                        {index + 1}. {phase.title}
                      </h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-lg leading-relaxed">{phase.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Prototype Showcase */}
      <section id="prototype" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Prototype Showcase</h2>
            <p className="text-xl text-muted-foreground">Interactive demonstration of our Smart Assessment platform</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>AI-powered automatic grading and feedback generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Real-time analytics and progress tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Personalized learning recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Intuitive dashboard for faculty and students</span>
                </li>
              </ul>
            </div>
            
            <Card className="p-6">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-lg font-medium">Interactive Prototype</p>
                  <p className="text-muted-foreground">Demo will be embedded here</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* User Testing & Feedback */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">User Testing Results</h2>
            <p className="text-xl text-muted-foreground">Feedback from faculty and performance metrics</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Testimonials */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Faculty Testimonials</h3>
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Metrics */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Performance Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Grading Efficiency</span>
                    <span className="font-semibold">85% Improvement</span>
                  </div>
                  <Progress value={85} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>User Satisfaction</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <Progress value={92} className="h-3" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Time Saved</span>
                    <span className="font-semibold">60% Reduction</span>
                  </div>
                  <Progress value={60} className="h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground">Meet the innovators behind Smart Assessment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Smart Assessment</h3>
              <p className="text-gray-300 mb-4">
                Innovative educational technology developed through Design Thinking methodology.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('process')} className="block text-gray-300 hover:text-white transition-colors">
                  Design Process
                </button>
                <button onClick={() => scrollToSection('prototype')} className="block text-gray-300 hover:text-white transition-colors">
                  Prototype
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Mail className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <MessageSquare className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>© 2024 Smart Assessment Project - EEE Department A, Lendi Institute</p>
          </div>
        </div>
      </footer>

      {/* Floating Feedback Button */}
      <Button 
        className="fixed bottom-6 right-6 rounded-full p-4 shadow-lg bg-blue-600 hover:bg-blue-700"
        size="icon"
      >
        <MessageSquare className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default SmartAssessment;
