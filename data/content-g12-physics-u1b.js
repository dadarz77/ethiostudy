/* Content: Grade 12 Physics — Unit 1 (part B): topics 3-5 */
window.Lessons = window.Lessons || {};

Lessons["g12-physics-up1-t3"] = {
  overview: "Medicine is physics wearing a white coat: sound for imaging, ionising radiation for seeing and killing tumours, magnetism and nuclear spin for MRI, lasers for surgery. This topic walks through the physics behind the machines that diagnose and treat.",
  objectives: [
    "Explain ultrasound pulse-echo imaging with depth = vt/2",
    "Describe X-ray production and tissue contrast",
    "State how CT reconstructs slices from many X-rays",
    "Use half-life to plan radioisotope tracers",
    "Outline radiotherapy, laser surgery and MRI principles"
  ],
  simple: "<b>Invisible probes, visible answers.</b> Ultrasound sends pulses and times their echoes (tissue sound speed 1 540 m/s makes a millisecond equal ~0.77 mm of depth). X-rays stop at dense bone but cross soft tissue — the shadow is the image. Radioactive tracers glow from inside on a scanner's cameras, decaying fast enough to leave quickly. Every medical machine is one physics principle, engineered gently.",
  detailed: "<p><b>Ultrasound.</b> A piezoelectric crystal pulses sound above 20 kHz (typically 2–15 MHz) into the body; boundaries between tissues of different acoustic impedance reflect fractions of each pulse. Depth follows from echo delay: d = vt/2 with v = 1 540 m/s in soft tissue. Doppler ultrasound adds motion: reflected frequency shifts reveal blood-flow speed — fetal hearts and blocked arteries heard without a scalpel.</p><p><b>X-rays and CT.</b> Electrons smashed into a tungsten target emit bremsstrahlung X-rays; the beam attenuates exponentially, I = I₀e^{−µx}, with µ biggest for dense, high-Z material — bone (calcium) shadows, lung (air) glows. CT rotates a thin fan beam around the patient, measuring thousands of attenuations per slice; computer reconstruction turns the set into cross-sections. Contrast: iodine dyes raise µ locally, lighting up vessels.</p><p><b>Nuclear medicine.</b> Tracers like technetium-99m (T½ = 6 h) emit γ-rays detected by a gamma camera — function imaging (what organs do) versus anatomy (what they look like). Half-life planning: an 80 MBq dose after 12 h (two half-lives) is 20 MBq — enough for the scan window, gone quickly for patient safety. Radiotherapy uses the same ionising power deliberately: 6 MeV linac beams damage tumour DNA; the gamma knife converges ~200 cobalt beams so healthy tissue sees only fractions while the focus sees the sum.</p><p><b>MRI.</b> Hydrogen nuclei are tiny magnets; in a strong field they align at the Larmor frequency (42.58 MHz/T — a 1.5 T scanner 'hears' 64 MHz radio). RF pulses tip them; as they relax, their emitted signals map tissue water and fat. No ionising radiation — and metal objects become dangerous missiles in the fringe field.</p><p><b>Lasers.</b> Excimer laser eye surgery ablates cornea with UV precision (each pulse removes ~0.25 µm); photocoagulation seals retinal vessels; laser scalpels cauterise as they cut. Coherence + monochromaticity = focus to a micron spot.</p>",
  keyTerms: [
    { term: "Pulse-echo", def: "send a sound burst, time its reflection" },
    { term: "Acoustic impedance", def: "ρv; mismatches cause partial reflections" },
    { term: "Bremsstrahlung", def: "X-rays from decelerating electrons" },
    { term: "Half-life", def: "time for activity to halve" },
    { term: "Larmor frequency", def: "spin precession rate ∝ field" },
    { term: "Gamma knife", def: "converged beams, single focus" }
  ],
  formulas: [
    { name: "Ultrasound depth", formula: "d = vt/2", meaning: "echo time converts to boundary depth", vars: [{ name: "v", meaning: "1 540 m/s soft tissue" }, { name: "t", meaning: "round-trip echo delay" }], when: "all pulse-echo ranging (also radar)" },
    { name: "X-ray attenuation", formula: "I = I₀e^{−µx}", meaning: "intensity falls exponentially through matter", vars: [{ name: "µ", meaning: "linear attenuation coefficient" }], when: "contrast between tissues and bone" },
    { name: "Radioactive decay", formula: "A = A₀(1/2)^{t/T½}", meaning: "activity halves every half-life", vars: [{ name: "T½", meaning: "Tc-99m: 6 h" }], when: "tracer dose planning" },
    { name: "Larmor relation", formula: "f = 42.58 MHz/T × B", meaning: "precession frequency scales with field", vars: [{ name: "B", meaning: "MRI field strength" }], when: "MRI and NMR" }
  ],
  workedExamples: [
    { problem: "An echo returns after 0.04 ms. Organ boundary depth?", calculation: "d = 1540 × 0.04×10⁻³ / 2 = 0.0308 m.", answer: "≈ 3.1 cm — typical ultrasound scale: each 13 µs ≈ 1 cm." },
    { problem: "Tc-99m (6 h) dose calibrated at 120 MBq. Activity at scan time 4 h later?", calculation: "A = 120 × (1/2)^{4/6} = 120 × 0.63 ≈ 76 MBq.", answer: "≈ 76 MBq — decay math is scheduling math." },
    { problem: "X-ray of 100 keV loses ~half in 4 cm soft tissue. Fraction after 12 cm?", calculation: "three half-value layers: (1/2)³ = 1/8.", answer: "12.5% remains — why thicker patients need higher kVp." },
    { problem: "1.5 T MRI scanner: proton resonance frequency?", calculation: "f = 42.58 × 1.5 = 63.9 MHz.", answer: "≈ 64 MHz — FM radio band, harmless RF until gradients heat tissue." }
  ],
  commonMistakes: [
    "Forgetting the factor 2 in pulse-echo ranging (round trip!)",
    "Confusing X-ray image (transmission shadow) with ultrasound image (reflection map)",
    "Thinking radioactivity 'runs out' linearly — it halves per half-life",
    "Believing MRI uses strong B-fields to 'pull bodies apart' — it tunes nuclear spins",
    "Calling CT an X-ray video: it is reconstruction from many static projections"
  ],
  applications: [
    "Pregnancy scans and echocardiograms (ultrasound)",
    "Fracture and chest X-rays, cancer staging CT",
    "Thyroid and bone tracers (nuclear medicine)",
    "LASIK, retinal photocoagulation (lasers)"
  ],
  summary: "Sound ranges, X-rays shadow, isotopes trace, magnets align, lasers cut: five physics principles, one diagnostic toolkit.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Ultrasound images boundaries because of:", options: ["radioactivity", "partial echoes at impedance changes", "magnetic spin", "heat"], answer: 1, difficulty: 1, explanation: "Every tissue interface reflects a small echo; timing maps depth." },
    { type: "mcq", q: "Bone appears white on a radiograph because it:", options: ["emits X-rays", "absorbs the most X-rays", "is magnetic", "conducts electricity"], answer: 1, difficulty: 1, explanation: "Dense calcium blocks the beam, so film behind bone stays unexposed — the white shadow." },
    { type: "mcq", q: "MRI primarily images which nucleus (abundant in water)?", options: ["carbon-12", "hydrogen-1", "oxygen-16", "iron-56"], answer: 1, difficulty: 1, explanation: "Protons abound in body water; their spin carries the signal." },
    { type: "mcq", q: "An echo delay of 26 µs in tissue means depth ≈:", options: ["1 cm", "2 cm", "4 cm", "0.5 cm"], answer: 1, difficulty: 2, explanation: "d = vt/2 = 1540 × 26×10⁻⁶/2 ≈ 0.02 m = 2 cm (rule of thumb: 13 µs per cm)." },
    { type: "mcq", q: "A tracer with 6 h half-life injected 12 h ago retains what fraction?", options: ["1/2", "1/4", "1/8", "1/16"], answer: 1, difficulty: 2, explanation: "Two half-lives: (1/2)² = 1/4." },
    { type: "mcq", q: "CT differs from plain X-ray by:", options: ["using sound", "reconstructing slices from many angles", "being magnetic", "needing no computer"], answer: 1, difficulty: 2, explanation: "Rotating projections + computation = cross-sections." },
    { type: "mcq", q: "The gamma knife protects healthy tissue by:", options: ["low total power", "spreading dose over many weak intersecting beams", "cooling", "shielding the tumour"], answer: 1, difficulty: 3, explanation: "Each path gets a fraction; only the focus receives the sum." },
    { type: "mcq", q: "Doppler ultrasound measures blood flow using:", options: ["ionising decay", "frequency shift of reflected sound", "X-ray scatter", "spin echo"], answer: 1, difficulty: 3, explanation: "Moving reflectors shift echo frequency proportionally to flow speed." }
  ]
};

