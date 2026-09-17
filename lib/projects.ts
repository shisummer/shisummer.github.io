export type ProjectDetail =
  | {
      layout: "text"
      overview: string
      institution?: string
    }
  | {
      layout: "stacked"
      fullDescription: string
      topImage: { src: string; alt: string }
      bottomImage: { src: string; alt: string }
      extraImages?: { src: string; alt: string }[]
    }
  | {
      layout: "split"
      sectionTitle?: string
      context?: string
      fullDescription: string
      reportUrl?: string
      reportLabel?: string
      videos: { src: string; title: string }[]
    }
  | {
      layout: "report"
      fullDescription: string
      image: { src: string; alt: string }
      reportUrl: string
      reportLabel?: string
    }
  | {
      layout: "code"
      fullDescription: string
      code: string
      codeLanguage: string
      codeTitle?: string
      secondCode?: string
      secondCodeLanguage?: string
      secondCodeTitle?: string
      videos: { src: string; title: string }[]
    }
  | {
      layout: "gallery"
      fullDescription: string
      skills: { title: string; description?: string }[]
      images: { src: string; alt: string; caption?: string }[]
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

const projectsList: Project[] = [
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
        src: "/projects/fsae-assembly-hub.png",
        alt: "Close-up CAD render of the Formula SAE drivetrain hub assembly, showing the gold differential hub between the sprocket and brake rotors on the axle.",
      },
      extraImages: [
        {
          src: "/projects/fsae-assembly-front-clean.png",
          alt: "Front-on CAD render of the Formula SAE drivetrain hub assembly, showing the gold differential hub flanked by silver rotor discs on the axle.",
        },
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
      videos: [
        { src: "https://streamable.com/e/k8g50g?loop=1", title: "Diffused Light Guidance Feature" },
        { src: "https://streamable.com/e/9a82w0?loop=1", title: "Voice-Controlled Object Retrieval & Articulation" },
      ],
    },
  },
  {
    id: 8,
    title: "Boeing 737 3D Model: CAD Design in Autodesk Fusion 360",
    description:
      "A detailed 3D model of the Boeing 737 built entirely in Autodesk Fusion 360, constructed from official blueprint reference images.",
    image: "/projects/boeing1.jpg",
    category: "mechanical",
    tags: ["Autodesk Fusion 360", "3D Modeling", "Solid Modeling", "HDRI Rendering"],
    detail: {
      layout: "gallery",
      fullDescription:
        "This is a detailed 3D model of the Boeing 737 that I built entirely in Autodesk Fusion 360. I started by importing official blueprint images into Fusion and aligning them to the orthographic planes, then used them as a guide to build each part from scratch, including the fuselage, wings, engines, and tail. Right now I'm working on breaking the plane into printable sections so I can 3D print the whole model at home.",
      skills: [
        {
          title: "Blueprint-driven modeling",
          description:
            "Inserting and aligning multi-view reference images onto construction planes to guide proportional geometry.",
        },
        {
          title: "Multi-body solid modeling",
          description:
            "Managing and organizing complex assemblies with many discrete solid bodies across fuselage, engines, and control surfaces.",
        },
        {
          title: "Symmetry & mirroring",
          description:
            "Using construction planes and mirror features to maintain bilateral symmetry across the airframe.",
        },
        {
          title: "HDRI rendering",
          description:
            "Setting up render environments with custom HDR image files for realistic lighting and background compositing.",
        },
      ],
      images: [
        { src: "/projects/boeing1.jpg", alt: "Boeing 737 3D model in flight against a cloudy blue sky." },
        { src: "/projects/boeing-viewport.png", alt: "Boeing 737 CAD model shown in the Autodesk Fusion 360 viewport with grid background." },
        { src: "/projects/boeing4.jpg", alt: "Front view of the Boeing 737 3D model showing the nose, engines, and wings." },
        { src: "/projects/boeing3.jpg", alt: "Underside view of the Boeing 737 3D model flying through clouds." },
        { src: "/projects/boeing2.jpg", alt: "Side profile of the Boeing 737 3D model against a soft sunset sky." },
        { src: "/projects/boeing6.jpg", alt: "Top-down angled view of the Boeing 737 3D model in flight." },
      ],
    },
  },
  {
    id: 9,
    title: "Concept Vehicle: CAD Model in Autodesk Fusion",
    description:
      "An original concept car designed and modeled from scratch in Autodesk Fusion 360 using advanced surfacing techniques.",
    image: "/projects/car1.jpg",
    category: "mechanical",
    tags: ["Autodesk Fusion 360", "Surface Modeling", "Automotive Design", "3D CAD Modeling"],
    detail: {
      layout: "gallery",
      fullDescription:
        "This project involved designing and modeling an original concept car entirely from scratch using Autodesk Fusion 360. Rather than replicating an existing vehicle, I developed my own exterior design language, starting from rough proportions and evolving them into a fully realized 3D surface model. The bodywork was constructed using advanced surfacing techniques, including sweep and loft to generate the complex, flowing curves characteristic of automotive forms, and patch to close out organic transitions between surfaces where traditional solid modeling methods fall short. This approach demanded careful attention to surface continuity and flow, ensuring the final model maintained smooth, aesthetically cohesive lines across the entire body. The project pushed my understanding of freeform surface modeling and gave me hands-on experience translating a design concept into precise, manufacturable geometry.\n\nYou can see that some of the surfaces aren't perfectly smooth. This was my first real project working with surfaces, and one of the hardest parts was controlling exactly what geometry each surface would create. Sometimes a surface would come out with unexpected folds or creases, and cleaning those up wasn't easy. It took a lot of patience and trial and error to get the results I wanted, but I learned a ton about how surfaces behave in the process.",
      skills: [
        {
          title: "Technical Skills",
          description:
            "Surface Modeling, Sweep & Loft Operations, Patch Modeling, Freeform / Organic Surfacing, and Surface Continuity & Curvature Analysis.",
        },
        {
          title: "Automotive Design",
          description:
            "Developing an original exterior design language and evolving rough proportions into a cohesive vehicle form.",
        },
        {
          title: "Product Design & Visualization",
          description:
            "Translating a design concept into presentable renders that communicate the vehicle's styling and surfaces.",
        },
        {
          title: "3D CAD Modeling",
          description:
            "Building precise, manufacturable geometry while maintaining smooth surface flow across the entire body.",
        },
      ],
      images: [
        { src: "/projects/car-viewport.png", alt: "Concept car model shown in the Autodesk Fusion 360 viewport with grid background." },
        { src: "/projects/car1.jpg", alt: "Front three-quarter studio render of the concept car." },
        { src: "/projects/car2.jpg", alt: "Side profile studio render of the concept car." },
        { src: "/projects/car3.jpg", alt: "Low front three-quarter studio render of the concept car." },
        { src: "/projects/car4.jpg", alt: "Top-down view of the concept car." },
      ],
    },
  },
  {
    id: 10,
    title: "Columbia-class Submarine: 1:96 Scale Model & Additive Manufacturing",
    description:
      "A high-fidelity 1:96 scale replica of the Columbia-class submarine modeled in PTC Creo and 3D printed as a 5.8-foot assembly, delivered to the Navy Yard in Washington, DC.",
    image: "/projects/columbia-navy.jpg",
    category: "mechanical",
    tags: ["PTC Creo", "Additive Manufacturing", "Design for Manufacturing", "3D Printing"],
    detail: {
      layout: "gallery",
      fullDescription:
        "I modeled a high-fidelity 1:96 scale replica of the Columbia-class submarine in PTC Creo, running geometric verification and spatial analysis along the way. From there, I led the additive manufacturing effort to prototype the design, validating assembly alignment and mechanical tolerances on real hardware. For security reasons, the final product can't be shown here. The image shown is a publicly available photo taken from online; my actual model is more detailed. The model was made based off of publicly available images, and its dimensions aren't accurate to the real thing.\n\nOne of the biggest challenges was detail resolution. The final model measured 5.8 feet long and had to be printed in six separate sections, so I designed joining mechanisms to connect all six pieces into one continuous body. The finished product was delivered to the Navy Yard in Washington, DC. This project also taught me a lot about Design for Manufacturing. To cut down on print time and cost, I hollowed out the center of the model, and I went back to refine several details so they would resolve more cleanly on the final print.\n\nSecurity Clearance: As part of my work supporting this program, my employer is sponsoring me for a U.S. Secret security clearance, which is currently in progress. I do not hold the clearance yet.",
      skills: [
        { title: "PTC Creo" },
        { title: "Rapid Prototyping" },
        { title: "Industrial 3D Printer" },
        { title: "Stratasys Fortus 450mc Printer" },
      ],
      images: [
        {
          src: "/projects/columbia-navy.jpg",
          alt: "A Columbia-class ballistic missile submarine on the surface at sea.",
          caption:
            "The final product isn't shown here for security reasons. This image is taken from online; my actual model is more detailed.",
        },
      ],
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
    title: "FEM Troubleshooting and Error Analysis",
    description:
      "Investigated vibrational modes of Chladni plates, diagnosing FEM failures in ABAQUS and validating thin-plate theory with MATLAB numerical models.",
    image: "/projects/fem-original.png",
    category: "mechanical",
    tags: ["ABAQUS", "FEM", "FEA", "MATLAB"],
    detail: {
      layout: "report",
      fullDescription:
        "In this project, we investigated the vibrational modes and normal mode wave patterns of square and circular Chladni plates. The project involved extracting experimental vibrational figures and comparing them against computational finite element method (FEM) simulations and numerical models. To model the frequency spectra computationally, steady-state dynamics simulations were initially conducted using ABAQUS. However, the initial simulations failed to produce contour plots that visually matched the physical sand patterns. Through root-cause analysis, I determined that the input plate thickness (10 centimeters) violated the assumptions of thin-shell plate theory, causing the software to treat the geometry as a highly rigid block rather than a flexible plate. To overcome the FEM limitations, we developed a numerical simulation in MATLAB to solve for the theoretical natural frequencies based on idealized thin-plate vibration equations. While comparing the MATLAB predictions to the physical experiments yielded significant percent errors (ranging from -70.46% to 120.73%), I successfully conducted an error analysis to explain the discrepancies. I identified that unmodeled physical realities—such as aerodynamic damping, slight asymmetries in the physical leveling apparatus, and the actual compliance of the central mounting constraint compared to idealized boundary conditions—skewed the experimental frequencies away from theoretical targets. Despite the numerical offsets, the experimental results successfully validated the core physical principles of plate vibration. We proved that the relative progression of excitation frequencies behaved exactly as predicted: higher-order geometries with a greater density of nodal lines inherently require higher energy inputs (frequencies) to actuate.",
      image: {
        src: "/projects/fem-original.png",
        alt: "ABAQUS finite element simulation showing the displacement magnitude contour of a vibrating Chladni plate's normal mode.",
      },
      reportUrl:
        "https://docs.google.com/document/d/1NckNd1RHoFG3YBA9mXNsiiOYjA3E__PXpNALDeLNJ-Y/export?format=pdf",
      reportLabel: "View Full Report",
    },
  },
  {
    id: 4,
    title: "Motion-Activated Alarm",
    description:
      "An Arduino-based automated greeter that uses a PIR sensor to detect motion and play a cheerful ascending melody on a passive buzzer.",
    image: "/projects/motion-alarm-cover.jpg",
    category: "electrical",
    tags: ["Arduino", "C++", "PIR Sensor", "Embedded Systems"],
    detail: {
      layout: "code",
      fullDescription:
        "This Arduino project is a clever, interactive device that acts as an automated greeter. Using a Passive Infrared (PIR) sensor, the system actively monitors its surroundings for movement. When a person walks into the sensor's field of view, the Arduino immediately detects the change in infrared energy and triggers a response.\n\nOnce motion is detected, the system sends a notification to the Serial Monitor and activates a passive buzzer to play a cheerful, three-note ascending melody. The project includes a necessary 30-second warm-up phase on startup to allow the PIR sensor to calibrate to the room's ambient infrared levels, ensuring accurate detection. After the greeting plays, the system briefly pauses for three seconds to prevent continuous, overlapping alarms before resetting to detect the next passerby.",
      codeLanguage: "cpp",
      codeTitle: "motion_greeter.ino",
      code: `// Motion-activated greeter
// PIR OUT -> pin 2, passive buzzer -> pin 8

const int pirPin = 2;      // PIR sensor's OUT pin
const int buzzerPin = 8;   // passive buzzer

void setup() {
  pinMode(pirPin, INPUT);
  Serial.begin(9600);
  Serial.println("PIR warming up, hold still...");
  delay(30000);            // sensor needs ~30s to settle
  Serial.println("Ready! Walk in front of it.");
}

void loop() {
  if (digitalRead(pirPin) == HIGH) {   // motion detected
    Serial.println("Motion detected!");
    playGreeting();
    delay(3000);                       // pause before re-triggering
  }
}

void playGreeting() {
  tone(buzzerPin, 523, 200);   // first note
  delay(250);
  tone(buzzerPin, 659, 200);   // second note (higher)
  delay(250);
  tone(buzzerPin, 784, 400);   // third note (higher still)
  delay(450);
  noTone(buzzerPin);           // silence
}`,
      videos: [
        { src: "https://streamable.com/e/ml5ujl?loop=1", title: "Motion Detection Trigger" },
        { src: "https://streamable.com/e/hfv7lh?loop=1", title: "Ascending Greeting Melody" },
      ],
    },
  },
  {
    id: 5,
    title: "Timed Phone Jail: RFID-Enforced Focus Station",
    description:
      "An Arduino R4 focus station that uses RFID presence-detection to physically enforce 25-minute Pomodoro sessions, with a multi-screen state machine and daily focus statistics.",
    image: "/projects/phone-jail-cover.png",
    category: "electrical",
    tags: ["Arduino R4", "C++", "MFRC522 RFID", "I2C LCD", "Embedded Systems", "State Machine"],
    detail: {
      layout: "code",
      fullDescription:
        "Timed Phone Jail is a self-accountability focus station that physically holds the user to their study commitments. Built on an Arduino R4, the system centers on an MFRC522 RFID reader: the user adheres an RFID card to the back of their phone and places it face-down on the reader pad to enroll in a 25-minute Pomodoro session. During the session, a 16x2 I2C LCD displays a live countdown while the R4's built-in LED matrix renders a shrinking progress bar.\n\nThe core engineering challenge is continuous presence detection. The MFRC522 is not designed for sustained polling, so the firmware re-initializes the reader each cycle and implements custom re-detection and debounce logic to reliably distinguish a genuine phone removal from transient false negatives. If the phone is lifted mid-session, a buzzer immediately begins an escalating nag pattern, the LED matrix flashes, the session is flagged as \"broken,\" and the display accumulates the seconds of lapsed focus.\n\nCompleting a full 25 minutes rewards the user with a pleasant ascending chime and a 5-minute break timer. The system maintains running statistics—sessions completed, sessions broken, and total focus minutes—surfaced through a multi-screen \"report card\" state machine (IDLE, FOCUSING, BROKEN, BREAK_TIME, STATS) that the user can cycle through with a debounced push button while idle.",
      codeLanguage: "cpp",
      codeTitle: "timed_phone_jail.ino",
      code: `#include <SPI.h>
#include <MFRC522.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include "Arduino_LED_Matrix.h"

#define SS_PIN 10
#define RST_PIN 9
#define BUZZER_PIN 8
#define BUTTON_PIN 2

#define FOCUS_DURATION 1500000UL
#define BREAK_DURATION 300000UL
#define REMOVAL_DEBOUNCE 1500UL
#define DEBOUNCE_MS 200

MFRC522 rfid(SS_PIN, RST_PIN);
LiquidCrystal_I2C lcd(0x27, 16, 2);
ArduinoLEDMatrix matrix;

enum State { IDLE, FOCUSING, BROKEN, BREAK_TIME, STATS };
State currentState = IDLE;

bool phonePresent = false;
unsigned long lastSeenMs = 0;
unsigned long sessionStartMs = 0;
unsigned long brokenStartMs = 0;
unsigned long weaknessMs = 0;

int sessionsCompleted = 0;
int sessionsBroken = 0;
int totalFocusMinutes = 0;

bool lastButtonState = HIGH;
unsigned long lastButtonPress = 0;
int statsScreen = 0;
unsigned long lastStatsSwitch = 0;

void setup() {
  Serial.begin(9600);
  delay(3000);

  pinMode(BUTTON_PIN, INPUT_PULLUP);
  pinMode(BUZZER_PIN, OUTPUT);

  SPI.begin();
  rfid.PCD_Init();
  delay(50);
  rfid.PCD_SetAntennaGain(rfid.RxGain_max);

  Wire.begin();
  lcd.init();
  lcd.backlight();
  matrix.begin();

  showIdleScreen();
  Serial.println("Pomodoro enforcer ready.");
}

void loop() {
  checkRFID();
  checkButton();

  switch (currentState) {
    case IDLE: break;
    case FOCUSING: runFocusing(); break;
    case BROKEN: runBroken(); break;
    case BREAK_TIME: runBreak(); break;
    case STATS: runStats(); break;
  }
}

void checkRFID() {
  rfid.PCD_Init();
  delay(5);

  byte bufferATQA[2];
  byte bufferSize = sizeof(bufferATQA);
  MFRC522::StatusCode result = rfid.PICC_RequestA(bufferATQA, &bufferSize);

  if (result == MFRC522::STATUS_OK || result == MFRC522::STATUS_COLLISION) {
    lastSeenMs = millis();
    if (!phonePresent) {
      phonePresent = true;
      Serial.println("Phone placed");
      onPhonePlaced();
    }
    rfid.PICC_HaltA();
  } else {
    if (phonePresent && (millis() - lastSeenMs > REMOVAL_DEBOUNCE)) {
      phonePresent = false;
      Serial.println("Phone removed");
      onPhoneRemoved();
    }
  }
}

void onPhonePlaced() {
  if (currentState == IDLE) {
    currentState = FOCUSING;
    sessionStartMs = millis();
    weaknessMs = 0;
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Focus! Put down");
    lcd.setCursor(0, 1);
    lcd.print("the phone!");
    delay(1500);
  } else if (currentState == BROKEN) {
    currentState = FOCUSING;
    lcd.clear();
  }
}

void onPhoneRemoved() {
  if (currentState == FOCUSING) {
    currentState = BROKEN;
    brokenStartMs = millis();
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("PUT IT DOWN!!!");
  }
}

void checkButton() {
  bool buttonState = digitalRead(BUTTON_PIN);
  if (buttonState == LOW && lastButtonState == HIGH &&
      (millis() - lastButtonPress > DEBOUNCE_MS)) {
    lastButtonPress = millis();
    onButtonPress();
  }
  lastButtonState = buttonState;
}

void onButtonPress() {
  if (currentState == BROKEN) {
    sessionsBroken++;
    currentState = IDLE;
    phonePresent = false;
    showIdleScreen();
    clearMatrix();
  } else if (currentState == IDLE) {
    currentState = STATS;
    statsScreen = 0;
    showStatsScreen();
  } else if (currentState == STATS) {
    statsScreen++;
    if (statsScreen > 2) {
      currentState = IDLE;
      showIdleScreen();
    } else {
      showStatsScreen();
    }
  } else if (currentState == BREAK_TIME) {
    currentState = IDLE;
    showIdleScreen();
    clearMatrix();
  }
}

void runFocusing() {
  unsigned long now = millis();
  unsigned long elapsed = now - sessionStartMs - weaknessMs;

  if (elapsed >= FOCUS_DURATION) {
    sessionsCompleted++;
    totalFocusMinutes += 25;
    playCompletionChime();
    currentState = BREAK_TIME;
    sessionStartMs = now;
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Great work! :)");
    lcd.setCursor(0, 1);
    lcd.print("Break time!");
    clearMatrix();
    return;
  }

  unsigned long remaining = FOCUS_DURATION - elapsed;
  int mins = remaining / 60000;
  int secs = (remaining % 60000) / 1000;

  lcd.setCursor(0, 0);
  lcd.print("Focus: ");
  if (mins < 10) lcd.print("0");
  lcd.print(mins);
  lcd.print(":");
  if (secs < 10) lcd.print("0");
  lcd.print(secs);
  lcd.print("   ");

  lcd.setCursor(0, 1);
  lcd.print("Session #");
  lcd.print(sessionsCompleted + 1);
  lcd.print("        ");

  updateProgressBar(elapsed, FOCUS_DURATION);
}

void runBroken() {
  unsigned long weaknessNow = (millis() - brokenStartMs) / 1000;

  lcd.setCursor(0, 0);
  lcd.print("PUT IT DOWN!!!");
  lcd.setCursor(0, 1);
  lcd.print("Weak: ");
  lcd.print(weaknessNow);
  lcd.print("s        ");

  playNagBuzz(weaknessNow);
  flashMatrix();
}

void runBreak() {
  unsigned long elapsed = millis() - sessionStartMs;

  if (elapsed >= BREAK_DURATION) {
    currentState = IDLE;
    showIdleScreen();
    clearMatrix();
    return;
  }

  unsigned long remaining = BREAK_DURATION - elapsed;
  int mins = remaining / 60000;
  int secs = (remaining % 60000) / 1000;

  lcd.setCursor(0, 0);
  lcd.print("Break time!     ");
  lcd.setCursor(0, 1);
  lcd.print("Back in: ");
  if (mins < 10) lcd.print("0");
  lcd.print(mins);
  lcd.print(":");
  if (secs < 10) lcd.print("0");
  lcd.print(secs);
  lcd.print(" ");
}

void runStats() {
  if (millis() - lastStatsSwitch > 3000) {
    lastStatsSwitch = millis();
    statsScreen++;
    if (statsScreen > 2) {
      currentState = IDLE;
      showIdleScreen();
      return;
    }
    showStatsScreen();
  }
}

void showStatsScreen() {
  lastStatsSwitch = millis();
  lcd.clear();
  if (statsScreen == 0) {
    lcd.setCursor(0, 0);
    lcd.print("Sessions done:");
    lcd.setCursor(0, 1);
    lcd.print(sessionsCompleted);
  } else if (statsScreen == 1) {
    lcd.setCursor(0, 0);
    lcd.print("Sessions broken:");
    lcd.setCursor(0, 1);
    lcd.print(sessionsBroken);
  } else if (statsScreen == 2) {
    lcd.setCursor(0, 0);
    lcd.print("Focus minutes:");
    lcd.setCursor(0, 1);
    lcd.print(totalFocusMinutes);
  }
}

void showIdleScreen() {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Place phone to");
  lcd.setCursor(0, 1);
  lcd.print("start focus :)");
}

void updateProgressBar(unsigned long elapsed, unsigned long total) {
  byte frame[8][12] = {};
  int ledsToLight = 96 - (int)map(elapsed, 0, total, 0, 96);
  ledsToLight = constrain(ledsToLight, 0, 96);
  int count = 0;
  for (int row = 0; row < 8 && count < ledsToLight; row++) {
    for (int col = 0; col < 12 && count < ledsToLight; col++) {
      frame[row][col] = 1;
      count++;
    }
  }
  matrix.renderBitmap(frame, 8, 12);
}

void clearMatrix() {
  byte frame[8][12] = {};
  matrix.renderBitmap(frame, 8, 12);
}

void flashMatrix() {
  static bool flashState = false;
  static unsigned long lastFlash = 0;
  if (millis() - lastFlash > 300) {
    flashState = !flashState;
    lastFlash = millis();
    byte frame[8][12] = {};
    if (flashState) {
      for (int r = 0; r < 8; r++)
        for (int c = 0; c < 12; c++)
          frame[r][c] = 1;
    }
    matrix.renderBitmap(frame, 8, 12);
  }
}

void playCompletionChime() {
  tone(BUZZER_PIN, 523, 200); delay(220);
  tone(BUZZER_PIN, 659, 200); delay(220);
  tone(BUZZER_PIN, 784, 200); delay(220);
  tone(BUZZER_PIN, 1047, 400); delay(450);
  noTone(BUZZER_PIN);
}

void playNagBuzz(unsigned long weaknessSeconds) {
  int freq = 440 + (weaknessSeconds * 20);
  freq = min(freq, 2000);
  int gapMs = map(weaknessSeconds, 0, 60, 400, 50);
  gapMs = max(gapMs, 50);
  tone(BUZZER_PIN, freq, 100);
  delay(100);
  noTone(BUZZER_PIN);
  delay(gapMs);
}`,
      videos: [
        { src: "https://streamable.com/e/tcquto?loop=1", title: "RFID-Enforced Focus Session Demo" },
      ],
    },
  },
  {
    id: 11,
    title: "LCD Runner: Arduino Dinosaur Game / Reconfigurable Button-Game Platform",
    description:
      "A one-button recreation of the Chrome dinosaur game on an Arduino R4, running on a 16x2 LCD with a buzzer for jumps and collisions.",
    image: "/projects/lcd-runner-cover.jpg",
    category: "electrical",
    tags: ["Arduino R4", "C++", "I2C LCD", "Buzzer", "Embedded Systems", "Game Firmware"],
    detail: {
      layout: "code",
      fullDescription:
        "This project recreates the classic Chrome dinosaur game entirely in firmware on an Arduino R4. The gameplay is deliberately simple: anytime you press the button, the character jumps. Time your jumps to clear the cacti (and duck-jump the birds) as the game steadily speeds up, and try to beat your saved high score.\n\nThe hardware is minimal, a single button for input, a 16x2 LCD (the 16-pin character display) for all the graphics, and a buzzer that chirps every time you jump and plays a short game-over tone the moment you hit a cactus and end the run. The runner, obstacles, and jump pose are all drawn as custom 5x8 LCD characters, and the game only redraws the cells that actually change so the animation stays smooth on the low-resolution display. The high score is written to EEPROM so it survives a power cycle.\n\nBecause everything lives in software, this same button-LCD-buzzer setup can become an entirely different game just by swapping the firmware, no rewiring required. For example, the same single-button input could drive a stacking game, where each press drops another rectangle onto a growing tower and the goal is to keep the stack aligned as it climbs higher. The physical build is a reusable one-button arcade platform; the firmware decides what game you're playing.",
      codeLanguage: "cpp",
      codeTitle: "lcd_runner.ino",
      secondCodeLanguage: "cpp",
      videos: [
        { src: "https://streamable.com/e/n5f8md?loop=1", title: "Dinosaur Game" },
        { src: "https://streamable.com/e/5vc83h?loop=1", title: "Stacker Game" },
      ],
      secondCodeTitle: "lcd_stacker.ino",
      secondCode: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <EEPROM.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

// ----- Pins -----
const int BUTTON_PIN = 7;
const int BUZZER_PIN = 8;

// ----- Game settings (try changing these!) -----
const int FIELD = 12;            // play area is columns 0-11
const int START_WIDTH = 5;       // starting block width
const int MAX_WIDTH = 5;         // widest a block can grow back to
const long START_SPEED = 220;    // ms per move at the start
const long MIN_SPEED = 55;       // fastest the game can get
const int EEPROM_ADDR = 4;       // different spot than the runner's high score

// ----- Custom characters -----
const byte BLOCK = 0;   // solid block (the moving one)
const byte TOWER = 1;   // outlined block (the one you stack onto)

byte blockSprite[8] = {0b11111, 0b11111, 0b11111, 0b11111, 0b11111, 0b11111, 0b11111, 0b11111};
byte towerSprite[8] = {0b11111, 0b10001, 0b10101, 0b10001, 0b10101, 0b10001, 0b11111, 0b00000};

// ----- Game state -----
enum State { TITLE, PLAYING, GAME_OVER };
State state = TITLE;

int prevStart, prevWidth;   // the block you're stacking onto (top row)
int curStart, curWidth;     // the moving block (bottom row)
int dir = 1;                // 1 = moving right, -1 = moving left
int score = 0;
int streak = 0;             // perfect drops in a row
uint16_t best = 0;
long tickLength = START_SPEED;
unsigned long lastTick = 0;

byte shown[2][16];
bool lastButton = HIGH;
unsigned long lastChange = 0;

// ----- Screen helpers -----
void putCell(int col, int row, byte ch) {
  if (shown[row][col] == ch) return;
  lcd.setCursor(col, row);
  lcd.write(ch);
  shown[row][col] = ch;
}

void clearScreen() {
  lcd.clear();
  for (int r = 0; r < 2; r++)
    for (int c = 0; c < 16; c++)
      shown[r][c] = ' ';
}

// ----- Button: true once per press -----
bool buttonPressed() {
  bool now = digitalRead(BUTTON_PIN);
  if (now != lastButton && millis() - lastChange > 30) {
    lastChange = millis();
    lastButton = now;
    return now == LOW;
  }
  return false;
}

// ----- Drawing -----
void drawField() {
  for (int c = 0; c < FIELD; c++) {
    bool inPrev = (c >= prevStart && c < prevStart + prevWidth);
    bool inCur  = (c >= curStart && c < curStart + curWidth);
    putCell(c, 0, inPrev ? TOWER : ' ');
    putCell(c, 1, inCur ? BLOCK : ' ');
  }
}

void drawHud() {
  putCell(FIELD, 0, '|');
  putCell(FIELD, 1, '|');

  char buf[4];
  snprintf(buf, sizeof(buf), "%3d", score);
  for (int i = 0; i < 3; i++) putCell(FIELD + 1 + i, 0, buf[i]);

  // stars show your perfect-drop streak
  for (int i = 0; i < 3; i++) putCell(FIELD + 1 + i, 1, i < streak ? '*' : ' ');
}

void showTitle() {
  clearScreen();
  lcd.setCursor(2, 0);
  lcd.print("LCD STACKER");
  lcd.setCursor(1, 1);
  lcd.print("Press to start");
}

// ----- Game logic -----
void startGame() {
  prevWidth = START_WIDTH;
  prevStart = (FIELD - START_WIDTH) / 2;
  curWidth = START_WIDTH;
  curStart = 0;
  dir = 1;
  score = 0;
  streak = 0;
  tickLength = START_SPEED;

  clearScreen();
  state = PLAYING;
  drawField();
  drawHud();
  lastTick = millis();
}

void moveBlock() {
  int next = curStart + dir;
  if (next < 0 || next + curWidth > FIELD) {
    dir = -dir;              // bounce off the wall
    next = curStart + dir;
  }
  curStart = next;
  drawField();
}

void gameOver() {
  state = GAME_OVER;
  tone(BUZZER_PIN, 300, 150);
  delay(170);
  tone(BUZZER_PIN, 180, 300);
  delay(700);

  if (score > best) {
    best = score;
    EEPROM.put(EEPROM_ADDR, best);
  }

  clearScreen();
  lcd.setCursor(0, 0);
  lcd.print("GAME OVER Lv ");
  lcd.print(score);
  lcd.setCursor(0, 1);
  lcd.print("Best: ");
  lcd.print(best);
}

void dropBlock() {
  int left  = max(curStart, prevStart);
  int right = min(curStart + curWidth, prevStart + prevWidth);
  int newWidth = right - left;
  bool perfect = (newWidth == prevWidth);

  // flash the part that gets chopped off
  if (!perfect) tone(BUZZER_PIN, 220, 120);
  for (int i = 0; i < 4; i++) {
    for (int c = curStart; c < curStart + curWidth; c++) {
      if (c < left || c >= right) putCell(c, 1, (i % 2 == 0) ? ' ' : BLOCK);
    }
    delay(90);
  }

  if (newWidth <= 0) {
    gameOver();
    return;
  }

  if (perfect) {
    streak++;
    tone(BUZZER_PIN, 1320, 80);
    if (streak >= 3) {
      streak = 0;
      if (newWidth < MAX_WIDTH) {
        newWidth++;                                   // reward: block grows back
        if (left + newWidth > FIELD) left--;
        delay(100);
        tone(BUZZER_PIN, 1760, 120);
      }
    }
  } else {
    streak = 0;
  }

  if (score < 999) score++;

  // the dropped block becomes the new target
  prevStart = left;
  prevWidth = newWidth;
  curWidth = newWidth;

  // next block starts from alternating sides
  if (score % 2 == 1) { curStart = 0; dir = 1; }
  else                { curStart = FIELD - curWidth; dir = -1; }

  tickLength = START_SPEED - score * 8;
  if (tickLength < MIN_SPEED) tickLength = MIN_SPEED;

  drawField();
  drawHud();
  lastTick = millis();
}

// ----- Main -----
void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  lcd.init();
  lcd.backlight();
  lcd.createChar(BLOCK, blockSprite);
  lcd.createChar(TOWER, towerSprite);

  EEPROM.get(EEPROM_ADDR, best);
  if (best > 999) best = 0;   // fresh memory reads as garbage

  showTitle();
}

void loop() {
  bool pressed = buttonPressed();

  if (state != PLAYING) {
    if (pressed) startGame();
    return;
  }

  if (pressed) {
    dropBlock();
    return;
  }

  if (millis() - lastTick >= (unsigned long)tickLength) {
    lastTick = millis();
    moveBlock();
  }
}
`,
      code: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <EEPROM.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

// ----- Pins -----
const int BUTTON_PIN = 7;
const int BUZZER_PIN = 8;

// ----- Game settings (try changing these!) -----
const int RUNNER_COL = 1;              // column the runner stays in
const int SCORE_COL = 12;              // score uses top row, columns 12-15
const int JUMP_TICKS = 4;              // how long a jump lasts
const int MIN_GAP = 5;                 // minimum space between obstacles
const long START_SPEED = 250;          // ms per step at the start
const long MIN_SPEED = 90;             // fastest the game can get

// ----- Custom character slots -----
const byte RUN1 = 0, RUN2 = 1, JUMP = 2, CACTUS = 3, BIRD = 4;
const byte EMPTY = ' ';

// ----- Sprites (5 wide x 8 tall, 1 = pixel on) -----
byte run1Sprite[8]   = {0b01110, 0b01110, 0b00100, 0b01110, 0b10101, 0b00100, 0b01010, 0b10001};
byte run2Sprite[8]   = {0b01110, 0b01110, 0b00100, 0b01110, 0b10101, 0b00100, 0b01010, 0b01010};
byte jumpSprite[8]   = {0b01110, 0b01110, 0b10101, 0b01110, 0b00100, 0b01010, 0b10001, 0b00000};
byte cactusSprite[8] = {0b00100, 0b00101, 0b10101, 0b10101, 0b10111, 0b11100, 0b00100, 0b00100};
byte birdSprite[8]   = {0b00000, 0b01000, 0b01100, 0b11111, 0b00110, 0b00000, 0b00000, 0b00000};

// ----- Game state -----
byte ground[16];     // obstacles on the bottom row
byte sky[16];        // obstacles on the top row
byte shown[2][16];   // what's currently on the screen (so we only redraw changes)

enum State { TITLE, PLAYING, GAME_OVER };
State state = TITLE;

int airTime = 0;     // > 0 means the runner is in the air
int score = 0;
uint16_t best = 0;
int gap = 0;         // steps since the last obstacle appeared
bool frame = false;  // switches between the two running frames
long tickLength = START_SPEED;
unsigned long lastTick = 0;

bool lastButton = HIGH;
unsigned long lastChange = 0;

// ----- Screen helpers -----
void putCell(int col, int row, byte ch) {
  if (shown[row][col] == ch) return;   // already showing this, skip
  lcd.setCursor(col, row);
  lcd.write(ch);
  shown[row][col] = ch;
}

void clearScreen() {
  lcd.clear();
  for (int r = 0; r < 2; r++)
    for (int c = 0; c < 16; c++)
      shown[r][c] = ' ';
}

// ----- Button: returns true once per press, ignores contact bounce -----
bool buttonPressed() {
  bool now = digitalRead(BUTTON_PIN);
  if (now != lastButton && millis() - lastChange > 30) {
    lastChange = millis();
    lastButton = now;
    return now == LOW;
  }
  return false;
}

// ----- Drawing -----
void drawGame() {
  for (int c = 0; c < 16; c++) {
    byte bottom = ground[c];
    byte top = sky[c];

    if (c == RUNNER_COL) {
      if (airTime > 0) top = JUMP;
      else bottom = frame ? RUN1 : RUN2;
    }

    putCell(c, 1, bottom);
    if (c < SCORE_COL) putCell(c, 0, top);  // birds hide behind the score
  }

  char buf[5];
  snprintf(buf, sizeof(buf), "%4d", score);
  for (int i = 0; i < 4; i++) putCell(SCORE_COL + i, 0, buf[i]);
}

void showTitle() {
  clearScreen();
  lcd.setCursor(2, 0);
  lcd.print("LCD RUNNER");
  lcd.setCursor(1, 1);
  lcd.print("Press to start");
}

// ----- Game logic -----
void startGame() {
  for (int c = 0; c < 16; c++) {
    ground[c] = EMPTY;
    sky[c] = EMPTY;
  }
  airTime = 0;
  score = 0;
  gap = 0;
  tickLength = START_SPEED;
  clearScreen();
  state = PLAYING;
  lastTick = millis();
  drawGame();
}

void spawnObstacle() {
  ground[15] = EMPTY;
  sky[15] = EMPTY;
  gap++;
  if (gap < MIN_GAP) return;

  if (random(100) < 35) {
    if (score > 30 && random(100) < 30) sky[15] = BIRD;
    else ground[15] = CACTUS;
    gap = 0;
  }
}

bool hitSomething() {
  if (airTime == 0 && ground[RUNNER_COL] == CACTUS) return true;
  if (airTime > 0 && sky[RUNNER_COL] == BIRD) return true;
  return false;
}

void gameOver() {
  state = GAME_OVER;
  putCell(RUNNER_COL, airTime > 0 ? 0 : 1, 'X');

  tone(BUZZER_PIN, 300, 150);
  delay(170);
  tone(BUZZER_PIN, 180, 300);
  delay(700);

  if (score > best) {
    best = score;
    EEPROM.put(0, best);
  }

  clearScreen();
  lcd.setCursor(0, 0);
  lcd.print("GAME OVER ");
  lcd.print(score);
  lcd.setCursor(0, 1);
  lcd.print("Best: ");
  lcd.print(best);
}

void gameTick() {
  // move everything one space left
  for (int c = 0; c < 15; c++) {
    ground[c] = ground[c + 1];
    sky[c] = sky[c + 1];
  }
  spawnObstacle();

  if (airTime > 0) airTime--;
  frame = !frame;

  if (score < 9999) score++;
  if (score % 50 == 0) tone(BUZZER_PIN, 1320, 60);  // milestone beep

  // speed up as the score rises
  tickLength = START_SPEED - score / 3;
  if (tickLength < MIN_SPEED) tickLength = MIN_SPEED;

  if (hitSomething()) {
    gameOver();
    return;
  }
  drawGame();
}

// ----- Main -----
void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  lcd.init();
  lcd.backlight();
  lcd.createChar(RUN1, run1Sprite);
  lcd.createChar(RUN2, run2Sprite);
  lcd.createChar(JUMP, jumpSprite);
  lcd.createChar(CACTUS, cactusSprite);
  lcd.createChar(BIRD, birdSprite);

  EEPROM.get(0, best);
  if (best > 9999) best = 0;   // fresh memory reads as garbage

  randomSeed(analogRead(A0));
  showTitle();
}

void loop() {
  bool pressed = buttonPressed();

  if (state != PLAYING) {
    if (pressed) startGame();
    return;
  }

  if (pressed && airTime == 0) {
    airTime = JUMP_TICKS;
    tone(BUZZER_PIN, 880, 40);
    if (hitSomething()) {
      gameOver();
      return;
    }
    drawGame();
  }

  if (state == PLAYING && millis() - lastTick >= (unsigned long)tickLength) {
    lastTick = millis();
    gameTick();
  }
}`,
      videos: [],
    },
  },
]

