/* Content: Grade 9 Biology — Unit 6: Ecology (2 topics) */
window.Lessons = window.Lessons || {};

Lessons["g9-biology-ub6-t1"] = {
  overview: "Ecology studies who lives with whom, and how they depend on each other. From a single organism to the biosphere, Grade 9 maps life's levels of organization and the interaction web — predation, competition, symbiosis — that holds ecosystems together.",
  objectives: [
    "Order the levels: organism → population → community → ecosystem → biome → biosphere",
    "Define habitat, niche and ecosystem with examples",
    "Construct and interpret food chains and food webs",
    "Identify producers, consumers and decomposers by trophic role",
    "Classify population interactions (predation, competition, parasitism, mutualism, commensalism)"
  ],
  simple: "Nature is organized in Russian dolls: <b>organism</b> → <b>population</b> (same species, one area) → <b>community</b> (all populations there) → <b>ecosystem</b> (community + its non-living environment). <b>Food chains</b> show who eats whom: grass → zebu → lion; plants are <b>producers</b>, eaters are <b>consumers</b>, fungi/bacteria are <b>decomposers</b>. Real feeding is a tangled <b>web</b>. Species interact: <b>predation</b> (+/−), <b>competition</b> (−/−), <b>parasitism</b> (+/−, tenant lives ON the host), <b>mutualism</b> (+/+ — flower & bee), <b>commensalism</b> (+/0 — cattle egret eating stirred-up insects).",
  detailed: "<p><b>Levels of organization:</b> an <b>organism</b> is one individual; a <b>population</b> is all individuals of one species in an area (all tilapia in Lake Tana); a <b>community</b> is every population interacting there (tilapia, hippos, reeds, microbes); an <b>ecosystem</b> adds the <b>abiotic</b> factors — light, temperature, water, soil, salts — to the biotic community. Ecosystems range from a rotting log to a lake to the rainforest; similar ecosystems across a climate zone form a <b>biome</b> (grassland, desert, tropical rainforest, the Ethiopian afroalpine moorland); all biomes together = the <b>biosphere</b>. <b>Habitat</b> = the organism's address; <b>niche</b> = its profession — how it feeds, reproduces and fits the web; two species cannot hold identical niches indefinitely (competition excludes one).</p><p><b>Energetic roles:</b> <b>producers</b> (autotrophs — plants, algae, cyanobacteria) fix solar energy by photosynthesis; <b>consumers</b> eat others — herbivores (primary), carnivores (secondary/tertiary), omnivores flexibly; <b>decomposers</b> (bacteria and fungi) break dead matter externally and absorb it, releasing minerals back for producers — without them, nutrients lock permanently in corpses and litter. Detritivores (earthworms, termites) shred material to help them along.</p><p><b>Food chains</b> draw energy flow with arrows that mean 'is eaten by / energy flows to': grass → grasshopper → frog → snake → hawk. <b>Trophic levels</b> number the steps (producers = level 1). Real ecosystems are <b>food webs</b> — interlocked chains — which is why losing one species ripples: remove snakes and rats boom, then crops suffer; the web's redundancy stabilizes the system.</p><p><b>Population interactions</b> (signs = effect on each partner): <b>predation</b> +/− (lion/zebra — drives population control and co-evolved defenses like zebra stripes); <b>competition</b> −/− (plants crowding for light; hyena vs lion over carcasses — same niche intensifies it); <b>parasitism</b> +/− with the parasite living on/in the host and rarely killing it fast (tapeworm, Plasmodium, dodder plant); <b>mutualism</b> +/+ obligatory or optional (legume roots + nitrogen-fixing bacteria — an Ethiopian soil-fertility partnership; coral + algae; gut flora + us); <b>commensalism</b> +/0 (epiphyte orchids on branches for height, egrets with cattle). <b>Amensalism</b> (−/0) also exists (shade killing small plants).</p><p><b>Population size</b> is governed by birth + immigration vs death + emigration. In abundant resources, growth accelerates in an exponential (J) curve; the environment's <b>carrying capacity</b> bends it to a logistic S-curve as food, space, water and light become <b>density-dependent limiting factors</b> — disease and competition worsen with crowding — while drought, fire and frost act <b>density-independently</b>. Predator–prey populations oscillate with a lag: prey up → predators up → prey down → predators crash — classic lynx/hare cycles, or locust boom-and-collapse.</p><p>Field ecology in practice: <b>quadrat</b> sampling counts organisms in fixed frames to estimate population size (mean per quadrat × total area ÷ quadrat area), and <b>transects</b> chart distribution across an environmental gradient (lake shore to dryland). Careful sampling — random placement, enough quadrats — turns ecology from anecdote into data.</p>",
  keyTerms: [
    { term: "Population / community / ecosystem", def: "Same-species group / all interacting groups / community + abiotic environment" },
    { term: "Habitat vs niche", def: "Where it lives vs its total role and way of life" },
    { term: "Trophic level", def: "Position in the food chain (producers = 1)" },
    { term: "Decomposer", def: "Absorptive fungus/bacteria recycling dead matter and minerals" },
    { term: "Symbiosis", def: "Close long-term association: parasitism, mutualism, commensalism" },
    { term: "Carrying capacity", def: "Max population an environment can sustain" },
    { term: "Limiting factor", def: "Resource/condition that caps growth when scarce" }
  ],
  formulas: [
    {
      name: "Population estimate from quadrats",
      formula: "population ≈ mean organisms per quadrat × (total area ÷ quadrat area)",
      meaning: "Scale up small-sample averages across the habitat",
      when: "Field surveys of plants, slow insects, intertidal life"
    }
  ],
  workedExamples: [
    {
      problem: "Build the chain: hawk, grass, snake, grasshopper, frog.",
      answer: "grass → grasshopper → frog → snake → hawk (five trophic levels; the hawk is the quaternary consumer)"
    },
    {
      problem: "10 quadrats (1 m² each) in a 200 m² field average 6 dandelions each. Estimate the population.",
      calculation: "6 × (200 ÷ 1)",
      answer: "≈1,200 dandelions"
    },
    {
      problem: "Farmers spray and eliminate snakes from grain fields. Predict the two-step ripple.",
      answer: "rodent populations explode (predator removed) → grain losses and rat-borne disease rise; then pesticides accumulate in remaining predators' prey"
    },
    {
      problem: "Classify: (a) tick on a dog, (b) bee visiting flowers, (c) two grass species crowding for light, (d) remora fish riding a shark.",
      answer: "(a) parasitism +/−, (b) mutualism +/+, (c) competition −/−, (d) commensalism +/0"
    }
  ],
  commonMistakes: [
    "Drawing arrows backwards — the arrow points where ENERGY GOES (prey → predator)",
    "Calling vultures decomposers (they're scavenger consumers; true decomposers absorb chemically)",
    "Mixing habitat and niche",
    "Assuming populations grow forever — carrying capacity always bites",
    "Equating symbiosis with mutualism only (it's the umbrella for +/+, +/−, +/0)",
    "Counting one food chain as the whole ecosystem's flow — webs, not lines"
  ],
  applications: [
    "Lake Tana & Rift Valley lakes: source protection and sustainable fishing are applied population ecology",
    "Locust forecasting: understanding boom-bust cycles guides early warning and control",
    "Agroecology: intercropping legumes with cereals uses mutualism to cut fertilizer need",
    "Conservation: keystone-species and food-web thinking designs protected areas",
    "Invasive species (water hyacinth, Parthenium): escaped competition/regulation = ecosystem collapse — biocontrol answers it"
  ],
  summary: "Life organizes organism → population → community → ecosystem → biome → biosphere; each species has an address (habitat) and a job (niche). Producers capture energy that flows through consumers and returns via decomposers along food webs. Interactions — predation, competition, parasitism, mutualism, commensalism — shape populations against carrying capacity, and quadrat/transect sampling measures it all.",
  visuals: [],
  questions: [
    { type: "mcq", q: "All populations of different species living together in an area form a:", options: ["population", "community", "biome", "habitat"], answer: 1, difficulty: 1, explanation: "Community = the living cast; ecosystem adds the non-living stage." },
    { type: "mcq", q: "In 'grass → zebra → lion', the zebra is a:", options: ["producer", "primary consumer", "secondary consumer", "decomposer"], answer: 1, difficulty: 1, explanation: "Herbivore = level-2 organism, primary consumer." },
    { type: "mcq", q: "The arrow in a food chain represents:", options: ["which organism eats the other", "the direction of energy flow", "population size", "water movement"], answer: 1, difficulty: 2, explanation: "It points from the eaten to the eater — energy's path." },
    { type: "mcq", q: "Two species where one benefits and the other is harmed while living ON/IN it:", options: ["mutualism", "commensalism", "parasitism", "predation"], answer: 2, difficulty: 2, explanation: "Parasite on host; predation kills quickly, parasitism usually doesn't." },
    { type: "mcq", q: "Legumes + Rhizobium bacteria is:", options: ["competition", "mutualism", "parasitism", "commensalism"], answer: 1, difficulty: 2, explanation: "Plant feeds bacteria; bacteria fix nitrogen for the plant." },
    { type: "mcq", q: "The FINAL stop for all energy leaving a food web is loss as:", options: ["glucose", "heat", "protein", "oxygen"], answer: 1, difficulty: 3, explanation: "Each transfer leaks heat; energy flows through, never cycles back." },
    { type: "mcq", q: "Recycling minerals from dead organisms is the job of:", options: ["herbivores", "decomposers", "predators", "producers"], answer: 1, difficulty: 1, explanation: "Fungi and bacteria unlock nutrients from remains." },
    { type: "mcq", q: "A population grows logistically because:", options: ["births always increase", "limiting factors curb growth near carrying capacity", "predators disappear", "immigration stops"], answer: 1, difficulty: 2, explanation: "Resources and space set the ceiling." },
    { type: "mcq", q: "Quadrat sampling is best used to count:", options: ["migrating birds", "plants or slow-moving organisms in a fixed area", "lake fish", "air microbes"], answer: 1, difficulty: 2, explanation: "Frame + count + scale — impractical for mobile animals." },
    { type: "mcq", q: "The 'profession' of an organism — its role and resource use — is its:", options: ["habitat", "biome", "niche", "trophic level"], answer: 2, difficulty: 2, explanation: "Niche = way of life; habitat = where it lives." }
  ]
};

