/* Content: Grade 12 Chemistry — Unit 1 (part B): topics 3-5 */
window.Lessons = window.Lessons || {};

Lessons["g12-chemistry-uc1-t3"] = {
  overview: "A buffer is a solution that refuses to change pH — a weak acid holding hands with its conjugate base, ready to absorb either intruder. Henderson-Hasselbalch turns buffer design into arithmetic, and biology runs on it: blood holds pH 7.4 through a carbonate buffer, and every fermentation, lab and clinic leans on buffers.",
  objectives: [
    "Define buffer action and identify buffer components",
    "Explain how buffers resist added acid and base",
    "Apply Henderson-Hasselbalch to compute buffer pH",
    "Prepare a buffer to a target pH by choosing ratio",
    "Distinguish buffer capacity from pH"
  ],
  simple: "<b>The pH bodyguard.</b> Ethanoic acid + sodium ethanoate: dump in H⁺ and the ethanoate eats it (CH₃COO⁻ + H⁺ → CH₃COOH); dump in OH⁻ and the acid neutralises it (CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O). The ratio barely budges, so pH barely budges. Henderson-Hasselbalch: pH = pK_a + log([salt]/[acid]) — mix equal parts and pH = pK_a, exactly where buffering is best.",
  detailed: "<p><b>Composition.</b> Two flavours: (1) weak acid + its salt (CH₃COOH/CH₃COONa, pH < 7 — the classic ethanoate buffer at pH 4.76); (2) weak base + its salt (NH₃/NH₄Cl, pH > 7). What a buffer is NOT: strong acid with its salt (HCl/NaCl buffers nothing), or any mixture of a STRONG acid with a weak-base salt that merely converts everything.</p><p><b>Mechanism.</b> Added H₃O⁺ meets the reserve base (A⁻): A⁻ + H₃O⁺ → HA + H₂O — protons vanish into the reservoir. Added OH⁻ meets the reserve acid: HA + OH⁻ → A⁻ + H₂O. Because [HA] and [A⁻] are both large (typically ≥ 0.1 M each), the small shifts in their ratio leave log([A⁻]/[HA]) nearly untouched — Le Chatelier on demand. Pure water by contrast swings from pH 7 to 2 or 12 with a single drop.</p><p><b>Henderson-Hasselbalch.</b> From K_a = [H₃O⁺][A⁻]/[HA]: pH = pK_a + log₁₀([A⁻]/[HA]). Equal concentrations ⇒ log 1 = 0 ⇒ pH = pK_a. Ten-fold excess of salt ⇒ pH = pK_a + 1. Effective range is pK_a ± 1: outside it, one form is too dilute to absorb much. Design recipe: pick a weak acid whose pK_a ≈ target pH, then set the ratio.</p><p><b>Capacity.</b> How much acid/base the buffer can swallow before collapsing: bigger and more-equal concentrations ⇒ higher capacity. Two 1 M buffers at the same pH outlast two 0.01 M ones by 100× — capacity is about AMOUNT (moles of reserves), pH is about RATIO. This distinction is the topic's favourite trick.</p><p><b>In the body and lab.</b> Blood: H₂CO₃/HCO₃⁻ with pK_a′ ≈ 6.1, held at pH 7.4 by lungs (CO₂ exhaled) and kidneys (HCO₃⁻ reabsorbed) — a 20:1 ratio, at the top of its range, and an OPEN system continuously tuned. Drops below 7.2 or above 7.6 are medical emergencies (acidosis/alkalosis). Lab standards: phosphate buffers (pK_a2 = 7.2) for biochemistry, carbonate for alkaline work; fermentation vats (injera batter, beer wort) use natural phosphate/organic buffers.</p>",
  keyTerms: [
    { term: "Buffer solution", def: "resists pH change via weak-acid/conjugate-base reserves" },
    { term: "H-H equation", def: "pH = pK_a + log([A⁻]/[HA])" },
    { term: "Buffer range", def: "pK_a ± 1" },
    { term: "Buffer capacity", def: "moles of acid/base absorbable before collapse" },
    { term: "Blood buffer", def: "H₂CO₃/HCO₃⁻ at 20:1, pH 7.4" },
    { term: "Open system", def: "physiological buffer resupplied by lungs/kidneys" }
  ],
  formulas: [
    { name: "Henderson-Hasselbalch", formula: "pH = pK_a + log([salt]/[acid])", meaning: "pH from ratio, not amounts", vars: [{ name: "pK_a", meaning: "acid's −log K_a" }], when: "any buffer near its range" },
    { name: "Equal-parts rule", formula: "[salt]=[acid] ⇒ pH = pK_a", meaning: "maximum buffering sits on the pK_a", vars: [{ name: "—", meaning: "10:1 ⇒ ±1 pH" }], when: "buffer design" },
    { name: "After acid spike", formula: "n(A⁻)−x, n(HA)+x", meaning: "strong acid converts base→acid on the mole sheet, then re-run H-H", vars: [{ name: "x", meaning: "moles added" }], when: "spike problems" }
  ],
  workedExamples: [
    { problem: "0.20 M CH₃COOH + 0.20 M CH₃COONa: pH? (pK_a = 4.76)", calculation: "Equal concentrations ⇒ log 1 = 0.", answer: "pH = 4.76 exactly." },
    { problem: "Same buffer after adding 0.01 mol HCl to 1 L (0.2 mol each)?", calculation: "HCl eats 0.01 A⁻: acid 0.21, base 0.19; pH = 4.76 + log(0.19/0.21).", answer: "4.72 — 0.04 pH unit for strong acid that would crater pure water." },
    { problem: "Target pH 5.00 with ethanoate buffer (pK_a 4.76): salt:acid ratio?", calculation: "5.00 − 4.76 = 0.24 = log ratio ⇒ ratio = 10^0.24.", answer: "≈ 1.7 : 1 salt to acid." },
    { problem: "Blood: pH 7.4, pK_a′ 6.1 ⇒ [HCO₃⁻]:[H₂CO₃]?", calculation: "1.3 = log ratio ⇒ ratio = 10^1.3.", answer: "≈ 20 : 1 — mostly base form, exactly as physiology demands." }
  ],
  commonMistakes: [
    "Trying H-H on STRONG acid/salt mixtures (no equilibrium, no buffer)",
    "Swapping [salt] and [acid] in the log term",
    "Confusing capacity (moles) with pH (ratio)",
    "Ignoring that added strong acid/base CONVERTS one component before re-equilibrating",
    "Choosing a pK_a far from target pH then wondering why it fails"
  ],
  applications: [
    "Blood and intravenous fluids (Ringer's, saline-with-buffer)",
    "Dyeing baths and photographic processing",
    "Biology lab: electrophoresis and enzyme assays in TAE/TBS buffers",
    "Fermented foods and beer: yeast works inside narrow pH windows"
  ],
  summary: "Reserves of both partners absorb invaders; pH = pK_a + log(ratio) — best at equal parts, good for ±1, capacity = concentration × volume.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Which pair forms a buffer?", options: ["HCl + NaCl", "CH₃COOH + CH₃COONa", "NaOH + HCl", "CH₃COOH alone"], answer: 1, difficulty: 1, explanation: "Weak acid + its salt: both reserves present." },
    { type: "mcq", q: "In an ethanoate buffer, added OH⁻ is consumed by:", options: ["ethanoate ion", "ethanoic acid", "water", "sodium ion"], answer: 1, difficulty: 1, explanation: "The acid reserve donates protons to neutralise hydroxide." },
    { type: "mcq", q: "When [salt] = [acid], buffer pH equals:", options: ["7", "pK_a", "pK_b", "14"], answer: 1, difficulty: 2, explanation: "log 1 = 0 in H-H." },
    { type: "mcq", q: "A buffer at pK_a + 2 (ratio 100:1) is:", options: ["ideal", "nearly spent: outside effective range", "highest capacity", "neutral"], answer: 1, difficulty: 2, explanation: "Only ±1 around pK_a buffers usefully." },
    { type: "mcq", q: "Buffer capacity depends mainly on:", options: ["ratio only", "total concentration of reserves", "temperature only", "colour"], answer: 1, difficulty: 2, explanation: "More moles of HA and A⁻ = more invaders absorbable." },
    { type: "mcq", q: "0.1 M acid / 0.01 M salt (pK_a 4.8) gives pH:", options: ["3.8", "4.8", "5.8", "4.7"], answer: 0, difficulty: 3, explanation: "pH = 4.8 + log(0.1) = 4.8 − 1 = 3.8." },
    { type: "mcq", q: "Blood HCO₃⁻:H₂CO₃ = 20:1 with pK_a′ 6.1 gives pH:", options: ["6.1", "7.4", "8.4", "5.4"], answer: 1, difficulty: 3, explanation: "6.1 + log 20 = 6.1 + 1.3 = 7.4." },
    { type: "mcq", q: "Adding a little water to a buffer changes pH:", options: ["sharply down", "almost not at all (ratio constant)", "sharply up", "to 7"], answer: 1, difficulty: 3, explanation: "Both concentrations divide equally; the log term ignores dilution (capacity drops though)." }
  ]
};

