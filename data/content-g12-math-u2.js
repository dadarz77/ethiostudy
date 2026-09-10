/* Content: Grade 12 Mathematics — Unit 2: Introduction to Calculus (3 topics) */
window.Lessons = window.Lessons || {};

Lessons["g12-mathematics-um2-t1"] = {
  overview: "Calculus begins with one question: what value is a function APPROACHING, even where it is not defined? Limits answer it; continuity says the answer matches the graph; and the derivative — a limit of average rates — turns 'slope of a curve' into a formula. This topic builds all three, ending with the power rule that makes differentiation mechanical.",
  objectives: [
    "Estimate a limit from a table of values approaching from both sides",
    "Explain continuity informally (no holes, no jumps) and check a piecewise function at its join",
    "Compute the difference quotient [f(x+h) − f(x)]/h and simplify it",
    "Derive dy/dx from first principles for f(x) = x² and f(x) = x³",
    "Apply the power rule, constant-multiple and sum rules, including negative and fractional exponents"
  ],
  simple: "A <b>limit</b> is the value f(x) creeps toward as x creeps toward a number — it never asks what happens AT the number. For (x² − 4)/(x − 2) at x = 2 the formula says 0/0 (undefined), but plugging x = 1.999 gives 3.999: the function is sprinting toward <b>4</b>. A function is <b>continuous</b> when you can draw it without lifting your pen: limit = actual value everywhere. The <b>derivative</b> f′(x) is the slope of the curve at each point, found by shrinking a secant line until its run h vanishes: f′(x) = lim<sub>h→0</sub> [f(x+h) − f(x)]/h. For x² this gives 2x, for x³ it gives 3x² — and the <b>power rule</b> generalises it: bring the exponent down, subtract one: d/dx xⁿ = n·xⁿ⁻¹.",
  detailed: "<p>Informal limit idea: write f(x) = (x² − 4)/(x − 2). At x = 2 it is 0/0 — undefined. But for x ≠ 2 it factors to (x−2)(x+2)/(x−2) = x + 2. A table seals the point: x = 1.9, 1.99, 1.999 give 3.9, 3.99, 3.999; x = 2.001, 2.01, 2.1 give 4.001, 4.01, 4.1. Both sides crowd onto 4, so lim<sub>x→2</sub> (x² − 4)/(x − 2) = 4. Notation: read 'lim<sub>x→2</sub> f(x) = 4' as 'as x approaches 2, f(x) approaches 4'. The limit exists only when the left-hand and right-hand approaches agree — that two-sided check is examinable.</p><p>A function is <b>continuous at a</b> if three things hold: f(a) is defined, lim<sub>x→a</sub> f(x) exists, and the two are equal. Picture: no hole (missing point), no jump (sudden leap), no break. For a <b>piecewise</b> function, the only suspicious spot is the join. Example: f(x) = x + 1 for x ≤ 2 and f(x) = 3x − k for x > 2. Left side gives 3 at x = 2; the right side gives 6 − k. Continuous ⟺ 6 − k = 3 ⟺ k = 3. Polynomials are continuous everywhere; rational functions are continuous except where the denominator is zero.</p><p>The <b>derivative from first principles</b>: the slope of the secant through (x, f(x)) and (x+h, f(x+h)) is the <b>difference quotient</b> [f(x+h) − f(x)]/h. Shrink h toward 0 and the secant pivots into the <b>tangent</b>: f′(x) = lim<sub>h→0</sub> [f(x+h) − f(x)]/h. For f(x) = x²: [(x+h)² − x²]/h = [2xh + h²]/h = 2x + h → <b>2x</b>. For f(x) = x³: [(x+h)³ − x³]/h = [3x²h + 3xh² + h³]/h = 3x² + 3xh + h² → <b>3x²</b>. Always expand, factor out an h, cancel, THEN let h = 0 — substituting h = 0 too early gives 0/0.</p><p>The pattern 2x and 3x² becomes the <b>power rule</b>: d/dx xⁿ = n·xⁿ⁻¹ for any real n (proved by first principles for positive integers, quoted beyond). It covers negatives and fractions: d/dx x⁻¹ = −x⁻²; d/dx x^(1/2) = (1/2)x^(−1/2) = 1/(2√x). Two companion rules make it a machine: <b>constant multiple</b> d/dx[c·f] = c·f′, and <b>sum/difference</b> d/dx[f ± g] = f′ ± g′. So d/dx (5x³ − 2x + 7) = 15x² − 2 + 0 — the derivative of a constant is 0 because a horizontal line has zero slope.</p><p>Notation: f′(x), y′, and dy/dx all name the same object — the derivative function — while dy/dx (Leibniz) stresses it is a limit of ratios Δy/Δx, and f′(x₁) is the NUMBER obtained by substituting. f′ is the function; f′(3) is its value at 3, like f versus f(3). The second derivative f″(x) = d/dx[f′(x)] differentiates again: for y = x³, y′ = 3x² and y″ = 6x.</p>",
  keyTerms: [
    { term: "Limit", def: "The value f(x) approaches as x approaches a, written lim x→a f(x)" },
    { term: "Two-sided limit", def: "Exists only when left-hand and right-hand approaches agree" },
    { term: "Continuous", def: "No holes or jumps: limit at a equals the actual value f(a)" },
    { term: "Difference quotient", def: "[f(x+h) − f(x)]/h, the slope of the secant line" },
    { term: "Derivative f′(x)", def: "lim h→0 of the difference quotient — the slope of the curve at x" },
    { term: "Power rule", def: "d/dx xⁿ = n·xⁿ⁻¹ for any real exponent n" },
    { term: "Second derivative f″(x)", def: "The derivative of the derivative" }
  ],
  formulas: [
    {
      name: "Derivative from first principles",
      formula: "dy/dx = lim h→0 [f(x+h) − f(x)]/h",
      meaning: "Shrink the secant's run h to zero; the secant becomes the tangent",
      vars: [{ name: "h", meaning: "the tiny change in x, sent toward 0" }, { name: "f(x+h) − f(x)", meaning: "the corresponding change in y" }],
      when: "Any 'from first principles' or 'from definition of derivative' question"
    },
    {
      name: "Power rule",
      formula: "d/dx xⁿ = n·xⁿ⁻¹",
      meaning: "Bring the exponent down as a factor, reduce the exponent by 1",
      vars: [{ name: "n", meaning: "any real number: positive, negative, or fractional" }],
      when: "Differentiating any power of x, including 1/x = x⁻¹ and √x = x^(1/2)"
    },
    {
      name: "Linearity rules",
      formula: "d/dx [c·f(x)] = c·f′(x) · d/dx [f(x) ± g(x)] = f′(x) ± g′(x) · d/dx c = 0",
      meaning: "Constants ride along; sums differentiate term by term",
      when: "Differentiating any polynomial or combination of powers"
    }
  ],
  workedExamples: [
    {
      problem: "Estimate lim x→2 (x² − 4)/(x − 2) with a table.",
      given: "f(x) undefined at x = 2 (gives 0/0)",
      substitution: "x = 1.9, 1.99, 1.999 → f = 3.9, 3.99, 3.999; x = 2.001, 2.01 → f = 4.001, 4.01",
      calculation: "Both sides crowd toward the same value; algebraically f(x) = x + 2 for x ≠ 2",
      answer: "lim x→2 (x² − 4)/(x − 2) = 4"
    },
    {
      problem: "Find dy/dx from first principles for f(x) = x².",
      formula: "f′(x) = lim h→0 [f(x+h) − f(x)]/h",
      substitution: "[(x+h)² − x²]/h = [x² + 2xh + h² − x²]/h",
      calculation: "= (2xh + h²)/h = 2x + h → 2x as h → 0",
      answer: "dy/dx = 2x"
    },
    {
      problem: "Differentiate y = x³ from first principles.",
      substitution: "[(x+h)³ − x³]/h = [3x²h + 3xh² + h³]/h",
      calculation: "= 3x² + 3xh + h² → 3x² as h → 0",
      answer: "dy/dx = 3x²"
    },
    {
      problem: "Differentiate f(x) = 4x³ − 3x² + 5x − 7 and find f′(2).",
      formula: "power rule + sum rule",
      substitution: "f′(x) = 4·3x² − 3·2x + 5 − 0",
      calculation: "f′(x) = 12x² − 6x + 5; at x = 2: 48 − 12 + 5",
      answer: "f′(x) = 12x² − 6x + 5, f′(2) = 41"
    }
  ],
  commonMistakes: [
    "Believing the limit must equal f(a) — for (x²−4)/(x−2) the limit at 2 is 4 although f(2) does not exist",
    "Substituting h = 0 into the difference quotient before simplifying — you get 0/0; expand, factor h, cancel, then limit",
    "Power-rule slips: d/dx x⁵ = 5x⁴, NOT 5x⁵; and d/dx x^(1/2) = (1/2)x^(−1/2) = 1/(2√x), the new exponent is negative",
    "Derivative of a constant taken as 1 or as the constant itself — it is 0",
    "Checking only one side of a piecewise join: continuity needs left limit = right limit = f(a)"
  ],
  applications: [
    "Physics: instantaneous velocity is exactly the derivative limit of average velocity Δs/Δt",
    "Economics: marginal cost is the derivative of the total cost function — cost of roughly one more unit",
    "Engineering: signals must be continuous (no jumps) to be physically realisable; piecewise checks mirror this",
    "Everywhere: the power rule is the workhorse behind optimization in topic 2 and motion analysis in Grade 12 physics"
  ],
  summary: "A limit describes the value approached, not the value attained. Continuity means limit = actual value with no holes or jumps. The derivative is the h → 0 limit of the difference quotient — first principles give 2x for x² and 3x² for x³ — and the power rule d/dx xⁿ = n·xⁿ⁻¹ (with constant-multiple and sum rules) generalises it to every power, negative or fractional.",
  visuals: [],
  questions: [
    { type: "mcq", q: "As x → 3, the function f(x) = (x² − 9)/(x − 3) approaches:", options: ["0", "3", "6", "undefined"], answer: 2, difficulty: 1, explanation: "For x ≠ 3, f(x) = (x−3)(x+3)/(x−3) = x+3 → 6. Values like 2.999 give 5.999." },
    { type: "mcq", q: "d/dx x⁷ equals:", options: ["7x⁷", "7x⁶", "6x⁷", "x⁶"], answer: 1, difficulty: 1, explanation: "Power rule: bring 7 down, reduce the exponent by 1: 7x⁶." },
    { type: "mcq", q: "d/dx (5x) equals:", options: ["5", "5x", "x", "0"], answer: 0, difficulty: 1, explanation: "The slope of y = 5x is 5 everywhere; d/dx of x is 1, times the constant 5." },
    { type: "mcq", q: "In the difference quotient [f(x+h) − f(x)]/h, letting h → 0 gives:", options: ["the secant slope", "the average rate of change", "the tangent slope", "the area under the curve"], answer: 2, difficulty: 2, explanation: "The secant through two points h apart becomes the tangent as the points merge." },
    { type: "mcq", q: "f(x) = x + 2 for x ≤ 1 and f(x) = 3x − k for x > 1 is continuous at x = 1 when k =", options: ["1", "2", "3", "0"], answer: 3, difficulty: 2, explanation: "Left-hand limit: 1 + 2 = 3 = f(1). Right-hand limit: 3(1) − k = 3 − k. Continuity needs 3 − k = 3, so k = 0." },
    { type: "mcq", q: "If y = x³ − 2x, then y′ at x = 1 is:", options: ["1", "3", "−1", "5"], answer: 0, difficulty: 2, explanation: "y′ = 3x² − 2; at x = 1: 3 − 2 = 1." },
    { type: "mcq", q: "d/dx (1/x) equals:", options: ["−1/x²", "1/x²", "−ln x", "1/(x−1)"], answer: 0, difficulty: 3, explanation: "1/x = x⁻¹, so the power rule gives −1·x⁻² = −1/x²." },
    { type: "mcq", q: "lim h→0 [(2+h)² − 4]/h equals:", options: ["2", "4", "8", "0"], answer: 1, difficulty: 3, explanation: "Expand: (4 + 4h + h² − 4)/h = 4 + h → 4. This is f′(2) for f(x) = x², i.e. 2x at x = 2." }
  ]
};

