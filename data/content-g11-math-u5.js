/* Content: Grade 11 Mathematics — Unit 5: Vectors (5 topics) */
window.Lessons = window.Lessons || {};

Lessons["g11-mathematics-um5-t1"] = {
  overview: "Scalars vs vectors: magnitude-only quantities vs magnitude-and-direction ones. Vector notation, equality, and the resultant of vector additions — the G10 foundation G11 builds on.",
  objectives: [
    "Distinguish scalars from vectors with examples",
    "Write vectors in component and column form",
    "State when two vectors are equal",
    "Add vectors geometrically (triangle/parallelogram) and by components",
    "Find resultants and the magnitude |v| = √(x²+y²)"
  ],
  simple: "A SCALAR is a number with units but no direction: mass 5 kg, temperature 30°C, time 2 s, speed 60 km/h. A VECTOR has magnitude AND direction: velocity 60 km/h north, force 10 N at 30°, displacement. Notation: v⃗ or bold **v**; from points A to B it's AB→; in components v = (x, y) or the column [x; y] — meaning 'move x right, y up'. EQUALITY: two vectors are equal iff their components match — a vector doesn't care WHERE it sits, only its length and pointing (a slide of the same arrow is the same vector). ADDITION: put tail to head (triangle rule) — or just add components: (1,2)+(3,−1) = (4,1). The parallelogram rule is the same sum drawn from a common tail; the DIAGONAL is the resultant. Two forces 3 N east and 4 N north give a resultant of 5 N (Pythagoras!) at tan⁻¹(4/3) = 53.1° north of east. NEGATIVE: −v is same length, opposite direction; subtraction = add the negative. MAGNITUDE: |v| = √(x² + y²) — the length of the arrow. Zero vector (0,0): no length, no direction — the identity of addition. Everything in this unit (dot product, cross product, geometry proofs) is built on these arrows.",
  detailed: "<p><b>Component form.</b> v = x·i + y·j where i = (1,0), j = (0,1) are the unit basis vectors — components are the coordinates of the head when the tail sits at the origin. AB→ from A(a₁,a₂) to B(b₁,b₂) = (b₁−a₁, b₂−a₂): head minus tail. This is why position doesn't define a vector: only the difference does.</p><p><b>Addition laws.</b> Component-wise addition mirrors the geometric tail-to-head construction (both give the same diagonal). Properties: commutative u+v = v+u (parallelogram symmetry), associative (u+v)+w = u+(v+w) (any path around the polygon), identity 0, inverse −v. Resultant of several vectors: add all components — the closing side of the polygon of forces.</p><p><b>Magnitude & direction.</b> |v| = √(x²+y²) from Pythagoras; direction θ = tan⁻¹(y/x) with quadrant care (a vector (−1,−1) points at 225°, not 45°). Bearing language (N30°E) is the navigation version — convert to components with sin/cos of the bearing.</p><p><b>Scalar multiplication.</b> k·v scales the length by |k| and flips direction if k < 0; components scale: k(x,y) = (kx, ky). Parallel vectors: v = k·u for some scalar k (one is a scaled copy) — the test used everywhere in collinearity proofs. Unit vector in v's direction: v/|v| — direction without magnitude.</p>",
  keyTerms: [
    { term: "Scalar", def: "magnitude only (mass, time, speed)" },
    { term: "Vector", def: "magnitude + direction (velocity, force)" },
    { term: "Resultant", def: "the sum vector" },
    { term: "Unit vector", def: "v/|v| — length 1" },
    { term: "Parallel test", def: "v = k·u" }
  ],
  workedExamples: [
    {
      problem: "Classify: 20 kg, 90 km/h south, 5 s, a 12 N push at 45°.",
      given: "four quantities",
      formula: "direction test",
      substitution: "mass: scalar; velocity: vector; time: scalar; push: vector",
      calculation: "2 each",
      answer: "Scalars: 20 kg, 5 s. Vectors: 90 km/h south, 12 N at 45°"
    },
    {
      problem: "A = (3, −2), B = (−1, 4). Find AB→ and |AB→|.",
      given: "points",
      formula: "head − tail",
      substitution: "AB→ = (−1−3, 4−(−2)) = (−4, 6); |AB→| = √(16+36)",
      calculation: "√52",
      answer: "AB→ = (−4, 6), length 2√13 ≈ 7.21"
    },
    {
      problem: "Forces (5, 3) and (−2, 4) N act on a point. Resultant and its magnitude?",
      given: "two forces",
      formula: "component sum",
      substitution: "R = (3, 7); |R| = √(9+49)",
      calculation: "√58",
      answer: "R = (3, 7) N, ≈ 7.62 N at tan⁻¹(7/3) ≈ 66.8°"
    },
    {
      problem: "Show (2, 3) and (6, 9) are parallel; find the unit vector in (6,9)'s direction.",
      given: "scaling",
      formula: "v = k·u; v/|v|",
      substitution: "(6,9) = 3·(2,3) ✓; |(6,9)| = √117 = 3√13",
      calculation: "(6,9)/(3√13)",
      answer: "Parallel (k = 3); unit = (2/√13, 3/√13)"
    },
    {
      problem: "Plane 500 km/h heading east, wind 100 km/h north. Ground velocity?",
      given: "perpendicular vectors",
      formula: "resultant",
      substitution: "v = (500, 100); |v| = √(250000+10000)",
      calculation: "√260000",
      answer: "≈ 509.9 km/h at 11.3° north of east"
    }
  ],
  commonMistakes: [
    "Calling speed a vector — speed is the scalar MAGNITUDE of velocity",
    "Thinking a vector's position matters — same arrow anywhere = same vector",
    "AB→ = tail − head — it's head minus tail (B − A)",
    "Quadrant blindness: tan⁻¹(y/x) for (−1,−1) needs +180°",
    "Adding magnitudes instead of vectors: |u+v| ≠ |u|+|v| unless parallel",
    "Forgetting −v flips direction, not just sign of one component"
  ],
  applications: [
    "Navigation: wind-corrected headings and river-crossing problems",
    "Statics: forces in equilibrium sum to zero (polygon closes)",
    "Physics: projectile motion split into horizontal/vertical components",
    "Everyday: pushing a sled at an angle — only the horizontal component moves it"
  ],
  summary: "Scalars have magnitude; vectors add direction. Components (x, y) or column form encode the arrow; equality = matching components; AB→ = B − A. Addition is component-wise = tail-to-head = the parallelogram diagonal (the resultant). |v| = √(x²+y²), direction from tan⁻¹ with quadrant care, unit vector v/|v|, parallel iff v = k·u. The polygon of forces closes at zero in equilibrium — the seed of every application in this unit.",
  visuals: [
    { type: "comparison", config: { title: "Scalar vs vector", left: { name: "Scalars", items: ["mass 5 kg", "time 2 s", "speed 60 km/h", "temperature"] }, right: { name: "Vectors", items: ["velocity 60 N of E", "force 10 N at 30°", "displacement (3,−2)", "acceleration"] } } }
  ],
  questions: [
    { type: "mcq", q: "Which is a vector?", options: ["20 kg", "9.8 m/s² downward", "30°C", "5 s"], answer: 1, difficulty: 1, explanation: "Acceleration has direction" },
    { type: "mcq", q: "AB→ with A(1,1), B(4,5):", options: ["(3,4)", "(−3,−4)", "(5,6)", "(4,5)"], answer: 0, difficulty: 1, explanation: "head − tail" },
    { type: "mcq", q: "|v| for v = (5, 12):", options: ["13", "17", "√119", "8.5"], answer: 0, difficulty: 1, explanation: "√169 = 13" },
    { type: "mcq", q: "Two vectors are equal when:", options: ["same length", "same direction", "both match", "parallel"], answer: 2, difficulty: 2, explanation: "Components equal" },
    { type: "tf", q: "A vector can be moved anywhere and stay the same vector.", answer: true, difficulty: 2, explanation: "Free vectors" },
    { type: "tf", q: "|u+v| always equals |u|+|v|.", answer: false, difficulty: 2, explanation: "Only when parallel same direction" },
    { type: "short", q: "The sum of all sides of a closed polygon of forces is the ___ vector:", answer: "zero", difficulty: 2, explanation: "Zero vector" },
    { type: "short", q: "A vector of length 1 is called a ___ vector:", answer: "unit", difficulty: 1, explanation: "Unit" },
    { type: "calc", q: "Add (2, −1) + (−5, 3) and give its magnitude.", answer: "5", difficulty: 2, explanation: "(−3, 2); √13 ≈ 3.61" },
    { type: "concept", q: "Why is speed a scalar but velocity a vector?", answer: "direction|magnitude|sign", difficulty: 2, explanation: "Speed reports only how fast (the magnitude of velocity); velocity also fixes which way — two cars at 60 km/h in opposite directions share speed but have opposite velocities" }
  ]
};

