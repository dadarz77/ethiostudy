/* Content: Grade 9 Mathematics — Unit 9: Statistics and Probability (3 topics) */
window.Lessons = window.Lessons || {};

Lessons["g9-mathematics-um9-t1"] = {
  overview: "Statistics starts with asking good questions and collecting honest data — then summarizing it with measures of center and spread that tell the truth (not distort it).",
  objectives: [
    "Distinguish types of data and design unbiased surveys",
    "Compute mean, median, mode and range from raw and grouped lists",
    "Choose the right measure of center for the situation",
    "Detect how outliers distort mean vs median",
    "Organize data in frequency tables"
  ],
  simple: "Data is numbers with a story. Three ways to find the 'middle': <b>mean</b> (add up, divide by count), <b>median</b> (sort, take the middle — average the two middle values if the count is even), <b>mode</b> (most common). Spread: <b>range</b> = max − min. The trap: one giant outlier drags the MEAN but barely moves the MEDIAN — house prices with a mansion in the village. Collect data fairly first: random samples, no leading questions, or the best math on biased data is still garbage.",
  detailed: "<p><b>Data types</b>: quantitative (numerical — discrete like goals scored, continuous like heights) vs categorical (labels — blood type). Survey design: define the population, draw a <b>random sample</b> (each member equally likely), avoid leading wording, and mind response and non-response bias. Sample size matters — but representativeness matters more; a biased 10,000 loses to a fair 200.</p><p>The <b>mean</b> x̄ = Σx / n — every value contributes, hence its outlier-weakness. The <b>median</b>: sort ascending; odd n → middle; even n → average of the two central values — it splits the data's COUNT in half, so extremes can't jerk it. The <b>mode</b>: the most frequent value; the only measure for categorical data ('most popular subject'), and it can be absent or multiple (bimodal). <b>Range</b> = max − min: crude spread using only the endpoints.</p><p>Choosing: salaries, house prices, test scores with a stray zero → median (robust). Evenly-spread measurements (heights) → mean (uses all data, best for further algebra). Fashion stock planning → mode. When a dataset has an outlier, quote the median as 'typical' and mention the outlier's effect on the mean explicitly.</p><p><b>Frequency tables</b> compress repeats: value x with frequency f. The mean becomes Σfx / Σf. Adding a new datum shifts totals: new mean = (old total + new value)/(n+1) — a favorite exam equation. Removing works the same in reverse. Interpolating a median position: the median sits at position (n+1)/2 in the sorted list; with a cumulative frequency column you read the class containing it.</p><p>Worked intuition: data {2, 3, 3, 5, 100} has mean 22.6 but median 3 — the mean describes almost nothing in the list. Conversely, the mean carries the 'fair share' property: 22.6 is the flat water level if the values were a lumpy surface. Both readings are legitimate; the question decides which summary is HONEST.</p>",
  keyTerms: [
    { term: "Population vs sample", def: "All members vs a representative subset studied" },
    { term: "Mean x̄", def: "Σx / n — the arithmetic average" },
    { term: "Median", def: "Middle of the sorted list ((n+1)/2-th position)" },
    { term: "Mode", def: "Most frequent value; for categories too" },
    { term: "Range", def: "Max − min; endpoint spread" },
    { term: "Frequency table", def: "Values with counts; mean = Σfx/Σf" },
    { term: "Outlier", def: "A value far outside the pattern; wrecks the mean" }
  ],
  formulas: [
    {
      name: "Center and spread",
      formula: "x̄ = Σx/n · median at (n+1)/2-th sorted position · range = max − min",
      meaning: "One average, one middle, one width",
      when: "Summarizing any univariate dataset"
    },
    {
      name: "Weighted mean from a frequency table",
      formula: "x̄ = Σfx / Σf",
      meaning: "Each value counts as many times as its frequency",
      when: "Compressed data lists"
    }
  ],
  workedExamples: [
    {
      problem: "Find mean, median, mode, range of: 4, 7, 3, 7, 9, 7, 2.",
      calculation: "sorted: 2,3,4,7,7,7,9; Σ = 39, n = 7",
      answer: "mean 39/7 ≈ 5.57 · median 7 · mode 7 · range 7"
    },
    {
      problem: "The mean of 5 numbers is 12. Adding a sixth makes the mean 13. What was added?",
      formula: "new = 6·13 − 5·12",
      answer: "78 − 60 = 18"
    },
    {
      problem: "Scores {60, 62, 64, 66, 100}. Which center best represents 'typical'? Justify.",
      calculation: "mean = 70.4 vs median = 64; the 100 lifts the mean",
      answer: "Median — robust to the single high outlier"
    },
    {
      problem: "Frequency table: x = 0,1,2,3 with f = 2,5,4,1. Mean?",
      calculation: "Σfx = 0+5+8+3 = 16; Σf = 12",
      answer: "16/12 ≈ 1.33"
    }
  ],
  commonMistakes: [
    "Median without SORTING first",
    "Even-count median: taking one of the two middle values instead of their average",
    "Averaging the two central values of an UNSORTED list",
    "Reporting the mean of skewed data (salaries!) as 'typical'",
    "Confusing mode with median for categories ('most common' ≠ 'middle')",
    "Frequency-table mean: dividing Σfx by number of ROWS, not Σf"
  ],
  applications: [
    "Economics: median household income is quoted, not mean — billionaires skew averages",
    "Sports analytics: batting averages, scoring distributions, selection decisions",
    "Public health: outbreak data summarized by median incubation, mode of symptom",
    "Education: grade curves and test reports use mean + range to compare classes"
  ],
  summary: "Collect honestly (random, unbiased), then summarize: mean Σx/n (outlier-sensitive), median (sorted middle, robust), mode (frequency, categorical-safe), range (spread). Frequency tables use Σfx/Σf. Pick the measure that matches the shape of the data and the question being asked.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Data: 5, 1, 3, 9, 2. The median is:", options: ["3", "4", "5", "2"], answer: 0, difficulty: 1, explanation: "Sort: 1,2,3,5,9 → middle is 3." },
    { type: "mcq", q: "Data: 2, 4, 6, 8. Median:", options: ["4", "5", "6", "4.5"], answer: 1, difficulty: 1, explanation: "Even count → average of the middle pair (4+6)/2 = 5." },
    { type: "mcq", q: "Mean of 3, 3, 4, 10:", options: ["4", "5", "10", "3"], answer: 1, difficulty: 1, explanation: "20/4 = 5." },
    { type: "mcq", q: "Which is most affected by one extreme outlier?", options: ["median", "mode", "mean", "range only"], answer: 2, difficulty: 2, explanation: "The mean absorbs the outlier's full weight; range changes too but it isn't a 'center'." },
    { type: "mcq", q: "A shop restocks the size bought MOST. It uses:", options: ["mean", "median", "mode", "range"], answer: 2, difficulty: 2, explanation: "Most frequent purchase = mode." },
    { type: "mcq", q: "5 players average 14 points; the 6th scores 8. New mean:", options: ["13", "14", "12", "15"], answer: 0, difficulty: 2, explanation: "(70 + 8)/6 = 13." },
    { type: "mcq", q: "For 'favorite color' data, the only valid center is:", options: ["mean", "median", "mode", "range"], answer: 2, difficulty: 1, explanation: "Categorical data has no order or sum — frequency only." },
    { type: "mcq", q: "Σfx = 40, Σf = 10. The mean is:", options: ["400", "4", "30", "50"], answer: 1, difficulty: 1, explanation: "40/10 = 4." }
  ]
};

