/* ============================================================
   Content: Grade 10 Chemistry — Unit 2: Solutions
   3 topics. Rich format + 3 visuals per lesson.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- c2-1: Mixtures and Solution Process --- */
Lessons["g10-chemistry-uc2-t1"] = {
  overview: "Almost nothing around you is pure: coffee, blood, air, brass, concrete — all mixtures. This lesson sorts matter into pure substances vs mixtures (homogeneous vs heterogeneous), then studies the star of the show: the SOLUTION — a homogeneous mixture where solute particles hide completely inside solvent. Dissolving is not magic: it's particle competition — solvent pulls solute apart faster than solute holds itself together.",
  objectives: [
    "Distinguish pure substances, mixtures, solutions, suspensions and colloids",
    "Classify mixtures as homogeneous or heterogeneous with examples",
    "Explain the dissolving process in particle terms (solvation)",
    "State the factors speeding dissolution: stirring, temperature, surface area",
    "Describe saturated/unsaturated/supersaturated solutions and solubility curves"
  ],
  simple: "A MIXTURE keeps its components' identities (iron + sulfur powder — you can still see and separate them). A COMPOUND is chemically new (heated iron+sulfide — one substance, fixed ratio). Mixtures come in two flavours: HETEROGENEOUS (uneven — sand in water, salad, granite: you see the parts) and HOMOGENEOUS (perfectly even — salt water, air, brass: you can't see the parts no matter how close you look). A homogeneous mixture = SOLUTION: solute (the dissolved stuff, usually less) scattered as individual particles through solvent (the doing-stuff, usually more). Water dissolves more than any other liquid — 'universal solvent'. WHY things dissolve: water's δ charges grab ions/molecules off the crystal surface and cage them (solvation) — if water's grab beats the crystal's hold, it dissolves. 'Like dissolves like': polar dissolves polar/ionic; non-polar dissolves non-polar (oil in petrol). Speed it up with stir, heat, or crush — all three just give solvent more contact.",
  detailed: `<p><b>Pure vs mixture:</b> Pure substance = one kind of particle (element or compound), fixed properties, no physical separation method. Mixture = two+ substances physically combined, variable composition, separable physically (filtration, distillation, magnet, chromatography). Iron filings + sulfur: grey+yellow specks, magnetic, no heat change — mixture. Heat them: red glow, new black solid, non-magnetic, fixed 1:1 ratio — compound (FeS). That's the test: properties and ratios.</p>
<p><b>Solution anatomy:</b> Solute dissolves, solvent dissolves-it. Aqueous = water solvent. Solutions aren't only liquid: air (O₂ in N₂ — gas in gas), brass (zinc in copper — solid in solid), soda water (CO₂ in water — gas in liquid), vinegar (acetic acid in water). Particle size: solutions < 1 nm (never scatter light, pass through filter paper AND membranes); COLLOIDS 1–1000 nm (look uniform but scatter light — Tyndall beam in fog/milk; can't filter — gelatin, mayonnaise, blood plasma); SUSPENSIONS > 1000 nm (cloudy, settle on standing, filterable — muddy water, chalk in water, oral-medicine 'shake well' bottles).</p>
<p><b>The dissolving mechanism (solvation):</b> Ionic crystal (NaCl): lattice ions held by electrostatic attraction. Water's δ⁺ H faces Cl⁻, δ⁻ O faces Na⁺ at the surface → ion-dipole attraction + water's high dielectric constant weakens the lattice pull → ions break free, each wrapped in a hydration shell → drift apart. Energy tug-of-war: lattice energy (holds crystal) vs hydration energy (water's grab) — when hydration wins, dissolving is easy; when lattice wins, the salt 'doesn't dissolve' (AgCl). Covalent polar solutes (sugar, ethanol) dissolve without ionising — H-bonding with water, molecules stay whole (sugar water doesn't conduct; salt water does).</p>
<p><b>Rate factors — all about contact:</b> Stirring (replaces solvent at the crystal face with fresh solvent), heating (particles move faster — more collisions; usually increases solubility of solids), crushing (surface area ×100 = dissolution ×100 — why you chew tablets and why teff flour wets faster than whole grains). Rate ≠ solubility: these speed the JOURNEY to saturation, not the destination.</p>
<p><b>Saturation language:</b> UNSATURATED = more can dissolve. SATURATED = dynamic equilibrium — dissolving rate = crystallising rate, max dissolved at that temperature. SUPERSATURATED = cooled gently past saturation — unstable; a seed crystal triggers instant crystallisation (rock-candy/honey granulation). SOLUBILITY = grams solute per 100 g water to saturate at a given T — read it off curves: most solids curve up with temperature; gases curve DOWN (warm cola goes flat faster; thermal pollution reduces lake O₂ for fish). Pressure barely moves solids/liquids but packs more gas in (soda cans, Henry's law — scuba divers' bends).</p>`,
  keyTerms: [
    { term: "Mixture", def: "Physically combined substances — variable ratio, separable." },
    { term: "Homogeneous / heterogeneous", def: "Uniform throughout / visibly mixed phases." },
    { term: "Solute / solvent", def: "Dissolved / dissolving medium." },
    { term: "Solvation / hydration", def: "Solvent caging of solute particles / water doing it." },
    { term: "Colloid / suspension", def: "Medium particles (Tyndall, no settling) / big particles (settle, filter)." },
    { term: "Tyndall effect", def: "Light beam visible through a colloid (fog headlight)." },
    { term: "Saturated solution", def: "Max dissolved at that T — dynamic equilibrium." },
    { term: "Supersaturated", def: "Over-full, unstable — seeds crystallise." },
    { term: "Solubility", def: "g solute per 100 g solvent at saturation." },
    { term: "Like dissolves like", def: "Polar↔polar/ionic; non-polar↔non-polar." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Classify each: (a) fog, (b) muddy river water after settling, (c) stainless steel, (d) milk, (e) salt water.",
      given: "Five everyday samples.",
      formula: "Particle size + uniformity test.",
      substitution: "(a) Fog = liquid droplets in air → colloid (Tyndall: car beam visible). (b) Muddy water = big particles that settle → suspension. (c) Stainless steel = Fe+C+Cr uniformly mixed atoms → solution (solid in solid). (d) Milk = fat droplets in water → colloid (globules too big to dissolve, too small to settle). (e) Salt water = true solution.",
      calculation: "Quick field test: filter paper catches suspensions; light beam reveals colloids; solutions pass both.",
      answer: "Colloid, suspension, solution, colloid, solution."
    },
    {
      problem: "A student stirs sugar in iced tea, and some stays at the bottom. He heats the cup and it dissolves. Explain both observations with saturation language.",
      given: "Temperature-dependent solubility.",
      formula: "Solubility of solids ↑ with T.",
      substitution: "In cold tea the solution hit SATURATION — sugar dissolves as fast as it crystallises, excess sits undissolved. Heating raises sugar's solubility (more can stay dissolved) → the equilibrium shifts → bottom sugar dissolves until the new, higher saturation point.",
      calculation: "Sugar solubility: ~180 g/100 g water at 25 °C → ~490 g at 80 °C.",
      answer: "Same sugar, different ceiling — temperature moved the saturation limit."
    },
    {
      problem: "Explain, in particle terms, why oil does NOT dissolve in water but DOES in petrol — use 'like dissolves like' mechanistically.",
      given: "Two solvents, one solute.",
      formula: "Intermolecular force matching.",
      substitution: "Oil = long non-polar hydrocarbons held by weak dispersion forces. Water molecules H-bond strongly to EACH OTHER and have no δ charges to offer the oil — inserting oil breaks water-water H-bonds with nothing to replace them → water excludes oil (phase separation). Petrol = non-polar too → its molecules interact with oil via the same dispersion forces → mixing costs nothing → dissolves.",
      calculation: "Detergent's trick: molecule with BOTH ends (hydrophilic head, hydrophobic tail) — micelles carry grease in water.",
      answer: "Dissolving needs a fair trade of attractions; oil-water trade is a loss, oil-petrol is even."
    },
    {
      problem: "Warm a sealed bottle of fizzy drink and it explodes when opened; a cold one fizzes gently. Explain with gas solubility.",
      given: "Gases vs temperature.",
      formula: "Gas solubility ↓ as T ↑.",
      substitution: "CO₂ is dissolved under pressure (Henry). Warming drives CO₂ OUT of solution (inverse of solids) → gas collects in headspace → pressure builds. Opening releases the lid on that pressure → the dissolved + headspace CO₂ explosively comes out of solution (nucleation on every surface). Cold drink keeps CO₂ dissolved → gentle fizz.",
      calculation: "Same reason warm lakes hold less O₂ for fish (thermal pollution).",
      answer: "Gases run the opposite curve to solids — heat pushes them out."
    }
  ],
  commonMistakes: [
    "Calling any clear liquid 'pure' — salt water looks pure but is a solution; pure = one substance chemically.",
    "Confusing mixture with compound: mixtures keep component properties and variable ratios; compounds don't.",
    "Saying solutions are always liquids — air and brass are solutions too.",
    "Believing colloids are solutions because they look uniform — the Tyndall beam gives them away.",
    "Thinking stirring INCREASES solubility — it speeds dissolving but the saturation amount is unchanged.",
    "Saying 'all solids dissolve better when hot' — most do, but gases and a few solids (Ce₂(SO₄)₃, Na₂SO₄ past 32 °C) go the other way.",
    "Confusing saturated with concentrated — saturation is the equilibrium limit at a T; concentrated is just 'a lot'.",
    "Thinking dissolving destroys the substance — sugar in tea is still sugar (recover it by evaporation)."
  ],
  applications: [
    "Water treatment: coagulants clump colloidal clay so it settles (muddy highland water → clear); sand filters catch suspensions.",
    "Food: mayonnaise = egg-yolk emulsifier forcing oil into water-vinegar colloid; honey granulating = supersaturation in action.",
    "Laundry science: detergent's dual-end molecules form micelles — the only way water carries oil stains.",
    "Fizzy drinks industry: CO₂ dissolved cold under pressure; warm storage = flat product.",
    "Medicine: IV fluids must be true solutions (isotonic); 'shake well' suspensions need redispersing; sublingual tablets dissolve on contact.",
    "Scuba & altitude: pressure changes gas solubility in blood — slow ascent prevents bends (N₂ bubbles)."
  ],
  summary: "Matter: pure (element/compound) vs mixture (heterogeneous or homogeneous). Solution = homogeneous mixture <1 nm particles; colloids scatter light (Tyndall); suspensions settle and filter. Dissolving = solvation: solvent grabs beat solute holds; like dissolves like. Rate: stir/heat/crush (contact, not capacity). Saturation = dynamic equilibrium; solubility curves: solids mostly ↑ with T, gases ↓.",
  visuals: [
    { type: "comparison", config: { title: "Solution vs Colloid vs Suspension", left: { name: "Solution", items: ["<1 nm — invisible particles", "Never settles, passes filters", "No Tyndall beam", "Salt water, air, brass"] }, right: { name: "Colloid / Suspension", items: ["Colloid 1–1000 nm: Tyndall, no settling (milk, fog)", "Suspension >1000 nm: settles, filterable (muddy water)", "Test: light beam + standing time"] } } },
    { type: "steps", config: { steps: [{ detail: "Water's δ⁺/δ⁻ faces lattice ions at the surface", label: "Attack" }, { detail: "Ion-dipole grab + dielectric weakening", label: "Pry loose" }, { detail: "Ion escapes wrapped in hydration shell", label: "Solvate" }, { detail: "Shells keep ions apart — crystal dissolves", label: "Spread" }], title: "How Water Dissolves Salt" } },
    { type: "qa", config: { title: "Mixture Detectives — tap to reveal", pairs: [{ q: "Headlights show a glowing beam through morning fog but not through clean dry air. Why?", a: "Fog is a colloid — droplets scatter light (Tyndall effect); true solutions are too fine to scatter." }, { q: "Why do 'shake well' bottles exist?", a: "They're suspensions — big particles settle by gravity; shaking redisperses them for an even dose." }, { q: "Why does sea fish taste different from freshwater fish?", a: "Seawater is a ~3.5% solution of many salts — osmoregulation and diet differ; the mixture's composition shapes biology." }] } }
  ],
  questions: [
    { type: "mcq", q: "Which is a homogeneous mixture?", options: ["Sand and water", "Salt water", "Salad", "Granite with visible crystals"], answer: 1, difficulty: 1, explanation: "Uniform throughout at particle level — a true solution." },
    { type: "mcq", q: "A light beam becomes visible passing through it. The sample is a:", options: ["True solution", "Colloid", "Suspension", "Pure compound"], answer: 1, difficulty: 2, explanation: "Tyndall scattering = colloid (solutions too fine, suspensions settle/filter)." },
    { type: "short", q: "In salt water, the water is the ____ and the salt is the ____.", answer: "solute;solvent|solvent solute", difficulty: 1, explanation: "Solvent dissolves (water); solute gets dissolved (salt)." },
    { type: "concept", q: "Explain 'like dissolves like' in one sentence with an example.", answer: "polar dissolves polar|nonpolar in nonpolar|oil petrol", difficulty: 2, explanation: "Substances dissolve in solvents with matching intermolecular forces — polar water dissolves salt/sugar; non-polar petrol dissolves oil." },
    { type: "tf", q: "Stirring increases how much sugar can dissolve in cold water.", answer: false, difficulty: 2, explanation: "Stirring speeds the RATE; the saturation amount (solubility) depends on temperature, not stirring." },
    { type: "mcq", q: "Gas solubility in water usually:", options: ["Increases with temperature", "Decreases with temperature", "Is unaffected by temperature", "Only depends on colour"], answer: 1, difficulty: 2, explanation: "Warm water releases dissolved gases — warm cola goes flat, warm lakes hold less O₂." },
    { type: "short", q: "A solution holding more dissolved solute than its saturation point (unstable) is ____.", answer: "supersaturated", difficulty: 3, explanation: "Supersaturated — seed it and it crystallises instantly." },
    { type: "concept", q: "Why is muddy water a suspension but milk a colloid?", answer: "particle size|settles vs stays|filter vs not", difficulty: 2, explanation: "Mud particles >1000 nm settle and filter out; milk fat globules 1–1000 nm stay dispersed and only show Tyndall." },
    { type: "ordering", q: "Pick the correct solvation sequence for NaCl in water:", options: ["Hydration shells form → water faces ions → ions leave lattice", "Water's δ charges face surface ions → ion-dipole attraction weakens lattice → ions leave, get hydrated → crystal shrinks", "Ions evaporate → water grabs → shells break", "Stir → heat → colour change"], answer: [1], difficulty: 2, explanation: "Attack surface → pry loose → cage → spread — the particle mechanism." }
  ]
};

