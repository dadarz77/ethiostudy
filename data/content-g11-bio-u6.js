/* Content: Grade 11 Biology — Unit 6: Natural Resources & Environmental Conservation (4 topics) */
window.Lessons = window.Lessons || {};

Lessons["g11-biology-ub6-t1"] = {
  overview: "Natural resources — the air, water, soil, forests, wildlife and minerals life and economy run on — classified as renewable vs non-renewable, with their distribution, value and the pressure points where human demand outruns Earth's supply.",
  objectives: [
    "Define and classify natural resources (renewable/non-renewable, biotic/abiotic)",
    "Describe major resource types: water, soil, forest, wildlife, mineral, energy",
    "Explain ecosystem services and their economic value",
    "Identify causes of resource depletion",
    "Relate resource distribution to Ethiopian livelihoods"
  ],
  simple: "A natural resource is anything from nature humans use: water, soil, forests, animals, fish, fossil fuels, minerals. Two big categories: renewable — replenished by natural cycles if used within their regeneration rate (timber, fish, freshwater, solar, wind) — and non-renewable — formed over geological time, gone once burned (coal, oil, gas, minerals; the 'bank account with no deposits'). Renewable is not automatically safe: over-pump an aquifer, over-fish a lake, over-graze grassland and the renewal rate loses to the extraction rate — deforestation and soil erosion are Ethiopia's sharpest examples (the highlands once ~40% forest; now far less). Biotic resources come from living things (food, fiber, fuel wood, genetic diversity); abiotic from non-living (water, air, minerals, sunlight). Beyond direct products, nature delivers ecosystem services — free work: pollination, water purification, flood control, soil formation, carbon storage, climate regulation — valued globally at trillions of dollars per year, more than world GDP. Depletion drivers: population growth, poverty-driven overuse, overconsumption (the richest use most), war, and market failures that price resources at zero (clean air has no invoice — until you buy an oxygen concentrator). Sustainability = using renewable flows within regeneration and investing non-renewable rents into alternatives.",
  detailed: "<p><b>Classification.</b> Renewable: solar, wind, hydro, biomass, water, soil (slow!), fisheries, forests — regeneration time vs extraction rate defines the line. Non-renewable: fossil fuels (300 Ma of stored sunlight), metal ores, groundwater in fossil aquifers. Flow vs stock resources. Biotic/abiotic cross-cut. The trap: treating slow-renewables (soil: ~1 cm per 100–400 years; forests: decades) as if fast.</p><p><b>Key resources.</b> Water: 2.5% fresh, most locked in ice; usable <1% — Ethiopia: 'water tower of Africa', 12 major rivers (Abbay/Blue Nile, Awash, Omo), yet water stress from distribution, erosion-silted reservoirs. Soil: the living surface (topsoil = organisms + humus + minerals); erosion strips it 10–40× faster than formation in degraded highlands. Forest: ~31% of land globally; Ethiopia's Afromontane remnants (Harenna, Bale) — endemic biodiversity + water regulation. Wildlife/fisheries: protein, income (tourism), ecological function (seed dispersal, predation). Minerals/energy: gold, potash, tantalum; geothermal (Aluto-Langano, Corbetti), GERD hydropower — the non-renewable-to-renewable transition in one country.</p><p><b>Ecosystem services (MEA 2005 framework).</b> Provisioning (food, water, timber, fiber, medicine — 25% of modern drugs from plants; Ethiopian medicinal plants: 800+ species used traditionally), regulating (climate, floods, disease, pollination — 75% of crops benefit), supporting (nutrient cycling, soil formation, photosynthesis), cultural (recreation, spiritual — Orthodox church forests as sacred reserves). Economic logic: services are non-market — invisible in GDP until collapse (Lake Awassa's fishery decline = silt + pollution priced in). The TEEB argument: biodiversity loss costs the world 5–10% of GDP annually in service terms.</p><p><b>Depletion analysis.</b> IPAT: Impact = Population × Affluence × Technology — per-capita consumption × people × pollution-per-unit. Renewable overuse: Malthusian overshoot (fisheries: 34% overfished globally; Lake Tana's Labeobarbus endemic flock — overfished + dammed). Deforestation: fuel wood (still ~90% of Ethiopia's energy for cooking), agricultural expansion, charcoal. Water mining: aquifer drawdown, salinization. Biodiversity: the 'HIPPCO' drivers — Habitat loss, Invasive species, Population, Pollution, Climate, Overexploitation. Equity lens: ecological footprint — humanity uses ~1.7 Earths; the richest quintile drives most of it while the poor bear degradation.</p><p><b>Sustainability framework.</b> Strong vs weak sustainability (natural capital substitutable or not?). Carrying capacity and planetary boundaries (9, 6 transgressed). Renewable-energy transition: solar/wind costs fell ~90%/decade — Ethiopia's 100% renewable grid target (hydro, wind — Adama, Ashegoda; geothermal pipeline). Circular economy: reduce-reuse-recycle hierarchies. The resource question is biological AND economic: live off the interest, never the principal.</p>",
  keyTerms: [
    { term: "Renewable resource", def: "replenished by natural cycles within human timescales" },
    { term: "Non-renewable", def: "finite stock — no replenishment on human timescales" },
    { term: "Ecosystem services", def: "nature's benefits: provisioning, regulating, supporting, cultural" },
    { term: "Carrying capacity", def: "max population a resource base supports" },
    { term: "Ecological footprint", def: "Earth-areas needed for a population's consumption" },
    { term: "Sustainable yield", def: "harvest rate = regeneration rate" }
  ],
  workedExamples: [
    {
      problem: "Classify: timber, oil, freshwater, copper, wind, topsoil — and flag the 'slow renewable' trap.",
      given: "six resources",
      formula: "renewal time vs use rate",
      substitution: "renewable: timber, freshwater, wind, topsoil; non-renewable: oil, copper",
      calculation: "topsoil ~1 cm/century — renewable only across generations",
      answer: "Timber/freshwater/wind renewable; oil/copper non-renewable; topsoil renewable-but-slow — the trap that makes erosion a civilizational risk"
    },
    {
      problem: "A lake fishery catches 500 t/yr; stock regenerates 450 t. Predict 10 years of trend.",
      given: "overyield",
      formula: "extraction > regeneration",
      substitution: "50 t/yr deficit compounds — stock shrinks, catch-per-effort falls, fishers add effort",
      calculation: "collapse curve, not linear decline",
      answer: "Classic overshoot-and-crash: the fishery collapses before the arithmetic 'runs out' — like Lake Awassa's sardine-era busts"
    },
    {
      problem: "Value a forest's services beyond timber: list four categories with examples.",
      given: "MEA framework",
      formula: "provisioning/regulating/supporting/cultural",
      substitution: "provisioning: medicine, honey, fuel; regulating: flood control downstream, carbon storage; supporting: soil formation, water cycle; cultural: church forests, ecotourism (Bale mountains)",
      calculation: "regulating often exceeds timber value",
      answer: "Standing forest > cut forest in total service value — the economic case for conservation"
    },
    {
      problem: "Ethiopia's energy is ~90% biomass (fuel wood). Explain the resource chain that follows.",
      given: "energy structure",
      formula: "fuel wood → deforestation cascade",
      substitution: "collection time (women/girls hours/day) → forest loss → erosion → reservoir siltation → hydro risk + flood damage",
      calculation: "clean-cooking switch breaks the chain",
      answer: "One energy choice drives deforestation, gender burden, soil loss and hydropower risk — resources are a system"
    },
    {
      problem: "Compute: humanity at 1.7 Earths, country X at 5.0. What does the number mean and what closes the gap?",
      given: "footprint math",
      formula: "footprint vs biocapacity",
      substitution: "X consumes 5× its share of regenerative capacity",
      calculation: "gap = efficiency + renewables + diet + circularity",
      answer: "Overshoot financed by future generations; the fix is living on renewable interest — energy, food, materials"
    }
  ],
  commonMistakes: [
    "'Renewable' treated as 'inexhaustible' — renewal rate vs extraction rate is the whole game",
    "Soil counted as fast-renewable — it's a slow-renewable; erosion outpaces formation for centuries",
    "Resources seen as only 'things we take' — ecosystem services are resources too (invisible in GDP)",
    "Population blamed alone — consumption (IPAT's A) dominates in rich countries; both matter",
    "Fossil aquifers called renewable groundwater — some take 10,000 years to refill",
    "Recycling treated as the top of the waste hierarchy — reduce and reuse come first",
    "Conservation framed as anti-development — depleted resources ARE anti-development"
  ],
  applications: [
    "Ethiopia's green legacy: 15 billion trees pledged (Green Legacy Initiative) — restoration + carbon + livelihoods",
    "GERD & geothermal: converting the water tower into clean power — renewable stock management",
    "Lake Tana: endemic fish + wetlands (Damot wetland filters) — resource + biodiversity double value",
    "Soil economics: the highlands' erosion costs measured in lost harvests — why terracing pays",
    "Carbon markets: forest carbon credits — paying for regulating services directly"
  ],
  summary: "Natural resources split by renewal time — fast (solar, wind), slow (soil, forests), and none (fossil, mineral) — and by origin (biotic/abiotic). Beyond harvestables, ecosystems deliver services worth trillions: water purification, pollination, climate, culture. Depletion follows IPAT logic: people × consumption × technology, with renewables collapsing when extraction beats regeneration (fisheries, forests, aquifers). Sustainability is accounting: live off the interest, price the services, and shift non-renewable rents into renewable capital — Ethiopia's tree-planting and clean-energy push is that transition in practice.",
  visuals: [
    { type: "mindMap", config: { center: "Natural resources", branches: [{ label: "Renewable", items: ["solar/wind", "water", "forest", "fish"] }, { label: "Non-renewable", items: ["fossil fuels", "minerals"] }, { label: "Services", items: ["pollination", "clean water", "climate"] }] } },
    { type: "comparison", config: { title: "Renewable vs non-renewable", left: { name: "Renewable", items: ["flow/stock with cycles", "sustainable yield exists", "overuse → collapse", "soil = SLOW"] }, right: { name: "Non-renewable", items: ["finite stock", "no yield — depletion", "rents fund transition", "fossil = stored sunlight"] } } },
    { type: "steps", config: { title: "Overshoot to collapse", steps: [{ label: "Catch > regrowth", detail: "hidden deficit" }, { label: "Effort rises", detail: "bigger boats" }, { label: "Stock crashes", detail: "non-linear" }, { label: "Fishery dies", detail: "Awassa lesson" }] } }
  ],
  questions: [
    { type: "mcq", q: "Which is non-renewable?", options: ["timber", "natural gas", "wind", "fish"], answer: 1, difficulty: 1, explanation: "Fossil — formed over millions of years" },
    { type: "mcq", q: "Pollination is which service type?", options: ["provisioning", "regulating", "supporting", "cultural"], answer: 1, difficulty: 2, explanation: "Regulating (some texts: supporting) — not a direct product" },
    { type: "mcq", q: "Sustainable yield means harvest equals:", options: ["maximum profit", "regeneration rate", "total stock", "effort"], answer: 1, difficulty: 2, explanation: "Live off the interest" },
    { type: "mcq", q: "Soil is best described as:", options: ["non-renewable", "fast renewable", "slow renewable", "inexhaustible"], answer: 2, difficulty: 3, explanation: "Renews over centuries — erosion outpaces it" },
    { type: "tf", q: "Ecosystem services appear prominently in national GDP accounts.", answer: false, difficulty: 2, explanation: "Mostly invisible — the market failure behind overuse" },
    { type: "tf", q: "A renewable resource can be depleted.", answer: true, difficulty: 1, explanation: "Extraction > regeneration = collapse" },
    { type: "calc", q: "Fishery: stock 10,000 t, regeneration 8%/yr, catch 1,000 t/yr. Sustainable?", answer: "no", difficulty: 2, explanation: "800 t regrowth < 1000 t catch — deficit" },
    { type: "calc", q: "1 cm topsoil per 200 years: how many years for 20 cm?", answer: "4000", difficulty: 2, explanation: "20 × 200 = 4000 years" },
    { type: "short", q: "IPAT: Impact = Population × Affluence × ___?", answer: "technology", difficulty: 2, explanation: "Technology (per-unit impact)" },
    { type: "concept", q: "Why can 'green' hydropower still be a resource-depletion problem?", answer: "siltation|reservoir erosion|water flow change|sediment", difficulty: 3, explanation: "Dams trap sediment — reservoirs silt up (erosion upstream shortens dam life), downstream floods/fertilization stop, and flow regulation changes wetlands and fisheries — renewable energy still trades off water and soil resources; watershed management is the mitigation" }
  ]
};