Lessons["g12-physics-up1-t4"] = {
  overview: "Defense systems are applied physics under hard requirements: find things at range, aim them, survive the finding. Radar, sonar, night vision, guidance — each rests on wave timing and energy transfer with little patience for imprecision.",
  objectives: [
    "Compute radar range from echo timing (R = ct/2)",
    "Contrast sonar (sound in water) with radar (radio in air)",
    "Explain stealth through shape and absorption",
    "Apply projectile motion to ballistics",
    "Describe IR night vision and GPS guidance physics"
  ],
  simple: "<b>See far, hit true.</b> Radio pulses return from targets 300 m per microsecond — that is the whole radar ruler. Sound does the same job underwater, 1 500 m/s slow but dependable. Stealth bends reflections away and drinks what remains. Ballistics is Chapter-style projectile math with air resistance bolted on; night vision reads heat; GPS closes the loop by timing satellites.",
  detailed: "<p><b>Radar.</b> A transmitter fires microsecond pulses at 1–40 GHz; echoes return delayed by t = 2R/c. A 200 µs round trip puts the target at 30 km. Doppler radar subtracts motion from the shift of the echo (f_d = 2v/λ), letting weather radar see storm winds and guns' radar track shells. Pulses vs continuous-wave, antenna arrays, and chaff-style countermeasures all inherit these two facts: time and frequency.</p><p><b>Sonar.</b> Radio dies in seawater (saline conducts it away), so ships ping sound: 1 500 m/s in ocean. Active sonar listens for echoes the way radar does; passive sonar just hears. The deep sound channel bends sound for thousands of km — the ocean's own waveguide.</p><p><b>Stealth and counter-stealth.</b> Radar cross-section scales with shape: flat panels deflect energy off-specular, curves scatter back, and radar-absorbing carbon composites dissipate what hits them. Infrared stealth cools exhausts; low-band radar (longer λ resonant with airframe sizes) partially restores detection — the physics chase never ends.</p><p><b>Ballistics.</b> A shell follows projectile equations: R = v₀²sin2θ/g in vacuum; air drag roughly halves real ranges and adds the spin of rifling for gyroscopic stability. Fire-control solutions solve it backwards: given target motion, find the aim angle — pure Newton with microchips.</p><p><b>Thermal and satellite guidance.</b> Night-vision IR detectors (HgCdTe arrays) see 8–14 µm radiation that warm bodies emit over cold background. GPS guidance times four-satellite ranges and, because accuracy means metres, applies relativity corrections (satellite clocks drift ~38 µs/day, ~10 km error). A dual-use reminder: the same wave physics serves airliners and missiles — engineers carry an ethics payload too.</p>",
  keyTerms: [
    { term: "Radar", def: "radio detection and ranging by echo timing" },
    { term: "Pulse repetition", def: "unambiguous range set by pulse spacing" },
    { term: "Sonar", def: "sound navigation and ranging underwater" },
    { term: "Radar cross-section", def: "effective reflective area of a target" },
    { term: "Rifling", def: "spin stabilisation of projectiles" },
    { term: "IR seeker", def: "homes on thermal emission" }
  ],
  formulas: [
    { name: "Echo ranging", formula: "R = ct/2", meaning: "one-way distance is half the light-travel", vars: [{ name: "c", meaning: "3×10⁸ m/s; sonar: v_sound 1500 m/s" }], when: "radar, sonar, laser rangefinders" },
    { name: "Doppler radar shift", formula: "f_d = 2v/λ", meaning: "closing speed doubles into frequency", vars: [{ name: "v", meaning: "radial target speed" }, { name: "λ", meaning: "transmitted wavelength" }], when: "speed guns, storm tracking" },
    { name: "Vacuum range", formula: "R = v₀² sin 2θ / g", meaning: "45° maximises range", vars: [{ name: "v₀", meaning: "muzzle speed" }], when: "ballistics first pass; drag halves it" }
  ],
  workedExamples: [
    { problem: "Radar echo returns after 133 µs. Range?", calculation: "R = 3×10⁸ × 133×10⁻⁶ / 2 = 19 950 m.", answer: "≈ 20 km — rule of thumb: 6.7 µs per km." },
    { problem: "Sonar pulse returns from a sub in 4 s (ocean v = 1500 m/s). Distance?", calculation: "R = 1500 × 4 / 2 = 3 000 m.", answer: "3 km — sound's slow ruler needs patience." },
    { problem: "A gun fires at 800 m/s, 45°, vacuum. Range?", calculation: "R = 800²/10 = 64 000 m.", answer: "64 km ideal; drag cuts real shells toward 30 km." },
    { problem: "Police radar at λ = 0.032 m returns a 300 Hz upshift. Car speed?", calculation: "v = f_d λ/2 = 300 × 0.032/2 = 4.8 m/s toward the gun.", answer: "≈ 4.8 m/s closing — about 17 km/h." },
  ],
  commonMistakes: [
    "Dropping the /2 in echo ranging (round trips!)",
    "Expecting radar to work well underwater",
    "Saying stealth 'absorbs all radar' — it manages cross-section, never zeroes it",
    "Using vacuum range without noting drag roughly halves real shells",
    "Thinking GPS ignores relativity — without clock corrections error grows ~10 km/day"
  ],
  applications: [
    "Air traffic and weather radar",
    "Submarine and fish-finding sonar",
    "Precision-guided logistics (civilian GPS physics)",
    "Search and rescue thermal drones"
  ],
  summary: "Time echoes (R = ct/2), read Doppler shifts, respect drag, correct clocks: defense is wave physics at demanding tolerance.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Radar determines range primarily by:", options: ["echo frequency", "echo delay time", "beam power", "antenna size"], answer: 1, difficulty: 1, explanation: "Distance lives in timing: R = ct/2." },
    { type: "mcq", q: "Sonar uses sound instead of radio because:", options: ["sound is cheaper", "seawater absorbs radio waves", "sound travels faster", "fish hear radio"], answer: 1, difficulty: 1, explanation: "Conductive salt water kills RF; sound carries." },
    { type: "mcq", q: "A target's closing speed appears in radar returns as:", options: ["a delay change", "a Doppler frequency shift", "a power drop", "a pulse widening"], answer: 1, difficulty: 1, explanation: "f_d = 2v/λ — motion encoded in frequency." },
    { type: "mcq", q: "Echo delay 40 µs on radar ≈ range:", options: ["6 km", "12 km", "20 km", "40 km"], answer: 0, difficulty: 2, explanation: "R = 3×10⁸×40×10⁻⁶/2 = 6 000 m." },
    { type: "mcq", q: "Stealth shaping reduces detection by:", options: ["erasing the target", "deflecting reflections away from the source", "flying lower", "cooling only"], answer: 1, difficulty: 2, explanation: "Facets send energy off in useless directions." },
    { type: "mcq", q: "Rifling stabilises shells through:", options: ["added speed", "gyroscopic spin rigidity", "heat control", "shorter flight"], answer: 1, difficulty: 2, explanation: "Angular momentum keeps the nose pointed." },
    { type: "mcq", q: "GPS needs relativistic correction because:", options: ["satellites are heavy", "their clocks tick differently in orbit", "radio bends downward", "Earth spins only"], answer: 1, difficulty: 3, explanation: "~38 µs/day net drift = kilometres of position error." },
    { type: "mcq", q: "A sonar pings the seafloor 1.5 km deep; return time ≈:", options: ["1 s", "2 s", "3 s", "4 s"], answer: 1, difficulty: 3, explanation: "t = 2×1500/1500 = 2 s round trip." }
  ]
};