/* --- c2-2: Concentration of Solutions --- */
Lessons["g10-chemistry-uc2-t2"] = {
  overview: "'A spoon of salt in a cup' tells a chemist nothing — we need numbers. Concentration measures how much solute lives in how much solution: molarity (mol/L) is chemistry's favourite, mass/volume % is the pharmacy's, and dilution arithmetic (M₁V₁ = M₂V₂) lets you make any weaker solution from a strong one.",
  objectives: [
    "Calculate molarity from moles and volume (and rearrange all three ways)",
    "Convert between molarity, moles and volume fluently",
    "Express concentration as g/L and mass/volume %",
    "Perform dilution calculations with M₁V₁ = M₂V₂",
    "Prepare a standard solution in the lab (weigh → dissolve → make up to volume)"
  ],
  simple: "CONCENTRATION = how much solute per how much solution. Three ways to say it: (1) g/L — grams of solute in each litre (simple: 20 g salt in 2 L = 10 g/L). (2) w/v % — grams per 100 mL (saline 0.9% = 0.9 g NaCl per 100 mL). (3) Molarity (M) — MOLES per litre, the chemist's favourite because moles count PARTICLES: 0.5 M sugar = 0.5 mol in every litre = 3×10²³ molecules per litre. The triangle: moles = M × V(L); M = n/V; V = n/M. DILUTION: adding water multiplies volume and divides concentration — the moles never change → M₁V₁ = M₂V₂. Always: litres in the molarity formula, and stir the ACID into water, never the reverse.",
  detailed: `<p><b>Molarity defined:</b> M = n/V where n in mol, V in LITRES. 1.0 M NaCl = 58.5 g dissolved and made up to exactly 1.0 L of SOLUTION (not 1 L water added — the final volume is what counts). Common trap: mL → L by ÷1000. Molarity is a particle counter: 1 M glucose and 1 M NaCl have the same number of SOLUTE units per litre, but NaCl splits into 2 ions → 2 osmoles/L (why saline, not pure water, goes into veins — osmosis link to bio Unit 5).</p>
<p><b>Other units:</b> g/L = mass concentration (m/V). w/v % = grams per 100 mL (medical: 5% dextrose drip = 5 g/100 mL = 50 g/L). ppm = mg/L — trace analysis (fluoride in drinking water ~1 ppm; lead limit 0.01 ppm). Mole fraction and molality exist (G11) but molarity rules school labs.</p>
<p><b>Preparation protocol (standard solution):</b> calculate mass = M × V × Mᵣ → weigh on balance → dissolve in BEAKER with LESS than final volume of water → transfer via funnel + glass rod, RINSE beaker into flask (every gram counts) → make up to the calibration mark with wash bottle, last drops by pipette (meniscus on line) → stopper and invert 10×. Volumetric flask = precision; measuring cylinder = approximation.</p>
<p><b>Dilution logic:</b> moles before = moles after (water adds volume, not solute) → n₁ = n₂ → M₁V₁ = M₂V₂. Making 250 mL of 0.1 M from 1.0 M stock: V₁ = (0.1×250)/1.0 = 25 mL stock + water to 250 mL. Serial dilution: each step ×10 weaker — microbiology counts colonies from 10⁻⁶ tubes. SAFETY: concentrated acid dilution is exothermic — ALWAYS acid into water, slowly, stirring (water into acid: the little water boils locally → acid spit).</p>
<p><b>Working backwards:</b> 'What volume of 2 M HCl gives 0.05 mol?' V = n/M = 0.025 L = 25 mL. 'How many grams in 500 mL of 0.2 M CuSO₄ (Mᵣ 159.5)?' n = 0.2×0.5 = 0.1 mol → m = 15.95 g. These two-step chains are the exam standard: volume→moles→mass, or mass→moles→volume.</p>`,
  keyTerms: [
    { term: "Molarity (M)", def: "mol solute per litre of solution." },
    { term: "Concentrated / dilute", def: "Relative — lots vs little solute per volume." },
    { term: "w/v %", def: "Grams solute per 100 mL solution (saline 0.9%)." },
    { term: "g/L", def: "Mass concentration." },
    { term: "ppm", def: "mg/L — trace levels (fluoride ~1 ppm)." },
    { term: "Volumetric flask", def: "Calibrated-to-one-volume flask — precise making-up." },
    { term: "Dilution", def: "Add solvent: M₁V₁ = M₂V₂, moles unchanged." },
    { term: "Serial dilution", def: "Repeated fixed-ratio weakenings (microbiology)." },
    { term: "Stock solution", def: "Concentrated reserve, diluted as needed." }
  ],
  formulas: [
    {
      name: "Molarity",
      formula: "M = n / V",
      meaning: "Moles of solute per litre of solution.",
      vars: "M = molarity (mol/L), n = moles of solute, V = volume of solution in LITRES",
      units: "mol/L (M)",
      when: "Any solution calculation; particle counting.",
      example: "0.25 mol in 500 mL → 0.25/0.5 = 0.5 M."
    },
    {
      name: "Mole triangle",
      formula: "n = M × V",
      meaning: "Moles hidden in any volume of solution.",
      vars: "n = moles, M = molarity, V = litres",
      units: "mol",
      when: "Before any stoichiometry with solutions.",
      example: "2 L of 0.1 M = 0.2 mol = 1.2×10²² units."
    },
    {
      name: "Dilution equation",
      formula: "M₁V₁ = M₂V₂",
      meaning: "Moles conserved when you add water.",
      vars: "1 = before, 2 = after (concentrated stock → dilute use)",
      units: "consistent M and V both sides",
      when: "Making weaker solutions from stock.",
      example: "1.0 M stock → 250 mL of 0.1 M: V₁ = 25 mL."
    },
    {
      name: "Mass concentration",
      formula: "c = m / V",
      meaning: "Grams per litre.",
      vars: "c = g/L, m = grams, V = litres",
      units: "g/L",
      when: "When moles aren't needed (water treatment doses).",
      example: "5 g in 2 L = 2.5 g/L."
    }
  ],
  workedExamples: [
    {
      problem: "Calculate the molarity when 5.85 g of NaCl (Mᵣ 58.5) is dissolved and made up to 250 mL.",
      given: "m = 5.85 g, V = 250 mL, Mᵣ = 58.5.",
      formula: "n = m/Mᵣ, then M = n/V.",
      substitution: "n = 5.85/58.5 = 0.100 mol. V = 250/1000 = 0.250 L.",
      calculation: "M = 0.100/0.250 = 0.400 mol/L.",
      answer: "0.4 M — note: made UP TO 250 mL total, not added to 250 mL water."
    },
    {
      problem: "How many mL of 2.0 M HCl contain 0.15 mol of HCl?",
      given: "M = 2.0, n = 0.15.",
      formula: "V = n/M.",
      substitution: "V = 0.15/2.0 = 0.075 L.",
      calculation: "0.075 L × 1000 = 75 mL.",
      answer: "75 mL — the triangle rearrangement is the whole skill."
    },
    {
      problem: "You need 500 mL of 0.1 M CuSO₄ from a 1.0 M stock. What volume of stock, and how do you prepare it safely?",
      given: "M₁ = 1.0, M₂ = 0.1, V₂ = 500 mL.",
      formula: "M₁V₁ = M₂V₂.",
      substitution: "V₁ = (0.1 × 500)/1.0 = 50 mL stock.",
      calculation: "Pipette 50 mL stock into 500 mL volumetric flask containing ~200 mL water first, make up to mark, invert to mix.",
      answer: "50 mL stock + water to 500 mL — always add concentrated TO water."
    },
    {
      problem: "A dextrose drip is labelled 5% w/v. How many grams of glucose does a 1 L bag deliver, and what is its molarity? (Mᵣ glucose = 180)",
      given: "5 g per 100 mL.",
      formula: "w/v % → g/L → M.",
      substitution: "5 g/100 mL = 50 g/L → 1 L bag = 50 g. n = 50/180 = 0.278 mol.",
      calculation: "M = 0.278/1 = 0.28 M.",
      answer: "50 g ≈ 0.28 M — pharmacy labels and molarity are the same fact in two languages."
    },
    {
      problem: "0.1 mol of NaOH is needed for a titration. What volume of 0.25 M NaOH delivers exactly that?",
      given: "n = 0.1, M = 0.25.",
      formula: "V = n/M.",
      substitution: "V = 0.1/0.25 = 0.4 L.",
      calculation: "= 400 mL.",
      answer: "400 mL — measure it, don't guess it."
    }
  ],
  commonMistakes: [
    "Using mL directly in M = n/V — CONVERT to litres first (÷1000). The #1 exam error.",
    "Dissolving 5.85 g in 250 mL WATER — molarity uses final SOLUTION volume; make up TO the mark.",
    "Forgetting dilution conserves MOLES — students 'lose' solute or double-count it.",
    "Adding water to concentrated acid — exothermic spit; ALWAYS acid into water.",
    "Confusing 0.9% saline (0.9 g/100 mL) with 0.9 g/L — factor-of-100 w/v % trap.",
    "Thinking 1 M NaCl and 1 M glucose have identical particle effects — NaCl gives 2 osmoles of particles per formula unit.",
    "Rounding 0.075 L to 7.5 mL — ×1000, not ×100.",
    "Using a measuring cylinder when the experiment needs a volumetric flask (precision matters in titration prep)."
  ],
  applications: [
    "IV drips: 0.9% saline and 5% dextrose — concentration matched to blood osmolarity (bio link).",
    "Water treatment: chlorine dosed in ppm/mg/L — under-dose doesn't disinfect, over-dose tastes and irritates.",
    "Agriculture: fertilizer solution strengths (teaspoon per litre = crude w/v %); hydroponics runs on exact molar nutrient recipes.",
    "Cooking scaled: brine percentages (2% salt by water weight) are mass concentrations — the same math.",
    "Medicine: paediatric doses by mg/kg then diluted to safe w/v — dilution errors are the classic dosing accident.",
    "Lab prep: every titration starts with this lesson — standard solutions made by exactly this protocol."
  ],
  summary: "Concentration = solute per solution: g/L, w/v % (g/100 mL), ppm (mg/L), and M = n/V (mol/L — the particle counter). Triangle: n = M×V. Dilution conserves moles: M₁V₁ = M₂V₂; acid into water. Standard solution: calculate → weigh → dissolve → make up to mark → mix.",
  visuals: [
    { type: "steps", config: { steps: [{ detail: "m = M × V × Mᵣ (e.g. 0.5 M × 1 L × 58.5 = 29.25 g)", label: "Calculate" }, { detail: "Weigh on balance into clean beaker", label: "Weigh" }, { detail: "Dissolve in ~half the final water, stir", label: "Dissolve" }, { detail: "Rinse all into volumetric flask", label: "Transfer" }, { detail: "Water to the mark (meniscus), invert ×10", label: "Make up" }], title: "Making a Standard Solution" } },
    { type: "barChart", config: { labels: ["0.1 M", "0.5 M", "1.0 M", "2.0 M"], values: [0.1, 0.5, 1, 2], title: "Molarity = mol per litre — same volume, more particles", unit: "mol/L" } },
    { type: "qa", config: { title: "Concentration Clinic — tap to reveal", pairs: [{ q: "Two cups: 1 spoon salt in 100 mL vs 2 spoons in 200 mL. Which is stronger?", a: "Identical concentration (both 1 spoon/100 mL) — ratio, not total amount, defines concentration." }, { q: "Why does a 1 L 0.9% saline bag contain 9 g, not 0.9 g?", a: "% w/v = per 100 mL: 0.9 g × 10 = 9 g per litre." }, { q: "Why must you never put water into concentrated acid?", a: "The tiny water volume heats violently at the interface and spits acid — pour acid slowly into the big water volume instead." }] } }
  ],
  questions: [
    { type: "calc", q: "Molarity of 0.2 mol NaOH in 500 mL solution? (M)", answer: "0.4", difficulty: 1, explanation: "0.2/0.5 = 0.4 M.", tolerance: 0.01 },
    { type: "calc", q: "How many moles in 250 mL of 0.5 M KCl?", answer: "0.125", difficulty: 1, explanation: "n = M×V = 0.5 × 0.25 = 0.125 mol.", tolerance: 0.01 },
    { type: "mcq", q: "5% w/v means:", options: ["5 g per litre", "5 g per 100 mL", "5 mL per 100 g", "5% of the mass"], answer: 1, difficulty: 2, explanation: "w/v % = grams per 100 mL of solution." },
    { type: "calc", q: "Grams of NaCl (Mᵣ 58.5) to make 200 mL of 0.5 M? (g)", answer: "5.85", difficulty: 2, explanation: "n = 0.5×0.2 = 0.1 mol → 0.1×58.5 = 5.85 g.", tolerance: 0.05 },
    { type: "calc", q: "Diluting 100 mL of 2.0 M to 0.5 M — final volume (mL)?", answer: "400", difficulty: 2, explanation: "M₁V₁=M₂V₂ → V₂ = 2×100/0.5 = 400 mL.", tolerance: 1 },
    { type: "mcq", q: "The correct dilution safety rule is:", options: ["Water into acid slowly", "Acid into water slowly", "Mix in any order", "Never dilute acids"], answer: 1, difficulty: 1, explanation: "The big water volume absorbs the heat safely." },
    { type: "short", q: "Molarity units are ____ per litre.", answer: "mol|mole|moles", difficulty: 1, explanation: "mol/L = M." },
    { type: "calc", q: "Volume of 0.25 M HCl containing 0.05 mol? (mL)", answer: "200", difficulty: 2, explanation: "V = n/M = 0.05/0.25 = 0.2 L = 200 mL.", tolerance: 2 },
    { type: "concept", q: "Why is molarity more useful than g/L for reaction calculations?", answer: "counts particles|moles react 1:1|mass ignores Mr", difficulty: 3, explanation: "Reactions combine PARTICLES (moles), not grams — molarity gives particle counts directly." },
    { type: "tf", q: "Dissolving 58.5 g NaCl in 1 L of water gives exactly 1 M solution.", answer: false, difficulty: 3, explanation: "Final volume exceeds 1 L — molarity needs solute made up TO 1 L of SOLUTION." }
  ]
};

