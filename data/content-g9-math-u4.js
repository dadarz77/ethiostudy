/* Content: Grade 9 Mathematics — Unit 4: Inequalities (2 topics) */
window.Lessons = window.Lessons || {};

Lessons["g9-mathematics-um4-t1"] = {
  overview: "Inequalities compare rather than equate — and their solutions are whole ranges, not single numbers. One rule makes them tricky: multiply or divide by a negative and the sign flips.",
  objectives: [
    "Write and read inequalities: <, ≤, >, ≥, ≠",
    "Solve linear inequalities and graph them on a number line",
    "Explain why the sign flips when multiplying by a negative",
    "Solve compound and absolute-value inequalities",
    "Translate word problems into inequalities"
  ],
  simple: "x + 2 > 5 solves like an equation (x > 3) — except the answer is a whole <b>range</b>: every number past 3. On a number line, an open circle means 'not included', a closed dot means 'up to and including'. The one rule to burn in: when you multiply or divide by a NEGATIVE, the arrow flips. 2 < 5, but multiply by −1 and you get −2 > −5 — the numbers swapped places on the line.",
  detailed: "<p>Inequality symbols: < (less than), ≤ (at most), > (greater than), ≥ (at least), ≠. Solving linear inequalities uses the same legal moves as equations — add/subtract anything both sides, multiply/divide by a POSITIVE both sides — with one exception: multiplying or dividing by a negative <b>reverses the sign</b>. Reason: negation reflects the number line, swapping left and right: a < b ⇒ −a > −b.</p><p>Solution sets are intervals drawn on a number line: x > 3 → open circle at 3, ray right; x ≤ −1 → solid dot at −1, ray left; −2 ≤ x < 5 → solid dot at −2, open circle at 5, segment between. Interval notation mirrors this: (3, ∞), (−∞, −1], [−2, 5). The parenthesis/bracket pairing encodes open/closed exactly.</p><p>Worked mechanics: −3x + 1 ≥ 10 → −3x ≥ 9 → divide by −3, FLIP: x ≤ −3. Compound inequalities combine: 'x > 2 AND x ≤ 7' is 2 < x ≤ 7; solving each part of e.g. 2x − 1 < x + 2 ≤ 3x treats the middle as both an equation-pair: solve 2x − 1 < x + 2 → x < 3, and x + 2 ≤ 3x → x ≥ 1, join: 1 ≤ x < 3.</p><p><b>Absolute value</b> inequalities read as distances: |x| < 4 means 'x is within 4 of 0' → −4 < x < 4. |x − 1| ≥ 3 moves the centre: x − 1 ≤ −3 or x − 1 ≥ 3 → x ≤ −2 or x ≥ 4. The template: |A| < c becomes −c < A < c; |A| > c becomes A < −c or A > c.</p><p>Word problems use budget language: 'at most 500 birr' → ≤ 500; 'no less than' → ≥; 'at least' → ≥; 'fewer than' → <. A taxi with 100 birr base plus 25/km within 400 birr total: 100 + 25d ≤ 400 → d ≤ 12 km. Verification habit: test one value inside the claimed range and one outside — if both behave as predicted, the solution set holds.</p>",
  keyTerms: [
    { term: "Inequality", def: "A comparison statement using <, ≤, >, ≥ or ≠" },
    { term: "Reversal rule", def: "Multiply/divide by a negative ⇒ flip the sign" },
    { term: "Solution set", def: "All values satisfying the inequality — usually an interval" },
    { term: "Interval notation", def: "(3, ∞] style: round = excluded, square = included" },
    { term: "Compound inequality", def: "Two inequalities joined by AND (overlap) or OR (union)" },
    { term: "Absolute value", def: "Distance from 0; |A| < c ⇔ −c < A < c" }
  ],
  formulas: [
    {
      name: "Multiplication sign rules",
      formula: "a < b and c > 0 ⇒ ac < bc · a < b and c < 0 ⇒ ac > bc",
      meaning: "Positive scales preserve order; negative scales reflect it",
      when: "Every isolate-the-variable step involving × or ÷"
    },
    {
      name: "Absolute value templates",
      formula: "|A| < c ⇔ −c < A < c · |A| > c ⇔ A < −c OR A > c",
      meaning: "Within a radius vs outside it",
      when: "Solving |2x − 1| ≤ 7 and similar distance inequalities"
    }
  ],
  workedExamples: [
    {
      problem: "Solve: 5 − 2x < 11.",
      calculation: "−2x < 6 → divide by −2, flip → x > −3",
      answer: "x > −3, interval (−3, ∞)"
    },
    {
      problem: "Solve the compound: x + 4 > 6 AND 2x − 1 ≤ 9.",
      calculation: "x > 2 and x ≤ 5",
      answer: "2 < x ≤ 5, interval (2, 5]"
    },
    {
      problem: "Solve |x − 4| < 3.",
      formula: "−3 < x − 4 < 3",
      answer: "1 < x < 7"
    },
    {
      problem: "A student needs an average ≥ 70 on three tests; scores 65 and 72. Minimum third score?",
      substitution: "(65 + 72 + s)/3 ≥ 70 → 137 + s ≥ 210",
      answer: "s ≥ 73"
    }
  ],
  commonMistakes: [
    "Forgetting the flip when dividing by a negative coefficient",
    "Writing x < 3 when dividing −2x < 6 — sign direction depends on the operation, not the number's size",
    "Graphing open vs closed circles backwards (≤ means SOLID dot)",
    "Treating |x| < 4 as x < 4 only — it's a two-sided bound: −4 < x < 4",
    "'At most' translated to ≥ — at most is the ceiling: ≤",
    "Multiplying an inequality by a variable expression without knowing its sign (illegal without cases)"
  ],
  applications: [
    "Budgeting: spending limits are ≤ constraints in every household and business plan",
    "Quality control: a part must fit 10 ± 0.2 mm — an absolute-value tolerance",
    "Medicine: dosage ranges ('at least 5 mg, at most 15 mg') are inequalities",
    "Grading: 'average > 90 for distinction' drives minimum-score calculations"
  ],
  summary: "Inequalities solve like equations except multiplying/dividing by a negative flips the sign (negation reflects the line). Solutions are intervals drawn with open/closed endpoints; compounds intersect (AND) or union (OR); |A| < c unpacks to a between-pair, |A| > c to an outside-pair. Budget words map: at most ≤, at least ≥.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Solve −4x > 12:", options: ["x > −3", "x < −3", "x > 3", "x < 3"], answer: 1, difficulty: 1, explanation: "Divide by −4 and flip: x < −3." },
    { type: "mcq", q: "x ≤ 5 on a number line uses:", options: ["open circle at 5, ray left", "solid dot at 5, ray left", "solid dot at 5, ray right", "open circle, ray right"], answer: 1, difficulty: 1, explanation: "≤ includes 5 (solid) and everything smaller (left)." },
    { type: "mcq", q: "'At most 10' is written:", options: ["x ≥ 10", "x > 10", "x ≤ 10", "x < 10"], answer: 2, difficulty: 1, explanation: "A ceiling of 10 includes 10: x ≤ 10." },
    { type: "mcq", q: "Solve |x| ≥ 4:", options: ["−4 ≤ x ≤ 4", "x ≥ 4 only", "x ≤ −4 or x ≥ 4", "x ≤ 4"], answer: 2, difficulty: 2, explanation: "Outside the radius: |x| ≥ 4 means x ≤ −4 OR x ≥ 4." },
    { type: "mcq", q: "The compound x > 1 AND x < 4 is:", options: ["(1, 4)", "(−∞, 4)", "[1, 4]", "empty"], answer: 0, difficulty: 1, explanation: "Overlap of both rays: 1 < x < 4." },
    { type: "mcq", q: "Given a > b and c < 0, which is certain?", options: ["ac > bc", "ac < bc", "ac = bc", "a + c < b"], answer: 1, difficulty: 3, explanation: "Multiply by a negative → flip: ac < bc." },
    { type: "mcq", q: "Solve 2(x − 3) ≤ 4x + 2:", options: ["x ≥ −4", "x ≤ −4", "x ≥ 4", "x ≤ 8"], answer: 0, difficulty: 2, explanation: "2x − 6 ≤ 4x + 2 → −8 ≤ 2x → x ≥ −4." },
    { type: "mcq", q: "The interval [−2, 5) means:", options: ["−2 < x < 5", "−2 ≤ x < 5", "−2 ≤ x ≤ 5", "−2 < x ≤ 5"], answer: 1, difficulty: 2, explanation: "Square bracket includes −2; parenthesis excludes 5." }
  ]
};