Lessons["g12-chemistry-uc1-t4"] = {
  overview: "Dissolve a salt and the water's pH can shift — because one of the salt's ions is secretly a weak acid's conjugate base, or a weak base's conjugate acid. Salt hydrolysis predicts whether ethanoate solutions turn basic, ammonium solutions acidic, and why 'neutral salts' like NaCl leave pH alone.",
  objectives: [
    "Classify salts: strong/weak acid × strong/weak base combinations",
    "Predict solution pH from salt type",
    "Write hydrolysis equations for each active ion",
    "Calculate pH of simple salt solutions via K_b = Kw/K_a",
    "Relate hydrolysis to everyday chemistry"
  ],
  simple: "<b>Salts are leftovers — and leftovers react.</b> NaCl came from strong HCl + strong NaOH: its ions are so feeble they leave water untouched: pH 7. CH₃COONa came from weak acid: its ethanoate ion is a real base, grabbing protons from water and leaving OH⁻ behind: basic, pH > 7. NH₄Cl: the ammonium ion donates protons to water: acidic. Weak+weak (CH₃COONH₄): a tug-of-war — whoever's stronger wins.",
  detailed: "<p><b>The four cases (25 °C).</b> (1) Strong acid + strong base (NaCl, KNO₃, Na₂SO₄): both ions are spectators ⇒ pH 7. (2) Weak acid + strong base (CH₃COONa, Na₂CO₃, NaCN): anion hydrolyses: A⁻ + H₂O ⇌ HA + OH⁻ ⇒ BASIC. (3) Strong acid + weak base (NH₄Cl, AlCl₃, CuSO₄): cation hydrolyses: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺ ⇒ ACIDIC. (4) Weak acid + weak base (CH₃COONH₄, (NH₄)₂CO₃): both hydrolyse; pH follows the bigger equilibrium constant — compare K_a(HA) vs K_b(B): ethanoate ammonium: K_a(HAc) 1.8×10⁻⁵ vs K_b(NH₃) 1.8×10⁻⁵ — dead even ⇒ ≈ 7.</p><p><b>Why it works.</b> Hydrolysis is the reverse of neutralisation: the weak-acid anion is the conjugate base the parent acid never fully became; it steals protons from water, and the leftover OH⁻ is the evidence. Small highly charged cations (Al³⁺, Fe³⁺) hydrolyse hard — [Al(H₂O)₆]³⁺ donates protons (pK_a ≈ 5), so alum water-treatment sludge is acidic and can sting.</p><p><b>Calculation pattern.</b> 0.05 M CH₃COONa: K_b(ethanoate) = Kw/K_a = 5.6×10⁻¹⁰; [OH⁻] = √(K_b·c) = √(2.8×10⁻¹¹) = 5.3×10⁻⁶ ⇒ pOH 5.3 ⇒ pH 8.7. Same recipe for cation cases via K_a(NH₄⁺) = 5.6×10⁻¹⁰ ⇒ acidic mirror.</p><p><b>Carbonate double-step.</b> CO₃²⁻ is notably basic (K_b = Kw/K_a2 = 2.1×10⁻⁴): washing soda solutions reach pH ~11.5 — that's why 'soda ash' cleans grease (saponifies fats) and why it cuts hard water (precipitates CaCO₃).</p><p><b>Everyday hydrolysis.</b> Soapy water is basic for this reason (RCOO⁻ + H₂O). Fertile soils: Al³⁺ hydrolysis makes volcanic/tea soils acidic — farmers lime them (CaCO₃ eats the H₃O⁺). Blood's bicarbonate, curing 'kosina' with wood-ash potash (alkaline hidroxide), and baking soda vs cream of tartar reactions in pastry are all hydrolysis acid–base plays.</p>",
  keyTerms: [
    { term: "Hydrolysis", def: "ion + water ⇌ weak partner + H₃O⁺/OH⁻" },
    { term: "Spectator ion", def: "conjugate of a STRONG partner: no pH effect" },
    { term: "K_b = Kw/K_a", def: "anion basicity from parent acidity" },
    { term: "Cationic hydrolysis", def: "NH₄⁺, Al³⁺: acidic solutions" },
    { term: "Washing soda", def: "Na₂CO₃: strongly basic by hydrolysis" },
    { term: "Soil acidity", def: "Al³⁺ hydrolysis; fixed by liming" }
  ],
  formulas: [
    { name: "Anion hydrolysis", formula: "A⁻ + H₂O ⇌ HA + OH⁻", meaning: "weak-acid salt → base", vars: [{ name: "K_b", meaning: "Kw/K_a(HA)" }], when: "ethanoates, carbonates, CN⁻" },
    { name: "Cation hydrolysis", formula: "BH⁺ + H₂O ⇌ B + H₃O⁺", meaning: "weak-base salt → acid", vars: [{ name: "K_a", meaning: "Kw/K_b(B)" }], when: "NH₄⁺, Al³⁺, Cu²⁺" },
    { name: "Salt pH shortcut", formula: "[OH⁻] = √((Kw/K_a)·c)", meaning: "hydrolysis arithmetic", vars: [{ name: "c", meaning: "salt molarity" }], when: "anion case; mirror for cations" }
  ],
  workedExamples: [
    { problem: "Predict pH of 0.1 M solutions: NaCl, CH₃COONa, NH₄Cl, Na₂CO₃.", calculation: "Strong+strong 7; weak-acid salt basic; weak-base salt acidic; carbonate doubly so.", answer: "≈7, >7 (8.9), <7 (5.1), ~11.5." },
    { problem: "0.05 M sodium ethanoate (K_a HAc = 1.8×10⁻⁵): pH?", calculation: "K_b = 5.6×10⁻¹⁰; [OH⁻] = √(5.6×10⁻¹⁰×0.05) = 5.3×10⁻⁶.", answer: "pH ≈ 8.7." },
    { problem: "0.1 M NH₄Cl: pH? (K_b NH₃ = 1.8×10⁻⁵)", calculation: "K_a(NH₄⁺) = 5.6×10⁻¹⁰; [H₃O⁺] = √(5.6×10⁻¹⁰×0.1) = 7.5×10⁻⁶.", answer: "pH ≈ 5.1." },
    { problem: "Why is alum (KAl(SO₄)₂) water treatment slightly acidic?", calculation: "Al³⁺ hexaaqua ion hydrolyses, donating H₃O⁺.", answer: "Cationic hydrolysis; it also precipitates Al(OH)₃ floc that traps dirt." }
  ],
  commonMistakes: [
    "Assuming ALL salts are neutral ('salt = pH 7' myth)",
    "Hydrolysing the SPECTATOR ion instead of the active one",
    "Forgetting Na₂CO₃ has TWO basic steps (CO₃²⁻ ≫ HCO₃⁻ basicity)",
    "Writing OH⁻ from cation hydrolysis (cations give H₃O⁺)",
    "Ignoring small highly-charged ions (Al³⁺, Fe³⁺) as 'just metal cations'"
  ],
  applications: [
    "Soap and detergent: fatty-acid salts clean because hydrolysis makes them alkaline",
    "Agriculture: liming acidic soils (Al³⁺ hydrolysis) with CaCO₃/CaO",
    "Water treatment: alum flocculation + pH control",
    "Food: baking soda's alkalinity leavens; 'soda' nixtamalizes maize"
  ],
  summary: "Read the salt's parents: strong-strong neutral, weak-acid parent basic, weak-base parent acidic; the active ion hydrolyses water, K_b = Kw/K_a sizes it.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Which salt solution is basic?", options: ["NH₄Cl", "CH₃COONa", "NaCl", "AlCl₃"], answer: 1, difficulty: 1, explanation: "Weak-acid + strong-base salt: ethanoate hydrolyses to OH⁻." },
    { type: "mcq", q: "NaCl solution is neutral because:", options: ["salt is inert", "both ions are conjugates of strong partners", "water cancels it", "it lacks ions"], answer: 1, difficulty: 1, explanation: "Neither Cl⁻ nor Na⁺ touches water's protons." },
    { type: "mcq", q: "NH₄Cl solution pH is about:", options: ["7", "5", "9", "12"], answer: 1, difficulty: 2, explanation: "Ammonium donates protons to water: acidic." },
    { type: "mcq", q: "K_b for CN⁻ (HCN K_a = 6×10⁻¹⁰) is:", options: ["6×10⁻¹⁰", "1.7×10⁻⁵", "6×10⁻²⁴", "1/6×10⁵"], answer: 1, difficulty: 2, explanation: "Kw/K_a = 10⁻¹⁴/6×10⁻¹⁰." },
    { type: "mcq", q: "Washing soda (Na₂CO₃) cleans grease because CO₃²⁻ hydrolysis gives:", options: ["acidic water", "abundant OH⁻ (pH ~11.5)", "CO₂ gas", "salt"], answer: 1, difficulty: 2, explanation: "The alkaline bath saponifies fats." },
    { type: "mcq", q: "A 0.1 M salt of weak acid (K_a 10⁻⁹) is basic. Its pH ≈", options: ["7", "8", "11", "9"], answer: 2, difficulty: 3, explanation: "K_b = 10⁻⁵; [OH⁻] = √(10⁻⁶) = 10⁻³ ⇒ pH 11." },
    { type: "mcq", q: "Why are tea-growing soils acidic?", options: ["rain water", "Al³⁺ hydrolysis in volcanic minerals", "worms", "shading"], answer: 1, difficulty: 3, explanation: "Small 3+ ions pump H₃O⁺ into soil water." },
    { type: "mcq", q: "CH₃COONH₄ solution is nearly neutral because:", options: ["neither ion reacts", "K_a(ethanoic) ≈ K_b(ammonia): equal tug-of-war", "it's insoluble", "ammonia evaporates"], answer: 1, difficulty: 3, explanation: "Both hydrolyse; the strengths match, cancelling the pH shift." }
  ]
};