/* --- c2-3: Solution Stoichiometry --- */
Lessons["g10-chemistry-uc2-t3"] = {
  overview: "Unit 1's mole math meets Unit 2's molarity: when solutions react, the balanced equation counts particles and M×V supplies them. Titration is the crown jewel — a measured reaction where the equivalence point reveals an unknown concentration, drop by drop.",
  objectives: [
    "Combine molarity with balanced-equation mole ratios",
    "Calculate reactant/product amounts for solution reactions",
    "Describe titration setup, indicators and the equivalence point",
    "Solve titration calculations (including 1:1 and 1:2 ratios)",
    "Handle limiting reagent problems in solution context"
  ],
  simple: "Solution stoichiometry = two tools chained: (1) M×V gives MOLES of each solution, (2) the balanced equation gives the MOLE RATIO. Example: how much 1 M HCl neutralises 20 mL of 1 M NaOH? Equation 1:1 → need 0.02 mol HCl → V = 0.02/1 = 20 mL. TITRATION: unknown in the flask + indicator; standard solution in the burette; run dropwise to the colour change (end point ≈ equivalence point — where moles have reacted in exact equation ratio). For 1:1 reactions the shortcut is M₁V₁ = M₂V₂; for 1:2 (like Na₂CO₃ + 2HCl) you MUST use the ratio — the shortcut silently fails. Real lab: rough run, then concordant titres within 0.1 mL, average them.",
  detailed: `<p><b>The general recipe (always works):</b> (1) Balance the equation. (2) Convert known solution to moles: n = M×V. (3) Mole ratio from coefficients → moles of unknown. (4) Convert back: V = n/M or m = n×Mᵣ. Never skip to shortcuts unless the ratio is 1:1.</p>
<p><b>Titration hardware & language:</b> Burette (0.05 mL graduations) holds the STANDARD (known concentration — the titrant). Pipette (25.0 mL) measures the ALIQUOT of unknown into the flask. Indicator: few drops — litrate of choice (phenolphthalein: colourless↔pink, strong acid-base; methyl orange: red↔yellow). End point = colour change observed; equivalence point = stoichiometric truth — indicators are chosen so they nearly coincide. Procedure: swirl constantly, wash down sides, half-drops near the end (rinse the tip with distilled water), read meniscus at eye level to 2 dp. Rough titre → repeat until two concordant (±0.10 mL) → average ONLY concordant values.</p>
<p><b>Worked patterns:</b> Acid + base 1:1 (HCl + NaOH): M_aV_a = M_bV_b. 1:2 (2HCl + Na₂CO₃): n(HCl) = 2×n(Na₂CO₃) — the common trap. Redox (G11 preview: KMnO₄ vs Fe²⁺ 1:5) follows the same ratio discipline.</p>
<p><b>Precipitation stoichiometry:</b> Mix AgNO₃(aq) + NaCl(aq) → AgCl(s). Moles of each from M×V; smaller/coefficients = limiting; precipitate mass = n(limiting)×Mᵣ(AgCl). Gravimetry: filter, dry, weigh the precipitate → work BACKWARDS to find an unknown concentration — titration's sibling.</p>
<p><b>Limiting reagent in solution:</b> Same logic as Unit 1 but with M×V inputs: compute both moles, divide by coefficients, smaller wins. Excess reagent leftover = initial − reacted; leftover concentration = n(excess)/total volume (volumes ADD when mixing).</p>`,
  keyTerms: [
    { term: "Titration", def: "Controlled reaction to find an unknown concentration." },
    { term: "Standard solution", def: "Known concentration (in the burette)." },
    { term: "Aliquot", def: "Precisely measured sample (pipette into flask)." },
    { term: "Indicator", def: "Dye changing colour near the equivalence point." },
    { term: "Equivalence point", def: "Moles reacted in exact equation ratio." },
    { term: "End point", def: "Observed colour change — the practical signal." },
    { term: "Concordant titres", def: "Repeat volumes within 0.10 mL — average these." },
    { term: "Titrant", def: "The solution delivered from the burette." },
    { term: "Gravimetry", def: "Weighing a precipitate to find amounts." }
  ],
  formulas: [
    {
      name: "Titration 1:1 shortcut",
      formula: "M_a V_a = M_b V_b",
      meaning: "Equal moles at equivalence — ONLY for 1:1 reactions.",
      vars: "M_a, V_a = acid molarity/volume; M_b, V_b = base",
      units: "M and mL (consistent both sides)",
      when: "HCl vs NaOH, HNO₃ vs KOH.",
      example: "20 mL base needs 15 mL of 0.1 M acid → M_b = 0.1×15/20 = 0.075 M."
    },
    {
      name: "General ratio method",
      formula: "n_unknown = n_known × (coeff_unknown / coeff_known)",
      meaning: "The equation's mole ratio — always correct.",
      vars: "n = moles; coefficients from the balanced equation",
      units: "mol",
      when: "Every solution stoichiometry problem.",
      example: "Na₂CO₃ + 2HCl: n(HCl) = 2 × n(Na₂CO₃)."
    }
  ],
  workedExamples: [
    {
      problem: "25.0 mL of NaOH is titrated with 0.100 M HCl; the average titre is 21.5 mL. Find the NaOH molarity.",
      given: "V_b = 25.0 mL, M_a = 0.100 M, V_a = 21.5 mL.",
      formula: "HCl + NaOH (1:1): M_b = M_aV_a/V_b.",
      substitution: "n(HCl) = 0.100 × 0.0215 = 0.00215 mol = n(NaOH).",
      calculation: "M_b = 0.00215/0.0250 = 0.086 M.",
      answer: "0.086 M NaOH — 1:1 so the shortcut is legal."
    },
    {
      problem: "20.0 mL of Na₂CO₃ needs 35.0 mL of 0.200 M HCl (Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂). Find the carbonate molarity. Why does M₁V₁=M₂V₂ fail here?",
      given: "1:2 reaction.",
      formula: "n(HCl) = 2 × n(Na₂CO₃).",
      substitution: "n(HCl) = 0.200 × 0.035 = 0.007 mol → n(Na₂CO₃) = 0.0035 mol.",
      calculation: "M = 0.0035/0.020 = 0.175 M. The shortcut would give 0.35 M — exactly double, because it assumes 1:1.",
      answer: "0.175 M — always check the coefficients before using shortcuts."
    },
    {
      problem: "50 mL of 0.2 M AgNO₃ + 30 mL of 0.4 M NaCl. Find the AgCl precipitate mass (Mᵣ 143.5) and the limiting reagent.",
      given: "AgNO₃ + NaCl → AgCl + NaNO₃.",
      formula: "Compare n/coeff.",
      substitution: "n(AgNO₃) = 0.01 mol; n(NaCl) = 0.012 mol. Both ÷1 → AgNO₃ limiting.",
      calculation: "n(AgCl) = 0.01 → m = 0.01 × 143.5 = 1.435 g.",
      answer: "1.44 g AgCl; AgNO₃ runs out first, 0.002 mol NaCl left over."
    },
    {
      problem: "How many mL of 0.5 M H₂SO₄ fully neutralise 4 g of NaOH? (2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O)",
      given: "m(NaOH) = 4 g, Mᵣ 40.",
      formula: "Mass → moles → ratio → volume.",
      substitution: "n(NaOH) = 0.1 mol → n(H₂SO₄) = 0.05 mol (1:2).",
      calculation: "V = 0.05/0.5 = 0.1 L = 100 mL.",
      answer: "100 mL of the acid."
    },
    {
      problem: "A student rinses the burette with distilled water (not titrant) before filling. Predict the effect on the titre and the calculated unknown concentration.",
      given: "Systematic error analysis.",
      formula: "Dilution in the burette.",
      substitution: "Water film dilutes the standard → its real M < label → MORE volume needed to deliver the same moles → titre too big → calculated unknown concentration too HIGH.",
      calculation: "Rule: rinse burette with titrant, flask with water only (flask dilution doesn't change moles).",
      answer: "Overestimated unknown — the classic 'rinse with what it will hold' lesson."
    }
  ],
  commonMistakes: [
    "Using M₁V₁ = M₂V₂ for non-1:1 reactions — the ratio method is the safe universal path.",
    "Forgetting volumes must be in LITRES for n = M×V (or keep mL consistently and get mmol).",
    "Reading the burette from above/below the meniscus — eye level, bottom of meniscus, 2 decimal places.",
    "Averaging ALL titres including the rough — only concordant repeats go in the mean.",
    "Rinsing the burette with water then filling with titrant — dilutes the standard (see example 5).",
    "Thinking the flask needs drying — extra water in the flask changes nothing (moles of analyte unchanged).",
    "Assuming end point = equivalence exactly — indicator choice minimises the gap; phenolphthalein for strong acid-strong base is fine.",
    "Adding titrant fast near the end — overshoot past the colour change; the run is wasted (start over)."
  ],
  applications: [
    "Vinegar acidity: titrate with NaOH + phenolphthalein → % acetic acid (food QC).",
    "Antacid testing: back-titration measures how much acid a tablet neutralises (stomach medicine claims).",
    "Water hardness: EDTA titration (G11 preview) grades soap-scum risk — highland water chemistry.",
    "Swimming pools/milk acidity/sugar refining: routine industrial titrations.",
    "Soil labs: extract pH-buffering acids/bases by titration → lime recommendations for teff fields.",
    "Forensics & medicine: blood-alcohol and drug assays are titrimetric/instrumental descendants of this method."
  ],
  summary: "Solution stoichiometry = M×V (get moles) + balanced ratio (move between substances) + convert back. Titration: burette standard vs pipetted unknown + indicator; concordant titres averaged; equivalence at equation ratio. 1:1 → M_aV_a = M_bV_b; otherwise use coefficients. Precipitation mass = limiting reagent × Mᵣ.",
  visuals: [
    { type: "steps", config: { steps: [{ detail: "Pipette 25.0 mL unknown into flask + indicator", label: "Prepare" }, { detail: "Fill burette with standard (rinsed with titrant!)", label: "Load" }, { detail: "Rough run to colour change — note volume", label: "Rough" }, { detail: "Slow runs: add near-drop, swirl, wash sides", label: "Refine" }, { detail: "Two concordant titres → average → calculate", label: "Conclude" }], title: "Titration Protocol" } },
    { type: "flowChart", config: { steps: ["Known: M and V of titrant", "n = M × V (moles reacted)", "Balanced equation → mole ratio", "n of unknown", "M_unknown = n / V_aliquot"], title: "The Titration Calculation Chain" } },
    { type: "qa", config: { title: "Burette Brain-Teasers — tap to reveal", pairs: [{ q: "Why does a wet titration FLASK not cause error but a wet BURETTE does?", a: "Flask water doesn't change the moles of analyte inside; burette water dilutes the standard, changing its effective concentration." }, { q: "Phenolphthalein goes faint pink and it fades in 10 seconds. Continue or stop?", a: "Stop — that's the end point; chasing a permanent deep pink means you overshot." }, { q: "Why swirl constantly during a run?", a: "The drop hits one spot locally — swirling mixes it so the indicator sees the true average pH." }] } }
  ],
  questions: [
    { type: "calc", q: "20 mL of 0.1 M HCl neutralises 25 mL of NaOH. NaOH molarity? (M, 1:1)", answer: "0.08", difficulty: 1, explanation: "M_b = 0.1×20/25 = 0.08 M.", tolerance: 0.005 },
    { type: "mcq", q: "The equivalence point is where:", options: ["Colour changes", "Moles react in exact equation ratio", "Burette is empty", "Half the acid is added"], answer: 1, difficulty: 1, explanation: "Stoichiometric truth; the colour change (end point) approximates it." },
    { type: "calc", q: "Na₂CO₃ + 2HCl. 25 mL of 0.1 M Na₂CO₃ needs how many mol of HCl?", answer: "0.005", difficulty: 2, explanation: "n(carbonate) = 0.0025 → ×2 = 0.005 mol HCl.", tolerance: 0.0005 },
    { type: "mcq", q: "Which titres should be averaged?", options: ["All runs including rough", "Only concordant runs (±0.10 mL)", "The largest", "The first"], answer: 1, difficulty: 2, explanation: "The rough run only brackets the end point." },
    { type: "short", q: "The glassware that delivers variable measured volumes to 0.05 mL is the ____.", answer: "burette", difficulty: 1, explanation: "Burette for titrant; pipette for the fixed aliquot." },
    { type: "calc", q: "AgNO₃ + NaCl → AgCl + NaNO₃. 0.02 mol AgNO₃ + 0.03 mol NaCl → grams AgCl? (Mᵣ 143.5)", answer: "2.87", difficulty: 2, explanation: "AgNO₃ limiting → 0.02 mol AgCl × 143.5 = 2.87 g.", tolerance: 0.05 },
    { type: "concept", q: "Why can't you use M₁V₁ = M₂V₂ for H₂SO₄ vs NaOH?", answer: "1:2 ratio|two H per molecule|shortcut assumes 1:1", difficulty: 3, explanation: "Each H₂SO₄ gives 2 H⁺ — n(NaOH) = 2×n(H₂SO₄); the 1:1 shortcut underestimates acid strength by half." },
    { type: "tf", q: "Extra distilled water in the conical flask changes the titration result.", answer: false, difficulty: 2, explanation: "Moles of analyte are fixed by the pipette — dilution in the flask doesn't alter them." },
    { type: "calc", q: "What volume of 0.2 M KOH neutralises 30 mL of 0.1 M HNO₃? (mL)", answer: "15", difficulty: 1, explanation: "1:1: n = 0.003 mol → V = 0.003/0.2 = 15 mL.", tolerance: 0.5 }
  ]
};
