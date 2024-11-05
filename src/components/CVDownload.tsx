import React from 'react';
import { Button } from '@/components/ui/button';

const CVDownload: React.FC = () => {
  const downloadCV = () => {
    window.open('/Full-stack.pdf', '_blank');
  };

  return (
    <Button onClick={downloadCV} size={"lg"} className="text-md">
      Download CV
    </Button>
  );
};

export default CVDownload;