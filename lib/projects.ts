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
      videos: { src: string; title: string }[]
    }
  | {
      layout: "gallery"
      fullDescription: string
      skills: { title: string; description: string }[]
      images: { src: string; alt: string }[]
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
        src: "/projects/fsae-assembly.png",
        alt: "CAD render of the fully assembled Formula SAE drivetrain mounted between the sprocket and brake disc.",
      },
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
    id: 8,
    title: "Boeing 737 3D Model",
    description:
      "A detailed 3D model of the Boeing 737 built entirely in Autodesk Fusion 360, constructed from official blueprint reference images.",
    image: "/projects/boeing1.jpg",
    category: "mechanical",
    tags: ["Autodesk Fusion 360", "3D Modeling", "Solid Modeling", "HDRI Rendering"],
    detail: {
      layout: "gallery",
      fullDescription:
        "A detailed 3D model of the Boeing 737 built entirely in Autodesk Fusion 360. The project began by importing official blueprint reference images into Fusion, aligning them to orthographic planes, and using them as a guide to construct each component from scratch — fuselage, wings, engines, and tail assembly.",
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
        { src: "/projects/boeing5.jpg", alt: "Boeing 737 3D model banking with motion-blurred sunset background." },
        { src: "/projects/boeing4.jpg", alt: "Front view of the Boeing 737 3D model showing the nose, engines, and wings." },
        { src: "/projects/boeing3.jpg", alt: "Underside view of the Boeing 737 3D model flying through clouds." },
        { src: "/projects/boeing2.jpg", alt: "Side profile of the Boeing 737 3D model against a soft sunset sky." },
        { src: "/projects/boeing6.jpg", alt: "Top-down angled view of the Boeing 737 3D model in flight." },
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
]

// Display order: Formula SAE, Retrodog, Boeing 737, Timed Phone Jail, RBR, FEM, Motion-Activated Alarm (PIR)
const projectDisplayOrder = [1, 7, 8, 5, 2, 3, 4]
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
