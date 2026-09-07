/* ============================================================
   Content: Grade 10 Biology — Unit 6: Ecology
   3 topics. Rich format + 3 visuals per lesson.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- b6-1: Ecosystems --- */
Lessons["g10-biology-ub6-t1"] = {
  overview: "An ecosystem is a neighbourhood of living things AND their physical world, wired together by energy flow and material cycling. From a coffee forest to Lake Tana to your school compound — every ecosystem has the same architecture: producers capture energy, consumers pass it along, decomposers close the loop, and the food chain/web is the wiring diagram.",
  objectives: [
    "Define ecosystem, community, population, habitat, niche with examples",
    "Distinguish biotic and abiotic components",
    "Construct and interpret food chains, webs and trophic levels",
    "Explain energy flow: 10% rule, pyramids of number/energy",
    "Describe the roles of producers, consumers, decomposers"
  ],
  simple: "LEVELS OF ORGANISATION: organism → population (same species, one area — all tilapia in a pond) → community (all populations together — fish + plants + microbes) → ECOSYSTEM (community + its physical world: water, light, soil, temperature) → biome → biosphere. Two halves: BIOTIC (living: bacteria to trees) and ABIOTIC (non-living: sunlight, water, temperature, soil pH, wind — the rules the game is played under). FOOD CHAIN = who-eats-whom line: grass → grasshopper → frog → snake → hawk. Each step = a TROPHIC LEVEL: producers (photosynthesise — the ONLY entrance for energy), primary consumers (herbivores), secondary (carnivores), tertiary (top predators). Decomposers (bacteria/fungi) = nature's recyclers — digest the dead and waste, return minerals to soil. Real ecosystems are FOOD WEBS (chains tangled — most animals eat many things). ENERGY: flows ONE WAY (sun → ... → heat, never recycled) and shrinks ~90% per level (10% rule) — that's why food chains rarely exceed 4-5 links and hawks are rarer than grasshoppers.",
  detailed: `<p><b>Niche vs habitat:</b> Habitat = the address (where); NICHE = the profession (how it earns a living: food, timing, space, interactions). Two species can share a habitat but not indefinitely share a niche (competitive exclusion — topic 2). The Ethiopian wolf's habitat = Afroalpine moorland; its niche = rodent specialist hunting open ground at dawn.</p>
<p><b>Abiotic drivers:</b> Light (intensity/day-length gate photosynthesis — shade plants vs sun plants), temperature (enzyme limits — why highland vs lowland species differ), water (the master variable in Ethiopia: 200 mm desert vs 2000 mm southwest), soil (pH, minerals, texture — controls agriculture), wind, fire, salinity. Each species has a RANGE of tolerance; outside it → absent or stressed.</p>
<p><b>Feeding levels:</b> Producers (autotrophs): photosynthesis (green plants, algae, cyanobacteria) or chemosynthesis (deep-sea vents). Consumers (heterotrophs): primary/herbivores (teff → cattle), secondary (grasshopper-eating frogs), tertiary (snake-eating eagles), omnivores slot anywhere (humans). Detritivores (earthworms, woodlice) shred dead matter; DECOMPOSERS (bacteria/fungi) finish chemically — without them nutrients stay locked in corpses and production stops within seasons. Saprotrophic nutrition: fungi secrete enzymes externally, absorb digested soup.</p>
<p><b>Energy math:</b> Sunlight hitting producers: ~1-2% fixed. Each transfer: ~10% becomes new biomass; the rest lost to respiration, movement, heat, undigested matter (faeces). Example: 10,000 kJ grass → 1,000 kJ grasshoppers → 100 kJ frogs → 10 kJ snakes → 1 kJ hawk. Consequences: pyramids (producers wide base, top narrow), short food chains, big predators need huge territories, and eating lower on the chain feeds more people (grain vs beef economics).</p>
<p><b>Pyramids:</b> NUMBER (individuals per level — can invert: one acacia tree hosts thousands of insects), BIOMASS (dry mass — usually upright; inverted in pond systems where phytoplankton reproduce faster than grazers consume), ENERGY (ALWAYS upright — thermodynamics guarantees each level has less). Only the energy pyramid explains why a single tree can support a forest of consumers.</p>
<p><b>Webs & stability:</b> Food webs (chains interlinked) = reality. More links → more stability: lose one prey, a generalist switches; a specialist starves. Toxins concentrate UP the web (bioaccumulation → biomagnification: DDT, mercury — top predators worst hit). Keystone species: removal collapses the web (predators controlling herbivores; pollinators; elephants shaping savanna).</p>`,
  keyTerms: [
    { term: "Ecosystem", def: "Community + abiotic environment interacting." },
    { term: "Population / community", def: "One species' group / all species' groups in an area." },
    { term: "Habitat / niche", def: "Address / profession of a species." },
    { term: "Biotic / abiotic", def: "Living / non-living components." },
    { term: "Producer / consumer / decomposer", def: "Makes food from light / eats others / digests dead matter." },
    { term: "Trophic level", def: "Feeding position in the chain." },
    { term: "Food chain / web", def: "Linear who-eats-whom / tangled real network." },
    { term: "10% rule", def: "~10% energy passes per level; rest lost as heat." },
    { term: "Pyramid of energy", def: "Upright always — energy shrinks each level." },
    { term: "Biomagnification", def: "Concentrated toxins at top of web." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A grass field fixes 80,000 kJ/m²/year. Calculate the energy available to (a) primary consumers, (b) secondary, (c) tertiary — and explain why a lion population can't exist on 1 hectare.",
      given: "10% transfer rule.",
      formula: "×0.1 per level.",
      substitution: "(a) 8,000 kJ (herbivores), (b) 800 kJ (their predators), (c) 80 kJ (top). A lion needs ~7 kg meat/day ≈ tens of thousands of kJ — it must hunt across kilometres of grassland because its level only receives 0.1% of what the grass fixed.",
      calculation: "80,000 → 8,000 → 800 → 80 kJ.",
      answer: "Energy thinning forces large territories — the 10% rule writes the ecology of lions."
    },
    {
      problem: "Draw/interpret: in a pond ecosystem the pyramid of NUMBERS at one moment shows few phytoplankton supporting many zooplankton. Why isn't this impossible?",
      given: "Inverted number pyramid.",
      formula: "Turnover rate argument.",
      substitution: "Phytoplankton are tiny, reproduce in days, and are eaten almost as fast as they grow — standing COUNT is small but flow (productivity) is huge. Numbers snapshot the stock, not the stream; the ENERGY pyramid stays upright because total phytoplankton throughput still exceeds grazers' intake.",
      calculation: "Same logic as one tree (number 1) hosting 50,000 insects.",
      answer: "Counts mislead; energy flow never does — pyramids of number/biomass can invert, energy cannot."
    },
    {
      problem: "Farmers near a lake spray DDT. The fish-eating birds' eggs are thinning, though the spray never touched the birds. Trace the path with the right vocabulary.",
      given: "Pollution through a web.",
      formula: "Bioaccumulation → biomagnification.",
      substitution: "DDT enters water → phytoplankton absorb it (not broken down — fat-stored) → zooplankton eat many contaminated cells (concentration rises) → small fish → big fish → bird eats thousands of fish-years of stored DDT: concentration at the top can be millions of times the water level. DDT disrupts calcium metabolism → thin eggshells crush when incubated.",
      calculation: "Each level ADDS the losses of all below — toxins run the energy ladder in reverse.",
      answer: "Spray → plankton → fish → bird eggs: biomagnification, the dark twin of the 10% rule."
    },
    {
      problem: "Classify each as biotic/abiotic and justify the two trickiest: earthworm, temperature, dead log, fungus growing on the log.",
      given: "Component sorting.",
      formula: "Biotic = living or from living; abiotic = physical/chemical.",
      substitution: "Earthworm = biotic (alive). Temperature = abiotic (physical factor). Dead log = ONCE biotic — ecologists call dead matter 'detritus', still organic but no longer living. Fungus = biotic (alive, and the decomposer role). The log/fungus pair shows the decomposer niche: turning once-living matter back into abiotic minerals (CO₂, nitrates) — the bridge between the two halves of the ecosystem.",
      calculation: "Nutrient cycle closed: biotic → detritus → abiotic → biotic.",
      answer: "Biotic, abiotic, detritus (once-biotic), biotic — and the fungus is the recycler."
    }
  ],
  commonMistakes: [
    "Saying decomposers 'eat dead things' like consumers — they digest EXTERNALLY (saprotrophic): secrete enzymes, absorb; detritivores are the ones that ingest.",
    "Thinking energy is recycled — MATERIALS cycle (carbon, nitrogen), ENERGY FLOWS one way and exits as heat. Ecosystems need constant sunlight.",
    "Drawing the arrow in a food chain backwards — arrows mean 'energy flows to': grass → zebra (energy goes from grass INTO zebra).",
    "Confusing population (one species) with community (all species) with ecosystem (adds the physical environment).",
    "Believing the pyramid of numbers must be upright — one tree vs thousands of insects inverts it.",
    "Calling humans 'outside' ecosystems — we're embedded: consumers, decomposers' partners (sanitation), and the dominant abiotic engineer.",
    "Mixing up bioaccumulation (build-up in ONE organism over its life) with biomagnification (concentration UP the food web).",
    "Naming a top predator 'producer level 1' — trophic numbering starts at producers = level 1."
  ],
  applications: [
    "Lake Tana: wetlands (papyrus) filter inflows; introduced water hyacinth blocks light → die-off → decomposers boom → oxygen crash — an abiotic cascade through the web.",
    "Ethiopian highlands: exclosure areas let degraded hillside vegetation regrow — removing the grazing pressure lets producers rebuild the whole pyramid.",
    "Agriculture: teff-field food webs — natural pest control by spiders/birds (secondary consumers) reduces pesticide need; pollinators support fruit crops.",
    "Fishery management: catch limits respect the 10% rule — removing too many mid-level fish starves the top (and the market).",
    "Rewilding logic: keystone predators (wolves, lions) control herbivore browse pressure → vegetation recovers → streams stabilize.",
    "Your school compound IS an ecosystem: lawn producers, ant/insect consumers, soil decomposers, sunlight/water/soil as abiotic controls — a field study waiting to happen."
  ],
  summary: "Ecosystem = community + abiotic world. Biotic (producers → consumers → decomposers) + abiotic (light, water, T°, soil). Chains/webs show energy's path (arrows = energy flow); 10% rule thins it each level → upright energy pyramids, short chains, big predator territories. Materials cycle, energy flows. Niche = profession; biomagnification concentrates toxins upward.",
  visuals: [
    { type: "flowChart", config: { steps: ["Sunlight (1-2% fixed)", "Producers — grass, algae", "Primary consumers — herbivores (10%)", "Secondary — carnivores (1%)", "Tertiary — top predators (0.1%)", "All levels → decomposers → minerals back to soil"], title: "Energy Through an Ecosystem" } },
    { type: "cycleDiagram", config: { nodes: [{ detail: "Photosynthesis fixes it into sugar", "label": "Sun → Producers" }, { detail: "Herbivores eat plants", "label": "Primary consumers" }, { detail: "Carnivores eat herbivores", "label": "Secondary consumers" }, { detail: "Dead matter + waste fed here", "label": "Decomposers" }, { detail: "Minerals return to producers", "label": "Soil nutrients" }], title: "The Ecosystem Loop — energy flows, materials cycle" } },
    { type: "qa", config: { title: "Web Thinking — tap to reveal", pairs: [{ q: "Why do food chains almost never have 7 links?", a: "The 10% rule: after 5 transfers ~0.01% of the original energy remains — not enough to run another level of warm-blooded predators." }, { q: "A farmer keeps owls in his teff fields. Name the ecological service.", a: "Predator control of rodent primary consumers — natural pest management via the food web (free, no pesticide residue)." }, { q: "Which pyramid can NEVER invert, and why?", a: "Energy — thermodynamics: every level loses ~90% to respiration/heat, so each must be smaller." }] } }
  ],
  questions: [
    { type: "mcq", q: "All the tilapia living in one lake form a:", options: ["Community", "Population", "Ecosystem", "Biosphere"], answer: 1, difficulty: 1, explanation: "One species in one area = population." },
    { type: "mcq", q: "In a food chain, the arrows represent:", options: ["Direction of energy flow", "Who eats whom backwards", "Nutrient cycling", "Population size"], answer: 0, difficulty: 2, explanation: "Grass → zebra: energy moves from grass into zebra." },
    { type: "short", q: "Non-living factors like light and temperature are called ____.", answer: "abiotic", difficulty: 1, explanation: "Abiotic = non-living; biotic = living." },
    { type: "calc", q: "Producers fix 5000 kJ. Energy at the tertiary consumer level (kJ)?", answer: "5", difficulty: 2, explanation: "5000 → 500 → 50 → 5 (three transfers ×0.1).", tolerance: 0.5 },
    { type: "concept", q: "Explain the difference between habitat and niche using one example.", answer: "address vs role|where vs how it lives", difficulty: 2, explanation: "Habitat = where it lives (pond); niche = its role (what it eats, when it hunts, where it breeds) — its 'profession'." },
    { type: "mcq", q: "Which organisms close the nutrient cycle?", options: ["Producers", "Top predators", "Decomposers", "Herbivores"], answer: 2, difficulty: 1, explanation: "Decomposers return minerals from dead matter to soil." },
    { type: "tf", q: "Energy is recycled within an ecosystem just like carbon.", answer: false, difficulty: 2, explanation: "Energy FLOWS one way (sun → heat); only materials cycle." },
    { type: "ordering", q: "Pick the correct trophic order:", options: ["Frog → grasshopper → grass → snake", "Grass → grasshopper → frog → snake → hawk", "Hawk → snake → frog → grass", "Grass → frog → grasshopper → hawk"], answer: [1], difficulty: 1, explanation: "Producer → primary → secondary → tertiary → top." },
    { type: "concept", q: "Why can a pyramid of numbers be inverted but a pyramid of energy cannot?", answer: "counts snapshot vs flow|thermodynamics always loses", difficulty: 3, explanation: "Numbers count individuals (one big tree, many insects); energy obeys the 10% loss rule at every transfer — always shrinking." },
    { type: "short", q: "The increasing concentration of toxins up a food web is ____.", answer: "biomagnification", difficulty: 2, explanation: "Biomagnification — top predators get the concentrated dose." }
  ]
};

