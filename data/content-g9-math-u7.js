/* Content: Grade 9 Mathematics — Unit 7: Congruency and Similarity (2 topics) */
window.Lessons = window.Lessons || {};

Lessons["g9-mathematics-um7-t1"] = {
  overview: "Congruent figures are identical twins — same shape AND size, related by a rigid motion. Four tests (SSS, SAS, ASA, RHS) let you PROVE two triangles match without measuring everything.",
  objectives: [
    "Define congruence and write correct correspondence statements",
    "Apply SSS, SAS, ASA and RHS congruence tests",
    "Explain why AAA and SSA are NOT congruence tests",
    "Use CPCTC to deduce equal sides/angles from proven congruence",
    "Prove simple triangle and quadrilateral congruences in proofs"
  ],
  simple: "Two triangles are <b>congruent</b> if one can slide, flip or rotate onto the other — perfectly, no stretching. You don't need all six measurements: <b>SSS</b> (3 sides), <b>SAS</b> (2 sides + the angle BETWEEN them), <b>ASA</b> (2 angles + the side between), <b>RHS</b> (right angle + hypotenuse + one side) each guarantee a match. AAA fails (zoom changes size), and SSA fails (the ambiguous case again — two different triangles fit). Write △ABC ≅ △DEF only with A↔D, B↔E, C↔F lining up.",
  detailed: "<p><b>Congruence</b> ≅ means identical shape and size: every corresponding side and angle equal. Formally, one figure maps onto the other by a composition of rigid motions (translation, rotation, reflection). The symbol statement △ABC ≅ △DEF declares the correspondence: AB↔DE, ∠A↔∠D, etc. — order is everything; △ABC ≅ △DFE is a different claim.</p><p>The <b>tests</b> are minimality theorems: certain subsets of the six measurements force the rest. <b>SSS</b>: three sides lock the shape rigid (why triangles brace bridges). <b>SAS</b>: two sides and the INCLUDED angle — the third side then follows by the cosine rule, so it truly determines the triangle. <b>ASA</b>: two angles fix the third (angle sum), and the included side fixes scale. <b>RHS</b> (HL): right angle + hypotenuse + one leg — Pythagoras recovers the other leg, reducing to SSS.</p><p>Non-tests: <b>AAA</b> only matches shape (similar triangles — next topic — any scale). <b>SSA</b> is the sine-rule ambiguous case: the swinging side can land in two spots, giving two non-congruent triangles. <b>SAS's angle MUST be included</b>: 'two sides and a non-included angle' is SSA dressed up.</p><p>Once congruence is PROVEN, <b>CPCTC</b> (Corresponding Parts of Congruent Triangles are Congruent) hands you individual equalities: to show a bisector cuts a segment in half, prove the two triangles congruent, then declare the matching sides equal. Standard proof patterns: shared side (reflexivity), isosceles base angles (prove via the bisector or midpoint construction), parallelogram diagonals bisecting each other (opposite sides equal + ASA twice).</p><p>Proof mechanics for exams: (1) mark the given equalities on the diagram, (2) hunt hidden data — common sides, vertically opposite angles, parallel-line angles, right angles from perpendicular marks, (3) name the test with the three facts in matching order, (4) conclude with the needed part via CPCTC. A congruence statement without a named test is an assertion, not a proof.</p>",
  keyTerms: [
    { term: "Congruence (≅)", def: "Same shape and size; related by rigid motions" },
    { term: "Correspondence", def: "The vertex pairing declared by the order in △ABC ≅ △DEF" },
    { term: "SSS / SAS / ASA", def: "Three-sides / two-sides-included-angle / two-angles-included-side tests" },
    { term: "RHS (HL)", def: "Right angle + hypotenuse + one leg for right triangles" },
    { term: "CPCTC", def: "Corresponding parts of congruent triangles are congruent" },
    { term: "Included angle", def: "The angle between two named sides — required by SAS" }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "AB = DE, BC = EF, ∠B = ∠E. Are △ABC and △DEF congruent? Which parts follow?",
      calculation: "SAS (the equal angles sit BETWEEN the equal sides)",
      answer: "△ABC ≅ △DEF; so AC = DF, ∠A = ∠D, ∠C = ∠F (CPCTC)"
    },
    {
      problem: "In quadrilateral ABCD, AB = CD and AD = BC. Prove △ABD ≅ △CDB.",
      calculation: "AB = CD (given), AD = CB (given), BD = DB (common side)",
      answer: "SSS → △ABD ≅ △CDB; hence ∠A = ∠C and the diagonally-split angles match (ABCD is a parallelogram)"
    },
    {
      problem: "Two right triangles: hypotenuse 5 each, one leg 3 each. Congruent?",
      calculation: "RHS applies; other leg = √(25−9) = 4 both",
      answer: "Yes — SSS confirms (3-4-5 both)"
    },
    {
      problem: "Triangles with angles 40-60-80 and sides 5, 7: why can't you prove congruence from ∠A=∠D, ∠B=∠E, ∠C=∠F alone?",
      answer: "AAA fixes only shape — any scaled copy shares all angles"
    }
  ],
  commonMistakes: [
    "Using SSA as a test (the ambiguous swing)",
    "Naming SAS with a NON-included angle",
    "Writing correspondence in the wrong order (△ABC ≅ △DEF vs △DFE)",
    "Claiming congruent parts BEFORE proving the triangles congruent",
    "Forgetting hidden givens: shared sides, vertical angles, right-angle marks",
    "Assuming mirror images aren't congruent — reflection is a rigid motion"
  ],
  applications: [
    "Manufacturing: interchangeable parts are congruent copies — jigs tested by SSS",
    "Construction: triangulated trusses rely on triangle rigidity (SSS makes shape immutable)",
    "Surveying: congruent offset triangles measure river widths without crossing",
    "Forensics: matching tool marks or shoe prints as congruent impressions"
  ],
  summary: "Congruence = identical shape+size via rigid motions. Prove triangles with SSS, SAS (included angle!), ASA, or RHS (right triangles); AAA and SSA don't qualify. State vertices in corresponding order, mine the diagram for shared sides and vertical angles, and unlock extra equalities with CPCTC.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Which is NOT a congruence test?", options: ["SSS", "SAS", "AAA", "ASA"], answer: 2, difficulty: 1, explanation: "AAA only guarantees similarity — size is free." },
    { type: "mcq", q: "Two sides and the angle between them give:", options: ["SSA", "SAS — valid", "ASA", "RHS"], answer: 1, difficulty: 1, explanation: "SAS requires the included angle." },
    { type: "mcq", q: "△ABC ≅ △DEF means AB corresponds to:", options: ["DE", "EF", "DF", "FD"], answer: 0, difficulty: 1, explanation: "First-two letters map to first-two letters." },
    { type: "mcq", q: "Right triangles with equal hypotenuses and one equal leg are congruent by:", options: ["SAS", "ASA", "RHS", "SSA"], answer: 2, difficulty: 2, explanation: "RHS is the right-triangle special case." },
    { type: "mcq", q: "Why does SSA fail?", options: ["angles can't repeat", "the free side swings to two positions", "it only works for obtuse", "Pythagoras blocks it"], answer: 1, difficulty: 3, explanation: "The ambiguous case: two non-congruent triangles share the data." },
    { type: "mcq", q: "After proving △PQR ≅ △STU, you get PR = SU by:", options: ["ASA", "CPCTC", "RHS", "SSS again"], answer: 1, difficulty: 2, explanation: "Matching parts of congruent triangles follow automatically." },
    { type: "mcq", q: "A hidden common element in overlapping triangles is often:", options: ["a shared side", "equal angles that aren't marked", "parallel lines", "a midpoint"], answer: 0, difficulty: 2, explanation: "The shared side (reflexive property) is the classic unstated given." }
  ]
};