Lessons["g11-mathematics-um5-t2"] = {
  overview: "Representing vectors: column vectors, position vectors, components on axes, i-j notation, and drawing vectors from descriptions (magnitude + bearing) — the language of vector geometry.",
  objectives: [
    "Write vectors as columns [x; y] and as xi + yj",
    "Use position vectors of points relative to an origin",
    "Resolve a vector into components along axes",
    "Convert between magnitude-direction and component form",
    "Extend to 3D: (x, y, z) and i, j, k"
  ],
  simple: "Four outfits for the same vector. (1) ARROW: drawn on axes from origin to (x, y). (2) ORDERED PAIR: v = (3, −2). (3) COLUMN: [3; −2] — the matrix-style stack (plays with matrices from U3). (4) BASIS: v = 3i − 2j where i = (1,0), j = (0,1) are the unit vectors along the axes. POSITION VECTORS: with an origin O, every point P has position vector OP→ — written as p — and then PQ→ = q − p (the difference of position vectors — this is the workhorse of vector geometry proofs). RESOLVING: a vector of magnitude m at angle θ to the x-axis has components (m cos θ, m sin θ) — the horizontal and vertical shadows. Example: force 20 N at 30° → (20 cos30°, 20 sin30°) = (17.3, 10). BACKWARD: from components, m = √(x²+y²), θ = tan⁻¹(y/x). 3D: add a third axis — v = (x, y, z) = xi + yj + zk; position vectors and differences work identically. Bearings (navigation): N θ E means start north, turn θ toward east — convert carefully; the angle is from NORTH, not the x-axis.",
  detailed: "<p><b>Why components are the vector.</b> Once axes are fixed, the arrow IS its components — equality, addition, scaling all happen component-wise, which is why analytic geometry works. Changing axes changes the numbers (a rotated grid re-expresses the same arrow) — the vector is the geometric object; components are its coordinates in a chosen basis.</p><p><b>Position-vector algebra.</b> For points with position vectors a, b: AB→ = b − a; the midpoint M of AB has position vector (a+b)/2; a point dividing AB in ratio m:n has position (n·a + m·b)/(m+n) — the section formula (memorize the crossed pattern: the ratio weights the FAR endpoint). These three facts prove most collinearity/midpoint exercises without coordinates.</p><p><b>Resolution mechanics.</b> x = m cos θ, y = m sin θ (θ from +x axis). On inclined planes: weight mg resolves into mg sin α down-slope and mg cos α perpendicular — the classic physics use. A vector can be resolved along ANY two non-parallel directions (not just perpendicular axes) — e.g. along two ropes in a statics problem; perpendicular resolution is just the default.</p><p><b>3D extension.</b> |v| = √(x²+y²+z²); direction cosines l, m, n = components/|v| with l²+m²+n² = 1. The box picture: components are the edges of the rectangular box whose diagonal is v.</p>",
  keyTerms: [
    { term: "Column vector", def: "[x; y] stacked form" },
    { term: "Position vector", def: "OP→ of point P from origin" },
    { term: "Resolve", def: "split into components" },
    { term: "Section formula", def: "(n·a + m·b)/(m+n)" },
    { term: "Direction cosines", def: "3D component ratios" }
  ],
  workedExamples: [
    {
      problem: "Write the vector from P(2, −1) to Q(5, 3) in all four forms.",
      given: "two points",
      formula: "q − p",
      substitution: "(3, 4) = [3; 4] = 3i + 4j; arrow from origin to (3,4)",
      calculation: "length 5",
      answer: "(3,4), column [3;4], 3i+4j, |v| = 5"
    },
    {
      problem: "Resolve a 40 N force at 60° above horizontal.",
      given: "magnitude + angle",
      formula: "(m cos θ, m sin θ)",
      substitution: "(40·0.5, 40·(√3/2))",
      calculation: "(20, 34.6)",
      answer: "Horizontal 20 N, vertical ≈ 34.6 N"
    },
    {
      problem: "a = (1, 2), b = (7, −2). Find AB→, midpoint, and the point dividing AB 1:2 from A.",
      given: "position vectors",
      formula: "b−a; (a+b)/2; section",
      substitution: "AB→ = (6, −4); mid = (4, 0); divide 1:2 → (2a + 1b)/3 = (2+7, 4−2)/3",
      calculation: "(3, 2/3)",
      answer: "AB→ = (6,−4), midpoint (4,0), section point (3, ⅔)"
    },
    {
      problem: "A vector has components (−6, 8). Find magnitude and direction.",
      given: "components",
      formula: "√, tan⁻¹",
      substitution: "|v| = √(36+64) = 10; reference angle tan⁻¹(8/6) = 53.1° in quadrant II",
      calculation: "126.9°",
      answer: "10 at 126.9° from +x (or 53.1° north of west)"
    },
    {
      problem: "In 3D: A(1,0,2), B(4,3,6). Find AB→ and |AB→|.",
      given: "3D points",
      formula: "differences",
      substitution: "AB→ = (3, 3, 4); |AB→| = √(9+9+16)",
      calculation: "√34",
      answer: "(3,3,4), length √34 ≈ 5.83"
    }
  ],
  commonMistakes: [
    "Mixing the forms: [x; y] column vs (x, y) row — don't transpose mid-calculation",
    "Position vector of P vs vector AB→ — OP→ has tail at origin",
    "cos/sin swapped when resolving (x gets cos, y gets sin — for angle from x-axis)",
    "Section formula ratio crossed wrong: 1:2 from A weights A by 2",
    "Bearing angles measured from the x-axis instead of north",
    "3D magnitude missing the z² term"
  ],
  applications: [
    "Statics: resolving weights on slopes and in two-rope suspensions",
    "Navigation: bearing-to-component conversion for flight plans",
    "Computer graphics: 3D position vectors and camera transforms",
    "Surveying: point positions as vectors from a benchmark origin"
  ],
  summary: "Vectors wear four outfits: arrow, pair (x,y), column [x;y], and basis xi+yj — all interchangeable once axes are fixed. Position vectors anchor points to an origin: AB→ = b − a, midpoint (a+b)/2, section (na+mb)/(m+n). Resolution: (m cos θ, m sin θ) from magnitude-direction; Pythagoras + tan⁻¹ back. 3D just adds a coordinate and zk. Master the translations between forms — every later topic (dot product, proofs, mechanics) runs on them.",
  visuals: [
    { type: "flowChart", config: { title: "Form translations", steps: [{ label: "m, θ", detail: "magnitude-direction" }, { label: "(x, y)", detail: "components" }, { label: "xi + yj", detail: "basis" }, { label: "[x; y]", detail: "column" }] } }
  ],
  questions: [
    { type: "mcq", q: "AB→ for A(1,1), B(3,5):", options: ["(2,4)", "(4,6)", "(−2,−4)", "(3,5)"], answer: 0, difficulty: 1, explanation: "B − A" },
    { type: "mcq", q: "Components of magnitude 10 at 0°:", options: ["(0,10)", "(10,0)", "(5,5)", "(10,10)"], answer: 1, difficulty: 1, explanation: "cos0 = 1" },
    { type: "mcq", q: "Midpoint position vector of a, b:", options: ["a+b", "(a+b)/2", "b−a", "ab/2"], answer: 1, difficulty: 1, explanation: "Average" },
    { type: "mcq", q: "3i − 4j has length:", options: ["5", "7", "1", "−1"], answer: 0, difficulty: 1, explanation: "√25" },
    { type: "tf", q: "Components of the same vector change if you rotate the axes.", answer: true, difficulty: 3, explanation: "Coordinates are basis-dependent" },
    { type: "tf", q: "A bearing of N 30° E is a 30° angle from the +x axis.", answer: false, difficulty: 3, explanation: "Bearings are measured FROM NORTH: N30°E is 30° from the +y-axis, i.e. 60° from +x — only N45°E coincides with 45° from both" },
    { type: "short", q: "x-component of m at angle θ = m·___", answer: "cos", difficulty: 1, explanation: "cos θ" },
    { type: "short", q: "The vectors i, j are unit vectors along the ___ axes:", answer: "coordinate", difficulty: 1, explanation: "Coordinate (x and y)" },
    { type: "calc", q: "Point dividing A(0,0) to B(6,9) in ratio 1:2 from A?", answer: "(2,3)", difficulty: 2, explanation: "(2A+B)/3 = (6,9)/3" },
    { type: "concept", q: "Explain why AB→ = b − a using position vectors.", answer: "OP→|difference|tail-to-head", difficulty: 2, explanation: "OA→ + AB→ = OB→ (triangle path from O to A then to B), so AB→ = OB→ − OA→ = b − a — the displacement from A to B is the difference of their positions" }
  ]
};

