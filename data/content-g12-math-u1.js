/* Content: Grade 12 Mathematics — Unit 1: Sequences and Series (5 topics) */
window.Lessons = window.Lessons || {};

Lessons["g12-mathematics-um1-t1"] = {
  overview: "A sequence is a numbered list with a rule — the heartbeat of calculus, finance and population models. This topic builds the language: terms, general term, recursive rules, and the notation everything else rests on.",
  objectives: [
    "Define a sequence as a function on the natural numbers",
    "Write the general term aₙ and find any term from it",
    "Generate sequences from recursive (inductive) rules",
    "Decide whether a sequence is increasing, decreasing or bounded",
    "Recognise a sequence's pattern from its first few terms"
  ],
  simple: "A <b>sequence</b> is a list of numbers in a fixed order: 2, 5, 8, 11, … Each position n has a name: the first term a₁ = 2, the second a₂ = 5, and the k-th term aₖ is the <b>general term</b>. If you can write aₙ as a formula in n — here aₙ = 3n − 1 — you own the whole infinite list. A <b>recursive</b> rule is the alternative: give the first term and a recipe to get the next ('start at 2, add 3'). One formula, two personalities: explicit reaches any term directly; recursive walks there one step at a time.",
  detailed: "<p>Formally, a <b>sequence</b> is a function whose domain is the natural numbers {1, 2, 3, …}; the value at n is the <b>n-th term</b>, written aₙ. Instead of pairs we write the outputs in order: a₁, a₂, a₃, …, abbreviated (aₙ). A sequence is <b>finite</b> if it stops (a₁,…,aₙ) and <b>infinite</b> otherwise. The rule producing aₙ from n alone is the <b>explicit (general) term</b>; a rule giving aₙ from earlier terms plus a starting value is a <b>recurrence relation</b> — e.g. a₁ = 1, aₙ = aₙ₋₁ + n produces 1, 3, 6, 10, … (triangular numbers).</p><p>Finding the general term from a list is pattern-hunting: check whether differences are constant (linear in n), whether ratios are constant (exponential in n), whether the signs alternate (factor of (−1)ⁿ), or whether squares/cubes appear. For 3, 8, 15, 24, … notice each term is one less than a square: aₙ = (n+1)² − 1 = n² + 2n.</p><p>Monotonicity and bounds classify behaviour. A sequence is <b>increasing</b> if aₙ₊₁ > aₙ for all n, <b>decreasing</b> if aₙ₊₁ < aₙ, <b>monotonic</b> if either. It is <b>bounded above</b> if some M has aₙ ≤ M forever, <b>bounded</b> if |aₙ| ≤ M. Example: aₙ = 1 − 1/n is increasing (each 1/n shrinks) and bounded above by 1 — it marches toward 1 without reaching it, the seed idea of a limit. The sequence aₙ = (−1)ⁿ is bounded (±1) but not monotonic: it oscillates forever.</p><p>Recursive rules hide power: the Fibonacci numbers F₁ = F₂ = 1, Fₙ = Fₙ₋₁ + Fₙ₋₂ take one line yet generate the spiral patterns in sunflower heads and shells. In Grade 12 the workhorse is still the two families of the next topic — arithmetic (constant difference) and geometric (constant ratio) — because every formula in series and finance is built from them.</p><p>Notation discipline pays off in exams: aₙ is one term; (aₙ) is the whole sequence; Sₙ is a sum of terms. Confusing the sequence (a list) with the series (a sum) is the deepest category error in this unit.</p>",
  keyTerms: [
    { term: "Sequence", def: "A function from the natural numbers to numbers; an ordered list a₁, a₂, a₃, …" },
    { term: "Term aₙ", def: "The value of the sequence at position n" },
    { term: "General (explicit) term", def: "A formula for aₙ directly in terms of n" },
    { term: "Recurrence relation", def: "A rule computing aₙ from previous terms, with a starting value" },
    { term: "Monotonic", def: "Entirely increasing or entirely decreasing" },
    { term: "Bounded sequence", def: "One with |aₙ| ≤ M for some fixed M and all n" },
    { term: "Alternating sequence", def: "Signs flip each term, typically via a factor (−1)ⁿ" }
  ],
  formulas: [
    {
      name: "From recursive to terms",
      formula: "Given a₁ and aₙ = f(aₙ₋₁): iterate n−1 times",
      meaning: "Each application produces exactly one further term",
      when: "Listing terms of a recursively defined sequence"
    }
  ],
  workedExamples: [
    {
      problem: "Write the first four terms of aₙ = (−1)ⁿ⁺¹·n/(n+1).",
      calculation: "n=1: +1/2 · n=2: −2/3 · n=3: +3/4 · n=4: −4/5",
      answer: "1/2, −2/3, 3/4, −4/5 — alternating, magnitudes approaching 1"
    },
    {
      problem: "Find the general term of 5, 11, 17, 23, …",
      given: "Differences are constant: +6",
      calculation: "aₙ = 5 + 6(n−1)",
      answer: "aₙ = 6n − 1"
    },
    {
      problem: "a₁ = 2, aₙ = 3aₙ₋₁ − 1. Find a₄.",
      calculation: "a₂ = 5, a₃ = 14, a₄ = 41",
      answer: "a₄ = 41"
    },
    {
      problem: "Is aₙ = n/(n+1) increasing and bounded?",
      calculation: "aₙ₊₁ − aₙ = 1/((n+1)(n+2)) > 0; and aₙ < 1 always",
      answer: "Increasing and bounded above by 1"
    }
  ],
  commonMistakes: [
    "Writing (aₙ) to mean a single term — parentheses denote the whole sequence",
    "Off-by-one in aₙ = a₁ + d(n−1) style rules: the FIRST term uses n = 1",
    "Calling aₙ = (−1)ⁿ bounded AND monotonic — it is bounded but oscillates",
    "Assuming a pattern from three terms is proof; test a₄ against your formula",
    "Mixing up the sequence 2, 4, 8, … with its series 2 + 4 + 8 + …"
  ],
  applications: [
    "Compound-interest balances form a sequence of yearly account values",
    "Population or crop-yield records over years are a data sequence to model",
    "Fibonacci recurrences describe branching patterns in plants",
    "Computer science: recursive sequences model loop counts and algorithm runtimes"
  ],
  summary: "A sequence is an ordered list generated by a rule — explicit (aₙ in terms of n) or recursive (aₙ from earlier terms). Classify by monotonicity and boundedness; find general terms by spotting constant differences, constant ratios, alternating signs or hidden squares.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The first three terms of aₙ = 2n − 3 are:", options: ["−1, 1, 3", "1, 3, 5", "2, 4, 6", "−3, −1, 1"], answer: 0, difficulty: 1, explanation: "n=1: −1, n=2: 1, n=3: 3." },
    { type: "mcq", q: "A sequence defined by a₁ = 4, aₙ = aₙ₋₁ + 3 has a₂ equal to:", options: ["4", "7", "12", "3"], answer: 1, difficulty: 1, explanation: "a₂ = a₁ + 3 = 4 + 3 = 7." },
    { type: "mcq", q: "The general term of 1, 4, 9, 16, … is:", options: ["aₙ = 3n − 2", "aₙ = n²", "aₙ = 2ⁿ", "aₙ = n(n+1)"], answer: 1, difficulty: 1, explanation: "Squares: 1², 2², 3², 4²." },
    { type: "mcq", q: "Which sequence is bounded above?", options: ["aₙ = n²", "aₙ = 2ⁿ", "aₙ = 1 − 1/n", "aₙ = n + (−1)ⁿ"], answer: 2, difficulty: 2, explanation: "1 − 1/n < 1 for every n; the others grow without bound." },
    { type: "mcq", q: "The 5th term of the Fibonacci-style rule F₁ = F₂ = 1, Fₙ = Fₙ₋₁ + Fₙ₋₂ is:", options: ["3", "5", "8", "4"], answer: 1, difficulty: 2, explanation: "1, 1, 2, 3, 5 — F₅ = 5." },
    { type: "mcq", q: "A sequence with aₙ₊₁ < aₙ for all n is called:", options: ["bounded", "alternating", "decreasing", "arithmetic"], answer: 2, difficulty: 1, explanation: "Each term smaller than the last: strictly decreasing." },
    { type: "mcq", q: "The general term of 3, −9, 27, −81, … is:", options: ["aₙ = (−1)ⁿ⁺¹3ⁿ", "aₙ = 3ⁿ", "aₙ = −3ⁿ", "aₙ = (−3)ⁿ"], answer: 0, difficulty: 3, explanation: "n=1 must give +3, n=2 must give −9: alternating sign (−1)ⁿ⁺¹ times powers 3ⁿ." },
    { type: "mcq", q: "Unlike aₙ = 1/n, the sequence bₙ = n² differs mainly because bₙ is:", options: ["decreasing", "bounded", "unbounded", "alternating"], answer: 2, difficulty: 2, explanation: "n² grows past any bound; 1/n stays in (0, 1]." }
  ]
};

