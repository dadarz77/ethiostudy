/* Content: Grade 12 Biology — Unit 3 (part B): topics 3-4 */
window.Lessons = window.Lessons || {};

Lessons["g12-biology-ub3-t3"] = {
  overview: "Photosynthesis is not just a plant process — it is the planet's life-support contract: every calorie you eat, every molecule of breathable oxygen, and the stable CO₂ level that keeps climate livable trace back to chloroplasts and cyanobacteria. This topic audits the contract: the energy and carbon flow to all food webs, the O₂-CO₂ cycle and its ocean chemistry, the carbon balance and its human disruption, and the global-warming ledger Unit 6 will settle.",
  objectives: [
    "Trace energy flow from photosynthesis through food webs",
    "Explain the oxygen cycle and the ozone/combustion balance",
    "Describe the CO₂ cycle: sources, sinks, and the carbon budget",
    "Quantify how photosynthesis buffers atmospheric CO₂",
    "Link deforestation and land-use change to Ethiopia's carbon story"
  ],
  simple: "<b>Three gifts, one giver.</b> (1) Energy: nearly all food chains run on solar energy captured by photosynthesis — chemosynthetic deep-sea vents are the curious exception that proves the rule. (2) Oxygen: the Great Oxidation Event (cyanobacteria ~2.4 Ga) built the O₂ atmosphere and the ozone shield that made land life possible; today's forests and phytoplankton keep the flame against global combustion and rust. (3) Carbon drawdown: photosynthesis pulls ~120 Gt C/year into living matter (double the human emission rate), and the un-eaten fraction leaks to soils and sediments — the slow sink that made fossil fuels. Disrupt the giver (deforestation, ocean acidification, fossil combustion) and all three gifts shrink at once: that is the global-warming link.",
  detailed: "<p><b>The energy base.</b> Gross primary production (GPP) is total photosynthetic capture; net primary production (NPP) is what's left after plant respiration — the actual budget available to herbivores, and ~half of GPP. Terrestrial NPP ~56 Gt C/yr; oceans contribute ~48 Gt C/yr from phytoplankton despite holding a fraction of the biomass (fast turnover: the grasslands of the sea). Ecological efficiency (~10% between trophic levels) means the photosynthetic base sets every pyramid: a beef burger carries ~10-100× the plant calories of grain, which is why 'feed vs food' is a photosynthesis-allocation debate. Ethiopia's read: its NPP is concentrated in the western highlands' crops and enset, the southern forests, and the acacia rangelands — land-use choices literally redraw the energy base for the whole food web, from hive to hyena.</p><p><b>The oxygen cycle.</b> Sources: oxygenic photosynthesis (terrestrial plants ~half, marine phytoplankton ~half by older estimates — the split is alive in current science). Sinks: respiration and decomposition (the bulk, nearly cancelling production on land), combustion, rock weathering/rust, and lightning-driven chemistry. Atmospheric O₂ = 20.95%, ~2×10¹⁸ grams: so vast that measurable modern decline (from fossil carbon sequestration and biomass burning — the O₂ isotopic fingerprint of human combustion) is a tracer, not yet a threat. The real O₂ story is stratified: the O₃ ozone layer in the stratosphere (made from O₂ by UV, destroyed by CFCs — the Montreal Protocol as climate-diplomacy rehearsal for Unit 6) screens the mutagenic UV-B that would otherwise end most surface life; the Antarctic hole's slow healing under the treaty is proof that coordinated chemistry policy works.</p><p><b>The CO₂ cycle and the carbon budget.</b> Natural fluxes: photosynthesis in ~120-123 Gt C/yr, respiration+decomposition out ~119-123, ocean exchange ~90 each way — a restless near-balance. The Anthropocene wedge: fossil combustion + cement ~9-10 Gt C/yr, land-use change ~1-2 — tiny against natural fluxes but persistent: about half stays in air (the airborne fraction ~44%), ~26% dissolves/absorbs into land growth, ~26% into ocean. Pre-industrial CO₂ 278 ppm → today ~424 ppm: +52% and rising ~2.5 ppm/yr. The consequences split into two chemical problems: the greenhouse effect (Unit 6 physics) and ocean acidification (CO₂ + H₂O → carbonic acid → pH −0.1 already, ~30% more acidic: the carbonate-saturation squeeze on shells, corals and the marine food web's base — photosynthesis's marine wing corroding from its own byproduct). Forests as ledger: a hectare of tropical regrowth fixes several tonnes of C/year; Ethiopia's forest carbon (the declining Munze-Menzesha-era cover, now ~13-15% and the 20% target, the GREEN FROM THE HEART initiative's 15 billion seedlings from 2019 onward, and the community-managed exclosures of Tigray and Amhara that regreened thousands of hectares) is both a carbon story and a food-water story.</p><p><b>Continuity of life — the deep audit.</b> The photosynthetic contract has held for ~2.4 billion years and every mass extinction partly reset it; the current disruption is the first caused by a single species' energy use. The hopeful arithmetic: today's net terrestrial primary production is not yet collapsing — croplands' harvest (~half of human-appropriated NPP) shows how much of the biosphere's income we already spend. The stability signals to watch: the residual land-sink strength (it is weakening as heat and drought stress forests — the 2015/2023 Amazon turn from sink to source is the warning), the ocean's pH buffer, and the ozone layer's recovery as the template that planetary problems ARE fixable when chemistry, policy and monitoring align.</p>",
  keyTerms: [
    { term: "GPP / NPP", def: "total capture / minus plant respiration" },
    { term: "Great Oxidation Event", def: "cyanobacterial O₂ buildup ~2.4 Ga" },
    { term: "Ozone layer", def: "stratospheric O₃ UV shield" },
    { term: "Carbon budget", def: "sources minus sinks accounting" },
    { term: "Airborne fraction", def: "~44% of emissions stay in air" },
    { term: "Ocean acidification", def: "CO₂ + water → carbonic acid" },
    { term: "Exclosure", def: "community-protected regreening plot" }
  ],
  formulas: [
    { name: "Budget identity", formula: "ΔCO₂ = emissions − (land sink + ocean sink)", meaning: "airborne fraction logic", vars: [{ name: "~44% airborne", meaning: "annual mean" }], when: "climate accounting" },
    { name: "Trophic tax", formula: "NPP → ~10%/level to top consumer", meaning: "pyramid of energy", vars: [{ name: "10 kg grass ≈ 1 kg beef", meaning: "rough conversion" }], when: "diet and land choices" }
  ],
  workedExamples: [
    { problem: "A hectare of enset-crop mosaic fixes ~8 t CO₂/yr; a car emits ~4 t. Offset?", calculation: "8/4 = 2 cars per hectare-year.", answer: "One hectare of productive Ethiopian cropland neutralizes two cars annually: the land is the technology." },
    { problem: "If all forest photosynthesis stopped today, how fast would O₂ drop?", calculation: "Atmosphere 2×10¹⁸ g; current net production ~Gt scale/yr.", answer: "Thousands of years to matter: O₂ is not the near-term risk — CO₂ and habitat are." },
    { problem: "Ocean has absorbed ~26% of our carbon. What did it pay?", calculation: "CO₂ hydrolysis to carbonic acid; pH down 0.1 units = 30% [H⁺] rise.", answer: "Acidification: the sink is a chemical invoice shells and plankton now pay." },
    { problem: "Ethiopia's seedling campaigns fix carbon but saplings die on private land. What governs real sequestration?", calculation: "Survival and tenure: protected exclosures vs unmanaged plantings.", answer: "Governance is the third factor of production: seedling counts ≠ carbon without stewardship." }
  ],
  commonMistakes: [
    "Saying 'forests give us oxygen to breathe' as if it's net-positive (mature forests roughly balance; growth and soils store)",
    "Thinking CO₂ is only a pollutant (it is the food of every plant — the problem is rate and amount)",
    "Confusing the ozone hole with global warming (separate problems; CFCs were greenhouse gases too)",
    "Believing phytoplankton are 'the other half of our air' without noting marine O₂ mostly stays marine",
    "Counting planted seedlings as carbon (survival, tenure and fire decide the ledger)"
  ],
  applications: [
    "Ethiopian Climate-Resilient Green Economy: land carbon as development strategy",
    "Exclosure regreening in the northern highlands: watershed + carbon co-benefits",
    "Reef and shellfish monitoring as the acidification early-warning net",
    "Ozone-layer diplomacy as the working template for climate treaties (Unit 6)"
  ],
  summary: "Photosynthesis underwrites continuity itself: the energy base of all food webs, the O₂-ozone shield, and the carbon balance now tipped by fossil release — restoring the sinks is the old job done with new urgency.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Primary production available to the rest of a food web is:", options: ["GPP", "NPP", "respiration", "biomass only"], answer: 1, difficulty: 1, explanation: "NPP: capture minus the plant's own spend." },
    { type: "mcq", q: "Earth's oxygen atmosphere first built up thanks to:", options: ["dinosaurs", "cyanobacteria", "volcanoes", "ozone"], answer: 1, difficulty: 1, explanation: "The Great Oxidation: photosynthetic exhaust." },
    { type: "mcq", q: "The ozone layer protects life by absorbing:", options: ["infrared", "UV-B", "visible light", "radio waves"], answer: 1, difficulty: 2, explanation: "Mutagenic shortwave screened aloft." },
    { type: "mcq", q: "Roughly what fraction of human CO₂ emissions stays airborne?", options: ["~10%", "~44%", "~80%", "100%"], answer: 1, difficulty: 3, explanation: "The rest lands in oceans and growing biomass." },
    { type: "mcq", q: "Ocean acidification is caused directly by:", options: ["plastic", "CO₂ dissolving into carbonic acid", "warming alone", "overfishing"], answer: 1, difficulty: 2, explanation: "The sink's chemical invoice." },
    { type: "mcq", q: "Most marine photosynthesis comes from:", options: ["coral reefs", "phytoplankton", "whales", "sea grass only"], answer: 1, difficulty: 1, explanation: "The invisible grasslands of the open ocean." },
    { type: "mcq", q: "A mature forest's net oxygen contribution is best described as:", options: ["massively positive each year", "roughly balanced by its own respiration", "negative always", "zero in all seasons"], answer: 1, difficulty: 3, explanation: "Growth stores; balance is the nuance." },
    { type: "mcq", q: "Energy transfer between trophic levels averages about:", options: ["100%", "50%", "10%", "1%"], answer: 2, difficulty: 2, explanation: "The ten-percent tax that shapes food chains." }
  ]
};

