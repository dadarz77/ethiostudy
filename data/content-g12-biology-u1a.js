/* Content: Grade 12 Biology — Unit 1 (part A): topics 1-2 */
window.Lessons = window.Lessons || {};

Lessons["g12-biology-ub1-t1"] = {
  overview: "Biology stops being textbook trivia the moment you use it to keep soil fertile, fisheries stocked, forests standing and wildlife alive. Conservation of natural resources is applied ecology: knowing carrying capacity, succession, nutrient cycles and population dynamics well enough to harvest renewable resources at their renewal rate — and knowing when a resource is effectively non-renewable.",
  objectives: [
    "Distinguish renewable vs non-renewable resources with examples",
    "Explain sustainable yield using population growth curves",
    "Identify in-situ vs ex-situ conservation methods",
    "Relate deforestation and soil erosion to Ethiopian land degradation",
    "Evaluate community-based conservation and protected area systems"
  ],
  simple: "<b>Live off the interest, never the capital.</b> A fish stock grows fastest at intermediate size (logistic curve's midpoint): harvest there and the population bounces back — that is maximum sustainable yield. Overfish and you crash below recovery; the curve runs backwards too. Renewables (forest, forage, fish, soil if tended) have a renewal rate; non-renewables (oil, minerals, topsoil mined by erosion) do not. Ethiopia's conservation battlefield is land: ~85% of farmland shows degradation, the highlands shed soil into rivers (the Nile's famous brown water is Ethiopian topsoil), and the national answer pairs area closures, exclosures for hillside regreening, and community forestry.",
  detailed: "<p><b>The population maths behind sustainability.</b> Logistic growth dN/dt = rN(K−N)/K is fastest at N = K/2. Maximum sustainable yield ≈ rK/2: harvest at that rate and the population sits at half capacity, regrowing exactly what you take. Take more and N falls below the recovery zone; add Allee effects (breeding groups too small to find mates) and collapse can be sudden — the Newfoundland cod fishery (1992, ~40 000 jobs lost overnight) is the cautionary monument. Renewable does not mean inexhaustible: it means harvestable at the renewal rate, and that rate is an empirical fact, not a wish.</p><p><b>Soil: the slowest renewable to lose, the fastest to lose.</b> Forming 1 cm of topsoil takes centuries; a bare eroded hillside can lose it in a rainy season. Conservation biology meets agronomy in contour ploughing, terracing (the Fanyakoo/Faniko bench systems of the northern highlands), strip cropping, cover crops, composting, and exclosures where cut grass and banned grazing let gullies heal — the Tigray and Amhara mass-mobilisation terracing plus exclosures demonstrably raised water tables and revived springs. Gully control: check dams, then vetiver grass bunds whose dense fibrous roots bind moving soil.</p><p><b>Forest and wildlife: in-situ first.</b> In-situ conservation protects species in functioning ecosystems — national parks (Simien, Bale, Awash, Omo), wildlife reserves, community conservancies; it conserves the evolutionary process, not just the checklist. Ex-situ backs it up where habitats are gone: seed banks (the Institute of Biodiversity Conservation holds crop wild relatives and landraces as insurance), botanical and zoological gardens, captive breeding (the rare antelope and wolf programs). The two are one system: ex-situ populations are the ark until in-situ habitat returns.</p><p><b>Biodiversity hotspots with Ethiopian stamps.</b> Endemism concentrates where isolation and altitude meet: the Simien wolf, the Walia ibex, the Bale monkey, the Star-nosed mole, plus the montane flora of a highland 'island sky' landscape. Protecting centres of endemism is conservation triage: identical effort saves irretrievable evolutionary history or nothing. Ethiopia sits inside two biodiversity hotspots (Eastern Afromontane, Horn of Arid Lands) while being an original centre of crops — teff, enset, coffee, khat — so genetic conservation is also food-security conservation (the next drought-tolerant wheat is a wild relative somewhere).</p><p><b>Community is the mechanism, not the slogan.</b> Fortress conservation that excludes people tends to fail where people depend on the land; joint-management models (CSR-style wildlife sanctuaries, forest cooperatives, payment for ecosystem services like the Watershed Development projects) align livelihoods with the resource. The acid test for any program: does the household that conserves earn more, or eat better, than the one that doesn't?</p>",
  keyTerms: [
    { term: "Renewable resource", def: "replaced by natural regrowth at a finite rate" },
    { term: "Maximum sustainable yield", def: "harvest = renewal at N≈K/2" },
    { term: "In-situ conservation", def: "protect species in natural habitat" },
    { term: "Ex-situ conservation", def: "archives, zoos, seed banks outside habitat" },
    { term: "Exclosure", def: "grazing-closed hillside for natural regeneration" },
    { term: "Endemism", def: "native to and found only in one area" },
    { term: "Land degradation", def: "decline in soil/productivity by erosion, chemicals" }
  ],
  formulas: [
    { name: "Logistic growth", formula: "dN/dt = rN(K−N)/K", meaning: "growth slows to zero at carrying capacity", vars: [{ name: "r", meaning: "intrinsic growth rate" }, { name: "K", meaning: "carrying capacity" }], when: "harvest models, population recovery" },
    { name: "Sustainable yield", formula: "MSY ≈ rK/2", meaning: "renewal at the curve's midpoint", vars: [{ name: "harvest = MSY", meaning: "N stays at K/2" }], when: "fishery and forest quotas" },
    { name: "Soil loss signal", formula: "erosion ∝ R·K·LS·C·P", meaning: "rainfall × soil erodibility × slope × cover × practice", vars: [{ name: "C", meaning: "cover: the human lever" }], when: "terracing, exclosures fight the C term" }
  ],
  workedExamples: [
    { problem: "A lake fish stock has K = 200 000 t and r = 0.4/yr. Sustainable harvest?", calculation: "MSY ≈ rK/2 = 0.4 × 200 000 / 2.", answer: "≈ 40 000 t/yr at N = 100 000 t; any year the catch runs hotter, the stock shrinks below the recovery zone." },
    { problem: "Why does an exclosure recover a degraded hillside in a few years when ploughed land keeps eroding?", calculation: "Remove grazing/cutting → vegetation cover term C rises → root networks stabilise soil → water infiltration rises.", answer: "Succession is the workforce: it works free the moment you stop firing it." },
    { problem: "A forest is cut at 30 000 m³/yr; regrowth measures 18 000 m³/yr. Long term?", calculation: "30 000 − 18 000 = 12 000 m³ mined from capital each year.", answer: "A non-renewable trajectory: the stand 'ends' — a decade-scale math problem dressed as forestry." },
    { problem: "A park's wolf population drops to 12 and stops recovering though food is plentiful. Hypothesis?", calculation: "Small-N effects: Allee mating difficulty, inbreeding depression.", answer: "Below a threshold, growth rate itself collapses — numbers matter, not only habitat." }
  ],
  commonMistakes: [
    "Treating 'renewable' as 'unlimited' (the renewal RATE binds)",
    "Harvesting at the largest population instead of K/2 (growth is slowest near K)",
    "Ex-situ alone: banking seeds without habitat is a museum, not conservation",
    "Blaming only population for degradation while ignoring cover/practice choices",
    "Assuming protected-on-paper = protected-on-ground without community buy-in"
  ],
  applications: [
    "Ethiopian exclosure and terracing campaigns re-greening highland watersheds",
    "Lake Tana fishery and humid biome quota management",
    "IBC genebank protecting teff, coffee and enset landraces against future stresses",
    "Simien and Bale parks: tourism revenue as in-situ conservation's paycheck"
  ],
  summary: "Conservation is the arithmetic of renewal rates: harvest the interest, hold the capital, protect habitat first, and make the community better off for it.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A resource is renewable when:", options: ["it can never run out", "regrowth can replace what is harvested at a finite rate", "it is alive", "it is cheap"], answer: 1, difficulty: 1, explanation: "The rate, not the adjective, decides." },
    { type: "mcq", q: "Maximum sustainable yield is taken from a population near:", options: ["K", "K/2", "0.1K", "any size"], answer: 1, difficulty: 2, explanation: "Logistic growth peaks at half capacity." },
    { type: "mcq", q: "An exclosure conserves land mainly by:", options: ["irrigation", "removing grazing so vegetation regrows and binds soil", "fencing out predators", "planting eucalyptus"], answer: 1, difficulty: 1, explanation: "Succession needs only a break from disturbance." },
    { type: "mcq", q: "Which is ex-situ conservation?", options: ["national park", "wildlife corridor", "seed bank vault", "community forest"], answer: 2, difficulty: 1, explanation: "Outside the habitat by definition." },
    { type: "mcq", q: "High endemism makes a region a conservation priority because:", options: ["tourism pays better", "the same effort saves unique evolutionary history", "species there are abundant", "soil is rich"], answer: 1, difficulty: 2, explanation: "Irreplaceable losses concentrate there." },
    { type: "mcq", q: "Cutting 30 000 m³/yr from regrowth of 18 000 m³/yr means:", options: ["sustainable", "mining capital at 12 000 m³/yr", "renewable", "increasing forest"], answer: 1, difficulty: 2, explanation: "Deficit harvest = liquidation." },
    { type: "mcq", q: "The Newfoundland cod crash (1992) illustrates:", options: ["MSY always safe", "stocks can be driven below recovery thresholds", "renewables are unlimited", "climate alone matters"], answer: 1, difficulty: 3, explanation: "Overharvest + Allee effects = sudden collapse." },
    { type: "mcq", q: "Fortress conservation often fails because:", options: ["fences are expensive", "local people who depend on the resource get no benefit from protecting it", "wildlife migrates", "parks are too large"], answer: 1, difficulty: 3, explanation: "If conservation costs a household its livelihood, it loses." }
  ]
};