/* --- b6-2: Population Ecology --- */
Lessons["g10-biology-ub6-t2"] = {
  overview: "Populations have vital statistics like countries: births, deaths, immigration, age structure, density — and they grow according to mathematical laws that biology discovered before economists did. This lesson reads growth curves, explains why nothing grows forever (carrying capacity), and shows how age pyramids predict a country's future — including Ethiopia's demographic moment.",
  objectives: [
    "Define population density and the factors changing population size",
    "Contrast exponential (J) and logistic (S) growth",
    "Explain carrying capacity and environmental resistance",
    "Interpret age-structure pyramids and survivorship curves",
    "Distinguish density-dependent and density-independent limiting factors"
  ],
  simple: "POPULATION = same species, one area, interbreeding. Size changes by four valves: births + immigration IN, deaths + emigration OUT. DENSITY = individuals per unit area (counting method: quadrats for plants, mark-release-recapture for animals). GROWTH: with unlimited resources → EXPONENTIAL (J-curve): 2→4→8→16, each generation multiplies (bacteria every 20 min; an invasive weed in a new lake). Reality: resources run out → growth slows → levels off at CARRYING CAPACITY K (max the environment can sustain) → LOGISTIC S-curve. The gap between J and S = environmental resistance: food, space, water, predators, disease, waste. LIMITING FACTORS: density-DEPENDENT (worse when crowded: disease spreads, competition bites, predators focus on abundant prey) vs density-INDEPENDENT (hit regardless: flood, fire, frost, volcano). AGE STRUCTURE: pyramid with wide base = growing population (many young entering breeding age — Ethiopia's profile today); column = stable; narrow base = shrinking (Europe, Japan). Populations also OSCILLATE around K (lynx-hare 10-year cycles) and crash when they overshoot (reindeer overgrazed island).",
  detailed: `<p><b>Counting populations:</b> Density = N/area. Quadrats: random samples (avoid cherry-picking!), % cover for plants. Mark-release-recapture: capture M, mark harmlessly, release; later capture C, find R marked → N ≈ M×C/R (assumes marks don't affect survival, no big births/migrations between samples — Lincoln index). Transects: line-quadrat along environmental gradients (lakeshore to hilltop).</p>
<p><b>Growth mathematics:</b> Exponential: dN/dt = rN (r = per-capita rate = births − deaths); doubling time ≈ 70/percent-growth (rule of 70: 2.5%/yr → 28 years to double). Logistic: dN/dt = rN(K−N)/K — the (K−N)/K brake: near zero at N≈K, full speed when N tiny. Sigmoid phases: lag (few breeders) → log/exponential (abundance) → deceleration (resistance bites) → plateau at K. Overshoot & dieback: if N rockets past K (boom year), resources degrade, K itself falls, crash follows (hare-lynx, lemmings, our own fisheries when overfished).</p>
<p><b>Limiting factors:</b> Density-dependent: competition (intraspecific — same species, the fiercest), predation (functional response: predators switch to abundant prey), parasitism/disease (transmission scales with crowding), waste accumulation (yeast killed by own alcohol), territoriality. Density-independent: climate extremes, fire, flood, pollution events, volcanic ash — they set the ceiling regardless of numbers. In nature both act together: a mild winter lets dense populations crowd; a hard one culls everyone.</p>
<p><b>Life tables & survivorship:</b> Type I convex (humans, elephants — most survive to old age, then die; heavy parental care), Type II diagonal (songbirds, rodents — constant risk per year), Type III concave (oysters, fish, trees — millions of offspring, near-total early mortality, survivors live long). Ethiopia's teff agriculture mirrors Type III: broadcast thousands, most seedlings die, the stand that matures feeds a family.</p>
<p><b>Human population ecology:</b> 8 billion (2022); growth slowing globally (fertility 4.8→2.4 children/woman since 1960s) but momentum continues — wide-base age structures guarantee growth even after births fall (many youth entering parenthood). Ethiopia: ~120-130 million, fertility ~4.1 and falling, median age ~19 — a demographic DIVIDEND window IF jobs/education/health arrive before the cohort ages (compare: East Asia's dividend 1970-2010). Urbanisation, water stress, land degradation = carrying-capacity conversations at national scale.</p>`,
  keyTerms: [
    { term: "Population density", def: "Individuals per unit area/volume." },
    { term: "Natality / mortality", def: "Birth rate / death rate." },
    { term: "Immigration / emigration", def: "Moving in / out of the population." },
    { term: "Exponential (J) growth", def: "dN/dt = rN — unlimited multiplication." },
    { term: "Carrying capacity (K)", def: "Max sustainable population of that environment." },
    { term: "Logistic (S) growth", def: "J + brake at K — the realistic curve." },
    { term: "Environmental resistance", def: "All factors between J and S." },
    { term: "Overshoot & dieback", def: "Past K → resource damage → crash." },
    { term: "Mark-release-recapture", def: "N ≈ M×C/R animal counting." },
    { term: "Age structure", def: "Breeding-age distribution — the growth predictor." },
    { term: "Demographic transition", def: "High birth/death → low birth/death as societies develop." }
  ],
  formulas: [
    {
      name: "Population change",
      formula: "ΔN = (B + I) − (D + E)",
      meaning: "Births and immigration minus deaths and emigration.",
      vars: "B, I, D, E = rates per time period",
      units: "individuals/time",
      when: "Any population accounting.",
      example: "B 50, I 5, D 40, E 0 → +15/yr."
    },
    {
      name: "Rule of 70",
      formula: "Doubling time ≈ 70 / growth %",
      meaning: "How fast exponential growth doubles.",
      vars: "growth % per year",
      units: "years",
      when: "Human population projections.",
      example: "2.5%/yr → 28 years to double."
    },
    {
      name: "Lincoln index",
      formula: "N = M × C / R",
      meaning: "Estimated population from mark-recapture.",
      vars: "M = first marked, C = second catch, R = recaptured marked",
      units: "individuals",
      when: "Mobile animals.",
      example: "M=100, C=80, R=20 → N=400."
    }
  ],
  workedExamples: [
    {
      problem: "Ecologists mark 120 catfish in a lake stream, release them, and a week later catch 90, finding 15 marked. Estimate the population and state one assumption that could bias it.",
      given: "M=120, C=90, R=15.",
      formula: "N = M×C/R.",
      substitution: "N = 120×90/15 = 720 catfish.",
      calculation: "Assumptions: marks don't make fish more visible to predators (biased HIGH if they do — fewer marked recaptured), no migration/births diluting marks, thorough mixing.",
      answer: "~720 — and if tagged fish lost tags, the estimate inflates."
    },
    {
      problem: "A bacteria culture doubles every 20 minutes starting from 1 cell. How many after 6 hours? Why does the real curve stop being J-shaped?",
      given: "Exponential growth.",
      formula: "N = 2^(t/doubling).",
      substitution: "6 h = 360 min → 18 doublings → 2¹⁸ ≈ 262,000 cells.",
      calculation: "Real culture: nutrients deplete, waste (acid/alcohol) accumulates, space fills → growth decelerates → plateau (logistic) → death phase as K collapses. In a flask, exponential lasts hours; the J-curve is a temporary luxury.",
      answer: "~262k theoretical; reality bends to S because unlimited growth is physically impossible."
    },
    {
      problem: "Country X: 45% of the population is under 15; Country Y: 15% under 15 and 22% over 60. Describe each age pyramid and predict 30-year growth for each.",
      given: "Age structure interpretation.",
      formula: "Base width = future breeders.",
      substitution: "X = wide-based TRIANGLE → huge cohort entering reproductive age → strong growth momentum even if families shrink (Yemen, Niger, Ethiopia-profile). Y = URN (narrow base, bulging middle, wide top) → deaths will exceed births within decades → shrinking, ageing, pension pressure (Japan, Italy).",
      calculation: "Momentum: X's population keeps growing for 2-3 decades after fertility drops to replacement.",
      answer: "X grows (triangle), Y shrinks (urn) — the base width is destiny."
    },
    {
      problem: "Deer on a forest reserve: K ≈ 4000. A mild winter + no predators lets the herd hit 6500; the next two winters show mass starvation and the herd settles at ~2500. Explain with overshoot logic.",
      given: "Boom-bust cycle.",
      formula: "Overshoot → K damage.",
      substitution: "6500 > K: deer ate browse faster than regrowth → food base (the environment's capacity itself) degraded → effective K dropped → starvation (density-dependent food) → population crashed BELOW original K because habitat recovery lags. Classic reindeer/deer cycle (St. Matthew Island: 29 → 6000 → 42).",
      calculation: "Sustainable harvest keeps N below K, never above.",
      answer: "Populations that outrun their food supply don't just stop — they pay a crash tax."
    }
  ],
  commonMistakes: [
    "Thinking exponential growth 'stops suddenly' — logistic growth SLOWS gradually as resistance builds; the plateau is asymptotic.",
    "Confusing growth RATE (%/yr) with population SIZE — a slowing rate still adds people while positive.",
    "Believing a wide-base pyramid means high fertility NOW — it reflects the last 15 years; today's youth could already be from smaller families (momentum vs current rate).",
    "Calling all limiting factors 'competition' — disease, predation, waste and climate are separate mechanisms with different density logic.",
    "Density-independent = 'not important' — wrong: for plants and insects, frost/rain often dominate the population ceiling.",
    "Assuming K is fixed — it moves with seasons, rainfall years, and habitat damage (overshoot lowers it).",
    "Mark-recapture bias: ignoring that stressed/marked animals may avoid or seek traps (estimate skews either way).",
    "Saying 'human population follows the logistic curve' — technology has repeatedly raised our K (agriculture, medicine, fossil fuels); the open question is whether it can raise again."
  ],
  applications: [
    "Fisheries: maximum sustainable yield keeps harvest at the curve's steepest point (K/2) — overfishing = overshoot-and-crash (Lake Tana, Red Sea sardines).",
    "Invasive species: water hyacinth in new lakes = textbook J-curve until resistance builds — early response beats expensive cleanup.",
    "Pest management: locust plagues are density-dependent phase change (solitary → gregarious) — monitoring density predicts outbreaks.",
    "Public health: epidemic curves ARE logistic (R₀ replaces r) — vaccination lowers effective K of susceptible hosts.",
    "Ethiopia's demographic dividend: the youth bulge is an economic window — invest in education/jobs now or face the ageing bill later.",
    "Wildlife reserves: carrying-capacity calculations set stocking limits for park management (Awash, Omo)."
  ],
  summary: "Population = species in an area; ΔN = (B+I)−(D+E). J-curve = exponential (rN, doubling via rule of 70); S-curve = logistic with brake at carrying capacity K. Environmental resistance = density-dependent (competition, disease, predation) + independent (climate, fire). Overshoot → crash. Age pyramids: triangle grows, urn shrinks. Count via quadrats or M×C/R.",
  visuals: [
    { type: "lineGraph", config: { series: [{ color: "#ef4444", label: "Exponential (J)", points: [[0, 5], [2, 8], [4, 15], [6, 30], [8, 65], [10, 140]] }, { color: "#4f8cff", label: "Logistic (S)", points: [[0, 5], [2, 12], [4, 30], [6, 60], [8, 90], [10, 98]] }], title: "Two Fates of a Population", xLabel: "time (years)", yLabel: "population", yMax: 150, xMax: 10 } },
    { type: "comparison", config: { title: "Density-Dependent vs Independent", left: { name: "Dependent (crowding)", items: ["Competition for food/space", "Disease spreads faster", "Predators focus on abundant prey", "Waste accumulates", "Sets the K plateau"] }, right: { name: "Independent (events)", items: ["Flood, fire, frost, drought", "Volcanic eruption", "Pollution spill", "Hits regardless of N", "Resets the curve"] } } },
    { type: "qa", config: { title: "Reading the Curves — tap to reveal", pairs: [{ q: "A country's growth rate falls from 3% to 2% — does its population shrink?", a: "No — it still GROWS, just slower; shrinking needs a NEGATIVE rate (deaths > births)." }, { q: "Why do hare-lynx populations cycle instead of sitting at K?", a: "Predator-prey lag: hares boom → lynx boom → hares crash → lynx crash → repeat, ~10-year oscillation around K." }, { q: "How does a wide-base age pyramid predict growth even with falling birth rates?", a: "Momentum: the huge youth cohort is entering breeding age — fewer babies per couple × many more couples = still growing." }] } }
  ],
  questions: [
    { type: "calc", q: "B=500, D=350, I=40, E=90. Net population change?", answer: "100", difficulty: 1, explanation: "(500+40)−(350+90) = 100.", tolerance: 1 },
    { type: "mcq", q: "The logistic curve levels off because of:", options: ["Predators only", "Environmental resistance", "Immigration", "Season"], answer: 1, difficulty: 1, explanation: "All limits together = resistance reaching K." },
    { type: "short", q: "The maximum population an environment can sustain is its ____ capacity.", answer: "carrying|k", difficulty: 1, explanation: "Carrying capacity (K)." },
    { type: "calc", q: "Growth 2%/yr — doubling time by rule of 70? (years)", answer: "35", difficulty: 2, explanation: "70/2 = 35 years.", tolerance: 1 },
    { type: "mcq", q: "Which is density-INDEPENDENT?", options: ["Tapeworm spread", "Territorial fighting", "Forest fire", "Food competition"], answer: 2, difficulty: 2, explanation: "Fire kills regardless of population size." },
    { type: "calc", q: "Mark 80, recapture 50 with 10 marked. Estimated N?", answer: "400", difficulty: 2, explanation: "N = 80×50/10 = 400.", tolerance: 5 },
    { type: "concept", q: "What does a narrow-based, urn-shaped age pyramid predict for the next 30 years?", answer: "shrinking|ageing|deaths exceed births", difficulty: 2, explanation: "Few youth entering breeding → population declines and ages (pension/healthcare pressure)." },
    { type: "tf", q: "A population at carrying capacity has zero births and deaths.", answer: false, difficulty: 2, explanation: "Births = deaths (dynamic equilibrium) — individuals still turn over." },
    { type: "ordering", q: "Pick the logistic phase order:", options: ["Plateau → lag → log → death", "Lag → log/exponential → deceleration → plateau at K", "Log → lag → plateau → acceleration", "K → lag → log"], answer: [1], difficulty: 2, explanation: "Start slow, explode, brake, settle." },
    { type: "concept", q: "Explain 'overshoot and dieback' with the reindeer example.", answer: "past K|habitat damaged|crash below K", difficulty: 3, explanation: "Population exceeds K, degrades its food base, then crashes — often below the original K because recovery lags." }
  ]
};

