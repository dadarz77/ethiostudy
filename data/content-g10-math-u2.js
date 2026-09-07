/* Content: Grade 10 Mathematics — Unit 2: Polynomial Functions (4 topics) */
window.Lessons = window.Lessons || {};

Lessons["g10-mathematics-um2-t1"] = {
  overview: "Polynomials are the friendliest functions in algebra: add, subtract, multiply, and you still have a polynomial. This lesson builds the vocabulary — term, coefficient, degree, standard form — and classifies the zoo from constants to quartics, setting up the machinery of theorems and zeros that follows.",
  objectives: [
    "Identify polynomial expressions and reject non-polynomials",
    "Name terms, coefficients and the degree of a polynomial",
    "Write polynomials in standard form (descending powers)",
    "Classify by degree and number of terms (monomial, binomial, trinomial)",
    "Evaluate polynomials at given values"
  ],
  simple: "A polynomial is an expression built from x raised to WHOLE-number powers, multiplied by numbers and added together — like 4x³ − 2x + 7. No x in a denominator, no √x, no |x|, no negative exponents: those break the club. Each chunk (4x³, −2x, 7) is a term; the number in front is its coefficient; the biggest exponent is the degree, which controls the polynomial's personality. Degree 0 is a flat line, degree 1 a straight slope, degree 2 a U-shaped parabola, degree 3 an S-curve. Standard form just means writing terms from highest power down: 4x³ − 2x + 7 (notice the missing x² term — write 0x² if you need the slot). The leading coefficient, here 4, is the boss: it decides the end behaviour — which way the graph runs off at the far edges.",
  detailed: "<p>A <b>polynomial in x</b> has the form p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀ where n is a non-negative integer and the aᵢ are real numbers (the <b>coefficients</b>). The <b>degree</b> is the largest exponent with a non-zero coefficient, written deg p = n, provided aₙ ≠ 0. The number aₙ is the <b>leading coefficient</b> and a₀ the <b>constant term</b>. The zero polynomial p(x) = 0 is the odd one out — its degree is undefined.</p><p>Naming follows two independent axes. By <b>degree</b>: 0 → constant, 1 → linear, 2 → quadratic, 3 → cubic, 4 → quartic. By <b>number of terms</b>: monomial (one term, e.g. 5x²), binomial (two, e.g. x² − 9), trinomial (three, e.g. x² + 5x + 6). So x² − 9 is simultaneously a quadratic AND a binomial — the axes don't compete. <b>Standard form</b> orders terms by descending degree; <b>general form</b> is the aₙxⁿ + … + a₀ template itself.</p><p>Why the whole-number exponent rule? Because polynomials are exactly the expressions you can build from x using +, − and × alone — and multiplication of powers adds exponents, which can never produce fractions or negatives. This is also why x^(1/2) = √x, 3/x = 3x⁻¹, and x^(2/3) are NOT polynomials: they need division or roots. Spotting these impostors is a favourite exam trick.</p><p>The <b>leading coefficient and degree together determine end behaviour</b>: if n is even, both ends point the same way (up if aₙ > 0, down if aₙ < 0); if n is odd, the ends oppose — for aₙ > 0 the graph rises from bottom-left to top-right. A cubic with aₙ > 0 falls to the left and climbs to the right; flip the sign and it mirrors. This single fact lets you sketch the 'shape at a glance' before any plotting.</p><p><b>Evaluation</b> is substitution again: p(3) for p(x) = 2x³ − x + 5 is 2(27) − 3 + 5 = 56. Watch negative inputs with odd powers: p(−2) = 2(−8) − (−2) + 5 = −16 + 2 + 5 = −9. A more efficient evaluation method for many inputs is Horner's scheme (nested multiplication): 2x³ − x + 5 = ((2x + 0)x − 1)x + 5 — the missing x² slot becomes a 0 coefficient, which is exactly why standard form with explicit gaps matters in computing.</p>",
  keyTerms: [
    { term: "Polynomial", def: "Expression aₙxⁿ + … + a₀ with whole-number exponents and real coefficients" },
    { term: "Term", def: "A single piece of the polynomial, e.g. −2x in 4x³ − 2x + 7" },
    { term: "Coefficient", def: "The numerical factor of a term (aₙ for xⁿ)" },
    { term: "Degree", def: "The highest exponent with a non-zero coefficient" },
    { term: "Leading coefficient", def: "The coefficient aₙ of the highest-power term" },
    { term: "Standard form", def: "Terms written in descending order of degree" },
    { term: "Monomial / binomial / trinomial", def: "Polynomial with 1 / 2 / 3 terms" },
    { term: "End behaviour", def: "Which direction the graph runs off as x → ±∞, set by degree parity and leading sign" }
  ],
  formulas: [
    {
      name: "General polynomial",
      formula: "p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ⋯ + a₁x + a₀, aₙ ≠ 0",
      meaning: "The template for every polynomial of degree n",
      vars: [{ name: "n", meaning: "degree (whole number ≥ 0)", unit: "—" }, { name: "aₙ", meaning: "leading coefficient", unit: "—" }, { name: "a₀", meaning: "constant term", unit: "—" }],
      units: "—",
      when: "Naming any polynomial's full structure",
      example: "4x³ − 2x + 7: n = 3, aₙ = 4, a₀ = 7, missing a₂ = 0"
    },
    {
      name: "Degree of a product",
      formula: "deg(p·q) = deg p + deg q",
      meaning: "Multiplying polynomials adds their degrees (powers add when you multiply)",
      vars: [{ name: "deg p", meaning: "degree of first factor", unit: "—" }],
      units: "—",
      when: "Predicting the shape of expanded products without expanding",
      example: "(x² + 1)(x³ − 2x) has degree 2 + 3 = 5"
    }
  ],
  workedExamples: [
    {
      problem: "Is each a polynomial? (a) 5x⁴ − 3x² + x (b) 4x^(3/2) + 2 (c) 7/x + x² (d) √5·x² − 3",
      given: "Four expressions",
      formula: "Polynomial = whole-number exponents only, no x in denominators or roots",
      substitution: "(a) exponents 4, 2, 1 ✓ (b) 3/2 ✗ (c) 7/x = 7x⁻¹ ✗ (d) √5 is just a number multiplying x² ✓",
      calculation: "(a) and (d) qualify",
      answer: "(a) yes, degree 4; (b) no (fractional exponent); (c) no (negative exponent); (d) yes, degree 2 — irrational coefficients are allowed"
    },
    {
      problem: "Write p(x) = 2x − 7 + 5x³ − x⁴ in standard form and state degree, leading coefficient and classification.",
      given: "Scrambled polynomial",
      formula: "Order by descending exponent",
      substitution: "−x⁴ + 5x³ + 2x − 7",
      calculation: "Highest power 4, its coefficient −1, four terms",
      answer: "Standard form −x⁴ + 5x³ + 2x − 7; degree 4 (quartic), leading coefficient −1; end behaviour: both ends fall (even degree, negative lead)"
    },
    {
      problem: "Evaluate p(x) = 2x³ − x + 5 at x = 3 and x = −2.",
      given: "Cubic with missing x² term",
      formula: "Direct substitution",
      substitution: "p(3) = 2(27) − 3 + 5; p(−2) = 2(−8) − (−2) + 5",
      calculation: "54 − 3 + 5 = 56; −16 + 2 + 5 = −9",
      answer: "p(3) = 56, p(−2) = −9 — note the odd power keeps the negative sign"
    },
    {
      problem: "A box is made from a square sheet of side x by cutting 3 cm squares from each corner. Express the volume V(x) and state its degree and realistic domain.",
      given: "Base (x − 6) by (x − 6), height 3",
      formula: "V(x) = 3(x − 6)² = 3x² − 36x + 108",
      substitution: "Need x − 6 > 0",
      calculation: "Expanded: quadratic, degree 2",
      answer: "V(x) = 3x² − 36x + 108, degree 2, domain x > 6 cm"
    }
  ],
  commonMistakes: [
    "Calling √x or 1/x a polynomial — fractional and negative exponents are disqualified",
    "Rejecting √5·x² because of the root — the root is on the COEFFICIENT, which is fine; only x's exponents matter",
    "Saying the degree of 4x³ − 2x + 7 is 3 terms / miscounting terms as degree",
    "Forgetting the missing term's zero coefficient when ordering or using Horner evaluation",
    "Writing the leading coefficient of −x⁴ + 5x³ + 2x − 7 as +1 (it is −1) or as 4 (that's the degree)",
    "Evaluating p(−2) for 2x³ as 2(−2)³ = +16 — odd power keeps the minus: −16",
    "Classifying by degree AND term-count as if they must agree — a quadratic trinomial is two labels at once"
  ],
  applications: [
    "Box volume V(x) = x(20 − 2x)(12 − 2x) for packaging design is a cubic — factories use it to size cartons",
    "Profit curves for small traders (revenue minus cost) are often quadratic polynomials",
    "Computer graphics: smooth curves between pixels are built from cubic polynomials (splines)",
    "Engineering beams: bending-moment diagrams along a loaded beam are polynomial functions of position",
    "Ethiopian coffee export pricing models combine harvest-yield polynomials with price functions"
  ],
  summary: "A polynomial stacks terms aₙxⁿ with whole-number exponents only; its degree (top exponent) and leading coefficient classify it and dictate end behaviour — even degree means both ends agree, odd means they oppose. Standard form orders powers descending, with zero placeholders for missing terms, and evaluation is careful substitution (mind negative bases with odd powers).",
  visuals: [
    { type: "tableVisual", config: { title: "Polynomial zoo by degree", headers: ["Degree", "Name", "Example", "Shape"], rows: [["0", "Constant", "7", "flat line"], ["1", "Linear", "2x+1", "slope"], ["2", "Quadratic", "x²−9", "U curve"], ["3", "Cubic", "x³−x", "S curve"], ["4", "Quartic", "x⁴−5", "W / bowl"]] } },
    { type: "comparison", config: { title: "Polynomial or impostor?", left: { name: "✓ Polynomial", items: ["4x³ − 2x + 7", "√5·x² − 3", "0.5x⁶", "−x"] }, right: { name: "✗ Not one", items: ["4x^(3/2)", "7/x + x²", "√x + 2", "|x| − 1"] } } },
    { type: "steps", config: { title: "Reading a polynomial's identity", steps: [{ label: "Standard form", detail: "sort powers descending" }, { label: "Degree", detail: "top exponent → name" }, { label: "Leading coeff", detail: "its number → end behaviour" }, { label: "Count terms", detail: "mono / bi / tri-nomial" }] } }
  ],
  questions: [
    { type: "mcq", q: "What is the degree of p(x) = 6 − 4x⁵ + x²?", options: ["6", "5", "2", "3"], answer: 1, difficulty: 1, explanation: "Highest exponent is 5 (order doesn't matter — standard form would be −4x⁵ + x² + 6)" },
    { type: "mcq", q: "Which is NOT a polynomial?", options: ["3x² + x", "x⁵", "5x^(1/2) + 1", "−7"], answer: 2, difficulty: 1, explanation: "The exponent 1/2 (a root of x) is not a whole number" },
    { type: "mcq", q: "The leading coefficient of −2x⁴ + 5x³ − x is:", options: ["5", "2", "−2", "4"], answer: 2, difficulty: 1, explanation: "Coefficient of the highest-power term x⁴ is −2" },
    { type: "mcq", q: "A polynomial with degree 3 and three terms is called a…", options: ["cubic trinomial", "quadratic trinomial", "cubic binomial", "quartic monomial"], answer: 0, difficulty: 2, explanation: "Degree 3 = cubic; three terms = trinomial; both labels apply" },
    { type: "tf", q: "The number 9 is a polynomial of degree 1.", answer: false, difficulty: 2, explanation: "9 = 9x⁰ is a constant polynomial of degree 0" },
    { type: "tf", q: "Every polynomial can be written in standard form.", answer: true, difficulty: 1, explanation: "Just reorder the terms by descending degree" },
    { type: "short", q: "For p(x) = x³ − 4x + 1, what is the coefficient of x²?", answer: "0|zero", difficulty: 2, explanation: "The x² term is missing — its coefficient is 0" },
    { type: "calc", q: "Evaluate p(x) = x³ − 4x + 1 at x = −2.", answer: "1", difficulty: 2, explanation: "(−8) − 4(−2) + 1 = −8 + 8 + 1 = 1" },
    { type: "concept", q: "Describe the end behaviour of f(x) = −x³ + 2x.", answer: "rises left falls right|falls right|rises to left|odd degree negative lead", difficulty: 3, explanation: "Odd degree with negative leading coefficient: as x → −∞, f → +∞; as x → +∞, f → −∞" },
    { type: "ordering", q: "Order by increasing degree:", options: ["x⁴−1, x²+3x, 7, 5x", "7, 5x, x²+3x, x⁴−1", "5x, 7, x⁴−1, x²+3x", "x²+3x, 7, 5x, x⁴−1"], answer: 1, difficulty: 1, explanation: "Constant (0) → linear (1) → quadratic (2) → quartic (4)" }
  ]
};

