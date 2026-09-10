/* Content: Grade 12 Physics — Unit 4 (part B): topics 5-7 */
window.Lessons = window.Lessons || {};

Lessons["g12-physics-up4-t5"] = {
  overview: "Faraday put induction's size into an equation: induced EMF equals the rate of flux linkage change. Combined with Lenz's direction rule, ε = −N ΔΦ/Δt quantifies every generator, predicts transformer voltages and explains why spinning faster or winding tighter earns more volts.",
  objectives: [
    "Define flux linkage NΦ and state Faraday's law",
    "Compute EMF from rates of flux change",
    "Interpret the minus sign as Lenz's law",
    "Derive the transformer ratio from Faraday",
    "Describe flux-change graphs and AC EMF shape"
  ],
  simple: "<b>How fast, how much.</b> Lenz says which way; Faraday says how big: volts = turns × how fast the flux through each turn changes. Yank a magnet in over 0.1 s: 10× the EMF of a 1 s push. Double the turns: double the volts. Write it once — ε = −N ΔΦ/Δt — and generators, transformers and induction cooktops all read off the same line.",
  detailed: "<p><b>Flux linkage.</b> One loop feels Φ = BA cosθ; N loops in series link NΦ (weber-turns). Faraday's experiments (1831): the induced EMF is proportional to d(NΦ)/dt — the CHANGE RATE, not the change itself. Same ΔΦ in half the time: twice the volts. Stop the change: zero EMF even with huge flux present.</p><p><b>The minus sign.</b> ε = −d(NΦ)/dt encodes Lenz: the induced EMF drives currents whose effect opposes the flux change causing it. Drop the magnet down a copper pipe and it falls in slow motion: circulating eddy currents oppose its every gain of speed — kinetic energy quietly converted to pipe heat. The terminal velocity it reaches is the point where magnetic drag equals weight; the energy balance is exactly a generator braking itself.</p><p><b>AC shape.</b> Rotate a coil: Φ = BA cosωt ⇒ ε = NBAω sinωt — sinusoidal EMF, peak ε₀ = NBAω, RMS ε₀/√2 (mains 230 V RMS = 325 V peak). Frequency of the sine = rotation frequency. Ethiopian and European 50 Hz mains: turbines turn coils at 50 rev/s (2 poles) or mechanical fractions with more pole pairs.</p><p><b>Transformer derivation.</b> Primary and secondary share one iron core, hence one Φ(t) through both. Faraday on each: V_s/V_p = N_s/N_p exactly — voltage scales with turns. Power conservation (ideal) then forces I_s/I_p = N_p/N_s: step-up voltage steps-down current, which is why the grid transmits at hundreds of kV (loss = I²R shrinks with the current).</p><p><b>Experiment patterns.</b> Plot induced EMF vs magnet speed: linear through origin. vs coil turns: linear. A flux-vs-time square wave gives EMF spikes at the edges (rate of change: infinite at ideal steps); a sine flux gives cosine EMF — always 90° ahead. These graph signatures are exam favorites.</p>",
  keyTerms: [
    { term: "Flux linkage", def: "NΦ, weber-turns" },
    { term: "Faraday's law", def: "ε = −d(NΦ)/dt" },
    { term: "Eddy currents", def: "circulating induced currents in bulk metal" },
    { term: "Peak vs RMS", def: "ε₀ vs ε₀/√2" },
    { term: "Turns ratio", def: "V_s/V_p = N_s/N_p" },
    { term: "Magnetic braking", def: "Lenz drag on moving conductors" }
  ],
  formulas: [
    { name: "Faraday", formula: "ε = −N ΔΦ/Δt", meaning: "volts from rate of flux linkage change", vars: [{ name: "Φ", meaning: "BA cosθ per turn" }], when: "generators, coils, cores" },
    { name: "AC peak", formula: "ε₀ = NBAω", meaning: "design ceiling of a rotating coil", vars: [{ name: "ω", meaning: "2πf" }], when: "alternator sizing" },
    { name: "RMS", formula: "ε_rms = ε₀/√2", meaning: "heating-equivalent AC value", vars: [{ name: "230 V", meaning: "Ethiopian mains RMS" }], when: "mains talk, ratings" }
  ],
  workedExamples: [
    { problem: "200-turn coil; flux per turn rises 0 → 5 mWb in 0.2 s. EMF?", calculation: "ε = 200 × 5×10⁻³/0.2.", answer: "5 V — slower change, proportionally smaller." },
    { problem: "Same change in 0.02 s?", calculation: "Rate ×10 ⇒ ε = 50 V.", answer: "50 V — Faraday's is a speedometer, not an odometer." },
    { problem: "Coil 100 turns, A = 0.01 m², B = 0.5 T, spin 25 rev/s. Peak EMF?", calculation: "ε₀ = 100×0.5×0.01×(2π×25) ≈ 78.5 V; RMS ≈ 55 V.", answer: "≈ 79 V peak, 55 V RMS." },
    { problem: "Magnet falling through copper pipe reaches steady speed. Energy accounting?", calculation: "Gravitational power mgv = eddy-current heat in the pipe.", answer: "No acceleration: magnetic drag = weight; lost PE → thermal, never kinetic." }
  ],
  commonMistakes: [
    "Using flux Φ instead of linkage NΦ in the formula",
    "Writing EMF ∝ flux (it is the RATE that matters)",
    "Dropping the minus sign then mispredicting directions",
    "Forgetting the pipe-braking magnet converts PE to heat, not electricity harvested",
    "Mixing peak and RMS: mains '230 V' is RMS; insulation must survive 325 V peak"
  ],
  applications: [
    "All grid generation: Gibe turbines are Faraday machines",
    "Induction loop systems for hearing aids at churches and halls",
    "Metal detectors and induction furnaces: eddy currents on purpose",
    "Electric meter dials: calibrated Lenz drag provides the braking"
  ],
  summary: "ε = −d(NΦ)/dt: volts per weber-per-second × turns; Lenz's minus keeps energy honest. Transformers fall out in one line.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Faraday's law says induced EMF is proportional to:", options: ["flux", "rate of flux linkage change", "field only", "coil resistance"], answer: 1, difficulty: 1, explanation: "d(NΦ)/dt — the rate." },
    { type: "mcq", q: "The minus sign in ε = −d(NΦ)/dt represents:", options: ["measurement error", "Lenz's opposition", "electron charge", "friction"], answer: 1, difficulty: 1, explanation: "Direction rule baked into the formula." },
    { type: "mcq", q: "A magnet falls slowly through a copper pipe because:", options: ["copper sticks", "eddy currents oppose its motion (Lenz)", "static charge", "air cushion"], answer: 1, difficulty: 2, explanation: "Induced currents fight the change: the fall is braked magnetically." },
    { type: "mcq", q: "Same ΔΦ in half the time gives EMF:", options: ["half", "same", "double", "quarter"], answer: 2, difficulty: 2, explanation: "Rate doubles ⇒ EMF doubles." },
    { type: "mcq", q: "Coil spinning in a field produces EMF shaped like:", options: ["constant DC", "a sine wave", "spikes only", "a square always"], answer: 1, difficulty: 2, explanation: "cos flux ⇒ sin EMF — AC's birth." },
    { type: "mcq", q: "200 turns, ΔΦ = 2 mWb each in 0.05 s: ε =", options: ["8 V", "0.8 V", "80 V", "40 V"], answer: 0, difficulty: 3, explanation: "ε = 200×2×10⁻³/0.05 = 8 V." },
    { type: "mcq", q: "A transformer's voltage ratio follows directly from Faraday because:", options: ["cores add turns", "both windings share one dΦ/dt", "current leads voltage", "iron blocks EMF"], answer: 1, difficulty: 3, explanation: "Same changing flux ⇒ EMF per turn equal ⇒ voltages ∝ turns." },
    { type: "mcq", q: "Mains 230 V RMS has peak ≈:", options: ["230 V", "163 V", "325 V", "460 V"], answer: 2, difficulty: 3, explanation: "230√2 ≈ 325 V — why insulation ratings quote peaks." }
  ]
};

