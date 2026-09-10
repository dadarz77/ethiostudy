/* Content: Grade 12 Chemistry — Unit 2 (part A): topics 1-3 */
window.Lessons = window.Lessons || {};

Lessons["g12-chemistry-uc2-t1"] = {
  overview: "Redox is electron bookkeeping: one species loses electrons (oxidation), another gains them (reduction), always in equal numbers. Oxidation states make the transfer visible, half-equations split it into teachable halves, and this framework powers everything from rusting to the batteries and electrolysis cells in the rest of this unit.",
  objectives: [
    "Assign oxidation states by the rules and spot which atom changes",
    "Define oxidation/reduction by electrons, oxidation state, and O/H transfer",
    "Split a reaction into balanced half-equations and recombine",
    "Balance a full redox equation in acid (and recognise the alkaline variant)",
    "Identify oxidising and reducing agents in real reactions"
  ],
  simple: "<b>OIL RIG.</b> Oxidation Is Loss, Reduction Is Gain (of electrons). The definitions grow from 'gains oxygen' to 'loses electrons' to the working tool: oxidation state goes UP = oxidised, DOWN = reduced. Zinc + copper sulfate: Zn 0→+2 (oxidised, the REDUCING agent), Cu +2→0 (reduced, the OXIDISING agent). Nobody's electrons get lost — the books must balance, and half-equations are the ledger.",
  detailed: "<p><b>Oxidation-state rules.</b> Element: 0. Monatomic ion: = charge. F is −1 always; H is +1 (metal hydrides: −1); O is −2 (peroxides −1, OF₂ +2). Neutral compound sums to 0, ion sums to its charge. Worked: in Cr₂O₇²⁻, oxygen gives −14 total, so 2 Cr = +12, Cr = +6. In Fe₃O₄ the average +8/3 flags a mixed valence (FeO·Fe₂O₃). Fractions are a clue, not an error — they say 'mixed'.</p><p><b>The three lenses.</b> Oxygen/hydrogen transfer (intro level: +O or −H = oxidation), electron transfer (the real event), and oxidation-number change (the measurable proxy). They agree everywhere; use the one the question asks about. Disproportionation — chlorine in water making Cl⁻ and ClO⁻ — is one element oxidising AND reducing itself: a hallmark of mid-oxidation states.</p><p><b>Half-equations.</b> Balance atoms other than O/H, then O with H₂O, then H with H⁺, then charge with electrons. Zn → Zn²⁺ + 2e⁻; Cu²⁺ + 2e⁻ → Cu. For dichromate: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O. Multiply each half so electrons match, add, cancel — the electrons vanishing is the proof of balance. Alkaline medium: neutralise H⁺ with OH⁻ on both sides, water sweeps away.</p><p><b>Agents, inverted.</b> The OXIDISING agent gets reduced (it takes electrons: KMnO₄, Cl₂, O₂, H₂O₂, HNO₃); the REDUCING agent gets oxidised (it gives: Zn, Fe²⁺, SO₂, H₂S, C, CO, H₂). Activity series = reducing-power ranking: Li strongest down the metal list; anything above H₂ displaces hydrogen from acid. The iron rust chain (Fe → Fe²⁺ + 2e⁻; O₂ + 2H₂O + 4e⁻ → 4OH⁻) is a working voltaic cell on your gate — salt water just adds the electrolyte.</p><p><b>Titration payoff.</b> Redox titrations quantify: manganate(VII) against iron(II) or ethanedioate (self-indicating pink, ratio MnO₄⁻:Fe²⁺ = 1:5), iodometric for copper and bleach strength. Unit 1's pH curves meet Unit 2's electron curves — same discipline, different currency.</p>",
  keyTerms: [
    { term: "Oxidation state", def: "bookkeeping charge from the rules" },
    { term: "OIL RIG", def: "Oxidation Is Loss, Reduction Is Gain" },
    { term: "Half-equation", def: "electron-typed oxidation or reduction alone" },
    { term: "Oxidising agent", def: "accepts electrons; itself reduced" },
    { term: "Reducing agent", def: "donates electrons; itself oxidised" },
    { term: "Disproportionation", def: "same species oxidised and reduced" },
    { term: "Activity series", def: "metal reducing-power ranking" }
  ],
  formulas: [
    { name: "Zn/Cu cell reaction", formula: "Zn + Cu²⁺ → Zn²⁺ + Cu", meaning: "2e⁻ walk from zinc to copper", vars: [{ name: "E°", meaning: "+1.10 V driving it" }], when: "voltaic introduction" },
    { name: "Dichromate half", formula: "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O", meaning: "the acid-medium balancing recipe in one line", vars: [{ name: "+6→+3", meaning: "Cr reduced 3 each" }], when: "oxidation of Fe²⁺, alcohols" },
    { name: "Permanganate (acid)", formula: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", meaning: "purple→colourless titrant", vars: [{ name: "1:5", meaning: "vs Fe²⁺ ratio" }], when: "redox titrations" }
  ],
  workedExamples: [
    { problem: "Assign oxidation states: MnO₄⁻, H₂O₂, NH₄⁺, Na₂S₂O₃.", calculation: "Sum-to-charge rule each.", answer: "Mn +7; O in peroxide −1 (H₂O₂ is the rare exception); N −3 in NH₄⁺; S average +2 in thiosulfate (the two S sit at −1 and +5: mixed)." },
    { problem: "Balance Fe²⁺ + Cr₂O₇²⁻ → Fe³⁺ + Cr³⁺ (acid).", calculation: "Fe²⁺ → Fe³⁺ + e⁻ ×6; add the 6-electron dichromate half.", answer: "6Fe²⁺ + Cr₂O₇²⁻ + 14H⁺ → 6Fe³⁺ + 2Cr³⁺ + 7H₂O; Cr₂O₇²⁻ is the oxidising agent." },
    { problem: "Is Cl₂ + 2KBr → 2KCl + Br₂ redox? Who wins?", calculation: "Cl 0→−1 reduced; Br −1→0 oxidised.", answer: "Yes — chlorine is above bromine in the halogen oxidising order: it steals bromide's electrons." },
    { problem: "Rust: why does salt speed it up?", calculation: "Corrosion is a micro-cell; electrons travel metal, ions complete the circuit through the electrolyte film.", answer: "Salt water is a far better electrolyte than pure: the redox circuit runs faster." }
  ],
  commonMistakes: [
    "Saying 'oxidation is gaining oxygen' and then failing peroxide/peroxide-free cases — use oxidation numbers",
    "Putting electrons on the wrong side (oxidation: electrons are PRODUCTS)",
    "Forgetting to multiply halves before adding — leftover electrons = broken equation",
    "Naming the agent by what it DOES not what it BECOMES (oxidising agent = reduced)",
    "Treating fractional oxidation states as an error instead of mixed-valence evidence"
  ],
  applications: [
    "Batteries and phone chargers (this unit's Voltaic half)",
    "Bleaching and water treatment: Cl₂, OCl⁻, H₂O₂ oxidations",
    "Iron/steel metallurgy: CO reducing iron oxide in the blast furnace",
    "Blood-alcohol and vitamin-C assays: dichromate/iodometric redox titrations"
  ],
  summary: "Track the numbers: up = oxidised, down = reduced; half-equations balance atoms then charge; agents are named for what they give the other side.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Oxidation is best defined as:", options: ["gain of electrons", "loss of electrons", "gain of protons", "loss of oxygen"], answer: 1, difficulty: 1, explanation: "OIL RIG: loss = oxidation." },
    { type: "mcq", q: "The oxidation state of sulfur in H₂SO₄ is:", options: ["+4", "+6", "+2", "−2"], answer: 1, difficulty: 1, explanation: "2(+1) + S + 4(−2) = 0 ⇒ S = +6." },
    { type: "mcq", q: "In Zn + Cu²⁺ → Zn²⁺ + Cu, the reducing agent is:", options: ["Cu²⁺", "Zn", "Cu", "Zn²⁺"], answer: 1, difficulty: 2, explanation: "Zn gives the electrons — it reduces copper and is itself oxidised." },
    { type: "mcq", q: "The half-equation Cl₂ + 2e⁻ → 2Cl⁻ represents:", options: ["oxidation", "reduction", "hydrolysis", "disproportionation"], answer: 1, difficulty: 2, explanation: "Electrons gained (left side): reduction." },
    { type: "mcq", q: "Which reaction is disproportionation?", options: ["Cl₂ + H₂O → HCl + HOCl", "2H₂ + O₂ → 2H₂O", "Zn + 2HCl → ZnCl₂ + H₂", "Fe + CuSO₄ → FeSO₄ + Cu"], answer: 0, difficulty: 2, explanation: "Chlorine (0) goes to −1 AND +1 in the same reaction." },
    { type: "mcq", q: "How many electrons does MnO₄⁻ → Mn²⁺ consume?", options: ["3", "5", "7", "8"], answer: 1, difficulty: 3, explanation: "+7 to +2: five per manganese." },
    { type: "mcq", q: "The coefficient of Fe²⁺ when balanced against dichromate is:", options: ["2", "3", "6", "14"], answer: 2, difficulty: 3, explanation: "Cr₂O₇²⁻ takes 6e⁻; each Fe gives 1 ⇒ 6 iron(II)." },
    { type: "mcq", q: "A metal below hydrogen in the activity series will:", options: ["displace H₂ from acid", "not dissolve in non-oxidising acid", "reduce all metal ions", "never oxidise"], answer: 1, difficulty: 3, explanation: "Cu, Ag, Au: no H⁺ reduction route — they need oxidising acids (HNO₃)." }
  ]
};

