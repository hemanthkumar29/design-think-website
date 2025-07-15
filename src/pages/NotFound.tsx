
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-blue-900 mb-4">404</div>
            <div className="w-32 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring our innovative projects.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate(-1)}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="mt-12 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Popular Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button 
                onClick={() => navigate('/teams')}
                className="p-4 text-left hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
              >
                <h3 className="font-medium text-blue-900 mb-1">Teams</h3>
                <p className="text-sm text-gray-600">Explore innovation teams</p>
              </button>
              
              <button 
                onClick={() => navigate('/smart-assessment')}
                className="p-4 text-left hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
              >
                <h3 className="font-medium text-blue-900 mb-1">Smart Assessment</h3>
                <p className="text-sm text-gray-600">AI-powered evaluation</p>
              </button>
              
              <button 
                onClick={() => navigate('/about')}
                className="p-4 text-left hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
              >
                <h3 className="font-medium text-blue-900 mb-1">About</h3>
                <p className="text-sm text-gray-600">Learn about our program</p>
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
