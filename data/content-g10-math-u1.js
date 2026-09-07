/* Content: Grade 10 Mathematics — Unit 1: Relations and Functions (3 topics) */
window.Lessons = window.Lessons || {};

Lessons["g10-mathematics-um1-t1"] = {
  overview: "A relation is any rule that links inputs to outputs — the raw material of all mathematics. Before you can use functions to model phone tariffs or projectile paths, you must master the language of ordered pairs, domain and range, and when a relation pairs each input with exactly one output.",
  objectives: [
    "Define a relation as a set of ordered pairs",
    "Find the domain and range of a relation from a set, table, graph or formula",
    "Represent relations with arrow diagrams and Cartesian graphs",
    "Test one-to-one and many-to-one correspondences",
    "Distinguish a relation from a function"
  ],
  simple: "Think of a relation as a matching rule. Your class roll number matches each student to a number — that's a relation. We write matches as ordered pairs (student, roll), and the set of all first items is the domain (who gets matched) while the set of second items is the range (what they get matched to). Order matters: (2, 5) is NOT the same as (5, 2). Some relations give one input many outputs — like 'x² = y' where x can be +3 or −3. A relation where every input has exactly ONE output is special enough to get its own name: a function. You'll meet that star player in the next lesson.",
  detailed: "<p>Formally, a <b>relation</b> from set A to set B is any subset of the Cartesian product A × B — the set of all ordered pairs (a, b) with a ∈ A, b ∈ B. If A = {1, 2, 3} and B = {4, 5}, then A × B has 6 pairs, and any selection of those pairs (even the empty one) is a relation. The <b>domain</b> is the set of first coordinates that actually appear; the <b>range</b> is the set of second coordinates that appear. Note the subtlety: the domain of a relation is not necessarily all of A — only the part of A that is actually used.</p><p>Relations can be described four ways, and fluent students move between them freely: as a <b>set of ordered pairs</b> {(1,4), (2,4), (3,5)}, a <b>table</b> of values, an <b>arrow diagram</b> between two sets, or a <b>graph</b> on the Cartesian plane. Each representation hides and reveals different features — a graph shows trends instantly, while a formula like y = x² + 1 shows the rule compactly but not the domain unless stated.</p><p>A relation is a <b>function</b> precisely when no two ordered pairs share the same first coordinate with different second coordinates: each input maps to exactly one output. Many-to-one is allowed (two inputs may land on the same output); one-to-many is forbidden. Graphically this is the <b>vertical line test</b>: if any vertical line crosses the graph more than once, some x has two y-values and the relation is not a function. The circle x² + y² = 9 fails — at x = 0, y = ±3.</p><p>Beyond one output per input, we classify how outputs are shared. A relation is <b>one-to-one</b> (injective) if different inputs always give different outputs — no two arrows land on the same target. It is <b>onto</b> (surjective) if every element of B is hit by at least one arrow. A <b>one-to-one correspondence</b> is both: every element of A pairs with exactly one of B and vice versa — the two sets have 'the same number of elements', the seed of cardinality. Matching every Ethiopian to their national ID number is one-to-one; matching students to homeroom class is many-to-one.</p><p>Why does any of this matter? Because modelling is choosing a relation. 'Ethiopian phone tariff as a rule linking minutes to cost' must be a function — a bill cannot be two amounts at once. 'Time when a ball is at height 10 m' is a relation whose inverse may fail to be a function (the ball passes 10 m twice). Domain restrictions carry meaning too: the formula for a circle's area A = πr² only makes sense for r ≥ 0. Reading domain and range off graphs — identifying the leftmost/rightmost x-values and lowest/highest y-values, including open versus closed endpoints — is a guaranteed exam skill.</p>",
  keyTerms: [
    { term: "Relation", def: "Any set of ordered pairs linking elements of one set to another" },
    { term: "Ordered pair", def: "(a, b) — a pair where position matters; (1,2) ≠ (2,1)" },
    { term: "Cartesian product", def: "A × B — the set of ALL ordered pairs with first from A, second from B" },
    { term: "Domain", def: "The set of all first coordinates (inputs) that appear in the relation" },
    { term: "Range", def: "The set of all second coordinates (outputs) that appear in the relation" },
    { term: "Function", def: "A relation in which each input has exactly one output" },
    { term: "One-to-one (injective)", def: "Different inputs always produce different outputs" },
    { term: "Vertical line test", def: "A graph is a function iff no vertical line meets it more than once" }
  ],
  formulas: [
    {
      name: "Number of pairs in a Cartesian product",
      formula: "n(A × B) = n(A) × n(B)",
      meaning: "The product set contains every combination of one element from each set",
      vars: [{ name: "n(A)", meaning: "number of elements in A", unit: "count" }, { name: "n(B)", meaning: "number of elements in B", unit: "count" }],
      units: "count",
      when: "Counting possible relations or pairs between finite sets",
      example: "A = {1,2,3}, B = {4,5}: A × B has 3 × 2 = 6 pairs"
    },
    {
      name: "Number of relations from A to B",
      formula: "number of relations = 2^(n(A)·n(B))",
      meaning: "A relation is any subset of A × B, and a set with k elements has 2^k subsets",
      vars: [{ name: "n(A)·n(B)", meaning: "size of the product set", unit: "count" }],
      units: "count",
      when: "Counting how many different rules can link two finite sets",
      example: "From a 2-element set to a 2-element set: 2⁴ = 16 relations"
    }
  ],
  workedExamples: [
    {
      problem: "Given R = {(2,4), (3,5), (4,6), (5,7)}, find the domain and range, and state whether R is a function.",
      given: "R as a set of four ordered pairs",
      formula: "Domain = set of first coordinates; Range = set of second coordinates",
      substitution: "Firsts: 2, 3, 4, 5. Seconds: 4, 5, 6, 7.",
      calculation: "Each input appears exactly once, so no input has two outputs",
      answer: "Domain = {2, 3, 4, 5}, Range = {4, 5, 6, 7}, and yes — R is a function (in fact one-to-one)"
    },
    {
      problem: "Find the domain and range of the relation S = {(x, y) : y² = x, x ≤ 4} on the integers.",
      given: "Rule y² = x with x restricted to integers ≤ 4",
      formula: "x must be a perfect square since x = y²",
      substitution: "y = 0, ±1, ±2 give x = 0, 1, 4 (all ≤ 4)",
      calculation: "Pairs: (0,0), (1,1), (1,-1), (4,2), (4,-2)",
      answer: "Domain = {0, 1, 4}, Range = {−2, −1, 0, 1, 2}. NOT a function: input 1 maps to both 1 and −1"
    },
    {
      problem: "A = {a, b} and B = {1, 2, 3}. How many relations are there from A to B? How many are functions?",
      given: "n(A) = 2, n(B) = 3",
      formula: "Relations = 2^(n(A)·n(B)); Functions: each of n(A) inputs independently chooses one of n(B) outputs → n(B)^n(A)",
      substitution: "Relations = 2⁶; Functions = 3²",
      calculation: "2⁶ = 64; 3² = 9",
      answer: "64 relations, of which exactly 9 are functions"
    },
    {
      problem: "The graph of a relation runs from the point (−3, 1) (included) to (5, 8) (included), dipping to y = −2 at its lowest and never exceeding y = 8, with no gaps. State its domain and range.",
      given: "Continuous curve, x from −3 to 5, y minimum −2, y maximum 8",
      formula: "Domain = all x-values covered; Range = all y-values covered",
      substitution: "x spans [−3, 5]; y spans [−2, 8]",
      calculation: "Continuous with no gaps, so intervals are solid",
      answer: "Domain = {x : −3 ≤ x ≤ 5}, Range = {y : −2 ≤ y ≤ 8}"
    }
  ],
  commonMistakes: [
    "Thinking (2, 5) and (5, 2) are the same pair — order is the whole point of 'ordered pair'",
    "Confusing the codomain (the set B we map INTO) with the range (the outputs actually used)",
    "Rejecting a many-to-one relation as 'not a function' — many-to-one IS allowed; only one-to-many is forbidden",
    "Using the horizontal line test to check for a function — vertical lines test functions; horizontal lines test one-to-oneness",
    "Writing the domain of y = √(x − 3) as all reals — the radicand must be ≥ 0, so x ≥ 3",
    "Assuming every relation between two sets must use every element of both sets",
    "Forgetting that a relation can be a function even when two inputs share an output, e.g. f(x) = x²"
  ],
  applications: [
    "Phone plans: Ethio Telecom's cost as a rule on minutes used must be a function — one usage, one bill",
    "Student records: roll-number ↔ student is a one-to-one correspondence; student → homeroom is many-to-one",
    "GPS delivery: each address maps to one location, but a landmark address may match several delivery pins — a relation, not a function",
    "Economics: supply-and-demand curves intersect at one price, but 'price → quantity' from a demand curve is read as a function for modelling",
    "Music: each piano key produces one pitch (function), but one pitch can be played by several keys on a keyboard with different fingerings (many-to-one)"
  ],
  summary: "A relation is any collection of ordered pairs; its domain is the set of inputs used and its range the set of outputs reached. A function is the special case where every input has exactly one output — checked on a graph with the vertical line test — while one-to-one correspondences pair sets element-for-element. Learning to read relations from pairs, tables, arrow diagrams and graphs is the foundation for everything that follows.",
  visuals: [
    { type: "flowChart", config: { title: "Is it a function? Decision flow", steps: ["Relation given", "Any input with 2+ outputs?", "Yes → NOT a function", "No → it IS a function", "Any output shared? Yes → many-to-one", "No → one-to-one"] } },
    { type: "comparison", config: { title: "Relation vs Function", left: { name: "Relation", items: ["Any set of ordered pairs", "Input may have many outputs", "Circle x²+y²=9", "Vertical line CAN hit twice"] }, right: { name: "Function", items: ["Special relation", "Each input → exactly ONE output", "Line y = 2x + 1", "Vertical line hits once"] } } },
    { type: "qa", config: { title: "Exam-style quick checks", pairs: [{ q: "R = {(1,2),(1,3)} — function?", a: "<b>No</b> — input 1 has two outputs (one-to-many)" }, { q: "Domain of y = √(x−4)?", a: "<b>x ≥ 4</b> — radicand cannot be negative" }, { q: "f: students → ID numbers. One-to-one?", a: "<b>Yes</b> — distinct students get distinct IDs" }] } }
  ],
  questions: [
    { type: "mcq", q: "Which of these is NOT a function?", options: ["{(1,2),(2,3),(3,4)}", "{(1,2),(1,3),(2,4)}", "{(2,2),(3,3),(4,4)}", "{(1,5),(2,5),(3,5)}"], answer: 1, difficulty: 1, explanation: "Input 1 appears with outputs 2 AND 3 — one-to-many is forbidden in a function" },
    { type: "mcq", q: "The domain of a relation is…", options: ["the set of second coordinates", "the set of first coordinates", "always all real numbers", "the same as the range"], answer: 1, difficulty: 1, explanation: "Domain = inputs = first coordinates of the ordered pairs" },
    { type: "mcq", q: "A vertical line intersects a curve at two points. The curve represents…", options: ["a function", "not a function", "a one-to-one function", "a straight line"], answer: 1, difficulty: 1, explanation: "Vertical line test: two hits means one x-value has two y-values — not a function" },
    { type: "mcq", q: "If A has 3 elements and B has 4, how many relations are possible from A to B?", options: ["12", "81", "4096", "64"], answer: 2, difficulty: 3, explanation: "A × B has 12 pairs; relations = subsets = 2¹² = 4096" },
    { type: "tf", q: "Every function is a relation.", answer: true, difficulty: 1, explanation: "A function is a special kind of relation — one output per input" },
    { type: "tf", q: "A many-to-one mapping fails the definition of a function.", answer: false, difficulty: 2, explanation: "Many-to-one is allowed; only one-to-many breaks the function rule" },
    { type: "short", q: "For f = {(2,5),(3,7),(4,9)}, write the range.", answer: "5,7,9|{5, 7, 9}|{5,7,9}", difficulty: 1, explanation: "Range = the set of second coordinates: {5, 7, 9}" },
    { type: "short", q: "State the domain of y = 1/(x − 3) over the reals.", answer: "all reals except 3|x ≠ 3|reals except 3", difficulty: 2, explanation: "Division by zero: x = 3 is excluded; every other real works" },
    { type: "concept", q: "Explain why the matching 'each Ethiopian → their woreda (district)' is a function but not one-to-one.", answer: "many people same district|many-to-one|each person one district|multiple people share", difficulty: 2, explanation: "Every person has exactly one district (function), but many people share a district (not one-to-one)" },
    { type: "ordering", q: "Order from most general to most specific:", options: ["function → relation → one-to-one function", "relation → function → one-to-one function", "one-to-one function → relation → function", "relation → one-to-one function → function"], answer: 1, difficulty: 2, explanation: "All one-to-one functions are functions; all functions are relations" }
  ]
};

