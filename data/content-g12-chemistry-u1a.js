/* Content: Grade 12 Chemistry — Unit 1 (part A): topics 1-2 */
window.Lessons = window.Lessons || {};

Lessons["g12-chemistry-uc1-t1"] = {
  overview: "Acids and bases are chemistry's oldest storyline — sour, bitter, slippery, neutralising — but Grade 12 upgrades it to three progressively deeper definitions: Arrhenius's ions in water, Brønsted-Lowry's proton transfer, and Lewis's electron-pair accounting. Each definition explains what the previous one can't, and together they cover everything from stomach HCl to catalytic aluminium chloride.",
  objectives: [
    "State and apply the Arrhenius, Brønsted-Lowry and Lewis definitions",
    "Identify conjugate acid-base pairs in reactions",
    "Classify substances as monoprotic, diprotic or polyprotic",
    "Explain why the Lewis definition is the broadest",
    "Relate structure to acidity (O-H polarity, X effect)"
  ],
  simple: "<b>Protons are the currency.</b> Arrhenius: acids give H⁺ in water, bases give OH⁻. Brønsted-Lowry widens it: an acid is a proton DONOR, a base a proton ACCEPTOR — so NH₃ is basic without any OH in its formula, and water can play either role. Lewis widens again: acid = electron-pair ACCEPTOR, base = donor — BF₃ and AlCl₃ count with no hydrogen anywhere. Every neutralisation is a transfer: of a proton, or of an electron pair.",
  detailed: "<p><b>Arrhenius (1887).</b> Acid: substance giving H⁺(aq) in water (HCl → H⁺ + Cl⁻); base: giving OH⁻(aq) (NaOH → Na⁺ + OH⁻). Strength = degree of ionisation: HCl fully ionises (strong), ethanoic acid barely (weak). Limits: needs water, can't call NH₃ or Na₂CO₃ basic, and free H⁺ never exists in water — it is really H₃O⁺ (hydronium). Still fine for the intro arithmetic: pH = −log[H₃O⁺].</p><p><b>Brønsted-Lowry (1923).</b> Acid = proton donor; base = proton acceptor. Now NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ is base behaviour (NH₃ accepts the proton from water), and water is AMPHOTERIC — donor to NH₃, acceptor to HCl. Each acid has a CONJUGATE BASE (what remains after donating): HCl/Cl⁻, CH₃COOH/CH₃COO⁻, H₃O⁺/H₂O, NH₄⁺/NH₃. Reactions always run from the stronger acid-base pair toward the weaker one — a proton competition won by the stronger base.</p><p><b>Strength vs concentration.</b> Strong acid = fully ionised (molarity of H⁺ equals molarity of acid); weak = partly. A 0.001 M HCl solution is dilute but 100% ionised; glacial ethanoic acid is concentrated but barely ionises. The two words are orthogonal — exams love mixing them.</p><p><b>Lewis (1923).</b> Acid = electron-pair acceptor; base = donor. The H⁺ + :NH₃ → NH₄⁺ bond is a dative (co-ordinate) pair from nitrogen. Lewis captures what Brønsted can't: BF₃ + :OEt₂, AlCl₃ catalysis (Friedel-Crafts), metal-ion complexation (Cu²⁺ + 4NH₃), even CaO + CO₂. Every Brønsted acid-base event is also a Lewis one (base donates the pair that bonds to H⁺), but not vice versa — Lewis is the superset.</p><p><b>Structure → acidity.</b> For H-X across a period (CH₄ < NH₃ < H₂O < HF), rising electronegativity polarises H-X: acidity grows. Down a group (HF < HCl < HBr < HI), weakening bond beats polarity: HI is the stronger hydroacid. Oxyacids: more oxygens = more delocalised, stabilised conjugate base (HClO₄ ≫ HClO), and within a row, more electronegative central atoms sharpen acidity (HClO > HBrO).</p>",
  keyTerms: [
    { term: "Arrhenius acid/base", def: "gives H⁺ / OH⁻ in water" },
    { term: "Brønsted-Lowry", def: "proton donor / proton acceptor" },
    { term: "Lewis acid/base", def: "electron-pair acceptor / donor" },
    { term: "Conjugate pair", def: "two species differing by one H⁺" },
    { term: "Amphoteric", def: "can donate or accept a proton (water, HCO₃⁻, amino acids)" },
    { term: "Hydronium", def: "H₃O⁺ — the real aqueous H⁺" },
    { term: "Protic/aprotic", def: "has / lacks a donatable proton" }
  ],
  formulas: [
    { name: "Ionisation (strong)", formula: "HCl → H⁺ + Cl⁻", meaning: "complete, one-way arrow", vars: [{ name: "→", meaning: "not equilibrium" }], when: "strong-acid pH bookkeeping" },
    { name: "Ionisation (weak)", formula: "HA + H₂O ⇌ H₃O⁺ + A⁻", meaning: "partial; mostly undissociated", vars: [{ name: "⇌", meaning: "competition" }], when: "ethanoic, carbonic, HF" },
    { name: "Lewis adduct", formula: ":B → A", meaning: "base's lone pair bonds into the acid", vars: [{ name: "A", meaning: "empty orbital on the acid" }], when: "BF₃, AlCl₃, metal complexes" }
  ],
  workedExamples: [
    { problem: "Identify the conjugate base of: H₂SO₄, HCO₃⁻, NH₄⁺, H₃O⁺.", calculation: "Remove one H⁺ from each.", answer: "HSO₄⁻, CO₃²⁻, NH₃, H₂O. Note HCO₃⁻ acting as acid here — as a base its conjugate acid is H₂CO₃: amphiprotic." },
    { problem: "In NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, label the pairs.", calculation: "H₂O donates → NH₃ accepts.", answer: "Acid H₂O / conjugate base OH⁻; base NH₃ / conjugate acid NH₄⁺." },
    { problem: "Why is BF₃ a Lewis acid with no H at all?", calculation: "Boron has 6 electrons in BF₃ — an empty p-orbital accepts a lone pair.", answer: "BF₃ + :NH₃ → F₃B←NH₃; the adduct gives B its octet." },
    { problem: "0.02 M HCl vs 0.02 M CH₃COOH — [H₃O⁺]?", calculation: "HCl strong: 0.02 M exactly. Ethanoic weak (K_a 1.8×10⁻⁵): √(K_a·c) ≈ √(1.8×10⁻⁵ × 0.02) ≈ 6×10⁻⁴ M.", answer: "0.02 M vs ~0.0006 M: same molarity, 30× less acid. Concentration ≠ strength." }
  ],
  commonMistakes: [
    "Calling NH₃ non-basic because it has no OH",
    "Confusing strength (ionisation %) with concentration (mol/L)",
    "Naming conjugate pairs wrong: they differ by exactly ONE proton, and charges must balance",
    "Writing free H⁺(aq) instead of H₃O⁺ in mechanism answers",
    "Thinking Lewis acids must be positively charged (BF₃ is neutral)"
  ],
  applications: [
    "Stomach HCl vs milk of magnesia: Brønsted neutralisation in a bottle",
    "AlCl₃ catalysis in dyes and pharmaceuticals: Lewis acid work",
    "Amino acids as zwitterions: both definitions in one molecule",
    "Water-treatment pH control around Addis industries"
  ],
  summary: "Three definitions, one story: ions → protons → electron pairs. Brønsted names the conjugate pairs; Lewis covers the rest. Strength is about ionising, not dissolving much.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Under Brønsted-Lowry, a base is a:", options: ["proton donor", "proton acceptor", "electron-pair donor", "source of OH⁻ only"], answer: 1, difficulty: 1, explanation: "Donor = acid, acceptor = base." },
    { type: "mcq", q: "The conjugate base of HPO₄²⁻ is:", options: ["H₂PO₄⁻", "PO₄³⁻", "H₃PO₄", "P₂O₇⁴⁻"], answer: 1, difficulty: 1, explanation: "Lose one H⁺: charge drops by one." },
    { type: "mcq", q: "Which species is amphiprotic?", options: ["Cl⁻", "HCO₃⁻", "NH₄⁺", "Na⁺"], answer: 1, difficulty: 2, explanation: "Bicarbonate can donate (to CO₃²⁻) or accept (to H₂CO₃)." },
    { type: "mcq", q: "BF₃ is a Lewis acid because boron:", options: ["carries +3 charge", "can accept an electron pair (incomplete octet)", "donates protons", "is a metal"], answer: 1, difficulty: 2, explanation: "Six electrons around B: the empty orbital is the acceptor site." },
    { type: "mcq", q: "In HCl + H₂O → H₃O⁺ + Cl⁻, water acts as:", options: ["an acid", "a base", "a catalyst", "neither"], answer: 1, difficulty: 2, explanation: "It accepts the proton from HCl." },
    { type: "mcq", q: "Which is the strongest acid structurally (same row logic)?", options: ["CH₄", "NH₃", "H₂O", "HF"], answer: 3, difficulty: 3, explanation: "Across a period, electronegativity raises H-X polarity: HF most acidic." },
    { type: "mcq", q: "HI is stronger than HF because:", options: ["I is more electronegative", "H-I bond is weaker down the group", "I⁻ holds protons tighter", "HF is concentrated"], answer: 1, difficulty: 3, explanation: "Down a group, bond strength dominates: longer, weaker H-I ionises far easier." },
    { type: "mcq", q: "Every Brønsted acid-base reaction is ALSO a Lewis one because:", options: ["protons are electrons", "the base donates an electron pair to bind H⁺", "both need water", "Lewis is narrower"], answer: 1, difficulty: 3, explanation: "The N→H bond in NH₄⁺ forms from the lone pair — the definitions nest, Lewis outermost." }
  ]
};

