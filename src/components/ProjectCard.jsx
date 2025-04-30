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
      className="break-inside-avoid mb-6 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-gray-50 dark:bg-gray-800"
      onClick={onClick}
      data-testid={`project-card-${project.slug}`}
    >
      {/* Cover Image with fallback */}
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
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
      <div className="p-6 rounded-lg shadow-lg">
  

        {/* Type */}
        {title && (
          <p className="text-2xl font-desc font-bold text-fadedblack dark:text-white mb-6">
            {title}
          </p>
        )}

         {/* Title */}
         <h3 className="font-desc uppercase text-sm font-bold mb-1 text-fadedblack dark:text-white/60 line-clamp-2">
          {type}
        </h3>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-lg outline outline-fadedblack/20 dark:outline-dominoivory text-gray-800 dark:text-dominoivory"
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