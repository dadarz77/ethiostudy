/* Content: Grade 12 Mathematics — Unit 3: Statistics (4 topics) */
window.Lessons = window.Lessons || {};

Lessons["g12-mathematics-um3-t1"] = {
  overview: "A data set is noise until one number speaks for it. This lesson masters the three voices of central tendency — mean, median, mode — for raw and grouped data, and the judgment call of which to use when skewness and outliers try to fool the average.",
  objectives: [
    "Compute mean, median, and mode of raw (ungrouped) data",
    "Estimate the mean of grouped data using class midpoints and frequencies",
    "Find the median position and the modal class for grouped data",
    "Choose the appropriate measure of center given shape and outliers",
    "Read exam-style tables and summarize them with one well-chosen average"
  ],
  simple: "<b>Three ways to say 'typical.'</b> The <b>mean</b> is the total divided by the count — sensitive to every value. The <b>median</b> is the middle of the ordered list — immune to extreme outliers. The <b>mode</b> is the most frequent value — the crowd favourite. For grouped data (ages in bands, marks in ranges) you can't recover the raw values, so the mean is estimated from class midpoints weighted by frequency: x̄ = Σfx / Σf.",
  detailed: "<p><b>Raw data.</b> Mean = Σx / n. Median: order the data; for odd n the middle term, for even n the average of the two middle terms. Mode: the value with the highest frequency (a set can be bimodal or have no mode at all). For 2, 4, 4, 7, 13: mean = 30/5 = 6, median = 4, mode = 4. One new value of 100 changes the mean to 20.2 but leaves the median at 5.5 — that stubbornness is the median's superpower.</p><p><b>Grouped data.</b> When marks are reported as 0–9, 10–19, 20–29 with frequencies 5, 8, 7, the true individual values are hidden. Use each class <b>midpoint</b> x (4.5, 14.5, 24.5) as a stand-in and weight by frequency f: Σfx = 22.5 + 116 + 171.5 = 310, Σf = 20, so x̄ = 310/20 = 15.5. The <b>modal class</b> is simply the class with the largest frequency (10–19 here). The median lies in the class holding the (n+1)/2-th position once cumulative frequencies are built.</p><p><b>Skew decides.</b> In a symmetric distribution mean ≈ median. Pull one tail and they split: right-skewed (a few huge values, like salaries) pushes the mean above the median; left-skewed does the reverse. Rule of thumb — report the median when outliers or skew threaten the mean's honesty (house prices, test scores with one zero), the mean when the data is well-behaved (heights of a large sample, exam marks overall), the mode for categorical picks (favourite subject, shoe size on the shop shelf).</p><p><b>Weighted mean</b> is the same arithmetic wearing a different hat: final grade = (0.3·quiz + 0.5·exam + 0.2·project) is Σfx/Σf with f as weights. A student scoring 80, 70, 90 gets 0.3·80 + 0.5·70 + 0.2·90 = 24 + 35 + 18 = 77.</p><p><b>Exam shapes:</b> given a frequency table, reconstruct Σf, Σfx and quote the mean to one decimal; given a list with a mystery value x and a stated mean, solve Σx = n·x̄ for x; given a skewed context, justify the median in a sentence — the justification is often where the marks hide.</p>",
  keyTerms: [
    { term: "Mean", def: "Σx / n — the arithmetic average, sensitive to extremes" },
    { term: "Median", def: "Middle value of ordered data; average of the two middles if n is even" },
    { term: "Mode", def: "Most frequent value; may not exist or may not be unique" },
    { term: "Class midpoint", def: "Centre of a grouped class, used as stand-in x" },
    { term: "Modal class", def: "Grouped class with the greatest frequency" },
    { term: "Skew", def: "Asymmetric tail pull: right-skew lifts the mean above the median" }
  ],
  formulas: [
    {
      name: "Mean (raw)",
      formula: "x̄ = Σx / n",
      meaning: "Total of all values divided by how many",
      vars: [{ name: "Σx", meaning: "sum of the data values" }, { name: "n", meaning: "number of values" }],
      when: "Any list of individual numbers"
    },
    {
      name: "Estimated mean (grouped)",
      formula: "x̄ = Σfx / Σf",
      meaning: "Midpoint-weighted average when only class frequencies are known",
      vars: [{ name: "f", meaning: "class frequency" }, { name: "x", meaning: "class midpoint" }],
      when: "Frequency tables with class intervals"
    },
    {
      name: "Weighted mean",
      formula: "x̄ = Σw·x / Σw",
      meaning: "Same as grouped mean with weights replacing frequencies",
      vars: [{ name: "w", meaning: "importance weight of each value" }],
      when: "Graded components, mixtures, price indexes"
    }
  ],
  workedExamples: [
    {
      problem: "Find mean, median, mode of: 2, 4, 4, 7, 13.",
      given: "Already ordered; n = 5",
      substitution: "Σx = 2+4+4+7+13 = 30",
      calculation: "mean = 30/5 = 6; median = 3rd value = 4; 4 appears twice",
      answer: "Mean 6, median 4, mode 4"
    },
    {
      problem: "Marks 0–9 (5 students), 10–19 (8), 20–29 (7). Estimate the mean mark.",
      formula: "x̄ = Σfx / Σf",
      given: "Midpoints 4.5, 14.5, 24.5",
      substitution: "Σfx = 5(4.5) + 8(14.5) + 7(24.5) = 22.5 + 116 + 171.5 = 310; Σf = 20",
      calculation: "310 / 20",
      answer: "x̄ = 15.5 marks"
    },
    {
      problem: "Five quiz scores average 14. The scores are 11, 15, x, 12, 18. Find x.",
      formula: "Σx = n·x̄",
      substitution: "11 + 15 + x + 12 + 18 = 5 × 14 = 70",
      calculation: "56 + x = 70",
      answer: "x = 14"
    },
    {
      problem: "A course is 30% quizzes, 50% exam, 20% project. A student scores 80, 70, 90. Find the final grade and name the statistic used.",
      formula: "x̄ = Σwx / Σw with weights 0.3, 0.5, 0.2",
      substitution: "0.3(80) + 0.5(70) + 0.2(90)",
      calculation: "24 + 35 + 18",
      answer: "Final grade 77 — a weighted mean"
    }
  ],
  commonMistakes: [
    "Averaging the class midpoints as if frequencies were equal — you must weight by frequency",
    "Ordering data for the median AFTER taking the middle — ordering comes first, always",
    "Even n: picking one of the two middle values instead of their average",
    "Quoting the mean for a skewed salary or house-price set and calling it 'typical'",
    "Reporting 'no mode' as 0 — a missing mode is stated in words, never as a number"
  ],
  applications: [
    "Grade sheets: the weighted mean is literally how transcripts are computed (quiz/exam/project weights)",
    "Shop inventory: the modal size tells a retailer what to restock when an average shoe size is meaningless",
    "National statistics: household income is published as a median precisely because a few billionaires would wreck the mean",
    "Quality control: comparing machine averages across days flags drift before any single part fails"
  ],
  summary: "Mean = balance point, median = positional middle, mode = most frequent. For grouped data estimate with x̄ = Σfx/Σf using class midpoints and locate the median by cumulative frequency. Shape decides the headline: symmetric → mean, skewed or outlier-ridden → median, categorical → mode. Weighted means are grouped means in disguise.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The mean of 3, 5, 7, 9 is:", options: ["5", "6", "7", "24"], answer: 1, difficulty: 1, explanation: "Σx = 24, n = 4: 24/4 = 6." },
    { type: "mcq", q: "The median of 8, 3, 5, 1, 9 is:", options: ["5", "8", "3", "9"], answer: 0, difficulty: 1, explanation: "Ordered: 1, 3, 5, 8, 9 — middle value is 5." },
    { type: "mcq", q: "The mode of 2, 2, 3, 5, 5, 5, 8 is:", options: ["2", "3", "5", "8"], answer: 2, difficulty: 1, explanation: "5 appears three times — more than any other." },
    { type: "mcq", q: "For grouped data, the mean is estimated by:", options: ["Σfx/Σf", "Σx/n", "the midpoint of all classes", "Σf/n"], answer: 0, difficulty: 2, explanation: "Midpoints x stand in for hidden values; frequencies f weight them." },
    { type: "mcq", q: "The median of 4, 6, 8, 10 is:", options: ["6", "7", "8", "6.5"], answer: 1, difficulty: 2, explanation: "Even n: average the two middle values (6 + 8)/2 = 7." },
    { type: "mcq", q: "Classes 0–9, 10–19, 20–29 with frequencies 3, 5, 2 have estimated mean:", options: ["13.5", "15.0", "12.5", "14.5"], answer: 0, difficulty: 2, explanation: "(3·4.5 + 5·14.5 + 2·24.5)/10 = (13.5 + 72.5 + 49)/10 = 135/10 = 13.5." },
    { type: "mcq", q: "In a right-skewed salary distribution, which relationship is typical?", options: ["mean < median", "mean = median", "mean > median", "mode > mean"], answer: 2, difficulty: 3, explanation: "The long right tail of few large salaries drags the mean above the median." },
    { type: "mcq", q: "The median of 2, 4, 4, 7, 13, 100 is:", options: ["4", "5.5", "6", "7"], answer: 1, difficulty: 3, explanation: "Even n: (4 + 7)/2 = 5.5 — the 100 never reaches the middle, which is the point." }
  ]
};

