
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Users, Target, Zap, CheckCircle, ArrowRight, BookOpen, Award } from 'lucide-react';

const SmartAssessment = () => {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  const assessmentPhases = [
    {
      id: 'empathize',
      title: 'Empathize',
      description: 'Understanding user needs and pain points',
      color: 'bg-blue-500',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      criteria: [
        'User research and interviews',
        'Persona development',
        'Journey mapping',
        'Problem identification'
      ]
    },
    {
      id: 'define',
      title: 'Define',
      description: 'Clearly articulating the problem statement',
      color: 'bg-orange-500',
      textColor: 'text-orange-700',
      bgColor: 'bg-orange-50',
      criteria: [
        'Problem statement clarity',
        'User needs definition',
        'Success metrics',
        'Scope boundaries'
      ]
    },
    {
      id: 'ideate',
      title: 'Ideate',
      description: 'Generating creative solutions and concepts',
      color: 'bg-green-500',
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
      criteria: [
        'Brainstorming sessions',
        'Solution diversity',
        'Creativity and innovation',
        'Feasibility analysis'
      ]
    },
    {
      id: 'prototype',
      title: 'Prototype',
      description: 'Building testable versions of solutions',
      color: 'bg-purple-500',
      textColor: 'text-purple-700',
      bgColor: 'bg-purple-50',
      criteria: [
        'Prototype development',
        'Technical implementation',
        'User interface design',
        'Functionality testing'
      ]
    },
    {
      id: 'test',
      title: 'Test',
      description: 'Validating solutions with real users',
      color: 'bg-red-500',
      textColor: 'text-red-700',
      bgColor: 'bg-red-50',
      criteria: [
        'User testing sessions',
        'Feedback collection',
        'Iteration planning',
        'Final validation'
      ]
    }
  ];

  const smartFeatures = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'AI-Powered Evaluation',
      description: 'Intelligent assessment of design thinking processes and outcomes'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools for team-based projects'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Tracking',
      description: 'Progress monitoring and milestone achievement tracking'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Feedback',
      description: 'Immediate insights and suggestions for improvement'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageSEO 
        title="Smart Assessment"
        description="Discover our intelligent assessment system for Design Thinking & Innovation projects. Track progress, get feedback, and improve your innovation process."
        keywords="smart assessment, design thinking evaluation, innovation tracking, project assessment, AI-powered feedback"
      />
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-6">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1">
                <Lightbulb className="w-4 h-4 mr-1" />
                Innovation Assessment
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Assessment System
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Intelligent evaluation and feedback system for Design Thinking & Innovation projects, 
              helping teams track progress and improve their solutions.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
              Start Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Smart Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Advanced tools and AI-powered insights to enhance your design thinking journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {smartFeatures.map((feature, index) => (
                <Card key={index} className="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment Phases */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Assessment Framework</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive evaluation across all five phases of the design thinking process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {assessmentPhases.map((phase) => (
                <Card 
                  key={phase.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedPhase === phase.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold`}>
                      {assessmentPhases.indexOf(phase) + 1}
                    </div>
                    <CardTitle className="text-lg text-blue-900">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Phase Details */}
            {selectedPhase && (
              <Card className="mt-8 border-2 border-blue-200">
                <CardHeader className={`${assessmentPhases.find(p => p.id === selectedPhase)?.bgColor} border-b`}>
                  <CardTitle className={`text-xl ${assessmentPhases.find(p => p.id === selectedPhase)?.textColor}`}>
                    {assessmentPhases.find(p => p.id === selectedPhase)?.title} Phase Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-blue-900 mb-4">Assessment Criteria:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {assessmentPhases.find(p => p.id === selectedPhase)?.criteria.map((criterion, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{criterion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Assessment Benefits</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                How our smart assessment system enhances learning and project outcomes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                  Regular feedback and guidance throughout the design process to ensure continuous improvement and learning.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Goal Achievement</h3>
                <p className="text-gray-600">
                  Clear milestone tracking and progress monitoring to help teams stay focused and achieve their objectives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  Comprehensive evaluation criteria ensure high-quality outcomes and innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Assessed?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience intelligent evaluation and take your design thinking projects to the next level
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                Begin Assessment
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg"
              >
                View Sample Assessment
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SmartAssessment;
