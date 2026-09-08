/* Content: Grade 9 Mathematics — Unit 5: Introduction to Trigonometry (2 topics) */
window.Lessons = window.Lessons || {};

Lessons["g9-mathematics-um5-t1"] = {
  overview: "Trigonometry is the mathematics of similar triangles: angles fix side-ratios. Learn three ratios — sine, cosine, tangent — and every right-angled triangle becomes solvable.",
  objectives: [
    "Label opposite, adjacent and hypotenuse relative to an angle",
    "Define and compute sin, cos, tan of acute angles",
    "Use a calculator (or tables) for trig ratios of given angles",
    "Find missing sides of right triangles",
    "Find missing angles using inverse trig"
  ],
  simple: "In a right triangle, pick an acute angle θ. The three sides have names relative to θ: the <b>hypotenuse</b> (longest, opposite the right angle), the <b>opposite</b> (facing θ), and the <b>adjacent</b> (next to θ). Now: <b>SOH-CAH-TOA</b> — sin θ = Opposite/Hypotenuse, cos θ = Adjacent/Hypotenuse, tan θ = Opposite/Adjacent. Because all 30° right triangles are similar, sin 30° is ONE number (0.5) no matter the triangle's size. Two sides → Pythagoras; one side + one angle → the ratio that connects them.",
  detailed: "<p>For right triangle with acute angle θ: <b>sin θ = o/h, cos θ = a/h, tan θ = o/a</b>. These are ratios, not multiplication — 'sin 30°' is a single number ≈ 0.5. Similarity guarantees well-definedness: any two triangles with the same acute angle have proportional sides, so the ratio is angle-dependent only.</p><p>Calculator work: set DEGREE mode. sin 37° ≈ 0.6018 — keys: SIN, 3 7, ENTER (or 37 then SIN depending on calculator). Memorize the special triangles: 45-45-90 has sides 1 : 1 : √2 so sin 45° = 1/√2 = √2/2 ≈ 0.707; 30-60-90 has sides 1 : √3 : 2 so sin 30° = 1/2, tan 60° = √3 ≈ 1.732.</p><p>Finding sides: choose the ratio linking the KNOWN side/angle to the UNKNOWN side. Example: angle 30°, hypotenuse 10, find opposite → sin 30° = o/10 → o = 10 × 0.5 = 5. Rounding: keep full calculator precision until the final line.</p><p>Finding angles: invert the ratio. Opposite 3, adjacent 4 → tan θ = 3/4 → θ = tan⁻¹(0.75) ≈ 36.87°. tan⁻¹ (arctan) asks 'which angle has this tangent?' Keys: SHIFT + TAN on most calculators. Pythagoras covers the two-sides-give-third case; trig covers side + angle.</p><p>Geometry crossovers: in a circle of radius r, a chord subtending angle θ at the centre measures 2r·sin(θ/2); the height of an equilateral triangle of side s is (√3/2)s — that's sin 60° in disguise. The identity sin²θ + cos²θ = 1 falls straight out of Pythagoras (divide a² + b² = c² by c²), and tan θ = sin θ / cos θ follows by dividing o/h by a/h.</p><p>Angle of elevation (look up at a plane) and depression (look down from a cliff) are measured from the horizontal — drawing the horizontal dashed line at the observer's eye converts every story problem into a right triangle. Common check: the hypotenuse must be the LONGEST side, so |sin|, |cos| ≤ 1 — if your answer has a hypotenuse shorter than a leg, re-label.</p>",
  keyTerms: [
    { term: "Hypotenuse", def: "Side opposite the right angle — always longest" },
    { term: "Opposite/Adjacent", def: "Legs named relative to the chosen angle θ" },
    { term: "Sine (sin θ)", def: "opposite ÷ hypotenuse" },
    { term: "Cosine (cos θ)", def: "adjacent ÷ hypotenuse" },
    { term: "Tangent (tan θ)", def: "opposite ÷ adjacent = sin/cos" },
    { term: "Inverse trig (sin⁻¹)", def: "Returns the angle with a given ratio" },
    { term: "Angle of elevation", def: "Upward tilt from the horizontal" }
  ],
  formulas: [
    {
      name: "SOH-CAH-TOA",
      formula: "sin θ = o/h · cos θ = a/h · tan θ = o/a",
      meaning: "The three side-ratio definitions for acute angles in right triangles",
      vars: [{ name: "o", meaning: "side opposite θ" }, { name: "a", meaning: "side adjacent to θ" }, { name: "h", meaning: "hypotenuse" }],
      when: "Any right-triangle side or angle computation"
    },
    {
      name: "Trig identity (preview)",
      formula: "sin²θ + cos²θ = 1 · tan θ = sin θ / cos θ",
      meaning: "Pythagoras restated as ratios",
      when: "Simplifying and checking ratio computations"
    }
  ],
  workedExamples: [
    {
      problem: "A ladder 6 m leans at 65° to the horizontal. How far up the wall does it reach?",
      formula: "sin 65° = h/6",
      substitution: "h = 6 sin 65°",
      calculation: "h ≈ 6 × 0.9063",
      answer: "≈ 5.44 m"
    },
    {
      problem: "From 20 m from a tower's base, the angle of elevation to its top is 58°. Tower height?",
      formula: "tan 58° = H/20",
      calculation: "H = 20 × 1.6003",
      answer: "≈ 32 m"
    },
    {
      problem: "Right triangle: legs 5 and 12. Find the angle opposite the 5-side.",
      formula: "tan θ = 5/12",
      calculation: "θ = tan⁻¹(0.4167)",
      answer: "θ ≈ 22.6° (hypotenuse 13, check sin: 5/13 ✓)"
    },
    {
      problem: "Evaluate without calculator: sin 30° + cos 60°.",
      calculation: "0.5 + 0.5",
      answer: "1"
    }
  ],
  commonMistakes: [
    "Calculator in RADIAN mode: sin 30° returns 0.5 in degrees but −0.988 in radians — always check DEG first",
    "Mixing o/h and a/h: label the triangle's sides RELATIVE TO the named angle before choosing a ratio",
    "Using Pythagoras when an angle is involved — trig connects angles to sides, Pythagoras only sides",
    "tan⁻¹ vs 1/tan: the ⁻¹ on trig functions means inverse function, NOT reciprocal",
    "Assuming opposite/adjacent are fixed sides — they depend on which angle you're working with",
    "Elevation/depression drawn from the vertical instead of the horizontal"
  ],
  applications: [
    "Surveying: measuring river widths and mountain heights without crossing them",
    "Construction: roof pitches, ramp gradients and stair safety angles",
    "Aviation/navigation: climb rates and wind-triangle corrections",
    "Astronomy: parallax and the ancient Eratosthenes Earth-circumference trick"
  ],
  summary: "Right-triangle trig: sin = O/H, cos = A/H, tan = O/A (SOH-CAH-TOA), named relative to angle θ. One side + one angle → pick the connecting ratio; two sides → Pythagoras or inverse trig for the angle. Special values from 45-45-90 and 30-60-90 triangles; elevation/depression measured from the horizontal.",
  visuals: [],
  questions: [
    { type: "mcq", q: "In a right triangle, sin θ is:", options: ["adj/hyp", "opp/hyp", "opp/adj", "hyp/opp"], answer: 1, difficulty: 1, explanation: "SOH: sine = opposite over hypotenuse." },
    { type: "mcq", q: "cos 60° =", options: ["0.5", "0.866", "1", "0.707"], answer: 0, difficulty: 1, explanation: "From the 30-60-90 triangle: cos 60° = 1/2." },
    { type: "mcq", q: "A ramp rises 1 m over 4 m horizontal. Angle of slope (nearest degree):", options: ["14°", "25°", "45°", "76°"], answer: 0, difficulty: 2, explanation: "tan θ = 1/4 → θ = tan⁻¹(0.25) ≈ 14°." },
    { type: "mcq", q: "If tan θ = 3/4 and the triangle legs are 3 and 4, the hypotenuse is:", options: ["5", "7", "√7", "12"], answer: 0, difficulty: 1, explanation: "Pythagoras: √(9+16) = 5." },
    { type: "mcq", q: "sin 45° equals:", options: ["1/2", "√2/2", "√3/2", "1"], answer: 1, difficulty: 2, explanation: "45-45-90: leg/hyp = 1/√2 = √2/2 ≈ 0.707." },
    { type: "mcq", q: "To find angle θ when you know opposite and hypotenuse, use:", options: ["cos⁻¹", "tan⁻¹", "sin⁻¹", "Pythagoras"], answer: 2, difficulty: 1, explanation: "O and H pair with sine → θ = sin⁻¹(o/h)." },
    { type: "mcq", q: "A 10 m kite string makes 40° with the ground. Kite height:", options: ["10 cos 40°", "10 sin 40°", "10 tan 40°", "10/sin 40°"], answer: 1, difficulty: 2, explanation: "Height is opposite the 40° angle; string is hypotenuse → h = 10 sin 40° ≈ 6.4 m." },
    { type: "mcq", q: "sin² 30° + cos² 30° =", options: ["0.5", "1", "1.5", "2"], answer: 1, difficulty: 2, explanation: "The identity gives 1: 0.25 + 0.75 = 1 ✓." }
  ]
};

