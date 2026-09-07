/* Content: Grade 11 Chemistry — Unit 1: Atomic Structure and the Periodic Table (5 topics) */
window.Lessons = window.Lessons || {};

Lessons["g11-chemistry-uc1-t1"] = {
  overview: "Dalton's 1808 theory turned alchemy into science: elements are atoms, compounds are fixed ratios, reactions are rearrangements. Modern theory keeps the bookkeeping but rewrites the 'atom' — divisible into protons, neutrons and electrons, with isotopes and quantum behaviour Dalton never imagined.",
  objectives: [
    "State Dalton's postulates and identify which survive today",
    "Explain how the electron, nucleus and isotopes forced revisions",
    "Contrast Dalton's indivisible sphere with the modern quantum model",
    "Use atomic number Z and mass number A to characterize atoms",
    "Interpret the laws of conservation, definite and multiple proportions as evidence"
  ],
  simple: "Dalton proposed that everything is made of tiny indestructible balls called atoms — each element has its own kind, compounds are just atoms stuck in fixed recipes (water is always 2 H : 1 O), and chemical reactions only reshuffle them, never create or destroy. That one idea explained three laws at once: conservation of mass (nothing lost), definite proportions (same recipe every time), and multiple proportions (when two elements form several compounds, the ratios are small whole numbers — CO vs CO₂). The modern theory keeps all the bookkeeping but demolishes 'indivisible': atoms contain a tiny heavy nucleus (protons + neutrons) with electrons in a quantum cloud around it. The proton count (atomic number Z) defines the element; the neutron count varies, creating isotopes — same chemistry, different mass. Carbon-12 and carbon-14 are both carbon, but one decays and one doesn't. Dalton's spheres became probability clouds — yet his ratios and recipes still power every calculation in this course.",
  detailed: "<p><b>Dalton's five postulates.</b> (1) Matter consists of indivisible atoms. (2) Atoms of a given element are identical in mass and properties. (3) Atoms of different elements differ in mass and properties. (4) Compounds form when atoms combine in small whole-number ratios. (5) Chemical reactions rearrange atoms — never create or destroy them. Postulate 4 + 5 predicted the law of multiple proportions: if X and Y form two compounds, the masses of Y combining with a fixed mass of X are in a ratio of small whole numbers (CO: 12 g C combines with 16 g O; CO₂: 12 g C with 32 g O — ratio 16:32 = 1:2 ✓). This law is Dalton's fingerprint — no other theory of the day predicted it.</p><p><b>The cracks.</b> (1) Cathode-ray tubes (Thomson, 1897) showed all atoms emit identical negative particles — electrons — so atoms are divisible. (2) Radioactivity (Becquerel, the Curies) showed atoms transmuting — one element becoming another. (3) Thomson's measurements of charge-to-mass ratios showed electron mass ≈ 1/1836 of hydrogen — where was the other 99.9% of mass? Millikan's oil-drop experiment (1909) fixed the electron's charge exactly (1.602 × 10⁻¹⁹ C), enabling mass calculation.</p><p><b>The nucleus and the neutron.</b> Rutherford's gold-foil experiment (1911): most α-particles flew straight through (atom is mostly empty), but ~1 in 8000 bounced back — a tiny, dense, positive core holds nearly all the mass. Chadwick (1932) found the neutron: mass ≈ proton, no charge — explaining isotopes (same Z, different neutron count) and why atomic masses aren't whole-number multiples of hydrogen (e.g. chlorine 35.5 = ¾ Cl-35 + ¼ Cl-37).</p><p><b>Modern statement.</b> Atoms = nucleus (Z protons + N neutrons) + Z electrons in quantum orbitals. Isotopes: ¹²C vs ¹⁴C — chemical identity set by Z, nuclear behaviour by N. Ions: electron count changes (cations lose, anions gain) but Z stays — chemistry is electron bookkeeping around a fixed nucleus. Atomic mass on the periodic table is the weighted average of isotopic masses by natural abundance — Dalton's 'identical atoms' postulate is the one that fully fell.</p>",
  keyTerms: [
    { term: "Atomic number Z", def: "Proton count — defines the element" },
    { term: "Mass number A", def: "Protons + neutrons; isotopes differ in A, not Z" },
    { term: "Isotope", def: "Same element, different neutron count (¹²C vs ¹⁴C)" },
    { term: "Law of multiple proportions", def: "Fixed mass of X + varying Y → small whole-number ratios" },
    { term: "Cathode ray", def: "Electron beam — Thomson's evidence for subatomic particles" },
    { term: "Nucleus", def: "Dense positive core: nearly all mass, 10⁻⁵ of the volume" }
  ],
  formulas: [
    {
      name: "Isotope notation",
      formula: "ᴬᴢX  (A = Z + N)",
      meaning: "Left superscript mass, left subscript atomic number",
      vars: [{ name: "N", meaning: "neutron count = A − Z", unit: "—" }],
      units: "—",
      when: "Reading nuclear symbols",
      example: "²³₁₁Na: Z = 11, A = 23, N = 12"
    },
    {
      name: "Weighted atomic mass",
      formula: "M = Σ (fractional abundance × isotopic mass)",
      meaning: "The number printed on the periodic table",
      vars: [{ name: "abundance", meaning: "fraction of that isotope in nature", unit: "fraction" }],
      units: "u (atomic mass units)",
      when: "Any element with multiple stable isotopes",
      example: "Cl: 0.7577 × 35 + 0.2423 × 37 = 35.49 ≈ 35.5 u"
    }
  ],
  workedExamples: [
    {
      problem: "Bromine is 50.7% Br-79 and 49.3% Br-81. Find its atomic mass.",
      given: "two isotopes with abundances",
      formula: "M = Σ abundance × mass",
      substitution: "= 0.507 × 79 + 0.493 × 81",
      calculation: "= 40.05 + 39.93 = 79.98 ≈ 80.0 u",
      answer: "≈ 80.0 u — matches the periodic table value"
    },
    {
      problem: "Copper's atomic mass is 63.55 u. It is ⁶³Cu and ⁶⁵Cu only. Find the % of ⁶³Cu.",
      given: "two isotopes, average known",
      formula: "let x = fraction ⁶³Cu: 63x + 65(1 − x) = 63.55",
      substitution: "63x + 65 − 65x = 63.55 → −2x = −1.45",
      calculation: "x = 0.725 → 72.5%",
      answer: "72.5% Cu-63, 27.5% Cu-65"
    },
    {
      problem: "Write the symbol for the ion with 26 protons, 30 neutrons and 23 electrons. Name it.",
      given: "p = 26 → Fe; electrons lost 3",
      formula: "charge = p − e = +3",
      substitution: "A = 26 + 30 = 56",
      calculation: "⁵⁶Fe³⁺",
      answer: "⁵⁶Fe³⁺, the iron(III) ion (ferric)"
    },
    {
      problem: "Two oxides of nitrogen contain 46.7% and 30.4% N by mass. Show the law of multiple proportions.",
      given: "fix 100 g of each; N masses 46.7, 30.4; O masses 53.3, 69.6",
      formula: "O per fixed N: divide O mass by N mass, then ratio",
      substitution: "NOₓ: 53.3/46.7 = 1.14; NOᵧ: 69.6/30.4 = 2.29",
      calculation: "ratio = 2.29/1.14 ≈ 2 (small whole number)",
      answer: "Per gram of N, the second oxide holds exactly 2× the oxygen — NO₂ vs NO (or N₂O₄ vs N₂O): multiple proportions in action"
    },
    {
      problem: "Why did the gold-foil experiment force a nuclear model? Give both observations and their meanings.",
      given: "α-particles at gold foil",
      formula: "trajectory → structure",
      substitution: "mostly straight through → mostly empty space; rare large deflections → dense positive core",
      calculation: "Plum-pudding model predicted all particles pass with slight deflections — refuted",
      answer: "Atom = tiny dense nucleus (radius ~10⁻¹⁵ m) + electron cloud (~10⁻¹⁰ m): volume is 99.9999999999% empty, mass and +charge concentrated in the centre"
    }
  ],
  commonMistakes: [
    "Saying isotopes have different chemical properties — they differ in MASS and nuclear stability, not chemistry",
    "Reading ᴬᴢX's numbers backwards (A is the top one = mass)",
    "Atomic mass from the table called 'mass of one atom' — it's the isotopic weighted average",
    "Charge = protons − electrons computed with isotope neutrons mixed in",
    "Quoting Dalton's 'identical atoms' as still true — isotopes killed that postulate",
    "Confusing mass number (integer count) with atomic mass (weighted average, decimal)",
    "Forgetting electrons contribute almost nothing to mass (~1/1836 u each)"
  ],
  applications: [
    "Carbon dating: the ¹⁴C:¹²C ratio in once-living matter ticks down every 5730 years — archaeology's clock (Ethiopia's Lucy-era context and Axum artefacts are dated this way)",
    "Medical tracers: ⁹⁹Tc and ¹³¹I isotopes image organs without changing their chemistry",
    "Geology: U-Pb and K-Ar isotope systems date rocks — the East African Rift's volcanic layers",
    "Mass spectrometry: isotope fingerprints identify drugs, explosives and food fraud",
    "Nuclear power: ²³⁵U vs ²³⁸U — same element, one fissions, one doesn't: enrichment is isotope separation"
  ],
  summary: "Dalton's atoms — indivisible, identical, ratio-forming — explained the conservation, definite and multiple-proportion laws, but Thomson's electron, Rutherford's nucleus and Chadwick's neutron rebuilt the atom as nucleus + quantum electron cloud, with isotopes breaking the 'identical atoms' postulate. Z defines the element, A = Z + N the isotope, and the table's atomic mass is the abundance-weighted isotope average. Dalton's ratios survive; his spheres did not.",
  visuals: [
    { type: "timeline", config: { title: "How the atom was rebuilt", events: [{ label: "1808 — Dalton", detail: "indivisible spheres, ratio laws" }, { label: "1897 — Thomson", detail: "electron found (cathode rays)" }, { label: "1909 — Millikan", detail: "electron's charge measured" }, { label: "1911 — Rutherford", detail: "nucleus from gold foil" }, { label: "1932 — Chadwick", detail: "neutron completes the nucleus" }] } },
    { type: "comparison", config: { title: "Dalton vs Modern", left: { name: "Dalton (1808)", items: ["indivisible", "identical atoms", "solid spheres", "no charge structure"] }, right: { name: "Modern", items: ["nucleus + electrons", "isotopes differ", "mostly empty space", "quantum orbitals"] } } },
    { type: "qa", config: { title: "Nuclear symbol reflexes", pairs: [{ q: "²⁷Al: protons? neutrons?", a: "<b>p = 13, n = 14</b>" }, { q: "Fe³⁺: 26 p, how many e?", a: "<b>23</b> — lost 3" }, { q: "Cl average 35.5 — why not 35 or 37?", a: "<b>isotope mixture</b> ¾ ³⁵Cl + ¼ ³⁷Cl" }] } }
  ],
  questions: [
    { type: "mcq", q: "Which Dalton postulate failed completely?", options: ["atoms combine in ratios", "atoms are indivisible and identical", "reactions rearrange atoms", "elements have distinct atoms"], answer: 1, difficulty: 1, explanation: "Electrons, isotopes and nuclear reactions broke both indivisibility and identity" },
    { type: "mcq", q: "The gold-foil experiment showed atoms are:", options: ["solid spheres", "mostly empty with a dense nucleus", "uniform positive pudding", "indivisible"], answer: 1, difficulty: 1, explanation: "Most α-particles passed straight through; rare bounces revealed the nucleus" },
    { type: "mcq", q: "Isotopes of an element differ in:", options: ["protons", "electrons", "neutrons", "chemical behaviour"], answer: 2, difficulty: 1, explanation: "Same Z, different N — different mass, same chemistry" },
    { type: "mcq", q: "An ion with 12 protons and 10 electrons is:", options: ["Mg²⁺", "Mg²⁻", "Ne", "Mg⁰"], answer: 0, difficulty: 2, explanation: "Z = 12 (magnesium), charge = 12 − 10 = +2" },
    { type: "tf", q: "The mass number A equals protons plus neutrons.", answer: true, difficulty: 1, explanation: "A = Z + N by definition" },
    { type: "tf", q: "Electrons contribute most of an atom's mass.", answer: false, difficulty: 1, explanation: "An electron is ~1/1836 u — the nucleus carries ≥ 99.9% of the mass" },
    { type: "calc", q: "Element X: 80.0% of mass-24 and 20.0% of mass-26. Atomic mass?", answer: "24.4", difficulty: 2, explanation: "0.8 × 24 + 0.2 × 26 = 19.2 + 5.2 = 24.4 u" },
    { type: "calc", q: "How many neutrons in ⁵⁶Fe (Z = 26)?", answer: "30", difficulty: 1, explanation: "N = A − Z = 56 − 26 = 30" },
    { type: "short", q: "Law stating that a compound always contains elements in fixed mass ratios:", answer: "definite proportions|law of definite proportions", difficulty: 1, explanation: "Proust's law — the 'fixed recipe' law Dalton's ratios explained" },
    { type: "concept", q: "Why does the law of multiple proportions specifically support atoms over continuous matter?", answer: "whole numbers|discrete units|indivisible chunks|integer ratios", difficulty: 3, explanation: "Continuous matter could blend in any ratio; only discrete, indivisible units force small whole-number ratios between compounds — 1:2, 2:3 — exactly what experiments show" }
  ]
};