Lessons["g12-mathematics-um3-t2"] = {
  overview: "Two classes can share an average and still feel nothing alike. Dispersion numbers — range, variance, standard deviation — measure the spread around the centre, quantify consistency, and let you compare data sets honestly.",
  objectives: [
    "Compute the range and mean deviation of a data set",
    "Calculate variance and standard deviation for raw and grouped data",
    "Distinguish population σ from sample s (divide by N vs n−1)",
    "Use standard deviation to compare the consistency of two data sets",
    "Predict how coding x → (x − a)/b shifts the mean and scales the SD"
  ],
  simple: "<b>Spread in one number.</b> The <b>range</b> (max − min) is crude but instant. The real workhorse is <b>standard deviation</b>: find how far each value sits from the mean, square those deviations (so signs and outliers both get punished), average them → <b>variance</b> σ², then take the square root back to the original units. Small SD = data hugs the mean = consistent. Two factories averaging 50 kg/hour: the one with SD 2 is predictable, the one with SD 15 is chaos.",
  detailed: "<p><b>From deviations to variance.</b> Deviations x − x̄ sum to zero by construction, so averaging them is useless — square them first. Variance σ² = Σ(x − x̄)²/N, and standard deviation σ = √σ². Worked for 2, 4, 6: mean 4; deviations −2, 0, 2; squares 4, 0, 4; σ² = 8/3 ≈ 2.67; σ = √2.67 ≈ 1.63. The squaring step is why SD is called a 'root-mean-square' distance.</p><p><b>Population vs sample.</b> When the data IS the whole world (all 30 students of a class), divide by N. When it is a sample dragged in from a bigger population, divide by n − 1 (Bessel's correction) — the sample mean is fitted to the sample, under-counting true spread, and n − 1 nudges it honest. Exam tables in the Ethiopian curriculum often use σ with N; state which you used.</p><p><b>Grouped data.</b> Same skeleton with frequencies: σ² = Σf(x − x̄)²/Σf, x being the class midpoints. A shortcut form σ² = Σfx²/Σf − (Σfx/Σf)² saves re-subtracting the mean and is calculator-friendly.</p><p><b>Comparing consistency.</b> Absolute SDs mislead when the means differ: seeds of 5 cm plants vary by 0.5 cm (CV 10%) while 2 m trees vary by 0.5 cm (CV 2.5%) — the <b>coefficient of variation</b> CV = σ/x̄ (as %) levels the field. Lower CV = relatively more consistent.</p><p><b>Coding.</b> Add a constant: x̄ moves by a, spread unchanged (the whole cloud slides). Multiply by b: mean AND SD both scale by |b|; variance scales by b². Coding u = (x − a)/b gives x̄ = a + b·ū and sₓ = |b|·sᵤ — which is why big raw marks (like 1050–1350) are coded to small u's before hand arithmetic.</p>",
  keyTerms: [
    { term: "Range", def: "max − min — fastest spread estimate, outlier-dominated" },
    { term: "Deviation", def: "x − x̄: signed distance from the mean (sums to 0)" },
    { term: "Variance σ²", def: "Mean of squared deviations — units are squared" },
    { term: "Standard deviation σ", def: "√variance — spread back in original units" },
    { term: "Bessel's correction", def: "Sample variance divides by n − 1, not n" },
    { term: "Coefficient of variation", def: "CV = σ/x̄ — relative spread, good for comparing across scales" }
  ],
  formulas: [
    {
      name: "Population variance / SD",
      formula: "σ² = Σ(x − x̄)²/N, σ = √σ²",
      meaning: "Average squared distance from the mean, square-rooted to original units",
      vars: [{ name: "N", meaning: "total number of values (whole population)" }],
      when: "The data is the complete population or the exam says 'for this data set'"
    },
    {
      name: "Sample variance",
      formula: "s² = Σ(x − x̄)²/(n − 1)",
      meaning: "Unbiased spread estimate from a sample",
      vars: [{ name: "n − 1", meaning: "degrees of freedom after fitting x̄" }],
      when: "The numbers were drawn from a larger population"
    },
    {
      name: "Grouped variance (shortcut)",
      formula: "σ² = Σfx²/Σf − (Σfx/Σf)²",
      meaning: "Mean of squares minus square of the mean",
      vars: [{ name: "x", meaning: "class midpoints" }, { name: "f", meaning: "frequencies" }],
      when: "Frequency tables — faster than computing each (x − x̄)²"
    },
    {
      name: "Coding effects",
      formula: "u = (x − a)/b ⇒ x̄ = a + b·ū, sₓ = |b|·sᵤ",
      meaning: "Translation moves the centre, scaling stretches the spread",
      vars: [{ name: "a", meaning: "origin shift" }, { name: "b", meaning: "scale factor" }],
      when: "Large or awkward numbers; also for quick add/multiply reasoning"
    }
  ],
  workedExamples: [
    {
      problem: "Find the variance and standard deviation of 2, 4, 6.",
      formula: "σ² = Σ(x − x̄)²/N",
      given: "x̄ = 4",
      substitution: "deviations −2, 0, 2 → squares 4, 0, 4; Σ = 8; N = 3",
      calculation: "σ² = 8/3 ≈ 2.67; σ = √2.67",
      answer: "Variance ≈ 2.67, SD ≈ 1.63"
    },
    {
      problem: "Machine A packs in 50.1, 49.8, 50.2, 49.9; Machine B in 52.0, 47.5, 51.8, 48.7 kg. Both average ~50 kg. Which is more consistent?",
      formula: "s = √[Σ(x − x̄)²/(n−1)]",
      given: "A deviations: 0.1, −0.2, 0.2, −0.1 → Σsquares = 0.10; B deviations: 2.0, −2.5, 1.8, −1.3 → Σ = 4+6.25+3.24+1.69 = 15.18",
      calculation: "s_A² = 0.10/3 ≈ 0.033, s_A ≈ 0.18 kg; s_B² = 15.18/3 = 5.06, s_B ≈ 2.25 kg",
      answer: "Machine A — same mean, 13× smaller SD"
    },
    {
      problem: "Coded data u = (x − 100)/10 has mean 3 and SD 1.5. Recover x̄ and sₓ.",
      formula: "x̄ = a + b·ū; sₓ = |b|·sᵤ",
      substitution: "x̄ = 100 + 10·3; sₓ = 10 × 1.5",
      calculation: "130; 15",
      answer: "Mean 130, SD 15"
    },
    {
      problem: "Heights: sunflowers 120 ± 12 cm; daisies 30 ± 4.5 cm (mean ± SD). Which is relatively more variable?",
      formula: "CV = σ/x̄ × 100%",
      substitution: "sunflowers 12/120 = 10%; daisies 4.5/30 = 15%",
      calculation: "Compare CVs, not raw SDs",
      answer: "Daisies — larger CV despite smaller SD"
    }
  ],
  commonMistakes: [
    "Reporting the variance when the question asked standard deviation (or squaring twice)",
    "Using Σ(x − x̄) without squaring — it is always zero, not a spread",
    "Dividing a sample variance by n instead of n − 1 without noticing the question says 'sample'",
    "Claiming the larger SD set is 'worse' without context — spread is information, not sin",
    "Forgetting SD scales by |b| but variance scales by b² when data is multiplied"
  ],
  applications: [
    "Factory quality control: every batch ships with an SD; drift above a control limit stops the line",
    "Finance: SD of returns is the textbook definition of risk — two funds with equal mean differ by their σ",
    "Education: an exam's SD separates a discriminating paper (spread out) from one where everyone scores 74±1",
    "Weather: average temperature hides the point — an SD of 12°C is a totally different climate than 2°C"
  ],
  summary: "Range = quick and dirty. Variance = average squared deviation; SD = its square root, in original units. Samples divide by n − 1. Grouped data uses midpoints and the shortcut Σfx²/Σf − x̄². Compare spread with CV when means differ; remember coding slides the mean and scales the SD.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The range of 4, 9, 2, 11, 6 is:", options: ["7", "9", "11", "2"], answer: 0, difficulty: 1, explanation: "max 11 − min 2 = 9." },
    { type: "mcq", q: "The sum of deviations (x − x̄) over any data set is:", options: ["n", "0", "variance", "always positive"], answer: 1, difficulty: 1, explanation: "Positives and negatives cancel exactly — that's why we square them." },
    { type: "mcq", q: "The variance of 2, 4, 6 (population) is:", options: ["2.67", "4", "1.63", "8"], answer: 0, difficulty: 2, explanation: "Squares 4, 0, 4 → 8/3 ≈ 2.67." },
    { type: "mcq", q: "Every value is multiplied by 3. The SD becomes:", options: ["the same", "3 times", "9 times", "√3 times"], answer: 1, difficulty: 2, explanation: "Multiplying data multiplies the SD; the variance grows 9-fold." },
    { type: "mcq", q: "Sample variance divides the sum of squared deviations by:", options: ["n", "n + 1", "n − 1", "√n"], answer: 2, difficulty: 2, explanation: "Bessel's correction compensates for fitting x̄ from the same sample." },
    { type: "mcq", q: "Each score gains +5 points. The mean and SD:", options: ["both +5", "mean +5, SD unchanged", "mean unchanged, SD +5", "both unchanged"], answer: 1, difficulty: 2, explanation: "Adding shifts the cloud; its width is untouched." },
    { type: "mcq", q: "For u = (x − 50)/5, sᵤ = 2 gives sₓ =", options: ["2", "10", "2.5", "7"], answer: 1, difficulty: 3, explanation: "sₓ = |b|·sᵤ = 5 × 2 = 10." },
    { type: "mcq", q: "Heights: Group X mean 170 SD 10; Group Y mean 150 SD 10. Which CV comparison is correct?", options: ["X has larger CV", "Y has larger CV", "equal CVs", "CV undefined"], answer: 1, difficulty: 3, explanation: "CV = σ/x̄: X 10/170 ≈ 5.9%, Y 10/150 ≈ 6.7% — the shorter group is relatively more variable." }
  ]
};