Lessons["g12-physics-up1-t5"] = {
  overview: "Communication is physics travelling politely: information rides electromagnetic waves, carried through copper, air and glass. This topic covers the spectrum's comms bands, modulation, fibre optics, satellites and cellular networks — the science behind an Ethiopian phone call.",
  objectives: [
    "Match spectrum bands to communication roles",
    "Explain AM and FM modulation conceptually",
    "Use total internal reflection to explain fibre capacity",
    "Compute satellite link delays",
    "Describe cellular reuse and EMI shielding"
  ],
  simple: "<b>The carrier, the message.</b> A radio wave is a steady tone; information is what you vary about it — amplitude (AM), frequency (FM), or light intensity in a fibre. Light trapped by total internal reflection in hair-thin glass carries the world's internet; geostationary satellites stand 36 000 km up and cost you a quarter-second round trip; cellular networks reuse frequencies by shrinking the map into cells.",
  detailed: "<p><b>Spectrum allocation.</b> Long radio waves (kHz–MHz) diffract over hills and travel far at low data rates — broadcasting. Microwaves (GHz) punch through atmospheres in beams: radar, Wi-Fi (2.4/5 GHz), mobile backhaul, satellite up/downlinks. Infrared handles short-range links (remotes). Visible light in glass fibres is the champion: carrier ~2×10¹⁴ Hz means channel capacity measured in terabits. Higher frequency = more bandwidth, less diffraction, shorter practical range.</p><p><b>Modulation.</b> AM rides the message onto amplitude — simple, noise-prone. FM rides it onto frequency — noisier bandwidth needed, immune to amplitude fades (why music and TV sound rode FM). Digital schemes key phase/amplitude combos (QAM): each symbol a small number, streaming near Shannon's channel limit. Multiplexing layers many streams: FDM (stations per frequency), TDM (time slots), WDM (colours in one fibre).</p><p><b>Fibre.</b> Core n ≈ 1.48, cladding lower: rays beyond the critical angle θ_c = arcsin(n₂/n₁) ≈ 40° reflect forever. Pulses of laser light carry ~10 Gb/s each colour, 100 colours a strand, attenuation ~0.2 dB/km (95% survives 3.5 km unamplified). Ethio Telecom's backbone and the national TV fibre (ET-BG) run on this physics — plus light's immunity to electrical noise.</p><p><b>Satellites.</b> Geostationary orbit: 35 784 km over the equator, matching Earth's spin, covering a third of the planet — Ethiopia's RASCOM served Africa from above. Round-trip delay: 2×36 000 km / 3×10⁵ km/s ≈ 0.24 s — audible in calls, fatal for some gaming. LEO constellations trade many satellites for milliseconds.</p><p><b>Cells and interference.</b> Cellular networks divide coverage into cells; neighbours use different channels, distant cells reuse them — capacity scales with smaller cells, which is why Addis towers multiply. EMI ruins signals: coaxial cable shields, twisted pairs cancel, Faraday enclosures protect; uncontrolled, a motor's spark can wipe a radio band.</p>",
  keyTerms: [
    { term: "Carrier wave", def: "steady EM oscillation the message rides" },
    { term: "Modulation", def: "varying amplitude/frequency/phase to encode" },
    { term: "Total internal reflection", def: "trapping light above the critical angle" },
    { term: "WDM", def: "wavelength-division: many colours, one fibre" },
    { term: "Geostationary", def: "orbit matching Earth's spin at 35 784 km" },
    { term: "Frequency reuse", def: "cellular capacity trick" },
    { term: "EMI", def: "electromagnetic interference" }
  ],
  formulas: [
    { name: "Critical angle", formula: "sin θ_c = n₂/n₁", meaning: "beyond it, no refraction — total reflection", vars: [{ name: "n₁>n₂", meaning: "core to cladding" }], when: "fibre guidance design" },
    { name: "Link delay", formula: "t = 2d/c", meaning: "geostationary round trip", vars: [{ name: "d", meaning: "36 000 km" }], when: "satellite phone feel" },
    { name: "Capacity intuition", formula: "usable bandwidth ∝ carrier frequency", meaning: "microwaves hold more than long radio", vars: [{ name: "Shannon", meaning: "C = B log₂(1+SNR) governs both" }], when: "band allocations, 5G mmWave" }
  ],
  workedExamples: [
    { problem: "Fibre: core n = 1.48, cladding 1.46. Critical angle inside core?", calculation: "sin θ_c = 1.46/1.48 = 0.9865 → θ_c = 80.6°.", answer: "≈ 81° from the normal — rays skimming the wall guide; steep ones leak." },
    { problem: "Phone call via geostationary satellite: one-way delay?", calculation: "t = 36 000 000 m / 3×10⁸ m/s = 0.12 s.", answer: "0.12 s up, 0.12 s down: 0.24 s round trip — noticeable lag." },
    { problem: "A 60 dB loss fibre span: fraction of light arriving (0.2 dB/km)?", calculation: "60/0.2 = 300 km; 10^{−60/10} = 10⁻⁶.", answer: "A millionth — amplifiers or thinner glass needed by then." },
    { problem: "An FM station at 100 MHz: its wavelength?", calculation: "λ = c/f = 3×10⁸/10⁸ = 3 m.", answer: "3 m — antenna elements on that scale." }
  ],
  commonMistakes: [
    "Confusing the signal frequency (audio) with the carrier frequency (RF)",
    "Saying AM is FM with bigger numbers (different parameter varied)",
    "Believing fibre carries electricity",
    "Expecting a geostationary link to feel instant (0.24 s round trip)",
    "Thinking more towers = same spectrum everywhere (reuse needs distance)"
  ],
  applications: [
    "Ethio Telecom mobile/fibre backbones",
    "RASCOM-era satellite broadcasting across Africa",
    "Wi-Fi, Bluetooth and radio in daily devices",
    "Undersea and national cables moving the world's data"
  ],
  summary: "Encode on carriers, guide light in glass, bounce off orbit, reuse cells: communication is wave physics with manners.",
  visuals: [],
  questions: [
    { type: "mcq", q: "AM encodes information by varying the carrier's:", options: ["frequency", "amplitude", "speed", "wavelength"], answer: 1, difficulty: 1, explanation: "The envelope follows the signal; FM varies frequency instead." },
    { type: "mcq", q: "Optical fibres guide light by:", options: ["mirrors", "total internal reflection", "refraction only", "diffraction"], answer: 1, difficulty: 1, explanation: "Beyond the critical angle, the core-cladding wall is a perfect mirror." },
    { type: "mcq", q: "Satellite phone calls feel laggy because:", options: ["processing", "0.24 s round-trip light delay", "slow antennas", "Earth blocks"], answer: 1, difficulty: 1, explanation: "72 000 km of light travel takes time." },
    { type: "mcq", q: "Cellular networks increase capacity by:", options: ["bigger towers only", "dividing area into cells and reusing frequencies", "stronger batteries", "fewer users"], answer: 1, difficulty: 2, explanation: "Small cells + frequency reuse = many simultaneous calls." },
    { type: "mcq", q: "Coaxial cables resist interference because:", options: ["they are thick", "a braided shield surrounds the conductor", "light inside", "superconductors"], answer: 1, difficulty: 2, explanation: "The shield drains external fields — EMI control." },
    { type: "mcq", q: "Microwaves beat long radio for internet because they:", options: ["diffract more", "offer far more bandwidth at high frequency", "cost nothing", "bend over hills"], answer: 1, difficulty: 2, explanation: "Higher carrier = wider usable spectrum = more data." },
    { type: "mcq", q: "λ of a 2.4 GHz Wi-Fi signal ≈:", options: ["12.5 cm", "2.4 m", "0.8 mm", "1.2 m"], answer: 0, difficulty: 3, explanation: "λ = 3×10⁸/2.4×10⁹ = 0.125 m." },
    { type: "mcq", q: "WDM multiplies fibre capacity by:", options: ["thicker glass", "many laser colours per fibre", "faster electrons", "bigger plugs"], answer: 1, difficulty: 3, explanation: "Each wavelength is an independent stream in the same strand." }
  ]
};
