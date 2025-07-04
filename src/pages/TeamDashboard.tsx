
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LogOut, Save, Upload, Eye, FileVideo, FileText, X } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageSEO from '@/components/SEO/PageSEO';
import { getTeamDashboardData, updateTeamDashboardData, isValidTeamLeader, uploadTeamMedia, type TeamDashboardData } from '@/services/dashboardService';

interface FileUploadPreview {
  file: File | null;
  preview: string | null;
  type: 'image' | 'video' | 'document';
}

const TeamDashboard = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const navigate = useNavigate();
  const [teamData, setTeamData] = useState<TeamDashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [saveMessage, setSaveMessage] = useState('');
  const [uploading, setUploading] = useState(false);
  
  // File upload states
  const [videoFile, setVideoFile] = useState<FileUploadPreview>({ file: null, preview: null, type: 'video' });
  const [pptFile, setPptFile] = useState<FileUploadPreview>({ file: null, preview: null, type: 'document' });
  const [memberPhotoFiles, setMemberPhotoFiles] = useState<FileUploadPreview[]>([]);
  const [projectPhotoFiles, setProjectPhotoFiles] = useState<FileUploadPreview[]>([]);

  // File input refs
  const videoInputRef = useRef<HTMLInputElement>(null);
  const pptInputRef = useRef<HTMLInputElement>(null);
  const memberPhotoInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const projectPhotoInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const loadTeamData = async () => {
      const currentTeamLeader = localStorage.getItem('currentTeamLeader');
      const currentTeamId = localStorage.getItem('currentTeamId');

      if (!currentTeamLeader || !teamId || currentTeamId !== teamId?.replace('team', '')) {
        navigate('/student-login');
        return;
      }

      try {
        const data = await getTeamDashboardData(teamId);
        if (data && data.username === currentTeamLeader) {
          setTeamData(data);
          // Initialize file upload arrays
          setMemberPhotoFiles(data.members.map(() => ({ file: null, preview: null, type: 'image' as const })));
          setProjectPhotoFiles(data.projectPhotos.map(() => ({ file: null, preview: null, type: 'image' as const })));
        } else {
          navigate('/student-login');
        }
      } catch (error) {
        console.error('Error loading team data:', error);
        navigate('/student-login');
      } finally {
        setIsLoading(false);
      }
    };

    loadTeamData();
  }, [teamId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentTeamLeader');
    localStorage.removeItem('currentTeamId');
    navigate('/student-login');
  };

  const validateFile = (file: File, type: 'image' | 'video' | 'document'): string | null => {
    const maxSizes = {
      image: 5 * 1024 * 1024, // 5MB
      video: 100 * 1024 * 1024, // 100MB
      document: 10 * 1024 * 1024 // 10MB
    };

    if (file.size > maxSizes[type]) {
      return `File too large. Maximum size for ${type}s is ${maxSizes[type] / (1024 * 1024)}MB`;
    }

    const allowedTypes = {
      image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
      video: ['video/mp4', 'video/webm', 'video/mov', 'video/quicktime'],
      document: ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation']
    };

    if (!allowedTypes[type].includes(file.type)) {
      return `Invalid file type. Allowed types: ${allowedTypes[type].join(', ')}`;
    }

    return null;
  };

  const handleFileSelect = (file: File, type: 'image' | 'video' | 'document', setter: React.Dispatch<React.SetStateAction<FileUploadPreview>>) => {
    const error = validateFile(file, type);
    if (error) {
      alert(error);
      return;
    }

    const preview = type === 'document' ? file.name : URL.createObjectURL(file);
    setter({ file, preview, type });
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file, 'video', setVideoFile);
    }
  };

  const handlePptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file, 'document', setPptFile);
    }
  };

  const handleMemberPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const error = validateFile(file, 'image');
      if (error) {
        alert(error);
        return;
      }
      const preview = URL.createObjectURL(file);
      const newFiles = [...memberPhotoFiles];
      newFiles[index] = { file, preview, type: 'image' };
      setMemberPhotoFiles(newFiles);
    }
  };

  const handleProjectPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const error = validateFile(file, 'image');
      if (error) {
        alert(error);
        return;
      }
      const preview = URL.createObjectURL(file);
      const newFiles = [...projectPhotoFiles];
      newFiles[index] = { file, preview, type: 'image' };
      setProjectPhotoFiles(newFiles);
    }
  };

  // Function to get existing filename based on member name and team
  const getExistingMemberFilename = (memberName: string, teamId: string) => {
    // Convert member name to expected filename format
    // This assumes files are named like "23KD1A0201.jpg" etc.
    const teamNumber = teamId?.replace('team', '');
    // You might need to adjust this logic based on your actual naming convention
    return memberName.replace(/\s+/g, '') + '.jpg';
  };

  const simulateFileUpload = async (file: File): Promise<string> => {
    // Simulate file upload delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real implementation, this would upload to a server and return the URL
    return URL.createObjectURL(file);
  };

  const handleSave = async () => {
    if (!teamData || !teamId) return;

    setUploading(true);
    setSaveMessage('Saving changes...');

    try {
      // Save basic team data first
      await updateTeamDashboardData(teamId, teamData);

      // Handle file uploads
      if (videoFile.file) {
        setSaveMessage('Uploading video...');
        const videoUrl = await uploadTeamMedia(teamId, videoFile.file, 'video');
        if (videoUrl) {
          setTeamData(prev => prev ? {
            ...prev,
            projectVideos: [videoUrl]
          } : null);
        }
      }

      if (pptFile.file) {
        setSaveMessage('Uploading presentation...');
        const pptUrl = await uploadTeamMedia(teamId, pptFile.file, 'presentation');
        if (pptUrl) {
          setTeamData(prev => prev ? {
            ...prev,
            presentations: [pptUrl]
          } : null);
        }
      }

      // Handle member photo uploads - replace existing files with same names
      for (let i = 0; i < memberPhotoFiles.length; i++) {
        if (memberPhotoFiles[i].file && teamData.members[i]) {
          setSaveMessage(`Uploading member photo ${i + 1}...`);
          const member = teamData.members[i];
          const existingFilename = getExistingMemberFilename(member.name, teamId);
          
          // Upload with the same filename to replace existing image
          const photoUrl = await uploadTeamMedia(teamId, memberPhotoFiles[i].file!, 'project_photo', existingFilename);
          if (photoUrl) {
            setTeamData(prev => {
              if (!prev) return null;
              const updatedMembers = [...prev.members];
              updatedMembers[i] = { ...updatedMembers[i], photo: photoUrl };
              return { ...prev, members: updatedMembers };
            });
          }
        }
      }

      // Handle project photo uploads - replace existing files
      for (let i = 0; i < projectPhotoFiles.length; i++) {
        if (projectPhotoFiles[i].file) {
          setSaveMessage(`Uploading project photo ${i + 1}...`);
          const existingFilename = `project${i + 1}.jpg`; // Assuming project photos are named project1.jpg, project2.jpg, etc.
          
          const photoUrl = await uploadTeamMedia(teamId, projectPhotoFiles[i].file!, 'project_photo', existingFilename);
          if (photoUrl) {
            setTeamData(prev => {
              if (!prev) return null;
              const updatedPhotos = [...prev.projectPhotos];
              updatedPhotos[i] = photoUrl;
              return { ...prev, projectPhotos: updatedPhotos };
            });
          }
        }
      }

      // Clear file upload states
      setVideoFile({ file: null, preview: null, type: 'video' });
      setPptFile({ file: null, preview: null, type: 'document' });
      setMemberPhotoFiles(teamData.members.map(() => ({ file: null, preview: null, type: 'image' as const })));
      setProjectPhotoFiles(teamData.projectPhotos.map(() => ({ file: null, preview: null, type: 'image' as const })));

      setSaveMessage('All changes saved successfully!');
      
      // Dispatch event to notify other components
      window.dispatchEvent(new CustomEvent('dashboardDataUpdated', { detail: { teamId } }));
      
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      console.error('Error saving changes:', error);
      setSaveMessage('Error saving changes. Please try again.');
      setTimeout(() => setSaveMessage(''), 3000);
    } finally {
      setUploading(false);
    }
  };

  const handleInputChange = (field: keyof TeamDashboardData, value: any) => {
    if (teamData) {
      setTeamData({ ...teamData, [field]: value });
    }
  };

  const handleProjectPhotoChange = (index: number, value: string) => {
    if (teamData) {
      const updatedPhotos = [...teamData.projectPhotos];
      updatedPhotos[index] = value;
      setTeamData({ ...teamData, projectPhotos: updatedPhotos });
    }
  };

  const viewTeamPage = () => {
    const teamNumber = teamId?.replace('team', '');
    navigate(`/team/${teamNumber}`);
  };

  const clearFilePreview = (setter: React.Dispatch<React.SetStateAction<FileUploadPreview>>, inputRef: React.RefObject<HTMLInputElement>) => {
    setter({ file: null, preview: null, type: 'image' });
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!teamData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p>Team data not found. Please try logging in again.</p>
            <Button onClick={() => navigate('/student-login')} className="mt-4">
              Back to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageSEO 
        title={`Dashboard - ${teamData.teamName}`}
        description="Team leader dashboard for managing project content"
        keywords="team dashboard, project management, team leader"
      />
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Team Dashboard</h1>
              <p className="text-muted-foreground">Manage your team's project content</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate(`/team/${teamData.id}`)}>
                <Eye className="w-4 h-4 mr-2" />
                View Team Page
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {saveMessage && (
            <Alert className={saveMessage.includes('Error') ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}>
              <AlertDescription className={saveMessage.includes('Error') ? 'text-red-700' : 'text-green-700'}>
                {saveMessage}
              </AlertDescription>
            </Alert>
          )}

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="teamName">Team Name</Label>
                <Input
                  id="teamName"
                  value={teamData.teamName}
                  onChange={(e) => setTeamData(prev => prev ? { ...prev, teamName: e.target.value } : null)}
                />
              </div>
              <div>
                <Label htmlFor="projectTitle">Project Title</Label>
                <Input
                  id="projectTitle"
                  value={teamData.projectTitle}
                  onChange={(e) => setTeamData(prev => prev ? { ...prev, projectTitle: e.target.value } : null)}
                />
              </div>
              <div>
                <Label htmlFor="abstract">Project Abstract</Label>
                <Textarea
                  id="abstract"
                  value={teamData.abstract}
                  onChange={(e) => setTeamData(prev => prev ? { ...prev, abstract: e.target.value } : null)}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Video Presentation Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileVideo className="w-5 h-5" />
                Video Presentation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="video-upload">Upload Team Video Presentation</Label>
                <div className="flex items-center gap-4 mt-2">
                  <input
                    ref={videoInputRef}
                    id="video-upload"
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => videoInputRef.current?.click()}
                    className="flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    Choose Video File
                  </Button>
                  {videoFile.preview && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {videoFile.file?.name}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => clearFilePreview(setVideoFile, videoInputRef)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
                {videoFile.preview && (
                  <div className="mt-4">
                    <video
                      src={videoFile.preview}
                      controls
                      className="w-full max-w-md h-auto rounded-lg"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* PPT Presentation Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                PPT Presentation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="ppt-upload">Upload Project Presentation (PPT/PPTX)</Label>
                <div className="flex items-center gap-4 mt-2">
                  <input
                    ref={pptInputRef}
                    id="ppt-upload"
                    type="file"
                    accept=".ppt,.pptx"
                    onChange={handlePptUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => pptInputRef.current?.click()}
                    className="flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    Choose PPT File
                  </Button>
                  {pptFile.preview && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {pptFile.file?.name}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => clearFilePreview(setPptFile, pptInputRef)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamData.members.map((member, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
                  <div>
                    <Label className="text-sm font-medium">
                      {index === 0 ? 'Team Leader' : `Team Member ${index}`}
                    </Label>
                    <div className="mt-1 p-3 bg-gray-100 rounded border">
                      <span className="text-sm font-medium text-gray-800">{member.name}</span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor={`member-photo-${index}`}>Photo</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          ref={el => memberPhotoInputRefs.current[index] = el}
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleMemberPhotoUpload(e, index)}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => memberPhotoInputRefs.current[index]?.click()}
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Photo
                        </Button>
                        {memberPhotoFiles[index]?.preview && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              const newFiles = [...memberPhotoFiles];
                              newFiles[index] = { file: null, preview: null, type: 'image' };
                              setMemberPhotoFiles(newFiles);
                              if (memberPhotoInputRefs.current[index]) {
                                memberPhotoInputRefs.current[index]!.value = '';
                              }
                            }}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      {memberPhotoFiles[index]?.preview && (
                        <img
                          src={memberPhotoFiles[index].preview!}
                          alt={`Preview for ${member.name}`}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      )}
                      <div className="text-xs text-gray-500">
                        Current: {member.photo}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Project Photos */}
          <Card>
            <CardHeader>
              <CardTitle>Project Photos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamData.projectPhotos.map((photo, index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`project-photo-${index}`}>Project Photo {index + 1}</Label>
                  <div className="flex items-center gap-2">
                    <input
                      ref={el => projectPhotoInputRefs.current[index] = el}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleProjectPhotoUpload(e, index)}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => projectPhotoInputRefs.current[index]?.click()}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Photo
                    </Button>
                    {projectPhotoFiles[index]?.preview && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const newFiles = [...projectPhotoFiles];
                          newFiles[index] = { file: null, preview: null, type: 'image' };
                          setProjectPhotoFiles(newFiles);
                          if (projectPhotoInputRefs.current[index]) {
                            projectPhotoInputRefs.current[index]!.value = '';
                          }
                        }}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  {projectPhotoFiles[index]?.preview && (
                    <img
                      src={projectPhotoFiles[index].preview!}
                      alt={`Project photo ${index + 1} preview`}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  )}
                  <div className="text-xs text-gray-500">
                    Current: {photo}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button 
              onClick={handleSave} 
              size="lg" 
              className="px-8"
              disabled={uploading}
            >
              <Save className="w-4 h-4 mr-2" />
              {uploading ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamDashboard;