Lessons["g9-mathematics-um9-t2"] = {
  overview: "Charts turn numbers into pictures — but each chart type answers a different question, and a sloppy axis can lie. Choose, read, and draw them honestly.",
  objectives: [
    "Match data to the right chart: bar, pie, histogram, line graph",
    "Read frequencies and proportions from charts",
    "Construct pie charts with correct sector angles",
    "Use histograms for grouped continuous data",
    "Spot misleading-graph tricks (broken axes, 3D distortion)"
  ],
  simple: "<b>Bar charts</b> compare categories (heights = counts). <b>Pie charts</b> show parts of a whole (slice angle = proportion × 360°). <b>Histograms</b> are for continuous measurements binned into intervals — area = frequency, no gaps between bars. <b>Line graphs</b> track change over time. The sin: chopping the axis off at 90% makes a 1% wobble look like a crash. A good chart answers a question honestly at a glance.",
  detailed: "<p><b>Bar charts</b>: categorical or discrete data; equal-width bars, separated by gaps, heights = frequency. Multiple or side-by-side bars compare groups (boys vs girls per subject). <b>Pie charts</b>: convert each frequency to a share of the total, then to degrees: sector = (f/Σf)·360°. Sanity check: angles must total 360°, percentages 100%. <b>Line graphs</b>: points joined over a time axis — trends, interpolating between known points, NEVER extrapolating wildly beyond the data.</p><p><b>Histograms</b> bin continuous data (heights 150–155, 155–160,…). Equal-width bins: bar HEIGHT = frequency. Unequal widths: bar AREA = frequency (frequency density = f/width) — otherwise wide bins fake tall mass. Bins touch: no gaps, because the variable is continuous; a reading on a boundary follows the convention (lower bound inclusive).</p><p><b>Frequency polygons</b> trace the midpoints of histogram tops — shape comparison at a glance for two datasets. <b>Stem-and-leaf plots</b> keep raw values visible (2 | 3 means 23): small datasets, easy medians, and both groups in back-to-back versions.</p><p>Misleading-graph catalogue: truncated y-axis (magnifies differences), non-zero baselines on comparisons, 3D pie slices (front slices look bigger by perspective alone), unequal bar widths with heights still compared, picture-scaling (radius doubles → area quadruples → impressions ×4), cherry-picked time windows. Media-literacy habit: before reading the story, read the AXIS — origin, units, scale breaks, sampling period.</p><p>Drawing craft: title, labeled axes with units, consistent scale, key/legend for multi-series. A chart without a y-axis label is a guess waiting to happen. When two datasets need comparison, dual bar or dual line on the SAME axes beats two separate charts.</p>",
  keyTerms: [
    { term: "Bar chart", def: "Category comparison by equal-width separated bars" },
    { term: "Pie chart", def: "Parts of a whole; sector angle = proportion × 360°" },
    { term: "Histogram", def: "Grouped continuous data; touching bars, area = frequency" },
    { term: "Frequency density", def: "f / class width — needed for unequal bins" },
    { term: "Frequency polygon", def: "Line through bin midpoints" },
    { term: "Truncated axis", def: "Cut-off scale that exaggerates differences" }
  ],
  formulas: [
    {
      name: "Pie sector angle",
      formula: "θ = (f / Σf) × 360°",
      meaning: "Proportion of data = proportion of the circle",
      when: "Converting frequencies to pie slices"
    }
  ],
  workedExamples: [
    {
      problem: "20 students: Math 8, English 6, Biology 4, Other 2. Pie angles?",
      calculation: "8/20·360 = 144°, 6/20 → 108°, 4/20 → 72°, 2/20 → 36°",
      answer: "144 + 108 + 72 + 36 = 360 ✓"
    },
    {
      problem: "Histogram bin 150–160 has 12 people; bin 160–180 has 18. Bar heights?",
      formula: "equal width → height = f; unequal → density = f/width",
      calculation: "160–180 is double width → height 18/2 = 9 units",
      answer: "Heights 12 and 9 (widths 10 and 20)"
    },
    {
      problem: "A 'sales doubled!' bar chart starts its axis at 95,000. Why suspect?",
      answer: "Truncated baseline: the visible jump exaggerates a change that is small relative to total sales"
    }
  ],
  commonMistakes: [
    "Pie chart sectors from raw frequencies without dividing by the total",
    "Histograms with gaps between bins (that's for categories, not continuous data)",
    "Reading a 3D pie's front slice as larger than its angle says",
    "Line graphs connecting categorical points (lines imply continuous change)",
    "Forgetting units/labels on axes, making the chart unreviewable",
    "Comparing dual bars with unequal widths"
  ],
  applications: [
    "News & politics: every policy argument comes with a chart — literacy is defense",
    "Business dashboards: revenue lines, product mix pies, cost histograms",
    "Science: histograms of measurements reveal distributions before modeling",
    "Education: cohort score reports as box-and-bar comparisons year over year"
  ],
  summary: "Match chart to question: bars for categories, pies for shares (θ = f/Σf × 360°), histograms for binned continuous data (area = frequency, density = f/width), lines for trends. Audit axes first — truncated baselines and 3D tricks lie visually while the numbers sit 'correctly'.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Best chart for 'parts of a whole'?", options: ["bar", "pie", "line", "histogram"], answer: 1, difficulty: 1, explanation: "Pie sectors show proportion of total." },
    { type: "mcq", q: "A sector for 15 out of 60 students spans:", options: ["15°", "60°", "90°", "105°"], answer: 2, difficulty: 2, explanation: "15/60 × 360 = 90°." },
    { type: "mcq", q: "Histograms differ from bar charts because:", options: ["they use color", "bars touch (continuous bins)", "they are rounder", "only for two groups"], answer: 1, difficulty: 2, explanation: "Continuous bins share boundaries — no gaps." },
    { type: "mcq", q: "A bin of width 20 holds 40 units. Its frequency density is:", options: ["40", "2", "20", "800"], answer: 1, difficulty: 2, explanation: "40/20 = 2 per unit width." },
    { type: "mcq", q: "Which hides that a 1% change is tiny?", options: ["a zero-based line chart", "a truncated axis zooming the last 2%", "a pie chart", "raw table"], answer: 1, difficulty: 2, explanation: "Cutting the baseline magnifies noise into drama." },
    { type: "mcq", q: "Temperature over a month is best shown by:", options: ["bar chart", "pie chart", "line graph", "pictogram"], answer: 2, difficulty: 1, explanation: "Continuous time trend → line." },
    { type: "mcq", q: "In a pie, two sectors are 120° and 90°. Their shares of the data:", options: ["1/3 and 1/4", "2/3 and 1/4", "1/3 and 1/5", "120 and 90"], answer: 0, difficulty: 2, explanation: "120/360 = 1/3, 90/360 = 1/4." },
    { type: "mcq", q: "Unequal-width histogram bars must encode frequency by:", options: ["height alone", "area", "color depth", "bar count"], answer: 1, difficulty: 3, explanation: "Area = f; height alone misleads on wide bins." }
  ]
};

