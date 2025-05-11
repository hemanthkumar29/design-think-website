
import React, { useState } from 'react';
import { Download, ExternalLink, PresentationIcon, FileType } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PresentationViewerProps {
  teamId: string;
  teamName: string;
}

const PresentationViewer: React.FC<PresentationViewerProps> = ({ teamId, teamName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const presentationUrl = `/presentations/team_${teamId}.pptx`;
  const previewUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(window.location.origin + presentationUrl)}`;

  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Project Presentation</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
            <a href={presentationUrl} download={`${teamName}_Presentation.pptx`}>
              <Download size={16} />
              <span>Download</span>
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1" 
            asChild
          >
            <a href={previewUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              <span>Open in Office</span>
            </a>
          </Button>
        </div>
      </div>
      
      <div className="relative w-full rounded-lg border overflow-hidden bg-gray-50 aspect-[4/3]">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
            <PresentationIcon size={48} className="text-blue-300 animate-pulse mb-3" />
            <p className="text-muted-foreground">Loading presentation preview...</p>
          </div>
        )}

        <iframe
          src={previewUrl}
          title={`${teamName} Presentation`}
          className="w-full h-full border-0"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
        
        {/* Fallback content displayed if iframe fails to load */}
        {!isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 opacity-0 pointer-events-none" 
               id={`presentation-fallback-${teamId}`}>
            <FileType size={64} className="text-blue-300 mb-4" />
            <h4 className="text-lg font-medium text-gray-700 mb-2">{teamName} Presentation</h4>
            <p className="text-muted-foreground mb-4 text-center max-w-md px-4">
              The presentation preview could not be loaded. You can download the presentation to view it locally.
            </p>
            <Button asChild>
              <a href={presentationUrl} download={`${teamName}_Presentation.pptx`} className="flex items-center gap-2">
                <Download size={18} />
                <span>Download Presentation</span>
              </a>
            </Button>
          </div>
        )}
      </div>
      
      <script dangerouslySetInnerHTML={{ __html: `
        document.querySelector('iframe[title="${teamName} Presentation"]').addEventListener('error', function() {
          document.getElementById('presentation-fallback-${teamId}').style.opacity = '1';
          document.getElementById('presentation-fallback-${teamId}').style.pointerEvents = 'auto';
        });
      `}} />
    </div>
  );
};

export default PresentationViewer;
