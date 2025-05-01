import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Modal from '../components/Modal';
import ProjectCard from '../components/ProjectCard';
import { MDXComponents } from '../components/mdxComponents';

function GoodWork() {
  const [activeProject, setActiveProject] = useState(null);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const modules = import.meta.glob('./projects/*.mdx', { eager: true }); // Add eager flag
        
        console.log('Raw modules:', modules);
  
        const projects = Object.entries(modules).map(([path, file]) => {
          const frontmatter = file.frontmatter || {};
          const Content = file.default; // MDX content as a React component
          const slug = path.replace('./projects/', '').replace('.mdx', '');
          return { ...frontmatter, Content, slug };
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
    <div className="container mx-auto py-8 mt-16">
      
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
          <MDXProvider components={MDXComponents}>
        <Modal onClose={() => setActiveProject(null)}>
              {console.log('Active Project:', activeProject)}
          <div className="flex-col overflow-hidden overflow-y-scroll prose">
                <div className="flex w-full md:w-1/3 h-64 md:h-auto">
                  <img
                    src={activeProject.coverImage}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow w-full md:w-2/3 p-4">
                  <h2 className="mt-4">{activeProject.type || 'Untitled Project'}</h2>
                  <h2 className="text-3xl font-bold mb-4 uppercase font-head text-balance">{activeProject.title || 'Untitled Project'}</h2>
                  {activeProject.logline && (
                    <p className="text-sm">
                      {activeProject.logline}
                    </p>
                  )}
              
                  <div className="mt-6">
                    <activeProject.Content />
                  </div>
               
                </div>
              </div>
        </Modal>
        </MDXProvider>
      )}
    </div>
  );
}

export default GoodWork;