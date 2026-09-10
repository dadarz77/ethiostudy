/* Content: Grade 12 Mathematics — Unit 4 (part 3): Integrals — topics 5 to 7 */
window.Lessons = window.Lessons || {};

Lessons["g12-mathematics-um4-t5"] = {
  overview: "Given a rate and one known state, integration rebuilds the whole story. This lesson drills antiderivative technique — rules, the linear-argument shortcut, and initial value problems that pin down the mystery constant.",
  objectives: [
    "Recall and chain the basic integration rules on polynomials",
    "Apply the linear-composite rule ∫f(ax+b)dx = F(ax+b)/a",
    "Solve initial value problems: f′ and one point fix C",
    "Reconstruct motion: acceleration → velocity → position",
    "Check every answer by differentiating it back"
  ],
  simple: "<b>Undo, then calibrate.</b> An antiderivative family F(x) + C solves 'what function has this derivative?'. The +C is a placeholder for missing history — one fact like f(0) = 5 calibrates it. Motion chains twice: integrate acceleration to velocity (needs an initial velocity), integrate velocity to position (needs a starting point).",
  detailed: "<p><b>Rules toolbox.</b> ∫xⁿdx = xⁿ⁺¹/(n+1) (n ≠ −1); ∫k dx = kx; constants and sums pass through; rewrite first: √x → x^(1/2), 1/x³ → x⁻³, (x+1)² → expand. Example: ∫(x² + 2 − 1/x³)dx = x³/3 + 2x + 1/(2x²) + C — the last term because −x⁻³ integrates to −x⁻²/(−2).</p><p><b>Linear arguments.</b> If F′ = f then d/dx F(ax + b) = a·f(ax + b) by the chain rule — so ∫f(ax + b)dx = F(ax + b)/a + C. Quick cases: ∫(2x + 1)⁵dx = (2x+1)⁶/12 + C (a = 2 gives the extra /2); ∫cos(3x)dx = sin(3x)/3 + C. This shortcut only rescues LINEAR innards — ∫(x² + 1)⁵dx is NOT (x²+1)⁶/12; that needs the full substitution of the next topic.</p><p><b>Initial value problems (IVPs).</b> f′(x) = 6x² − 4x with f(1) = 3: integrate → f(x) = 2x³ − 2x² + C; plug the point: 2 − 2 + C = 3 → C = 3. The derivative gave the shape family; the point picked the member. A second derivative f″ with two conditions (position AND velocity) burns two constants — one integration per condition.</p><p><b>Motion rebuilt.</b> a(t) = −9.8 m/s², v(0) = 20 m/s upward: v(t) = −9.8t + 20; s(0) = 0 → s(t) = −4.9t² + 20t. Peak height when v = 0: t ≈ 2.04 s, s ≈ 20.4 m. Two integrations, two initial conditions — the pattern every falling-body problem repeats.</p><p><b>Verification culture.</b> Every antiderivative answer is one differentiation away from being checked. Make it automatic: differentiate the result and compare term by term with the integrand before moving on.</p>",
  keyTerms: [
    { term: "Antiderivative", def: "Any F with F′ = f; the family is ∫f dx" },
    { term: "Initial condition", def: "A known (x, f) pair that fixes C" },
    { term: "Initial value problem", def: "Differential equation + enough conditions to pin all constants" },
    { term: "Linear-argument rule", def: "∫f(ax+b)dx = F(ax+b)/a + C" },
    { term: "Reconstruction", def: "Summits of a→v→s given rates and states" }
  ],
  formulas: [
    {
      name: "Linear composite",
      formula: "∫f(ax + b) dx = F(ax + b)/a + C",
      meaning: "Integrate the outer function, divide by the inner's slope",
      vars: [{ name: "a ≠ 0", meaning: "coefficient of x inside (the chain-rule tax)" }],
      when: "Only for linear inner functions; powers like (2x+1)⁵ included"
    },
    {
      name: "IVP pattern",
      formula: "f(x) = ∫f′(x)dx + C, C fixed by f(x₀) = y₀",
      meaning: "Integrate for the family, substitute for the member",
      vars: [{ name: "(x₀, y₀)", meaning: "the initial point" }],
      when: "Any 'given the derivative and one value' question"
    },
    {
      name: "Motion chain",
      formula: "v = ∫a dt + v₀, s = ∫v dt + s₀",
      meaning: "Each integration needs its own initial condition",
      vars: [{ name: "v₀, s₀", meaning: "initial velocity and position" }],
      when: "Falling/thrown bodies, any particle given a(t)"
    }
  ],
  workedExamples: [
    {
      problem: "Solve f′(x) = 6x² − 4x with f(1) = 3.",
      formula: "integrate then calibrate",
      substitution: "f(x) = 2x³ − 2x² + C; f(1) = 2 − 2 + C = 3",
      calculation: "C = 3",
      answer: "f(x) = 2x³ − 2x² + 3"
    },
    {
      problem: "Evaluate ∫(2x + 1)⁵ dx.",
      formula: "linear-argument rule, a = 2",
      substitution: "(2x + 1)⁶/6 ÷ 2",
      calculation: "(2x+1)⁶/12 + C; check: d/dx = 6(2x+1)⁵·2/12 = (2x+1)⁵ ✓",
      answer: "(2x + 1)⁶/12 + C"
    },
    {
      problem: "A ball is thrown up at 20 m/s from ground; a = −9.8. Find peak height.",
      given: "v(0) = 20, s(0) = 0",
      formula: "v = −9.8t + 20; s = −4.9t² + 20t",
      substitution: "v = 0 → t = 20/9.8 ≈ 2.041 s",
      calculation: "s(2.041) = −4.9(4.165) + 40.82 ≈ 20.4",
      answer: "≈ 20.4 m at t ≈ 2.04 s"
    },
    {
      problem: "Integrate f″(x) = 12x with f′(0) = 5, f(0) = 1.",
      formula: "two rounds of IVP",
      substitution: "f′ = 6x² + C₁, C₁ = 5; f = 2x³ + 5x + C₂, C₂ = 1",
      calculation: "—",
      answer: "f(x) = 2x³ + 5x + 1"
    }
  ],
  commonMistakes: [
    "Applying the linear-argument shortcut to non-linear inners ((x²+1)⁵ is NOT /12)",
    "Forgetting to divide by a when integrating f(ax+b) — the chain-rule tax",
    "Calibrating C at the wrong stage of a two-integration problem",
    "Solving f′(x) = 0 instead of integrating f′ when given a derivative",
    "Dropping units in motion problems (m/s vs m confusion at the answer line)"
  ],
  applications: [
    "Rocketry: telemetry sends acceleration; onboard integration (with initial conditions) reconstructs velocity and altitude",
    "Medicine dosing: a drug's decay-rate law + current blood level integrate to future levels",
    "Economics: marginal cost + known fixed cost rebuild the total cost curve for pricing",
    "Reservoir control: inflow-rate curves plus starting volume forecast water level day by day"
  ],
  summary: "Antiderivatives give families; initial conditions pick members. Toolbox: power rule, linearity, rewrite-first, linear-argument divide-by-a. Motion integrates twice (a→v→s) with one condition per step. Differentiate your answer — always — to check.",
  visuals: [],
  questions: [
    { type: "mcq", q: "∫(3x + 2)⁴ dx equals:", options: ["(3x+2)⁵/5 + C", "(3x+2)⁵/15 + C", "3(3x+2)⁵/5 + C", "(x+2)⁵/5 + C"], answer: 1, difficulty: 1, explanation: "Divide by the inner slope 3: /5 then /3 = /15." },
    { type: "mcq", q: "If f′(x) = 2x and f(0) = 7, then f(x) =", options: ["x²", "x² + 7", "2x² + 7", "7x²"], answer: 1, difficulty: 1, explanation: "∫2x = x² + C; f(0) = 7 → C = 7." },
    { type: "mcq", q: "∫cos(2x) dx equals:", options: ["sin(2x) + C", "2sin(2x) + C", "sin(2x)/2 + C", "−sin(2x)/2 + C"], answer: 2, difficulty: 2, explanation: "Derivative of sin(2x)/2 = cos(2x)·2/2 ✓." },
    { type: "mcq", q: "f″(x) = 6x, f′(0) = 0, f(0) = 5. Then f(x) =", options: ["x³ + 5", "3x² + 5", "x³", "6x³ + 5"], answer: 0, difficulty: 2, explanation: "f′ = 3x² + 0; f = x³ + 5." },
    { type: "mcq", q: "∫(x + 1)² dx is best handled by:", options: ["linear rule /3", "expanding then power rule (equivalent: substitute u = x+1)", "the product rule", "integration by parts"], answer: 1, difficulty: 2, explanation: "Expand: x² + 2x + 1 → x³/3 + x² + x + C; the u-sub form (x+1)³/3 differs only by absorbed C — both fine." },
    { type: "mcq", q: "A car slows at a = −4 m/s² from 24 m/s. Stopping distance:", options: ["24 m", "36 m", "72 m", "48 m"], answer: 2, difficulty: 3, explanation: "v = 24 − 4t = 0 → t = 6; s = 24t − 2t² → 144 − 72 = 72 m." },
    { type: "mcq", q: "The general antiderivative of f(x) = 1/x² (x ≠ 0) is:", options: ["ln x² + C", "−1/x + C", "1/x + C", "−2/x³ + C"], answer: 1, difficulty: 3, explanation: "x⁻² → x⁻¹/(−1) = −1/x; check: d/dx(−x⁻¹) = x⁻² ✓." },
    { type: "mcq", q: "f′(x) = 3x² + 2 with f(−1) = 4. The value f(1) =", options: ["6", "8", "10", "4"], answer: 2, difficulty: 3, explanation: "f = x³ + 2x + C; f(−1) = −3 + C = 4 → C = 7; f(1) = 1 + 2 + 7 = 10." }
  ]
};

