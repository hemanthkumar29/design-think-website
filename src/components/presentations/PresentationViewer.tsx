
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Presentation } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface PresentationViewerProps {
  teamId: number;
  teamName: string;
}

const PresentationViewer: React.FC<PresentationViewerProps> = ({ teamId, teamName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const presentationUrl = `/team_presentations/team_${teamId}_presentation.pptx`;
  
  // For embedded preview, we'd use Google Docs Viewer or Microsoft Office Online viewer
  // This creates a URL to preview the presentation using Google Docs Viewer
  const previewUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + presentationUrl)}&embedded=true`;
  
  // Optimize iframe loading
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        console.log('Iframe loading timed out, showing fallback');
        setIsLoading(false);
      }
    }, 5000); // 5 second timeout for iframe loading
    
    return () => clearTimeout(timer);
  }, [iframeLoaded]);
  
  // Create fallback content as a memoized value
  const fallbackContent = React.useMemo(() => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="bg-blue-50 p-3 rounded-full mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-blue-600">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
          <path d="M13 2v7h7"></path>
        </svg>
      </div>
      <h4 className="text-lg font-medium mb-2">Team {teamId}: {teamName}</h4>
      <p className="text-muted-foreground mb-4">Presentation available for download</p>
      <a 
        href={presentationUrl} 
        download 
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download Presentation
      </a>
    </div>
  ), [teamId, teamName, presentationUrl]);

  return (
    <div className="space-y-4">
      <h3 className="text-xl md:text-2xl font-bold mb-6 animate-fade-in">Project Presentation - PPT Format</h3>
      
      <div className="flex justify-end mb-4">
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={() => window.open(presentationUrl, '_blank')}
        >
          <Download size={16} />
          <span>Download Presentation</span>
        </Button>
      </div>
      
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-white border aspect-[4/3] animate-fade-in">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
            <p className="text-muted-foreground">Loading presentation...</p>
          </div>
        )}
        
        {!iframeLoaded && !isLoading && fallbackContent}
        
        <iframe 
          className={`w-full h-full ${iframeLoaded ? 'block' : 'hidden'}`}
          src={previewUrl}
          loading="lazy"
          onLoad={() => {
            setIsLoading(false);
            setIframeLoaded(true);
          }}
          onError={() => {
            setIsLoading(false);
            setIframeLoaded(false);
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default PresentationViewer;
