
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const SecretAdminAccess: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [adminAccessGranted, setAdminAccessGranted] = useState(false);
  const navigate = useNavigate();
  
  // Check for special tap pattern
  useEffect(() => {
    let touchCount = 0;
    let lastTouch = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      const now = Date.now();
      
      // If more than one finger or too much time passed, reset
      if (e.touches.length > 1) {
        touchCount = 0;
        return;
      }
      
      // If tap is within timing threshold, count it
      if (now - lastTouch < 600) {
        touchCount++;
      } else {
        touchCount = 1; // Reset but count this tap
      }
      
      lastTouch = now;
      
      // Special pattern: 4 taps in sequence
      if (touchCount >= 4) {
        setShowDialog(true);
        touchCount = 0;
      }
    };
    
    // Listen for document touch events
    document.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);
  
  // Function to grant admin access
  const grantAdminAccess = () => {
    sessionStorage.setItem('adminLinkActivated', 'true');
    setAdminAccessGranted(true);
    
    // Auto-redirect after a short delay
    setTimeout(() => {
      setShowDialog(false);
      navigate('/admin');
    }, 1500);
  };
  
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Administrator Access</DialogTitle>
          <DialogDescription>
            You've discovered the hidden admin access feature.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          {adminAccessGranted ? (
            <p className="text-green-600">Access granted! Redirecting to admin...</p>
          ) : (
            <p>Would you like to access the administrator panel?</p>
          )}
        </div>
        
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setShowDialog(false)}>
            Cancel
          </Button>
          <Button onClick={grantAdminAccess} disabled={adminAccessGranted}>
            Access Admin
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SecretAdminAccess;