/* --- b6-3: Interactions Between Organisms --- */
Lessons["g10-biology-ub6-t3"] = {
  overview: "Nothing lives alone — every organism is entangled with neighbours in a web of competition, predation and cooperation. Ecologists classify these interactions by who gains and who loses: (+/−) predation and parasitism, (−/−) competition, (+/+) mutualism, (+/0) commensalism. These relationships shape evolution itself — arms races, camouflage, mimicry and co-evolution are all interaction fingerprints.",
  objectives: [
    "Classify species interactions by +/- outcomes",
    "Explain competitive exclusion and resource partitioning",
    "Describe predation adaptations: camouflage, mimicry, chemical defence",
    "Distinguish parasite/host dynamics from predation",
    "Give examples of mutualism, commensalism and amensalism"
  ],
  simple: "SIGN GAME for any interaction: who benefits (+), harmed (−), unaffected (0). COMPETITION (−/−): two species want the same limited resource — interspecific (lion vs hyena over kills) or intraspecific (two male cattle over mates — same species, fiercest). Principle: two species with IDENTICAL niches can't coexist forever — competitive exclusion (Gause's paramecia). Escape route: resource partitioning — split the niche (five warbler species feeding at different heights of one spruce; Darwin's finch beaks). PREDATION (+/−): hunter kills — adaptations on both sides: cryptic colouration (stick insects), warning colours (poison frogs), mimicry (harmless hoverfly wearing a wasp's stripes — Batesian), chemical defence (milkbush toxins — Ethiopia's toxic plants), speed/spines/venom. PARASITISM (+/− but polite): parasite lives ON/in a HOST and feeds without quick killing — tapeworm, malaria (Plasmodium → mosquito vector), mistletoe on acacia; host defences (immune) vs parasite evasion = co-evolutionary chase. MUTUALISM (+/+): bees-flowers, rhizobia-legumes (nitrogen fix!), mycorrhizae-tree roots, oxpecker-rhino (mostly). COMMENSALISM (+/0): cattle egret riding grazers to eat flushed insects; remora on shark. AMENSALISM (−/0): large animal trampling grass, walnut tree poisoning neighbours.",
  detailed: `<p><b>Competition mechanics:</b> Exploitative (use the resource first — two farms drawing one aquifer) vs interference (direct contest — territorial birds). Gause's experiments: Paramecium aurelia + P. caudatum together → one extinct in days (identical food niche). But in the wild, near-identical species DO coexist via partitioning: space (warbler feeding zones), time (nocturnal vs diurnal desert rodents), diet size (finch beak depths matching seed sizes — character displacement: evolution literally reshapes the competitor). Competition is the reason niches are as specific as they are.</p>
<p><b>Predator-prey as a system:</b> Lotka-Volterra logic: prey↑ → predators↑ (better feeding, more cubs) → prey↓ → predators↓ → prey↑ — coupled oscillations (lynx-hare fur records). Predator adaptations: ambush/pursuit, pack hunting, sensory upgrades. Prey defences: mechanical (thorns — Acacia, spines, shells), chemical (cardenolides in milkweed, tannins, caffeine as natural insecticide), behavioural (alarm calls, schooling/flocking — confusion effect), and the visual arms race: camouflage (crypsis — grasshopper matching teff stems), startle displays (peacock butterfly eyespots), warning coloration (aposematism — black-yellow wasps: advertise 'I taste bad'), Batesian mimicry (harmless copy wears the model's ad), Müllerian mimicry (multiple genuinely bad species converge on ONE warning pattern — shared advertising cost).</p>
<p><b>Parasitism deep-dive:</b> Ectoparasites (ticks, lice — feed and leave) vs endoparasites (tapeworm — lost its own gut; liver fluke). Vector-borne: malaria's journey — Plasmodium sexual cycle in Anopheles, asexual multiplication in human liver then red cells (fever cycles = burst synchrony). Parasites regulate hosts (myxoma vs rabbits) and can alter behaviour (rabid aggression spreads virus; Toxoplasma lowers rodent fear). Host-parasite co-evolution: Red Queen dynamics — both must keep evolving just to stand still.</p>
<p><b>Mutualism types:</b> Obligate (termites + gut protists — neither digests wood alone; lichens = fungus + alga; mycorrhizae — 90% of plants need the fungal phosphate network) vs facultative (oxpecker-buffalo tick removal — though oxpeckers also pick wounds: mutualism drifts toward parasitism). Cleaning stations (wrasse-client fish), pollination contracts (fig-wasp specificity), nitrogen-fixing rhizobia in legume root nodules (feeds Ethiopian soil — crop rotation logic). Commensalism reality-check: true 0 is rare — cattle egrets may also peck ticks (mutualism) or spread tick larvae (parasitism); ecologists score interactions as a spectrum.</p>`,
  keyTerms: [
    { term: "Interspecific / intraspecific", def: "Between / within species competition." },
    { term: "Competitive exclusion", def: "Identical niches → one species eliminated (Gause)." },
    { term: "Resource partitioning", def: "Niche splitting allowing coexistence." },
    { term: "Character displacement", def: "Evolved trait divergence under competition (finch beaks)." },
    { term: "Crypsis / camouflage", def: "Hidden by resemblance to background." },
    { term: "Aposematism", def: "Warning colouration — advertise the defence." },
    { term: "Batesian / Müllerian mimicry", def: "Harmless copies model / multiple unpalatables share signal." },
    { term: "Parasitoid", def: "Larva that eventually kills its host (ichneumon wasps)." },
    { term: "Vector", def: "Organism transmitting a parasite (Anopheles → malaria)." },
    { term: "Obligate / facultative mutualism", def: "Must / may cooperate." },
    { term: "Co-evolution", def: "Reciprocal evolutionary change between interactants." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Two barnacle species (Chthamalus and Balanus) both survive alone on a rock; together only Balanus holds the lower zone and Chthamalus survives only up high. Explain with competition vocabulary and name the mechanism that lets both persist on natural rocks.",
      given: "Connell's classic experiment.",
      formula: "Realised vs fundamental niche.",
      substitution: "Balanus outcompetes Chthamalus in the lower zone (faster growth, crushing overgrowth) — competitive exclusion locally. Chthamalus's FUNDAMENTAL niche (whole rock) shrinks to a REALISED niche (upper strip only). On natural rocks both persist because the upper zone is dry-stress-free enough for Chthamalus and useless to Balanus — spatial resource partitioning.",
      calculation: "Competition pushed one species up; physical tolerance (drought) kept it there.",
      answer: "Exclusion + partitioning in one experiment: the niche you CAN use vs the one you DO use."
    },
    {
      problem: "A harmless moth fly wears yellow-black stripes like a wasp. A poison-dart frog is brilliant blue. A stick insect looks like a twig. Classify each defence and explain why the frog's strategy REQUIRES it to actually be toxic.",
      given: "Three visual strategies.",
      formula: "Mimicry vs aposematism vs crypsis.",
      substitution: "Moth fly = Batesian mimicry (+/0 on the model: it borrows the wasp's reputation; predators who tasted a wasp generalize). Frog = aposematism — honest advertising; the colour only works because predators learn the bad experience — a harmless blue impostor would be eaten (and would dilute the signal — Müllerian honesty). Stick insect = crypsis — avoid detection entirely (predators search by image; no image, no attack).",
      calculation: "Detection defence vs recognition defence — two different problems solved.",
      answer: "Copy the warning, BE the warning, or hide from the search image — three solutions to being eaten."
    },
    {
      problem: "Explain how one interaction (oxpecker and buffalo) can be scored as mutualism, commensalism AND parasitism depending on observation — and what that says about ecological classification.",
      given: "Interaction context-dependence.",
      formula: "+/+ vs +/0 vs +/− evidence.",
      substitution: "Mutualism: removes ticks (food for bird, pest relief for buffalo) + alarm calls. Commensalism: eats ticks that would die anyway / rides for transport. Parasitism: reopens healed wounds to drink blood — the bird's bill causes harm. Verdict: the sign depends on season, individual and behaviour — interactions are DYNAMICS, not labels; ecologists now map interaction strength across contexts.",
      calculation: "Same logic: cats are mutualists (rodent control) or predators (bird deaths) depending on the ecosystem.",
      answer: "The +/- grid is a snapshot; real relationships shift along the spectrum."
    },
    {
      problem: "Ethiopian farmers rotate teff with fava beans and field peas. Explain the soil benefit using a +/+ interaction at the root level.",
      given: "Legume rotation agronomy.",
      formula: "Rhizobium-legume mutualism.",
      substitution: "Legume roots host Rhizobium bacteria in nodules: bacteria fix atmospheric N₂ → ammonia (plant can't do it); plant supplies sugars + low-oxygen leghaemoglobin environment (bacteria can't do it alone) — obligate mutualism. After the legume season, root turnover leaves nitrogen-rich residues → teff (a heavy N feeder) grows better without synthetic fertilizer. Rotation ALSO breaks pest cycles (parasite-specific to cereal roots).",
      calculation: "Fixation: 50-200 kg N/ha/season from legumes — free fertilizer.",
      answer: "Below-ground +/+ partnership is why grandmothers intercropped pulses with grain."
    }
  ],
  commonMistakes: [
    "Calling every eating relationship 'predation' — predation kills quickly; parasitism feeds slowly without (usually) killing; grazing sits between.",
    "Thinking competition only happens between different species — INTRASPECIFIC competition is usually fiercer (identical needs, same place).",
    "Confusing camouflage with warning colour — crypsis hides from the search image; aposematism demands to be SEEN and remembered.",
    "Batesian vs Müllerian mix-up: Batesian = one honest model + one liar; Müllerian = several honest species sharing one signal.",
    "Saying parasites 'should' kill hosts — a dead host ends the parasite's home; success = transmission before harm (evolution selects moderation, not mercy).",
    "Commensalism claims with hidden effects — true +/0 is rare; always ask 'who is affected and how?'",
    "Competitive exclusion = 'they fight' — it's usually silent exploitation (resource depletion), not combat.",
    "Treating mutualism as friendship — it's by-product cooperation under selection; cheating is punished (legumes sanction non-fixing rhizobia by cutting sugar)."
  ],
  applications: [
    "Biological control: release a specialist parasitoid/predator against a crop pest (fall armyworm → Trichogramma wasps) — interaction knowledge replaces pesticide.",
    "Invasive species logic: no co-evolved predators/parasites at home → enemy release → J-curve (water hyacinth, Prosopis in Afar).",
    "Malaria & NTD control: break the vector interaction (bed nets, indoor spraying, larval source) — ecology as public health.",
    "Agroforestry & intercropping: shade trees + crops + mycorrhizal networks mimic partitioned natural systems — resilient yields.",
    "Livestock: tick management (the +/− pressure on cattle) — acaricide resistance is co-evolution in fast-forward.",
    "Pollinator decline: crop + wild-plant mutualism networks unravel without bees — hedgerows restore the +/+ web."
  ],
  summary: "Interaction signs: competition (−/−; exclusion → partitioning), predation (+/−; arms race: crypsis, aposematism, Batesian/Müllerian mimicry), parasitism (+/− slow; vectors, co-evolution), mutualism (+/+ obligate/facultative — rhizobia, mycorrhizae, pollination), commensalism (+/0), amensalism (−/0). Context shifts the signs; co-evolution writes the adaptations.",
  visuals: [
    { type: "tableVisual", config: { headers: ["Interaction", "Species A", "Species B", "Example"], rows: [["Competition", "−", "−", "Lion vs hyena"], ["Predation", "+", "−", "Frog eats insect"], ["Parasitism", "+", "−", "Tapeworm in human"], ["Mutualism", "+", "+", "Bee and flower"], ["Commensalism", "+", "0", "Cattle egret on grazer"], ["Amensalism", "−", "0", "Elephant tramples grass"]], title: "The +/- Interaction Grid" } },
    { type: "comparison", config: { title: "Hide, Warn, or Copy", left: { name: "Crypsis (hide)", items: ["Match the background", "Defeats the search image", "Stick insect, grasshopper", "Works on naive hunters"] }, right: { name: "Warn & Copy", items: ["Aposematism: bright = toxic (dart frog)", "Batesian: harmless mimics the warned", "Müllerian: all genuinely bad, shared ad", "All need predator LEARNING"] } } },
    { type: "cycleDiagram", config: { nodes: [{ detail: "Prey abundant → predators thrive", "label": "Prey ↑" }, { detail: "More hunters, more pressure", "label": "Predators ↑" }, { detail: "Heavy predation + food limits", "label": "Prey ↓" }, { detail: "Starving predators decline", "label": "Predators ↓" }], title: "The Predator-Prey Oscillation" } }
  ],
  questions: [
    { type: "mcq", q: "Two species with identical niches in one habitat will:", options: ["Cooperate", "Competitive exclusion of one", "Merge", "Both thrive"], answer: 1, difficulty: 1, explanation: "Gause's principle: one wins, the other is eliminated or displaced." },
    { type: "mcq", q: "A harmless fly wearing wasp stripes is:", options: ["Müllerian mimicry", "Batesian mimicry", "Aposematism", "Crypsis"], answer: 1, difficulty: 2, explanation: "Batesian = the harmless liar copies the honest warning." },
    { type: "short", q: "Bright colour advertising toxicity is called ____.", answer: "aposematism|warning coloration", difficulty: 2, explanation: "Aposematism — 'I'm dangerous, remember me'." },
    { type: "concept", q: "Why is intraspecific competition usually more intense than interspecific?", answer: "identical needs|same niche|exact resource overlap", difficulty: 3, explanation: "Same species = identical requirements (food, space, mates) — total niche overlap maximizes contest." },
    { type: "mcq", q: "Rhizobium in legume nodules is which interaction type?", options: ["Parasitism", "Commensalism", "Mutualism", "Predation"], answer: 2, difficulty: 1, explanation: "+/+: sugars for fixed nitrogen." },
    { type: "ordering", q: "Pick the malaria transmission chain:", options: ["Human → human directly", "Infected human → Anopheles mosquito → new human", "Mosquito larvae → water → human", "Bird → pig → human"], answer: [1], difficulty: 2, explanation: "Anopheles is the vector: parasite develops in mosquito, injects with next bite." },
    { type: "tf", q: "Parasites almost always kill their hosts quickly.", answer: false, difficulty: 2, explanation: "Quick death ends the parasite's home — successful parasites transmit before causing harm." },
    { type: "concept", q: "Explain resource partitioning with the warbler example.", answer: "split niche|different zones/times|coexistence", difficulty: 2, explanation: "Similar species feed in different parts of the same tree (top/middle/bottom/needles) — niche division lets competitors coexist." },
    { type: "mcq", q: "Cattle egrets eating insects flushed by grazing cattle is classically:", options: ["Mutualism", "Commensalism", "Parasitism", "Competition"], answer: 1, difficulty: 1, explanation: "Bird +, cattle 0 (though real cases blur toward mutualism)." },
    { type: "short", q: "Reciprocal evolutionary change between interacting species is ____.", answer: "coevolution|co-evolution", difficulty: 2, explanation: "Co-evolution — the Red Queen chase." }
  ]
};