Lessons["g12-chemistry-uc1-t5"] = {
  overview: "Indicators are weak acids whose ionised form has a different colour — so they flip when pH crosses their pK_a. Titration is the controlled marriage of acid and base to an equivalence point, and choosing an indicator whose range matches the equivalence pH is the craft. From burette to graph, this topic is where Unit 1's equilibria become a measured number.",
  objectives: [
    "Explain indicator action (HIn ⇌ H⁺ + In⁻, colour change at pK_a ± 1)",
    "Match indicator range to equivalence-point pH for each titration type",
    "Compute concentrations from titration data (n a·M a·V a relationships)",
    "Read and sketch the four classic titration curves",
    "Apply neutralisation to real Ethiopian scenarios"
  ],
  simple: "<b>Colour is chemistry you can see.</b> Litmus is itself an acid: HIn red, In⁻ blue, and it flips over pH 5–8 — where the ratio crosses 1:10 to 10:1. Strong-vs-strong titrations plunge through 7 with a vertical jump: any sharp indicator (phenolphthalein 8.2–10, methyl orange 3.1–4.4) is fine. Weak acid vs strong base ends BASIC (equivalence pH ~8.7): phenolphthalein. Strong acid vs weak base ends ACIDIC: methyl orange. Pick by the equivalence pH, not by habit.",
  detailed: "<p><b>Indicator mechanics.</b> HIn ⇌ H⁺ + In⁻ with its own K_a(in). The eye sees colour A below pK_a−1 (ratio 10:1 acid form) and colour B above pK_a+1. So each indicator has a RANGE roughly pK_a ± 1, and within it shows a blend. Litmus (purple, ~5–8), phenolphthalein (colourless→pink, 8.2–10.0), methyl orange (red→yellow, 3.1–4.4), bromothymol blue (yellow→blue, 6.0–7.6) — memorise the big three with their ranges.</p><p><b>Equivalence vs end point.</b> Equivalence point: stoichiometric completion (moles H⁺ = moles OH⁻). End point: indicator colour flip. They differ by the indicator error — negligible if the range straddles the equivalence pH. The titration's vertical pH jump (e.g. 4→10 within a drop) is what makes any matched indicator safe.</p><p><b>The four curves.</b> (1) Strong acid + strong base: starts ~1, equivalence at 7, tall vertical 4–10 — both indicators work. (2) Weak acid + strong base: starts ~3, buffer region (halfway: pH = pK_a!), equivalence >7 (acetate hydrolysis!) — phenolphthalein. (3) Strong acid + weak base: starts low, equivalence <7 (ammonium!) — methyl orange. (4) Weak + weak: short inflection, no sharp indicator: use mixed-bromocresol or potentiometry. Each curve's halfway point of (2) is the H-H proof: pH = pK_a at half-neutralisation.</p><p><b>Titration arithmetic.</b> At equivalence: (M_a V_a)/a = (M_b V_b)/b. Examples: 25.0 cm³ HCl neutralised by 22.5 cm³ 0.100 M NaOH ⇒ M(HCl) = 0.090 M. For Na₂CO₃ vs 2 HCl: moles acid = 2 × moles carbonate. Back-titration handles what won't dissolve (limestone in stomach-acid tablets: add excess standard HCl, titrate leftover with NaOH). The Ethiopian coffee-trade cuppers' acidity checks and water-hardness EDTA tests are titrations wearing work clothes.</p><p><b>Carbonate special case.</b> Na₂CO₃ + HCl has TWO steps: CO₃²⁻→HCO₃⁻ (first equivalence ~pH 8.3, phenolphthalein end) then HCO₃⁻→H₂CO₃ (~pH 3.9, methyl orange end). Double-indicator titration quantifies mixed alkali (OH⁻/CO₃²⁻/HCO₃⁻) in detergent and well-water analysis — a favourite exam flow.</p>",
  keyTerms: [
    { term: "HIn/In⁻", def: "indicator acid/base pair, different colours" },
    { term: "Transition range", def: "pK_a(in) ± 1" },
    { term: "Equivalence point", def: "stoichiometric completion" },
    { term: "End point", def: "observed colour change" },
    { term: "Phenolphthalein", def: "colourless→pink, 8.2–10" },
    { term: "Methyl orange", def: "red→yellow, 3.1–4.4" },
    { term: "Back titration", def: "excess standard reagent, titrate the leftover" },
    { term: "Half-neutralisation", def: "pH = pK_a (weak acid curve)" }
  ],
  formulas: [
    { name: "Neutralisation", formula: "M_aV_a/a = M_bV_b/b", meaning: "mole balance at equivalence", vars: [{ name: "a,b", meaning: "stoichiometric coefficients" }], when: "every titration sum" },
    { name: "Indicator equilibrium", formula: "[In⁻]/[HIn] = 10^(pH−pK_a)", meaning: "the ratio that sets the seen colour", vars: [{ name: "pK_a(in)", meaning: "range centre" }], when: "indicator choice" },
    { name: "Carbonate double end", formula: "2 HCl per CO₃²⁻", meaning: "two equivalents, two indicators", vars: [{ name: "ph-ph", meaning: "first step" }, { name: "mo-mo", meaning: "second step" }], when: "mixed-alkali analysis" }
  ],
  workedExamples: [
    { problem: "25.0 cm³ of HCl needed 21.6 cm³ of 0.100 M NaOH. Find [HCl].", calculation: "1:1: M_a = 0.100 × 21.6/25.0.", answer: "0.0864 M." },
    { problem: "25.0 cm³ of Na₂CO₃ needed 32.0 cm³ of 0.200 M HCl (to methyl orange). Concentration?", calculation: "n(HCl) = 0.0064 mol; n(carb) = half = 0.0032; M = 0.0032/0.025.", answer: "0.128 M." },
    { problem: "Weak acid (K_a 1.8×10⁻⁵) titrated with NaOH: pH at half-neutralisation?", calculation: "Halfway, [HA] = [A⁻]: H-H gives pH = pK_a.", answer: "4.76 — and phenolphthalein (range 8.2–10) matches the equivalence pH ~8.7, not methyl orange." },
    { problem: "Which indicator for NH₃(aq) + HCl?", calculation: "Equivalence solution is NH₄Cl: acidic, pH ~5.2.", answer: "Methyl orange (3.1–4.4); phenolphthalein would have flipped long before equivalence." }
  ],
  commonMistakes: [
    "Using phenolphthalein for strong-acid/weak-base titrations (colour at wrong pH)",
    "Confusing equivalence point with end point",
    "Forgetting the 2:1 ratio with Na₂CO₃",
    "Reading burette volumes inverted (scale starts at top zero)",
    "Washing the pipette with water then using it wet (dilutes analyte — rinse with the solution instead)"
  ],
  applications: [
    "Vinegar acidity grading and injera-ferment pH checks",
    "Water hardness (EDTA titration) for boilers and households",
    "Stomach-tablet strength by back-titration",
    "Sugar-mill juice pH control (liming) monitored with indicators"
  ],
  summary: "An indicator is a visible equilibrium; match its range to the equivalence pH: both work strong/strong, phenolphthalein for weak-acid, methyl orange for weak-base, moles = M×V everywhere.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Indicators change colour because:", options: ["pH dissolves them", "HIn and In⁻ have different colours", "they evaporate", "they are metals"], answer: 1, difficulty: 1, explanation: "The two equilibrium forms absorb light differently." },
    { type: "mcq", q: "Phenolphthalein range is about:", options: ["3.1–4.4", "8.2–10.0", "5–8", "0–2"], answer: 1, difficulty: 1, explanation: "Colourless below, pink in base — the classic 8.2–10." },
    { type: "mcq", q: "HCl vs NaOH equivalence point is at pH:", options: ["7", "3", "10", "12"], answer: 0, difficulty: 1, explanation: "Strong+strong: neutral salt solution." },
    { type: "mcq", q: "Best indicator for ethanoic acid vs NaOH:", options: ["methyl orange", "phenolphthalein", "litmus", "none"], answer: 1, difficulty: 2, explanation: "Equivalence is basic (~8.7): phenolphthalein straddles it." },
    { type: "mcq", q: "At half-neutralisation of a weak acid, pH equals:", options: ["7", "pK_a", "pK_b", "14−pK_a"], answer: 1, difficulty: 2, explanation: "The buffer region's centre: [HA] = [A⁻]." },
    { type: "mcq", q: "20.0 cm³ NaOH neutralised by 15.0 cm³ of 0.100 M HCl: [NaOH] =", options: ["0.075 M", "0.133 M", "0.150 M", "0.100 M"], answer: 0, difficulty: 2, explanation: "M_b = 0.1×15/20 = 0.075 M." },
    { type: "mcq", q: "Why no indicator for weak acid + weak base?", options: ["indicators are acids", "no steep pH jump: the change is gradual", "salt interferes", "it's never neutral"], answer: 1, difficulty: 3, explanation: "Buffering from both sides flattens the curve — use a meter." },
    { type: "mcq", q: "Na₂CO₃ titrated with HCl to methyl orange end consumes:", options: ["1 HCl per carbonate", "2 HCl per carbonate", "0.5 HCl", "3 HCl"], answer: 1, difficulty: 3, explanation: "Full neutralisation: CO₃²⁻ + 2H⁺ → H₂CO₃." }
  ]
};