Lessons["g10-mathematics-um2-t2"] = {
  overview: "Polynomials are closed under arithmetic: add, subtract, multiply or (long-)divide them and you stay in the club. This lesson masters the operations — combining like terms, the distributive engine behind FOIL, special product shortcuts, and polynomial long division that sets up the remainder theorem.",
  objectives: [
    "Add and subtract polynomials by combining like terms",
    "Multiply polynomials using distribution (FOIL as a case)",
    "Apply special-product shortcuts (difference of squares, perfect squares)",
    "Divide a polynomial by a binomial with long division",
    "Check answers by substitution or degree reasoning"
  ],
  simple: "Polynomial arithmetic is tidy algebra with one mantra: only LIKE terms combine — x² with x², x with x, numbers with numbers. Adding is collecting: (3x² + 2x) + (x² − 5x) = 4x² − 3x. Subtracting means flipping every sign in the second bracket FIRST, then collecting — most errors live there. Multiplication is the opposite: nothing combines until you distribute every term of one bracket across every term of the other, so (x + 2)(x − 3) = x² − 3x + 2x − 6 = x² − x − 6. Three shortcuts save real time: (a + b)(a − b) = a² − b² (difference of squares), (a + b)² = a² + 2ab + b², (a − b)² = a² − 2ab + b². Division works like primary-school long division but with terms: divide, multiply, subtract, bring down — until the remainder's degree drops below the divisor's.",
  detailed: "<p><b>Addition/subtraction</b> rests on the distributive law: (3x² + 2x) + (x² − 5x) = (3+1)x² + (2−5)x = 4x² − 3x. For subtraction, treat −(P − Q) as distributing −1 across EVERY term of Q before collecting: (5x² − 2x + 1) − (2x² + 3x − 4) = 5x² − 2x + 1 − 2x² − 3x + 4 = 3x² − 5x + 5. The sign flip on the constant (−(−4) = +4) is the classic slip. Degrees never increase under addition: deg(P + Q) ≤ max(deg P, deg Q), with equality unless the leading terms cancel.</p><p><b>Multiplication</b> distributes every pair: (aₙxⁿ + …)(bₘxᵐ + …) produces n+1 × m+1 products before collecting. FOIL (First-Outer-Inner-Last) is just the 2×2 case. The degree multiplies additively: deg(P·Q) = deg P + deg Q — a free sanity check. <b>Special products</b> worth memorising: (a+b)(a−b) = a² − b² (the cross terms cancel), (a±b)² = a² ± 2ab + b² (the middle term is TWICE the product — forgetting it gives the famous error (x+3)² = x² + 9), and (a±b)³ = a³ ± 3a²b + 3ab² ± b³. These work with any expressions substituted for a and b: (2x − 5y)² = 4x² − 20xy + 25y².</p><p><b>Long division</b> mirrors numeric division: arrange both polynomials in descending powers (with zero placeholders!), divide leading term by leading term to get each quotient term, multiply back, subtract, bring down. Example: (2x³ − 3x² + 0x + 5) ÷ (x − 1): quotient 2x² − x − 1, remainder 4, so 2x³ − 3x² + 5 = (x − 1)(2x² − x − 1) + 4. The <b>remainder</b> r has degree less than the divisor, and the identity dividend = divisor × quotient + remainder is the backbone of the remainder and factor theorems coming next lesson. Synthetic division is the compressed algorithm when the divisor is x − c.</p><p><b>Checking</b> is cheap and professional: substitute a convenient value (x = 1 or x = 0) into both sides of your claimed identity; verify degrees add correctly; for multiplication, count terms before collecting. In exam settings, one substitution catches 90% of sign errors.</p>",
  keyTerms: [
    { term: "Like terms", def: "Terms with identical variable parts (same powers) — only these combine" },
    { term: "FOIL", def: "First–Outer–Inner–Last: the 2×2 distribution pattern for binomial products" },
    { term: "Difference of squares", def: "(a + b)(a − b) = a² − b²" },
    { term: "Perfect square", def: "(a ± b)² = a² ± 2ab + b²" },
    { term: "Dividend / divisor / quotient / remainder", def: "The four roles in P(x) = D(x)·Q(x) + R(x)" },
    { term: "Zero placeholder", def: "Writing 0x² so columns stay aligned in long division" },
    { term: "Closure", def: "Polynomials stay polynomials under +, −, × (and ÷ with remainder)" }
  ],
  formulas: [
    {
      name: "Difference of squares",
      formula: "(a + b)(a − b) = a² − b²",
      meaning: "Conjugate binomials multiply to a clean two-term difference",
      vars: [{ name: "a, b", meaning: "any expressions", unit: "—" }],
      units: "—",
      when: "Expanding or factoring patterns like x² − 49",
      example: "(3x + 4)(3x − 4) = 9x² − 16"
    },
    {
      name: "Square of a binomial",
      formula: "(a ± b)² = a² ± 2ab + b²",
      meaning: "The middle term is twice the product of the parts",
      vars: [{ name: "2ab", meaning: "the middle term (often forgotten!)", unit: "—" }],
      units: "—",
      when: "Expanding (x + 5)², completing the square",
      example: "(2x − 3)² = 4x² − 12x + 9"
    },
    {
      name: "Division identity",
      formula: "P(x) = D(x)·Q(x) + R(x), deg R < deg D",
      meaning: "Dividend equals divisor times quotient plus remainder",
      vars: [{ name: "Q(x)", meaning: "quotient", unit: "—" }, { name: "R(x)", meaning: "remainder", unit: "—" }],
      units: "—",
      when: "Every polynomial division; foundation of remainder theorem",
      example: "2x³ − 3x² + 5 = (x − 1)(2x² − x − 1) + 4"
    }
  ],
  workedExamples: [
    {
      problem: "Simplify (5x² − 2x + 1) − (2x² + 3x − 4).",
      given: "Subtraction of two trinomials",
      formula: "Distribute −1 across the second bracket, then collect",
      substitution: "= 5x² − 2x + 1 − 2x² − 3x + 4",
      calculation: "(5−2)x² + (−2−3)x + (1+4)",
      answer: "3x² − 5x + 5 — note +4 came from −(−4)"
    },
    {
      problem: "Expand and simplify (x + 2)(x² − 3x + 4).",
      given: "Binomial × trinomial",
      formula: "Distribute each term of the binomial",
      substitution: "= x(x² − 3x + 4) + 2(x² − 3x + 4) = x³ − 3x² + 4x + 2x² − 6x + 8",
      calculation: "Collect: x³ + (−3+2)x² + (4−6)x + 8",
      answer: "x³ − x² − 2x + 8 (degree check: 1 + 2 = 3 ✓)"
    },
    {
      problem: "Use special products: expand (2x − 5y)² and (3a + 2b)(3a − 2b).",
      given: "Perfect-square and difference-of-squares patterns",
      formula: "(a−b)² = a² − 2ab + b²; (a+b)(a−b) = a² − b²",
      substitution: "a = 2x, b = 5y: 4x² − 2(2x)(5y) + 25y². a = 3a, b = 2b: 9a² − 4b²",
      calculation: "Middle term: 2·2x·5y = 20xy",
      answer: "(2x − 5y)² = 4x² − 20xy + 25y²; (3a + 2b)(3a − 2b) = 9a² − 4b²"
    },
    {
      problem: "Divide 2x³ − 3x² + 5 by x − 1 using long division.",
      given: "Cubic (missing x term → write + 0x) ÷ linear",
      formula: "P = D·Q + R",
      substitution: "2x³ ÷ x = 2x²; subtract 2x³ − 2x² → −x² + 0x; −x² ÷ x = −x; subtract −x² + x → −x + 5; −x ÷ x = −1; subtract −x + 1 → remainder 4",
      calculation: "Q = 2x² − x − 1, R = 4",
      answer: "2x³ − 3x² + 5 = (x − 1)(2x² − x − 1) + 4. Check at x = 1: LHS = 4, RHS = 0 + 4 ✓"
    },
    {
      problem: "A rectangle has area A(x) = 6x² + 7x − 20 and width w(x) = 2x + 5. Find the length.",
      given: "A = length × width",
      formula: "length = A ÷ w (exact division expected)",
      substitution: "6x² ÷ 2x = 3x; subtract 6x² + 15x → −8x − 20; −8x ÷ 2x = −4",
      calculation: "Quotient 3x − 4, remainder 0",
      answer: "Length = 3x − 4. Check: (2x + 5)(3x − 4) = 6x² − 8x + 15x − 20 = 6x² + 7x − 20 ✓"
    }
  ],
  commonMistakes: [
    "Subtracting only the first term of the second bracket — the minus sign must hit EVERY term",
    "Expanding (a + b)² as a² + b² — the middle term 2ab is mandatory",
    "FOIL applied to binomial × trinomial — you need 6 products, not 4",
    "Losing the zero placeholder in long division (missing x term) and misaligning columns",
    "Stopping division when the remainder's degree is NOT yet below the divisor's",
    "Sign errors in difference of squares: (a+b)(a−b) = a² − b², never a² + b²",
    "Claiming deg(P + Q) = deg P + deg Q — addition never increases degree beyond the max"
  ],
  applications: [
    "Area/length problems: factoring A(x) = 6x² + 7x − 20 recovers plot or packaging dimensions",
    "Physics: (v₀ + at)² expansions appear in kinetic-energy calculations",
    "Economics: total revenue (p + x)(n − x) expands to a quadratic whose vertex gives the optimal price change",
    "Engineering tolerances: multiplying (L ± δ) expressions expands to nominal ± tolerance terms",
    "Computer algebra: every CAS (including phone calculators) runs these distribution algorithms under the hood"
  ],
  summary: "Add/subtract by collecting like terms (flipping all signs of the subtracted bracket); multiply by full distribution — special products (a±b)² and a²−b² are memorised shortcuts; divide with long division keeping zero placeholders, ending at P = D·Q + R with deg R < deg D. Degree rules and a quick substitution check catch most errors.",
  visuals: [
    { type: "steps", config: { title: "Polynomial long division", steps: [{ label: "Standard form", detail: "descending powers + 0 placeholders" }, { label: "Divide leads", detail: "top term ÷ top term" }, { label: "Multiply back", detail: "result × whole divisor" }, { label: "Subtract", detail: "flip signs, collect" }, { label: "Stop rule", detail: "remainder degree < divisor degree" }] } },
    { type: "comparison", config: { title: "Expand vs collect", left: { name: "Multiplying out", items: ["(x+2)(x−3)", "= x² − x − 6", "terms increase", "degrees ADD"] }, right: { name: "Collecting like", items: ["3x² + 2x² − x", "= 5x² − x", "terms shrink", "degree = max"] } } },
    { type: "qa", config: { title: "Special-product spot the slip", pairs: [{ q: "(x+4)² = x²+16?", a: "<b>No</b> — missing middle: x² + 8x + 16" }, { q: "(2x+3)(2x−3)?", a: "<b>4x² − 9</b> — difference of squares" }, { q: "Degree of (x²+1)(x³−2)?", a: "<b>5</b> — degrees add: 2+3" }] } }
  ],
  questions: [
    { type: "mcq", q: "(3x² + 2x − 1) + (x² − 4x + 5) =", options: ["4x² − 2x + 4", "4x² + 6x + 4", "2x² − 2x + 4", "4x² − 2x − 6"], answer: 0, difficulty: 1, explanation: "Collect: (3+1)x² + (2−4)x + (−1+5) = 4x² − 2x + 4" },
    { type: "mcq", q: "(x − 7)(x + 7) =", options: ["x² − 14x + 49", "x² + 49", "x² − 49", "x² − 14"], answer: 2, difficulty: 1, explanation: "Difference of squares: a² − b² with a = x, b = 7" },
    { type: "mcq", q: "The middle term of (3x + 2)² is:", options: ["6x", "12x", "9x", "4"], answer: 1, difficulty: 2, explanation: "2ab = 2·(3x)·(2) = 12x; full expansion 9x² + 12x + 4" },
    { type: "mcq", q: "When dividing a degree-5 polynomial by a degree-2 polynomial, the quotient has degree:", options: ["3", "7", "10", "2.5"], answer: 0, difficulty: 2, explanation: "Degrees subtract in division: 5 − 2 = 3" },
    { type: "tf", q: "(a + b)² = a² + b².", answer: false, difficulty: 1, explanation: "The cross term 2ab is missing — a classic error" },
    { type: "tf", q: "The product of two quadratics is always a quartic.", answer: true, difficulty: 2, explanation: "Degrees add: 2 + 2 = 4, and leading coefficients (non-zero) multiply to a non-zero lead" },
    { type: "short", q: "Expand x(x − 3)(x + 3).", answer: "x³-9x|x^3-9x|x³ − 9x", difficulty: 2, explanation: "(x−3)(x+3) = x² − 9, then ×x gives x³ − 9x" },
    { type: "calc", q: "If (x² + 5x + 6) ÷ (x + 2) = x + k exactly, find k.", answer: "3", difficulty: 2, explanation: "(x+2)(x+3) = x² + 5x + 6, so k = 3" },
    { type: "concept", q: "Why must you write 0x² when dividing 2x³ − 3x² + 5 by x − 1? (the missing term is x)", answer: "placeholder|keep columns aligned|missing term|alignment", difficulty: 2, explanation: "The x term is missing; the 0x placeholder keeps each power in its column so subtractions line up" },
    { type: "calc", q: "Evaluate the check: for 2x³ − 3x² + 5 = (x − 1)(2x² − x − 1) + R, find R by substituting x = 1.", answer: "4", difficulty: 3, explanation: "LHS at 1: 2 − 3 + 5 = 4; the (x−1) factor vanishes, so R = 4" }
  ]
};

