/* Content: Grade 9 Physics — Unit 4: Force, Work, Energy and Power (topic 1) */
window.Lessons = window.Lessons || {};

Lessons["g9-physics-up4-t1"] = {
  overview: "Why does a passenger lurch forward when the bus brakes? Why does a rocket work in empty space? Newton's three laws — the most successful rules in school physics — answer with one idea: forces change motion, never sustain it.",
  objectives: [
    "Define force, its effects and its unit (newton)",
    "State and apply Newton's three laws of motion",
    "Use F = ma for quantitative problems",
    "Distinguish mass from weight (W = mg)",
    "Draw free-body diagrams for simple situations"
  ],
  simple: "A <b>force</b> is a push or pull (N) that can start, stop, speed up, slow down, bend or squeeze a body. <b>Newton I (inertia):</b> without a NET force, velocity stays as it is — resting stays resting, moving keeps moving (the bus-brake lurch: your body obeys the first law, the bus doesn't wait). <b>Newton II:</b> F = ma — net force makes acceleration: 12 N on 3 kg → 4 m/s². <b>Newton III:</b> every action force has an equal, opposite reaction force on the OTHER body (walking: you push Earth back, Earth pushes you forward). <b>Mass</b> = kg of stuff (inertia, universal); <b>weight</b> = gravity's pull W = mg (≈10 N/kg here).",
  detailed: "<p><b>Force and net force:</b> measured in newtons (1 N gives 1 kg an acceleration of 1 m/s²) with a spring balance; a VECTOR — add forces head-to-tail with direction. The <b>resultant</b> is what the first law cares about: balanced forces (equal and opposite) → zero resultant → motion unchanged; unbalanced → acceleration in the resultant's direction. Free-body diagrams: draw the body alone, arrow every force on it (weight always down, normal perpendicular to surface, friction opposing slipping, tension along ropes), then sum along the motion line.</p><p><b>First law (inertia):</b> a body keeps its velocity unless a net force acts. This killed Aristotle's 2000-year-old intuition that force sustains motion — Galileo's thought experiment (a ball on a frictionless level plane rolls forever) and Newton's law replace it: motion needs no maintainer; CHANGE of motion does. Seatbelts are the law's practical face: the car decelerates by braking force; you decelerate only when the belt supplies YOUR force — otherwise the dashboard does, less politely. Mass measures inertia: a loaded truck resists acceleration and stopping more than a scooter (same force, more mass, less a).</p><p><b>Second law:</b> a = F_net/m, written F = ma — the course's calculation engine. 12 N net on 3 kg → 4 m/s²; to accelerate 1000 kg at 2 m/s² needs 2,000 N (why trucks need big engines). With several forces: resolve F_net first (friction subtracts), then divide. Weight problems are a special case: gravity's force on mass m is <b>W = mg</b>, so free fall has a = g regardless of m (F = ma with F = mg: the m cancels — SUVAT's universality DERIVED at last).</p><p><b>Mass vs weight:</b> mass = quantity of matter/inertia, kg, unchanged on the Moon; weight = the gravitational force on it, newtons, W = mg — your 60 kg self weighs ≈600 N on Earth, ≈100 N on the Moon (g there is 1/6), same 60 kg. Spring balances read weight (they measure force); beam balances compare mass — a classic exam separation.</p><p><b>Third law:</b> forces come in interaction pairs — if A pushes B, B pushes A equally and oppositely, SAME TYPE, DIFFERENT BODY (the pair never cancels because they act on different objects — the most misunderstood sentence in mechanics). Walking: shoe pushes ground backward, ground pushes you forward (on ice the pair's partner fails — no friction to push off). Swimming, rocketry (engine pushes gas down, gas pushes rocket up — no air needed, which is why rockets work in vacuum), a book on a table (Earth pulls book down; book pulls Earth up — that's the pair; the table's normal force is NOT the pair's partner, it just happens to balance weight — top-tier exam trap). Recoil of a gun, the kick of a hosepipe: the same pair felt on YOUR body.</p><p>Finally friction, the everyday unbalanced force: static friction holds (matches your push up to a limit), kinetic friction opposes sliding (~constant), always parallel to the surface and opposing relative motion (or its tendency). It's why 'no net force' rarely happens outside ideal labs — and why lubrication matters to every machine this course touches.</p>",
  keyTerms: [
    { term: "Force", def: "Push/pull in newtons; vector; changes motion" },
    { term: "Net force", def: "Vector sum — the F in F = ma" },
    { term: "Inertia", def: "Resistance to change of velocity; measured by mass" },
    { term: "Free-body diagram", def: "The body alone with every force arrowed" },
    { term: "Weight", def: "Gravity's force W = mg (N) — not mass" },
    { term: "Action–reaction pair", def: "Equal, opposite, same type, on different bodies" },
    { term: "Friction", def: "Surface force opposing slipping" }
  ],
  formulas: [
    { name: "Second law", formula: "F_net = m × a", meaning: "net force per mass sets acceleration", when: "any unbalanced-force problem", example: "friction 4 N against 10 N pull on 2 kg → a = (10−4)/2 = 3 m/s²" },
    { name: "Weight", formula: "W = m × g", meaning: "gravitational force on a mass", when: "vertical forces, free fall", example: "50 kg → 500 N (g = 10)" }
  ],
  workedExamples: [
    {
      problem: "A 1,200 kg car accelerates from 0 to 25 m/s in 10 s. Driving force needed (ignore friction)?",
      calculation: "a = 25/10 = 2.5; F = 1200 × 2.5",
      answer: "3,000 N"
    },
    {
      problem: "5 kg box pulled by 30 N with 10 N friction. Acceleration?",
      calculation: "F_net = 30 − 10 = 20 N; a = 20/5",
      answer: "4 m/s² in the pull direction"
    },
    {
      problem: "An astronaut + suit: mass 100 kg. Weight on Earth? Moon (g = 1.6)? Mass on Moon?",
      calculation: "W = mg",
      answer: "1,000 N; 160 N; still 100 kg — mass travels, weight depends on g"
    },
    {
      problem: "Explain the book–table pair trap: is the table's push the reaction to weight?",
      answer: "No — weight's partner is the book pulling the EARTH upward gravitationally; the normal force is a contact force on the same book that merely balances weight (equilibrium, not a 3rd-law pair)"
    }
  ],
  commonMistakes: [
    "Saying 'no force → no motion' (first law: constant velocity needs no force — friction hid this from Aristotle)",
    "Writing F = ma without checking F is the NET force",
    "Calling kg a weight unit (kg = mass; weight is N)",
    "Treating balanced action/reaction forces as cancelling (different bodies!)",
    "Pairing weight with the normal force as a Newton-III pair",
    "Believing rockets push against the air"
  ],
  applications: [
    "Seatbelts, headrests and airbags are first-law engineering (extend your stopping time/distance)",
    "Truck loading limits: more mass → same force means less acceleration AND longer braking",
    "Ethiopian Airlines jet thrust sizing is F = ma at 500 kN scale",
    "Walking/tying/runs on friction's action–reaction pair — icy roads remove the partner",
    "Weighing scales at the market actually measure weight and display kg assuming Earth's g"
  ],
  summary: "Forces (N, vectors) change motion rather than sustain it. I: no net force → velocity constant (inertia; mass measures it). II: F_net = ma — resolve forces, then compute; weight W = mg is its gravity case, so all fall alike. III: interaction pairs equal, opposite, on different bodies — walking, rockets, recoil. Mass is kg everywhere; weight is the local pull.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Newton's first law says a moving object with no net force will:", options: ["stop gradually", "keep constant velocity", "accelerate", "slow to rest"], answer: 1, difficulty: 1, explanation: "Changing velocity — not moving — needs force." },
    { type: "mcq", q: "1 N is the force giving 1 kg an acceleration of:", options: ["1 km/h²", "1 m/s²", "10 m/s²", "0.1 m/s²"], answer: 1, difficulty: 1, explanation: "Definition from F = ma." },
    { type: "mcq", q: "Mass 8 kg, net force 24 N. Acceleration:", options: ["3 m/s²", "192 m/s²", "0.33 m/s²", "32 m/s²"], answer: 0, difficulty: 1, explanation: "a = F/m." },
    { type: "mcq", q: "Your weight of 600 N corresponds (g = 10) to a mass of:", options: ["6 kg", "60 kg", "600 kg", "6,000 kg"], answer: 1, difficulty: 1, explanation: "m = W/g." },
    { type: "mcq", q: "The action–reaction pair acts on:", options: ["the same body, cancelling", "two different bodies", "only moving bodies", "the ground only"], answer: 1, difficulty: 3, explanation: "Different bodies — so never balanced by pairing." },
    { type: "mcq", q: "A rocket accelerates in space because:", options: ["it pushes the air", "exhaust pushes back on the rocket", "vacuum sucks it", "gravity pulls it on"], answer: 1, difficulty: 2, explanation: "3rd law between rocket and its own exhaust." },
    { type: "mcq", q: "Why do you lurch forward when a bus brakes?", options: ["forward force appears", "your body keeps its velocity (inertia)", "gravity shifts", "the seat pushes you"], answer: 1, difficulty: 2, explanation: "Bus slows; you continue until the belt stops you." },
    { type: "mcq", q: "20 N pull, 8 N friction, 4 kg block. Acceleration:", options: ["5 m/s²", "3 m/s²", "2 m/s²", "7 m/s²"], answer: 1, difficulty: 2, explanation: "F_net = 12 N → a = 3." },
    { type: "mcq", q: "A spring balance technically measures:", options: ["mass", "weight (force)", "volume", "inertia"], answer: 1, difficulty: 3, explanation: "It senses stretch from force — kg display assumes g." },
    { type: "mcq", q: "On the Moon, a 10 kg object has:", options: ["mass 1.6 kg", "weight ~16 N, mass 10 kg", "weight 100 N", "no weight, no mass"], answer: 1, difficulty: 2, explanation: "g_moon ≈ 1.6 → W = 16 N; mass unchanged." }
  ]
};