Lessons["g9-biology-ub6-t2"] = {
  overview: "Energy flows one way through ecosystems while matter cycles forever. This topic follows the 10% trickle up trophic levels and the great loops — water, carbon, nitrogen — that recycle every atom life uses.",
  objectives: [
    "State the one-way flow of energy and the ~10% transfer rule",
    "Build upright pyramids of numbers, biomass and energy",
    "Explain the water cycle's main stages",
    "Trace carbon through photosynthesis, respiration, feeding and fossil stores",
    "Describe nitrogen fixation and the role of bacteria in the nitrogen cycle"
  ],
  simple: "Sunlight energy enters via producers and <b>flows through, never back</b> — each trophic level keeps only about <b>10%</b>, losing the rest as heat, so chains rarely exceed 4–5 levels (why tigers are rare and chicken cheaper than beef). <b>Pyramids</b> draw this: biomass shrinks upward. But <b>matter cycles</b>: water evaporates → condenses → precipitates; carbon loops photosynthesis ⇄ respiration (+ long-term stores: fossil fuels, oceans); nitrogen — 78% of air yet unusable until <b>nitrogen-fixing bacteria</b> (Rhizobium in legume roots, free-living Azotobacter, lightning) convert it into plant-usable nitrates, then decomposers, nitrifiers and denitrifiers keep it circulating.",
  detailed: "<p><b>Energy flow:</b> producers capture ~1–2% of incident sunlight as chemical energy (gross primary production); the rest is reflected, transmitted or lost as heat. A consumer ingests plant material but loses much to feces and respiration — net growth transfers only about <b>10%</b> to the next level (Lindemann's rough rule; real figures 5–20%). Because heat disperses irreversibly, energy <b>flows</b> linearly and must be constantly topped up by the sun — unlike matter, which is reused. Consequences: fewer individuals and less biomass at each level; top carnivores need huge territories; eating lower on the chain feeds more people per hectare (grain → human beats grain → cattle → human by roughly an order of magnitude).</p><p><b>Pyramids:</b> <b>numbers</b> (count per level — sometimes inverted: one tree hosts thousands of insects), <b>biomass</b> (dry mass per level — usually upright; temporarily inverted in some aquatic systems where phytoplankton reproduce faster than grazers consume them), <b>energy</b> (kJ m⁻² yr⁻¹ — ALWAYS upright; each level is ~10% of the one below). Energy pyramids are the honest one.</p><p><b>Water cycle:</b> evaporation from open water + <b>transpiration</b> from leaves (evapotranspiration) → condensation into clouds → precipitation → runoff and groundwater flow back. Solar energy and gravity power it; vegetation slows runoff, prevents erosion and recharges soils — one reason deforestation dries local climates (Ethiopian highland eroded gullies after forest loss).</p><p><b>Carbon cycle:</b> CO₂ enters the food web by <b>photosynthesis</b> (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂) and leaves by <b>respiration</b> everywhere — plants, animals, decomposers. Feeding passes carbon along chains; decomposition releases most of the rest. Some carbon escapes the fast loop: buried peat, marine shells becoming limestone, fossilized forests and oceans' dissolved CO₂. Burning fossil fuels and deforestation dump ancient carbon back faster than sinks absorb it — rising atmospheric CO₂, enhanced greenhouse effect, climate change: an ecology lesson with today's headlines.</p><p><b>Nitrogen cycle:</b> the atmosphere is 78% N₂ but plants can only absorb <b>nitrates</b> (and some ammonium). Entry routes: <b>nitrogen fixation</b> by bacteria — <i>Rhizobium</i> in legume root nodules (mutualism from the previous topic: sugars for ammonia), free-living <i>Azotobacter</i> and cyanobacteria in rice paddies, plus industrial fertilizer synthesis and lightning; <b>nitrification</b> — decomposers turn proteins/urea into ammonium, then nitrifying bacteria oxidize it to nitrites then nitrates; plants build proteins and nucleic acids; animals eat the plants; <b>excretion and death</b> return nitrogen for decomposition again; and <b>denitrifying bacteria</b> in waterlogged soils close the loop by reducing nitrates back to N₂ gas. Farmers rotate cereals with legumes (faba, lupin, chickpea) precisely to refill soil nitrate for free.</p><p>Compare the two great patterns: <b>energy flows</b> — enters as light, exits as heat, needs constant solar input; <b>matter cycles</b> — atoms of water, carbon and nitrogen are borrowed, never consumed. Life is the engine that keeps both running: photosynthesis and respiration are each other's mirror; bacteria move every nitrogen atom that plants can hold. A disturbed cycle (drained wetlands, burned forests, over-fertilization washing nitrate into lakes — eutrophication) shows how tightly chemistry and ecology interlock.</p>",
  keyTerms: [
    { term: "Trophic level", def: "Energy-transfer step: producer, primary/secondary consumer…" },
    { term: "10% rule", def: "Roughly one tenth of energy passes to the next level" },
    { term: "Pyramid of energy", def: "Upright diagram of energy per area per year at each level" },
    { term: "Evapotranspiration", def: "Combined surface evaporation and plant transpiration" },
    { term: "Nitrogen fixation", def: "Converting N₂ gas into ammonium/nitrates bacteria-plants can use" },
    { term: "Nitrification / denitrification", def: "Ammonium → nitrite → nitrate / nitrate → N₂ gas" },
    { term: "Carbon sink", def: "Long-term reservoir — forest, peat, ocean, fossil deposits" },
    { term: "Eutrophication", def: "Nutrate/phosphate runoff → algae bloom → oxygen collapse" }
  ],
  formulas: [
    {
      name: "Photosynthesis / respiration (carbon's two directions)",
      formula: "6CO₂ + 6H₂O →(light) C₆H₁₂O₆ + 6O₂  |  reverse: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy",
      meaning: "Carbon enters food as sugar and returns to air as CO₂",
      when: "The carbon loop's two engine reactions"
    },
    {
      name: "Trophic transfer efficiency",
      formula: "efficiency ≈ (energy at level n ÷ energy at level n−1) × 100%",
      meaning: "Typically around 10% — chains cap near 4–5 levels",
      when: "Comparing energy pyramids"
    }
  ],
  workedExamples: [
    {
      problem: "Producers fix 20,000 kJ m⁻² yr⁻¹. Estimate the energy available to tertiary consumers.",
      calculation: "20,000 × 0.1 × 0.1 × 0.1 (producers→1°→2°→3° consumers = 3 transfers)",
      answer: "≈20 kJ m⁻² yr⁻¹"
    },
    {
      problem: "Why do food chains rarely exceed five levels?",
      answer: "90% loss per transfer starves any level beyond four or five"
    },
    {
      problem: "A field planted with faba beans after maize needs less fertilizer. Explain the biology.",
      answer: "Rhizobium nodules fixed atmospheric N₂ into soil nitrates after the legume residue decomposed"
    },
    {
      problem: "Farm runoff rich in nitrate reaches a lake and fish die. Chain the events.",
      answer: "nitrate feeds algae bloom → algae shade plants, then die → decomposer population booms → respiration depletes oxygen → fish suffocate (eutrophication)"
    }
  ],
  commonMistakes: [
    "Saying energy 'cycles' — it flows through and out as heat; only matter cycles",
    "Drawing an inverted energy pyramid (numbers can invert; energy never does)",
    "Believing plants get their mass from soil (it's mostly CO₂ fixed via photosynthesis)",
    "Thinking plants 'eat' nitrogen gas directly — only fixed forms are absorbable",
    "Confusing denitrification (loss to air) with nitrification (making nitrates)",
    "Naming lightning the main natural fixer — bacteria fix far more"
  ],
  applications: [
    "Crop rotation & intercropping (teff + pulses): the 10% rule and nitrogen cycle write Ethiopia's fertility playbook",
    "Diet & land use: plant-forward food chains sustain far more people per hectare than beef chains",
    "Climate policy: carbon-sink protection (forests, peat) and emissions cuts target the disturbed loop",
    "Irrigation & watershed management: transpiration and runoff science underpin schemes from the highlands",
    "Wastewater & fish-farm design: nitrification/denitrification bacteria clean the water"
  ],
  summary: "Energy enters as light and flows one way — ~10% per trophic level — building always-upright energy pyramids and short food chains; matter never disappears, it cycles: water through evapotranspiration and rain, carbon between photosynthesis and respiration (with fossil sinks now leaking back), and nitrogen through fixation, nitrification, feeding, decomposition and denitrification — mostly by bacteria.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Energy transferred to the next trophic level is typically about:", options: ["1%", "10%", "50%", "90%"], answer: 1, difficulty: 1, explanation: "Roughly a tenth; the rest is lost to respiration/heat and waste." },
    { type: "mcq", q: "Which pyramid can be inverted?", options: ["energy", "of numbers", "biomass of a forest", "none"], answer: 1, difficulty: 2, explanation: "One tree can host thousands of consumers by number." },
    { type: "mcq", q: "Carbon leaves the atmosphere into living matter via:", options: ["respiration", "combustion", "photosynthesis", "denitrification"], answer: 2, difficulty: 1, explanation: "The carbon-fixing reaction of producers." },
    { type: "mcq", q: "N₂ becomes plant-available mainly through:", options: ["rain", "nitrogen-fixing bacteria", "sunlight", "grazing"], answer: 1, difficulty: 1, explanation: "Rhizobium, Azotobacter, cyanobacteria — lightning is minor." },
    { type: "mcq", q: "Transpiration is water loss from:", options: ["soil surface", "plant leaves", "lakes", "animal skin"], answer: 1, difficulty: 1, explanation: "Evaporation from leaf surfaces via stomata." },
    { type: "mcq", q: "A decomposer in the nitrogen cycle converts proteins into:", options: ["nitrates directly", "ammonium", "N₂ gas", "glucose"], answer: 1, difficulty: 3, explanation: "Ammonification first; nitrifying bacteria take it onward." },
    { type: "mcq", q: "The reason top carnivores are rare and vulnerable is:", options: ["they hunt too much", "energy loss per level leaves little for them", "they reproduce fast", "they are decomposers"], answer: 1, difficulty: 2, explanation: "Each level ~10% smaller — apex predators need large territories." },
    { type: "mcq", q: "Eutrophication of a lake begins with excess:", options: ["oxygen", "nitrate/phosphate nutrients", "salt", "acid rain"], answer: 1, difficulty: 2, explanation: "Nutrient influx → algal bloom → oxygen crash." },
    { type: "mcq", q: "Burning fossil fuels disturbs the carbon cycle because it:", options: ["creates CO₂ from scratch", "returns ancient stored carbon to air faster than sinks absorb it", "stops photosynthesis", "removes ocean carbon"], answer: 1, difficulty: 3, explanation: "The fossil loop's one-way door forced open." },
    { type: "mcq", q: "Denitrifying bacteria act in waterlogged soils to:", options: ["add nitrate", "convert nitrates to N₂ gas", "fix nitrogen", "produce oxygen"], answer: 1, difficulty: 2, explanation: "Closing the nitrogen loop — at a cost to farmers." }
  ]
};