Lessons["g9-mathematics-um9-t3"] = {
  overview: "Probability quantifies chance — from dice rolls to weather forecasts. Count equally-likely outcomes, combine events with sum and product rules, and check every answer lives between 0 and 1.",
  objectives: [
    "Compute theoretical probability by counting outcomes",
    "Use sample spaces, tree diagrams and tables for combined events",
    "Apply the addition rule for 'or' and multiplication for 'and'",
    "Distinguish independent from dependent events",
    "Contrast theoretical with experimental probability"
  ],
  simple: "P(event) = <b>favorable outcomes ÷ total outcomes</b>, when every outcome is equally likely. A die: P(4) = 1/6; P(even) = 3/6 = 1/2. Combining: 'OR' usually ADDS the probabilities (roll a 4 or a 6: 1/6 + 1/6 = 1/3); 'AND' usually MULTIPLIES (two coins both heads: 1/2 × 1/2 = 1/4). One exception to each rule: events that can overlap (don't double-count the overlap), and events that affect each other (drawing cards without replacement changes the odds).",
  detailed: "<p>Sample space Ω = all outcomes; an event is a subset. For equally likely outcomes, <b>P(A) = n(A)/n(Ω)</b>. A fair die: |Ω| = 6. Two dice: |Ω| = 36 (list as ordered pairs — sum-7 has 6 pairs, so P(sum 7) = 6/36 = 1/6; sum-2 has one pair). Complements: P(not A) = 1 − P(A) — the 'at least one' shortcut: P(at least one six in two rolls) = 1 − (5/6)² = 11/36.</p><p><b>Addition rule</b>: P(A or B) = P(A) + P(B) − P(A and B); for mutually exclusive events (can't co-occur — a die showing 4 and 6) the intersection vanishes and you just add. <b>Multiplication rule</b>: P(A and B) = P(A)·P(B|A); for INDEPENDENT events P(B|A) = P(B) and it collapses to P(A)·P(B). Coin flips and dice are independent; card draws are only independent WITH replacement — without it, the second draw's denominator shrinks and its composition depends on the first.</p><p>Tree diagrams multiply along branches and add across equal totals; tables enumerate paired experiments (two dice, one die + one coin). Dependent chains: bag with 5 red, 3 blue, draw two without replacement → P(RR) = 5/8·4/7 = 20/56; P(exactly one red) = 5/8·3/7 + 3/8·5/7 = 30/56. Always: enumerate, or reason carefully — 'and' multiplies, 'or' adds (minus the overlap), complement flips to 1 − …</p><p><b>Experimental probability</b>: relative frequency of an event over N trials estimates P; the law of large numbers says the estimate converges with N. A coin landing 7/10 heads is ordinary noise; 700/1000 would indict the coin. Theoretical probability predicts; experimental tests — when they disagree, suspect N too small or the model wrong (unfair die, biased wheel).</p><p>Scale check every answer: 0 ≤ P ≤ 1. Probabilities of impossible and certain events pin the ends (0 and 1). Odds language (next-level): odds in favor = P/(1−P) — bookmakers' dialect for the same numbers. And beware the gambler's fallacy: independent trials have no memory; a fair coin 'due' for tails does not exist.</p>",
  keyTerms: [
    { term: "Sample space Ω", def: "The set of all possible outcomes" },
    { term: "P(A)", def: "n(A)/n(Ω) for equally likely outcomes; 0 ≤ P ≤ 1" },
    { term: "Complement rule", def: "P(not A) = 1 − P(A)" },
    { term: "Mutually exclusive", def: "Cannot happen together: P(A or B) = P(A) + P(B)" },
    { term: "Independent", def: "P(A and B) = P(A)P(B); one gives no information about the other" },
    { term: "Dependent / without replacement", def: "Second probabilities change after the first draw" },
    { term: "Relative frequency", def: "Experimental probability = successes / trials" }
  ],
  formulas: [
    {
      name: "Classical probability",
      formula: "P(A) = favorable / total outcomes",
      meaning: "Valid only when outcomes are equally likely",
      when: "Fair dice, coins, spinners, random draws"
    },
    {
      name: "Combination rules",
      formula: "P(A∪B) = P(A) + P(B) − P(A∩B) · P(A∩B) = P(A)·P(B|A)",
      meaning: "Add for OR (minus overlap); multiply for AND (conditional-aware)",
      when: "Any compound event"
    }
  ],
  workedExamples: [
    {
      problem: "One die. P(number > 4)?",
      calculation: "favorable {5,6} → 2/6",
      answer: "1/3"
    },
    {
      problem: "Two coins flipped. P(exactly one head)?",
      formula: "HH, HT, TH, TT",
      calculation: "HT and TH → 2/4",
      answer: "1/2 (not 1/3 — HT and TH are distinct!)"
    },
    {
      problem: "Bag: 4 red, 6 blue. Draw two without replacement. P(both red)?",
      calculation: "4/10 · 3/9 = 12/90",
      answer: "2/15"
    },
    {
      problem: "Spinner red 1/5, blue 1/4. P(neither)?",
      formula: "1 − (1/5 + 1/4)",
      calculation: "1 − 9/20",
      answer: "11/20"
    }
  ],
  commonMistakes: [
    "Treating unordered outcomes as equally likely (HT vs TH — coins have 4 outcomes, not 3)",
    "Adding probabilities of OVERLAPPING events without subtracting the intersection",
    "Using P(A)P(B) when events DEPEND (cards without replacement)",
    "'At least one' counted directly (exhausting) instead of via 1 − P(none)",
    "Gambler's fallacy: believing streaks change future independent trials",
    "Assuming all outcomes are equally likely in a biased setup (a weighted spinner)"
  ],
  applications: [
    "Games & betting: house edges are probability arithmetic in disguise",
    "Weather: '30% chance of rain' is a calibrated probability statement",
    "Medicine: test sensitivity and false positives combined with Bayes-style reasoning",
    "Quality control: sampling inspection estimates defect rates (experimental probability)"
  ],
  summary: "Probability = favorable/total on equally-likely spaces (0 to 1). OR adds (minus overlap), AND multiplies (with conditional care: independent vs without-replacement). Complements power 'at least one': 1 − P(none). Experimental relative frequency estimates theory; disagreements mean small N or a broken model.",
  visuals: [],
  questions: [
    { type: "mcq", q: "P(rolling a 3 on a fair die):", options: ["1/2", "1/3", "1/6", "3/6"], answer: 2, difficulty: 1, explanation: "One favorable of six." },
    { type: "mcq", q: "P(head AND head on two fair coins):", options: ["1/2", "1/4", "3/4", "1"], answer: 1, difficulty: 1, explanation: "Independent: 1/2 × 1/2." },
    { type: "mcq", q: "A bag has 3 green, 7 yellow. P(not yellow):", options: ["7/10", "3/10", "3/7", "1/2"], answer: 1, difficulty: 1, explanation: "Green = not yellow; or 1 − 7/10." },
    { type: "mcq", q: "P(sum = 5 with two dice):", options: ["1/9", "1/6", "5/36", "1/12"], answer: 0, difficulty: 3, explanation: "(1,4),(2,3),(3,2),(4,1) → 4/36 = 1/9." },
    { type: "mcq", q: "Drawing an ace then a king (with replacement) from 52 cards is:", options: ["dependent", "independent", "impossible", "certain"], answer: 1, difficulty: 2, explanation: "Replacement restores the deck: 4/52 × 4/52." },
    { type: "mcq", q: "P(at least one 6 in two dice) is best found as:", options: ["1/6 + 1/6", "1 − (5/6)²", "(1/6)²", "2/6"], answer: 1, difficulty: 2, explanation: "Complement of 'no sixes'." },
    { type: "mcq", q: "A football lands heads 47/100 tosses. This is:", options: ["theoretical probability", "experimental relative frequency", "impossible", "biased by definition"], answer: 1, difficulty: 2, explanation: "Observed frequency — an estimate, not proof of bias." },
    { type: "mcq", q: "Which value can NEVER be a probability?", options: ["0", "0.99", "5/4", "1/4"], answer: 2, difficulty: 1, explanation: "Probabilities lie in [0, 1]; 5/4 = 1.25 is too big." }
  ]
};
