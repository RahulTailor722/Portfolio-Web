import React from "react"
import { projects } from "../../data/site"
import ProjectDetail from "../../components/project-detail"
import Seo from "../../components/seo"
import { buildProjectSchema, buildBreadcrumbSchema } from "../../utils/project-schema"

const slug = "guided-lxp"
const idx = projects.findIndex((p) => p.slug === slug)
const project = projects[idx]
const prevProject = projects[(idx - 1 + projects.length) % projects.length]
const nextProject = projects[(idx + 1) % projects.length]

const ProjectPage = () => (
  <ProjectDetail project={project} prevProject={prevProject} nextProject={nextProject} />
)

export default ProjectPage

export const Head = () => (
  <Seo
    title={`${project.title} — Case Study`}
    description={project.desc}
    image={project.image}
    pathname={`/work/${project.slug}/`}
    type="article"
    structuredData={[
      buildProjectSchema(project),
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Work", path: "/work/" },
        { name: project.title, path: `/work/${project.slug}/` },
      ]),
    ]}
  />
)
