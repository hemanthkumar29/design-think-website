
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { LogIn, User, Lock, Shield, Users, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

const StudentLogin = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Mock team data for demonstration
  const teamMappings: { [key: string]: number } = {
    '23KD1A0201': 1, '23KD1A0202': 1, '23KD1A0203': 1, '23KD1A0204': 1,
    '23KD1A0205': 2, '23KD1A0206': 2, '23KD1A0207': 2, '23KD1A0208': 2,
    '23KD1A0209': 3, '23KD1A0210': 3, '23KD1A0211': 3, '23KD1A0212': 3,
    '23KD1A0213': 4, '23KD1A0214': 4, '23KD1A0215': 4, '23KD1A0216': 4,
    '23KD1A0217': 5, '23KD1A0218': 5, '23KD1A0219': 5, '23KD1A0220': 5,
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock authentication logic
      if (rollNumber && password === 'student123') {
        const teamId = teamMappings[rollNumber];
        
        if (teamId) {
          toast.success('Login successful! Redirecting to your team dashboard...');
          // Redirect to team dashboard
          setTimeout(() => {
            navigate(`/dashboard/${teamId}`);
          }, 1500);
        } else {
          toast.error('Roll number not found in any team. Please contact your instructor.');
        }
      } else {
        toast.error('Invalid credentials. Please check your roll number and password.');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Dashboard',
      description: 'Access your team\'s project dashboard and collaboration tools'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Project Progress',
      description: 'Track your design thinking project progress and milestones'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Access',
      description: 'Protected access to your team\'s resources and submissions'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageSEO 
        title="Student Login"
        description="Student login portal for Design Thinking & Innovation program. Access your team dashboard, track project progress, and collaborate with team members."
        keywords="student login, team dashboard, design thinking portal, student access, project collaboration, EEE department"
      />
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-6">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 mb-4">
              <LogIn className="w-4 h-4 mr-1" />
              Student Portal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Student Login
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Access your team dashboard and collaborate on your Design Thinking & Innovation projects
            </p>
          </div>
        </section>

        {/* Login Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Login Form */}
              <div className="order-2 lg:order-1">
                <Card className="border border-gray-200 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-blue-900 mb-2">Login to Your Dashboard</CardTitle>
                    <p className="text-gray-600">Enter your credentials to access your team workspace</p>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="rollNumber" className="text-blue-900 font-medium">
                          Roll Number
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="rollNumber"
                            type="text"
                            placeholder="e.g., 23KD1A0201"
                            value={rollNumber}
                            onChange={(e) => setRollNumber(e.target.value)}
                            className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-blue-900 font-medium">
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Logging in...
                          </div>
                        ) : (
                          <>
                            <LogIn className="w-5 h-5 mr-2" />
                            Login to Dashboard
                          </>
                        )}
                      </Button>
                    </form>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-700">
                        <strong>Demo Credentials:</strong><br />
                        Roll Number: Any valid roll number (e.g., 23KD1A0201)<br />
                        Password: student123
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Features */}
              <div className="order-1 lg:order-2">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">
                      Access Your Team Workspace
                    </h2>
                    <p className="text-lg text-gray-600">
                      Login to access your personalized dashboard with project tools, team collaboration features, and progress tracking.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-blue-900 mb-1">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Forgot Password?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Contact your instructor or department admin to reset your password.
                  </p>
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Technical Issues?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Having trouble accessing your dashboard? Get technical assistance.
                  </p>
                  <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                    Technical Help
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              New to the Program?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Learn more about our Design Thinking & Innovation program and explore team projects
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                Explore Teams
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg"
              >
                About Program
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentLogin;