// Display order: Formula SAE, Retrodog, Boeing 737, Timed Phone Jail, LCD Runner, RBR, FEM, Motion-Activated Alarm (PIR)
const projectDisplayOrder = [1, 10, 7, 8, 9, 5, 11, 2, 3, 4]
export const projects: Project[] = projectDisplayOrder
  .map((id) => projectsList.find((p) => p.id === id))
  .filter((p): p is Project => Boolean(p))

export const categories = [
  { id: "all", label: "All" },
  { id: "electrical", label: "Electrical" },
  { id: "mechanical", label: "Mechanical" },
  { id: "robotics", label: "Robotics" },
]

export const research: Project[] = [
  {
    id: 101,
    title: "G-Force Trainer: A Gyroscopic Wrist Trainer for Astronauts",
    description:
      "A compact (<0.1 kg) passive gyroscopic device for localized wrist and forearm conditioning in microgravity, doubling as a force-feedback controller for simulation software.",
    image: "/research/gforce-cover.png",
    category: "engineering",
    tags: ["Aerospace", "Gyroscopic Mechanics", "Human Factors", "Hardware"],
    detail: {
      layout: "text",
      institution: "Engineering Research",
      overview:
        "Long-duration space missions rely on bulky, high-power exercise machines that are built almost entirely for large muscle groups like the legs, core, and back. That leaves a real gap in mission readiness: astronauts don't have a compact, low-overhead way to keep their hands and forearms in shape. Over time, the small muscles they depend on for precise tool handling, spacewalks, and emergency equipment use start to weaken, and adding another motorized machine just isn't practical when every gram of mass, watt of power, and potential point of failure counts.\n\nSo I set out to design and prototype a small, lightweight (under 0.1 kg) passive gyroscopic trainer that gives astronauts targeted wrist and forearm conditioning without any motors or added power draw. On top of the physical training, it doubles as a force-feedback controller for microgravity simulation software, so the same device that keeps astronauts physically sharp can also plug into digital training.",
    },
  },
  {
    id: 102,
    title: "HIV Trends in Incarcerated Populations",
    description:
      "Aggregated and analyzed epidemiological data on HIV in correctional facilities, deploying a secure web platform to visualize findings for public health researchers.",
    image: "/research/hiv-research-cover.png",
    category: "non-engineering",
    tags: ["Public Health", "Epidemiology", "Data Analysis", "Web Platform"],
    detail: {
      layout: "text",
      institution: "Warren Alpert Medical School of Brown University",
      overview:
        "Incarcerated populations deal with much higher rates of chronic infectious diseases like HIV, but the data tracking inside correctional facilities is scattered, largely qualitative, and hard for public health officials to actually use. Researchers don't have a unified, secure place to screen the medical literature, pull together inmates' firsthand accounts, and see the socioeconomic and systemic barriers to care laid out clearly.\n\nMy work focused on aggregating, screening, and analyzing epidemiological data on HIV prevalence, how it spreads, and the barriers to healthcare access within these facilities. From there, I turned the qualitative findings into clearer, actionable insights and built a secure web platform to visualize everything for public health researchers. This research is currently being prepared for publication, and the systematic review has been officially registered in PROSPERO, the international database maintained by the University of York that publicly logs systematic review protocols before results are published to keep the process transparent and prevent duplicate work.",
    },
  },
]

export const researchCategories = [
  { id: "all", label: "All" },
  { id: "engineering", label: "Engineering" },
  { id: "non-engineering", label: "Non-Engineering" },
]
