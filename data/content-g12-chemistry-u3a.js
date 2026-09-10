/* Content: Grade 12 Chemistry — Unit 3 (part A): topics 1-2 */
window.Lessons = window.Lessons || {};

Lessons["g12-chemistry-uc3-t1"] = {
  overview: "Industrial chemistry turns raw materials into saleable products at the scale where every decision is an economic equation: reaction rate vs yield vs cost, continuous vs batch, and the eternal three-way trade between conversion, selectivity and separation. This opening topic installs the vocabulary — unit processes, feedstock, yield, recycling — that the rest of the unit spends on real plants.",
  objectives: [
    "Define unit processes and distinguish batch from continuous operation",
    "Explain why industry balances yield against rate and cost",
    "Define feedstock, product, by-product, waste and their economics",
    "Describe the role of catalysis, recycling and heat integration",
    "Read a flowsheet: raw material in, conditions, separation, out"
  ],
  simple: "<b>Chemistry that pays its bills.</b> A lab flask makes grams; a plant must make tonnes per day and still sell them profitably. Industry therefore runs reactions where conditions are a compromise (Haber: 450 °C — slower than hot, useless cold, but the best money point), recycles everything unreacted, chooses continuous flow for volume, and treats every leftover atom as either a by-product to sell or waste to pay for.",
  detailed: "<p><b>Scale changes the questions.</b> In the lab you ask 'does it work?'; in a plant the questions are 'how fast (space-time yield), how selective (main product vs by-products), how pure (separation cost), and how cheap per tonne'. A 90% yield that needs four distillations can lose to an 80% yield that crystallises out — separation is often the majority of capital cost.</p><p><b>Batch vs continuous.</b> Batch (fermentation tanks, pharma, specialty dyes): flexible, small lots, cleaned between runs. Continuous (ammonia,sulfuric acid, cement kilns, refineries): steady state, huge throughputs, automatic control, lower unit cost — the chemical industry's default for commodities. Modern plants blend both: continuous reactors, batch finishing.</p><p><b>The condition triangle.</b> Temperature raises rate but may lower equilibrium yield (exothermic reactions) — the reversible-reaction compromise. Pressure favours fewer gas moles (Haber 200 atm, Contact ~1-2 atm because V₂O₅ makes conversion cheap without it). Catalysts change speed, never position — they let a compromise condition become profitable (the economic reason catalysis is on the green-chemistry list too). Every industrial 'why these conditions?' exam answer is this triangle plus catalyst life.</p><p><b>Recycle and integration.</b> Single-pass conversion is often deliberately modest (10-15% in some reactors) because the unreacted feed is separated and recycled: high OVERALL yield at low per-pass cost. Heat integration: hot product streams preheat incoming feed (heat exchangers — energy is money and CO₂). Waste hierarchy: sell (by-product sulfur from gas purification), reuse internally, treat, and only then dispose.</p><p><b>Feeds and markets.</b> Feedstock identity sets plant location: air + water + gas/coal → ammonia (energy-shipping molecules), mineral phosphate → fertilizer (bulk-shipping), crude → petrochemicals (pipeline/logistics), biomass → food/fermentation (perishable source near processing). Ethiopia reads on this map: fertilizer blending plants near demand, cement near limestone and power, sugar near cane, edible oil near seed.</p>",
  keyTerms: [
    { term: "Unit process", def: "one named industrial reaction step (Haber, Contact)" },
    { term: "Space-time yield", def: "product per reactor volume per hour" },
    { term: "Selectivity", def: "desired product / everything made" },
    { term: "Conversion (per-pass)", def: "fraction reacted in one trip through the reactor" },
    { term: "Recycle stream", def: "unreacted feed returned to save money" },
    { term: "Continuous operation", def: "steady flow, not batch" },
    { term: "By-product", def: "saleable co-output, not waste" }
  ],
  formulas: [
    { name: "Yield", formula: "yield = actual/theoretical ×100%", meaning: "atom-use scorecard", vars: [{ name: "real basis", meaning: "limiting reagent moles" }], when: "every plant report" },
    { name: "Selectivity", formula: "S = n(desired)/n(converted feed)", meaning: "the wrong-products tax", vars: [{ name: "vs AE", meaning: "route vs run" }], when: "process comparison" },
    { name: "Recycle math", formula: "overall conv = 1 − (fresh out/fresh in)", meaning: "modest per-pass + loop = near-total", vars: [{ name: "purge", meaning: "inerts must bleed off" }], when: "flowsheeting" }
  ],
  workedExamples: [
    { problem: "A reactor converts 12% of N₂+H₂ per pass. Why is the plant still ~97% efficient?", calculation: "Unreacted gases are cooled, ammonia separated, and the rest recycled.", answer: "Per-pass conversion is cheap if the recycle loop is tight: only purge losses leave." },
    { problem: "Route A: 85% yield, two distillations. Route B: 78% yield, one crystallisation. Which per-tonne might win?", calculation: "Separation units can consume >50% of energy cost.", answer: "B — yield percentage is not the whole cost story." },
    { problem: "Why does an exothermic reversible reaction run at middling temperature?", calculation: "Cold favours yield but kills rate; hot favours rate but erodes equilibrium yield.", answer: "The compromise point — with catalyst to rescue the rate side." },
    { problem: "A cement kiln preheats raw meal with exhaust gases. Which principle?", calculation: "Hot product stream heats cold feed via heat exchanger.", answer: "Heat integration: energy reuse is both cheaper and greener (Unit 5 principle 6)." }
  ],
  commonMistakes: [
    "Claiming catalysts 'increase yield' (they increase RATE; equilibrium position is untouched)",
    "Confusing per-pass conversion with overall utilisation when a recycle exists",
    "Choosing conditions by lab instinct instead of the cost triangle",
    "Forgetting the purge: recycling forever concentrates inerts",
    "Calling every by-product waste (some fund the plant's margins)"
  ],
  applications: [
    "Fertilizer blending and urea plants supplying Ethiopian agriculture",
    "Cement (Derba, Mugher): continuous kiln chemistry",
    "Sugar refining: batch vs continuous unit operations side by side",
    "Edible-oil solvent extraction: separation-dominated economics"
  ],
  summary: "Industry = the same equilibria and rates priced in money: compromise conditions, catalysts, recycle loops, heat integration, and flowsheets that ship products not flasks.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A catalyst affects:", options: ["equilibrium yield", "reaction rate only", "ΔH of reaction", "Kc"], answer: 1, difficulty: 1, explanation: "Speeds both directions equally: position unchanged." },
    { type: "mcq", q: "Continuous processing is preferred for:", options: ["pharma batches", "high-volume commodity chemicals", "custom dyes", "lab synthesis"], answer: 1, difficulty: 1, explanation: "Steady state pays for capital at scale." },
    { type: "mcq", q: "Low per-pass conversion can still mean a good plant because:", options: ["yield is ignored", "the recycle returns unreacted feed", "catalysts fix it", "waste is free"], answer: 1, difficulty: 2, explanation: "Loop economics, not single-trip." },
    { type: "mcq", q: "The hottest cost in many plants is:", options: ["reactor building", "separation/purification", "office", "labour"], answer: 1, difficulty: 2, explanation: "Distillation especially: energy-heavy columns." },
    { type: "mcq", q: "Why preheat feed with product stream?", options: ["to clean it", "cut fuel/energy cost", "raise pressure", "add catalyst"], answer: 1, difficulty: 2, explanation: "Heat integration recycles enthalpy already paid for." },
    { type: "mcq", q: "Selectivity measures:", options: ["speed", "desired share of converted feed", "purity", "temperature control"], answer: 1, difficulty: 3, explanation: "Wrong-product minimisation — the atom-economy of operation." },
    { type: "mcq", q: "A purge stream in a recycle loop exists to:", options: ["save money", "remove accumulating inert by-products", "add catalyst", "cool the reactor"], answer: 1, difficulty: 3, explanation: "Inerts have no exit otherwise and strangle conversion." },
    { type: "mcq", q: "Ammonia plants locate near cheap energy because:", options: ["N₂ is scarce", "electricity/fuel dominates cost", "water is heavy", "markets are remote"], answer: 1, difficulty: 3, explanation: "Feedstocks (air, water) are cheap; the H₂ from gas is the bill." }
  ]
};

