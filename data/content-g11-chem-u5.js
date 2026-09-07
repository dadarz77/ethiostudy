/* Content: Grade 11 Chemistry — Unit 5: Chemical Equilibrium (4 topics) */
window.Lessons = window.Lessons || {};

Lessons["g11-chemistry-uc5-t1"] = {
  overview: "Most reactions don't run to completion — they settle into dynamic equilibrium, forward and reverse rates equal, concentrations frozen though molecules never stop reacting. Recognizing reversible vs irreversible reactions and reading equilibrium graphs is the foundation of the whole unit.",
  objectives: [
    "Distinguish reversible from irreversible reactions with examples",
    "Define dynamic equilibrium microscopically and macroscopically",
    "Sketch rate–time and concentration–time graphs to equilibrium",
    "Explain why equilibrium is reached from any starting direction",
    "Give everyday examples of reversible change"
  ],
  simple: "Burn paper: ash and smoke — you can't un-burn it. That's irreversible: one arrow, reaction 'goes to completion'. Now put nitrogen and hydrogen in a sealed vessel: they form ammonia, but ammonia also decomposes back; eventually both directions proceed at the SAME rate. Concentrations stop changing — but molecules keep reacting both ways. That's dynamic equilibrium: a two-way arrow, a stalemate, not a stop. Key insight: you arrive at the same equilibrium from either side — start with pure N₂ + H₂ or pure NH₃, same final mixture. Closed container is essential: open a bottle of soda and CO₂ escapes — equilibrium never establishes, the drink goes flat (an irreversible loss). In a sealed fizzy bottle, CO₂ gas, dissolved CO₂ and the liquid's carbonic acid sit in balance — pressure holds the fizz.",
  detailed: "<p><b>Irreversible reactions:</b> products leave the arena — gas escapes (Zn + H₂SO₄ → H₂↑ in open beaker), precipitate forms (Ag⁺ + Cl⁻ → AgCl↓), or combustion destroys the fuel (CH₄ + 2O₂ → CO₂ + 2H₂O; ΔG hugely negative). Single arrow →.</p><p><b>Reversible:</b> products retain the ability to react back. N₂ + 3H₂ ⇌ 2NH₃; ester hydrolysis CH₃COOC₂H₅ + H₂O ⇌ CH₃COOH + C₂H₅OH; weak acid ionization CH₃COOH ⇌ CH₃COO⁻ + H⁺. Double arrow ⇌.</p><p><b>Dynamic nature.</b> At equilibrium: rate_forward = rate_reverse — NOT concentrations equal. Evidence: isotopic tracer studies (adding ¹⁴CO to the CO + Cl₂ ⇌ COCl₂ system spreads the label through everything — reactions continue); color of a saturated CoCl₂/HCl solution stays constant while ligand exchange continues at molecular speed. Macroscopic properties (color, pH, pressure, density) are constant; microscopic activity is maximal.</p><p><b>Approaching from both sides.</b> Start with reactants: forward rate begins high, falls as reactants deplete; reverse starts at zero, climbs as products build. They cross — equilibrium. Start with pure products: mirror image. Same crossing point (same K) — equilibrium is a destination, not a journey direction. This is why the equilibrium constant is the same whether you write the reaction forward or reverse (reciprocal).</p><p><b>Graph literacy (exam staple).</b> Concentration–time: reactants decay, products rise, both flatten at t_eq (flat ≠ dead). Rate–time: forward curve falls, reverse rises, they MEET at one horizontal line — equal rates, the definition. Disturb the system (add reactant, change T) and the curves jump and re-settle — Le Chatelier's movie (next topics).</p><p><b>Open vs closed.</b> Only closed systems equilibrate; open ones drift to completion or escape. Soda fizz, equilibrium breathing (O₂ + Hb ⇌ HbO₂ in lungs vs tissues), and the smell of perfume (evaporation–condensation balance in a capped bottle) — all the same physics.</p>",
  keyTerms: [
    { term: "Reversible reaction", def: "Products can react to reform reactants (⇌)" },
    { term: "Dynamic equilibrium", def: "Equal forward/reverse rates; constant concentrations, ongoing reaction" },
    { term: "Closed system", def: "Nothing escapes — required for equilibrium" },
    { term: "Rate–time graph", def: "Forward falls, reverse rises, meet at equilibrium" },
    { term: "Macroscopic constancy", def: "Observable properties steady while molecules churn" },
    { term: "Go to completion", def: "Irreversible: ~100% products" }
  ],
  formulas: [
    {
      name: "Equilibrium condition",
      formula: "rate_forward = rate_reverse",
      meaning: "The definition — NOT [reactants] = [products]",
      vars: [{ name: "—", meaning: "rates, not concentrations", unit: "mol/L·s" }],
      units: "—",
      when: "Any equilibrium question",
      example: "N₂O₄ ⇌ 2NO₂: equal rates, but [NO₂] ≠ [N₂O₄]"
    },
    {
      name: "Two-way writing",
      formula: "A ⇌ B and B ⇌ A: same state, K reciprocal",
      meaning: "Direction of approach doesn't change the destination",
      vars: [{ name: "K", meaning: "equilibrium constant", unit: "—" }],
      units: "—",
      when: "Reading equilibrium expressions",
      example: "Start pure NH₃ or pure N₂ + H₂ → identical equilibrium mixture"
    }
  ],
  workedExamples: [
    {
      problem: "Classify: (a) H₂ + I₂ ⇌ 2HI heated in a sealed tube; (b) baking soda + vinegar fizzing in air; (c) esterification in a stoppered flask.",
      given: "open/closed, reversibility",
      formula: "products can return?",
      substitution: "(a) sealed, reversible; (b) CO₂ escapes → irreversible; (c) stoppered, reversible",
      calculation: "gas loss = one-way trip",
      answer: "(a) and (c) reach equilibrium; (b) runs to completion — the escaping gas forbids the reverse"
    },
    {
      problem: "A student says 'at equilibrium all reactions stop.' Refute with the soda-bottle example.",
      given: "dynamic claim",
      formula: "equal rates ≠ zero rates",
      substitution: "sealed fizz: CO₂ dissolves AND escapes the liquid constantly",
      calculation: "pressure and fizziness steady — rates matched",
      answer: "Nothing stops; the two directions cancel in effect. Open the cap and the balance breaks — proof the closed system was active, not dead"
    },
    {
      problem: "Sketch (describe) the rate–time graph for N₂ + 3H₂ → 2NH₃ starting from reactants only.",
      given: "initial conditions",
      formula: "forward falls, reverse rises",
      substitution: "t = 0: forward max, reverse zero",
      calculation: "curves converge at t_eq, then one flat line",
      answer: "Two curves meeting and continuing together horizontally — equal rates, the signature of dynamic equilibrium"
    },
    {
      problem: "NO₂ (brown) ⇌ N₂O₄ (colorless) in a sealed syringe. Compress suddenly — explain the color dance.",
      given: "2NO₂ ⇌ N₂O₄",
      formula: "concentration jump then shift",
      substitution: "compression: [NO₂] doubles instantly → darker",
      calculation: "then forward rate (∝ [NO₂]²) beats reverse → NO₂ consumed → fades (still darker than original)",
      answer: "Dark flash, then partial recovery — the new equilibrium has fewer molecules but more brown NO₂ per mL than before"
    },
    {
      problem: "Why is 'equal concentrations of reactants and products' wrong as an equilibrium definition?",
      given: "common claim",
      formula: "rates vs concentrations",
      substitution: "K can be 10⁵ (products dominate) or 10⁻⁵ (reactants dominate)",
      calculation: "equal rates always; equal concentrations almost never",
      answer: "Equilibrium fixes the RATIO (K), not equality — most equilibria heavily favor one side"
    }
  ],
  commonMistakes: [
    "Equilibrium = concentrations equal — NO: rates equal, concentrations constant",
    "Equilibrium = reaction stopped — it's dynamic; tracers prove ongoing exchange",
    "Two-way arrow used for any reaction — only genuinely reversible ones",
    "Open systems expected to equilibrate — escaping products drive completion",
    "Flat concentration graph read as 'nothing happening' — flat = balanced",
    "Claiming equilibrium reached when product first appears — must wait for rate equality",
    "Confusing 'fast to reach' with 'large yield' — kinetics and equilibrium are independent"
  ],
  applications: [
    "Carbonated drinks: sealed-bottle CO₂ equilibrium keeps the fizz; pressure engineering in bottling plants",
    "Blood oxygen: Hb + O₄ ⇌ HbO₄ — lung tissue loading/unloading is equilibrium shifted by concentration",
    "Perfume & fermentation: capped vessels hold volatile equilibria; opening drives evaporation",
    "Dentistry: hydroxyapatite ⇌ ions in saliva — fluoride shifts the balance toward stronger enamel",
    "Environmental: CO₂ ocean ⇌ atmosphere equilibrium — the ocean absorbs ~30% of emissions via this balance"
  ],
  summary: "Irreversible reactions (gas escape, precipitates, combustion) run one way; reversible ones in closed systems settle into dynamic equilibrium — forward and reverse rates equal, macroscopic properties constant, molecular activity undiminished. The same equilibrium state is reached from either direction, and rate–time graphs show the two curves converging into one line. Equilibrium is a stalemate of speeds, never a standstill of chemistry.",
  visuals: [
    { type: "lineGraph", config: { title: "Rate vs time to equilibrium", xLabel: "time", yLabel: "rate", series: [{ label: "forward", color: "#3b82f6", points: [[0, 100], [1, 60], [2, 40], [3, 30], [4, 25], [5, 25]] }, { label: "reverse", color: "#ef4444", points: [[0, 0], [1, 12], [2, 19], [3, 23], [4, 25], [5, 25]] }] } },
    { type: "comparison", config: { title: "Irreversible vs reversible", left: { name: "→ one way", items: ["gas escapes", "precipitate forms", "combustion", "goes to completion"] }, right: { name: "⇌ two way", items: ["closed vessel", "equal rates at eq.", "same state from either side", "ratio fixed (K)"] } } },
    { type: "qa", config: { title: "Equilibrium myths", pairs: [{ q: "Concentrations equal?", a: "<b>No — rates equal</b>" }, { q: "Reaction stops?", a: "<b>No — dynamic</b>" }, { q: "Open bottle equilibrate?", a: "<b>No — CO₂ escapes</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "At dynamic equilibrium:", options: ["reaction stops", "rates equal", "concentrations equal", "K = 1"], answer: 1, difficulty: 1, explanation: "Equal forward/reverse rates — concentrations merely constant" },
    { type: "mcq", q: "Which is irreversible?", options: ["N₂ + 3H₂ ⇌ 2NH₃", "esterification", "burning magnesium", "weak acid ionization"], answer: 2, difficulty: 1, explanation: "Combustion products can't reassemble the metal" },
    { type: "mcq", q: "Equilibrium requires a:", options: ["open system", "closed system", "catalyst", "vacuum"], answer: 1, difficulty: 1, explanation: "Nothing may escape or the balance never forms" },
    { type: "mcq", q: "Starting with pure products instead of reactants:", options: ["gives different equilibrium", "same equilibrium reached", "no equilibrium forms", "K changes"], answer: 1, difficulty: 2, explanation: "The destination is direction-independent" },
    { type: "tf", q: "At equilibrium, concentrations of all species are constant.", answer: true, difficulty: 1, explanation: "Macroscopic constancy — the observable signature" },
    { type: "tf", q: "At equilibrium, the forward rate constant equals the reverse rate constant.", answer: false, difficulty: 3, explanation: "RATES equal (k_f[A] = k_r[B]); the constants differ — their ratio IS K" },
    { type: "calc", q: "k_f = 4.0 × 10⁻³ s⁻¹, k_r = 2.0 × 10⁻⁴ s⁻¹. K?", answer: "20", difficulty: 2, explanation: "K = k_f/k_r = 20" },
    { type: "calc", q: "A sealed 2NO₂ ⇌ N₂O₄ syringe is compressed to half volume. [NO₂] instantly:", answer: "2|doubles", difficulty: 2, explanation: "Same moles, half the space → concentration doubles before any shift" },
    { type: "short", q: "Arrow pair showing reversibility:", answer: "harpoons|two-way|⇌|equilibrium arrows", difficulty: 1, explanation: "The ⇌ double harpoon arrow" },
    { type: "concept", q: "Explain why an open pot of boiling salt water never reaches dissolution equilibrium.", answer: "water escapes|open system|concentration rises|no balance", difficulty: 3, explanation: "Equilibrium needs a closed system; evaporating water leaves, shrinking the solvent so more salt could always dissolve — the reverse (crystallization at saturation) never gets its chance until the pot runs dry" }
  ]
};

Lessons["g11-chemistry-uc5-t2"] = {
  overview: "The equilibrium constant K is chemistry's law of the ratio: at a fixed temperature, equilibrium concentrations always satisfy K = [products]^coefficients / [reactants]^coefficients. Write it from the balanced equation, compute it from data, and use ICE tables to find equilibrium composition from any starting point.",
  objectives: [
    "Write Kc expressions from balanced equations (and Kp for gases)",
    "Compute Kc from equilibrium concentrations",
    "Use ICE tables to solve for unknown equilibrium amounts",
    "Apply the reaction quotient Q to predict shift direction",
    "Manipulate K for reversed, scaled and added reactions"
  ],
  simple: "No matter how you mix them, a reaction at equilibrium always lands on the same ratio: K = [C]^c[D]^d / [A]^a[B]^b — products over reactants, each raised to its coefficient. Solids and pure liquids are omitted (their 'concentration' never changes — the amount of salt in a saturated beaker doesn't alter the balance). K ≫ 1: products dominate, reaction 'went'; K ≪ 1: reactants win, barely happened. Before equilibrium, plug current amounts into the same expression and you get Q — the reaction's GPS: Q < K (too little product) → shift right; Q > K → shift left; Q = K → parked. ICE tables organize the arithmetic: Initial, Change (±x with coefficients), Equilibrium — then solve. Small-K shortcuts (ignore x when K < 10⁻³ × starting concentration) save quadratic pain.",
  detailed: "<p><b>The expression.</b> For aA + bB ⇌ cC + dD: Kc = [C]^c[D]^d/([A]^a[B]^b). Homogeneous (all one phase) is the simple case. Heterogeneous: omit pure solids and liquids — CaCO₃(s) ⇌ CaO(s) + CO₂(g): K = [CO₂] only; the solids' 'activity' = 1. Kp for gases uses partial pressures: Kp = Kc(RT)^Δn (Δn = gas mole change). K is temperature-only — concentrations, pressure, catalysts never change it (they change the mixture, not the ratio it must satisfy).</p><p><b>Manipulation rules.</b> Reverse reaction: K' = 1/K. Multiply coefficients by n: K' = K^n. Add steps: K' = K₁ × K₂ (the equilibrium version of Hess's law). These let you build K for any reaction from tabulated ones.</p><p><b>ICE method.</b> Table: Initial concentrations, Change (−ax for reactants, +cx for products — stoichiometric ratios), Equilibrium expressions. Substitute into K, solve x. Example: 0.10 M A ⇌ B + C, K = 1.0 × 10⁻³: x²/(0.10 − x) = 10⁻³ → x ≈ 0.0095 (or shortcut x = √(K·0.10) = 0.010, valid since x < 5% of 0.10). Check: percent ionization rule — approximation fails if x > 5% of initial.</p><p><b>Reaction quotient Q.</b> Same formula, ANY moment. Compare: Q < K → products under target → net forward; Q > K → net reverse; Q = K → equilibrium. This is the quantitative Le Chatelier — every disturbance moves concentrations, Q jumps off K, and the system walks back. Initial-rate-free, it predicts direction instantly: mix 0.01 M Fe³⁺ and 0.01 M SCN⁻ (K ≈ 140 for FeSCN²⁺): Q = 0 → forward, blood-red complex forms.</p><p><b>Interpreting magnitude.</b> K > 10³: essentially complete (SO₂ + ½O₂ → SO₃, K = 7 × 10²⁴ at 25 °C — thermodynamically 'done', yet kinetically slow without V₂O₅). K < 10⁻³: negligible (N₂ + O₂ → 2NO at room T — why air doesn't burn). The 10⁻³–10³ middle is where equilibria are 'visible' and ICE tables matter.</p>",
  keyTerms: [
    { term: "Kc", def: "Equilibrium constant in concentrations — products/reactants, powers = coefficients" },
    { term: "Kp", def: "Same in partial pressures; Kp = Kc(RT)^Δn" },
    { term: "ICE table", def: "Initial–Change–Equilibrium bookkeeping" },
    { term: "Reaction quotient Q", def: "K's formula at any moment — predicts direction" },
    { term: "Activity", def: "Effective concentration; pure solids/liquids = 1 (omitted)" },
    { term: "5% rule", def: "Ignore x if it's < 5% of initial concentration" }
  ],
  formulas: [
    {
      name: "Equilibrium expression",
      formula: "Kc = [C]^c[D]^d / ([A]^a[B]^b)",
      meaning: "The one ratio every equilibrium mixture satisfies",
      vars: [{ name: "[X]", meaning: "equilibrium molarity", unit: "mol/L" }],
      units: "depends on Δn",
      when: "Any equilibrium calculation",
      example: "N₂ + 3H₂ ⇌ 2NH₃: K = [NH₃]²/([N₂][H₂]³)"
    },
    {
      name: "Kp–Kc link & Q test",
      formula: "Kp = Kc(RT)^Δn | Q<K → right, Q>K → left",
      meaning: "Pressure version + direction GPS",
      vars: [{ name: "Δn", meaning: "gas moles products − reactants", unit: "—" }],
      units: "atm^Δn",
      when: "Gas equilibria, shift prediction",
      example: "Δn = −2: Kp = Kc(RT)⁻²"
    }
  ],
  workedExamples: [
    {
      problem: "Write Kc: (a) N₂ + 3H₂ ⇌ 2NH₃; (b) CaCO₃(s) ⇌ CaO(s) + CO₂(g); (c) CH₃COOH ⇌ H⁺ + CH₃COO⁻.",
      given: "phases",
      formula: "products/reactants, omit solids",
      substitution: "(a) [NH₃]²/([N₂][H₂]³); (b) [CO₂]; (c) [H⁺][CH₃COO⁻]/[CH₃COOH]",
      calculation: "solids excluded in (b)",
      answer: "As above — note (b) is just the CO₂ pressure; more limestone changes nothing"
    },
    {
      problem: "H₂ + I₂ ⇌ 2HI, Kc = 50.5 at 450 °C. Start 1.0 M each. Equilibrium concentrations?",
      given: "ICE",
      formula: "(2x)²/((1−x)(1−x)) = 50.5",
      substitution: "2x/(1−x) = √50.5 = 7.11",
      calculation: "x = 0.78 → [HI] = 1.56, [H₂] = [I₂] = 0.22",
      answer: "[HI] 1.56 M, reactants 0.22 M each — perfect square trick avoids the quadratic"
    },
    {
      problem: "For the same reaction, a mixture reads [H₂] = 0.5, [I₂] = 0.5, [HI] = 2.0. Which way does it go?",
      given: "Q test",
      formula: "Q = [HI]²/([H₂][I₂])",
      substitution: "4.0/0.25 = 16",
      calculation: "16 < 50.5 → Q < K",
      answer: "Forward — more HI forms until Q climbs to 50.5"
    },
    {
      problem: "Given K₁ for A ⇌ B = 4 and K₂ for B ⇌ C = 3: find K for A ⇌ C, and for C ⇌ A.",
      given: "manipulation",
      formula: "add steps: multiply; reverse: reciprocal",
      substitution: "K = 4 × 3 = 12",
      calculation: "C ⇌ A: 1/12",
      answer: "K(A→C) = 12; K(C→A) = 0.083 — Hess's law for equilibria"
    },
    {
      problem: "Weak acid 0.10 M, K_a = 1.8 × 10⁻⁵. Find [H⁺] (shortcut + validity check).",
      given: "HA ⇌ H⁺ + A⁻",
      formula: "x²/0.10 ≈ K",
      substitution: "x = √(1.8 × 10⁻⁶)",
      calculation: "x = 1.34 × 10⁻³ M; x/0.10 = 1.3% < 5% ✓",
      answer: "[H⁺] ≈ 1.3 × 10⁻³ M (pH 2.87) — shortcut justified"
    }
  ],
  commonMistakes: [
    "Including pure solids/liquids in K — they're activity 1, omitted",
    "Forgetting coefficient powers: [HI]², not [HI]",
    "Using INITIAL concentrations in the K expression — must be equilibrium values",
    "ICE change column ignoring stoichiometry: 2NH₃ means +2x, not +x",
    "Q and K confused: Q is any moment, K is the target",
    "Direction test flipped: Q < K means products still LOW → forward",
    "K treated as concentration-dependent — only temperature moves K"
  ],
  applications: [
    "Blood buffering: CO₂ + H₂O ⇌ H⁺ + HCO₃⁻ — Q/K shifts with breathing (hyperventilation alkalosis)",
    "Kidney stones & dental scaling: Ca²⁺ + CO₃²⁻ ⇌ CaCO₃(s), Ksp decides where solids form",
    "Haber optimization: K(T) tables tell engineers the yield ceiling before kinetics negotiate",
    "Wine & food chemistry: esterification equilibria set aroma profiles; acidity constants set safety pH",
    "Water treatment: chlorination equilibria HOCl ⇌ H⁺ + OCl⁻ — pH controls disinfection power"
  ],
  summary: "Kc = products/reactants with coefficient powers, omitting pure solids and liquids; it depends only on temperature. ICE tables turn starting amounts into equilibrium composition; the perfect-square and 5% shortcuts tame the algebra. Q — the same ratio at any moment — is the direction GPS: below K shift right, above shift left. Reversing inverts K, scaling raises it to a power, adding steps multiplies — equilibrium arithmetic mirrors thermochemistry.",
  visuals: [
    { type: "steps", config: { title: "ICE method", steps: [{ label: "Balance & write K", detail: "omit solids" }, { label: "I row", detail: "initial molarities" }, { label: "C row", detail: "−ax / +cx" }, { label: "E row", detail: "I + C" }, { label: "Solve x", detail: "check 5% rule" }] } },
    { type: "qa", config: { title: "Q vs K", pairs: [{ q: "Q < K?", a: "<b>→ forward</b>" }, { q: "Q > K?", a: "<b>← reverse</b>" }, { q: "Q = K?", a: "<b>equilibrium</b>" }] } },
    { type: "barChart", config: { title: "K magnitude meaning", labels: ["K=10⁻⁵", "K=10⁻²", "K=1", "K=10²", "K=10⁵"], values: [0.001, 1, 50, 99, 99.999] } }
  ],
  questions: [
    { type: "mcq", q: "Kc for 2SO₂ + O₂ ⇌ 2SO₃:", options: ["[SO₃]/([SO₂][O₂])", "[SO₃]²/([SO₂]²[O₂])", "[SO₂]²[O₂]/[SO₃]²", "[SO₃]²"], answer: 1, difficulty: 2, explanation: "Products over reactants, coefficient powers" },
    { type: "mcq", q: "Which is omitted from K expressions?", options: ["gases", "aqueous ions", "pure solids", "weak acids"], answer: 2, difficulty: 1, explanation: "Activity of pure solids/liquids = 1" },
    { type: "mcq", q: "If Q > K, the reaction proceeds:", options: ["forward", "reverse", "neither", "doubles"], answer: 1, difficulty: 2, explanation: "Too much product → net reverse" },
    { type: "mcq", q: "Doubling all coefficients changes K to:", options: ["2K", "K²", "K/2", "unchanged"], answer: 1, difficulty: 2, explanation: "Every exponent doubles → K squared" },
    { type: "tf", q: "Adding a catalyst changes K.", answer: false, difficulty: 2, explanation: "Catalysts speed arrival, never move the ratio" },
    { type: "tf", q: "K < 10⁻³ means the reaction barely proceeds.", answer: true, difficulty: 2, explanation: "Reactants dominate the equilibrium mixture" },
    { type: "calc", q: "A ⇌ B, K = 4, start [A] = 1.0. Equilibrium [B]?", answer: "0.8", difficulty: 2, explanation: "x/(1−x) = 4 → x = 0.8" },
    { type: "calc", q: "[FeSCN²⁺] = 2.0 × 10⁻⁴, [Fe³⁺] = [SCN⁻] = 1.0 × 10⁻³. K?", answer: "200", difficulty: 2, explanation: "2e-4/(1e-3 × 1e-3) = 200" },
    { type: "short", q: "Table method for equilibrium composition:", answer: "ice|ice table", difficulty: 1, explanation: "ICE — Initial, Change, Equilibrium" },
    { type: "concept", q: "Why does more CaCO₃ solid not shift the decomposition equilibrium?", answer: "activity constant|solid omitted|only CO2 matters|surface unchanged", difficulty: 3, explanation: "The solid's concentration (density) is fixed — it's already at activity 1; only CO₂ pressure enters K, so extra limestone just sits there (as long as some is present)" }
  ]
};

Lessons["g11-chemistry-uc5-t3"] = {
  overview: "Le Chatelier's principle is equilibrium's reflex: stress the system (concentration, pressure, temperature) and it shifts to partially undo the stress. Combined with Q-vs-K arithmetic, it predicts which way any change pushes — the reasoning behind industrial reactor design.",
  objectives: [
    "State Le Chatelier's principle and apply it to concentration changes",
    "Predict pressure/volume shifts from gas-mole counts",
    "Explain temperature effects via reaction enthalpy (K itself changes)",
    "Explain why catalysts and inert gases don't shift equilibria",
    "Integrate Q-vs-K logic with the qualitative principle"
  ],
  simple: "A system at equilibrium fights back against disturbance — partially. Add more reactant: Q drops below K, the system consumes some of the addition by running forward (relieves your stress, never fully). Remove product: same pull forward. Compress a gas mixture: it shifts toward FEWER gas molecules to relieve the pressure (N₂ + 3H₂ ⇌ 2NH₃: 4 moles → 2, so squeezing boosts ammonia). Add an inert gas at constant volume: nothing shifts — no partial pressures changed. Temperature is the only stress that changes K itself: heat an exothermic reaction and it shifts backward (absorbing the excess heat) — the yield drops, which is why the Haber process can't just run hot. Catalysts: no shift at all — they speed both directions equally, arriving at the same mixture faster. The principle is a reflex, not a guarantee: the system only PARTIALLY undoes the stress — compress to half volume and pressure still ends up higher than before.",
  detailed: "<p><b>Concentration.</b> Add reactant A: instant Q falls below K → net forward until Q recovers to K. The new equilibrium has MORE product than before but the added A is only partly consumed (partial relief). Remove product: Q < K → forward (distilling product away drives yield — Le Chatelier as industrial strategy). Diluting an aqueous equilibrium: shifts toward MORE particles (the side that 'soaks up' water's dilution — e.g. weak acid ionization increases on dilution, Ostwald's dilution law).</p><p><b>Pressure/volume.</b> Only gas moles count. Δn_gas < 0 (fewer product moles): compression (V↓, all P↑) shifts forward; Δn > 0: shifts reverse; Δn = 0 (H₂ + I₂ ⇌ 2HI): pressure does NOTHING. Quantitative: compression multiplies every concentration; the side with more total exponent loses the rate race. Inert gas: constant V → partial pressures unchanged → no shift; constant P → volume grows → behaves like dilution → shifts toward more moles.</p><p><b>Temperature — the K-changer.</b> Treat heat as a reagent: exothermic (ΔH < 0): A ⇌ B + heat; heating shifts LEFT, K falls. Endothermic: heating shifts RIGHT, K rises. van 't Hoff: ln(K₂/K₁) = −ΔH/R(1/T₂ − 1/T₁) — the quantitative version. This is why NO production (endothermic, N₂ + O₂) thrives in lightning bolts and arc furnaces but not in cold air, and why SO₃ formation (exothermic) is run at the lowest T the catalyst allows.</p><p><b>Catalysts.</b> Lower E_a both ways equally: Q unchanged, K unchanged — faster arrival, same destination. Confusing rate with yield is the classic exam trap.</p><p><b>Industrial synthesis (the payoff).</b> Haber: N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ. High P (200 atm) ✓ forward; low T ✓ yield but ✗ rate → compromise 450 °C + Fe catalyst; recycle unreacted gas; condense NH₃ out (product removal = permanent forward pull). Contact process (SO₃): 1–2 atm (already ~99% at 450 °C with V₂O₅ — pressure not worth the cost). Each choice is a Le Chatelier calculation priced in engineering.</p>",
  keyTerms: [
    { term: "Le Chatelier's principle", def: "Stress → shift that partially relieves it" },
    { term: "Δn_gas", def: "Gas-mole change — decides pressure sensitivity" },
    { term: "van 't Hoff equation", def: "ln(K₂/K₁) = −ΔH/R(1/T₂ − 1/T₁)" },
    { term: "Product removal", def: "Continuous forward pull — industrial yield trick" },
    { term: "Inert gas effect", def: "Constant V: none; constant P: dilution shift" },
    { term: "Compromise conditions", def: "Kinetics vs equilibrium negotiated (Haber 450 °C)" }
  ],
  formulas: [
    {
      name: "Shift rules",
      formula: "↑P → fewer gas moles | ↑T → endothermic side | add A → consume A",
      meaning: "The three reflexes",
      vars: [{ name: "Δn", meaning: "gas mole difference", unit: "—" }],
      units: "—",
      when: "Any disturbance",
      example: "2NO₂ ⇌ N₂O₄ (Δn = −1): compression darkens then lightens toward colorless"
    },
    {
      name: "van 't Hoff",
      formula: "ln(K₂/K₁) = −(ΔH/R)(1/T₂ − 1/T₁)",
      meaning: "How K moves with temperature",
      vars: [{ name: "ΔH", meaning: "reaction enthalpy", unit: "J/mol" }],
      units: "—",
      when: "Temperature changes",
      example: "Exothermic −92 kJ, 700→800 K: K falls ~10×"
    }
  ],
  workedExamples: [
    {
      problem: "N₂ + 3H₂ ⇌ 2NH₃ (ΔH = −92 kJ). Predict shift: (a) add N₂, (b) compress, (c) heat, (d) add Fe catalyst.",
      given: "each stress",
      formula: "Le Chatelier",
      substitution: "(a) consume N₂ → forward; (b) 4→2 moles → forward; (c) exothermic: heat shifts reverse; (d) none",
      calculation: "K changes only in (c)",
      answer: "Forward, forward, reverse, no shift — catalyst only speeds arrival"
    },
    {
      problem: "PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), ΔH > 0. List changes that increase Cl₂ yield.",
      given: "endothermic, Δn = +1",
      formula: "shift right",
      substitution: "heat (endothermic favored); expand (more moles side); remove Cl₂ as it forms; add PCl₅",
      calculation: "compressing or cooling would backfire",
      answer: "Heat, dilate, remove product, feed reactant — four forward pulls"
    },
    {
      problem: "At equilibrium [A] = [B] = 1.0 M for A ⇌ B (K = 1). Instantly add 1.0 M A. New equilibrium?",
      given: "Q = 1/2 < K",
      formula: "ICE: (1+x)/(2−x) = 1",
      substitution: "1 + x = 2 − x",
      calculation: "x = 0.5 → [A] = 1.5, [B] = 1.5",
      answer: "Both 1.5 M — the added A was only half consumed: partial relief, exactly as promised"
    },
    {
      problem: "Why does the Contact process run at ~1.5 atm despite 2SO₂ + O₂ ⇌ 2SO₃ favoring pressure?",
      given: "Δn = −1",
      formula: "economics vs equilibrium",
      substitution: "K already huge at 450 °C (V₂O₅)",
      calculation: "yield ~99.5% at low P — compression cost buys <0.5%",
      answer: "Le Chatelier says pressure helps; engineering says the yield is already there — don't pay for what you have"
    },
    {
      problem: "A sealed bottle of soda: explain, via Le Chatelier, why it keeps fizz until opened.",
      given: "CO₂(g) ⇌ CO₂(aq)",
      formula: "constant P headspace",
      substitution: "closed: gas can't leave → equilibrium holds dissolved CO₂ at saturation",
      calculation: "opening: P_CO₂ drops → Q > K → reverse → gas escapes (fizz) until flat",
      answer: "The cap maintains the pressure stress that keeps CO₂ dissolved — remove it and the system flees toward flatness"
    }
  ],
  commonMistakes: [
    "Claiming the system fully undoes the stress — relief is PARTIAL (compression still raises final P)",
    "Catalyst said to increase yield — it changes rate only, never position",
    "Pressure effects applied to reactions with no gas or Δn = 0 — nothing shifts",
    "Inert gas at constant volume treated as a shift — partial pressures unchanged",
    "Temperature shifts reasoned without ΔH sign — heat favors the ENDOTHERMIC direction",
    "K said to change with concentration/pressure — only T moves K",
    "Adding reactant: claiming it all converts — only a fraction is consumed"
  ],
  applications: [
    "Haber compromise: 450 °C/200 atm/Fe/recycle — the textbook Le Chatelier negotiation feeding the world",
    "Hemoglobin O₂ loading: high lung P_O₂ pushes forward; tissues pull off — respiration is equilibrium transport",
    "Reef & shell chemistry: ocean acidification shifts carbonate equilibria against CaCO₃ building",
    "Blood pH: CO₂ exhalation shifts the bicarbonate buffer — breathing rate is a Le Chatelier dial",
    "Chemical recycling: driving 'waste' reactions backward to recover feedstock"
  ],
  summary: "Le Chatelier: stress an equilibrium and it shifts to partially relieve it. Concentration changes move Q (system walks back to K); pressure/volume shifts favor the fewer-gas-moles side; temperature is the only stress that changes K itself — heat favors the endothermic direction (van 't Hoff). Catalysts and constant-volume inert gases don't shift anything. Industry (Haber, Contact) is applied Le Chatelier: conditions chosen where yield, rate and cost balance.",
  visuals: [
    { type: "mindMap", config: { center: "Stress → shift", branches: [{ label: "Concentration", items: ["add A → forward", "remove product → forward", "Q moves, K fixed"] }, { label: "Pressure", items: ["compress → fewer moles", "Δn = 0 → nothing", "inert const-V → nothing"] }, { label: "Temperature", items: ["heat → endothermic", "K itself changes", "exothermic: cool = yield"] }] } },
    { type: "steps", config: { title: "Haber compromise", steps: [{ label: "High P 200 atm", detail: "4 mol → 2 mol ✓" }, { label: "450 °C", detail: "yield vs rate split" }, { label: "Fe catalyst", detail: "speed without shift" }, { label: "Condense NH₃", detail: "product removal pull" }, { label: "Recycle", detail: "unreacted back in" }] } },
    { type: "qa", config: { title: "Reflex check", pairs: [{ q: "Add reactant?", a: "<b>forward, partial</b>" }, { q: "Heat exothermic?", a: "<b>reverse, K falls</b>" }, { q: "Catalyst?", a: "<b>no shift</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "Which stress changes K itself?", options: ["concentration", "pressure", "temperature", "catalyst"], answer: 2, difficulty: 2, explanation: "Only T moves the constant" },
    { type: "mcq", q: "Compressing H₂ + I₂ ⇌ 2HI:", options: ["shifts right", "shifts left", "no shift", "stops"], answer: 2, difficulty: 2, explanation: "Δn_gas = 0 — pressure is irrelevant" },
    { type: "mcq", q: "Heating an exothermic equilibrium:", options: ["raises K", "lowers K", "no change", "catalyzes"], answer: 1, difficulty: 2, explanation: "Heat is product — adding it shifts reverse" },
    { type: "mcq", q: "A catalyst at equilibrium:", options: ["shifts right", "shifts left", "no shift", "raises yield"], answer: 2, difficulty: 1, explanation: "Equal speed both ways — same mixture" },
    { type: "tf", q: "Adding inert gas at constant volume shifts nothing.", answer: true, difficulty: 3, explanation: "Partial pressures unchanged — no stress felt" },
    { type: "tf", q: "After compression, final pressure equals the original.", answer: false, difficulty: 3, explanation: "Relief is partial — final P is higher than original, lower than instant spike" },
    { type: "calc", q: "A ⇌ B, K = 1, both 1.0 M. Add 1.0 M A. Final [B]?", answer: "1.5", difficulty: 3, explanation: "(1+x)/(2−x) = 1 → x = 0.5 → [B] = 1.5" },
    { type: "calc", q: "N₂O₄ ⇌ 2NO₂ (Δn = +1). Increasing volume shifts which way?", answer: "right|forward|toward NO2", difficulty: 2, explanation: "Expansion favors more gas moles" },
    { type: "short", q: "Principle: stressed equilibrium partially relieves the stress.", answer: "le chatelier", difficulty: 1, explanation: "Le Chatelier's principle" },
    { type: "concept", q: "Why does the Haber process continuously condense ammonia out of the recycle loop?", answer: "product removal|shifts forward|Q drops|drives yield", difficulty: 3, explanation: "Liquid NH₃ leaves the gas equilibrium — [NH₃] drops, Q < K, and the mixture keeps running forward to replace it; removal is a permanent pull no single-pass reactor can match" }
  ]
};

Lessons["g11-chemistry-uc5-t4"] = {
  overview: "Equilibrium meets the factory: the Haber process feeds the world's fertilizer, the Contact process its sulfuric acid. Both are Le Chatelier negotiations priced in energy and money — and both carry environmental bills that modern chemistry is trying to pay down.",
  objectives: [
    "Describe the Haber process: conditions, catalyst, recycling",
    "Explain each condition choice via equilibrium and kinetics",
    "Describe the Contact process stages and V₂O₅ catalysis",
    "Compare compromise conditions across industrial equilibria",
    "Assess environmental impacts and green alternatives"
  ],
  simple: "Air + natural gas → ammonia: N₂ + 3H₂ ⇌ 2NH₃, exothermic, 4 gas moles → 2. The equilibrium says: high pressure, low temperature. The kinetics say: cold is too slow. The compromise: 450 °C, 200 atm, iron catalyst with promoters, and the genius move — cool the outlet so ammonia liquefies and drains away, pulling the equilibrium forward, while unreacted N₂/H₂ recycle. Result: ~97% conversion per loop, feeding half the planet's protein. Sulfuric acid (the Contact process) follows the same logic: burn S → SO₂, catalyze SO₂ + ½O₂ ⇌ SO₃ (V₂O₅, 450 °C, ~1.5 atm — yield already 99.5%, compression not worth it), then dissolve SO₃ in acid rather than water (mist prevention). Both processes are chemistry's proof that the best conditions are negotiated, not optimal.",
  detailed: "<p><b>Haber (1909, industrialized by Bosch).</b> Feedstocks: N₂ from air (liquefaction), H₂ from natural-gas steam reforming (CH₄ + H₂O → CO + 3H₂ — the CO₂/carbon footprint: ~1.8% of global emissions). Reactor: 400–450 °C, 150–250 atm, magnetite Fe catalyst promoted with K₂O/Al₂O₃/CaO. Equilibrium analysis: ΔH = −92 kJ → cold favors yield (at 25 °C K is enormous but rate is nil); Δn = −2 → pressure favors NH₃ (200 atm ≈ 35% single-pass at 450 °C). Separation: outlet cooled → NH₃ liquefies (bp −33 °C vs N₂ −196) → product removed → recycle loop pushes overall conversion to ~97%. The process that makes fertilizer — and, via explosives history, shaped the 20th century.</p><p><b>Contact process.</b> (1) S + O₂ → SO₂ (or roast pyrite FeS₂). (2) SO₂ + ½O₂ ⇌ SO₃, ΔH = −98 kJ: V₂O₅ catalyst, 450 °C, 1–2 atm — near-complete conversion already; higher pressure adds little (Δn = −½) and costs money; lower T kills the rate even with catalyst. Multi-bed converters with interstage cooling ride the equilibrium curve. (3) SO₃ + H₂SO₄ → H₂S₂O₇ (oleum), then + H₂O → 2H₂SO₄ — direct water addition makes corrosive mist. Uses: fertilizers (superphosphate), batteries, detergents, dyes — the most-produced industrial chemical on Earth.</p><p><b>Design logic (transferable).</b> For any synthesis: (1) read ΔH and Δn; (2) set pressure where mole economics pay; (3) pick the lowest T the catalyst tolerates; (4) remove product continuously; (5) recycle the rest; (6) price the energy. Catalysts don't shift equilibrium but they enable lower-T operation — which DOES shift K favorably: catalysis and Le Chatelier interlock.</p><p><b>Impacts & green frontiers.</b> Haber: CO₂ from reforming; N₂O emissions; fertilizer runoff → eutrophication (dead zones). Contact: SO₂ leaks → acid rain (scrubbed now); mining sulfur. Green ammonia: renewable-H₂ electrolysis + milder catalysts (Ru), electrochemical N₂ reduction research; nitrogen-fixing microbes (Rhizobium) as biological Haber. The equilibrium didn't change — the energy source and the catalyst are the revolution.</p>",
  keyTerms: [
    { term: "Haber process", def: "N₂ + 3H₂ ⇌ 2NH₃ at 450 °C/200 atm/Fe — fertilizer ammonia" },
    { term: "Steam reforming", def: "CH₄ + H₂O → CO + 3H₂ — the H₂ source and carbon cost" },
    { term: "Recycle loop", def: "Unreacted gas returned — conversion climbs to ~97%" },
    { term: "Contact process", def: "SO₂ → SO₃ (V₂O₅) → H₂SO₄ via oleum" },
    { term: "Oleum", def: "SO₃ dissolved in H₂SO₄ — mist-free acid manufacture" },
    { term: "Promoter", def: "K₂O/Al₂O₃ boosting Fe catalyst life and activity" }
  ],
  formulas: [
    {
      name: "Haber equilibrium",
      formula: "N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ, Δn = −2",
      meaning: "Exothermic + fewer moles: cold & high P favor yield",
      vars: [{ name: "450 °C", meaning: "compromise T (rate vs K)", unit: "—" }],
      units: "—",
      when: "Industrial reasoning questions",
      example: "200 atm + 450 °C ≈ 35% single-pass → 97% with recycle"
    },
    {
      name: "Contact key step",
      formula: "SO₂ + ½O₂ ⇌ SO₃, ΔH = −98 kJ, V₂O₅",
      meaning: "99.5% at 450 °C, 1.5 atm — pressure unnecessary",
      vars: [{ name: "Δn", meaning: "−½ — small mole change", unit: "—" }],
      units: "—",
      when: "Comparing process choices",
      example: "Why 1.5 atm here but 200 atm in Haber: Δn size decides"
    }
  ],
  workedExamples: [
    {
      problem: "Explain why Haber uses 450 °C when lower T gives higher equilibrium yield.",
      given: "exothermic",
      formula: "kinetics vs thermodynamics",
      substitution: "at 25 °C K huge but rate zero; 450 °C: rate workable, K still useful",
      calculation: "recycle + product removal recover the yield loss",
      answer: "450 °C is the compromise where the Fe catalyst runs fast enough while K remains acceptable"
    },
    {
      problem: "Why doesn't the Contact process use high pressure despite Δn < 0?",
      given: "1.5 atm operation",
      formula: "cost-benefit on K",
      substitution: "already 99.5% conversion at 1.5 atm",
      calculation: "compression cost buys 0.5% — negative ROI",
      answer: "Equilibrium is nearly complete without it; Δn = −½ is too small to pay for"
    },
    {
      problem: "Trace the atoms: how does natural gas become bread protein?",
      given: "chain",
      formula: "CH₄ → H₂ → NH₃ → fertilizer → crops",
      substitution: "reforming gives H₂; Haber makes NH₃; urea/ammonium nitrate feed wheat",
      calculation: "~50% of human nitrogen atoms came through a Haber reactor",
      answer: "Steam reforming → synthesis gas → ammonia → fertilizer → grain protein — the food–fossil–air pipeline"
    },
    {
      problem: "SO₃ is absorbed in H₂SO₄, not water. Why?",
      given: "highly exothermic hydration",
      formula: "mist formation",
      substitution: "direct water: violent heat → fine H₂SO₄ aerosol, uncollectable",
      calculation: "oleum route: controlled, then diluted safely",
      answer: "Water absorption makes corrosive fog; oleum absorbs cleanly and dilutes on demand"
    },
    {
      problem: "Name three ways modern chemistry is greening ammonia production.",
      given: "impacts",
      formula: "energy + catalyst + biology",
      substitution: "renewable-electrolysis H₂ (green ammonia); Ru/milder catalysts cutting T/P; N₂-fixing microbes reducing fertilizer need",
      calculation: "removes reforming CO₂ — the dominant footprint",
      answer: "Green H₂, better catalysts, biological fixation — same equilibrium, cleaner inputs"
    }
  ],
  commonMistakes: [
    "Saying the Fe catalyst raises NH₃ yield — it enables the compromise T; yield comes from P, T and removal",
    "Claiming Haber runs at low T for yield — it runs at 450 °C for RATE",
    "Forgetting recycle: quoting 35% single-pass as the process efficiency",
    "Contact pressure logic copied from Haber — Δn = −½ doesn't justify compression",
    "SO₃ + water called 'the absorption step' — it's oleum, then dilution",
    "H₂ source ignored: 'air and water make ammonia' — it's mostly natural gas (the carbon cost)",
    "Equilibrium yield vs conversion conflated — per-pass vs overall differ hugely with recycle"
  ],
  applications: [
    "Fertilizers: ~half the nitrogen in human bodies is Haber-synthesized — population depends on it",
    "Explosives history: NH₃ → nitric acid → nitrates — chemistry's dual-use lesson",
    "Sulfuric acid: batteries, superphosphate, refining — the industrial acid",
    "Energy carriers: ammonia as hydrogen storage for fuel cells and shipping fuel",
    "Ethiopian context: fertilizer demand and imports ride on these equilibria — understanding them is economic literacy"
  ],
  summary: "Haber (450 °C, 200 atm, Fe, recycle, NH₃ condensation) and Contact (450 °C, 1.5 atm, V₂O₅, oleum absorption) are Le Chatelier priced in engineering: pressure where Δn pays, the coolest T the catalyst allows, product removal as a permanent pull, recycle for near-total conversion. Their footprints — reforming CO₂, acid rain — drive the green frontier: renewable H₂, milder catalysts, biological fixation.",
  visuals: [
    { type: "flowChart", config: { title: "Haber loop", nodes: [{ label: "CH₄ + H₂O", detail: "reforming → H₂" }, { label: "Air", detail: "N₂" }, { label: "Converter", detail: "450 °C, 200 atm, Fe" }, { label: "Cooler", detail: "NH₃ liquefies" }, { label: "Recycle", detail: "N₂/H₂ back in" }] } },
    { type: "comparison", config: { title: "Two processes, one logic", left: { name: "Haber", items: ["Δn = −2 → 200 atm", "450 °C + Fe", "condense NH₃", "recycle → 97%"] }, right: { name: "Contact", items: ["Δn = −½ → 1.5 atm", "450 °C + V₂O₅", "99.5% already", "oleum, not water"] } } },
    { type: "qa", config: { title: "Why these numbers?", pairs: [{ q: "Haber 450 °C?", a: "<b>rate vs yield split</b>" }, { q: "Contact no pressure?", a: "<b>99.5% without it</b>" }, { q: "Why recycle?", a: "<b>single pass only ~35%</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "Haber conditions:", options: ["25 °C, 1 atm", "450 °C, 200 atm, Fe", "900 °C, Pt", "0 °C, high P"], answer: 1, difficulty: 1, explanation: "The classic compromise" },
    { type: "mcq", q: "Haber's H₂ mainly comes from:", options: ["water electrolysis", "natural gas reforming", "coal only", "air"], answer: 1, difficulty: 2, explanation: "Steam reforming of CH₄ — and its CO₂ footprint" },
    { type: "mcq", q: "Contact process catalyst:", options: ["Fe", "Ni", "V₂O₅", "Pt"], answer: 2, difficulty: 2, explanation: "Vanadium(V) oxide" },
    { type: "mcq", q: "SO₃ is absorbed in:", options: ["water", "concentrated H₂SO₄", "NaOH", "air"], answer: 1, difficulty: 2, explanation: "Oleum route — avoids mist" },
    { type: "tf", q: "Recycling unreacted gases raises overall conversion above single-pass yield.", answer: true, difficulty: 1, explanation: "35% per pass → ~97% overall" },
    { type: "tf", q: "Higher pressure always improves industrial equilibrium yield.", answer: false, difficulty: 2, explanation: "Only when Δn < 0 — and only when it pays (Contact skips it)" },
    { type: "calc", q: "Single-pass conversion 35%, recycle loop returns the rest. Overall conversion ≈?", answer: "97", difficulty: 2, explanation: "Repeated passes approach ~97% with product removal" },
    { type: "calc", q: "Δn for N₂ + 3H₂ ⇌ 2NH₃?", answer: "-2", difficulty: 2, explanation: "2 − 4 = −2 — why compression helps" },
    { type: "short", q: "Iron's role in Haber:", answer: "catalyst", difficulty: 1, explanation: "Promoted magnetite Fe catalyst — speed at 450 °C" },
    { type: "concept", q: "Explain why condensing NH₃ out of the recycle loop is more effective than any pressure increase.", answer: "product removal|permanent pull|Q stays below K|continuous forward", difficulty: 3, explanation: "Removing product keeps Q below K indefinitely — the reaction keeps running forward to replace it; pressure only tilts the ratio once, but removal is a sustained driving force no compression can match" }
  ]
};