Lessons["g11-chemistry-uc1-t2"] = {
  overview: "Four classic experiments measured the atom's parts: Thomson's cathode rays found the electron, Millikan's oil drops weighed its charge, Rutherford's gold foil exposed the nucleus, and Moseley's X-ray spectra gave atomic number physical meaning. Each instrument turned an inference into a number.",
  objectives: [
    "Describe cathode-ray behaviour and Thomson's e/m conclusion",
    "Explain Millikan's oil-drop balance and the charge quantum",
    "Interpret gold-foil data: scattering angles → nuclear size",
    "State Moseley's finding: √ν ∝ (Z − b) — atomic number is real",
    "Connect each experiment to the model it overthrew"
  ],
  simple: "Cathode-ray tubes fire electrons through a vacuum: deflections in electric and magnetic fields showed they're negative with a fixed charge-to-mass ratio, identical for every metal — a universal particle. Millikan suspended tiny oil drops between charged plates: gravity pulling down balanced by electric force pushing up revealed each drop carries charge in multiples of 1.6 × 10⁻¹⁹ C — charge comes in indivisible packets, one per electron. Rutherford aimed α-particles at gold foil: nearly all passed through (empty space), a few bounced (dense positive nucleus) — and from the bounce statistics he computed the nucleus is ~100,000× smaller than the atom. Moseley measured X-rays from each element and found frequency depends on the square of a whole number — the atomic number — proving the proton count (not atomic mass) orders the elements, fixing the periodic table's anomalies (tellurium/iodine).",
  detailed: "<p><b>Thomson (1897).</b> Cathode rays: travel straight, cast shadows, deflected by E and B fields toward the positive plate → negative particles. Balanced fields (E force = B force) gave velocity v = E/B; then switching B off measured deflection → q/m ≈ 1.76 × 10¹¹ C/kg, the same for any cathode material and any gas → a universal constituent of all matter. Crucial control: cannot be deflected further by more metal foil — they pass through atoms, so they're smaller than atoms.</p><p><b>Millikan (1909).</b> Atomized oil drops between parallel plates; gravity mg pulls down, electric qE pushes up when charged. At balance, qE = mg → q = mgd/V. Measured charges always came as 1.6, 3.2, 4.8 × 10⁻¹⁹ C — integer multiples of one quantum e. With Thomson's q/m, electron mass = 9.11 × 10⁻³¹ kg. The experiment's genius: quantization visible in a table of drop charges, not an assumption.</p><p><b>Rutherford–Geiger–Marsden (1911).</b> α-particles (He²⁺, fast, heavy) at ~0.00004 m gold foil. Predictions from Thomson's plum-pudding: all deflections < 1°. Observed: most straight through; 1 in ~8000 deflected > 90° — 'as if you fired a shell at tissue paper and it came back'. Analysis: Coulomb repulsion from a point-like positive charge; the distance of closest approach for head-on 180° bounces sets an upper bound on nuclear size (~10⁻¹⁴ m vs atom 10⁻¹⁰ m). Also estimated nuclear charge ≈ A/2 → later refined by Moseley.</p><p><b>Moseley (1913).</b> Each element bombarded with electrons emits characteristic X-rays; the Kα frequency obeys √ν = a(Z − b). Z — atomic number — is a measurable physical quantity, not just a counting number. Consequences: order the periodic table by Z (fixing Te/I and Ar/K mass inversions), predict missing elements (Hf, Re found later at predicted frequencies), and nail nuclear charge = proton count.</p><p><b>Chain of models:</b> Dalton sphere → Thomson pudding (electron found) → Rutherford nuclear (scattering) → Bohr orbits (spectra, next topic) → quantum mechanical (wave behaviour). Each experiment broke the previous model's specific prediction — science as prediction-falsification cycles.</p>",
  keyTerms: [
    { term: "Cathode ray", def: "Electron beam in an evacuated tube; deflected by fields" },
    { term: "e/m ratio", def: "Thomson's 1.76 × 10¹¹ C/kg — same for every cathode" },
    { term: "Charge quantum", def: "e = 1.602 × 10⁻¹⁹ C; all charges are integer multiples" },
    { term: "α-particle", def: "He²⁺ nucleus — Rutherford's probe" },
    { term: "Distance of closest approach", def: "Head-on bounce distance = upper bound on nuclear radius" },
    { term: "Moseley's law", def: "√ν = a(Z − b): X-ray frequency measures Z" }
  ],
  formulas: [
    {
      name: "Velocity selector",
      formula: "v = E/B",
      meaning: "Fields balanced → force equality qE = qvB",
      vars: [{ name: "E", meaning: "electric field strength", unit: "V/m" }, { name: "B", meaning: "magnetic field strength", unit: "T" }],
      units: "m/s",
      when: "Thomson's first step: pick particle speed",
      example: "E = 3.4 × 10⁴ V/m, B = 1.0 × 10⁻³ T → v = 3.4 × 10⁷ m/s"
    },
    {
      name: "Oil-drop charge",
      formula: "q = mgd/V",
      meaning: "At balance, electric force equals weight",
      vars: [{ name: "d", meaning: "plate separation", unit: "m" }, { name: "V", meaning: "plate voltage", unit: "V" }],
      units: "C",
      when: "Millikan balances each drop",
      example: "m = 4.9 × 10⁻¹⁵ kg, d = 0.01 m, V = 300 V → q = 1.6 × 10⁻¹⁹ C = 1e"
    }
  ],
  workedExamples: [
    {
      problem: "An oil drop of mass 3.2 × 10⁻¹⁵ kg floats motionless with plate separation 8.0 mm at 250 V. How many excess electrons?",
      given: "balance: qE = mg",
      formula: "q = mgd/V",
      substitution: "q = (3.2 × 10⁻¹⁵ × 9.8 × 8.0 × 10⁻³)/250",
      calculation: "= 1.0 × 10⁻¹⁸ C → n = 1.0 × 10⁻¹⁸/1.6 × 10⁻¹⁹ ≈ 6.3 → 6 electrons (allowing measurement rounding)",
      answer: "About 6 excess electrons — charges always land on integer multiples of e"
    },
    {
      problem: "Thomson: E = 3.4 × 10⁴ V/m and B = 1.2 × 10⁻³ T balance the beam. Find its speed.",
      given: "balanced fields",
      formula: "v = E/B",
      substitution: "3.4 × 10⁴ / 1.2 × 10⁻³",
      calculation: "≈ 2.8 × 10⁷ m/s",
      answer: "≈ 2.8 × 10⁷ m/s — about 9% of light speed"
    },
    {
      problem: "An α-particle heading straight at a gold nucleus stops at 4.0 × 10⁻¹⁴ m. Estimate the nuclear radius upper bound and compare with the atom (~2 × 10⁻¹⁰ m).",
      given: "closest approach distance",
      formula: "r_nucleus ≤ d_closest",
      substitution: "compare 4.0 × 10⁻¹⁴ vs 2 × 10⁻¹⁰",
      calculation: "ratio = 5000× smaller — volume ratio ≈ 1.25 × 10¹¹",
      answer: "The nucleus occupies ~10⁻¹¹ of the atom's volume — 'mostly empty' quantified"
    },
    {
      problem: "Explain why the plum-pudding model predicted no large deflections, and why the nuclear model does.",
      given: "charge distribution",
      formula: "Coulomb force spread vs concentrated",
      substitution: "spread charge → tiny fields everywhere → net small deflection; concentrated +2e… +79e point charge → huge close-range repulsion",
      calculation: "Only a compact nucleus delivers the impulse for > 90° bounces",
      answer: "Scattering statistics directly image the charge distribution — big bounces demand concentration"
    },
    {
      problem: "Moseley found √ν ∝ (Z − b). Why did this fix the Te/I order problem that atomic mass couldn't?",
      given: "Te (A ≈ 128) before I (A ≈ 127) but chemical order says I first",
      formula: "order by Z, not A",
      substitution: "Te Z = 52, I Z = 53 → I comes after Te in Z, matching chemistry despite lower mass",
      calculation: "Mass inversions happen with abundant heavy isotopes; Z never lies",
      answer: "Z is the physical proton count — the true periodic order. Te/I and Ar/K are mass coincidences, not chemical ones"
    }
  ],
  commonMistakes: [
    "Saying cathode rays are 'just light' — light is undeflected by fields; electrons bend",
    "Millikan: forgetting the balance condition is qE = mg (not qV = mg)",
    "Quoting the electron charge without the quantum insight — the point is integer multiples",
    "Gold-foil: 'most bounced' — actually most passed; only ~1/8000 bounced, which is the information",
    "Confusing α-particle (He²⁺, massive) with β (electron) — penetration and deflection differ",
    "Treating Moseley's Z as just an atomic count — it's measurable via X-ray frequency",
    "Mixing up e/m (Thomson) with e (Millikan) — you need both to get the mass"
  ],
  applications: [
    "Every screen from CRT TVs to electron microscopes descends from cathode-ray deflection (v = E/B steering)",
    "Mass spectrometers are Thomson's e/m applied to molecules — drug testing, doping control, isotope dating",
    "XRF (X-ray fluorescence) mining analysers are Moseley's law in a handheld — ore grading in Ethiopian potash exploration",
    "Inkjet printers steer charged droplets with E fields — Millikan-style force balance at industrial speed",
    "Particle physics colliders are Rutherford scattering pushed to TeV energies — same physics, bigger microscope"
  ],
  summary: "Four experiments measured the invisible: Thomson's deflected rays gave the electron's e/m and universality; Millikan's balanced drops quantized charge (e = 1.602 × 10⁻¹⁹ C); Rutherford's scattered α-particles concentrated mass and charge into a nucleus 10⁵× smaller than the atom; Moseley's X-rays made atomic number physical. Each result falsified the previous model and forced the next — the experimental spine of modern atomic theory.",
  visuals: [
    { type: "timeline", config: { title: "Measuring the invisible", events: [{ label: "Thomson 1897", detail: "e/m — the electron is universal" }, { label: "Millikan 1909", detail: "charge comes in quanta of e" }, { label: "Rutherford 1911", detail: "nucleus — atom is mostly empty" }, { label: "Moseley 1913", detail: "Z is physically measurable" }] } },
    { type: "steps", config: { title: "Gold foil — reading the data", steps: [{ label: "Fire α-particles", detail: "heavy, fast, positive" }, { label: "Most pass straight", detail: "atom = mostly empty" }, { label: "1/8000 bounce > 90°", detail: "dense positive core" }, { label: "Bounce statistics", detail: "→ nuclear size bound" }, { label: "Model updated", detail: "pudding → nuclear" }] } },
    { type: "qa", config: { title: "Who measured what?", pairs: [{ q: "e/m of the electron?", a: "<b>Thomson</b> — field deflection" }, { q: "charge e itself?", a: "<b>Millikan</b> — balanced oil drops" }, { q: "the nucleus?", a: "<b>Rutherford</b> — α-scattering" }, { q: "Z as a measurable?", a: "<b>Moseley</b> — X-ray frequencies" }] } }
  ],
  questions: [
    { type: "mcq", q: "Cathode rays are deflected toward the positive plate, proving they are:", options: ["positive", "negative", "neutral", "light waves"], answer: 1, difficulty: 1, explanation: "Attraction to + means negative charge — electrons" },
    { type: "mcq", q: "Millikan's key discovery was that charge is:", options: ["continuous", "quantized in units of e", "always negative", "proportional to mass"], answer: 1, difficulty: 1, explanation: "Every drop carried an integer multiple of 1.6 × 10⁻¹⁹ C" },
    { type: "mcq", q: "In the gold-foil experiment, most α-particles:", options: ["bounced back", "passed straight through", "were absorbed", "spiralled"], answer: 1, difficulty: 1, explanation: "The atom is mostly empty space" },
    { type: "mcq", q: "Moseley ordered the periodic table by:", options: ["atomic mass", "atomic number", "density", "X-ray intensity"], answer: 1, difficulty: 2, explanation: "Z from X-ray frequencies — fixed Te/I and Ar/K" },
    { type: "tf", q: "The electron's charge-to-mass ratio is the same regardless of cathode metal.", answer: true, difficulty: 2, explanation: "Universality — electrons are constituents of ALL matter" },
    { type: "tf", q: "Rutherford concluded the nucleus contains most of the atom's volume.", answer: false, difficulty: 1, explanation: "Most of the MASS in almost none of the VOLUME (~10⁻¹¹)" },
    { type: "calc", q: "Balanced fields: E = 5.0 × 10⁴ V/m, B = 2.5 × 10⁻³ T. Beam speed?", answer: "2e7|2.0e7|20000000", difficulty: 2, explanation: "v = E/B = 2.0 × 10⁷ m/s" },
    { type: "calc", q: "A drop needs q = 4.8 × 10⁻¹⁹ C to float. How many excess electrons?", answer: "3", difficulty: 2, explanation: "4.8/1.6 = 3 electrons" },
    { type: "short", q: "Instrument Moseley used to establish atomic number:", answer: "x-ray|x-ray spectra|x-ray spectroscopy", difficulty: 2, explanation: "Characteristic X-ray frequencies gave √ν = a(Z − b)" },
    { type: "concept", q: "Why did the 1-in-8000 large deflections matter more than the straight-through majority?", answer: "rare bounces prove nucleus|concentrated charge|statistics reveal structure|falsified pudding", difficulty: 3, explanation: "Straight-through only says 'mostly empty'; the rare large bounces could ONLY arise from a concentrated positive charge — the rare events carried the structural information" }
  ]
};

