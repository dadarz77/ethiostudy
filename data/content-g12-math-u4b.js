/* Content: Grade 12 Mathematics — Unit 4 (part 2): Integrals — topics 3 to 7 */
window.Lessons = window.Lessons || {};

Lessons["g12-mathematics-um4-t3"] = {
  overview: "Averages are integrals wearing a disguise. The average value of a function over an interval is the height of the flat rectangle with the same area — and for continuous functions the curve actually reaches that height somewhere.",
  objectives: [
    "Compute f̄ = 1/(b−a) ∫ₐᵇ f(x) dx for any continuous f",
    "Explain the rectangle interpretation of average value",
    "State the mean value theorem for integrals in words",
    "Find average velocity, temperature, and concentration from rate/level functions",
    "Relate average value to where f(x) = f̄ occurs"
  ],
  simple: "<b>Flatten the area.</b> Average value = total area ÷ width: f̄ = 1/(b−a)∫ₐᵇf dx. If f is a wobbly temperature curve, f̄ is the one steady temperature that stores the same total heat-hours. The mean value theorem promises the curve hits f̄ at some moment between a and b.",
  detailed: "<p><b>The formula.</b> For continuous f on [a, b]: f̄ = 1/(b−a) ∫ₐᵇ f(x) dx. Worked: f(x) = x² on [1, 3]: ∫₁³ x² dx = [x³/3] = 9 − 1/3 = 26/3; divide by width 2 → f̄ = 13/3 ≈ 4.33 — bigger than the midpoint value f(2) = 4 because the curve accelerates upward.</p><p><b>Rectangle picture.</b> The integral is the area under the curve; a rectangle of width (b − a) and height f̄ has exactly the same area. Cutting the bumps off the curve and filling the dips gives the flat line — the visual definition of 'average' for a continuum of values, generalizing the finite mean Σx/n where width plays the role of n.</p><p><b>Mean value theorem for integrals.</b> Since f̄ lies between f's min and max, continuity guarantees some c in (a, b) with f(c) = f̄: the curve passes through its own average. For x² on [1, 3]: solve c² = 13/3 → c = √(13/3) ≈ 2.08 — inside the interval as promised.</p><p><b>Physics reading.</b> Average velocity over a trip = 1/T ∫₀ᵀ v(t) dt (and equals total distance ÷ time — the two definitions reconcile via the integral). A 24-hour temperature model T(t) = 20 + 8 sin(π(t−8)/12) °C has daytime average found by integrating over 8–20 h, not by sampling three afternoon readings.</p><p><b>Exam shapes:</b> 'find the average value of f on [a,b]' (direct formula); 'find all c where f(c) equals the average' (solve f(c) = f̄); word problems asking average sales/day, average flow, average concentration over a treatment window.</p>",
  keyTerms: [
    { term: "Average value", def: "f̄ = 1/(b−a) ∫ₐᵇ f dx — area per unit width" },
    { term: "Rectangle equivalence", def: "The flat bar with the same area and width as the region" },
    { term: "Mean value theorem (integrals)", def: "Some c has f(c) = f̄" },
    { term: "Mean value theorem (derivatives)", def: "Some c has f′(c) = (f(b)−f(a))/(b−a) — its integration twin" },
    { term: "Accumulation", def: "∫ f = f̄ × (b−a): average × width recovers the total" }
  ],
  formulas: [
    {
      name: "Average value of a function",
      formula: "f̄ = 1/(b − a) ∫ₐᵇ f(x) dx",
      meaning: "Total accumulation divided by the interval's length",
      vars: [{ name: "b − a", meaning: "the width the average is taken over" }],
      when: "Any 'average/mean value over an interval' question"
    },
    {
      name: "Rectangle form",
      formula: "∫ₐᵇ f dx = f̄ · (b − a)",
      meaning: "Area equals average height times width",
      vars: [{ name: "f̄", meaning: "the constant height of the equal-area rectangle" }],
      when: "Recovering totals from a known average (and back)"
    }
  ],
  workedExamples: [
    {
      problem: "Find the average value of f(x) = x² on [1, 3].",
      formula: "f̄ = 1/(3−1) ∫₁³ x² dx",
      substitution: "½·[x³/3]₁³ = ½·(26/3)",
      calculation: "13/3",
      answer: "f̄ = 13/3 ≈ 4.33"
    },
    {
      problem: "Where does f(x) = x² equal its average on [1, 3]?",
      formula: "solve c² = 13/3",
      substitution: "c = √(13/3)",
      calculation: "≈ 2.08, which lies in (1, 3)",
      answer: "c ≈ 2.08 — the curve crosses its own average"
    },
    {
      problem: "A motor's speed is v(t) = 60 − 6t m/s for 0 ≤ t ≤ 10. Find the average speed.",
      formula: "v̄ = 1/10 ∫₀¹⁰ (60 − 6t) dt",
      substitution: "1/10 · [60t − 3t²]₀¹⁰ = 1/10 · (600 − 300)",
      calculation: "300/10",
      answer: "30 m/s — the linear average, as it must be for a straight-line graph"
    },
    {
      problem: "If the average value of f on [2, 6] is 5, what is ∫₂⁶ f dx?",
      formula: "∫ₐᵇ f dx = f̄·(b − a)",
      substitution: "5 × 4",
      calculation: "—",
      answer: "20 — average × width gives the total"
    }
  ],
  commonMistakes: [
    "Dividing by b instead of by the width (b − a)",
    "Confusing average value f̄ with f evaluated at the midpoint x̄ (they differ for curved f)",
    "Reporting the integral when the question asked the average (forgetting the 1/(b−a))",
    "Solving f(c) = f̄ but accepting c-values outside [a, b]",
    "Expecting a unique c — many functions hit their average several times (e.g. sin x)"
  ],
  applications: [
    "Electricity boards bill average demand: ∫power/time is exactly f̄ over the billing window",
    "Pollution monitors report the 8-hour average concentration — the integral definition, run on sensor curves",
    "A runner's average pace per split is the average-value calculation on their speed curve",
    "Rainfall: the mean intensity over a storm = total depth ÷ duration = 1/T ∫I(t)dt"
  ],
  summary: "Average value divides the accumulated area by the interval width: f̄ = 1/(b−a)∫f dx — the height of the equal-area rectangle. The integral mean value theorem guarantees the curve attains f̄ somewhere inside the interval, and the derivative MVT (a slope statement) is its sibling.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The average value of f(x) = 2x on [0, 4] is:", options: ["2", "4", "8", "16"], answer: 1, difficulty: 1, explanation: "1/4 ∫₀⁴2x dx = 1/4·16 = 4 — the midpoint of a linear rise." },
    { type: "mcq", q: "If f̄ = 3 on [1, 5], then ∫₁⁵ f dx =", options: ["3", "8", "12", "15"], answer: 2, difficulty: 1, explanation: "f̄ × width = 3·4 = 12." },
    { type: "mcq", q: "The average value of f(x) = x² on [0, 3] is:", options: ["1", "3", "9", "6"], answer: 1, difficulty: 2, explanation: "1/3·[x³/3]₀³ = 1/3·9 = 3." },
    { type: "mcq", q: "The average value of the constant f(x) = 7 on any interval is:", options: ["7·(b−a)", "7", "0", "depends on the interval"], answer: 1, difficulty: 2, explanation: "A flat function's average is its height — the formula returns 7 exactly." },
    { type: "mcq", q: "The average value of f(x) = 1/x on [1, e] is:", options: ["1/(e−1)", "1", "e−1", "ln e"], answer: 0, difficulty: 2, explanation: "1/(e−1)·∫₁ᵉ dx/x = ln e/(e−1) = 1/(e−1)." },
    { type: "mcq", q: "For f(x) = x² on [1, 3], the c with f(c) = f̄ is:", options: ["2", "√(13/3)", "13/6", "13/3"], answer: 1, difficulty: 3, explanation: "f̄ = 13/3; c² = 13/3 → c = √(13/3) ≈ 2.08." },
    { type: "mcq", q: "A city's demand rate is D(t) = 100 − 20t units/hour, t in [0, 4]. The average demand rate is:", options: ["40", "60", "80", "120"], answer: 1, difficulty: 3, explanation: "1/4 ∫₀⁴(100 − 20t)dt = 1/4·(400 − 160) = 60 units/hour." },
    { type: "mcq", q: "The average value of f(x) = sin x on [0, π] is:", options: ["0", "2/π", "1", "π/2"], answer: 1, difficulty: 3, explanation: "1/π·[−cos x]₀^π = 1/π·2 = 2/π ≈ 0.64." }
  ]
};