Lessons["g11-biology-ub6-t2"] = {
  overview: "Conservation of natural resources in Ethiopia: the legal and institutional architecture, protected areas (national parks, wildlife reserves, sanctuaries, Ramsar sites), in-situ vs ex-situ strategies, restoration programs, and the community-based models that decide whether conservation lasts.",
  objectives: [
    "Map Ethiopia's protected-area system with named examples",
    "Distinguish in-situ and ex-situ conservation",
    "Describe national strategies: laws, institutions, programs",
    "Explain community-based conservation and its logic",
    "Assess restoration: area exclosures, Green Legacy, terracing"
  ],
  simple: "Ethiopia's conservation stack: laws (Constitution Art. 43/92 — right to a clean environment, duty to conserve; Conservation of Natural Resources Proclamation; Wildlife Development & Conservation Proclamation), institutions (Ministry of Agriculture, Environment, Ethiopian Wildlife Conservation Authority — EWCA), and plans (national biodiversity strategy, CRGE green-economy strategy, Green Legacy). The protected-area network: 15+ national parks (Simien — endemic gelada, walie ibex; Bale — Ethiopian wolf, mountain nyala; Awash — the Afar rift; Omo, Gambella), wildlife reserves (Yabello — giraffe; Belesa; Mago), sanctuaries (Senkelle — the endemic gelada's refuge, Abi Salta) and Ramsar wetlands (Lake Tana's Damot, Abijatta-Shalla). Two strategies: in-situ — protect species where they live (parks, corridors; the Simien's 20+ endemic vertebrates stay in their mountains) and ex-situ — backup outside (seed banks — Ethiopian Biodiversity Institute's gene bank holds 5000+ accessions of teff, barley wild relatives; zoos; captive breeding — the Ethiopian wolf's insurance; botanical gardens). The modern insight: fences fail without people — community-based conservation (exclosures where villages regrow forest for grazing rights; church forests — 12,000+ sacred woodlands maintained for centuries; wildlife-tourism revenue sharing like Bishoftu's) makes locals the beneficiaries, because conservation that costs a family their crop is conservation that loses the crop fight. Restoration: area exclosures (350+ documented, some 20+ years — degraded land → woodland with grass reseeding), terracing (FANP — the famous 'tigray green' transformation), and Green Legacy's billion-seedling seasons.",
  detailed: "<p><b>Legal & institutional.</b> FDRE Constitution: Art. 43 (environmental rights), Art. 92 (state duties to conserve). Proclamations: Conservation of Natural Resources (1997, revised 2019 — land-use planning, soil/water, forest), Wildlife Development & Conservation (2019 — EWCA mandate, protected-area governance, human-wildlife conflict), Environmental Impact Assessment (2003 — projects screened before approval), Biosafety (2009). Institutions: EWCA + regional bureaus; Ethiopian Biodiversity Institute (gene banks); Ethiopian Forestry Action Program (EFAP). Policy: CRGE (Climate-Resilient Green Economy — middle-income + low-carbon), Green Legacy Initiative (PM Abiy — 15 B seedlings target; seasonal mass planting), restoration commitments (African Forest Landscape Restoration Initiative — 15 M ha pledged).</p><p><b>Protected areas (in-situ core).</b> National parks: Simien NP (UNESCO 1978 — gelada, walie ibex, lammergeier; Afroalpine >4000 m), Bale Mountains NP (largest Afroalpine habitat; Ethiopian wolf <500 individuals, mountain nyala), Awash NP (Awash Falls, Afar), Omo, Gambella, Yangudi-Rassa (wild ass), Nechisar, Majang, Chebera Churchura. Wildlife reserves: Yabello (giraffe), Mago, Borena Saynt, Abijatta-Shalla (flamingo-Ramsar). Sanctuaries: Senkelle (gelada), Abi Salta, Lake Tana's Damot wetland (Ramsar). UNESCO sites: Simien, Lower Omo, Aksum peripheries. Gaps: coverage ~16% of land but connectivity weak — corridors and human-wildlife conflict (elephants in MZ, hippos in Awash) are the live problems; community concessions and joint management (Bale's Kibish grazing agreements) are the direction.</p><p><b>Ex-situ.</b> Gene banking: EBI's national genebank — orthodox seed storage of crops + wild relatives (teff, coffee wild populations — Coffea arabica's genetic future is stored AND protected in Harenna/Bonga forests — coffee rust resistance lives in wild genes). Botanical gardens (Addis Ababa University's — herbarium 45k+ specimens). Captive breeding: Ethiopian wolf head-start trials; the gelada sanctuaries double as insurance populations. Cryobank for livestock genetics (Borana cattle, Sidama sheep). The logic: in-situ first (evolution continues), ex-situ as backup and research.</p><p><b>Community-based conservation (CBC).</b> Theory: open-access resources degrade (Hardin's tragedy) unless users hold defined rights and benefits. Models: exclosures (communal bylaws ban grazing/felling for years — natural regeneration; measured gains: biomass, biodiversity, water tables — Tigray and Amhara thousands of hectares); church forests (12,000+ sacred fragments — custodianship by parish; the highlands' last biodiversity islands); forest cooperatives and user associations (legal devolution since 1997); wildlife tourism revenue-sharing (lodges, guides — local income makes wolves and elephants worth more alive); payment for ecosystem services pilots (water funds — downstream users pay upstream stewards). The red line: fortress conservation (evictions) breeds resentment and poaching — benefit-sharing is the durable design.</p><p><b>Restoration & soil.</b> Physical: terracing + bunds (the Tigray re-greening — 1 M+ ha treated; satellite-verified regreening), gully control. Biological: area closures, assisted natural regeneration, planting (Green Legacy — species mix: eucalyptus for income, indigenous for ecology — the monoculture critique matters). Watershed: micro-dams, pond construction. Measured outcomes: groundwater rise, yield gains, bird/insect return — restoration ecology's Ethiopian laboratory.</p>",
  keyTerms: [
    { term: "In-situ conservation", def: "protect species in their habitats (parks, corridors)" },
    { term: "Ex-situ conservation", def: "backup outside habitat: gene banks, zoos, seed stores" },
    { term: "Protected area", def: "legally designated land/seascape for biodiversity + services" },
    { term: "Exclosure", def: "community-declared closure for natural regeneration" },
    { term: "Ramsar site", def: "wetland of international importance (treaty)" },
    { term: "CRGE", def: "Climate-Resilient Green Economy strategy" }
  ],
  workedExamples: [
    {
      problem: "Match: (a) Ethiopian wolf, (b) gelada, (c) teff wild relatives, (d) flamingo — to the right conservation tool.",
      given: "four targets",
      formula: "in-situ vs ex-situ fit",
      substitution: "(a) Bale NP in-situ + captive insurance; (b) Senkelle sanctuary (in-situ); (c) gene bank ex-situ (evolutionary options stored); (d) Abijatta-Shalla NP/Ramsar — wetland protection",
      calculation: "mixed strategy",
      answer: "Habitat protection for animals, seed banking for crop genetics, wetland designation for birds"
    },
    {
      problem: "A degraded hillside near a village: design a restoration sequence using Ethiopian methods.",
      given: "bare eroded slope",
      formula: "physical → biological → institutional",
      substitution: "contour bunds/terraces (water spread) → exclosure (grazing ban by community bylaw) → assisted planting (indigenous mix + grass reseeding) → benefit rules (cutting cycles, grazing rotation after establishment)",
      calculation: "succession does the rest",
      answer: "Structure first, closure second, planting third, rights last — the Tigray/Amhara playbook"
    },
    {
      problem: "Why do church forests persist while surrounding land is bare? Name two mechanisms.",
      given: "cultural protection",
      formula: "norms + incentives",
      substitution: "religious sanctity (felling taboo — divine punishment, community identity) + custodial management (parish guards, burial-ground function, bee/fruit resources)",
      calculation: "centuries of enforcement without fences",
      answer: "Sacred norms + tangible benefits = self-enforcing conservation — the CBC precedent Ethiopia already owns"
    },
    {
      problem: "Elephants raid crops near MZ park. Propose a conflict-reduction package.",
      given: "human-wildlife conflict",
      formula: "deter + compensate + benefit",
      substitution: "chili-grease fences/beehive walls (deterrents with honey income), early-warning networks, insurance/compensation scheme, tourism revenue-sharing so elephants = income",
      calculation: "tolerance rises when benefit does",
      answer: "Layered: keep crops safe, make losses recoverable, make wildlife profitable — fortress-only fails"
    },
    {
      problem: "Green Legacy planted billions of seedlings. Give two criteria for judging real success.",
      given: "restoration metrics",
      formula: "survival + ecology",
      substitution: "survival rate at 3–5 years (not seedlings distributed); species composition (indigenous vs monoculture eucalyptus) + functional outcomes (groundwater, soil organic matter, biodiversity return)",
      calculation: "planting ≠ restoring",
      answer: "Trees alive after years, ecosystems functioning — not nursery handouts counted at planting day"
    }
  ],
  commonMistakes: [
    "Conservation = fences only — without community benefit, reserves become islands of resentment",
    "Confusing in-situ/ex-situ — gene banks don't protect evolution; parks don't protect crop genetics",
    "Counting seedlings planted instead of trees surviving — the restoration metric error",
    "Exclosures seen as 'do nothing' — they're active institutional management (bylaws, patrols, rotation)",
    "Protected-area list treated as complete — coverage ≠ connectivity; corridors are the gap",
    "EIA treated as paperwork — it's the legal gate that stops damage before it happens",
    "Wild relatives dismissed as 'just weeds' — they're the breeding insurance for teff and coffee"
  ],
  applications: [
    "Simien & Bale: endemic-species flagship tourism — gelada and wolf trekking as local income",
    "EBI gene bank: teff and coffee wild-relative collections — food-security insurance",
    "Tigray/Amhara exclosures: satellite-verified regreening — the restoration evidence base",
    "Ramsar: Abijatta-Shalla flamingo counts — international wetland commitment",
    "CRGE: green-economy planning — conservation inside development, not beside it"
  ],
  summary: "Ethiopia's conservation architecture: constitutional environmental rights + proclamations + EWCA/EBI institutions + CRGE/Green Legacy programs; in-situ protection through 15+ national parks, reserves, sanctuaries and Ramsar wetlands (Simien, Bale, Senkelle, Abijatta-Shalla); ex-situ backup via the national gene bank and botanical collections; and the decisive layer — community-based conservation (exclosures, church forests, revenue sharing) that aligns local benefit with protection. Restoration works when measured by survival and function, not seedlings.",
  visuals: [
    { type: "mindMap", config: { center: "Conservation in Ethiopia", branches: [{ label: "Legal", items: ["Const. 43/92", "wildlife proclamation", "EIA"] }, { label: "In-situ", items: ["Simien/Bale NP", "Senkelle", "Ramsar"] }, { label: "Ex-situ", items: ["gene bank", "herbarium", "captive"] }, { label: "Community", items: ["exclosures", "church forests", "revenue share"] }] } },
    { type: "comparison", config: { title: "In-situ vs ex-situ", left: { name: "In-situ", items: ["in habitat", "evolution continues", "parks/corridors", "first choice"] }, right: { name: "Ex-situ", items: ["outside habitat", "backup/insurance", "seeds/zoos", "when habitat fails"] } } },
    { type: "steps", config: { title: "Exclosure recovery", steps: [{ label: "Bylaw: close", detail: "no grazing/felling" }, { label: "Bunds", detail: "water spreads" }, { label: "Year 1–3", detail: "grass + seed rain" }, { label: "Year 5–10", detail: "shrubs, birds return" }, { label: "Rules reopen", detail: "rotational use" }] } }
  ],
  questions: [
    { type: "mcq", q: "Ethiopian wolf's primary in-situ home:", options: ["Simien NP", "Bale Mountains NP", "Awash NP", "Gambella"], answer: 1, difficulty: 1, explanation: "Bale's Afroalpine — <500 left" },
    { type: "mcq", q: "A seed bank is which conservation type?", options: ["in-situ", "ex-situ", "community", "restoration"], answer: 1, difficulty: 1, explanation: "Ex-situ — genetic backup" },
    { type: "mcq", q: "An exclosure works by:", options: ["planting only", "grazing/felling closure for regeneration", "fencing tourists out", "burning"], answer: 1, difficulty: 2, explanation: "Community-declared closure → natural regrowth" },
    { type: "mcq", q: "Ramsar sites protect:", options: ["mountains", "wetlands", "deserts", "cities"], answer: 1, difficulty: 2, explanation: "Wetlands of international importance" },
    { type: "tf", q: "Church forests are community-maintained sacred woodland fragments.", answer: true, difficulty: 1, explanation: "12,000+ — centuries of custodianship" },
    { type: "tf", q: "Counting seedlings planted is the best restoration metric.", answer: false, difficulty: 2, explanation: "Survival and ecosystem function are" },
    { type: "short", q: "Wildlife authority's abbreviation:", answer: "ewca", difficulty: 2, explanation: "Ethiopian Wildlife Conservation Authority" },
    { type: "short", q: "CRGE stands for:", answer: "climate-resilient green economy", difficulty: 2, explanation: "Climate-Resilient Green Economy strategy" },
    { type: "concept", q: "Why is wildlife-tourism revenue sharing more durable than anti-poaching patrols alone?", answer: "benefit|alive worth more|local incentive|enforcement fails", difficulty: 3, explanation: "Patrols raise the cost of poaching; revenue sharing raises the value of living wildlife for the community that lives beside it — when a wolf or elephant generates household income, neighbors become the guardians and enforcement becomes self-policing" },
    { type: "concept", q: "Explain why protecting coffee wild forests (Bonga/Harenna) is food-security policy, not just nature policy.", answer: "genetic resources|rust resistance|breeding|wild alleles", difficulty: 3, explanation: "Coffee's future traits — rust and drought resistance — live in wild C. arabica genetic variation; the forests are the only place that variation evolves in situ; losing them removes the breeding options that protect Ethiopia's coffee economy from the next disease wave" }
  ]
};

