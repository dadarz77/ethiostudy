/* Content: Grade 12 Chemistry — Unit 2 (part B): topics 4-5 */
window.Lessons = window.Lessons || {};

Lessons["g12-chemistry-uc2-t4"] = {
  overview: "Electrolysis is not a lab curiosity — it is how humanity makes aluminium, chlorine, caustic soda, sodium and high-purity copper, and how it plates, anodises and electrowins. This topic walks the four industrial cell families and asks the honest questions alongside them: energy cost, emissions, and why Ethiopia skips smelting and imports the metal.",
  objectives: [
    "Explain aluminium extraction (Hall-Héroult): cryolite, carbon anodes, why",
    "Describe the chlor-alkali membrane cell: products and uses",
    "Summarise electrorefining and electrowinning of copper",
    "Contrast plating/anodising surface treatments",
    "Evaluate energy and environmental costs of electrolytic industry"
  ],
  simple: "<b>Four factories, one law.</b> (1) Aluminium: alumina dissolved in molten cryolite at 950 °C, electrolysed with carbon anodes that burn away as CO₂ — electricity made solid. (2) Chlor-alkali: brine through a membrane cell → Cl₂ + NaOH + H₂, the trio behind plastic, soap and water treatment. (3) Copper refining: impure slab as anode, pure sheet as cathode — the impurities fall as slime worth more than the copper. (4) Plating and anodising: thin engineered skins. All of them: Faraday's law at megampere scale.",
  detailed: "<p><b>Aluminium (Hall-Héroult, 1886).</b> Alumina (Al₂O₃, from bauxite via the alkali Bayer process) melts only at 2050 °C — economically impossible. Dissolved in molten cryolite (Na₃AlF₆) it electrolyses at ~950 °C: cathode reaction Al³⁺ + 3e⁻ → Al(l), which sinks to the cell floor and is tapped; at carbon anodes 2O²⁻ + C → CO₂ + 4e⁻ (the anodes are consumed and replaced — the CO₂ is chemistry, not just power plants). Overall: 2Al₂O₃ + 3C → 4Al + 3CO₂. It needs ~13-15 kWh per kg: smelters historically sat beside waterfalls and dams for a reason. Ethiopia has bauxite deposits and hydropower but no smelter — importing finished aluminium is currently cheaper than burning GERD megawatt-hours on metal.</p><p><b>Chlor-alkali membrane cell.</b> Saturated brine enters the anode compartment; NaOH solution the cathode one; a cation-exchange membrane lets only Na⁺ cross. Anode: 2Cl⁻ → Cl₂ + 2e⁻; cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻. Products: chlorine (PVC, solvents, water disinfection), hydrogen (ammonia feedstock, hydrogenation of oils — margarine), sodium hydroxide (soap, paper, drain cleaner). Membrane cells replaced mercury and diaphragm cells because they give purer alkali with no mercury losses — a green-chemistry upgrade of an industry.</p><p><b>Copper electrorefining.</b> Blister copper (98-99%, from smelting) as the ANODE, thin pure sheet as cathode, CuSO₄/H₂SO₄ electrolyte. Cu dissolves from anode and plates pure (99.99%) on cathode; precious metals (Ag, Au, Pt) don't oxidise and fall as 'anode slime' — a refinery's side business can out-earn its copper. Electrowinning is the twin: copper leached from low-grade ore (acid heap leach) plated straight from solution — profitable where smelters aren't.</p><p><b>Surfaces: plating and anodising.</b> Electroplating: object as cathode in a solution of its coating metal's ions (Cr for bumpers, Ni-Cr, Au contacts, Zn on steel) — corrosion barrier and cosmetics; the bath chemistry (complexing agents, brighteners) controls grain size. Anodising: aluminium as ANODE in acid, growing a thick, hard, dye-absorbing Al₂O₃ film — kitchenware and aircraft skins. Galvanizing (zinc dipping) is the non-electrolytic cousin.</p><p><b>The cost column.</b> Electrolytic industry is a grid load: chlor-alkali ~3 MWh/t NaOH, aluminium ~14. Honest analysis = energy source (renewable vs coal), mercury/PAH history, perfluorocarbon emissions (CF₄/C₂F₆ from cells — potent GHGs), and logistics (why smelters live near power, refineries near mines, plating shops near markets).</p>",
  keyTerms: [
    { term: "Hall-Héroult", def: "alumina-in-cryolite electrolysis for Al" },
    { term: "Cryolite", def: "Na₃AlF₆ solvent: melts alumina at 950 °C" },
    { term: "Bayer process", def: "bauxite → pure alumina with NaOH" },
    { term: "Membrane cell", def: "chlor-alkali: Na⁺-only polymer divider" },
    { term: "Electrorefining", def: "impure anode → pure cathode metal" },
    { term: "Electrowinning", def: "plating metal from leach solutions" },
    { term: "Anode slime", def: "precious-metal fall in Cu refining" },
    { term: "Anodising", def: "growing thick Al₂O₃ at the anode" }
  ],
  formulas: [
    { name: "Aluminium overall", formula: "2Al₂O₃ + 3C → 4Al + 3CO₂", meaning: "carbon anodes consumed by the oxide's oxygen", vars: [{ name: "950 °C", meaning: "cryolite melt" }], when: "smelter chemistry" },
    { name: "Chlor-alkali overall", formula: "2NaCl + 2H₂O → Cl₂ + H₂ + 2NaOH", meaning: "brine + electricity → three saleable products", vars: [{ name: "membrane", meaning: "keeps Cl₂ from NaOH" }], when: "the industry equation" },
    { name: "Refining pair", formula: "anode: Cu → Cu²⁺+2e⁻; cathode: Cu²⁺+2e⁻ → Cu", meaning: "pure transfer, no net chemistry", vars: [{ name: "slime", meaning: "Au/Ag/Se left behind" }], when: "copper purity" }
  ],
  workedExamples: [
    { problem: "Why are Hall-Héroult anodes replaced regularly?", calculation: "The carbon anode is a reactant: O²⁻ ions burn it to CO₂.", answer: "Consumed at ~0.4-0.5 t per tonne Al: they are part of the equation, not furniture." },
    { problem: "A cell deposits 1.00 t Al daily. Average current? (M 27, z 3)", calculation: "10⁶/27 = 37 037 mol; Q = 3×37 037×96 500 = 1.07×10¹⁰ C; I = Q/86 400 s.", answer: "≈ 124 kA — one potline line; real smelters run hundreds of cells in series." },
    { problem: "Chlor-alkali: why can Cl₂ never touch the NaOH side?", calculation: "Cl₂ + 2NaOH → NaCl + NaClO + H₂O.", answer: "They'd react to bleach, losing both products — hence the membrane's job." },
    { problem: "Why does electrowinning suit low-grade ores while smelting doesn't?", calculation: "Leaching dissolves a few % of the copper chemically; smelting pays fuel to melt barren rock.", answer: "Solution concentration, not ore grade, sets the cost: the heap becomes the mine." }
  ],
  commonMistakes: [
    "Saying alumina itself melts at 950 °C (that's the cryolite solution)",
    "Blaming 'power plant CO₂' for the smelter's anode CO₂ (it's stoichiometric)",
    "Confusing electrorefining (impure metal anode) with electrowinning (inert anode, leach liquor)",
    "Forgetting chlorine is caustic-destroying in membrane cells (the separation reason)",
    "Naming products without quantities: chlor-alkali sells THREE outputs and balances on all"
  ],
  applications: [
    "Aluminium window frames and the GERD power-vs-import debate",
    "PVC pipe, bleach and water treatment from chlor-alkali outputs",
    "Ethiopian plating workshops: chrome and nickel finishing",
    "Copper wiring: conductivity demands refinery purity"
  ],
  summary: "Electrolysis at scale: Al from cryolite melts (14 MWh/t), Cl₂+NaOH from membrane cells, Cu via refining/winning, finishes via plating/anodising — Faraday's law plus honest energy bills.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Cryolite in aluminium cells serves to:", options: ["supply aluminium", "dissolve alumina for low-temperature electrolysis", "act as anode", "absorb CO₂"], answer: 1, difficulty: 1, explanation: "It drops the operating melt from 2050 to ~950 °C." },
    { type: "mcq", q: "In Hall-Héroult cells the anodes are consumed because:", options: ["they melt", "carbon reacts with oxide ions to CO₂", "current eats metal", "cryolite attacks them"], answer: 1, difficulty: 2, explanation: "The overall equation includes C: 2Al₂O₃ + 3C → 4Al + 3CO₂." },
    { type: "mcq", q: "Chlor-alkali cathode product is:", options: ["chlorine", "sodium metal", "hydrogen + NaOH", "oxygen"], answer: 2, difficulty: 2, explanation: "Water discharges: H₂ gas and hydroxide, Na⁺ crossing the membrane." },
    { type: "mcq", q: "The membrane in modern cells passes:", options: ["Cl⁻", "Na⁺ only", "water only", "electrons"], answer: 1, difficulty: 2, explanation: "Cation-exchange: sodium shuttles; products stay separated." },
    { type: "mcq", q: "In copper electrorefining, the impure copper is the:", options: ["cathode", "electrolyte", "anode", "salt bridge"], answer: 2, difficulty: 2, explanation: "It dissolves; pure copper plates on the cathode sheet." },
    { type: "mcq", q: "Anode slime is valuable because it contains:", options: ["cryolite", "gold and silver", "aluminium", "sulfur"], answer: 1, difficulty: 3, explanation: "Noble metals don't dissolve — they fall and are harvested." },
    { type: "mcq", q: "Anodising makes aluminium corrode-resistant by:", options: ["painting it", "growing a thick oxide film", "plating chromium", "chilling it"], answer: 1, difficulty: 3, explanation: "The object as anode builds dense Al₂O₃ — the barrier is its own oxide." },
    { type: "mcq", q: "Smelters historically locate near:", options: ["bauxite mines only", "cheap electricity", "markets", "ports only"], answer: 1, difficulty: 3, explanation: "~14 MWh/t: power dominates cost; alumina ships cheaply by comparison." }
  ]
};