Lessons["g12-mathematics-um1-t2"] = {
  overview: "Two rules generate most sequences you will meet: add a constant (arithmetic) or multiply by a constant (geometric). Each has a clean general term, a signature test, and a world of applications from staircases to salaries to depreciation.",
  objectives: [
    "Identify arithmetic and geometric sequences from their terms",
    "Use the nth-term formulas aₙ = a₁ + (n−1)d and aₙ = a₁·rⁿ⁻¹",
    "Find a missing term or position given two terms",
    "Insert arithmetic or geometric means between two numbers",
    "Model real situations (growth, decay, savings) with these sequences"
  ],
  simple: "<b>Arithmetic</b>: add the same amount each step — 4, 7, 10, … (difference d = 3). After n−1 steps you've added d that many times: aₙ = a₁ + (n−1)d. <b>Geometric</b>: multiply by the same factor each step — 3, 6, 12, … (ratio r = 2), so aₙ = a₁·rⁿ⁻¹. Quick test on any three terms: constant <i>difference</i> → arithmetic; constant <i>ratio</i> → geometric. Arithmetic walks straight; geometric flies (r > 1) or collapses (|r| < 1) — that difference in personality is why compound interest is geometric.",
  detailed: "<p>An <b>arithmetic sequence</b> satisfies aₙ − aₙ₋₁ = d for all n ≥ 2. Telescoping the steps: aₙ = a₁ + (n−1)d. It is a linear function of n — graph the terms and they fall on a line with slope d; d > 0 rises, d < 0 falls. Given any two terms you can solve for a₁ and d: from a₃ = 11 and a₇ = 27, two equations a₁ + 2d = 11, a₁ + 6d = 27 subtract to 4d = 16, d = 4, a₁ = 3.</p><p>A <b>geometric sequence</b> satisfies aₙ / aₙ₋₁ = r (a₁ ≠ 0, r ≠ 0): aₙ = a₁·rⁿ⁻¹, an exponential function of n. The sign of r and its size classify behaviour: r > 1 grows in magnitude, 0 < r < 1 decays to 0, r < 0 alternates while magnitude grows or decays by |r|. From two terms, dividing kills a₁: a₅/a₂ = r³, so r = ∛(a₅/a₂).</p><p><b>Means</b> are inserted terms. Two arithmetic means between 5 and 17: three gaps, so 3d = 12, d = 4 → 5, 9, 13, 17. A single arithmetic mean equals the ordinary average (a + b)/2. For geometric means between 2 and 54 with three gaps: r³ = 54/2 = 27 → r = 3, giving 2, 6, 18, 54. One geometric mean g between a and b satisfies g² = ab, so g = ±√(ab) — note the sign ambiguity when ab > 0 and the two means have opposite signs.</p><p>Modeling habit: <b>arithmetic</b> for fixed step changes (salary +600 birr yearly, staircase steps, temperature dropping 3° per hour); <b>geometric</b> for percent changes (car depreciating 15% a year keeps 0.85 of value: Vₙ = V₀·0.85ⁿ; bacteria doubling: Nₙ = N₀·2ⁿ; radioactivity half-life). Percent change p% per period means ratio r = 1 + p/100.</p><p>Exam classic: which term is 100 in the sequence 4, 7, 10, …? Solve 4 + 3(n−1) = 100 → n = 33 — and if n ever comes out non-integer, the number simply is NOT a term; saying so is the full answer.</p>",
  keyTerms: [
    { term: "Arithmetic sequence", def: "Constant difference: aₙ = a₁ + (n−1)d" },
    { term: "Common difference d", def: "aₙ₊₁ − aₙ, the same for every n" },
    { term: "Geometric sequence", def: "Constant ratio: aₙ = a₁·rⁿ⁻¹" },
    { term: "Common ratio r", def: "aₙ₊₁ / aₙ, fixed for every n" },
    { term: "Arithmetic mean", def: "Inserted term(s) forming an arithmetic sequence; single AM = (a+b)/2" },
    { term: "Geometric mean", def: "Inserted term(s) forming a geometric sequence; single GM = √(ab)" }
  ],
  formulas: [
    {
      name: "Arithmetic nth term",
      formula: "aₙ = a₁ + (n − 1)d",
      meaning: "Start at a₁, take n−1 steps of size d",
      vars: [{ name: "a₁", meaning: "first term" }, { name: "d", meaning: "common difference" }],
      when: "Any arithmetic sequence term/position question"
    },
    {
      name: "Geometric nth term",
      formula: "aₙ = a₁ · rⁿ⁻¹",
      meaning: "Start at a₁, multiply by r exactly n−1 times",
      vars: [{ name: "r", meaning: "common ratio" }],
      when: "Any geometric sequence term/position question"
    },
    {
      name: "Ratio jump between positions",
      formula: "aₘ / aₖ = r^(m−k)",
      meaning: "Two terms determine r by division",
      when: "Finding r (or d = (aₘ−aₖ)/(m−k)) from two known terms"
    }
  ],
  workedExamples: [
    {
      problem: "Which term of 2, 5, 8, … equals 68?",
      formula: "aₙ = 2 + 3(n−1)",
      substitution: "2 + 3(n−1) = 68 → 3(n−1) = 66",
      answer: "n = 23 (the 23rd term)"
    },
    {
      problem: "A car bought for 600,000 birr loses 10% of its value each year. Value after 5 years?",
      formula: "Vₙ = 600000 · 0.9ⁿ",
      calculation: "0.9⁵ = 0.59049",
      answer: "≈ 354,294 birr"
    },
    {
      problem: "In a geometric sequence a₂ = 6 and a₅ = 162. Find a₁ and r.",
      calculation: "r³ = a₅/a₂ = 27 → r = 3; a₁ = a₂/r",
      answer: "a₁ = 2, r = 3"
    },
    {
      problem: "Insert two geometric means between 4 and 108.",
      calculation: "r³ = 108/4 = 27 → r = 3",
      answer: "4, 12, 36, 108"
    }
  ],
  commonMistakes: [
    "Using aₙ = a₁ + nd or a₁·rⁿ — the exponent/step is (n−1), not n",
    "Dividing terms to 'prove' arithmetic (division tests geometric; subtraction tests arithmetic)",
    "Losing the negative geometric mean: GM of 2 and 8 includes −4 as well as 4 in a signed sequence",
    "Percent decrease r = 0.10 instead of 0.90 — the ratio is what REMAINS",
    "Concluding a non-integer position means an arithmetic error; often the correct answer is 'not a term'"
  ],
  applications: [
    "Finance: straight-line depreciation is arithmetic; reducing-balance is geometric",
    "Biology: cell division doubles — geometric growth with r = 2",
    "Infrastructure: bus-route stops equally spaced form an arithmetic sequence",
    "Demography: constant-percent population growth compounds geometrically"
  ],
  summary: "Arithmetic sequences add a fixed difference (linear in n); geometric sequences multiply by a fixed ratio (exponential in n). Two terms pin down the sequence; means fill gaps; percent change translates directly into r = 1 ± p/100.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The 15th term of 3, 7, 11, … is:", options: ["59", "63", "61", "57"], answer: 0, difficulty: 1, explanation: "a₁₅ = 3 + 14·4 = 59." },
    { type: "mcq", q: "The common ratio of 5, 15, 45, 135, … is:", options: ["5", "15", "3", "10"], answer: 2, difficulty: 1, explanation: "15/5 = 3 = 45/15." },
    { type: "mcq", q: "If a₄ = 19 and a₈ = 35 in an arithmetic sequence, d equals:", options: ["3", "4", "5", "8"], answer: 1, difficulty: 2, explanation: "4d = 35 − 19 = 16 → d = 4." },
    { type: "mcq", q: "The single geometric mean between 8 and 18 is:", options: ["12", "13", "10", "26"], answer: 0, difficulty: 2, explanation: "g = √(8·18) = √144 = 12." },
    { type: "mcq", q: "A town of 20,000 grows 5% per year. Population after 2 years?", options: ["22,050", "22,000", "21,000", "22,500"], answer: 0, difficulty: 2, explanation: "20000·1.05² = 20000·1.1025 = 22,050." },
    { type: "mcq", q: "Which term of 2, 6, 18, … is 1458?", options: ["6th", "7th", "8th", "5th"], answer: 1, difficulty: 2, explanation: "2·3ⁿ⁻¹ = 1458 → 3ⁿ⁻¹ = 729 = 3⁶ → n = 7." },
    { type: "mcq", q: "Two arithmetic means inserted between 6 and 24 give common difference:", options: ["5", "6", "9", "4"], answer: 1, difficulty: 2, explanation: "Three gaps: 3d = 18 → d = 6; means are 12 and 18." },
    { type: "mcq", q: "A sequence has aₙ₊₁ = aₙ + 2n with a₁ = 1. Then a₄ =", options: ["10", "13", "15", "7"], answer: 1, difficulty: 3, explanation: "a₂ = 1+2 = 3, a₃ = 3+4 = 7, a₄ = 7+6 = 13 — differences grow, so it is NOT arithmetic." }
  ]
};