Lessons["g12-biology-ub3-t4"] = {
  overview: "Cellular respiration is photosynthesis run backwards in the cell's own power plant: pyruvate from glycolysis is fully oxidized in mitochondria — the link reaction, the Krebs cycle, and the electron transport chain — to mint ~30-32 ATP per glucose with O₂ as the final electron acceptor and CO₂ and water as exhaust. This topic traces every atom and every electron, balances the ATP ledger, and connects breathing to the organism: metabolic rate, fuel choice and exercise debt.",
  objectives: [
    "Locate and order the four stages of respiration",
    "Track carbons: pyruvate → acetyl-CoA → 2 CO₂ per turn of Krebs",
    "Balance the ATP/ NADH / FADH₂ ledger per glucose",
    "Explain chemiosmosis and oxygen's role as final acceptor",
    "Relate respiration rate to demand (exercise, temperature, cell type)"
  ],
  simple: "<b>The mitochondrion burns food slowly and captures the cash.</b> Stage 1: glycolysis in cytoplasm (glucose → 2 pyruvate, 2 ATP, 2 NADH). Stage 2: link reaction into the matrix (pyruvate → acetyl-CoA + CO₂, 2 NADH). Stage 3: Krebs cycle (acetyl → 2 CO₂, 2 ATP, 6 NADH, 2 FADH₂ per glucose). Stage 4: oxidative phosphorylation — NADH/FADH₂ donate electrons to the inner-membrane ETC; energy from their fall pumps H⁺ into the intermembrane space; O₂ sits at cytochrome oxidase to take spent electrons + H⁺ (forming water — why you need to breathe); the returning protons through ATP synthase mint ~2.5 ATP per NADH and ~1.5 per FADH₂. Net: ~30-32 ATP/glucose. Every CO₂ you exhale was a carbon of the food you just oxidized.",
  detailed: "<p><b>Glycolysis recap and entry.</b> The ten-step, universal pathway splits glucose (6C) into two pyruvates (3C), investing 2 ATP and paying 4 + 2 NADH (net 2 ATP). In aerobic cells, pyruvate crosses into the mitochondrial matrix; there the pyruvate dehydrogenase complex (a multi-enzyme machine needing five cofactors including thiamine — the vitamin whose deficiency, beriberi, strikes exactly the tissues that fail without it: nerves and heart, linking Unit 1's nutrition to Unit 3's energy) carries out the link reaction: oxidative decarboxylation to acetyl-CoA, releasing CO₂ and loading NAD⁺.</p><p><b>Krebs (citric-acid) cycle, carbon by carbon.</b> Acetyl (2C) joins oxaloacetate (4C) → citrate (6C); two decarboxylations return a 4C acceptor — the two exhaled CO₂ of each turn come from the OAA carbons, not the fresh acetyl (isotope-proved — the cycle is a wheel the food spins). Per turn: 3 NADH, 1 FADH₂, 1 GTP/ATP; twice per glucose. Beyond energy: the cycle is the hub of biosynthesis — α-ketoglutarate to amino acids, oxaloacetate to glucose (gluconeogenesis) and aspartate, citrate exported for fat synthesis. The cycle is a roundabout with exits as well as traffic.</p><p><b>Chemiosmosis: the actual pay-off.</b> NADH and FADH₂ (entering at complex I and II respectively) feed electrons through I→Q→III→cyt c→IV; the energy released at three proton-pumping complexes loads the intermembrane space (proton-motive force: ΔpH ~0.7 units + membrane charge). ATP synthase (complex V) is a nano-turbine: ~4 H⁺ per ATP made and exported. O₂ is the FINAL electron acceptor at cytochrome c oxidase (4 e⁻ + 4H⁺ + O₂ → 2H₂O) — without it the chain backs up, NAD⁺ runs out, and (as in fermentation or asphyxiation) the cell reverts to glycolysis-only economics. Uncouplers (2,4-DNP; thermogenin in brown fat) short-circuit the gradient: energy escapes as HEAT instead of ATP — hibernators, newborns and the high-altitude shiver of a cold Addis dawn run partly on uncoupling logic; the cold adaptation of mammals is gradient leakage on purpose.</p><p><b>The ledger and its fine print.</b> Substrate-level ATP: 2 glycolysis + 2 Krebs. Oxidative: 10 NADH × 2.5 + 2 FADH₂ × 1.5 ≈ 28; total ~30-32 (the 2 cytosolic NADH shuttle costs vary by tissue). Photosynthesis's bill from t2 (18 ATP + 12 NADPH to build glucose) is roughly what respiration earns back burning it: the cycles of t2 and t4 are one coupled industrial loop across two organelles and two kingdoms. Efficiency: ~34% of glucose's energy captured in ATP (rest heat) — a better engine than any coal plant of the 1800s, and the reason a resting human radiates ~100 W continuously.</p><p><b>The whole-animal layer.</b> Respirometry measures O₂ uptake as the proxy for respiration rate (the frog-in-a-bottle and the gerbil-in-a-chamber school experiments; the aquatic-plant-vs-snail paired bottles that prove they complement each other's gases — the photosynthesis/respiration duality made visible). Fuel mix: a treadmill of metabolism — resting muscle burns mostly fat (low intensity, long duration), sprinting burns glycogen/glucose (rate-limited by glycolysis's speed), and the brain insists on glucose (or ketones in famine). Oxygen debt: after exertion, heavy breathing repays the ETC backlog (lactate → pyruvate → Krebs, plus ATP/creatine resynthesis and elevated temperature/heart-rate costs). The athlete's adaptation: more mitochondria, denser capillaries, more oxidoreductases — a cellular-level upgrade that training literally builds. Ethiopia's runners exploit exactly this: altitude training loads the blood (more EPO → more red cells → more O₂ delivery — the respiratory physiology of the Rift as competitive infrastructure), and high NAD⁺-regenerating pathways sustain the marathon economy.</p>",
  keyTerms: [
    { term: "Link reaction", def: "pyruvate → acetyl-CoA + CO₂" },
    { term: "Krebs cycle", def: "matrix wheel: 2C in, 2CO₂ out, carriers loaded" },
    { term: "Electron transport chain", def: "inner-membrane redox cascade" },
    { term: "Chemiosmosis", def: "ATP from proton gradient" },
    { term: "Final electron acceptor", def: "O₂'s defining job" },
    { term: "Uncoupler", def: "gradient leak → heat, not ATP" },
    { term: "Oxygen debt", def: "post-exercise ETC repayment" },
    { term: "Proton-motive force", def: "stored H⁺ gradient energy" }
  ],
  formulas: [
    { name: "Overall", formula: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~30-32 ATP + heat", meaning: "complete oxidation of food", vars: [{ name: "6O₂ in = 6H₂O out", meaning: "electrons' full fall" }], when: "every aerobic cell" },
    { name: "Carrier cash-in", formula: "NADH ≈ 2.5 ATP; FADH₂ ≈ 1.5", meaning: "ETC pay-rates", vars: [{ name: "10 NADH + 2 FADH₂/glucose", meaning: "oxidative 25-28" }], when: "ledger math" },
    { name: "Water formation", formula: "O₂ + 4e⁻ + 4H⁺ → 2H₂O", meaning: "why breathing is required", vars: [{ name: "complex IV", meaning: "cytochrome oxidase" }], when: "the chain's end" }
  ],
  workedExamples: [
    { problem: "Per glucose, how many CO₂ are exhaled and where from?", calculation: "2 (link reaction) + 4 (Krebs ×2 turns).", answer: "6 — all from decarboxylations before the ETC: the CO₂ you breathe out is literally the carbon skeleton of yesterday's meal." },
    { problem: "Cyanide poisons cytochrome oxidase. Why does blood stay oxygen-rich?", calculation: "Chain blocked → O₂ never consumed at complex IV.", answer: "Cells suffocate in a flood of delivered oxygen: respiration fails at the acceptor step, not the lungs." },
    { problem: "Sprint 400 m then heavy breathing for minutes. What is being repaid?", calculation: "Lactate oxidation, ATP/PCr resynthesis, elevated T and HR costs.", answer: "The oxygen debt: the ETC backlog of the anaerobic minutes, settled aerobically after." },
    { problem: "A student eats 1 g glucose (~16 kJ). Max ATP capture?", calculation: "~30-34% efficiency of oxidation: ~5-6 kJ as ATP.", answer: "About a third of a joule-per-kJ worth of coins: the rest is the heat that keeps a human at 37 °C." }
  ],
  commonMistakes: [
    "Saying 'we breathe in O₂ to make water' without adding that it's the electron chain's END (energy capture, not hydration)",
    "Placing Krebs on the outer membrane (matrix; ETC on inner)",
    "Counting 38 ATP blindly (modern P/O ratios give 30-32)",
    "Thinking plants 'respire only at night' (they respire 24/7; net gas exchange flips with light)",
    "Calling lactate a waste product (it is fuel backlog: heart and liver burn it preferentially after a sprint)"
  ],
  applications: [
    "Altitude training physiology: EPO, red-cell mass and oxygen delivery",
    "Respirometer labs: germinating peas vs dry seeds gas exchange",
    "Brown-fat thermogenesis and neonatal cold care (heat from uncoupling)",
    "Cyanide/CO poisonings read straight from the chain's steps"
  ],
  summary: "Respiration oxidizes food completely: link + Krebs strip carbons to CO₂ and load carriers; the ETC falls electrons to O₂ (making water), and the proton gradient spins ~30 ATP — the coupled mirror of t2 that powers every breath you take.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The Krebs cycle takes place in the:", options: ["cytoplasm", "mitochondrial matrix", "inner membrane only", "nucleus"], answer: 1, difficulty: 1, explanation: "Acetyl-CoA oxidation happens in the matrix." },
    { type: "mcq", q: "Oxygen's role in respiration is to:", options: ["burn glucose directly", "accept low-energy electrons at the chain's end", "carry NADH", "make CO₂"], answer: 1, difficulty: 2, explanation: "Final electron acceptor: water forms there." },
    { type: "mcq", q: "ATP synthase makes ATP using:", options: ["glucose electrons", "the proton gradient", "O₂ directly", "heat"], answer: 1, difficulty: 2, explanation: "Chemiosmosis: the H⁺ current spins the turbine." },
    { type: "mcq", q: "Per glucose, the CO₂ released comes from:", options: ["glycolysis", "link reaction and Krebs", "the ETC", "fermentation only"], answer: 1, difficulty: 2, explanation: "Decarboxylations before the membrane chain." },
    { type: "mcq", q: "Modern total ATP yield per glucose is about:", options: ["2", "18", "30-32", "38 exactly"], answer: 2, difficulty: 3, explanation: "2.5/1.5 P/O ratios replaced the old 38." },
    { type: "mcq", q: "Plants respire:", options: ["only at night", "only in daylight", "continuously, day and night", "never (they photosynthesize)"], answer: 2, difficulty: 1, explanation: "Net gas exchange flips; respiration runs always." },
    { type: "mcq", q: "An uncoupler like DNP causes weight loss but is lethal because:", options: ["it blocks glycolysis", "energy escapes as heat instead of ATP", "it adds O₂", "it kills mitochondria"], answer: 1, difficulty: 3, explanation: "Gradient short-circuit: uncontrolled heat." },
    { type: "mcq", q: "FADH₂ enters the chain at complex II, so it yields:", options: ["more ATP than NADH", "less ATP than NADH", "no ATP", "double NADH"], answer: 1, difficulty: 3, explanation: "It bypasses complex I's proton pumping." }
  ]
};
