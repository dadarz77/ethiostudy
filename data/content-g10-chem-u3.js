/* ============================================================
   Content: Grade 10 Chemistry — Unit 3: Important Inorganic Compounds
   2 topics. Rich format + 3 visuals per lesson.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- c3-1: Oxides, Acids and Bases --- */
Lessons["g10-chemistry-uc3-t1"] = {
  overview: "Oxides, acids and bases are the three families that run Earth's chemistry: the air's oxides (CO₂, SO₂), the stomach's acid (HCl), the soap's base (NaOH), the lime that fixes acidic soil. Their behaviour follows one deep pattern: metal oxides are basic, non-metal oxides acidic — and acid + base cancel each other to salt + water.",
  objectives: [
    "Classify oxides: basic (metal), acidic (non-metal), amphoteric, neutral",
    "Define acids and bases by Arrhenius and observe their properties",
    "Explain the pH scale and indicators (litmus, universal, phenolphthalein)",
    "Write neutralisation reactions and name the salts formed",
    "Relate acidity/basicity to daily life (soil, indigestion, cleaning)"
  ],
  simple: "OXIDES = element + oxygen. Metals make BASIC oxides (Na₂O, CaO — dissolve to hydroxides, red litmus blue). Non-metals make ACIDIC oxides (CO₂, SO₂, NO₂ — dissolve to acids, blue litmus red). Two rebels: AMPHOTERIC oxides (Al₂O₃, ZnO — react as BOTH) and NEUTRAL oxides (H₂O, CO — neither). ACIDS: sour, turn blue litmus red, react with metals → salt + H₂, with carbonates → CO₂ fizz, and release H⁺ in water (HCl → H⁺ + Cl⁻). BASES: bitter, slippery, red litmus blue, release OH⁻ (NaOH → Na⁺ + OH⁻); soluble bases = alkalis. pH measures H⁺ concentration: 0-6 acidic, 7 neutral, 8-14 basic — each step = 10× change (pH 3 is TEN times more acidic than pH 4). ACID + BASE → SALT + WATER (neutralisation) — the chemical 'cancel'. Strong vs weak acid = how MANY molecules release H⁺ (HCl all; vinegar few), NOT how concentrated.",
  detailed: `<p><b>Oxide chemistry:</b> Basic oxides: Na₂O + H₂O → 2NaOH; CaO ('quicklime') + H₂O → Ca(OH)₂ ('slaked lime') — the lime cycle used in building and soil treatment. Acidic oxides: CO₂ + H₂O ⇌ H₂CO₃ (carbonated drinks, acid rain when SO₂/NO₂ do the same: SO₂ → H₂SO₃/H₂SO₄ — damages lakes, limestone buildings, respiratory health). Amphoteric: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O AND Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O — behaves as base in acid, acid in base. Neutral: CO, NO, N₂O — no salt formation (CO's danger: binds haemoglobin — bio link).</p>
<p><b>Acid definitions & properties:</b> Arrhenius: substance giving H⁺ in water (HCl, H₂SO₄, CH₃COOH, HNO₃, citric, ascorbic). Properties: sour taste (citrus = citric acid; injera's sourness = fermentation acids — lactic/acetic), litmus blue→red, metal + acid → salt + H₂ (Mg, Zn, Fe — NOT Cu/Ag/Au: below hydrogen in reactivity series — Unit 5 link), carbonate + acid → salt + H₂O + CO₂ (the fizz test: limewater turns milky), conductivity (H⁺ carries current). Strong acids (HCl, H₂SO₄, HNO₃): fully ionised; weak (CH₃COOH, H₂CO₃, citric): partial equilibrium. Concentrated vs dilute = water amount; strong vs weak = ionisation fraction — two different axes (dilute HCl is strong but not concentrated).</p>
<p><b>Bases & alkalis:</b> Base = accepts H⁺ / gives OH⁻ (metal oxides + hydroxides). Alkali = soluble base (NaOH, KOH, Ca(OH)₂ slightly, NH₃ solution). Properties: bitter, soapy slipperiness (NaOH actually reacts with skin fat — real soap-making: saponification — traditional Ethiopian soap from potash + fat), red litmus→blue, neutralise acids. Household: baking soda (NaHCO₃ — weak base), wood-ash lye (traditional potash — K₂CO₃ solution), ammonia cleaners. Insoluble bases (CuO, Mg(OH)₂ suspension — 'milk of magnesia' antacid) still neutralise acid.</p>
<p><b>pH:</b> pH = −log[H⁺] (G11 formalises; G10 uses the scale). Each unit = 10×. Indicators: litmus (red<5, blue>8), phenolphthalein (colourless<8.2, pink>10), methyl orange (red<3.1, yellow>4.4), universal (full rainbow → chart). Natural: red-cabbage extract. Scales of life: stomach 1.5-3.5, lemon 2, vinegar 3, coffee 5, rain (natural, CO₂) 5.6, acid rain <5, pure water 7, blood 7.35-7.45 (tight!), baking soda 8.3, ammonia 11, bleach 13. Soil: Ethiopian highlands often acidic (nitisols) → liming raises pH to crop sweet spots.</p>
<p><b>Neutralisation:</b> H⁺ + OH⁻ → H₂O (the core ion reaction — exothermic, temperature rises). Molecular: HCl + NaOH → NaCl + H₂O; H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O; 2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂ (carbonate variant). Applications: antacid tablets (Mg(OH)₂ vs stomach acid), lime on soil, slaked lime on acidic lake after spill, toothpaste (base vs bacterial acid), wasp (alkaline) vs bee (acid) sting treatment logic.</p>`,
  keyTerms: [
    { term: "Basic oxide", def: "Metal oxide → hydroxide in water (CaO, Na₂O)." },
    { term: "Acidic oxide", def: "Non-metal oxide → acid in water (CO₂, SO₂)." },
    { term: "Amphoteric", def: "Reacts as acid AND base (Al₂O₃, ZnO)." },
    { term: "Arrhenius acid / base", def: "Gives H⁺ / gives OH⁻ in water." },
    { term: "Alkali", def: "A soluble base (NaOH, KOH)." },
    { term: "Strong vs weak acid", def: "Fully vs partially ionised in water." },
    { term: "pH", def: "H⁺ measure: 0-6 acid, 7 neutral, 8-14 base; ×10 per step." },
    { term: "Indicator", def: "pH-colour dye (litmus, phenolphthalein, universal)." },
    { term: "Neutralisation", def: "Acid + base → salt + water (H⁺ + OH⁻ → H₂O)." },
    { term: "Acid rain", def: "Rain pH <5.6 from SO₂/NO₂ oxides → acids." }
  ],
  formulas: [
    {
      name: "pH definition",
      formula: "pH = −log[H⁺]",
      meaning: "Each pH unit = tenfold H⁺ change.",
      vars: "[H⁺] = hydrogen-ion concentration (mol/L)",
      units: "0–14 scale",
      when: "Comparing acid strengths.",
      example: "pH 3 has 10× the H⁺ of pH 4 and 1000× of pH 6."
    }
  ],
  workedExamples: [
    {
      problem: "Predict and justify: (a) CO₂ bubbled into water + litmus; (b) CaO added to water + phenolphthalein.",
      given: "Two oxide-water systems.",
      formula: "Non-metal oxide → acid; metal oxide → base.",
      substitution: "(a) CO₂ + H₂O ⇌ H₂CO₃ — weak acid → blue litmus turns RED (fizzy water does this). (b) CaO + H₂O → Ca(OH)₂ — alkali → phenolphthalein turns PINK.",
      calculation: "Both are the oxide's family behaviour, not the specific element's.",
      answer: "(a) red (acidic), (b) pink (basic) — the classification test in action."
    },
    {
      problem: "A lake near a smelter has pH 4; nearby soil pH 8.5 crops fail. Plan the chemistry: what do you add where, and why?",
      given: "Two pH problems.",
      formula: "Neutralisation + oxide families.",
      substitution: "Acid lake (SO₂ acid rain): add slaked lime Ca(OH)₂ — base neutralises: Ca(OH)₂ + H₂SO₄ → CaSO₄ + 2H₂O; raises pH toward 6.5-7. Alkaline soil: add acidic amendment — gypsum (CaSO₄ displaces Na⁺) or sulfur/organic matter whose decomposition makes weak acids; target pH ~6-7 for nutrient availability.",
      calculation: "Lime dose from soil-test buffer curves (agronomy practice).",
      answer: "Fight acid with base, base with gentle acid — neutralisation as public works."
    },
    {
      problem: "Equal concentrations of HCl and CH₃COOH: which has lower pH, which fizzes faster with Mg, and why? Both are '0.1 M'.",
      given: "Strong vs weak at same M.",
      formula: "Ionisation fraction.",
      substitution: "HCl fully ionises → [H⁺] = 0.1 M → pH 1. CH₃COOH ~1% ionised → [H⁺] ≈ 0.001 M → pH ~3. Mg reaction rate follows [H⁺] → HCl fizzes much faster. BUT both eventually release the same total H (moles equal) — same final H₂ volume with excess Mg.",
      calculation: "Rate differs (free H⁺), capacity equal (total acid).",
      answer: "Strong = fast and low pH; weak = slow and higher pH — same mole budget."
    },
    {
      problem: "Write the neutralisation for milk-of-magnesia (Mg(OH)₂) with stomach acid, and explain why an antacid is taken AFTER meals for relief but a prophylactic coating before.",
      given: "Real medicine chemistry.",
      formula: "Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O.",
      substitution: "Insoluble base neutralises excess acid gently (buffered relief). Timing: after a meal, acid output peaks with food — antacid cancels it; before meals, food-buffer protection matters differently. Mg²⁺ side effect: laxative (MgCl₂ draws water into gut — why some antacids alternate with aluminium salts to firm up).",
      calculation: "Each Mg(OH)₂ cancels 2 HCl (two OH⁻).",
      answer: "A sparingly soluble base doing controlled neutralisation — chemistry with a dosing schedule."
    }
  ],
  commonMistakes: [
    "Saying 'all oxides are basic' — non-metal oxides are acidic; only metal oxides are basic (plus amphoteric/neutral rebels).",
    "Confusing strong/concentrated: concentrated vinegar is still a WEAK acid; dilute HCl is still STRONG.",
    "Thinking pH 6 is twice as acidic as pH 12 — the scale is logarithmic; and 6 vs 7 is 10×, 6 vs 8 is 100×.",
    "Believing all acids are dangerous — citric, ascorbic, carbonic are in your food daily; danger depends on strength AND concentration.",
    "Writing metal + acid → salt + O₂ — it's HYDROGEN gas (the pop test), not oxygen.",
    "Calling NH₃ not-a-base because it has no OH — its solution makes OH⁻ (NH₃ + H₂O ⇌ NH₄⁺ + OH⁻) — it IS alkaline.",
    "Assuming neutralisation always gives pH 7 — only complete acid+base match; excess of either leaves pH off 7.",
    "Forgetting CO, NO are NEUTRAL oxides — not every non-metal oxide is acidic."
  ],
  applications: [
    "Injera's sour taste: fermentation produces lactic/acetic acids — food chemistry you eat daily.",
    "Antacids & indigestion: Mg(OH)₂/NaHCO₃ neutralise stomach HCl (the fizz = CO₂ test).",
    "Agriculture: liming acidic highland nitisols; sulfur for alkaline soils — pH controls nutrient availability.",
    "Acid rain: SO₂ from industry/volcanoes + NO₂ from cars → H₂SO₄/HNO₃ — lake acidification, limestone erosion (Obelisks of Aksum monitoring).",
    "Cleaning: alkaline degreasers (saponify fat), acidic descalers (citric vs limescale CaCO₃).",
    "Swimming pools: pH 7.2-7.6 kept by adding acid or soda ash — chlorine efficacy depends on it."
  ],
  summary: "Oxide families: metal→basic, non-metal→acidic, Al/Zn→amphoteric, CO/NO→neutral. Acids give H⁺ (litmus red, metal→H₂, carbonate→CO₂); bases give OH⁻ (litmus blue, slippery); strong/weak = ionisation fraction. pH log scale ×10/unit. Neutralisation: acid+base→salt+water — antacids, lime, acid-rain fixes.",
  visuals: [
    { type: "comparison", config: { title: "Acid vs Base — Properties", left: { name: "Acid (H⁺)", items: ["Sour (citrus, vinegar)", "Blue litmus → red", "Metal + acid → H₂↑", "Carbonate → CO₂ fizz", "pH < 7"] }, right: { name: "Base (OH⁻)", items: ["Bitter, slippery", "Red litmus → blue", "No H₂ with metals", "Neutralises acids", "pH > 7"] } } },
    { type: "numberLine", config: { title: "The pH Ladder", min: 0, max: 14, marks: [{ label: "Battery acid", value: 1 }, { label: "Lemon", value: 2 }, { label: "Stomach", value: 2.5 }, { label: "Coffee", value: 5 }, { label: "Rain", value: 5.6 }, { label: "Pure water", value: 7 }, { label: "Blood", value: 7.4 }, { label: "Baking soda", value: 8.3 }, { label: "Ammonia", value: 11 }, { label: "Bleach", value: 13 }], unit: "pH" } },
    { type: "qa", config: { title: "Oxide Sorting — tap to reveal", pairs: [{ q: "SO₂ dissolved in rainwater makes what, and what does it do to marble?", a: "Sulfurous/sulfuric acid — eats CaCO₃ marble: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂ (statues and lakes dissolve)." }, { q: "Why is Al₂O₃ called amphoteric — show both reactions.", a: "With HCl it acts basic (→ AlCl₃ + water); with NaOH it acts acidic (→ sodium aluminate + water)." }, { q: "CO is an oxide of a non-metal — why doesn't it turn litmus red?", a: "CO is a NEUTRAL oxide — unlike CO₂ it doesn't form an acid with water." }] } }
  ],
  questions: [
    { type: "mcq", q: "Which oxide is acidic?", options: ["CaO", "Na₂O", "SO₂", "MgO"], answer: 2, difficulty: 1, explanation: "Non-metal oxide → acid in water (sulfurous acid)." },
    { type: "mcq", q: "Blue litmus turns red in:", options: ["NaOH solution", "Acid", "Water", "Salt solution"], answer: 1, difficulty: 1, explanation: "Acids turn blue litmus red." },
    { type: "short", q: "The gas released when a metal reacts with acid is ____.", answer: "hydrogen|h2", difficulty: 1, explanation: "Metal + acid → salt + hydrogen (pop test)." },
    { type: "concept", q: "Explain the difference between 'strong acid' and 'concentrated acid'.", answer: "strong=fully ionised|concentrated=lots per volume|independent axes", difficulty: 3, explanation: "Strong = fraction ionised (HCl 100%); concentrated = amount per volume — dilute HCl is strong but weakly concentrated." },
    { type: "mcq", q: "pH 3 compared to pH 4 means the solution is:", options: ["10× more acidic", "4/3 as acidic", "10× less acidic", "twice as acidic"], answer: 0, difficulty: 2, explanation: "Log scale: one unit = tenfold H⁺." },
    { type: "calc", q: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Moles of NaOH to neutralise 0.05 mol H₂SO₄?", answer: "0.1", difficulty: 2, explanation: "1:2 ratio → 0.05 × 2 = 0.1 mol.", tolerance: 0.005 },
    { type: "tf", q: "All metal oxides dissolve in water to form alkalis.", answer: false, difficulty: 3, explanation: "Only GROUP 1 + some (Ca, Ba) oxides dissolve; CuO, Fe₂O₃ are insoluble basic oxides." },
    { type: "short", q: "Oxides like Al₂O₃ that react with both acids and bases are called ____.", answer: "amphoteric", difficulty: 2, explanation: "Amphoteric — dual personality." },
    { type: "concept", q: "Why does natural rainwater have pH ~5.6 even without pollution?", answer: "CO2 carbonic acid|dissolved oxide|weak acid", difficulty: 2, explanation: "Atmospheric CO₂ dissolves → H₂CO₃ weak acid — acidity below 5.6 signals pollution (SO₂/NO₂)." },
    { type: "ordering", q: "Pick the correct neutralisation products:", options: ["Acid + base → salt + hydrogen", "Acid + base → salt + water", "Acid + metal → salt + water", "Acid + carbonate → salt + oxygen"], answer: [1], difficulty: 1, explanation: "H⁺ + OH⁻ → H₂O; the cation+anion pair is the salt." }
  ]
};

/* --- c3-2: Salts --- */
Lessons["g10-chemistry-uc3-t2"] = {
  overview: "Every neutralisation leaves a salt behind — and salts are everywhere: table salt, fertiliser, toothpaste fluoride, Epsom bath salts, the limestone cliffs around Lalibela. This lesson defines salts, shows how to MAKE them (four routes), and how to name and test them.",
  objectives: [
    "Define salts as ionic products of neutralisation",
    "Name salts from their parent acid and base",
    "Choose and execute the right preparation method (soluble vs insoluble)",
    "Perform common ion tests (chloride, sulfate, carbonate, ammonium)",
    "Classify salts by pH behaviour (acidic, basic, neutral)"
  ],
  simple: "A SALT = ionic compound from acid + base: the metal (or NH₄⁺) comes from the base, the anion from the acid. Naming: hydrochloric → chloride, sulfuric → sulfate, nitric → nitrate, carbonic → carbonate, phosphoric → phosphate. So NaOH + HCl → sodium chloride; KOH + H₂SO₄ → potassium sulfate. MAKING salts — four routes: (1) ACID + ALKALI (titrate, evaporate → crystals — for soluble salts of Group 1). (2) ACID + METAL (for soluble salts where H₂ escapes — ZnSO₄). (3) ACID + INSOLUBLE BASE/carbonate (add excess solid to acid, filter, crystallise — CuSO₄ from CuO). (4) PRECIPITATION (mix two solutions whose ions form an insoluble salt — AgCl, BaSO₄ — filter, wash, dry). TESTS: chloride + AgNO₃ → white curdy; sulfate + BaCl₂ → white; carbonate + acid → CO₂ fizz (limewater milky); ammonium + NaOH heat → NH₃ (pungent, turns damp red litmus blue). Not all salts are neutral: from strong acid+weak base → acidic; weak acid+strong base → basic.",
  detailed: `<p><b>Structure & naming:</b> Salts are giant ionic lattices (high melting points, conduct when molten/dissolved — ions free to move). Name = cation (from base) + anion (from acid): Na₂CO₃ = sodium carbonate (base NaOH + acid H₂CO₃). Hydrates hold crystal water: CuSO₄·5H₂O (blue vitriol — blue; anhydrous CuSO₄ white — the water test: white→blue with water, tests for moisture). Double salts/complexes exist (G11).</p>
<p><b>Preparation decision tree:</b> Target SOLUBLE? → match method to the base's solubility: (a) Group 1/2 hydroxide (alkali) known concentration → titrate vs acid, indicator, evaporate filtrate to crystallise. (b) Reactive metal (Mg, Zn, Fe) + acid → salt + H₂ — excess metal ensures all acid reacts, filter, crystallise. (c) Insoluble base/carbonate (CuO, CaCO₃) + excess to warm acid → filter off leftover solid → crystallise filtrate (no titration needed — the excess solid self-indicates 'enough'). Target INSOLUBLE? → (d) precipitation: mix solutions of two soluble salts, filter the ppt, wash (removes adsorbed ions), dry. Purity thinking: every step (rinse, filter, crystallise) trades yield for purity.</p>
<p><b>Ion tests (the practical exam):</b> Cl⁻: acidify with HNO₃, + AgNO₃ → white curdy AgCl (darkens in light); Br⁻ cream, I⁻ yellow. SO₄²⁻: + HCl then BaCl₂ → white BaSO₄ (insoluble in acid — distinguishes from carbonate). CO₃²⁻: + dilute HCl → effervescence; gas → limewater Ca(OH)₂ turns milky (CaCO₃). NH₄⁺: + NaOH, warm → NH₃ gas — pungent, damp red litmus BLUE. Flame colours (cation ID, Unit 5 preview): Na⁺ gold, K⁺ lilac, Ca²⁺ brick-red, Cu²⁺ blue-green, Ba²⁺ green.</p>
<p><b>Salt pH (hydrolysis preview):</b> Neutral salts: strong acid + strong base (NaCl, KNO₃ — pH 7). Basic salts: strong base + weak acid (Na₂CO₃ 'washing soda' pH ~11, CH₃COONa). Acidic salts: weak base + strong acid (NH₄Cl pH ~5, Al₂(SO₄)₃). Why: the 'leftover' ion from the weak partner reacts with water (CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻ → basic). Application: ammonium fertilisers acidify soil over years (liming countermeasure); sodium carbonate softens water (precipitates Ca²⁺/Mg²⁺).</p>`,
  keyTerms: [
    { term: "Salt", def: "Ionic compound: cation from base + anion from acid." },
    { term: "Neutralisation route", def: "Acid + alkali → salt + water (titration method)." },
    { term: "Precipitation", def: "Two solutions → insoluble salt solid." },
    { term: "Hydrate", def: "Salt with crystal water (CuSO₄·5H₂O)." },
    { term: "Curdy white ppt", def: "AgCl — the chloride test signature." },
    { term: "Effervescence", def: "Fizzing gas release (CO₃²⁻ + acid)." },
    { term: "Lime water test", def: "CO₂ turns Ca(OH)₂ milky." },
    { term: "Ammonia test", def: "NH₄⁺ + NaOH → NH₃ — pungent, alkaline gas." },
    { term: "Acidic/basic salt", def: "pH off 7 from the weak parent's ion hydrolysing." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Choose and justify the best preparation method for: (a) sodium chloride, (b) copper(II) sulfate, (c) barium sulfate.",
      given: "Three target salts.",
      formula: "Solubility + base type → method.",
      substitution: "(a) NaCl: soluble, alkali (NaOH) available → titration route: HCl + NaOH (indicator), evaporate filtrate → crystals. (b) CuSO₄: soluble, base CuO INSOLUBLE → excess CuO + warm H₂SO₄, filter, crystallise (no titration — excess solid self-limits). (c) BaSO₄: INSOLUBLE → precipitation: BaCl₂(aq) + Na₂SO₄(aq) → filter, wash, dry.",
      calculation: "Method follows from the target's solubility and the base's nature.",
      answer: "Titrate, excess-solid, or precipitate — three salts, three correct routes."
    },
    {
      problem: "A white powder could be NaCl, Na₂CO₃ or NH₄Cl. Design a two-test identification plan with expected observations.",
      given: "Qualitative logic.",
      formula: "Carbonate + ammonium tests.",
      substitution: "Test 1: add dilute HCl — fizzing (CO₂, limewater milky) → Na₂CO₃ identified. Test 2 (on a non-fizzer): add NaOH, warm — pungent gas turning damp red litmus blue → NH₄Cl. The silent, odourless leftover → NaCl (confirm: AgNO₃ → white curdy).",
      calculation: "Each ion has one signature reaction.",
      answer: "Acid fizz → carbonate; alkali ammonia → ammonium; neither + white AgCl → sodium chloride."
    },
    {
      problem: "Explain why anhydrous CuSO₄ is white but the pentahydrate is blue, and how that property is used practically.",
      given: "Hydrate colour.",
      formula: "Water in the lattice.",
      substitution: "Cu²⁺'s colour depends on its ligand environment: with water molecules coordinated (pentahydrate) → blue; anhydrous (no water) → white. Heating drives off water (blue→white); adding water returns it (white→blue) — reversible.",
      calculation: "Use: white CuSO₄ on a test strip turns blue with trace water — moisture detector (fuel/water contamination checks).",
      answer: "The crystal water IS the colour — a built-in water sensor."
    },
    {
      problem: "Predict the pH (acidic/neutral/basic) of solutions of: NaCl, CH₃COONa, NH₄NO₃ — justify from parent strengths.",
      given: "Hydrolysis prediction.",
      formula: "Weak partner's ion reacts with water.",
      substitution: "NaCl: strong acid + strong base → no reactive leftover → neutral 7. CH₃COONa: strong base + weak acid → CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻ → BASIC ~8-9. NH₄NO₃: weak base + strong acid → NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺ → ACIDIC ~5.",
      calculation: "Mnemonic: the WEAK parent's ion decides the salt's pH.",
      answer: "Neutral, basic, acidic — the leftover-ion rule."
    }
  ],
  commonMistakes: [
    "Naming salts backwards (sodium chlorine instead of sodium chloride) — cation from base first, anion from acid second.",
    "Using titration for an insoluble base — CuO can't be pipetted as a solution; use excess-solid method.",
    "Forgetting to WASH precipitated salts — adsorbed spectator ions contaminate (why 'wash with distilled water' appears in every method mark).",
    "Calling all salts neutral — Na₂CO₃ solution is strongly alkaline (the 'soda ash' surprise).",
    "Testing for sulfate without acidifying first — carbonate also gives white with Ba²⁺; acid kills that false positive.",
    "Confusing the ammonia TEST (damp red litmus blue) with the gas being 'acidic' — NH₃ is the only common alkaline gas.",
    "Thinking anhydrous means 'dirty' — it means water-free (CuSO₄ white); hydrate = water in lattice (blue).",
    "Evaporating to complete dryness when crystals are wanted — you get powder/bumps; evaporate to saturation, cool, crystallise."
  ],
  applications: [
    "Fertilisers: NH₄NO₃, (NH₄)₂SO₄, NPS blends — salts delivering N/S/P ions to crops (Ethiopian blending plants).",
    "Water treatment: alum (KAl(SO₄)₂) precipitates colloids; Na₂CO₃ softens hard water.",
    "Food: MSG (glutamate salt), baking powder (NaHCO₃ + acid salt), preservative nitrites.",
    "Medicine: Epsom salts (MgSO₄ baths), oral rehydration salts, saline IV (NaCl 0.9%).",
    "Industry: chlor-alkali (NaCl electrolysis → NaOH + Cl₂ — Unit 4 link), soap (sodium stearate salt), leather tanning.",
    "Construction: gypsum (CaSO₄·2H₂O) plaster/boards; limestone (CaCO₃) cement feedstock; salt-damaged concrete (sulfate attack)."
  ],
  summary: "Salts = base-cation + acid-anion; named from parents (chloride/sulfate/nitrate/carbonate). Four preparations: titration (soluble + alkali), metal+acid, excess insoluble base+acid, precipitation (insoluble targets). Tests: AgNO₃→Cl⁻ white, Ba²→SO₄²⁻ white, acid fizz→CO₃²⁻, NaOH+heat→NH₄⁺. pH: weak parent's ion decides (Na₂CO₃ basic, NH₄Cl acidic).",
  visuals: [
    { type: "flowChart", config: { steps: ["Target salt soluble?", "YES: base soluble? → titrate acid+alkali", "YES: base insoluble? → excess solid + warm acid, filter, crystallise", "YES: reactive metal? → metal + acid (H₂)", "NO: precipitation — mix two solutions, filter, wash, dry"], title: "Which Method Makes This Salt?" } },
    { type: "tableVisual", config: { headers: ["Ion", "Reagent", "Positive result"], rows: [["Cl⁻", "HNO₃ + AgNO₃", "White curdy ppt"], ["SO₄²⁻", "HCl + BaCl₂", "White ppt (acid-proof)"], ["CO₃²⁻", "Dilute HCl", "Fizz → limewater milky"], ["NH₄⁺", "NaOH + warm", "Pungent gas, red litmus blue"]], title: "The Salt Test Kit" } },
    { type: "qa", config: { title: "Salt Stories — tap to reveal", pairs: [{ q: "Why does CuSO₄·5H₂O lose its blue when heated?", a: "The water was part of the crystal structure — drive it off (white anhydrous) and the colour goes with it; add water back, blue returns." }, { q: "Why are ammonium fertilisers linked to soil acidity?", a: "NH₄⁺ is the weak-base ion — its salt hydrolyses acidic; years of application lower soil pH (liming compensates)." }, { q: "How do you tell NaCl from Na₂CO₃ with one bottle of vinegar?", a: "Fizzing (CO₂) = carbonate; nothing = chloride — the carbonate + acid test in your kitchen." }] } }
  ],
  questions: [
    { type: "mcq", q: "The cation in a salt comes from the:", options: ["Acid", "Base", "Metal always", "Water"], answer: 1, difficulty: 1, explanation: "Base supplies the metal/NH₄⁺; acid supplies the anion." },
    { type: "mcq", q: "Best method to prepare insoluble BaSO₄:", options: ["Titration", "Evaporation", "Precipitation of two solutions", "Metal + acid"], answer: 2, difficulty: 2, explanation: "Mix soluble Ba²⁺ and SO₄²⁻ sources — filter the ppt." },
    { type: "short", q: "The anion name from sulfuric acid is ____.", answer: "sulfate|sulphate", difficulty: 1, explanation: "-ic acid → -ate salt." },
    { type: "concept", q: "Why must a precipitated salt be washed before drying?", answer: "remove adsorbed ions|spectators contaminate|purity", difficulty: 2, explanation: "The filtrate's spectator ions coat the crystals — washing with distilled water removes them." },
    { type: "mcq", q: "White curdy precipitate with AgNO₃ (acidified) identifies:", options: ["Sulfate", "Chloride", "Carbonate", "Ammonium"], answer: 1, difficulty: 1, explanation: "AgCl — the chloride signature." },
    { type: "short", q: "The gas that turns limewater milky is ____.", answer: "carbon dioxide|co2", difficulty: 1, explanation: "CO₂ → CaCO₃ suspension = milkiness." },
    { type: "tf", q: "A solution of sodium carbonate is neutral (pH 7).", answer: false, difficulty: 3, explanation: "Strong base + weak acid → CO₃²⁻ hydrolyses water → alkaline (~pH 11)." },
    { type: "concept", q: "Describe the test that proves a fertiliser sample contains ammonium ions.", answer: "naoh warm|pungent gas|red litmus blue", difficulty: 2, explanation: "NaOH + heat → NH₃ gas: pungent odour, turns damp red litmus blue." },
    { type: "calc", q: "2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂. Grams CaCl₂ from 0.05 mol HCl? (Mᵣ 111)", answer: "2.775|2.78", difficulty: 2, explanation: "2:1 ratio → 0.025 mol × 111 = 2.775 g.", tolerance: 0.05 },
    { type: "ordering", q: "Pick the correct excess-solid method order:", options: ["Crystallise → filter → add CuO → warm acid", "Warm acid → add excess CuO → filter unreacted solid → crystallise filtrate", "Add CuO → evaporate → acid → filter", "Filter acid → add CuO → dry"], answer: [1], difficulty: 2, explanation: "Excess solid guarantees all acid used; filtration removes it; crystals from the filtrate." }
  ]
};
