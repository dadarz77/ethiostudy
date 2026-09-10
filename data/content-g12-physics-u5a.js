/* Content: Grade 12 Physics — Unit 5 (part A): Basics of Electronics, topics 1-3 */
window.Lessons = window.Lessons || {};

Lessons["g12-physics-up5-t1"] = {
  overview: "Semiconductors are materials whose conductivity sits between copper and glass — and crucially, it can be switched and dialed. This topic builds the atomic picture (bands, holes, doping) that makes every chip in every phone possible.",
  objectives: [
    "Compare conductors, semiconductors and insulators by band structure",
    "Explain covalent bonding in silicon and the role of free electrons",
    "Describe n-type and p-type doping with donor/acceptor atoms",
    "State how temperature affects semiconductor conductivity",
    "Identify semiconductor materials and their uses"
  ],
  simple: "<b>Conductivity you can control.</b> Silicon has four valence electrons locked in covalent bonds — pure silicon barely conducts. Add a boron impurity (three valence electrons) and you get a 'hole' that acts like a positive charge: p-type. Add phosphorus (five valence electrons) and one electron roams free: n-type. Those two 'wrong' ingredients, in any pattern, are the entire electronics industry.",
  detailed: "<p><b>Band picture.</b> In solids, energy levels blur into bands: a full valence band and an empty conduction band. Conductors overlap them; insulators separate them by 5–10 eV; semiconductors (Si, Ge) sit ~1 eV apart, so heat or light can promote electrons across. Pure (intrinsic) silicon carries equal numbers of electrons and holes; conductivity rises with temperature — the opposite of metals, where vibrating atoms impede flow.</p><p><b>Doping.</b> Group-V atoms (P, As) in Si donate their fifth electron → n-type: electrons are majority carriers, negative for short. Group-III atoms (B, Ga) accept an electron, leaving a hole → p-type: holes are majority carriers. Dopants are added at parts per million: a gram of phosphorus treats kilograms of silicon yet defines its behaviour.</p><p><b>Holes are bookkeeping, not particles.</b> An electron shuffling one step into a neighbouring vacancy moves the vacancy the other way; collectively the hole carries +e. Current in p-type material is electrons' motion described as holes' motion — a convenience that makes circuits tractable.</p><p><b>Materials landscape.</b> Germanium (older, smaller gap 0.67 eV, leaky when hot), silicon (gap 1.1 eV, native oxide SiO₂ perfect for insulation), GaAs (fast, LEDs, satellite electronics), and modern wide-gap stars SiC and GaN for electric-vehicle inverters. Silicon won because sand is cheap and its oxide is the best insulator you can grow.</p><p><b>Why it matters in Ethiopia:</b> phones, meters, solar charge controllers, radios — every solid-state device starts as a doped crystal. Unit 5's components (diodes, transistors, ICs) are arrangements of the n/p junction this topic sets up.</p>",
  keyTerms: [
    { term: "Semiconductor", def: "material with conductivity between conductor and insulator, controllable" },
    { term: "Valence band / conduction band", def: "electron home and electron highway, split by a ~1 eV gap" },
    { term: "Intrinsic", def: "pure semiconductor; electrons = holes" },
    { term: "n-type", def: "donor-doped; electrons are majority carriers" },
    { term: "p-type", def: "acceptor-doped; holes are majority carriers" },
    { term: "Donor / acceptor", def: "5-valence atom giving an electron / 3-valence atom making a hole" }
  ],
  formulas: [
    { name: "Band gap (silicon)", formula: "E_g(Si) ≈ 1.1 eV, E_g(Ge) ≈ 0.67 eV", meaning: "energy to promote an electron across the gap", vars: [{ name: "eV", meaning: "1.6×10⁻¹⁹ J — energy an electron gains through 1 volt" }], when: "comparing materials and temperature limits" },
    { name: "Thermal energy", formula: "kT ≈ 0.026 eV at room temperature", meaning: "the random energy budget available for promotions", vars: [{ name: "k", meaning: "Boltzmann's constant 1.38×10⁻²³ J/K" }], when: "explaining why conductivity rises with temperature" }
  ],
  workedExamples: [
    { problem: "Classify dopants: antimony, gallium, arsenic, indium.", calculation: "Group V (Sb, As) donate electrons → n-type; Group III (Ga, In) create holes → p-type.", answer: "Sb, As: n-type; Ga, In: p-type." },
    { problem: "A phosphorus atom in silicon contributes how many free carriers without creating holes?", calculation: "Its fifth electron needs only ~0.045 eV to detach — far less than the 1.1 eV gap, so one donor ≈ one free electron, no new hole.", answer: "One conduction electron per donor atom (extrinsic, not intrinsic, conduction)." },
    { problem: "Why does a hot silicon rectifier leak current while a cold one blocks?", calculation: "At high T, kT rises and intrinsic carriers multiply (n_i ∝ e^{−E_g/2kT}); unwanted thermal electrons swamp the diode's blocking ability.", answer: "Thermal generation crosses the gap — devices have temperature ceilings." },
    { problem: "Convert 1.1 eV to joules per mole.", calculation: "1.1 × 1.6×10⁻¹⁹ J = 1.76×10⁻¹⁹ J per atom; ×6.02×10²³ ≈ 106 kJ/mol.", answer: "~106 kJ/mol — comparable to a strong chemical bond, which is why the gap matters for chemistry too." }
  ],
  commonMistakes: [
    "Thinking n-type material is negatively charged — the crystal stays neutral; only carriers move",
    "Calling holes real particles rather than electron vacancies with effective +charge",
    "Applying the metal rule 'hotter = worse conductor' to semiconductors (opposite)",
    "Confusing dopant atoms with charge carriers (dopants are fixed in the lattice)",
    "Saying silicon conducts well in pure form — intrinsic Si is close to an insulator"
  ],
  applications: [
    "Solar cells: light promotes carriers across the junction",
    "Temperature sensors: conductivity tracks kT",
    "Power electronics: SiC devices in EVs and grid inverters",
    "Every chip: billions of p/n regions etched into one wafer"
  ],
  summary: "Four valence electrons + million-part-per-million impurities = controllable conductivity. That control is electronics.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Silicon's band gap is about:", options: ["0.1 eV", "1.1 eV", "5 eV", "11 eV"], answer: 1, difficulty: 1, explanation: "Si ≈ 1.1 eV; Ge ≈ 0.67, diamond ≈ 5.5 — the middle value is the semiconductor signature." },
    { type: "mcq", q: "Doping silicon with phosphorus creates:", options: ["p-type", "n-type", "an insulator", "a metal"], answer: 1, difficulty: 1, explanation: "P has 5 valence electrons; the spare becomes a free electron → n-type." },
    { type: "mcq", q: "In p-type material the majority carriers are:", options: ["electrons", "holes", "protons", "neutrons"], answer: 1, difficulty: 1, explanation: "Acceptors create vacancies — holes — which outnumber electrons." },
    { type: "mcq", q: "Semiconductor conductivity with rising temperature:", options: ["decreases", "increases", "unchanged", "stops"], answer: 1, difficulty: 2, explanation: "More thermal promotions across the gap → more carriers; metals do the opposite." },
    { type: "mcq", q: "A hole is best described as:", options: ["a proton", "an electron vacancy acting like a positive carrier", "antimatter", "a dopant atom"], answer: 1, difficulty: 2, explanation: "The vacancy moves as electrons shuffle into it — bookkeeping with +e charge." },
    { type: "mcq", q: "n-type silicon overall is:", options: ["negatively charged", "positively charged", "electrically neutral", "charged only when hot"], answer: 2, difficulty: 2, explanation: "Donor nuclei (+5) balance donor electrons (5); extra mobility, no net charge." },
    { type: "mcq", q: "Germanium fell out of favour versus silicon mainly because:", options: ["it is rare", "its small gap causes thermal leakage", "it cannot be doped", "it is toxic"], answer: 1, difficulty: 3, explanation: "0.67 eV gap → intrinsic leakage at modest heat; Si also grows a superb oxide." },
    { type: "mcq", q: "Roughly how many free electrons does one antimony donor contribute at room temperature?", options: ["zero", "one", "three", "five"], answer: 1, difficulty: 3, explanation: "The fifth electron detaches easily (~0.045 eV): one donor ≈ one carrier." }
  ]
};

