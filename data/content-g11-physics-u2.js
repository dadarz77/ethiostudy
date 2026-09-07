/* ============================================================
   Content: Grade 11 Physics — Unit 2: Vectors
   4 topics: Types of Vectors, Graphical Addition (2D),
   Algebraic Addition (2D), Products of Vectors.
   Rich format: deeper detail, 3–4 worked examples, 8+ questions.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- p2-1: Vectors and Types of Vectors --- */
Lessons["g11-physics-up2-t1"] = {
  overview: "Some quantities need an arrow, not just a number. This lesson builds the vocabulary of vector algebra — scalars vs vectors, position, unit, equal, parallel and negative vectors — the language every later chapter (motion, forces, fields) is written in.",
  objectives: [
    "Distinguish scalar and vector quantities with examples",
    "Represent vectors symbolically and graphically",
    "Classify types of vectors: position, unit, equal, parallel, antiparallel, negative",
    "Resolve the idea of a vector's components along axes"
  ],
  simple: "A scalar is a bare number with a unit: '5 kg', '20 °C'. A vector is a number WITH a direction: '5 m/s due east'. Draw it as an arrow — length = magnitude, head = direction. Special kinds: a unit vector has length exactly 1 (just a direction label, like 'î' for the x-direction); a position vector points from the origin to where something IS; flip an arrow around and you get its negative (same length, opposite direction).",
  detailed: `<p><b>Scalars vs vectors:</b> Scalars are fully described by magnitude + unit alone (mass, time, temperature, energy, speed, charge). Vectors need magnitude AND direction, and they obey vector addition rules (displacement, velocity, acceleration, force, momentum, electric field). Test: does '5 N at 30° north of east' differ from '5 N at 30° south of west'? If direction changes the meaning, it's a vector.</p>
<p><b>Notation:</b> graphically an arrow AB with |AB| as magnitude; symbolically <b>A</b> (bold) or A⃗, magnitude A or |A|. Two vectors are <b>equal</b> if same magnitude AND same direction — position on the page doesn't matter (free vectors can slide).</p>
<p><b>Types of vectors:</b>
<br>• <b>Position vector</b> r: from origin O to point P — pins down WHERE. In 2D: r = xî + yĵ.
<br>• <b>Unit vector</b>: magnitude exactly 1, pure direction. Standard basis: î (x), ĵ (y), k̂ (z). For any vector: Â = A/|A|.
<br>• <b>Parallel (collinear) vectors</b>: same or opposite line of action: B = kA for scalar k. If k > 0 same direction; k < 0 antiparallel.
<br>• <b>Negative vector</b> −A: same magnitude, reversed direction; A + (−A) = 0.
<br>• <b>Null vector</b> 0: zero magnitude, direction undefined (result of A − A).</p>
<p><b>Components:</b> any vector in a plane can be 'shadow-cast' onto perpendicular axes: A = Aₓî + A_yĵ with Aₓ = A cosθ, A_y = A sinθ (θ from +x axis). The components are scalars (signed numbers). Magnitude and direction recover from them: |A| = √(Aₓ² + A_y²), θ = tan⁻¹(A_y/Aₓ) (mind the quadrant). This decomposition is THE key skill — vector problems become two number problems.</p>
<p><b>Why vectors add differently:</b> walk 3 m east then 4 m north — you're 5 m from start, not 7 m. Path order doesn't matter (commutative), and the triangle rule is just geometry. Scalars just add: 3 kg + 4 kg = 7 kg, always.</p>`,
  keyTerms: [
    { term: "Scalar", def: "Magnitude + unit only (mass, time, energy)." },
    { term: "Vector", def: "Magnitude + direction, obeying vector addition (force, velocity)." },
    { term: "Position vector", def: "Arrow from origin to a point: r = xî + yĵ." },
    { term: "Unit vector", def: "Vector of magnitude 1 marking a direction: Â = A/|A|." },
    { term: "Components", def: "Perpendicular projections Aₓ = A cosθ, A_y = A sinθ." },
    { term: "Collinear vectors", def: "Vectors along the same line (parallel or antiparallel)." },
    { term: "Null vector", def: "Zero-magnitude vector; direction undefined." }
  ],
  formulas: [
    {
      name: "Components of a vector",
      formula: "Aₓ = A·cosθ,  A_y = A·sinθ",
      meaning: "Projections onto x and y axes when θ is measured from +x.",
      vars: [
        { name: "A", meaning: "magnitude", unit: "any" },
        { name: "θ", meaning: "angle from +x axis", unit: "degrees" },
        { name: "Aₓ, A_y", meaning: "components", unit: "same as A" }
      ],
      units: "same as A",
      when: "Converting magnitude+direction into x,y numbers.",
      example: "A = 10 N at 37°: Aₓ = 10×0.8 = 8 N, A_y = 10×0.6 = 6 N."
    },
    {
      name: "Magnitude and direction from components",
      formula: "|A| = √(Aₓ² + A_y²),  θ = tan⁻¹(A_y/Aₓ)",
      meaning: "Reconstruct the arrow from its shadows.",
      vars: [
        { name: "Aₓ, A_y", meaning: "components", unit: "any" },
        { name: "|A|", meaning: "magnitude", unit: "same" },
        { name: "θ", meaning: "direction from +x", unit: "degrees" }
      ],
      units: "quadrant check required",
      when: "Given components, find the vector's size and angle.",
      example: "(−3, −4): |A| = 5; angle in third quadrant = 180° + 53° = 233°."
    }
  ],
  workedExamples: [
    {
      problem: "Classify: (a) 15 kg, (b) 9.8 m/s² downward, (c) 20 °C, (d) 5 m/s² at 30° above horizontal, (e) 30 J.",
      given: "Mixed quantities.",
      formula: "Does direction change meaning?",
      substitution: "(a) mass — no direction possible → scalar. (b) acceleration — vector. (c) temperature — scalar. (d) acceleration with angle — vector. (e) energy — scalar.",
      calculation: "3 scalars, 2 vectors.",
      answer: "Scalars: mass, temperature, energy. Vectors: any acceleration/force/velocity — direction is part of the information."
    },
    {
      problem: "Force F = (6, −8) N. Find its magnitude and direction, and its unit vector.",
      given: "Components Fₓ = 6, F_y = −8.",
      formula: "|F| = √(Fₓ²+F_y²); θ = tan⁻¹(F_y/Fₓ); F̂ = F/|F|.",
      substitution: "|F| = √(36+64) = 10 N. θ = tan⁻¹(−8/6) = −53° (fourth quadrant: 6 E, 8 S). F̂ = (0.6, −0.8).",
      calculation: "Check: |F̂| = √(0.36+0.64) = 1 ✓.",
      answer: "10 N at 53° below the +x axis; unit vector 0.6î − 0.8ĵ."
    },
    {
      problem: "A hiker walks 4 km east, then 4 km north. Is her displacement vector equal to a second hiker who walks 4 km north then 4 km east? What about a third who walks 8 km northeast?",
      given: "Three paths.",
      formula: "Vector equality: magnitude + direction only.",
      substitution: "Hikers 1 & 2 end at the same point → same displacement (4î + 4ĵ) — order irrelevant (commutativity). Hiker 3: 8 km NE = (5.66, 5.66) — different magnitude (8 vs 5.66 km).",
      calculation: "|d₁| = √32 ≈ 5.66 km.",
      answer: "Hikers 1 and 2 have EQUAL displacement vectors; hiker 3's is longer — equal vectors need identical magnitude AND direction, not identical paths."
    },
    {
      problem: "Vector A has magnitude 12 and points along −y. Write A in unit-vector form, and find the unit vector of −A.",
      given: "A = 12, direction −ĵ.",
      formula: "A = |A| × direction; −A flips direction.",
      substitution: "A = −12ĵ. −A = +12ĵ. Unit vector: (−A)/|−A| = 12ĵ/12.",
      calculation: "Â = −ĵ; (−A)̂ = +ĵ.",
      answer: "A = −12ĵ; the unit vector of −A is simply +ĵ — unit vectors keep direction but drop size."
    }
  ],
  commonMistakes: [
    "Calling speed a vector — it's the magnitude of velocity (scalar).",
    "Thinking a vector drawn elsewhere on the page is a different vector — free vectors slide; only length + direction count.",
    "Using θ from the y-axis while applying cos to x — always define your angle, then Aₓ = A cosθ only when θ is from +x.",
    "Reporting tan⁻¹ blindly: (−3,−4) is NOT '−53°', it's 233° — check the quadrant.",
    "Saying the unit vector of A changes when A's magnitude changes — it doesn't; it's pure direction."
  ],
  applications: [
    "Navigation: GPS gives you a position vector; flight plans chain displacement vectors.",
    "Engineering: every truss and cable problem starts by resolving forces into components.",
    "Sports: a football's velocity vector splits into horizontal (constant) + vertical (accelerating) parts.",
    "Robotics: joint positions are vectors; movement commands are vector sums.",
    "Weather maps: wind velocity vectors show speed AND bearing at every point."
  ],
  summary: "Scalars: number + unit. Vectors: number + unit + direction, added by geometry. Types: position (origin→point), unit (direction only, |Â|=1), equal (same magnitude+direction), parallel/antiparallel (B = kA), negative (flip), null. Components Aₓ = A cosθ, A_y = A sinθ turn arrows into pairs of numbers — the physicist's master key.",
  visuals: [
    { type: "flowChart", config: { steps: ["Vector A at angle θ", "Drop perpendicular to x-axis → Aₓ = A cosθ", "Drop perpendicular to y-axis → A_y = A sinθ", "Rebuild: |A| = √(Aₓ²+A_y²)", "Direction: θ = tan⁻¹(A_y/Aₓ)"], title: "Resolution and Recovery" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Classify: (a) 15 kg, (b) 9.8 m/s² downward, (c) 20 °C, (d) 5 m/s² at 30° above horizontal…","a":"<b>Answer:</b> Scalars: mass, temperature, energy. Vectors: any acceleration/force/velocity — direction is part of the information."},{"q":"Force F = (6, −8) N. Find its magnitude and direction, and its unit vector.","a":"<b>Answer:</b> 10 N at 53° below the +x axis; unit vector 0.6î − 0.8ĵ."},{"q":"A hiker walks 4 km east, then 4 km north. Is her displacement vector equal to a second hi…","a":"<b>Answer:</b> Hikers 1 and 2 have EQUAL displacement vectors; hiker 3's is longer — equal vectors need identical magnitude AND direction, not identical paths."},{"q":"Vector A has magnitude 12 and points along −y. Write A in unit-vector form, and find the…","a":"<b>Answer:</b> A = −12ĵ; the unit vector of −A is simply +ĵ — unit vectors keep direction but drop size."}]}}],
  questions: [
    { type: "mcq", q: "Which pair are BOTH vectors?", options: ["Mass and time", "Velocity and force", "Energy and speed", "Temperature and displacement"], answer: 1, difficulty: 1, explanation: "Velocity and force both require direction; the others are scalars." },
    { type: "mcq", q: "A unit vector always has:", options: ["Magnitude 1", "Magnitude equal to its original vector", "Zero magnitude", "Direction along +x only"], answer: 0, difficulty: 1, explanation: "Â = A/|A| normalises any vector to length 1, keeping its direction." },
    { type: "calc", q: "Vector A = (5, 12) (units: m). Find its magnitude.", answer: "13", difficulty: 1, explanation: "|A| = √(25+144) = √169 = 13 m.", tolerance: 0.1 },
    { type: "calc", q: "A 20 m displacement points 30° above the +x axis. Find its x-component. (cos30° = 0.866)", answer: "17.32", difficulty: 2, explanation: "Aₓ = 20 × cos30° = 20 × 0.866 = 17.32 m.", tolerance: 0.2 },
    { type: "concept", q: "Two vectors have equal magnitudes. Are they necessarily equal vectors?", answer: "no|directions may differ|need same direction too", difficulty: 2, explanation: "Equality requires same magnitude AND same direction — equal lengths pointing differently are different vectors." },
    { type: "mcq", q: "The result of A + (−A) is:", options: ["A", "2A", "The null vector", "A unit vector"], answer: 2, difficulty: 1, explanation: "A vector plus its negative cancels to zero magnitude — the null vector." },
    { type: "mcq", q: "B = −2A means B is:", options: ["Parallel to A, twice as long", "Antiparallel to A, twice as long", "Perpendicular to A", "Half of A"], answer: 1, difficulty: 2, explanation: "Negative scalar multiple: opposite direction (antiparallel), magnitude doubled." },
    { type: "calc", q: "Vector C = (−3, −4) m. Its magnitude is 5 m. Give its direction as an angle measured counterclockwise from the +x axis (in degrees).", answer: "233", difficulty: 3, explanation: "tan⁻¹(4/3) = 53° reference; third quadrant → 180° + 53° = 233°.", tolerance: 2 },
    { type: "tf", q: "Walking east 3 km then north 4 km gives the same displacement vector as north 4 km then east 3 km.", answer: true, difficulty: 1, explanation: "Vector addition is commutative — final position (the displacement) is identical." },
    { type: "short", q: "What is the magnitude of the unit vector of a 500 N force?", answer: "1", difficulty: 1, explanation: "Every unit vector has magnitude exactly 1, regardless of the original." }
  ]
};

/* --- p2-2: Graphical Method of Addition of Vectors in 2D --- */
Lessons["g11-physics-up2-t2"] = {
  overview: "Before algebra, physicists DRAW. The triangle, parallelogram and polygon methods turn 'what's the net effect of these pushes?' into a ruler-and-protractor construction — and build the geometric intuition that makes the algebra meaningful.",
  objectives: [
    "Add two vectors using the triangle (head-to-tail) rule",
    "Apply the parallelogram rule and show it gives the same resultant",
    "Add three or more vectors with the polygon method",
    "Subtract vectors graphically via the negative-vector trick",
    "Estimate resultants by scale drawing and check special cases"
  ],
  simple: "Head to tail! To add A + B: draw A, then start B's tail at A's head; the resultant runs from A's tail to B's head. Two vectors can also be laid side-by-side from one point — the diagonal of the parallelogram they form is the same answer. Three or more? Keep chaining head-to-tail (polygon); if the chain closes back on itself, the resultant is ZERO. Subtraction = add the flipped arrow.",
  detailed: `<p><b>Triangle rule (head-to-tail):</b> draw first vector to scale; from its head, draw the second; resultant R joins the original tail to the final head. Order doesn't matter: A + B = B + A (commutative — the triangle is just traversed differently).</p>
<p><b>Parallelogram rule:</b> place both tails together; complete the parallelogram; the diagonal from the common tail is R. Identical result to the triangle rule — the diagonal splits the parallelogram into two congruent triangles.</p>
<p><b>Polygon rule:</b> chain any number of vectors head-to-tail; R goes from start to finish. If the polygon CLOSES (last head meets first tail), ΣV = 0 — the equilibrium condition used in force diagrams.</p>
<p><b>Subtraction:</b> A − B = A + (−B): flip B end-for-end, then head-to-tail. Equivalently, with tails together, B→A is the difference vector.</p>
<p><b>Special cases to memorise (instant sanity checks):</b>
<br>• Same direction: R = A + B.
<br>• Opposite: R = |A − B| along the bigger.
<br>• Perpendicular: R = √(A² + B²) (Pythagoras).
<br>• Equal magnitude at 120°: R = A (each pair cancels the third in a symmetric trio).
<br>• Maximum resultant A+B, minimum |A−B| — the answer must lie between these bounds.</p>
<p><b>Doing it well:</b> choose a scale (1 cm = 10 N), draw with a sharp pencil and protractor, measure length AND angle of R, then verify against the bounds. Graphical answers carry ~1–2% drawing error — good for insight and checking, not final precision (that's the algebraic method's job).</p>`,
  keyTerms: [
    { term: "Resultant", def: "Single vector producing the same effect as the combination." },
    { term: "Triangle rule", def: "Head-to-tail addition; resultant tail→final head." },
    { term: "Parallelogram rule", def: "Common-tail addition; diagonal is the resultant." },
    { term: "Polygon rule", def: "Chained head-to-tail addition of many vectors." },
    { term: "Closed polygon", def: "Chain returning to start → zero resultant (equilibrium)." },
    { term: "Scale drawing", def: "Diagram with fixed length-to-magnitude ratio for measurement." }
  ],
  formulas: [
    {
      name: "Resultant of two vectors at angle θ (check for drawings)",
      formula: "R = √(A² + B² + 2AB·cosθ)",
      meaning: "Exact size of the sum, to verify a scale drawing.",
      vars: [
        { name: "A, B", meaning: "magnitudes", unit: "any" },
        { name: "θ", meaning: "angle between the vectors", unit: "degrees" },
        { name: "R", meaning: "resultant magnitude", unit: "same as A, B" }
      ],
      units: "same as inputs",
      when: "Checking graphical construction numerically.",
      example: "A = 3, B = 4, θ = 90°: R = √(9+16+0) = 5."
    }
  ],
  workedExamples: [
    {
      problem: "Using a scale drawing (1 cm = 10 N), find the resultant of 50 N east and 30 N north. Verify numerically.",
      given: "A = 50 N E, B = 30 N N.",
      formula: "Triangle rule; R = √(A²+B²) for perpendicular.",
      substitution: "Draw 5 cm east, then 3 cm up from its head; measure the closing line ≈ 5.83 cm at ≈ 31° north of east. Numerically: √(50² + 30²) = √3400.",
      calculation: "R = 58.3 N, tan⁻¹(30/50) = 31.0°.",
      answer: "≈58 N at 31° N of E — drawing and Pythagoras agree within pencil error."
    },
    {
      problem: "Two forces 8 N and 6 N act at a point. Without drawing, state the maximum and minimum possible resultants, and the resultant at 90°.",
      given: "|F₁| = 8, |F₂| = 6.",
      formula: "Bounds: A+B ≥ R ≥ |A−B|; perpendicular: √(A²+B²).",
      substitution: "Max (same direction): 14 N. Min (opposite): 2 N. At 90°: √(64+36) = 10 N.",
      calculation: "Any angle between gives R between 2 and 14 N.",
      answer: "14 N max, 2 N min, 10 N at right angles — a fast check that any measured resultant is plausible."
    },
    {
      problem: "Forces of 5 N, 5 N and 5 N act at a point, each pair 120° apart. Predict the resultant, then justify with the polygon rule.",
      given: "Symmetric trio.",
      formula: "Closed polygon ⇒ zero resultant.",
      substitution: "Chain them head-to-tail: each turn is 120°, tracing an equilateral triangle that returns exactly to the start.",
      calculation: "R = 0.",
      answer: "Zero — the polygon closes. (Check: any two 5 N at 120° give 5 N opposite the third, so all three cancel.)"
    },
    {
      problem: "A boat heads straight across a 120 m wide river at 3 m/s; the current flows downstream at 4 m/s. Draw (to scale) and compute the boat's actual velocity relative to shore, and time to cross.",
      given: "v_boat = 3 m/s across, v_river = 4 m/s downstream.",
      formula: "Vector sum (perpendicular); t = width / across-speed.",
      substitution: "R = √(3²+4²) = 5 m/s at tan⁻¹(4/3) = 53° downstream of straight-across. Crossing uses only the across component: t = 120/3.",
      calculation: "t = 40 s; drift downstream = 4 × 40 = 160 m.",
      answer: "5 m/s at 53°; crosses in 40 s, landing 160 m downstream — the graphical right triangle IS the river problem."
    }
  ],
  commonMistakes: [
    "Adding magnitudes blindly (50 + 30 = 80?) — only valid for same-direction vectors.",
    "Measuring the drawn angle from the wrong axis or from the surface instead of the reference direction.",
    "Forgetting to FLIP the second vector when subtracting (A − B ≠ triangle with B unflipped).",
    "Placing heads together instead of head-to-tail for the triangle rule.",
    "Reporting a resultant outside the [|A−B|, A+B] bounds — impossible, so it's an error.",
    "Using a sloppy scale (1 cm = 7 N) — pick round scales to keep measurement clean."
  ],
  applications: [
    "Free-body diagrams: engineers chain all forces head-to-tail to SEE if a structure is in equilibrium (closed polygon).",
    "Navigation: aircraft heading + wind vector = ground track, solved graphically in cockpit briefings.",
    "Rivers and currents: ferry pilots aim upstream using vector triangles constantly.",
    "Sports coaching: combining a sprinter's speed with a crosswind's push.",
    "Statics check on site: three cables at 120° share a load equally — visible from the polygon."
  ],
  summary: "Graphical addition: triangle (head-to-tail), parallelogram (common tails, diagonal), polygon (chain many; closed ⇒ zero). Subtraction = add the flipped vector. Bounds |A−B| ≤ R ≤ A+B; perpendicular gives √(A²+B²); equal trio at 120° cancels. Draw to scale, measure, then verify with the cosine formula.",
  visuals: [
    { type: "flowChart", config: { steps: ["Pick scale (1 cm = 10 N)", "Draw vector 1 to scale", "Start vector 2 at vector 1's head", "Continue chaining all vectors", "Draw closing line: tail → final head", "Measure length × scale = |R|", "Measure angle = direction"], title: "Scale-Drawing Recipe (Polygon Method)" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Using a scale drawing (1 cm = 10 N), find the resultant of 50 N east and 30 N north. Veri…","a":"<b>Answer:</b> ≈58 N at 31° N of E — drawing and Pythagoras agree within pencil error."},{"q":"Two forces 8 N and 6 N act at a point. Without drawing, state the maximum and minimum pos…","a":"<b>Answer:</b> 14 N max, 2 N min, 10 N at right angles — a fast check that any measured resultant is plausible."},{"q":"Forces of 5 N, 5 N and 5 N act at a point, each pair 120° apart. Predict the resultant, t…","a":"<b>Answer:</b> Zero — the polygon closes. (Check: any two 5 N at 120° give 5 N opposite the third, so all three cancel.)"},{"q":"A boat heads straight across a 120 m wide river at 3 m/s; the current flows downstream at…","a":"<b>Answer:</b> 5 m/s at 53°; crosses in 40 s, landing 160 m downstream — the graphical right triangle IS the river problem."}]}}],
  questions: [
    { type: "mcq", q: "In the triangle rule, the resultant is drawn from:", options: ["Head of first to head of second", "Tail of first to head of second", "Tail to tail", "Head to head"], answer: 1, difficulty: 1, explanation: "Chain head-to-tail; the closing arrow runs from the original tail to the final head." },
    { type: "calc", q: "Forces of 9 N and 12 N act at right angles. Find the resultant in newtons.", answer: "15", difficulty: 1, explanation: "√(81+144) = √225 = 15 N (3-4-5 triangle ×3).", tolerance: 0.2 },
    { type: "mcq", q: "If several forces drawn head-to-tail form a CLOSED polygon, the resultant is:", options: ["The longest vector", "Their average", "Zero", "Undefined"], answer: 2, difficulty: 2, explanation: "Closing the loop means returning to the start — net vector zero (equilibrium)." },
    { type: "calc", q: "Two vectors of 7 N and 3 N act at a point. What is the MAXIMUM possible resultant (N)?", answer: "10", difficulty: 1, explanation: "Same direction: 7 + 3 = 10 N.", tolerance: 0.1 },
    { type: "calc", q: "Same 7 N and 3 N vectors — minimum possible resultant (N)?", answer: "4", difficulty: 1, explanation: "Opposite directions: |7 − 3| = 4 N.", tolerance: 0.1 },
    { type: "concept", q: "How is A − B performed graphically?", answer: "flip B then head to tail|add negative B|reverse B direction", difficulty: 2, explanation: "Replace B with −B (same length, opposite direction) and use the ordinary head-to-tail rule." },
    { type: "mcq", q: "Two equal forces F at what angle give a resultant of magnitude F?", options: ["60°", "90°", "120°", "150°"], answer: 2, difficulty: 3, explanation: "R = √(2F²(1+cosθ)) = F needs cosθ = −½ → θ = 120°." },
    { type: "ordering", q: "Order the scale-drawing steps:", options: ["Measure resultant → draw vectors → pick scale → close polygon", "Pick scale → draw vectors head-to-tail → close polygon → measure resultant", "Close polygon → pick scale → measure → draw", "Draw vectors → measure → pick scale → close"], answer: [1], difficulty: 2, explanation: "Scale first, then chain, then close, then measure." },
    { type: "calc", q: "A 5 m/s velocity east combines with 5 m/s north. Give the resultant magnitude (m/s).", answer: "7.07", difficulty: 2, explanation: "√(25+25) = √50 ≈ 7.07 m/s.", tolerance: 0.1 },
    { type: "tf", q: "The parallelogram and triangle methods can give different resultants for the same two vectors.", answer: false, difficulty: 2, explanation: "They are geometrically identical constructions — same diagonal, same answer." }
  ]
};

/* --- p2-3: Algebraic Method of Addition of Vectors in 2D --- */
Lessons["g11-physics-up2-t3"] = {
  overview: "Rulers have limits; components don't. The algebraic method converts every vector into (x, y) numbers, adds them column-wise, and rebuilds the resultant exactly — the workhorse technique for every forces, motion and field problem you'll meet from now on.",
  objectives: [
    "Convert between magnitude/direction and component form",
    "Add/subtract any number of vectors by components",
    "Compute resultant magnitude and direction exactly",
    "Solve equilibrium problems (ΣFₓ = 0, ΣF_y = 0)"
  ],
  simple: "Break every arrow into x and y shadows (Aₓ = A cosθ, A_y = A sinθ). Add all the x's together, add all the y's together — done. The resultant is R = (Σx)î + (Σy)ĵ; its size is √(Rx² + Ry²) and its angle is tan⁻¹(Ry/Rx). No protractor, no pencil, any number of vectors. For equilibrium, the columns must each sum to zero.",
  detailed: `<p><b>The algorithm (always these 4 steps):</b>
<br>1. Choose axes (tilt them to simplify — e.g. along an incline).
<br>2. Tabulate components: each vector → (V cosθ, V sinθ) with θ from +x axis, signs automatic if you use the standard position angle.
<br>3. Sum columns: Rx = ΣVₓ, Ry = ΣV_y.
<br>4. Rebuild: R = √(Rx² + Ry²), θ = tan⁻¹(Ry/Rx) with quadrant check (or use atan2 logic: signs of Rx, Ry tell you the quadrant).</p>
<p><b>Sign discipline:</b> a vector at 210° has cos210° = −0.866, sin210° = −0.5 — both negative (third quadrant). Let the trigonometry carry the signs; don't 'eyeball' them twice.</p>
<p><b>Subtraction:</b> same method with the second vector's components negated: A − B = (Aₓ−Bₓ, A_y−B_y).</p>
<p><b>Equilibrium:</b> object at rest or constant velocity ⇒ ΣFₓ = 0 AND ΣF_y = 0. Unknown forces become solvable: e.g. a lamp on two wires gives two equations for two tensions.</p>
<p><b>Connection to geometry:</b> the component method is the triangle rule in coordinates — and the resultant formula R = √(A²+B²+2ABcosθ) is exactly the law of cosines. Algebra and drawing are the same physics wearing different clothes.</p>
<p><b>Worked discipline tip:</b> keep units in the table, round only at the END, and sanity-check the quadrant of your final angle against a quick sketch.</p>`,
  keyTerms: [
    { term: "Component method", def: "Vector addition by summing x and y columns separately." },
    { term: "Standard position angle", def: "Angle measured counterclockwise from +x axis (0–360°)." },
    { term: "Equilibrium", def: "ΣFₓ = ΣF_y = 0 — no net force." },
    { term: "Tension", def: "Pulling force along a rope/cable, treated as a vector." },
    { term: "Quadrant check", def: "Verifying the final angle's quadrant from the signs of Rx, Ry." }
  ],
  formulas: [
    {
      name: "Component addition",
      formula: "Rₓ = ΣAₓ,  R_y = ΣA_y;  R = √(Rₓ² + R_y²),  θ = tan⁻¹(R_y/Rₓ)",
      meaning: "Sum columns, then rebuild magnitude and direction.",
      vars: [
        { name: "Aₓ = A cosθ", meaning: "x-component of each vector", unit: "any" },
        { name: "A_y = A sinθ", meaning: "y-component of each vector", unit: "any" },
        { name: "R, θ", meaning: "resultant magnitude and direction", unit: "same / degrees" }
      ],
      units: "consistent throughout",
      when: "Any 2D vector sum — the default method for exams and engineering.",
      example: "(3,4) + (1,−2) = (4,2): R = √20 = 4.47 at 26.6°."
    }
  ],
  workedExamples: [
    {
      problem: "Add A = 8 m at 0°, B = 6 m at 90°, C = 10 m at 225°. Find the resultant exactly.",
      given: "Three vectors in magnitude-angle form.",
      formula: "Components → sums → rebuild.",
      substitution: "A = (8, 0). B = (0, 6). C = (10cos225°, 10sin225°) = (−7.07, −7.07). Rx = 8 + 0 − 7.07 = 0.93; Ry = 0 + 6 − 7.07 = −1.07.",
      calculation: "R = √(0.87 + 1.14) = √2.01 ≈ 1.42 m; θ = tan⁻¹(−1.07/0.93) = −49° → fourth quadrant → 311°.",
      answer: "R ≈ 1.4 m at 311° (i.e. 49° below the +x axis). Signs of (Rx>0, Ry<0) confirmed the quadrant."
    },
    {
      problem: "A 15 kg lamp hangs from two wires: left wire makes 30° with the ceiling, right wire 45°. Find the tension in each wire.",
      given: "Weight W = mg = 15 × 9.8 = 147 N. T₁ at 150° (up-left 30° above horizontal), T₂ at 45°.",
      formula: "Equilibrium: ΣFₓ = 0, ΣF_y = 0.",
      substitution: "x: −T₁cos30° + T₂cos45° = 0 → T₂ = T₁(0.866/0.707) = 1.225T₁. y: T₁sin30° + T₂sin45° = 147 → 0.5T₁ + 0.707(1.225T₁) = 147.",
      calculation: "0.5T₁ + 0.866T₁ = 1.366T₁ = 147 → T₁ = 107.6 N; T₂ = 131.8 N.",
      answer: "T₁ ≈ 108 N, T₂ ≈ 132 N — the steeper wire carries more of the load."
    },
    {
      problem: "Displacements: d₁ = (2, 5), d₂ = (−4, 1), d₃ = (1, −6) metres. Find d₁ + d₂ − d₃.",
      given: "Component form.",
      formula: "Column arithmetic with sign flip on d₃.",
      substitution: "x: 2 − 4 − 1 = −3. y: 5 + 1 − (−6) = 12.",
      calculation: "Result (−3, 12); |R| = √(9+144) = √153 ≈ 12.4 m; θ = tan⁻¹(12/−3) → second quadrant: 180° − 76° = 104°.",
      answer: "(−3, 12) m = 12.4 m at 104° from +x."
    },
    {
      problem: "Show that the component method reproduces R = √(A² + B² + 2ABcosθ) for two vectors with angle θ between them.",
      given: "A along +x: (A, 0). B at angle θ: (Bcosθ, Bsinθ).",
      formula: "Expand R² = (A+Bcosθ)² + (Bsinθ)².",
      substitution: "R² = A² + 2ABcosθ + B²cos²θ + B²sin²θ.",
      calculation: "cos²θ + sin²θ = 1 ⇒ R² = A² + B² + 2ABcosθ.",
      answer: "The cosine formula IS the component method in disguise — algebra and geometry agree exactly."
    }
  ],
  commonMistakes: [
    "Mixing cos into the y-component (or vice versa) — cos always pairs with the axis the angle is measured FROM.",
    "Dropping the quadrant: tan⁻¹(−1) has two candidates (135° or 315°) — signs of Rx, Ry decide.",
    "Rounding components mid-calculation and compounding error — keep 4 digits until the end.",
    "Using the angle between vectors where the standard-position angle is needed in components.",
    "Forgetting to negate ALL components when subtracting.",
    "Writing equilibrium as ΣF = 0 only — it's TWO equations (x and y) that must both hold."
  ],
  applications: [
    "Every inclined-plane problem: tilt axes, then components do the work.",
    "Structural engineering: truss analysis is equilibrium equations at every joint.",
    "Navigation crosswind problems: plane velocity + wind velocity by components.",
    "Electric circuits of forces: fields superpose by component addition.",
    "Robotics kinematics: arm segment vectors summed for end-effector position."
  ],
  summary: "Algebraic addition: resolve everything (Aₓ = Acosθ, A_y = Asinθ), sum columns, rebuild with Pythagoras + tan⁻¹, check quadrant. Subtraction negates components. Equilibrium = both columns zero. It's the triangle rule in coordinates — exact, scalable to any number of vectors, exam-proof.",
  visuals: [
    { type: "flowChart", config: { steps: ["Choose +x, +y axes", "Table: each vector → (Vcosθ, Vsinθ)", "Sum x column → Rx", "Sum y column → Ry", "R = √(Rx²+Ry²)", "θ = tan⁻¹(Ry/Rx) + quadrant check"], title: "The 4-Step Component Algorithm" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Add A = 8 m at 0°, B = 6 m at 90°, C = 10 m at 225°. Find the resultant exactly.","a":"<b>Answer:</b> R ≈ 1.4 m at 311° (i.e. 49° below the +x axis). Signs of (Rx&gt;0, Ry&lt;0) confirmed the quadrant."},{"q":"A 15 kg lamp hangs from two wires: left wire makes 30° with the ceiling, right wire 45°.…","a":"<b>Answer:</b> T₁ ≈ 108 N, T₂ ≈ 132 N — the steeper wire carries more of the load."},{"q":"Displacements: d₁ = (2, 5), d₂ = (−4, 1), d₃ = (1, −6) metres. Find d₁ + d₂ − d₃.","a":"<b>Answer:</b> (−3, 12) m = 12.4 m at 104° from +x."},{"q":"Show that the component method reproduces R = √(A² + B² + 2ABcosθ) for two vectors with a…","a":"<b>Answer:</b> The cosine formula IS the component method in disguise — algebra and geometry agree exactly."}]}}],
  questions: [
    { type: "calc", q: "Add (3, −2) and (−1, 5). Give the x-component of the result.", answer: "2", difficulty: 1, explanation: "Rx = 3 + (−1) = 2.", tolerance: 0.01 },
    { type: "calc", q: "Same vectors — give the y-component.", answer: "3", difficulty: 1, explanation: "Ry = −2 + 5 = 3.", tolerance: 0.01 },
    { type: "calc", q: "Find the magnitude of the resultant of (2, 5) + (−1, 1).", answer: "6.32", difficulty: 2, explanation: "Sum = (1, 6); |R| = √37 ≈ 6.32.", tolerance: 0.05 },
    { type: "mcq", q: "A vector at 210° has components with signs:", options: ["(+, +)", "(+, −)", "(−, +)", "(−, −)"], answer: 3, difficulty: 2, explanation: "210° is third quadrant: both cos and sin negative." },
    { type: "calc", q: "A force F = 20 N points at 60° from +x. Find its y-component. (sin60° = 0.866)", answer: "17.32", difficulty: 2, explanation: "F_y = 20 × sin60° = 17.32 N.", tolerance: 0.1 },
    { type: "concept", q: "For a box in equilibrium under several forces, what must be true of the x and y component sums?", answer: "both zero|sum fx = 0 and sum fy = 0", difficulty: 2, explanation: "Equilibrium requires ΣFₓ = 0 AND ΣF_y = 0 — two independent equations." },
    { type: "mcq", q: "Which pairs with the x-component formula when θ is measured from +x?", options: ["A sinθ", "A cosθ", "A tanθ", "A secθ"], answer: 1, difficulty: 1, explanation: "Adjacent side to the angle: Aₓ = A cosθ." },
    { type: "calc", q: "Resultant R = (−4, −3) N. Give its magnitude in newtons.", answer: "5", difficulty: 1, explanation: "√(16+9) = 5 N.", tolerance: 0.05 },
    { type: "calc", q: "For the same R = (−4, −3), give the standard-position angle in degrees (third quadrant).", answer: "217", difficulty: 3, explanation: "Reference tan⁻¹(3/4) = 36.9°; third quadrant: 180 + 36.9 ≈ 217°.", tolerance: 2 },
    { type: "tf", q: "The component method works for three or more vectors as easily as for two.", answer: true, difficulty: 1, explanation: "Just more rows in the table — sum each column." }
  ]
};

/* --- p2-4: Product of Vectors --- */
Lessons["g11-physics-up2-t4"] = {
  overview: "Vectors can be multiplied two ways, and each answers a different physical question. The dot product ('how much does one push along the other?') gives scalars like work; the cross product ('how much twist do they create?') gives a perpendicular vector like torque.",
  objectives: [
    "Compute the scalar (dot) product by angle and by components",
    "Interpret dot product: projection, perpendicularity test, work",
    "Compute the vector (cross) product magnitude and direction",
    "Use the right-hand rule and component determinant for cross products",
    "Apply both products to work W = F·d and torque τ = r × F"
  ],
  simple: "Dot product: multiply sizes and the cos of the angle between — you get a NUMBER. It measures 'alignment': same direction → full product, perpendicular → zero. Work = force dot displacement. Cross product: multiply sizes and the SIN, then point your answer PERPENDICULAR to both (right-hand rule: curl fingers A→B, thumb = A×B). It measures 'twist': torque = lever arm cross force. Bonus: A×A = 0, and order matters — A×B = −(B×A).",
  detailed: `<p><b>Scalar (dot) product:</b> A·B = AB cosθ. Geometrically: (size of A) × (shadow of B along A) — a projection. Properties: commutative (A·B = B·A); distributive; A·A = A². Component form: A·B = AₓBₓ + A_yB_y + A_zB_z. Tests: A·B = 0 ⇔ perpendicular (for nonzero vectors); A·B = AB ⇔ parallel; A·B = −AB ⇔ antiparallel.</p>
<p><b>Physical meaning of the dot:</b> only the force COMPONENT along motion does work: W = F·d = Fd cosθ. Carry a bag horizontally: your upward force does ZERO work on it (θ = 90°) — tiring but physics-free. Power: P = F·v.</p>
<p><b>Vector (cross) product:</b> A × B = (AB sinθ) n̂, where n̂ ⊥ to both A and B by the right-hand rule (fingers curl from A toward B through the smaller angle; thumb gives A×B). Magnitude = area of the parallelogram spanned by A and B. Properties: ANTICOMMUTATIVE (A×B = −B×A — order matters!); A×A = 0; distributive.</p>
<p><b>Component recipe (2D shortcut):</b> A × B (z-component) = AₓB_y − A_yBₓ. Positive result → out of page (k̂); negative → into page. Full 3D: determinant of |î ĵ k̂; Aₓ A_y A_z; Bₓ B_y B_z|.</p>
<p><b>Physical meaning of the cross:</b> turning effect. Torque τ = r × F (|τ| = rF sinθ — max when force is perpendicular to the spanner, zero when pulling along it). Angular momentum L = r × p. Magnetic force F = qv × B. Centripetal geometry everywhere uses it.</p>
<p><b>Choosing which product:</b> question yields a number (energy, projection, cos angle)? → dot. Yields a perpendicular direction (twist, area vector, sideways force)? → cross.</p>`,
  keyTerms: [
    { term: "Dot product", def: "A·B = ABcosθ — scalar measuring alignment/projection." },
    { term: "Cross product", def: "A×B = ABsinθ n̂ — vector perpendicular to both, measuring twist/area." },
    { term: "Projection", def: "Shadow of one vector along another: (A·B̂)B̂." },
    { term: "Perpendicularity test", def: "A·B = 0 (nonzero vectors) ⇔ 90° apart." },
    { term: "Anticommutative", def: "A×B = −(B×A) — swapping order flips sign." },
    { term: "Torque", def: "τ = r × F — rotational turning effect of a force." },
    { term: "Right-hand rule (cross)", def: "Curl fingers A→B; thumb points along A×B." }
  ],
  formulas: [
    {
      name: "Scalar product",
      formula: "A·B = AB·cosθ = AₓBₓ + A_yB_y (+ A_zB_z)",
      meaning: "Product of magnitudes times cosine of the angle; or sum of component products.",
      vars: [
        { name: "A, B", meaning: "magnitudes", unit: "any" },
        { name: "θ", meaning: "angle between vectors", unit: "degrees" },
        { name: "A·B", meaning: "scalar result", unit: "product of units" }
      ],
      units: "multiplied units (N·m = J)",
      when: "Work, power, projections, angle between vectors, perpendicularity.",
      example: "F = (3,4) N, d = (5,0) m: W = 15 + 0 = 15 J."
    },
    {
      name: "Vector product",
      formula: "|A × B| = AB·sinθ, direction ⊥ both (RHR)",
      meaning: "Magnitude = parallelogram area; direction by right-hand rule.",
      vars: [
        { name: "θ", meaning: "angle from A to B", unit: "degrees" },
        { name: "A×B", meaning: "vector perpendicular to the A–B plane", unit: "product units" }
      ],
      units: "multiplied units (N·m for torque)",
      when: "Torque, angular momentum, magnetic force, area normals.",
      example: "r = 0.2 m, F = 50 N at 90°: τ = 0.2×50×1 = 10 N·m out of page."
    },
    {
      name: "Work",
      formula: "W = F·d = Fd·cosθ",
      meaning: "Energy transferred by a force acting through a displacement.",
      vars: [
        { name: "F", meaning: "force magnitude", unit: "N" },
        { name: "d", meaning: "displacement", unit: "m" },
        { name: "θ", meaning: "angle between force and displacement", unit: "degrees" }
      ],
      units: "joules (J)",
      when: "Any force over a straight displacement.",
      example: "Pull a sled 10 m with 20 N at 60°: W = 20×10×0.5 = 100 J."
    }
  ],
  workedExamples: [
    {
      problem: "Find the angle between A = (1, 2) and B = (3, −1) using the dot product.",
      given: "Components.",
      formula: "cosθ = (A·B)/(|A||B|).",
      substitution: "A·B = 3 − 2 = 1. |A| = √5, |B| = √10.",
      calculation: "cosθ = 1/√50 = 0.1414 → θ = 81.9°.",
      answer: "≈ 82° — small positive dot means nearly perpendicular."
    },
    {
      problem: "A worker drags a crate 15 m along the floor with a 40 N rope inclined 30° above horizontal. Compute the work done by the rope, and state why the vertical component does no work.",
      given: "F = 40 N, d = 15 m, θ = 30°.",
      formula: "W = Fd cosθ.",
      substitution: "W = 40 × 15 × cos30° = 600 × 0.866.",
      calculation: "W = 519.6 J. The vertical component (40 sin30° = 20 N up) is perpendicular to the horizontal displacement → cos90° = 0 → zero work.",
      answer: "≈ 520 J — only the horizontal component (34.6 N) contributes: 34.6 × 15 = 519 J ✓."
    },
    {
      problem: "A 25 N force is applied at the end of a 0.4 m spanner at 90° to the bolt. Find the torque. What if the force is applied at only 30° to the spanner?",
      given: "r = 0.4 m, F = 25 N.",
      formula: "τ = rF sinθ.",
      substitution: "θ = 90°: τ = 0.4 × 25 × 1 = 10 N·m. θ = 30°: τ = 0.4 × 25 × 0.5.",
      calculation: "10 N·m vs 5 N·m.",
      answer: "Perpendicular push gives full 10 N·m; pulling at 30° halves it to 5 N·m — push SQUARE to the spanner!"
    },
    {
      problem: "Compute A × B for A = (2, 0, 1), B = (0, 3, 1) using the determinant, and verify anticommutativity.",
      given: "3D components.",
      formula: "A×B = (A_yB_z − A_zB_y, A_zBₓ − AₓB_z, AₓB_y − A_yBₓ).",
      substitution: "x: 0×1 − 1×3 = −3. y: 1×0 − 2×1 = −2. z: 2×3 − 0×0 = 6.",
      calculation: "A×B = (−3, −2, 6). Reversing: B×A = (3, 2, −6) = −(A×B) ✓.",
      answer: "(−3, −2, 6) — and swapping order flips every sign, as required."
    },
    {
      problem: "Show that the cross product magnitude equals the area of the parallelogram formed by A = (4, 0) and B = (1, 3).",
      given: "2D vectors in the plane.",
      formula: "|A×B| = |AₓB_y − A_yBₓ|.",
      substitution: "|4×3 − 0×1| = 12.",
      calculation: "Area by geometry: base 4, height 3 → 12 ✓.",
      answer: "12 square units — the cross product IS an area (with a perpendicular direction attached)."
    }
  ],
  commonMistakes: [
    "Expecting a vector from a dot product — it's always a scalar (number).",
    "Expecting a scalar from a cross product — it's always a vector perpendicular to both inputs.",
    "Using cos where sin belongs (cross) or sin where cos belongs (dot).",
    "Forgetting A×B = −B×A: dot products commute, cross products DON'T.",
    "Right-hand rule errors: curling from B to A instead of A to B.",
    "Claiming the rope's vertical pull does work on a horizontally-moving crate — perpendicular forces do zero work.",
    "Applying W = Fd when force and displacement aren't parallel without the cosθ."
  ],
  applications: [
    "Work & energy: W = F·d underlies every energy calculation in physics.",
    "Torque: τ = r×F — engines (Nm specs), door handles far from hinges, wrenches.",
    "Angular momentum L = r×p — figure skaters, gyroscopes, planetary orbits.",
    "Magnetism: F = qv×B steers charged particles (mass spectrometers, auroras).",
    "Computer graphics: normals to surfaces via cross products (lighting), areas of polygons.",
    "Geophysics: torque of gravity on Earth's bulge explains precession."
  ],
  summary: "Dot: A·B = ABcosθ = ΣAᵢBᵢ — a scalar; alignment, projection, work W = F·d; zero ⇔ perpendicular. Cross: A×B = ABsinθ n̂ — a perpendicular vector; twist, area, torque τ = r×F; anticommutative, A×A = 0. Right-hand rule sets direction. Number answer → dot; perpendicular answer → cross.",
  visuals: [
    { type: "flowChart", config: { steps: ["Point fingers along A", "Curl toward B (smaller angle)", "Thumb = direction of A×B", "Magnitude = AB sinθ", "Swap A,B → thumb flips (anticommutative)"], title: "Right-Hand Rule for Cross Products" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Find the angle between A = (1, 2) and B = (3, −1) using the dot product.","a":"<b>Answer:</b> ≈ 82° — small positive dot means nearly perpendicular."},{"q":"A worker drags a crate 15 m along the floor with a 40 N rope inclined 30° above horizonta…","a":"<b>Answer:</b> ≈ 520 J — only the horizontal component (34.6 N) contributes: 34.6 × 15 = 519 J ✓."},{"q":"A 25 N force is applied at the end of a 0.4 m spanner at 90° to the bolt. Find the torque…","a":"<b>Answer:</b> Perpendicular push gives full 10 N·m; pulling at 30° halves it to 5 N·m — push SQUARE to the spanner!"},{"q":"Compute A × B for A = (2, 0, 1), B = (0, 3, 1) using the determinant, and verify anticomm…","a":"<b>Answer:</b> (−3, −2, 6) — and swapping order flips every sign, as required."}]}}],
  questions: [
    { type: "calc", q: "Find A·B for A = (2, 3) and B = (4, −1).", answer: "5", difficulty: 1, explanation: "2×4 + 3×(−1) = 8 − 3 = 5.", tolerance: 0.01 },
    { type: "mcq", q: "If A·B = 0 for nonzero vectors, the vectors are:", options: ["Parallel", "Perpendicular", "Equal", "Antiparallel"], answer: 1, difficulty: 1, explanation: "cosθ = 0 ⇒ θ = 90°." },
    { type: "calc", q: "A = 5, B = 3, angle between = 60°. Find A·B.", answer: "7.5", difficulty: 1, explanation: "ABcos60° = 5×3×0.5 = 7.5.", tolerance: 0.05 },
    { type: "calc", q: "Same vectors — find |A × B|.", answer: "12.99", difficulty: 2, explanation: "ABsin60° = 15 × 0.866 = 12.99.", tolerance: 0.1 },
    { type: "mcq", q: "The result of a cross product A × B points:", options: ["Along A", "Along B", "Perpendicular to both A and B", "Between A and B"], answer: 2, difficulty: 1, explanation: "By definition, A×B is normal to the plane containing A and B (right-hand rule)." },
    { type: "tf", q: "A × B = B × A.", answer: false, difficulty: 2, explanation: "Cross products are anticommutative: B×A = −(A×B)." },
    { type: "calc", q: "A force of 30 N pulls a wagon 8 m along the ground with the rope at 60° to the horizontal. Work done (J)?", answer: "120", difficulty: 2, explanation: "W = Fd cosθ = 30×8×0.5 = 120 J.", tolerance: 1 },
    { type: "concept", q: "Why is torque maximum when you push perpendicular to a spanner?", answer: "sin90=1 maximum|r×F uses sin|full lever arm", difficulty: 2, explanation: "|τ| = rF sinθ peaks at θ = 90° (sin = 1); pushing along the spanner gives sin0° = 0 — no twist at all." },
    { type: "calc", q: "Compute the z-component of A×B for A = (1, 2, 0), B = (3, 1, 0). (AₓB_y − A_yBₓ)", answer: "-5", difficulty: 3, explanation: "1×1 − 2×3 = 1 − 6 = −5 (into the page).", tolerance: 0.01 },
    { type: "mcq", q: "Which quantity is computed with a DOT product?", options: ["Torque", "Work", "Angular momentum", "Magnetic force on a charge"], answer: 1, difficulty: 2, explanation: "W = F·d is a dot product; torque, L and F = qv×B are cross products." },
    { type: "short", q: "What is A × A (any vector crossed with itself)?", answer: "0|zero|null vector", difficulty: 1, explanation: "sin0° = 0, so any vector crossed with itself vanishes." }
  ]
};
