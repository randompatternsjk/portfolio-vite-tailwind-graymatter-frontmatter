import React, { useState, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import Modal from "../components/Modal";
import ProjectCard from "../components/ProjectCard";
import { MDXComponents } from "../components/mdxComponents";

function GoodWork() {
  const [activeProject, setActiveProject] = useState(null);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const modules = import.meta.glob("./projects/*.mdx", { eager: true }); // Add eager flag

        console.log("Raw modules:", modules);

        const projects = Object.entries(modules).map(([path, file]) => {
          const frontmatter = file.frontmatter || {};
          const Content = file.default; // MDX content as a React component
          const slug = path.replace("./projects/", "").replace(".mdx", "");
          return { ...frontmatter, Content, slug };
        });

        console.log("Processed projects:", projects);
        setProjectList(projects);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <div className="container mx-auto mt-16 py-8">
      {/* Project Grid */}
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
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
            <div className="flex h-screen snap-y snap-mandatory flex-col gap-4 overflow-y-scroll">
              {/* Cover Image */}
              <div className="flex w-full snap-start flex-col">
                <img
                  src={activeProject.coverImage}
                  className="sticky object-cover drop-shadow-lg"
                />
              </div>

              {/* Project Type and Title */}
              <div className="colspan-4 flex snap-start flex-col content-center gap-4 p-8">
                <div className="flex flex-col gap-4 lg:flex-row">
                  <h2 className="font-head border-r-1 pt-6 pr-6 text-left text-3xl font-bold text-balance uppercase opacity-100">
                    {activeProject.type || "Untitled Project"}
                  </h2>
                  <h2 className="font-head mb-4 ml-4 align-bottom text-8xl font-bold text-balance uppercase">
                    {activeProject.title || "Untitled Project"}
                  </h2>
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full flex-grow snap-start p-8">
                <div className="mt-6 w-full">
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
