/* Content: Grade 10 Mathematics — Unit 3: Exponential and Logarithmic Functions (3 topics) */
window.Lessons = window.Lessons || {};

Lessons["g10-mathematics-um3-t1"] = {
  overview: "Exponents compress repeated multiplication; logarithms undo them. This lesson lays the algebraic groundwork — the seven laws of exponents (including zero and negative powers), the definition of a logarithm as an exponent in disguise, and the three log laws that make hard products easy.",
  objectives: [
    "Apply all laws of exponents including zero, negative and rational powers",
    "Convert between exponential form aˣ = N and logarithmic form logₐN = x",
    "State why log is defined only for positive base ≠ 1 and positive argument",
    "Apply product, quotient and power laws of logarithms",
    "Evaluate logs using the definition and change-of-base intuition"
  ],
  simple: "x³ means x·x·x — the exponent counts multiplications. The laws are just careful counting: x²·x³ = x⁵ (you multiplied 2 threes... no — 2 x's by 3 x's = 5 x's), (x²)³ = x⁶ (three groups of two), x⁰ = 1 (anything to zero powers is the empty product), and x⁻² = 1/x² (negative means 'flip to the denominator'). Fractional powers are roots wearing a hat: x^(1/2) = √x, x^(2/3) = (∛x)². Now the reverse question: '2 to WHAT POWER gives 32?' The answer, 5, is a logarithm: log₂32 = 5. A logarithm is always and only an exponent — the one you were hiding. log₁₀ is written 'lg' or just 'log' (common log, base 10 because we count in tens); ln is base e ≈ 2.718. The three log laws mirror the exponent laws: multiplying inside becomes adding logs, dividing becomes subtracting, and a power out front becomes a multiplier.",
  detailed: "<p><b>Exponent laws</b> (for positive real bases, real exponents): product aᵐ·aⁿ = aᵐ⁺ⁿ; quotient aᵐ/aⁿ = aᵐ⁻ⁿ; power (aᵐ)ⁿ = aᵐⁿ; distribution over products (ab)ⁿ = aⁿbⁿ; negative a⁻ⁿ = 1/aⁿ; zero a⁰ = 1 (a ≠ 0); rational a^(m/n) = (a^(1/n))ᵐ = ⁿ√(aᵐ). Each law is provable by counting factors when m, n are whole numbers, then extended consistently so the laws never break. The consistency argument is why a⁰ = 1: a²/a² = a⁰ but also = 1. And why a⁻¹ = 1/a: a¹·a⁻¹ must equal a⁰ = 1. Roots-as-fractional-powers follows the same demand: (a^(1/2))² = a¹ forces a^(1/2) to be √a.</p><p><b>Definition of logarithm:</b> logₐN = x ⟺ aˣ = N. The log IS the exponent; the base stays the base; N is the result. Constraints: a > 0, a ≠ 1, N > 0. Why? 1ˣ is always 1 (useless base); negative bases oscillate between signs so powers like (−2)^(1/2) break; and aˣ > 0 for valid bases, so no negative or zero N has a real log. Instant evaluations use the definition: log₃81 = 4 because 3⁴ = 81. Identities: logₐ1 = 0 (a⁰ = 1), logₐa = 1 (a¹ = a), a^(logₐN) = N and logₐ(aˣ) = x — the functions undo each other.</p><p><b>The three laws:</b> logₐ(MN) = logₐM + logₐN (products → sums); logₐ(M/N) = logₐM − logₐN (quotients → differences); logₐ(Mᵏ) = k·logₐM (powers → multipliers). Proofs are one line each via exponents: let M = aᵖ, N = aᵑ, then MN = aᵖ⁺ᑫ, so log(MN) = p + q. Historically these laws made logarithm tables the calculators of the 1600s–1970s: multiply huge numbers by looking up logs, adding, and looking up the antilog — the same trick your phone's processor still approximates.</p><p><b>Change of base:</b> logₐN = log N / log a (any consistent base). This lets base-2 or base-7 logs be computed on a base-10 calculator and shows all log curves are rescaled copies of each other. Common vs natural: lg x = log₁₀x (digits, pH, decibels), ln x = logₑx (growth, decay, integrals). e ≈ 2.71828 earns its fame as the base whose exponential equals its own rate of change — you'll meet it properly in the next lesson.</p><p><b>Warning zone:</b> there is NO law for log(M + N) — it does not split into logM + logN, and logM·logN ≠ log(MN). These two fake laws are the most common exam traps in the whole unit. Simplification exercises (e.g. write log a + log b − 2 log c as one log: log(ab/c²)) train the reversible fluency the next two lessons depend on.</p>",
  keyTerms: [
    { term: "Exponent / power", def: "aⁿ — n counts repeated multiplication of a" },
    { term: "Rational exponent", def: "a^(m/n) = ⁿ√(aᵐ) — root and power combined" },
    { term: "Logarithm", def: "logₐN = the exponent x such that aˣ = N" },
    { term: "Common logarithm", def: "lg or log = base 10" },
    { term: "Natural logarithm", def: "ln = base e ≈ 2.71828" },
    { term: "Product/quotient/power laws", def: "log(MN)=logM+logN; log(M/N)=logM−logN; logMᵏ=k logM" },
    { term: "Change of base", def: "logₐN = log N / log a" },
    { term: "Antilog", def: "The inverse of log: given log x, recover x = a^(log x)" }
  ],
  formulas: [
    {
      name: "Laws of exponents",
      formula: "aᵐ·aⁿ = aᵐ⁺ⁿ | aᵐ/aⁿ = aᵐ⁻ⁿ | (aᵐ)ⁿ = aᵐⁿ | a⁻ⁿ = 1/aⁿ | a⁰ = 1 | a^(m/n) = ⁿ√(aᵐ)",
      meaning: "Multiplying adds exponents, dividing subtracts, powering multiplies",
      vars: [{ name: "a", meaning: "positive base", unit: "—" }, { name: "m, n", meaning: "real exponents", unit: "—" }],
      units: "—",
      when: "Every manipulation of powers",
      example: "2⁵·2⁻² = 2³ = 8; (x²)³/x⁴ = x²"
    },
    {
      name: "Log definition",
      formula: "logₐN = x ⟺ aˣ = N",
      meaning: "A logarithm is the hidden exponent of the base",
      vars: [{ name: "a", meaning: "base, a > 0, a ≠ 1", unit: "—" }, { name: "N", meaning: "argument, N > 0", unit: "—" }],
      units: "—",
      when: "Converting forms; evaluating logs mentally",
      example: "log₂64 = 6 because 2⁶ = 64"
    },
    {
      name: "Laws of logarithms",
      formula: "log(MN) = logM + logN | log(M/N) = logM − logN | logMᵏ = k·logM",
      meaning: "Logs convert ×/÷/powers into +/−/multiplication",
      vars: [{ name: "M, N", meaning: "positive arguments", unit: "—" }, { name: "k", meaning: "any real exponent", unit: "—" }],
      units: "—",
      when: "Expanding, condensing or solving log expressions",
      example: "log 1000 = log 10³ = 3"
    },
    {
      name: "Change of base",
      formula: "logₐN = ln N / ln a = log N / log a",
      meaning: "Any log computable from logs of another base",
      vars: [{ name: "a", meaning: "original base", unit: "—" }],
      units: "—",
      when: "Calculators only have lg and ln",
      example: "log₂10 = ln10/ln2 ≈ 2.303/0.693 ≈ 3.32"
    }
  ],
  workedExamples: [
    {
      problem: "Simplify (2x³)² · x⁻⁴ / x³, leaving only positive exponents.",
      given: "Mixed exponent expression",
      formula: "Power law, product law, quotient law",
      substitution: "(2x³)² = 4x⁶; 4x⁶·x⁻⁴ = 4x²; 4x²/x³ = 4x⁻¹",
      calculation: "Negative → flip",
      answer: "4/x"
    },
    {
      problem: "Evaluate without a calculator: log₃27 + log₅(1/25) − lg 1000.",
      given: "Three logs of different bases",
      formula: "Definition: ask 'base to what power?'",
      substitution: "3ˣ = 27 → 3; 5ˣ = 1/25 → −2; 10ˣ = 1000 → 3",
      calculation: "3 + (−2) − 3 = −2",
      answer: "−2"
    },
    {
      problem: "Write as a single logarithm: log a + log b − 2 log c.",
      given: "Expanded log expression",
      formula: "Power law first, then product/quotient",
      substitution: "2 log c = log c²; log a + log b = log(ab)",
      calculation: "log(ab) − log(c²)",
      answer: "log(ab/c²)"
    },
    {
      problem: "Solve for x: log₂(x + 1) = 3.",
      given: "Log equation",
      formula: "Convert to exponential form",
      substitution: "x + 1 = 2³ = 8",
      calculation: "x = 7",
      answer: "x = 7 (check: log₂8 = 3 ✓; always verify the argument stays positive)"
    },
    {
      problem: "Given lg 2 ≈ 0.301 and lg 3 ≈ 0.477, find lg 12 without a calculator.",
      given: "Two known common logs",
      formula: "12 = 3·4 = 3·2², then product + power laws",
      substitution: "lg 12 = lg 3 + 2·lg 2",
      calculation: "0.477 + 0.602 = 1.079",
      answer: "lg 12 ≈ 1.079 (sanity: 10¹ = 10 < 12, so slightly above 1 ✓)"
    }
  ],
  commonMistakes: [
    "Inventing log(M + N) = logM + logN — logs split PRODUCTS, not sums",
    "Writing logM·logN = log(MN) — multiplication of logs is NOT the log of a product",
    "a⁰ = 0 instead of 1, or a⁻ⁿ = −aⁿ instead of 1/aⁿ",
    "Confusing (aᵐ)ⁿ = aᵐⁿ with aᵐ·aⁿ = aᵐ⁺ⁿ — power-of-power MULTIPLIES",
    "Trying log₂(−8) or log₀.₅ — argument must be positive, base must be positive ≠ 1",
    "Reading logₐN as 'log times a times N' — the a is a subscript base, one indivisible symbol",
    "Forgetting to check solutions: log equations can produce extraneous roots that make arguments ≤ 0"
  ],
  applications: [
    "Earthquake magnitude (Richter) is a base-10 log: magnitude 6 quakes release 10× the energy of magnitude 5",
    "Sound intensity in decibels: dB = 10·log(I/I₀) — why 10× power barely sounds louder",
    "pH of solutions is −log[H⁺]: each pH unit is a factor of 10 in acidity (teff fermentation monitoring)",
    "Compound interest doubling time uses logs: n = log(2)/log(1 + r) years at rate r",
    "Moore's-law style growth charts use log scales to fit 1000× changes on one page"
  ],
  summary: "Exponent laws (add on multiply, subtract on divide, multiply on power, flip on negative, 1 on zero, roots on fractions) extend consistently from counting factors. A logarithm is the hidden exponent: logₐN = x ⟺ aˣ = N, defined for a > 0, a ≠ 1, N > 0, and it converts products to sums, quotients to differences and powers to multipliers. Change-of-base connects any bases; checking arguments stays positive guards every solution.",
  visuals: [
    { type: "comparison", config: { title: "Exponent form ↔ Log form", left: { name: "Exponential", items: ["2⁵ = 32", "base 2, power 5", "answer: the result 32", "'what do we GET?'"] }, right: { name: "Logarithmic", items: ["log₂32 = 5", "same base 2", "answer: the exponent 5", "'what POWER was used?'"] } } },
    { type: "tableVisual", config: { title: "The seven exponent laws", headers: ["Law", "Rule", "Example"], rows: [["Product", "aᵐ·aⁿ = aᵐ⁺ⁿ", "2²·2³ = 2⁵"], ["Quotient", "aᵐ/aⁿ = aᵐ⁻ⁿ", "5⁴/5² = 5²"], ["Power", "(aᵐ)ⁿ = aᵐⁿ", "(3²)³ = 3⁶"], ["Negative", "a⁻ⁿ = 1/aⁿ", "2⁻³ = 1/8"], ["Zero", "a⁰ = 1", "99⁰ = 1"], ["Fractional", "a^(m/n) = ⁿ√aᵐ", "8^(2/3) = 4"]] } },
    { type: "qa", config: { title: "Fake-law amnesty check", pairs: [{ q: "log(2+3) = log2 + log3?", a: "<b>NO</b> — no sum law exists" }, { q: "log(2·3) = log2 + log3?", a: "<b>YES</b> — product law" }, { q: "logₐ1 = ?", a: "<b>0</b>, since a⁰ = 1" }, { q: "Why no log(−4)?", a: "aˣ is <b>always positive</b> — no exponent gives −4" }] } }
  ],
  questions: [
    { type: "mcq", q: "log₄64 =", options: ["2", "3", "4", "16"], answer: 1, difficulty: 1, explanation: "4³ = 64, so the exponent is 3" },
    { type: "mcq", q: "Simplify x²·x⁵:", options: ["x⁷", "x¹⁰", "x³", "2x⁷"], answer: 0, difficulty: 1, explanation: "Product law: add exponents, 2 + 5 = 7" },
    { type: "mcq", q: "(2³)² equals:", options: ["2⁵ = 32", "2⁶ = 64", "2⁹ = 512", "8"], answer: 1, difficulty: 1, explanation: "Power law: multiply exponents, 3×2 = 6; 64" },
    { type: "mcq", q: "Which statement is TRUE?", options: ["log(M+N) = logM + logN", "log(MN) = logM + logN", "logM·logN = log(MN)", "log(M−N) = logM − logN"], answer: 1, difficulty: 2, explanation: "Only the product law is valid; the others are invented traps" },
    { type: "tf", q: "5⁰ = 0.", answer: false, difficulty: 1, explanation: "Any non-zero base to power 0 is 1" },
    { type: "tf", q: "log₂8 = 3.", answer: true, difficulty: 1, explanation: "2³ = 8 ✓" },
    { type: "short", q: "Write 8^(2/3) as an ordinary number.", answer: "4", difficulty: 2, explanation: "Cube root of 8 is 2, squared = 4" },
    { type: "short", q: "The base of the natural logarithm ln is what number (2 decimal places)?", answer: "2.72|2.718", difficulty: 1, explanation: "e ≈ 2.71828…" },
    { type: "calc", q: "Solve: log₃x = 4. What is x?", answer: "81", difficulty: 1, explanation: "x = 3⁴ = 81" },
    { type: "calc", q: "If lg 2 = 0.301, compute lg 8.", answer: "0.903", difficulty: 2, explanation: "lg 8 = lg 2³ = 3 × 0.301 = 0.903" },
    { type: "concept", q: "Explain why log₂(−16) has no real value.", answer: "2 to any power positive|never negative|no exponent|always positive", difficulty: 2, explanation: "2ˣ > 0 for every real x, so no exponent can produce −16" }
  ]
};

