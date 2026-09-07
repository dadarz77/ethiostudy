/* ============================================================
   Content: Grade 10 Chemistry — Unit 6: Hydrocarbons
   2 topics. Rich format + 3 visuals per lesson.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- uc6-t1: Alkanes, Alkenes and Alkynes --- */
Lessons["g10-chemistry-uc6-t1"] = {
  overview: "Carbon + hydrogen only = hydrocarbons, and the three families — alkanes (single bonds), alkenes (C=C), alkynes (C≡C) — are the fuels, plastics feedstocks and chemical building blocks of modern life. This lesson builds naming (IUPAC), structure (general formulas), and the reactions that tell the families apart.",
  objectives: [
    "Write general formulas: alkanes CₙH₂ₙ₊₂, alkenes CₙH₂ₙ, alkynes CₙH₂ₙ₋₂",
    "Name and draw straight-chain and branched isomers up to C₆",
    "Explain saturated vs unsaturated and test with bromine water",
    "Describe combustion, substitution (alkanes) and addition (alkenes) reactions",
    "Connect structure to physical trends (boiling point vs chain length)"
  ],
  simple: "Alkanes are carbon chains where every bond is SINGLE — 'saturated' with hydrogen (methane CH₄, propane C₃H₈). Their names end in -ane, and the formula rule is CₙH₂ₙ₊₂. Alkenes carry at least one C=C double bond ('unsaturated' — fewer H per carbon, CₙH₂ₙ, ethene C₂H₄); alkynes have a C≡C triple bond (CₙH₂ₙ₋₂, ethyne C₂H₂ — welding gas). The double bond makes alkenes reactive: they ADD things across it (bromine, hydrogen, water) — and that's the test: orange bromine water goes colourless with an alkene, stays orange with an alkane. Burn them all for fuel; crack the long ones for the small molecules plastics are made from.",
  detailed: `<p><b>Homologous series:</b> families sharing a functional group and general formula, each member differing by CH₂. Properties change smoothly: boiling point rises with chain length (more surface → stronger London dispersion forces); smaller members are gases (C₁–C₄), then liquids (C₅–C₁₇), then waxy solids.</p>
<p><b>Alkanes (paraffins):</b> sp³ carbons, tetrahedral 109.5°, σ-bonds only → relatively unreactive (hence 'paraffin' = little affinity). Reactions: (1) COMBUSTION: CH₄ + 2O₂ → CO₂ + 2H₂O (+ heat); limited air → CO or C soot. (2) SUBSTITUTION with halogens under UV: CH₄ + Cl₂ →(UV) CH₃Cl + HCl — a hydrogen is REPLACED, chain reaction continuing to CH₂Cl₂, CHCl₃, CCl₄. Naming: meth-, eth-, prop-, but-, pent-, hex-, hept-, oct-, non-, dec-.</p>
<p><b>Isomerism:</b> same molecular formula, different structure. C₄H₁₀: butane and 2-methylpropane; C₅H₁₂: three isomers. Branched isomers boil LOWER (compact → less surface contact). Isomer count explodes with carbon number (C₁₀H₂₂: 75).</p>
<p><b>Alkenes (olefins):</b> one C=C (sp², planar 120°) = σ + π bond; the π bond is exposed and electron-rich → the reaction site. ADDITION reactions: + H₂ (Ni catalyst → alkane: hydrogenation, margarine chemistry); + Br₂ (rapid, decolourises bromine water — the saturation TEST); + H₂O (steam, H₃PO₄ catalyst → alcohol: ethanol from ethene); + HCl → chloroalkane. Multiple addition → POLYMERISATION: n CH₂=CH₂ → (–CH₂–CH₂–)ₙ polyethene — the addition polymer behind plastic bags. Naming: -ene suffix with position: but-1-ene vs but-2-ene.</p>
<p><b>Alkynes:</b> C≡C (sp, linear 180°), σ + 2π. Ethyne (acetylene) from calcium carbide: CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂ — burns in O₂ at ~3200 °C (oxy-acetylene welding). Same addition chemistry, twice over (can add two equivalents of Br₂/HX).</p>
<p><b>Cracking:</b> long alkane → shorter alkane + alkene, heat (~700–900 °C) over silica/alumina catalyst: C₁₀H₂₂ → C₈H₁₈ + C₂H₄. Why: market wants gasoline and alkene feedstock more than heavy wax; cracking supplies both.</p>`,
  keyTerms: [
    { term: "Hydrocarbon", def: "Compound of carbon and hydrogen only." },
    { term: "Saturated", def: "Only C–C single bonds — maximum hydrogen (alkanes)." },
    { term: "Unsaturated", def: "Contains C=C or C≡C (alkenes/alkynes)." },
    { term: "Homologous series", def: "Family with same general formula, members differ by CH₂." },
    { term: "Substitution", def: "Alkane reaction: atom (usually H) replaced by another (halogen, UV)." },
    { term: "Addition", def: "Alkene reaction: atoms add across the double bond." },
    { term: "Polymerisation", def: "Many alkene monomers join into a long-chain polymer." },
    { term: "Isomers", def: "Same molecular formula, different structural arrangement." },
    { term: "Cracking", def: "Breaking long hydrocarbons into shorter ones + alkenes." },
    { term: "Bromine-water test", def: "Orange → colourless = unsaturated; stays orange = saturated." }
  ],
  formulas: [
    {
      name: "General formulas",
      formula: "alkanes CₙH₂ₙ₊₂ | alkenes CₙH₂ₙ | alkynes CₙH₂ₙ₋₂",
      meaning: "Each double bond 'costs' 2 H; a triple bond costs 4.",
      vars: [{ name: "n", meaning: "carbon count", unit: "—" }],
      units: "—",
      when: "Identifying a family from a formula.",
      example: "C₆H₁₂ → fits CₙH₂ₙ → alkene (or cycloalkane)."
    },
    {
      name: "Complete combustion",
      formula: "CₓHᵧ + (x + y/4)O₂ → xCO₂ + (y/2)H₂O",
      meaning: "Enough air → only CO₂ + water.",
      vars: [],
      units: "—",
      when: "Any hydrocarbon burn.",
      example: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O."
    },
    {
      name: "Addition of bromine",
      formula: "CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br",
      meaning: "π bond opens; one Br to each carbon (1,2-dibromoethane).",
      vars: [],
      units: "—",
      when: "Unsaturation test; mechanism example.",
      example: "Orange Br₂ disappears — the classic alkene signature."
    }
  ],
  workedExamples: [
    {
      problem: "Draw and name all isomers of C₄H₁₀ and C₅H₁₂.",
      given: "Two molecular formulas.",
      formula: "Vary the carbon skeleton (straight → branched).",
      substitution: "C₄: butane (straight) and 2-methylpropane (branched). C₅: pentane, 2-methylbutane, 2,2-dimethylpropane.",
      calculation: "Check each: CₙH₂ₙ₊₂ satisfied (10 and 12 H).",
      answer: "2 isomers at C₄, 3 at C₅ — branching lowers boiling point (2-methylpropane −12 °C vs butane −0.5 °C)."
    },
    {
      problem: "How would you distinguish propane from propene using one chemical test? Give expected results.",
      given: "Two bottles, one alkane one alkene.",
      formula: "Bromine-water test for unsaturation.",
      substitution: "Shake each with orange bromine water (no UV light).",
      calculation: "Propene adds Br₂ across C=C → colourless 1,2-dibromopropane. Propane has nothing to add to.",
      answer: "Decolourised = propene; orange stays = propane. (In sunlight both would eventually react — alkanes substitute under UV, so keep it dark.)"
    },
    {
      problem: "Balance the complete combustion of butane, and compute the CO₂ volume (STP) from 58 g butane.",
      given: "C₄H₁₀, M = 58.",
      formula: "2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O; n = m/M; V = 22.4n.",
      substitution: "n(butane) = 1 mol → ratio C₄H₁₀:CO₂ = 2:8 = 1:4 → 4 mol CO₂.",
      calculation: "V = 4 × 22.4 = 89.6 L.",
      answer: "89.6 dm³ CO₂ per 58 g burned — the reason gas heaters need ventilation."
    },
    {
      problem: "Write equations for: (a) hydrogenation of ethene; (b) hydration of ethene; (c) polymerisation of propene.",
      given: "Three industrial reactions.",
      formula: "Addition across C=C; n monomers → polymer.",
      substitution: "(a) CH₂=CH₂ + H₂ →(Ni, 150 °C) CH₃CH₃. (b) CH₂=CH₂ + H₂O →(H₃PO₄, 300 °C, 60 atm) CH₃CH₂OH. (c) n CH₂=CHCH₃ → (–CH₂–CH(CH₃)–)ₙ polypropene.",
      calculation: "All three: π bond opens, σ bonds form.",
      answer: "Ethane fuel additive, industrial ethanol, and polypropylene (crates, ropes, medical devices)."
    },
    {
      problem: "Crack decane (C₁₀H₂₂) to give octane and one alkene. Write and balance; state why refineries crack.",
      given: "One cracking target.",
      formula: "C₁₀H₂₂ → C₈H₁₈ + CₙHₘ (conserve atoms).",
      substitution: "Remaining 2 C and 4 H → C₂H₄ (ethene).",
      calculation: "C₁₀H₂₂ →(700 °C, Al₂O₃) C₈H₁₈ + C₂H₄.",
      answer: "Refineries crack heavy wax-like fractions into gasoline-range alkanes PLUS alkene feedstock for plastics — demand-driven chemistry."
    }
  ],
  commonMistakes: [
    "Applying the wrong general formula: CₙH₂ₙ is ALKENE, not alkane (classic exam trap).",
    "Naming CH₃–CH=CH₂ 'propyl-ene' — correct IUPAC: propene (position 1 implied); for C₄+ give the number: but-1-ene/but-2-ene.",
    "Drawing 5 bonds on one carbon — carbon is ALWAYS tetravalent in these families.",
    "Saying bromine water decolourises alkanes — only under UV (substitution), not in the dark test.",
    "Confusing substitution (alkanes: swap an H) with addition (alkenes: open the double bond, nothing lost).",
    "Forgetting cracking produces an ALKENE as well as the shorter alkane (atoms must balance: C₁₀H₂₂ → C₈H₁₈ + C₂H₄, not C₈H₁₈ alone).",
    "Thinking isomers have different formulas — same formula, different STRUCTURE (that's the definition).",
    "Calling all plastics 'polyethylene' — ethene gives polyethene; propene gives polypropene; naming follows the monomer."
  ],
  applications: [
    "Fuels: methane (natural gas), LPG propane/butane (Ethiopian household cooking), petrol (C₅–C₁₀ alkanes), diesel (C₁₂–C₁₆).",
    "Petrochemical feedstocks: ethene → polyethene bags/bottles; propene → polypropylene crates; ethyne → welding.",
    "Margarine: hydrogenation of unsaturated vegetable oils (alkene chemistry on your breakfast table).",
    "Industrial ethanol: hydration of ethene (vs fermentation — both routes taught in G11).",
    "PTFE (Teflon), PVC, polystyrene: addition polymers from substituted alkenes.",
    "Oxy-acetylene torches: ethyne + O₂, ~3200 °C flame for cutting and welding metal."
  ],
  summary: "Three homologous series: alkanes CₙH₂ₙ₊₂ (saturated, substitution + combustion), alkenes CₙH₂ₙ (C=C, addition + polymerisation + bromine-water test), alkynes CₙH₂ₙ₋₂ (C≡C, e.g. welding ethyne). Isomers = same formula different skeleton; branching lowers bp. Cracking converts heavy fractions into petrol + alkene feedstock. Boiling point rises with chain length (dispersion forces).",
  visuals: [
    { type: "comparison", config: { title: "Alkane vs Alkene vs Alkyne", left: { name: "Alkane CₙH₂ₙ₊₂", items: ["All single bonds", "Saturated", "Substitution (UV)", "Bromine water stays orange"] }, right: { name: "Alkene CₙH₂ₙ", items: ["One C=C double bond", "Unsaturated", "Addition reactions", "Bromine water → colourless", "Polymerises"] } } },
    { type: "flowChart", config: { steps: ["Crude oil heated ~400 °C", "Vapours enter fractionating column", "Column coours upward", "Small/light molecules: top (refinery gas, petrol)", "Medium: diesel/kerosene", "Heavy: lubricating oil, bitumen", "Residue sent to CRACKING"], title: "Fractional Distillation of Crude Oil" } },
    { type: "qa", config: { title: "Structure Questions — tap to reveal", pairs: [{ q: "Why does pentane boil higher than butane?", a: "Longer chain → more surface contact → stronger London dispersion forces → more energy to separate molecules." }, { q: "What makes 2-methylpropane different from butane?", a: "Same formula C₄H₁₀, different skeleton (branched vs straight) — structural isomers; the branched one boils lower." }, { q: "Why is ethene so much more reactive than ethane?", a: "The exposed π bond of C=C is electron-rich and easy to attack — addition reactions open it; ethane's σ bonds have nothing to offer." }] } }
  ],
  questions: [
    { type: "mcq", q: "The general formula of alkenes is:", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], answer: 1, difficulty: 1, explanation: "One double bond removes 2 H from the alkane formula." },
    { type: "calc", q: "How many hydrogens in the alkane with 8 carbons (octane, CₙH₂ₙ₊₂)?", answer: "18", difficulty: 1, explanation: "2×8+2 = 18.", tolerance: 0.1 },
    { type: "mcq", q: "Bromine water shaken with an unknown hydrocarbon turns colourless. The hydrocarbon is:", options: ["An alkane", "An alkene", "A cycloalkane", "Ethanol"], answer: 1, difficulty: 2, explanation: "Addition across C=C consumes Br₂ — the unsaturation test." },
    { type: "short", q: "Name the reaction type: CH₄ + Cl₂ →(UV) CH₃Cl + HCl.", answer: "substitution", difficulty: 2, explanation: "Chlorine substitutes a hydrogen; UV light drives the radical chain." },
    { type: "calc", q: "Balance C₃H₈ + _O₂ → 3CO₂ + 4H₂O. Coefficient of O₂?", answer: "5", difficulty: 2, explanation: "O right: 6+4 = 10 → 5 O₂.", tolerance: 0.1 },
    { type: "mcq", q: "How many structural isomers does C₅H₁₂ have?", options: ["2", "3", "4", "5"], answer: 1, difficulty: 3, explanation: "Pentane, 2-methylbutane, 2,2-dimethylpropane." },
    { type: "concept", q: "Why is cracking important to a refinery?", answer: "heavy fractions to petrol|makes alkenes too|demand for short chains", difficulty: 2, explanation: "Crude yields too much heavy wax vs petrol demand; cracking converts heavy → light alkane (fuel) + alkene (plastics feedstock)." },
    { type: "tf", q: "Ethyne (acetylene) is used in oxy-acetylene welding because its flame reaches very high temperature.", answer: true, difficulty: 1, explanation: "C₂H₂ + O₂ burns at ~3200 °C — hot enough to cut and weld steel." },
    { type: "ordering", q: "Pick the correct polymerisation equation for ethene:", options: ["n CH₂=CH₂ → (–CH₂–CH₂–)ₙ", "CH₂=CH₂ + H₂ → CH₃CH₃", "2 CH₄ → C₂H₆ + H₂", "C₂H₄ + Br₂ → C₂H₄Br₂"], answer: [0], difficulty: 2, explanation: "Addition polymerisation: double bonds open and link into the polyethene chain." },
    { type: "short", q: "The test that distinguishes saturated from unsaturated hydrocarbons uses ____ water.", answer: "bromine", difficulty: 1, explanation: "Bromine water: orange → colourless means unsaturated." }
  ]
};