Lessons["g12-physics-up4-t6"] = {
  overview: "The transformer moves AC power between voltages with no moving parts, at 95–99 % efficiency. Two coils on one iron core, one turns ratio: step up for long-distance transmission, step down for the socket — the reason a national grid at all is possible.",
  objectives: [
    "Describe the core-and-coils construction and working",
    "Apply V_s/V_p = N_s/N_p and the ideal power relation",
    "Explain why transformers need AC, not DC",
    "List real losses (resistive, eddy, hysteresis, flux leakage) and fixes",
    "Trace the Ethiopian transmission chain: plant → 400 kV → 15 kV → 230 V"
  ],
  simple: "<b>AC's gearbox.</b> Alternating current in the primary makes an alternating flux in the iron core; Faraday gives the secondary turns the same flux, hence voltage scaled by the turns ratio. Double the turns, double the volts, halve the amps — energy untouched. Step it up to 400 kV, send it 800 km from the Gibe dams, step it down street by street to your socket.",
  detailed: "<p><b>Working.</b> Soft-iron core channels nearly all primary flux through the secondary. AC primary current ⇒ alternating Φ ⇒ EMFs in both windings ∝ their turns: V_s/V_p = N_s/N_p. Step-up (N_s > N_p): voltage rises, current falls (ideal: V_p I_p = V_s I_s). Step-down does the mirror. No AC? No changing flux? No induced voltage: an ideal transformer on DC outputs only a transient at switch-on/off. That's why the whole world standardized AC grids (with electronics converting back for batteries and DC links).</p><p><b>Why high voltage at all.</b> Line loss = I²R. For fixed power P = VI, ×10 the voltage ⇒ ÷10 the current ⇒ ÷100 the loss. Ethiopian Transmission Company runs 400 kV and 230 kV lines precisely so the southern hydro and northern plants can trade power with small waste. Local substations step 230/15 kV; pole transformers finish at 230 V.</p><p><b>Losses and their cures.</b> (1) Winding resistance I²R: thick copper, cooling. (2) Eddy currents circulating in the core: laminated sheets (insulated layers) chop the loops. (3) Hysteresis:Domains flip-flopping heats the core — soft iron with a narrow B-H loop minimises it. (4) Flux leakage: imperfect coupling — toroidal cores and close winding keep flux inside. Together: real transformers run 95–99 % efficient; humming pole cans are warm for these same four reasons.</p><p><b>Isolation and safety.</b> No wire joins primary and secondary — only magnetism crosses. This galvanic isolation is why transformers protect: the 230 V side can float free of earth, and faults get contained. Old radio sets and modern medical devices both exploit it. Current transformers (CTs) for metering run near short-circuit; potential transformers (VTs) near open — the wrong one of each gets dangerous fast (VT/CT polarity is a lineman's caution point).</p><p><b>Worked numerics to own.</b> Ratios with currents and power; losses P_line = I²R before/after stepping; the classic 'why not transmit at 230 V?' (answer: 1 740 A for 400 kW — copper the size of tree trunks).</p>",
  keyTerms: [
    { term: "Primary / secondary", def: "input / output windings" },
    { term: "Turns ratio", def: "N_s/N_p = V_s/V_p (ideal)" },
    { term: "Step-up / step-down", def: "raise / lower voltage for transmission / use" },
    { term: "Lamination", def: "insulated core slices killing eddy currents" },
    { term: "Hysteresis loss", def: "heat from domain flip-flop" },
    { term: "Isolation transformer", def: "safety: no conduction, only coupling" }
  ],
  formulas: [
    { name: "Ideal transformer", formula: "V_s/V_p = N_s/N_p", meaning: "voltage follows turns", vars: [{ name: "N", meaning: "winding turns" }], when: "every transformer problem" },
    { name: "Ideal power", formula: "V_p I_p = V_s I_s", meaning: "what volts gain, amps give", vars: [{ name: "—", meaning: "95–99 % in reality" }], when: "current ratings" },
    { name: "Line loss", formula: "P_loss = I²R_line", meaning: "the tax the grid pays per copper", vars: [{ name: "R_line", meaning: "transmission resistance" }], when: "why 400 kV exists" }
  ],
  workedExamples: [
    { problem: "Pole transformer 230 V to 12 V for shop lighting: turns ratio?", calculation: "N_p/N_s = 230/12.", answer: "≈ 19:1 step-down." },
    { problem: "That lamp draws 12 V × 5 A (60 W): primary current?", calculation: "I_p = 60/230.", answer: "≈ 0.26 A — same power, stepped voltage." },
    { problem: "400 kW plant at 230 V vs 40 000 V through 1 Ω line: losses?", calculation: "I = 1 739 A vs 10 A; loss = I²R = 3.0 MW vs 100 W.", answer: "230 V transmission melts the wires; 40 kV loses 0.025%." },
    { problem: "Transformer rated 10 kVA, primary 230 V: full-load primary current and secondary at 15 kV?", calculation: "I_p = 10 000/230 = 43.5 A; I_s = 10 000/15 000.", answer: "43 A in, 0.67 A out." }
  ],
  commonMistakes: [
    "Applying transformers to steady DC (no changing flux, no output)",
    "Inverting the turns ratio (more secondary turns = MORE volts, not fewer)",
    "Saving power by forgetting current drops with voltage",
    "Solid (unlaminated) cores — a lesson learned from smoking transformers",
    "Loading a current transformer's secondary open-circuit (lethal voltages)"
  ],
  applications: [
    "National grid: 400/230/110 kV trunk lines down to 15/0.23 kV distribution",
    "Phone chargers: tiny ferrite transformers running tens of kHz (smaller core, more Hz)",
    "Isolation transformers in workshops and hospitals",
    "Welding sets: step-down transformers delivering hundreds of amps at ~30 V"
  ],
  summary: "One shared alternating flux, two turn counts: V ∝ N, I ∝ 1/N. High voltage crosses countries; low voltage lights rooms.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A transformer works on:", options: ["DC", "AC only", "any voltage", "current only"], answer: 1, difficulty: 1, explanation: "Changing flux is mandatory." },
    { type: "mcq", q: "Step-up transformers have:", options: ["more primary turns", "more secondary turns", "equal turns", "no iron"], answer: 1, difficulty: 1, explanation: "V_s/V_p = N_s/N_p: bigger N_s gives bigger V_s." },
    { type: "mcq", q: "Ideal 230→115 V transformer with 4 A secondary delivers primary current:", options: ["2 A", "4 A", "8 A", "1 A"], answer: 0, difficulty: 2, explanation: "Power equal: 115×4 = 230×I_p ⇒ 2 A." },
    { type: "mcq", q: "The core is laminated to reduce:", options: ["resistance", "eddy currents", "hysteresis", "weight"], answer: 1, difficulty: 2, explanation: "Insulated slices break circulating current loops." },
    { type: "mcq", q: "High-voltage transmission is used because:", options: ["safer to touch", "I²R losses shrink with smaller current", "AC needs it", "transformers dislike low V"], answer: 1, difficulty: 2, explanation: "Same P at higher V ⇒ far lower I ⇒ loss ∝ I² drops hard." },
    { type: "mcq", q: "A transformer humming loudly usually indicates:", options: ["normal only", "loose laminations / magnetostriction plus load", "DC inside", "open circuit"], answer: 1, difficulty: 3, explanation: "The hum is the core flexing; loud = mechanical looseness." },
    { type: "mcq", q: "On the Ethiopian grid, the correct order is:", options: ["plant→distribution→transmission→home", "plant→step-up→transmission→step-down→home", "home→plant→transmission", "step-down→transmission→plant"], answer: 1, difficulty: 3, explanation: "Gibe generation, 400 kV trunk, regional substations, street 230 V." },
    { type: "mcq", q: "Transformer efficiency 95 % with 10 kW output: input ≈", options: ["9.5 kW", "10.5 kW", "10 kW", "11 kW"], answer: 1, difficulty: 3, explanation: "Input = 10/0.95 ≈ 10.5 kW; 0.5 kW warms the can." }
  ]
};

