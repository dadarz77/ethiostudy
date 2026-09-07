/* Content: Grade 10 Mathematics — Unit 7: Coordinate Geometry (6 topics) */
window.Lessons = window.Lessons || {};

Lessons["g10-mathematics-um7-t1"] = {
  overview: "Descartes' genius was to fuse algebra and geometry: every point becomes a pair of numbers, and every shape becomes an equation. This lesson builds the two first tools — the distance formula (Pythagoras in coordinates) and the midpoint formula (averaging) — with which you can measure any segment drawn on the grid.",
  objectives: [
    "Plot points and find distances on the grid in any orientation",
    "Derive d = √((x₂−x₁)² + (y₂−y₁)²) from Pythagoras",
    "Apply the midpoint formula M = ((x₁+x₂)/2, (y₁+y₂)/2)",
    "Find a circle's centre/radius from a diameter's endpoints",
    "Use distance work to classify triangles and quadrilaterals on the grid"
  ],
  simple: "Put two points on the grid. Their horizontal gap is Δx = x₂ − x₁, the vertical gap Δy = y₂ − y₁ — those are the legs of a right triangle whose hypotenuse is the segment you want. Pythagoras hands you the distance: d = √(Δx² + Δy²). That's the whole formula — it's Pythagoras wearing coordinates. The midpoint is gentler still: the point halfway in x AND halfway in y — just average the coordinates. Example: from (1, 2) to (5, 8): distance √(16 + 36) = √52 ≈ 7.2, midpoint (3, 5). These two tools unlock geometry problems in algebra clothes: to prove a quadrilateral is a rectangle, compute all four sides and both diagonals; to find the other end of a diameter when you know the centre, reverse the midpoint average. Order never matters in either formula — squaring kills sign, and averaging is symmetric.",
  detailed: "<p><b>Derivation.</b> For A(x₁, y₁), B(x₂, y₂): the horizontal leg has length |x₂ − x₁|, the vertical |y₂ − y₁|, and they meet at right angles at C(x₂, y₁). Pythagoras on △ACB: AB² = (x₂ − x₁)² + (y₂ − y₁)². The absolute values vanish under squaring, so you may subtract in either order. Special cases: horizontal segments (y equal) collapse to |Δx|; vertical to |Δy| — the general formula still gives them.</p><p><b>Midpoint.</b> M = ((x₁ + x₂)/2, (y₁ + y₂)/2). Proof idea: the x-coordinate is equidistant from both endpoints' x-values (same Δ on each side), likewise y — and the point with both properties lies on the segment at half its length. Reverse use: if M and A are known, B = (2x_M − x₁, 2y_M − y₁) — 'double the midpoint, subtract the known end'. This is the parallelogram-diagonals trick: diagonals bisect each other, so their midpoints coincide.</p><p><b>Classification work.</b> On a grid, shapes are proven by measuring: parallelogram = both pairs of opposite sides equal (or one pair equal AND parallel — parallelism arrives next lesson); rectangle = parallelogram + equal diagonals; rhombus = all sides equal; square = both. Isosceles triangle: two equal distances; right triangle: check the converse of Pythagoras on the three squared lengths (avoid square roots — compare a² + b² = c²).</p><p><b>Centres and radii.</b> A circle's centre is the midpoint of any diameter; the radius is the distance from centre to any point on the rim. Given diameter endpoints (−2, 3) and (6, −1): centre (2, 1), radius √(16 + 4) = √20. Locus preview: the set of points at fixed distance from a point is the circle — the distance formula IS the circle equation in embryo (t5).</p><p><b>Section work coming next:</b> the midpoint is the 1:1 case of dividing a segment in a ratio — keep that in mind, the weighted-average formula generalizes it exactly.</p>",
  keyTerms: [
    { term: "Distance formula", def: "d = √((x₂−x₁)² + (y₂−y₁)²) — Pythagoras on coordinate gaps" },
    { term: "Δx, Δy", def: "Horizontal and vertical gaps between two points (run and rise)" },
    { term: "Midpoint", def: "Average of coordinates: ((x₁+x₂)/2, (y₁+y₂)/2)" },
    { term: "Reverse midpoint", def: "B = 2M − A given midpoint M and endpoint A" },
    { term: "Classification", def: "Proving shapes by computing side/diagonal lengths" },
    { term: "Locus", def: "Set of all points satisfying a condition (e.g. fixed distance → circle)" }
  ],
  formulas: [
    {
      name: "Distance",
      formula: "d = √((x₂ − x₁)² + (y₂ − y₁)²)",
      meaning: "Hypotenuse of the run-rise right triangle",
      vars: [{ name: "(x₁,y₁), (x₂,y₂)", meaning: "the two points", unit: "coords" }],
      units: "length",
      when: "Any segment length on the grid",
      example: "(1,2)→(4,6): √(9 + 16) = 5"
    },
    {
      name: "Midpoint",
      formula: "M = ((x₁ + x₂)/2, (y₁ + y₂)/2)",
      meaning: "Coordinate-wise average",
      vars: [{ name: "M", meaning: "point halfway along the segment", unit: "coords" }],
      units: "coords",
      when: "Halving segments; circle centres from diameters",
      example: "(−2,3)→(6,−1): M = (2, 1)"
    }
  ],
  workedExamples: [
    {
      problem: "Find the distance between A(−1, 5) and B(3, −3).",
      given: "A(−1,5), B(3,−3)",
      formula: "d = √(Δx² + Δy²)",
      substitution: "Δx = 3 − (−1) = 4; Δy = −3 − 5 = −8",
      calculation: "d = √(16 + 64) = √80 = 4√5 ≈ 8.94",
      answer: "4√5 ≈ 8.94 (keep the surd — exact beats decimal)"
    },
    {
      problem: "M is the midpoint of PQ with P(2, −4) and Q(8, 6). Find M.",
      given: "endpoints",
      formula: "average coordinates",
      substitution: "x: (2 + 8)/2 = 5; y: (−4 + 6)/2 = 1",
      calculation: "M(5, 1)",
      answer: "M(5, 1) — check: PM and MQ distances both √61"
    },
    {
      problem: "The centre of a circle is (3, −2) and one end of a diameter is (7, 1). Find the other end.",
      given: "M(3,−2), A(7,1)",
      formula: "B = 2M − A",
      substitution: "x: 6 − 7 = −1; y: −4 − 1 = −5",
      calculation: "B(−1, −5)",
      answer: "B(−1, −5) — verify midpoint of AB is (3, −2) ✓"
    },
    {
      problem: "Show the triangle with vertices A(1,1), B(5,2), C(4,6) is right-angled and isosceles.",
      given: "three vertices",
      formula: "compare squared lengths",
      substitution: "AB² = 16 + 1 = 17; BC² = 1 + 16 = 17; AC² = 9 + 25 = 34",
      calculation: "AB² = BC² → isosceles; AB² + BC² = 17 + 17 = 34 = AC² → right angle at B (converse of Pythagoras)",
      answer: "Right isosceles with the right angle at B — always compute ALL three squared lengths before naming the shape"
    },
    {
      problem: "Find x if the distance from (x, 3) to (4, −2) is 13.",
      given: "one coordinate unknown",
      formula: "√((x−4)² + 25) = 13",
      substitution: "(x − 4)² + 25 = 169 → (x − 4)² = 144",
      calculation: "x − 4 = ±12 → x = 16 or x = −8",
      answer: "x = 16 or −8 — square-root equations give TWO answers (both sides of 4)"
    }
  ],
  commonMistakes: [
    "Subtracting x from y (mixing coordinates): pair x with x, y with y",
    "Forgetting to square a negative difference — squaring fixes sign, but ONLY after subtracting correctly",
    "Midpoint of (−2, 3) and (6, −1) as (4, 4): dividing the DIFFERENCES instead of the SUMS",
    "Losing the ± when solving (x − a)² = k — two positions satisfy a distance equation",
    "Comparing distances with decimals and rounding into false 'equal' — compare SQUARED lengths",
    "Assuming the right angle is at a particular vertex — test each pair of squared lengths",
    "Using |Δx| + |Δy| (taxi-cab) as the distance — that's the grid-walk, not the straight line"
  ],
  applications: [
    "GPS & mapping: haversine distances between coordinates generalize this formula to the globe — your phone's 'distance to' feature",
    "Robotics/CAD: segment lengths and midpoints drive tool paths and symmetric part design",
    "Surveying: traverse computations chain distance and bearing from control points",
    "Game development: collision checks are distance comparisons (radius vs centre-to-centre)",
    "Economics/logistics: depot placement uses midpoints and distance-weighted costs"
  ],
  summary: "Coordinates turn Pythagoras into a formula: distance = √(Δx² + Δy²), and the midpoint is the coordinate-wise average — reversible to find hidden endpoints (B = 2M − A). Circle centres are diameter midpoints, radii are centre-to-rim distances, and shape classification is honest measurement of all sides and diagonals (compare squared lengths to dodge rounding). Two solutions typically satisfy a distance equation — the ± is geometry, not algebra noise.",
  visuals: [
    { type: "steps", config: { title: "Distance = Pythagoras", steps: [{ label: "Mark the points", detail: "A and B on the grid" }, { label: "Complete the corner", detail: "C = (x₂, y₁)" }, { label: "Legs", detail: "|Δx| horizontal, |Δy| vertical" }, { label: "Pythagoras", detail: "AB² = Δx² + Δy²" }, { label: "Root", detail: "d = √(Δx² + Δy²)" }] } },
    { type: "qa", config: { title: "Formula reflexes", pairs: [{ q: "(0,0)→(5,12)?", a: "<b>13</b> — classic triple" }, { q: "Midpoint (2,8),(6,2)?", a: "<b>(4, 5)</b>" }, { q: "Centre from (−2,1),(4,−3)?", a: "<b>(1, −1)</b>" }] } },
    { type: "comparison", config: { title: "Straight vs grid distance", left: { name: "Euclidean d", items: ["√(Δx²+Δy²)", "as the crow flies", "GPS 'as the crow flies'", "always ≤ taxi"] }, right: { name: "Taxi |Δx|+|Δy|", items: ["street-walk length", "city blocks", "Manhattan metric", "used in routing heuristics"] } } }
  ],
  questions: [
    { type: "mcq", q: "Distance from (1,1) to (4,5):", options: ["5", "7", "√7", "25"], answer: 0, difficulty: 1, explanation: "√(3² + 4²) = 5 — the 3-4-5 triangle" },
    { type: "mcq", q: "Midpoint of (−3, 2) and (5, −6):", options: ["(1, −2)", "(2, −4)", "(1, 2)", "(−1, −2)"], answer: 0, difficulty: 1, explanation: "((−3+5)/2, (2−6)/2) = (1, −2)" },
    { type: "mcq", q: "The distance formula is an application of:", options: ["Thales", "Pythagoras", "similar triangles", "midpoint theorem"], answer: 1, difficulty: 1, explanation: "Run and rise are the legs; the segment is the hypotenuse" },
    { type: "mcq", q: "Centre of the circle with diameter endpoints (0,0), (6,8):", options: ["(3,4)", "(6,8)", "(3,8)", "(4,3)"], answer: 0, difficulty: 2, explanation: "Midpoint (3,4); radius = half of 10 = 5" },
    { type: "tf", q: "Swapping the subtraction order (x₁−x₂ vs x₂−x₁) changes the distance.", answer: false, difficulty: 1, explanation: "Squaring erases the sign — either order works" },
    { type: "tf", q: "The equation √((x−2)² + 9) = 5 has exactly one solution.", answer: false, difficulty: 3, explanation: "(x−2)² = 16 → x = 6 or x = −2 — two points sit at distance 5" },
    { type: "calc", q: "Distance between A(2, −1) and B(−4, 7): √(36+64) = √100. Answer?", answer: "10", difficulty: 1, explanation: "Δ = (−6, 8): √(36 + 64) = 10" },
    { type: "calc", q: "P(3, k) is equidistant from (1,2) and (5,6). Find k.", answer: "4", difficulty: 3, explanation: "4 + (k−2)² = 4 + (k−6)² → (k−2)² = (k−6)² → k−2 = ±(k−6); the − case gives k = 4" },
    { type: "short", q: "Midpoint formula for the x-coordinate (letters only, e.g. '(x1+x2)/2').", answer: "(x1+x2)/2", difficulty: 1, explanation: "The average of the two x-values" },
    { type: "concept", q: "How do you prove a grid quadrilateral is a square using only distances?", answer: "four sides equal|diagonals equal|all distances|pythagoras check", difficulty: 2, explanation: "Compute all four sides (must be equal) AND both diagonals (must be equal) — equal sides give a rhombus, equal diagonals force the right angles: together, a square" }
  ]
};