Lessons["g9-mathematics-um5-t2"] = {
  overview: "Not every triangle has a right angle — the sine and cosine rules handle the general case, unlocking distances across rivers and angles of depression in 3D.",
  objectives: [
    "Apply the sine rule to find sides or angles in any triangle",
    "Recognize the ambiguous case of the sine rule",
    "Apply the cosine rule for SAS and SSS configurations",
    "Compute triangle area with ½ab·sin C",
    "Solve real-world problems needing non-right trigonometry"
  ],
  simple: "SOH-CAH-TOA dies without a right angle. Two replacements: the <b>sine rule</b> (side/sin-of-opposite-angle is constant: a/sinA = b/sinB) and the <b>cosine rule</b> (a souped-up Pythagoras: c² = a² + b² − 2ab·cosC, which shrinks to Pythagoras when C = 90°). Use sine rule when a side and its OPPOSITE angle are both known; cosine rule when you know TWO SIDES and the angle between them (or all three sides).",
  detailed: "<p>The <b>sine rule</b>: a/sin A = b/sin B = c/sin C, where lowercase sides face uppercase angles. Derivation: drop the altitude from C; in the two right triangles formed, h = b sin A = a sin B → a/sin A = b/sin B. Use it for AAS/ASA (two angles + a side) or SSA. Rearranged: a = b·sinA/sinB or sinB = b·sinB… precisely sin B = (b sin A)/a.</p><p>The <b>ambiguous case</b> (SSA): sin B = k has solutions B and 180° − B — both may be valid, giving two different triangles! Test: if the known angle A is acute and a < b·sinA, no triangle; a = b·sinA, one right triangle; b·sinA < a < b, two triangles; a ≥ b, one. Exams love this; sketch before trusting a single answer.</p><p>The <b>cosine rule</b>: c² = a² + b² − 2ab cos C, with the version for angles cos C = (a² + b² − c²)/(2ab). Use for SAS (two sides + included angle → third side) and SSS (three sides → any angle). When C = 90°, cos C = 0 and it collapses to Pythagoras — a satisfying check. Note the angle must be BETWEEN the two known sides; otherwise the formula mislabels.</p><p><b>Area</b>: the familiar ½bh generalizes to ½ab sin C using either side-pair with its included angle — essential when no right angle hands you a height. Derivation: height to side b is a·sinC.</p><p>Strategy flow: right angle? → SOH-CAH-TOA. Have a matched side–opposite-angle pair? → sine rule. Two sides + included angle, or three sides? → cosine rule. Angle > 90° in cosine rule gives cos negative — the −2ab·cos term turns POSITIVE and c² grows beyond a² + b²; handle the minus sign with brackets or the whole answer warps. Final discipline: angles of a triangle must sum to 180° — always sum-check, and longest side must sit opposite the largest angle.</p><p>3D problems chain these: e.g. a pyramid's slant face gives one triangle (cosine rule for the slant edge), then a vertical cross-section triangle for the angle with the base — draw both, label knowns, solve sequentially. Bearings and heights across rivers (two observation points + measured baseline + two sight angles) reduce to ASA: third angle = 180 − sum, then sine rule.</p>",
  keyTerms: [
    { term: "Sine rule", def: "a/sinA = b/sinB = c/sinC — matched side/angle pairs" },
    { term: "Cosine rule", def: "c² = a² + b² − 2ab cosC — general Pythagoras" },
    { term: "Ambiguous case", def: "SSA data can yield 0, 1 or 2 triangles via sinB and 180°−B" },
    { term: "Included angle", def: "The angle between two named sides (required by cosine rule)" },
    { term: "SAS / SSS / AAS", def: "Given-patterns deciding which rule applies" },
    { term: "Area with sine", def: "½ × (side) × (side) × sin(included angle)" }
  ],
  formulas: [
    {
      name: "Sine rule",
      formula: "a/sin A = b/sin B = c/sin C",
      meaning: "Each side over its opposite angle's sine is constant",
      vars: [{ name: "a, b, c", meaning: "sides" }, { name: "A, B, C", meaning: "angles opposite a, b, c" }],
      when: "A pair of side + opposite angle is known (AAS/ASA/SSA)"
    },
    {
      name: "Cosine rule",
      formula: "c² = a² + b² − 2ab cos C · cos C = (a² + b² − c²)/(2ab)",
      meaning: "Third side from two sides + included angle; angle from all three sides",
      when: "SAS or SSS"
    },
    {
      name: "Triangle area",
      formula: "Area = ½ ab sin C",
      meaning: "Half the product of two sides times the sine of the included angle",
      when: "Any triangle with two sides and the included angle"
    }
  ],
  workedExamples: [
    {
      problem: "Triangle: A = 40°, a = 10, b = 12. Find B.",
      formula: "sin B = b sin A / a = 12 × 0.6428 / 10",
      calculation: "sin B = 0.7714 → B = 50.5° or 129.5° (ambiguous case — both allow positive C)",
      answer: "B ≈ 50.5° or 129.5° (check A + B < 180°)"
    },
    {
      problem: "SAS: sides 7 and 10 with included angle 60°. Find the third side and area.",
      formula: "c² = 49 + 100 − 2·7·10·cos60°; Area = ½·7·10·sin60°",
      calculation: "c² = 149 − 70 = 79; Area = 35 × 0.8660",
      answer: "c ≈ 8.89, Area ≈ 30.3"
    },
    {
      problem: "SSS: sides 5, 6, 7. Largest angle?",
      formula: "cos C = (25 + 36 − 49)/60 = 12/60",
      calculation: "C = cos⁻¹(0.2)",
      answer: "≈ 78.5° (opposite side 7 — the largest angle)"
    },
    {
      problem: "Two observers 100 m apart (same side of the balloon) see it at elevation 45° and 60°. Height?",
      formula: "h = d·tan60° = (d + 100)·tan45° where d = distance from nearer observer",
      calculation: "d√3 = d + 100 → d(√3 − 1) = 100 → d ≈ 136.6 m; h = d√3",
      answer: "h ≈ 237 m"
    }
  ],
  commonMistakes: [
    "Sine rule with the WRONG opposite pairing: a must pair with A, the angle it faces",
    "Missing the second sine-rule solution (180° − B) — sketch the triangle",
    "Cosine rule with a non-included angle — SAS means the angle sits BETWEEN the sides",
    "Dropping the minus: −2ab cos C where C obtuse (cos C < 0) becomes addition",
    "Using ½ab sinC with a non-included angle",
    "Forgetting DEGREE mode (fatal here too) and not sum-checking angles to 180°"
  ],
  applications: [
    "Land surveying: triangulation networks measure the country in non-right triangles",
    "Navigation: wind triangles and bearing fixes use sine/cosine rules",
    "GPS & astronomy: position from three known points is SSS in 3D",
    "Engineering: truss and linkage force triangles solved with the same rules"
  ],
  summary: "For any triangle: sine rule (a/sinA = b/sinB = c/sinC) when a side–angle pair is known — mind the SSA ambiguity (B and 180°−B); cosine rule (c² = a²+b²−2ab cosC) for SAS/SSS, reducing to Pythagoras at 90°. Area = ½ab sinC with the included angle. Always sum angles to 180°.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Which pattern suits the SINE rule first?", options: ["SSS", "SAS", "AAS", "two sides + included angle"], answer: 2, difficulty: 2, explanation: "AAS gives a side–opposite-angle pair immediately." },
    { type: "mcq", q: "The cosine rule c² = a² + b² − 2ab cosC reduces to Pythagoras when:", options: ["C = 0°", "C = 60°", "C = 90°", "a = b"], answer: 2, difficulty: 1, explanation: "cos 90° = 0 kills the correction term." },
    { type: "mcq", q: "Sides 3, 4 and included angle 90°: third side² =", options: ["7", "25", "12", "49"], answer: 1, difficulty: 1, explanation: "9 + 16 − 0 = 25." },
    { type: "mcq", q: "sin B = 0.5 in a triangle gives possible B of:", options: ["30° only", "30° or 150°", "60° or 120°", "45° only"], answer: 1, difficulty: 2, explanation: "The ambiguous pair: 30° and 150° — both valid only if they fit the 180° budget." },
    { type: "mcq", q: "Area with sides 8, 10 and included angle 30°:", options: ["40", "20", "80", "69.3"], answer: 1, difficulty: 2, explanation: "½·8·10·sin30° = 40 × 0.5 = 20." },
    { type: "mcq", q: "All three sides known → find an angle with:", options: ["sine rule", "cosine rule (angle form)", "tan", "Pythagoras"], answer: 1, difficulty: 1, explanation: "cos C = (a²+b²−c²)/2ab — SSS route." },
    { type: "mcq", q: "An obtuse angle C in the cosine rule makes −2ab cosC:", options: ["negative", "positive", "zero", "undefined"], answer: 1, difficulty: 3, explanation: "cos C < 0 for obtuse C, so the negative coefficient times negative cosine = positive addition." },
    { type: "mcq", q: "In triangle ABC, A + B = 130°, so C =", options: ["40°", "50°", "130°", "60°"], answer: 1, difficulty: 1, explanation: "Angle sum 180°: C = 50°." }
  ]
};
