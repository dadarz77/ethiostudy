/* Content: Grade 12 Physics — Unit 5 (part C): Basics of Electronics, topics 6-7 */
window.Lessons = window.Lessons || {};

Lessons["g12-physics-up5-t6"] = {
  overview: "Logic gates are the alphabet of digital electronics: tiny circuits that answer yes/no questions about voltages. Seven families — AND, OR, NOT and their derivatives — compose every processor, phone and traffic-light controller ever built.",
  objectives: [
    "State the function and symbol of AND, OR, NOT gates",
    "Build and read truth tables for 2-input gates",
    "Explain NAND/NOR universality with worked equivalents",
    "Combine gates into simple circuits ( burglar alarm style)",
    "Relate logic levels to transistor states (0 V / 5 V)"
  ],
  simple: "<b>Decisions in silicon.</b> High voltage = 1, low = 0. AND says yes only when every input agrees; OR when any does; NOT flips. That is the whole vocabulary. From these, engineers assembled calculators, then computers — any digital behaviour at all is gates wired enough times.",
  detailed: "<p><b>Three primitives.</b> AND: Y = A·B — true only for 1+1. OR: Y = A+B — true for any 1. NOT: Y = Ā — the inverter. Two-transistor-level views: a series pair pulls the output down only when both bases conduct (AND with inversion available); parallel pairs OR. CMOS implementations use complementary pull-up pull-down networks — gates of 4-6 transistors.</p><p><b>Truth tables.</b> For n inputs there are 2ⁿ rows: 2 inputs → 4 rows, 3 → 8. Every combinational function is one column of 0s and 1s; every column is some gate network. EX-OR (Y = A⊕B = AB̄ + ĀB) is the odd-parity detector; EX-NOR the equality checker.</p><p><b>Universal gates.</b> NAND alone implements all three primitives: NOT = NAND with inputs tied; AND = NAND+inverter; OR = inverting inputs then NANDing (De Morgan: A+B = (Ā·B̄)̄). Hence chip factories ship trays of 7400 (quad NAND) and designers build anything from them. NOR is equally universal.</p><p><b>De Morgan's theorems</b> — the handshakes between the families: (A·B)̄ = Ā + B̄ and (A+B)̄ = Ā·B̄. Read in plain words: negating a conjunction equals the disjunction of the negations. Simplifying logic and converting gate types lean on these two identities.</p><p><b>Design example (exam classic):</b> a cold-room alarm sounds when the door is closed (D=1) AND (temperature high T=1 OR sensor-fault F=1): Y = D·(T+F). Realise it with one OR feeding one AND; count the gates; rebuild it from four NANDs using the equivalences. Timing, hazards and fan-out are next-level topics beyond the syllabus.</p>",
  keyTerms: [
    { term: "Logic 1 / 0", def: "high (≈5 V/3.3 V) / low (≈0 V) levels" },
    { term: "Truth table", def: "output for every input combination" },
    { term: "Universal gate", def: "NAND or NOR: can build every function" },
    { term: "De Morgan's theorems", def: "(AB)̄ = Ā+B̄; (A+B)̄ = Ā·B̄" },
    { term: "EX-OR", def: "different-inputs detector (parity)" },
    { term: "Fan-out", def: "how many gate inputs one output drives" }
  ],
  formulas: [
    { name: "AND / OR / NOT", formula: "Y = A·B | Y = A+B | Y = Ā", meaning: "conjunction, disjunction, negation", vars: [{ name: "·/+ ", meaning: "logic multiply/add, not arithmetic" }], when: "every digital spec" },
    { name: "EX-OR", formula: "Y = A⊕B = AB̄ + ĀB", meaning: "true when inputs differ", vars: [{ name: "⊕", meaning: "modulo-2 sum" }], when: "parity, comparators, adders" },
    { name: "De Morgan", formula: "(A·B)̄ = Ā + B̄", meaning: "swap AND/OR across a global negation", vars: [{ name: "overline", meaning: "complement of the whole expression" }], when: "gate minimisation, NAND-only builds" }
  ],
  workedExamples: [
    { problem: "Truth table for Y = A·B̄ + C.", calculation: "Y = 1 when C = 1 (four rows: 001, 011, 101, 111) or when A = 1 and B = 0 (adds 100). Enumerating: 000→0, 001→1, 010→0, 011→1, 100→1, 101→1, 110→0, 111→1.", answer: "Five of eight rows give 1." },
    { problem: "Build AND from NANDs only.", calculation: "NAND(A,B) then NAND its output with itself (inverter): ((AB)̄)̄ = AB.", answer: "Two NAND ICs: classic 7400 wiring." },
    { problem: "Y = A + B using only NAND gates (no NOT).", calculation: "Feed A and B each into tied-input NANDs (inverters), then NAND those: (Ā·B̄)̄ = A+B by De Morgan.", answer: "Three NANDs — the De Morgan trick." },
    { problem: "Alarm: sound if (door AND window) OR motion. Write and gate-count.", calculation: "Y = D·W + M: one AND + one OR = two 2-input gates.", answer: "2 IC gates; with NANDs only: 3." }
  ],
  commonMistakes: [
    "Reading A+B as arithmetic 2 when both inputs are 1",
    "Forgetting EX-OR has no single-letter algebra beyond AB̄ + ĀB",
    "Applying De Morgan to the operator but forgetting to negate each variable",
    "Tying a NAND input high (through resistor) when intending an inverter — the trick needs both inputs joined",
    "Mixing logic families' voltage levels (3.3 V CMOS into 5 V TTL)"
  ],
  applications: [
    "Half/full adders: EX-OR + AND build every computer's arithmetic",
    "Security panels: sensor combinations are gate networks",
    "Traffic light sequencing (with counters built from latches)",
    "Error detection: parity generators in modems and RAM"
  ],
  summary: "AND/OR/NOT plus De Morgan: the complete decision toolkit. NAND alone suffices — that's why it dominates chips.",
  visuals: [],
  questions: [
    { type: "mcq", q: "AND gate output is 1 when:", options: ["any input 1", "all inputs 1", "exactly one 1", "inputs differ"], answer: 1, difficulty: 1, explanation: "Conjunction: every input must agree." },
    { type: "mcq", q: "NOT of A+B equals:", options: ["Ā+B̄", "Ā·B̄", "A·B", "A̅+B"], answer: 1, difficulty: 1, explanation: "De Morgan: NOR = AND of complements." },
    { type: "mcq", q: "A 3-input gate network has how many truth-table rows?", options: ["3", "6", "8", "9"], answer: 2, difficulty: 1, explanation: "2³ = 8 combinations." },
    { type: "mcq", q: "EX-OR is 1 when inputs:", options: ["match", "differ", "both 0", "both 1"], answer: 1, difficulty: 2, explanation: "The inequality/parity detector." },
    { type: "mcq", q: "Universal gate family:", options: ["AND only", "NAND and NOR", "OR and XOR", "NOT only"], answer: 1, difficulty: 2, explanation: "Either alone constructs all others." },
    { type: "mcq", q: "A two-input NAND wired as an inverter needs:", options: ["one input tied high or both joined", "a capacitor", "two chips", "nothing"], answer: 0, difficulty: 2, explanation: "Tie inputs: (A·A)̄ = Ā; or hold one at 1." },
    { type: "mcq", q: "Y = A·B + C·D uses how many 2-input IC gates minimum?", options: ["3", "4", "5", "6"], answer: 0, difficulty: 3, explanation: "Two ANDs (AB, CD) and one OR to combine them: 3 gates." },
    { type: "mcq", q: "NAND-only AND needs:", options: ["one extra NAND as inverter", "no extra", "three", "impossible"], answer: 0, difficulty: 3, explanation: "NAND then NAND-as-NOT: ((AB)̄)̄ = AB." }
  ]
};

