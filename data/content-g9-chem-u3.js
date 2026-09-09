/* Content: Grade 9 Chemistry — Unit 3: Structure of the Atom (2 topics) */
window.Lessons = window.Lessons || {};

Lessons["g9-chemistry-uc3-t1"] = {
  overview: "Matter's story begins inside the atom: a dense positive nucleus with protons and neutrons, orbited by a whiff of electrons. This lesson traces the models from Dalton's sphere to Bohr's levels and arms you with the arithmetic of atomic number and mass.",
  objectives: [
    "Describe the discovery and properties of protons, neutrons and electrons",
    "Sequence the models: Dalton → Thomson → Rutherford → Bohr",
    "Define atomic number and mass number and use both",
    "Calculate subatomic particle counts for any nuclide",
    "Explain isotopes with carbon/chlorine examples"
  ],
  simple: "Atoms contain three particles: <b>protons</b> (+1, nucleus), <b>neutrons</b> (0, nucleus), <b>electrons</b> (−1, orbiting, ~1/1836 the mass). <b>Atomic number Z = protons</b> (an element's ID — carbon is carbon because Z=6). <b>Mass number A = protons + neutrons</b> (electrons too light to matter). Neutrons = A − Z. A neutral atom has electrons = protons. <b>Isotopes</b>: same Z, different neutron count — ¹²C, ¹³C, ¹⁴C are all carbon; chlorine-35 and 37 average to the decimal 35.5 you see on the table. Models evolved: Dalton's solid sphere → Thomson's plum pudding → Rutherford's nuclear gold-foil surprise → Bohr's electrons at fixed energy levels.",
  detailed: "<p><b>Dalton (1803)</b>: elements are made of indivisible solid spheres; atoms of an element are identical — first useful chemical theory, though 'indivisible' and 'identical' both later cracked. <b>Thomson (1897, cathode rays)</b>: discovered the <b>electron</b> — a negative particle far lighter than any atom — proving atoms divisible; his plum-pudding model spread electrons through a positive paste. <b>Rutherford (1911, gold-foil)</b>: fired alpha particles at thin foil; nearly all passed through, a few deflected hard, one in ~20,000 bounced straight back — so the atom is mostly EMPTY space with a tiny, dense, positive <b>nucleus</b> (planetary model; couldn't explain why orbiting electrons don't spiral in). <b>Bohr (1913)</b>: electrons occupy fixed <b>energy levels</b> (shells) without radiating; jumps between levels explain hydrogen's line spectrum. Modern quantum mechanics refines shells into orbitals — but Dalton→Bohr remains the syllabus ladder.</p><p><b>Particles:</b> proton (+1 charge, 1 amu), neutron (0, ~1 amu) — together <b>nucleons</b> in the nucleus; electron (−1, 1/1836 amu) in the cloud. In a neutral atom: electrons = protons; the charges cancel because they're equal-and-opposite.</p><p><b>Numbers:</b> <b>Atomic number Z</b> = number of protons = the element's fingerprint (change Z and you change the element). <b>Mass number A</b> = protons + neutrons. <b>Neutrons = A − Z</b>. Notation: ³⁵₁₇Cl or chlorine-35. Example: sodium-23 (Z=11): 11p, 12n, 11e. For ions the electron count shifts (lose 1 → 11e, Na⁺; gain → Cl⁻ 18e) — full treatment in the bonding unit.</p><p><b>Isotopes</b>: atoms of the same element (same Z) with different neutron numbers — carbon-12 (6n), 13 (7n), 14 (8n). Chemical behavior is nearly identical (electrons rule chemistry) but masses differ; some isotopes are radioactive (¹⁴C dating, medical tracers). Natural elements are isotope MIXTURES, so relative atomic masses are weighted averages — chlorine's 35.5 = roughly 75% ³⁵Cl + 25% ³⁷Cl. This answers the classic 'why do masses have decimals when atoms are whole?'</p><p>The <b>nuclide symbol</b> ᴀᴢX packs everything: A top-left, Z bottom-left; from those two numbers a student should instantly derive p, n and e counts — drill this arithmetic until it's reflex, since every later unit (moles, nuclear chemistry, bonding electron counts) depends on it.</p>",
  keyTerms: [
    { term: "Proton / neutron / electron", def: "Nucleus +1 / nucleus 0 / orbiting −1" },
    { term: "Atomic number (Z)", def: "Proton count — the element's identity" },
    { term: "Mass number (A)", def: "Protons + neutrons of a specific atom" },
    { term: "Nucleon", def: "A proton or neutron in the nucleus" },
    { term: "Isotope", def: "Same Z, different N variants of an element" },
    { term: "Nucleus", def: "Tiny dense positive core (Rutherford's discovery)" },
    { term: "Energy level", def: "Fixed shell an electron occupies (Bohr)" }
  ],
  formulas: [
    {
      name: "Particle arithmetic",
      formula: "protons = Z; neutrons = A − Z; electrons (neutral) = Z",
      meaning: "The nuclide symbol fully determines composition",
      when: "Any nuclide question, any exam"
    }
  ],
  workedExamples: [
    {
      problem: "Complete for ⁴⁰₁₉K: p, n, e?",
      calculation: "p = Z = 19; n = 40 − 19; e = p (neutral)",
      answer: "19 protons, 21 neutrons, 19 electrons"
    },
    {
      problem: "An atom has 26 protons and 30 neutrons. Give its element and mass-number symbol.",
      calculation: "Z=26 → iron; A = 56",
      answer: "Iron, ⁵⁶Fe"
    },
    {
      problem: "³⁵Cl and ³⁷Cl — state one similarity and one difference in structure.",
      answer: "Same 17p + 17e (identical chemistry); differ in neutrons (18 vs 20) and mass"
    },
    {
      problem: "Why is chlorine's Ar 35.5 rather than 35 or 37?",
      answer: "It's the weighted average of ³⁵Cl (~75%) and ³⁷Cl (~25%) in natural chlorine"
    }
  ],
  commonMistakes: [
    "Using the decimal relative atomic mass as a single atom's mass number — averages ≠ individual atoms",
    "Swapping A and Z positions in symbols",
    "Forgetting electrons equal protons ONLY when neutral",
    "Claiming isotopes have different chemistry (nearly identical — same electrons)",
    "Rutherford credited with discovering the electron (Thomson did; Rutherford found the nucleus)",
    "Thinking Bohr orbits = the final truth (they're the level-9 model; quantum orbitals refine them)"
  ],
  applications: [
    "Radiocarbon dating: ¹⁴C decay dates ancient church art and archaeological finds in Ethiopia",
    "Medical tracers & radiotherapy: isotope chemistry in diagnosis and cancer treatment",
    "Nuclear energy: the Danakil and national interest in nuclear science rests on this physics-chemistry border",
    "Forensic & industry: isotope fingerprints trace gold origins and food fraud (honey adulteration)",
    "Exam bedrock: every mole, bonding and periodicity question assumes instant p/n/e fluency"
  ],
  summary: "Atoms = a proton-neutron nucleus plus an electron cloud, discovered one experiment at a time (Dalton sphere → Thomson electron → Rutherford nucleus → Bohr levels). Z defines the element, A counts nucleons, A−Z gives neutrons, isotopes are same-Z variants, and decimal atomic masses are their weighted averages.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The number that identifies an element is its:", options: ["mass number", "atomic number", "neutron number", "nucleon total"], answer: 1, difficulty: 1, explanation: "Z = proton count = identity." },
    { type: "mcq", q: "Rutherford's gold-foil experiment revealed:", options: ["the electron", "a dense positive nucleus", "isotopes", "energy levels"], answer: 1, difficulty: 2, explanation: "Large deflections = concentrated positive core." },
    { type: "mcq", q: "Neutrons in ²³⁸₉₂U:", options: ["92", "146", "238", "330"], answer: 1, difficulty: 1, explanation: "238 − 92 = 146." },
    { type: "mcq", q: "Isotopes of an element differ in their:", options: ["proton count", "electron count", "neutron count", "atomic number"], answer: 2, difficulty: 1, explanation: "Same Z, different N." },
    { type: "mcq", q: "The lightest particle listed is the:", options: ["proton", "neutron", "electron", "they're equal"], answer: 2, difficulty: 1, explanation: "Electron ≈ 1/1836 of a nucleon." },
    { type: "mcq", q: "Bohr's key addition to Rutherford's model was:", options: ["the neutron", "electrons in fixed energy levels", "the nucleus", "isotopes"], answer: 1, difficulty: 2, explanation: "Quantized shells stopped the collapse problem." },
    { type: "mcq", q: "An atom with Z=11 and A=23 has electrons:", options: ["12", "23", "11", "34"], answer: 2, difficulty: 1, explanation: "Neutral → electrons = protons = Z." },
    { type: "mcq", q: "Chlorine's Ar of 35.5 is explained by:", options: ["half an atom", "isotope mixture averaging", "measurement error", "extra electrons"], answer: 1, difficulty: 3, explanation: "Weighted mean of ³⁵Cl and ³⁷Cl." },
    { type: "mcq", q: "Thomson's cathode-ray work discovered the:", options: ["proton", "neutron", "electron", "nucleus"], answer: 2, difficulty: 2, explanation: "Rays bent to + plate → light negative particles." },
    { type: "mcq", q: "Which is NOT true of ¹²C and ¹⁴C?", options: ["same chemical behavior", "different masses", "same neutron number", "same atomic number"], answer: 2, difficulty: 2, explanation: "6n vs 8n — different neutrons is the whole point." }
  ]
};