Lessons["g10-mathematics-um1-t2"] = {
  overview: "Functions are the workhorses of mathematics: machines that swallow an input and spit out exactly one output. This lesson builds the working vocabulary — f(x) notation, input/output machines, the standard zoo of function types (linear, quadratic, absolute value, piecewise) — and the algebra of finding domains and evaluating rules.",
  objectives: [
    "Use function notation f(x) and evaluate functions at given inputs",
    "Identify the independent and dependent variables in a rule",
    "Recognise linear, quadratic, absolute-value and piecewise functions",
    "Determine the natural domain of an algebraic function",
    "Match function rules to graphs and input-output tables"
  ],
  simple: "Picture a machine with a funnel on top and a tray below. Drop a number x into the funnel, and the machine applies its rule — say 'multiply by 2, add 1' — and a single number pops out. That machine is a function, written f. The output is f(x), read 'f of x'. If f(x) = 2x + 1, then f(3) = 7: you substituted 3 wherever x appeared. The set of legal drops is the domain; everything that can pop out is the range. Different machines have different personalities: linear machines make straight lines, quadratic machines make U-shaped curves, absolute-value machines make V's, and piecewise machines follow different rules for different inputs — like a taxi fare with a flat start charge plus a per-km rate.",
  detailed: "<p>A <b>function</b> f from set A to set B assigns to <i>each</i> element of A <i>exactly one</i> element of B, written f: A → B. With x ∈ A the <b>independent variable</b> and f(x) ∈ B the <b>dependent variable</b>, the expression f(x) = 3x − 2 is a <b>rule</b>. Evaluation is substitution: f(4) = 3(4) − 2 = 10. Beware: f(x) is NOT f times x — it is the machine's output on input x. Related language: the <b>image</b> of a is the value f(a); the <b>pre-image</b> of b is any a with f(a) = b (a value can have several pre-images in a many-to-one function).</p><p>The <b>natural domain</b> is all real inputs for which the rule makes sense. Three alarm types: (1) denominators — exclude values that make them zero; (2) even roots — require the radicand ≥ 0; (3) context — lengths and times must be positive. So for f(x) = √(x+2)/(x−5), we need x ≥ −2 AND x ≠ 5: domain [−2, 5) ∪ (5, ∞). When a problem states a domain explicitly, the stated one wins.</p><p>The Grade 10 zoo: <b>linear</b> f(x) = mx + c (straight line, slope m, intercept c, domain all reals); <b>quadratic</b> f(x) = ax² + bx + c, a ≠ 0 (parabola, opens up if a > 0, vertex at x = −b/2a); <b>absolute value</b> f(x) = |x| (V-shape, vertex at origin, all outputs ≥ 0); <b>piecewise</b> functions defined by different formulas on different intervals, e.g. f(x) = x² for x ≥ 0 and f(x) = −x for x < 0. Each has a characteristic shape and domain/range signature you should recognise instantly.</p><p>Functions can be combined arithmetically: (f + g)(x) = f(x) + g(x), (f·g)(x) = f(x)·g(x), f/g wherever g(x) ≠ 0, and composed: (f ∘ g)(x) = f(g(x)) — feed g's output into f. Composition is generally NOT commutative: f(g(x)) ≠ g(f(x)) in general. If f(x) = x + 2 and g(x) = 3x, then f(g(4)) = f(12) = 14 while g(f(4)) = g(6) = 18. Inner first, always — same order of operations as brackets.</p><p>Graphs encode everything: read domain from the horizontal shadow, range from the vertical shadow, f(a) by going to x = a and reading the height. A table of values is a function iff no x repeats with two different y's. Learning to translate between rule ↔ table ↔ graph is the single most valuable habit for the rest of the course — every later topic (polynomials, exponentials, trig) is studied through exactly this triangle.</p>",
  keyTerms: [
    { term: "Function notation f(x)", def: "The output of function f on input x; read 'f of x'" },
    { term: "Independent variable", def: "The input x, chosen freely from the domain" },
    { term: "Dependent variable", def: "The output y = f(x), determined by the input" },
    { term: "Image / pre-image", def: "f(a) is the image of a; a is a pre-image of f(a)" },
    { term: "Natural domain", def: "All real numbers for which the rule is defined" },
    { term: "Piecewise function", def: "A function using different formulas on different parts of its domain" },
    { term: "Composition (f ∘ g)", def: "The function x ↦ f(g(x)) — apply g first, then f" },
    { term: "Linear / quadratic function", def: "f(x) = mx + c (line) / f(x) = ax² + bx + c (parabola)" }
  ],
  formulas: [
    {
      name: "Function evaluation",
      formula: "f(a) = [rule with x replaced by a]",
      meaning: "To find the image of a, substitute a for every x in the formula",
      vars: [{ name: "a", meaning: "the input value", unit: "—" }],
      units: "—",
      when: "Any time you need the output for a specific input",
      example: "f(x) = x² − 3x + 1 ⇒ f(−2) = 4 + 6 + 1 = 11"
    },
    {
      name: "Composition",
      formula: "(f ∘ g)(x) = f(g(x))",
      meaning: "Apply the inner function g first, then feed its result into f",
      vars: [{ name: "g(x)", meaning: "inner function output", unit: "—" }, { name: "f", meaning: "outer function", unit: "—" }],
      units: "—",
      when: "Chaining rules, e.g. discount applied then tax",
      example: "f(x)=x+2, g(x)=3x ⇒ (f∘g)(x) = 3x + 2"
    },
    {
      name: "Slope of a linear function",
      formula: "m = (y₂ − y₁)/(x₂ − x₁)",
      meaning: "Rise over run — how much f changes per unit increase in x",
      vars: [{ name: "m", meaning: "slope (rate of change)", unit: "units of y per unit of x" }],
      units: "—",
      when: "Finding or checking the rule of a straight-line function",
      example: "Points (1,5), (3,11): m = 6/2 = 3, so f(x) = 3x + 2"
    }
  ],
  workedExamples: [
    {
      problem: "If f(x) = −2x² + 5, find f(3) and f(−1).",
      given: "Rule f(x) = −2x² + 5",
      formula: "Substitute the input for x",
      substitution: "f(3) = −2(9) + 5; f(−1) = −2(1) + 5",
      calculation: "f(3) = −18 + 5 = −13; f(−1) = −2 + 5 = 3",
      answer: "f(3) = −13, f(−1) = 3"
    },
    {
      problem: "Find the natural domain of g(x) = (x + 1)/(√(2x − 6)).",
      given: "Rational expression with a square root in the denominator",
      formula: "Radicand ≥ 0 for the root; denominator ≠ 0",
      substitution: "2x − 6 ≥ 0 gives x ≥ 3; but denominator ≠ 0 means 2x − 6 ≠ 0, so x ≠ 3",
      calculation: "Combine: x > 3",
      answer: "Domain = {x : x > 3} = (3, ∞)"
    },
    {
      problem: "A courier charges a flat 50 ETB plus 12 ETB per kg. Write the cost as a function of weight w, state its domain, and find the cost of a 25 kg parcel.",
      given: "Fixed charge 50 ETB, variable 12 ETB/kg",
      formula: "C(w) = 12w + 50 (linear function)",
      substitution: "C(25) = 12(25) + 50",
      calculation: "= 300 + 50 = 350",
      answer: "C(w) = 12w + 50, domain w ≥ 0; a 25 kg parcel costs 350 ETB"
    },
    {
      problem: "f(x) = 2x − 1 and g(x) = x². Find (g ∘ f)(2) and (f ∘ g)(2). Are they equal?",
      given: "Two rules",
      formula: "(g∘f)(x) = g(f(x)); (f∘g)(x) = f(g(x))",
      substitution: "f(2) = 3, so g(f(2)) = g(3) = 9. g(2) = 4, so f(g(2)) = f(4) = 7",
      calculation: "9 vs 7",
      answer: "(g∘f)(2) = 9, (f∘g)(2) = 7 — composition is not commutative"
    },
    {
      problem: "Piecewise: f(x) = x + 2 if x < 0; f(x) = x² if x ≥ 0. Find f(−3), f(0), f(2).",
      given: "Two branches with their intervals",
      formula: "Choose the branch whose condition the input satisfies",
      substitution: "−3 < 0 → use x + 2; 0 ≥ 0 → use x²; 2 ≥ 0 → use x²",
      calculation: "f(−3) = −1; f(0) = 0; f(2) = 4",
      answer: "f(−3) = −1, f(0) = 0, f(2) = 4"
    }
  ],
  commonMistakes: [
    "Reading f(x) as 'f multiplied by x' — it is one symbol meaning 'output of f on x'",
    "When computing f(−2) for f(x) = x², writing −4 instead of (−2)² = +4 — keep the parentheses",
    "Forgetting the denominator ≠ 0 condition when a root sits in the denominator (x > 3, not x ≥ 3)",
    "Assuming the domain of every formula is all real numbers",
    "Doing composition outer-first: (f∘g)(x) means g FIRST, then f",
    "Graphing a piecewise function without checking which endpoint is included (solid dot) vs excluded (open circle)",
    "Thinking f(a + h) = f(a) + f(h) — the rule applies to the whole input, e.g. (a+h)² ≠ a² + h²"
  ],
  applications: [
    "Taxi fares in Addis: total = starting fare + rate × distance is a linear function C(d)",
    "Business: revenue R(q) = price × quantity sold; profit P(q) = R(q) − C(q) is a composition of functions",
    "Medicine: drug concentration in blood over time is modelled by piecewise functions (absorption then decay phases)",
    "Physics: the ball's height h(t) = −5t² + 20t is a quadratic function of time",
    "Telecom: data-bundle pricing tiers are piecewise functions — different rates below/above the cap"
  ],
  summary: "A function assigns exactly one output f(x) to each input x; its natural domain excludes zero denominators, negative radicands and impossible context values. Linear, quadratic, absolute-value and piecewise rules each have signature graphs, and functions combine by arithmetic and by composition (inner first, not commutative). Evaluation, domain-finding and rule↔table↔graph translation are the core working skills.",
  visuals: [
    { type: "steps", config: { title: "The function machine", steps: [{ label: "Input x", detail: "drop a legal number in" }, { label: "Apply rule", detail: "e.g. ×2 then +1" }, { label: "One output", detail: "f(x) pops out — always exactly one" }, { label: "Read back", detail: "domain = legal inputs; range = possible outputs" }] } },
    { type: "tableVisual", config: { title: "Function zoo — shapes & domains", headers: ["Type", "Rule", "Shape", "Range"], rows: [["Linear", "mx + c", "line", "all reals"], ["Quadratic", "ax²+bx+c", "parabola", "y ≥ vertex"], ["Absolute", "a|x−h|+k", "V", "y ≥ k"], ["Piecewise", "2+ rules", "broken", "per branch"]] } },
    { type: "qa", config: { title: "Fast-fire function checks", pairs: [{ q: "f(x)=x²−1, f(3)?", a: "<b>8</b> — 9 − 1" }, { q: "Domain of √(x−5)?", a: "<b>x ≥ 5</b> — radicand ≥ 0" }, { q: "f∘g means which first?", a: "<b>g (inner) first</b>, then f" }] } }
  ],
  questions: [
    { type: "mcq", q: "If f(x) = 3x − 4, what is f(−2)?", options: ["2", "−10", "−2", "10"], answer: 1, difficulty: 1, explanation: "f(−2) = 3(−2) − 4 = −6 − 4 = −10" },
    { type: "mcq", q: "The natural domain of f(x) = 1/(x² − 9) is:", options: ["all reals", "x ≠ 3", "x ≠ ±3", "x > 3"], answer: 2, difficulty: 2, explanation: "x² − 9 = 0 at x = 3 and x = −3; both must be excluded" },
    { type: "mcq", q: "Which graph is NOT a function?", options: ["a straight slanted line", "a parabola opening upward", "a circle", "a V-shape"], answer: 2, difficulty: 1, explanation: "A circle fails the vertical line test — most x-values give two y-values" },
    { type: "mcq", q: "f(x) = x + 1, g(x) = x². What is (f ∘ g)(3)?", options: ["16", "10", "9", "49"], answer: 1, difficulty: 2, explanation: "g(3) = 9, then f(9) = 10" },
    { type: "tf", q: "f(a + b) always equals f(a) + f(b).", answer: false, difficulty: 2, explanation: "Only for special linear-through-origin functions; e.g. f(x)=x²: (a+b)² ≠ a²+b²" },
    { type: "tf", q: "The range of f(x) = |x| is all non-negative reals.", answer: true, difficulty: 1, explanation: "Absolute value is never negative, and every y ≥ 0 is hit (x = ±y)" },
    { type: "short", q: "For f(x) = 2x² + 1, find f(2).", answer: "9", difficulty: 1, explanation: "2(4) + 1 = 9" },
    { type: "short", q: "State the domain of f(x) = √(x + 3) over the reals.", answer: "x ≥ -3|x >= -3|all reals greater than or equal to -3", difficulty: 2, explanation: "Need x + 3 ≥ 0, so x ≥ −3" },
    { type: "concept", q: "A table lists x: 1,2,3,2 and y: 4,5,6,7. Is it a function? Why?", answer: "no|not a function|2 has two outputs|repeated x", difficulty: 2, explanation: "x = 2 appears with both y = 5 and y = 7 — one input, two outputs" },
    { type: "calc", q: "Taxi cost C(d) = 30 + 15d (ETB, d in km). How much for 8 km?", answer: "150", difficulty: 1, explanation: "C(8) = 30 + 15(8) = 30 + 120 = 150 ETB" }
  ]
};

