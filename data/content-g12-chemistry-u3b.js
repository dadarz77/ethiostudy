/* Content: Grade 12 Chemistry — Unit 3 (part B): topics 3-4 */
window.Lessons = window.Lessons || {};

Lessons["g12-chemistry-uc3-t3"] = {
  overview: "The big inorganic commodities — ammonia, sulfuric acid, nitric acid — plus the silicate and soap industries define modern chemical manufacturing. Each is a case study in Unit 3's principles: a reversible or catalytic core reaction, compromise conditions, recycle loops, and waste turned into feed. Learn these five plants and you have read most of the industry.",
  objectives: [
    "Trace the Haber process: feeds, conditions, catalyst, recycle",
    "Trace the Contact process: SO₂ roasting → V₂O₅ oxidation → oleum absorption",
    "Explain Ostwald nitric acid production and its NOx recycle",
    "Summarise cement, glass and soap manufacture as unit-process case studies",
    "Link each plant's conditions to the yield/rate/cost triangle"
  ],
  simple: "<b>Five molecules that build civilisation.</b> NH₃ (fertilizer → the food supply; N₂ + 3H₂ ⇌ 2NH₃, 450 °C/200 atm/Iron catalyst, 15% per-pass recycled to ~98%). H₂SO₄ (the acid that eats everything else's costs: roast sulfur/sulfide → SO₂ → V₂O₅ oxidise to SO₃ → absorb in acid, never water — mist). HNO₃ (Pt-Rh gauze burns NH₃ to NO → NO₂ → absorbed). Cement (limestone + clay, 1450 °C kiln, clinker + gypsum). Soap (fat + NaOH — Unit 4's hydrolysis meets the alkali from chlor-alkali).",
  detailed: "<p><b>Haber (1909).</b> Feeds: N₂ from air, H₂ historically from natural-gas steam reforming (CH₄ + H₂O → CO + 3H₂) — so ammonia plants are energy plants. Reaction N₂ + 3H₂ ⇌ 2NH₃ ΔH = −92 kJ/mol: exothermic with fewer gas moles, so LOW T and HIGH P favour yield; 450 °C is the rate-compromise, 150-300 atm the cost-compromise (steel vessels are expensive), promoted iron catalyst (K₂O/Al₂O₃ helpers) the rate rescue. Ammonia condenses out of the loop; unreacted gases recycle. Legacy: fertilizer that feeds ~half the world's people — and the Contact/Haber pair that made Germany's nitrogen self-sufficient in 1913.</p><p><b>Contact.</b> S (or roasted pyrite/smolter gas) + O₂ → SO₂; then 2SO₂ + O₂ ⇌ 2SO₃, ΔH = −197 kJ/mol, V₂O₅ catalyst at 450 °C, ~1-2 atm — pressure skipped: conversion is already ~99% cheaply (compare Haber's trade-off: a favourite exam contrast). SO₃ dissolves in concentrated H₂SO₄ to oleum (H₂S₂O₇), then diluted — bubbling SO₃ into water makes a corrosive fog of fine H₂SO₄ mist that never settles. Uses: fertilizer (superphosphate, ammonium sulfate), pickling steel, batteries, the lab's workhorse acid.</p><p><b>Ostwald.</b> 4NH₃ + 5O₂ → 4NO + 6H₂O over Pt-Rh gauze at 850 °C (contact seconds — the gauze is precious and mercury-poisoned, so feed gas is purified); NO + ½O₂ → NO₂; 3NO₂ + H₂O → 2HNO₃ + NO with the NO recycled. Products: ammonium nitrate fertilizer/explosive (the Haber-Ostwald marriage), dyes, and the nitration chemistry behind Unit 4's polymers and nylon.</p><p><b>Silicates.</b> Cement: crushed limestone + clay ground to slurry, burned ~1450 °C to clinker (mostly the calcium silicates alite Ca₃SiO₅ and belite Ca₂SiO₄), gypsum added to set-control, hydration not drying gives the strength: why cement cures underwater. Glass: sand + Na₂CO₃ + CaCO₃ ~1500 °C → sodium calcium silicate, a supercooled liquid (no melting point — softens over a range): float glass on tin. Ceramics and bricks: the ancient silicate industry still the biggest by volume.</p><p><b>Soaps and detergents.</b> Saponification: triglyceride + 3NaOH → glycerol + 3 soap (sodium salts of C₁₂-C₁₈ acids). Salt 'cakes' the soap out; the hydrophobic tail / hydrophilic carboxylate head structure micelles grease away — except in hard-water areas where Ca²⁺ precipitates scum, so detergents (Unit 4's sulfonates, made from the Contact process's own acid: the industries interlock) replace them. Edible-oil and soap factories in Addis/Adama run this exact chemistry at industrial scale.</p>",
  keyTerms: [
    { term: "Steam reforming", def: "CH₄ route to Haber's H₂" },
    { term: "Oleum", def: "SO₃ in H₂SO₄: the safe absorption route" },
    { term: "Promoter", def: "K₂O/Al₂O₃: catalyst helper, not catalyst" },
    { term: "Clinker", def: "kiln nodule that becomes cement with gypsum" },
    { term: "Saponification", def: "fat + alkali → soap + glycerol" },
    { term: "Scum", def: "Ca²⁺ soap precipitate: hard-water tax" },
    { term: "Float glass", def: "molten ribbon on tin: perfect flatness" }
  ],
  formulas: [
    { name: "Haber", formula: "N₂ + 3H₂ ⇌ 2NH₃ (ΔH = −92)", meaning: "the yield/rate compromise poster-child", vars: [{ name: "450 °C, 200 atm", meaning: "Fe catalyst" }], when: "fertilizer" },
    { name: "Contact core", formula: "2SO₂ + O₂ ⇌ 2SO₃ (ΔH = −197)", meaning: "V₂O₅ makes pressure unnecessary", vars: [{ name: "99%", meaning: "per-pass conversion" }], when: "sulfuric plants" },
    { name: "Ostwald first stage", formula: "4NH₃ + 5O₂ → 4NO + 6H₂O", meaning: "Pt-Rh gauze, seconds", vars: [{ name: "NO recycle", meaning: "ostwald's loop" }], when: "nitric acid" },
    { name: "Saponification", formula: "fat + 3NaOH → 3RCOONa + C₃H₅(OH)₃", meaning: "hydrolysis pushed to salts", vars: [{ name: "glycerol", meaning: "the by-product sold" }], when: "soap works" }
  ],
  workedExamples: [
    { problem: "Why does Contact run at ~1 atm but Haber at ~200?", calculation: "Contact: −197 kJ with K already huge at 450 °C + catalyst: pressure adds little yield for much cost. Haber's K is modest: pressure (4→2 moles) does real work.", answer: "Each process pays only for levers that still move: exam contrast par excellence." },
    { problem: "Absorbing SO₃ directly in water is rejected. Why?", calculation: "Reaction is violently exothermic: fine H₂SO₄ aerosol forms — a mist too small to condense.", answer: "Hence oleum then dilution: the plant sidesteps its own fog." },
    { problem: "From 340 t NH₃, max HNO₃? (moles conserved N)", calculation: "340/17 = 20 Mmol N → 20 Mmol HNO₃ max = 1260 t.", answer: "1.26 kt — and real plants lose a little NOx; yield vs theory again." },
    { problem: "Why gypsum in cement?", calculation: "Clinker phases hydrate far too fast (flash set).", answer: "Gypsum moderates set: the mixer's working time is a chemistry decision." }
  ],
  commonMistakes: [
    "Quoting Haber's 15% per-pass as the plant's yield (recycle makes it ~98%)",
    "Writing SO₃ + H₂O in the Contact flowsheet (oleum route instead)",
    "Saying V₂O₅ 'increases yield' (rate; position set by T/P)",
    "Confusing glass's softening range with a sharp melting point",
    "Forgetting Pt/Rh gauze poisoning — feed purification is part of Ostwald"
  ],
  applications: [
    "Urea and NPS fertilizer blending for Ethiopian agriculture",
    "Cement: Derba/Mugher/Bale Mountain in one equation",
    "Soap and edible-oil refineries (Adama, Kombolcha)",
    "Pickling acids and battery acid from sulfuric plants"
  ],
  summary: "Haber/Contact/Ostwald = the triangle in industrial costume; cement/glass/soap = silicate and saponification unit processes — five case studies that carry every principle of the unit.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The catalyst in Haber is:", options: ["V₂O₅", "promoted iron", "Pt-Rh", "Ni"], answer: 1, difficulty: 1, explanation: "Fe with K₂O/Al₂O₃ promoters." },
    { type: "mcq", q: "SO₃ is absorbed in H₂SO₄ (not water) to avoid:", options: ["cost", "corrosive acid mist", "NOx", "polymer"], answer: 1, difficulty: 1, explanation: "Direct water contact fogs fine H₂SO₄." },
    { type: "mcq", q: "Contact skips high pressure because:", options: ["gas moles increase", "catalyst + temperature give ~99% already", "SO₃ is solid", "law forbids"], answer: 1, difficulty: 2, explanation: "No benefit left to buy — the triangle again." },
    { type: "mcq", q: "Haber's H₂ commonly comes from:", options: ["water electrolysis always", "steam reforming of natural gas", "coal only", "air"], answer: 1, difficulty: 2, explanation: "CH₄ + H₂O → CO + 3H₂ (then shift)." },
    { type: "mcq", q: "Ostwald's first reactor uses:", options: ["iron", "Pt-Rh gauze", "V₂O₅", "clay"], answer: 1, difficulty: 2, explanation: "4NH₃ + 5O₂ → 4NO on precious-metal gauze." },
    { type: "mcq", q: "Cement hardens by:", options: ["drying", "hydration reactions", "melting", "evaporation"], answer: 1, difficulty: 2, explanation: "Why it cures underwater — dries is the wrong verb." },
    { type: "mcq", q: "Soap fails in hard water because:", options: ["it evaporates", "Ca²⁺ precipitates the carboxylate as scum", "it oxidises", "pH"], answer: 1, difficulty: 3, explanation: "Insoluble calcium 'soap': detergents dodge this." },
    { type: "mcq", q: "Increasing Haber pressure raises NH₃ yield because:", options: ["rates fall", "fewer gas moles on product side", "catalytic", "exothermic only"], answer: 1, difficulty: 3, explanation: "4 mol gas → 2: Le Chatelier's mole lever." }
  ]
};