Lessons["g12-mathematics-um1-t3"] = {
  overview: "Sigma notation packs long sums into one line, and two classical formulas — for the first n integers and the geometric sum — turn tedious additions into instant arithmetic. These are the tools Grade 12 series questions actually test.",
  objectives: [
    "Read and write finite sums using Σ notation",
    "Apply Σ rules: linearity, constants, index shifting",
    "Use the sums Σk, Σk² and Σ(a + d(k−1))",
    "Derive and apply the geometric partial-sum formula Sₙ = a₁(rⁿ − 1)/(r − 1)",
    "Evaluate arithmetic and geometric partial sums from sigma expressions"
  ],
  simple: "∑ is a compressed 'add them all': Σₖ₌₁⁵ 2k means 2 + 4 + 6 + 8 + 10 = 30. The k is a dummy counter — rename it freely. Constants factor out, sums split, and two shortcuts save minutes: adding 1 to n gives n(n+1)/2 (Gauss' childhood trick), and a geometric sum gives Sₙ = a₁(rⁿ − 1)/(r − 1). For an arithmetic series the average of first and last term times the count does the job: Sₙ = n(a₁ + aₙ)/2.",
  detailed: "<p>The <b>sigma notation</b> Σₖ₌₁ⁿ f(k) = f(1) + f(2) + … + f(n): k is the <b>index</b> running over integers; anything named works (Σᵢ, Σⱼ) — the index is <b>dummy</b>. Rules that follow from associativity: Σ(c·aₖ) = c·Σaₖ; Σ(aₖ ± bₖ) = Σaₖ ± Σbₖ; Σ c = nc (n copies of a constant — not c!). Index shifts are equally legal: Σₖ₌₁ⁿ (k+3) = Σk + 3n.</p><p>The <b>arithmetic series</b> Sₙ = a₁ + (a₁+d) + … + aₙ: write it forward and backward and add column-wise — each of n columns equals a₁ + aₙ, so 2Sₙ = n(a₁ + aₙ), giving <b>Sₙ = n(a₁ + aₙ)/2 = n(2a₁ + (n−1)d)/2</b>. Gauss' sum 1+2+…+n is the special case a₁ = 1, aₙ = n.</p><p>The <b>geometric series</b> derivation uses the shift trick: S = a₁ + a₁r + … + a₁rⁿ⁻¹, so rS = a₁r + … + a₁rⁿ; subtract: (1−r)S = a₁ − a₁rⁿ, hence <b>Sₙ = a₁(1 − rⁿ)/(1 − r)</b> for r ≠ 1 (or a₁(rⁿ − 1)/(r − 1), same number). Every term cancels in pairs except the two surviving ends — the same telescoping spirit that makes partial fractions powerful later.</p><p>Standard results worth memorising: Σₖ₌₁ⁿ k = n(n+1)/2; Σk² = n(n+1)(2n+1)/6; Σk³ = [n(n+1)/2]² (the cubes sum to a square — a beautiful check). Use them by expanding: Σ(2k² − 3k + 5) = 2Σk² − 3Σk + 5n.</p><p>Exam shapes: 'find the sum of all multiples of 7 between 100 and 300' → first term 105, last 294, count from 294 = 105 + 7(n−1) → n = 28, S = 28(105+294)/2 = 5,586. Or 'Σₖ₌₁ⁿ (3k − 2) = ?' → recognize arithmetic with a₁ = 1, aₙ = 3n − 2. The trap answers always include the off-by-one variants — double-check with n = 1 or 2 by direct addition.</p>",
  keyTerms: [
    { term: "Sigma notation Σ", def: "Compact symbol for a sum over an index from a lower to upper limit" },
    { term: "Index (dummy variable)", def: "The counter k in Σf(k); renaming it changes nothing" },
    { term: "Partial sum Sₙ", def: "Sum of the first n terms of a sequence" },
    { term: "Arithmetic series sum", def: "Sₙ = n/2·(2a₁ + (n−1)d) = n(a₁+aₙ)/2" },
    { term: "Geometric series sum", def: "Sₙ = a₁(1 − rⁿ)/(1 − r), r ≠ 1" },
    { term: "Telescoping", def: "Cancellation of interior terms leaving only the ends" }
  ],
  formulas: [
    {
      name: "Arithmetic series",
      formula: "Sₙ = n(a₁ + aₙ)/2 = n[2a₁ + (n−1)d]/2",
      meaning: "Count × average of the end terms",
      when: "Summing arithmetic sequences"
    },
    {
      name: "Geometric series (finite)",
      formula: "Sₙ = a₁(1 − rⁿ)/(1 − r) = a₁(rⁿ − 1)/(r − 1)",
      meaning: "The r-shift subtraction leaves only first and last ends",
      when: "Summing geometric sequences, any r ≠ 1"
    },
    {
      name: "Standard power sums",
      formula: "Σk = n(n+1)/2 · Σk² = n(n+1)(2n+1)/6 · Σk³ = [n(n+1)/2]²",
      meaning: "Closed forms for sums of powers",
      when: "Evaluating Σ of polynomial expressions in k"
    }
  ],
  workedExamples: [
    {
      problem: "Evaluate Σₖ₌₁²⁰ (2k + 5).",
      calculation: "2·Σk + 5·20 = 2·(20·21/2) + 100 = 420 + 100",
      answer: "520"
    },
    {
      problem: "Sum 3 + 6 + 12 + … to 8 terms.",
      formula: "Sₙ = a₁(rⁿ − 1)/(r − 1)",
      substitution: "3·(2⁸ − 1)/1 = 3·255",
      answer: "765"
    },
    {
      problem: "Find the sum of odd numbers from 1 to 99.",
      given: "a₁ = 1, d = 2, aₙ = 99 → n = 50",
      calculation: "S = 50(1+99)/2",
      answer: "2500 (= 50², in general the first n odds sum to n²)"
    },
    {
      problem: "A debt is repaid 400 birr monthly, each month 5% more than the previous (first payment 400). Total after 6 months?",
      formula: "geometric S₆ = 400(1.05⁶ − 1)/0.05",
      calculation: "1.05⁶ ≈ 1.3401 → 400·6.8019",
      answer: "≈ 2,721 birr"
    }
  ],
  commonMistakes: [
    "Σ c = c instead of cn — a constant added n times totals cn",
    "Counting terms wrong: from k = 3 to k = 10 is 8 terms, not 7 or 10",
    "Plugging r = 1 into the geometric formula (division by zero) — an r = 1 'geometric' series is arithmetic: Sₙ = na₁",
    "Forgetting |r| can be negative: 1 − (−2)ⁿ behaves differently for odd/even n",
    "Mixing which formula: n(a₁+aₙ)/2 needs the LAST term; the d version needs a₁ only"
  ],
  applications: [
    "Loan and savings math in Unit 5 are geometric series in disguise",
    "Fractals: total length/area constructions are partial sums",
    "Physics: distance under constant-acceleration sums to triangular-number formulas",
    "Finance: cumulative salary raises or repeating-payment plans use arithmetic series"
  ],
  summary: "Sigma turns long sums into one line; constants pull out and sums split. Arithmetic sums: count × average of ends. Geometric sums: the r-shift subtraction leaves a₁ and a₁rⁿ. Memorise Σk, Σk², and verify any closed form with n = 1.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Σₖ₌₁⁴ (k² + 1) equals:", options: ["30", "34", "26", "20"], answer: 1, difficulty: 1, explanation: "Σk² = 1+4+9+16 = 30 and Σ1 = 4, total 34. (30 is the Σk² trap.)" },
    { type: "mcq", q: "The sum 1 + 2 + 3 + … + 40 is:", options: ["840", "820", "1640", "800"], answer: 1, difficulty: 1, explanation: "40·41/2 = 820." },
    { type: "mcq", q: "Σₖ₌₁ⁿ 5 equals:", options: ["5", "5n", "n", "n⁵"], answer: 1, difficulty: 1, explanation: "Five added n times: 5n." },
    { type: "mcq", q: "Sum of 2 + 6 + 18 + 54 + 162:", options: ["242", "244", "240", "486"], answer: 0, difficulty: 2, explanation: "a₁=2, r=3, n=5: 2(3⁵−1)/2 = 242." },
    { type: "mcq", q: "The sum of all multiples of 5 from 5 to 100 is:", options: ["950", "1000", "1050", "1900"], answer: 2, difficulty: 2, explanation: "n = 20 terms: S = 20(5+100)/2 = 1050." },
    { type: "mcq", q: "If Σₖ₌₁ⁿ (2k − 1) = 49, then n =", options: ["6", "7", "8", "49"], answer: 1, difficulty: 2, explanation: "First n odds sum to n² = 49 → n = 7." },
    { type: "mcq", q: "The value of Σₖ₌₂⁵ k(k−1) is:", options: ["40", "44", "50", "36"], answer: 0, difficulty: 3, explanation: "2·1 + 3·2 + 4·3 + 5·4 = 2 + 6 + 12 + 20 = 40." },
    { type: "mcq", q: "Which expression equals a₁ + (a₁+d) + … + aₙ?", options: ["n(a₁ + aₙ)/2", "n·a₁·aₙ", "(a₁ + aₙ)/2", "n·d/2"], answer: 0, difficulty: 1, explanation: "Gauss pairing: count times mean of the ends." }
  ]
};