Lessons["g12-physics-up5-t7"] = {
  overview: "Electronics leaves the textbook in this topic: sensors convert the physical world to voltages, signal chains condition them, and actuators convert decisions back into motion, heat or light. The whole input-process-output loop of modern devices in one view.",
  objectives: [
    "Identify sensor elements: LDR, thermistor, microphone, photodiode",
    "Describe a signal chain: sensor → amplifier → processor → output",
    "Explain potential-divider sensing circuits",
    "Relay/optocoupler isolation and protection",
    "Analyse real devices (thermostat, camera, phone)"
  ],
  simple: "<b>Sense, think, act.</b> A thermistor's resistance changes with temperature; wired as a divider, that change becomes a voltage; an amplifier or ADC reads it; a comparator or microcontroller decides; a relay or transistor drives the heater. Every automatic device — fridge, phone, car engine — is that loop, repeated with many sensors.",
  detailed: "<p><b>Sensors are transducers.</b> LDR: light drops cadmium-sulfide resistance from MΩ to kΩ. NTC thermistor: heat cuts resistance ~4%/°C. Microphone: sound pressure → tiny voltage (capacitor plate vibrating). Photodiode: reverse leakage scales with illumination — light meter in every phone. Hall sensors: magnetic field → voltage for wheel-speed and compass functions.</p><p><b>The divider trick.</b> Pair the sensor with a fixed resistor across the supply: V_out = V·R_fixed/(R_fixed+R_sensor) (order decides direction of response). At the chosen operating point, one decade of sensor resistance ≈ useful voltage swing. This one circuit is 80% of sensor front-ends.</p><p><b>Conditioning and decisions.</b> Op-amps amplify µV signals (instrumentation amps reject noise); comparators turn analog levels into clean 1/0 (a thermostat is a comparator with hysteresis to stop chattering); ADCs digitise for microcontrollers where software does the arithmetic a gate network once did.</p><p><b>Outputs and isolation.</b> Piezo buzzers, motors, LEDs, heaters, relays: electronics meets power. Relays and optocouplers separate the sensitive 3.3 V logic from 230 V mains hazards — and flyback diodes catch the inductive kick that otherwise kills the driving transistor. PWM dims lamps and controls motor speed without wasting energy in series resistance.</p><p><b>Full device anatomy (exam essay):</b> digital camera = photodiode array → per-pixel amplifiers → ADC → processor (focus, white balance) → display/storage. Solar streetlight in Ethiopian villages: panel (photodiode physics, Unit 5.1) → charge controller (comparator/PWM) → battery → dusk switch (LDR divider) → LED driver. Name the blocks, and the physics inside each.</p>",
  keyTerms: [
    { term: "Transducer", def: "device converting one energy form to electrical" },
    { term: "NTC thermistor", def: "resistance falls as temperature rises" },
    { term: "LDR", def: "light-dependent resistor" },
    { term: "Comparator", def: "output snaps to rails by which input leads" },
    { term: "ADC", def: "analog-to-digital converter" },
    { term: "Optocoupler", def: "LED + phototransistor bridging grounds in light only" },
    { term: "Flyback diode", def: "catch diode across inductive loads" }
  ],
  formulas: [
    { name: "Divider output", formula: "V_out = V_s·R₂/(R₁+R₂)", meaning: "tap between two resistors", vars: [{ name: "R₂", meaning: "the resistor the output sits across" }], when: "every resistive sensor front-end" },
    { name: "PWM average", formula: "V_avg = D·V_on", meaning: "duty fraction sets the mean", vars: [{ name: "D", meaning: "on-time/period, 0–1" }], when: "dimming, motor speed, heaters" }
  ],
  workedExamples: [
    { problem: "NTC (10 kΩ at 25 °C, ~4%/°C) with 10 kΩ fixed across 5 V: output at 25 °C and at 50 °C?", calculation: "25 °C: equal split → 2.5 V. 50 °C: R ≈ 10k×0.96²⁵·… ≈ 3.6 kΩ → V = 5·10/(10+3.6) = 3.68 V.", answer: "Roughly 2.5 → 3.7 V across the room range — plenty for an ADC." },
    { problem: "Dusk lamp: LDR 20 kΩ (day) / 1 MΩ (night), divider to 6 V, trip at 4.0 V on the LDR side. Verify.", given: "V_LDR = 6·R_LDR/(R_LDR + R)", calculation: "R = 100 kΩ: night 6×1000/1100? use LDR top: V = 6·R_L/(R_L+100k): day 6×20/120 = 1 V; night 6×1000/1100 = 5.45 V.", answer: "4 V threshold falls between 1 V and 5.45 V: comparator flips at twilight." },
    { problem: "Motor PWM at 20 kHz, 30% duty from 12 V drive. Average voltage?", calculation: "V_avg = 0.3 × 12 = 3.6 V.", answer: "3.6 V equivalent, but the driver transistor wastes near nothing (fully on/off)." },
    { problem: "Relay coil 200 Ω on 5 V: current, and why a flyback diode?", calculation: "I = 25 mA steady; on switch-off the collapsing field drives huge reverse voltage (V = −L dI/dt).", answer: "25 mA; the diode clamps the kick to ~0.7 V, saving the transistor." }
  ],
  commonMistakes: [
    "Placing the sensor in the divider arm that gives the wrong direction of response",
    "Forgetting hysteresis: comparators chatter at threshold without it",
    "Driving relays/motors from logic without a transistor or driver IC",
    "Omitting the flyback diode and blaming mystery resets",
    "Sampling slow ADCs too fast, or filtering noise with luck instead of capacitors"
  ],
  applications: [
    "Thermostats and refrigerators (NTC + comparator)",
    "Phone auto-brightness (ambient LDR + software)",
    "Solar home systems across rural Ethiopia (panel + controller + battery)",
    "Car wheel-speed ABS (Hall sensors + counters)"
  ],
  summary: "Sensor → divider/amp → decision → driver. The loop repeats in every automatic device; know each block's physics.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A transducer always:", options: ["amplifies", "converts a physical quantity to an electrical signal", "stores data", "rectifies"], answer: 1, difficulty: 1, explanation: "Sense the world, output volts/resistance change." },
    { type: "mcq", q: "An NTC thermistor's resistance with heating:", options: ["rises", "falls", "constant", "oscillates"], answer: 1, difficulty: 1, explanation: "Negative Temperature Coefficient." },
    { type: "mcq", q: "The voltage-divider sensor circuit outputs:", options: ["constant V", "a level set by the sensor's resistance ratio", "AC always", "zero"], answer: 1, difficulty: 1, explanation: "Sensor resistance tilts the split." },
    { type: "mcq", q: "A comparator is essentially:", options: ["a 1-bit ADC", "an amplifier", "a filter", "a memory"], answer: 0, difficulty: 2, explanation: "It snaps analog difference to a hard 0/1." },
    { type: "mcq", q: "Hysteresis in a thermostat exists to:", options: ["save battery", "prevent rapid on/off chatter near the setpoint", "increase accuracy forever", "boost gain"], answer: 1, difficulty: 2, explanation: "A deadband stops relay-frying oscillation." },
    { type: "mcq", q: "PWM controls motor speed efficiently because the transistor is:", options: ["partially conductive", "only fully on or fully off", "bypassed", "removed"], answer: 1, difficulty: 3, explanation: "Switching wastes little; series dropping resistors waste V×I." },
    { type: "mcq", q: "LDR 50 kΩ with 50 kΩ fixed on 6 V, output tapped across the fixed resistor. Bright day (LDR drops to 5 kΩ): output?", options: ["0.55 V", "5.45 V", "3 V", "6 V"], answer: 1, difficulty: 3, explanation: "V = 6×50/(50+5) = 5.45 V: light shrinks the sensor's share, raising the fixed-resistor tap." },
    { type: "mcq", q: "An optocoupler isolates circuits using:", options: ["a transformer", "light across a gap", "radio waves", "shared ground"], answer: 1, difficulty: 3, explanation: "LED emits, phototransistor receives — no metal path." }
  ]
};