Lessons["g12-chemistry-uc3-t4"] = {
  overview: "Ethiopia's manufacturing map is readable in chemical terms: cement from limestone and power, sugar and ethanol from cane, edible oil from seed, leather from hides, textiles and apparel, pharmaceuticals and fertilizer blending near demand, plus the extractive chemistry of gold, copper and potash. This topic grounds the unit's abstractions in plants that exist — or are proposed — within the country's borders.",
  objectives: [
    "Name the major chemical-industry families present in Ethiopia",
    "Explain cement manufacture's local raw materials and energy logic",
    "Describe sugar/ethanol and oil-seed processing chemistry",
    "Summarise leather, textile and pharmaceutical sectors' chemistry",
    "Assess constraints (power, forex, logistics) and the potash/geothermal prospects"
  ],
  simple: "<b>Chemistry, made in Ethiopia.</b> Limestone + clay + power = cement (the Derba/Mugher/Bale Mountain plants; the country's fastest-growing industry by output). Cane = sugar + molasses ethanol (Wonji, Pesaw, Metehra — fermentation's Equation, Unit 4's chemistry at 100 000 L/day scale). Noug and sunflower seed = pressed/refined oil (solvent extraction: hexane, distillation). Hides = chrome-tanned leather (the tanning chemistry that Bishoftu's plants export). Fertilizer: blending and importing urea/NPS while the Danakil potash project is still awaiting rail and power. The through-line: agro-processing and building materials — chemistry close to the farm and the construction boom — with heavy industry (smelting, petrochem) still ahead.",
  detailed: "<p><b>Cement (the anchor industry).</b> Raw materials are everywhere (limestone, clay, gypsum) so location follows power and transport: kilns are power-hungry (wet process thermally wasteful; modern dry lines cut kWh/t sharply). The clinker chemistry is Unit 3 topic 3 verbatim; the industry's CO₂ story is Unit 5: calcination CaCO₃ → CaO + CO₂ releases ~60% of the sector's emissions inherently — fuel efficiency can't touch it; blended cements (limestone or pozzolan additions, volcanic ash is abundant in the Rift) cut clinker fraction and footprint together. Ethiopia's per-capita consumption is still a fraction of global average with a construction economy: growth is the plan.</p><p><b>Sugar, ethanol, oil — the agro-chemical trio.</b> Cane → milling (sucrose extraction), liming and SO₂ clarifying (the sulfuric-acid chemistry of topic 3 at food grade), crystallisation to white sugar; molasses → fermentation (sucrose inverted to glucose+fructose, then C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ via yeast — biology's industrial fermentation, Unit 2 of Biology and Unit 4 of this chapter in one) → fuel-blend and export ethanol; bagasse → boiler fuel and increasingly paper/board — biomass-to-energy inside a food factory. Oilseeds (noug, sunflower, sesame, linseed): pressing then hexane solvent extraction, refining = degum/neutralise (NaOH, the soap reaction run backwards to strip FFA)/bleach (clay adsorption)/deodorise (steam distillation) — the same unit-operations grammar as the textbook.</p><p><b>Leather and textiles.</b> Tanning converts protein skin to stable material: chromium(III) sulfate crosslinks collagen (the blue 'wet blue' intermediate that dominates export finishing), vegetable tannins (quebracho, mimosa — Ethiopia grows sisal-adjacent agroforestry) for leathers that age. Textiles: cotton ginning→spinning→weaving→sizing/desizing (starch removal — enzymatic now, green-chemistry win), dyeing (reactive dyes for cotton, the fiber-polymer chemistry of Unit 4) and the effluent problem: colour and salt load on the Reppa/Modjo — treatment chemistry as industrial duty, not option. The industrial parks (Hawassa, Bishoftu) concentrate apparel where water treatment and shared effluent plants make environmental chemistry practical.</p><p><b>Fertilizer, pharma, extractives.</b> Ethiopia's soils are nutrient-tired: NPS/urea blending plants (like the Adama complex) import or (prospect) make the nutrients — the demand that a Haber plant would answer, currently answered by forex and shipping. Pharmaceuticals: formulations (tableting, syrups — unit operations again) with API imports still the gap; the national plan targets local actives. Extractives: gold (Legadembi, Tura — gravity + cyanidation: 4Au + 8NaCN + O₂ → [Au(CN)₂]⁻ chemistry, and the mercury alternative is a public-health choice), platinum/tantalum potential, Danakil potash (the world-class sylvinite deposit waiting for rail and 24/7 power — the 'reserve vs resource' line from topic 2 made literal), and geothermal steam (Aluta-Langano) that could pay for all of it in electricity — the green-industrial story the curriculum's final unit wants you to see coming.",
  keyTerms: [
    { term: "Dry process kiln", def: "modern low-kWh cement route" },
    { term: "Blended cement", def: "clinker + pozzolan/limestone: lower CO₂" },
    { term: "Molasses ethanol", def: "sugar waste → fuel: fermentation scale-up" },
    { term: "Wet blue", def: "chrome-tanned intermediate: leather's workhorse" },
    { term: "Solvent extraction", def: "hexane oil recovery from seed" },
    { term: "API", def: "active pharma ingredient: Ethiopia's import gap" },
    { term: "Cyanidation", def: "Au dissolution as [Au(CN)₂]⁻" },
    { term: "Sylvinite", def: "KCl+NaCl rock: Danakil potash ore" }
  ],
  formulas: [
    { name: "Ethanol fermentation", formula: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂", meaning: "yeast at industrial scale (molasses diluted to this sugar)", vars: [{ name: "~15 ° max", meaning: "yeast ethanol tolerance" }], when: "fuel and export" },
    { name: "Calcination (cement)", formula: "CaCO₃ → CaO + CO₂", meaning: "inherent process CO₂", vars: [{ name: "~0.5 t/t clinker", meaning: "the emissions floor" }], when: "climate accounting" },
    { name: "Cyanidation", formula: "4Au + 8CN⁻ + O₂ + 2H₂O → 4[Au(CN)₂]⁻ + 4OH⁻", meaning: "oxygen needed to dissolve gold", vars: [{ name: "Eh-pH", meaning: "why lime + air" }], when: "gold plants" }
  ],
  workedExamples: [
    { problem: "A sugar mill burns bagasse to run its boilers. Which principle?", calculation: "Biomass waste becomes process fuel; grid power freed.", answer: "By-product valorisation + heat integration (topic 1) — the mill is its own power plant." },
    { problem: "Cement's CO₂ per tonne clinker: why can't efficiency remove it all?", calculation: "~60% is calcination stoichiometry, not fuel loss.", answer: "Chemistry of CaCO₃ itself: only clinker-substitution (blended cement, pozzolans) cuts the floor." },
    { problem: "Danakil potash is 'resource' not yet 'reserve'. What changes that?", calculation: "Mine+rail+power+port cost vs price forecast.", answer: "Reserve = economics: topic 2's definition applied to Ethiopia's flagship project." },
    { problem: "A tannery treats effluent with lime then settling.", calculation: "Cr(OH)₃ precipitates at pH ~8-9, stripping chromium.", answer: "The tanning metal is recoverable: precipitation chemistry closing the loop (green chemistry #1/#9)." }
  ],
  commonMistakes: [
    "Attributing all cement CO₂ to fuel (calcination is the majority)",
    "Saying Ethiopian industry is only agriculture (cement, leather, chemicals exist)",
    "Confusing ethanol distillation with synthesis (fermentation first)",
    "Treating potash as already producing (project-stage: resource ≠ output)",
    "Naming industrial parks without their shared-treatment chemistry (the enabling infrastructure)"
  ],
  applications: [
    "Derba/Mugher/Bale Mountain: clinker lines near raw material + power",
    "Wonji-Pesaw-Metehra: sugar-ethanol-bagasse circularity",
    "Hawassa industrial park: apparel with a modern ETP",
    "Legadembi gold: cyanidation done right (vs artisanal mercury)"
  ],
  summary: "Ethiopian manufacturing = agro-processing (sugar, oil, leather, textiles) + building materials (cement) + extraction (gold, potash, geothermal) — every unit principle readable on a local flowsheet.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Ethiopia's largest chemical-industry output family is:", options: ["petrochemicals", "cement/building materials", "pharma APIs", "aluminium"], answer: 1, difficulty: 1, explanation: "Construction demand + local limestone: cement leads." },
    { type: "mcq", q: "Bagasse in a sugar mill is used for:", options: ["fertilizer only", "boiler fuel (and board)", "cattle only", "landfill"], answer: 1, difficulty: 1, explanation: "Biomass energy: the mill self-powers." },
    { type: "mcq", q: "'Wet blue' leather is tanned with:", options: ["vegetable tannin", "chrome(III) salts", "formaldehyde", "salt only"], answer: 1, difficulty: 2, explanation: "The Cr(III) intermediate's colour names it." },
    { type: "mcq", q: "Most cement CO₂ comes from:", options: ["trucks", "CaCO₃ calcination", "lighting", "grinding only"], answer: 1, difficulty: 2, explanation: "Process emissions: the chemical equation itself." },
    { type: "mcq", q: "Molasses → ethanol requires first:", options: ["distillation only", "dilution + fermentation to ~10-15% then distilling", "cracking", "polymerising"], answer: 1, difficulty: 2, explanation: "Sugars → beer → spirits: biology then separation." },
    { type: "mcq", q: "Ethiopia imports urea rather than making it mainly because:", options: ["no demand", "Haber plants need cheap continuous H₂ feed + capital", "soil rejects it", "ban"], answer: 1, difficulty: 3, explanation: "The fertilizer topic's economics: energy and capital first." },
    { type: "mcq", q: "Cyanidation needs dissolved oxygen because:", options: ["bacteria", "Au oxidation potential: O₂ is the oxidant", "it bubbles colour out", "temperature"], answer: 1, difficulty: 3, explanation: "The equation puts O₂ in the reactants." },
    { type: "mcq", q: "Rift volcanic ash in cement is a:", options: ["pollutant", "pozzolan: reactive silica for blended cement", "set accelerator", "pigment"], answer: 1, difficulty: 3, explanation: "Local pozzolans cut clinker fraction (and CO₂)." }
  ]
};
