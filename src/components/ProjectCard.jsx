import React from 'react';

function ProjectCard({ project, onClick }) {
  // Debug log to verify props
  console.log(`Rendering ProjectCard for ${project.slug || 'unknown'}:`, project);

  // Safely handle missing data
  const {
    title = 'Untitled Project',
    coverImage = '/hero/hero-image.jpg',
    tags = [],
    type = 'Uncategorized',
    logline = ''
  } = project;

  return (
    <div 
      className="break-inside-avoid mb-0 rounded-lg overflow-hidden shadow-md hover:transition-text-dominoivory duration-300 cursor-pointer"
      onClick={onClick}
      data-testid={`project-card-${project.slug}`}
    >
      {/* Cover Image with fallback */}
              {/* TYPE: Delete if not needed, but saving just in case
{type && (
          <h3 className="text-xl uppercase font-head text-fadedblack dark:text-gray-400 mb-2">
            {type}
          </h3>
        )}
        */}
      <div className="relative h-48 w-full">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/hero/hero-image.jpg';
          }}
        />
      </div>

      {/* Content Area */}
      <div className="p-6 rounded-lg shadow-lg flex flex-col justify-between">
     

          {/* Title - Now secondary */}
          {title && (
            <div className="col-span-1">
          <p className="font-desc uppercase text-sm font-bold mb-0 text-dominoivory dark:gray-600 line-clamp-2">
            {title}
          </p>
          </div>
        )}

        {/* Optional: Logline */}
        {logline && (
    
          <p className="text-sm text-gray-400 mb-2 line-clamp-2">
            {logline}
          </p>
        )}
         {/* Tags */}
 {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-lg outline outline-gray-400/50 dark:outline-gray-400/70 text-gray-400 dark:text-gray-400/90 mb-2"
              >
                {tag}
              </span>
     
            ))}
     
          </div>
             
        )}

       
      </div>
    </div>
  );
}

export default ProjectCard;