Lessons["g12-mathematics-um2-t2"] = {
  overview: "The derivative stops being algebra and starts being a tool the moment you use it: it is the gradient of a curve, so it builds tangent and normal lines; differentiate displacement and motion unfolds into velocity and acceleration; set the derivative to zero and maxima, minima and the best possible box, pen or profit reveal themselves.",
  objectives: [
    "Find the gradient of a curve at a point and equations of tangent and normal lines",
    "Obtain velocity and acceleration by differentiating displacement",
    "Find stationary points by solving f′(x) = 0",
    "Classify stationary points with the first-derivative sign test and the second-derivative test",
    "Set up and solve an optimization problem (fence/box) using derivatives"
  ],
  simple: "The derivative f′(x₁) <b>is</b> the gradient of the curve y = f(x) at the point (x₁, y₁). With a gradient and a point, the tangent line is one formula away: <b>y − y₁ = m(x − x₁)</b>. The normal (perpendicular) line uses slope −1/m. In motion, differentiating twice walks down the ladder: displacement s(t) → velocity v = s′(t) → acceleration a = v′(t). Curves turn around where f′(x) = 0 — <b>stationary points</b> — and a sign check (or the second derivative) says whether each is a maximum (f″ < 0) or minimum (f″ > 0). That last fact is the skeleton key to optimization: write the quantity to maximize as a function, differentiate, solve f′ = 0, verify.",
  detailed: "<p><b>Tangent and normal.</b> Gradient of y = f(x) at x = x₁ is m = f′(x₁). Tangent: y − y₁ = m(x − x₁) where y₁ = f(x₁). Example: for y = x³ − 3x² + 2 at x = 1, y₁ = 0 and y′ = 3x² − 6x gives m = −3, so the tangent is y = −3(x − 1). The normal is perpendicular, slope −1/m = 1/3: y = (1/3)(x − 1). If m = 0 the tangent is horizontal and the normal vertical; never divide by m blindly.</p><p><b>Motion.</b> If s(t) is displacement in metres, then v(t) = s′(t) (m/s) and a(t) = v′(t) = s″(t) (m/s²). Worked: a stone is thrown upward with s(t) = 5t − t². Then v(t) = 5 − 2t, a(t) = −2 m/s² — constant deceleration, exactly the physics formula. The stone peaks when v = 0: t = 2.5 s, height s(2.5) = 5(2.5) − (2.5)² = 12.5 − 6.25 = <b>6.25 m</b>. It returns to the thrower when s = 0 again: t(5 − t) = 0 → t = 5 s. Note the pattern: maximum height occurs where velocity vanishes — a stationary point of s.</p><p><b>Stationary points.</b> Where f′(x) = 0 the tangent is horizontal: the curve pauses — a <b>stationary point</b> (turning point or point of inflexion). For f(x) = x³ − 3x + 2: f′(x) = 3x² − 3 = 0 → x = ±1. <b>First-derivative sign test:</b> sample f′ on each side — at x = −2, f′ = 9 > 0 (rising); at x = 0, f′ = −3 < 0 (falling); so x = −1 is a maximum (rise-then-fall), and x = +1 (fall to f′ = 3 > 0 at x = 2, so fall-then-rise) is a minimum. Values: max at (−1, 4), min at (1, 0). <b>Second-derivative test:</b> f″(x) = 6x; f″(−1) = −6 < 0 → maximum; f″(1) = 6 > 0 → minimum. If f″ = 0 the test is inconclusive — fall back to the sign test.</p><p><b>Optimization recipe.</b> (1) Draw and name variables; (2) write the quantity Q to maximize/minimize; (3) use the constraint to reduce Q to ONE variable; (4) state the feasible domain; (5) solve dQ/dx = 0; (6) verify with f″ or signs; (7) answer in context. Fence: 40 m of wire around a rectangular pen — perimeter 2L + 2W = 40 so W = 20 − L, area A(L) = L(20 − L) = 20L − L². A′ = 20 − 2L = 0 → L = 10, A″ = −2 < 0 → maximum: a 10 m × 10 m square, area 100 m². Box: cut squares of side x from a 12 × 12 sheet: V(x) = x(12 − 2x)², 0 < x < 6. Expand: V = 4x³ − 48x² + 144x, V′ = 12x² − 96x + 144 = 12(x − 2)(x − 6). In the domain only x = 2; V″ = 24x − 96 gives V″(2) = −48 < 0 → maximum with V(2) = 2·8² = <b>128 cm³</b>.</p><p><b>Curve sketching.</b> The derivative list reads off the shape: intercepts from f, stationary points from f′ = 0 with their nature, increasing where f′ > 0, decreasing where f′ < 0, concavity from the sign of f″. A cubic with two stationary points looks like a stretched S through a hump and a dip; knowing where they sit, and that end behaviour follows the leading term, is enough to sketch accurately.</p>",
  keyTerms: [
    { term: "Gradient of a curve", def: "f′(x₁), the slope of the tangent at the point x = x₁" },
    { term: "Tangent line", def: "y − y₁ = m(x − x₁) with m = f′(x₁), touching the curve at the point" },
    { term: "Normal line", def: "Perpendicular to the tangent at the point of contact; slope −1/m" },
    { term: "Stationary point", def: "Point where f′(x) = 0 — the curve is momentarily flat" },
    { term: "Second-derivative test", def: "f″ > 0 → minimum, f″ < 0 → maximum at a stationary point" },
    { term: "Optimization", def: "Finding maximum/minimum values of a modelled quantity using derivatives" }
  ],
  formulas: [
    {
      name: "Tangent line at a point",
      formula: "y − y₁ = f′(x₁)(x − x₁)",
      meaning: "Point-slope form with the derivative supplying the gradient",
      vars: [{ name: "(x₁, y₁)", meaning: "point on the curve, y₁ = f(x₁)" }, { name: "f′(x₁)", meaning: "gradient of the curve there" }],
      when: "Any 'equation of the tangent/normal at…' question"
    },
    {
      name: "Motion ladder",
      formula: "v(t) = s′(t) · a(t) = v′(t) = s″(t)",
      meaning: "Each differentiation moves one rung down displacement → velocity → acceleration",
      when: "Particles, stones, balls with s given as a function of t"
    },
    {
      name: "Stationary-point tests",
      formula: "f′(x₁) = 0, then f″(x₁) > 0 → min · f″(x₁) < 0 → max",
      meaning: "Zero slope flags a candidate; concavity names it",
      when: "Turning points and optimization verification"
    }
  ],
  workedExamples: [
    {
      problem: "Find the tangent and normal to y = x³ − 3x² + 2 at x = 1.",
      given: "y₁ = f(1) = 1 − 3 + 2 = 0",
      formula: "y − y₁ = m(x − x₁), normal slope −1/m",
      substitution: "m = y′(1) = (3x² − 6x) at 1 = −3",
      calculation: "Tangent: y = −3(x − 1); normal: y = (1/3)(x − 1)",
      answer: "tangent y = −3x + 3, normal y = x/3 − 1/3"
    },
    {
      problem: "A stone thrown upward has s(t) = 5t − t² metres. When is it highest and how high?",
      formula: "v = s′(t); peak when v = 0",
      substitution: "v(t) = 5 − 2t = 0 → t = 2.5",
      calculation: "s(2.5) = 5(2.5) − (2.5)² = 12.5 − 6.25",
      answer: "t = 2.5 s, height 6.25 m (acceleration is s″ = −2 m/s² throughout)"
    },
    {
      problem: "Find and classify the stationary points of f(x) = x³ − 3x + 2.",
      formula: "f′(x) = 0",
      substitution: "3x² − 3 = 0 → x = ±1",
      calculation: "f″(x) = 6x: f″(−1) = −6 < 0 → max; f″(1) = 6 > 0 → min",
      answer: "maximum (−1, 4), minimum (1, 0)"
    },
    {
      problem: "A 40 m fence encloses a rectangular garden. Maximize the area.",
      given: "2L + 2W = 40 → W = 20 − L",
      formula: "A(L) = L(20 − L)",
      substitution: "A′ = 20 − 2L = 0 → L = 10",
      calculation: "A″ = −2 < 0 confirms maximum; W = 20 − 10 = 10",
      answer: "10 m × 10 m square, area 100 m²"
    }
  ],
  commonMistakes: [
    "Reporting f′(x₁) as the tangent's equation — the derivative is only the SLOPE; you still need y − y₁ = m(x − x₁)",
    "Normal slope written as −m or 1/m instead of −1/m (perpendicular means m₁m₂ = −1)",
    "Solving f(x) = 0 to find stationary points — the condition is f′(x) = 0; and accepting every f′ = 0 root without classifying (x³ has f′(0) = 0 at a rising inflexion)",
    "Optimization with two variables: always use the constraint to reduce to ONE variable and state the domain (fence: 0 < L < 20)",
    "Answering with x = 2 for the box problem when the question asks for the maximum VOLUME: the answer is V(2) = 128 cm³"
  ],
  applications: [
    "Road design: transition curves must have matching tangent gradients so drivers feel no jerk",
    "Ballistics and athletics: v = s′ and a = v′ describe every thrown, kicked or dropped object",
    "Business: marginal profit is the derivative of profit; maximum profit sits where it crosses zero",
    "Packaging and farming: box, can and fence problems minimize material or maximize yield — all derivative tests"
  ],
  summary: "f′(x₁) is the curve's gradient, feeding tangent y − y₁ = m(x − x₁) and normal −1/m. Differentiating displacement twice gives velocity then acceleration. Stationary points solve f′ = 0 and are classified by sign changes or f″ (min > 0, max < 0). Optimization is the same machinery with a constraint: one variable, f′ = 0, verify, answer in context.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The gradient of y = x² at x = 3 is:", options: ["3", "6", "9", "2"], answer: 1, difficulty: 1, explanation: "y′ = 2x; at 3: 2·3 = 6." },
    { type: "mcq", q: "If v(t) = s′(t), then acceleration is:", options: ["s(t)/t²", "s″(t)", "the integral of s(t)", "1/v"], answer: 1, difficulty: 1, explanation: "a = v′ = (s′)′ = s″(t)." },
    { type: "mcq", q: "A stationary point of f occurs where:", options: ["f(x) = 0", "f′(x) = 0", "f″(x) = 0", "the curve crosses the x-axis"], answer: 1, difficulty: 1, explanation: "Flat tangent: the derivative vanishes." },
    { type: "mcq", q: "The tangent to y = x² at (2, 4) has equation:", options: ["y = 4x − 4", "y = 2x", "y = 4x + 4", "y = x + 2"], answer: 0, difficulty: 3, explanation: "m = 2x at 2 = 4: y − 4 = 4(x − 2) → y = 4x − 4. Check: at x = 2 this gives 4 ✓." },
    { type: "mcq", q: "If f″(x₁) > 0 at a stationary point x₁, then x₁ is:", options: ["a maximum", "a minimum", "an inflexion", "undefined"], answer: 1, difficulty: 2, explanation: "Positive second derivative = concave up (holds water) = minimum." },
    { type: "mcq", q: "For s(t) = 5t − t², the stone returns to the launch height at:", options: ["t = 2.5 s", "t = 5 s", "t = 10 s", "t = 1 s"], answer: 1, difficulty: 2, explanation: "s = 0: t(5 − t) = 0 → t = 5 (t = 0 is launch; 2.5 s is the peak)." },
    { type: "mcq", q: "The normal to a curve at a point where the tangent slope is 4 has slope:", options: ["4", "−4", "1/4", "−1/4"], answer: 3, difficulty: 2, explanation: "Perpendicular lines: m₁·m₂ = −1, so m₂ = −1/4." },
    { type: "mcq", q: "An open box is made from a 12 × 12 sheet by cutting squares x from each corner. The maximizing cut is x = 2 because:", options: ["V′ = 12(x − 2)(x − 6) vanishes at x = 2 inside 0 < x < 6 and V″(2) < 0", "V′ vanishes at x = 6", "x = 2 makes the base square", "V(0) = 0 forces x = 2"], answer: 0, difficulty: 3, explanation: "V = 4x³ − 48x² + 144x, V′ = 12(x−2)(x−6); x = 6 is outside the usable domain, and V″(2) = −48 confirms the max with V(2) = 128 cm³." }
  ]
};