Lessons["g12-mathematics-um4-t4"] = {
  overview: "The Fundamental Theorem of Calculus is calculus's master switch: differentiation and integration are inverse processes. Part 1 turns an integral-with-moving-limit into a derivative; Part 2 evaluates definite integrals by finding any antiderivative and subtracting.",
  objectives: [
    "State and apply FTC Part 1: d/dx ∫ₐˣ f(t) dt = f(x)",
    "Differentiate accumulation functions with chain-rule variants",
    "State and apply FTC Part 2: ∫ₐᵇ f dx = F(b) − F(a)",
    "Evaluate definite integrals without summing infinite rectangles",
    "Explain in words why the two parts are inverses of each other"
  ],
  simple: "<b>Two halves of one truth.</b> Part 1: if A(x) = ∫ₐˣ f(t) dt accumulates area under f, then A′(x) = f(x) — the rate the area grows IS the height of the curve. Part 2: to total the area, reverse the process — ∫ₐᵇ f dx = F(b) − F(a) for any antiderivative F. Together: ∫ and d/dx undo each other.",
  detailed: "<p><b>Part 1 in action.</b> Let g(x) = ∫₀ˣ t² dt. Then g′(x) = x² directly — no need to integrate first (though checking: g(x) = x³/3 and its derivative is indeed x²). Chain-rule variant: d/dx ∫₀^{x²} t² dt = (x²)² · 2x = 2x⁵ — plug the moving top limit into f, multiply by its derivative. When the limit sits below: d/dx ∫ₓ¹ f(t) dt = −f(x) (flipping bounds flips the sign).</p><p><b>Part 2 is the workhorse.</b> ∫₁³ 2x dx = [x²]₁³ = 9 − 1 = 8. Any antiderivative works because two of them differ by a constant, and constants cancel in F(b) − F(a). This is why we learned indefinite integration first: it manufactures the F that Part 2 spends.</p><p><b>Accumulation intuition.</b> A(x) answers 'total so far' — rainfall since dawn, cost of the next units, litres leaked by hour x. Part 1 says the marginal total is the current rate: A′ = f. The theorem generalizes the odometer/fuel-pump duality: total consumption over a trip = the difference of the meter readings, and the pump's instantaneous rate is the meter's slope.</p><p><b>Worked sign caution.</b> ∫₋₂² (3t² − 4) dt with F(t) = t³ − 4t: F(2) − F(−2) = (8 − 8) − (−8 + 8) = 0. The even integrand is negative on (−2, 2) between its roots... actually f(0) = −4, f(±2) = 8 — the regions cancel: net zero, geometric areas equal. Part 2 computes net; take absolute pieces for geometry.</p><p><b>Exam shapes:</b> 'if g(x) = ∫₁ˣ e^{t²} dt, find g′(2)' (Part 1: e⁴ — no antiderivative of e^{t²} needed, and that is the point); 'evaluate ∫ via Part 2'; 'where does the accumulation function A reach its maximum?' — set A′ = f = 0.</p>",
  keyTerms: [
    { term: "Accumulation function", def: "A(x) = ∫ₐˣ f(t) dt — area so far as a function of x" },
    { term: "FTC Part 1", def: "A′(x) = f(x): the area's slope is the curve's height" },
    { term: "FTC Part 2", def: "∫ₐᵇ f dx = F(b) − F(a): totals from antiderivatives" },
    { term: "Integrable singularity of notation", def: "t is a dummy variable; x in the limit is the variable that matters" },
    { term: "Dummy variable", def: "The bound inside ∫ₐˣ f(t)dt — could be any letter" }
  ],
  formulas: [
    {
      name: "FTC Part 1",
      formula: "d/dx ∫ₐˣ f(t) dt = f(x)",
      meaning: "Differentiating an integral with moving top limit returns the integrand",
      vars: [{ name: "a", meaning: "any fixed lower limit (it contributes 0)" }],
      when: "Derivatives of accumulation functions"
    },
    {
      name: "FTC Part 1 + chain rule",
      formula: "d/dx ∫ₐ^{u(x)} f(t) dt = f(u(x)) · u′(x)",
      meaning: "Plug the limit in, multiply by its slope",
      vars: [{ name: "u(x)", meaning: "the moving upper limit" }],
      when: "When the limit is a function of x, not x itself"
    },
    {
      name: "FTC Part 2",
      formula: "∫ₐᵇ f(x) dx = F(b) − F(a), F′ = f",
      meaning: "Total change = antiderivative difference",
      vars: [{ name: "F", meaning: "any one antiderivative of f" }],
      when: "Every numerical definite integral you can integrate"
    }
  ],
  workedExamples: [
    {
      problem: "If g(x) = ∫₀ˣ t² dt, find g′(x) without integrating.",
      formula: "FTC Part 1",
      substitution: "g′(x) = f(x) where f(t) = t²",
      calculation: "—",
      answer: "g′(x) = x² (check: g = x³/3, g′ = x² ✓)"
    },
    {
      problem: "Find d/dx ∫₀^{x²} sin t dt.",
      formula: "chain rule: f(u(x))·u′(x) with u = x², u′ = 2x",
      substitution: "sin(x²) · 2x",
      calculation: "—",
      answer: "2x sin(x²)"
    },
    {
      problem: "Evaluate ∫₁⁴ (2x + 1/x) dx — the second piece needs the ln rule.",
      formula: "Part 2 with F(x) = x² + ln x",
      substitution: "(16 + ln 4) − (1 + ln 1)",
      calculation: "15 + ln 4",
      answer: "15 + ln 4 ≈ 16.39"
    },
    {
      problem: "Water leaks at r(t) = 3 − t litres/min for t ∈ [0, 3]. Where is the total leaked greatest, and how much?",
      given: "Total by time x is A(x) = ∫₀ˣ r dt",
      formula: "Part 1: A′ = r = 3 − t → 0 at t = 3 (r > 0 before, r = 0 at the end)",
      substitution: "A(3) = ∫₀³ (3 − t) dt = [3t − t²/2]₀³",
      calculation: "9 − 4.5",
      answer: "Maximum leak total 4.5 L at t = 3 min (the rate only vanishes at the endpoint)"
    }
  ],
  commonMistakes: [
    "Trying to actually integrate when FTC Part 1 makes it unnecessary (e^{t²} has no elementary antiderivative — the theorem still gives g′)",
    "Forgetting the chain-rule factor u′(x) when the limit is x² or another function",
    "Differentiating with respect to the dummy variable t instead of x",
    "Applying F(a) − F(b) (sign-flipped) — the top limit's value goes first",
    "Believing Part 2 needs the +C — any antiderivative works since constants cancel"
  ],
  applications: [
    "Electricity meters: the total-kWh dial is an accumulation function; its rate of climb is instantaneous power",
    "Rain gauges vs rainfall intensity plots: one is the integral, the other the derivative of the same story",
    "Economics: total cost is the integral of marginal cost, and Part 2 says ΔC = C(b) − C(a) — the cost of extra output",
    "Medicine: drug amount in blood = ∫ infusion rate; the infusion pump computes the accumulation for dosing"
  ],
  summary: "FTC marries the two operations: Part 1 — d/dx∫ₐˣf = f, so accumulation's slope is the current rate (chain rule when the limit moves nonlinearly); Part 2 — ∫ₐᵇf = F(b) − F(a), so every definite integral is an antiderivative's two readings subtracted. One theorem read forwards and backwards.",
  visuals: [],
  questions: [
    { type: "mcq", q: "d/dx ∫₀ˣ t³ dt equals:", options: ["x⁴/4", "x³", "3x²", "t³"], answer: 1, difficulty: 1, explanation: "Part 1 returns the integrand at x: x³." },
    { type: "mcq", q: "∫₂⁵ f dx with antiderivative F is:", options: ["F(5) − F(2)", "F(2) − F(5)", "F(5)", "5F(5) − 2F(2)"], answer: 0, difficulty: 1, explanation: "Part 2: evaluate the antiderivative at the top limit and subtract its bottom-limit value." },
    { type: "mcq", q: "If g(x) = ∫₀^{x²} t dt, then g′(x) =", options: ["x²", "2x", "x³", "2x³"], answer: 3, difficulty: 2, explanation: "Chain: f(x²)·2x = x²·2x = 2x³. Direct check: g = x⁴/2, g′ = 2x³." },
    { type: "mcq", q: "The value of ∫₁³ (1/x) dx is:", options: ["3 − 1", "ln 3", "1/3 − 1", "ln 2"], answer: 1, difficulty: 2, explanation: "[ln x]₁³ = ln 3 − ln 1 = ln 3." },
    { type: "mcq", q: "If A(x) = ∫₀ˣ f(t)dt and f is positive then negative after t = 4, A peaks at:", options: ["x = 0", "x = 4", "x → ∞", "nowhere"], answer: 1, difficulty: 2, explanation: "A′ = f: area grows while f > 0, shrinks once f < 0 — the switch point x = 4 is the max." },
    { type: "mcq", q: "d/dx ∫ₓ² cos t dt equals:", options: ["cos x", "−cos x", "cos 2", "−cos 2"], answer: 1, difficulty: 2, explanation: "x is the lower limit — flip gives ∫₂ˣ(−cos): derivative −cos x." },
    { type: "mcq", q: "Evaluate ∫₋₁¹ (3x² − 1) dx.", options: ["0", "2", "−2", "4"], answer: 0, difficulty: 3, explanation: "[x³ − x]₋₁¹ = (1 − 1) − (−1 + 1) = 0 — the even parts contribute 2 − 2." },
    { type: "mcq", q: "Total cost C satisfies C′(q) = 4q and C(0) = 50. C(5) =", options: ["50", "100", "150", "250"], answer: 1, difficulty: 3, explanation: "C(q) = 2q² + 50 by Part 2 with the initial value; C(5) = 50 + 50 = 100." }
  ]
};