Lessons["g9-mathematics-um4-t2"] = {
  overview: "Linear programming turns inequalities into decisions: shade the feasible region, then test its corners to find the best plan — maximum profit, minimum cost, or a schedule that fits.",
  objectives: [
    "Write systems of linear inequalities from constraint problems",
    "Graph feasible regions on the coordinate plane",
    "Identify corner (vertex) points of a region",
    "Apply the corner-point principle to optimize an objective",
    "Interpret results in the problem's real context"
  ],
  simple: "A shop makes two furniture types; each uses hours of labour and wood, and the shop has limited supplies. Every limit is an inequality (2x + y ≤ 40 hours…). Shade where ALL limits hold — that polygon is the <b>feasible region</b>: the set of plans that physically work. The best plan sits on a <b>corner</b> of that polygon. So: draw the region, list the corners, plug each into the profit formula, pick the winner.",
  detailed: "<p>A <b>linear programming</b> problem has (i) decision variables (x, y ≥ 0 — non-negativity constraints come free in the real world), (ii) linear inequality constraints (resources: hours, budget, capacity), (iii) an <b>objective function</b> P = ax + by to maximize or minimize. Translating English to symbols: 'twice as many chairs as tables' → x ≤ 2y... careful reading beats rushing.</p><p>Graph each constraint as a boundary line, then shade the admissible half-plane (test point (0,0) if the line misses it). The <b>feasible region</b> is the intersection of all half-planes — usually a convex polygon. Its corner points are where boundary lines cross; find them by solving the two corresponding equations simultaneously.</p><p>The <b>corner-point principle</b>: a linear objective over a bounded convex region attains its maximum and minimum at vertices. Proof sketch: the objective's level sets P = k are parallel lines; sliding the line to its last contact with the region before it leaves touches at a vertex. So evaluation at every vertex (a handful of points) beats checking infinitely many plans inside.</p><p>Example structure: maximize P = 40x + 30y subject to 2x + y ≤ 8 (hours), x + 2y ≤ 8 (wood), x, y ≥ 0. Vertices: (0,0), (4,0), (8/3, 8/3), (0,4). Evaluate: P = 0, 160, 186.7, 120 → optimum at (8/3, 8/3). If whole units are mandatory (integer programming), test nearby lattice points inside the region — (3,2) gives P = 180, (2,3) gives 170: pick (3, 2).</p><p>Watch two pathologies: an <b>unbounded</b> region may have no maximum (P can grow forever), though a minimum may still exist; an <b>empty</b> region means contradictory constraints — no feasible plan. Real interpretation closes the loop: reject fractional people or half-machines by checking integer neighbours, and always state units in the final answer.</p><p>Two-variable LP is the exam-visible slice of a method used industrially: diet problems (min cost meeting nutrient floors), transport (min mileage under demand), scheduling (max coverage within hours). The simplex algorithm generalizes corner-crawling to hundreds of variables.</p>",
  keyTerms: [
    { term: "Objective function", def: "The linear expression to maximize or minimize" },
    { term: "Constraints", def: "Inequalities limiting the decision variables" },
    { term: "Feasible region", def: "All points satisfying every constraint — the shaded polygon" },
    { term: "Corner-point principle", def: "Optimal value of a linear objective occurs at a vertex" },
    { term: "Unbounded region", def: "Region extending forever — may have no maximum/minimum" },
    { term: "Level line", def: "Set of plans with equal objective value P = k; parallel lines" }
  ],
  formulas: [
    {
      name: "Standard form",
      formula: "optimize P = ax + by subject to c₁x + d₁y ≤ e₁, …, x ≥ 0, y ≥ 0",
      meaning: "Linear objective + linear inequality constraints = a linear program",
      when: "Setting up resource-allocation problems"
    }
  ],
  workedExamples: [
    {
      problem: "A farmer plants maize (x ha) and beans (y ha). Labour: 4x + 2y ≤ 60 days; land: x + y ≤ 20 ha; profit 300x + 200y. Max profit?",
      calculation: "Vertices: (0,0), (15,0), (10,10), (0,20). P: 0, 4500, 5000, 4000",
      answer: "10 ha maize + 10 ha beans → 5,000 profit"
    },
    {
      problem: "Find the feasible-region vertices for x ≥ 0, y ≥ 0, x + y ≤ 6, y ≤ 2x.",
      calculation: "Corners at (0,0); (6,0); x+y=6 ∩ y=2x: x=2, y=4 → (2,4)",
      answer: "(0,0), (6,0), (2,4)"
    },
    {
      problem: "Minimize C = 5x + 3y subject to x + y ≥ 12, x ≥ 2y, x, y ≥ 0.",
      calculation: "Boundary vertices: (12,0) and intersection x+y=12, x=2y → (8,4). C: 60, 52",
      answer: "C_min = 52 at x = 8, y = 4 (region unbounded above — minimum exists)"
    }
  ],
  commonMistakes: [
    "Shading the wrong half-plane — test (0,0) when the boundary line allows it",
    "Missing the x ≥ 0, y ≥ 0 walls: real-world variables can't go negative",
    "Evaluating the objective at an interior point and calling it optimal — corners only",
    "Solving a constraint pair for a vertex that is actually infeasible (violates another wall) — check every vertex against all constraints",
    "Assuming a maximum exists in an unbounded region — test by sliding the level line",
    "Reporting fractional people/machines without checking integer neighbours"
  ],
  applications: [
    "Factories: maximize profit under machine-hours, labour and raw-material caps",
    "Diets & feed: minimum-cost blends meeting nutrient minimums (classic Stigler problem)",
    "Logistics: route and load plans under capacity inequalities",
    "Agriculture: crop mix under land, water and labour budgets — Ethiopian smallholder planning too"
  ],
  summary: "Linear programming: variables ≥ 0, constraints as linear inequalities, objective P = ax + by. Graph the feasible polygon, solve boundary pairs for its vertices, evaluate P at each corner — the optimum lives on a vertex (or nowhere, if unbounded/infeasible). Integer contexts need a neighbour check.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The feasible region is:", options: ["where one constraint holds", "the intersection of all constraint half-planes", "the objective line", "the axes only"], answer: 1, difficulty: 1, explanation: "A plan is feasible only if EVERY constraint holds — overlap of half-planes." },
    { type: "mcq", q: "A linear objective over a bounded region reaches its max:", options: ["at the centroid", "at a vertex", "on an edge midpoint", "nowhere"], answer: 1, difficulty: 1, explanation: "Corner-point principle." },
    { type: "mcq", q: "'x is at least twice y' translates to:", options: ["x ≥ 2y", "2x ≥ y", "x ≤ 2y", "x > y + 2"], answer: 0, difficulty: 2, explanation: "at least twice → x ≥ 2y." },
    { type: "mcq", q: "The region x + y ≤ 4, x, y ≥ 0 has how many vertices?", options: ["1", "2", "3", "4"], answer: 2, difficulty: 1, explanation: "(0,0), (4,0), (0,4) — a triangle." },
    { type: "mcq", q: "To find the vertex of x + y = 6 and y = 2x, substitute to get:", options: ["x = 2, y = 4", "x = 3, y = 3", "x = 4, y = 2", "x = 1, y = 5"], answer: 0, difficulty: 2, explanation: "x + 2x = 6 → x = 2, y = 4." },
    { type: "mcq", q: "An unbounded feasible region:", options: ["always has no optimum", "may still have a minimum", "is always a mistake", "has no vertices"], answer: 1, difficulty: 3, explanation: "Max may fail to exist, but e.g. minimizing cost can still hit a corner." },
    { type: "mcq", q: "Max P = 3x + 5y over the region x, y ≥ 0, x ≤ 4, y ≤ 3 gives:", options: ["15", "27 at (4, 3)", "20", "12"], answer: 1, difficulty: 1, explanation: "Rectangle corner (4,3): P = 12 + 15 = 27." }
  ]
};
