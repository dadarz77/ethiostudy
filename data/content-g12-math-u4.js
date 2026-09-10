/* Content: Grade 12 Mathematics — Unit 4: Integrals and Their Applications (7 topics) */
window.Lessons = window.Lessons || {};

Lessons["g12-mathematics-um4-t1"] = {
  overview: "The definite integral is an area machine. This lesson points it at regions: between a curve and the axis, between two curves, and across intervals where the curves trade places — with intersection algebra supplying the limits.",
  objectives: [
    "Compute areas under curves as definite integrals",
    "Set up ∫(upper − lower) dx for the region between two curves",
    "Find intersection points to determine integration limits",
    "Split regions when the upper/lower relationship changes",
    "Handle areas below the x-axis with sign care"
  ],
  simple: "<b>Stack the strips.</b> Area between two curves = integral of (top − bottom) across the overlap: each thin vertical strip is (upper − lower) tall and dx wide, and the integral stacks them. Between y = x² and y = 2x the curves meet at x = 0 and x = 2; there, 2x is on top, so Area = ∫₀² (2x − x²)dx = 4/3.",
  detailed: "<p><b>Curve vs axis.</b> ∫ₐᵇ f dx gives net area; where f ≥ 0 it is the plain area, but where f < 0 the integral is negative and the geometric area is its absolute value. Between curves: A = ∫ₐᵇ [f(x) − g(x)] dx where f is upper on [a, b]. Always test one sample point to see which curve is on top — and the answer must come out positive; a negative area means you flipped upper and lower.</p><p><b>Limits from intersections.</b> Solve f(x) = g(x). For y = x² and y = 2x: x² = 2x → x(x − 2) = 0 → x = 0, 2. Between the crossings the ordering never changes (swapping would require another meeting), which is why consecutive intersections bracket a single clean integral.</p><p><b>Split when they cross.</b> With y = x³ and y = x: equal at x = −1, 0, 1. On (−1, 0) the line is on top; on (0, 1) the cubic is. Area = ∫₋₁⁰ (x − x³)dx + ∫₀¹ (x³ − x)dx = ¼ + ¼ = ½. Symmetry often lets you compute one half and double it.</p><p><b>Horizontal thinking.</b> When curves are nicer as x in terms of y (e.g. x = y² and x = y + 2), integrate right − left with respect to y: A = ∫₋₁² [(y + 2) − y²] dy = 4½. The two philosophies give the same region — choose the one with fewer splits.</p><p><b>Exam shapes:</b> 'area enclosed by the parabola and the line' (intersections → upper-lower → evaluate); 'area of the region bounded by y = sin x and the axis on [0, 2π]' (two lobes, each π, total 2π — absolute values!); and multi-region pictures with shaded sub-parts.</p>",
  keyTerms: [
    { term: "Region between curves", def: "Area stacked from vertical strips (upper − lower)" },
    { term: "Intersection points", def: "Solutions of f = g; they set the limits" },
    { term: "Net vs geometric area", def: "∫ carries sign; true area sums absolute pieces" },
    { term: "Splitting the interval", def: "New integral per segment where the top changes" },
    { term: "Right − left", def: "Horizontal strips: integrate x = f(y) dy" }
  ],
  formulas: [
    {
      name: "Vertical strips",
      formula: "A = ∫ₐᵇ [f_upper(x) − g_lower(x)] dx",
      meaning: "Stack of (top − bottom) strip heights",
      vars: [{ name: "a, b", meaning: "intersection x-values (or stated bounds)" }],
      when: "Curves given as y = ...; one upper/lower order over [a,b]"
    },
    {
      name: "Horizontal strips",
      formula: "A = ∫ᶜᵈ [x_right(y) − x_left(y)] dy",
      meaning: "Same area, sliced sideways",
      vars: [{ name: "c, d", meaning: "intersection y-values" }],
      when: "When x = f(y) forms need fewer splits"
    }
  ],
  workedExamples: [
    {
      problem: "Find the area enclosed by y = x² and y = 2x.",
      given: "Intersections: x² = 2x → x = 0, 2; on (0,2), 2x > x² (test x = 1: 2 > 1)",
      formula: "A = ∫₀² (2x − x²) dx",
      substitution: "[x² − x³/3]₀²",
      calculation: "(4 − 8/3) − 0 = 4/3",
      answer: "4/3 square units"
    },
    {
      problem: "Area bounded by y = x³ and y = x.",
      given: "x³ = x → x = −1, 0, 1; line on top (−1,0), cubic on top (0,1)",
      formula: "A = ∫₋₁⁰(x − x³)dx + ∫₀¹(x³ − x)dx",
      substitution: "[x²/2 − x⁴/4]₋₁⁰ + [x⁴/4 − x²/2]₀¹",
      calculation: "(0 − (½ − ¼)) + (¼ − ½·1) magnitudes → ¼ + ¼",
      answer: "1/2 square unit (symmetric lobes: ¼ each)"
    },
    {
      problem: "Area between y = sin x and the x-axis over [0, 2π].",
      formula: "A = ∫₀^π sin x dx + |∫_π^{2π} sin x dx|",
      substitution: "[−cos x]₀^π = 2 and [−cos x]_π^{2π} = −2",
      calculation: "2 + 2",
      answer: "4 square units (net integral would wrongly say 0)"
    },
    {
      problem: "Area enclosed by x = y² and x = y + 2.",
      given: "y² = y + 2 → y = −1, 2; line right of parabola between",
      formula: "A = ∫₋₁² [(y + 2) − y²] dy",
      substitution: "[y²/2 + 2y − y³/3]₋₁²",
      calculation: "(2 + 4 − 8/3) − (½ − 2 + 1/3) = 22/6 − (−5/6)",
      answer: "9/2 = 4.5 square units"
    }
  ],
  commonMistakes: [
    "Integrating (f − g) with the curves swapped and reporting the negative as the answer",
    "Forgetting to split where curves cross mid-interval — each lobe needs its own integral",
    "Using the net integral as 'area' when equal lobes above and below the axis cancel (sin x over a full period!)",
    "Taking intersection limits from only the visible graph quadrant and missing a crossing at negative x",
    "Dropping absolute values for regions under the axis in curve-vs-axis problems"
  ],
  applications: [
    "Water reservoir cross-sections: the wetted area between the surface curve and the channel bottom is a between-curves integral",
    "Economics: consumer surplus is the area between the demand curve and the market price line",
    "Medicine: the region between two drug-concentration curves measures which treatment delivers more over time",
    "Land surveying: irregular plot boundaries modelled as curves get exact areas the ruler method only approximates"
  ],
  summary: "Area between curves = ∫(upper − lower) over the overlap, limits from solving f = g, split wherever the top changes, and absolute values for geometric area. Horizontal strips (right − left, dy) when the same region integrates more cleanly sideways.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The area between y = x and y = x² from 0 to 1 is:", options: ["1/6", "1/2", "1/3", "1/12"], answer: 0, difficulty: 1, explanation: "∫₀¹ (x − x²)dx = ½ − ⅓ = 1/6." },
    { type: "mcq", q: "The curves y = x² and y = 4 meet at x =", options: ["0 and 4", "±2", "±4", "2 only"], answer: 1, difficulty: 1, explanation: "x² = 4 → x = ±2 (the negative crossing is easy to forget)." },
    { type: "mcq", q: "For curves with upper f and lower g on [a, b], the area is:", options: ["∫(f + g)dx", "∫(f − g)dx", "∫f dx − g", "F(a) − F(b)"], answer: 1, difficulty: 1, explanation: "Stack of strip heights f − g by definition." },
    { type: "mcq", q: "Area bounded by y = x² and the line y = 2x is:", options: ["2/3", "4/3", "2", "8/3"], answer: 1, difficulty: 2, explanation: "Limits 0, 2: ∫₀² (2x − x²)dx = 4 − 8/3 = 4/3." },
    { type: "mcq", q: "The area of the region between y = cos x and the x-axis on [π/2, 3π/2] is:", options: ["0", "1", "2", "4"], answer: 2, difficulty: 2, explanation: "∫cos = sin|π/2→3π/2 = −1 − 1 = −2 → geometric area 2." },
    { type: "mcq", q: "The area enclosed by y = x² and y = 8 − x² is:", options: ["32/3", "64/3", "16", "128/3"], answer: 1, difficulty: 2, explanation: "Meet at x = ±2: ∫₋₂²(8 − 2x²)dx = 2[8x − 2x³/3]₀² = 2(16 − 16/3) = 64/3." },
    { type: "mcq", q: "The line y = x + 2 and the parabola y = x² enclose an area of:", options: ["9/2", "4", "7/2", "9"], answer: 0, difficulty: 3, explanation: "x² = x + 2 → x = −1, 2: ∫₋₁² (x + 2 − x²)dx = [x²/2 + 2x − x³/3] = (2 + 4 − 8/3) − (½ − 2 + 1/3·(−1)³ → careful) = 9/2." },
    { type: "mcq", q: "The total area between y = x³ − x and the x-axis over [−1, 1] is:", options: ["0", "1/2", "1", "3/4"], answer: 1, difficulty: 3, explanation: "Odd function: net 0. Lobes: ∫₀¹ |x³ − x|dx = [x⁴/4 − x²/2]₀¹ magnitude = ¼ each side → total ½." }
  ]
};