Lessons["g12-chemistry-uc2-t2"] = {
  overview: "Electrolysis forces non-spontaneous chemistry with an external power supply: ions migrate, discharge at electrodes, and the products depend not just on the formula but on which ions win the competition at each electrode — the discharge series, concentration, and electrode material all vote. Molten vs aqueous is the first fork in every prediction.",
  objectives: [
    "Label electrolytic cell parts: electrolyte, anode, cathode, power supply",
    "Predict molten-salt electrolysis products",
    "Apply the aqueous competition rules at each electrode",
    "Explain the role of concentration and electrode material",
    "Write electrode half-equations with states"
  ],
  simple: "<b>Make it happen backwards.</b> A battery runs chemistry that wants to run; electrolysis uses electricity to run chemistry that doesn't. Cathode (−) attracts cations, anode (+) attracts anions — and each side holds a contest. Molten NaCl: only Na⁺ and Cl⁻ exist, so sodium metal and chlorine gas, unambiguous. Aqueous NaCl: water also competes — and water wins the cathode (hydrogen gas, not sodium), while concentrated brine still gives chlorine at the anode. That's the chlor-alkali industry in two sentences.",
  detailed: "<p><b>Setup and sign convention.</b> DC supply pumps electrons INTO the cathode (reduction happens there — 'RED CAT') and PULLS them from the anode (oxidation — 'AN OX'). In electrolytic cells cathode is negative, anode positive — opposite signs to a voltaic cell, same redox assignment (reduction is always at the cathode: memorise by reaction, not sign). Ions migrate through the electrolyte; the wires carry electrons, never ions.</p><p><b>Molten salts.</b> Only the salt's ions: PbBr₂(l): Pb²⁺ + 2e⁻ → Pb at cathode (grey metal bead), 2Br⁻ → Br₂ + 2e⁻ at anode (red-brown fumes). NaCl(l): Na metal + Cl₂. Down-group, easier reduction: in mixed melts, less reactive metal ions discharge first — that's how aluminium is extracted from purified molten alumina (next-but-two topic).</p><p><b>Aqueous competition — cathode.</b> Cations vs water: 2H₂O + 2e⁻ → H₂ + 2OH⁻. Rule of thumb from the reactivity/series order: metals BELOW hydrogen (Cu²⁺, Ag⁺) plate out as metal; metals ABOVE it (Na⁺, K⁺, Ca²⁺, Mg²⁺, Al³⁺, and even Zn²⁺/Fe²⁺ in practice at moderate concentration) leave hydrogen gas. Feasibility by E°: the more positive reduction potential wins — water's −0.83 V beats Na⁺'s −2.71 V by nearly 2 volts.</p><p><b>Aqueous competition — anode.</b> Anions vs water: 2H₂O → O₂ + 4H⁺ + 4e⁻ (E° +1.23 V). Simple halides at high concentration give the halogen anyway (concentrated Cl⁻ → Cl₂ despite O₂ being 'easier' on paper — overpotential and kinetics make bubbles of oxygen sluggish on many surfaces); dilute halides, and all oxoanions (SO₄²⁻, NO₃⁻, CO₃²⁻) and OH⁻ itself: oxygen from water/hydroxide. So: dilute H₂SO₄ electrolysed = splitting water (H₂ at cathode, O₂ at anode, acid concentrates); concentrated CuCl₂ = copper metal + chlorine gas.</p><p><b>Active electrodes change the story.</b> If the anode is the platable metal (copper refining), the electrode itself dissolves (Cu → Cu²⁺ + 2e⁻) instead of evolving gas — that's electrorefining and electroplating, and why inert graphite/platinum is specified in prediction questions. Concentration flips chlorine/oxygen; electrode material flips everything at the anode.</p><p><b>Observation vocabulary.</b> 'Effervescence/bubbles', 'grey deposit', 'brown fumes', 'starch-iodide paper bleaches for Cl₂', 'glowing splint relights for O₂', 'pop for H₂' — marks live in these phrases as much as in the equations.</p>",
  keyTerms: [
    { term: "Electrolysis", def: "forced redox by external DC" },
    { term: "Electrolyte", def: "ion-conducting melt or solution" },
    { term: "Discharge", def: "ion → neutral atom/molecule at an electrode" },
    { term: "Inert electrode", def: "graphite/Pt: conducts, doesn't react" },
    { term: "Overpotential", def: "extra voltage sluggish reactions (O₂) demand" },
    { term: "RED CAT / AN OX", def: "reduction@cathode, oxidation@anode" },
    { term: "Chlor-alkali", def: "brine electrolysis: Cl₂ + NaOH (+H₂)" }
  ],
  formulas: [
    { name: "Cathode (aqueous, active metal case)", formula: "2H₂O + 2e⁻ → H₂ + 2OH⁻", meaning: "water out-competes Na⁺/K⁺/Ca²⁺", vars: [{ name: "−0.83 V", meaning: "vs Na⁺ −2.71 V" }], when: "every aqueous alkali-salt cathode" },
    { name: "Anode (water case)", formula: "2H₂O → O₂ + 4H⁺ + 4e⁻", meaning: "or 4OH⁻ → O₂ + 2H₂O + 4e⁻ in base", vars: [{ name: "+1.23 V", meaning: "beatable by conc. halides" }], when: "oxoanion/dilute solutions" },
    { name: "Halide discharge", formula: "2X⁻ → X₂ + 2e⁻", meaning: "concentrated Br⁻/I⁻/Cl⁻ win at the anode", vars: [{ name: "I⁻", meaning: "easiest: browns first" }], when: "brine, concentrated halides" }
  ],
  workedExamples: [
    { problem: "Predict products: electrolysis of aqueous copper(II) chloride with graphite.", calculation: "Cathode: Cu²⁺ below H ⇒ plates. Anode: concentrated Cl⁻ ⇒ Cl₂.", answer: "Brown copper deposit; pale-green Cl₂ gas bleaching damp starch-iodide paper." },
    { problem: "Predict products: dilute sulfuric acid, inert electrodes.", calculation: "Cathode: H⁺ reduced to H₂; anode: water to O₂; SO₄²⁻ never discharges.", answer: "H₂ and O₂ in 2:1 volumes — electrolysis of water; acid just carries current." },
    { problem: "Aqueous NaCl (brine) at the cathode — why NaOH forms around it?", calculation: "2H₂O + 2e⁻ → H₂ + 2OH⁻; Na⁺ stays as the counter-ion.", answer: "Hydrogen evolves and the brine becomes alkali liquor: chlor-alkali's 'alkali' half." },
    { problem: "Molten vs aqueous CaCl₂ electrolysis — products?", calculation: "Melt: Ca²⁺ and Cl⁻ only. Aqueous: water beats Ca²⁺ at the cathode.", answer: "Calcium metal + chlorine vs hydrogen + chlorine (plus Ca(OH)₂ suspension)." }
  ],
  commonMistakes: [
    "Predicting sodium metal from aqueous NaCl (forgetting water's competition)",
    "Swapping electrode signs between voltaic and electrolytic cells (reaction names, not signs)",
    "Writing ion migration as electron flow through solution",
    "Ignoring concentration at the anode (dilute chloride gives O₂, not Cl₂)",
    "Using an active copper anode where the question expects inert graphite"
  ],
  applications: [
    "Chlor-alkali plants: chlorine + caustic soda from brine (water treatment, soap)",
    "Aluminium extraction (Hall-Héroult, next topic)",
    "Electroplating: chromium bumpers, gold contacts",
    "Copper purification to 99.99% for wiring"
  ],
  summary: "Electrolysis = forced redox with contests: molten salts discharge their own ions; aqueous adds water at both electrodes — reactivity decides the cathode, concentration and overpotential the anode.",
  visuals: [],
  questions: [
    { type: "mcq", q: "In an electrolytic cell, reduction occurs at the:", options: ["anode", "cathode", "salt bridge", "power supply"], answer: 1, difficulty: 1, explanation: "RED CAT — always, in any cell type." },
    { type: "mcq", q: "Electrolysing molten lead(II) bromide gives at the cathode:", options: ["bromine", "lead metal", "hydrogen", "Pb⁴⁺"], answer: 1, difficulty: 1, explanation: "Pb²⁺ + 2e⁻ → Pb: grey metal bead." },
    { type: "mcq", q: "Aqueous NaCl electrolysis at the cathode produces:", options: ["sodium", "chlorine", "hydrogen", "NaOH solid"], answer: 2, difficulty: 2, explanation: "Water beats Na⁺: H₂ gas, OH⁻ left behind." },
    { type: "mcq", q: "Concentrated CuBr₂ solution electrolysed with graphite: anode product?", options: ["O₂", "Cu", "Br₂", "SO₂"], answer: 2, difficulty: 2, explanation: "Concentrated bromide discharges: red-brown Br₂." },
    { type: "mcq", q: "Why is graphite used in chlor-alkali cells?", options: ["it's cheap and inert", "it catalyses O₂", "it supplies carbon", "it dissolves"], answer: 0, difficulty: 2, explanation: "Inert: conducts without reacting into the products." },
    { type: "mcq", q: "Dilute H₂SO₄ electrolysis overall equals:", options: ["plating sulfur", "splitting water", "making SO₂", "neutralisation"], answer: 1, difficulty: 3, explanation: "H₂ + ½O₂ from water; acid is just the electrolyte — 2:1 gas volumes." },
    { type: "mcq", q: "The 'extra' voltage oxygen evolution needs beyond its E° is:", options: ["activation bump", "overpotential", "junction potential", "EMF"], answer: 1, difficulty: 3, explanation: "Sluggish bubble-forming kinetics: why conc. Cl⁻ wins against the numbers." },
    { type: "mcq", q: "Silver-plating a spoon: the spoon must be the:", options: ["anode, in AgNO₃", "cathode, in Ag⁺ solution", "electrolyte", "salt bridge"], answer: 1, difficulty: 3, explanation: "Reduction (Ag⁺ + e⁻ → Ag) happens at the cathode — the object plates there." }
  ]
};