Lessons["g12-physics-up5-t2"] = {
  overview: "Put p-type and n-type side by side and one of engineering's most useful asymmetries appears: current flows easily one way and barely at all the other. The diode is that junction — this topic dissects how it forms and everything it is used for.",
  objectives: [
    "Describe depletion-layer formation at a p-n junction",
    "Explain forward and reverse bias with I-V curves",
    "State typical silicon and germanium barrier voltages",
    "Analyse diode uses: rectification, protection, LED, Zener",
    "Read a diode datasheet's key numbers"
  ],
  simple: "<b>The one-way street.</b> At a p-n junction, nearby carriers annihilate each other, leaving a thin depletion zone with a built-in ~0.7 V wall (silicon). Push forward with more than that: current floods. Push reverse: almost nothing flows until breakdown destroys the ordinary diode. One component, one direction — yet it underpins power supplies, radios, lights and logic.",
  detailed: "<p><b>Formation.</b> Holes diffuse from p into n and electrons the other way, recombining at the boundary and exposing fixed ions. Those ions create an internal field opposing further diffusion — equilibrium with a barrier of ~0.7 V (Si), ~0.3 V (Ge), wider for high-gap materials. No current flows overall: diffusion and drift balance exactly.</p><p><b>Bias behaviour.</b> Forward bias (p to +) thins the barrier: current rises exponentially above 0.6–0.7 V, doubling every ~25 mV at room temperature. Reverse bias widens it: a tiny µA leakage, then avalanche breakdown at the rating. This exponential law V_T ln(I/I_s) is why diodes are also temperature sensors.</p><p><b>The family.</b> Rectifier diodes (1N4007, 1 A/1000 V) harvest mains power; Zener diodes exploit controlled breakdown as voltage references; LEDs emit photons at the gap energy (E ≈ hf ≈ E_g — red ~1.9 V, blue ~3.2 V); photodiodes do the reverse (light makes current — solar cells are big ones); Schottky diodes swap the junction for a metal contact to get 0.3 V drops and blazing speed.</p><p><b>Reading specs.</b> Maximum forward current, peak inverse voltage (PIV), forward drop, reverse leakage, recovery time. Design mistakes cluster on PIV: a 50 V diode on a 230 V mains rectifier is a small explosion.</p><p><b>Exam shapes:</b> sketch the I-V curve with the knee labeled; explain why a series of 4 silicon diodes drops ~2.8 V; predict bulb behaviour when a diode is inserted in AC (half-wave flicker) — Unit 5's rectification topic builds directly on this one.</p>",
  keyTerms: [
    { term: "p-n junction", def: "the interface where diode magic lives" },
    { term: "Depletion layer", def: "carrier-free zone with built-in field" },
    { term: "Barrier potential", def: "≈0.7 V Si; the voltage to push through" },
    { term: "Forward / reverse bias", def: "conduct one way / block the other" },
    { term: "Avalanche breakdown", def: "reverse multiplication; fatal unless engineered (Zener)" },
    { term: "PIV", def: "peak inverse voltage rating" }
  ],
  formulas: [
    { name: "Diode equation", formula: "I = I_s(e^{V/nV_T} − 1)", meaning: "exponential current above the knee", vars: [{ name: "V_T", meaning: "kT/e ≈ 26 mV at 300 K" }, { name: "n", meaning: "ideality factor 1–2" }], when: "modelling forward drop and temperature sensing" },
    { name: "LED colour energy", formula: "E_g ≈ hf = hc/λ", meaning: "gap sets the photon's wavelength", vars: [{ name: "λ", meaning: "emitted colour" }], when: "why red LEDs run 1.9 V and blue 3.2 V" }
  ],
  workedExamples: [
    { problem: "4 silicon diodes in series across a supply, each conducting. Total drop?", calculation: "Each knee ≈ 0.7 V → 4 × 0.7 = 2.8 V.", answer: "≈ 2.8 V — used as cheap voltage droppers for indicator strings." },
    { problem: "A blue LED (450 nm) needs about what gap?", given: "E = hc/λ", calculation: "E = 6.63×10⁻³⁴ × 3×10⁸ / 450×10⁻⁹ = 4.4×10⁻¹⁹ J = 2.76 eV.", answer: "≈ 2.8 eV gap, ~3.2 V forward drop in practice." },
    { problem: "Mains 230 V RMS rectified by one diode. Minimum PIV?", calculation: "Peak = 230√2 ≈ 325 V; the diode must block that reversed.", answer: "PIV ≥ 325 V — the 1N4007 (1000 V) is chosen with margin." },
    { problem: "Current doubles per 25 mV at room T. Factor from 0.60 V to 0.65 V?", calculation: "50 mV / 25 mV = 2 doublings → ×4.", answer: "~4× more current for 50 mV extra — the exponential knee in action." }
  ],
  commonMistakes: [
    "Forgetting the 0.7 V drop and treating a forward diode as a wire",
    "Assuming reverse bias is exactly zero current (µA leakage exists)",
    "Exceeding PIV when selecting rectifier diodes",
    "Confusing Zener controlled breakdown with destructive avalanche in normal diodes",
    "Wiring LEDs without a current-limiting resistor — exponential current cooks them"
  ],
  applications: [
    "Phone chargers: bridge rectifiers from AC mains",
    "Reverse-polarity protection on car radios",
    "Indicator lights (LEDs) from traffic signals to dashboard icons",
    "Radio demodulation: detecting AM carriers"
  ],
  summary: "One junction, one-way current. Forward drop 0.7 V, exponential above it, block below PIV — everything else is variants.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The silicon diode forward knee is near:", options: ["0.3 V", "0.7 V", "1.5 V", "7 V"], answer: 1, difficulty: 1, explanation: "0.7 V barrier for Si; Ge is 0.3, GaAs higher." },
    { type: "mcq", q: "Reverse bias makes the depletion layer:", options: ["thinner", "wider", "unchanged", "vanish"], answer: 1, difficulty: 1, explanation: "Pulling carriers away exposes more fixed ions — the wall grows." },
    { type: "mcq", q: "A Zener diode uses breakdown to:", options: ["amplify signals", "regulate a reference voltage", "rectify AC", "emit light"], answer: 1, difficulty: 1, explanation: "Controlled reverse breakdown holds voltage steady." },
    { type: "mcq", q: "Depletion layer formation stops diffusion because:", options: ["carriers run out", "the internal field opposes further diffusion", "temperature drops", "holes are heavier"], answer: 1, difficulty: 2, explanation: "Fixed ions create a field; equilibrium when drift = diffusion." },
    { type: "mcq", q: "A solar cell is physically a photodiode that:", options: ["emits light", "converts photon-generated carriers into current", "stores charge", "regulates voltage"], answer: 1, difficulty: 2, explanation: "Light creates e-h pairs; the junction separates them into a current." },
    { type: "mcq", q: "Series 3 Si diodes conducting drop about:", options: ["0.7 V", "2.1 V", "3.0 V", "10 V"], answer: 1, difficulty: 2, explanation: "3 × 0.7 = 2.1 V." },
    { type: "mcq", q: "Why does an LED need a series resistor?", options: ["to raise voltage", "because exponential I-V makes current unbounded", "to make light steady-coloured", "it does not"], answer: 1, difficulty: 3, explanation: "Past the knee, tiny V gains → huge I gains; the resistor sets the current." },
    { type: "mcq", q: "Reverse leakage roughly doubles with each 10 °C rise. A 1 µA diode at 25 °C at 45 °C leaks about:", options: ["2 µA", "4 µA", "8 µA", "16 µA"], answer: 1, difficulty: 3, explanation: "Two 10 °C steps → 2² = 4× → 4 µA." }
  ]
};

