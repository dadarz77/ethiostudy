/* Content: Grade 12 Biology — Unit 3 (part A): topics 1-2 */
window.Lessons = window.Lessons || {};

Lessons["g12-biology-ub3-t1"] = {
  overview: "Metabolism is the cell's chemistry budget: catabolism breaks molecules to harvest energy in ATP and reduced carriers (NADH, FADH₂), anabolism spends that currency to build (proteins, DNA, starch). This topic lays the ledger — ATP's role as the energy coin, enzymes as the accountants, and the big pathways (glycolysis, fermentation, respiration, photosynthesis) as the transactions Unit 3 then audits in detail.",
  objectives: [
    "Define metabolism, catabolism, anabolism with examples",
    "Explain ATP's structure and cycling as the energy currency",
    "Describe enzyme catalysis (active site, activation energy, inhibition)",
    "Map the major pathways and their connections",
    "Relate metabolic rate to organism needs (temperature, activity)"
  ],
  simple: "<b>Energy is money; ATP is the coin.</b> Glucose can't pay a cell directly — its energy must first be 'minted' into ATP by stripping electrons (via NAD⁺→NADH down an electron transport chain that pumps protons and spins ATP synthase like a turbine). Anabolic jobs (building glycogen in muscle, proteins in liver, cellulose in a growing stem) spend the coins back. Enzymes run every transaction: they lower activation energy (the spark gap before a reaction releases energy), lock substrates in an active site (induced fit), and are regulated by feedback (the end product jamming an early enzyme — economics' 'stop ordering when the warehouse is full'). Fermentation and respiration are the two cash-flow strategies: partial breakdown for speed without oxygen, total oxidation to CO₂ and water for maximum yield.",
  detailed: "<p><b>The currency.</b> ATP = adenine + ribose + three phosphates; the terminal phosphoanhydride bonds are 'charged' partly by electrostatic repulsion of adjacent negative charges and by product stabilization (resonance + solvation of free phosphate). Hydrolysis (ATP → ADP + Pi) releases ~30 kJ/mol under cellular conditions and couples to unfavorable work: mechanical (myosin power strokes), transport (Na⁺/K⁺-ATPase spending a third of your resting energy!), chemical (glutamine synthetase, and phosphorylation 'activating' intermediates like glucose-6-phosphate). ATP-ADP cycles in a human at ~body-weight per DAY (turnover ~10⁹ molecules per second per cell) — the cell keeps no vault, only a spinning account.</p><p><b>Enzymes: the regulated accountants.</b> A catalyst speeds a reaction without being consumed by offering a lower-energy path: substrate binding (active site microenvironment — positioned charges, strain on the bound bond, acid-base side chains), transition-state stabilization. Specificity: lock-and-key upgraded to induced fit (the site clamps). Kinetics: rate ∝ [S] until saturation (Vmax; Km = affinity signature); temperature/pH optima (pepsin pH 2 vs trypsin pH 8; fever denaturing logic); inhibitors: competitive (occupy the site; methotrexate vs folate reductase, malonate vs succinate dehydrogenase — the classic), non-competitive (bind elsewhere, warp the site), and regulation by allosteric feedback (end-product inhibition: threonine→isoleucine's first enzyme) plus covalent switches (phosphorylation cascades, hormone control). Cofactors and coenzymes (NAD⁺, FAD, CoA, Mg²⁺) are the enzymes' toolkits: the vitamins in your diet ARE the coenzyme precursors — Unit 1's nutrition reappearing as metabolic hardware.</p><p><b>The pathway map.</b> Catabolism of glucose runs the same three acts in a bacterium and a baobab: glycolysis (cytoplasm: glucose → 2 pyruvate, net 2 ATP + 2 NADH, no O₂ needed), then EITHER fermentation (no O₂: pyruvate reduced — lactate in muscle and Lactobacillus (ergo!), ethanol + CO₂ in yeast (injera's eyes): regenerates NAD⁺ so glycolysis keeps paying the rent at 2 ATP/glucose) OR aerobic respiration (pyruvate → acetyl-CoA + CO₂ in the mitochondrial matrix; the Krebs/citric-acid cycle strips the acetyl to 2 CO₂ loading NADH/FADH₂; the electron transport chain on the inner membrane cashes the carriers for ~26-28 ATP via the proton-motive force). Total yield ~30-32 ATP/glucose vs 2: why anaerobes and your oxygen-debt muscle are the slow-money strategy. Fats and proteins enter the same river: β-oxidation → acetyl-CoA; deaminated amino acids → cycle intermediates — the interconnected network, not three isolated lanes.</p><p><b>Anabolism mirrors and diverges.</b> Building uses the REDUCING power NADPH (from the pentose-phosphate pathway and photosynthesis's light reactions), not NADH — different wallets for different accounts. Gluconeogenesis rebuilds glucose from lactate/glycerol/amino acids (mostly liver and kidney: the fasting brain's lifeline); glycogen synthesis (insulin's 'store it' command), fatty-acid synthesis from citrate exported when ATP is plentiful, amino-acid and nucleotide assembly from cycle intermediates. Anabolism is why you must EAT specific molecules (essential amino acids and vitamins: the pathways your lineage lost — a Unit 4 evolution signature in Unit 3's menu).</p><p><b>Metabolism as a whole-organism budget.</b> Basal metabolic rate scales with mass^¾ (Kleiber's law: mouse lives fast, elephant efficiently — surface and supply constraints); endotherms burn 10-20× an equal-mass reptile just to hold temperature (the Ethiopian highland runner's thermoregulation vs the sidewinder's sun-basking — two energy strategies on one landscape). Thyroid hormones set the thermostat of the budget; exercise shifts fuel mix (carbs first, fats as duration grows — the training adaptation is more mitochondria and more oxidant enzymes). Feed intake, expenditure, storage: obesity is a ledger problem with hormonal entries (leptin, insulin) — Unit 5's homeostasis in caloric dress.</p>",
  keyTerms: [
    { term: "Catabolism", def: "breakdown harvesting energy" },
    { term: "Anabolism", def: "building spending energy" },
    { term: "ATP", def: "adenosine triphosphate: the energy coin" },
    { term: "Activation energy", def: "the reaction's spark gap" },
    { term: "Induced fit", def: "active site clamps substrate" },
    { term: "Feedback inhibition", def: "end product halts its pathway" },
    { term: "NAD⁺/NADH", def: "electron carrier couple" },
    { term: "Metabolic rate", def: "energy spend per time (Kleiber scaling)" }
  ],
  formulas: [
    { name: "ATP hydrolysis", formula: "ATP + H₂O → ADP + Pi (ΔG ≈ −30 kJ/mol cell)", meaning: "the coupled energy pay-out", vars: [{ name: "~body-weight cycled daily", meaning: "turnover, not storage" }], when: "all cellular work" },
    { name: "Aerobic respiration", formula: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (~30-32 ATP)", meaning: "complete oxidation", vars: [{ name: "vs 2 ATP fermented", meaning: "15-16× yield gap" }], when: "every mitochondrion" },
    { name: "Kleiber scaling", formula: "BMR ∝ M^0.75", meaning: "mass-specific metabolism falls with size", vars: [{ name: "mouse vs elephant", meaning: "pace-of-life axis" }], when: "comparative energetics" }
  ],
  workedExamples: [
    { problem: "Sprint 100 m: your muscle makes ATP past its O₂ delivery. Which pathway carries the extra minutes?", calculation: "Phosphocreatine seconds, then glycolysis + lactate fermentation at 2 ATP/glucose.", answer: "The anaerobic account pays fast but small: the oxygen debt and burn are NAD⁺-regeneration and H⁺ bills." },
    { problem: "A cell's Na⁺/K⁺ pumps consume 30% of resting ATP. Why are nerves so costly?", calculation: "Each action potential restores ion gradients the pump built; firing rate = spend rate.", answer: "Your brain is ~2% body mass but ~20% of the budget: electrochemistry is not free." },
    { problem: "Fever at 41 °C denatures some enzymes; why is the RATE rise at mild fever (38-39) still helpful?", calculation: "Q₁₀ effect: reaction rates and immune cell kinetics climb faster than pathogen replication for many species.", answer: "The body weaponizes kinetics — moderate heat speeds the defense more than the invader." },
    { problem: "Threonine inhibits the first enzyme of its own synthesis. Why not the last?", calculation: "Early inhibition stops ALL intermediate waste (economy of flux), not just final output.", answer: "Feedback at the committed step: the warehouse-manager logic." }
  ],
  commonMistakes: [
    "Saying enzymes 'provide energy' (they lower activation cost, never change ΔG)",
    "Calling ATP a 'storage molecule' (it's currency: cells bank fat/glycogen instead)",
    "Confusing NADH (respiration's electron carrier) with NADPH (biosynthesis's)",
    "Thinking glycolysis needs oxygen (it never does; the O₂ question is pyruvate's fate)",
    "Equating 'metabolism' with digestion (metabolism is intracellular chemistry)"
  ],
  applications: [
    "Ergo and injera batter: fermentation's NAD⁺-regenerating economics, edible",
    "Exercise physiology: fuel shifting and mitochondrial density training",
    "Enzyme drugs: protease inhibitors, statins — competitive inhibition prescribed",
    "BMR and nutrition planning: Kleiber's law in dietary guidelines"
  ],
  summary: "Metabolism is a ledger: mint ATP by stripping electrons (catabolism), spend it on building and pumping (anabolism), and let enzymes with feedback control run every entry — fermentation fast-and-small, respiration slow-and-rich.",
  visuals: [],
  questions: [
    { type: "mcq", q: "ATP functions in the cell as:", options: ["long-term fuel", "immediate energy currency", "genetic material", "a structural protein"], answer: 1, difficulty: 1, explanation: "Coin, not vault: fat and glycogen are the savings." },
    { type: "mcq", q: "Enzymes speed reactions by:", options: ["adding energy", "lowering activation energy", "changing equilibrium", "raising temperature"], answer: 1, difficulty: 1, explanation: "A cheaper path, same start and finish." },
    { type: "mcq", q: "Glycolysis yields per glucose:", options: ["36 ATP", "net 2 ATP + 2 NADH", "0 ATP", "2 CO₂"], answer: 1, difficulty: 2, explanation: "The universal partial breakdown: no O₂ involved." },
    { type: "mcq", q: "Yeast and muscle fermentation share the purpose of:", options: ["making alcohol", "regenerating NAD⁺ to keep glycolysis running", "releasing CO₂ always", "making more ATP than respiration"], answer: 1, difficulty: 3, explanation: "The pyruvate reduction is a paperwork fix, not a product goal." },
    { type: "mcq", q: "An anabolic process is:", options: ["glycogen → glucose", "glucose → CO₂ + H₂O", "amino acids → protein", "fat digestion"], answer: 2, difficulty: 2, explanation: "Building spends energy: catabolism harvests." },
    { type: "mcq", q: "Feedback inhibition usually targets:", options: ["the last enzyme", "an early/committed-step enzyme", "the ATP synthase", "the ribosome"], answer: 1, difficulty: 2, explanation: "Stop the line early: waste nothing." },
    { type: "mcq", q: "Kleiber's law predicts a mouse has per gram:", options: ["lower metabolic rate than an elephant", "higher than an elephant", "the same", "unpredictable"], answer: 1, difficulty: 3, explanation: "Mass-specific rate falls with size: the pace-of-life gradient." },
    { type: "mcq", q: "Protein energy enters respiration by:", options: ["direct ATP conversion", "deamination then carbon skeletons into glycolysis/Krebs", "turning into DNA", "becoming glycogen"], answer: 1, difficulty: 3, explanation: "Strip the nitrogen, feed the skeleton to the cycle." }
  ]
};

Lessons["g12-biology-ub3-t2"] = {
  overview: "Photosynthesis is the planet's energy entry point: chloroplasts capture light with chlorophyll and split water, turning CO₂ into sugar with O₂ as exhaust. Light reactions (thylakoid membranes: photosystems II and I in series, the Z-scheme, ATP + NADPH minting, water's photolysis replacing lost electrons) feed the Calvin cycle (stroma: rubisco fixing CO₂ into G3P, sugar built at the cost of 18 ATP + 12 NADPH per glucose). This topic also handles the limitations (light, CO₂, temperature, the C4/CAM adaptations to hot dry air — Ethiopia's teff, maize and sorghum all showing the tropical tricks).",
  objectives: [
    "Write the overall equation and locate the two stages",
    "Describe chloroplast structure and pigment roles",
    "Trace the light reactions: PSII→PQ→cyt b6f→PC→PSI→Fd→NADP⁺",
    "Explain chemiosmosis and photolysis (O₂ from water)",
    "Run the Calvin cycle and the C4/CAM solutions to photorespiration"
  ],
  simple: "<b>Two halves in one organelle.</b> On the thylakoid: light hits PSII's reaction center (P680), which rips an electron off WATER (photolysis: the O₂ you breathe is photosynthesis's exhaust from split water), the electron falls down an ETC that pumps protons (ATP synthase spins), then PSI (P700) boosts it to NADP⁺ → NADPH. In the stroma: the Calvin cycle uses those two products + CO₂, and rubisco — Earth's most abundant protein — fixes CO₂ onto RuBP (3-C chemistry from 3-C molecules), spending 3 ATP + 2 NADPH per CO₂ to release G3P; six turns net one sugar precursor. Limiting factors behave exactly as the law of the minimum predicts: shade, drought-closed stomata (CO₂ in), and cool nights gate the harvest.",
  detailed: "<p><b>The antenna system.</b> Chlorophyll a (the reaction-center pigment: its special pair is the photochemistry) + chlorophyll b and carotenoids (accessory: widen the spectrum harvested, dissipate excess as heat — photoprotection) embedded in photosystems (~200-300 pigments funnel excitation energy by resonance transfer to the reaction center: the light-harvesting complex). Absorption spectra (peaks red ~680 and blue ~430 nm; green reflected — why leaves are green) vs action spectrum (Engelmann's bacteria-and-prism experiment: oxygen-demand follows the absorption). The thylakoid membrane stacks into grana; the stroma outside holds the Calvin enzymes; the double membrane and own circular DNA + 70S ribosomes mark the chloroplast as an endosymbiotic cyanobacterium (Unit 4's evidence line: the same phylum t1 credited with oxygenating the atmosphere).</p><p><b>The Z-scheme in sequence.</b> PSII absorbs → P680⁺ (a ferocious oxidant, E° ~+1.1 V, strong enough to split water) takes electrons from water via the manganese oxygen-evolving complex (the manganese cluster strips four electrons from 2 H₂O → O₂ + 4H⁺ + 4e⁻; the protons add to the thylakoid lumen gradient). Excited e⁻ passes plastoquinone → cytochrome b6f (Q-cycle pumps more H⁺) → plastocyanin → PSI → ferredoxin → NADP⁺ reductase (NADPH out on the stroma side). The proton gradient (ΔpH + charge = proton-motive force) drives ATP synthase: photophosphorylation. Cyclic flow around PSI (no NADPH, extra ATP) balances the cycle's 1.5:1 ATP:NADPH demand. Herbicides and reality: DCMU blocks electron flow at QB; the same chemistry underpins why some crops tolerate sprayed weeds.</p><p><b>Calvin cycle, three phases (per CO₂).</b> Fixation: rubisco joins CO₂ to RuBP (5C) → two 3-PGA (3C). Reduction: 3-PGA + ATP → 1,3-BPG; + NADPH → G3P (the sugar output; 2 G3P leave per 3 CO₂ to make one hexose after isomer shuffle). Regeneration: 5 of every 6 G3P re-run (3 ATP per 3 CO₂) through C3→C4→C7 shuffles back to RuBP. Cost: 3 ATP + 2 NADPH per CO₂ = 18 + 12 per glucose — the solar bill the light reactions must mint. Rubisco's flaw: its active site can't reliably distinguish CO₂ from O₂; oxygenation → 2-phosphoglycolate → the photorespiratory salvage (chloroplast→peroxisome→mitochondria: energy-losing, carbon-losing, and — the plot twist — possibly why rubisco is so abundant: an enzyme with mediocre specificity because O₂ was low when it evolved in cyanobacterial ancestors, now locked in by biochemistry's inertia).</p><p><b>Hot-dry adaptations: C4 and CAM.</b> Photorespiration surges when stomata close in heat (internal CO₂ falls, O₂ from the light reactions rises). C4 plants (maize, sugarcane, sorghum, and teff's cousin grains; the Ethiopian lowland grasses) pre-fix CO₂ in mesophyll with PEP carboxylase (no oxygenase side-reaction) into 4C malate, shuttle it to bundle-sheath cells that run the Calvin cycle in a high-CO₂ private room — a CO₂ pump anatomy (Kranz ring). CAM plants (agaves, the endemic euphorbias of the arid rangelands, the succulent shrubs of the lowlands) open stomata AT NIGHT, fix to malate in vacuoles, seal up by day and re-release CO₂ internally: drought survival traded for slow growth. The yield consequence: C4 maize out-yields C3 wheat per unit water in hot light — the reason climate-shift discussions in Ethiopian agriculture keep circling sorghum and maize over temperate imports.</p><p><b>Factors and field measurement.</b> Light: compensation point (photosynthesis = respiration: the shade plant's survival threshold) → saturation. CO₂: current 420 ppm still below many crops' saturation (the greenhouse-burner and open-air CO₂-enrichment logic — and Unit 5's climate-fertilization double-edge). Temperature: enzymes gate the dark reactions; chilling vs scorching both cut. Water: the drought-closed stomata cascade (CO₂ in, heat and photorespiration out). Experiment classics kept for the lab book: Sod/green-bottled pond weed bubbles faster in light, variegated leaf + iodine, floating-leaf aquatic oxygen counting — and Ethiopia's version: measuring injera-grain filling-period photosynthate with flag-leaf clipping at the research centers.</p>",
  keyTerms: [
    { term: "Photosystem", def: "antenna + reaction center complex" },
    { term: "Photolysis", def: "light-driven water splitting" },
    { term: "Chemiosmosis", def: "ATP from proton gradient" },
    { term: "Rubisco", def: "RuBP carboxylase/oxygenase: the fixer" },
    { term: "Calvin cycle", def: "stroma CO₂ → sugar (light-independent)" },
    { term: "Photorespiration", def: "rubisco's wasteful O₂ reaction" },
    { term: "C4 / Kranz", def: "CO₂-pump leaf anatomy" },
    { term: "CAM", def: "night-stomata, day-CO₂-recycle" },
    { term: "Compensation point", def: "P = R light level" }
  ],
  formulas: [
    { name: "Overall", formula: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂", meaning: "the global input/output", vars: [{ name: "O₂ from water", meaning: "isotope-proved" }], when: "the biosphere's power meter" },
    { name: "Calvin cost", formula: "3 ATP + 2 NADPH per CO₂ (18+12/glucose)", meaning: "the mint rate needed from light reactions", vars: [{ name: "6 turns net 1 G3P out", meaning: "3 CO₂ in" }], when: "yield modeling" },
    { name: "Water photolysis", formula: "2H₂O → O₂ + 4H⁺ + 4e⁻", meaning: "the oxygen you breathe", vars: [{ name: "Mn-cluster", meaning: "the water-splitting catalyst" }], when: "PSII's job" }
  ],
  workedExamples: [
    { problem: "A leaf fixes 60 mg CO₂/h. Glucose made?", calculation: "60 mg = 1.36 mmol CO₂; ÷6 = 0.227 mmol glucose.", answer: "~0.23 mmol ≈ 41 mg glucose/h — and the O₂ released is 1.36 mmol of the water-split kind." },
    { problem: "H₂¹⁸O fed to a plant: where does the heavy isotope appear?", calculation: "Label the water photolysed at PSII.", answer: "In the O₂ bubbles first (not the sugar): the gas is water-derived — the isotope experiment that settled the source." },
    { problem: "A greenhouse at 35 °C sealed vents: yield drops though light is perfect. Why?", calculation: "Closed stomata → CO₂ starvation + photorespiration climb + respiratory losses.", answer: "A C3 crop suffocates on its own success: cooling and venting fix the air, not the light." },
    { problem: "Maize vs wheat at noon in the Awash valley: which keeps fixing carbon with partially closed stomata?", calculation: "The C4 pump concentrates CO₂ in bundle sheath even at low internal CO₂.", answer: "Maize (and sorghum): Kranz anatomy is the tropical advantage." }
  ],
  commonMistakes: [
    "Saying the 'dark reactions' run at night (light-independent but normally run by day on light-reactions products)",
    "Assigning released O₂ to CO₂ (it all comes from water)",
    "Thinking rubisco is 'broken' (its specificity is a fossil of low-O₂/ high-CO₂ ancestral air)",
    "Confusing C4 (cell-type separation) with CAM (time separation)",
    "Believing more light always helps past saturation (photoinhibition begins)"
  ],
  applications: [
    "Teff and wheat are C3: their noon-stomata math in Ethiopian heat",
    "Maize/sorghum C4 yield logic in the Rift valley irrigation schemes",
    "CO₂ enrichment and shade management in floriculture greenhouses",
    "Photorespiration breeding targets (the RIPE project's maize-rice experiments)"
  ],
  summary: "Light reactions mint ATP and NADPH by splitting water (O₂ exhaust); the Calvin cycle spends them fixing CO₂ with rubisco — and C4/CAM are the hot-dry workarounds to the fixer's ancient flaw.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The O₂ released in photosynthesis comes from:", options: ["CO₂", "water", "glucose", "rubisco"], answer: 1, difficulty: 1, explanation: "Photolysis at PSII: isotope-proved." },
    { type: "mcq", q: "Light reactions occur in the:", options: ["stroma", "thylakoid membrane", "cytoplasm", "mitochondria"], answer: 1, difficulty: 1, explanation: "The photosystems and ATP synthase are membrane-bound." },
    { type: "mcq", q: "Rubisco fixes CO₂ onto:", options: ["PEP", "RuBP", "G3P", "glucose"], answer: 1, difficulty: 2, explanation: "The 5C acceptor; two 3C products follow." },
    { type: "mcq", q: "Calvin-cycle products per 3 CO₂ are:", options: ["one G3P out", "one glucose out", "3 O₂ out", "ATP made"], answer: 0, difficulty: 2, explanation: "One net triose per three fixes; six turns = one hexose." },
    { type: "mcq", q: "Photorespiration rises when:", options: ["CO₂ is high", "stomata close in heat and O₂ outcompetes CO₂", "night falls", "water is abundant"], answer: 1, difficulty: 3, explanation: "Low internal CO₂ shifts rubisco to the oxygenase mode." },
    { type: "mcq", q: "C4 plants separate carbon fixation from the Calvin cycle by:", options: ["night vs day", "mesophyll vs bundle-sheath cells", "roots vs leaves", "stomata size"], answer: 1, difficulty: 2, explanation: "Kranz anatomy: spatial CO₂ pump." },
    { type: "mcq", q: "The electron that replaces PSII's lost one comes from:", options: ["PSI", "water", "NADPH", "the Calvin cycle"], answer: 1, difficulty: 2, explanation: "The Z-scheme starts at water photolysis." },
    { type: "mcq", q: "ATP in the light reactions is made by:", options: ["substrate-level phosphorylation", "a proton gradient through ATP synthase", "kinase transfer from glucose", "rubisco activity"], answer: 1, difficulty: 3, explanation: "Chemiosmosis — same turbine as respiration." }
  ]
};