Lessons["g12-mathematics-um4-t6"] = {
  overview: "Three techniques unlock most hard integrals: substitution reverses the chain rule, integration by parts reverses the product rule, and partial fractions break rational functions into integrable shards.",
  objectives: [
    "Choose u so that du appears inside the integrand",
    "Carry out full substitution including limits on definite integrals",
    "Apply ∫u dv = uv − ∫v du to polynomial×exponential/trig products",
    "Decompose 1/[(x−a)(x−b)] into partial fractions and integrate",
    "Recognize which technique fits which integrand shape"
  ],
  simple: "<b>Pick the reversal.</b> Chain-rule leftovers (a function times its derivative, like 2x(x²+1)⁵) → <b>substitution</b>: u = x²+1. Product-rule leftovers (x·eˣ, x·sin x) → <b>by parts</b>: ∫u dv = uv − ∫v du. A fraction with a factorable denominator → <b>partial fractions</b>: split into simple 1/(x−a) pieces that integrate to logs.",
  detailed: "<p><b>Substitution.</b> ∫2x(x² + 1)⁵ dx: u = x² + 1 → du = 2x dx — the leftover fits exactly: ∫u⁵ du = u⁶/6 + C = (x² + 1)⁶/6 + C. The tell: something inside a power/trig whose derivative also appears as a factor. For definite integrals convert the limits: x ∈ [0, 1] with u = x² + 1 becomes u ∈ [1, 2] — then never return to x.</p><p><b>Integration by parts.</b> ∫u dv = uv − ∫v du, from reversing (uv)′. Choose u to be the part that SIMPLIFIES on differentiating (LIATE: Logs, Inverse trig, Algebraic, Trig, Exponential), dv the rest. ∫x eˣ dx: u = x (du = dx), dv = eˣdx (v = eˣ) → xeˣ − ∫eˣdx = eˣ(x − 1) + C. ∫x sin x dx: u = x, dv = sin x dx → v = −cos x: −x cos x + ∫cos x dx = −x cos x + sin x + C.</p><p><b>Partial fractions.</b> 1/[(x−1)(x−2)] = A/(x−1) + B/(x−2). Clear denominators: 1 = A(x−2) + B(x−1). Plug x = 1 → A = −1; x = 2 → B = 1. Then ∫dx/[(x−1)(x−2)] = ln|x−2| − ln|x−1| + C = ln|(x−2)/(x−1)| + C. The cover-up method makes A, B instant for distinct linear factors.</p><p><b>Choosing.</b> Scan the integrand: composite × derivative → substitute; product of unlike families (polynomial×eˣ, polynomial×trig) → parts; rational with factorable denominator → partial fractions; polynomial itself → power rule. Many 'hard' integrals are two of these in sequence (substitute, then parts).</p><p><b>Bookkeeping perils.</b> Substitution without changing du's factor (∫2x·(x²+1)⁵ needs du = 2x dx whole); by-parts sign errors (v = −cos x trips the minus twice); forgetting absolute values in log integrals; and indefinite answers missing +C — each has burned whole marks in national exams.</p>",
  keyTerms: [
    { term: "Substitution (u-sub)", def: "Set u = inner function; du must supply the leftover factor" },
    { term: "Integration by parts", def: "∫u dv = uv − ∫v du — the product rule reversed" },
    { term: "LIATE", def: "Heuristic for choosing u in parts: Log, Inverse, Algebraic, Trig, Exponential" },
    { term: "Partial fractions", def: "Splitting a rational into simpler 1/(x−a) terms" },
    { term: "Cover-up method", def: "Find each A by plugging its factor's root" }
  ],
  formulas: [
    {
      name: "Substitution",
      formula: "∫ f(g(x)) g′(x) dx = ∫ f(u) du, u = g(x)",
      meaning: "Reverse the chain rule",
      vars: [{ name: "du", meaning: "g′(x)dx — must be present up to a constant factor" }],
      when: "Composite function times (a multiple of) the inner derivative"
    },
    {
      name: "Integration by parts",
      formula: "∫ u dv = uv − ∫ v du",
      meaning: "The product rule run backwards",
      vars: [{ name: "u", meaning: "choose the simplifying factor (LIATE)" }, { name: "dv", meaning: "the rest, which must integrate easily" }],
      when: "Products of unlike families: x·eˣ, x·sin x, x·ln x"
    },
    {
      name: "Partial fractions (distinct linear)",
      formula: "1/[(x−a)(x−b)] = [1/(a−b)]·(1/(x−a) − 1/(x−b))",
      meaning: "A fraction becomes two log-shaped shards",
      vars: [{ name: "a ≠ b", meaning: "the roots of the denominator" }],
      when: "Rational functions with factorable denominators"
    }
  ],
  workedExamples: [
    {
      problem: "Evaluate ∫ 2x(x² + 1)⁵ dx.",
      formula: "u = x² + 1, du = 2x dx",
      substitution: "∫u⁵ du = u⁶/6 + C",
      calculation: "back-substitute",
      answer: "(x² + 1)⁶/6 + C"
    },
    {
      problem: "Evaluate ∫₀¹ 6x²(x³ + 1)² dx by substitution.",
      formula: "u = x³ + 1, du = 3x² dx",
      substitution: "limits: x = 0→u = 1, x = 1→u = 2; ∫₁² 2u² du",
      calculation: "[2u³/3]₁² = 16/3 − 2/3",
      answer: "14/3"
    },
    {
      problem: "Evaluate ∫ x eˣ dx.",
      formula: "u = x, dv = eˣ dx ⇒ du = dx, v = eˣ",
      substitution: "xeˣ − ∫eˣ dx",
      calculation: "xeˣ − eˣ",
      answer: "eˣ(x − 1) + C (check: d/dx = eˣ(x−1) + eˣ = xeˣ ✓)"
    },
    {
      problem: "Evaluate ∫ dx/[(x−1)(x−2)].",
      formula: "cover-up: A = −1 at x=1, B = 1 at x=2",
      substitution: "−∫dx/(x−1) + ∫dx/(x−2)",
      calculation: "ln|x−2| − ln|x−1|",
      answer: "ln|(x−2)/(x−1)| + C"
    }
  ],
  commonMistakes: [
    "Substituting u but integrating in x afterwards without converting back (definite: change limits and stay in u)",
    "Choosing u as the part that does NOT simplify in parts (x·eˣ with u = eˣ goes in circles)",
    "Missing the constant factor when du ≠ leftover exactly: ∫x(x²+1)⁵dx needs a ½ outside",
    "Writing ln(x−a) instead of ln|x−a| — negatives can appear off-interval",
    "Solving partial-fraction constants by expansion instead of cover-up and introducing algebra slips"
  ],
  applications: [
    "Probability: areas under normal-style curves come from substitution chains on exponentials",
    "Physics work integrals ∫F dx with F = kx·e^(−x/a) are solved by parts (springs, damping)",
    "Economics: ∫ marginal revenue with composite demand curves substitutes; partial fractions decompose rational profit models",
    "Signal processing: ∫t·sin(ωt)dt (by parts) is the Fourier coefficient computation in miniature"
  ],
  summary: "Substitution unwinds the chain rule (u, du, and new limits); parts unwinds the product rule (LIATE for u, everything else as dv); partial fractions shatter factorable rationals into logs. Read the integrand's architecture first, then pick the reversal — and verify by differentiating.",
  visuals: [],
  questions: [
    { type: "mcq", q: "∫2x·e^{x²} dx equals:", options: ["e^{x²} + C", "2e^{x²} + C", "x²e^{x²} + C", "e^{2x} + C"], answer: 0, difficulty: 1, explanation: "u = x², du = 2x dx → ∫eᵘdu = e^{x²} + C." },
    { type: "mcq", q: "In ∫x·ln x dx by parts, the best first u is:", options: ["x", "ln x", "x dx", "1/x"], answer: 1, difficulty: 1, explanation: "LIATE: Log before Algebraic — u = ln x simplifies on differentiation." },
    { type: "mcq", q: "∫x sin x dx equals:", options: ["−x cos x + sin x + C", "x cos x − sin x + C", "−x cos x − sin x + C", "x sin x + C"], answer: 0, difficulty: 2, explanation: "u = x, dv = sin x dx → −x cos x + ∫cos x dx." },
    { type: "mcq", q: "∫(4x³ + 3x²)(x⁴ + x³)⁹ dx equals:", options: ["(x⁴+x³)¹⁰ + C", "(x⁴+x³)¹⁰/10 + C", "10(x⁴+x³)⁹ + C", "(4x³+3x²)(x⁴+x³)¹⁰/10 + C"], answer: 1, difficulty: 2, explanation: "u = x⁴ + x³ has du = (4x³ + 3x²)dx exactly → u¹⁰/10." },
    { type: "mcq", q: "1/[(x−1)(x+1)] splits as:", options: ["½[1/(x−1) − 1/(x+1)]", "½[1/(x−1) + 1/(x+1)]", "1/(x−1) − 1/(x+1)", "[1/(x−1)(x+1)]'"], answer: 0, difficulty: 2, explanation: "Cover-up: A = 1/2 at x=1, B = −1/2 at x=−1." },
    { type: "mcq", q: "∫x e^{2x} dx equals:", options: ["e^{2x}(x/2 − 1/4) + C", "x e^{2x}/2 + C", "e^{2x}(x + 2)/2 + C", "2x e^{2x} + C"], answer: 0, difficulty: 3, explanation: "Parts u = x, dv = e^{2x}: xe^{2x}/2 − ∫e^{2x}/2 = xe^{2x}/2 − e^{2x}/4." },
    { type: "mcq", q: "∫₀² x(x²+1)³ dx equals:", options: ["78", "39", "156", "13"], answer: 0, difficulty: 3, explanation: "u = x²+1, du = 2x dx supplies a factor ½: ½∫₁⁵u³du = ½·(625−1)/4 = 78 (156 drops the ½)." },
    { type: "mcq", q: "∫ dx/(3x − 1) equals:", options: ["ln|3x−1| + C", "ln|3x−1|/3 + C", "3ln|3x−1| + C", "(3x−1)²/2 + C"], answer: 1, difficulty: 3, explanation: "Linear argument: divide by 3; check by differentiating." }
  ]
};