Lessons["g12-biology-ub1-t2"] = {
  overview: "Food and nutrition security is biology's hardest exam: enough calories (security), the right molecules (nutrition), every year, for everyone. This topic runs the crop-science side — yield physiology, post-harvest loss, biofortification, landraces vs hybrids — and the human-metabolism side, reading Ethiopia's stunting and micronutrient picture as applied biology.",
  objectives: [
    "Define food security's four pillars and distinguish nutrition security",
    "Explain yield limits by light, water, nutrients and CO₂",
    "Identify post-harvest loss mechanisms and controls",
    "Evaluate biofortification and crop diversification (enset, pulses, teff)",
    "Link protein-energy malnutrition and hidden hunger to diets"
  ],
  simple: "<b>Calories are the floor; molecules are the ceiling.</b> Food security = availability, access, utilisation, stability. Utilisation is biology: what you eat must be digestible, safe, and support health — a maize-only diet fills bellies and causes pellagra (niacin bound in maize, unabsorbed unless nixtamalised with lime — traditional cooks solved a biochemistry problem centuries before vitamins had names). Ethiopia's stunting (~half of children under 5 historically, improving) is chronic under-nutrition in the first 1 000 days; hidden hunger — iron, zinc, vitamin A, iodine — quietly cuts learning and work capacity without any visible starvation.",
  detailed: "<p><b>Yield is physiology with a budget.</b> Crop dry matter ≈ intercepted radiation × light-use efficiency; water and nitrogen then gate the rest (Liebig's bottleneck). Teff thrives on the marginal highlands where improved wheats fail — drought and waterlogging tolerant, but low harvest index; breeding raises the HI (grain/straw ratio) without losing hardiness. Enset ('false banana') is a famine-reserve crop by design: one plant stores ~a year of carbohydrate as fermented bulla and kocho underground, drought invisible. Pulses fix nitrogen (rhizobium nodules: urea at photosynthetic prices) and lift protein quality — cereal+legume pairing (injera + shiro) supplies the limiting amino acids the other lacks: lysine from pulses, methionine from grains. The complementation is a molecule-level fact hiding in a menu.</p><p><b>Post-harvest: losses that undo harvests.</b> In smallholder chains, 10-30% of grain is lost after the field — weevils (Callosobruchus in pulses), moulds (Aspergillus flavus aflatoxins: invisible carcinogens in maize and groundnut, managed by drying below ~12% moisture and sorting), rats, and moisture re-wetting. Controls are biology-aware engineering: hermetic storage bags suffocate insects by CO₂ buildup without pesticide, metal silos exclude weevils physically, drying racks and moisture meters beat sun-on-road randomness, and aflatoxin biocontrol (atoxigenic strains outcompete toxigenic ones) inoculates the field with harmless locals — applied microbial competition, the same logic as the normal microbionta of Unit 2.</p><p><b>Malnutrition's two faces.</b> Protein-energy malnutrition: marasmus (total calorie deficit, wasting) vs kwashiorkor (protein deficit with oedema, fatty liver — apolipoproteins can't be made so fat and fluid stall in liver and tissues); both ride on the same under-supplied first 1 000 days where growth and brain development lock in. Micronutrient deficiencies: iron (anaemia, work capacity), iodine (cretinism — salt iodisation is one of public health's best bargains), vitamin A (xerophthalmia/child mortality), zinc. Biofortification routes: agronomic (fertiliser Zn), conventional breeding (high-Fe beans, orange-fleshed sweetpotato for provitamin A), and transgenic (Golden rice's β-carotene endosperm) — each a trade-off between speed, cost and regulation, none a substitute for diverse diets.</p><p><b>Access and stability are systems, not science alone.</b> A year of good harvest with no road, no savings and no market price still starves people (Amartya Sen's entitlement insight: famines kill where food fails to REACH, not only where it fails to grow). Safety nets that use biology: PSNP's asset-building (terraces and seedbeds that raise next year's yield), school feeding (attendance + nutrition in one mechanism), home gardens (diversity the market won't deliver), and early warning systems reading crop phenology and NDVI satellites.</p><p><b>The nutrition transition.</b> As incomes rise, diets shift to fats, sugars and refined grains while physical activity drops: diabetes, hypertension and dental caries rise while under-nutrition persists in the same households. Ethiopia is mid-transition: the double burden of malnutrition is the country's next public health wave, and nutrition education is the cheapest medicine.</p>",
  keyTerms: [
    { term: "Food security pillars", def: "availability, access, utilisation, stability" },
    { term: "Harvest index", def: "grain fraction of total dry matter" },
    { term: "Limiting amino acid", def: "the diet's scarcest protein building block" },
    { term: "Hidden hunger", def: "micronutrient deficit without calorie deficit" },
    { term: "Kwashiorkor", def: "protein-poor malnutrition with oedema" },
    { term: "Biofortification", def: "breeding crops with more micronutrients" },
    { term: "Aflatoxin", def: "Aspergillus carcinogen in stored maize/groundnut" }
  ],
  formulas: [
    { name: "Yield budget", formula: "dry matter ≈ intercepted PAR × LUE", meaning: "light sets the ceiling; water/N gate the approach", vars: [{ name: "LUE", meaning: "light-use efficiency" }], when: "irrigation and fertiliser decisions" },
    { name: "Complementary proteins", formula: "cereal (low lysine) + pulse (low methionine) = complete", meaning: "pairing fixes each other's deficit", vars: [{ name: "injera + shiro", meaning: "the classic plate math" }], when: "plant-based diets" },
    { name: "First 1 000 days", formula: "conception → age 2: the window", meaning: "stunting largely locked in after it", vars: [], when: "maternal and child nutrition programs" }
  ],
  workedExamples: [
    { problem: "A family eats maize as 80% of calories, no lime treatment, no beans. Deficiency risk?", calculation: "Niacin in maize is bound (niacytin) and unavailable without alkaline hydrolysis; tryptophan also low.", answer: "Pellagra (dermatitis, diarrhoea, dementia) — the historical maize-belt disease, curable by nixtamal or protein diversity." },
    { problem: "200 kg of grain dries on bare ground after rain and re-wets to 18% moisture in storage. What grows?", calculation: "Moulds resume at water activity from ~14-15%; Aspergillus flavus makes aflatoxins at warm temps.", answer: "Invisible carcinogen risk plus caking — a moisture meter and hermetic bag are the cheap fixes." },
    { problem: "School feeding with fortified biscuits raises attendance 15% AND hemoglobin. Two mechanisms?", calculation: "Caloric/iron intake lifts energy and erythropoiesis; hunger removal raises willingness to sit through class.", answer: "Nutrition is an education intervention — and vice versa." },
    { problem: "Enset plots survive a failed cereal year. Why?", calculation: "Carbohydrate stored underground over 1-2 years, harvestable on demand, drought-avoiding rather than drought-tolerant.", answer: "A living granary: food security built into the plant's storage strategy." }
  ],
  commonMistakes: [
    "Equating food security with production alone (access and utilisation do half the work)",
    "Calling maize 'empty calories' wrong — its niacin IS locked, not absent (alkali frees it)",
    "Ignoring post-harvest losses while pushing only higher yields",
    "Confusing marasmus (total deficit) with kwashiorkor (protein/oedema)",
    "Treating supplements as the default where food-based solutions persist longer"
  ],
  applications: [
    "Ethiopia's PSNP terracing + school feeding as nutrition-linked safety nets",
    "High-iron bean and orange-fleshed sweetpotato biofortization programs",
    "Hermetic storage bags and metal silos slashing weevil losses",
    "Enset and teff as climate-resilient national food reserves"
  ],
  summary: "Feed people with four pillars, not one: grow it, get it to them, make the molecules count (complement proteins, dry the grain, defend the first 1 000 days), and hold it stable every year.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Which is NOT a pillar of food security?", options: ["availability", "access", "utilization", "exportation"], answer: 3, difficulty: 1, explanation: "Four pillars: availability, access, utilisation, stability." },
    { type: "mcq", q: "Kwashiorkor is distinguished from marasmus by:", options: ["pure calorie deficit", "protein deficit with oedema", "high weight", "only vitamin loss"], answer: 1, difficulty: 2, explanation: "Protein-poor: fluid and fat accumulate in liver/tissues." },
    { type: "mcq", q: "Injera + shiro is nutritionally smart because:", options: ["both are cheap", "cereal and pulse supply each other's limiting amino acids", "it tastes good", "it is fast"], answer: 1, difficulty: 1, explanation: "Lysine from pulse, methionine from grain: complete protein." },
    { type: "mcq", q: "Aflatoxin contamination of stored maize is best prevented by:", options: ["sealing in plastic while wet", "drying below ~12% and hermetic storage", "spraying insecticide", "adding water"], answer: 1, difficulty: 2, explanation: "Low water activity stops the mould and its toxin." },
    { type: "mcq", q: "Enset earns the name famine reserve because:", options: ["it grows anywhere", "it stores years of underground carbohydrate harvestable on demand", "it is imported", "it needs no labour"], answer: 1, difficulty: 2, explanation: "The plant is the granary: drought invisible." },
    { type: "mcq", q: "The first 1 000 days matter because:", options: ["children eat the most then", "growth and brain development lock in; stunting is largely irreversible after", "vaccines end then", "teeth arrive"], answer: 1, difficulty: 3, explanation: "Chronic deficit in the window = permanent cost." },
    { type: "mcq", q: "Golden rice is engineered to:", options: ["fix nitrogen", "produce β-carotene in the endosperm", "resist weevils", "grow in salt"], answer: 1, difficulty: 3, explanation: "Provitamin A grain aimed at deficiency blindness." },
    { type: "mcq", q: "The nutrition transition means:", options: ["everyone eats more vegetables", "rising NCDs from fat/sugar diets alongside persistent under-nutrition", "calories always fall", "only wealthier nations cook"], answer: 1, difficulty: 3, explanation: "The double burden: same country, two malnutritions." }
  ]
};
