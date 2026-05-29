export type ProjectDetail =
  | {
      layout: "text"
      problem: string
      goal: string
      institution?: string
    }
  | {
      layout: "stacked"
      fullDescription: string
      topImage: { src: string; alt: string }
      bottomImage: { src: string; alt: string }
    }
  | {
      layout: "split"
      sectionTitle?: string
      context?: string
      fullDescription: string
      reportUrl: string
      reportLabel?: string
      videos: { src: string; title: string }[]
    }

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  /** Optional extra categories so a cross-disciplinary project shows under multiple filters. */
  categories?: string[]
  tags: string[]
  detail?: ProjectDetail
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Formula SAE Drivetrain Design",
    description:
      "Engineered and optimized high-performance drivetrain components, achieving a 15% increase in stiffness and a 12% reduction in mass.",
    image: "/projects/fsae-cover.png",
    category: "mechanical",
    tags: ["SolidWorks CAD", "ANSYS FEA", "CNC Machining", "DFM / DFA"],
    detail: {
      layout: "stacked",
      topImage: {
        src: "/projects/fsae-exploded.png",
        alt: "Exploded view of the Formula SAE drivetrain assembly showing every component laid out in order.",
      },
      fullDescription:
        "As a mechanical engineer on the Formula SAE team, I engineered and optimized critical high-performance drivetrain components, including the differential housing, sprockets, half-shafts, and eccentric disks. Utilizing SolidWorks and ANSYS, I conducted extensive Finite Element Analysis (FEA) to evaluate torsional stiffness, fatigue life, and stress concentrations, ultimately achieving a 15% increase in component stiffness alongside a 12% reduction in overall mass. To prepare the vehicle for competition, I iterated complex CAD models to ensure strict compliance with FSAE regulations while driving Design for Manufacturing (DFM) and Design for Assembly (DFA) initiatives. This involved closely optimizing part geometry, tolerances, and material selection, as well as collaborating across sub-teams to streamline wiring harness routing and custom PCB mounting. Finally, I partnered with manufacturing and testing teams to validate performance and safety standards through CNC machining trials, rigorous bench testing, and direct on-car telemetry evaluation.",
      bottomImage: {
        src: "/projects/fsae-assembly.png",
        alt: "CAD render of the fully assembled Formula SAE drivetrain mounted between the sprocket and brake disc.",
      },
    },
  },
  {
    id: 2,
    title: "Rigid-body Rotation (RBR) Dynamics Simulations",
    description:
      "Simulated torque-free wobbling (the Dzhanibekov effect) and gyroscopic precession in MATLAB, validating returning boomerang flight.",
    image: "/projects/rbr-cover.png",
    category: "mechanical",
    tags: ["MATLAB", "Rigid-body Dynamics", "FoilSim"],
    detail: {
      layout: "split",
      fullDescription:
        "This project explored the principles of rigid-body rotation dynamics through the computational simulation of two complex physical phenomena using MATLAB: torque-free wobbling (the Dzhanibekov effect) and torque-induced gyroscopic precession (boomerang flight). Part A focused on modeling an asymmetrical, solid aluminum T-shaped nut to study the intermediate axis theorem. By calculating the center of mass and principal moments of inertia, the intermediate principal axis was identified, and a numerical simulation successfully animated the inherent instability that causes the nut to periodically flip 180 degrees. Part B transitioned to a real-world design application by engineering a functional four-blade balsa wood boomerang. Using NASA's FoilSim software and iterative MATLAB simulations, mass properties, aerodynamic lift/drag profiles, and gyroscopic precession rates were optimized. The simulation successfully proved that tuning the boomerang to an overall mass of 0.095 kg enables a stable, returning flight path that travels around an 18-foot distant pole and returns safely to the point of release.",
      reportUrl:
        "https://docs.google.com/document/d/1HnSCn6Fav-ADY4mq9061fsi8nQaIf10f2FX-7zK6Yyg/export?format=pdf",
      videos: [
        { src: "https://streamable.com/e/mi88b2?loop=1", title: "Boomerang Flight Simulation" },
        { src: "https://streamable.com/e/6abygu?loop=1", title: "T-Nut Intermediate Axis Flip Simulation" },
      ],
    },
  },
  {
    id: 7,
    title: "Retrodog: Assistive Bio-Inspired Companion Robot",
    description:
      "An affordable voice-controlled quadruped companion that restores independence and prevents fall risks for elderly residents with mobility and vision limitations.",
    image: "/projects/retrodog-cover.png",
    category: "robotics",
    categories: ["robotics", "mechanical", "electrical"],
    tags: ["Arduino", "Python (Speech Recognition)", "Mechanical Design", "Embedded Electronics", "Soft Robotics / Actuators"],
    detail: {
      layout: "split",
      sectionTitle: "Retrodog Companion Support System",
      context:
        "Developed for an Engineering Design course to address systemic care gaps in assisted-living facilities. The system is engineered around a human-centric user persona: a 78-year-old resident with Parkinson's disease fighting to retain her personal independence.",
      fullDescription:
        "Retrodog is an affordable, multi-disciplinary quadruped assistant engineered to restore independence and prevent fall risks for elderly residents with severe mobility and vision limitations. Built on top of a programmable bionic quadruped base and controlled via an Arduino microcontroller, the system eliminates complex user interfaces by utilizing a Python-driven Speech Recognition pipeline. Users can control the robot intuitively via voice commands to execute physical tasks. The custom hardware stack consists of two major engineered attachments: a mechanical precision companion claw driven by an MG90s servo for object retrieval, and a snap-on LED light-guiding apparatus. The LED system features a specialized 90-degree structural mount that utilizes ceilings as reflective surfaces to bounce soft, diffused ambient lighting throughout dark rooms. By blending embedded software pipelines, soft-robotics mechanics, and analog circuit routing, the system successfully alleviates daily physical strains for high-risk residents while stabilizing facility care workflows.",
      reportUrl:
        "https://docs.google.com/document/d/1u5AHneGzlKvVSPnWUBpis1CNheoVZTam_Um3YRzVWU8/export?format=pdf",
      reportLabel: "View Full Engineering Report",
      videos: [
        { src: "https://streamable.com/e/k8g50g?loop=1", title: "Diffused Light Guidance Feature" },
        { src: "https://streamable.com/e/dhfeji?loop=1", title: "Voice-Controlled Object Retrieval & Articulation" },
      ],
    },
  },
  {
    id: 3,
    title: "Autonomous Line-Following Robot",
    description:
      "Designed and built a robot with a custom PCB for sensor integration and motor control using PID algorithms.",
    image: "/placeholder-robot.jpg",
    category: "robotics",
    tags: ["Altium", "C++", "SolidWorks"],
  },
  {
    id: 4,
    title: "Smart Power Distribution Unit",
    description:
      "Engineered a modular PDU with real-time monitoring and overcurrent protection for laboratory applications.",
    image: "/placeholder-pdu.jpg",
    category: "electrical",
    tags: ["KiCad", "Python", "STM32"],
  },
  {
    id: 5,
    title: "Wireless Sensor Network",
    description:
      "Created a mesh network of environmental sensors with custom RF modules for campus-wide deployment.",
    image: "/placeholder-sensor.jpg",
    category: "electrical",
    tags: ["Altium", "nRF24L01", "Python"],
  },
  {
    id: 6,
    title: "Hexapod Walking Platform",
    description:
      "Built a six-legged walking robot with inverse kinematics and terrain adaptation capabilities.",
    image: "/placeholder-hexapod.jpg",
    category: "robotics",
    tags: ["MATLAB", "Dynamixel", "ROS"],
  },
]

