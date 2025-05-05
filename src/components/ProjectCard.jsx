import React from "react";

function ProjectCard({ project, onClick }) {
  // Debug log to verify props
  console.log(
    `Rendering ProjectCard for ${project.slug || "unknown"}:`,
    project,
  );

  // Safely handle missing data
  const {
    title = "Untitled Project",
    coverImage = "/hero/hero-image.jpg",
    tags = [],
    type = "Uncategorized",
    logline = "",
  } = project;

  return (
    <div
      className="hover:transition-text-dominoivory mb-0 cursor-pointer break-inside-avoid overflow-hidden rounded-sm p-2 shadow-md duration-300"
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
      <div className="relative h-full w-full">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.src = "/hero/hero-image.jpg";
          }}
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col justify-between rounded-lg p-4 shadow-lg">
        {/* Title - Now secondary */}
        {title && (
          <div className="col-span-1">
            <p className="font-desc text-dominoivory dark:gray-600 mb-0 line-clamp-2 text-sm font-bold uppercase">
              {title}
            </p>
          </div>
        )}

        {/* Optional: Logline */}
        {logline && (
          <p className="mb-2 line-clamp-2 text-sm text-gray-400">{logline}</p>
        )}
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-x-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="mb-2 rounded-lg px-2 py-1 text-xs text-gray-400 outline outline-gray-400/50 dark:text-gray-400/90 dark:outline-gray-400/70"
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