Lessons["g11-mathematics-um5-t3"] = {
  overview: "The scalar (dot) product u·v = |u||v|cosθ = x₁x₂+y₁y₂ — a number from two vectors — and the vector (cross) product u×v with magnitude |u||v|sinθ and a perpendicular direction.",
  objectives: [
    "Compute dot products geometrically and by components",
    "Use u·v = 0 as the perpendicularity test",
    "Find angles between vectors with cos θ = u·v/(|u||v|)",
    "Compute cross products via the determinant pattern",
    "Interpret |u×v| as area and its direction as perpendicular"
  ],
  simple: "Two ways to multiply vectors. THE DOT (scalar) PRODUCT: u·v = |u||v|cos θ — multiply lengths, times cosine of the angle — a SCALAR. Component recipe: u·v = x₁x₂ + y₁y₂ (multiply matching parts, add). Example: (1,2)·(3,4) = 3+8 = 11. Superpowers: (1) PERPENDICULAR TEST — u·v = 0 ⟺ u ⊥ v (cos 90° = 0): (1,2)·(2,−1) = 2−2 = 0 → right angle, no drawing needed. (2) ANGLE FINDING — cos θ = u·v/(|u||v|). (3) WORK — force·displacement = the physics dot product. THE CROSS (vector) PRODUCT (3D): u×v is a VECTOR perpendicular to both, magnitude |u||v|sin θ, direction by right-hand rule. Compute with the symbolic determinant |i j k; x₁ y₁ z₁; x₂ y₂ z₂|. In 2D the 'cross' is the signed number x₁y₂ − x₂y₁ — which is exactly the 2×2 determinant = signed parallelogram AREA. Superpowers: area of parallelogram/triangle, coplanarity (scalar triple product u·(v×w) = det = 0), and normals to planes. Remember: dot → number, cross → vector; dot detects perpendicularity, cross CREATES it.",
  detailed: "<p><b>Dot product algebra.</b> u·v = x₁x₂+y₁y₂+z₁z₂ (components) = |u||v|cos θ (geometry) — the two definitions are equal (prove via the cosine rule on the triangle u, v, u−v). Properties: commutative, distributive over +, u·u = |u|². Scalar projections: comp of u on v = u·v/|v| — the shadow length; the projection vector = (u·v/|v|²)v. Cauchy-Schwarz: |u·v| ≤ |u||v| — equality when parallel.</p><p><b>Cross product mechanics.</b> u×v = (y₁z₂−z₁y₂, z₁x₂−x₁z₂, x₁y₂−y₁x₂) — the cofactor expansion of the symbolic determinant. Anti-commutative: v×u = −(u×v) (right-hand rule flips); u×u = 0; |u×v| = |u||v|sin θ = parallelogram area. Direction: perpendicular to BOTH inputs (check: (u×v)·u = 0 always). Parallel vectors → zero cross product (sin 0 = 0) — the parallel test in 3D.</p><p><b>Triple products.</b> Scalar triple u·(v×w) = det of the 3×3 of rows — signed parallelepiped volume; = 0 ⟺ coplanar. Vector triple a×(b×c) = b(a·c) − c(a·b) — the BAC-CAB rule (extension).</p><p><b>2D special case.</b> The signed cross x₁y₂ − x₂y₁: positive if v₂ is counterclockwise from v₁; magnitude = parallelogram area; half = triangle area — the determinant-geometry link from U4-t7.</p>",
  keyTerms: [
    { term: "Dot product", def: "u·v = |u||v|cosθ = Σx₁x₂" },
    { term: "Orthogonal test", def: "u·v = 0 ⟺ perpendicular" },
    { term: "Cross product", def: "perpendicular vector, |u||v|sinθ" },
    { term: "Right-hand rule", def: "curl u→v, thumb = u×v" },
    { term: "Scalar triple", def: "u·(v×w) = volume/det" }
  ],
  workedExamples: [
    {
      problem: "(2, 3)·(−3, 2) = ? What does it say geometrically?",
      given: "2D vectors",
      formula: "Σ products",
      substitution: "−6 + 6 = 0",
      calculation: "0",
      answer: "Dot = 0 → the vectors are perpendicular (they're (2,3) rotated 90°)"
    },
    {
      problem: "Angle between (1, 0) and (1, 1)?",
      given: "dot route",
      formula: "cos θ = u·v/(|u||v|)",
      substitution: "1/(1·√2)",
      calculation: "√2/2",
      answer: "θ = 45°"
    },
    {
      problem: "Compute (1,2,3)×(0,1,4).",
      given: "3D cross",
      formula: "determinant pattern",
      substitution: "i(8−3) − j(4−0) + k(1−0)",
      calculation: "(5, −4, 1)",
      answer: "(5, −4, 1) — check ⊥: ·(1,2,3) = 5−8+3 = 0 ✓"
    },
    {
      problem: "Area of triangle with vertices at position vectors (1,0), (0,1), (−1,−1)?",
      given: "2D cross",
      formula: "½|x₁y₂−x₂y₁|",
      substitution: "edges from (1,0): (−1,1) and (−2,−1); cross = (−1)(−1)−(1)(−2) = 1+2",
      calculation: "3/2",
      answer: "1.5 square units"
    },
    {
      problem: "Work done by force (3, 4) N moving an object (5, 0) m.",
      given: "physics dot",
      formula: "W = F·d",
      substitution: "15 + 0",
      calculation: "15",
      answer: "15 J — only the horizontal force component (3 N) does work"
    }
  ],
  commonMistakes: [
    "Dot vs cross confusion: dot gives a scalar, cross a vector",
    "u·v = 0 concluded as 'one vector is zero' — perpendicularity is the third option",
    "Cross product sign/order: v×u = −(u×v) — order matters",
    "Forgetting the MINUS on the j cofactor in the determinant expansion",
    "Using cos for cross and sin for dot — dot/cos, cross/sin",
    "Angle between vectors: place tails together first (not head-to-tail)"
  ],
  applications: [
    "Physics: work W = F·d, magnetic force F = qv×B",
    "Graphics: lighting via dot(normal, light); surface normals via cross",
    "Engineering: torque τ = r×F",
    "Geometry: right-angle and coplanarity tests without drawing"
  ],
  summary: "Dot product: u·v = Σx₁x₂ = |u||v|cosθ — a scalar; zero ⟺ perpendicular; the angle formula and work. Cross product: u×v = symbolic determinant — a vector perpendicular to both with magnitude |u||v|sinθ = parallelogram area; anti-commutative; zero ⟺ parallel (3D). In 2D the signed cross is the determinant = area. Dot detects right angles; cross manufactures them; triple products measure volumes.",
  visuals: [
    { type: "comparison", config: { title: "Dot vs Cross", left: { name: "Dot u·v", items: ["result: scalar", "|u||v|cosθ", "⊥ test: = 0", "work, projections"] }, right: { name: "Cross u×v", items: ["result: vector", "|u||v|sinθ", "⊥ to both", "area, torque"] } } }
  ],
  questions: [
    { type: "mcq", q: "(1,2)·(3,−1) =", options: ["1", "5", "−1", "7"], answer: 0, difficulty: 1, explanation: "3−2 = 1" },
    { type: "mcq", q: "u·v = 0 means:", options: ["parallel", "equal", "perpendicular", "zero"], answer: 2, difficulty: 1, explanation: "cosθ = 0" },
    { type: "mcq", q: "u×v has direction:", options: ["along u", "along v", "⊥ to both", "between them"], answer: 2, difficulty: 2, explanation: "Perpendicular to the plane" },
    { type: "mcq", q: "|u×v| equals:", options: ["|u||v|cosθ", "|u||v|sinθ", "u·v", "|u|+|v|"], answer: 1, difficulty: 2, explanation: "Area formula" },
    { type: "tf", q: "u×v = v×u.", answer: false, difficulty: 2, explanation: "Anti-commutative" },
    { type: "tf", q: "The dot product is commutative.", answer: true, difficulty: 1, explanation: "u·v = v·u" },
    { type: "short", q: "i·j = ___", answer: "0", difficulty: 1, explanation: "Perpendicular units" },
    { type: "short", q: "i×j = ___", answer: "k", difficulty: 2, explanation: "Right-hand rule" },
    { type: "calc", q: "Find the angle between (1,1,0) and (0,1,1).", answer: "60", difficulty: 3, explanation: "cosθ = 1/(√2·√2) = ½ → 60°" },
    { type: "concept", q: "Why does the cross product only exist in 3D (and trivially 7D)?", answer: "perpendicular|unique direction|plane", difficulty: 3, explanation: "u×v must be perpendicular to BOTH — in 3D that pins a unique line (up to sign, fixed by right-hand rule); in 2D there's no in-plane perpendicular to both, and in higher dimensions the perpendicular space has many directions — no canonical choice" }
  ]
};