export const categories = [
  { id: "all", label: "All" },
  { id: "electrical", label: "Electrical" },
  { id: "mechanical", label: "Mechanical" },
  { id: "robotics", label: "Robotics" },
]

export const research: Project[] = [
  {
    id: 101,
    title: "G-Force Trainer: Passive Gyroscopic Resistance System for Astronaut Fine Motor Conditioning",
    description:
      "A compact (<0.1 kg) passive gyroscopic device for localized wrist and forearm conditioning in microgravity, doubling as a force-feedback controller for simulation software.",
    image: "/research/gforce-cover.png",
    category: "engineering",
    tags: ["Aerospace", "Gyroscopic Mechanics", "Human Factors", "Hardware"],
    detail: {
      layout: "text",
      institution: "Engineering Research",
      problem:
        "Current long-duration space missions rely on bulky, high-power exercise systems designed almost exclusively for large muscle groups (legs, core, back). However, there is a critical gap in mission-readiness tools: astronauts lack compact, low-overhead systems for fine-motor and forearm conditioning. Without targeted training, the muscle groups required for precise tool handling, EVA (spacewalk) operations, and emergency equipment manipulation degrade. Furthermore, traditional motorized solutions add unacceptable mass, power drain, and mechanical failure risks to a spacecraft's strict payload budget.",
      goal:
        "The goal of this project is to design and prototype a compact, lightweight (<0.1 kg), passive gyroscopic resistance device that provides localized wrist and forearm conditioning for astronauts, minimizing musculoskeletal degradation during long-duration spaceflight. The system bridges the gap between physical health and digital training by doubling as a high-fidelity, force-feedback controller for microgravity simulation software.",
    },
  },
  {
    id: 102,
    title: "Epidemiological Data Analysis & Public Health Interface: Systemic HIV Trends in Incarcerated Populations",
    description:
      "Aggregated and analyzed epidemiological data on HIV in correctional facilities, deploying a secure web platform to visualize findings for public health researchers.",
    image: "/research/hiv-research-cover.png",
    category: "non-engineering",
    tags: ["Public Health", "Epidemiology", "Data Analysis", "Web Platform"],
    detail: {
      layout: "text",
      institution: "Warren Alpert Medical School of Brown University",
      problem:
        "Incarcerated populations experience disproportionately higher rates of chronic infectious diseases like HIV, yet systemic data tracking within correctional facilities is fractured, qualitative, and difficult for public health officials to access. Researchers lack unified, secure digital frameworks to screen medical literature, synthesize inmate qualitative narratives, and visualize socioeconomic and systemic health barriers.",
      goal:
        "The main goal of this project was to aggregate, screen, and analyze epidemiological data regarding HIV prevalence, transmission vectors, and healthcare access constraints within correctional facilities. The ultimate objective was to synthesize qualitative public health data into actionable insights and deploy a custom, secure web platform to visualize findings for public health researchers.",
    },
  },
]

export const researchCategories = [
  { id: "all", label: "All" },
  { id: "engineering", label: "Engineering" },
  { id: "non-engineering", label: "Non-Engineering" },
]