Lessons["g10-mathematics-um7-t2"] = {
  overview: "What if the halfway point isn't halfway? Dividing a segment in the ratio m:n is a weighted average — the section formula. It answers 'where is the balance point', 'where does a median cross', and 'what point splits a road between two towns 2:3 from each'. The midpoint was just the 1:1 special case.",
  objectives: [
    "Derive the internal section formula P = ((nx₁+mx₂)/(m+n), (ny₁+my₂)/(m+n)) for ratio m:n",
    "Explain the 'cross-multiply weights' memory trick",
    "Find the point dividing a segment in a given ratio (2:3, 1:4, …)",
    "Apply the centroid formula ((x₁+x₂+x₃)/3, …) for triangle medians",
    "Solve reverse problems: given the division point, find the ratio"
  ],
  simple: "Point P splits AB in the ratio 2:3 — AP is to PB as 2 is to 3, so P sits two-fifths of the way from A to B. The formula is a weighted average: P = (3·A + 2·B)/5. Notice the CROSSING: the 3 (P's distance from B's side) weights A, and the 2 weights B — each endpoint gets the OTHER part's weight. Memory hook: 'multiply far, add bottoms'. Why the swap? The closer a point is to A, the MORE A's coordinates it should carry — and being close to A means the A-side number m is small… the weight on A is n (the far part). Special cases worth memorizing: trisection points use ratios 1:2 and 2:1; the centroid (medians' crossing) averages all three vertices by 3; and the midpoint is m = n. Reverse problems: given P, compute AP and PB distances (or just one coordinate equation) and read the ratio off.",
  detailed: "<p><b>Derivation.</b> A(x₁,y₁), B(x₂,y₂), P on AB with AP:PB = m:n. Then AP/AB = m/(m+n), so P = A + (m/(m+n))(B − A) — start at A, travel the fraction m/(m+n) of the way to B. Collecting terms: P = ((nx₁ + mx₂)/(m+n), (ny₁ + my₂)/(m+n)). The vector form P = A + t(B − A) with t = m/(m+n) is the more useful memory — it's linear interpolation, the same engine behind animation keyframes and GPS track smoothing.</p><p><b>The weight-crossing explained.</b> In the collected form, x₁'s coefficient is n/(m+n) — the FAR ratio part. If m = 0 (P at A), the weight on A is n/n = 1 ✓. Sanity-check any ratio problem this way: plug the extremes.</p><p><b>Centroid.</b> Medians trisect… no — medians meet at the centroid, 2:3 along each median from vertex to midpoint-of-opposite-side… precisely: the centroid divides each median in ratio 2:1 (vertex side 2). Applying the section formula to vertex A and midpoint M((x₂+x₃)/2, (y₂+y₃)/2) with 2:1 collapses to G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3) — the plain average of the three vertices. Beautiful and free to remember.</p><p><b>External division (extension):</b> if P lies on line AB OUTSIDE the segment with PA:PB = m:n, the formula becomes ((nx₁ − mx₂)/(n − m), …) — a minus instead of plus. Grade 10 exams mostly stay internal; know the sign flip exists.</p><p><b>Reverse technique:</b> given P divides AB in unknown ratio, use one coordinate: (x_P − x_A)/(x_B − x_P) = m/n (valid unless vertical — then use y). Reduce the fraction; that's the ratio. For 'P is the trisection point nearer A', the ratio is 1:2 by definition — draw the picture first.</p>",
  keyTerms: [
    { term: "Section formula", def: "P = ((nx₁+mx₂)/(m+n), (ny₁+my₂)/(m+n)) for AP:PB = m:n" },
    { term: "Weighted average", def: "Coordinates blended by the opposite segment parts" },
    { term: "Linear interpolation", def: "P = A + t(B − A): t = 0 at A, 1 at B" },
    { term: "Trisection points", def: "Division at 1:2 and 2:1 — thirds of the segment" },
    { term: "Centroid", def: "Median crossing: average of vertices, 2:1 on each median" },
    { term: "External division", def: "Point outside AB: minus sign in the formula" }
  ],
  formulas: [
    {
      name: "Internal section",
      formula: "P = ((nx₁ + mx₂)/(m + n), (ny₁ + my₂)/(m + n))",
      meaning: "AP:PB = m:n — each endpoint weighted by the FAR part",
      vars: [{ name: "m:n", meaning: "ratio from A to B", unit: "—" }],
      units: "coords",
      when: "Any 'divides in ratio' problem",
      example: "A(1,2), B(7,8), 1:2 → P = ((2·1+1·7)/3, (2·2+1·8)/3) = (3, 4)"
    },
    {
      name: "Interpolation form",
      formula: "P = A + t(B − A), t = m/(m+n)",
      meaning: "Walk the fraction t from A toward B",
      vars: [{ name: "t", meaning: "fraction of the journey", unit: "0–1" }],
      units: "coords",
      when: "When the crossing-weights formula feels backwards",
      example: "t = 1/3 of the way: x = 1 + (1/3)(6) = 3 ✓"
    },
    {
      name: "Centroid",
      formula: "G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)",
      meaning: "Average of the three vertices",
      vars: [{ name: "vertices", meaning: "triangle corners", unit: "coords" }],
      units: "coords",
      when: "Medians, balance points of triangular laminae",
      example: "(0,0),(6,0),(3,6) → G(3, 2)"
    }
  ],
  workedExamples: [
    {
      problem: "Find P dividing A(2, 1) and B(8, 7) in ratio 2:3.",
      given: "m:n = 2:3",
      formula: "P = ((3·2 + 2·8)/5, (3·1 + 2·7)/5)",
      substitution: "= ((6 + 16)/5, (3 + 14)/5)",
      calculation: "= (22/5, 17/5) = (4.4, 3.4)",
      answer: "P(4.4, 3.4) — nearer A since 2 < 3 ✓"
    },
    {
      problem: "Find the trisection points of segment from (1, 1) to (7, 10).",
      given: "ratios 1:2 and 2:1",
      formula: "section formula twice",
      substitution: "t = 1/3: (1 + 2, 1 + 3) = (3, 4); t = 2/3: (1 + 4, 1 + 6) = (5, 7)",
      calculation: "P₁(3, 4), P₂(5, 7)",
      answer: "(3,4) and (5,7) — evenly spaced thirds"
    },
    {
      problem: "Triangle vertices A(1,2), B(5,2), C(3,8). Find the centroid and verify it lies 2:1 on the median from A.",
      given: "three vertices",
      formula: "G = average; midpoint M of BC = (4, 5)",
      substitution: "G = (3, 4). Check AG:GM — AG = √(4 + 4) = √8; GM = √(1 + 1) = √2",
      calculation: "√8 : √2 = 2 : 1 ✓",
      answer: "G(3, 4), exactly 2:1 from vertex — the centroid theorem in one measurement"
    },
    {
      problem: "P(4, k) divides A(1, 3) and B(7, 9) — find the ratio and k.",
      given: "P on AB, x known",
      formula: "x: 4 = (n·1 + m·7)/(m+n) → 4(m+n) = n + 7m → 4n = 3m → m:n = 4:3",
      substitution: "y: k = (3·3 + 4·9)/7 = (9 + 36)/7",
      calculation: "k = 45/7 ≈ 6.43",
      answer: "ratio 4:3, k = 45/7 — one coordinate gives the ratio, the other gives k"
    },
    {
      problem: "A road runs from town X(0, 0) to Y(60, 80) (km on the map grid). A junction J is 15 km from X along the road. Find J's coordinates.",
      given: "XY length = √(3600 + 6400) = 100 km; t = 15/100",
      formula: "J = X + 0.15(Y − X)",
      substitution: "= (0.15 × 60, 0.15 × 80)",
      calculation: "= (9, 12)",
      answer: "J(9, 12) — convert 'distance along' into fraction t first"
    }
  ],
  commonMistakes: [
    "Weighting each endpoint with its OWN ratio part (forgetting the cross): AP:PB = m:n puts n on A, m on B",
    "Reading 'ratio 2:3 from A' as 2/5 from B — the order A-first matters",
    "Centroid as average of only two vertices, or dividing by 2",
    "External division attempted with the internal (+) formula — check which side P lies",
    "Reverse problems: using coordinate DIFFERENCES without absolute values and reporting negative ratios",
    "Trisection: computing only one third-point when both are asked",
    "Fraction arithmetic slips (the formulas are simple; the denominators m+n are where errors live)"
  ],
  applications: [
    "Logistics: placing a warehouse between two cities at a service ratio (weighted by demand) is section arithmetic",
    "Computer graphics: linear interpolation (lerp) between keyframes and gradient stops IS the section formula",
    "Navigation: waypoints a fixed distance along a route (the junction example) — flight planning",
    "Civil engineering: expansion joints along bridges spaced by ratio; surveying offsets",
    "Physics: centre of mass of two point masses is the section point weighted by the masses"
  ],
  summary: "Dividing AB in ratio m:n is a weighted average with crossed weights — P = (nA + mB)/(m+n) — equivalently the interpolation A + t(B − A) with t = m/(m+n), which is easier to trust under pressure. Midpoint (1:1), trisection (1:2, 2:1) and centroid (vertex-average, 2:1 on medians) are all special cases. Reverse problems extract the ratio from one coordinate and the unknown from the other.",
  visuals: [
    { type: "steps", config: { title: "Why the weights cross", steps: [{ label: "AP:PB = m:n", detail: "P is m/(m+n) of the way" }, { label: "P = A + t(B−A)", detail: "walk the fraction" }, { label: "Collect terms", detail: "= ((1−t)A + tB)" }, { label: "1−t = n/(m+n)", detail: "so A's weight is n" }, { label: "Far part weights near end", detail: "cross-multiply ∎" }] } },
    { type: "qa", config: { title: "Special ratios", pairs: [{ q: "m = n gives…?", a: "the <b>midpoint</b>" }, { q: "1:2 and 2:1 give…?", a: "<b>trisection points</b>" }, { q: "Centroid on a median?", a: "<b>2:1 from vertex</b>" }] } },
    { type: "comparison", config: { title: "Internal vs external", left: { name: "Internal (+)", items: ["P between A and B", "(nA + mB)/(m+n)", "t in (0,1)", "junctions, centroids"] }, right: { name: "External (−)", items: ["P beyond an endpoint", "(nA − mB)/(n−m)", "t outside [0,1]", "excavation sight-lines"] } } }
  ],
  questions: [
    { type: "mcq", q: "P divides A(0,0), B(6,6) in ratio 1:2. P =", options: ["(2,2)", "(3,3)", "(4,4)", "(1,1)"], answer: 0, difficulty: 1, explanation: "One-third of the way: (2, 2)" },
    { type: "mcq", q: "The centroid divides each median in ratio:", options: ["1:1", "2:1", "1:2", "3:1"], answer: 1, difficulty: 2, explanation: "2:1 measured from the vertex" },
    { type: "mcq", q: "In the section formula for m:n, the weight on x₁ is:", options: ["m/(m+n)", "n/(m+n)", "(m+n)/m", "m·n"], answer: 1, difficulty: 3, explanation: "Crossed weights: the far part n weights A" },
    { type: "mcq", q: "Trisection point of (0,0)→(9,3) nearer the origin:", options: ["(3,1)", "(4.5,1.5)", "(6,2)", "(2,1)"], answer: 0, difficulty: 2, explanation: "t = 1/3: (3, 1)" },
    { type: "tf", q: "The midpoint formula is the section formula with m = n.", answer: true, difficulty: 1, explanation: "1:1 weights collapse to the plain average" },
    { type: "tf", q: "If AP:PB = 3:2, then P is closer to A than to B.", answer: false, difficulty: 2, explanation: "AP:PB = 3:2 means AP is the LONGER piece — P sits nearer B. The first ratio part belongs to the segment from A, so a bigger first number pushes P away from A" },
    { type: "calc", q: "A(1,1), B(9,9), ratio 1:3. x-coordinate of P?", answer: "3", difficulty: 2, explanation: "x = (3·1 + 1·9)/4 = 12/4 = 3" },
    { type: "calc", q: "Vertices (0,0), (6,0), (0,6). Centroid's y-coordinate?", answer: "2", difficulty: 1, explanation: "(0 + 0 + 6)/3 = 2" },
    { type: "short", q: "The interpolation parameter t when AP:PB = 2:5 (as a fraction).", answer: "2/7", difficulty: 3, explanation: "t = m/(m+n) = 2/7 of the way from A to B" },
    { type: "concept", q: "Explain why the section formula's weights are 'crossed' (n on A, m on B).", answer: "closer to A means more A weight|1-t = n/(m+n)|far part weights near end|interpolation", difficulty: 3, explanation: "P sits m/(m+n) of the way from A, so its A-share is 1 − t = n/(m+n): the nearer the endpoint, the larger its influence — and nearness to A corresponds to a small m, i.e. a large n-weight on A" }
  ]
};