Lessons["g12-physics-up5-t3"] = {
  overview: "Rectification is the diode's day job: turning the alternating current from the grid into the steady direct current that every electronic device actually runs on. Half-wave, full-wave, and the smoothing capacitor between them and real power supplies.",
  objectives: [
    "Explain half-wave rectification and its low duty",
    "Draw/analyse a full-wave bridge using four diodes",
    "Compute peak output from RMS input (V_p = V_rms√2)",
    "Describe capacitor smoothing and ripple",
    "Estimate ripple size and why regulators follow"
  ],
  simple: "<b>Catching the swings.</b> Mains voltage is a sine wave flipping direction 50 times a second (100 zero-crossings/s in Ethiopia's 50 Hz grid). A single diode chops off the negative halves (half-wave); a bridge of four bends them up instead (full-wave), doubling the pulses. A capacitor then fills the gaps between pulses like a reservoir between rainstorms, leaving ripple that a regulator finally flattens into clean DC.",
  detailed: "<p><b>Half-wave.</b> One diode passes only positive halves: the load gets 50 pulses per second and half the energy is simply discarded. Mean output = V_p/π ≈ 0.31 V_p. Cheap, but the hum is huge and the transformer is DC-biased; fine for signal detection, poor for power.</p><p><b>Full-wave bridge.</b> Four diodes steer both halves to the same load polarity: on positive cycles D1+D2 conduct, on negative D3+D4. Output pulses at 100 Hz (Ethiopia's 50 Hz grid doubled), mean ≈ 2V_p/π ≈ 0.64 V_p minus two diode drops (1.4 V on silicon — a real loss in low-voltage supplies). PIV stress on each non-conducting diode is just V_p, the bridge's quiet advantage over centre-tap designs.</p><p><b>Smoothing.</b> A capacitor across the load charges when the pulses rise and discharges into the load between them. Ripple droop ≈ I/(2fC): 1 A drawn with 1000 µF on a 50 Hz line gives ΔV ≈ 1/(100×0.001) = 10 V. Bigger C, smaller load current, or higher pulse rate all flatten it. The cap must also survive V_p — a 230 V supply needs 400 V-rated electrolytics.</p><p><b>After the filter.</b> Even smoothed DC rides on ripple and drifts with load. Linear regulators (7805-style) and switching regulators clamp it to spec; phone chargers switch at tens of kHz so their filter parts shrink from beer-can capacitors to coins.</p><p><b>Exam shapes:</b> trace which two of four bridge diodes conduct on each half-cycle; compute V_p from mains RMS then mean load voltage with diode drops; estimate ripple for given I, f, C; choose PIV and voltage ratings from a spec sheet.</p>",
  keyTerms: [
    { term: "Rectifier", def: "circuit converting AC to pulsing DC" },
    { term: "Half-wave", def: "only one polarity reaches the load" },
    { term: "Full-wave bridge", def: "four diodes use both halves" },
    { term: "Ripple", def: "residual wiggle after smoothing" },
    { term: "Filter capacitor", def: "reservoir that charges at peaks, feeds the load between them" }
  ],
  formulas: [
    { name: "Peak from RMS", formula: "V_p = V_rms√2", meaning: "230 V mains peaks at 325 V", vars: [{ name: "rms", meaning: "heating-equivalent value" }], when: "rating capacitors and diodes" },
    { name: "Full-wave average", formula: "V_mean ≈ 2V_p/π", meaning: "≈ 64% of peak unsmoothed", vars: [{ name: "V_p", meaning: "minus 2 diode drops" }], when: "before the filter cap" },
    { name: "Ripple estimate", formula: "ΔV ≈ I/(2fC)", meaning: "droop between charge pulses", vars: [{ name: "f", meaning: "line frequency (full-wave: 2×50 = 100 Hz)" }, { name: "C", meaning: "filter capacitance" }], when: "sizing smoothing caps" }
  ],
  workedExamples: [
    { problem: "Ethiopian mains 230 V RMS into a bridge. Peak output before the cap?", calculation: "V_p = 230√2 ≈ 325 V; minus 2 diode drops = 325 − 1.4 ≈ 324 V.", answer: "≈ 324 V peak — and every cap downstream must be rated above it." },
    { problem: "Unsmoothed full-wave average of that 324 V peak?", calculation: "V_mean = 2V_p/π = 2×324/3.14 ≈ 206 V.", answer: "≈ 206 V of pulsing DC before smoothing." },
    { problem: "A 12 V supply draws 2 A through a 2200 µF filter cap. Ripple?", given: "full-wave f_pulse = 100 Hz", calculation: "ΔV ≈ I/(f_pulse·C) = 2/(100 × 0.0022) ≈ 9 V.", answer: "≈ 9 V ripple — a regulator (7812) is mandatory, or the cap is undersized." },
    { problem: "Half-wave vs full-wave from the same 10 V peak source: mean outputs?", calculation: "half: 10/π ≈ 3.2 V; full: 2×10/π ≈ 6.4 V.", answer: "Full-wave doubles the usable average and halves the ripple frequency burden." }
  ],
  commonMistakes: [
    "Forgetting that 230 V RMS means 325 V peak when rating capacitors",
    "Counting one diode drop instead of two for a bridge (the half-wave case)",
    "Thinking the filter capacitor 'makes DC' — it reduces ripple; the regulator flattens it",
    "Sizing ripple with 50 Hz instead of the 100 Hz full-wave pulse rate",
    "Connecting an electrolytic cap backwards — it vents or explodes"
  ],
  applications: [
    "Every phone/laptop charger (switching, but same job)",
    "Car alternators: 3-phase bridge rectifiers charging the battery",
    "TV power boards: bridge + big electrolytic + regulator",
    "Solar charge controllers: rectifying and blocking reverse flow at night"
  ],
  summary: "Diodes harvest both halves of the AC wave; capacitors fill the gaps; regulators finish the job. RMS→√2→2V_p/π→ripple — that chain answers most questions.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A rectifier converts:", options: ["DC to AC", "AC to pulsing DC", "AC to AC", "light to current"], answer: 1, difficulty: 1, explanation: "That is the definition; smoothing and regulation follow." },
    { type: "mcq", q: "A full-wave bridge uses how many diodes conducting at once?", options: ["1", "2", "3", "4"], answer: 1, difficulty: 1, explanation: "Always a pair — one from each leg guides each half-cycle." },
    { type: "mcq", q: "Full-wave output pulses on a 50 Hz grid arrive at:", options: ["25 Hz", "50 Hz", "100 Hz", "200 Hz"], answer: 2, difficulty: 1, explanation: "Both halves used: double the line frequency." },
    { type: "mcq", q: "230 V RMS mains peaks at about:", options: ["230 V", "325 V", "460 V", "163 V"], answer: 1, difficulty: 2, explanation: "V_p = 230 × 1.414 ≈ 325 V." },
    { type: "mcq", q: "The bridge's PIV per non-conducting diode is:", options: ["2V_p", "V_p", "V_p/2", "4V_p"], answer: 1, difficulty: 2, explanation: "Each diode sees the secondary's peak reversed — half of a centre-tap design's stress." },
    { type: "mcq", q: "Increasing the filter capacitor makes ripple:", options: ["larger", "smaller", "unchanged", "zero instantly"], answer: 1, difficulty: 2, explanation: "Bigger reservoir droops less between pulses: ΔV ∝ 1/C." },
    { type: "mcq", q: "Bridge: 20 V peak secondary, Si diodes. Peak cap voltage ≈:", options: ["20 V", "18.6 V", "19.3 V", "17.2 V"], answer: 1, difficulty: 3, explanation: "Two drops lost at all times: 20 − 1.4 = 18.6 V." },
    { type: "mcq", q: "A 2 A load with 4700 µF full-wave at 50 Hz mains has ripple ≈:", options: ["4.3 V", "2.1 V", "8.5 V", "0.4 V"], answer: 0, difficulty: 3, explanation: "ΔV = 2/(100×0.0047) ≈ 4.3 V — audible hum territory without a regulator." }
  ]
};
