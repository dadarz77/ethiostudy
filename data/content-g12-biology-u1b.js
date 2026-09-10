/* Content: Grade 12 Biology — Unit 1 (part B): topics 3-4 */
window.Lessons = window.Lessons || {};

Lessons["g12-biology-ub1-t3"] = {
  overview: "Sustainable development is the contract between this generation's needs and the next generation's options — and biology makes the contract concrete: ecosystem services you can't buy back, planetary boundaries, and the day-to-day habits (energy, water, waste, diet) that aggregate into national trajectories. A conscious citizen is one who can trace a personal footprint to its biochemical source.",
  objectives: [
    "Define sustainable development and the Brundtland standard",
    "Value ecosystem services with economic examples",
    "Read carbon and ecological footprints against biocapacity",
    "Connect SDGs to Ethiopian policy (CRGE, Ten-Development Plan)",
    "Identify citizenship levers: consumption, waste, energy, voice"
  ],
  simple: "<b>Develop without eating the future.</b> Brundtland (1987): meet present needs without compromising future generations' ability to meet theirs. Economics alone can price a forest's timber; biology prices its rain (transpiration recycling), its soil factory, its CO₂ sink, its medicine shelf — services the GDP never counted until someone tried to subtract them. Footprints do the same arithmetic personally: an Ethiopian's average ecological footprint is a fraction of a Westerner's, yet Ethiopia bears climate costs its consumption barely caused — so sustainability is also a fairness conversation.",
  detailed: "<p><b>Ecosystem services, invoice style.</b> Provisioning (food, fibre, fuel, genes), regulating (climate, flood, water purification, pollination, pest control), cultural (tourism, spirituality — the sacred church forests of Tigray and Gonder are community-managed habitat islands), and supporting (nutrient cycling, soil formation). Costings that shake rooms: global pollination services worth tens of billions $/yr; Ethiopia's wetlands' water-filtration value surfacing only when silted-up schemes need engineered replacements at real prices. When the free service fails, the replacement invoice arrives — that asymmetry is conservation economics in one sentence.</p><p><b>Boundaries and footprints.</b> Planetary boundaries (climate, biodiversity loss, nitrogen/phosphorus cycles, land change, freshwater, ...) frame humanity as living off atmospheric and geologic capital. Ecological footprint vs biocapacity: humanity ~1.7 Earths; the USA footprint ≈ 8 global hectares/person vs biocapacity ~1.6; Ethiopia ≈ 0.7 gha vs its own ~0.5 — near subsistence, yet exposed via weather. The fair reading: degrowth conversation for high-footprint nations, development room for low ones, and a shared emergency in between.</p><p><b>Ethiopia's stated strategy: CRGE.</b> Climate-Resilient Green Economy (2011): grow to middle income while staying carbon-low — renewable electricity (geothermal, GERD hydro: >90% clean grid), energy-efficient industry, sustainable agriculture and forests (the Green Legacy millions of seedlings), and transport that electrifies (Ethiopia's first EV and electric-bajaj policies ride on an almost-hydro grid: your charger's emissions are reservoir evaporation). The lesson generalises: a country's menu of mitigation options depends on its grid, not its slogans.</p><p><b>Circular waste habits.</b> Linear economy: take-make-waste. Circular: design out waste, keep materials looping (the informal reclaimers — the qururash and paper collectors — already run Ethiopia's real recycling rate: scrap metal, bottles, paper loops >70% for some streams because poverty pays what policy forgets). Organic waste: composting and biodigesters turn market refuse into biogas (pilot urban digesters) and fertiliser. The classroom version: audit your own trash, weigh the organics, propose the loop — biology graded by scales.</p><p><b>Conscious citizenship is a skill set.</b> Vote with the wallet (diet shifts: less food waste = the single biggest household climate lever), with the meter (grid is clean here; transport is the hot spot), with the ballot and the voice (closures, seedling seasons, watershed works). SDG literacy: 17 goals, but read the trade-offs — bioenergy vs food land, tourism jobs vs habitat — and the synergies — SDG 5 (girls' education) is arguably the strongest population-health-climate multiplier. Sustainability is not a subject; it's the cost column of every other subject.</p>",
  keyTerms: [
    { term: "Sustainable development", def: "needs now without robbing options later" },
    { term: "Ecosystem services", def: "nature's provisioning, regulating, cultural, supporting work" },
    { term: "Ecological footprint", def: "land/water area a lifestyle consumes" },
    { term: "Biocapacity", def: "area's regenerative output" },
    { term: "CRGE", def: "Ethiopia's climate-resilient green economy strategy" },
    { term: "Circular economy", def: "design out waste; keep materials looping" },
    { term: "Trade-off", def: "one SDG gained by costing another" }
  ],
  formulas: [
    { name: "Brundtland test", formula: "present need ∧ future option", meaning: "both clauses or it fails", vars: [], when: "any policy audit" },
    { name: "Overshoot", formula: "footprint > biocapacity", meaning: "capital drawdown", vars: [{ name: "1.7 Earths", meaning: "humanity today" }], when: "national and personal ledgers" },
    { name: "Grid rule", formula: "EV benefit = f(grid carbon)", meaning: "clean grid → electric transport is near-clean", vars: [{ name: "Ethiopia >90% hydro", meaning: "the bajaj arithmetic" }], when: "mitigation choices" }
  ],
  workedExamples: [
    { problem: "A watershed project costs 4 M$ but avoids 90 000 t of sediment that would shorten a dam's life. Compare.", calculation: "Dredging/engineered alternatives rarely priced under tens of $/t; the forest-and-stone-work service was free once established.", answer: "Natural infrastructure pays back where grey replacement would bill twice." },
    { problem: "A household wastes 20% of bought food. Its footprint effect?", calculation: "Wasted food carries ALL upstream inputs — land, water, emissions — for zero nutrition.", answer: "Cutting waste is a pure-efficiency climate lever: ~8-10% of global emissions sit in what nobody eats." },
    { problem: "Ethiopia's per-capita footprint ≈ 0.7 gha; USA ≈ 8. Same climate cost?", calculation: "Emissions and waste scale with footprint, not population.", answer: "Equity frame: the low-footprint country pays the damage the high-footprint consumption caused." },
    { problem: "Green Legacy plants 12 B seedlings. Which biologies decide success?", calculation: "Species-site match, root competition, community protection from grazing, watering through year one.", answer: "Planting is the cheap half; survival is the answer — seedlings are a budget line, forests are an outcome." }
  ],
  commonMistakes: [
    "Sustainability = environmentalism alone (it's the three-column ledger: ecology, economy, equity)",
    "Counting only timber value of ecosystems (services invoices come later)",
    "Assuming EVs are automatically green (the grid decides)",
    "Recycling as the hero while ignoring refuse/reduce order (waste hierarchy)",
    "Treating SDGs as a wish list without trade-offs"
  ],
  applications: [
    "CRGE + GERD: a development leap planned on a clean grid",
    "Qururash and scrap loops: Ethiopia's de-facto circular economy",
    "Sacred church forests: cultural services as habitat insurance",
    "Carbon-farm pilots: paid ecosystem services reaching smallholder bank accounts"
  ],
  summary: "Sustainability is the future's price tag on today's choices: count ecosystem services, respect biocapacity, fix the grid-and-waste big levers, and let trade-offs, not slogans, drive the vote.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The Brundtland definition frames development as:", options: ["maximum growth now", "meeting present needs without compromising future generations", "zero consumption", "industrial only"], answer: 1, difficulty: 1, explanation: "Options preserved across generations." },
    { type: "mcq", q: "Pollination by bees is classed as a:", options: ["provisioning", "regulating", "cultural", "supporting only"] , answer: 1, difficulty: 2, explanation: "Pest/population control service: regulating." },
    { type: "mcq", q: "Humanity's ecological footprint today is roughly:", options: ["0.5 Earths", "1.0 Earth", "1.7 Earths", "4 Earths"], answer: 2, difficulty: 2, explanation: "Overshoot of ~70% since the 1970s." },
    { type: "mcq", q: "Ethiopia's electric bajaj policy pays because:", options: ["batteries are cheap", "the grid is overwhelmingly hydro/geothermal", "oil is local", "it is fast"], answer: 1, difficulty: 2, explanation: "Clean grid → electric transport cuts emissions at the socket." },
    { type: "mcq", q: "The waste hierarchy ranks first:", options: ["recycle", "energy from waste", "refuse/reduce", "landfill"], answer: 2, difficulty: 1, explanation: "Prevention beats processing." },
    { type: "mcq", q: "A household's biggest food-climate lever is:", options: ["buying local always", "cutting food waste", "glass jars", "slow cooking"], answer: 1, difficulty: 3, explanation: "Wasted food wastes all its upstream footprint at zero benefit." },
    { type: "mcq", q: "Church forests mainly demonstrate:", options: ["cultural services protecting biodiversity", "timber plantations", "mining bans", "irrigation works"], answer: 0, difficulty: 3, explanation: "Faith-managed habitat islands: culture as conservation mechanism." },
    { type: "mcq", q: "A genuine SDG trade-off pair is:", options: ["health + education", "bioenergy crops + food land", "water + sanitation", "cities + industry"], answer: 1, difficulty: 3, explanation: "Land competition between SDG 2 and SDG 7/13 pathways." }
  ]
};

