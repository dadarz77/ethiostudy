/* Content: Grade 9 Mathematics — Unit 1: Further on Sets (3 topics) */
window.Lessons = window.Lessons || {};

Lessons["g9-mathematics-um1-t1"] = {
  overview: "Sets are the alphabet of mathematics — every equation, function and probability model is written in their language. Grade 9 takes you beyond listing elements into naming sets precisely, relating them with subsets, and seeing relationships as pictures with Venn diagrams.",
  objectives: [
    "Describe sets in words, roster form and set-builder notation",
    "Identify subsets, proper subsets and the empty set",
    "Draw and shade Venn diagrams for given sets",
    "Use the universal set and write complements of sets",
    "Decide membership with ∈ and ∉ correctly"
  ],
  simple: "A set is just a well-defined collection — 'the letters of the word SET' gives {S, E, T}, and no arguments arise about membership. A subset is a smaller set whose every member already belongs to the big set: {S, E} ⊆ {S, E, T}. Picture sets as circles inside a rectangle: the rectangle is everything under discussion (the universal set U), and the outside of a circle is its complement — everything NOT in that set.",
  detailed: "<p>A <b>set</b> is a well-defined collection of distinct objects called <b>elements</b>. 'Well-defined' means membership is objective: the set of even numbers works, the set of 'tall students' does not. We list elements in <b>roster form</b> as {2, 4, 6, 8}, or use <b>set-builder notation</b> {x : x is an even number less than 10}, read 'the set of all x such that x is even and below 10'. Order never matters inside a set and repeats collapse: {1,2,2,3} is just {1,2,3}.</p><p>Membership is written with the Greek letter epsilon: 4 ∈ {2, 4, 6} means '4 is an element of', while 5 ∉ {2, 4, 6}. The <b>empty set</b> ∅ (also written {}) contains nothing at all — it is a subset of every set, like an envelope with no letters inside is still contained in any drawer.</p><p>Set A is a <b>subset</b> of B, written A ⊆ B, if every element of A is also in B. If additionally A ≠ B, we say A is a <b>proper subset</b>, A ⊂ B. A set with n elements has exactly 2ⁿ subsets — each element independently chooses to join or not. That is why a 3-element set has 8 subsets but only 7 proper subsets (the set itself is excluded).</p><p>A <b>Venn diagram</b> draws the universal set U as a rectangle and each set as a disk inside it. Relationships become geometry: A ⊆ B is a circle entirely inside another; disjoint sets (A ∩ B = ∅) are separate circles; overlapping circles show shared elements. Shading regions is how we 'write sentences' about sets — e.g., shading the outside of circle A is the <b>complement</b> A′.</p><p>The <b>complement</b> of A, written A′ or Aᶜ, is everything in U that is not in A: A′ = {x ∈ U : x ∉ A}. Complements depend on U — change the universe and you change the complement. If U = {1,…,10} and A = {2,4,6,8}, then A′ = {1,3,5,7,9,10}. This relative nature is exactly why every complement question must state its universe first.</p>",
  keyTerms: [
    { term: "Set", def: "A well-defined collection of distinct objects called elements" },
    { term: "Roster form", def: "Listing all elements inside braces, e.g. {1, 2, 3}" },
    { term: "Set-builder form", def: "Describing the rule an element must satisfy, e.g. {x : x > 0}" },
    { term: "Empty set ∅", def: "The set with no elements; a subset of every set" },
    { term: "Subset (⊆)", def: "A ⊆ B when every element of A is also an element of B" },
    { term: "Proper subset (⊂)", def: "A ⊂ B when A ⊆ B but A ≠ B" },
    { term: "Universal set U", def: "The set of all objects under discussion in a problem" },
    { term: "Complement A′", def: "All elements of U that are not in A" },
    { term: "Disjoint sets", def: "Two sets with no common element (A ∩ B = ∅)" }
  ],
  formulas: [
    {
      name: "Number of subsets",
      formula: "n subsets of an n-element set = 2ⁿ",
      meaning: "Each of the n elements independently chooses whether to be in a subset",
      vars: [{ name: "n", meaning: "number of elements in the set", unit: "count" }],
      when: "Counting how many subsets (or proper subsets = 2ⁿ − 1) a finite set has"
    }
  ],
  workedExamples: [
    {
      problem: "Write in set-builder form: A = {2, 4, 6, 8, 10}.",
      substitution: "Elements are exactly the even positive integers up to 10",
      answer: "A = {x : x is an even natural number and x ≤ 10}"
    },
    {
      problem: "How many proper subsets does {a, b, c, d} have?",
      given: "A 4-element set",
      formula: "2ⁿ − 1",
      substitution: "2⁴ − 1 = 16 − 1",
      answer: "15 proper subsets"
    },
    {
      problem: "U = {1,2,3,4,5,6}, B = {1,3,5}. Find B′ and decide if {2,4} ⊆ B′.",
      formula: "B′ = {x ∈ U : x ∉ B}",
      substitution: "B′ = {2,4,6}; every element of {2,4} is in {2,4,6}",
      answer: "B′ = {2, 4, 6}, and yes, {2,4} ⊆ B′"
    }
  ],
  commonMistakes: [
    "Confusing ∈ with ⊆: write 2 ∈ {2,4} but {2} ⊆ {2,4} — elements use ∈, sets use ⊆",
    "Thinking ∅ is the same as {∅}: the first has zero elements, the second has one element (which happens to be the empty set)",
    "Counting 2ⁿ as the number of proper subsets — proper subsets exclude the set itself, so 2ⁿ − 1",
    "Forgetting that the complement depends on U: A′ inside the integers differs from A′ inside the reals",
    "Listing duplicate elements or believing {1,2} and {2,1} are different sets — order and repeats do not matter"
  ],
  applications: [
    "Phone contacts: your address book is a set; a workgroup chat is a subset of it",
    "School clubs: every member of the Science Club who is also in the Debate Club forms an intersection — set language organises rosters",
    "Market research: 'customers who bought coffee' and 'customers who bought bread' overlap — survey filters are set operations",
    "Computer search: 'Ethiopia NOT coffee' is literally a complement/difference operation on result sets"
  ],
  summary: "A set is a well-defined, unordered, repeat-free collection. Membership (∈) links elements to sets; subset (⊆) links sets to sets. The empty set is every set's subset, an n-set has 2ⁿ subsets, Venn diagrams make relationships visible, and the complement A′ is everything in the universe U outside A.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Which is a well-defined set?", options: ["The tall students of Grade 9", "The beautiful paintings in the National Museum", "The even natural numbers less than 10", "The fast runners in Addis Ababa"], answer: 2, difficulty: 1, explanation: "'Even natural numbers less than 10' has objective membership: {2,4,6,8}. The others depend on opinion." },
    { type: "mcq", q: "If A = {1, 2, 3}, how many subsets does A have?", options: ["3", "6", "8", "9"], answer: 2, difficulty: 1, explanation: "2ⁿ = 2³ = 8 subsets, including ∅ and A itself." },
    { type: "mcq", q: "Which statement is correct for B = {2, 4, 6}?", options: ["2 ⊆ B", "{2} ∈ B", "{2} ⊆ B", "B ∈ 2"], answer: 2, difficulty: 2, explanation: "{2} is a set whose only element lies in B, so {2} ⊆ B. Use ∈ for elements, ⊆ for sets." },
    { type: "mcq", q: "U = {1,…,10}, A = {x : x is prime}. What is A′?", options: ["{1, 4, 6, 8, 9, 10}", "{4, 6, 8, 9, 10}", "{2, 3, 5, 7}", "{1, 2, 4}"], answer: 0, difficulty: 2, explanation: "A = {2,3,5,7}, so the complement in U is {1,4,6,8,9,10}. Remember 1 is not prime." },
    { type: "mcq", q: "The proper subsets of {a, b} are:", options: ["∅, {a}, {b}, {a,b}", "∅, {a}, {b}", "{{a}, {b}}", "{a}, {b}, {a,b}"], answer: 1, difficulty: 2, explanation: "Proper = all 4 subsets except {a,b} itself: ∅, {a}, {b}." },
    { type: "mcq", q: "A ∩ B = ∅ means the sets are:", options: ["Equal", "Disjoint", "Complements", "Subsets"], answer: 1, difficulty: 1, explanation: "No shared elements — disjoint. Venn circles do not overlap." },
    { type: "mcq", q: "Which equals {x : x² = 4, x ∈ ℤ} in roster form?", options: ["{4}", "{2}", "{2, −2}", "{−2}"], answer: 2, difficulty: 2, explanation: "Both 2 and −2 square to 4, and both are integers." },
    { type: "mcq", q: "If n(A) = 5, the number of PROPER subsets is:", options: ["32", "31", "10", "25"], answer: 1, difficulty: 2, explanation: "2⁵ − 1 = 31: all subsets except A itself." }
  ]
};