Lessons["g12-mathematics-um1-t4"] = {
  overview: "Add forever and sometimes you still get a finite number. Infinite geometric series converge precisely when |r| < 1, and their sum S = a₁/(1−r) quietly powers repeating decimals, bouncing-ball distances and the very idea of a limit.",
  objectives: [
    "Define convergence of a series via its sequence of partial sums",
    "State and apply the |r| < 1 convergence condition",
    "Compute infinite geometric sums S = a₁/(1 − r)",
    "Convert repeating decimals to fractions using series",
    "Judge convergence of non-geometric series from partial-sum behaviour"
  ],
  simple: "A series <b>converges</b> when its running totals S₁, S₂, S₃, … settle toward a final value instead of running away. The star example: 1/2 + 1/4 + 1/8 + … — walk halfway to a wall, then half again: the partial sums 0.5, 0.75, 0.875, … crowd toward 1, never passing it. For any geometric series with |r| < 1, rⁿ fades to 0 and the infinite sum is <b>S = a₁/(1 − r)</b>. If |r| ≥ 1, the terms refuse to shrink and the sum diverges to ±∞ or oscillates.",
  detailed: "<p>Make it precise: the <b>infinite series</b> a₁ + a₂ + … has partial sums Sₙ = Σₖ₌₁ⁿ aₖ. We say it <b>converges to S</b> if Sₙ → S: the totals get and stay arbitrarily close to S. Convergence is a property of the sequence (Sₙ) — which is exactly why the sequence-before-series order of this unit matters.</p><p>For a geometric series, Sₙ = a₁(1 − rⁿ)/(1 − r). When |r| < 1, rⁿ → 0 (e.g. 0.5, 0.25, 0.125…), so Sₙ → <b>S = a₁/(1 − r)</b>. When r ≥ 1, Sₙ grows past any bound (diverges to +∞ for positive a₁); when r ≤ −1 the partial sums lurch between ever larger ± values with no limit (diverges by oscillation). The test is airtight: a geometric series converges ⟺ |r| < 1.</p><p>Applied examples: 1 − 0.3 + 0.09 − 0.027 + … has a₁ = 1, r = −0.3 → S = 1/1.3 = 10/13. A ball dropped from 120 cm rebounds to 3/4 of its fall each bounce: total distance = 120 + 2·90·(1 + 3/4 + (3/4)² + …) — the 2 because each rebound is later re-fallen — = 120 + 2·90/(1/4) = 120 + 720 = 840 cm. Beware the classic slip: the first fall has no matching 'pre-fall'.</p><p><b>Repeating decimals</b> are infinite geometric series in disguise: 0.3̄ = 0.3 + 0.03 + 0.003 + … = (3/10)/(1 − 1/10) = 1/3. For 0.4̄7̄ the block '47' repeats at ratio 10⁻²: (47/100)/(1 − 1/100) = 47/99. Rule of thumb recovered: repeating block over as many 9s — now you know WHY the trick works.</p><p>Not every infinite sum behaves. 1 + 1 + 1 + … diverges (terms don't even shrink). The harmonic series 1 + 1/2 + 1/3 + … diverges despite terms → 0 — shrinking terms are necessary, NOT sufficient (the tail blocks each add at least 1/2). This <b>nth-term test</b>: if aₙ does not approach 0, the series must diverge; a series CAN still diverge with aₙ → 0. Grade 12 asks only geometric sums for exact values, but the test is a favorite true/false.</p>",
  keyTerms: [
    { term: "Infinite series", def: "The formal sum a₁ + a₂ + … continued without end" },
    { term: "Convergent", def: "Partial sums approach a finite limit S" },
    { term: "Divergent", def: "Partial sums grow unbounded or fail to settle (oscillate)" },
    { term: "Sum to infinity", def: "S = a₁/(1−r), defined only when |r| < 1" },
    { term: "nth-term test", def: "If aₙ ↛ 0 the series diverges; aₙ → 0 alone proves nothing" },
    { term: "Harmonic series", def: "Σ1/n — terms vanish yet the sum diverges" }
  ],
  formulas: [
    {
      name: "Infinite geometric series",
      formula: "S = a₁ / (1 − r), valid iff |r| < 1",
      meaning: "Fade-out remainder rⁿ → 0 in the finite formula",
      vars: [{ name: "a₁", meaning: "first term" }, { name: "r", meaning: "common ratio with |r| < 1" }],
      when: "Any convergent geometric sum, repeating decimals, rebound distances"
    },
    {
      name: "Repeating-decimal conversion",
      formula: "0.(block of k digits) = block / (10ᵏ − 1)",
      meaning: "Geometric sum with ratio 10⁻ᵏ",
      when: "0.2̄7̄ = 27/99 = 3/11"
    }
  ],
  workedExamples: [
    {
      problem: "Sum 8 + 4 + 2 + 1 + …",
      formula: "S = a₁/(1 − r)",
      substitution: "a₁ = 8, r = 1/2 → 8/(1/2)",
      answer: "16"
    },
    {
      problem: "Does 2 + 4 + 8 + … converge?",
      calculation: "r = 2, |r| ≥ 1",
      answer: "No — diverges to +∞"
    },
    {
      problem: "Express 0.6̄ as a fraction.",
      calculation: "(6/10)/(1 − 1/10) = (6/10)/(9/10)",
      answer: "2/3"
    },
    {
      problem: "Σₙ₌₀^∞ 3·(−0.2)ⁿ",
      given: "a₁ = 3 (n=0 term), r = −0.2",
      calculation: "3/(1 + 0.2) = 3/1.2",
      answer: "2.5 — converges because |r| = 0.2 < 1"
    }
  ],
  commonMistakes: [
    "Applying S = a₁/(1−r) when |r| ≥ 1 — the formula is meaningless there",
    "Sign slips: r = −0.5 gives denominator 1 − (−0.5) = 1.5, not 0.5",
    "Using a₁ = first listed number when the sum starts at index 0 — the n=0 term is a₁·r⁰ = a₁ ✓ but double-check which term is first",
    "Believing small terms guarantee convergence: harmonic series refutes it",
    "Bouncing-ball problems: forgetting the rebound distance is traversed twice (up and down) after the first drop"
  ],
  applications: [
    "Finance: the value of a perpetual growing annuity uses |r| < 1 sums",
    "Physics: total distance traveled under fractional rebound coefficients",
    "Number theory: why every repeating decimal is rational (the series always sums to a fraction)",
    "Computer graphics: recursive subdivisions have finite total area via convergent series"
  ],
  summary: "Convergence means partial sums settle. Geometric series converge exactly when |r| < 1, summing to a₁/(1−r) — the engine behind repeating decimals and rebound problems. Vanishing terms are necessary but not sufficient: the harmonic series diverges anyway.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The sum 9 + 3 + 1 + … to infinity is:", options: ["13.5", "12", "15", "14"], answer: 0, difficulty: 1, explanation: "a₁ = 9, r = 1/3: S = 9/(1 − 1/3) = 9/(2/3) = 13.5." },
    { type: "mcq", q: "An infinite geometric series converges when:", options: ["r > 1", "|r| < 1", "r < 0", "|r| ≥ 1"], answer: 1, difficulty: 1, explanation: "Only then does rⁿ fade to 0." },
    { type: "mcq", q: "0.9̄ (0.999…) as a fraction equals:", options: ["9/10", "99/100", "1", "0.9"], answer: 2, difficulty: 2, explanation: "(9/10)/(1/10) = 1 — the repeating 9s sum exactly to 1." },
    { type: "mcq", q: "The sum 4 − 2 + 1 − 0.5 + … is:", options: ["8/3", "2", "3", "5/2"], answer: 0, difficulty: 2, explanation: "a₁ = 4, r = −1/2: S = 4/(1 + 1/2) = 4/1.5 = 8/3." },
    { type: "mcq", q: "If Σ aₙ converges, then necessarily aₙ →", options: ["S", "1", "0", "r"], answer: 2, difficulty: 2, explanation: "Terms must vanish; the nth-term test contrapositive." },
    { type: "mcq", q: "A ball drops 80 cm, rebounding to half each time. Total distance eventually traveled:", options: ["160 cm", "240 cm", "320 cm", "180 cm"], answer: 1, difficulty: 3, explanation: "80 + 2·40/(1 − 1/2) = 80 + 160 = 240 cm." },
    { type: "mcq", q: "Which series diverges?", options: ["Σ (1/3)ⁿ", "Σ (−0.9)ⁿ", "Σ 1/(n+1) (harmonic-type)", "Σ 0.99ⁿ"], answer: 2, difficulty: 3, explanation: "Harmonic-style tails add forever past every bound; geometric with |r|<1 all converge (0.99ⁿ still fades — slowly)." },
    { type: "mcq", q: "Σₙ₌₀^∞ 5·(0.1)ⁿ =", options: ["5.55", "50/9", "5.05", "5"], answer: 1, difficulty: 2, explanation: "5/(1 − 0.1) = 5/(0.9) = 50/9 ≈ 5.555…" }
  ]
};

