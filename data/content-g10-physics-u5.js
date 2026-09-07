/* ============================================================
   Content: Grade 10 Physics — Unit 5: Magnetism
   4 topics: Magnetic Field, Magnetic Field of a Current,
   Magnetic Force, Applications of Magnetism.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- p5-1: Magnetic Field --- */
Lessons["g10-physics-up5-t1"] = {
  overview: "Every magnet is surrounded by an invisible region of influence — its magnetic field. Field lines are the tool physicists use to map that region, and Earth itself is a giant magnet, which is why compasses work.",
  objectives: [
    "Define a magnetic field and describe how to detect it",
    "Draw and interpret magnetic field lines of a bar magnet",
    "State the rules governing field-line patterns",
    "Explain Earth's magnetic field and how a compass works"
  ],
  simple: "A magnet's field is its 'influence zone' — the space where another magnet or iron feels a push or pull. We map it with field lines: they always leave the NORTH pole and enter the SOUTH pole, never cross, and bunch up where the field is strongest. Earth is a huge magnet, so a tiny needle (your compass) always swings to line up with Earth's field — pointing roughly north.",
  detailed: `<p><b>Magnetic field:</b> the region around a magnet (or moving charge / current) where magnetic forces act. It's a <b>vector quantity</b> — direction matters. Symbol: B, measured in <b>tesla (T)</b>.</p>
<p><b>Visualising it:</b> sprinkle iron filings around a bar magnet and tap — they align along the field. Or move a small compass: its north pole points in the field's direction at each point.</p>
<p><b>Field-line rules:</b>
<br>1. Lines emerge from the <b>north</b> pole and enter the <b>south</b> pole (outside the magnet); inside they run S→N, forming closed loops.
<br>2. The <b>tangent</b> to a line gives the field direction at that point.
<br>3. <b>Density of lines = strength</b> — they crowd near the poles where the field is strongest.
<br>4. Lines <b>never cross</b> (crossing would mean two directions at one point — impossible).</p>
<p><b>Patterns:</b> two unlike poles facing → lines flow N to S between them (attraction pattern). Two like poles → lines push apart, leaving a neutral point between them where the field is zero.</p>
<p><b>Earth's magnetism:</b> Earth's core (moving molten iron) generates a field like a giant bar magnet. Geographic north is near a magnetic <b>south</b> pole — which is why a compass's north-seeking pole points north (opposites attract). The magnetic poles don't exactly match the geographic ones (that mismatch is <b>declination</b>), and the field dips into the ground at an angle (<b>inclination</b>).</p>`,
  keyTerms: [
    { term: "Magnetic field", def: "Region where magnetic materials/moving charges experience force; vector B, in tesla (T)." },
    { term: "Field line", def: "A line whose tangent shows field direction; density shows strength." },
    { term: "North-seeking pole", def: "The compass pole that points toward geographic north." },
    { term: "Neutral point", def: "A point where fields from magnets cancel to zero." },
    { term: "Magnetic declination", def: "Angle between geographic and magnetic north at a location." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A student draws field lines around a bar magnet with the lines leaving the south pole and entering the north pole. What is wrong?",
      given: "Drawing convention.",
      formula: "Outside a magnet, field lines run N → S.",
      substitution: "The student reversed the arrow directions.",
      calculation: "By definition, the field direction at a point is where a compass north pole would point — away from N, toward S.",
      answer: "Arrows must point OUT of north and INTO south (outside the magnet)."
    },
    {
      problem: "Two bar magnets are placed with like poles facing each other. Where is the neutral point and how do the filings show it?",
      given: "N facing N (or S facing S).",
      formula: "Fields cancel where equal and opposite.",
      substitution: "Midway between the poles, each magnet's field pushes opposite ways with equal size.",
      calculation: "Net B = 0 there; filings show a sparse, empty-looking gap.",
      answer: "The neutral point sits between the facing poles — filings avoid that region."
    }
  ],
  commonMistakes: [
    "Drawing lines that cross — they never do.",
    "Thinking field lines start and stop — they form CLOSED loops (continuing inside the magnet).",
    "Believing Earth's geographic north is a magnetic north pole — it's actually near a magnetic SOUTH pole.",
    "Confusing line direction (tangent) with the path a magnet would physically take."
  ],
  applications: [
    "Compass navigation for travel, hiking and aviation relies on Earth's field.",
    "Iron-filing demos and magnetic viewing film make fields visible in industry (inspecting welds, magnets).",
    "Magnetic maps correct for declination so pilots and sailors steer true courses.",
    "Birds and sea turtles carry magnetite 'compasses' to migrate using Earth's field."
  ],
  summary: "A magnetic field is the force-region around a magnet, mapped by lines that run N→S outside, never cross, and crowd where B is strong (unit: tesla). Like poles create a neutral point between them. Earth is a giant magnet; a compass aligns with its field.",
  visuals: [
    { type: "flowChart", config: { steps: ["Sprinkle iron filings near magnet", "Filings become tiny induced magnets", "Each aligns with local field", "Pattern traces the field lines", "Crowded near poles = strong field"], title: "Mapping a Field with Filings" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A student draws field lines around a bar magnet with the lines leaving the south pole and…","a":"<b>Answer:</b> Arrows must point OUT of north and INTO south (outside the magnet)."},{"q":"Two bar magnets are placed with like poles facing each other. Where is the neutral point…","a":"<b>Answer:</b> The neutral point sits between the facing poles — filings avoid that region."}]}}],
  questions: [
    { type: "mcq", q: "Outside a bar magnet, field lines go from:", options: ["S to N", "N to S", "They don't have direction", "Only inside the magnet"], answer: 1, difficulty: 1, explanation: "By convention, field lines emerge from the north pole and enter the south pole outside the magnet." },
    { type: "mcq", q: "Where is a magnet's field strongest?", options: ["At the centre", "Near the poles", "Equally everywhere", "One metre away"], answer: 1, difficulty: 1, explanation: "Field lines crowd at the poles — line density indicates field strength." },
    { type: "tf", q: "Two magnetic field lines can cross each other.", answer: false, difficulty: 1, explanation: "Crossing would mean two field directions at one point, which is impossible." },
    { type: "mcq", q: "The SI unit of magnetic field strength (flux density) is the:", options: ["Coulomb", "Tesla", "Ohm", "Watt"], answer: 1, difficulty: 1, explanation: "B is measured in tesla (T)." },
    { type: "concept", q: "Why does a compass needle point north if 'opposites attract'?", answer: "geographic north is magnetic south|earths magnetic south pole|opposite pole near north", difficulty: 3, explanation: "Earth's magnetic pole near geographic north is actually a magnetic SOUTH pole, so it attracts the compass's north-seeking pole." },
    { type: "short", q: "Name the point between two like poles where the field is zero.", answer: "neutral point", difficulty: 2, explanation: "Where equal opposite fields cancel, we call it the neutral point." }
  ]
};

/* --- p5-2: Magnetic Field of a Current --- */
Lessons["g10-physics-up5-t2"] = {
  overview: "Electricity creates magnetism: any current-carrying wire is surrounded by a magnetic field. Oersted discovered this in 1820, and it leads straight to electromagnets, solenoids and the right-hand rules you'll use for the rest of the unit.",
  objectives: [
    "Describe the shape of the field around a straight current-carrying wire",
    "Apply the right-hand grip rule to find field direction",
    "Describe the field of a circular coil and a solenoid",
    "Explain how electromagnets work and how to control their strength"
  ],
  simple: "Run current through a wire and you create a magnetic field — a set of concentric circles around the wire. Which way do they point? Grip the wire with your RIGHT thumb along the current; your fingers curl in the field direction (right-hand grip rule). Loop the wire into a coil and the fields stack into a bar-magnet shape; wrap many turns (a solenoid) and you get a strong, uniform inside field — an electromagnet you can switch off.",
  detailed: `<p><b>Straight wire:</b> the field forms <b>concentric circles</b> centred on the wire, in planes perpendicular to it. Direction: <b>right-hand grip rule</b> — thumb = conventional current (+ → −), curled fingers = field lines. Field strength increases with current I and decreases with distance from the wire.</p>
<p><b>Circular coil:</b> each bit of wire contributes circles that all add up through the centre — the field there is nearly straight and perpendicular to the coil plane. Same grip rule: curl fingers with the current, thumb gives the north face of the coil.</p>
<p><b>Solenoid</b> (long coil of many turns): inside, the field is <b>strong and uniform</b> (evenly spaced straight lines); outside it looks exactly like a bar magnet, with identifiable N and S poles. Grip rule version: fingers curl with the current through the turns, thumb points to the solenoid's <b>north pole</b>.</p>
<p><b>Electromagnet:</b> a solenoid with a <b>soft iron core</b>. The core concentrates the field (its domains align), making it far stronger. Advantages over a permanent magnet: strength ∝ current and number of turns, and it can be <b>switched on/off</b> at will. Soft iron (not steel) is used because it loses magnetism when the current stops.</p>
<p><b>Increasing strength:</b> more turns, larger current, iron core, winding the turns tightly together.</p>`,
  keyTerms: [
    { term: "Right-hand grip rule", def: "Thumb = current, curled fingers = circular field direction (or vice versa for solenoid poles)." },
    { term: "Solenoid", def: "A long coil of wire producing a bar-magnet-like field with a uniform interior." },
    { term: "Electromagnet", def: "A current-driven solenoid with a soft iron core; switchable magnetism." },
    { term: "Soft iron", def: "Easily magnetised, easily demagnetised core material." },
    { term: "Domain", def: "A microscopic region of aligned atomic magnets inside a material." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A vertical wire carries current upward. Viewed from above, which way do the magnetic field lines circle?",
      given: "Current direction: up.",
      formula: "Right-hand grip rule.",
      substitution: "Point right thumb up; fingers curl around the wire.",
      calculation: "From above, the curl runs anticlockwise.",
      answer: "Anticlockwise (viewed from above, looking down on the current coming toward you)."
    },
    {
      problem: "You look at one end of a solenoid and the current appears to flow clockwise around the turns. Which pole is that end?",
      given: "Current appears clockwise from your viewpoint.",
      formula: "Grip rule: fingers with current → thumb to N.",
      substitution: "Curl right fingers clockwise as seen from that end.",
      calculation: "The thumb points AWAY from you, toward the other end.",
      answer: "The end you're viewing is the SOUTH pole (the far end is north). Shortcut: clockwise face = south, anticlockwise face = north."
    }
  ],
  commonMistakes: [
    "Using the left hand — every rule here is RIGHT hand.",
    "Thinking the field around a straight wire is a single line — it's a family of concentric circles.",
    "Choosing steel for an electromagnet core — steel stays magnetised (becomes a permanent magnet), defeating the 'switchable' purpose.",
    "Mixing up the two grip applications: straight wire (thumb = current) vs solenoid (fingers = current, thumb = N pole)."
  ],
  applications: [
    "Scrap-yard cranes lift tons of iron, then just switch off to drop it.",
    "Electric bells: an electromagnet pulls a hammer, breaks its own circuit, releases, repeats.",
    "Relays and solenoid valves use a small current to switch a large one (car starters!).",
    "MRI machines use enormous electromagnets (superconducting) to image the body."
  ],
  summary: "Current ⇒ magnetism. Straight wire: concentric circular field (right-hand grip). Coil/solenoid: bar-magnet field, uniform inside; fingers-with-current → thumb = N. Electromagnet = solenoid + soft iron core; strength grows with current and turns, and it's switchable.",
  visuals: [
    { type: "flowChart", config: { steps: ["Current enters solenoid", "Each turn adds its circular field", "Fields stack inside the coil", "Uniform strong interior field", "Outside: bar-magnet pattern", "Iron core multiplies B"], title: "From Wire to Electromagnet" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A vertical wire carries current upward. Viewed from above, which way do the magnetic fiel…","a":"<b>Answer:</b> Anticlockwise (viewed from above, looking down on the current coming toward you)."},{"q":"You look at one end of a solenoid and the current appears to flow clockwise around the tu…","a":"<b>Answer:</b> The end you're viewing is the SOUTH pole (the far end is north). Shortcut: clockwise face = south, anticlockwise face = north."}]}}],
  questions: [
    { type: "mcq", q: "The magnetic field around a straight current-carrying wire is shaped like:", options: ["Straight parallel lines", "Concentric circles", "Radial spokes", "Spirals outward"], answer: 1, difficulty: 1, explanation: "Field lines form concentric circles centred on the wire." },
    { type: "mcq", q: "Inside a current-carrying solenoid, the magnetic field is:", options: ["Zero", "Weak and curved", "Strong and uniform", "Only near the wire"], answer: 2, difficulty: 2, explanation: "The stacked turn-fields create a strong, uniform interior field." },
    { type: "mcq", q: "Looking at the end of a solenoid, the current runs anticlockwise. That end is:", options: ["North pole", "South pole", "Neutral", "Depends on the core"], answer: 0, difficulty: 3, explanation: "Right-hand grip: anticlockwise face = north, clockwise face = south." },
    { type: "tf", q: "An electromagnet's strength can be changed by changing the current.", answer: true, difficulty: 1, explanation: "That's the key advantage — more current (or more turns) means a stronger magnet." },
    { type: "short", q: "What material is best for an electromagnet core?", answer: "soft iron", difficulty: 1, explanation: "Soft iron magnetises and demagnetises easily — perfect for a switchable magnet." },
    { type: "concept", q: "Why does switching off the current make the electromagnet lose almost all its magnetism?", answer: "soft iron domains randomise|loses magnetism when current off|not permanent", difficulty: 2, explanation: "Soft iron has domains that easily fall back to random alignment once the aligning field from the current disappears." }
  ]
};

/* --- p5-3: Magnetic Force --- */
Lessons["g10-physics-up5-t3"] = {
  overview: "A magnetic field pushes on moving charges and on current-carrying wires. This motor effect — F = BIL — is the physics behind every electric motor, loudspeaker and moving-coil meter.",
  objectives: [
    "Explain why a current-carrying wire in a magnetic field experiences a force",
    "Apply Fleming's left-hand rule to find force direction",
    "Calculate force with F = BIL (and F = BQv for a single charge)",
    "Describe how the force changes with angle between wire and field"
  ],
  simple: "Put a wire carrying current inside a magnetic field and it JUMPS — the wire's own field fights the external field and gets shoved. Which way? Fleming's LEFT hand: First finger = Field (N→S), seCond finger = Current (+→−), thuMb = Motion (force). Size of the shove: F = BIL — stronger magnet (B), more current (I), longer wire in the field (L) all mean more force. Wire parallel to the field? No force at all.",
  detailed: `<p><b>The motor effect:</b> a current-carrying conductor generates its own field; placed in an external field, the two fields combine — they crowd on one side of the wire and weaken on the other. The wire is pushed from the crowded side toward the weak side. This is the <b>magnetic force on a current</b>.</p>
<p><b>Fleming's left-hand rule:</b> hold thumb, first finger, second finger mutually at right angles:
<br>• First finger → Field (N to S)
<br>• seCond finger → Current (conventional, + to −)
<br>• thuMb → Motion / Force.
<br>(Left hand for MOTors; save the right hand for GENerators.)</p>
<p><b>Magnitude:</b> F = B·I·L, valid when the wire is <b>perpendicular</b> to the field. At angle θ to the field: F = BIL·sinθ. So parallel (θ = 0) → zero force; perpendicular (θ = 90°) → maximum.</p>
<p><b>Single moving charge:</b> the same physics gives F = BQv (velocity perpendicular to B). The force is always perpendicular to the motion, so it bends the path into a <b>circle</b> without changing the speed — this is how charged particles spiral in magnetic fields (and how cosmic rays get deflected by Earth's field).</p>
<p><b>Reversing:</b> flip the current OR the field → force flips. Flip BOTH → force unchanged.</p>`,
  keyTerms: [
    { term: "Motor effect", def: "A current in a magnetic field experiences a force." },
    { term: "Fleming's left-hand rule", def: "First = Field, second = Current, thumb = Force/motion." },
    { term: "F = BIL", def: "Force on a wire: flux density × current × length in field (perpendicular case)." },
    { term: "F = BQv", def: "Force on a charge moving perpendicular to a field." },
    { term: "Flux density (B)", def: "Magnetic field strength in tesla (T)." }
  ],
  formulas: [
    {
      name: "Force on a current-carrying wire",
      formula: "F = B·I·L",
      meaning: "Force equals flux density times current times the length of wire inside the field (wire perpendicular to field).",
      vars: [
        { name: "F", meaning: "force", unit: "N" },
        { name: "B", meaning: "magnetic flux density", unit: "T" },
        { name: "I", meaning: "current", unit: "A" },
        { name: "L", meaning: "wire length within the field", unit: "m" }
      ],
      units: "newtons (N)",
      when: "A straight wire at right angles to a uniform field. Use F = BIL·sinθ at other angles.",
      example: "B = 0.5 T, I = 4 A, L = 0.2 m → F = 0.5 × 4 × 0.2 = 0.4 N."
    },
    {
      name: "Force on a moving charge",
      formula: "F = B·Q·v",
      meaning: "A charge crossing a field perpendicularly feels a force proportional to field, charge and speed.",
      vars: [
        { name: "F", meaning: "force", unit: "N" },
        { name: "B", meaning: "flux density", unit: "T" },
        { name: "Q", meaning: "charge", unit: "C" },
        { name: "v", meaning: "speed", unit: "m/s" }
      ],
      units: "newtons (N)",
      when: "Charged particles (electrons, ions) moving across a magnetic field.",
      example: "Electron (1.6×10⁻¹⁹ C) at 10⁶ m/s in 0.1 T → F = 1.6×10⁻¹⁴ N."
    }
  ],
  workedExamples: [
    {
      problem: "A 20 cm wire carrying 5 A lies perpendicular to a 0.4 T field. Find the force. What if the wire is turned parallel to the field?",
      given: "L = 0.2 m, I = 5 A, B = 0.4 T",
      formula: "F = BIL (⊥); F = BIL·sinθ (general)",
      substitution: "F = 0.4 × 5 × 0.2 = 0.4 N. Parallel: θ = 0, sin0 = 0.",
      calculation: "0.4 N perpendicular; 0 N parallel.",
      answer: "F = 0.4 N across the field; zero force when parallel."
    },
    {
      problem: "An electron moves at 2.0 × 10⁶ m/s perpendicular to a 0.5 T field. Find the force on it (e = 1.6 × 10⁻¹⁹ C) and describe its path.",
      given: "v = 2×10⁶ m/s, B = 0.5 T, Q = 1.6×10⁻¹⁹ C",
      formula: "F = BQv",
      substitution: "F = 0.5 × 1.6×10⁻¹⁹ × 2×10⁶",
      calculation: "F = 1.6 × 10⁻¹³ N",
      answer: "F = 1.6×10⁻¹³ N, always sideways to the motion → the electron travels in a circle."
    }
  ],
  commonMistakes: [
    "Using the right hand for the motor effect (that's for generators).",
    "Applying F = BIL when the wire is NOT perpendicular — multiply by sinθ.",
    "Forgetting L means only the length INSIDE the field, not the whole wire.",
    "Thinking the force on a charge can speed it up — magnetic force is always perpendicular, so it only turns the particle."
  ],
  applications: [
    "Electric motors: current in a coil between magnets → forces create turning torque.",
    "Loudspeakers: audio current in a voice coil → force moves the cone → sound.",
    "Moving-coil meters (ammeters/voltmeters): the coil's force turns a needle.",
    "Mass spectrometers bend ion paths with B to identify particles by charge/mass."
  ],
  summary: "Current in a field feels a force (motor effect). Direction: Fleming's LEFT hand (F-B-I). Size: F = BIL (⊥) or BIL·sinθ; for one charge F = BQv, which bends paths into circles. Reverse current or field → force reverses.",
  visuals: [
    { type: "flowChart", config: { steps: ["First finger → Field (N→S)", "seCond finger → Current (+→−)", "thuMb → Motion/Force", "All three mutually perpendicular"], title: "Fleming's Left-Hand Rule" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A 20 cm wire carrying 5 A lies perpendicular to a 0.4 T field. Find the force. What if th…","a":"<b>Answer:</b> F = 0.4 N across the field; zero force when parallel."},{"q":"An electron moves at 2.0 × 10⁶ m/s perpendicular to a 0.5 T field. Find the force on it (…","a":"<b>Answer:</b> F = 1.6×10⁻¹³ N, always sideways to the motion → the electron travels in a circle."}]}}],
  questions: [
    { type: "calc", q: "B = 0.2 T, I = 10 A, L = 0.5 m, wire perpendicular. Find F in newtons.", answer: "1", difficulty: 1, explanation: "F = BIL = 0.2 × 10 × 0.5 = 1 N.", tolerance: 0.02 },
    { type: "mcq", q: "A wire parallel to the magnetic field experiences:", options: ["Maximum force", "No force", "A small force", "A rotating force"], answer: 1, difficulty: 1, explanation: "F = BIL·sin0° = 0 — no force when parallel." },
    { type: "mcq", q: "In Fleming's left-hand rule, the second (middle) finger represents:", options: ["Field", "Force", "Current", "Motion"], answer: 2, difficulty: 1, explanation: "seCond finger = Current; first = Field, thumb = Motion." },
    { type: "calc", q: "An electron (Q = 1.6×10⁻¹⁹ C) moves at 10⁷ m/s across a 0.2 T field. Find the force in units of 10⁻¹³ N. (Give the number, e.g. 3.2)", answer: "3.2", difficulty: 3, explanation: "F = BQv = 0.2 × 1.6×10⁻¹⁹ × 10⁷ = 3.2×10⁻¹³ N.", tolerance: 0.1 },
    { type: "tf", q: "Reversing both the current and the field reverses the direction of the force.", answer: false, difficulty: 2, explanation: "Two flips cancel — the force direction stays the same." },
    { type: "concept", q: "Why does a magnetic force make a charged particle move in a circle rather than a straight line?", answer: "force perpendicular to motion|always sideways|changes direction not speed", difficulty: 3, explanation: "The force is always at right angles to the velocity, so it continuously turns the particle without changing its speed — circular motion." }
  ]
};

/* --- p5-4: Applications of Magnetism --- */
Lessons["g10-physics-up5-t4"] = {
  overview: "Magnetism isn't just classroom iron filings — it runs motors, speakers, hard drives, maglev trains and hospital MRI scanners. This topic connects the field and force ideas to the devices you use every day.",
  objectives: [
    "Explain how an electric motor uses the motor effect to produce continuous rotation",
    "Describe the role of the split-ring commutator",
    "Explain how a loudspeaker converts electrical signals into sound",
    "Give everyday and medical applications of magnets (relays, magnetic storage, MRI)"
  ],
  simple: "A motor is a coil of wire between magnets: current flows, one side of the coil is pushed up, the other down — it spins. The trick is the split-ring commutator: every half turn it swaps the current direction so the push keeps going the same way around. A speaker is the same physics in reverse-ish: a varying audio current in a coil attached to a cone makes the coil (and cone) vibrate back and forth — sound. And your phone's vibration motor, doorbells, hard drives and MRI are all magnetism at work.",
  detailed: `<p><b>Electric motor (DC):</b> a rectangular coil (armature) sits between permanent magnets. Current enters via brushes and a <b>split-ring commutator</b>. By Fleming's left-hand rule, opposite sides of the coil experience opposite forces → a turning effect (torque). At the vertical position the commutator <b>reverses the current</b>, so the torque keeps pushing the same rotational direction → continuous spin. More turns + more current + stronger magnets + an iron core = a more powerful motor.</p>
<p><b>Loudspeaker:</b> a permanent magnet with a cylindrical gap holds a <b>voice coil</b> attached to a light paper/ plastic cone. The audio current (alternating, carrying the signal) flows through the coil → the coil is forced forward and backward (F = BIL, direction flips with the current) → the cone pushes air → sound waves reproduce the signal.</p>
<p><b>Relay / electric bell:</b> a small control current energises an electromagnet, which pulls an iron armature, closing (or opening) a separate high-power circuit. Lets a tiny switch safely control a big load — or, in a bell, makes-and-breaks rapidly to hammer a gong.</p>
<p><b>Magnetic storage:</b> hard drives store data as microscopic regions of magnetisation (0s and 1s) written by a head and read as they pass under it. Credit-card stripes and old tapes work the same way.</p>
<p><b>MRI (Magnetic Resonance Imaging):</b> a huge superconducting electromagnet aligns hydrogen nuclei in the body; radio pulses disturb them and the signals they emit as they relax build a detailed image — no X-rays involved.</p>
<p><b>Other applications:</b> maglev trains (magnets levitate and propel the train, no wheel friction), separating magnetic ores from crushed rock, compasses, transformers (changing AC voltages via coupled magnetic fields), and electric generators (magnetism → electricity, the motor in reverse).</p>`,
  keyTerms: [
    { term: "Split-ring commutator", def: "Rotating switch that reverses coil current every half turn, keeping torque one-way." },
    { term: "Armature", def: "The rotating current-carrying coil of a motor." },
    { term: "Brushes", def: "Stationed carbon contacts feeding current to the commutator." },
    { term: "Voice coil", def: "The loudspeaker coil that moves with the audio current." },
    { term: "Relay", def: "An electromagnet switch: small current controls a large one." },
    { term: "MRI", def: "Medical imaging using strong magnetic fields and radio waves." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A school motor has a coil between magnets but no commutator (current always one way). The coil swings to horizontal and stops. Explain.",
      given: "DC coil, no current reversal.",
      formula: "Torque direction depends on current direction (Fleming's left hand).",
      substitution: "Forces spin the coil until its plane is horizontal (forces then pull outward, no torque).",
      calculation: "Without reversal, the torque can't carry it past equilibrium — it just oscillates and settles.",
      answer: "The commutator is what flips current each half-turn to keep torque in one direction; without it the coil simply aligns and stops."
    },
    {
      problem: "Why does a loudspeaker cone move back AND forth rather than spinning?",
      given: "Audio current is alternating.",
      formula: "F = BIL with direction set by current direction.",
      substitution: "As the signal current reverses every fraction of a second, the force on the coil reverses too.",
      calculation: "The coil is constrained on a flexible mount, so it oscillates linearly at the signal frequency.",
      answer: "The alternating current makes the force alternate — the coil (and cone) vibrates in and out, pushing sound waves."
    }
  ],
  commonMistakes: [
    "Saying the commutator 'changes AC to DC' — in a motor it reverses DC through the coil so torque stays one-way.",
    "Thinking speakers use a varying magnetic FIELD strength — the magnet is fixed; it's the CURRENT that varies.",
    "Confusing motors (electrical → kinetic) with generators (kinetic → electrical).",
    "Believing MRI uses radioactivity — it uses magnetic fields and radio waves, no ionising radiation."
  ],
  applications: [
    "Every fan, blender, EV and phone vibration motor contains an electric motor.",
    "Speakers, headphones and microphones (the reverse) are all motor-effect devices.",
    "Relays protect people: low-voltage control circuits switch high-voltage loads.",
    "Maglev trains reach 600 km/h with no wheel wear; MRI saves lives without X-rays.",
    "Hard drives and credit-card stripes store information in magnetic patterns."
  ],
  summary: "Motor: coil + magnets + commutator → continuous rotation (F = BIL, torque reversed-proof). Speaker: alternating current → oscillating force → sound. Relay: electromagnet as a switch. Storage: magnetised bits. MRI: giant electromagnet for medical imaging. Magnetism powers modern life.",
  visuals: [
    { type: "flowChart", config: { steps: ["Current enters coil via brushes", "Opposite sides feel opposite forces", "Coil turns (torque)", "Half turn: commutator swaps contacts", "Current reverses in coil", "Torque same way → continuous spin"], title: "Inside a DC Motor" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A school motor has a coil between magnets but no commutator (current always one way). The…","a":"<b>Answer:</b> The commutator is what flips current each half-turn to keep torque in one direction; without it the coil simply aligns and stops."},{"q":"Why does a loudspeaker cone move back AND forth rather than spinning?","a":"<b>Answer:</b> The alternating current makes the force alternate — the coil (and cone) vibrates in and out, pushing sound waves."}]}}],
  questions: [
    { type: "mcq", q: "The part of a DC motor that reverses the coil current every half turn is the:", options: ["Brush", "Commutator", "Armature", "Transformer"], answer: 1, difficulty: 1, explanation: "The split-ring commutator flips the current so the torque keeps the coil spinning one way." },
    { type: "mcq", q: "A loudspeaker converts:", options: ["Sound into electricity", "Electrical signals into sound", "Motion into heat", "DC into AC"], answer: 1, difficulty: 1, explanation: "Audio current → alternating force on the voice coil → cone vibration → sound." },
    { type: "concept", q: "How does a relay allow a small switch to control a large motor?", answer: "small current electromagnet closes big circuit|electromagnet pulls armature|low power controls high power", difficulty: 2, explanation: "The control current energises an electromagnet that mechanically closes the high-current contacts — the two circuits are electrically separate." },
    { type: "mcq", q: "Which device works on the SAME physics principle as an electric motor?", options: ["Loudspeaker", "Compass", "Fuse", "Transformer"], answer: 0, difficulty: 2, explanation: "Both use the force on a current-carrying conductor in a magnetic field (motor effect)." },
    { type: "tf", q: "MRI scanners use X-rays to image the body.", answer: false, difficulty: 1, explanation: "MRI uses strong magnetic fields and radio waves — no ionising radiation." },
    { type: "short", q: "Magnetic storage (hard drives) records data as regions of what?", answer: "magnetisation|magnetic orientation|magnetised", difficulty: 2, explanation: "Bits are stored as microscopic regions magnetised in one direction or the other." }
  ]
};