Lessons["g12-chemistry-uc2-t3"] = {
  overview: "Faraday's laws make electrolysis quantitative: the mass of product at an electrode is directly proportional to the charge passed, and one mole of electrons (a Faraday, 96 500 C) discharges one mole of unit-charge species. Combined with the electronics of current and time, this turns any electrolysis cell into a stopwatch-and-balance experiment.",
  objectives: [
    "Relate charge, current and time: Q = It",
    "State and apply Faraday's two laws",
    "Use the Faraday constant 96 500 C mol⁻¹",
    "Compute deposited mass from current, time and ion charge",
    "Solve the inverse: required time or current for a target mass"
  ],
  simple: "<b>Count electrons like money.</b> Q = I × t coulombs; a mole of electrons carries 96 500 C. Each ion costs its charge in electrons: Cu²⁺ needs 2 mol e⁻ per mole of copper, Ag⁺ only 1, Al³⁺ three. So: moles of electrons = Q/96 500, then divide by the ion's charge for moles of product, then times molar mass for grams. One formula chain, every exam question.",
  detailed: "<p><b>The law itself.</b> Faraday I: mass discharged ∝ total charge (double the coulombs, double the copper). Faraday II: the same charge deposits proportional equivalents: moles = Q/(zF). Same electrons deposit 1 mol Ag, ½ mol Cu, ⅓ mol Al — always charge-numbered. Historical phrasing ('equivalent weight') just says the same: molar mass ÷ ion charge is the electrochemical equivalent times F.</p><p><b>Master chain.</b> Q = I·t → n(e⁻) = Q/F → n(product) = Q/(z·F) → m = M·Q/(z·F). Memorise ONE working line: m = (M × I × t)/(z × 96 500). Everything else is algebra from it — including inverses (time needed to plate a given mass, current needed for a rate, and 'how many cells in series deposit the same mass in each' — same Q threads them all).</p><p><b>Series and parallel.</b> Cells in SERIES share the same current and same time: same charge through each, so each deposits mass ∝ M/z — a silver voltameter and a copper one in series plate Ag and Cu in their equivalent ratio (107.9 : 31.75). Parallel splits current by resistance — exams prefer series: the 'same Q' shortcut is the whole trick.</p><p><b>Worked with real units.</b> A 0.500 A current for 1930 s: Q = 965 C = 0.0100 mol e⁻ → 0.005 mol Cu → 0.318 g plated. Teaching examples deliberately pick t so Q lands on multiples of 965 — spot the design and the arithmetic disappears.</p><p><b>Yield and efficiency.</b> Real cells: current efficiency < 100% (side reactions, shorting, sludge). Industrial plating quotes 'amp-hours per kilogram'; anodising builds oxide thickness per coulomb/cm² — the same law wearing a factory uniform. In electrorefining, the mass loss at the impure anode vs gain at cathode (minus slime) IS the accounting lesson.</p>",
  keyTerms: [
    { term: "Charge Q", def: "coulombs = ampere × second" },
    { term: "Faraday F", def: "96 500 C per mole of electrons" },
    { term: "z", def: "electrons per product particle (ion charge)" },
    { term: "Electrochemical equivalent", def: "g per coulomb = M/(zF)" },
    { term: "Equivalent mass", def: "molar mass ÷ charge" },
    { term: "Current efficiency", def: "actual/theoretical deposit %" },
    { term: "Voltameter", def: "measurement cell run in series" }
  ],
  formulas: [
    { name: "Master equation", formula: "m = M·I·t/(z·F)", meaning: "mass from current-time and ion charge", vars: [{ name: "F", meaning: "96 500 C/mol" }, { name: "z", meaning: "1 for Ag⁺, 2 Cu²⁺, 3 Al³⁺" }], when: "all deposit problems" },
    { name: "Moles route", formula: "n = Q/(zF)", meaning: "same law in mole form", vars: [{ name: "Q", meaning: "It" }], when: "gas volumes, cell counting" },
    { name: "Series ratio", formula: "m₁/m₂ = (M₁/z₁)/(M₂/z₂)", meaning: "same charge ⇒ equivalents", vars: [{ name: "—", meaning: "Faraday II in ratios" }], when: "two-cell problems" }
  ],
  workedExamples: [
    { problem: "Current of 2.00 A flows through CuSO₄ solution for 30 min. Copper deposited?", calculation: "Q = 2×1800 = 3600 C; n(e⁻)=3600/96500=0.0373; n(Cu)=0.01865; m=×63.5.", answer: "≈ 1.18 g." },
    { problem: "How long to plate 5.40 g Ag from Ag⁺ with 3.00 A?", calculation: "n(Ag)=0.05 mol; Q = zF·n = 1×96 500×0.05 = 4825 C; t = Q/I.", answer: "1608 s ≈ 26 min 48 s." },
    { problem: "Aluminium cell at 15 000 A runs 24 h. Daily Al output (100%)?", calculation: "Q = 1.30×10⁹ C; n = Q/(3F) = 4480 mol; ×27 g.", answer: "≈ 121 kg — matches real potline day-rates, sanity check." },
    { problem: "Series Ag and Cu cells: 1.08 g silver deposited. Copper?", calculation: "Same Q: n(e⁻)=0.01 → n(Cu)=0.005.", answer: "0.318 g — ratio 107.9:31.75, exactly the equivalents." }
  ],
  commonMistakes: [
    "Using z = neutral-atom valence instead of the discharged ion's charge",
    "Minutes instead of seconds in t",
    "F on the wrong side: forgetting Q already counts electrons' charge",
    "For Al³⁺ using M/1 (mass 27, z must be 3 — otherwise 3× overestimate)",
    "Mixing cells in parallel into the 'same Q' series logic"
  ],
  applications: [
    "Plating thickness control: coulombs/cm² sets the spec",
    "Silver voltameters calibrating electroplating currents",
    "Smelter power bills: aluminium is electricity solidified",
    "Electrowinning copper/zinc from leach solutions (hydrometallurgy)"
  ],
  summary: "Q = It; n = Q/(zF); m = M·Q/(zF). Same charge in series cells deposits equivalent masses — one line solves every Faraday problem.",
  visuals: [],
  questions: [
    { type: "mcq", q: "One faraday is the charge of:", options: ["1 mol protons", "1 mol electrons", "1 C", "96 500 mol e⁻"], answer: 1, difficulty: 1, explanation: "≈ 96 500 C = N_A × 1.602×10⁻¹⁹ C." },
    { type: "mcq", q: "A 5 A current for 2 min passes charge:", options: ["10 C", "600 C", "300 C", "250 C"], answer: 1, difficulty: 1, explanation: "Q = It = 5 × 120 s = 600 C." },
    { type: "mcq", q: "Moles of Cu from 2F through Cu²⁺ solution:", options: ["2", "1", "0.5", "4"], answer: 1, difficulty: 2, explanation: "z = 2: n = 2F/2F = 1 mol." },
    { type: "mcq", q: "Mass ratio Ag:Cu from equal charge in series cells:", options: ["108:64", "108:32", "2:1", "64:108"], answer: 1, difficulty: 2, explanation: "Equivalents: 107.9/1 vs 63.5/2 ⇒ 108:31.75." },
    { type: "mcq", q: "To deposit 0.27 g Al (z 3, M 27) needs charge:", options: ["2 900 C", "96 500 C", "290 C", "289 500 C"], answer: 0, difficulty: 3, explanation: "n = 0.01 mol → Q = 3×0.01×F ≈ 2 900 C." },
    { type: "mcq", q: "Doubling current and halving time changes deposit:", options: ["double", "halve", "unchanged", "four-fold"], answer: 2, difficulty: 2, explanation: "Q = It unchanged — product tracks charge only." },
    { type: "mcq", q: "Current efficiency 90% means actual deposit is:", options: ["90% more", "90% of theoretical", "10% of theoretical", "unrelated"], answer: 1, difficulty: 3, explanation: "10% of electrons take side paths (H₂, impurities)." },
    { type: "mcq", q: "H₂ and Cl₂ volumes from the same charge are:", options: ["1:1", "2:1", "1:2", "equal masses"], answer: 0, difficulty: 3, explanation: "Both need 2e⁻ per molecule: equal moles, equal volumes (same T,P)." }
  ]
};
