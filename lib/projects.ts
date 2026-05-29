export type ProjectDetail =
  | {
      layout: "stacked"
      fullDescription: string
      topImage: { src: string; alt: string }
      bottomImage: { src: string; alt: string }
    }
  | {
      layout: "split"
      fullDescription: string
      reportUrl: string
      videos: { src: string; title: string }[]
    }

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
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