Lessons["g11-mathematics-um5-t4"] = {
  overview: "Applying scalar and cross products: work, moments/torque, projections, areas of triangles, volumes via triple products, and normal vectors to planes.",
  objectives: [
    "Compute work W = F·d and explain the cosine",
    "Compute torque τ = r×F and its magnitude",
    "Project one vector onto another",
    "Find triangle/parallelogram areas via cross products",
    "Use the scalar triple product for volumes and coplanarity"
  ],
  simple: "The products are physics machines. WORK: W = F·d = |F||d|cos θ — push a box 5 m with 20 N at 30° to the floor: W = 20·5·cos30° ≈ 86.6 J. The cosine is why pushing DOWN on a sled does no horizontal work — only the aligned component counts. TORQUE (moment): τ = r×F — the turning effect of a force about a pivot: r from pivot to the push point. Magnitude |τ| = rF sin θ — max when perpendicular (why door handles sit far from hinges); direction along the axis of rotation (right-hand rule). A 0.5 m wrench, 40 N at 90°: τ = 20 N·m. PROJECTION: the shadow of u on v: scalar comp = u·v/|v|; vector proj = (u·v/|v|²)v — used for components along slopes and onto normals. AREAS: parallelogram = |u×v|; triangle = ½|u×v| (2D: the signed determinant). VOLUMES: parallelepiped = |u·(v×w)| (scalar triple = the 3×3 determinant); tetrahedron = /6; zero triple ⟺ coplanar. NORMALS: n = u×v is perpendicular to the plane of u, v — the plane's orientation fingerprint.",
  detailed: "<p><b>Work deeper.</b> W = F·d handles angled forces automatically; for variable paths work integrates (preview of calculus). Negative work: force opposing motion (friction, braking) — the dot product's sign records energy removal. Multiple forces: net work = F_net·d = Σ(Fᵢ·d).</p><p><b>Torque deeper.</b> τ = r×F: the perpendicular lever arm is r sin θ — the 'moment arm'. Varignon: torque of resultants adds. Equilibrium of rigid bodies: ΣF = 0 AND Στ = 0 — the two vector conditions behind beam and seesaw problems (the scalar triple appears in 3D statics).</p><p><b>Projection mechanics.</b> proj_v u = (u·v/|v|²)v — the closest point on v's line to u's head; the perpendicular remainder u − proj is ⊥ v (check: dot with v gives 0). Decomposition u = (u·v̂)v̂ + (u − (u·v̂)v̂) splits any vector into parallel + perpendicular parts — the inclined-plane trick in general form.</p><p><b>Triple product toolkit.</b> u·(v×w) = det[u;v;w] — cyclic symmetry (dot/cross swap places unchanged), zero ⟺ coplanar ⟺ linear dependence (the U4 singularity link). |det| = parallelepiped volume; triangle area in 3D: ½|u×v| with edge vectors; point-to-plane distance via projection onto the normal.</p>",
  keyTerms: [
    { term: "Work", def: "W = F·d (energy transfer)" },
    { term: "Torque", def: "τ = r×F (turning effect)" },
    { term: "Projection", def: "(u·v/|v|²)v — the shadow" },
    { term: "Moment arm", def: "r sinθ — perpendicular distance" },
    { term: "Normal vector", def: "u×v ⊥ the plane" }
  ],
  workedExamples: [
    {
      problem: "Force (3, 4, 0) N moves a particle from (1,0,0) to (4,2,0). Work?",
      given: "F and displacement",
      formula: "W = F·d",
      substitution: "d = (3,2,0); W = 9 + 8 + 0",
      calculation: "17",
      answer: "17 J"
    },
    {
      problem: "A 25 N force at 40° to a 2 m door's width, applied at the handle. Torque about the hinge?",
      given: "r = 2, F = 25, θ = 40°",
      formula: "|τ| = rF sinθ",
      substitution: "2·25·sin40°",
      calculation: "32.1",
      answer: "≈ 32.1 N·m (perpendicular to the door plane)"
    },
    {
      problem: "Project u = (4, 3) onto v = (5, 0).",
      given: "x-axis direction",
      formula: "(u·v/|v|²)v",
      substitution: "(20/25)(5,0)",
      calculation: "(4, 0)",
      answer: "proj = (4,0); scalar comp = 4 — the x-component, as expected"
    },
    {
      problem: "Triangle vertices A(1,0,1), B(3,1,0), C(0,2,1): area?",
      given: "3D points",
      formula: "½|AB→×AC→|",
      substitution: "AB→ = (2,1,−1), AC→ = (−1,2,0); cross = (1·0−(−1)·2, (−1)(−1)−2·0, 2·2−1·(−1)) = (2, 1, 5)",
      calculation: "½√30",
      answer: "≈ 2.74 square units"
    },
    {
      problem: "Are (1,2,3), (2,0,1), (3,2,4) coplanar?",
      given: "triple product",
      formula: "det = 0?",
      substitution: "det [1 2 3; 2 0 1; 3 2 4] = 1(0−2) −2(8−3) +3(4−0) = −2 −10 +12",
      calculation: "0",
      answer: "Yes — scalar triple = 0 (note row 3 = row 1 + row 2)"
    }
  ],
  commonMistakes: [
    "Using sin for work and cos for torque — work/cos (aligned), torque/sin (perpendicular)",
    "Torque angle: between r and F, not with the horizontal",
    "Projection denominator |v|² (not |v|) for the vector projection",
    "Triangle area without the ½",
    "Triple product order: u·(v×w) = (u×v)·w (cyclic OK, arbitrary swaps not)",
    "Forgetting work can be negative (opposing force)"
  ],
  applications: [
    "Engineering: wrench lengths, gear torques, beam balance problems",
    "Physics: inclined planes (project gravity onto slope/normal)",
    "Robotics: joint torques from end-effector forces",
    "Architecture: checking three cables lie in one plane (triple product)"
  ],
  summary: "Dot products measure alignment: work W = F·d, projections (shadows), perpendicularity tests. Cross products measure turning and spread: torque τ = r×F, areas ½|u×v|, plane normals, and the scalar triple |u·(v×w)| = volume = determinant with coplanarity ⟺ 0. The cos/sin split is the mnemonic: work wants the parallel part, torque wants the perpendicular part.",
  visuals: [
    { type: "flowChart", config: { title: "Which product?", steps: [{ label: "energy/shadow?", detail: "dot F·d" }, { label: "turning/area?", detail: "cross r×F" }, { label: "volume/flat?", detail: "triple u·(v×w)" }] } }
  ],
  questions: [
    { type: "mcq", q: "Work uses:", options: ["cross", "dot", "triple", "none"], answer: 1, difficulty: 1, explanation: "W = F·d" },
    { type: "mcq", q: "Torque is maximized when force is:", options: ["along r", "⊥ r", "45°", "zero"], answer: 1, difficulty: 2, explanation: "sin90 = 1" },
    { type: "mcq", q: "Triangle area from edges u, v:", options: ["|u·v|", "½|u×v|", "|u×v|", "½u·v"], answer: 1, difficulty: 2, explanation: "Half the cross" },
    { type: "mcq", q: "Coplanar vectors give scalar triple:", options: ["1", "0", "negative", "max"], answer: 1, difficulty: 2, explanation: "Zero volume" },
    { type: "tf", q: "Friction does negative work on a sliding box.", answer: true, difficulty: 2, explanation: "Opposes displacement" },
    { type: "tf", q: "The normal to a plane is u+v for any in-plane u, v.", answer: false, difficulty: 3, explanation: "It's u×v" },
    { type: "short", q: "W = |F||d|cos ___:", answer: "theta", difficulty: 1, explanation: "The angle between F and d" },
    { type: "short", q: "Moment arm = r·sin ___", answer: "theta", difficulty: 2, explanation: "Angle between r and F" },
    { type: "calc", q: "Force (0, 10) N lifts an object through (0, 3) m. Work?", answer: "30", difficulty: 1, explanation: "0+30 = 30 J" },
    { type: "concept", q: "Why does pushing straight down on a horizontally-moving sled do zero work?", answer: "perpendicular|cos90|no energy", difficulty: 2, explanation: "F ⊥ d → cos 90° = 0 → W = 0 — the force has no component along the motion, so it transfers no energy in the direction of travel" }
  ]
};