Lessons["g12-mathematics-um2-t3"] = {
  overview: "Integration reverses differentiation. If the derivative answers 'what slope?', the integral answers 'what function had this slope?' — and geometrically, 'how much area?'. This topic builds antiderivatives, the +C family of curves, the power rule in reverse, and the definite integral as a measured area.",
  objectives: [
    "Define an antiderivative (primitive) F of f via F′ = f",
    "Write indefinite integrals correctly with dx and the constant +C",
    "Apply the power rule ∫xⁿ dx = xⁿ⁺¹/(n+1) for n ≠ −1",
    "Integrate sums and constant multiples term by term",
    "Evaluate definite integrals as areas and interpret signs for regions below the axis"
  ],
  simple: "Ask: which function has derivative 3x²? Answer x³ — but also x³ + 5, x³ − 100, anything: the derivative kills constants, so the reverse answer carries a mystery constant. <b>∫ 3x² dx = x³ + C</b> is a whole family of curves. The <b>power rule in reverse</b>: raise the exponent by 1 and divide by the new exponent: ∫xⁿ dx = xⁿ⁺¹/(n+1) (n ≠ −1). A <b>definite integral</b> ∫ₐᵇ f(x) dx then measures the signed area between the curve and the x-axis from a to b: compute the antiderivative F, and evaluate F(b) − F(a).",
  detailed: "<p><b>Antiderivatives.</b> F is an antiderivative (primitive) of f if F′(x) = f(x). Since d/dx (x⁴/4) = x³, an antiderivative of x³ is x⁴/4. Derivatives of constants vanish, so antiderivatives are never unique: x⁴/4 + 7 works too, and all solutions differ only by a constant. Hence the <b>indefinite integral</b> ∫ f(x) dx = F(x) + C, where C is the arbitrary (integration) constant. The symbol ∫ is an elongated S for 'sum'; dx names the variable being integrated — dropping it is a formatting error exams punish.</p><p><b>Reverse power rule.</b> Since d/dx [xⁿ⁺¹/(n+1)] = xⁿ (when n ≠ −1), we get ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. Worked: ∫x³ dx = x⁴/4 + C. For negative exponents: ∫x⁻² dx = x⁻¹/(−1) = −1/x + C. For fractions: ∫√x dx = ∫x^(1/2) dx = x^(3/2)/(3/2) = (2/3)x^(3/2) + C. The exclusion n = −1 exists because n + 1 = 0 would divide by zero — ∫x⁻¹ dx is handled later (it is ln|x| + C), which is exactly why the rule needs the caveat. Verify EVERY antiderivative by differentiating back: it is a two-second exam insurance.</p><p><b>Linearity.</b> Like differentiation, integration splits sums and pulls out constants: ∫[f ± g] dx = ∫f dx ± ∫g dx and ∫c·f dx = c·∫f dx. So ∫(3x² + 4x − 5) dx = x³ + 2x² − 5x + C — each term reversed on its own. A constant k integrates to kx, not k: ∫5 dx = 5x + C.</p><p><b>Definite integrals and area.</b> ∫ₐᵇ f(x) dx = F(b) − F(a), written F(x) |ₐᵇ. Geometrically it is the <b>signed area</b> between curve and x-axis: ∫₁³ 2x dx = [x²]₁³ = 9 − 1 = 8 — matching the trapezoid under y = 2x from 1 to 3 (heights 2 and 6, width 2: ½(2+6)(2) = 8). The constant C cancels in F(b) − F(a), which is why definite integrals need no +C.</p><p><b>Signs below the axis.</b> Region under the axis counts NEGATIVE: ∫₀² (x − 2) dx = [x²/2 − 2x]₀² = (2 − 4) − 0 = −2. The area is genuinely 2 square units, but the integral reports −2 because the curve sits below the axis there. For total geometric area across a sign change, split the integral at the crossing and take absolute values — ∫₀³ |x − 2| dx type questions reward this caution. Initial conditions pin C: given F′ and one point, integrate, substitute, solve for C.</p>",
  keyTerms: [
    { term: "Antiderivative (primitive)", def: "F with F′ = f; the function whose derivative is f" },
    { term: "Indefinite integral", def: "∫ f(x) dx = F(x) + C, the whole family of antiderivatives" },
    { term: "Integration constant C", def: "The undetermined constant reflecting lost constants under differentiation" },
    { term: "Definite integral", def: "∫ₐᵇ f(x) dx = F(b) − F(a), a signed area between a and b" },
    { term: "Signed area", def: "Regions below the x-axis contribute negatively" },
    { term: "Limits of integration", def: "The values a (lower) and b (upper) in ∫ₐᵇ" }
  ],
  formulas: [
    {
      name: "Integral power rule",
      formula: "∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C, n ≠ −1",
      meaning: "Raise the exponent by 1, divide by the new exponent",
      vars: [{ name: "n", meaning: "any real exponent except −1" }, { name: "C", meaning: "arbitrary constant" }],
      when: "Integrating any power of x, including 1/x² = x⁻² and √x = x^(1/2)"
    },
    {
      name: "Linearity of integration",
      formula: "∫ [c·f(x) ± g(x)] dx = c∫f(x) dx ± ∫g(x) dx",
      meaning: "Constants factor out; sums integrate term by term",
      when: "Polynomials and combinations of powers"
    },
    {
      name: "Definite integral (area)",
      formula: "∫ₐᵇ f(x) dx = F(b) − F(a)",
      meaning: "Evaluate the antiderivative at the bounds and subtract (upper minus lower)",
      vars: [{ name: "a, b", meaning: "lower and upper limits of integration" }],
      when: "Area under a curve, accumulated quantities with stated bounds"
    }
  ],
  workedExamples: [
    {
      problem: "Find ∫x³ dx and verify.",
      formula: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C",
      substitution: "n = 3: x⁴/4 + C",
      calculation: "Check: d/dx (x⁴/4 + C) = (4x³)/4 = x³ ✓",
      answer: "x⁴/4 + C"
    },
    {
      problem: "Evaluate ∫(3x² + 4x − 5) dx.",
      calculation: "3·x³/3 + 4·x²/2 − 5x + C",
      answer: "x³ + 2x² − 5x + C (differentiate back to confirm)"
    },
    {
      problem: "Evaluate ∫₁³ 2x dx as an area.",
      formula: "∫ₐᵇ f dx = F(b) − F(a)",
      substitution: "[x²]₁³ = 3² − 1²",
      calculation: "9 − 1 = 8; geometry check: trapezoid ½(2 + 6)(2) = 8",
      answer: "8 square units"
    },
    {
      problem: "Find f(x) if f′(x) = 6x² and the curve passes through (1, 4).",
      substitution: "f(x) = 6·x³/3 + C = 2x³ + C",
      calculation: "4 = 2(1)³ + C → C = 2",
      answer: "f(x) = 2x³ + 2"
    }
  ],
  commonMistakes: [
    "Forgetting +C on indefinite integrals — without it the answer is one curve, not the family; conversely keeping +C inside a definite integral where it cancels",
    "Applying the power rule to x⁻¹: ∫x⁻¹ dx ≠ x⁰/0 — the rule excludes n = −1 (the answer is ln|x| + C, learned later)",
    "Computing F(a) − F(b) instead of F(b) − F(a); upper minus lower, always",
    "Reporting −2 as the AREA for ∫₀² (x − 2) dx — the integral is −2 because the region lies below the axis; the area is 2",
    "Integrating a constant wrongly: ∫5 dx = 5x + C, not 5 + C and not 5x²/2"
  ],
  applications: [
    "Physics: integrating velocity recovers displacement; the area under a v–t graph is distance travelled",
    "Economics: integrating marginal cost gives total variable cost; consumer surplus is an area between curves",
    "Engineering: areas under load curves give bending moments; volumes of tanks via rotation (future units)",
    "Reconstruction problems: from a known rate (derivative) plus one data point, recover the original quantity — the (1, 4) example is this pattern"
  ],
  summary: "Integration undoes differentiation: ∫f dx = F + C with F′ = f. The power rule becomes xⁿ⁺¹/(n+1) (n ≠ −1), sums split, constants factor. Definite integrals evaluate F(b) − F(a) as signed area — below the axis counts negative — and one initial condition pins down C.",
  visuals: [],
  questions: [
    { type: "mcq", q: "∫x⁴ dx equals:", options: ["4x³ + C", "x⁵/5 + C", "5x⁵ + C", "x⁴/4 + C"], answer: 1, difficulty: 1, explanation: "Raise the power to 5, divide by 5: x⁵/5 + C." },
    { type: "mcq", q: "∫ 4 dx equals:", options: ["4 + C", "4x + C", "4x²/2 + C", "x + C"], answer: 1, difficulty: 1, explanation: "A constant k integrates to kx: d/dx(4x) = 4 ✓." },
    { type: "mcq", q: "An antiderivative of f(x) = 3x² is:", options: ["6x + C", "x³ + C", "3x³ + C", "x²/3 + C"], answer: 1, difficulty: 1, explanation: "d/dx x³ = 3x², so F(x) = x³ + C." },
    { type: "mcq", q: "∫₂⁴ x dx equals:", options: ["2", "6", "8", "12"], answer: 1, difficulty: 2, explanation: "[x²/2]₂⁴ = 16/2 − 4/2 = 8 − 2 = 6." },
    { type: "mcq", q: "∫x⁻² dx equals:", options: ["x⁻¹ + C", "−x⁻¹ + C", "2x⁻³ + C", "ln x⁻² + C"], answer: 1, difficulty: 2, explanation: "x⁻¹/(−1) = −1/x + C; check: d/dx(−x⁻¹) = x⁻² ✓." },
    { type: "mcq", q: "∫₀² (x − 2) dx equals:", options: ["2", "−2", "0", "4"], answer: 1, difficulty: 2, explanation: "[x²/2 − 2x]₀² = (2 − 4) − 0 = −2; the region lies below the axis, so the signed integral is negative (geometric area is 2)." },
    { type: "mcq", q: "If f′(x) = 2x and f(0) = 5, then f(x) =", options: ["x² + C", "x² + 5", "2x² + 5", "x + 5"], answer: 1, difficulty: 3, explanation: "f(x) = x² + C; f(0) = 5 forces C = 5." },
    { type: "mcq", q: "∫√x dx equals:", options: ["(2/3)x^(3/2) + C", "(1/2)x^(−1/2) + C", "2x^(3/2) + C", "x^(3/2)/3 + C"], answer: 0, difficulty: 3, explanation: "√x = x^(1/2): exponent 3/2, divide by 3/2 → (2/3)x^(3/2) + C; differentiating back gives x^(1/2) ✓." }
  ]
};