Lessons["g12-mathematics-um1-t5"] = {
  overview: "Sequences and series leave the textbook and run savings tables, drug dosages, populations and pile construction. This topic is the translation layer: word problem in, mathematical sequence out, sensible answer back.",
  objectives: [
    "Model fixed-step change with arithmetic sequences and percent change with geometric",
    "Use series sums for cumulative totals over time",
    "Interpret r < 1 decay vs r > 1 growth in context",
    "Solve savings, depreciation and half-life problems end-to-end",
    "Check model answers for realism (units, monotonicity, limits)"
  ],
  simple: "The modeling decision tree is short: does the quantity change by the <b>same amount</b> each period (add 200 birr, lose 3 cm) → <b>arithmetic</b>; by the <b>same percent</b> (grow 8%, halve each cycle) → <b>geometric</b>. Then ask: do I need one term (aₙ — 'balance after 10 years') or a running total (Sₙ — 'how much did I save in 10 years')? One term uses the nth-term formula; totals use the series formulas. Finally sanity-check: does the answer move the right direction and does it fade, settle, or explode?",
  detailed: "<p><b>Growth patterns</b>: population P at percent g has Pₙ = P₀(1 + g/100)ⁿ; a bacterial culture doubling every 20 minutes is geometric per-period (r = 2 per 20 min) or P(t) = P₀·2^(t/20). <b>Decay</b> uses 0 < r < 1: a car worth 800,000 losing 12% yearly follows Vₙ = 800000·0.88ⁿ — ask when its value drops below 400,000 and you solve 0.88ⁿ < 0.5 (n = 6 by table/checking: 0.88⁶ ≈ 0.464). Medicine half-life problems are the same: amount left Aₙ = A₀·(1/2)ⁿ per half-life.</p><p><b>Savings</b> is the signature application of series: depositing c birr every year into an account paying i% compounds each deposit differently — the first deposit earns n−1 years of growth. The annual totals form a geometric series with ratio (1+i): S = c[(1+i)ⁿ − 1]/i. Monthly deposits replace i with the monthly rate and n with months. Contrast arithmetic saving (fixed deposit into a box, no interest): total = n·c — and the gap between the two answers is literally what interest buys.</p><p><b>Installment and amortization</b> intuition appears here and matures in Unit 5: a loan repaid in equal payments is a geometric series whose sum must equal the borrowed amount plus accumulated interest. Iqub-style rotating savings — every period one member takes the pot — works only because the summed contributions equal the payout; the classroom question 'is Iqub an annuity?' asks exactly whether contribution timing matches an ordinary or due annuity.</p><p><b>Structure problems</b>: stacking logs in a triangle (bottom row n logs, each row one fewer) is an arithmetic series — total = n(n+1)/2. A fractal-like road-branch design where each generation adds half as many km as the last converges: total length ≤ initial/(1 − 1/2) = 2×initial — infinity can fit in a finite budget only because the series converges.</p><p><b>Verification culture</b>: (1) compute period 1 by hand and check the formula reproduces it; (2) direction test — savings must grow, depreciation must shrink; (3) magnitude test — a school population tripling in 5 years is suspect arithmetic; (4) units on every line. Textbook answers rarely ask for these checks; EUEE items are written so the un-checked slip picks a wrong option.</p>",
  keyTerms: [
    { term: "Growth rate", def: "Percent added per period; multiplier r = 1 + p/100" },
    { term: "Decay rate", def: "Percent removed per period; multiplier r = 1 − p/100" },
    { term: "Half-life", def: "Periods for halving; geometric decay with r = ½ per half-life" },
    { term: "Future value of savings", def: "Geometric series sum c[(1+i)ⁿ − 1]/i of equal deposits" },
    { term: "Cumulative total", def: "Series Sₙ when the question asks 'in total / altogether'" }
  ],
  formulas: [
    {
      name: "Percent-change model",
      formula: "Qₙ = Q₀ · (1 ± p/100)ⁿ",
      meaning: "Geometric growth (+) or decay (−) at p percent per period",
      when: "Population, depreciation, medicine, inflation"
    },
    {
      name: "Regular savings total",
      formula: "S = c[(1 + i)ⁿ − 1]/i",
      meaning: "Sum of deposits each compounded for its own remaining time",
      when: "Equal periodic deposits into an interest account"
    }
  ],
  workedExamples: [
    {
      problem: "Teff yield is 120 quintals in year 1 and rises 15 quintals yearly. Total production over 8 years?",
      given: "Arithmetic series a₁ = 120, d = 15, n = 8",
      calculation: "S = 8/2·(2·120 + 7·15) = 4·(240 + 105)",
      answer: "1,380 quintals"
    },
    {
      problem: "A phone costs 20,000 birr and loses 25% of its value per year. After how many years is it under 8,000?",
      calculation: "20000·0.75ⁿ < 8000 → 0.75ⁿ < 0.4; 0.75³ ≈ 0.422, 0.75⁴ ≈ 0.316",
      answer: "During year 4 (n = 4)"
    },
    {
      problem: "Sari deposits 3,000 birr each year in an account at 10%. Balance right after her 5th deposit?",
      formula: "S = 3000(1.1⁵ − 1)/0.1",
      calculation: "1.1⁵ ≈ 1.6105 → 3000·6.1051",
      answer: "≈ 18,315 birr"
    },
    {
      problem: "A drug's concentration halves every 6 hours from 200 mg. How much remains after 24 hours?",
      calculation: "4 half-lives: 200·(1/2)⁴",
      answer: "12.5 mg"
    }
  ],
  commonMistakes: [
    "Using the nth-term formula when the question sums a total (or vice versa)",
    "Growth multiplier 8% → r = 0.08; it is 1.08",
    "Depreciation applied on the ORIGINAL value each year (that's arithmetic) when the text says 'value each year' (geometric)",
    "Off-by-one on deposit timing: after the 5th deposit there are 5 deposits earning 4, 3, 2, 1, 0 years respectively",
    "Reporting n = 3.4 years when periods are discrete — round UP to the first period meeting the condition"
  ],
  applications: [
    "Banking: savings plans, term deposits, rotating iqub/equity groups",
    "Public health: drug dosing schedules and vaccine decay",
    "Agriculture: yield improvement programs and soil loss rates",
    "Business: asset depreciation schedules for tax planning"
  ],
  summary: "Fixed step → arithmetic; fixed percent → geometric with multiplier 1 ± p/100. A single future value uses aₙ; a cumulative plan uses Sₙ (savings total c[(1+i)ⁿ−1]/i). Always verify direction, first period, and units.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A factory makes 500 units monthly and increases output by 40 units every month. Output in month 12:", options: ["940", "980", "960", "480"], answer: 0, difficulty: 1, explanation: "500 + 11·40 = 940." },
    { type: "mcq", q: "Livestock grows 10% yearly from 80 head. After 3 years (nearest whole):", options: ["106", "110", "104", "100"], answer: 0, difficulty: 2, explanation: "80·1.1³ = 80·1.331 ≈ 106." },
    { type: "mcq", q: "Which models 'loses 4% of its PREVIOUS value each year'?", options: ["Arithmetic −0.04", "Geometric with r = 0.96", "Geometric with r = 0.04", "Linear"], answer: 1, difficulty: 2, explanation: "Retains 96% of last year: multiply by 0.96." },
    { type: "mcq", q: "Total of 100 + 110 + … + 190 (arithmetic, 10 terms):", options: ["1,350", "1,450", "1,400", "2,900"], answer: 1, difficulty: 2, explanation: "10·(100+190)/2 = 1,450." },
    { type: "mcq", q: "A radioactive sample decays to 1/8 of original. How many half-lives?", options: ["3", "4", "8", "2"], answer: 0, difficulty: 1, explanation: "(1/2)³ = 1/8." },
    { type: "mcq", q: "Saving 1,000 birr per year at 5% interest — total right after year 2 (correct math):", options: ["2,000", "2,100", "2,050", "2,150"], answer: 2, difficulty: 3, explanation: "First deposit: 1050, second: 1000 → 2,050. Series formula gives 1000(1.05²−1)/0.05 = 2,050." },
    { type: "mcq", q: "Inflation 6% per year makes a 12-birr bread cost 12·1.06ⁿ. When does it first exceed 15 birr? (1.06²≈1.124, 1.06⁴≈1.262)", options: ["year 3", "year 4", "year 5", "year 2"], answer: 1, difficulty: 3, explanation: "12·1.262 = 15.14 in year 4; 1.06³≈1.191 gives 14.3 < 15." },
    { type: "mcq", q: "Logs stacked with 25 on the bottom row, one fewer per row up to 1. Total logs:", options: ["300", "325", "350", "25"], answer: 1, difficulty: 2, explanation: "Sum 1+2+…+25 = 25·26/2 = 325." }
  ]
};