Lessons["g12-biology-ub1-t4"] = {
  overview: "Biotechnology is the oldest Ethiopian industry (injera fermentation, tej, geda honey-wine, traditional medicines) wearing new lab coat: using living systems — microbes, enzymes, cells, genes — to make or improve products. This topic separates the tools (fermentation, tissue culture, genetic engineering, PCR, CRISPR) from the controversies (GMO regulation, biosafety, access) and plants them in Ethiopian ground.",
  objectives: [
    "Define biotechnology across traditional and modern eras",
    "Explain fermentation production (beer, dairy, bread, teff injera)",
    "Describe recombinant DNA: cut-paste-express, with insulin the classic",
    "Summarise PCR, gel electrophoresis and gene editing (CRISPR)",
    "Assess Ethiopian applications: tissue culture banana, teff genomics, biosafety law"
  ],
  simple: "<b>Living machines, old and new.</b> Traditional biotech = letting microbes work for free: injera's rise is wild Saccharomyces + LAB fermentation of ergo; tej is honey-wine; yoghurt (ergo) is cultured milk. Modern biotech takes the workbench: cut a gene with restriction enzymes, paste into a plasmid, insert into E. coli or yeast, and the microbe now manufactures the human product — bacterial insulin since 1982, the proof that 'transgene = medicine'. Toolbox: PCR copies DNA by primers and heat-cycling Taq; gel electrophoresis sorts DNA by size; Agrobacterium is nature's own gene gun for plants; CRISPR edits in place with a guide RNA. Ethiopia's wins read everyday: tissue-culture multiplied bananas and coffee at scale, and teff's genome is open for breeding.",
  detailed: "<p><b>Fermentation: the industrial microbial kitchen.</b> Anaerobic sugar catabolism where the product depends on the microbe's enzymes: yeast → ethanol + CO₂ (beer, tej; bread's gas pockets; injera's eyes come from CO₂ by composite LAB-yeast communities of ergo flour), LAB → lactic acid (ergo yoghurt's sourness, teff batter acidity that defines injera's taste and keeps pathogens out — pH as preservation, the same science behind kibe-style culturing), acetic → vinegar; moulds (Aspergillus oryzae in Asian fermentation; Penicillium roqueforti in cheese). Fed-batch, sterile air and pH control converted village craft to pharmaceuticals: citric acid, enzymes, antibiotics, vaccines grown in cell culture — Unit 2's microbes on the payroll.</p><p><b>Recombinant DNA in three moves.</b> 1) CUT: restriction endonucleases read palindromes and leave sticky ends (EcoRI: G^AATTC). 2) PASTE: DNA ligase joins a human gene into a plasmid with an antibiotic marker and promoter. 3) EXPRESS: transform E. coli; select on ampicillin plates; the bacteria read the human promoter... (bacteria cannot splice introns, so the intronless cDNA route is used) and churn protein; purify. Insulin (two chains separately made then assembled), hepatitis B vaccine in yeast, chymosin rennet for cheese: products whose DNA label says 'manufactured by genetically modified microorganisms'.</p><p><b>Reading and writing genomes.</b> PCR: denature 95 °C, anneal primers ~55 °C, extend 72 °C Taq, exponential doubling (~2³⁰ after 30 cycles = a billion copies) — diagnostics (the SARS-CoA-2 tests), forensics, ancient DNA. Gel electrophoresis: phosphate backbone negative → DNA runs to the anode, smaller faster; bands + ladder = sizing; Southern/Northern/Western blotting add probe specificity. CRISPR-Cas9: guide RNA base-pairs to a target; Cas9 cuts; the cell's repair errors (NHEJ) knock a gene out, or a supplied template edits it in — cheap, precise, and the reason gene-edited crops may escape GMO regulation in some countries while Ethiopia's Proclamation 800/2013 (biosafety) reviews living modified organisms case by case.</p><p><b>Plant tissue culture and Ethiopia.</b> Totipotency: one meristem or leaf chip on MS medium + auxin/cytokinin balance → callus → shoot → plantlet, all aseptic. Micropropagation delivered virus-free seed potatoes, banana plantations (large-scale tissue-culture banana farms supplying export and local markets), coffee somaclonal variants, and the teff genome project (2020: TFI-1 genome published: drought and lodging genes now findable) plus marker-assisted selection already releasing improved varieties (durum wheats, high-yield teffs) — genomics shortening breeding from 15 years toward 5. And the Human Genome Project echo: Ethiopian biodiscovery from traditional medicines (the antimalarial and antimicrobial plant screens) sits in the same biotech pipeline.</p><p><b>The consent column.</b> Modern biotech's questions are values questions wearing lab coats: label GMOs? Who owns seed (the teff genome is open-access data by decision — a counter-model to patent thickets)? Can gene drives that delete malaria vectors cross borders without neighbour consent? Cartegena Protocol and national biosafety laws exist because the risks, unlike a lab result, don't stay in the flask. A literate citizen can name the mechanism, the product, the risk, and the decision-maker — that is Unit 1's conscious citizenship at the bench.</p>",
  keyTerms: [
    { term: "Biotechnology", def: "living systems used in products" },
    { term: "Fermentation", def: "anaerobic microbial product formation" },
    { term: "Recombinant DNA", def: "gene moved into new host on a vector" },
    { term: "Restriction enzyme", def: "molecular scissors at specific sites" },
    { term: "PCR", def: "primed exponential DNA copying" },
    { term: "Totipotency", def: "one cell can rebuild a whole plant" },
    { term: "CRISPR", def: "guide-RNA-targeted Cas edit" },
    { term: "LMO", def: "living modified organism under biosafety law" }
  ],
  formulas: [
    { name: "PCR growth", formula: "copies ≈ 2ⁿ after n cycles", meaning: "30 cycles = a billion-fold", vars: [{ name: "n", meaning: "cycle count" }], when: "diagnostics" },
    { name: "Alcoholic fermentation", formula: "C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂", meaning: "yeast's anaerobic ledger", vars: [{ name: "CO₂", meaning: "bread and injera eyes" }], when: "beer, tej, baking" },
    { name: "Lactic fermentation", formula: "C₆H₁₂O₆ → 2 lactate + energy", meaning: "LAB souring and preserving", vars: [{ name: "pH drop", meaning: "pathogen guard" }], when: "ergo, injera batter" }
  ],
  workedExamples: [
    { problem: "Why is human insulin made from cDNA, not genomic DNA, in bacteria?", calculation: "Genes have introns bacteria can't splice out; reverse-transcribed cDNA = continuous coding.", answer: "The host's molecular machinery sets the vector design." },
    { problem: "A PCR runs 35 cycles. Fold-amplification?", calculation: "2³⁵ ≈ 3.4×10¹⁰.", answer: "Tens of billions: one drop of blood to a visible gel band." },
    { problem: "Injera's eyes form but tej ferments alcohol. Same yeast logic?", calculation: "CO₂ from sugar fermentation trapped in batter = pockets; ethanol stays in tej's liquid.", answer: "One pathway, two products kept or released by matrix." },
    { problem: "Tissue culture banana beats suckers: which risks removed?", calculation: "Meristem culture + thermotherapy clears viruses; aseptic = pathogen-free starting stock.", answer: "Clean planting material multiplies 10⁴×: disease starts at zero." }
  ],
  commonMistakes: [
    "Confining biotech to labs (injera and tej are the same discipline in clay pots)",
    "Saying GM bacteria 'make human DNA' (they make the human PROTEIN from inserted cDNA)",
    "Thinking PCR needs living cells (it needs only polymerase and primers)",
    "Restriction enzymes 'eating' DNA randomly (they cut specific palindromes)",
    "Biosafety = anti-innovation (Proclamation 800/2013 is the review channel that lets use proceed with consent)"
  ],
  applications: [
    "Ergo, injera, tej, tella: fermentation heritage as living industry",
    "Tissue-culture banana and coffee: multiplying clean planting stock",
    "Teff genome: breeding faster for the national cereal",
    "Biosafety Proclamation 800/2013: Ethiopia's LMO review process"
  ],
  summary: "Biotech = biology employed: ferment (microbial kitchens), recombine (cut-paste-express), amplify and read (PCR, gels, CRISPR), multiply (tissue culture) — each with a consent column when organisms leave the flask.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Injera's spongy eyes come from:", options: ["baking powder", "CO₂ from fermentation", "steam injection", "egg whites"], answer: 1, difficulty: 1, explanation: "Yeast/LAB CO₂ trapped in the batter." },
    { type: "mcq", q: "Restriction enzymes are used because they:", options: ["copy DNA", "cut at specific sequences", "join genes", "detect proteins"], answer: 1, difficulty: 1, explanation: "Sticky ends at known sites enable paste-able fragments." },
    { type: "mcq", q: "PCR requires all EXCEPT:", options: ["primers", "Taq polymerase", "living cells", "template DNA"], answer: 2, difficulty: 2, explanation: "Cell-free chemistry: enzyme + primers + nucleotides." },
    { type: "mcq", q: "Bacterial insulin uses cDNA because bacteria:", options: ["can't read promoters", "cannot splice introns", "lack ribosomes", "can't grow"], answer: 1, difficulty: 3, explanation: "Intronless coding sequence survives the host's lack of splicing." },
    { type: "mcq", q: "Tissue culture multiplies plants because cells are:", options: ["cheap", "totipotent", "haploid", "transgenic"], answer: 1, difficulty: 2, explanation: "One cell can regenerate a whole plantlet." },
    { type: "mcq", q: "CRISPR's targeting agent is:", options: ["a protein enzyme only", "a guide RNA to the target sequence", "UV light", "an antibody"], answer: 1, difficulty: 2, explanation: "Cas9 is the scissors; the gRNA aims them." },
    { type: "mcq", q: "Ergo's sour taste is chiefly:", options: ["acetic acid", "lactic acid", "citric acid", "HCl"], answer: 1, difficulty: 2, explanation: "LAB convert lactose to lactate." },
    { type: "mcq", q: "Ethiopia's biotech governance (Proclamation 800/2013) covers:", options: ["patents only", "living modified organisms under biosafety review", "export tariffs", "labelled price controls"], answer: 1, difficulty: 3, explanation: "LMO handling, release and import require assessment." }
  ]
};