Lessons["g11-biology-ub6-t3"] = {
  overview: "Human impact on the environment: pollution (air, water, soil), deforestation, land degradation, biodiversity loss, and climate change — mechanisms, evidence, consequences and the mitigation/adaptation responses, anchored in Ethiopian examples.",
  objectives: [
    "Describe major pollution types with sources and health effects",
    "Trace deforestation and land-degradation drivers and consequences",
    "Explain the greenhouse mechanism and climate evidence",
    "Summarize biodiversity-loss drivers (HIPPCO)",
    "Distinguish mitigation from adaptation with examples"
  ],
  simple: "Human activity stresses the systems it depends on. Air pollution: indoor (cookstove smoke — biomass burning kills ~3.2 M/year from pneumonia, stroke, COPD — Ethiopia's kitchen reality) and outdoor (vehicles, industry, dust — PM2.5 penetrates lungs and blood; Addis traffic seasons). Water pollution: untreated sewage, industrial effluent (tanneries — Akaki's chromium legacy), agrochemical runoff (eutrophication: algal bloom → oxygen crash → fish die — Lake Awassa's recurring crisis), solid waste clogging rivers. Soil degradation: erosion (the highlands lose billions of tonnes of topsoil — the silt that fills reservoirs and reddens the Red Sea's name), salinization (irrigation without drainage), nutrient mining, compaction. Deforestation: fuel wood + farmland expansion → habitat loss, erosion, local drying. Biodiversity: HIPPCO — Habitat loss, Invasive species (water hyacinth choking Tana/Lake Victoria; Prosopis/weeping prosopis swallowing Awash rangelands), Population, Pollution, Climate, Overexploitation. Climate change: enhanced greenhouse — CO₂ from fossil + methane from livestock/rice + N₂O from fertilizer; the evidence: 1.2 °C global warming, Ethiopian temperature records rising, erratic rains, 2015–16 El Niño drought (10 M needed aid), glacier-equivalent retreat. Responses: mitigation (cut emissions — renewables, clean cookstoves, forest carbon) and adaptation (live with change — drought-tolerant crops, water harvesting, early-warning systems, climate-smart agriculture). The honest frame: Ethiopia contributes <0.5% of global emissions but suffers disproportionately — climate justice is biology's policy question.",
  detailed: "<p><b>Air.</b> Indoor: solid-fuel combustion — CO, PM, PAHs; WHO: household air pollution → ARI in children, COPD in women, low birth weight; improved stoves (fuel-efficient, chimney) cut exposure >80% — Ethiopia's clean-cooking program. Outdoor: PM2.5/PM10, NOx, SO₂, O₃ (photochemical); sources: vehicles (Addis's aging fleet), industry, dust, open burning; health: cardiopulmonary mortality, asthma. Inversion traps pollution in valleys/cities; the dose-response is continuous — no safe PM2.5.</p><p><b>Water.</b> Pathogens (fecal — cholera cycles; the WASH response). Nutrients: N/P runoff → eutrophication cascade (algae bloom → die → bacterial decomposition → hypoxia → fish kills — Awassa's sardine collapses; dead zones like the Gulf of Mexico). Industrial: heavy metals (Cr⁶⁺ from tanneries — carcinogenic, bioaccumulative), fluorosis in rift-valley groundwater (natural — teeth/skeletal damage). Plastic: microplastics now in food chains. Groundwater: over-pumping + contamination — invisible until the well fails.</p><p><b>Land.</b> Erosion: sheet → rill → gully; rates on cultivated steep land 10–100× formation; consequences: on-site yield loss + off-site siltation (reservoirs — Tana's inflows; GERD sediment management). Deforestation: fuel wood (~90% of household energy), agricultural frontier, charcoal; effects: habitat fragmentation, hydrological change, carbon release (land use = ~10% of global GHG). Overgrazing: compaction + palatable-species loss → bush encroachment (Prosopis as both cause and symptom). Salinization/waterlogging: irrigation math — salts import with every liter, drainage exports them; without drainage, fields die (the Mesopotamian warning).</p><p><b>Biodiversity.</b> HIPPCO. Invasions: water hyacinth (Tana — clogging fishing, irrigation, biodiversity), Prosopis juliflora (Awash — 100k+ ha; displaces fodder, drops water tables), Lantana, parthenium. Extinctions: the background rate is 1–10/hour vs natural 1–10/CENTURY — the sixth mass extinction; Ethiopia's endemics (walie ibex ~500, Ethiopian wolf <500, 300+ endemic plants) are concentrated risk. Island/biotic-province logic: small fragmented populations → inbreeding, stochasticity → extinction debt.</p><p><b>Climate.</b> Mechanism: solar shortwave in; Earth's infrared out partially absorbed by GHGs (CO₂, CH₄, N₂O, H₂O, CFCs) — natural greenhouse keeps us at +15 °C not −18; enhanced greenhouse = radiative forcing. Evidence: +1.2 °C since 1880, CO₂ 420+ ppm (800k-yr ice-core context: pre-industrial 280), warming accelerating (2023 hottest year), ocean heat content, cryosphere retreat. Ethiopia: +2 °C projected by 2050s; rain variability (kiremt shifts), 2015–16 and 2021–23 droughts, locust upsurges (2020 — desert locust, climate-linked), flood cycles. Impacts: crop yields (teff heat/water stress), rangelands, water, disease range (malaria highlands), coastal (far away but sea-level rise hits the Red Sea). Responses: UNFCCC — Paris Agreement (limit 1.5–2 °C); Ethiopia's NDC (14.5→25% emissions cut conditional on finance — CRGE); adaptation: climate-smart agriculture, early warning (FEWS NET), insurance (RIFT/ARC), diversification; mitigation: renewables (grid already ~90% hydro/now wind/geothermal/solar), clean cooking, forest carbon (REDD+), methane from waste.</p>",
  keyTerms: [
    { term: "PM2.5", def: "fine particles — lung and bloodstream penetration" },
    { term: "Eutrophication", def: "nutrient overload → bloom → hypoxia → dead zone" },
    { term: "Bioaccumulation", def: "concentrants (metals, POPs) up the food chain" },
    { term: "HIPPCO", def: "biodiversity drivers: habitat, invasive, population, pollution, climate, overuse" },
    { term: "Radiative forcing", def: "GHG-driven energy imbalance warming Earth" },
    { term: "Mitigation vs adaptation", def: "cut emissions vs live with changes" }
  ],
  workedExamples: [
    {
      problem: "Trace the causal chain: deforestation on a steep farm → fish kill 50 km downstream.",
      given: "land-to-water link",
      formula: "erosion → sediment → eutrophication",
      substitution: "roots gone → soil washes → river turbidity + nutrient load → algal bloom → decomposition → hypoxia → fish suffocate; plus reservoir siltation",
      calculation: "off-site damage priced",
      answer: "One field's trees, another town's fish — watersheds connect everything"
    },
    {
      problem: "A household cooks with wood 3 h/day in an unventilated kitchen. Name the pollutant class and three diseases.",
      given: "indoor air",
      formula: "biomass smoke",
      substitution: "PM + CO + PAHs; ARI/pneumonia (children), COPD (women), low birth weight; plus lung cancer risk",
      calculation: "chimney stove cuts exposure >80%",
      answer: "Household air pollution — the world's most underrated killer, and the easiest fix"
    },
    {
      problem: "Water hyacinth covers 20% of Lake Tana's shore. List four impacts.",
      given: "invasion",
      formula: "ecosystem engineering",
      substitution: "blocks fishing/navigation; shades out submerged plants (fish nursery loss); evapotranspiration ↑ water loss; mats breed mosquitoes; irrigation intakes clogged",
      calculation: "mechanical + biological control (weevils)",
      answer: "A floating monoculture converts open water into unusable mat — control needs integrated methods"
    },
    {
      problem: "Explain why Ethiopia's <0.5% emissions share still justifies a national climate strategy.",
      given: "justice + self-interest",
      formula: "vulnerability",
      substitution: "impacts hit hardest (rain-fed agriculture, pastoralists, coast-proximate); adaptation saves lives regardless; renewables cut fuel imports; carbon finance rewards forests",
      calculation: "self-protection + leverage",
      answer: "Low contribution, high exposure — mitigation is diplomacy, adaptation is survival"
    },
    {
      problem: "Design a climate-adaptation package for a teff farmer facing erratic rains.",
      given: "farm level",
      formula: "diversify + store + insure",
      substitution: "short-maturity/drought-tolerant varieties; water harvesting (ponds, micro-dams); soil bunds (moisture retention); crop-livestock diversification; index insurance; climate information services (forecast-based early action)",
      calculation: "resilience stack",
      answer: "No single fix — layered options so one failure doesn't end the year"
    }
  ],
  commonMistakes: [
    "Pollution treated as visible dirt — the worst (PM2.5, Cr⁶⁺, microplastics, CO₂) are invisible",
    "Eutrophication blamed on algae alone — the nutrient source (fertilizer/sewage) is the lever",
    "CO₂ called a pollutant — it's natural and essential; the problem is the enhanced-greenhouse rate",
    "Climate change confused with weather — one storm isn't 'proof'; distribution shifts are the signal",
    "Invasive species seen as 'just new plants' — they restructure ecosystems (Prosopis drops water tables)",
    "Adaptation vs mitigation conflated — one copes with change, the other prevents it; both are needed",
    "Deforestation's harm limited to 'fewer trees' — carbon, water cycle, soil and climate all ride on it"
  ],
  applications: [
    "Addis air quality: traffic and industry monitoring — the clean-transport and fuel-quality rules",
    "Akaki restoration: tannery relocation + wetland treatment — industrial legacy cleanup",
    "Tana hyacinth control: mechanical harvest + weevils + community use (crafts, compost)",
    "PSNP: productive safety nets — soil conservation work for transfers (adaptation + restoration)",
    "GERD sediment & flow management: the transboundary dimension of land degradation"
  ],
  summary: "Human impacts run through four channels: pollution (indoor/outdoor air, nutrient and toxic water loads, soil contaminants), habitat conversion (deforestation, overgrazing, erosion — the highlands' topsoil hemorrhage), biodiversity loss (HIPPCO, with invasive hyacinth and Prosopis as Ethiopian case studies), and climate change (radiative forcing from CO₂/CH₄/N₂O — +1.2 °C and rising, hitting rain-fed Ethiopia hardest). Responses split into mitigation (emissions cuts, renewables, forest carbon) and adaptation (climate-smart agriculture, early warning, insurance). The systems are connected: one hillside's deforestation kills downstream fish and warms the atmosphere.",
  visuals: [
    { type: "flowChart", config: { title: "Eutrophication cascade", nodes: [{ label: "N/P runoff", detail: "fertilizer + sewage" }, { label: "Algal bloom", detail: "surface green" }, { label: "Die-off", detail: "bacteria feast" }, { label: "Hypoxia", detail: "fish kill" }] } },
    { type: "mindMap", config: { center: "HIPPCO", branches: [{ label: "Habitat", items: ["deforestation", "fragmentation"] }, { label: "Invasive", items: ["hyacinth", "Prosopis"] }, { label: "Pollution", items: ["air", "water", "soil"] }, { label: "Climate", items: ["warming", "extremes"] }] } },
    { type: "comparison", config: { title: "Mitigation vs adaptation", left: { name: "Mitigation", items: ["cut emissions", "renewables, stoves", "forest carbon", "global good"] }, right: { name: "Adaptation", items: ["live with change", "tolerant crops", "water harvesting", "local survival"] } } }
  ],
  questions: [
    { type: "mcq", q: "The main driver of eutrophication is:", options: ["CO₂", "N and P nutrients", "heavy metals", "plastic"], answer: 1, difficulty: 2, explanation: "Nitrogen/phosphorus feed the bloom" },
    { type: "mcq", q: "Household biomass-cooking smoke mainly causes:", options: ["skin cancer", "ARI/COPD", "diabetes", "hepatitis"], answer: 1, difficulty: 1, explanation: "Respiratory disease — children and women" },
    { type: "mcq", q: "The greenhouse effect is caused by gases that:", options: ["block sunlight", "absorb outgoing infrared", "add oxygen", "reflect UV"], answer: 1, difficulty: 2, explanation: "IR absorption traps heat" },
    { type: "mcq", q: "Prosopis juliflora damages rangelands by:", options: ["fixing nitrogen only", "displacing fodder + dropping water tables", "feeding livestock", "cleaning soil"], answer: 1, difficulty: 3, explanation: "Invasive thicket — ecological engineering harm" },
    { type: "tf", q: "CO₂ is a pollutant that should be eliminated.", answer: false, difficulty: 2, explanation: "Essential natural gas — the problem is the enhanced rate" },
    { type: "tf", q: "Drought-tolerant seeds are an adaptation strategy.", answer: true, difficulty: 1, explanation: "Coping with change already underway" },
    { type: "calc", q: "Pre-industrial CO₂ 280 ppm, now 420 ppm. % increase?", answer: "50", difficulty: 2, explanation: "(420−280)/280 = 50%" },
    { type: "calc", q: "A chimney stove cuts indoor PM by 85% — exposure fraction remaining?", answer: "0.15|15%", difficulty: 2, explanation: "100 − 85 = 15%" },
    { type: "short", q: "Floating lake invader choking Lake Tana:", answer: "water hyacinth", difficulty: 1, explanation: "Eichhornia — water hyacinth" },
    { type: "concept", q: "Why does soil erosion count as both an on-site and off-site pollution problem?", answer: "sediment|turbidity|reservoir siltation|nutrient carry-off", difficulty: 3, explanation: "On-site: the farm loses its living capital (topsoil, nutrients, water-holding). Off-site: the sediment smothers rivers and reservoirs, carries adsorbed fertilizers/pesticides downstream (eutrophication, fish kills), and shortens dam life — the damage exports itself" }
  ]
};

