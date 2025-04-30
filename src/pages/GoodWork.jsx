import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Modal from '../components/Modal';
import ProjectCard from '../components/ProjectCard';

function GoodWork() {
  const [activeProject, setActiveProject] = useState(null);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const modules = import.meta.glob('./projects/*.mdx', { eager: true }); // Add eager flag
        
        console.log('Raw modules:', modules);
  
        const projects = Object.entries(modules).map(([path, file]) => {
          console.log(`File keys for ${path}:`, Object.keys(file));
          
          // New: Try to find frontmatter in the compiled MDX
          const frontmatter = file.frontmatter || 
                            (file.metadata && file.metadata.frontmatter) ||
                            {};
  
          console.log(`Frontmatter for ${path}:`, frontmatter);
  
          return {
            ...frontmatter,
            Content: file.default,
            slug: path.replace('./projects/', '').replace('.mdx', '')
          };
        });
  
        console.log('Processed projects:', projects);
        setProjectList(projects);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    loadProjects();
  }, []);

  return (
    <div className="container mx-auto py-8 text-dominoivory mt-16">
      
      {/* Project Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {projectList.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>

      {/* Project Modal */}
      {activeProject && (
        <Modal onClose={() => setActiveProject(null)}>
          <MDXProvider>
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-4">{activeProject.title || 'Untitled Project'}</h2>
              {activeProject.logline && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {activeProject.logline}
                </p>
              )}
              <div className="mt-6">
                <activeProject.Content />
              </div>
            </div>
          </MDXProvider>
        </Modal>
      )}
    </div>
  );
}

export default GoodWork;