Lessons["g10-mathematics-um3-t2"] = {
  overview: "Exponential functions f(x) = aˣ model the one growth pattern nature keeps using: quantity whose rate of change is proportional to itself — populations, money, radioactive decay. This lesson builds the family, its graph signature, the special base e, and the doubling/halving arithmetic that makes it useful.",
  objectives: [
    "Graph f(x) = aˣ for a > 1 and 0 < a < 1, naming asymptote, domain, range",
    "Apply transformations (shifts, stretches, reflections) to exponentials",
    "Explain why base e is special and what it models",
    "Model growth/decay with A = A₀·bᵗ or A = A₀·eᵏᵗ",
    "Solve doubling-time and half-life problems with logs"
  ],
  simple: "Put the variable in the exponent: f(x) = 2ˣ. Feed in 1, 2, 3… and the outputs double each step: 2, 4, 8, 16 — growth that accelerates because the more you have, the more you add. That's exponential growth, and it looks identical everywhere: bacteria, savings interest, viral videos. Flip the base below 1 — f(x) = (½)ˣ — and you get exponential decay: halving per step, the shape of radioactive materials and cooling coffee. Both graphs hug the x-axis forever without touching (horizontal asymptote y = 0), always pass through (0, 1), and never go negative. The magic base e ≈ 2.718 is the 'natural' growth rate: something growing continuously at 100% of itself follows eᵗ. Money at 10% compounded yearly multiplies by 1.1 each year; compounded continuously it multiplies by e^0.1 — barely more, but mathematically cleaner.",
  detailed: "<p><b>The family f(x) = aˣ</b> (a > 0, a ≠ 1): domain all reals, range (0, ∞), y-intercept (0, 1) since a⁰ = 1, horizontal asymptote y = 0 as x → −∞ (growth) or +∞ (decay). For a > 1 the function increases — slowly at first, then explosively; for 0 < a < 1 it decreases, the mirror image reflected in the y-axis (aˣ = (1/a)⁻ˣ). The 'J-curve' of growth and the 'decay curve' are the two shapes every science course reuses. Intercepts with x NEVER exist: aˣ > 0 always — a favourite true/false question.</p><p><b>Transformations</b> follow the general function rules: aˣ + k shifts vertically (asymptote moves to y = k); a^(x−h) shifts horizontally; −aˣ reflects in the x-axis (range now negative); a^(−x) reflects in the y-axis. The asymptote and intercept transform with the curve — track them and you can sketch any variant instantly. E.g. f(x) = 2·3ˣ − 1: vertical stretch ×2, y-intercept at 2·1 − 1 = 1, asymptote y = −1.</p><p><b>Why e?</b> Compound 1 ETB at 100% yearly: after n compounding periods per year you have (1 + 1/n)ⁿ. As n → ∞ (continuous compounding) this converges to e = 2.71828… — the natural limit of continuous growth. Equivalently, eˣ is the unique exponential whose graph has slope exactly 1 at x = 0: its rate of change AT every point equals its VALUE — d/dx eˣ = eˣ. Populations with per-capita birth rate r obey A(t) = A₀eʳᵗ; anything where 'change ∝ current amount' (radioactive decay, capacitor discharge, cooling) solves to the same shape with k < 0.</p><p><b>Growth/decay arithmetic:</b> A = A₀(1 + r)ᵗ for discrete compounding (r per period), A = A₀eᵏᵗ for continuous. Doubling time: solve 2 = eᵏᵗ → t = ln2/k. Half-life: t½ = ln2/|k|. These are constant — exponential growth doubles in equal intervals no matter the starting size (the 'rule of 72': doubling years ≈ 72/interest-percent, since ln2 ≈ 0.693 ≈ 72% scaled). Percentage-rate conversions: continuous 5% means k = 0.05; discrete 5% means base 1.05 — the two differ slightly (e^0.05 ≈ 1.0513).</p><p><b>Fitting an exponential</b> from two data points: A₀ from t = 0, then b = (A(t₁)/A₀)^(1/t₁). E.g. population 2 M → 3 M in 10 years: b = 1.5^(1/10) ≈ 1.041, so ~4.1%/year. Predictions then read forward — but validate: no population grows exponentially forever (resources, logistic ceiling). Knowing where the model breaks is part of knowing the model.</p>",
  keyTerms: [
    { term: "Exponential function", def: "f(x) = aˣ — variable in the exponent, constant base" },
    { term: "Horizontal asymptote", def: "The line y = 0 the curve approaches forever without touching" },
    { term: "Base e", def: "≈ 2.71828, the natural continuous-growth base; d/dx eˣ = eˣ" },
    { term: "Growth factor", def: "b = 1 + r per period; multiply by b each step" },
    { term: "Doubling time", def: "ln 2 / k — constant interval for any quantity to double" },
    { term: "Half-life", def: "ln 2 / |k| — decay time to half the amount" },
    { term: "Continuous compounding", def: "A = A₀eʳᵗ, the limit of (1 + r/n)ⁿᵗ as n → ∞" }
  ],
  formulas: [
    {
      name: "Discrete growth/decay",
      formula: "A(t) = A₀(1 + r)ᵗ",
      meaning: "Start amount times growth factor per period, raised to number of periods",
      vars: [{ name: "A₀", meaning: "initial amount", unit: "units" }, { name: "r", meaning: "rate per period (negative = decay)", unit: "decimal" }, { name: "t", meaning: "periods elapsed", unit: "periods" }],
      units: "same as A₀",
      when: "Interest yearly, populations per census, car depreciation",
      example: "10,000 ETB at 8%/yr for 3 yr: 10000(1.08)³ ≈ 12,597 ETB"
    },
    {
      name: "Continuous growth/decay",
      formula: "A(t) = A₀eᵏᵗ",
      meaning: "Same idea with continuous rate k (k > 0 growth, k < 0 decay)",
      vars: [{ name: "k", meaning: "continuous rate", unit: "1/time" }, { name: "e", meaning: "2.71828…", unit: "—" }],
      units: "same as A₀",
      when: "Radioactivity, bacteria, capacitor discharge",
      example: "Decay k = −0.02/yr: after 10 yr, e⁻⁰·² ≈ 0.819 → 81.9% remains"
    },
    {
      name: "Doubling time / half-life",
      formula: "t_double = ln2 / k ≈ 0.693/k | t_half = ln2 / |k|",
      meaning: "Time to ×2 (growth) or ×½ (decay) — independent of starting amount",
      vars: [{ name: "k", meaning: "rate constant", unit: "1/time" }],
      units: "time",
      when: "Population planning, radiocarbon dating, drug dosing",
      example: "Bacteria k = 0.3/h: doubles every 0.693/0.3 ≈ 2.31 h"
    }
  ],
  workedExamples: [
    {
      problem: "Sketch f(x) = 2ˣ and g(x) = 2ˣ − 3, stating asymptotes and intercepts.",
      given: "Base-2 exponential and its translate",
      formula: "aˣ passes (0,1), asymptote y = 0; −3 shifts down",
      substitution: "g: points (0, −2), (2, 1); asymptote y = −3",
      calculation: "g crosses x-axis where 2ˣ = 3, x = log₂3 ≈ 1.58",
      answer: "f: standard J-curve, y-int 1, asymptote 0. g: same shape lowered 3 — y-int −2, asymptote y = −3, x-int ≈ 1.58"
    },
    {
      problem: "Deposit 5,000 ETB at 10% per year compounded yearly. Find the balance after 1, 2, 3 years and the general rule.",
      given: "A₀ = 5000, r = 0.10, discrete",
      formula: "A(t) = 5000(1.1)ᵗ",
      substitution: "A(1) = 5500; A(2) = 6050; A(3) = 6655",
      calculation: "Each year ×1.1 — the growth factor",
      answer: "A(t) = 5000(1.1)ᵗ; 6,655 ETB after 3 years (note: NOT linear +500/yr — the increments themselves grow)"
    },
    {
      problem: "A radioactive isotope has half-life 5 days. What fraction remains after 12 days? Find k.",
      given: "t½ = 5 d",
      formula: "k = ln2 / t½; A/A₀ = eᵏᵗ with k negative",
      substitution: "k = 0.693/5 ≈ 0.1386/day; fraction = e^(−0.1386×12) = e^(−1.663)",
      calculation: "= (1/2)^(12/5) = 2^(−2.4) ≈ 0.189",
      answer: "k ≈ −0.139/day; about 19% remains (2.4 half-lives: ½^2.4)"
    },
    {
      problem: "Town population 120,000 grows continuously at 2.5%/yr. When does it reach 200,000?",
      given: "A₀ = 120k, A = 200k, k = 0.025",
      formula: "200 = 120e^(0.025t) → take ln both sides",
      substitution: "e^(0.025t) = 5/3 → 0.025t = ln(5/3) ≈ 0.5108",
      calculation: "t = 0.5108/0.025 ≈ 20.4",
      answer: "About 20.4 years — logs are the tool that 'gets x out of the exponent'"
    },
    {
      problem: "Bacteria double every 90 minutes, starting from 1 cell. How many after 12 hours? Express as nearest million.",
      given: "Doubling period 1.5 h, t = 12 h",
      formula: "N = N₀ · 2^(t/T) where T = doubling period",
      substitution: "N = 2^(12/1.5) = 2⁸",
      calculation: "2⁸ = 256",
      answer: "256 cells (0.000256 million — small numbers stay small; exponentials only look explosive after many doublings)"
    }
  ],
  commonMistakes: [
    "Confusing aˣ (exponential) with xᵃ (power function) — variable position decides everything",
    "Saying the exponential 'touches' its asymptote — it approaches forever, never reaches y = 0",
    "Writing range of aˣ as all reals — it is (0, ∞); no exponential of aˣ form crosses the x-axis",
    "Linear thinking about compounding: 10% of 5000 is 500 the first year, but 550 the second",
    "Mixing discrete and continuous: (1.1)ᵗ vs e^(0.1t) are close but not equal",
    "Half-life arithmetic: after 3 half-lives 1/8 remains (halve thrice), NOT 1/3 or 'zero'",
    "Forgetting the −3 shifts the ASYMPTOTE too (y = −3), not just the curve"
  ],
  applications: [
    "Bank savings & loans: compound interest is exponential growth of your balance — the 'eighth wonder of the world'",
    "Radiocarbon dating: C-14 half-life 5730 yr dates ancient Ethiopian artifacts (Aksum relics)",
    "Epidemiology: early epidemic spread is exponential; vaccination lowers the effective growth rate",
    "Drug dosing: medicine concentration decays exponentially — dosing intervals keep it above therapeutic level",
    "Coffee price inflation: 12%/yr means prices double roughly every 6 years (rule of 72)"
  ],
  summary: "f(x) = aˣ grows by constant ratios: J-curve for a > 1, decay for 0 < a < 1, always through (0,1) with asymptote y = 0 and range (0, ∞). Base e is the continuous-growth natural unit (d/dx eˣ = eˣ), giving A = A₀eᵏᵗ with constant doubling/half-life ln2/|k|. Discrete compounding uses (1 + r)ᵗ; solving 'when?' always means logs pulling x out of the exponent.",
  visuals: [
    { type: "lineGraph", config: { title: "Growth vs decay: 2ˣ and (½)ˣ", xLabel: "x", yLabel: "aˣ", series: [{ label: "2ˣ (growth)", points: [[-2, 0.25], [-1, 0.5], [0, 1], [1, 2], [2, 4], [3, 8]] }, { label: "(½)ˣ (decay)", points: [[-3, 8], [-2, 4], [-1, 2], [0, 1], [1, 0.5], [2, 0.25]] }] } },
    { type: "steps", config: { title: "Why e is the natural base", steps: [{ label: "100% yearly", detail: "1 ETB → 2.00" }, { label: "Monthly", detail: "(1+1/12)¹² → 2.61" }, { label: "Daily", detail: "→ 2.714" }, { label: "Continuous", detail: "limit = e ≈ 2.71828" }] } },
    { type: "qa", config: { title: "Exponential graph facts", pairs: [{ q: "y-intercept of any aˣ?", a: "<b>(0, 1)</b> — a⁰ = 1" }, { q: "Asymptote of y = 3ˣ − 2?", a: "<b>y = −2</b> — shifted with the curve" }, { q: "Doubling time at k = 0.07/yr?", a: "<b>≈ 9.9 yr</b> — ln2/0.07 (rule of 72 ✓)" }] } }
  ],
  questions: [
    { type: "mcq", q: "The range of f(x) = 5ˣ is:", options: ["all reals", "y > 0", "y ≥ 1", "y > 5"], answer: 1, difficulty: 1, explanation: "Positive base to any power is positive; never 0 or negative" },
    { type: "mcq", q: "Which shows exponential decay?", options: ["f(x) = 1.5ˣ", "f(x) = (0.8)ˣ", "f(x) = x²", "f(x) = 3x + 1"], answer: 1, difficulty: 1, explanation: "Base between 0 and 1 shrinks by ratio each step" },
    { type: "mcq", q: "The asymptote of y = 2ˣ + 4 is:", options: ["y = 0", "y = 4", "x = 0", "y = −4"], answer: 1, difficulty: 2, explanation: "2ˣ → 0 as x → −∞, so y → 4; the shift moves the asymptote" },
    { type: "mcq", q: "1000 ETB at 6% compounded yearly for 2 years grows to:", options: ["1120", "1123.60", "1060", "1136"], answer: 1, difficulty: 2, explanation: "1000(1.06)² = 1000 × 1.1236 = 1123.60 (simple interest would give 1120)" },
    { type: "tf", q: "The graph of y = 3ˣ crosses the x-axis once.", answer: false, difficulty: 1, explanation: "3ˣ > 0 always — horizontal asymptote y = 0 is never reached" },
    { type: "tf", q: "Doubling time of an exponential growth model is constant regardless of starting amount.", answer: true, difficulty: 2, explanation: "t = ln2/k depends only on the rate, not A₀" },
    { type: "calc", q: "A car depreciates 15% per year. Value of a 300,000 ETB car after 3 years?", answer: "183093.75|183094", difficulty: 2, explanation: "300000(0.85)³ = 300000 × 0.614125 = 183,093.75 ETB", tolerance: 1 },
    { type: "calc", q: "Half-life 4 hours. What percent remains after 12 hours?", answer: "12.5", difficulty: 2, explanation: "12/4 = 3 half-lives: (½)³ = 1/8 = 12.5%" },
    { type: "short", q: "eˣ equals its own ______?", answer: "derivative|rate of change|slope", difficulty: 2, explanation: "d/dx eˣ = eˣ — the defining property of base e" },
    { type: "concept", q: "Why do populations NOT grow exponentially forever?", answer: "limited resources|carrying capacity|logistic|competition|food runs out", difficulty: 2, explanation: "Resources, space and waste impose a ceiling — growth becomes logistic and levels off at carrying capacity" }
  ]
};

