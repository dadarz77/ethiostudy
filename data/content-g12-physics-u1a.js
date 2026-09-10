/* Content: Grade 12 Physics — Unit 1 (part A): topics 1-2 */
window.Lessons = window.Lessons || {};

Lessons["g12-physics-up1-t1"] = {
  overview: "Physics is the bedrock science: its laws set the stage wherever matter and energy appear. This topic maps how physics underpins chemistry, biology, geology, astronomy and modern technology — and why 'interdisciplinary' is not a buzzword but the way real discoveries happen.",
  objectives: [
    "Explain how physics laws constrain chemistry (thermodynamics, atomic structure)",
    "Give examples of physics techniques used in biology and medicine",
    "Describe the role of instrumentation in geology and astronomy",
    "Distinguish fundamental from applied research with examples",
    "Relate SI units and measurement to every science field"
  ],
  simple: "<b>One science, many faces.</b> Chemistry is applied atomic physics; biology obeys thermodynamics; geology reads Earth through seismic waves; astronomy is physics performed at a distance. Whenever a scientist measures, models or transfers energy, physics tools are already in the room. The Ethiopian Higher Education Entrance exam loves the 'which physics principle is used in X' matching question — think energy, waves, forces.",
  detailed: "<p><b>Physics → chemistry.</b> The periodic table is a physics result: electron shells, quantised energy levels and the Pauli principle (all quantum mechanics) explain why elements bond and react as they do. Thermodynamics — a physics theory of heat — tells chemists which reactions release energy and which demand it. Spectroscopy identifies substances by the light they absorb or emit, a direct application of atomic physics.</p><p><b>Physics → biology and medicine.</b> Vision is optics (lens + detector), echolocation is acoustics, nerve signals are electrical circuits carrying 100 m/s pulses. X-ray diffraction revealed DNA's double helix; MRI images bodies using nuclear spin in magnetic fields. Bio-mechanics applies Newton's laws to bones, joints and muscles.</p><p><b>Physics → Earth and space.</b> Seismology uses wave physics to image Earth's interior without drilling. Radiometric dating uses nuclear half-lives to age rocks. Astronomy runs on gravity and spectroscopy: a star's composition, temperature, motion and distance all come from analysing its light.</p><p><b>Measurement as the common language.</b> Every field borrows SI units, the scientific method, and error analysis. A biologist counting cells with a microscope and a geologist dating zircons both depend on instruments whose limits are set by optics and nuclear physics respectively.</p><p><b>Interdisciplinary engine.</b> The biggest modern tools are hybrids: synchrotrons (physics machines answering chemistry and biology questions), computed tomography (X-rays + algorithms), climate models (fluid dynamics + radiation physics + chemistry). The MoE syllabus frames this as 'application of physics in other fields' — the exam expects named examples, not vague praise of science.</p>",
  keyTerms: [
    { term: "Fundamental science", def: "research seeking laws themselves, e.g. quantum mechanics" },
    { term: "Applied science", def: "using known laws to solve problems, e.g. medical imaging" },
    { term: "Spectroscopy", def: "identifying matter from the light it absorbs/emits" },
    { term: "Radiometric dating", def: "ageing rocks via nuclear half-lives" },
    { term: "Interdisciplinary", def: "work crossing field boundaries using shared physics tools" },
    { term: "Bio-mechanics", def: "mechanics of living bodies" }
  ],
  formulas: [
    { name: "Photon energy (the chemistry bridge)", formula: "E = hf", meaning: "spectral lines come from quantised atomic transitions", vars: [{ name: "h", meaning: "Planck's constant 6.63×10⁻³⁴ J·s" }, { name: "f", meaning: "frequency of the light" }], when: "any interaction of light with atoms" }
  ],
  workedExamples: [
    { problem: "A UV photon of frequency 3.0×10¹⁵ Hz breaks a chemical bond. Its energy?", calculation: "E = hf = 6.63×10⁻³⁴ × 3.0×10¹⁵ = 1.99×10⁻¹⁸ J", answer: "≈ 2×10⁻¹⁸ J per photon — enough to snap typical molecular bonds, hence UV's chemical power." },
    { problem: "Why does carbon-14 date old wood but not million-year-old rock?", calculation: "C-14 half-life 5 730 yr: after ~50 000 yr too little remains. Rocks need long isotopes (U-238: 4.5 billion yr).", answer: "The method must match the timescale — physics sets the dating window." },
    { problem: "An echolocating bat detects an insect 5 m away. Time for the echo?", calculation: "round trip 10 m at 340 m/s: t = 10/340 ≈ 0.029 s", answer: "≈ 29 ms — biology running on acoustics." },
    { problem: "Name the physics behind each: MRI, X-ray crystallography, GPS.", calculation: "MRI: nuclear spin in B-fields; crystallography: wave diffraction; GPS: relativity-corrected radio timing.", answer: "three 'other fields' transformed by three physics principles." }
  ],
  commonMistakes: [
    "Saying chemistry/biology are 'unrelated' sciences — their laws rest on physics",
    "Confusing what spectroscopy measures (composition via light) with what it is not (a microscope)",
    "Using carbon-14 for dinosaur-age samples (wrong half-life window)",
    "Forgetting relativity corrections in GPS — real engineering depends on it",
    "Naming the instrument instead of the principle: an X-ray machine works because of diffraction/wave physics"
  ],
  applications: [
    "Medical imaging: X-ray, CT, MRI, ultrasound",
    "Archaeology: radiocarbon dating, ground-penetrating radar",
    "Agriculture: soil moisture probes, remote sensing by satellite spectra",
    "Industry: flaw detection with ultrasound and X-ray radiography"
  ],
  summary: "Physics supplies the laws, the instruments and the units that every other science runs on. Know one named example per field for the exam.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Identifying a star's chemical composition is possible because of:", options: ["its brightness alone", "spectral absorption lines", "telescope size", "its distance"], answer: 1, difficulty: 1, explanation: "Atoms absorb characteristic frequencies — spectroscopy reads composition from dark lines." },
    { type: "mcq", q: "Radiometric dating relies directly on:", options: ["constant nuclear decay rates", "chemical reaction speed", "fossil layers", "magnetic reversals"], answer: 0, difficulty: 1, explanation: "Half-lives are physics: nuclear decay, temperature-independent." },
    { type: "mcq", q: "MRI images the body using:", options: ["ionising X-rays", "sound waves", "nuclear spin in magnetic fields", "electron beams"], answer: 2, difficulty: 1, explanation: "Hydrogen nuclei align in a B-field; their radio signals build the image." },
    { type: "mcq", q: "The discovery of DNA's structure was powered by:", options: ["seismic waves", "X-ray diffraction", "ultrasound", "radioactivity"], answer: 1, difficulty: 2, explanation: "Franklin's diffraction patterns revealed the helix — wave physics solving biology." },
    { type: "mcq", q: "A bat 'seeing' an insect is an example of biology using:", options: ["optics", "electrostatics", "acoustics/echo timing", "thermodynamics"], answer: 2, difficulty: 2, explanation: "Echo ranging = speed-of-sound × time, an acoustics calculation." },
    { type: "mcq", q: "Earth's core was inferred (never drilled) through:", options: ["ocean samples", "seismic wave behaviour", "volcano gas", "drill cores"], answer: 1, difficulty: 2, explanation: "Shadow zones of P/S waves map the interior — wave physics as an X-ray of the planet." },
    { type: "mcq", q: "GPS positions stay accurate because engineers correct for:", options: ["battery drift", "relativistic clock effects", "wind", "magnetism"], answer: 1, difficulty: 3, explanation: "Satellite clocks run differently by relativity; without corrections GPS drifts ~10 km/day." },
    { type: "mcq", q: "A photon of 6×10¹⁴ Hz carries energy about:", options: ["4×10⁻¹⁹ J", "1×10⁻³³ J", "6×10⁻¹⁴ J", "4×10⁻³ J"], answer: 0, difficulty: 3, explanation: "E = hf = 6.63×10⁻³⁴ × 6×10¹⁴ ≈ 4×10⁻¹⁹ J." }
  ]
};