Lessons["g11-mathematics-um5-t5"] = {
  overview: "Vectors in geometry and mechanics: proving collinearity and midpoint theorems with position vectors, resultant and equilibrium of forces, and vector modeling of real paths.",
  objectives: [
    "Prove geometric facts (midpoints, collinearity, parallelograms) via vectors",
    "Show three points are collinear by v = k·u",
    "Solve force-resultant and equilibrium problems",
    "Model paths/displacements as vector chains",
    "Combine techniques: section formula + parallel tests"
  ],
  simple: "Vectors turn geometry proofs into algebra. THE PLAYBOOK: (1) name an origin and write position vectors a, b, c…; (2) express every segment as a difference (PQ→ = q − p); (3) prove equality of segments by matching components, parallelism by v = k·u, collinearity of A,B,C by AB→ = k·BC→, midpoints by showing m = (a+b)/2. Worked gem — the midpoints of ANY quadrilateral's sides form a parallelogram: side midpoints are (a+b)/2, (b+c)/2, (c+d)/2, (d+a)/2; opposite edge differences both equal (c−a)/2 → parallel & equal → parallelogram. One line of algebra, no construction lines. MECHANICS: resultant = component sums (several forces → one); equilibrium = ΣF = 0 (polygon closes; solve unknown magnitudes from x- and y-equations). Example: three ropes hold a ring; two known forces (10 N east, 5 N north) → third must be (−10, −5), magnitude √125 ≈ 11.2 N. PATHS: walk 3 km N then 4 km E → displacement (4, 3), 5 km from start; vector chains add in any order (commutative!). Vectors are the bridge between shapes and numbers — and between forces and motion.",
  detailed: "<p><b>Proof technique in full.</b> Triangle midsegment theorem: in triangle ABC, the segment joining midpoints of AB, AC is parallel to BC and half it. Position vectors: M = (a+b)/2, N = (a+c)/2 → MN→ = (c−b)/2 = ½·BC→ → MN→ = ½BC→: parallel (scalar multiple) and half-length. Done in three lines — versus Euclid's angle chase. The method generalizes: diagonals of a parallelogram bisect each other (midpoint of AC = (a+c)/2 = midpoint of BD when c−b = d−a).</p><p><b>Collinearity chains.</b> A, B, C collinear ⟺ AB→ = k·BC→ for some k. Typical exam: given position vectors with a parameter, set the parallel equation and solve both components — consistency of the two equations pins the parameter. The determinant form (U4-t7) is the same test in coordinates.</p><p><b>Force equilibrium.</b> ΣFₓ = 0, ΣF_y = 0 (and ΣF_z = 0 in 3D) — the component equations solve for up to two/three unknown magnitudes or angles. Lami's theorem (three forces in equilibrium: F/sin α equal) is the sine-rule shadow of the closed force triangle. Inclined-plane problems: resolve along slope/normal — projection machinery from t4.</p><p><b>Modeling paths.</b> Displacement vectors compose: total = Σ steps (order-free); velocity triangles (plane-wind, boat-current) are vector additions with the resultant as ground track; 'return to start' = zero-sum equations. These are the exam's word problems — draw the arrows, write components, solve.</p>",
  keyTerms: [
    { term: "Vector proof", def: "position vectors + differences" },
    { term: "Collinear test", def: "AB→ = k·BC→" },
    { term: "Equilibrium", def: "ΣF = 0 per component" },
    { term: "Midsegment", def: "½ parallel to the base" },
    { term: "Force polygon", def: "closes ⟺ equilibrium" }
  ],
  workedExamples: [
    {
      problem: "Prove: diagonals of parallelogram ABCD bisect each other.",
      given: "AB→ = DC→ = u, AD→ = BC→ = v",
      formula: "midpoints via position vectors",
      substitution: "A at origin: B = u, D = v, C = u+v; mid AC = (u+v)/2; mid BD = (u+v)/2",
      calculation: "equal",
      answer: "Same point — diagonals bisect each other ∎"
    },
    {
      problem: "A(1,2), B(4,6), C(7,10): show collinear.",
      given: "coordinates",
      formula: "parallel test",
      substitution: "AB→ = (3,4); BC→ = (3,4) → AB→ = 1·BC→",
      calculation: "k = 1",
      answer: "Equal vectors → same line (B is the midpoint!)"
    },
    {
      problem: "Forces (8, −3), (−2, 5), (x, y) keep a point in equilibrium. Find the third.",
      given: "ΣF = 0",
      formula: "component equations",
      substitution: "8 − 2 + x = 0; −3 + 5 + y = 0",
      calculation: "(−6, −2)",
      answer: "Third force = (−6, −2) N, magnitude √40 ≈ 6.32 N"
    },
    {
      problem: "Boat 6 km/h in still water crosses a 2 km/h current heading straight north. Steering angle and ground speed?",
      given: "resultant must be north",
      formula: "vector triangle",
      substitution: "aim upstream: west component cancels current: 6 sin θ = 2 → θ = 19.5°; ground = 6 cos θ",
      calculation: "5.66",
      answer: "Steer 19.5° west of north; ground speed ≈ 5.66 km/h"
    },
    {
      problem: "Find k so that A(2,1), B(5,3), C(k,7) are collinear.",
      given: "parameter",
      formula: "AB→ = t·BC→",
      substitution: "AB→ = (3,2); BC→ = (k−5, 4); parallel: 3·4 = 2(k−5)",
      calculation: "k = 11",
      answer: "k = 11 (cross-multiplication of components)"
    }
  ],
  commonMistakes: [
    "Proving parallelism by eyeballing slopes — write v = k·u and solve",
    "Forgetting both components must agree in a parallel test (two equations)",
    "Equilibrium: setting the RESULTANT to a nonzero value — it must be 0",
    "Mixing position vectors with free vectors mid-proof (declare the origin)",
    "Boat/river problems: pointing the boat where you want to GO (aim upstream!)",
    "Midpoint formula used on vectors as (a−b)/2 — it's (a+b)/2"
  ],
  applications: [
    "Engineering statics: truss and cable force analysis",
    "Navigation: course corrections against wind/current",
    "Surveying: proving boundary points collinear from coordinates",
    "Robotics: path composition and reachability (kinematic chains)"
  ],
  summary: "Vector geometry: pick an origin, write everything as position-vector differences, then prove — parallel via v = k·u, collinear via AB→ = k·BC→, midpoints via (a+b)/2; classic theorems (midsegment, parallelogram diagonals, Varignon) collapse to one-line algebra. Mechanics: resultants by component sums, equilibrium by ΣF = 0 per axis, paths by vector chains. Vectors convert shape questions into equation questions — draw, decompose, solve.",
  visuals: [
    { type: "flowChart", config: { title: "Vector proof recipe", steps: [{ label: "Set origin", detail: "position vectors" }, { label: "Express segments", detail: "as differences" }, { label: "Match/scale", detail: "k·u test" }, { label: "Conclude", detail: "parallel/equal"}] } }
  ],
  questions: [
    { type: "mcq", q: "AB→ ∥ CD→ means:", options: ["AB→ = CD→", "AB→ = k·CD→", "dot = 0", "equal length"], answer: 1, difficulty: 2, explanation: "Scalar multiple" },
    { type: "mcq", q: "Equilibrium of forces requires:", options: ["ΣF = max", "ΣF = 0", "all equal", "pairs"], answer: 1, difficulty: 1, explanation: "Zero resultant" },
    { type: "mcq", q: "Midpoint of position vectors a, b:", options: ["a−b", "(a+b)/2", "2(a+b)", "ab"], answer: 1, difficulty: 1, explanation: "Average" },
    { type: "mcq", q: "The force polygon of equilibrium:", options: ["opens", "closes", "crosses", "doubles"], answer: 1, difficulty: 2, explanation: "Sums to zero" },
    { type: "tf", q: "Vector proofs require drawing auxiliary construction lines.", answer: false, difficulty: 2, explanation: "Algebra replaces them" },
    { type: "tf", q: "Three collinear points give AB→ and BC→ parallel.", answer: true, difficulty: 2, explanation: "Same line" },
    { type: "short", q: "To prove MN ∥ PQ, show MN→ = ___·PQ→:", answer: "k", difficulty: 1, explanation: "A scalar k" },
    { type: "short", q: "Total displacement around a closed walk is the ___ vector:", answer: "zero", difficulty: 1, explanation: "Zero" },
    { type: "calc", q: "Two forces (6, 0) and (0, 8) N: resultant magnitude and the equilibrant?", answer: "10", difficulty: 2, explanation: "|R| = 10 N; equilibrant = (−6, −8)" },
    { type: "concept", q: "Why is the vector proof of the midsegment theorem shorter than the Euclidean one?", answer: "algebra|no construction|components", difficulty: 3, explanation: "Vectors encode all geometry into arithmetic: MN→ = (c−b)/2 follows from three substitutions, while Euclid needs auxiliary lines, congruent triangles, and angle arguments — the coordinate-free algebra does the construction automatically" }
  ]
};