Lessons["g12-chemistry-uc2-t5"] = {
  overview: "A voltaic cell does the opposite: it lets spontaneous redox push electrons through an external circuit and calls the bill current. Standard electrode potentials rank every couple's electron hunger; cell voltage is a subtraction; and from that subtraction come batteries, corrosion predictions and the thermodynamic arrow of whole reactions.",
  objectives: [
    "Describe a galvanic cell: electrodes, electrolytes, salt bridge",
    "Write half-cells and cell notation (ANODE left convention)",
    "Use the standard electrode potential table to find E°cell",
    "Predict redox spontaneity and displacement from E° values",
    "Relate E°cell to oxidising/reducing strength; name real cells"
  ],
  simple: "<b>Spontaneity with a wire in it.</b> Put zinc in copper sulfate and heat is all you see. Separate the half-reactions, connect them by a wire, and the same chemistry pushes electrons: Zn dissolves (anode, −), copper plates (cathode, +), the salt bridge completes the circuit with ions. Voltage = E°(cathode) − E°(anode) = +0.34 − (−0.76) = 1.10 V. Every battery is this arrangement wearing a case.",
  detailed: "<p><b>Anatomy.</b> Two half-cells, each a metal in its ion solution (or Pt dipping into an ion pair like Fe²⁺/Fe³⁺). The ANODE is where oxidation happens (in a cell delivering power it is the negative terminal — mnemonic: both start with vowels; RED CAT again). Electrons leave via the wire; the salt bridge (KNO₃ agar) drifts anions toward the anode beaker and cations toward the cathode to stop charge build-up killing the reaction. Cell notation: anode | anode ion || cathode ion | cathode — left is always where electrons are born.</p><p><b>Standard electrode potentials.</b> E° = voltage of a reduction half-cell vs the standard hydrogen electrode (2H⁺ + 2e⁻ ⇌ H₂, defined 0.00 V, at 1 M/1 bar/25 °C). The table is an electron-hunger ranking: F₂ (+2.87) ravenous, Li⁺ (−3.04) starved of electrons — Li metal therefore the strongest common reducer. E° values are INTENSIVE: doubling coefficients doesn't double voltage. Memorise the anchors: Zn −0.76, Fe −0.44, Cu +0.34, Ag +0.80, Cl₂ +1.36.</p><p><b>E°cell and direction.</b> E°cell = E°(cathode reduction) − E°(anode reduction) using table values as written. Positive = spontaneous as written: Zn/Cu gives +1.10 V. The further up the table the oxidant, the further down the reductant, the bigger the push. Predict displacement: any metal sits below H₂(0.00 V)... no, cleaner rule: metals with E° more negative than the other's couple reduce it — Zn plates Cu from solution (−0.76 vs +0.34); Cu cannot plate Zn; Cu DOES dissolve in Ag⁺ (+0.34 vs +0.80: E°cell = +0.46). Acid: metals with negative E° liberate H₂ from H⁺; copper can't (that's why HNO₃ attacks copper by a different, nitrate-driven route).</p><p><b>From voltage to chemistry's verdict.</b> E°cell > 0 ⇌ ΔG < 0 (the two halves of ΔG = −nFE°): a table subtraction is a thermodynamic judgement — this is why electrochemistry is the curriculum's free-energy lab. Bigger E°cell = more work per coulomb; batteries stack cells because one couple rarely gives more than ~3 V before the solvent breaks down.</p><p><b>Real cells.</b> Daniell (Zn/Cu, 1.1 V, the school standard). Dry Leclanché (Zn anode, MnO₂/carbon paste, NH₄Cl paste, ~1.5 V). Alkaline (same chemistry in KOH, longer life, 1.5 V). Lead-acid (Pb/PbO₂ in H₂SO₄, 2.05 V per cell, six in series = 12 V car battery, rechargeable: drive the current backwards and it regenerates — a voltaic cell and electrolytic cell in one jacket). Li-ion (LiCoO₂ vs graphite, ~3.7 V: light because Li is light and voltage is high). Fuel cells (H₂/O₂ continuous, ~1.23 V practical 0.7, water is the only exhaust). Corrosion: the rust microcell from the last-but-two topic — same E° arithmetic, minus the case.</p>",
  keyTerms: [
    { term: "SHE", def: "standard hydrogen electrode: zero of the scale" },
    { term: "E°", def: "standard reduction potential (1 M, 1 bar, 25 °C)" },
    { term: "E°cell", def: "cathode − anode (table values as reductions)" },
    { term: "Salt bridge", def: "ion highway closing the circuit" },
    { term: "Cell notation", def: "anode | ions || ions | cathode" },
    { term: "Rechargeable", def: "secondary cell: reverse the current" },
    { term: "Intensive", def: "voltage ignores coefficient doubling" }
  ],
  formulas: [
    { name: "Cell voltage", formula: "E°cell = E°cathode − E°anode", meaning: "both as table reductions", vars: [{ name: ">0", meaning: "spontaneous" }], when: "any couple pair" },
    { name: "Free-energy link", formula: "ΔG° = −nFE°cell", meaning: "volts to joules per mole", vars: [{ name: "n", meaning: "mol e⁻ transferred" }], when: "thermodynamic verdict" },
    { name: "Daniell example", formula: "Zn + Cu²⁺ → Zn²⁺ + Cu (1.10 V)", meaning: "the standard teaching cell", vars: [{ name: "n=2", meaning: "e⁻ per Cu" }], when: "everything else" }
  ],
  workedExamples: [
    { problem: "Find E°cell for Ag⁺/Ag (+0.80) vs Cu²⁺/Cu (+0.34).", calculation: "Higher wins reduction: cathode Ag. 0.80 − 0.34.", answer: "+0.46 V: copper dissolves, silver plates — 2Ag⁺ + Cu → 2Ag + Cu²⁺." },
    { problem: "Will zinc liberate H₂ from acid? E°(Zn²⁺/Zn) = −0.76.", calculation: "E°cell = 0.00 − (−0.76).", answer: "+0.76 V: yes, spontaneously — copper (0.00−0.34 = −0.34) would not." },
    { problem: "MnO₂ + 4H⁺ + 2Cl⁻ → Mn²⁺ + Cl₂ + 2H₂O: feasible? E° MnO₂/Mn²⁺ +1.23, Cl₂/Cl⁻ +1.36.", calculation: "E°cell = 1.23 − 1.36.", answer: "−0.13 V: not standard — that's why lab chlorine needs heat and concentrated acid to tip it." },
    { problem: "A 12 V lead-acid battery: how many cells, and what happens to H₂SO₄ as it drains?", calculation: "Each Pb/PbO₂ couple gives 2.05 V ≈ 6 cells; discharge consumes sulfate into PbSO₄.", answer: "Acid weakens as it dies — that's how hydrometer tests read state of charge." }
  ],
  commonMistakes: [
    "Flipping signs then doubling-flipping: subtract table reductions, don't reverse-and-add with sign errors",
    "Multiplying an E° by the stoichiometric coefficient (potentials are intensive)",
    "Putting cathode first in cell notation",
    "Calling the cell's anode positive (that's electrolytic; galvanic anode is −)",
    "Reading the table top-down without noting H₂'s 0.00 anchor for acid-displacement questions"
  ],
  applications: [
    "Every phone/laptop/car battery is a voltaic design choice",
    "Sacrificial anodes: Mg/Zn blocks bolted to ship hulls and water heaters",
    "Belt-rust and rail-corrosion prediction from E° tables",
    "Fuel cells: the hydrogen economy's electron source"
  ],
  summary: "Split a spontaneous redox, wire the halves, and electrons become current: E°cell = cathode − anode > 0 means 'goes'; batteries are that arithmetic in cases.",
  visuals: [],
  questions: [
    { type: "mcq", q: "In a galvanic cell, oxidation occurs at the:", options: ["cathode, positive", "anode, negative", "bridge", "SHE"], answer: 1, difficulty: 1, explanation: "Electrons are born at the anode — and it's the negative terminal here." },
    { type: "mcq", q: "The salt bridge works by:", options: ["passing electrons", "migrating ions to balance charge", "stopping the reaction", "carrying H⁺ only"], answer: 1, difficulty: 1, explanation: "Wires carry e⁻; bridges carry ions, completing the circuit." },
    { type: "mcq", q: "E°cell for Zn (−0.76) and Cu (+0.34) is:", options: ["−1.10 V", "+0.42 V", "+1.10 V", "0.76 V"], answer: 2, difficulty: 2, explanation: "0.34 − (−0.76) = +1.10." },
    { type: "mcq", q: "Doubling the Zn/Cu cell reaction's coefficients makes E°:", options: ["double", "halve", "unchanged", "zero"], answer: 2, difficulty: 2, explanation: "Volts are per coulomb: intensive." },
    { type: "mcq", q: "Which is the strongest reducing agent listed?", options: ["Cu", "Pt", "Zn", "Au"], answer: 2, difficulty: 2, explanation: "Most negative E° (−0.76 V) = best electron giver: Zn." },
    { type: "mcq", q: "A rechargeable battery during charging acts as:", options: ["another galvanic cell", "an electrolytic cell", "a fuel cell", "a capacitor"], answer: 1, difficulty: 3, explanation: "External current forces the reverse (non-spontaneous) reaction." },
    { type: "mcq", q: "Lead-acid discharge: the electrolyte:", options: ["strengthens", "weakens as PbSO₄ forms", "unchanged", "freezes"], answer: 1, difficulty: 3, explanation: "Sulfate leaves solution onto both plates: hydrometer drops." },
    { type: "mcq", q: "Mg blocks protecting ship hulls are:", options: ["cathodic: Mg plates on", "sacrificial anodes: Mg oxidises instead of Fe", "insulation", "ballast"], answer: 1, difficulty: 3, explanation: "Mg's −2.37 V makes it the cell's anode; steel becomes protected cathode." }
  ]
};