Lessons["g9-chemistry-uc3-t2"] = {
  overview: "Electrons don't swarm randomly — they stack into energy levels, and the outermost ones (valence electrons) decide nearly all of an element's personality: how it bonds, what it forms, how reactive it is.",
  objectives: [
    "State shells, their capacities (2n²) and the 2-8-8 filling for the first 20 elements",
    "Write electron configurations and draw Bohr diagrams for elements 1–20",
    "Link valence electrons to position and reactivity",
    "Predict why noble gases are inert and Group 1 wildly reactive",
    "Connect configuration to the ion an atom prefers to form"
  ],
  simple: "Shells fill from the inside out like bus seats: <b>K holds 2, L holds 8, M holds 8</b> (first 20 elements). Sodium (11e) = <b>2,8,1</b>. The outermost number — <b>valence electrons</b> — is the element's calling card: it equals the <b>group number</b> for main groups (chlorine in Group 17? 7 valence). Atoms want a full outer shell (the <b>octet</b>, or duet for helium): 1–3 valence → lose them (metals → Na⁺, Mg²⁺); 5–7 → gain (non-metals → Cl⁻); 4 → share; 8 → do nothing at all (noble gases — born finished).",
  detailed: "<p><b>Energy levels:</b> Bohr's shells are fixed energy rings; an electron absorbs energy to jump up and emits light jumping down (line spectra — each element's barcode). Capacity 2n² (n=1→2, n=2→8, n=3→18) but for the first 20 elements the <b>octet preference</b> fills 3's outer slot with 8 before any goes to 4 — hence the 2-8-8 pattern.</p><p><b>Configurations</b> list occupancy: H 1, He 2, Li 2,1 — beryllium 2,2, boron 2,3, carbon 2,4, nitrogen 2,5, oxygen 2,6, fluorine 2,7, neon 2,8; sodium 2,8,1 through argon 2,8,8, then potassium 2,8,8,1 and calcium 2,8,8,2 (note: the 19th electron opens a NEW shell rather than packing M to 18 — the octet preference made visible). Bohr diagrams draw circles around the nucleus with dots on the rings — build them for the first twenty until they're reflex.</p><p><b>Valence electrons</b> live in the outermost shell and take part in bonding; core electrons are spectators. Two golden links: (1) valence count = group number (Groups 1–7 main groups; 0/8 for noble gases); (2) period number = number of shells (sodium's 3 shells → period 3). Chemistry in the next unit is literally these outer electrons moving or being shared.</p><p><b>Octet drive:</b> atoms gain/lose/share to reach 8 valence (full shell, like the noble gases; duet for He). Group 1 metals with ONE spare electron shed it violently eagerly (Li, Na, K under water — the reactivity-increases-down-group demo); Group 17 halogens with ONE missing electron snatch it just as hard (fluorine the most reactive non-metal). Noble gases already 8 → unreactive; that's WHY they're the zero group. Carbon (2,4) neither dumps nor grabs four, so it shares — organic chemistry's foundation.</p><p><b>Ion prediction</b> follows from the same arithmetic: Na loses 1 → 2,8 (neon's configuration!) becomes Na⁺; Mg loses 2 → Mg²⁺; Al → Al³⁺; O gains 2 → 2,8 O²⁻; Cl gains 1 → Cl⁻. The resulting ion's configuration matching a noble gas is the octet's book-keeping — and the ionic charges of the next unit are pre-written right here.</p><p>Practice protocol: given any element 1–20 — state configuration, draw the diagram, name the valence count, group, period, metal/non-metal behavior, and preferred ion. That one drill fuses this lesson with the periodic table unit and halves your bonding workload.</p>",
  keyTerms: [
    { term: "Electron configuration", def: "Shell-by-shell listing of electron occupancy (2,8,1)" },
    { term: "Valence electron", def: "Outermost-shell electron; bonding actor" },
    { term: "Octet rule", def: "Atoms tend toward 8 valence electrons (duet for He)" },
    { term: "Core electron", def: "Inner-shell electron not involved in bonding" },
    { term: "2n²", def: "Maximum electrons in shell n" },
    { term: "Line spectrum", def: "Element-specific light from electron jumps — proof of shells" }
  ],
  formulas: [
    {
      name: "Shell capacity",
      formula: "max e⁻ in shell n = 2n²",
      meaning: "K(2), L(8), M(18) — though first-20 fill 2-8-8",
      when: "Drawing configurations up to calcium",
      example: "n=2 → 2×4 = 8, so L holds 8"
    }
  ],
  workedExamples: [
    {
      problem: "Write the configuration of chlorine (Z=17) and predict its ion.",
      calculation: "fill: 2 + 8 + 7; one short of octet → gain 1",
      answer: "2,8,7 → gains 1e⁻ → Cl⁻ (2,8,8 = argon's pattern)"
    },
    {
      problem: "Element X: 2,8,2. Identify group, period and charge of its ion.",
      answer: "Group 2, period 3, loses 2 → X²⁺ (magnesium)"
    },
    {
      problem: "Why is potassium (2,8,8,1) more reactive than lithium (2,1)?",
      answer: "Its single valence electron sits in shell 4, farther from the nucleus and more shielded — easier to lose"
    },
    {
      problem: "An ion has 2,8 and 10 electrons but 11 protons. Name it.",
      calculation: "11p = sodium; 10e = one lost",
      answer: "Na⁺"
    }
  ],
  commonMistakes: [
    "Filling M to 18 before starting N (first 20: 2,8,8,1 — octet first)",
    "Confusing period (shells) with group (valence)",
    "Drawing Bohr dots paired before every ring has singles (Hund-ish intuition — for Grade 9 just spread evenly first)",
    "Calling helium's duet a violation (2 full = stable for shell 1)",
    "Thinking atoms 'want' consciously — it's energy minimization, not desire",
    "Forgetting configuration changes when ions form — mass number never does"
  ],
  applications: [
    "Sodium's 2,8,1 vs neon's 2,8: explains table salt's harmlessness vs pure sodium's violence in water",
    "Batteries: lithium's 2,1 — the lightest 'electron donor' — powers phones",
    "Welding & lighting: argon's full shell = inert shielding gas; neon signs glow from electron jumps",
    "Water treatment: chlorine's one-missing-electron hunger is what kills pathogens",
    "Exam strategy: every bonding, periodicity and mole question silently checks this fluency"
  ],
  summary: "Electrons stack in shells (2-8-8 for the first 20) with capacity 2n²; configuration predicts everything: valence = group, shells = period, octet drive decides gain/lose/share, and noble-gas stability is simply a finished shell. Master configurations and bonding becomes book-keeping.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Electron configuration of oxygen (Z=8):", options: ["2,6", "8", "2,8,2", "2,4,2"], answer: 0, difficulty: 1, explanation: "K fills to 2, remaining 6 to L." },
    { type: "mcq", q: "The number of valence electrons equals the:", options: ["period", "group number (main groups)", "mass number", "shell capacity"], answer: 1, difficulty: 2, explanation: "Group 1 → 1, Group 7 → 7, noble → 8 (or 2)." },
    { type: "mcq", q: "Maximum electrons in the third shell (2n²):", options: ["8", "18", "32", "2"], answer: 1, difficulty: 2, explanation: "2×3² = 18 (though first-20 fill 8)." },
    { type: "mcq", q: "An atom 2,8,1 will most likely form:", options: ["a 1− ion", "a 1+ ion", "a 7+ ion", "no ion"], answer: 1, difficulty: 1, explanation: "Lose one → full shell underneath." },
    { type: "mcq", q: "Which is chemically inert?", options: ["fluorine 2,7", "sodium 2,8,1", "argon 2,8,8", "carbon 2,4"], answer: 2, difficulty: 1, explanation: "Completed octet — nothing to gain or shed." },
    { type: "mcq", q: "Sulfur (Z=16) configuration:", options: ["2,8,6", "2,6,8", "2,8,8", "16"], answer: 0, difficulty: 2, explanation: "K2 L8 M6." },
    { type: "mcq", q: "Period number tells you the number of:", options: ["valence electrons", "occupied shells", "protons", "neutrons"], answer: 1, difficulty: 2, explanation: "Sodium: 3 shells → period 3." },
    { type: "mcq", q: "Chlorine forms Cl⁻ because:", options: ["it gains one electron to complete its octet", "it loses seven", "it shares one", "it gains one proton"], answer: 0, difficulty: 1, explanation: "2,8,7 → 2,8,8." },
    { type: "mcq", q: "Neon's stability compared to sodium's reactivity is due to:", options: ["more protons", "complete outer shell vs one spare electron", "larger mass", "being a gas"], answer: 1, difficulty: 2, explanation: "Electronic structure explains it, not state or size." },
    { type: "mcq", q: "Potassium's 19th electron enters the fourth shell rather than filling the third to 18 because:", options: ["the third shell is full", "octet stability fills outer shells to 8 first", "it is heavier", "protons block it"], answer: 1, difficulty: 3, explanation: "The 2-8-8-1 order — a full-outer-octet is energetically preferred." }
  ]
};
