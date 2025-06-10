
import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';


const Ownership = ({ 
  designOwner = "", 
  techOwner = "", 
  status = "", 
  version = "", 
  figmaLink = "", 
  githubLink = "" 
}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-6 w-full p-4 border border-gray-200 mt-6 rounded-md'>
      <div>
        <div className='text-xs text-muted-foreground font-medium'>Design Owner</div>
        <div className='font-medium'>{designOwner}</div>
      </div>

      <div>
        <div className='text-xs text-muted-foreground font-medium'>Tech Owner</div>
        <div className='font-medium'>{techOwner}</div>
      </div>
      
      <div>
        <div className='text-xs text-muted-foreground font-medium'>Status</div>
        <div className='font-medium'>{status}</div>
      </div>
      
      <div>
        <div className='text-xs text-muted-foreground font-medium'>Version</div>
        <div className='font-medium'>{version}</div>
      </div>
      
      <div>
        <div className='text-xs text-muted-foreground font-medium'>Design</div>
        <div className='text-lg font-medium'>
          {figmaLink ? (
            <a href={figmaLink} target="_blank" rel="noopener noreferrer">
              Figma Link <ExternalLinkIcon className='w-4 h-4' />
            </a>
          ) : (
            "Figma Link"
          )}
        </div>
      </div>

      <div>
        <div className='text-xs text-muted-foreground font-medium'>Code</div>
        <div className='text-lg font-medium'>
          {githubLink ? (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Github Link <ExternalLinkIcon className='w-4 h-4' />
            </a>
          ) : (
            "Github Link"
          )}
        </div>
      </div>
    </div>
  );
};

export default Ownership; 