Lessons["g12-physics-up1-t2"] = {
  overview: "Engineering is physics with constraints: budgets, materials, safety factors and humans. This topic traces how mechanics, electricity, thermodynamics and waves become bridges, power plants, telecom and the infrastructure projects reshaping Ethiopia.",
  objectives: [
    "Map physics principles to named engineering disciplines",
    "Explain why engineers use safety factors",
    "Analyse a simple structure for force balance",
    "Connect energy conversion chains in power engineering",
    "Cite Ethiopian engineering projects and their physics"
  ],
  simple: "<b>Theory meets concrete.</b> Civil engineers apply statics (ΣF = 0, Στ = 0); electrical engineers apply circuits and electromagnetism; mechanical engineers apply thermodynamics and dynamics. The engineer's extra ingredient is doubt: real loads, real materials, real people — so designs carry safety factors of 2–10, and the physics must survive mud, heat and a decade of traffic.",
  detailed: "<p><b>Statics of structures.</b> A bridge deck in equilibrium satisfies ΣF = 0 and Στ = 0; trusses turn bending into pure tension/compression along members, which is why triangles dominate bridge geometry. Stress σ = F/A and strain ε = ΔL/L meet at Young's modulus E = σ/ε — steel's high E makes cables thin and strong; concrete resists compression but cracks in tension, hence rebar.</p><p><b>Energy engineering.</b> A hydropower plant is a physics chain with no chemical step: potential energy mgh → kinetic → turbine torque → generator EMF (electromagnetic induction) → grid. Efficiency multiplies down the chain: 90% turbine × 95% generator ≈ 85% overall. The Grand Ethiopian Renaissance Dam converts ~5 000 MW of water power — thermodynamics and fluids wearing a hard hat.</p><p><b>Electrical and telecom engineering.</b> Power grids juggle voltage to slash I²R line losses (why 400 kV transmission); electronics engineers ride the semiconductor physics of Unit 5; fibre-optic engineers use total internal reflection to carry Ethiopia's telecom backbone.</p><p><b>Safety factors.</b> Ultimate strength ÷ working stress = factor of safety. Bridges use ~2–3, pressure vessels ~4, elevators ~8–12: uncertainty in loads, material defects, fatigue, corrosion and consequences of failure all inflate the number.</p><p><b>Thermal and mechanical design.</b> Engines and refrigerators obey Carnot ceilings; heat exchangers and cooling towers (Ethiopian flower farms use them) are applied thermodynamics. Expansion joints on roads exist because ΔL = αLΔT is not optional.</p><p><b>The exam angle:</b> given a device (pump, transformer, bridge), name the principle, the energy chain, and one efficiency loss — that three-part answer scores full marks.</p>",
  keyTerms: [
    { term: "Statics", def: "force and torque balance of structures at rest" },
    { term: "Young's modulus", def: "stiffness E = stress/strain of a material" },
    { term: "Safety factor", def: "ultimate strength divided by working stress" },
    { term: "Energy conversion chain", def: "sequence of transfers from source to output" },
    { term: "Fatigue", def: "failure under repeated cyclic loads below ultimate strength" },
    { term: "I²R loss", def: "transmission heating proportional to current squared" }
  ],
  formulas: [
    { name: "Stress and strain", formula: "σ = F/A,  ε = ΔL/L,  E = σ/ε", meaning: "load per area, stretch fraction, material stiffness", vars: [{ name: "F/A", meaning: "force over cross-section" }, { name: "L", meaning: "original length" }], when: "sizing members and cables" },
    { name: "Hydro potential", formula: "E = mgh = ρVgh", meaning: "energy per volume of water = ρgh", vars: [{ name: "ρ", meaning: "1000 kg/m³ for water" }, { name: "h", meaning: "head (height drop)" }], when: "turbine site planning" },
    { name: "Line loss", formula: "P_loss = I²R", meaning: "heat wasted in cables", vars: [{ name: "I", meaning: "line current" }, { name: "R", meaning: "cable resistance" }], when: "why grids step voltage up" },
    { name: "Thermal expansion", formula: "ΔL = αL₀ΔT", meaning: "length grows with temperature", vars: [{ name: "α", meaning: "coefficient per °C" }], when: "expansion joints, rail gaps" }
  ],
  workedExamples: [
    { problem: "Water drops 100 m at 50 m³/s through a turbine (g = 10). Power available?", given: "P = ρV̇gh", calculation: "P = 1000 × 50 × 10 × 100 = 5×10⁷ W = 50 MW", answer: "≈ 42–45 MW after ~85–90% turbine efficiency." },
    { problem: "A 10 m steel rail (α = 1.2×10⁻⁵) heats 40 °C. Expansion?", calculation: "ΔL = 1.2×10⁻⁵ × 10 × 40 = 4.8×10⁻³ m", answer: "4.8 mm — gaps prevent buckling." },
    { problem: "Transmit 10 kW at 200 V vs 2 kV on a 1 Ω line. Loss each?", calculation: "I = 50 A vs 5 A; P = I²R = 2 500 W vs 25 W.", answer: "Stepping up 10× cuts loss 100×." },
    { problem: "A 20 kN cable must lift with safety factor 5; steel ultimate 500 MPa. Minimum area?", calculation: "design stress = 100 MPa; A = 20 000/100×10⁶ = 2×10⁻⁴ m².", answer: "≥ 200 mm² (≈ 16 mm diameter)." }
  ],
  commonMistakes: [
    "Confusing stress (Pa) with force (N)",
    "Assuming efficiency adds instead of multiplies along a chain",
    "Thinking high voltage itself is what's transmitted — power is constant; current is what shrinks",
    "Ignoring torque balance when checking a beam (ΣF = 0 alone is not enough)",
    "Using a safety factor of 1 'because the math is exact' — materials scatter"
  ],
  applications: [
    "GERD and Ethiopian hydropower cascade",
    "Road expansion joints and rail gaps",
    "Ethio Telecom fibre backbone (total internal reflection)",
    "Building rebar design (concrete + steel partnership)"
  ],
  summary: "Engineering = physics × constraints. Name the principle, the energy chain, and where efficiency hides.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Trusses use triangles because they:", options: ["look strong", "carry load as pure tension/compression", "are cheap", "resist wind"], answer: 1, difficulty: 1, explanation: "A triangle's shape is fixed by its sides — loads go axial, avoiding weak bending." },
    { type: "mcq", q: "Power is transmitted at high voltage mainly to:", options: ["make wires cheaper to make", "reduce current and I²R losses", "increase speed of electrons", "avoid transformers"], answer: 1, difficulty: 1, explanation: "P = VI fixed; higher V → lower I → loss ∝ I² falls." },
    { type: "mcq", q: "Concrete is reinforced with steel because concrete is weak in:", options: ["compression", "tension", "heat", "water"], answer: 1, difficulty: 1, explanation: "Concrete crushes slowly but cracks under stretch; rebar takes the tension." },
    { type: "mcq", q: "A turbine gets 30 m³/s at 80 m head (g=10). Ideal power ≈:", options: ["24 MW", "2.4 MW", "240 kW", "240 MW"], answer: 0, difficulty: 2, explanation: "ρV̇gh = 1000×30×10×80 = 2.4×10⁷ W = 24 MW." },
    { type: "mcq", q: "Safety factors exist primarily because of:", options: ["architects' taste", "uncertainty in loads, materials, fatigue", "government rules only", "insurance fraud"], answer: 1, difficulty: 2, explanation: "Real-world scatter and unknown peaks demand margin above theory." },
    { type: "mcq", q: "Two stage efficiencies 90% and 95% give overall:", options: ["92.5%", "185%", "85.5%", "105%"], answer: 2, difficulty: 2, explanation: "Multiply: 0.90 × 0.95 = 0.855, not the average." },
    { type: "mcq", q: "Expansion gaps in bridges address:", options: ["ΔL = αLΔT of materials", "traffic vibration", "rain infiltration", "cable stretch"], answer: 0, difficulty: 2, explanation: "Seasonal temperature swings change length; gaps absorb it." },
    { type: "mcq", q: "A 50 m cable stretches 25 mm under load. Strain is:", options: ["0.05%", "5%", "0.5%", "50%"], answer: 0, difficulty: 3, explanation: "ε = ΔL/L = 0.025/50 = 0.0005 = 0.05%." }
  ]
};
