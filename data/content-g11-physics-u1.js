/* ============================================================
   Content: Grade 11 Physics — Unit 1: Physics and Human Society
   5 topics. Rich format: deeper detail, 3+ worked examples,
   8+ questions per lesson.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- p1-1: Importance of Physics to Society --- */
Lessons["g11-physics-up1-t1"] = {
  overview: "Physics is the foundation of every modern technology — from the phone in your pocket to the hospital equipment saving lives. This topic maps how the science of matter and energy shapes daily life, economies and national development, with Ethiopian examples throughout.",
  objectives: [
    "Identify the branches of physics and the technologies they enable",
    "Explain how physics underpins transport, communication, health and energy",
    "Analyse the economic impact of physics-based industries",
    "Evaluate both benefits and risks of applying physics (dual-use technology)"
  ],
  simple: "Every device you touch runs on physics: the screen (electromagnetism + quantum physics), the battery (chemistry + electricity), GPS (relativity!), the hospital X-ray (nuclear physics). Nations that master physics master industry — that's why Ethiopia built the Grand Ethiopian Renaissance Dam, a giant applied-physics project generating 6,000+ GWh of electricity a year.",
  detailed: `<p><b>What physics studies:</b> matter, energy, motion, force, and their interactions across every scale — from quarks (10⁻¹⁵ m) to galaxy clusters (10²³ m). Its core branches: <b>mechanics</b> (motion & forces), <b>thermodynamics</b> (heat & energy), <b>waves & optics</b>, <b>electromagnetism</b>, <b>relativity</b>, <b>quantum physics</b>, <b>nuclear & particle physics</b>, and <b>solid-state/condensed matter</b>.</p>
<p><b>Technology transfer — how each branch reaches society:</b>
<br>• <b>Electromagnetism</b> → generators, motors, transformers, radio, mobile networks, Wi-Fi. Maxwell's 1860s equations directly produced the entire telecoms industry.
<br>• <b>Quantum physics</b> → transistors, microchips, lasers, LEDs, MRI. Without quantum theory there is no silicon chip — the transistor (1947) came straight from solid-state physics.
<br>• <b>Nuclear physics</b> → power stations, cancer radiotherapy, PET scans, food irradiation, smoke detectors.
<br>• <b>Thermodynamics</b> → engines, refrigerators, air conditioners, power plants — and the efficiency limits that drive fuel-economy standards.
<br>• <b>Mechanics</b> → buildings, bridges, aircraft, vehicles, robotics, sports science.
<br>• <b>Relativity</b> → GPS satellites must correct for time dilation (~38 µs/day); without Einstein your location drifts ~10 km daily.</p>
<p><b>Economic impact:</b> physics-intensive industries (energy, telecoms, semiconductors, aerospace, medical devices) account for a huge share of global GDP. Every dollar invested in fundamental research historically returns many times over — the World Wide Web (invented at CERN for physicists), GPS, and lasers all began as research tools. For Ethiopia: GERD (hydroelectric physics), Ethio Telecom (electromagnetic waves), pharmaceutical cold chains (thermodynamics), and the Addis Ababa light rail (mechanics + electromagnetism).</p>
<p><b>Dual-use reality:</b> the same nuclear physics gives cancer therapy AND weapons; the same rocketry gives satellite launches AND missiles. Society must govern physics through ethics, regulation and treaties — scientists carry responsibility for applications.</p>
<p><b>Physics and other sciences:</b> it supplies tools and foundations — chemistry rests on quantum physics, biology on molecular forces (and techniques like X-ray crystallography that revealed DNA), geology on seismology and radiometric dating, medicine on imaging physics.</p>`,
  keyTerms: [
    { term: "Physics", def: "The science of matter, energy, motion and force across all scales." },
    { term: "Technology transfer", def: "Turning scientific discoveries into practical products and industries." },
    { term: "Fundamental research", def: "Curiosity-driven science without an immediate product goal — the seed of most breakthroughs." },
    { term: "Dual-use technology", def: "Research with both beneficial and harmful applications (e.g. nuclear)." },
    { term: "Condensed matter physics", def: "Study of solids/liquids — the basis of chips, superconductors, magnets." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Trace the chain of discovery that put a camera in your phone. Which physics made each step possible?",
      given: "Phone camera module.",
      formula: "Chain analysis: discovery → device → system.",
      substitution: "Photoelectric effect (Einstein, 1905, quantum physics) → photodiodes → CMOS image sensor (solid-state physics) → microchip fabrication (quantum + electromagnetism) → lens design (geometrical optics).",
      calculation: "Four distinct physics fields converge in one 5 mm module.",
      answer: "A phone camera is applied quantum physics (photoelectric effect), solid-state physics (sensor), optics (lens) and electromagnetism (signal processing) — proof that modern devices are physics ecosystems, not single inventions."
    },
    {
      problem: "GERD has 13 turbines with a combined capacity of about 5,150 MW. Using physics, explain how water becomes electricity and estimate the energy from one second of full-capacity operation.",
      given: "P = 5,150 MW = 5.15 × 10⁹ W.",
      formula: "E = P × t; energy conversion chain.",
      substitution: "E = 5.15×10⁹ W × 1 s.",
      calculation: "E = 5.15 × 10⁹ J (5.15 gigajoules per second).",
      answer: "Gravitational potential energy of reservoir water → kinetic energy of flow → mechanical rotation of turbines → electrical energy via electromagnetic induction (Faraday's law). At full capacity GERD delivers 5.15 billion joules every second."
    },
    {
      problem: "A government must choose: fund a physics research lab or import finished technology. Give one physics-based argument for each side, then a synthesis.",
      given: "Policy decision.",
      formula: "Cost-benefit + capability analysis.",
      substitution: "Import: faster deployment, no research risk. Fund lab: builds local expertise, maintenance independence, innovation capacity (GERD needs engineers who understand the physics, not just operators).",
      calculation: "Historical pattern: nations that only import stay dependent; those that invest (South Korea 1970s–90s) built world industries.",
      answer: "Both — import for immediate needs while funding research for long-term capability. Physics education is infrastructure, like roads."
    }
  ],
  commonMistakes: [
    "Thinking physics is only theory with no economic engine behind it — chips, energy and telecoms are physics industries.",
    "Believing technology inventors 'just engineered' devices — transistors, lasers and GPS required deep physics first.",
    "Ignoring dual-use: praising or condemning physics without seeing both applications.",
    "Confusing science (knowing) with technology (doing) — they feed each other but are different activities."
  ],
  applications: [
    "Health: X-ray, CT, MRI, ultrasound, radiotherapy, laser eye surgery — all physics.",
    "Energy: solar cells (quantum), hydro turbines (mechanics), nuclear plants, grid transformers.",
    "Communication: fibre optics (total internal reflection), radio masts, satellites.",
    "Agriculture: irrigation pumps, cold storage, weather radar, remote-sensing satellites.",
    "Transport: automotive safety crumple zones (momentum), maglev trains, aviation.",
    "Ethiopian context: GERD, Ethio Telecom, meteorological agency radar, hospital imaging centres."
  ],
  summary: "Physics studies matter and energy; its branches seed every major technology — electromagnetism (power/telecoms), quantum (chips/lasers), nuclear (medicine/energy), mechanics (construction/transport), thermodynamics (engines). It drives economies and demands ethical governance because of dual-use.",
  visuals: [
    { type: "flowChart", config: { steps: ["Fundamental physics research", "Discovery (e.g. electromagnetism)", "Principle demonstrated (motor)", "Engineered product (fan, EV)", "Industry & economy transformed"], title: "From Discovery to Society" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Trace the chain of discovery that put a camera in your phone. Which physics made each ste…","a":"<b>Answer:</b> A phone camera is applied quantum physics (photoelectric effect), solid-state physics (sensor), optics (lens) and electromagnetism (signal processing) — proof…"},{"q":"GERD has 13 turbines with a combined capacity of about 5,150 MW. Using physics, explain h…","a":"<b>Answer:</b> Gravitational potential energy of reservoir water → kinetic energy of flow → mechanical rotation of turbines → electrical energy via electromagnetic induction…"},{"q":"A government must choose: fund a physics research lab or import finished technology. Give…","a":"<b>Answer:</b> Both — import for immediate needs while funding research for long-term capability. Physics education is infrastructure, like roads."}]}}],
  questions: [
    { type: "mcq", q: "Which branch of physics made the transistor — and therefore every computer chip — possible?", options: ["Thermodynamics", "Solid-state/quantum physics", "Optics", "Acoustics"], answer: 1, difficulty: 1, explanation: "Transistors rely on quantum behaviour of semiconductors, studied in solid-state physics." },
    { type: "mcq", q: "GPS satellites must correct for relativistic time effects because:", options: ["Satellites are too far for radio", "Clocks in orbit tick at different rates than on Earth", "GPS uses X-rays", "Relativity only works in vacuum"], answer: 1, difficulty: 2, explanation: "Special + general relativity shift satellite clock rates (~38 µs/day); uncorrected, positions would drift kilometres." },
    { type: "concept", q: "Explain why the photoelectric effect is considered 'applied' in your phone.", answer: "camera sensor uses photoelectric|light to electric signal|quantum effect in photodiode", difficulty: 2, explanation: "CMOS sensors convert photons to electron signals via the photoelectric effect — Einstein's quantum discovery lives in every phone camera." },
    { type: "ordering", q: "Order the GERD energy conversions from reservoir to grid:", options: ["Electrical → mechanical → kinetic → potential", "Potential → kinetic → mechanical → electrical", "Kinetic → potential → electrical → mechanical", "Mechanical → electrical → potential → kinetic"], answer: [1], difficulty: 2, explanation: "Stored height energy → flowing water → spinning turbine → generator output." },
    { type: "tf", q: "All physics research has only beneficial applications for society.", answer: false, difficulty: 1, explanation: "Dual-use is real: nuclear fission gives both electricity and weapons; the challenge is governance, not the science itself." },
    { type: "mcq", q: "The World Wide Web was invented in the context of:", options: ["A banking project", "CERN physics data-sharing", "A military network", "A telecom company"], answer: 1, difficulty: 2, explanation: "Tim Berners-Lee built it at CERN so physicists could share data — a famous fundamental-research spin-off." },
    { type: "short", q: "Name the physics principle behind every electric generator.", answer: "electromagnetic induction|faraday", difficulty: 1, explanation: "Faraday's induction: changing magnetic flux produces EMF." },
    { type: "concept", q: "Give one reason a country should invest in physics education beyond importing finished machines.", answer: "maintain and repair locally|build own innovation|reduce dependence|train engineers", difficulty: 2, explanation: "Imported tech without local expertise breaks down and can't be improved — physics capacity is national infrastructure." }
  ]
};

/* --- p1-2: Physics Communities and Their Roles --- */
Lessons["g11-physics-up1-t2"] = {
  overview: "Physics is a team sport played by a global community: researchers, professional societies, journals, standards bodies and universities. This topic explores how scientific knowledge is produced, reviewed, standardised and shared — including Ethiopia's place in that community.",
  objectives: [
    "Describe the structure of the national and international physics community",
    "Explain peer review, publication and open science",
    "Identify the roles of professional organisations and standards bodies",
    "Name Ethiopian and African physics institutions and their functions"
  ],
  simple: "No physicist works alone. They belong to a community: universities and labs do experiments, journals check each other's work (peer review), professional societies (like the APS or Ethiopia's Physical Society) set standards and run conferences, and bodies like BIPM keep the whole world using the SAME metre, kilogram and second. That's why your 1 N is exactly 1 N in Addis or Tokyo.",
  detailed: `<p><b>Who is in the physics community:</b>
<br>• <b>Researchers</b> in universities, national labs (e.g. CERN, Fermilab) and industry R&D.
<br>• <b>Professional societies</b>: American Physical Society (APS), Institute of Physics (UK, IOP), African Physical Society, and the <b>Ethiopian Physical Society</b> — they publish journals, organise conferences, advocate for science policy, and define ethics codes.
<br>• <b>Publishers & journals</b>: Nature, Science, Physical Review Letters — the gatekeepers of recorded knowledge.
<br>• <b>Standards organisations</b>: BIPM (International Bureau of Weights and Measures) maintains SI units; national metrology institutes (Ethiopia's is the Ethiopian Metrology Institute, EMI) trace local instruments to world standards.
<br>• <b>Funding agencies & policy bodies</b>: they decide research directions (e.g. Ethiopia's Ministry of Education & Science and Higher Education).</p>
<p><b>Peer review — the community's quality filter:</b> before publication, independent experts check a paper's method, analysis and claims. It catches errors, demands reproducibility, and filters out junk — though it's imperfect (slow, biased, occasionally fooled). After publication, the whole community continues checking: replication attempts, corrections, retractions.</p>
<p><b>Why standards matter:</b> trade, safety and science all need agreed units. The SI system — maintained internationally — means a resistor bought in China matches a spec written in Germany. The 1999 Mars Climate Orbiter was destroyed by a unit mismatch (pound-seconds vs newton-seconds): a $125 million lesson in why metrology bodies exist.</p>
<p><b>Ethics & integrity:</b> the community enforces norms — no data fabrication (e.g. the Schön scandal, where faked semiconductor results led to mass retractions), proper authorship credit, conflict disclosure, humane and safe experimentation.</p>
<p><b>Open science today:</b> preprint servers (arXiv — invented for physicists!), open-access journals, shared datasets and reproducible code are making the community more transparent and faster.</p>
<p><b>Ethiopian/African institutions:</b> Ethiopian Physical Society; Addis Ababa University's physics department and its space science institute; the African Institute for Mathematical Sciences; and continental collaborations like the Square Kilometre Array (radio astronomy) which African nations joined.</p>`,
  keyTerms: [
    { term: "Scientific community", def: "The global network of researchers, institutions and societies that produce and validate science." },
    { term: "Peer review", def: "Independent expert evaluation of research before publication." },
    { term: "Professional society", def: "Member organisation that publishes, convenes, advocates and sets ethics for a discipline." },
    { term: "Metrology", def: "The science of measurement; national institutes trace instruments to SI standards." },
    { term: "Preprint (arXiv)", def: "A research paper shared publicly before formal peer review." },
    { term: "Retraction", def: "Withdrawal of a published paper after problems are found." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A researcher claims a room-temperature superconductor. Walk through what the community will do before accepting the claim.",
      given: "Extraordinary claim.",
      formula: "Peer review → replication → consensus.",
      substitution: "Paper submitted → referees check method → published → other labs attempt the same measurement → results either reproduce (claim gains credibility) or fail (paper scrutinised/retracted).",
      calculation: "History: the 2023 LK-99 episode — preprints spread on social media, but failed replication within weeks showed it was NOT a superconductor.",
      answer: "Acceptance requires independent replication, not just publication — the community self-corrects, sometimes slowly but reliably."
    },
    {
      problem: "An Ethiopian factory calibrates its scales against a weight it made locally. Metrologists object. Why, and what's the fix?",
      given: "Local calibration chain.",
      formula: "Traceability to SI.",
      substitution: "A locally-made '1 kg' can drift or be wrong with no link to the international standard.",
      calculation: "Fix: calibrate against certified standards traceable through the Ethiopian Metrology Institute → BIPM's international prototypes.",
      answer: "Without traceability, measurements aren't comparable worldwide — trade and safety depend on unbroken calibration chains to SI."
    },
    {
      problem: "A student says 'peer review means the editor reads the paper.' Correct the statement.",
      given: "Misconception.",
      formula: "Peer review process.",
      substitution: "Editors assign 2+ anonymous expert referees in the field who scrutinise methods and analysis, then recommend accept/revise/reject.",
      calculation: "The editor coordinates; the experts judge.",
      answer: "Peer review = evaluation by fellow specialists ('peers'), not editorial reading — and it can still miss fraud, which is why post-publication replication matters."
    }
  ],
  commonMistakes: [
    "Thinking one published paper = proven fact — science needs replication and consensus.",
    "Believing units are 'natural' rather than internationally negotiated standards requiring metrology institutions.",
    "Confusing preprints (not yet reviewed) with peer-reviewed publications.",
    "Seeing scientific societies as social clubs — they set ethics codes, standards and policy advice."
  ],
  applications: [
    "Conferences (APS March Meeting, Ethiopian Physical Society annual) spread new results fastest.",
    "Standards keep medical doses, fuel pumps and phone networks accurate and safe.",
    "Ethics boards and reviewer training protect research integrity.",
    "arXiv.org lets a student in Addis read tomorrow's physics today, free.",
    "Science diplomacy: joint projects (SKA telescope, ITER fusion) build international cooperation."
  ],
  summary: "Physics knowledge is community-made: researchers + societies + journals + metrology bodies. Peer review filters before publication; replication and retractions police after. SI standards (BIPM → national institutes like EMI) make measurement universal. Ethics codes and open science keep the community trustworthy.",
  visuals: [
    { type: "flowChart", config: { steps: ["Research performed", "Preprint posted (arXiv)", "Journal submission", "Peer review by experts", "Publication", "Independent replication", "Consensus / correction"], title: "A Result's Journey Through the Community" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A researcher claims a room-temperature superconductor. Walk through what the community wi…","a":"<b>Answer:</b> Acceptance requires independent replication, not just publication — the community self-corrects, sometimes slowly but reliably."},{"q":"An Ethiopian factory calibrates its scales against a weight it made locally. Metrologists…","a":"<b>Answer:</b> Without traceability, measurements aren't comparable worldwide — trade and safety depend on unbroken calibration chains to SI."},{"q":"A student says 'peer review means the editor reads the paper.' Correct the statement.","a":"<b>Answer:</b> Peer review = evaluation by fellow specialists ('peers'), not editorial reading — and it can still miss fraud, which is why post-publication replication matter…"}]}}],
  questions: [
    { type: "mcq", q: "The main purpose of peer review is to:", options: ["Make papers shorter", "Let experts check quality before publication", "Promote the author", "Translate papers"], answer: 1, difficulty: 1, explanation: "Independent specialists evaluate methods and claims before a paper is accepted." },
    { type: "mcq", q: "Which body is responsible for maintaining international measurement standards (SI)?", options: ["NASA", "BIPM", "WHO", "CERN"], answer: 1, difficulty: 2, explanation: "The International Bureau of Weights and Measures (BIPM) coordinates SI units worldwide." },
    { type: "concept", q: "Why was the Mars Climate Orbiter lost, and what community role does it highlight?", answer: "unit mismatch|pound vs newton|standards matter|metrology", difficulty: 2, explanation: "One team used imperial units, another metric — no shared standard check. It shows why metrology and peer review of basics matter." },
    { type: "tf", q: "A preprint on arXiv has already passed peer review.", answer: false, difficulty: 2, explanation: "Preprints are shared BEFORE review — readers must judge them with that caveat." },
    { type: "short", q: "Name the Ethiopian institution responsible for measurement standards.", answer: "ethiopian metrology institute|emi", difficulty: 2, explanation: "EMI provides national metrology and calibration traceability." },
    { type: "mcq", q: "When a published paper's data is later found fabricated, the journal typically:", options: ["Ignores it", "Retracts the paper", "Rewards the author", "Deletes the archive"], answer: 1, difficulty: 1, explanation: "Retraction formally withdraws the paper and flags it as unreliable." },
    { type: "ordering", q: "Order the steps of the publication process:", options: ["Peer review → submission → publication → replication", "Submission → peer review → publication → replication", "Replication → publication → submission → review", "Publication → peer review → submission → replication"], answer: [1], difficulty: 2, explanation: "Submit, get reviewed, publish, then the community replicates." },
    { type: "concept", q: "Give two roles of a professional physics society.", answer: "conferences and journals|ethics codes|policy advice|standards|education", difficulty: 2, explanation: "Societies run meetings, publish journals, set ethical norms, advise governments and support education." }
  ]
};

/* --- p1-3: Making of Physics Knowledge --- */
Lessons["g11-physics-up1-t3"] = {
  overview: "How do we actually KNOW physics facts? Through the scientific method: observation, hypothesis, prediction, controlled experiment, analysis and revision. This topic dissects the engine of physics — models, laws, theories — and shows how measurement uncertainty is part of honest science.",
  objectives: [
    "Apply the steps of the scientific method to a physics problem",
    "Distinguish hypothesis, model, law and theory",
    "Design a fair test: variables, controls, repeated trials",
    "Handle measurement error, uncertainty and graph analysis"
  ],
  simple: "Physics knowledge is built like a court case: observe something odd → propose an explanation (hypothesis) → predict what ELSE must happen if it's true → test by experiment → check if data agrees. Agree? Keep testing harder. Disagree? The idea dies or gets fixed. A 'law' is a pattern that always holds (F = ma); a 'theory' is the deep explanation behind laws (why mass resists force). Theories aren't guesses — they're the most-tested ideas science has.",
  detailed: `<p><b>The scientific method (iterative, not a checklist):</b>
<br>1. <b>Observation & question</b> — notice something measurable ("heavy and light balls seem to fall together?").
<br>2. <b>Hypothesis</b> — a testable statement ("fall time is independent of mass").
<br>3. <b>Prediction</b> — if hypothesis true, then X must happen ("dropped simultaneously, they land together — even from a tower").
<br>4. <b>Experiment</b> — controlled test: change ONE variable (independent), measure another (dependent), keep everything else fixed (controls), repeat many trials.
<br>5. <b>Analysis</b> — tables, graphs, statistics; compare with prediction.
<br>6. <b>Conclusion & communication</b> — support or reject; publish for scrutiny.
<br>7. <b>Revision</b> — refine hypothesis, new experiments. The loop never ends.</p>
<p><b>Building blocks of knowledge:</b>
<br>• <b>Model</b>: a simplified representation (point mass, ideal gas, ray model of light) — useful precisely because it ignores details.
<br>• <b>Law</b>: a compact mathematical description of a repeated pattern in nature (Ohm's law, Kepler's laws). Describes HOW, not WHY.
<br>• <b>Theory</b>: a broad, deeply tested explanatory framework unifying laws (kinetic theory, general relativity). In science, "just a theory" is a category error — gravity is both a law (the equation) and a theory (the explanation).</p>
<p><b>Measurement & uncertainty:</b> every measurement has error. <b>Random errors</b> (noise, reaction time) shrink by averaging more trials; <b>systematic errors</b> (mis-zeroed scale) shift everything and need recalibration. Report as value ± uncertainty; percentage uncertainty = (Δx/x) × 100%. When graphing y = mx + c, the gradient and intercept carry the physics — and drawing best-fit lines (not point-connecting) reveals the trend against scatter.</p>
<p><b>Theory vs experiment dialogue:</b> sometimes theory leads (Maxwell predicted radio waves 20 years before Hertz detected them); sometimes experiment leads (blackbody radiation data broke classical physics, forcing quantum theory). Falsifiability — Popper's criterion — means a real physics claim must be testable and could, in principle, be shown wrong.</p>
<p><b>Paradigm shifts:</b> normal science accumulates within a framework; anomalies pile up (Mercury's orbit, light's speed) until a revolution replaces the framework (Newton → Einstein). Old theories survive as limiting cases — Newton still works when v ≪ c.</p>`,
  keyTerms: [
    { term: "Hypothesis", def: "A testable proposed explanation." },
    { term: "Independent/dependent variable", def: "What you change vs what you measure." },
    { term: "Control", def: "Everything kept constant so the test is fair." },
    { term: "Scientific law", def: "Mathematical description of a consistent natural pattern." },
    { term: "Scientific theory", def: "Well-tested explanatory framework unifying many laws and facts." },
    { term: "Systematic error", def: "A consistent bias in measurements (bad calibration)." },
    { term: "Random error", def: "Unpredictable scatter reduced by repeated trials." },
    { term: "Falsifiability", def: "A claim must be testable — capable of being proven wrong." }
  ],
  formulas: [
    {
      name: "Percentage uncertainty",
      formula: "% unc = (Δx / x) × 100%",
      meaning: "Relative size of measurement uncertainty.",
      vars: [
        { name: "Δx", meaning: "absolute uncertainty", unit: "same as x" },
        { name: "x", meaning: "measured value", unit: "—" }
      ],
      units: "percent",
      when: "Reporting how precise a measurement is; combining in calculations.",
      example: "Length 2.00 ± 0.02 m → (0.02/2.00)×100 = 1%."
    }
  ],
  workedExamples: [
    {
      problem: "Design an experiment to test whether pendulum period depends on bob mass. Identify variables and controls.",
      given: "Pendulum kit: strings, bobs of different mass, stopwatch.",
      formula: "Fair-test design.",
      substitution: "Independent: bob mass. Dependent: period (time for 10 oscillations ÷ 10). Controls: string length, release angle (<15°), same location, same stopwatch.",
      calculation: "Repeat each mass 5 times, average, plot period vs mass.",
      answer: "If the graph is flat, period is mass-independent (as physics predicts: T = 2π√(L/g) has no mass term) — the experiment tests the model."
    },
    {
      problem: "A student measures g with a falling ball: times of 0.61, 0.58, 0.62, 0.59, 0.60 s. Mean = 0.60 s, spread ±0.02 s. Find the percentage uncertainty, and name the error type in reaction time.",
      given: "t = 0.60 ± 0.02 s.",
      formula: "% unc = (Δt/t) × 100%",
      substitution: "(0.02/0.60) × 100",
      calculation: "= 3.3%",
      answer: "≈3.3% uncertainty. Reaction-time scatter is a RANDOM error — averaging trials reduces it; a stopwatch that always starts 0.1 s late would be SYSTEMATIC."
    },
    {
      problem: "Classical physics predicted the orbit of Mercury perfectly — except a tiny 43 arcseconds-per-century drift. What did this anomaly demonstrate about the making of physics knowledge?",
      given: "Small persistent discrepancy.",
      formula: "Anomaly → new theory.",
      substitution: "Newtonian gravity couldn't explain the drift; Einstein's general relativity (1915) predicted exactly 43″.",
      calculation: "A tiny measurement mismatch became one of relativity's first confirmations.",
      answer: "Accumulated anomalies drive paradigm shifts — and old theories survive as approximations (Newton still works for everything except extreme gravity)."
    },
    {
      problem: "Two graphs of the same data: Student A connects every dot with straight segments; Student B draws a smooth best-fit line through the scatter. Whose analysis is better and why?",
      given: "Scattered experimental points.",
      formula: "Graph interpretation.",
      substitution: "Connecting dots treats random error as real structure; a best-fit line averages scatter and reveals the underlying relationship.",
      calculation: "From B's line, gradient and intercept give physical quantities with sensible uncertainty.",
      answer: "Student B — physics looks for the trend; individual points carry random error."
    }
  ],
  commonMistakes: [
    "Saying 'theory' means guess — in physics it means the opposite: the most rigorously tested kind of knowledge.",
    "Changing two variables at once and blaming whichever moved.",
    "Treating one trial as a result — repetition and averaging are mandatory.",
    "Confusing random error (scatter, reducible by repeats) with systematic error (bias, needs recalibration).",
    "Connecting graph dots instead of drawing a best-fit line."
  ],
  applications: [
    "Medical trials use exactly this logic: treatment vs placebo, controlled variables, statistics.",
    "Engineering: every bridge design is a hypothesis tested by models and load experiments.",
    "Climate science: models (simplified representations) validated against observations.",
    "Everyday: your phone's auto-focus is a control loop testing predictions thousands of times a second.",
    "Academic work: your own lab reports follow this whole structure."
  ],
  summary: "Physics knowledge = observation → hypothesis → prediction → controlled experiment → analysis → revision, endlessly. Models simplify, laws describe, theories explain. Honest measurement reports uncertainty; random error averages out, systematic error must be hunted. Anomalies spark revolutions; falsifiability is the gate.",
  visuals: [
    { type: "flowChart", config: { steps: ["Observe & question", "Hypothesis", "Prediction", "Controlled experiment", "Analyse data", "Conclude & publish", "Revise — loop back"], title: "The Scientific Method Loop" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Design an experiment to test whether pendulum period depends on bob mass. Identify variab…","a":"<b>Answer:</b> If the graph is flat, period is mass-independent (as physics predicts: T = 2π√(L/g) has no mass term) — the experiment tests the model."},{"q":"A student measures g with a falling ball: times of 0.61, 0.58, 0.62, 0.59, 0.60 s. Mean =…","a":"<b>Answer:</b> ≈3.3% uncertainty. Reaction-time scatter is a RANDOM error — averaging trials reduces it; a stopwatch that always starts 0.1 s late would be SYSTEMATIC."},{"q":"Classical physics predicted the orbit of Mercury perfectly — except a tiny 43 arcseconds-…","a":"<b>Answer:</b> Accumulated anomalies drive paradigm shifts — and old theories survive as approximations (Newton still works for everything except extreme gravity)."},{"q":"Two graphs of the same data: Student A connects every dot with straight segments; Student…","a":"<b>Answer:</b> Student B — physics looks for the trend; individual points carry random error."}]}}],
  questions: [
    { type: "mcq", q: "In an experiment testing how wire length affects resistance, the independent variable is:", options: ["Resistance", "Wire length", "Temperature", "Battery voltage"], answer: 1, difficulty: 1, explanation: "The variable you deliberately change is independent; what you measure (resistance) is dependent." },
    { type: "mcq", q: "A scale that reads 0.5 kg too high on every weighing suffers from:", options: ["Random error", "Systematic error", "No error", "A hypothesis"], answer: 1, difficulty: 2, explanation: "A consistent bias = systematic error; recalibration fixes it, more trials don't." },
    { type: "concept", q: "Difference between a scientific law and a theory?", answer: "law describes pattern, theory explains|law is how, theory is why", difficulty: 2, explanation: "Laws state what happens (often as equations); theories explain why and unify many laws." },
    { type: "calc", q: "A voltage is measured as 12.0 ± 0.3 V. Give the percentage uncertainty.", answer: "2.5", difficulty: 2, explanation: "(0.3/12.0)×100 = 2.5%.", tolerance: 0.1 },
    { type: "tf", q: "Repeating a measurement many times eliminates systematic error.", answer: false, difficulty: 2, explanation: "Repeats average out random error only — a biased instrument stays biased every time." },
    { type: "mcq", q: "Which sequence correctly orders the scientific method?", options: ["Experiment → hypothesis → observation → conclusion", "Observation → hypothesis → prediction → experiment → analysis", "Theory → experiment → hypothesis → observation", "Conclusion → experiment → hypothesis"], answer: 1, difficulty: 1, explanation: "Observe, explain, predict, test, analyse — then loop." },
    { type: "concept", q: "Why must a physics claim be falsifiable?", answer: "must be testable|could be shown wrong|otherwise not science", difficulty: 3, explanation: "If no possible observation could disprove it, it makes no contact with reality — unfalsifiable claims aren't scientific." },
    { type: "short", q: "What should be done to reduce the effect of random errors?", answer: "repeat and average|more trials|take mean", difficulty: 1, explanation: "Repeated trials averaged together cancel out scatter." },
    { type: "mcq", q: "Maxwell predicting radio waves before they were detected shows:", options: ["Experiments always come first", "Theory can predict new phenomena", "Peer review is unnecessary", "Laws replace theories"], answer: 1, difficulty: 2, explanation: "Good theories make successful predictions of things not yet observed — a hallmark of their power." }
  ]
};

/* --- p1-4: The Mission of Physics and Career Awareness --- */
Lessons["g11-physics-up1-t4"] = {
  overview: "Physics has a mission — understand nature and use that understanding to relieve human problems — and a surprising range of careers behind it. This topic maps where a physics education can actually take you, in Ethiopia and globally.",
  objectives: [
    "State the twin mission of physics (understanding + application)",
    "Map physics career paths: research, industry, medicine, finance, education",
    "Identify the transferable skills a physics training builds",
    "Explore emerging fields hiring physicists (data science, AI, quantum tech, renewables)"
  ],
  simple: "The mission: figure out how the universe works, then use it — cure disease, generate power, connect people. And careers? Way beyond 'professor'. Physicists build rockets, price stocks, design MRI machines, write AI, audit hospital radiation, teach, and run telecom networks. The training teaches you to model messy problems quantitatively — employers everywhere want that.",
  detailed: `<p><b>The mission of physics:</b>
<br>1. <b>Understanding</b> — a fundamental drive: what is space, time, matter, energy? Why do the laws have the form they do?
<br>2. <b>Application for human welfare</b> — energy systems, medical diagnostics and therapy, clean water, climate modelling, disaster early-warning, communications for all.</p>
<p><b>Career map — where physicists work:</b>
<br>• <b>Research & academia</b>: universities, national labs (CERN, DESY), observatories. Path: BSc → MSc → PhD → postdoc → faculty.
<br>• <b>Health physics / medical physics</b>: run radiotherapy planning, ensure radiation safety in hospitals, develop imaging. Huge demand in African hospitals.
<br>• <b>Energy & environment</b>: power engineers (hydro, solar, grid), climate scientists, petroleum/geophysicists.
<br>• <b>Telecoms & electronics</b>: RF engineers, fibre-optic networks, chip design (Ethio Telecom, Huawei-type roles).
<br>• <b>Data science & finance</b>: physicists' statistical modelling transfers directly — 'quants' on trading floors, ML engineers in tech.
<br>• <b>Education & communication</b>: teaching, textbook authoring, science journalism, museums.
<br>• <b>Engineering & industry</b>: aerospace, automotive, materials testing, quality control, patents/IP law (with extra law training).
<br>• <b>Emerging</b>: quantum computing companies, space industry (Ethiopia's Space Science and Geospatial Institute!), fusion programmes, AI research.</p>
<p><b>Transferable skills (why employers hire physicists for anything):</b> quantitative modelling, programming (Python is the modern lab notebook), statistics, instrumentation, first-principles problem decomposition, technical writing, and comfort with being wrong until the data says otherwise.</p>
<p><b>Ethiopian landscape:</b> Addis Ababa University and regional universities produce physics graduates; employers include the Ethiopian Space Science and Geospatial Institute (ESSGI), Ethiopian Meteorological Institute, Ethiopian Electric Power (GERD operations), Ethio Telecom, hospitals with radiotherapy (Tokura Cancer Center), EMI (metrology), plus teaching and growing tech startups. Africa-wide: SKA radio telescope project, nuclear medicine expansion, renewable-energy boom.</p>
<p><b>Choosing a path:</b> research needs a PhD; most industry roles value MSc + internships + coding; medicine-adjacent physics (medical physics) needs clinical certification. Practical advice: keep programming and data skills sharp — they multiply every option.</p>`,
  keyTerms: [
    { term: "Medical physicist", def: "Specialist ensuring safe, effective radiation and imaging in hospitals." },
    { term: "Health physicist", def: "Radiation-safety professional (dosimetry, protection standards)." },
    { term: "Quant", def: "Quantitative analyst applying physical/statistical modelling in finance." },
    { term: "Transferable skills", def: "Abilities (modelling, coding, statistics) usable outside research." },
    { term: "ESSGI", def: "Ethiopian Space Science and Geospatial Institute — national space research body." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A G12 physics-loving student wants a career that uses physics but doesn't require a PhD. Map two realistic paths with their required steps.",
      given: "Career planning.",
      formula: "Path analysis: education → certification → role.",
      substitution: "Path 1 — Medical/health physics technician: BSc Physics → hospital dosimetry/imaging training → radiology department roles. Path 2 — Data analyst: BSc Physics + Python/SQL projects + internship → tech/bank analytics team.",
      calculation: "Both value the physics degree's modelling + statistics without doctoral training.",
      answer: "Physics BSc + targeted skills (clinical certification or programming) opens hospital and data careers directly."
    },
    {
      problem: "A hospital is installing a new radiotherapy machine. Name three physics-profession roles needed for safe operation and what each does.",
      given: "Radiotherapy unit.",
      formula: "Team composition.",
      substitution: "Medical physicist: plans dose distributions, verifies machine output. Health physicist: radiation protection, staff dosimeters, shielding checks. Radiographer (physics-trained): operates equipment, positions patients.",
      calculation: "Plus the radiation oncologist (medical doctor) prescribes treatment.",
      answer: "Safe radiotherapy is a physics team sport — planning, protection and operation all require physics expertise."
    },
    {
      problem: "Show how GERD's operations team draws on at least four physics career specialisations.",
      given: "A 5,150 MW hydroelectric plant.",
      formula: "Workforce mapping.",
      substitution: "Mechanics/fluid physicists → turbine & spillway engineering; electromagnetism engineers → generators and grid synchronisation; materials physicists → dam concrete and corrosion monitoring; seismologists → reservoir-induced seismicity monitoring; data analysts → output forecasting.",
      calculation: "One project, an entire physics job market.",
      answer: "National infrastructure is applied physics staffed by applied physicists."
    }
  ],
  commonMistakes: [
    "Believing physics degrees lead only to teaching — the job market is far wider.",
    "Thinking you must decide your career before university — paths branch AFTER the degree.",
    "Underestimating coding: modern physics IS computational, and it's the biggest career multiplier.",
    "Assuming research is the only 'real' physics career — industry and medicine need physicists more numerously."
  ],
  applications: [
    "Space: ESSGI satellite and geospatial programmes hire physicists.",
    "Medicine: radiotherapy, MRI/NURD imaging, and dosimetry are physics-staffed.",
    "Energy: hydro, solar and grid companies; Ethiopia's renewable expansion.",
    "Finance & tech: banks and startups recruit physicists for modelling and ML.",
    "Metrology & standards: EMI calibration labs.",
    "Weather & climate: Ethiopian Meteorological Institute forecasting models."
  ],
  summary: "Physics' mission: understand nature, then serve humanity. Careers span research, medicine, energy, telecoms, finance, space, data science and education. The degree's real product is quantitative modelling + programming + statistics — transferable everywhere. Ethiopia's own institutions (ESSGI, EMI, EEP, hospitals) are growing physics employers.",
  visuals: [
    { type: "flowChart", config: { steps: ["BSc Physics", "Choose track", "Research: MSc → PhD → labs/university", "Industry: internships + coding → energy/telecom/data", "Medical: certification → hospital physics", "Education: teaching/communication"], title: "Career Branches from One Degree" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A G12 physics-loving student wants a career that uses physics but doesn't require a PhD.…","a":"<b>Answer:</b> Physics BSc + targeted skills (clinical certification or programming) opens hospital and data careers directly."},{"q":"A hospital is installing a new radiotherapy machine. Name three physics-profession roles…","a":"<b>Answer:</b> Safe radiotherapy is a physics team sport — planning, protection and operation all require physics expertise."},{"q":"Show how GERD's operations team draws on at least four physics career specialisations.","a":"<b>Answer:</b> National infrastructure is applied physics staffed by applied physicists."}]}}],
  questions: [
    { type: "mcq", q: "A specialist who plans radiation doses and checks therapy machines in a hospital is a:", options: ["Radiation oncologist", "Medical physicist", "Pharmacist", "Biologist"], answer: 1, difficulty: 1, explanation: "Medical physicists handle dosimetry, machine QA and treatment planning." },
    { type: "concept", q: "State the two parts of the mission of physics.", answer: "understand nature and apply for human welfare|fundamental understanding plus practical benefit", difficulty: 1, explanation: "Knowledge for its own sake AND knowledge in service of society." },
    { type: "mcq", q: "Which skill most multiplies a physics graduate's job options?", options: ["Typing speed", "Programming/data analysis", "Public speaking only", "Driving licence"], answer: 1, difficulty: 1, explanation: "Coding and data skills turn physics modelling ability into employability across industries." },
    { type: "tf", q: "Physics graduates can only work in research or teaching.", answer: false, difficulty: 1, explanation: "Finance, tech, medicine, energy, telecoms, law (IP) and journalism all actively recruit physicists." },
    { type: "short", q: "Name the Ethiopian institute responsible for space science.", answer: "ethiopian space science|essgi|space science and geospatial", difficulty: 2, explanation: "ESSGI — Ethiopian Space Science and Geospatial Institute." },
    { type: "ordering", q: "Order the academic path to a university research career:", options: ["PhD → BSc → postdoc → faculty", "BSc → MSc → PhD → postdoc → faculty", "Postdoc → PhD → BSc → faculty", "MSc → faculty → PhD → BSc"], answer: [1], difficulty: 1, explanation: "Bachelor's, master's, doctorate, then training posts, then faculty." },
    { type: "concept", q: "Why do banks hire physicists as 'quants'?", answer: "modelling statistics transfer|mathematical modelling skills|data analysis ability", difficulty: 2, explanation: "Market risk is a noisy physical-like system — physicists' stochastic modelling and coding transfer directly." },
    { type: "mcq", q: "Which Ethiopian institution trains physics teachers and researchers at graduate level?", options: ["Addis Ababa University", "Ethiopian Airlines Academy", "TVET colleges only", "None exists"], answer: 0, difficulty: 1, explanation: "AAU hosts the country's leading physics department, MSc/PhD programs, and research centres." }
  ]
};

/* --- p1-5: Current Status of Physics --- */
Lessons["g11-physics-up1-t5"] = {
  overview: "Where does physics stand TODAY? Two pillars — general relativity and the Standard Model — explain almost everything, yet we know they're incomplete: dark matter, dark energy, quantum gravity and unification are the open frontiers. This topic is the map of what we know, what we don't, and the machines hunting the answers.",
  objectives: [
    "Describe the two pillars of modern physics and their domains",
    "Summarise the Standard Model of particle physics",
    "Identify the major open problems (dark matter, dark energy, quantum gravity)",
    "Recognise current big experiments and frontiers (LHC, LIGO, fusion, quantum tech)"
  ],
  simple: "Modern physics rests on two giants: Einstein's relativity (gravity, cosmos) and quantum mechanics (atoms, particles). Both work spectacularly — but they refuse to combine, and 95% of the universe is missing from our account (dark matter + dark energy). Today's frontier machines: the LHC smashes protons, LIGO hears black holes collide, fusion reactors chase clean power, and quantum computers are arriving. Physics isn't 'finished' — it's wide open.",
  detailed: `<p><b>The two pillars:</b>
<br>• <b>General relativity (1915)</b>: gravity = curvature of spacetime by mass-energy. Confirmed by light bending, Mercury's orbit, gravitational waves (LIGO, 2015), black-hole imaging (EHT, 2019), and GPS corrections.
<br>• <b>Quantum mechanics + Standard Model</b>: matter = quarks & leptons; forces = photon, gluons, W/Z bosons; the Higgs boson (2012) completed the particle roster. Tested to parts-per-billion precision.</p>
<p><b>Known unknowns — why we know the pillars are incomplete:</b>
<br>• <b>Dark matter (~27% of the universe)</b>: galaxies and clusters show ~5× more gravity than visible matter explains; rotation curves stay flat far beyond the stars. Candidates (WIMPs, axions) haven't been detected yet.
<br>• <b>Dark energy (~68%)</b>: the universe's expansion is ACCELERATING (1998 supernova discovery) — a repulsive property of space itself we don't understand.
<br>• <b>Quantum gravity</b>: GR is smooth geometry, QM is discrete quanta — they clash at black-hole centres and the Big Bang (Planck scale). String theory and loop quantum gravity compete; no experiment yet decides.
<br>• <b>Matter–antimatter asymmetry</b>: the Big Bang should have made equal matter and antimatter; here we are — something broke the symmetry.
<br>• <b>Neutrino masses, hierarchy of forces, the measurement problem</b> — more open doors.</p>
<p><b>Today's great machines & programmes:</b>
<br>• <b>LHC (CERN)</b>: 27-km proton collider; found the Higgs; now hunting dark-matter particles and new symmetries.
<br>• <b>LIGO/Virgo/KAGRA</b>: gravitational-wave observatories — 'hearing' black-hole and neutron-star mergers; multi-messenger astronomy is born.
<br>• <b>JWST</b>: infrared space telescope reshaping galaxy-formation theory.
<br>• <b>ITER</b>: 35-nation fusion reactor under construction in France — net-energy fusion was demonstrated (NIF, Dec 2022: output > input laser energy).
<br>• <b>Quantum technologies</b>: quantum computers (superconducting/ion-trap), quantum cryptography, atomic clocks redefining the second.</p>
<p><b>Frontiers in condensed matter & beyond</b>: room-temperature superconductivity pursuit, topological materials for fault-tolerant qubits, spintronics, metamaterials with negative refraction.</p>
<p><b>African/Ethiopian participation</b>: SKA (Square Kilometre Array) radio telescope in southern Africa — pulsars, hydrogen mapping, cosmology; Ethiopian physicists in gravitational-wave collaborations and ESSGI's space programme; the African School of Physics regularly hosts Nobel laureates.</p>`,
  keyTerms: [
    { term: "Standard Model", def: "Quantum theory of particles and three forces (EM, weak, strong) — excluding gravity." },
    { term: "Dark matter", def: "Unseen mass (~27% of universe) revealed by its gravity." },
    { term: "Dark energy", def: "Unknown cause of the accelerating cosmic expansion (~68%)." },
    { term: "Quantum gravity", def: "The sought theory uniting GR and quantum mechanics." },
    { term: "Gravitational waves", def: "Ripples in spacetime from accelerating masses — detected by LIGO (2015)." },
    { term: "Nuclear fusion", def: "Light nuclei merging (Sun's power source); 2022's net-gain milestone at NIF." },
    { term: "SKA", def: "Square Kilometre Array — giant radio telescope project in southern Africa." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Galaxy rotation curves: stars far from the galactic centre orbit faster than visible mass allows. Explain the reasoning that leads physicists to postulate dark matter.",
      given: "v should fall as 1/√r beyond the visible disc (Kepler); it stays flat instead.",
      formula: "Gravity provides centripetal force: GM(r)v² relation.",
      substitution: "Flat v(r) means M(r) keeps growing with radius — mass exists where light doesn't.",
      calculation: "Inference: a halo of non-luminous matter surrounds galaxies, ~5× the visible mass.",
      answer: "The mismatch between observed motion and visible mass is the classic evidence chain for dark matter — we detect it gravitationally, not optically."
    },
    {
      problem: "Why do physicists say 'the Standard Model cannot be the final theory' even though every prediction so far succeeded?",
      given: "Perfect experimental record within its domain.",
      formula: "Scope analysis.",
      substitution: "It omits gravity entirely; can't explain dark matter, dark energy, neutrino masses, or the matter–antimatter imbalance.",
      calculation: "Cosmological observations (CMB, rotation curves) demand ~95% of content the model doesn't contain.",
      answer: "A theory can be extraordinarily accurate within its domain and still be incomplete — the missing pieces are observed, not imagined."
    },
    {
      problem: "LIGO detected merging black holes 1.3 billion light-years away. Explain what 'hearing' means physically and why it confirmed a 100-year-old prediction.",
      given: "GW150914 signal, 2015.",
      formula: "Gravitational waves stretch/squeeze distances by ~10⁻²¹.",
      substitution: "Two 4-km laser arms measured length changes smaller than a proton's width as the wave passed.",
      calculation: "The chirp waveform matched numerical relativity's prediction for 30+30 M☉ black holes merging.",
      answer: "Ripples in spacetime itself — exactly what GR predicted in 1916 — opening gravitational-wave astronomy."
    }
  ],
  commonMistakes: [
    "Saying 'physics is basically finished' — the 95% dark sector and quantum gravity are glaring gaps.",
    "Confusing dark matter with dark energy — one pulls (structure), the other pushes (expansion).",
    "Thinking the Standard Model includes gravity — it doesn't; that's the whole problem.",
    "Believing the Higgs discovery 'ended' particle physics — it opened precision questions (why so light?).",
    "Mixing up fission (splitting heavy nuclei — today's reactors) with fusion (merging light ones — the Sun, tomorrow's hope)."
  ],
  applications: [
    "Fusion research (ITER, NIF net gain) targets near-limitless clean energy.",
    "Quantum computing and quantum-secure communication are the next IT revolution.",
    "Gravitational-wave astronomy is a brand-new sense for observing the universe.",
    "Accelerator physics already gives medicine (proton therapy, isotope production).",
    "Atomic-clock research redefines SI units and powers GPS-grade navigation.",
    "SKA will map hydrogen across cosmic history from African soil."
  ],
  summary: "Modern physics = relativity (gravity/cosmos) + Standard Model (particles/forces), both superbly tested yet provably incomplete: dark matter, dark energy, quantum gravity, antimatter asymmetry. The frontier: LHC, LIGO, JWST, ITER fusion, quantum technologies — with African projects (SKA) joining the hunt.",
  visuals: [
    { type: "flowChart", config: { steps: ["Visible matter 5%", "Dark matter 27% (gravity-only)", "Dark energy 68% (accelerating expansion)", "Known physics covers only the 5%"], title: "The Universe's Budget — What We Understand" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Galaxy rotation curves: stars far from the galactic centre orbit faster than visible mass…","a":"<b>Answer:</b> The mismatch between observed motion and visible mass is the classic evidence chain for dark matter — we detect it gravitationally, not optically."},{"q":"Why do physicists say 'the Standard Model cannot be the final theory' even though every p…","a":"<b>Answer:</b> A theory can be extraordinarily accurate within its domain and still be incomplete — the missing pieces are observed, not imagined."},{"q":"LIGO detected merging black holes 1.3 billion light-years away. Explain what 'hearing' me…","a":"<b>Answer:</b> Ripples in spacetime itself — exactly what GR predicted in 1916 — opening gravitational-wave astronomy."}]}}],
  questions: [
    { type: "mcq", q: "Which two theories form the pillars of modern physics?", options: ["Mechanics and optics", "General relativity and quantum mechanics", "Thermodynamics and electromagnetism", "Acoustics and astronomy"], answer: 1, difficulty: 1, explanation: "GR governs gravity and the cosmos; QM governs atoms and particles — and they don't yet unify." },
    { type: "mcq", q: "The Standard Model describes:", options: ["All four forces including gravity", "Three forces and fundamental particles, excluding gravity", "Only the strong force", "Galaxy formation"], answer: 1, difficulty: 2, explanation: "EM, weak and strong forces plus quarks/leptons/bosons — gravity is left out." },
    { type: "mcq", q: "Evidence for dark matter comes mainly from:", options: ["Telescope photographs of it", "Gravitational effects on galaxy rotation and lensing", "Chemical analysis", "Radio signals"], answer: 1, difficulty: 2, explanation: "It doesn't emit light; we infer it from extra gravity in rotation curves, clusters and lensing." },
    { type: "tf", q: "The expansion of the universe is slowing down.", answer: false, difficulty: 2, explanation: "1998 supernova observations showed it is ACCELERATING — attributed to dark energy." },
    { type: "short", q: "In what year did LIGO first detect gravitational waves?", answer: "2015", difficulty: 2, explanation: "GW150914, detected September 2015, announced February 2016." },
    { type: "mcq", q: "The 2012 Higgs boson discovery completed the particle roster of:", options: ["General relativity", "The Standard Model", "String theory", "Quantum electrodynamics"], answer: 1, difficulty: 1, explanation: "The Higgs was the last unobserved particle predicted by the Standard Model." },
    { type: "ordering", q: "Order by size-scale of the frontier projects:", options: ["LHC (km) → LIGO arms (km) → qubits (µm) → quarks (10⁻¹⁸ m)", "Quarks → qubits → LIGO → LHC", "LIGO → quarks → LHC → qubits", "Qubits → LHC → quarks → LIGO"], answer: [0], difficulty: 3, explanation: "From 27-km colliders down to subatomic scales — physics probes both extremes." },
    { type: "concept", q: "Why is quantum gravity needed — what goes wrong without it?", answer: "black holes big bang|gr and qm clash|singularity extreme conditions", difficulty: 3, explanation: "At Planck-scale extremes (black-hole centres, the Big Bang) both theories apply at once, but smooth spacetime and quantum discreteness contradict each other — predictions break down." },
    { type: "mcq", q: "The 2022 NIF milestone achieved:", options: ["First fusion reactor for electricity", "Fusion output energy exceeding input laser energy", "A room-temperature superconductor", "Dark matter detection"], answer: 1, difficulty: 3, explanation: "Net energy GAIN in the reaction — a physics milestone, though commercial fusion remains decades away." }
  ]
};
