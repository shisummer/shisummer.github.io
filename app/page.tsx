"use client"

import { useState } from "react"
import { Linkedin, Github, Mail } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { AmbientBackground } from "@/components/ambient-background"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "Autonomous Line-Following Robot",
    description: "Designed and built a robot with custom PCB for sensor integration and motor control using PID algorithms.",
    image: "/placeholder-robot.jpg",
    category: "robotics",
    tags: ["Altium", "C++", "SolidWorks"],
  },
  {
    id: 2,
    title: "Smart Power Distribution Unit",
    description: "Engineered a modular PDU with real-time monitoring and overcurrent protection for laboratory applications.",
    image: "/placeholder-pdu.jpg",
    category: "electrical",
    tags: ["KiCad", "Python", "STM32"],
  },
  {
    id: 3,
    title: "Prosthetic Hand Mechanism",
    description: "Developed a low-cost 3D printed prosthetic with tendon-driven actuation and adaptive grip control.",
    image: "/placeholder-hand.jpg",
    category: "mechanical",
    tags: ["SolidWorks", "3D Printing", "Arduino"],
  },
  {
    id: 4,
    title: "Wireless Sensor Network",
    description: "Created a mesh network of environmental sensors with custom RF modules for campus-wide deployment.",
    image: "/placeholder-sensor.jpg",
    category: "electrical",
    tags: ["Altium", "nRF24L01", "Python"],
  },
  {
    id: 5,
    title: "Hexapod Walking Platform",
    description: "Built a six-legged walking robot with inverse kinematics and terrain adaptation capabilities.",
    image: "/placeholder-hexapod.jpg",
    category: "robotics",
    tags: ["MATLAB", "Dynamixel", "ROS"],
  },
  {
    id: 6,
    title: "CNC Mill Conversion",
    description: "Converted a manual Bridgeport mill to CNC with custom stepper drivers and LinuxCNC integration.",
    image: "/placeholder-cnc.jpg",
    category: "mechanical",
    tags: ["LinuxCNC", "Fusion 360", "G-code"],
  },
]

const categories = [
  { id: "all", label: "all." },
  { id: "electrical", label: "electrical." },
  { id: "mechanical", label: "mechanical." },
  { id: "robotics", label: "robotics." },
]

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<"home" | "projects" | "about" | "contact">("home")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AmbientBackground />
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="relative z-10 pt-24">
        {activeTab === "home" && (
          <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight text-balance">
              Hi, I&apos;m Summer Shi.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              An Electrical Engineering student at Brown University, building at the intersection of physical mechanics and advanced electronics.
            </p>
            <div className="flex items-center gap-6 mt-10">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" strokeWidth={1.5} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" strokeWidth={1.5} />
              </a>
              <a 
                href="mailto:summer@brown.edu"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" strokeWidth={1.5} />
              </a>
            </div>
          </section>
        )}

        {activeTab === "projects" && (
          <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Selected Work
            </h2>
            
            <div className="flex flex-wrap items-center gap-3 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "border-foreground/50 bg-foreground/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "about" && (
          <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              About
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m currently pursuing a degree in Electrical Engineering at Brown University, 
                where I focus on the convergence of embedded systems, power electronics, and mechanical design.
              </p>
              <p>
                My work spans from designing custom PCBs for robotics applications to developing 
                mechanical systems that push the boundaries of precision and reliability. I believe 
                the most interesting problems exist at the intersection of disciplines.
              </p>
              <p>
                When I&apos;m not in the lab, you can find me tinkering with vintage electronics, 
                contributing to open-source hardware projects, or exploring the Providence maker scene.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {["SolidWorks", "Altium Designer", "Python", "MATLAB", "KiCad", "C/C++", "ROS", "Fusion 360"].map((skill) => (
                <div 
                  key={skill}
                  className="glass px-4 py-3 rounded-lg text-sm text-muted-foreground text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "contact" && (
          <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-24 min-h-[calc(100vh-6rem)] flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
            </p>
            <div className="mt-10 space-y-4">
              <a 
                href="mailto:summer@brown.edu"
                className="flex items-center gap-4 text-foreground hover:text-foreground/80 transition-colors group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-lg">summer@brown.edu</span>
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-foreground/80 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-lg">LinkedIn</span>
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-foreground/80 transition-colors group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-lg">GitHub</span>
              </a>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
