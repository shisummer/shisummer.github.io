"use client"

import { useState } from "react"
import { Linkedin, Github, Mail } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { AmbientBackground } from "@/components/ambient-background"
import { MouseGlow } from "@/components/mouse-glow"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { ImageSlider } from "@/components/image-slider"
import { ContactForm } from "@/components/contact-form"
import { projects, categories, research, researchCategories, type Project } from "@/lib/projects"

const upcomingCourses = [
  "ENGN 0510: Electricity and Magnetism",
  "ENGN 1570: Linear Systems Analysis",
  "ENGN 1630: Digital Electronic System Design",
  "PHYS 0790: Quantum Mechanics",
]

const completedCourses = [
  "ENGN 0310: Mechanics of Solids and Structures",
  "ENGN 0720: Thermodynamics",
  "ENGN 1370: Advanced Engineering Dynamics",
  "ENGN 0410: Materials Science",
  "ENGN 0520: Electrical Circuits & Signals",
  "APMA 0360: Applied PDEs",
  "APMA 0350: Applied ODEs",
  "ENGN 0040: Dynamics and Vibrations",
  "CSCI 0111: Computing Foundations: Data",
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeResearchCategory, setActiveResearchCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) =>
          p.categories ? p.categories.includes(activeCategory) : p.category === activeCategory,
        )

  const filteredResearch =
    activeResearchCategory === "all"
      ? research
      : research.filter((p) =>
          p.categories ? p.categories.includes(activeResearchCategory) : p.category === activeResearchCategory,
        )

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground />
      <MouseGlow />

      <Navbar />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-12">
          <div className="max-w-6xl mx-auto w-full mt-16">
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground tracking-wide mb-2">Hi! I&apos;m</p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground tracking-tight">
                Summer Shi
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A junior at Brown University focused on hardware engineering and physical systems.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <a
                  href="https://www.linkedin.com/in/summer-shi-65456a23b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" strokeWidth={1.5} />
                </a>
                <a
                  href="https://github.com/shisummer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" strokeWidth={1.5} />
                </a>
                <a
                  href="mailto:summer_shi@brown.edu"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="px-6 md:px-12 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Projects</h2>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "glass-heavy border-white/20 text-foreground"
                      : "glass border-white/5 text-muted-foreground hover:border-white/15 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onOpen={setSelectedProject} />
              ))}
            </div>
          </div>
        </section>

        {/* RESEARCH SECTION */}
        <section id="research" className="px-6 md:px-12 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Research</h2>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              {researchCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveResearchCategory(cat.id)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeResearchCategory === cat.id
                      ? "glass-heavy border-white/20 text-foreground"
                      : "glass border-white/5 text-muted-foreground hover:border-white/15 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {filteredResearch.map((item, index) => (
                <ProjectCard key={item.id} project={item} index={index} onOpen={setSelectedProject} />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="px-6 md:px-12 lg:px-24 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">About</h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              I&apos;m originally from the Bay Area (Dublin, CA) and currently study at Brown University. Outside of
              class, I&apos;m involved with our Formula SAE team and write for the Arts &amp; Culture section of The
              Brown Daily Herald. I am deeply interested in exploring the intersection of electronics and physical
              hardware design, leveraging a strong background in mechanical assemblies alongside embedded electronics to
              build integrated hardware systems. (Note: I&apos;m open to roles anywhere and don&apos;t require relocation
              assistance.)
            </p>

            {/* Coursework */}
            <div className="mt-12 glass-heavy rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Coursework</h3>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground/80 mb-3">Upcoming (Fall)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {upcomingCourses.map((course) => (
                    <p key={course} className="text-muted-foreground text-sm">
                      {course}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground/80 mb-3">Completed</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {completedCourses.map((course) => (
                    <p key={course} className="text-muted-foreground text-sm">
                      {course}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Art & Photography paragraph */}
            <p className="mt-12 text-lg text-muted-foreground leading-relaxed">
              In my free time, I enjoy taking photos and capturing the world one drawing or painting at a time.
            </p>

            {/* Art & Photography Slider */}
            <div className="mt-8">
              <ImageSlider />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 pb-32">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-center">Contact</h2>
            <p className="mt-6 text-muted-foreground text-center">
              Feel free to reach out for anything—whether it&apos;s about a project, a potential role, or just grabbing a
              matcha to talk design and hardware. :)
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}