Lessons["g10-mathematics-um3-t3"] = {
  overview: "The logarithmic function is the exponential's mirror: f(x) = logₐx reflects aˣ across the line y = x. This lesson builds its graph, its domain/range signature, the transformation toolkit, and the equation-solving craft — getting unknowns out of exponents and out of logs.",
  objectives: [
    "Graph y = logₐx from y = aˣ using reflection in y = x",
    "State domain (x > 0), range (all reals), vertical asymptote x = 0",
    "Apply transformations to log graphs and read off asymptotes/intercepts",
    "Solve logarithmic equations by converting to exponential form",
    "Solve exponential equations by taking logs of both sides"
  ],
  simple: "If exponentials answer 'what do we get?', logarithms answer 'what power was needed?' — they are the same relationship read backwards. So the graph of y = log₂x is literally the graph of y = 2ˣ seen in a mirror along the diagonal y = x: points swap coordinates, (3, 8) becomes (8, 3). The mirror explains every feature: the horizontal asymptote becomes VERTICAL (the y-axis, x = 0 — logs can't reach it because you can't get a positive number from a non-positive input), the domain is only positive x, and the range is all reals (a log can be any number — negative logs are just fractions: log₂0.5 = −1). Log graphs crawl: they grow forever but slower and slower — the opposite personality of the J-curve. Solving equations is a two-move dance: log unknown → exponentiate; exponent unknown → take logs.",
  detailed: "<p><b>Inverse relationship.</b> y = logₐx ⟺ x = aʸ. The functions f(x) = aˣ and g(x) = logₐx undo each other: a^(logₐx) = x (x > 0) and logₐ(aˣ) = x. Graphically, inverse functions reflect across y = x — swap every point's coordinates. This transfers all properties: aˣ's asymptote y = 0 ↔ logₐx's asymptote x = 0; aˣ's intercept (0,1) ↔ log's point (1,0); range ↔ domain. So logₐx: domain (0, ∞), range ℝ, x-intercept always (1, 0) since a⁰ = 1, vertical asymptote x = 0. For a > 1 the log increases (slowly, concavely down); for 0 < a < 1 it decreases — the same base dichotomy as exponentials.</p><p><b>Transformations:</b> y = logₐ(x − h) + k shifts right h, up k; the vertical asymptote moves to x = h and the domain becomes x > h. y = −logₐx reflects in the x-axis; y = logₐ(−x) reflects in the y-axis (domain x < 0). y = logₐ(x) stretched vertically by c is c·logₐx = logₐ(xᶜ). Sketching recipe: draw the moved asymptote, plot the transformed 'anchor' point (h + 1, k), and sweep the characteristic slow-rise curve. Every log sketch question is these three moves.</p><p><b>Solving log equations:</b> isolate the log, then exponentiate: log₂(x + 3) = 4 → x + 3 = 16 → x = 13. Multi-log equations use the laws first: log x + log(x − 2) = 1 → log[x(x − 2)] = 1 → x² − 2x = 10 → solve quadratic → REJECT roots making arguments ≤ 0 (x = 1 − √11 is extraneous). Always check candidates in the ORIGINAL equation — log equations manufacture fake solutions.</p><p><b>Solving exponential equations:</b> unknown in the exponent → take logs: 3^(x+1) = 40 → (x + 1)log3 = log40 → x = log40/log3 − 1 ≈ 2.35. If both sides are clean powers of the same base, match exponents instead: 2^(3x) = 32 = 2⁵ → 3x = 5. The general model 'solve A₀eᵏᵗ = A for t' is the workhorse of every growth/decay application: t = ln(A/A₀)/k.</p><p><b>Why logs tame the world:</b> they compress multiplicative scales into additive ones — that's why pH, decibels, Richter and log-axes exist. A quantity spanning 10⁻¹² to 1 W/m² (human hearing range!) fits on a 0–120 dB ruler because dB = 10 log₁₀(I/I₀). Recognising when to LOG data (curves that look exponential/power-law) is the first step of real modelling — log paper turns exponentials into straight lines whose slope is the rate.</p>",
  keyTerms: [
    { term: "Logarithmic function", def: "y = logₐx — the inverse of aˣ; domain x > 0" },
    { term: "Inverse functions", def: "f and g undo each other; graphs reflect in y = x" },
    { term: "Vertical asymptote x = 0", def: "log plunges to −∞ as x → 0⁺ but never crosses the y-axis" },
    { term: "Extraneous solution", def: "A candidate that breaks log arguments (≤ 0) — must be rejected" },
    { term: "Exponentiate", def: "Undo a log by raising the base to both sides" },
    { term: "Log-linearisation", def: "Taking logs converts exponential curves to straight lines" }
  ],
  formulas: [
    {
      name: "Log ↔ exponential conversion",
      formula: "y = logₐx ⟺ x = aʸ",
      meaning: "The two forms of one relationship; the log is the exponent",
      vars: [{ name: "a", meaning: "base > 0, ≠ 1", unit: "—" }, { name: "x", meaning: "argument > 0", unit: "—" }],
      units: "—",
      when: "Every log equation — first move is always converting",
      example: "y = log₅125 ⟺ 5ʸ = 125 ⟹ y = 3"
    },
    {
      name: "Exponential equation solver",
      formula: "bˣ = N ⟹ x = log N / log b",
      meaning: "Take logs of both sides; the exponent comes down via the power law",
      vars: [{ name: "b", meaning: "base of the power", unit: "—" }, { name: "N", meaning: "target value", unit: "—" }],
      units: "—",
      when: "Unknown sits in an exponent",
      example: "2ᵗ = 1000 ⟹ t = log1000/log2 ≈ 9.97"
    },
    {
      name: "Growth time to target",
      formula: "A₀eᵏᵗ = A ⟹ t = ln(A/A₀)/k",
      meaning: "Time to reach level A from A₀ at continuous rate k",
      vars: [{ name: "k", meaning: "continuous rate", unit: "1/time" }],
      units: "time",
      when: "Doubling, tripling, decay-to-threshold problems",
      example: "Triple at k = 0.05: t = ln3/0.05 ≈ 22 yr"
    }
  ],
  workedExamples: [
    {
      problem: "Given the point (4, 2) lies on y = log₂x, state the corresponding point on y = 2ˣ and explain.",
      given: "One point on the log graph",
      formula: "Inverse graphs reflect in y = x — coordinates swap",
      substitution: "(4, 2) → (2, 4)",
      calculation: "Check: 2² = 4 ✓",
      answer: "(2, 4) on y = 2ˣ — log₂4 = 2 and 2² = 4 are the same fact"
    },
    {
      problem: "Sketch f(x) = log₃(x − 2) + 1: find asymptote, domain and x-intercept.",
      given: "Shifted log",
      formula: "h = 2, k = 1 shift the parent features",
      substitution: "Asymptote x = 2; domain x > 2; anchor point (3, 1)",
      calculation: "x-intercept: log₃(x−2) = −1 → x − 2 = 1/3 → x = 7/3",
      answer: "Vertical asymptote x = 2, domain (2, ∞), range ℝ, passes (3, 1), x-int 7/3"
    },
    {
      problem: "Solve log₂(x + 1) + log₂(x − 1) = 3.",
      given: "Sum of two logs",
      formula: "Product law first, then convert",
      substitution: "log₂[(x+1)(x−1)] = 3 → x² − 1 = 8",
      calculation: "x² = 9 → x = ±3; reject x = −3 (arguments become negative)",
      answer: "x = 3 only. Check: log₂4 + log₂2 = 2 + 1 = 3 ✓"
    },
    {
      problem: "Solve 5^(2x) = 90, correct to 2 decimals.",
      given: "Unknown in exponent",
      formula: "Take ln both sides: 2x·ln5 = ln90",
      substitution: "x = ln90/(2 ln5) = 4.4998/(2 × 1.6094)",
      calculation: "= 4.4998/3.2189 ≈ 1.398",
      answer: "x ≈ 1.40. Check: 5^2.8 ≈ 90.3 ✓"
    },
    {
      problem: "A investment triples at continuous 6%/yr. How long? Compare with discrete 6%.",
      given: "A/A₀ = 3, k = 0.06",
      formula: "Continuous: t = ln3/0.06; discrete: 1.06ᵗ = 3 → t = ln3/ln1.06",
      substitution: "1.0986/0.06 vs 1.0986/0.05827",
      calculation: "≈ 18.3 yr vs ≈ 18.9 yr",
      answer: "Continuous compounding triples in ~18.3 years; yearly compounding takes ~18.9 — continuous is always slightly faster"
    }
  ],
  commonMistakes: [
    "Writing the domain of logₐ(x − 2) as all reals — the argument must be > 0, so x > 2",
    "Forgetting to check solutions: log equations produce extraneous roots that make arguments ≤ 0",
    "Solving log x + log y as log(x + y) — the product law gives log(xy), not a sum inside",
    "Reflecting in the WRONG line: inverse of aˣ reflects in y = x, not the x-axis",
    "Saying log graphs have a horizontal asymptote — they grow forever (slowly); the asymptote is VERTICAL",
    "Taking log of only one side of an equation — apply to BOTH sides",
    "Confusing ln (base e) with log (base 10) when reading calculator answers — they differ by factor 2.303"
  ],
  applications: [
    "Richter scale: magnitude = log₁₀(E/E₀) — the 1935 quake math that makes 'one point = 10× energy' precise",
    "Decibels: sound level = 10 log(I/I₀) — why a 10× amplifier only sounds 'twice as loud'",
    "pH meters: −log[H⁺] measures acidity for food safety (injera fermentation, drinking water)",
    "Finance: solving for time in compound interest t = ln(A/A₀)/ln(1+r) — 'how long to double my money?'",
    "Algorithms: binary-search runtimes are log₂n — why phone searches through millions feel instant"
  ],
  summary: "y = logₐx is the reflection of y = aˣ in y = x: domain (0, ∞), range ℝ, anchor (1, 0), vertical asymptote x = 0, growing forever but ever slower. Shifts move the asymptote and domain together. Solving is a two-move dance — exponentiate to free log-unknowns, take logs to free exponent-unknowns — and every log equation demands an argument check for extraneous roots.",
  visuals: [
    { type: "lineGraph", config: { title: "Mirror pair: 2ˣ ↔ log₂x (with y = x)", xLabel: "x", yLabel: "y", series: [{ label: "2ˣ", points: [[-1, 0.5], [0, 1], [1, 2], [2, 4], [3, 8]] }, { label: "log₂x", points: [[0.5, -1], [1, 0], [2, 1], [4, 2], [8, 3]] }, { label: "y = x (mirror)", points: [[0, 0], [8, 8]] }] } },
    { type: "steps", config: { title: "Solving log equations", steps: [{ label: "Combine logs", detail: "product/quotient/power laws" }, { label: "Isolate one log", detail: "log(something) = number" }, { label: "Exponentiate", detail: "convert to aᵇ form" }, { label: "Solve algebra", detail: "linear or quadratic" }, { label: "CHECK arguments", detail: "reject ≤ 0 — extraneous roots" }] } },
    { type: "tableVisual", config: { title: "Exponential vs log features", headers: ["Feature", "aˣ", "logₐx"], rows: [["Domain", "all reals", "x > 0"], ["Range", "y > 0", "all reals"], ["Anchor", "(0, 1)", "(1, 0)"], ["Asymptote", "y = 0 horiz.", "x = 0 vert."], ["Shape", "J-curve", "slow crawl"]] } }
  ],
  questions: [
    { type: "mcq", q: "The domain of f(x) = log₅x is:", options: ["all reals", "x ≥ 0", "x > 0", "x > 1"], answer: 2, difficulty: 1, explanation: "Only positive numbers have real logs — log of 0 or negative is undefined" },
    { type: "mcq", q: "log₂x = 3 gives x =", options: ["6", "8", "9", "5"], answer: 1, difficulty: 1, explanation: "Exponentiate: x = 2³ = 8" },
    { type: "mcq", q: "The vertical asymptote of y = ln(x − 4) is:", options: ["x = 0", "x = 4", "y = 4", "x = −4"], answer: 1, difficulty: 2, explanation: "Argument > 0 needs x > 4; the boundary x = 4 is the asymptote" },
    { type: "mcq", q: "Which point is on y = log₃x?", options: ["(0, 1)", "(1, 0)", "(3, 3)", "(9, 2)"], answer: 3, difficulty: 2, explanation: "log₃9 = 2 since 3² = 9. (1,0) also works — but (0,1) is the exponential's point, not the log's" },
    { type: "tf", q: "log graphs eventually flatten out and stop growing.", answer: false, difficulty: 2, explanation: "They grow forever — just ever more slowly; no horizontal asymptote" },
    { type: "tf", q: "y = aˣ and y = logₐx are inverse functions.", answer: true, difficulty: 1, explanation: "Each undoes the other; graphs reflect in y = x" },
    { type: "short", q: "Solve: log x = 2 (base 10).", answer: "100", difficulty: 1, explanation: "x = 10² = 100" },
    { type: "calc", q: "Solve 3ˣ = 50. Give x to 1 decimal.", answer: "3.5", difficulty: 3, explanation: "x = ln50/ln3 = 3.912/1.099 ≈ 3.56 → 3.6 (accept 3.5–3.6)", tolerance: 0.15 },
    { type: "calc", q: "How many years for money to double at 8% compounded yearly? t = ln2/ln1.08, to 1 decimal.", answer: "9", difficulty: 3, explanation: "0.6931/0.07696 ≈ 9.0 years (rule of 72 predicts ~9 ✓)", tolerance: 0.3 },
    { type: "concept", q: "Why must you check solutions of log equations against the original form?", answer: "extraneous|argument positive|reject negative|domain violation", difficulty: 2, explanation: "Algebra after combining logs can produce values that make an original argument ≤ 0 — those are extraneous and must be rejected" }
  ]
};