Lessons["g10-mathematics-um2-t3"] = {
  overview: "The Remainder and Factor theorems turn long division into one-line mental arithmetic: the remainder of P(x) ÷ (x − c) is simply P(c), and (x − c) is a factor exactly when P(c) = 0. These two facts unlock fast factorisation and root-finding for the whole unit.",
  objectives: [
    "State and apply the Remainder Theorem",
    "State and apply the Factor Theorem",
    "Find unknown coefficients using factor/remainder conditions",
    "Factor cubics completely by locating one factor first",
    "Connect factors, zeros and x-intercepts"
  ],
  simple: "Long division is slow; these theorems are the shortcut. Remainder Theorem: divide P(x) by (x − c) and the remainder is just P(c) — plug in, done, no division at all. Want the remainder of x³ − 2x + 5 divided by x − 3? Compute P(3) = 27 − 6 + 5 = 26. Factor Theorem is the zero-special case: (x − c) is a FACTOR of P exactly when P(c) = 0. So if P(2) = 0, then (x − 2) divides P perfectly — no remainder. This is how you crack cubics: guess a small root (try ±1, ±2, ±3 — factors of the constant), confirm with the theorem, divide it out to a quadratic, finish with ordinary factoring. The same tool works backwards: 'given (x + 1) is a factor, find k' means solve P(−1) = 0 for k.",
  detailed: "<p><b>Remainder Theorem.</b> From the division identity P(x) = (x − c)Q(x) + R, where deg R < 1 so R is a constant, substitute x = c: P(c) = 0·Q(c) + R = R. The proof is one line and worth writing in exams: <i>the remainder on dividing P(x) by (x − c) is P(c)</i>. For a general divisor ax + b, the remainder is P(−b/a). This collapses 'find the remainder of 2x³ + x − 7 divided by 2x − 1' into evaluating P(1/2) = 2(1/8) + 1/2 − 7 = −6.25.</p><p><b>Factor Theorem.</b> The same identity gives: (x − c) is a factor of P ⟺ R = 0 ⟺ P(c) = 0. 'c is a zero of P' ⟺ 'x = c is a root of P(x) = 0' ⟺ '(c, 0) is an x-intercept of the graph' — four languages for one fact. Zeros of a degree-n polynomial: at most n (counting multiplicity), which is why a cubic has at most three roots and a quartic at most four.</p><p><b>Cracking cubics</b> is a three-move combination: (1) list candidate rational roots — ±(factors of constant)/(factors of leading coefficient); (2) test them with the Factor Theorem until P(c) = 0; (3) divide by (x − c) (synthetic or long) to get a quadratic, then factor or use the quadratic formula. Example: P(x) = 2x³ − 5x² − x + 6. Try x = −1: −2 − 5 + 1 + 6 = 0 ✓. Divide: P = (x + 1)(2x² − 7x + 6) = (x + 1)(2x − 3)(x − 2). Zeros: −1, 3/2, 2.</p><p><b>Finding unknowns:</b> if (x + 1) is a factor of P(x) = x³ + kx² − 4x + 6, then P(−1) = −1 + k + 4 + 6 = 0 ⇒ k = −9. If division by (x − 2) leaves remainder 10, then P(2) = 10 gives the equation. Two conditions (e.g. factor AND remainder) produce two simultaneous equations in two unknowns — the theorems become an algebraic system. Always re-substitute to check your k.</p><p><b>Rational Root Theorem</b> (the candidate list above) works because if p/q in lowest terms is a root, multiplying through clears denominators and forces p | a₀ and q | aₙ. It only lists CANDIDATES — each still needs the Factor Theorem test. When no rational root exists (e.g. x³ − x + 1), the zero is irrational and later tools (graphs, numerical methods) take over.</p>",
  keyTerms: [
    { term: "Remainder Theorem", def: "Remainder of P(x) ÷ (x − c) equals P(c)" },
    { term: "Factor Theorem", def: "(x − c) is a factor of P ⟺ P(c) = 0" },
    { term: "Zero of a polynomial", def: "An input c with P(c) = 0 — same as a root and an x-intercept" },
    { term: "Division identity", def: "P(x) = (x − c)Q(x) + R — the theorem's engine" },
    { term: "Rational Root Theorem", def: "Rational roots p/q have p | constant term, q | leading coefficient" },
    { term: "Complete factorisation", def: "Splitting P into all linear factors, e.g. (x+1)(2x−3)(x−2)" },
    { term: "Synthetic division", def: "The coefficient-only shortcut for dividing by x − c" }
  ],
  formulas: [
    {
      name: "Remainder Theorem",
      formula: "P(x) ÷ (x − c) → remainder = P(c)",
      meaning: "Skip division: evaluate the polynomial at the divisor's zero",
      vars: [{ name: "c", meaning: "the value making x − c = 0", unit: "—" }, { name: "P(c)", meaning: "the remainder", unit: "—" }],
      units: "—",
      when: "Any division by a linear expression",
      example: "P(x) = x³ − 2x + 5, divisor x − 3: remainder = 27 − 6 + 5 = 26"
    },
    {
      name: "Factor Theorem",
      formula: "(x − c) | P(x) ⟺ P(c) = 0",
      meaning: "A linear divisor is a factor exactly when the polynomial vanishes at its zero",
      vars: [{ name: "P(c)", meaning: "evaluation at c", unit: "—" }],
      units: "—",
      when: "Testing factors, finding zeros, solving for unknown coefficients",
      example: "P(2) = 0 for x³ − 3x² + 4 ⇒ (x − 2) is a factor"
    },
    {
      name: "General linear divisor",
      formula: "P(x) ÷ (ax + b) → remainder = P(−b/a)",
      meaning: "The theorem extends to any linear divisor using its own zero",
      vars: [{ name: "−b/a", meaning: "zero of ax + b", unit: "—" }],
      units: "—",
      when: "Divisors like 2x − 1, 3x + 2",
      example: "÷ (2x − 1): remainder = P(1/2)"
    }
  ],
  workedExamples: [
    {
      problem: "Find the remainder when P(x) = x³ − 4x² + 2x − 7 is divided by (x − 3).",
      given: "Cubic, linear divisor",
      formula: "Remainder = P(3)",
      substitution: "P(3) = 27 − 36 + 6 − 7",
      calculation: "= −10",
      answer: "Remainder = −10 (negative remainders are perfectly legal)"
    },
    {
      problem: "Show (x + 2) is a factor of P(x) = x³ + x² − 4x − 4, then factorise P completely.",
      given: "Cubic to crack",
      formula: "Factor Theorem, then division",
      substitution: "P(−2) = −8 + 4 + 8 − 4 = 0 ✓ so (x + 2) is a factor",
      calculation: "Divide: P ÷ (x + 2) = x² − x − 2 = (x − 2)(x + 1)",
      answer: "P(x) = (x + 2)(x − 2)(x + 1); zeros at −2, 2, −1"
    },
    {
      problem: "When P(x) = 2x³ + kx² − 5x + 2 is divided by (x + 1) the remainder is 5. Find k.",
      given: "Unknown coefficient, known remainder",
      formula: "P(−1) = 5",
      substitution: "2(−1) + k(1) − 5(−1) + 2 = 5 ⇒ −2 + k + 5 + 2 = 5",
      calculation: "k + 5 = 5 ⇒ k = 0",
      answer: "k = 0. Check: P(−1) = −2 + 0 + 5 + 2 = 5 ✓"
    },
    {
      problem: "Find the remainder when x³ − 2x + 5 is divided by (2x − 1).",
      given: "Non-monic linear divisor",
      formula: "Remainder = P(1/2) (zero of 2x − 1)",
      substitution: "(1/2)³ − 2(1/2) + 5 = 1/8 − 1 + 5",
      calculation: "= 4 + 1/8 = 33/8",
      answer: "Remainder = 33/8 = 4.125"
    },
    {
      problem: "Factorise 2x³ − 5x² − x + 6 completely.",
      given: "Cubic with leading coefficient 2",
      formula: "Candidates: ±1, ±2, ±3, ±6, ±1/2, ±3/2 (p/q rule)",
      substitution: "P(−1) = −2 − 5 + 1 + 6 = 0 ✓",
      calculation: "Divide by (x + 1): 2x² − 7x + 6 = (2x − 3)(x − 2)",
      answer: "2x³ − 5x² − x + 6 = (x + 1)(2x − 3)(x − 2); zeros −1, 3/2, 2"
    }
  ],
  commonMistakes: [
    "Using c instead of −c: for divisor (x + 2), evaluate P(−2), not P(2)",
    "Forgetting the remainder for (2x − 1) is P(1/2), not P(2) — use the divisor's own zero",
    "Concluding 'not a factor' after testing only x = 1 and x = −1 — list ALL p/q candidates",
    "Stopping after finding one factor of a cubic — the quotient quadratic usually splits further",
    "Sign slips in P(−2) with odd powers: (−2)³ = −8, not 8",
    "Claiming a degree-3 polynomial has exactly 3 REAL zeros — some cubics have only one",
    "Mixing the theorems: remainder = 0 is what makes something a factor; a non-zero remainder says nothing about factors"
  ],
  applications: [
    "Engineering: characteristic equations of circuits/vibrations are cubics cracked via the Factor Theorem",
    "Cryptography: checking whether a candidate key polynomial divides a target uses remainder tests",
    "Economics: break-even polynomials — factor to find the exact quantities where profit = 0",
    "Computer science: cyclic redundancy checks (CRC) are literally polynomial remainder computations",
    "Design: volume equations like x³ − 6x² + 9x − 2 = 0 for boxes are attacked by the same root-hunting moves"
  ],
  summary: "The division identity P = (x − c)Q + R evaluated at x = c proves both theorems: remainder = P(c), and (x − c) is a factor precisely when P(c) = 0. Cubics fall to a three-move combo — candidate roots from p/q, Factor Theorem test, divide out to a quadratic. Unknown coefficients come from solving P(c) = 0 (or = R) for the parameter.",
  visuals: [
    { type: "steps", config: { title: "Cracking a cubic", steps: [{ label: "List candidates", detail: "±factors of const ÷ factors of lead" }, { label: "Test P(c) = 0", detail: "Factor Theorem" }, { label: "Divide out", detail: "synthetic/long → quadratic" }, { label: "Finish quadratic", detail: "factor or formula" }, { label: "State zeros", detail: "all three, with signs" }] } },
    { type: "comparison", config: { title: "Remainder vs Factor", left: { name: "Remainder Thm", items: ["Answer: P(c)", "Works for ANY P, c", "P(3) = 26 → remainder 26", "Always computable"] }, right: { name: "Factor Thm", items: ["Test: P(c) = 0?", "YES → (x−c) divides P", "P(−2) = 0 → factor (x+2)", "Links root↔factor↔intercept"] } } },
    { type: "formulaDerivation", config: { title: "One-line proof", lines: [{ expr: "P(x) = (x − c)Q(x) + R", note: "division identity, R constant" }, { expr: "set x = c", note: "kills the Q term" }, { expr: "P(c) = 0·Q(c) + R", note: "the factor (c − c) = 0" }, { expr: "P(c) = R", note: "∎ remainder theorem" }, { expr: "R = 0 ⟺ (x−c) | P", note: "∎ factor theorem" }] } }
  ],
  questions: [
    { type: "mcq", q: "The remainder when P(x) is divided by (x − 4) is:", options: ["P(−4)", "P(4)", "P(0)", "4P(1)"], answer: 1, difficulty: 1, explanation: "Remainder Theorem: evaluate at the divisor's zero, x = 4" },
    { type: "mcq", q: "If P(3) = 0, which MUST be true?", options: ["(x + 3) is a factor", "(x − 3) is a factor", "P has exactly 3 zeros", "P(0) = 3"], answer: 1, difficulty: 1, explanation: "Factor Theorem: P(c) = 0 ⟺ (x − c) is a factor" },
    { type: "mcq", q: "Dividing by (2x + 6), the remainder is:", options: ["P(6)", "P(3)", "P(−3)", "P(−6)"], answer: 2, difficulty: 2, explanation: "Zero of 2x + 6 is x = −3" },
    { type: "mcq", q: "Which is NOT a rational-root candidate for 2x³ − 5x² + x + 6?", options: ["±3/2", "±2", "±5", "±1"], answer: 2, difficulty: 3, explanation: "p | 6 and q | 2: candidates ±1, ±2, ±3, ±6, ±1/2, ±3/2 — 5 divides neither" },
    { type: "tf", q: "If P(−1) = 7, then (x + 1) cannot be a factor of P.", answer: true, difficulty: 2, explanation: "A factor requires remainder 0; the remainder is 7" },
    { type: "tf", q: "A degree-4 polynomial can have 5 distinct real zeros.", answer: false, difficulty: 2, explanation: "At most as many zeros as the degree" },
    { type: "calc", q: "Find the remainder when x³ + 2x − 3 is divided by (x − 2).", answer: "7", difficulty: 1, explanation: "P(2) = 8 + 4 − 3 = 7" },
    { type: "calc", q: "If (x − 1) is a factor of x³ + ax² − x + 3, find a.", answer: "−3", difficulty: 2, explanation: "P(1) = 1 + a − 1 + 3 = a + 3 = 0 ⇒ a = −3" },
    { type: "short", q: "The zeros of (x + 2)(x − 5)(x + 1) are −2, 5 and what?", answer: "-1", difficulty: 1, explanation: "Set each factor to zero: x = −2, 5, −1" },
    { type: "concept", q: "Why does P(c) = 0 prove (x − c) is a factor — name the identity used.", answer: "division identity|P = (x-c)Q + R|remainder zero|P(c)=R", difficulty: 3, explanation: "P(x) = (x − c)Q(x) + R; at x = c, P(c) = R, so P(c) = 0 forces R = 0, leaving P = (x − c)Q" }
  ]
};