/* --- uc6-t2: Aromatic Hydrocarbons and Natural Sources --- */
Lessons["g10-chemistry-uc6-t2"] = {
  overview: "Benzene C₆H₆ — six carbons in a ring with delocalised electrons — launched a whole chemistry: aromatics. This lesson covers benzene's unusual stability and substitution-loving behaviour, where hydrocarbons come from in nature (petroleum, natural gas, coal, and Ethiopia's own Ogaden basin), and the products society pulls out of them.",
  objectives: [
    "Describe benzene's structure: ring, delocalised π electrons, Kekulé vs modern view",
    "Explain why benzene undergoes substitution rather than addition",
    "Name common aromatic compounds and their uses (toluene, phenol, aniline, naphthalene)",
    "Outline petroleum composition, refining and the main fractions",
    "Connect natural sources (petroleum, natural gas, coal) to everyday products"
  ],
  simple: "Imagine six carbons holding hands in a ring, each with one hydrogen — and the leftover electrons NOT sitting in fixed double bonds but smeared evenly above and below the ring like two donuts of charge. That's benzene, C₆H₆: the 'aromatic' family (named because the first ones discovered smelled nice). That delocalisation makes benzene unusually stable — it REFUSES addition reactions that would break the ring's electron system, preferring substitution (swap an H, keep the ring). Where do hydrocarbons come from? Ancient plankton and plants, buried and cooked: petroleum (a mix of alkanes + aromatics, refined into fractions), natural gas (methane), coal (carbon-rich, source of coke + coal tar aromatics). Ethiopia has gas in the Calub/Hilala (Ogaden) basin and oil shows in the south-west — energy politics written in rock.",
  detailed: `<p><b>Benzene structure:</b> C₆H₆ — planar hexagonal ring, all C–C bonds identical (0.139 nm, between single 0.154 and double 0.134), all angles 120°. Kekulé drew alternating single/double bonds; the modern view: each carbon contributes one p-electron to a DELOCALISED π system spread over all six carbons. Evidence for delocalisation: bond lengths equal; hydrogenation heat only −208 kJ/mol vs expected −360 for 'cyclohexatriene' (152 kJ/mol extra stability = delocalisation energy); no reaction with cold bromine water despite 'looking' unsaturated.</p>
<p><b>Aromatic reactions — substitution, not addition:</b> addition would destroy the stable delocalised system, so benzene prefers: (1) HALOGENATION (with catalyst, not light): C₆H₆ + Br₂ →(FeBr₃) C₆H₅Br + HBr. (2) NITRATION: C₆H₆ + HNO₃ →(conc H₂SO₄, 50 °C) C₆H₅NO₂ + H₂O → reduced to aniline C₆H₅NH₂ (dyes, drugs). (3) SULFONATION, (4) FRIEDEL–CRAFTS alkylation (attach alkyl groups → toluene, ethylbenzene → styrene → polystyrene). The ring survives every swap.</p>
<p><b>Aromatic family & uses:</b> toluene (methylbenzene — solvent, TNT precursor), phenol C₆H₅OH (antiseptics, Bakelite, medicines), aniline C₆H₅NH₂ (dyes — the mauveine story, paracetamol route), naphthalene C₁₀H₈ (two fused rings — mothballs), benzyl/benzoates (preservatives). Aromatic compounds dominate fragrances and pharmaceuticals — 'aromatic' name earns its keep.</p>
<p><b>Petroleum (crude oil):</b> fossil fuel from marine plankton compressed over 10⁷–10⁸ years under anaerobic heat/pressure; composition varies by field: mostly alkanes C₁–C₄₀ plus cycloalkanes and aromatics. Refining = fractional distillation (by boiling range): refinery gas (LPG) → petrol → naphtha → kerosene/jet → diesel → fuel oil/lubricants → bitumen residue; cracking (see previous topic) rebalances the mix. Quality: octane number for petrol (branched/aromatic components burn smoothly vs straight-chain knock).</p>
<p><b>Natural gas:</b> mostly methane (Calub/Hilala field, Ogaden, Ethiopia — piped to power plants generating a large share of national electricity), plus ethane/propane; cleanest fossil fuel (highest H:C → least CO₂ per MJ). Coal: terrestrial plant matter; carbonisation grades peat→lignite→bituminous→anthracite; uses: coke for blast furnaces, coal tar (aromatics!), ammoniacal liquor → chemicals; burning coal = most CO₂ per energy (climate cost).</p>
<p><b>Environmental note:</b> benzene is carcinogenic (leukaemia) — strict exposure limits; incomplete combustion makes CO + soot (PAHs — polycyclic aromatic hydrocarbons, also carcinogenic); petroleum spills and CO₂ emissions frame the energy transition.</p>`,
  keyTerms: [
    { term: "Aromatic compound", def: "Contains a benzene-like ring with delocalised π electrons." },
    { term: "Benzene", def: "C₆H₆ — planar ring, equal bonds, substitution chemistry." },
    { term: "Delocalisation", def: "π electrons spread over the whole ring — extra stability." },
    { term: "Kekulé structure", def: "Historical alternating-bond drawing of benzene (incomplete but useful)." },
    { term: "Nitration", def: "Benzene + HNO₃ (H₂SO₄ catalyst) → nitrobenzene." },
    { term: "Toluene / phenol / aniline", def: "Methylbenzene / hydroxybenzene / aminobenzene — solvent, antiseptic, dye base." },
    { term: "Fractional distillation", def: "Separating crude oil by boiling range." },
    { term: "Octane number", def: "Petrol's knock-resistance rating (branched/aromatics score high)." },
    { term: "Anthracite", def: "Hardest, carbon-richest coal grade." }
  ],
  formulas: [
    {
      name: "Benzene nitration",
      formula: "C₆H₆ + HNO₃ →(conc H₂SO₄, 50 °C) C₆H₅NO₂ + H₂O",
      meaning: "Substitution: H swapped for NO₂, ring intact.",
      vars: [],
      units: "—",
      when: "Aromatic substitution showcase.",
      example: "Nitrobenzene → reduced → aniline (dyes & paracetamol)."
    },
    {
      name: "Bromine test contrast",
      formula: "C₆H₆ + Br₂(aq) → NO reaction (dark) | C₆H₆ + Br₂ →(FeBr₃) C₆H₅Br + HBr",
      meaning: "No addition to the ring; catalysed substitution only.",
      vars: [],
      units: "—",
      when: "Distinguishing benzene from alkenes.",
      example: "Bromine water stays orange with benzene — 'unsaturated' yet unreactive."
    },
    {
      name: "Combustion of benzene",
      formula: "2C₆H₆ + 15O₂ → 12CO₂ + 6H₂O",
      meaning: "High C:H ratio → smoky flame (carbon not fully oxidised).",
      vars: [],
      units: "—",
      when: "Aromatics burn sooty.",
      example: "Benzene flame is famously smoky — 92% carbon by mass."
    }
  ],
  workedExamples: [
    {
      problem: "Benzene 'looks' unsaturated (C₆H₆ has far fewer H than cyclohexane C₆H₁₂) yet does NOT decolourise bromine water. Reconcile this.",
      given: "The paradox of aromatic stability.",
      formula: "Delocalisation energy.",
      substitution: "Addition of Br₂ would localise the π system, destroying ~152 kJ/mol of delocalisation stabilisation.",
      calculation: "Thermodynamics refuses: the ring keeps its electron cloud; only substitution (which preserves it) happens, and only with a catalyst (FeBr₃).",
      answer: "Benzene is unsaturated but STABILISED — addition is too costly, so it sits out the bromine-water test."
    },
    {
      problem: "Outline the reaction chain: benzene → nitrobenzene → aniline, with reagents.",
      given: "Two-step aromatic synthesis.",
      formula: "Nitration then reduction.",
      substitution: "Step 1: conc HNO₃ + conc H₂SO₄, 50 °C → C₆H₅NO₂. Step 2: reduce — Sn/HCl then NaOH, or H₂/Ni.",
      calculation: "C₆H₆ → C₆H₅NO₂ → C₆H₅NH₂.",
      answer: "Aniline — gateway to dyes (mauveine), rubber chemicals and painkillers."
    },
    {
      problem: "A refinery's column has four fractions: (P) C₁–C₄ gases, (Q) C₅–C₁₀ petrol, (R) C₁₂–C₁₆ diesel, (S) C₂₀+ residue. Which exits highest in the column and why?",
      given: "Boiling-range ladder.",
      formula: "Fractionating column: cool at top.",
      substitution: "Short chains = weak dispersion forces = low bp = stay gaseous to the cold top.",
      calculation: "P exits top; S (bitumen/lube) leaves at the hot bottom.",
      answer: "Gases at the top, residue at the bottom — the column is a temperature staircase sorting by chain length."
    },
    {
      problem: "Ethiopia's Calub gas field feeds power plants. Write methane combustion and compute CO₂ volume (STP) from burning 16 g methane.",
      given: "CH₄, M = 16.",
      formula: "CH₄ + 2O₂ → CO₂ + 2H₂O; V = 22.4n.",
      substitution: "n(CH₄) = 1 mol → n(CO₂) = 1 mol.",
      calculation: "V = 22.4 L of CO₂.",
      answer: "22.4 L CO₂ per 16 g — natural gas is the LEAST CO₂ per MJ fossil fuel (4 H per C carry extra energy per carbon emitted)."
    },
    {
      problem: "Explain why petrol with more branched and aromatic hydrocarbons has a higher octane rating.",
      given: "Engine knock chemistry.",
      formula: "Combustion smoothness vs structure.",
      substitution: "Straight chains auto-ignite prematurely (pressure waves = knock); compact/branched/aromatic molecules resist auto-ignition and burn evenly.",
      calculation: "Isooctane (2,2,4-trimethylpentane) defines 100; heptane defines 0.",
      answer: "Branched + aromatic components burn controllably → smoother power, higher octane number."
    }
  ],
  commonMistakes: [
    "Drawing benzene with three FIXED double bonds and treating it like an alkene — the bonds are delocalised and equal.",
    "Expecting benzene to decolourise bromine water — it doesn't (no addition without a catalyst).",
    "Saying benzene undergoes addition 'like alkenes' — aromatic chemistry is SUBSTITUTION (ring preserved).",
    "Naming C₆H₅OH 'benzol alcohol' — it's phenol (and phenol is a weak ACID, not an alcohol).",
    "Confusing fractional distillation (physical separation) with cracking (chemical breaking) of crude.",
    "Thinking natural gas = bottled LPG — gas is methane (piped); LPG is propane/butane (cylinders).",
    "Calling all coal the same — grades differ hugely (peat ~25% C vs anthracite ~95%).",
    "Ignoring benzene toxicity — 'it smells nice' is NOT 'it's safe' (carcinogen)."
  ],
  applications: [
    "Petrochemicals: benzene/toluene/xylene (BTX) → plastics (polystyrene, nylon, PET), synthetic rubber, detergents.",
    "Pharmaceuticals: aspirin and paracetamol syntheses run through aromatic intermediates (phenol, aniline).",
    "Dyes & pigments: aniline dyes transformed textile industry (mauveine, 1856).",
    "Ethiopian energy: Calub/Hilala natural gas → combined-cycle power plants; national LPG push replacing firewood.",
    "Explosives & agriculture: nitrobenzene→TNT chemistry; toluene derivatives; ammonium nitrate links back to Haber.",
    "Materials: naphthalene→phthalic anhydride→polyester; phenol→Bakelite→insulators."
  ],
  summary: "Benzene = planar C₆H₆ ring with delocalised π electrons → extra stability → substitution (halogenation, nitration) not addition; equal bond lengths and the negative bromine-water test prove it. Aromatics feed dyes, drugs and plastics (toluene, phenol, aniline, naphthalene). Hydrocarbons' natural sources: petroleum (fractional distillation by chain length), natural gas (methane — Ethiopia's Calub), coal (coke + coal-tar aromatics). High C:H ratio = clean-burning; benzene itself is toxic.",
  visuals: [
    { type: "steps", config: { title: "From Ancient Plankton to Petrol", steps: [{ label: "Plankton buried in oxygen-poor mud", detail: "millions of years ago" }, { label: "Heat + pressure cook it", detail: "10⁷–10⁸ years" }, { label: "Oil + gas migrate, trap under cap rock", detail: "reservoirs form" }, { label: "Drill, extract, transport", detail: "wells → pipelines/tankers" }, { label: "Fractional distillation + cracking", detail: "refinery → usable fuels" }] } },
    { type: "comparison", config: { title: "Benzene vs Cyclohexene", left: { name: "Benzene C₆H₆", items: ["Delocalised ring", "Bonds all equal 0.139 nm", "No bromine-water reaction", "Substitution with FeBr₃", "Sooty flame"] }, right: { name: "Cyclohexene C₆H₁₀", items: ["One real C=C", "Short double bond + long singles", "Decolourises bromine water", "Addition reactions", "Cleaner flame"] } } },
    { type: "qa", config: { title: "Aromatic Myths — tap to reveal", pairs: [{ q: "Why 'aromatic' if benzene is toxic?", a: "History: the first isolated ones (from resins, balsams) smelled pleasant. The name stuck — smell has nothing to do with the ring chemistry." }, { q: "Is Kekulé's alternating-bond drawing wrong?", a: "It's a useful shorthand, but real benzene has no fixed single/double bonds — electrons are smeared over the ring. The drawing underestimates stability by ~152 kJ/mol." }, { q: "Why does benzene burn smoky?", a: "92% carbon by mass — not all carbon meets enough oxygen in time, so glowing soot particles form (like all high C:H fuels)." }] } }
  ],
  questions: [
    { type: "mcq", q: "Benzene's bonding is best described as:", options: ["Alternating fixed single/double bonds", "A ring with delocalised π electrons", "Three separate double bonds", "Ionic carbon rings"], answer: 1, difficulty: 2, explanation: "All six p-electrons spread over the ring — equal bonds, extra stability." },
    { type: "mcq", q: "Benzene reacts with bromine:", options: ["By addition in the dark", "Only by substitution with FeBr₃ catalyst", "Never at all", "To decolourise bromine water"], answer: 1, difficulty: 3, explanation: "Addition would break aromatic stability; catalysed substitution keeps the ring." },
    { type: "short", q: "The reagent pair for nitrating benzene is nitric acid plus concentrated ____ acid.", answer: "sulfur|sulphuric|h2so4", difficulty: 2, explanation: "Conc H₂SO₄ catalyses (generates the nitronium ion)." },
    { type: "calc", q: "Balance 2C₆H₆ + _O₂ → 12CO₂ + 6H₂O. Coefficient of O₂?", answer: "15", difficulty: 3, explanation: "O right: 24 + 6 = 30 → 15 O₂.", tolerance: 0.1 },
    { type: "mcq", q: "Which fraction of crude oil distillation exits at the TOP of the column?", options: ["Bitumen", "Diesel", "Refinery gas (C₁–C₄)", "Lubricating oil"], answer: 2, difficulty: 1, explanation: "Lowest boiling → stays vapour to the cold top." },
    { type: "tf", q: "Phenol (C₆H₅OH) is classified as an alcohol.", answer: false, difficulty: 2, explanation: "OH on a benzene ring = phenol — a weak acid with distinct chemistry, not an alcohol." },
    { type: "concept", q: "Why does benzene NOT decolourise bromine water despite being 'unsaturated'?", answer: "delocalisation too stable|addition destroys ring stability|aromatic stability", difficulty: 3, explanation: "Addition would sacrifice ~152 kJ/mol of delocalisation energy — thermodynamics says no." },
    { type: "mcq", q: "Natural gas from Ethiopia's Calub field is mostly:", options: ["Propane", "Methane", "Butane", "Hydrogen"], answer: 1, difficulty: 1, explanation: "Natural gas ≈ methane; it feeds national power plants." },
    { type: "short", q: "Reduction of nitrobenzene yields ____ (aromatic amine).", answer: "aniline|c6h5nh2|aminobenzene", difficulty: 2, explanation: "C₆H₅NO₂ + 6[H] → C₆H₅NH₂ + 2H₂O — the dye/drug gateway." },
    { type: "ordering", q: "Choose the correct coalification sequence:", options: ["Anthracite → bituminous → lignite → peat", "Peat → lignite → bituminous → anthracite", "Lignite → peat → anthracite → bituminous", "Bituminous → anthracite → peat → lignite"], answer: [1], difficulty: 2, explanation: "Increasing pressure/time raises carbon content: peat → lignite → bituminous → anthracite." }
  ]
};