Lessons["g12-chemistry-uc3-t2"] = {
  overview: "Industry eats natural resources: air (N₂, O₂, noble gases), water, mineral ores, fossil carbon and biomass — and where those resources sit shapes where plants sit. This topic inventories the raw-material base, the separation chemistry that unlocks it (air liquefaction, ore concentration, brine and mineral processing), and Ethiopia's own resource ledger.",
  objectives: [
    "List the atmosphere, hydrosphere and lithosphere as chemical feedstocks",
    "Explain fractional distillation of liquefied air (N₂/O₂/Ar)",
    "Describe ore concentration and why gangue matters",
    "Summarise fertilizer minerals: phosphate rock, potash, sulfur",
    "Map Ethiopian resources to potential industries"
  ],
  simple: "<b>The periodic table starts in nature.</b> Air is a free N₂/O₂/Ar mixture: liquefy and fractionally distil it (boiling points: O₂ −183, N₂ −196, Ar −186 °C) and you own three industries. Seawater and brines give salt, the chlorine-alkali feed. Ores are minerals with enough metal to mine (gangue is the worthless host rock — removing it early saves hauling mountains). Ethiopia's ledger: hydropower (the real exportable chemical), potash (Danakil), phosphate, iron ore, gold, copper, limestone, geothermal steam.",
  detailed: "<p><b>Air.</b> Dust and CO₂/H₂O scrubbed (they'd freeze the columns), compressed, cooled by expansion, liquefied, then fed to a double column: nitrogen (lowest bp) draws off the top, oxygen the bottom, argon tapped mid — all three sold: N₂ to ammonia (Haber feed), O₂ to medicine and steel, Ar to welding blankets. Cryogenics supply chains put an air-separation unit beside every steel mill and fertiliser complex.</p><p><b>Water and brines.</b> Fresh water: solvent, coolant, reactant (chlor-alkali cathode, hydration, quenching). Saline sources: evaporated solar salt (the Danakil and Gelilala flats do exactly this: crystallising-pond NaCl from seawater/brine — the cheapest salt chemistry has), then purification to brine feed. Rock-salt solution mining pumps water down, brine up.</p><p><b>Ores and concentration.</b> Ore = mineral + gangue. Beneficiation physically separates: crush, then gravity/ dense-medium for heavy minerals (gold), magnetic for Fe₃O₄, and froth flotation for sulfides — collectors make the mineral surface hydrophobic so air bubbles carry it while gangue sinks: chemistry of surfaces selling itself. Concentrating EARLY matters: hauling raw rock to a smelter wastes the smelter.</p><p><b>Mineral nutrients.</b> Phosphate rock (fluorapatite Ca₅(PO₄)₃F) barely dissolves — treat with sulfuric acid to 'superphosphate' or wash with HCl/HNO₃: the fertilizer industry's central conversion (S is mined, float-process recovered or desulfurized from gas). Potash (KCl, sylvinite) from evaporite beds. Sulfur from native deposits, gas refining (Claus), and pyrite roasting. Every nutrient element (N-P-K) has a distinct mineral or air origin and a distinct plant.</p><p><b>Ethiopia's ledger honestly read.</b> Grand Renaissance and other hydro: exportable electricity (and green H₂/e-fuels prospect). Danakil: potash (the most developed non-hydro megaproject pitch), salt, geothermal brines, sulfur. Gold (Legadembi, Tigray), copper (Akaki), platinum group potential in the ophiolite belts, iron (Sosa), manganese, tantalum (Kenticha — a world-class niobium-tantalum carbonatite: battery/electronics metals), limestone for cement, and geothermal steam at Aluta-Langano. Constraints: infrastructure and forex — resources without conversion routes stay in the ground: chemistry is the bridge.</p>",
  keyTerms: [
    { term: "Fractional distillation of air", def: "bp-sorted N₂/O₂/Ar from liquefaction" },
    { term: "Gangue", def: "worthless host rock around ore" },
    { term: "Beneficiation", def: "upgrading ore before transport/smelting" },
    { term: "Froth flotation", def: "hydrophobic mineral on bubbles" },
    { term: "Superphosphate", def: "acid-treated phosphate rock: soluble fertilizer" },
    { term: "Evaporite", def: "sun-made salt/potash deposit" },
    { term: "Reserve", def: "ore that pays to mine at today's cost and price" }
  ],
  formulas: [
    { name: "Claus sulfur recovery", formula: "2H₂S + SO₂ → 3S + 2H₂O", meaning: "gas-purification waste becomes fertilizer feed", vars: [{ name: "H₂S", meaning: "from sour gas" }], when: "the quietest big industry" },
    { name: "Phosphate conversion", formula: "Ca₅(PO₄)₃F + 5H₂SO₄ + ... → superphosphate", meaning: "insoluble rock → plant-available P", vars: [{ name: "acid", meaning: "from Unit 3's sulfuric topic" }], when: "fertilizer works" },
    { name: "Salt crystallisation", formula: "NaCl(aq) →evap→ NaCl(s)", meaning: "solar ponds: sun does the work", vars: [{ name: "common ion", meaning: "later steps purify" }], when: "Gelilala flats" }
  ],
  workedExamples: [
    { problem: "Which air component comes off first in the column?", calculation: "Lowest boiling point: N₂ −196 °C.", answer: "Nitrogen (top); oxygen (−183) leaves as liquid bottoms; argon mid-draw." },
    { problem: "An ore is 0.8% copper. Why float it to 25% before smelting?", calculation: "Smelting costs scale with tonnes through the furnace: 100 t raw → ~3 t concentrate does the same copper.", answer: "Gangue removal = moving the cheap rock at mine-mouth prices, not furnace prices." },
    { problem: "A gas field's H₂S is burned partly to SO₂ then reacted. Products?", calculation: "Claus: 2H₂S + SO₂ → 3S + 2H₂O.", answer: "Elemental sulfur: hazardous waste converted to fertilizer feedstock." },
    { problem: "Solar salt ponds concentrate seawater to brine. What precipitates first as water leaves?", calculation: "CaSO₄ reaches saturation before NaCl (solubility ordering).", answer: "Gypsum first, then halite — ponds are fractional crystallisation in the sun." }
  ],
  commonMistakes: [
    "Saying oxygen distils off the top of the air column (nitrogen is more volatile)",
    "Treating 'mineral' and 'ore' as synonyms (ore = economical to mine NOW)",
    "Ignoring CO₂/H₂O removal before liquefaction (plugged columns)",
    "Believing phosphate rock dissolves in water (hence the acid plant next door)",
    "Listing resources without conversion economics (resources ≠ reserves ≠ industry)"
  ],
  applications: [
    "Air-separation units feeding steel and hospital oxygen",
    "Danakil potash and salt projects",
    "Kenticha tantalum-niobium: electronics-grade concentration",
    "Cement: crushed limestone is mineral processing before chemistry"
  ],
  summary: "Feedstock inventory: air by boiling points, ores by surface chemistry, phosphates by acid attack, salt by the sun — and industry sits where the cheapest route from ground to product lands.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Liquid air distillation separates mainly by:", options: ["density", "boiling point", "colour", "reactivity"], answer: 1, difficulty: 1, explanation: "N₂ (−196) over Ar (−186) over O₂ (−183 °C)." },
    { type: "mcq", q: "Gangue is:", options: ["the metal", "the worthless rock in ore", "a flux", "a catalyst"], answer: 1, difficulty: 1, explanation: "The matrix you reject early." },
    { type: "mcq", q: "Froth flotation separates minerals by:", options: ["magnetism", "surface wetting (hydrophobicity)", "colour", "melting point"], answer: 1, difficulty: 2, explanation: "Collector-coated particles ride bubbles." },
    { type: "mcq", q: "Phosphate rock is acid-treated because:", options: ["it is too hard", "plants cannot absorb insoluble fluorapatite", "acid adds nitrogen", "it is radioactive"], answer: 1, difficulty: 2, explanation: "P availability is a solubility problem." },
    { type: "mcq", q: "The Claus process converts H₂S into:", options: ["SO₂ only", "elemental sulfur", "sulfuric acid directly", "pyrite"], answer: 1, difficulty: 2, explanation: "2H₂S + SO₂ → 3S: waste-to-feedstock." },
    { type: "mcq", q: "In a solar pond, first to crystallise from seawater is:", options: ["NaCl", "CaSO₄ (gypsum)", "KCl", "MgCl₂"], answer: 1, difficulty: 3, explanation: "Least soluble salt hits saturation first." },
    { type: "mcq", q: "Ore concentration before smelting mainly saves:", options: ["reductant", "transport and furnace energy", "labour", "water"], answer: 1, difficulty: 3, explanation: "Move the metal, not the mountain." },
    { type: "mcq", q: "Argon's industrial role is best as:", options: ["fertilizer", "inert shielding gas", "bleaching agent", "fuel"], answer: 1, difficulty: 3, explanation: "Noble = welding blankets and bulb fill." }
  ]
};