Lessons["g12-chemistry-uc1-t2"] = {
  overview: "Weak acids and bases only partially ionise, and that partial equilibrium has a number: K_a (or K_b). This topic turns qualitative 'weakness' into quantitative chemistry — [H₃O⁺] from K_a, pH from concentration, percent ionisation, water's own Kw, and the K_a × K_b = K_w relationship that ties any conjugate pair together.",
  objectives: [
    "Write K_a / K_b expressions and read acid strength from them",
    "Calculate [H₃O⁺] and pH of weak acid solutions",
    "Apply Kw = 1.0×10⁻¹⁴ and the pH + pOH = 14 relation",
    "Convert between K_a and K_b of conjugate pairs",
    "Compute percent ionisation and its dilution effect"
  ],
  simple: "<b>Weak means an equilibrium, not an accident.</b> In 0.1 M ethanoic acid, 99+ molecules sit undissociated and only ~1% release H₃O⁺. K_a (1.8×10⁻⁵) measures exactly how stingy: smaller K_a = weaker acid. The standard recipe: K_a ≈ x²/(c−x) with x = [H₃O⁺], so x ≈ √(K_a·c) when x ≪ c. Water itself ionises a little (Kw), and pH + pOH always equals 14 at 25 °C.",
  detailed: "<p><b>The ionisation constant.</b> HA + H₂O ⇌ H₃O⁺ + A⁻, K_a = [H₃O⁺][A⁻]/[HA]. Big K_a (or small pK_a) = strong-ish weak acid; HCl's K_a is 'essentially infinite' — that's what strong means. Typical 25 °C values: HF 6.8×10⁻⁴, ethanoic 1.8×10⁻⁵, carbonic 4.3×10⁻⁷, boric ~5×10⁻¹⁰. Oxyacid families: H₃PO₄ 7.5×10⁻³, H₂CO₃ 4.3×10⁻⁷: each successive proton is harder to remove (negative charge resents losing another H⁺), so K_a1 ≫ K_a2 ≫ K_a3.</p><p><b>The x² approximation.</b> Initial c, change x: K_a = x²/(c−x). If x < 5% of c, use c−x ≈ c ⇒ x = √(K_a c). Worked: 0.10 M ethanoic: x = √(1.8×10⁻⁵ × 0.1) = 1.34×10⁻³ M, pH = 2.87, ionisation 1.3%. Check the 5% rule every time; when it fails (very dilute or K_a near c), solve the quadratic.</p><p><b>Auto-ionisation of water.</b> 2H₂O ⇌ H₃O⁺ + OH⁻, K_w = [H₃O⁺][OH⁻] = 1.0×10⁻¹⁴ (25 °C). Pure water: 10⁻⁷ each, pH 7. Adding acid pushes H₃O⁺ up and OH⁻ DOWN (Kw is a tax both must pay), and vice versa. Kw rises with temperature — at body temperature (37 °C) neutral pH is 6.8, not 7: neutral means equal, not 7.</p><p><b>pH/pOH bookkeeping.</b> pH = −log[H₃O⁺]; pOH = −log[OH⁻]; pH + pOH = 14 (at 25 °C). For weak BASES: find [OH⁻] = √(K_b·c) then pOH then pH = 14 − pOH. Ammonia 0.05 M: √(1.8×10⁻⁵ × 0.05) = 9.5×10⁻⁴ OH⁻ → pOH 3.0 → pH 11.0.</p><p><b>Conjugate pairs linked.</b> K_a × K_b = K_w for any HA/A⁻ pair: the weaker the acid, the stronger its conjugate base. Ethanoic (K_a 1.8×10⁻⁵) vs ethanoate (K_b 5.6×10⁻¹⁰): a mild acid spawns a feeble base; HCN (K_a 6×10⁻¹⁰) spawns a notably basic CN⁻ (K_b 1.7×10⁻⁵). Strong acids have conjugate bases too weak to bother water at all (Cl⁻: spectator).</p><p><b>Dilution and ionisation.</b> Percent ionisation grows as you dilute (Le Chatelier: more water, more room to split) — but [H₃O⁺] still falls overall. 0.1 M ethanoic ionises 1.3%, 0.001 M ionises 13% while having pH 3.9 (more acidic in molar terms despite ionising harder).</p>",
  keyTerms: [
    { term: "K_a", def: "acid ionisation constant (bigger = stronger)" },
    { term: "pK_a", def: "−log K_a; smaller = stronger" },
    { term: "K_w", def: "water product, 1.0×10⁻¹⁴ at 25 °C" },
    { term: "Auto-ionisation", def: "2H₂O ⇌ H₃O⁺ + OH⁻" },
    { term: "Percent ionisation", def: "x/c × 100; grows on dilution" },
    { term: "K_a·K_b = K_w", def: "conjugate-pair seesaw" },
    { term: "Polyprotic steps", def: "K_a1 ≫ K_a2 ≫ K_a3" }
  ],
  formulas: [
    { name: "Weak-acid shortcut", formula: "[H₃O⁺] = √(K_a × c)", meaning: "x when ionisation <5%", vars: [{ name: "c", meaning: "initial acid molarity" }], when: "most weak-acid pH problems" },
    { name: "Water product", formula: "Kw = [H₃O⁺][OH⁻] = 10⁻¹⁴", meaning: "the two ions' fixed product", vars: [{ name: "25 °C", meaning: "Kw changes with T" }], when: "every aqueous solution" },
    { name: "pH relations", formula: "pH = −log[H₃O⁺]; pH+pOH = 14", meaning: "logarithmic acid scale", vars: [{ name: "—", meaning: "1 pH unit = 10×" }], when: "all calculations" },
    { name: "Conjugate link", formula: "K_b = Kw/K_a", meaning: "weak-acid anions are bases", vars: [{ name: "A⁻", meaning: "the conjugate base" }], when: "salt hydrolysis, buffers" }
  ],
  workedExamples: [
    { problem: "0.20 M methanoic acid (K_a = 1.8×10⁻⁴): pH?", calculation: "x = √(1.8×10⁻⁴ × 0.2) = √3.6×10⁻⁵ = 6.0×10⁻³; ionisation 3% — inside the 5% rule.", answer: "pH = 2.22." },
    { problem: "0.10 M ethanoic acid percent ionisation?", calculation: "x = 1.34×10⁻³; % = 1.34×10⁻³/0.1.", answer: "1.3% — over 98% stays as HA molecules." },
    { problem: "Find [OH⁻] in 0.05 M ammonia (K_b = 1.8×10⁻⁵).", calculation: "[OH⁻] = √(1.8×10⁻⁵×0.05) = 9.5×10⁻⁴; pOH = 3.02.", answer: "pH = 10.98 — a dilute weak base is still clearly basic." },
    { problem: "K_b of cyanide ion (HCN K_a = 6.0×10⁻¹⁰)?", calculation: "K_b = 10⁻¹⁴/6×10⁻¹⁰.", answer: "1.7×10⁻⁵ — CN⁻ is a moderately strong weak base: NaCN solutions are corrosively alkaline." }
  ],
  commonMistakes: [
    "Using the √ shortcut without checking the 5% rule (fails for dilute or stronger 'weak' acids)",
    "Forgetting to convert pOH → pH for base problems",
    "Treating [H₃O⁺] = [acid] for weak acids (that's the STRONG assumption)",
    "Adding K_a values instead of using equilibrium ICE setup",
    "Assuming neutral pH is always 7 (temperature! 6.8 at 37 °C)"
  ],
  applications: [
    "Blood pH depends on carbonate equilibria (next topic's buffers)",
    "Sour injera: ethanoic/lactic K_a values set the tang at a given strength",
    "Pool and wastewater treatment: hypochlorous acid's K_a fixes its germ-killing fraction",
    "Caffeine and drug dosing: ionisation governs absorption across membranes"
  ],
  summary: "Weakness is a number: K_a = x²/(c−x) with x = √(K_a·c); Kw links both ions; K_a·K_b = Kw links each pair.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A larger K_a means:", options: ["weaker acid", "stronger acid", "higher pH", "more viscous"], answer: 1, difficulty: 1, explanation: "K_a measures ionisation: bigger = more H₃O⁺ = stronger." },
    { type: "mcq", q: "[H₃O⁺] in pure water at 25 °C is:", options: ["0", "10⁻⁷ M", "10⁻¹⁴ M", "1 M"], answer: 1, difficulty: 1, explanation: "√Kw = 10⁻⁷." },
    { type: "mcq", q: "pH of 0.01 M HCl is:", options: ["1", "2", "12", "13"], answer: 1, difficulty: 1, explanation: "Strong acid: [H₃O⁺] = 10⁻² ⇒ pH 2." },
    { type: "mcq", q: "As a weak acid is diluted, percent ionisation:", options: ["falls", "rises", "stays", "hits zero"], answer: 1, difficulty: 2, explanation: "Le Chatelier: water pulls dissociation forward — though pH still rises overall." },
    { type: "mcq", q: "For a conjugate pair, K_a × K_b equals:", options: ["1", "Kw", "Ka of water", "10¹⁴"], answer: 1, difficulty: 2, explanation: "The seesaw: K_a·K_b = 10⁻¹⁴." },
    { type: "mcq", q: "0.1 M HA has [H₃O⁺] = 1×10⁻⁵. Its K_a ≈", options: ["10⁻⁹", "10⁻⁵", "10⁻³", "10⁻¹"], answer: 0, difficulty: 3, explanation: "K_a = x²/(c−x) = 10⁻¹⁰/0.1 = 10⁻⁹." },
    { type: "mcq", q: "Why K_a1 ≫ K_a2 for H₃PO₄?", options: ["temperature", "removing H⁺ from an already-negative ion is harder", "phosphorus shrinks", "water blocks it"], answer: 1, difficulty: 3, explanation: "Electrostatics: HPO₄²⁻ resists losing a proton more than neutral H₃PO₄." },
    { type: "mcq", q: "A 0.1 M weak base (K_b 10⁻⁵) solution has pH closest to:", options: ["3", "7", "11", "13"], answer: 2, difficulty: 3, explanation: "[OH⁻] = √(10⁻⁵×0.1) = 10⁻³ ⇒ pOH 3 ⇒ pH 11." }
  ]
};