Lessons["g12-mathematics-um4-t7"] = {
  overview: "Integrals meet the infinite in two ways — endless intervals and exploding functions. Improper integrals answer 'does the accumulating area settle to a finite total?' by wrapping the infinite bound in a limit.",
  objectives: [
    "Define ∫ₐ^∞ f dx as a limit of finite integrals",
    "Evaluate convergent improper integrals and declare divergence honestly",
    "Handle integrands blowing up inside the interval (vertical asymptotes)",
    "Apply the p-test: ∫₁^∞ dx/xᵖ converges iff p > 1",
    "Interpret convergence in physical accumulation problems"
  ],
  simple: "<b>Add forever, check if it stops.</b> An unbounded interval or an infinite spike makes ∫ 'improper'. Replace the problem edge with a variable, integrate normally, then take the limit as the variable chases infinity (or the spike). If the limit is a finite number → converges; if it runs off to infinity or fails to exist → diverges. ∫₁^∞ dx/x² = 1 converges; ∫₁^∞ dx/x = ∞ diverges.",
  detailed: "<p><b>Infinite limits.</b> ∫₁^∞ dx/x² := lim b→∞ ∫₁ᵇ x⁻²dx = lim [−1/x]₁ᵇ = lim(−1/b + 1) = 1. The region is an infinite trumpet of finite area — Gabriel's-horn flavour: beyond every fence there is more shape, but the totals keep their promises.</p><p><b>The p-test.</b> ∫₁^∞ dx/xᵖ: for p ≠ 1 it behaves like [x^{1−p}/(1−p)] → converges iff p > 1 (limit finite); p = 1 gives ln b → ∞ divergent. Picture: 1/x² shrinks fast enough that leftover tails sum small; 1/x shrinks too slowly (harmonic-style). This single test decides most exam convergence questions.</p><p><b>Interior explosions.</b> ∫₀¹ dx/√x: the integrand → ∞ at 0. Approach: lim a→0⁺ ∫ₐ¹ x^(-1/2) dx = lim [2√x]ₐ¹ = 2 − 0 = 2 — a spike of infinite height yet finite area (compare the 1/√x family: ∫₀¹ x^(-p) dx converges iff p < 1 — the mirror of the infinity test).</p><p><b>Both ends.</b> ∫₋∞^∞ needs TWO independent limits (split at any safe point, e.g. 0); both halves must converge. A symmetric-looking answer from canceling ±∞ is not allowed — that is the Cauchy principal value, not a convergent integral.</p><p><b>Meaning.</b> Convergence says 'the total exists': a half-life decay ∫₀^∞ N₀e^{−kt}dt = N₀/k finite is exactly 'all atoms eventually decay and the sum of activity is bounded'; a divergent expected waiting time warns that a model's mean is not a usable average. Saying 'diverges' is a complete, correct answer — not a failure to compute.</p>",
  keyTerms: [
    { term: "Improper integral", def: "Unbounded interval or unbounded integrand, resolved by limits" },
    { term: "Converges", def: "The defining limit exists as a finite number" },
    { term: "Diverges", def: "The limit is ±∞ or fails to exist" },
    { term: "p-test", def: "∫₁^∞ x⁻ᵖ converges iff p > 1" },
    { term: "Principal value", def: "Symmetric cancellation — NOT convergence" }
  ],
  formulas: [
    {
      name: "Infinite upper limit",
      formula: "∫ₐ^∞ f dx = lim_{b→∞} ∫ₐᵇ f dx",
      meaning: "Definition: finite integrals chased to infinity",
      vars: [{ name: "b", meaning: "the finite stand-in bound" }],
      when: "Any ∞ as a limit of integration"
    },
    {
      name: "Vertical asymptote at a",
      formula: "∫ₐᵇ f dx = lim_{c→a⁺} ∫_cᵇ f dx",
      meaning: "Approach the blow-up point from the safe side",
      vars: [{ name: "c", meaning: "interior point sliding to the singularity" }],
      when: "Integrand undefined/infinite at an endpoint"
    },
    {
      name: "p-test",
      formula: "∫₁^∞ dx/xᵖ converges ⇔ p > 1 (then = 1/(p−1)); ∫₀¹ dx/xᵖ converges ⇔ p < 1",
      meaning: "One line deciding both families",
      vars: [{ name: "p", meaning: "the power in the denominator" }],
      when: "Any power-law tail or endpoint spike"
    }
  ],
  workedExamples: [
    {
      problem: "Evaluate ∫₁^∞ dx/x².",
      formula: "lim b→∞ ∫₁ᵇ x⁻² dx",
      substitution: "lim [−1/x]₁ᵇ = lim (−1/b + 1)",
      calculation: "0 + 1",
      answer: "1 — convergent"
    },
    {
      problem: "Determine ∫₁^∞ dx/x.",
      formula: "lim b→∞ [ln x]₁ᵇ",
      substitution: "lim ln b",
      calculation: "grows past every bound",
      answer: "diverges to ∞ (p = 1 boundary case)"
    },
    {
      problem: "Evaluate ∫₀¹ dx/√x.",
      formula: "lim c→0⁺ ∫_c¹ x^(−1/2) dx",
      substitution: "lim [2√x]_c¹",
      calculation: "2 − 2√c → 2",
      answer: "2 — infinite height, finite area"
    },
    {
      problem: "Radioactive activity A(t) = 10e^{−0.2t} mSv/h. Total exposure from t = 0 to forever.",
      formula: "∫₀^∞ 10e^{−0.2t} dt = lim b→∞ [−50e^{−0.2t}]₀ᵇ",
      substitution: "0 − (−50)",
      calculation: "50",
      answer: "50 mSv·h — a convergent improper integral as a usable dose total"
    }
  ],
  commonMistakes: [
    "Plugging ∞ into the antiderivative casually instead of writing the limit (∞ is not a number)",
    "Declaring ∫₀¹ dx/x² convergent — p-test: p = 2 ≥ 1 at the finite end → diverges",
    "Treating ±∞ cancellation over (−∞, ∞) as convergence (principal value is not enough)",
    "Missing an interior singularity: ∫₋₁¹ dx/x² diverges even though the bounds are finite",
    "Answering 'infinity' when the honest response is 'does not exist' (oscillating limits)"
  ],
  applications: [
    "Dose and exposure totals over 'forever' (radiation, pollutants) are convergent improper integrals — or safety says the total is unbounded",
    "Probability: continuous densities must integrate (improperly over ℝ) to exactly 1 — convergence is normalization",
    "Economics: the present value of a perpetual income stream ∫₀^∞ Re^{−rt}dt = R/r — an infinite annuity priced by one improper integral",
    "Physics: electric-field flux of idealized line charges, and heat kernels over infinite rods, live or die by p-test logic"
  ],
  summary: "Improper integrals defer the hard edge to a limit: chase ∞ bounds with b → ∞, slide past endpoint blow-ups, split (−∞, ∞) into two honest limits. The p-test ranks everything: 1/xᵖ tails converge iff p > 1; 0-side spikes converge iff p < 1. 'Diverges' is a full answer — and convergence is what makes infinite-time totals physical.",
  visuals: [],
  questions: [
    { type: "mcq", q: "∫₁^∞ dx/x³ equals:", options: ["1/2", "1", "3", "diverges"], answer: 0, difficulty: 1, explanation: "[x⁻²/(−2)]₁^∞ → 0 − (−1/2) = 1/2." },
    { type: "mcq", q: "∫₁^∞ dx/x is:", options: ["0", "1", "ln 1", "divergent"], answer: 3, difficulty: 1, explanation: "ln b → ∞: the harmonic tail never finishes." },
    { type: "mcq", q: "∫₀¹ dx/√x equals:", options: ["1", "2", "∞", "undefined"], answer: 1, difficulty: 2, explanation: "2√x|₀¹ = 2; the spike is integrable (p = ½ < 1)." },
    { type: "mcq", q: "The p-test: ∫₁^∞ x⁻ᵖ converges for:", options: ["p > 0", "p ≥ 1", "p > 1", "all p"], answer: 2, difficulty: 2, explanation: "Only then does 1−p < 0 kill the tail." },
    { type: "mcq", q: "∫₀^∞ e^{−x} dx equals:", options: ["0", "1", "e", "divergent"], answer: 1, difficulty: 2, explanation: "[−e^{−x}]₀^∞ = 0 + 1 = 1 — the survival-function integral." },
    { type: "mcq", q: "∫₋₁¹ dx/x²:", options: ["2", "0", "divergent", "1"], answer: 2, difficulty: 2, explanation: "Singularity INSIDE at x = 0; ∫₀¹ blows up — finite bounds fool nobody." },
    { type: "mcq", q: "∫₀^∞ e^{−2t} dt equals:", options: ["1/2", "2", "1", "∞"], answer: 0, difficulty: 3, explanation: "[−e^{−2t}/2]₀^∞ = 0 + 1/2." },
    { type: "mcq", q: "A perpetual wage of 12 000 birr/yr at continuous rate 6% has present value:", options: ["120 000", "200 000", "720", "divergent"], answer: 1, difficulty: 3, explanation: "∫₀^∞ 12000e^{−0.06t}dt = 12000/0.06 = 200 000 birr." }
  ]
};