Lessons["g10-mathematics-um2-t4"] = {
  overview: "Zeros are where the polynomial meets the x-axis — and HOW it meets them tells the whole story. This lesson connects factors to intercepts, uses multiplicity to predict crossing versus touching, and reads the full shape of a polynomial graph from its factored form.",
  objectives: [
    "Find all zeros of a polynomial from its factorisation",
    "Relate zeros, factors and x-intercepts three ways",
    "Predict graph behaviour at each zero using multiplicity",
    "Sketch polynomial graphs from factored form + end behaviour",
    "Build a polynomial from given zeros"
  ],
  simple: "A zero is an x-value where the graph touches the x-axis: P(zero) = 0. The magic dictionary: factor (x − 2) ↔ zero x = 2 ↔ x-intercept (2, 0) — three languages, one fact. If you can factor completely, you can read every intercept instantly. Now the subtlety: HOW the graph behaves at each intercept depends on multiplicity — how many times that factor repeats. Single factor (x − 2)¹: the curve crosses straight through. Double factor (x + 1)²: the curve kisses the axis and turns back (touch). Triple factor: it flattens out while crossing, like a slide. Add the end behaviour from the leading term and you can sketch the whole curve without plotting a single point. Working backwards is just as easy: zeros 1, −2, 5 with lead 1 means P(x) = (x − 1)(x + 2)(x − 5).",
  detailed: "<p><b>The zero dictionary.</b> For polynomial P: c is a <i>zero</i> (P(c) = 0) ⟺ (x − c) is a <i>factor</i> ⟺ (c, 0) is an <i>x-intercept</i> of the graph. A degree-n polynomial has exactly n zeros counting multiplicity and complex ones (Fundamental Theorem of Algebra), so at most n real intercepts. From complete factorisation P(x) = a(x − r₁)(x − r₂)…(x − rₙ), the zeros read off directly: r₁, r₂, …, rₙ.</p><p><b>Multiplicity rules.</b> If factor (x − c) appears k times, c has multiplicity k. Odd k: the graph <i>crosses</i> at c — the higher the odd k, the flatter the crossing (k = 3 gives the signature inflection-slide). Even k: the graph <i>touches and turns</i> (tangent to the axis, k = 2 is a parabola-like kiss). The sum of all multiplicities equals the degree — a powerful bookkeeping check: a quartic with zeros 1 (mult 2) and −3 (mult 2) never crosses the axis at all; it kisses twice.</p><p><b>Sketching protocol:</b> (1) end behaviour from degree parity + leading sign; (2) plot all intercepts with their multiplicity behaviour; (3) y-intercept = P(0) (product of constants times a); (4) connect smoothly — polynomial curves have no corners or breaks — crossing at odd zeros, kissing at even ones. Example: P(x) = (x + 2)(x − 1)²: cubic, positive lead → falls left, rises right; crosses at −2, kisses at 1; y-int = 2·1 = 2. That's a complete, exam-grade sketch.</p><p><b>Building polynomials from zeros</b> inverts the dictionary: zeros −1, 3 (double), lead −2 → P(x) = −2(x + 1)(x − 3)². Expand if required. Note the non-uniqueness: any non-zero scalar multiple has the same zeros, so 'the' polynomial needs a lead coefficient or a point to pin it down. Between consecutive zeros, the sign of P is constant — test one point per interval to know where the curve sits above/below the axis, which also solves polynomial inequalities like P(x) > 0.</p><p><b>Real-world zeros</b> are decision points: break-even quantities, times when a projectile hits the ground, frequencies where a signal cancels. Multiplicity has meaning too: a double root in a control system marks the boundary between damping behaviours (critical damping), and in business a double zero of the profit function means the break-even is a knife-edge maximum — one price change and profit never returns.</p>",
  keyTerms: [
    { term: "Zero of a polynomial", def: "Value c with P(c) = 0; corresponds to an x-intercept" },
    { term: "Multiplicity", def: "How many times a factor (x − c) repeats in the complete factorisation" },
    { term: "Crossing zero", def: "Odd multiplicity — the graph passes through the axis" },
    { term: "Touching zero", def: "Even multiplicity — the graph kisses the axis and turns" },
    { term: "Fundamental Theorem of Algebra", def: "Degree-n polynomial has exactly n complex zeros (with multiplicity)" },
    { term: "Sign interval", def: "Region between zeros where P keeps a constant sign" },
    { term: "y-intercept", def: "P(0) — where the curve meets the vertical axis" }
  ],
  formulas: [
    {
      name: "Factored form from zeros",
      formula: "P(x) = a(x − r₁)(x − r₂)⋯(x − rₙ)",
      meaning: "A polynomial is its leading coefficient times one factor per zero",
      vars: [{ name: "a", meaning: "leading coefficient (vertical scale)", unit: "—" }, { name: "rᵢ", meaning: "the zeros", unit: "—" }],
      units: "—",
      when: "Constructing a polynomial from known roots",
      example: "Zeros 1, −2, 3 with a = 1: P(x) = (x − 1)(x + 2)(x − 3)"
    },
    {
      name: "Multiplicity bookkeeping",
      formula: "Σ (multiplicities) = degree",
      meaning: "Counting each zero with its repeats uses up exactly n factors",
      vars: [{ name: "kᵢ", meaning: "multiplicity of zero rᵢ", unit: "count" }],
      units: "count",
      when: "Checking a factorisation is complete",
      example: "Quartic with zeros 2 (k=2), −1 (k=1), 5 (k=1): 2+1+1 = 4 ✓"
    }
  ],
  workedExamples: [
    {
      problem: "Find all zeros and describe the graph's behaviour at each: P(x) = (x − 4)(x + 1)²(x − 2).",
      given: "Fully factored quartic, leading coefficient +1",
      formula: "Zero dictionary + multiplicity rules",
      substitution: "Zeros: 4 (k=1), −1 (k=2), 2 (k=1)",
      calculation: "Degree 4, positive lead: both ends rise",
      answer: "Crosses at x = 4 and x = 2; touches-and-turns at x = −1; U-shaped overall with three axis events"
    },
    {
      problem: "Factor P(x) = x³ − 6x² + 11x − 6 and find its zeros.",
      given: "Monic cubic",
      formula: "Candidates ±1, ±2, ±3, ±6; Factor Theorem",
      substitution: "P(1) = 1 − 6 + 11 − 6 = 0 ✓ → divide by (x − 1): x² − 5x + 6",
      calculation: "x² − 5x + 6 = (x − 2)(x − 3)",
      answer: "P = (x − 1)(x − 2)(x − 3); zeros 1, 2, 3 — all simple, all crossings"
    },
    {
      problem: "Build the cubic with zeros −2, 1, 4 and P(0) = 8.",
      given: "Three zeros plus one point",
      formula: "P(x) = a(x + 2)(x − 1)(x − 4)",
      substitution: "P(0) = a(2)(−1)(−4) = 8a = 8",
      calculation: "a = 1",
      answer: "P(x) = (x + 2)(x − 1)(x − 4) = x³ − 3x² − 6x + 8"
    },
    {
      problem: "Solve P(x) ≥ 0 for P(x) = (x + 3)(x − 1)(x − 4).",
      given: "Factored cubic",
      formula: "Sign-interval testing between zeros −3, 1, 4",
      substitution: "Test x = −4: (−)(−)(−) = −; x = 0: (+)(−)(−) = +; x = 2: (+)(+)(−) = −; x = 5: (+)(+)(+) = +",
      calculation: "Positive on (−3, 1) and (4, ∞), zero at the roots",
      answer: "Solution: [−3, 1] ∪ [4, ∞)"
    },
    {
      problem: "A ball's height is h(t) = −5(t − 1)(t − 5) metres. When is it above 0 m, and what do the zeros mean?",
      given: "Factored quadratic, opens down",
      formula: "Sign between zeros",
      substitution: "Zeros t = 1 and t = 5; between them test t = 3: −5(2)(−2) = +20 > 0",
      calculation: "Positive strictly between the roots",
      answer: "Above ground between t = 1 s and t = 5 s; the zeros are launch (t = 1) and landing (t = 5) moments"
    }
  ],
  commonMistakes: [
    "Saying the zero of factor (x − 3) is x = −3 — the zero is +3; signs flip between factor and zero",
    "Forgetting a double zero counts TWICE toward the degree",
    "Drawing the curve crossing at an even-multiplicity zero (it must touch and turn)",
    "Ignoring end behaviour and sketching a cubic with both ends up",
    "Assuming every polynomial factors over the integers — some zeros are irrational or complex",
    "Solving P(x) > 0 by testing only one interval and assuming symmetry",
    "Confusing the y-intercept P(0) with a zero — P(0) is a height, a zero is where height = 0"
  ],
  applications: [
    "Projectile landing times are the zeros of h(t); multiplicity 2 means the ball just grazes the ground (thrown from ground level at 0 velocity)",
    "Break-even quantities: zeros of profit P(q) mark where a business starts/stops losing money",
    "Signal processing: zeros of a filter's transfer polynomial are the frequencies it cancels",
    "Economics: cubic cost curves' zeros locate shutdown production levels",
    "Architecture: arch curves (parabolas) meet the ground at their zeros — the span of the bridge"
  ],
  summary: "Zeros, factors and x-intercepts are one fact in three languages; complete factorisation exposes all of them. Multiplicity decides behaviour: odd crosses, even touches-and-turns, and multiplicities sum to the degree. End behaviour plus intercepts plus the y-intercept P(0) give a full sketch, and building a polynomial from zeros is just a·∏(x − rᵢ) with a pinned by one known point.",
  visuals: [
    { type: "comparison", config: { title: "Multiplicity behaviour", left: { name: "Odd (1, 3…)", items: ["Graph CROSSES axis", "k=1: straight through", "k=3: flat slide across", "sign changes at zero"] }, right: { name: "Even (2, 4…)", items: ["Graph TOUCHES & turns", "k=2: parabola kiss", "stays same sign", "tangent to axis"] } } },
    { type: "steps", config: { title: "Sketch from factored form", steps: [{ label: "End behaviour", detail: "degree parity + lead sign" }, { label: "Mark zeros", detail: "cross vs kiss per multiplicity" }, { label: "y-intercept", detail: "compute P(0)" }, { label: "Connect smoothly", detail: "no corners, right signs between" }] } },
    { type: "qa", config: { title: "Read the factor, name the zero", pairs: [{ q: "Factor (x − 5) → zero?", a: "<b>x = 5</b> (sign flips)" }, { q: "(x + 2)² → behaviour?", a: "<b>touches & turns</b> at −2 (even mult)" }, { q: "Zeros 1, 2, 3, lead 2 → P(x)?", a: "<b>2(x−1)(x−2)(x−3)</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "The zeros of P(x) = (x − 2)(x + 5) are:", options: ["2 and −5", "−2 and 5", "2 and 5", "−2 and −5"], answer: 0, difficulty: 1, explanation: "Set each factor to zero: x = 2, x = −5" },
    { type: "mcq", q: "At a zero of multiplicity 2, the graph…", options: ["crosses the axis", "touches and turns back", "is asymptotic", "has a corner"], answer: 1, difficulty: 2, explanation: "Even multiplicity → tangent kiss, no crossing" },
    { type: "mcq", q: "A quartic with all real zeros can have at most how many x-intercepts?", options: ["2", "3", "4", "8"], answer: 2, difficulty: 1, explanation: "At most one intercept per unit of degree: 4" },
    { type: "mcq", q: "P(x) = x(x − 3)²(2 − x). The sum of multiplicities of all zeros is:", options: ["2", "3", "4", "5"], answer: 2, difficulty: 3, explanation: "Zeros: 0 (k=1), 3 (k=2), 2 (k=1 from (2−x)) → 1+2+1 = 4 = degree" },
    { type: "tf", q: "Every cubic polynomial has at least one real zero.", answer: true, difficulty: 2, explanation: "Odd-degree graphs have opposite end behaviours, forcing at least one crossing" },
    { type: "tf", q: "If a polynomial's graph touches the x-axis at c without crossing, then c is a double (or even-multiplicity) zero.", answer: true, difficulty: 2, explanation: "Touch-and-turn is the signature of even multiplicity" },
    { type: "short", q: "Write a monic quadratic with zeros 3 and −1.", answer: "(x-3)(x+1)|x²-2x-3|x^2-2x-3", difficulty: 2, explanation: "P(x) = (x − 3)(x + 1) = x² − 2x − 3" },
    { type: "calc", q: "For P(x) = (x + 1)(x − 2)(x − 4), compute the y-intercept P(0).", answer: "8", difficulty: 2, explanation: "(1)(−2)(−4) = 8" },
    { type: "concept", q: "Why must a cubic with positive leading coefficient cross the x-axis at least once?", answer: "opposite ends|falls left rises right|negative to positive|IVT|end behaviour", difficulty: 3, explanation: "As x → −∞, P → −∞ and as x → +∞, P → +∞; a continuous curve going from negative to positive must hit zero" },
    { type: "ordering", q: "Sketch steps for P(x) = (x+2)(x−1)²: ① end behaviour ② zeros & multiplicities ③ y-intercept ④ smooth curve:", options: ["①②③④", "④③②①", "②①④③", "③①②④"], answer: 0, difficulty: 1, explanation: "Standard protocol: ends, intercepts, y-intercept, connect" }
  ]
};