Lessons["g12-mathematics-um4-t2"] = {
  overview: "Spin a region around an axis and a solid appears. The disk method measures each coin-thin slice as π r² dx and integrates — turning areas of circles into volumes of vases, cones, and spheres.",
  objectives: [
    "Set up volumes of revolution about the x-axis with V = π∫y² dx",
    "Adapt the disk method to rotation about the y-axis",
    "Compute washers when the region leaves a hole (outer − inner)",
    "Verify results against known solids (cone, sphere, cylinder)",
    "Choose the slicing direction that simplifies the solid"
  ],
  simple: "<b>Loaves of coins.</b> Slice the solid perpendicular to the axis: each slice is a disk of radius = the curve's height y and thickness dx, volume πy² dx. Integrate the coins: V = π∫ₐᵇ y² dx. If the region starts away from the axis, each slice is a washer (a disk with a hole): π(R² − r²) dx.",
  detailed: "<p><b>Disk about x-axis.</b> Rotate y = f(x) from a to b. Cross-sections perpendicular to the x-axis are circles of radius f(x): V = π∫ₐᵇ f(x)² dx. Worked cone: y = x on [0, 2] spun about the x-axis gives V = π∫₀² x² dx = π·8/3 = 8π/3 — and geometry's ⅓πr²h with r = h = 2 agrees exactly. The square-root radius caution: if the curve is x = √y, the radius squared is simply y.</p><p><b>About the y-axis.</b> Same physics, new direction: slices perpendicular to the y-axis have radius = x-value, so V = π∫ₐᵇ x² dy (limits measured in y). The region's description may need inverting to x as a function of y — for x = y² the disk radius is y², giving V = π∫₀¹ y⁴ dy = π/5.</p><p><b>Washers.</b> When the rotating region lies between an outer curve R(x) and an inner r(x) (not touching the axis), each slice is a ring: V = π∫[R² − r²] dx. Example: between y = 4 and y = x² about the x-axis from 0 to 2: R = 4, r = x², V = π∫₀²(16 − x⁴)dx = π(32 − 32/5) = 128π/5.</p><p><b>Cross-check habit.</b> A rectangle spun about one edge must yield cylinder πr²h; a triangle yields a cone ⅓πr²h; y = √(a² − x²) about its diameter yields a sphere 4πa³/3. If your integral of a rectangle returns something else, the radius or limits are wrong — this sanity suite catches most setup errors.</p><p><b>Pick the easy knife.</b> The same solid can sometimes be sliced two ways (disk vs later 'shells' — a method beyond this unit's scope). Here: if the region's natural thickness runs perpendicular to the rotation axis, disks work directly; when they get messy, re-describe the boundary as x in terms of y and revolve horizontally.</p>",
  keyTerms: [
    { term: "Solid of revolution", def: "The 3-D shape swept by rotating a region about an axis" },
    { term: "Disk method", def: "V = π∫ r² along the axis, radius = curve height" },
    { term: "Washer", def: "Disk with a hole: π(R² − r²)" },
    { term: "Axis of rotation", def: "The line the region spins around — decides slice direction" },
    { term: "Cross-section", def: "The coin slice perpendicular to the axis" }
  ],
  formulas: [
    {
      name: "Disks about x-axis",
      formula: "V = π ∫ₐᵇ [f(x)]² dx",
      meaning: "Stack of circular coins radius f(x), thickness dx",
      vars: [{ name: "f(x)", meaning: "the region's height above the x-axis" }],
      when: "Region touches the x-axis and is bounded by y = f(x)"
    },
    {
      name: "Disks about y-axis",
      formula: "V = π ∫ₐᵇ [g(y)]² dy",
      meaning: "Coins stacked along y with radius x = g(y)",
      vars: [{ name: "g(y)", meaning: "boundary expressed as x in terms of y" }],
      when: "Rotation about the y-axis"
    },
    {
      name: "Washer",
      formula: "V = π ∫ₐᵇ [R(x)² − r(x)²] dx",
      meaning: "Outer disk minus inner hole per slice",
      vars: [{ name: "R, r", meaning: "outer and inner radii (distances to axis)" }],
      when: "Rotating region leaves a tunnel around the axis"
    }
  ],
  workedExamples: [
    {
      problem: "The region under y = x (0 ≤ x ≤ 2) is revolved about the x-axis. Find the volume.",
      formula: "V = π∫₀² x² dx",
      substitution: "π[x³/3]₀²",
      calculation: "π·8/3",
      answer: "8π/3 — matching cone formula ⅓π(2²)(2)"
    },
    {
      problem: "Find the volume generated by revolving y = x² from 0 to 1 about the x-axis.",
      formula: "V = π∫₀¹ (x²)² dx = π∫₀¹ x⁴ dx",
      substitution: "π[x⁵/5]₀¹",
      calculation: "π/5",
      answer: "π/5 cubic units"
    },
    {
      problem: "x = y² (0 ≤ y ≤ 1) revolved about the y-axis.",
      formula: "V = π∫₀¹ (y²)² dy",
      substitution: "π[y⁵/5]₀¹",
      calculation: "π/5",
      answer: "π/5 cubic units"
    },
    {
      problem: "The region between y = 4 and y = x² (0 ≤ x ≤ 2) is revolved about the x-axis.",
      formula: "V = π∫₀² (4² − (x²)²) dx = π∫₀² (16 − x⁴) dx",
      substitution: "π[16x − x⁵/5]₀²",
      calculation: "π(32 − 32/5) = 128π/5",
      answer: "128π/5 cubic units"
    }
  ],
  commonMistakes: [
    "Forgetting π outside the integral — volume is π∫r², not ∫r²",
    "Squaring the wrong expression: radius is the full distance to the axis (f(x)), never f(x)² squared again",
    "Using dx when rotating about the y-axis without converting the curve to x = g(y)",
    "Applying disks to a region floating off the axis — that is a washer and needs R² − r²",
    "Skipping limits: the interval must come from the stated boundaries or intersections"
  ],
  applications: [
    "Lathe work: machinists compute exactly these revolution volumes to price turned shafts and vases by material",
    "A flask or perfume bottle's glass volume is a ∫π[f(y)]²dy between shoulder and neck curves",
    "Anatomy: organs modelled as solids of revolution estimate tissue volume from a single scan profile",
    "Civil: rotation-cast concrete pipes check their cross-section mass the same way"
  ],
  summary: "Revolve a region and stack coins: disks give V = π∫r² along the axis (radius = boundary distance, expressed in the running variable). Floating regions use washers π(R² − r²). Cone, cylinder and sphere formulas are the built-in answer key for setup checks.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The disk-method volume about the x-axis is:", options: ["π∫f dx", "π∫f² dx", "∫f² dx", "2π∫f dx"], answer: 1, difficulty: 1, explanation: "Coin area πr² with r = f(x), summed: π∫f²dx." },
    { type: "mcq", q: "The region under y = 3 (0 ≤ x ≤ 2) revolved about the x-axis gives a cylinder of volume:", options: ["6π", "12π", "18π", "9π"], answer: 2, difficulty: 1, explanation: "π∫₀²9dx = 18π; cylinder check πr²h = π·9·2 = 18π ✓." },
    { type: "mcq", q: "The volume of y = x from 0..3 about x-axis:", options: ["3π", "9π", "27π", "6π"], answer: 1, difficulty: 2, explanation: "π∫₀³x²dx = π·9 = 9π; cone check ⅓π(3²)(3) = 9π." },
    { type: "mcq", q: "The volume of y = √x from 0..4 about x-axis is:", options: ["8π", "16π", "32π", "4π"], answer: 0, difficulty: 2, explanation: "π∫₀⁴ x dx = π·[x²/2]₀⁴ = 8π." },
    { type: "mcq", q: "The washer integrand for the region between y = 2 and y = 1/x² (x from 1 to 2) revolved about the x-axis is:", options: ["π(2 − 1/x²)", "π(4 − 1/x⁴)", "π(4 − 1/x²)", "2π(1 − 1/x²)"], answer: 1, difficulty: 2, explanation: "R² − r² = 2² − (1/x²)² = 4 − 1/x⁴. The unsquared option 1 is the classic trap." },
    { type: "mcq", q: "Rotating y = x² from 0..1 about the x-axis yields:", options: ["π/3", "π/5", "π/2", "2π/5"], answer: 1, difficulty: 2, explanation: "π∫₀¹x⁴dx = π/5." },
    { type: "mcq", q: "A semicircle y = √(9 − x²) revolved about the x-axis gives volume:", options: ["36π", "27π", "18π", "54π"], answer: 0, difficulty: 3, explanation: "π∫₋₃³(9 − x²)dx = π[9x − x³/3]₋₃³ = π·36 = 36π — sphere check 4/3π(3³) = 36π ✓." },
    { type: "mcq", q: "Rotating x = y² for 0 ≤ y ≤ 2 about the y-axis gives:", options: ["4π", "32π/5", "16π", "64π/5"], answer: 1, difficulty: 3, explanation: "V = π∫₀²(y²)²dy = π[y⁵/5]₀² = 32π/5." }
  ]
};