Lessons["g12-physics-up4-t7"] = {
  overview: "Electromagnetism leaves the textbook here: induction loop security gates, maglev trains, MRI safety, EMI shielding and the practical ethics of an electrified world. This topic connects Unit 4's laws to devices and public safety.",
  objectives: [
    "Explain eddy-current devices: braking, detection, heating",
    "Describe induction-loop and transformer-based systems",
    "Summarise maglev lift/propulsion physics",
    "State MRI and electromagnetic-safety practice",
    "Explain EMI causes and shielding methods"
  ],
  simple: "<b>From laws to lives.</b> A train's copper fins over magnets brake without touching wheels (Lenz drag). A shop gate reads a tag as a moving transformer (induction). A maglev floats on repelling fields and never touches rail. MRI scanners run at 6 000 Earths and turn pacemakers into missiles. Same four equations — the difference is scale and safety culture.",
  detailed: "<p><b>Eddy-current applications.</b> Trains and roller coasters: magnets sweeping conductive rails induce circulating currents whose fields oppose the motion — speed-proportional braking, frictionless and fade-proof at high speed but weak when slow (disc pads handle stops). Induction cooktops: 20–100 kHz coil drives eddy currents in ferromagnetic pans — the pan heats, the glass stays cool-ish. Metal detectors and airport gates: an AC probe field; metal disturbs it with its own eddy currents — pickup coils notice. Mine-scale conveyor separation and coin sorting use the same trick.</p><p><b>Maglev.</b> Electromagnets (or superconducting coils) levitate the car 1–10 cm above the guideway: no wheel contact ⇒ no rolling friction, less noise, 400–600 km/h (Shanghai line tops service at 430 km/h). Propulsion is a linear synchronous motor: the guideway's travelling magnetic field drags the train's onboard magnets forward. Japan's SCMaglev hit 603 km/h in tests; Lenz's law provides the passive stability in the repulsion design.</p><p><b>MRI and biomedical fields.</b> 1.5–3 T steady fields (30 000–60 000× Earth) plus rapid switching gradients. Danger ladder: ferromagnetic objects fly to the bore (the 'missile effect'); pacemaker and implant wires can heat or malfunction; peripheral-nerve stimulation at high dB/dt. Zones I–IV control access; screening is physics-enforced. The RF pulses are non-ionising — unlike X-rays, no DNA damage, which is why MRI scans pregnant patients when needed.</p><p><b>EMI and shielding.</b> Any switched current radiates; any loop catches. Phone-to-speaker buzz, ignition interference, motor spikes resetting computers — all Faraday coupling. Cures: twisted pairs (loops cancel), coax and mu-metal (field diverted/shorted), Faraday cages (enclosing conductor drains fields), filtering (ferrites choke high-frequency paths), and standards (Ethiopian/European EMC rules cap emissions). Grounding is the safe-return discipline: earth the cage, never the signal loop — ground loops themselves hum.</p><p><b>Reading a power-quality plate.</b> Transformer nameplates, cable ratings, fuses: the physics of Unit 4 all becomes label-reading. When the Addis grid brown-outs, induction motors stall and draw locked-rotor current — which trips protection, for exactly the back-EMF reason from topic 4.</p>",
  keyTerms: [
    { term: "Eddy currents", def: "bulk induced loops: braking, heating, detecting" },
    { term: "Regen vs eddy brake", def: "harvest energy vs dissipate as heat" },
    { term: "Maglev", def: "magnetic levitation + linear motor drive" },
    { term: "MRI zones", def: "graded access around the strong field" },
    { term: "Faraday cage", def: "enclosing conductor excluding fields" },
    { term: "Ferrite bead", def: "high-frequency choke on cables" },
    { term: "dB/dt", def: "how fast a field changes: nerve-stimulation limit" }
  ],
  formulas: [
    { name: "Braking force sense", formula: "F_drag ∝ v", meaning: "eddy drag rises with speed", vars: [{ name: "v", meaning: "sweep speed" }], when: "why eddy brakes complement pads" },
    { name: "Coupling loss (EMI intuition)", formula: "induced noise ∝ frequency × loop area", meaning: "big fast loops are antennas", vars: [{ name: "loop area", meaning: "twist to shrink" }], when: "wiring practice" },
    { name: "MRI field", formula: "B = 1.5–3 T", meaning: "tens of thousands of Earth fields", vars: [{ name: "Earth", meaning: "≈ 50 µT" }], when: "zone rules" }
  ],
  workedExamples: [
    { problem: "Induction cooktop vs ceramic pan: why no heat?", calculation: "Ceramic: no mobile charges ⇒ no eddy currents; ferromagnetic pans also concentrate flux.", answer: "Coupling needs conductivity (and permeability helps)." },
    { problem: "Maglev levitation power vs train power: why is suspension cheaper at speed?", calculation: "No wheel-rail contact losses; drag is air only (grows v² but the magnets do no frictional work).", answer: "The energy saving is friction, not the magnets." },
    { problem: "A shielded cable still hums: ground loop.", calculation: "Two earth points at different potentials + the shield = a big loop catching 50 Hz.", answer: "Bond the shield at ONE end: break the loop, keep the shield." },
    { problem: "Pacemaker near MRI: what fails?", calculation: "Static field torques/immobilises reed switches; gradients induce mA-level currents in leads (heating).", answer: "MRI-conditional models and protocols exist — otherwise: absolute NO." }
  ],
  commonMistakes: [
    "Expecting eddy brakes to hold a parked vehicle (force ∝ speed: zero at standstill)",
    "Thinking maglev magnets 'create energy' (lift costs; propulsion still from the grid)",
    "MRI zone 4 = 'metal detector check' (screening is stricter: ferromagnetic = banned)",
    "Shielding by grounding BOTH ends (creates the loop you tried to kill)",
    "Assuming all 'EMF radiation' is ionising like X-rays (it isn't below UV)"
  ],
  applications: [
    "Eddy-current flaw detection on aircraft and rail (Ethiopian Airlines engineering)",
    "Contactless toll tags and transport cards (transformer in a wallet)",
    "Hospital MRI safety programs",
    "EMC labs certifying phones, chargers and appliances sold in Ethiopia"
  ],
  summary: "Lenz + Faraday at scale: brakes without pads, trains without wheels, images without radiation — and shielding that keeps the noise out.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Eddy-current braking force:", options: ["constant", "grows with speed", "zero always", "only on magnets"], answer: 1, difficulty: 1, explanation: "Induction ∝ rate of change ∝ speed." },
    { type: "mcq", q: "Induction cooktops heat pans by:", options: ["radiation", "eddy currents in the base", "gas", "microwaves"], answer: 1, difficulty: 1, explanation: "kHz fields drive currents; the pan's resistance cooks." },
    { type: "mcq", q: "A maglev train's key advantage is:", options: ["no gravity", "no mechanical contact friction", "free energy", "silence at any speed"], answer: 1, difficulty: 2, explanation: "Wheels and bearings vanish; air drag remains." },
    { type: "mcq", q: "MRI's main projectile hazard comes from:", options: ["RF pulses", "the static field pulling iron tools", "sound", "coolant"], answer: 1, difficulty: 2, explanation: "1.5 T accelerates steel to the bore like a gun." },
    { type: "mcq", q: "Twisted pair cables resist noise because:", options: ["they are thicker", "adjacent loops cancel induced voltages", "copper is pure", "they run cooler"], answer: 1, difficulty: 2, explanation: "Opposite-sign pickup: the net EMF cancels." },
    { type: "mcq", q: "Induction-loop security gates work as:", options: ["capacitors", "an air-core transformer: tag secondary perturbs the field", "X-ray", "magnets only"], answer: 1, difficulty: 3, explanation: "The powered loop induces the tag's tuned circuit; the response trips it." },
    { type: "mcq", q: "A Faraday cage protects by:", options: ["absorbing all energy", "redistributing charge so interior fields cancel", "grounding signals", "blocking gravity"], answer: 1, difficulty: 3, explanation: "Conductor surfaces move charge until E_inside ≈ 0." },
    { type: "mcq", q: "Why do maglevs still need conventional brakes?", options: ["magnets fail at low speed", "eddy/emergency systems must work when propulsion power is off", "for style", "wheels"], answer: 1, difficulty: 3, explanation: "Drag brakes: friction does not depend on the electromagnetic system's state." }
  ]
};