Lessons["g10-mathematics-um1-t3"] = {
  overview: "Mathematics earns its keep when a function starts describing reality. This lesson practises the modelling cycle: read a situation, choose variables, write a rule (linear, piecewise or quadratic), respect the realistic domain, then use the model to predict and interpret — with Ethiopian-flavoured scenarios from mobile money to rooftop water tanks.",
  objectives: [
    "Translate word problems into function rules with named variables",
    "Choose realistic domains and ranges from context",
    "Model situations with linear and piecewise functions",
    "Read predictions and intercepts back from a model",
    "Judge whether a model is reasonable (fit, limits, misuse)"
  ],
  simple: "Modelling means turning a story into a machine. Step 1: pick the input (what changes freely — time, kilometres, units sold) and the output (what depends on it — cost, height, profit). Step 2: find the rule, usually from a fixed part plus a rate ('50 ETB to start, then 12 per kg' → C = 50 + 12w). Step 3: clamp the domain to reality — you can't order −3 kg of shiro, and a full tank drains at some finite time. Step 4: use it: substitute to predict, and interpret what the intercepts MEAN (the 50 is the base fee; where cost hits zero height means the tank is empty). A model is a useful lie: simple enough to compute, honest enough to trust — and you must know where it stops working.",
  detailed: "<p>The <b>modelling cycle</b> has four beats: <i>formulate</i> (identify variables and their relationship), <i>compute</i> (solve with the model), <i>interpret</i> (translate the maths back into context), <i>validate</i> (check against reality and refine). Most exam errors skip the first and last beats — writing an equation without defining variables, or reporting 'x = 4.7' when the answer needed is 'the tank empties during the 5th hour'.</p><p><b>Linear models</b> fit anything with a constant rate of change: cost = fixed + rate × quantity; depreciation V(t) = V₀ − rt; temperature change per altitude. The two parameters carry meaning: the y-intercept is the starting value (initial money, base fare, full tank), and the slope is the per-unit rate (ETB per kg, ETB per km, litres drained per hour). A negative slope means decay; the x-intercept is the break-even or empty-time.</p><p><b>Piecewise models</b> handle rules that change: tiered electricity tariffs (different rate above a threshold), courier fees with a maximum, overtime pay (normal rate then 1.5×). Build them carefully: define the breakpoints, write a formula per interval, and check the value AT each breakpoint — a well-built cost function is continuous (no jump) unless the situation genuinely has one (a fixed activation fee creates a real jump at zero usage).</p><p><b>Quadratic models</b> appear when a rate itself changes — area from a fixed perimeter (A = x(P/2 − x)), projectile height (h = h₀ + v₀t − 5t²), revenue when price and quantity trade off (R = p(q)·q with p falling linearly in q). The vertex is the answer to 'maximum/minimum' questions: for R(q) the vertex q-value is the sales level that maximises revenue, and completing the square or q = −b/2a finds it.</p><p><b>Domain realism</b> is part of the model, not an afterthought: a tank-draining function C(t) = 500 − 25t only runs for 0 ≤ t ≤ 20 (after 20 hours there is no water, and the formula would absurdly go negative). Discrete contexts (people, phones sold) need integer inputs. When validating, ask: does the model behave at t = 0? Does it predict something we already know? Is the linear extrapolation still true far out (a phone plan stops being linear once you hit the cap)?</p><p>Finally, interpret everything in units. 'Slope = −25' means '25 litres leave every hour'; 'f(6) = 350' means 'a 6 km trip costs 350 ETB'; 'vertex at (40, 800)' means '40 units at 800 ETB each maximises revenue at 32,000 ETB'. The number without its sentence is only half the answer.</p>",
  keyTerms: [
    { term: "Mathematical model", def: "A function chosen to describe a real situation well enough to make predictions" },
    { term: "Rate of change (slope)", def: "How many output units change per one input unit — ETB per kg, litres per hour" },
    { term: "Initial value", def: "The output when input = 0 — the y-intercept, e.g. base fare or full tank" },
    { term: "Break-even point", def: "The input where the output hits zero or profit crosses from negative to positive" },
    { term: "Piecewise model", def: "A model whose rule changes at defined breakpoints (tariff tiers)" },
    { term: "Extrapolation", def: "Using the model outside the data range — risky, may violate the domain" },
    { term: "Validation", def: "Checking model predictions against known reality and refining" }
  ],
  formulas: [
    {
      name: "Linear cost model",
      formula: "C(x) = C₀ + r·x",
      meaning: "Total cost = fixed starting cost plus rate times quantity",
      vars: [{ name: "C₀", meaning: "fixed cost (intercept)", unit: "ETB" }, { name: "r", meaning: "rate per unit", unit: "ETB/unit" }, { name: "x", meaning: "quantity", unit: "units" }],
      units: "ETB",
      when: "Any situation with a flat fee plus a constant per-unit charge",
      example: "Delivery: 40 ETB base + 8 ETB/km ⇒ C(12 km) = 40 + 96 = 136 ETB"
    },
    {
      name: "Linear depreciation",
      formula: "V(t) = V₀ − r·t",
      meaning: "Asset value falls by a fixed amount each year",
      vars: [{ name: "V₀", meaning: "purchase value", unit: "ETB" }, { name: "r", meaning: "loss per year", unit: "ETB/year" }, { name: "t", meaning: "age", unit: "years" }],
      units: "ETB",
      when: "Straight-line value loss of vehicles, equipment",
      example: "Bajaj bought at 150,000 ETB losing 20,000/yr: V(3) = 90,000 ETB"
    },
    {
      name: "Revenue from linear demand",
      formula: "R(q) = q·p(q) = q(m − kq)",
      meaning: "Quantity sold times price, where price falls as quantity rises — a quadratic",
      vars: [{ name: "q", meaning: "units sold", unit: "count" }, { name: "p(q)", meaning: "price per unit", unit: "ETB" }],
      units: "ETB",
      when: "Maximising income when price and demand trade off",
      example: "p = 100 − 2q ⇒ R = 100q − 2q², vertex at q = 25, R = 1250 ETB"
    }
  ],
  workedExamples: [
    {
      problem: "A rooftop tank holds 600 litres and feeds a tap draining 20 L/hour. Write V(t), state the domain, and find when the tank is half full.",
      given: "Initial volume 600 L, constant drain 20 L/h",
      formula: "V(t) = 600 − 20t",
      substitution: "Half full: 300 = 600 − 20t ⇒ 20t = 300",
      calculation: "t = 15 h; empty at t = 30 h",
      answer: "V(t) = 600 − 20t, domain 0 ≤ t ≤ 30; half full after 15 hours"
    },
    {
      problem: "Telebirr transfers cost 0 ETB up to 100 ETB sent, then 1.5% of the amount above 100 ETB. Write the fee function F(a) and find the fee for 800 ETB.",
      given: "Free tier to 100, then 1.5% on the excess",
      formula: "F(a) = 0 for a ≤ 100; F(a) = 0.015(a − 100) for a > 100",
      substitution: "F(800) = 0.015(700)",
      calculation: "= 10.5",
      answer: "F(800) = 10.5 ETB — note the percent applies only to the excess, not the whole amount"
    },
    {
      problem: "A farmer fences 30 m of netting into a rectangle against a river (no fence needed along the river). Express the enclosed area A as a function of the width w (the two sides perpendicular to the river), and state the domain.",
      given: "Perimeter constraint: 2w + L = 30",
      formula: "L = 30 − 2w, so A(w) = w(30 − 2w) = 30w − 2w²",
      substitution: "Need w > 0 and L > 0 ⇒ 30 − 2w > 0 ⇒ w < 15",
      calculation: "Vertex at w = −30/(2·−2) = 7.5 m gives A = 7.5 × 15 = 112.5 m²",
      answer: "A(w) = 30w − 2w², domain 0 < w < 15; maximum area 112.5 m² at w = 7.5 m"
    },
    {
      problem: "A school orders printed exam papers: 2 ETB each for the first 200 copies, 1.5 ETB each for every copy beyond 200. Write the cost function and compute the bill for 350 copies.",
      given: "Two pricing tiers with breakpoint 200",
      formula: "C(n) = 2n for n ≤ 200; C(n) = 400 + 1.5(n − 200) for n > 200",
      substitution: "C(350) = 400 + 1.5(150)",
      calculation: "= 400 + 225 = 625",
      answer: "625 ETB. Check continuity: at n = 200 both branches give 400 ✓"
    }
  ],
  commonMistakes: [
    "Writing the formula but never defining what each variable means (and its units)",
    "Leaving the domain as 'all reals' when context demands 0 ≤ t ≤ 30 or whole numbers only",
    "Applying a percentage tier to the WHOLE amount when the rule says 'above the threshold'",
    "Confusing the two intercepts: y-intercept = starting value, x-intercept = when it runs out / breaks even",
    "Extrapolating a linear model far beyond observed data where the relationship bends (tariff caps, tank empty)",
    "Reporting 't = 15' instead of 'the tank is half full after 15 hours' — interpretation is half the marks",
    "Forgetting the river-side fence: using 2w + 2L = P when only three sides are fenced"
  ],
  applications: [
    "Ethio Telecom airtime top-up bonuses modelled as piecewise functions of credit purchased",
    "Water-tank and rainfall planning for Addis households: volume functions with hard domains",
    "Small business: profit P(x) = revenue − cost tells a kiosk owner the break-even quantity of teff bundles",
    "Vehicle value: dealers use linear depreciation models for bajaj and lala cars",
    "Kebele health data: vaccination counts over time fitted with simple growth models to plan supply"
  ],
  summary: "Modelling turns a situation into a function: choose input/output variables, write the rule (linear for constant rates, piecewise for tiers, quadratic for max/min problems), clamp the domain to reality, then interpret results in context with units. The intercepts carry the story — starting value and break-even — and validation against known facts is what separates a usable model from wishful algebra.",
  visuals: [
    { type: "cycleDiagram", config: { title: "The modelling cycle", nodes: ["Read situation", "Define variables", "Write rule + domain", "Compute", "Interpret & validate"] } },
    { type: "steps", config: { title: "Building a piecewise tariff model", steps: [{ label: "Find breakpoints", detail: "where the rule changes (e.g. 200 copies)" }, { label: "One formula per tier", detail: "2n | 400 + 1.5(n−200)" }, { label: "Check the join", detail: "both branches agree at the breakpoint" }, { label: "State the domain", detail: "n ≥ 0, whole numbers" }] } },
    { type: "qa", config: { title: "Reading models back", pairs: [{ q: "V(t) = 600 − 20t: what does −20 mean?", a: "<b>20 L drain per hour</b> (negative slope = decreasing)" }, { q: "When does that tank empty?", a: "<b>t = 30 h</b> — solve 600 − 20t = 0" }, { q: "Why not use t = 40?", a: "Outside the <b>domain</b> — no water left after 30 h" }] } }
  ],
  questions: [
    { type: "mcq", q: "A candle 24 cm long burns 1.5 cm per hour. Which models its height?", options: ["h(t) = 24 + 1.5t", "h(t) = 24 − 1.5t", "h(t) = 1.5t", "h(t) = 24t − 1.5"], answer: 1, difficulty: 1, explanation: "Starts at 24 and decreases 1.5 per hour; domain 0 ≤ t ≤ 16" },
    { type: "mcq", q: "The slope of a cost model C(w) = 12w + 50 tells you…", options: ["the fixed charge", "the cost per extra unit", "the total cost", "the domain"], answer: 1, difficulty: 1, explanation: "Slope 12 = marginal cost, the ETB added per extra kg" },
    { type: "mcq", q: "For Q3-style revenue R(q) = 100q − 2q², revenue is maximised at:", options: ["q = 25", "q = 50", "q = 100", "q = 20"], answer: 0, difficulty: 3, explanation: "Vertex q = −b/2a = −100/(2·(−2)) = 25; R(25) = 1250 ETB" },
    { type: "mcq", q: "A delivery costs 30 ETB base + 10 ETB/km, capped at 150 ETB total. The model is best described as:", options: ["pure linear", "piecewise (linear then constant)", "quadratic", "exponential"], answer: 1, difficulty: 2, explanation: "Linear up to 12 km, then flat at the cap — two branches" },
    { type: "tf", q: "A model's domain should reflect physical limits of the situation.", answer: true, difficulty: 1, explanation: "Negative time, negative copies, over-empty tanks are all impossible inputs" },
    { type: "tf", q: "Extrapolating far beyond observed data is always safe if the formula is simple.", answer: false, difficulty: 2, explanation: "Real relationships bend; linear trends break outside their observed range" },
    { type: "calc", q: "V(t) = 600 − 20t litres. How much water remains after 12 hours?", answer: "360", difficulty: 1, explanation: "600 − 20(12) = 600 − 240 = 360 L" },
    { type: "calc", q: "Phone plan: 200 ETB/month includes 5 GB, then 40 ETB per extra GB. Bill for 8.5 GB (charge per full extra GB, round up)?", answer: "360|340", difficulty: 2, explanation: "3.5 extra GB → 4 charged: 200 + 4×40 = 360 ETB (340 if not rounded up)" },
    { type: "short", q: "In C(n) = 2n (n ≤ 200), C(n) = 400 + 1.5(n−200) (n > 200): what is the breakpoint quantity?", answer: "200", difficulty: 1, explanation: "The tier changes at n = 200 copies" },
    { type: "concept", q: "A ball's height is h(t) = −5t² + 20t. Why is the domain 0 ≤ t ≤ 4, not all reals?", answer: "hits ground at 4|negative time impossible|height negative after|ball lands", difficulty: 2, explanation: "h = 0 at t = 0 and t = 4 (launch and landing); beyond that the model gives impossible negative heights" }
  ]
};