Lessons["g9-mathematics-um7-t2"] = {
  overview: "Similar figures are the same shape at different scales — the engine behind map reading, model making, and the shadow-tricks that measured pyramids.",
  objectives: [
    "Define similarity: equal angles, proportional sides",
    "Identify AA similarity quickly",
    "Compute and use scale factors for lengths, areas, volumes",
    "Set up proportions from similar-triangle diagrams",
    "Apply similarity to indirect measurement (shadows, maps)"
  ],
  simple: "Similar = same shape, any size (congruent is the special scale-1 case). Angles stay equal; every length multiplies by one <b>scale factor</b> k. Two angles matching is enough to prove similarity (AA) — the third follows from the angle sum. Then measure indirectly: if a 2 m stick casts a 1.5 m shadow and a tree casts 9 m, the tree is 9/1.5 × 2 = 12 m — its shadow's scale factor applied to the stick.",
  detailed: "<p>Similarity △ABC ~ △DEF: corresponding angles equal AND corresponding sides in constant proportion AB/DE = BC/EF = CA/FD = k (scale factor). <b>AA</b> is the workhorse test — two equal angle-pairs force the third (180° sum) and proportional sides (sine rule).Extensions: <b>SAS-similarity</b> (proportional two sides + included angle equal) and <b>SSS-similarity</b> (all three ratios equal).</p><p>Proportions solve for missing lengths: with k = AB/DE, any unknown side x maps to x·k. The side-splitter theorems generate the classic diagrams: a line parallel to one triangle side cuts the other two proportionally, and the resulting small triangle is similar to the whole. Nested 'bowtie/X' figures (parallel sides facing each other) are also similar with a flipped correspondence — read which vertices match before cross-multiplying.</p><p>Areas scale as <b>k²</b>, volumes as <b>k³</b>. A photo doubled in every length is 4× the paper; a model car at k = 1/10 needs 1/1000 of the paint volume (well, surface is k² — know which you're computing). This 'square-cube law' explains why giants fall: strength goes as k², weight as k³.</p><p>Indirect measurement: shadows at the same instant share sun-angle → similar triangles → height/unknown = shadow/ratio. Maps and blueprints fix k by scale notation 1:50,000 (1 cm = 50,000 cm = 0.5 km). Famous case: Thales measured the Great Pyramid by waiting until his shadow equaled his height — then the pyramid's shadow WAS its height.</p><p>Pitfall discipline: correspondence first, arithmetic second. Cross-multiplying mismatched pairs (small-side/large-side vs large-side/small-side) yields k = 1/k — check the answer's sanity: the bigger figure's computed side must come out bigger. Also remember congruence ⊂ similarity: k = 1 makes similar triangles identical.</p>",
  keyTerms: [
    { term: "Similar (~)", def: "Equal angles, proportional sides — one is a scaled copy" },
    { term: "Scale factor k", def: "Ratio of corresponding lengths (bigger/smaller)" },
    { term: "AA test", def: "Two equal angle-pairs ⇒ similarity" },
    { term: "Side-splitter", def: "Parallel-to-base line cuts sides proportionally" },
    { term: "k²/k³ law", def: "Areas scale as k², volumes as k³" },
    { term: "Indirect measurement", def: "Finding heights/distances via similar triangles" }
  ],
  formulas: [
    {
      name: "Similarity ratios",
      formula: "lengths ×k · areas ×k² · volumes ×k³",
      meaning: "One scale factor propagates by dimension",
      when: "Comparing any two similar figures or models"
    }
  ],
  workedExamples: [
    {
      problem: "△ABC ~ △DEF with k = AB/DE = 3. EF = 5, so BC =",
      calculation: "BC = 3·EF",
      answer: "15"
    },
    {
      problem: "A 2 m pole casts a 1.5 m shadow; a tower's shadow is 12 m at the same hour. Tower height?",
      formula: "H/2 = 12/1.5",
      calculation: "H = 2 × 8",
      answer: "16 m"
    },
    {
      problem: "Two similar rectangles: areas 20 cm² and 45 cm². Scale factor?",
      calculation: "k² = 45/20 = 9/4 → k = 3/2",
      answer: "k = 1.5"
    },
    {
      problem: "Map scale 1:25,000; two towns are 8 cm apart. Real distance?",
      calculation: "8 × 25,000 cm = 200,000 cm",
      answer: "2 km"
    }
  ],
  commonMistakes: [
    "Cross-multiplying with mismatched correspondence (small/large = small/large, not small/large = large/small)",
    "Using k where k² belongs (area questions) or vice versa",
    "Applying AA when angles come from different vertices — match ∠A↔∠D etc. explicitly",
    "Assuming similar figures must be the same orientation — rotation/reflection allowed",
    "Treating scale 1:25,000 as 1 cm = 25 km (it's 25,000 cm = 0.25 km)",
    "Forgetting shadows only give similarity when measured at the SAME time"
  ],
  applications: [
    "Cartography: every map is a similarity transform at tiny k",
    "Model & miniatures: architecture models and scale railways (1:87 HO scale)",
    "Photogrammetry: drone-image overlap triangles reconstruct terrain",
    "Engineering estimation: square-cube law predicts loads and heat loss in scaling"
  ],
  summary: "Similar figures keep angles and scale all lengths by k; AA proves it from two angle pairs. Proportions recover missing sides; areas scale k², volumes k³. Shadows, maps and models are similarity in the wild — get the correspondence right before cross-multiplying.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Two angles of one triangle equal two angles of another. The triangles are:", options: ["congruent", "similar by AA", "not related", "right triangles"], answer: 1, difficulty: 1, explanation: "AA gives similarity (congruence needs a side too)." },
    { type: "mcq", q: "k = 4 means areas multiply by:", options: ["4", "8", "16", "64"], answer: 2, difficulty: 1, explanation: "Area scales as k² = 16." },
    { type: "mcq", q: "A 1.5 m girl's shadow is 2 m; a flagpole's shadow is 24 m. Pole height:", options: ["16 m", "18 m", "32 m", "36 m"], answer: 1, difficulty: 2, explanation: "H/1.5 = 24/2 = 12 → H = 18 m." },
    { type: "mcq", q: "Similar triangles must have equal:", options: ["sides", "areas", "corresponding angles", "perimeters"], answer: 2, difficulty: 1, explanation: "Angles are preserved; lengths scale." },
    { type: "mcq", q: "Scale 1:50,000: 3 cm on the map equals:", options: ["1.5 km", "0.15 km", "15 km", "150 m"], answer: 0, difficulty: 2, explanation: "3 × 50,000 = 150,000 cm = 1.5 km." },
    { type: "mcq", q: "Volumes scale as:", options: ["k", "k²", "k³", "√k"], answer: 2, difficulty: 1, explanation: "Three dimensions, each ×k." },
    { type: "mcq", q: "Two similar squares have side ratio 2:5. Area ratio:", options: ["2:5", "4:25", "8:125", "5:2"], answer: 1, difficulty: 2, explanation: "(2/5)² = 4/25." },
    { type: "mcq", q: "A line parallel to a triangle's base cuts the other sides into segments that are:", options: ["equal", "proportional", "congruent", "random"], answer: 1, difficulty: 2, explanation: "The side-splitter theorem: proportional division, small triangle similar to whole." }
  ]
};