Lessons["g12-mathematics-um3-t3"] = {
  overview: "Position statistics slice a sorted data set into equal-count parts — quartiles into four, deciles into ten, percentiles into hundred. Read off a cumulative-frequency curve (ogive) and you can locate any position without the raw values, plus flag genuine outliers with the 1.5×IQR rule.",
  objectives: [
    "Locate quartiles Q₁, Q₂, Q₃ and the interquartile range",
    "Interpolate percentiles and deciles for raw data",
    "Read positions from a cumulative frequency graph (ogive)",
    "Compute and interpret the semi-interquartile range",
    "Detect outliers with the 1.5×IQR fence rule"
  ],
  simple: "<b>Where does a value sit in the line?</b> Sort the data; Q₂ is the median (50% below); Q₁ is the median of the lower half (25%), Q₃ of the upper half (75%). The <b>IQR = Q₃ − Q₁</b> is the width of the middle 50% — an outlier-proof range. A <b>percentile</b> Pₖ means k% of values fall at or below. Percentile ≠ percentage score: a mark at the 80th percentile just means you beat 80% of the cohort.",
  detailed: "<p><b>Quartiles by position.</b> Ordered data 1..10: 1,2,3,4,5,6,7,8,9,10. Median Q₂ = (5+6)/2 = 5.5. Lower half 1–5 → Q₁ = 3; upper half 6–10 → Q₃ = 8. IQR = 5. Position formulas you may also see: Q₁ at (n+1)/4, Q₃ at 3(n+1)/4 — with interpolation when the position is fractional (position 3.25 means a quarter of the way from the 3rd to the 4th value).</p><p><b>Deciles and percentiles.</b> Dₖ is the 10k-th percentile: D₄ = P₄₀. The P₉₀ of exam marks says 90% scored at or below that value. For large data the position formula k(n+1)/100 finds the spot; report interpolated values to one decimal.</p><p><b>The ogive.</b> Plot cumulative frequency against the UPPER class boundary and connect — the curve rises left-to-right, and to read any position go in sideways: find the count you want (e.g. the 50% point = n/2), travel horizontally to the curve, drop vertically for the value. Median, quartiles and percentiles all fall out of the same gesture: Q₁ at n/4, Q₃ at 3n/4.</p><p><b>Semi-interquartile range</b> = IQR/2: a single-number 'typical distance from the median' for the middle half, handy when quoting skewed data. Box plots draw it all at once: the box spans Q₁→Q₃ with the median line inside, whiskers reach the fences, dots beyond them are outliers.</p><p><b>Outlier fences.</b> A value is flagged if it is below Q₁ − 1.5·IQR or above Q₃ + 1.5·IQR. For Q₁ = 3, Q₃ = 8, IQR = 5: lower fence 3 − 7.5 = −4.5, upper fence 8 + 7.5 = 15.5. The rule's magic: it scales with the data's own middle spread, so the same fence logic flags a 100 kg error in rice bags and ignores it in elephant weights.</p>",
  keyTerms: [
    { term: "Quartile", def: "Q₁ (25%), Q₂ (median, 50%), Q₃ (75%)" },
    { term: "Interquartile range", def: "IQR = Q₃ − Q₁ — spread of the middle half" },
    { term: "Decile", def: "Tenths of the ordered data: D₁ … D₉" },
    { term: "Percentile", def: "Pₖ: k% of values at or below this point" },
    { term: "Ogive", def: "Cumulative-frequency curve read sideways for positions" },
    { term: "Outlier fence", def: "Q₁ − 1.5·IQR and Q₃ + 1.5·IQR" }
  ],
  formulas: [
    {
      name: "IQR and fences",
      formula: "IQR = Q₃ − Q₁; outlier if x < Q₁ − 1.5·IQR or x > Q₃ + 1.5·IQR",
      meaning: "Middle-50% width, and Tukey's standard outlier test",
      vars: [{ name: "1.5", meaning: "the fence multiplier (3 would mark only 'far out' values)" }],
      when: "Any box-plot or data-hygiene question"
    },
    {
      name: "Semi-interquartile range",
      formula: "SIQR = (Q₃ − Q₁)/2",
      meaning: "Half the middle-spread — one number for skew-proof variability",
      vars: [{ name: "SIQR", meaning: "same units as the data" }],
      when: "Quoting spread of skewed distributions"
    },
    {
      name: "Ogive position",
      formula: "median at n/2, Q₁ at n/4, Q₃ at 3n/4",
      meaning: "Read the cumulative count horizontally to the curve, then down",
      vars: [{ name: "n", meaning: "total frequency Σf" }],
      when: "Grouped data where raw values are gone"
    }
  ],
  workedExamples: [
    {
      problem: "Find Q₁, Q₂, Q₃ and the IQR of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.",
      given: "n = 10 (even)",
      substitution: "Q₂ = (5+6)/2; lower half {1..5}, upper half {6..10}",
      calculation: "Q₁ = 3, Q₂ = 5.5, Q₃ = 8",
      answer: "IQR = 8 − 3 = 5"
    },
    {
      problem: "An ogive for 80 students reaches cumulative 40 at height 62 marks. State the median.",
      formula: "median at n/2 = 40th student",
      substitution: "travel 40 across to curve, drop to axis",
      calculation: "the drop lands at 62",
      answer: "Median = 62 marks"
    },
    {
      problem: "Data has Q₁ = 3, Q₃ = 8. Is the value 17 an outlier?",
      formula: "upper fence = Q₃ + 1.5·IQR",
      given: "IQR = 5",
      substitution: "8 + 1.5(5) = 15.5",
      calculation: "17 > 15.5",
      answer: "Yes — beyond the upper fence"
    },
    {
      problem: "Scores 72, 75, 80, 84, 86, 90, 95 (n = 7). Find the 50th percentile and the semi-interquartile range.",
      given: "odd n, middle is 4th value = 84; halves are 72,75,80 and 86,90,95 → Q₁ = 75, Q₃ = 90",
      calculation: "P₅₀ = median = 84; IQR = 15; SIQR = 7.5",
      answer: "P₅₀ = 84, SIQR = 7.5"
    }
  ],
  commonMistakes: [
    "Confusing percentile with percentage: the 80th percentile is a rank position, not a score of 80%",
    "Plotting an ogive at lower class boundaries or midpoints — cumulative frequency always uses UPPER boundaries",
    "Reading the ogive vertically (value → count) when asked for a position; the arrow must go count-first, horizontally",
    "Halving the range instead of the IQR for the semi-interquartile range",
    "Deleting an 'outlier' from a data set without justification — fences flag suspects, they don't convict"
  ],
  applications: [
    "Growth charts: a baby's weight at the 15th percentile is position statistics saving parents from panic about 'average'",
    "Salary surveys publish quartiles (and never the range) because the middle-half and fences tell the honest story",
    "Box plots on exam reports instantly show which class sits lower and where the one impossible score hides",
    "Factory sensors auto-flag readings beyond fence lines — same rule as Tukey's, running live"
  ],
  summary: "Quartiles split sorted data into quarters; IQR = Q₃ − Q₁ guards the middle 50% and feeds the 1.5× outlier fences. Deciles and percentiles are the same idea at tenths and hundredths, positions found via k(n+1)/100. Ogives read positions for grouped data: horizontal to the curve at n/2, n/4, 3n/4. SIQR = half of IQR — the skew-proof one-number spread.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The median equals which quartile?", options: ["Q₁", "Q₂", "Q₃", "D₅ only"], answer: 1, difficulty: 1, explanation: "Q₂ is the 50% point — the median itself." },
    { type: "mcq", q: "The IQR is:", options: ["Q₃ + Q₁", "max − min", "Q₃ − Q₁", "mean − median"], answer: 2, difficulty: 1, explanation: "The width of the middle half by definition." },
    { type: "mcq", q: "Q₁ = 20, Q₃ = 40. The upper outlier fence is:", options: ["60", "70", "80", "50"], answer: 1, difficulty: 2, explanation: "40 + 1.5(40 − 20) = 40 + 30 = 70." },
    { type: "mcq", q: "On an ogive, the median is read at cumulative frequency:", options: ["n", "n/2", "n/4", "Σfx/Σf"], answer: 1, difficulty: 2, explanation: "Half the observations lie below the median." },
    { type: "mcq", q: "D₃ is the same point as percentile:", options: ["P₃", "P₃₀", "P₆", "P₈₀"], answer: 1, difficulty: 2, explanation: "The 3rd decile = 30th percentile." },
    { type: "mcq", q: "For 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, the SIQR is:", options: ["5", "2.5", "10", "7.5"], answer: 1, difficulty: 2, explanation: "Q₁ = 3, Q₃ = 8 → IQR = 5 → SIQR = 2.5." },
    { type: "mcq", q: "In a box plot, the line inside the box shows the:", options: ["mean", "midpoint of Q₁ and Q₃", "median", "mode"], answer: 2, difficulty: 3, explanation: "The median line — when it sits off-centre the distribution is skewed." },
    { type: "mcq", q: "Scores 12, 15, 18, 20, 22, 25, 60 (n = 7). The 60 is flagged as an outlier because the upper fence with Q₁ = 15, Q₃ = 25 is:", options: ["25", "30", "40", "45"], answer: 2, difficulty: 3, explanation: "Fence = 25 + 1.5(10) = 40 < 60 — suspect indeed." }
  ]
};