Lessons["g9-physics-up4-t2"] = {
  overview: "Energy is physics's single currency: it moves from a dammed lake to a phone battery to your muscles without ever being created or destroyed. Work is the transfer mechanism, power is how fast it happens — and this lesson puts a number on all three.",
  objectives: [
    "Define work as force × distance in the force's direction (joule)",
    "Recognize when no work is done (perpendicular force, no motion)",
    "Compute kinetic and gravitational potential energy",
    "Apply conservation of energy to falls and slopes",
    "Define and calculate power (watt) in several ways"
  ],
  simple: "<b>Work = F × d</b> — only when force moves its point of application ALONG the motion (1 J = 1 N·m). Hold a heavy bag still: zero work (no distance!) — physics is stricter than fatigue. Moving against gravity stores <b>potential energy EP = mgh</b>; motion carries <b>kinetic energy EK = ½mv²</b>. Energy converts but never vanishes: a 10 m drop turns every joule of EP into EK (v = √2gh ≈ 14 m/s no matter the mass). <b>Power = work ÷ time</b> (watt) — the same job in half the time is twice the power; engines are sold in kW (1 kW ≈ 1.34 hp).",
  detailed: "<p><b>Work done:</b> W = F·d when force and displacement align; only the force COMPONENT along the motion counts (W = Fd cosθ at angles — Grade 10 rigor, flag it). Three no-work situations: force but no movement (holding a load — your muscles tire chemically, but on the BOX no work is done), motion but force perpendicular (the Moon orbits Earth with gravity doing zero work — centripetal force never along velocity; carrying a tray level across a room: your lift is vertical, walk horizontal → zero work on the tray), and zero force (coasting at constant velocity — the first law on a budget). Unit: joule = newton-metre. Work on an object = energy it gains: the transfer-accounting link between forces and the next paragraphs.</p><p><b>Energy forms (Grade 9 stock):</b> <b>kinetic</b> EK = ½mv² — motion energy, quadratic in speed (double speed → four times the energy → four times the crash damage and braking work; the deep reason behind speed limits, meeting Unit 3's stopping distance from the money side). <b>Gravitational potential</b> EP = mgh — stored by lifting against gravity (work done TO lift = energy stored). Also elastic PE (stretched bow, compressed spring), chemical (food, fuel, battery), thermal, sound, light, electrical, nuclear. Energy is conserved — cannot be created or destroyed, only transferred or transformed (the first law of thermodynamics by another name); 'energy crisis' really means dissipation: useful energy degrading to spread-out thermal that can't reassemble (why perpetual motion machines stay imaginary — every claimed design hides either a leak or a battery).</p><p><b>Conservation in action:</b> frictionless roller-coaster logic — drop height fixes final speed whatever the route: mgh = ½mv² → v = √(2gh). A 10 kg sack falls from 5 m: EP = 500 J → just before landing EK = 500 J, v = 10 m/s (mass cancels — Galileo again, now with accounting). Pendulum: EP max at the ends, EK max at the bottom, and the swing's slow decay is energy leaking to air drag and pivot friction as heat — dissipation, not destruction. Real machines: energy OUT = energy IN × efficiency; efficiency = useful out ÷ total in × 100% — an incandescent bulb is ~5% light / 95% heat (why LEDs won), a petrol engine ~25–30% to the wheels.</p><p><b>Power:</b> rate of doing work (or transferring energy): P = W/t = E/t, watt = J/s. Also P = F·v for steady motion — a 30 kW engine pulling at 20 m/s delivers 1,500 N of thrust; climbing stairs twice as fast doubles YOUR power (same work, half time). Horsepower: 1 hp ≈ 746 W; water-pump ads in the market are actually quoting kW or hp. Kilowatt-hour (billing unit!): 1 kWh = 3.6 MJ of energy — the household meter counts joule-transfers, and '1 unit' = what a 1 kW heater burns in an hour. Ethiopia's dams priced by the kWh tie this page directly to your family's bill.</p>",
  keyTerms: [
    { term: "Work", def: "Energy transfer by a force through distance — W = Fd (J)" },
    { term: "Joule", def: "1 N moved 1 m; unit of energy and work" },
    { term: "Kinetic energy", def: "½mv² — energy of motion" },
    { term: "Gravitational potential energy", def: "mgh — energy of position in gravity" },
    { term: "Conservation of energy", def: "Energy transforms, never appears or vanishes" },
    { term: "Efficiency", def: "useful output ÷ total input × 100%" },
    { term: "Power", def: "Energy transfer rate — P = E/t (watt)" },
    { term: "Kilowatt-hour", def: "1 kWh = 3.6 MJ — the electricity billing unit" }
  ],
  formulas: [
    { name: "Work", formula: "W = F × d (along motion)", meaning: "force applied × distance it acts", when: "pushing, lifting (F = weight), stretching", example: "lift 20 kg 1.5 m: W = mgh = 20×10×1.5 = 300 J" },
    { name: "Kinetic", formula: "EK = ½ m v²", meaning: "energy of a moving body", when: "collisions, braking distance", example: "1,000 kg at 10 m/s → 50 kJ" },
    { name: "Potential", formula: "EP = m g h", meaning: "stored against gravity", when: "heights, dams, water supply", example: "1 m³ (1,000 kg) from 50 m dam: 500 kJ" },
    { name: "Power", formula: "P = W/t = E/t (= F·v)", meaning: "work rate", when: "engines, pumps, stair-climbing", example: "300 J in 6 s = 50 W" },
    { name: "Free-fall speed", formula: "v = √(2gh)", meaning: "from mgh = ½mv²", when: "drops, ramps, no drag", example: "h = 20 m → 20 m/s" }
  ],
  workedExamples: [
    {
      problem: "A porter carries 30 kg 100 m level, then climbs 20 m stairs. Work on the bag in each stage (g=10)?",
      calculation: "level: force ⟂ motion → 0; stairs: W = mgh = 30×10×20",
      answer: "0 J; 6,000 J — physics ignores the aching back of the flat part"
    },
    {
      problem: "Car at 20 m/s has 800 kJ of EK. Show braking distance doubles-to-four from speed alone.",
      calculation: "braking work = F×d must drain EK; EK ∝ v² → at 40 m/s, 4× the KE → 4× the distance for the same brake force",
      answer: "EK = ½mv² ⇒ 800 kJ at 20 m/s; 3,200 kJ at 40 m/s — four stops' worth of energy"
    },
    {
      problem: "A pump lifts 2,000 kg of water per minute from a 15 m well. Minimum power?",
      calculation: "work/min = mgh = 2000×10×15 = 300 kJ; P = 300,000/60",
      answer: "5,000 W = 5 kW (real motor: more — efficiency losses)"
    },
    {
      problem: "A 100 W bulb runs 10 h. Energy used and cost in 'units'?",
      calculation: "E = Pt = 100 W × 10 h = 1 kWh",
      answer: "3.6 MJ; 1 unit on the meter — the bill is energy accounting"
    }
  ],
  commonMistakes: [
    "Counting effort as work (holding still does ZERO work on the object)",
    "Sign/angle errors: multiplying force by distance moved sideways by a force that's perpendicular",
    "Saying energy is 'used up' and gone (it dissipates — total never changes)",
    "Forgetting EK uses v² not v (speed double = energy quadruple)",
    "Confusing kW (power) with kWh (energy) — the bill and the bulb disagree on purpose",
    "Efficiency > 100% answers from flipping numerator/denominator",
    "Mixing grams into ½mv² or metres into mgh without SI conversion"
  ],
  applications: [
    "GERD: each cubic metre falling ~160 m carries ~1.6 MJ to the turbines — EP = mgh at gigawatt scale",
    "Speed limits & crash injury: EK's v² is why 40→60 km/h jumps lethality so hard",
    "Household metering: appliances × hours = kWh = birr — read any label and budget",
    "Stair-running records: your mass, the height, your time = personal wattage",
    "Cooking fuel choice: charcoal's chemical energy vs electricity's transfer efficiency"
  ],
  summary: "Work = force × distance in its direction (J) — no motion, no work. Energy (kinetic ½mv², potential mgh, chemical, thermal…) is conserved: transformed and transferred, degrading usefully toward heat. mgh = ½mv² gives falls their speed; efficiency counts useful output; power (W = J/s) is the transfer rate, and kWh is power × time on your bill.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Work is done on an object when:", options: ["a force acts on it at all", "a force moves it along the force", "it has energy", "it is heavy"], answer: 1, difficulty: 1, explanation: "Force AND movement in its direction." },
    { type: "mcq", q: "Holding a 10 kg bag motionless for 2 minutes, work on the bag is:", options: ["200 J", "10 J", "0 J", "100 J"], answer: 2, difficulty: 2, explanation: "d = 0 → W = Fd = 0." },
    { type: "mcq", q: "The unit of power is the:", options: ["joule", "newton", "watt", "kilowatt-hour"], answer: 2, difficulty: 1, explanation: "W = J/s." },
    { type: "mcq", q: "KE of a body DOUBLES only if speed:", options: ["doubles", "×√2", "quadruples", "halves"], answer: 1, difficulty: 3, explanation: "½m(√2v)² = 2×½mv²." },
    { type: "mcq", q: "Lift 2 kg by 5 m (g = 10): work?", options: ["10 J", "100 J", "50 J", "7 J"], answer: 1, difficulty: 1, explanation: "mgh = 2×10×5." },
    { type: "mcq", q: "Which is NOT an energy form?", options: ["kinetic", "potential", "power", "chemical"], answer: 2, difficulty: 1, explanation: "Power = a rate, not a store." },
    { type: "mcq", q: "A 60 W device for 5 h uses:", options: ["300 kWh", "0.3 kWh", "12 kWh", "300 J"], answer: 1, difficulty: 2, explanation: "60×5 = 300 Wh = 0.3 kWh." },
    { type: "mcq", q: "Water behind a dam stores:", options: ["kinetic energy", "gravitational potential energy", "chemical energy", "sound energy"], answer: 1, difficulty: 1, explanation: "Height × mass × g — released through turbines." },
    { type: "mcq", q: "Two students climb the same stairs; A does it in 10 s, B in 20 s. Who did more work on their body, who more power (same mass)?", options: ["A both", "B work, A power", "equal work, A twice the power", "A work, equal power"], answer: 2, difficulty: 2, explanation: "Same mgh; half the time → double P." },
    { type: "mcq", q: "An engine does 24 kJ of useful work from 40 kJ of fuel. Efficiency:", options: ["60%", "166%", "40%", "24%"], answer: 0, difficulty: 2, explanation: "24/40 × 100." }
  ]
};