Lessons["g11-biology-ub6-t4"] = {
  overview: "Indigenous conservation practices in Ethiopia: the traditional knowledge systems — church forests, sacred groves, communal grazing rotations, exclosures, agroforestry, seasonal taboos — that preserved biodiversity for centuries, their ecological logic, and their place in modern conservation.",
  objectives: [
    "Define indigenous knowledge and its conservation role",
    "Describe Ethiopian practices: church forests, sacred groves, Qerro/communal rules",
    "Explain the ecological logic behind each practice",
    "Assess threats to indigenous systems",
    "Integrate traditional and scientific conservation"
  ],
  simple: "Long before national parks, Ethiopians conserved nature with rules embedded in culture. Church forests: 12,000+ patches of Afromontane woodland around Orthodox churches — islands of biodiversity in a deforested highland, protected because the forest is part of the sacred precinct (felling taboo; the parish guards, maintains, buries within — identity and ecology fused). Sacred groves and sites: Muslim sheikh shrines, Oromo cudaa-Shingo-like groves, tree-shrines (the Oromo gada system's sacred trees — sycamore oda — where councils meet under them: the tree IS the constitution). Grazing management: rangeland rotations (Oromo/Borana seasonal moves — dry-season refuges protected by customary law), Qerro (Gurage/Tigrayan land-use ethics — communal bylaws on when/where to cut, graze, farm), exclosures (community closures — the modern formalization of ancient rest periods). Agroforestry: home gardens (Enset + coffee + trees — the southern 'false banana' gardens: multi-layer, soil-protecting, food-secure), Gesho bushes planted with injera crops (the fermentation plant — conservation through use). Seasonal taboos: fishing/hunting closures, tree-planting seasons (Yekatit 1 — the national tree day has church-era roots), fire breaks before dry season. The ecological logic: rules that survive centuries do so because they work — rotation lets plants recover; sacred status removes the resource from short-term bargaining; use-rights tied to stewardship duties. Threats: modern law overriding custom, population pressure, youth migration, monoculture incentives. The future: hybrid governance — legal recognition of customary systems (the 2019 forest proclamation devolves to user associations), payment for ecosystem services routed through communities, and science learning from the church-forest seed-rain and pollination networks that kept fragments alive.",
  detailed: "<p><b>Conceptual frame.</b> Indigenous/local knowledge (IK): cumulative, place-based, transmitted culturally (proverbs, rituals, law) — tested across generations. Conservation function: transforms resource management from open-access bargaining into rule-governed stewardship — the cultural answer to Hardin's tragedy. UNESCO/CBD recognize traditional practice under Article 8(j) — respect, preserve, maintain knowledge relevant to conservation.</p><p><b>Church forests.</b> ~2800–12,000 fragments (estimates vary; average 2–3 ha, largest ~300 ha — Tana Qirqos) — remnants of the highland forest that once covered the landscape. Structure: zonal — dense core (old trees, Ficus, Croton, Juniperus, Olea), transitional, edge; biodiversity: endemic plants, birds, small mammals, pollinators; services: springs protection, soil stabilization, windbreak, fruit/bee forage, cultural/refuge. Governance: the parish (mahiber) — felling forbidden (sacrilege), custodian (yesumman/forest guard role), burial ties families to the place; the church calendar (feasts) concentrates stewardship. Science: fragments function as seed sources and pollinator corridors — the landscape-scale network explains why some species survived centuries of deforestation. Threats: agriculture pressure, firewood harvesting inside, invasive species at edges, youth disengagement — conservation of the guardians matters as much as the trees.</p><p><b>Oromo gada & sacred trees.</b> Gada: generation-set governance (Oromo) — laws made under the oda (Cordia africana) sycamore; the tree's protection is constitutional, not incidental. Sacred groves (boku, arada sites) and river-shrine zones: hunting/felling taboos; the Mujaalle community's forest conservation is a documented case — biodiversity held by belief. Borana/Somali rangeland: dhadaa sacred sites, seasonal reserves (fora — dry-season grazing closed to use), water-point governance (the deep wells — eyyaa — with rules and roles) — the mobile-people's conservation of forage and water.</p><p><b>Land-use ethics.</b> Qerro (Gurage, Tigray): communal land-allocation and use rules — who farms where, when, with what obligations (terracing, tree care); the system's famous result: intensive sustainable agriculture on steep slopes for centuries. Enset home gardens: multi-strata (enset, coffee, banana, fodder, timber) — soil cover year-round, food-security buffer (enset feeds ~20 M), agrobiodiversity nursery. Kobo/Amhara: grass-bund fields (vervet-fence + terraces), seasonal hay closures. Fire management: pre-season controlled burns (pastoralists) — the anti-wildfire tradition.</p><p><b>Threats & integration.</b> Erosion of IK: schooling/migration (knowledge holders die un-taught), market pressure (monocrops, charcoal economy), legal pluralism (state law vs custom — historically custom was overridden; now the 2019 proclamation and forest devolution recognize user groups), and the stigma of 'backwardness' that devalues IK. Integration models: community co-management of protected areas (Bale's grazing agreements), legal recognition of exclosures and user associations, IK documentation (ethnobotany — medicinal-plant knowledge with benefit-sharing under Nagoya), hybrid restoration (indigenous species + traditional water harvesting — the 'kettles' and pond systems), and payments routed to customary institutions (church-forest carbon/conservation pilots). The principle: science supplies the metrics; IK supplies the durable rules — conservation that is both is conservation that lasts.</p>",
  keyTerms: [
    { term: "Indigenous knowledge", def: "cumulative place-based practice transmitted culturally" },
    { term: "Church forest", def: "sacred woodland fragment around Ethiopian Orthodox churches" },
    { term: "Gada", def: "Oromo generation-set governance — laws under sacred trees" },
    { term: "Qerro", def: "communal land-use ethics/rules (Gurage/Tigray)" },
    { term: "Exclosure", def: "community-declared regeneration closure (customary origin)" },
    { term: "Co-management", def: "state + community shared conservation governance" }
  ],
  workedExamples: [
    {
      problem: "Explain why church forests persist while identical soils nearby are bare — name the enforcement mechanism.",
      given: "institutional logic",
      formula: "sacred sanction + identity",
      substitution: "felling = sacrilege (spiritual punishment + community shame); the parish owns and guards; burial ties generations to the plot",
      calculation: "centuries of self-enforcement",
      answer: "The rule is embedded in religion and identity — no fence or fine needed; that's why it outlasted state enforcement"
    },
    {
      problem: "A pastoral district overgrazes its dry-season refuge. Which traditional institution fixes it and how?",
      given: "rangeland commons",
      formula: "fora/dhada closure",
      substitution: "customary seasonal reserves — grazing banned until a community-declared opening; elders enforce; violators pay",
      calculation: "rest period = regeneration",
      answer: "The dry-season refuge closure — ancient rotational logic; modern integration: formalize it in the land-use bylaw with the pastoral cooperative"
    },
    {
      problem: "Design a hybrid restoration project for a degraded Orthodox-watershed village.",
      given: "two knowledge systems",
      formula: "science metrics + IK rules",
      substitution: "site survey + indigenous species selection (science); planting and protection via the parish + mahiber (church-forest model); water-spring zones declared sacred-shaded; monitoring by youth club with school curriculum",
      calculation: "legitimacy + ecology",
      answer: "Use the church as the institution, science for species and spacing — the forest model scaled to the watershed"
    },
    {
      problem: "Enset home gardens: list three conservation functions beyond food.",
      given: "agroforestry",
      formula: "structure = function",
      substitution: "year-round ground cover (erosion control), multi-species habitat (birds, pollinators, beneficial insects), on-farm agrobiodiversity (seed/fodder/medicinal plants kept in the garden bank)",
      calculation: "conservation through use",
      answer: "Soil armor, habitat matrix, living gene bank — the garden is conservation infrastructure"
    },
    {
      problem: "Why does 'legal recognition' matter for indigenous systems today?",
      given: "policy interface",
      formula: "rights + incentives",
      substitution: "without recognition: state law can override custom (evictions, concessions); with it: user associations hold tenure, access payments (PES/carbon), and enforcement legitimacy",
      calculation: "tenure security → stewardship",
      answer: "Customary rules protect resources only where the law protects the rules — tenure is the keystone"
    }
  ],
  commonMistakes: [
    "IK romanticized as 'perfect' — it adapts and sometimes fails (population pressure outran some taboos); integration, not nostalgia",
    "Church forests treated as 'just around churches' — they're a landscape network with ecological function (seed sources, corridors)",
    "Exclosures invented as a 20th-century NGO idea — they formalize ancient rest-period customs",
    "Sacred groves dismissed as superstition — the belief IS the enforcement mechanism that made rules durable",
    "Community conservation assumed automatically fair — elders' rules can exclude women/youth/poorer lineages; equity checks needed",
    "IK documentation = conservation — knowledge without practitioners dies; the living institution is the asset",
    "Modern law and custom treated as rivals — the strongest systems are hybrid (proclamation + bylaw)"
  ],
  applications: [
    "Church-forest conservation program: national inventory + firebreaks + enrichment planting with parishes",
    "Gada & customary courts: dispute resolution and grazing-rule enforcement alongside formal law",
    "Exclosure bylaws: villages codifying traditional closures with legal backing (2019 proclamation)",
    "Ethnobotany + Nagoya: documenting medicinal-plant knowledge with benefit-sharing for communities",
    "School curricula: IK transmission — field days at church forests, gada lessons, enset gardens"
  ],
  summary: "Ethiopia's indigenous conservation systems — church forests, sacred groves and trees (gada's oda), pastoral seasonal reserves, Qerro land ethics, enset home gardens, exclosures — protected biodiversity by embedding resource rules in religion, law and identity, making stewardship self-enforcing across centuries. Their ecological logic (rotation, closure, sacred exclusion, use-rights-with-duties) answers the tragedy of the commons culturally. Threats: population, markets, legal override, broken transmission. The future is hybrid: legal recognition of customary institutions, science for metrics and species, IK for durable rules — conservation that communities own.",
  visuals: [
    { type: "mindMap", config: { center: "Indigenous systems", branches: [{ label: "Sacred", items: ["church forests", "oda trees", "shrines"] }, { label: "Rangeland", items: ["fora closures", "rotations", "eyyaa wells"] }, { label: "Farmland", items: ["Qerro rules", "enset gardens", "terraces"] }] } },
    { type: "steps", config: { title: "Why the rules hold", steps: [{ label: "Embed in belief", detail: "sacrilege cost" }, { label: "Tie to identity", detail: "burial, council" }, { label: "Assign custodians", detail: "parish, elders" }, { label: "Benefit the users", detail: "springs, fruit, fodder" }, { label: "Transmit", detail: "children learn" }] } },
    { type: "comparison", config: { title: "Fortress vs community", left: { name: "Fences only", items: ["evicts users", "poaching persists", "resentment", "underfunded"] }, right: { name: "Customary + law", items: ["users guard", "self-enforcing", "benefits local", "durable"] } } }
  ],
  questions: [
    { type: "mcq", q: "Church forests are primarily protected by:", options: ["fences", "religious taboo + parish custodianship", "rangers", "tourism fees"], answer: 1, difficulty: 1, explanation: "Sacred status + community guardians" },
    { type: "mcq", q: "The Oromo sacred tree under which laws are made:", options: ["enset", "oda (sycamore)", "eucalyptus", "acacia"], answer: 1, difficulty: 2, explanation: "Cordia africana — gada's constitutional tree" },
    { type: "mcq", q: "Pastoral dry-season refuge closures work by:", options: ["selling grass", "rest periods for regeneration", "burning", "fencing wildlife"], answer: 1, difficulty: 2, explanation: "Rotation = sustainable yield" },
    { type: "mcq", q: "Enset gardens conserve soil mainly through:", options: ["deep plowing", "year-round multi-layer cover", "irrigation", "monocropping"], answer: 1, difficulty: 2, explanation: "Continuous canopy + roots armor the slope" },
    { type: "tf", q: "Indigenous conservation rules were often self-enforcing.", answer: true, difficulty: 1, explanation: "Belief and identity replace enforcement cost" },
    { type: "tf", q: "Modern law historically always strengthened customary systems.", answer: false, difficulty: 2, explanation: "State law often overrode them — recognition is recent" },
    { type: "short", q: "Communal land-use ethics system (Gurage/Tigray):", answer: "qerro", difficulty: 2, explanation: "Qerro" },
    { type: "short", q: "Community-declared regeneration closure:", answer: "exclosure", difficulty: 1, explanation: "Exclosure" },
    { type: "calc", q: "~12,000 church forests averaging 2 ha: total forest area (ha)?", answer: "24000", difficulty: 2, explanation: "12,000 × 2 = 24,000 ha" },
    { type: "concept", q: "Why do 'use-rights tied to stewardship duties' outperform open access?", answer: "tenure|incentive|long-term|guardian|tragedy of commons", difficulty: 3, explanation: "When a household's right to harvest depends on maintaining the resource (and passes to children), the horizon lengthens and the guardian's self-interest aligns with conservation; open access rewards the fastest extractor — the commons tragedy — while stewardship-tied rights make protection profitable" }
  ]
};