Lessons["g12-mathematics-um3-t4"] = {
  overview: "Two variables, one question: do they move together? The correlation coefficient r measures the strength and direction of a straight-line relationship, and the least-squares regression line makes the relationship predictive. This lesson builds both from scatter plots to worked equations.",
  objectives: [
    "Read a scatter plot for direction, strength, and form",
    "Compute and interpret Pearson's correlation coefficient r",
    "Distinguish correlation from causation and spot spurious links",
    "Fit the least-squares regression line ŷ = a + bx",
    "Use the regression line for prediction, inside and beyond the data range"
  ],
  simple: "<b>r is the straight-line score.</b> r = +1 perfect rising line, −1 perfect falling line, 0 no linear pattern. In between: |r| ≥ 0.8 is strong, 0.5–0.8 moderate, under 0.3 weak — and sign says direction. The regression line ŷ = a + bx is the single best-fitting straight line; b (slope) says how much y moves per unit of x. Hot dogs sold and sunglasses sold correlate +0.9 — not because one causes the other, but because summer causes both: r never proves causation.",
  detailed: "<p><b>Scatter first.</b> Plot every (x, y) pair. Trend up → positive; down → negative; cloud → none; curved band → related but NOT linear (r can be misleadingly near 0 for a strong parabola). Always eyeball before computing.</p><p><b>Pearson's r.</b> r = Σ(x−x̄)(y−ȳ) / √[Σ(x−x̄)² · Σ(y−ȳ)²]. Each term multiplies the two deviations of a point — points agreeing with the trend add positive weight, disagreeing points subtract. r is unitless and scale-free (coding x or y leaves it unchanged) and lives in [−1, 1]. A worked set: x = 1..5, y = 2, 4, 5, 4, 5 → x̄ = 3, ȳ = 4, Σ(x−x̄)(y−ȳ) = 4, Σ(x−x̄)² = 10, Σ(y−ȳ)² = 4+0+1+0+1 = 6, r = 4/√60 ≈ 0.52: moderate positive.</p><p><b>Least-squares line.</b> b = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)² (slope: the covariance ÷ x's variance), a = ȳ − b·x̄. The line passes through (x̄, ȳ) always. Worked: study hours vs marks for 5 students, x = 1, 2, 3, 4, 5 and y = 2, 4, 5, 4, 5 → b = 4/10 = 0.4, a = 4 − 0.4·3 = 2.8 → ŷ = 2.8 + 0.4x. Prediction: 7 hours → ŷ = 5.6 marks. Interpolating inside the observed x-range is respectable; extrapolating far outside it is gambling — the relationship may bend, end, or never have been linear at all.</p><p><b>Causation trap.</b> Three honest reasons two things correlate: x causes y, y causes x, or a third variable z causes both (ice-cream sales and drownings share summer). Even a perfect r = 1 licenses only 'they move together.' A <b>spurious correlation</b> is a correlation with no meaningful mechanism at all — the famous 'cheese consumption vs PhDs' chart is a meme made from exactly this arithmetic.</p><p><b>Caution on r².</b> Squaring r gives the fraction of y's variation the line explains: r = 0.8 ⇒ r² = 0.64 — 64% explained, 36% still mystery. r = 0.5 already means only a quarter of the pattern is captured, which is why 'moderate' correlations rarely make good single-variable forecasts.</p>",
  keyTerms: [
    { term: "Correlation", def: "A straight-line association between two variables" },
    { term: "Pearson's r", def: "The −1..1 number measuring linear strength and direction" },
    { term: "Regression line", def: "ŷ = a + bx, the least-squares best line through the cloud" },
    { term: "Slope b", def: "Change in predicted y per unit change in x" },
    { term: "Interpolation", def: "Predicting inside the observed x-range (safer)" },
    { term: "Extrapolation", def: "Predicting outside the range (assumes the trend survives)" },
    { term: "r²", def: "Proportion of y's variation explained by the line" }
  ],
  formulas: [
    {
      name: "Pearson correlation",
      formula: "r = Σ(x−x̄)(y−ȳ) / √[Σ(x−x̄)²Σ(y−ȳ)²]",
      meaning: "Agreement of paired deviations, normalized to −1..1",
      vars: [{ name: "(x̄, ȳ)", meaning: "the mean point every line passes through" }],
      when: "Any bivariate table; check linearity with a scatter first"
    },
    {
      name: "Least-squares regression",
      formula: "b = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)², a = ȳ − b·x̄",
      meaning: "The line minimizing total squared vertical misses",
      vars: [{ name: "ŷ", meaning: "the predicted value at a given x" }],
      when: "Prediction, or when asked for 'the equation of the line of best fit'"
    },
    {
      name: "Coefficient of determination",
      formula: "r² = (r)²",
      meaning: "Share of y's variability the model explains",
      vars: [{ name: "r", meaning: "the Pearson coefficient" }],
      when: "Judging whether the line is worth using at all"
    }
  ],
  workedExamples: [
    {
      problem: "x = 1, 2, 3, 4, 5 and y = 2, 4, 5, 4, 5. Find r.",
      given: "x̄ = 3, ȳ = 4",
      substitution: "Σ(x−x̄)(y−ȳ) = (−2)(−2)+(−1)(0)+(0)(1)+(1)(0)+(2)(1) = 4; Σ(x−x̄)² = 4+1+0+1+4 = 10; Σ(y−ȳ)² = 4+0+1+0+1 = 6",
      calculation: "r = 4/√(10·6) = 4/√60 ≈ 0.516",
      answer: "r ≈ 0.52 — moderate positive linear association"
    },
    {
      problem: "For the same data, find the regression line.",
      formula: "b = 4/10, a = ȳ − b·x̄",
      substitution: "b = 0.4; a = 4 − 0.4·3",
      calculation: "a = 2.8",
      answer: "ŷ = 2.8 + 0.4x"
    },
    {
      problem: "Predict y at x = 4 and x = 9; rate the confidence of each.",
      formula: "ŷ = 2.8 + 0.4x",
      substitution: "ŷ(4) = 4.4; ŷ(9) = 6.4",
      calculation: "x = 4 sits inside 1–5 (interpolation); x = 9 is far outside (extrapolation)",
      answer: "4.4 is credible; 6.4 is a guess about a trend we cannot see"
    },
    {
      problem: "A study finds r = 0.9 between ice-cream sales and drownings. Give the regression-free verdict.",
      given: "r ≈ 0.9, both variables seasonal",
      calculation: "a lurking variable (summer heat) drives both independently",
      answer: "Strong correlation, no plausible causation — a textbook spurious pair"
    }
  ],
  commonMistakes: [
    "Reading any correlation as causation — ice cream does not cause drowning",
    "Reporting r for a curved relationship; a strong parabola can score r ≈ 0",
    "Swapping which variable is response y in the regression line — the line depends on the choice",
    "Trusting extrapolations: 'trend continues' is an assumption, not a finding",
    "Confusing r = 0.5 with 'half a relationship' — only r² = 0.25 is explained"
  ],
  applications: [
    "Agriculture: rainfall vs teff yield regression guides planting decisions (and warns: correlation without irrigation mechanism ≠ causation)",
    "Education research: attendance vs grade correlations justify interventions but never single-variable determinism",
    "Business: advertising spend vs sales fits a line whose slope IS the marginal return per birr",
    "Medicine: dose-response studies report r and r² before a drug's linear model is trusted at all"
  ],
  summary: "Scatter first, then r: Pearson's r lives in [−1, 1], is scale-free, and only scores straight-line association. The least-squares line ŷ = a + bx passes through the mean point; b = covariance ÷ x-variance; a = ȳ − bx̄. Interpolate with some trust, extrapolate with none, and remember r² — plus the eternal rule: correlation is not causation.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A correlation coefficient of −0.9 indicates:", options: ["weak negative", "strong negative", "causation", "no relationship"], answer: 1, difficulty: 1, explanation: "|r| near 1 = strong; the minus = inverse direction." },
    { type: "mcq", q: "The regression line always passes through:", options: ["(0, 0)", "(x̄, ȳ)", "(max x, max y)", "(Q₁, Q₃)"], answer: 1, difficulty: 1, explanation: "a = ȳ − bx̄ guarantees ŷ(x̄) = ȳ." },
    { type: "mcq", q: "All values of x and y are doubled. The r becomes:", options: ["4r", "2r", "unchanged", "r/2"], answer: 2, difficulty: 2, explanation: "r is scale-free — the ratio of deviations cancels any unit change." },
    { type: "mcq", q: "For the line ŷ = 2.8 + 0.4x, each extra hour of study predicts +", options: ["2.8 marks", "0.4 marks", "3.2 marks", "4 marks"], answer: 1, difficulty: 2, explanation: "The slope 0.4 is the per-unit effect." },
    { type: "mcq", q: "r = 0.8 explains what share of y's variation?", options: ["80%", "64%", "20%", "40%"], answer: 1, difficulty: 2, explanation: "r² = 0.64 → 64% explained by the line." },
    { type: "mcq", q: "A perfect circle of points has r closest to:", options: ["1", "−1", "0", "0.5"], answer: 2, difficulty: 2, explanation: "Symmetric no preferred line: linear association cancels — r ≈ 0 despite obvious structure (a trap that proves 'scatter first')." },
    { type: "mcq", q: "x̄ = 3, ȳ = 5, b = 2. The intercept a is:", options: ["−1", "1", "11", "6"], answer: 0, difficulty: 3, explanation: "a = ȳ − b·x̄ = 5 − 6 = −1." },
    { type: "mcq", q: "Height vs shoe size r = 0.6. A valid conclusion is:", options: ["big feet cause height", "taller people tend to have larger feet", "shoe size determines height", "no relationship"], answer: 1, difficulty: 3, explanation: "Moderate positive association — direction without mechanism; body size drives both." }
  ]
};