Lessons["g11-chemistry-uc1-t3"] = {
  overview: "Light from hot atoms comes in sharp lines, not rainbows — each element's barcode. Explaining those lines forced physics to abandon continuous orbits for quantized energy levels, and gave chemistry its most powerful identification tool: the spectroscope.",
  objectives: [
    "Relate wavelength, frequency and the speed of light: c = λν",
    "Describe the hydrogen spectrum's Lyman, Balmer series",
    "State the Bohr model's postulates and derive its successes",
    "Explain absorption vs emission spectra and their uses",
    "Connect quantized levels to line spectra (E = hν)"
  ],
  simple: "Pass light through a prism: white light spreads into a continuous rainbow, but light from excited hydrogen shows only a few sharp coloured lines. Each line is a photon with a specific energy — E = hν — emitted when an electron drops from one allowed orbit to another. Because orbits come only in fixed energy levels (quantized), the differences are fixed too: that's why the lines are sharp. The Balmer series (visible) fits a simple formula — 1/λ = R(1/4 − 1/n²) — and Rydberg's constant R predicted lines nobody had seen yet (UV Lyman, IR Paschen), which were then found exactly where predicted. Absorption is the reverse: cool gas swallows the same colours it would emit, producing dark lines — the Fraunhofer lines in sunlight, the fingerprints that let us read a star's composition from 400 light-years away. Emission = electron falls, energy out; absorption = electron jumps up, energy in.",
  detailed: "<p><b>Wave basics.</b> Light: c = λν = 3.00 × 10⁸ m/s. Energy per photon: E = hν = hc/λ with h = 6.626 × 10⁻³⁴ J·s. Shorter wavelength → higher frequency → higher energy. The electromagnetic spectrum spans radio (metres) → microwave → IR → visible (700–400 nm) → UV → X-ray (Å) → gamma; chemistry's electronic transitions live mostly in UV-visible.</p><p><b>Hydrogen's lines.</b> Balmer (1885, visible): 1/λ = R_H(1/2² − 1/n²), n = 3, 4, 5… → 656 nm (red Hα), 486 (cyan), 434, 410. Lyman (UV): to n = 1; Paschen (IR): to n = 3. Rydberg constant R_H = 1.097 × 10⁷ m⁻¹ — fitted first, explained later. The pattern cries out for a physical meaning: energies must be E_n = −R_Hhc/n² — negative because bound.</p><p><b>Bohr's postulates (1913).</b> (1) Electrons occupy fixed circular orbits without radiating (contradicting classical EM — the ad hoc genius). (2) Angular momentum quantized: mvr = nħ (n = 1, 2, 3…). (3) Photons only on jumps: hν = E_high − E_low. Results: r_n = n²a₀ (a₀ = 52.9 pm), E_n = −13.6/n² eV, and the predicted Rydberg constant matched to 4 significant figures — the first theory to nail a spectrum. Ionization energy from the ground state: 13.6 eV ✓ matches experiment.</p><p><b>Where Bohr breaks.</b> Multi-electron atoms: electron-electron repulsion breaks the simple formula; line splittings in magnetic fields (Zeeman) and fine structure needed elliptical orbits (Sommerfeld patches); intensities unexplained. The model survives as the 'hydrogen bridge' — exact for one electron, pedagogically eternal.</p><p><b>Spectra as tools.</b> Emission: excited gas (flame test — Na yellow 589 nm, K lilac, Ca brick-red; neon signs; fireworks chemistry). Absorption: continuum minus the same lines (Fraunhofer's 574 solar lines; Bunsen-Kirchhoff's 1860 discovery of caesium and rubidium by their blue and red lines — elements found in light before in rock). Astronomical redshift, stellar composition, and the neon-sign economy all rest on quantized jumps.</p>",
  keyTerms: [
    { term: "Photon", def: "Light quantum: E = hν — emitted/absorbed whole" },
    { term: "Emission spectrum", def: "Bright lines from electron falls in excited gas" },
    { term: "Absorption spectrum", def: "Dark lines where cool gas removes the same colours" },
    { term: "Balmer series", def: "Visible H lines: n → 2 transitions" },
    { term: "Ground state", def: "n = 1, the lowest level, E = −13.6 eV" },
    { term: "Quantized", def: "Only discrete values allowed — orbits and photons alike" }
  ],
  formulas: [
    {
      name: "Wave relations",
      formula: "c = λν | E = hν = hc/λ",
      meaning: "Speed, wavelength, frequency, energy of light",
      vars: [{ name: "h", meaning: "Planck constant 6.626 × 10⁻³⁴ J·s", unit: "J·s" }, { name: "λ", meaning: "wavelength", unit: "m" }],
      units: "J per photon",
      when: "Any photon calculation",
      example: "589 nm (Na): E = hc/λ = 3.37 × 10⁻¹⁹ J ≈ 2.1 eV"
    },
    {
      name: "Hydrogen levels",
      formula: "E_n = −13.6/n² eV | 1/λ = R_H(1/n₁² − 1/n₂²)",
      meaning: "Bohr's allowed energies and the line formula",
      vars: [{ name: "R_H", meaning: "Rydberg constant 1.097 × 10⁷ m⁻¹", unit: "m⁻¹" }],
      units: "eV / m⁻¹",
      when: "Hydrogen (any one-electron ion with Z² scaling)",
      example: "n=3→2: 1/λ = R(1/4 − 1/9) → λ = 656 nm (Hα)"
    }
  ],
  workedExamples: [
    {
      problem: "Find the energy (J and eV) of a 656 nm photon (Hα).",
      given: "λ = 656 × 10⁻⁹ m",
      formula: "E = hc/λ",
      substitution: "= (6.626 × 10⁻³⁴ × 3.00 × 10⁸)/656 × 10⁻⁹",
      calculation: "= 3.03 × 10⁻¹⁹ J = 3.03 × 10⁻¹⁹/1.602 × 10⁻¹⁹ ≈ 1.89 eV",
      answer: "3.03 × 10⁻¹⁹ J ≈ 1.89 eV — matches E₃ − E₂ = −1.51 + 3.40 ✓"
    },
    {
      problem: "Which transition gives the longest-wavelength Balmer line?",
      given: "Balmer: n → 2",
      formula: "longest λ = smallest energy gap = n = 3 → 2",
      substitution: "1/λ = R(1/4 − 1/9) = R × 5/36",
      calculation: "λ = 36/(5R) ≈ 656 nm",
      answer: "3 → 2 (Hα, red 656 nm) — closer levels = redder light"
    },
    {
      problem: "Compute the ionization energy of H from the ground state (in eV and J).",
      given: "E₁ = −13.6 eV",
      formula: "IE = 0 − E₁",
      substitution: "13.6 eV × 1.602 × 10⁻¹⁹ J/eV",
      calculation: "= 2.18 × 10⁻¹⁸ J",
      answer: "13.6 eV = 2.18 × 10⁻¹⁸ J per atom — the number Grade 11 will reuse everywhere"
    },
    {
      problem: "A sodium street lamp glows at 589 nm. What jump energy (kJ/mol) does it emit?",
      given: "λ = 589 nm",
      formula: "E = hc/λ per photon; × N_A for a mole",
      substitution: "3.37 × 10⁻¹⁹ J × 6.022 × 10²³",
      calculation: "≈ 2.03 × 10⁵ J/mol ≈ 203 kJ/mol",
      answer: "≈ 203 kJ/mol — the yellow D-line that dyes every Na flame test"
    },
    {
      problem: "Explain how scientists knew helium existed on the Sun before finding it on Earth.",
      given: "1868 solar eclipse spectrum",
      formula: "absorption/emission lines are element fingerprints",
      substitution: "unexplained yellow line at 587.6 nm in the solar spectrum",
      calculation: "No terrestrial element matched → new element proposed and named (helios)",
      answer: "Helium was discovered in sunlight, 27 years before it was found in Earth's gas wells — spectroscopy reads composition across space"
    }
  ],
  commonMistakes: [
    "Treating photon energy as continuous — it comes in hν packets only",
    "Reversing E = hc/λ (bigger λ = SMALLER energy, not more)",
    "Bohr orbits called 'actual paths' — they're a stepping-stone model; orbitals replace them",
    "Balmer series claimed for all n → 1 transitions — that's Lyman (UV)",
    "Absorption spectra confused with emission — dark lines vs bright, but SAME wavelengths",
    "Unit chaos: nm vs m in c = λν (convert nm → 10⁻⁹ m first)",
    "Forgetting the 1/n² sign: levels are NEGATIVE (bound), rising to 0 at n = ∞"
  ],
  applications: [
    "Flame tests & fireworks: Sr red, Ba green, Cu blue, Na yellow — quantized jumps painting the sky",
    "Astronomy: stellar composition, redshift and the expanding universe all read from line spectra",
    "Neon signage & discharge lamps: element-specific glow colours from excited-gas emission",
    "Forensics & environmental monitoring: atomic absorption spectroscopy detects lead in water at ppb levels",
    "Fibre-optic telecoms: 1550 nm IR photons chosen to match glass's transparency window — photon energy engineering"
  ],
  summary: "Sharp atomic lines — hydrogen's Balmer/Lyman series fitting 1/λ = R(1/n₁² − 1/n₂²) — forced energy quantization: Bohr's orbits with E_n = −13.6/n² eV, photons emitted only on jumps (E = hν = hc/λ). Absorption mirrors emission as dark lines, turning spectroscopy into composition-reading across space. Bohr is exact for hydrogen and a bridge to quantum orbitals — quantization is the concept that survives.",
  visuals: [
    { type: "lineGraph", config: { title: "Hydrogen energy levels", xLabel: "level n", yLabel: "energy (eV)", series: [{ label: "E_n = −13.6/n²", color: "#3b82f6", points: [[1, -13.6], [2, -3.4], [3, -1.51], [4, -0.85], [5, -0.54], [6, -0.38]] }, { label: "zero = freed electron", color: "#94a3b8", points: [[1, 0], [6, 0]] }] } },
    { type: "comparison", config: { title: "Emission vs absorption", left: { name: "Emission", items: ["excited gas glows", "bright lines", "electrons FALL", "neon signs, flames"] }, right: { name: "Absorption", items: ["cool gas filters", "dark lines", "electrons JUMP UP", "sun's Fraunhofer lines"] } } },
    { type: "qa", config: { title: "Spectrum reflexes", pairs: [{ q: "Shorter λ → energy?", a: "<b>higher</b> — E = hc/λ" }, { q: "Balmer lands at n = ?", a: "<b>2</b> (visible)" }, { q: "IE of H from n=1?", a: "<b>13.6 eV</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "The Balmer series consists of transitions ending at:", options: ["n = 1", "n = 2", "n = 3", "n = ∞"], answer: 1, difficulty: 1, explanation: "n → 2 gives the visible lines" },
    { type: "mcq", q: "A photon is emitted when an electron:", options: ["jumps up", "falls down", "stays in orbit", "escapes"], answer: 1, difficulty: 1, explanation: "Falling releases energy as a photon" },
    { type: "mcq", q: "Energy of the H ground state:", options: ["0", "−13.6 eV", "+13.6 eV", "−3.4 eV"], answer: 1, difficulty: 2, explanation: "E₁ = −13.6 eV; zero means free" },
    { type: "mcq", q: "Dark lines in the solar spectrum are caused by:", options: ["emission", "absorption by cooler outer gas", "reflection", "redshift only"], answer: 1, difficulty: 2, explanation: "Cooler gas absorbs the same wavelengths it would emit" },
    { type: "tf", q: "Bohr's model accurately predicts spectra of multi-electron atoms.", answer: false, difficulty: 2, explanation: "Exact for one-electron systems only; repulsions break it" },
    { type: "tf", q: "A 400 nm photon carries more energy than a 700 nm photon.", answer: true, difficulty: 2, explanation: "E = hc/λ — shorter wavelength, higher energy (violet > red)" },
    { type: "calc", q: "Energy of a 486 nm photon (× 10⁻¹⁹ J, 1 dp)?", answer: "4.1", difficulty: 2, explanation: "E = (6.626e-34 × 3e8)/486e-9 = 4.09 × 10⁻¹⁹ J" },
    { type: "calc", q: "Transition n = 4 → 2 energy difference (eV)?", answer: "2.55", difficulty: 3, explanation: "−0.85 − (−3.40) = 2.55 eV (the cyan 486 nm line)" },
    { type: "short", q: "Constant in 1/λ = R(1/n₁² − 1/n₂²): name and value.", answer: "rydberg|1.097e7|1.097 x 10^7", difficulty: 2, explanation: "Rydberg constant R_H ≈ 1.097 × 10⁷ m⁻¹" },
    { type: "concept", q: "Why must atomic spectra be line spectra if electrons are bound?", answer: "quantized levels|discrete jumps|fixed energy gaps|only certain orbits", difficulty: 3, explanation: "Bound electrons have only discrete allowed energies; photon energy equals exact level differences, so only specific frequencies exist — continuous spectra would need continuous energy levels, which bound systems forbid" }
  ]
};

Lessons["g11-chemistry-uc1-t4"] = {
  overview: "Bohr's orbits worked for hydrogen and nothing else. de Broglie and Schrödinger replaced paths with standing waves and probability clouds: orbitals. Four quantum numbers address each electron; the Aufbau, Pauli and Hund rules fill them. This is the model every later chapter uses.",
  objectives: [
    "Apply de Broglie's λ = h/mv to electrons and why waves matter at atomic scale",
    "State the uncertainty principle and its consequence for orbits",
    "Name the four quantum numbers and their allowed values",
    "Distinguish orbital shapes: s, p, d",
    "Write electron configurations with Aufbau, Pauli, Hund (and the exceptions)"
  ],
  simple: "de Broglie's leap: if light waves can act like particles, particles should act like waves — λ = h/mv. For a fast baseball the wavelength is absurdly tiny, but an electron is light enough that its wave matters: an 'orbit' must be a standing wave around the nucleus. Heisenberg's uncertainty principle then forbids knowing position and momentum together precisely — so no neat paths. Schrödinger's equation solves the wave instead: its solutions are orbitals, 3-D probability clouds. Each orbital is addressed by four quantum numbers: n (size/energy shell: 1, 2, 3…), ℓ (shape: 0 = s ball, 1 = p dumbbell, 2 = d clover), mℓ (orientation: −ℓ…+ℓ), mₛ (spin: ±½). Filling rules: Aufbau (lowest energy first, following the diagonal order), Pauli (no two electrons share all four numbers — an orbital holds max 2, spins opposed), Hund (degenerate orbitals fill singly first, spins parallel). Oxygen is 1s²2s²2p⁴ — with the 2p⁴ drawn as one paired + two single arrows.",
  detailed: "<p><b>Matter waves.</b> λ = h/mv. Electron at 2.2 × 10⁶ m/s: λ ≈ 3.3 × 10⁻¹⁰ m = 3.3 Å — atomic scale! Baseball at 40 m/s: ~10⁻³⁴ m — 10²⁰ × smaller than a nucleus, unobservable. Bohr's quantization re-derived: an integer number of wavelengths must fit the orbit (2πr = nλ) — orbits are standing waves. The uncertainty principle (Δx·Δp ≥ ħ/2) makes exact orbits impossible: confining an electron to an atom gives it unavoidable momentum spread — a standing wave, not a path.</p><p><b>Orbitals and quantum numbers.</b> Schrödinger's ψ² gives probability density. n = 1, 2, 3… (shell, energy ≈ −13.6 Z²_eff/n²); ℓ = 0…n−1 (subshell: s, p, d, f); mℓ = −ℓ…+ℓ (2ℓ + 1 orbitals of that shape); mₛ = ±½. Count check: shell n has n² orbitals, 2n² electrons (n = 2: 4 orbitals, 8 e⁻ ✓). Shapes: s spherical; p three dumbbells along x, y, z; d five cloverleafs (+ the dz² donut); f seven — chemistry mostly needs s/p/d.</p><p><b>Filling rules.</b> Aufbau order by (n + ℓ): 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p… — the 4s-before-3d quirk (lower n+ℓ). Pauli exclusion: two electrons per orbital max, opposite spins. Hund: in degenerate p/d sets, spread singly with parallel spins before pairing (nitrogen: 2p³ = three single ↑ ↑ ↑ — half-filled stability; oxygen must pair one). Exceptions: Cr is [Ar]3d⁵4s¹ not 3d⁴4s² (half-filled d bonus); Cu is [Ar]3d¹⁰4s¹ (filled d bonus) — symmetry lowers energy.</p><p><b>Configurations in practice.</b> Shorthand via noble-gas cores: Na = [Ne]3s¹. Ions: remove from the OUTER n first — Fe: [Ar]4s²3d⁶ → Fe³⁺ = [Ar]3d⁵ (4s electrons leave first! d is 'inside' energetically once filled). Configurations explain the periodic table's blocks: s-block groups 1–2, p-block 13–18, d-block transitions, f-block lanthanides/actinides — the table IS the filling order drawn as architecture.</p><p><b>Magnetism:</b> unpaired electrons → paramagnetic (attracted to fields: O₂, Fe); all-paired → diamagnetic (weakly repelled). Hund's rule thus has lab consequences — count unpaired electrons from the orbital diagram.</p>",
  keyTerms: [
    { term: "Orbital", def: "Probability cloud: ψ² region where the electron likely is" },
    { term: "Quantum numbers", def: "n, ℓ, mℓ, mₛ — the electron's address" },
    { term: "Pauli exclusion", def: "No two electrons in one atom share all four quantum numbers" },
    { term: "Hund's rule", def: "Degenerate orbitals fill singly, spins parallel, before pairing" },
    { term: "Aufbau principle", def: "Fill lowest (n + ℓ) energy orbitals first" },
    { term: "Paramagnetic", def: "Has unpaired electrons — attracted to magnetic fields" }
  ],
  formulas: [
    {
      name: "de Broglie wavelength",
      formula: "λ = h/mv",
      meaning: "Every moving particle has a wave",
      vars: [{ name: "m", meaning: "mass", unit: "kg" }, { name: "v", meaning: "speed", unit: "m/s" }],
      units: "m",
      when: "Judging when quantum effects matter",
      example: "e⁻ at 2.2 × 10⁶ m/s: λ = 3.3 × 10⁻¹⁰ m — atomic scale"
    },
    {
      name: "Capacity rules",
      formula: "shell n: n² orbitals, 2n² electrons; subshell ℓ: 2(2ℓ+1) electrons",
      meaning: "The bookkeeping of the periodic table's length",
      vars: [{ name: "ℓ", meaning: "0 = s(2), 1 = p(6), 2 = d(10), 3 = f(14)", unit: "—" }],
      units: "—",
      when: "Predicting configuration capacities",
      example: "n = 3 holds 18 e⁻: 3s² 3p⁶ 3d¹⁰"
    }
  ],
  workedExamples: [
    {
      problem: "Write the full electron configuration and orbital diagram of oxygen (Z = 8). Is it paramagnetic?",
      given: "8 electrons",
      formula: "Aufbau + Hund",
      substitution: "1s² 2s² 2p⁴ → 2p: [↑↓][↑][↑]",
      calculation: "two unpaired electrons",
      answer: "1s² 2s² 2p⁴; paramagnetic (2 unpaired) — O₂'s magnetism comes from exactly this"
    },
    {
      problem: "Give the configuration of Fe (Z = 26) and Fe³⁺.",
      given: "[Ar] core",
      formula: "Fe: [Ar]4s²3d⁶; ions lose 4s first",
      substitution: "remove 4s² then one 3d",
      calculation: "Fe³⁺ = [Ar]3d⁵",
      answer: "[Ar]3d⁵ — half-filled d: extra stability explains Fe³⁺'s abundance in rust and haemoglobin chemistry"
    },
    {
      problem: "Why is chromium [Ar]3d⁵4s¹ rather than [Ar]4s²3d⁴?",
      given: "exception",
      formula: "symmetry energy",
      substitution: "half-filled 3d⁵ + half-filled 4s¹ — two symmetric sets",
      calculation: "exchange-energy stabilization beats strict Aufbau",
      answer: "Half-filled subshells gain extra stability — Cr and Cu are the classic exceptions to memorize"
    },
    {
      problem: "List the four quantum numbers for the distinguishing electron of Na (Z = 11).",
      given: "Na = [Ne]3s¹",
      formula: "n, ℓ, mℓ, mₛ for 3s¹",
      substitution: "n = 3, ℓ = 0, mℓ = 0, mₛ = +½",
      calculation: "(3, 0, 0, +½)",
      answer: "The single 3s electron: (3, 0, 0, +½) — 'the address of sodium's personality'"
    },
    {
      problem: "How many orbitals and electrons can n = 4 hold? Name the subshells.",
      given: "shell 4",
      formula: "n² orbitals, 2n² electrons",
      substitution: "4s + 4p + 4d + 4f = 1 + 3 + 5 + 7 = 16 orbitals",
      calculation: "32 electrons max",
      answer: "16 orbitals, 32 electrons — though 4f fills late (f-block), which is why period 6 is so long"
    }
  ],
  commonMistakes: [
    "Writing 3d before 4s in configurations (Aufbau order: 4s fills first, though 4s empties first in ions)",
    "Pairing electrons in 2p before all three orbitals are singly occupied (violates Hund)",
    "Orbitals confused with orbits — clouds of probability, not paths",
    "mₛ written as +1/−1 instead of ±½",
    "Ion configurations stripping 3d before 4s — the HIGHEST n leaves first (4s), even though it filled first",
    "Forgetting Cr/Cu exceptions when asked for 'correct' configurations",
    "Claiming ψ is the probability — ψ² is; ψ can be negative"
  ],
  applications: [
    "MRI: hydrogen's nuclear spin (mₛ's nuclear cousin) is the signal source — quantum numbers in the hospital",
    "Oxygen's paramagnetism (2 unpaired p electrons) is used in industrial O₂ sensors",
    "LED colours: band gaps from orbital energies — phosphor chemistry tunes quantum-level differences",
    "Transition-metal colours (blue Cu²⁺, green Fe²⁺) come from d-orbital splitting — gem and pigment chemistry",
    "Semiconductor doping: P (5 valence) vs B (3 valence) donate/accept electrons — the periodic table engineered into chips"
  ],
  summary: "Matter waves (λ = h/mv) and uncertainty killed orbits; Schrödinger's orbitals — addressed by n, ℓ, mℓ, mₛ — replaced them. Electrons fill by Aufbau order (1s 2s 2p 3s 3p 4s 3d…), two per orbital with opposed spins (Pauli), degenerate orbitals singly first (Hund), with Cr and Cu hoarding symmetry. Configurations are the periodic table's source code: blocks, lengths, ion behaviour and magnetism all fall out of the four quantum numbers.",
  visuals: [
    { type: "comparison", config: { title: "Orbit vs orbital", left: { name: "Bohr orbit", items: ["fixed circular path", "exact position", "hydrogen only", "2-D rings"] }, right: { name: "Quantum orbital", items: ["probability cloud", "uncertainty by design", "all atoms", "s/p/d shapes"] } } },
    { type: "steps", config: { title: "Configuration recipe", steps: [{ label: "Count electrons", detail: "Z for neutral atoms" }, { label: "Aufbau order", detail: "1s 2s 2p 3s 3p 4s 3d…" }, { label: "Fill per orbital", detail: "2 max, spins opposed" }, { label: "Degenerate sets", detail: "single↑ first (Hund)" }, { label: "Check exceptions", detail: "Cr, Cu" }] } },
    { type: "qa", config: { title: "Quantum number limits", pairs: [{ q: "ℓ = 2 means…?", a: "<b>d</b> — 5 orbitals" }, { q: "mℓ range for p?", a: "<b>−1, 0, +1</b>" }, { q: "mₛ values?", a: "<b>+½ or −½</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "The maximum electrons in a 2p subshell:", options: ["2", "3", "6", "8"], answer: 2, difficulty: 1, explanation: "3 orbitals × 2 = 6" },
    { type: "mcq", q: "An s orbital is shaped like a:", options: ["dumbbell", "sphere", "clover", "donut"], answer: 1, difficulty: 1, explanation: "s = spherical; p = dumbbell; d = clover" },
    { type: "mcq", q: "Nitrogen's 2p³ arrangement shows:", options: ["one pair + one single", "three single parallel spins", "three pairs", "two pairs + one single"], answer: 1, difficulty: 2, explanation: "Hund's rule: singly first, parallel — half-filled stability" },
    { type: "mcq", q: "The correct configuration of Cu (Z = 29):", options: ["[Ar]4s²3d⁹", "[Ar]4s¹3d¹⁰", "[Ar]4s²3d¹⁰", "[Ar]4s²4p⁶3d³"], answer: 1, difficulty: 3, explanation: "Filled 3d¹⁰ wins over strict Aufbau — the classic exception" },
    { type: "tf", q: "The uncertainty principle means we can never know an electron's exact position and momentum together.", answer: true, difficulty: 2, explanation: "Δx·Δp ≥ ħ/2 — precision in one costs precision in the other" },
    { type: "tf", q: "All electrons in ground-state neon are paired.", answer: true, difficulty: 2, explanation: "[He]2s²2p⁶ — closed shell, diamagnetic" },
    { type: "calc", q: "de Broglie wavelength of an electron (m = 9.11 × 10⁻³¹ kg) at 1.0 × 10⁶ m/s (× 10⁻¹⁰ m, 1 dp)?", answer: "7.3", difficulty: 3, explanation: "λ = 6.626e-34/(9.11e-31 × 1e6) = 7.3 × 10⁻¹⁰ m" },
    { type: "calc", q: "How many unpaired electrons in Mn (Z = 25, [Ar]4s²3d⁵)?", answer: "5", difficulty: 2, explanation: "d⁵ all single (Hund) — five unpaired, strongly paramagnetic" },
    { type: "short", q: "Quantum number giving orbital shape (letter).", answer: "l|ℓ|azimuthal|angular momentum", difficulty: 2, explanation: "ℓ = 0 s, 1 p, 2 d, 3 f" },
    { type: "concept", q: "Why must an orbital hold at most two electrons?", answer: "pauli|four quantum numbers|two spins only|exclusion", difficulty: 3, explanation: "Three quantum numbers fix the orbital; only mₛ remains to distinguish electrons, and it has just two values (±½) — Pauli's exclusion caps occupancy at 2" }
  ]
};

Lessons["g11-chemistry-uc1-t5"] = {
  overview: "The periodic table isn't memorized — it's derived. Electron configurations repeat shell by shell, so chemistry repeats: alkali metals, halogens, noble gases. Periodic trends (radius, ionization energy, electronegativity, metallic character) are configuration physics made visible, and they predict reactions before you run them.",
  objectives: [
    "Map the periodic table onto s/p/d/f blocks",
    "Explain periodicity from repeating outer configurations",
    "Predict and justify trends: atomic radius, IE, electronegativity, metallic character",
    "Use effective nuclear charge to defend each trend",
    "Apply trends to compare reactivity of elements"
  ],
  simple: "Elements in the same GROUP share outer-electron configurations — Li is 2s¹, Na is 3s¹, K is 4s¹ — same 'outfit', same chemistry: all violent with water. Across a PERIOD, electrons fill the same shell while protons stack up: the pull on the outer shell strengthens. Consequences, left to right: atoms SHRINK (stronger pull), ionization energy RISES (harder to steal an electron), electronegativity RISES (stronger hunger for electrons), metallic character FALLS (metals donate, non-metals grab). Down a group everything reverses: bigger (new shells), lower IE (outer electron farther, shielded), more metallic. Shielding is the referee: inner electrons block some nuclear pull, so the outer electrons feel only the EFFECTIVE nuclear charge Z_eff ≈ Z − shielding. Caesium explodes in water; fluorine attacks nearly everything; the noble gases sit fat and happy with full shells. The table is a trend map — read positions, predict reactions.",
  detailed: "<p><b>Blocks from configurations.</b> s-block (groups 1–2): outer ns¹⁻²; p-block (13–18): ns²np¹⁻⁶; d-block (3–12): (n−1)d¹⁻¹⁰ — 'transition metals' with variable oxidation states from d-electron juggling; f-block: lanthanides + actinides. Group number = outer electron count (main groups); period number = outer shell n. The table's shape — 2, 8, 8, 18, 18, 32 — is literally the subshell capacity sequence.</p><p><b>Atomic radius.</b> Across a period: same shell, more protons → contraction (Li 152 pm → Ne 69 pm; roughly 10–15% per step). Down: new shells → big jumps (Li 152 → Cs 265 pm). Ionic radii follow: cations smaller (lost shell / less repulsion: Na⁺ 102 vs Na 186 pm), anions larger (added repulsion: Cl⁻ 181 vs Cl 99 pm).</p><p><b>Ionization energy (IE).</b> First IE: energy to remove the outermost electron from a gaseous atom. Rises left → right (harder to remove from smaller, higher-Z_eff atoms), falls down groups (shielding + distance). Spikes at noble gases (full shells), dips at group 13 and 16 (single-electron and paired-p subshell repulsion) — the exceptions that prove the configuration theory. Successive IEs jump enormously after a shell empties: Na's IE₂ is ~9× IE₁ (breaking into [Ne]) — why Na forms Na⁺, never Na²⁺.</p><p><b>Electronegativity (EN) & metallic character.</b> EN: pull on shared electrons — F 4.0 (maximum), O 3.4, N 3.0; francium lowest ~0.7. Rises right/up, same physics as IE. Metallic character: ease of electron donation — falls right, rises down; the diagonal line B–Si–As–Te separates metals from non-metals, with metalloids straddling it (Si's semiconductor soul). Oxide acidity mirrors it: Na₂O basic, Al₂O₃ amphoteric, SO₃ acidic — the trend in disguise.</p><p><b>Applying trends:</b> predict reactions — K + H₂O more violent than Na (lower IE); Cl₂ oxidizes Br⁻ (higher EN); Mg²⁺ vs Ca²⁺ radius difference changes lattice energies and solubility. Ethiopian context: fluoride in the Rift Valley's groundwater binds Ca²⁺ (dental/skeletal fluorosis) — solubility and EN of CaF₂ chemistry in a public-health story.</p>",
  keyTerms: [
    { term: "Group / period", def: "Column (same outer config) / row (same outer shell)" },
    { term: "Effective nuclear charge", def: "Z_eff = Z − shielding: the pull outer electrons feel" },
    { term: "Ionization energy", def: "Energy to remove the outermost gaseous electron" },
    { term: "Electronegativity", def: "Atom's pull on bonding electrons (F = 4.0 max)" },
    { term: "Atomic radius", def: "Half the internuclear distance; shrinks right, grows down" },
    { term: "Metalloid", def: "Diagonal B–Si–As–Te–At band: semiconductor chemistry" }
  ],
  formulas: [
    {
      name: "Effective nuclear charge (Slater-lite)",
      formula: "Z_eff ≈ Z − S",
      meaning: "Nuclear pull minus inner-electron shielding",
      vars: [{ name: "S", meaning: "shielding count (roughly inner electrons)", unit: "—" }],
      units: "—",
      when: "Justifying every trend",
      example: "Na outer e⁻: 11 − 10 = +1 core pull; Cl outer: 17 − 10 = +7 — why Cl grabs, Na gives"
    },
    {
      name: "Trend map",
      formula: "radius: ↓ across, ↑ down | IE & EN: ↑ across, ↓ down",
      meaning: "The four master trends in one line",
      vars: [{ name: "metallic", meaning: "opposite of IE/EN", unit: "—" }],
      units: "—",
      when: "Comparing any two elements",
      example: "Pick the stronger reducing agent: K vs Na → K (lower IE, more metallic)"
    }
  ],
  workedExamples: [
    {
      problem: "Order by increasing atomic radius: Na, Mg, Cl, K.",
      given: "period 3 + K",
      formula: "shrinks right, grows down",
      substitution: "K (down a period) largest; then Na; Mg; Cl smallest",
      calculation: "Cl < Mg < Na < K",
      answer: "Cl (99 pm) < Mg (160) < Na (186) < K (227) — one rule, four answers"
    },
    {
      problem: "Explain why the first IE of Ne is far higher than that of Na, though Ne's Z is bigger.",
      given: "Ne: 1s²2s²2p⁶ full shell",
      formula: "Z_eff + shell stability",
      substitution: "Ne outer electrons: Z_eff ≈ 8, no vacancy; Na: single 3s¹ beyond a full core",
      calculation: "Removing from a full shell + huge Z_eff vs an easily-lost lone s electron",
      answer: "IE(Ne) ≈ 2081 kJ/mol vs Na 496 — full-shell stability and high Z_eff make Ne inert"
    },
    {
      problem: "Predict the more reactive with water: K or Mg. Justify via IE and radius.",
      given: "group 1 vs 2",
      formula: "metal reactivity ∝ electron donation ease",
      substitution: "K: IE₁ 419 kJ/mol, r 227 pm; Mg: 738, 160",
      calculation: "K donates far more readily",
      answer: "K — lower IE, larger radius: lilac flames vs Mg's slow hot-water reaction"
    },
    {
      problem: "Why is Na⁺ much smaller than Na, while Cl⁻ is bigger than Cl?",
      given: "ion formation",
      formula: "electrons removed → less repulsion & often a shell; added → more repulsion",
      substitution: "Na⁺: [Ne] (n = 2 shell gone); Cl⁻: 18 e⁻ in n = 3 shell",
      calculation: "Na 186 → Na⁺ 102 pm; Cl 99 → Cl⁻ 181 pm",
      answer: "Cations shrink (shell loss), anions swell (repulsion) — every ionic radius story in one contrast"
    },
    {
      problem: "Rank by increasing electronegativity: Ca, O, F, Al.",
      given: "trend right/up",
      substitution: "Ca (group 2, period 4) lowest; then Al; O; F top",
      calculation: "Ca (1.0) < Al (1.5) < O (3.4) < F (4.0)",
      answer: "Ca < Al < O < F — and it predicts bonding: Ca–O ionic, O–F polar covalent"
    }
  ],
  commonMistakes: [
    "Saying radius grows across a period (new protons PULL IN — it shrinks)",
    "IE vs electronegativity conflated: IE is removal energy (isolated atom), EN is bond-pull (in a bond)",
    "Shielding ignored: 'more protons always = stronger pull' fails down groups where shells shield",
    "Successive IEs treated as similar — IE₂, IE₃ jump at shell boundaries (core electrons)",
    "Anion radius assumed smaller — adding electrons swells the cloud",
    "Group number read from the d-block count (group = outer s/p electrons for main groups)",
    "Memorizing trends without Z_eff — the trend questions in exams always demand the REASON"
  ],
  applications: [
    "Battery design: Li's low IE and small radius power phones and EVs; Na-ion cells chase cheap grid storage",
    "Water treatment: Ca²⁺/Mg²⁺ hardness, Fe/Mn staining — position on the table predicts behaviour",
    "Agriculture: soil chemistry is group chemistry — K⁺ vs Na⁺ uptake, micronutrient metals (Zn, Cu) in Ethiopian highland soils",
    "Public health: Rift Valley fluoride binds Ca — defluoridation columns use bone char's Ca chemistry",
    "Materials: Si (metalloid) chips vs Cu (metal) wires vs Teflon's C–F (high EN) non-stick — one table, three industries"
  ],
  summary: "The periodic table is electron configurations drawn as architecture: groups share outer configurations (same chemistry), periods fill the same shell under rising Z_eff. Trends follow: radius shrinks across/grows down; IE and electronegativity rise across/fall down; metallic character mirrors them. Z_eff = Z − shielding is the engine behind every trend, and successive IEs reveal shell structure. Positions predict reactions — the table is a map, not a list.",
  visuals: [
    { type: "mindMap", config: { center: "Periodic trends", branches: [{ label: "Across ↓", items: ["radius shrinks", "IE rises", "EN rises", "metallic falls"] }, { label: "Down ↑", items: ["radius grows", "IE falls", "EN falls", "metallic rises"] }, { label: "Engine", items: ["Z_eff = Z − S", "shielding", "shell stability"] }] } },
    { type: "barChart", config: { title: "First ionization energies (kJ/mol)", labels: ["Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar"], values: [496, 738, 578, 787, 1012, 1000, 1251, 1521] } },
    { type: "qa", config: { title: "Trend reflexes", pairs: [{ q: "Biggest atom: Li, Na, K?", a: "<b>K</b> — new shells" }, { q: "Highest EN element?", a: "<b>F (4.0)</b>" }, { q: "Na⁺ vs Na radius?", a: "<b>Na⁺ smaller</b> — lost a shell" }] } }
  ],
  questions: [
    { type: "mcq", q: "Across a period, atomic radius:", options: ["increases", "decreases", "stays equal", "doubles"], answer: 1, difficulty: 1, explanation: "Same shell, more protons — pull contracts the cloud" },
    { type: "mcq", q: "The most electronegative element:", options: ["O", "F", "Cl", "Cs"], answer: 1, difficulty: 1, explanation: "F = 4.0, the reference maximum" },
    { type: "mcq", q: "Elements in the same group share:", options: ["atomic mass", "outer electron configuration", "number of shells", "density"], answer: 1, difficulty: 1, explanation: "Same outer config → same chemistry" },
    { type: "mcq", q: "Which has the highest first IE: Li, Be, B, Ne?", options: ["Li", "Be", "B", "Ne"], answer: 3, difficulty: 2, explanation: "Full shell + max Z_eff in the period" },
    { type: "tf", q: "Metallic character increases down a group.", answer: true, difficulty: 1, explanation: "Lower IE, bigger radius — easier electron donation" },
    { type: "tf", q: "A chloride ion is smaller than a chlorine atom.", answer: false, difficulty: 2, explanation: "Added electron increases repulsion: Cl⁻ (181 pm) > Cl (99 pm)" },
    { type: "calc", q: "Z_eff on Na's outer electron (shielding ≈ 10).", answer: "1", difficulty: 2, explanation: "11 − 10 = 1 — the lone 3s electron barely feels the core" },
    { type: "calc", q: "Order smallest→largest radius: Mg²⁺, Na⁺, Ne, F⁻ (isoelectronic, 10 e⁻ each).", answer: "Mg2+ Na+ Ne F-|Mg2+<Na+<Ne<F-", difficulty: 3, explanation: "Same 10 electrons; more protons pull tighter: Mg (12 p) < Na (11) < Ne (10) < F⁻ (9 p)" },
    { type: "short", q: "Trend name: energy required to remove the outermost electron from a gaseous atom.", answer: "ionization energy|first ionization energy", difficulty: 1, explanation: "First ionization energy, IE₁" },
    { type: "concept", q: "Use Z_eff to explain why F is more electronegative than O.", answer: "more protons same shell|higher zeff|stronger pull|9 vs 8", difficulty: 3, explanation: "Both attract into the n = 2 shell, but F's nucleus carries 9 protons vs O's 8 with similar shielding — higher Z_eff pulls bonding electrons harder: EN 4.0 vs 3.4" }
  ]
};