Lessons["g9-mathematics-um1-t2"] = {
  overview: "Once you can name sets, you can combine them. Union gathers, intersection filters, difference removes, and complement flips — the four operations that power everything from search engines to probability.",
  objectives: [
    "Compute unions, intersections and differences of two sets",
    "Represent operations visually on Venn diagrams",
    "Apply De Morgan's laws to complements",
    "Translate word problems into set operations",
    "Verify set identities with concrete examples"
  ],
  simple: "Think of two friend groups. The <b>union</b> A ∪ B is everyone invited to the joint party — each person counted once. The <b>intersection</b> A ∩ B is the people who belong to both groups. The <b>difference</b> A − B is your group minus anyone also in theirs. The <b>complement</b> A′ is everyone in school who is NOT in your group. De Morgan's laws just say: 'not in (A or B)' is the same as 'not in A AND not in B'.",
  detailed: "<p>The <b>union</b> A ∪ B = {x : x ∈ A <b>or</b> x ∈ B} collects every element of either set — but duplicates collapse, because a set lists each member once. The <b>intersection</b> A ∩ B = {x : x ∈ A <b>and</b> x ∈ B} keeps only shared elements. If the sets share nothing, A ∩ B = ∅ and we call them <b>disjoint</b>. With A = {1,2,3,4} and B = {3,4,5}: A ∪ B = {1,2,3,4,5} and A ∩ B = {3,4}.</p><p>The <b>difference</b> A − B = {x : x ∈ A and x ∉ B} surgically removes B's elements from A — and crucially it is <b>not commutative</b>: with the sets above, A − B = {1,2} but B − A = {5}. The <b>complement</b> A′ is the special case U − A: everything in the universe outside A.</p><p>On Venn diagrams each operation shades different regions: union shades both circles; intersection shades only the overlap; A − B shades circle A with the overlap bitten out. There are exactly four disjoint 'atoms' in a two-circle diagram — A-only, the overlap, B-only, and outside-both — and every possible operation just selects a subset of those atoms. That is why 2⁴ = 16 different regions combinations exist for two sets.</p><p><b>De Morgan's laws</b> connect complements with unions and intersections: (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′. In words: 'not in either' equals 'in neither', and 'not in both' equals 'missing at least one'. Test them with a search engine: results for NOT(cat OR dog) are exactly the pages with neither animal — the OR became AND under the NOT.</p><p>Operations obey familiar algebra: commutativity (A ∪ B = B ∪ A), associativity, idempotence (A ∪ A = A), and absorption (A ∪ (A ∩ B) = A — the intersection can add nothing A didn't already have). Unlike ordinary arithmetic, union distributes over intersection too: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C). Verify any identity by checking all four Venn atoms, or with a two-set example that shares elements.</p>",
  keyTerms: [
    { term: "Union (A ∪ B)", def: "All elements in A, in B, or in both" },
    { term: "Intersection (A ∩ B)", def: "Only elements common to both A and B" },
    { term: "Difference (A − B)", def: "Elements of A with all of B's elements removed" },
    { term: "Complement (A′)", def: "Everything in U that is not in A; equals U − A" },
    { term: "Disjoint", def: "Having empty intersection — no common elements" },
    { term: "De Morgan's laws", def: "(A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′" }
  ],
  formulas: [
    {
      name: "De Morgan's laws",
      formula: "(A ∪ B)′ = A′ ∩ B′   ·   (A ∩ B)′ = A′ ∪ B′",
      meaning: "Complement flips unions to intersections and vice versa",
      vars: [{ name: "′", meaning: "complement relative to the universe U" }],
      when: "Rewriting 'neither/nor' statements, simplifying search filters and probability complements"
    },
    {
      name: "Difference as intersection with complement",
      formula: "A − B = A ∩ B′",
      meaning: "Removing B's members is keeping everything not in B",
      when: "Computing differences with Venn shading or logic"
    }
  ],
  workedExamples: [
    {
      problem: "U = {1,…,10}, A = {1,2,3,5,8}, B = {2,4,6,8}. Find A ∪ B, A ∩ B, A − B, (A ∩ B)′.",
      substitution: "Union merges without repeats; intersection keeps shared; difference removes B's members",
      calculation: "A ∪ B = {1,2,3,4,5,6,8}; A ∩ B = {2,8}; A − B = {1,3,5}; (A ∩ B)′ = U − {2,8}",
      answer: "A ∪ B = {1,2,3,4,5,6,8}; A ∩ B = {2,8}; A − B = {1,3,5}; (A ∩ B)′ = {1,3,4,5,6,7,9,10}"
    },
    {
      problem: "Verify (A ∪ B)′ = A′ ∩ B′ with A = {1,2}, B = {2,3}, U = {1,2,3,4}.",
      calculation: "A ∪ B = {1,2,3} → complement = {4}. A′ = {3,4}, B′ = {1,4}, intersect = {4}",
      answer: "Both sides equal {4} ✓"
    },
    {
      problem: "35 students: 20 play football (F), 18 play basketball (B), 8 play both. How many play neither?",
      given: "n(U) = 35, n(F) = 20, n(B) = 18, n(F ∩ B) = 8",
      formula: "n(F ∪ B) = n(F) + n(B) − n(F ∩ B)",
      substitution: "n(F ∪ B) = 20 + 18 − 8 = 30",
      answer: "35 − 30 = 5 students play neither sport"
    }
  ],
  commonMistakes: [
    "Treating A − B as commutative — A − B and B − A are usually different sets",
    "Counting shared elements twice in a union (the football/basketball double count)",
    "Writing (A ∩ B)′ = A′ ∩ B′ — De Morgan flips the operation; the correct partners are ∪↔∩",
    "Forgetting repeats collapse: {1,2} ∪ {2,3} is {1,2,3}, not {1,2,2,3}",
    "Taking complements without fixing U first — answers change with the universe"
  ],
  applications: [
    "Search engines: 'phone camera -used' is A − B; 'NOT (cat AND dog)' is De Morgan in action",
    "Database filters: customers who bought X OR Y, and the intersection for loyal cross-shoppers",
    "Medicine: patients with symptom A and symptom B narrow diagnoses via intersection",
    "Grade reports: students passing maths (M) and physics (P) — honour roll is M ∩ P"
  ],
  summary: "Union combines (or), intersection filters (and), difference deletes, and complement flips membership relative to U. A − B = A ∩ B′, De Morgan's laws trade ∪ for ∩ under complements, and unions avoid double-counting shared elements — the seed of inclusion–exclusion.",
  visuals: [],
  questions: [
    { type: "mcq", q: "If A = {1,2,3} and B = {3,4,5}, then A ∩ B =", options: ["{1,2,3,4,5}", "{3}", "{1,2}", "{4,5}"], answer: 1, difficulty: 1, explanation: "Only 3 is common to both sets." },
    { type: "mcq", q: "A − B equals:", options: ["A′ ∩ B", "A ∩ B′", "A ∪ B′", "A′ ∪ B"], answer: 1, difficulty: 2, explanation: "Difference = keep A's members that are not in B = A ∩ B′." },
    { type: "mcq", q: "With A = {a,b,c}, B = {c,d}, U = {a,b,c,d,e}: (A ∪ B)′ is", options: ["{e}", "{d,e}", "{c}", "{a,b}"], answer: 0, difficulty: 2, explanation: "A ∪ B = {a,b,c,d}; the leftover in U is {e}." },
    { type: "mcq", q: "De Morgan: (A ∩ B)′ =", options: ["A′ ∩ B′", "A′ ∪ B′", "A ∪ B", "A′ − B"], answer: 1, difficulty: 2, explanation: "Complement of an intersection is the union of complements." },
    { type: "mcq", q: "n(A)=10, n(B)=12, n(A∩B)=4. n(A∪B) =", options: ["26", "22", "18", "16"], answer: 2, difficulty: 2, explanation: "10 + 12 − 4 = 18; the overlap was counted twice." },
    { type: "mcq", q: "Which pair is disjoint?", options: ["{1,2} and {2,3}", "{even} and {odd}", "{1,3} and {3,5}", "{a} and {a,b}"], answer: 1, difficulty: 1, explanation: "A number is never both even and odd, so the intersection is empty." },
    { type: "mcq", q: "B − A with A = {1,2}, B = {2,3,4} gives:", options: ["{1}", "{2,3,4}", "{3,4}", "{1,2,3,4}"], answer: 2, difficulty: 1, explanation: "Remove A's members from B: 2 goes, 3 and 4 stay." },
    { type: "mcq", q: "A ∪ (B ∩ C) equals:", options: ["(A ∪ B) ∩ (A ∪ C)", "(A ∩ B) ∪ C", "A ∩ (B ∪ C)", "(A ∪ B) ∪ C"], answer: 0, difficulty: 3, explanation: "Union distributes over intersection — one of the absorption/distribution family." }
  ]
};

