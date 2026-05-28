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
  "APMA 0360: Applied PDES",
  "APMA 0350: Applied ODES",
  "ENGN 0040: Dynamics and Vibrations",
  "CSCI 0111: Computing Foundations: Data",
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
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-12">
          <div className="max-w-6xl mx-auto w-full mt-16">
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground tracking-wide mb-2">
                hi! i&apos;m
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground tracking-tight">
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
          </div>
        </section>

        {/* SELECTED WORK SECTION */}
        <section id="projects" className="px-6 md:px-12 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              projects
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
              about
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              I&apos;m originally from the Bay Area (Dublin, CA) and currently studying at Brown. Outside of class, I&apos;m involved with our Formula SAE team and write for the Arts & Culture section of The Brown Daily Herald. I spent my first two years deep in mechanical design, but realized the most interesting engineering problems happen right where hardware meets electronics. I&apos;m switching to EE this fall so I can actually understand and design the systems that control the mechanics. (Note: I&apos;m open to roles anywhere and don&apos;t require relocation assistance.)
            </p>
            
            {/* Coursework */}
            <div className="mt-12 glass-heavy rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">coursework</h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground/80 mb-3">upcoming (fall)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {upcomingCourses.map((course) => (
                    <p key={course} className="text-muted-foreground text-sm">
                      {course}
                    </p>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-foreground/80 mb-3">completed</h4>
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
              In my free time, I enjoy taking photos, and capturing the world one drawing/painting at a time.
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-center">
              contact
            </h2>
            <p className="mt-6 text-muted-foreground text-center">
              feel free to reach out for anything—whether it&apos;s about a project, a potential role, or just grabbing a matcha to talk design and hardware. :)
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
