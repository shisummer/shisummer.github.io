"use client"

import { useState } from "react"
import { Linkedin, Github, Mail } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { AmbientBackground } from "@/components/ambient-background"
import { ProjectCard } from "@/components/project-card"
import { ImageSlider } from "@/components/image-slider"
import { ContactForm } from "@/components/contact-form"

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

const coursework = [
  "ENGN 0040: Dynamics and Vibrations",
  "ENGN 0510: Electricity and Magnetism",
  "ENGN 0030: Intro to Engineering",
  "APMA 0330: Methods of Applied Math",
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground />
      
      <Navbar />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-3xl">
              <p className="text-sm text-muted-foreground tracking-wide mb-2">
                hi! i&apos;m
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
                Summer Shi
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                a rising junior at Brown University studying electrical engineering. switching from meche to ee this fall to build hardware at the intersection of both.
              </p>
              <div className="flex items-center gap-6 mt-8">
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
            </div>
            
            {/* Art & Photography Slider */}
            <ImageSlider />
          </div>
        </section>

        {/* SELECTED WORK SECTION */}
        <section id="projects" className="px-6 md:px-12 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Selected Work
            </h2>
            
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
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="px-6 md:px-12 lg:px-24 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              About
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Originally from the Bay Area, I&apos;m fascinated by systems where precision and reliability are pushed to the absolute limit. My interest in mechanical design is heavily inspired by F1—where every millimeter and millisecond counts. This fall, I&apos;m moving into Electrical Engineering to explore how the electronics inside these systems work. I believe the most interesting problems exist at the intersection of disciplines.
            </p>
            
            {/* Coursework */}
            <div className="mt-12 glass-heavy rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">coursework</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coursework.map((course) => (
                  <p key={course} className="text-muted-foreground text-sm">
                    {course}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 pb-32">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-center">
              Contact
            </h2>
            <p className="mt-6 text-muted-foreground text-center">
              have a question or want to work together?
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