Lessons["g10-mathematics-um7-t3"] = {
  overview: "The slope measures a line's steepness — rise over run — and three equation forms (slope-intercept, point-slope, general) capture every non-vertical line. From two points to a full equation, from an equation to a graph, and between forms at will: this is the algebra-geometry handshake that powers everything from cost curves to road grades.",
  objectives: [
    "Compute slope m = (y₂−y₁)/(x₂−x₁) from two points",
    "Read slope and intercept from y = mx + c and sketch instantly",
    "Build equations from point + slope (point-slope) and from two points",
    "Convert between slope-intercept and general form Ax + By + C = 0",
    "Model real situations (costs, grades, rates) as linear equations"
  ],
  simple: "Slope is the line's personality: how much it climbs per step sideways. m = rise/run = (y₂ − y₁)/(x₂ − x₁). Positive slopes climb right, negative fall, zero is flat (horizontal), and vertical lines have NO slope (division by zero — 'undefined', not 'zero', the classic trap). The form y = mx + c tells you everything at a glance: m is the climb, c is where it crosses the y-axis. Need an equation from a point and a slope? y − y₁ = m(x − x₁) — point-slope, just the slope definition rearranged. Two points? Find m first, then point-slope. General form Ax + By + C = 0 is the same line in a suit: rearrange by solving for y. Real lines everywhere: a taxi fare (fixed flagfall + per-km rate) is y = c + mx; a road's 8% grade is m = 0.08; a savings plan is a line with slope = monthly deposit.",
  detailed: "<p><b>Slope defined.</b> m = Δy/Δx between any two points — well-defined because similar triangles make the ratio the same pair you choose (slope is a property of the line, not the points). Interpretations: rate of change (y per unit x), gradient (road %, roof pitch), and the tangent of the inclination angle (Unit 4 callback: m = tan θ, θ measured from positive x-axis; negative slopes correspond to obtuse θ). Horizontal: m = 0 (Δy = 0). Vertical: undefined (Δx = 0 — never say 'zero slope').</p><p><b>The three forms.</b> (1) Slope-intercept y = mx + c: instant sketch — start at (0, c), use the slope triangle. (2) Point-slope y − y₁ = m(x − x₁): the slope definition with (x, y) as a variable third point — best when you know a point and the rate. (3) General Ax + By + C = 0 (A ≥ 0 convention): everything on one side; slope = −A/B, intercept = −C/B (B ≠ 0). Conversions are pure rearrangement; exams love 'put in general form' and 'find slope from 3x − 4y + 12 = 0' → y = (3/4)x + 3 → m = 3/4.</p><p><b>Building equations.</b> From two points: m = Δy/Δx, then point-slope with either point (both give the same line — a good self-check). From a graph: read intercept and one clear point. From a word problem: identify the fixed part (c) and the rate (m), write y = mx + c with labelled units. Intercepts: x-intercept at y = 0 (solve mx + c = 0 → x = −c/m), y-intercept at x = 0 (= c).</p><p><b>Line families:</b> same slope = parallel family (next lesson); y = c is horizontal; x = k is vertical (general form with B = 0). The distance from a point to a line and the angle between lines are Grade 11 extensions — the slope is the seed of both.</p>",
  keyTerms: [
    { term: "Slope (gradient) m", def: "Rise over run: Δy/Δx — climb per unit sideways" },
    { term: "y-intercept c", def: "Where the line crosses the y-axis: point (0, c)" },
    { term: "Slope-intercept form", def: "y = mx + c" },
    { term: "Point-slope form", def: "y − y₁ = m(x − x₁)" },
    { term: "General form", def: "Ax + By + C = 0; slope = −A/B" },
    { term: "Undefined slope", def: "Vertical lines: Δx = 0 — not zero slope!" },
    { term: "Inclination", def: "Angle θ from +x-axis; m = tan θ" }
  ],
  formulas: [
    {
      name: "Slope from two points",
      formula: "m = (y₂ − y₁)/(x₂ − x₁)",
      meaning: "Rise divided by run between any two points of the line",
      vars: [{ name: "m", meaning: "slope", unit: "y-units per x-unit" }],
      units: "ratio",
      when: "Two points known, equation wanted",
      example: "(1,2)→(5,10): m = 8/4 = 2"
    },
    {
      name: "Slope-intercept",
      formula: "y = mx + c",
      meaning: "Start at height c, climb m per step",
      vars: [{ name: "c", meaning: "y-intercept", unit: "y-units" }],
      units: "—",
      when: "Graphing and rate modelling",
      example: "Taxi: fare F = 15 + 12d (flagfall 15, 12 per km)"
    },
    {
      name: "Point-slope",
      formula: "y − y₁ = m(x − x₁)",
      meaning: "The slope definition solved for the moving point",
      vars: [{ name: "(x₁,y₁)", meaning: "known point on the line", unit: "coords" }],
      units: "—",
      when: "Point + rate given",
      example: "m = 2 through (1,3): y − 3 = 2(x − 1) → y = 2x + 1"
    }
  ],
  workedExamples: [
    {
      problem: "Find the equation of the line through (2, 5) and (6, 13).",
      given: "two points",
      formula: "m = Δy/Δx, then point-slope",
      substitution: "m = 8/4 = 2; y − 5 = 2(x − 2)",
      calculation: "y = 2x + 1",
      answer: "y = 2x + 1 (check with (6,13): 2·6 + 1 = 13 ✓)"
    },
    {
      problem: "Find the slope and both intercepts of 3x + 4y − 12 = 0.",
      given: "general form",
      formula: "Solve for y; set y = 0, x = 0",
      substitution: "y = −(3/4)x + 3; x-int: 3x = 12 → x = 4",
      calculation: "m = −3/4, y-int 3, x-int 4",
      answer: "m = −3/4, crosses at (0,3) and (4,0) — sketch through those two"
    },
    {
      problem: "A town's water bill is fixed 50 birr plus 8 birr per m³. Write the cost line and find the bill for 45 m³.",
      given: "fixed + variable structure",
      formula: "C = 8u + 50 (slope = rate, intercept = fixed)",
      substitution: "u = 45: C = 360 + 50",
      calculation: "= 410",
      answer: "C = 8u + 50; 410 birr — every 'fixed plus per-unit' story is y = mx + c"
    },
    {
      problem: "A road climbs 21 m over a horizontal run of 300 m. Find the grade as a percent and the angle of inclination.",
      given: "rise 21, run 300",
      formula: "m = 21/300 = 0.07; θ = arctan(0.07)",
      substitution: "grade = 7%; θ ≈ 4°",
      calculation: "0.07 rad ≈ 4.0°",
      answer: "7% grade, about 4° — engineers quote slopes as percent, mathematicians as tan θ"
    },
    {
      problem: "The line y = mx + 4 passes through (3, −2). Find m.",
      given: "one point + intercept",
      formula: "substitute: −2 = 3m + 4",
      substitution: "3m = −6",
      calculation: "m = −2",
      answer: "m = −2 — 'passes through' always means substitute and solve"
    }
  ],
  commonMistakes: [
    "Slope as run/rise (flipping the fraction): it's Δy OVER Δx — rise first",
    "Saying vertical lines have 'zero slope' — they're UNDEFINED; horizontal ones are zero",
    "Sign slips in Δy when points go downhill left-to-right (slope IS negative — that's correct, not an error)",
    "Point-slope written y + y₁ = m(x + x₁) — both signs must match the known point's subtraction",
    "Reading c from x + 3y = 6 as 6 — solve for y first: y = −x/3 + 2, so c = 2",
    "Mixing the two points' coordinates in the slope fraction (pair y with y, x with x — same order both)",
    "Forgetting units when modelling: m carries 'y-units per x-unit' — label them"
  ],
  applications: [
    "Tariff modelling: electricity, water and taxi fares are all y = fixed + rate·x — read the bill's structure from the line",
    "Road & roof design: grades and pitches are slopes in percent (8% = m 0.08); drainage needs minimum slopes",
    "Economics: supply/demand lines, marginal cost = slope, break-even = intersection (next unit's systems)",
    "Science graphing: calibration lines (y = mx + b) turn meter readings into concentrations; slope = sensitivity",
    "Fitness & finance: weekly savings plans and pace charts are literal slope stories"
  ],
  summary: "Slope m = Δy/Δx is a line's rate of change — constant everywhere by similar triangles, undefined for verticals, tan θ for the inclination. Three forms describe the same line: y = mx + c (sketch), y − y₁ = m(x − x₁) (build), Ax + By + C = 0 (file). Two points → slope → point-slope; word problems → fixed part is c, rate is m. Reading an equation means extracting m and c before the pencil touches graph paper.",
  visuals: [
    { type: "comparison", config: { title: "Four slopes, four stories", left: { name: "m > 0 / m = 0", items: ["climbs right", "flat roof", "y = 2x + 1", "savings growing"] }, right: { name: "m < 0 / undefined", items: ["falls right", "vertical wall", "y = −x + 4", "x = 3: no slope"] } } },
    { type: "steps", config: { title: "Two points → equation", steps: [{ label: "Slope first", detail: "m = Δy/Δx" }, { label: "Point-slope", detail: "y − y₁ = m(x − x₁)" }, { label: "Expand", detail: "y = mx + c" }, { label: "Check the OTHER point", detail: "substitute — must satisfy" }] } },
    { type: "qa", config: { title: "Read the line", pairs: [{ q: "y = −3x + 6: slope?", a: "<b>−3</b>, crosses y at 6" }, { q: "2x + 2y = 10: slope?", a: "<b>−1</b> — solve for y" }, { q: "Through (0,2), m = 5?", a: "<b>y = 5x + 2</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "Slope through (1, 3) and (4, 9):", options: ["2", "3", "1/2", "6"], answer: 0, difficulty: 1, explanation: "Δy/Δx = 6/3 = 2" },
    { type: "mcq", q: "The slope of y = −2x + 7 is:", options: ["7", "2", "−2", "−7"], answer: 2, difficulty: 1, explanation: "Coefficient of x in y = mx + c" },
    { type: "mcq", q: "Slope of 4x − 2y + 8 = 0:", options: ["2", "−2", "1/2", "4"], answer: 0, difficulty: 2, explanation: "y = 2x + 4 → m = 2" },
    { type: "mcq", q: "The slope of a vertical line is:", options: ["0", "1", "undefined", "infinite by convention in Grade 10"], answer: 2, difficulty: 2, explanation: "Δx = 0 → division by zero → undefined" },
    { type: "tf", q: "The line y = 5 has slope 0.", answer: true, difficulty: 1, explanation: "Horizontal — no rise anywhere" },
    { type: "tf", q: "Point-slope form for m = 3 through (−1, 4) is y − 4 = 3(x + 1).", answer: true, difficulty: 2, explanation: "x − x₁ = x − (−1) = x + 1 — signs handled correctly" },
    { type: "calc", q: "Line through (0, 1) and (2, 7): slope?", answer: "3", difficulty: 1, explanation: "(7−1)/(2−0) = 3" },
    { type: "calc", q: "y = mx − 2 passes through (4, 10). Find m.", answer: "3", difficulty: 2, explanation: "10 = 4m − 2 → m = 3" },
    { type: "short", q: "x-intercept of 2x + 5y − 10 = 0 (a number).", answer: "5", difficulty: 2, explanation: "Set y = 0: 2x = 10 → x = 5" },
    { type: "concept", q: "A taxi charges a flagfall of 20 birr plus 15 birr per km. Write the fare equation and explain both parameters.", answer: "F = 15d + 20|slope is per-km rate|intercept is flagfall|fixed cost", difficulty: 2, explanation: "F = 15d + 20: slope 15 = marginal cost per km (rate of change), intercept 20 = cost at zero distance (the fixed flagfall)" }
  ]
};

Lessons["g10-mathematics-um7-t4"] = {
  overview: "Parallel lines share a slope; perpendicular lines have slopes that multiply to −1. Both facts fall out of congruent slope triangles rotated 90°, and together they let you build any line 'like' or 'square to' a given one — the toolkit for rectangle proofs, road design and normal lines.",
  objectives: [
    "Prove: parallel lines have equal slopes (converse too)",
    "Prove: perpendicular slopes satisfy m₁·m₂ = −1",
    "Find equations of lines parallel/perpendicular to a given line through a point",
    "Classify grid quadrilaterals using slope pairs",
    "Handle the vertical/horizontal special case correctly"
  ],
  simple: "Two lines are parallel iff they climb at exactly the same rate — same slope, different starting height (same slope AND same intercept = the same line, not parallel). Perpendicular is the stranger: the slopes multiply to −1. Why? Rotate a slope triangle 90°: its rise becomes the new run — and one of them flips sign because the rotation sends 'up' to 'sideways the other way'. So m becomes −1/m: the negative reciprocal. Perpendicular to slope 2 is −1/2; to −3/4 is 4/3. The special pair: horizontal (m = 0) meets vertical (undefined) at right angles — the 'product −1' language can't speak about it, so say it directly. Recipe for 'the line through P perpendicular to L': read L's slope, flip-and-negate, point-slope at P. Use slopes to PROVE shapes: a grid rectangle has opposite sides with equal slopes AND adjacent sides with product −1.",
  detailed: "<p><b>Parallel.</b> If lines have equal slopes m, their inclination angles θ (with tan θ = m) are equal, so the lines make equal angles with the x-axis — they never meet (or coincide). Converse: parallel lines cut by the x-axis make equal corresponding angles → equal tangents → equal slopes. Watch the trap: y = 2x + 1 and y = 2x + 1 are identical; parallel demands equal slope and DIFFERENT intercept.</p><p><b>Perpendicular — the rotation proof.</b> Take a line of slope m: its triangle is (run 1, rise m). Rotate 90°: the vector (1, m) becomes (−m, 1) — swap and flip one sign. The new slope is 1/(−m) = −1/m. Hence m₁m₂ = m·(−1/m) = −1. Converse: if m₁m₂ = −1, the second slope is the negative reciprocal, i.e. the 90° rotation — lines are perpendicular. Algebraic proof alternative: place the vertex at origin, points A(1, m₁) and B(1, m₂) on the lines; the angle at O is 90° iff OA² + OB² = AB² — expanding gives (1 + m₁²) + (1 + m₂²) = (m₁ − m₂)², which reduces to m₁m₂ = −1. Pythagoras proving its own cousin.</p><p><b>The vertical handshake:</b> a vertical line x = k is perpendicular to every horizontal line y = c. In slope language m₁m₂ = −1 cannot cover it (one slope doesn't exist) — state the geometric fact. When the given line is vertical, the parallel is x = k' and the perpendicular is y = c through the point.</p><p><b>Construction recipe:</b> given L: y = mx + c and point P(a, b): parallel → y − b = m(x − a); perpendicular → y − b = −(x − a)/m. If L is in general form Ax + By + C = 0: parallel lines share (A, B) — Ax + By + C' = 0 with C' fixed by P; perpendicular swaps to Bx − Ay + C'' = 0. These 'same normal / swapped normal' patterns scale to Grade 11's distance formulas.</p><p><b>Classification power:</b> quadrilateral ABCD on a grid: AB ∥ CD and BC ∥ AD (slope pairs equal) → parallelogram; add adjacent product −1 → rectangle; add all side-lengths equal → rhombus; both → square. Slopes handle parallelism, distances handle equality — the two tools alternate.</p>",
  keyTerms: [
    { term: "Parallel condition", def: "m₁ = m₂ AND c₁ ≠ c₂ (else same line)" },
    { term: "Perpendicular condition", def: "m₁ · m₂ = −1 (negative reciprocals)" },
    { term: "Negative reciprocal", def: "m → −1/m: flip the fraction, change the sign" },
    { term: "Horizontal-vertical pair", def: "m = 0 ⟂ undefined — the exception to the product rule" },
    { term: "Normal line", def: "The perpendicular at a point (Grade 11 preview: to curves)" },
    { term: "General-form trick", def: "Parallel: keep A, B; perpendicular: swap to B, −A" }
  ],
  formulas: [
    {
      name: "Parallel test",
      formula: "m₁ = m₂ (and different intercepts)",
      meaning: "Same climb rate, different heights",
      vars: [{ name: "m₁, m₂", meaning: "the two slopes", unit: "ratio" }],
      units: "—",
      when: "Rail lines, opposite sides of rectangles",
      example: "y = 3x + 1 ∥ y = 3x − 5"
    },
    {
      name: "Perpendicular test",
      formula: "m₁ · m₂ = −1",
      meaning: "Negative reciprocals — one is the other rotated 90°",
      vars: [{ name: "−1/m", meaning: "the perpendicular slope to m", unit: "ratio" }],
      units: "—",
      when: "Corners, normals, altitudes",
      example: "m = 2/5 ⟂ m = −5/2 (product −1 ✓)"
    },
    {
      name: "General-form companions",
      formula: "Ax + By + C = 0 → ∥: Ax + By + C′ = 0; ⟂: Bx − Ay + C″ = 0",
      meaning: "Keep or swap-and-flip the normal vector (A, B)",
      vars: [{ name: "C′, C″", meaning: "fixed by the required point", unit: "—" }],
      units: "—",
      when: "When the line arrives in general form",
      example: "3x + 4y = 7: ⟂ family 4x − 3y = k"
    }
  ],
  workedExamples: [
    {
      problem: "Find the line through (2, −1) parallel to y = 3x + 5.",
      given: "slope 3, point",
      formula: "point-slope with same m",
      substitution: "y + 1 = 3(x − 2)",
      calculation: "y = 3x − 7",
      answer: "y = 3x − 7 (same slope, new intercept — check (2,−1): 6 − 7 ✓)"
    },
    {
      problem: "Find the line through (4, 1) perpendicular to 2x + 6y = 3.",
      given: "given line: y = −x/3 + 1/2, m = −1/3",
      formula: "perpendicular slope = −1/m = 3",
      substitution: "y − 1 = 3(x − 4)",
      calculation: "y = 3x − 11",
      answer: "y = 3x − 11 (product (−1/3)(3) = −1 ✓)"
    },
    {
      problem: "Show A(1,1), B(4,2), C(3,5), D(0,4) form a square.",
      given: "four vertices",
      formula: "slopes + distances",
      substitution: "m_AB = 1/3, m_CD = 1/3; m_BC = −3, m_DA = −3 → parallelogram with right angles (1/3 × −3 = −1). Lengths: AB = √10, BC = √10 → all sides equal",
      calculation: "Right angles + equal sides",
      answer: "Square: parallel opposite sides, perpendicular adjacent sides, equal lengths — all three slope/distance checks"
    },
    {
      problem: "The altitude from C(1, 6) to side AB with A(0,0), B(4,2): find its equation.",
      given: "AB slope = 1/2",
      formula: "altitude ⟂ AB: slope −2, through C",
      substitution: "y − 6 = −2(x − 1)",
      calculation: "y = −2x + 8",
      answer: "y = −2x + 8 — an altitude is just 'the perpendicular from a vertex'"
    },
    {
      problem: "For what k are the lines y = kx + 2 and 2y − 4x = 7 perpendicular?",
      given: "second line slope: y = 2x + 3.5 → m₂ = 2",
      formula: "m₁m₂ = −1 → 2k = −1",
      substitution: "k = −1/2",
      calculation: "check: (−1/2)(2) = −1 ✓",
      answer: "k = −1/2"
    }
  ],
  commonMistakes: [
    "Perpendicular slope as −m (sign flip only) instead of −1/m (flip AND negate)",
    "Saying 'same slope = parallel' without excluding the identical line (c must differ)",
    "Trying m₁m₂ = −1 with a vertical line — state the horizontal/vertical fact instead",
    "Flipping 2/5 to −5/2 but writing −2/5 (negate the RECIPROCAL, not the original)",
    "Reading slope from 2x + 3y = 6 as 2/3 — solve for y: m = −2/3 (sign AND ratio)",
    "Using the general-form swap as (B, A) without the sign change on one component",
    "Claiming a quadrilateral is a rectangle from right angles alone — you also need it to be a parallelogram (or check all four corners)"
  ],
  applications: [
    "Road design: slip roads join highways at shallow angles — parallel merges and perpendicular intersections are slope planning",
    "Architecture: every rectangular room is a slope-pair proof; load paths run perpendicular to supports",
    "Computer graphics: surface normals (perpendiculars) drive lighting — a pixel's brightness comes from m₁m₂ = −1 logic in 3D",
    "Surveying: setting out right angles on site via 3-4-5 offsets is perpendicular slopes in practice",
    "Physics: field lines cross equipotentials at right angles; incidence/reflection normals are perpendicular constructions"
  ],
  summary: "Parallelism is equality of slopes (with different intercepts); perpendicularity is the negative reciprocal, m₁m₂ = −1, proved by rotating the slope triangle 90° (or by Pythagoras at the origin). Vertical/horizontal pairs are the stated exception the product rule can't reach. In general form, keep (A,B) for parallels and swap to (B,−A) for perpendiculars — then pin the constant with the required point. Slopes prove parallel sides; distances prove equal sides; together they classify every grid quadrilateral.",
  visuals: [
    { type: "steps", config: { title: "Rotation proof of m₁m₂ = −1", steps: [{ label: "Slope triangle", detail: "run 1, rise m" }, { label: "Rotate 90°", detail: "(1, m) → (−m, 1)" }, { label: "New slope", detail: "rise/run = 1/(−m)" }, { label: "= −1/m", detail: "negative reciprocal" }, { label: "Product", detail: "m × (−1/m) = −1 ∎" }] } },
    { type: "comparison", config: { title: "Same vs square", left: { name: "Parallel ∥", items: ["m₁ = m₂", "never meet", "rail lines", "keep A, B in Ax+By"] }, right: { name: "Perpendicular ⟂", items: ["m₁m₂ = −1", "meet at 90°", "corners, altitudes", "swap to B, −A"] } } },
    { type: "qa", config: { title: "Flip it right", pairs: [{ q: "⟂ to m = 4?", a: "<b>−1/4</b>" }, { q: "⟂ to m = −2/3?", a: "<b>3/2</b>" }, { q: "∥ to y = 5x − 2 through origin?", a: "<b>y = 5x</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "Slope of a line perpendicular to m = 3:", options: ["3", "−3", "1/3", "−1/3"], answer: 3, difficulty: 1, explanation: "Negative reciprocal: −1/3" },
    { type: "mcq", q: "Which is parallel to y = 2x + 1?", options: ["y = 2x + 5", "y = −2x + 1", "y = x/2", "y = 5 − 2x"], answer: 0, difficulty: 1, explanation: "Same slope 2, different intercept" },
    { type: "mcq", q: "Lines with slopes 2/5 and −5/2 are:", options: ["parallel", "perpendicular", "coincident", "vertical"], answer: 1, difficulty: 2, explanation: "Product = −1 → perpendicular" },
    { type: "mcq", q: "The line perpendicular to x = 7 is:", options: ["x = 3", "y = 3 (horizontal)", "x = −7", "vertical"], answer: 1, difficulty: 3, explanation: "Perpendicular to a vertical is horizontal: y = c" },
    { type: "tf", q: "y = 3x + 1 and 3y − 9x = 3 are parallel.", answer: false, difficulty: 3, explanation: "The second is y = 3x + 1 — the SAME line, not parallel distinct lines" },
    { type: "tf", q: "A line with slope −1 is perpendicular to a line with slope 1.", answer: true, difficulty: 2, explanation: "(−1)(1) = −1 ✓" },
    { type: "calc", q: "Line through (1,1) parallel to y = 4x − 2: give its y-intercept c.", answer: "-3", difficulty: 2, explanation: "y − 1 = 4(x − 1) → y = 4x − 3, c = −3" },
    { type: "calc", q: "y = kx + 1 ⟂ y = −x/5 + 3. Find k.", answer: "5", difficulty: 2, explanation: "k·(−1/5) = −1 → k = 5" },
    { type: "short", q: "Condition linking the slopes of two perpendicular lines (letters m1, m2).", answer: "m1*m2=-1|m1m2=-1", difficulty: 1, explanation: "Their product is −1" },
    { type: "concept", q: "Prove: the diagonals of a rectangle with corners (0,0),(a,0),(a,b),(0,b) are NOT perpendicular unless a = b.", answer: "slopes b/a and -b/a|product -b²/a²|equals -1 iff a=b|square case", difficulty: 3, explanation: "Diagonal slopes are b/a and −b/a; perpendicularity needs −b²/a² = −1 → a² = b² → a = b — a square. Rectangles that aren't squares have non-perpendicular diagonals" }
  ]
};

Lessons["g10-mathematics-um7-t5"] = {
  overview: "The circle — studied with compass and theorem since Unit 5 — gets its algebraic portrait: (x − a)² + (y − b)² = r². Every circle equation is the distance formula squared, and completing the square pulls the centre and radius out of any expanded form. Coordinate geometry and Euclidean circles finally shake hands.",
  objectives: [
    "Write (x−a)² + (y−b)² = r² from the distance formula",
    "Read centre and radius from standard-form equations",
    "Convert general form x² + y² + Dx + Ey + F = 0 by completing the square",
    "Find a circle from centre + point, or from three points (concept)",
    "Test whether a point lies on a given circle"
  ],
  simple: "A circle is 'all points at distance r from centre (a, b)'. Translate 'distance = r' with the distance formula and square both sides: (x − a)² + (y − b)² = r². That's the whole theory — the circle equation IS the distance formula in uniform. Reading it: (x − 2)² + (y + 5)² = 9 has centre (2, −5) — note the SIGNS FLIP inside — and radius 3 (the square root of the right side, another classic trap: 9 is r², not r). Given centre and one point on the circle? Compute the distance — that's r. Handed the expanded x² + y² − 4x + 10y − 7 = 0? Complete the square twice (x's and y's separately) to recover the centre-radius form. A point is on the circle iff its coordinates satisfy the equation — plug and check. And if completing the square gives a negative r², the 'circle' is imaginary — no points at all.",
  detailed: "<p><b>Derivation.</b> Locus definition: {(x,y) : √((x−a)² + (y−b)²) = r}. Squaring: (x − a)² + (y − b)² = r². Special case centre at origin: x² + y² = r². The signs: (y − b) with b = −5 becomes (y + 5) — the equation shows the OPPOSITE sign of the centre coordinate; read centres by 'what kills each bracket'.</p><p><b>General form.</b> Expanding standard: x² + y² − 2ax − 2by + (a² + b² − r²) = 0, i.e. x² + y² + Dx + Ey + F = 0 with D = −2a, E = −2b. Recovery by completing the square: x² + Dx → (x + D/2)² − D²/4, same for y; collect constants to get r² = (D/2)² + (E/2)² − F. Centre (−D/2, −E/2). If that r² comes out negative, no real circle exists (the 'circle' of radius √(−3) is empty — a valid exam answer: 'no locus').</p><p><b>Point membership & chords:</b> P on circle ⇔ (x_P − a)² + (y_P − b)² = r² exactly; inside if < r², outside if > — the three-way test. A diameter's endpoints satisfy: centre = midpoint (Unit 5's chord facts now have algebra: the perpendicular from centre to a chord bisects it, and half-chord² = r² − d²).</p><p><b>Three points determine a circle:</b> plug each into x² + y² + Dx + Ey + F = 0 — three linear equations in D, E, F (systems, next unit's neighbour). Geometrically: the centre is the circumcentre — intersection of two chords' perpendicular bisectors (Unit 5 t1's construction, now computed).</p><p><b>Tangents (bridge):</b> the tangent at point T on the circle is perpendicular to the radius CT — slope of CT is (y_T − b)/(x_T − a), flip-negate, point-slope at T. The distance from centre to any tangent line equals r — the Grade 11 distance-to-line formula will make that computational; for now the perpendicular-radius construction does it.</p>",
  keyTerms: [
    { term: "Standard form", def: "(x−a)² + (y−b)² = r² — centre (a,b), radius r" },
    { term: "General form", def: "x² + y² + Dx + Ey + F = 0; centre (−D/2, −E/2)" },
    { term: "Completing the square", def: "The recovery tool: pair x's and y's separately" },
    { term: "Point test", def: "Substitute: = r² on, < inside, > outside" },
    { term: "Imaginary circle", def: "r² < 0 after completing the square → empty locus" },
    { term: "Circumcircle", def: "The unique circle through three non-collinear points" }
  ],
  formulas: [
    {
      name: "Circle, standard form",
      formula: "(x − a)² + (y − b)² = r²",
      meaning: "Distance-from-centre squared equals radius squared",
      vars: [{ name: "(a,b)", meaning: "centre", unit: "coords" }, { name: "r", meaning: "radius", unit: "length" }],
      units: "length²",
      when: "Centre known — write it directly",
      example: "Centre (3, −1), r = 5: (x−3)² + (y+1)² = 25"
    },
    {
      name: "General → standard",
      formula: "x² + y² + Dx + Ey + F = 0 ⇒ centre (−D/2, −E/2), r² = D²/4 + E²/4 − F",
      meaning: "Complete the square in x and y",
      vars: [{ name: "F", meaning: "constant term", unit: "length²" }],
      units: "coords / length²",
      when: "The equation arrives expanded",
      example: "x² + y² − 6y − 7 = 0: centre (0,3), r² = 9 + 7 = 16 → r = 4"
    },
    {
      name: "Radius from centre + point",
      formula: "r² = (x₁ − a)² + (y₁ − b)²",
      meaning: "The point's distance to centre, squared",
      vars: [{ name: "(x₁,y₁)", meaning: "any point on the circle", unit: "coords" }],
      units: "length²",
      when: "Circle defined by centre and one rim point",
      example: "C(1,1), P(4,5): r² = 9 + 16 = 25"
    }
  ],
  workedExamples: [
    {
      problem: "Find centre and radius: (x − 4)² + (y + 2)² = 11.",
      given: "standard form",
      formula: "read off with sign flips; r = √(right side)",
      substitution: "centre (4, −2); r² = 11",
      calculation: "r = √11 ≈ 3.32",
      answer: "Centre (4, −2), radius √11 — don't write r = 11!"
    },
    {
      problem: "Circle centre (2, 5) passing through (5, 9): write the equation.",
      given: "centre + rim point",
      formula: "r² = Δx² + Δy²",
      substitution: "r² = 9 + 16 = 25",
      calculation: "(x − 2)² + (y − 5)² = 25",
      answer: "(x−2)² + (y−5)² = 25 (the 3-4-5 radius)"
    },
    {
      problem: "Find centre and radius of x² + y² + 6x − 8y + 9 = 0.",
      given: "general form",
      formula: "complete the square both pairs",
      substitution: "(x² + 6x + 9) + (y² − 8y + 16) = −9 + 9 + 16",
      calculation: "(x + 3)² + (y − 4)² = 16",
      answer: "Centre (−3, 4), r = 4 — the added 9 and 16 balance on both sides"
    },
    {
      problem: "Does P(1, 3) lie inside, on or outside x² + y² = 16?",
      given: "point and circle",
      formula: "compare x² + y² with r²",
      substitution: "1 + 9 = 10 vs 16",
      calculation: "10 < 16",
      answer: "Inside (distance √10 ≈ 3.16 < 4)"
    },
    {
      problem: "The diameter endpoints are (1, 2) and (7, 10). Write the circle's equation.",
      given: "two opposite rim points",
      formula: "centre = midpoint; r = half the distance",
      substitution: "C(4, 6); diameter = √(36 + 64) = 10 → r = 5",
      calculation: "(x − 4)² + (y − 6)² = 25",
      answer: "(x−4)² + (y−6)² = 25 — Unit 5's midpoint + distance, in algebra clothes"
    }
  ],
  commonMistakes: [
    "Centre of (x − 2)² + (y − 3)² = 25 read as (−2, −3) — the equation's signs are OPPOSITE the centre's",
    "Radius as 25 (the right side is r², not r)",
    "Completing the square: adding 9 and 16 to one side only of the equation",
    "Forgetting the x² and y² coefficients must be 1 — divide through if they're 2 or 5",
    "Declaring a circle when r² < 0 (empty locus — say so)",
    "Using the point-slope circle formula with the DIAMETER as r",
    "Testing point membership with distance but forgetting to compare against r (not r²) after square-rooting"
  ],
  applications: [
    "GPS trilateration: each satellite gives a distance sphere — your position is where three 'circles' meet (the phone math of Unit 5's locus)",
    "Radar/coverage rings: cell-tower and flood-light ranges drawn as circle equations on site plans",
    "Motion planning: robot reach envelopes are circles; collision = centre distance vs sum of radii",
    "Optics & acoustics: parabolic approximations near the vertex of circles; curved stage shells",
    "Epidemiology: exposure zones ('within 2 m of the case') are discs — the circle equation defines the boundary"
  ],
  summary: "The circle equation is the distance formula squared: (x − a)² + (y − b)² = r², with centre signs flipped from the equation and the right side being r². Completing the square (both variables, balanced additions) recovers centre (−D/2, −E/2) and r² = D²/4 + E²/4 − F from general form — negative r² means no circle. Points test by substitution (on/inside/outside), diameters give centres via midpoints, and three points fix a unique circle.",
  visuals: [
    { type: "steps", config: { title: "General → centre-radius", steps: [{ name: "", label: "Group x's and y's", detail: "move F to the right" }, { label: "Halve & square", detail: "(D/2)², (E/2)²" }, { label: "Add to BOTH sides", detail: "keep balance" }, { label: "Factor brackets", detail: "(x+D/2)² + (y+E/2)²" }, { label: "Read r²", detail: "right side after collecting" }] } },
    { type: "comparison", config: { title: "Reading the equation", left: { name: "(x−a)²+(y−b)²=r²", items: ["centre (a, b)", "radius √(right)", "signs FLIP", "instant sketch"] }, right: { name: "x²+y²+Dx+Ey+F=0", items: ["centre (−D/2, −E/2)", "r² = D²/4+E²/4−F", "complete the square", "check r² > 0 first"] } } },
    { type: "qa", config: { title: "On, in, out?", pairs: [{ q: "(3,4) vs x²+y²=25?", a: "<b>ON</b> — 9+16=25" }, { q: "(1,1) vs (x−2)²+y²=4?", a: "<b>inside</b> — 1+1=2<4" }, { q: "x²+y²=−4?", a: "<b>no circle</b> — empty" }] } }
  ],
  questions: [
    { type: "mcq", q: "Centre of (x + 1)² + (y − 6)² = 49:", options: ["(1, −6)", "(−1, 6)", "(−1, −6)", "(1, 6)"], answer: 1, difficulty: 1, explanation: "Signs flip: (−1, 6); radius 7" },
    { type: "mcq", q: "Radius of (x − 3)² + (y + 2)² = 10:", options: ["10", "5", "√10", "2√5"], answer: 2, difficulty: 2, explanation: "r² = 10 → r = √10" },
    { type: "mcq", q: "x² + y² − 8x + 4y = 0 has centre:", options: ["(4, −2)", "(−4, 2)", "(8, −4)", "(2, −4)"], answer: 0, difficulty: 2, explanation: "−D/2 = 4, −E/2 = −2 (r² = 16 + 4 = 20)" },
    { type: "mcq", q: "The point (0,0) lies ___ the circle (x−1)² + (y−1)² = 2:", options: ["outside", "on", "inside", "at the centre"], answer: 1, difficulty: 3, explanation: "(−1)² + (−1)² = 2 exactly — on the circle" },
    { type: "tf", q: "x² + y² + 2x + 4y + 20 = 0 represents a circle.", answer: false, difficulty: 3, explanation: "r² = 1 + 4 − 20 = −15 < 0 — empty locus, no circle" },
    { type: "tf", q: "Two distinct points determine a unique circle.", answer: false, difficulty: 2, explanation: "Infinitely many circles share a chord — three non-collinear points are needed" },
    { type: "calc", q: "Circle centre (0,0) through (5, −12): r² = ?", answer: "169", difficulty: 1, explanation: "25 + 144 = 169 (r = 13)" },
    { type: "calc", q: "Complete the square: x² + y² − 2y − 3 = 0. Give r.", answer: "2", difficulty: 2, explanation: "x² + (y−1)² = 4 → r = 2" },
    { type: "short", q: "Centre of x² + y² = 49 (ordered pair).", answer: "(0,0)", difficulty: 1, explanation: "Origin-centred: no linear terms" },
    { type: "concept", q: "Why does the equation (x−a)² + (y−b)² = r² have no x·y term, and what does that say about the shape?", answer: "axis aligned|no rotation|symmetric about centre|distance formula", difficulty: 3, explanation: "It comes straight from the distance formula — pure squared gaps — so the circle is perfectly symmetric about its centre with no tilt; an x·y term would signal a rotated ellipse, not a circle" }
  ]
};

Lessons["g10-mathematics-um7-t6"] = {
  overview: "Coordinate geometry's capstone: place a figure on axes cleverly, then attack real problems — areas of grid polygons, shortest paths via reflections, moving points and locus stories — with the algebra toolkit of this unit. The skill being graded is SETUP: good axes make hard problems easy.",
  objectives: [
    "Choose smart coordinate placements for geometric figures",
    "Compute polygon areas on the grid (box method and shoelace)",
    "Solve reflection/shortest-path problems with coordinates",
    "Model moving points and locus conditions algebraically",
    "Integrate distance, midpoint, slope and circle tools in one solution"
  ],
  simple: "The openers: put a figure on axes so the algebra behaves — a rectangle with a corner at the origin and sides along the axes, a triangle with its base on the x-axis and the height vertical, a symmetric shape centred at the origin. Coordinates chosen well cut the work in half. Areas: the box method encloses the polygon in a rectangle and subtracts the right triangles and trapezia around it — foolproof; the shoelace formula (sum of diagonal products, minus the other diagonals, halve the absolute) is the fast lane for vertices in order. Shortest-path classics: a spider walking from A to B via a wall — reflect B across the wall, draw the straight line to the reflection; the bounce point is where it crosses. Moving points: 'P moves so that PA = PB' — set the distance equation, simplify, and the locus appears (the perpendicular bisector, a LINE). Every problem is the same loop: place, translate geometry to equations, solve, translate back.",
  detailed: "<p><b>Placement strategy.</b> Exploit symmetry and right angles: align sides with axes (kills slope work), centre at origin (coordinates come in ± pairs), base on an axis (heights become single coordinates). A general triangle is best placed with vertices (0,0), (b, 0), (p, q) — area = ½·b·q immediately (base × vertical height). The art is choosing axes BEFORE computing; exam solutions that 'set up coordinates with AB on the x-axis' earn the method mark in the placement itself.</p><p><b>Shoelace.</b> For vertices (x₁,y₁)…(xₙ,yₙ) in order (clockwise or counter): 2A = |Σ(x_i·y_{i+1} − x_{i+1}·y_i)|. For a triangle: A = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|. The box method (enclose, subtract corner pieces) is slower but self-verifying — use it to check shoelace on exams until trust is built. Collinearity test: the triangle area formula returns 0 exactly when three points are collinear — a bonus tool.</p><p><b>Reflection & shortest paths.</b> Reflecting (x, y) across the x-axis → (x, −y); across y-axis → (−x, y); across y = x → (y, x). The river-and-farm problem (walk to river, then to barn, shortest total): reflect the barn across the river line, straight-line distance to the reflection IS the minimal walk, touching the river where the segment crosses. Proof: any other touch point makes a broken path equal (by reflection) to a bent route longer than the straight one — triangle inequality again.</p><p><b>Locus algebra.</b> 'P equidistant from A(1,3) and B(5,7)': √((x−1)² + (y−3)²) = √((x−5)² + (y−7)²); square, expand, cancel x² + y² → a LINEAR equation — the perpendicular bisector (slope −1 vs AB's 1, through midpoint (3,5) ✓). 'P at distance 4 from C': the circle. 'Right angle at P over fixed AB': the circle with diameter AB minus A, B (Thales in coordinates). Translating words → equations → recognized shapes is the unit's final fluency.</p><p><b>Mixed-figure examples:</b> proving a midpoint theorem by coordinates (place triangle at (0,0),(2b,0),(2c,2d): midpoints (b,0), (c,d) — segment slope d/(c−b) equals the third side's, and length is half); proving parallelogram diagonals bisect (midpoints coincide by one line each). Coordinate PROOFs replace clever constructions with patient algebra — the trade Descartes offered.</p>",
  keyTerms: [
    { term: "Smart placement", def: "Axes chosen to exploit symmetry, right angles, bases" },
    { term: "Box method", def: "Enclose in a rectangle, subtract the surrounding pieces" },
    { term: "Shoelace formula", def: "½|Σ x_i y_{i+1} − Σ x_{i+1} y_i| for ordered vertices" },
    { term: "Reflection rules", def: "(x,−y), (−x,y), (y,x) across the three classic mirrors" },
    { term: "Shortest-path trick", def: "Reflect the target; straight line to the reflection" },
    { term: "Locus translation", def: "Words → distance equation → recognized curve/line" }
  ],
  formulas: [
    {
      name: "Triangle area (coordinates)",
      formula: "A = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|",
      meaning: "Shoelace specialized to three vertices",
      vars: [{ name: "absolute value", meaning: "order of vertices may flip the sign", unit: "—" }],
      units: "area",
      when: "Any grid triangle",
      example: "(1,1),(5,2),(3,6): A = ½|1(2−6) + 5(6−1) + 3(1−2)| = ½|−4 + 25 − 3| = 9"
    },
    {
      name: "Reflections",
      formula: "x-axis: (x, −y) | y-axis: (−x, y) | y = x: (y, x)",
      meaning: "Flip the coordinate the mirror doesn't fix",
      vars: [{ name: "mirror", meaning: "the reflecting line", unit: "—" }],
      units: "coords",
      when: "Shortest paths, symmetry proofs",
      example: "B(4, 7) across x-axis → (4, −7)"
    },
    {
      name: "Equidistant locus",
      formula: "PA = PB ⇒ linear equation (perpendicular bisector)",
      meaning: "Squared distances cancel their x² + y² terms",
      vars: [{ name: "A, B", meaning: "fixed points", unit: "coords" }],
      units: "—",
      when: "'Same distance from two places' stories",
      example: "A(0,0), B(4,0) → x = 2 (the vertical bisector)"
    }
  ],
  workedExamples: [
    {
      problem: "Find the area of quadrilateral A(1,1), B(6,2), C(5,7), D(2,5) — then verify by splitting along diagonal AC.",
      given: "four vertices in order",
      formula: "shoelace: A = ½|x_A(y_B−y_C) … cyclic|; then triangles ABC + ACD",
      substitution: "shoelace: ½|1(2−7) + 6(7−5) + 5(5−1) + 2(1−2)| = ½|−5 + 12 + 20 − 2| = ½·25… recompute cyclic: x_i y_{i+1} sum = 1·2 + 6·7 + 5·5 + 2·1 = 71; y_i x_{i+1} sum = 1·6 + 2·5 + 7·2 + 5·1 = 35",
      calculation: "A = ½|71 − 35| = 18. Check: split ABC = ½|1(2−7) + 6(7−1) + 5(1−2)| = 13; ACD = ½|1(7−5) + 5(5−1) + 2(1−7)| = 5; 13 + 5 = 18 ✓",
      answer: "18 square units — shoelace fast lane, triangle-split as the self-check"
    },
    {
      problem: "A spider at A(2, 3) must touch the x-axis then reach B(6, 7). Shortest total walk?",
      given: "reflection setup",
      formula: "reflect B → B′(6, −7); distance AB′",
      substitution: "AB′ = √((6−2)² + (−7−3)²) = √(16 + 100)",
      calculation: "= √116 = 2√29 ≈ 10.8",
      answer: "2√29 ≈ 10.8, touching the axis where the straight line crosses (x = 3.5)"
    },
    {
      problem: "Find the locus of P with PA = PB for A(−1, 0), B(3, 4), and verify it's the perpendicular bisector.",
      given: "two fixed points",
      formula: "square both distances",
      substitution: "(x+1)² + y² = (x−3)² + (y−4)² → 2x + 1 = −6x + 9 − 8y + 16",
      calculation: "8x + 8y = 24 → x + y = 3",
      answer: "Line x + y = 3: slope −1 (AB slope 1 ✓ ⟂), passes through midpoint (1, 2) ✓"
    },
    {
      problem: "Prove by coordinates: the midpoints of a triangle's sides form a triangle with ¼ the area.",
      given: "vertices (0,0), (2b, 0), (2c, 2d)",
      formula: "midpoints (b,0), (b+c, d), (c, d); shoelace",
      substitution: "A_mid = ½|b(d − d) + (b+c)(d − 0) + c(0 − d)| = ½|(b+c)d − cd|",
      calculation: "= ½|bd| = bd/2; A_orig = ½·2b·2d = 2bd",
      answer: "ratio (bd/2)/(2bd) = ¼ ∎ — placement made it a three-line proof"
    },
    {
      problem: "Triangle with vertices (0,0), (8,0), (3,6): find the area and the centroid.",
      given: "base on x-axis",
      formula: "A = ½·base·height; G = average",
      substitution: "A = ½·8·6; G = (11/3, 2)",
      calculation: "A = 24",
      answer: "Area 24, centroid (11/3, 2) — base-on-axis placement made height a single coordinate"
    }
  ],
  commonMistakes: [
    "Shoelace with vertices OUT of order (around the perimeter) — scrambled order computes nonsense areas",
    "Forgetting the absolute value / ½ in shoelace (factor errors of 2)",
    "Reflecting the WRONG point in path problems (reflect the far target, keep the start)",
    "Locus algebra: expanding squares wrongly ((x−3)² ≠ x² − 9) so the linear equation mis-simplifies",
    "Box method: subtracting the wrong corner shapes (draw and label every piece)",
    "Placement laziness: axes through random points, then drowning in fractions — set up FIRST",
    "Reporting the reflection distance without confirming the crossing point lies on the actual segment (boundary cases)"
  ],
  applications: [
    "Land survey: plot areas from boundary coordinates (shoelace is literally the surveyor's formula — 'shoelace' from the criss-cross multiplication pattern)",
    "Robotics/path planning: shortest paths with bounce constraints use reflection; Voronoi boundaries are equidistant loci",
    "GIS & mapping: polygon area tools (national statistics, farm plots) run shoelace on GPS vertex lists",
    "Game AI: line-of-sight and bounce-shot problems are reflection geometry in code",
    "Architecture: site plans place buildings on grid axes; setbacks are locus conditions ('within 5 m of the road')"
  ],
  summary: "Coordinate problem-solving is a loop: place axes to exploit symmetry, translate geometry (distances, slopes, areas, reflections) into equations, solve, and interpret back. Shoelace/box methods measure any grid polygon; reflection turns bounce-paths into straight lines; equidistance conditions collapse to the perpendicular bisector because squared terms cancel. A well-chosen coordinate system is half the proof — Descartes' bargain: patience with algebra replaces genius with construction.",
  visuals: [
    { type: "steps", config: { title: "The modelling loop", steps: [{ label: "Place axes", detail: "symmetry, base on axis" }, { label: "Translate", detail: "geometry → coordinates" }, { label: "Equations", detail: "distance/slope/area tools" }, { label: "Solve", detail: "algebra honestly" }, { label: "Interpret", detail: "answer in the story's units" }] } },
    { type: "comparison", config: { title: "Area tools", left: { name: "Box method", items: ["enclose + subtract", "visual, self-checking", "works for any polygon", "slower but safe"] }, right: { name: "Shoelace", items: ["½|Σ xᵢyᵢ₊₁ − Σ xᵢ₊₁yᵢ|", "needs ordered vertices", "one-line computation", "surveyor's standard"] } } },
    { type: "qa", config: { title: "Reflex table", pairs: [{ q: "Reflect (3, −5) in x-axis?", a: "<b>(3, 5)</b>" }, { q: "PA = PB locus?", a: "<b>perpendicular bisector</b>" }, { q: "Area (0,0),(4,0),(0,3)?", a: "<b>6</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "Area of triangle (0,0), (5,0), (2,4):", options: ["20", "10", "12", "8"], answer: 1, difficulty: 1, explanation: "½ · base 5 · height 4 = 10" },
    { type: "mcq", q: "Reflection of (4, −7) across the y-axis:", options: ["(4, 7)", "(−4, −7)", "(−4, 7)", "(7, −4)"], answer: 1, difficulty: 1, explanation: "y-axis mirror flips x only" },
    { type: "mcq", q: "The locus PA = PB is:", options: ["a circle", "the perpendicular bisector of AB", "line AB", "a midpoint"], answer: 1, difficulty: 2, explanation: "Equidistant points form the perpendicular bisector" },
    { type: "mcq", q: "Shoelace requires vertices:", options: ["alphabetical", "in order around the perimeter", "starting at origin", "clockwise only"], answer: 1, difficulty: 2, explanation: "Ordered traversal (either direction) — the absolute value handles CW/CCW" },
    { type: "tf", q: "Three collinear points give shoelace area 0.", answer: true, difficulty: 2, explanation: "Degenerate triangle — the formula doubles as a collinearity test" },
    { type: "tf", q: "The shortest A→wall→B path equals the straight distance from A to B's reflection.", answer: true, difficulty: 2, explanation: "Reflection preserves the second leg; the straight line wins" },
    { type: "calc", q: "Quadrilateral (0,0),(4,0),(4,3),(0,3): area by shoelace or box?", answer: "12", difficulty: 1, explanation: "Rectangle 4 × 3 = 12" },
    { type: "calc", q: "Triangle (1,2),(5,2),(1,8): area?", answer: "12", difficulty: 2, explanation: "Right triangle legs 4 and 6: ½·24 = 12" },
    { type: "short", q: "Locus of points at distance 5 from the origin: give the equation.", answer: "x^2+y^2=25|x²+y²=25", difficulty: 1, explanation: "Circle centre origin, radius 5" },
    { type: "concept", q: "Explain why the equidistance equation PA = PB always simplifies to a LINE (the x² and y² terms vanish).", answer: "squares cancel|same coefficients|linear after expanding|bisector", difficulty: 3, explanation: "Both squared distances expand with identical x² + y² terms (coefficients 1 on each side), so they cancel — leaving a first-degree equation, which is a line: geometrically, the perpendicular bisector" }
  ]
};