Lessons["g9-mathematics-um1-t3"] = {
  overview: "How many students study at least one language? Counting with sets gives the inclusion–exclusion principle: add the single groups, subtract what you double-counted, and add back the triple overlap you over-subtracted.",
  objectives: [
    "Compute cardinalities of unions of two and three sets",
    "State and apply the inclusion–exclusion formula",
    "Solve three-set Venn word problems by filling from the centre out",
    "Find 'exactly one' and 'at least one' counts from diagrams",
    "Check answers against the universal total"
  ],
  simple: "Count footballers and cricketers at a sports day: someone who plays both gets counted twice, so subtract the overlap once. Now add a third sport — subtracting each pair's overlap removes the all-three kids too many times, so add them back once. Add, subtract pairs, add back the triple. That's inclusion–exclusion: include everyone, exclude the double counts, include what you over-excluded.",
  detailed: "<p>Write n(A) for the number of elements of a finite set. The union formula for two sets is <b>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</b>. Why subtract? Adding n(A) and n(B) counts every shared element twice — once inside each set — so the intersection is removed once to correct the record. The complement version is equally useful: n(A ∪ B) = n(U) − n((A ∪ B)′), counting the 'neither' group instead of the overlap.</p><p>For three sets the pattern alternates: <b>n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)</b>. Singles included (triples counted three times), pairs excluded (all-three region then at −2, because each pair subtraction removes it), triple added back. The sign pattern + − + is the whole story, and it extends to any number of sets.</p><p>Word problems are best solved by <b>filling the Venn diagram from the centre outward</b>: write n(A∩B∩C) in the middle, subtract it from each pair-overlap to get 'exactly two', then subtract the ring overlaps from each single-set total to get 'exactly one'. Finally place the 'none' count outside all circles. This systematic fill-in prevents double counting and lets you read off any query: 'exactly one subject' = sum of the three exactly-one regions; 'at least two' = pair-overlaps + middle.</p><p>Watch wording traps. '30 students study English <b>only</b>' already excludes overlaps; '30 study English' does not. 'Neither subject' means n(U) − n(A ∪ B). When a total is missing, the union formula becomes an equation to solve — e.g., given n(A ∪ B) = 50, n(A) = 30, n(B) = 28, the overlap must be 8.</p><p>Sanity-check every answer three ways: (i) no region may be negative — if 'exactly two' comes out negative, the triple overlap exceeded a pair overlap and the data is inconsistent; (ii) all seven Venn regions plus 'none' must total n(U); (iii) the inclusion–exclusion result must lie between max(n(A),n(B),n(C)) and min(n(U), n(A)+n(B)+n(C)). A result outside those bounds signals an arithmetic slip.</p>",
  keyTerms: [
    { term: "Cardinality n(A)", def: "The number of elements in a finite set A" },
    { term: "Inclusion–exclusion", def: "Add singles, subtract pair overlaps, add the triple overlap" },
    { term: "At least one", def: "The union region — one or more categories apply" },
    { term: "Exactly one", def: "Only-one circles: single totals minus all their overlaps" },
    { term: "Neither", def: "Outside all circles: n(U) − n(A ∪ B)" }
  ],
  formulas: [
    {
      name: "Two-set union",
      formula: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
      meaning: "Add both counts, then remove the overlap counted twice",
      vars: [{ name: "n(A)", meaning: "number of elements in A" }, { name: "n(A ∩ B)", meaning: "number in both sets" }],
      when: "Counting members of at least one of two groups"
    },
    {
      name: "Three-set union",
      formula: "n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)",
      meaning: "Include singles, exclude the three pairs, re-include the centre",
      when: "At-least-one counts across three overlapping groups"
    }
  ],
  workedExamples: [
    {
      problem: "In 60 students, 35 take Maths (M), 28 take Physics (P), 12 take both, and 20 take neither. Does this data work? Check consistency.",
      given: "n(U)=60, n(M)=35, n(P)=28, n(M∩P)=12, n(neither)=20",
      formula: "n(M ∪ P) = n(M) + n(P) − n(M ∩ P)",
      substitution: "n(M ∪ P) = 35 + 28 − 12 = 51; then neither should be 60 − 51 = 9",
      answer: "No — the stated '20 neither' contradicts the data; only 9 students can take neither."
    },
    {
      problem: "100 students: Amharic 60, English 50, both. How many take exactly one language?",
      substitution: "n(A ∪ E) = 60 + 50 − (60 + 50 − 100) … first find overlap: if all take at least one, overlap = 60+50−100 = 10",
      calculation: "Exactly one = (60 − 10) + (50 − 10) = 50 + 40",
      answer: "90 students take exactly one language"
    },
    {
      problem: "50 households: coffee 25, tea 20, both 8. How many take neither?",
      formula: "n(C ∪ T) = n(C) + n(T) − n(C ∩ T)",
      substitution: "n(C ∪ T) = 25 + 20 − 8 = 37",
      answer: "50 − 37 = 13 households take neither"
    },
    {
      problem: "Three clubs: Science 18, Art 14, Music 12; S∩A=5, S∩M=4, A∩M=3, all three=2, none=20. Find n(U).",
      formula: "Inclusion–exclusion for three sets",
      substitution: "Union = 18+14+12 − 5−4−3 + 2 = 34",
      answer: "n(U) = 34 + 20 = 54 students"
    }
  ],
  commonMistakes: [
    "Subtracting the triple overlap once instead of adding it back in the three-set formula",
    "Filling Venn regions from the outside in — always start at the centre (the triple overlap)",
    "Reading 'takes English' as 'takes English only' — 'only' means overlaps already removed",
    "Forgetting the 'neither' group when checking totals: all seven regions plus neither must equal n(U)",
    "Not flagging inconsistent data: pair overlap smaller than triple overlap, or a negative 'exactly one'"
  ],
  applications: [
    "School surveys: 'how many students play at least one sport' is inclusion–exclusion verbatim",
    "Market studies: shoppers buying coffee, tea or both — overlap pricing strategies",
    "Medicine: patients presenting with combinations of symptoms — 'exactly one symptom' counts guide diagnoses",
    "Elections and polling: 'support at least one of the three candidates' is a union count"
  ],
  summary: "Counting a union means adding single sets and correcting every double count: subtract pair overlaps, then add the triple back. The sign pattern + − + extends to any number of sets. Solve word problems centre-out on the Venn diagram, and verify that regions stay non-negative and total n(U).",
  visuals: [],
  questions: [
    { type: "mcq", q: "n(A)=12, n(B)=9, n(A∩B)=4. n(A∪B) =", options: ["25", "21", "17", "13"], answer: 2, difficulty: 1, explanation: "12 + 9 − 4 = 17." },
    { type: "mcq", q: "In a class of 40, 25 like maths, 18 like English, 5 like neither. How many like both?", options: ["8", "10", "12", "3"], answer: 0, difficulty: 2, explanation: "Like at least one: 40−5=35. Both = 25+18−35 = 8." },
    { type: "mcq", q: "The three-set formula adds back n(A∩B∩C) because the three pair subtractions", options: ["never counted it", "removed it one time too many", "counted it twice", "added it twice"], answer: 1, difficulty: 2, explanation: "The centre is counted +3 by the singles, then −3 by the pairs, netting 0 — so it must be added once back to count it exactly once." },
    { type: "mcq", q: "n(A)=20, n(B)=15, n(A∪B)=30. n(A−B) =", options: ["15", "10", "5", "25"], answer: 0, difficulty: 3, explanation: "Overlap = 20+15−30 = 5, so A-only = 20 − 5 = 15." },
    { type: "mcq", q: "55% drink tea, 40% drink coffee, 15% drink both. What % drink neither?", options: ["20%", "15%", "10%", "25%"], answer: 0, difficulty: 2, explanation: "At least one = 55+40−15 = 80%, so neither = 100−80 = 20%." },
    { type: "mcq", q: "When solving a 3-circle Venn problem, the FIRST number to place is", options: ["n(A) total", "the triple overlap", "the 'none' count", "n(U)"], answer: 1, difficulty: 2, explanation: "Fill from the centre out: the triple overlap anchors every subtraction that follows." },
    { type: "mcq", q: "Data: n(A∩B)=3, n(A∩B∩C)=5. This is", options: ["fine", "impossible — a superset region exceeds its subset", "equal sets", "needs more info"], answer: 1, difficulty: 3, explanation: "The triple region sits inside every pair region; it cannot be larger. The data is inconsistent." },
    { type: "mcq", q: "n(U)=80, n(A′)=30, n(B)=25, n(A∩B)=10. n(A∪B) =", options: ["55", "65", "70", "45"], answer: 1, difficulty: 3, explanation: "n(A) = 80 − 30 = 50, then 50 + 25 − 10 = 65." }
  ]
};
