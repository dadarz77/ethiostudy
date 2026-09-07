/* Content: Grade 11 Mathematics — Unit 3: Matrices (7 topics) */
window.Lessons = window.Lessons || {};

Lessons["g11-mathematics-um3-t1"] = {
  overview: "What a matrix is: a rectangular array of numbers in rows and columns, its order (m × n), entries aᵢⱼ, and the special players — row/column matrices, square matrices, zero and identity matrices — plus when two matrices are equal.",
  objectives: [
    "Describe a matrix by order and entries aᵢⱼ",
    "Recognize row, column, square, zero and identity matrices",
    "Use matrix equality to solve for unknown entries",
    "Store real data in matrices (tables, inventories)",
    "State rows-before-columns order convention"
  ],
  simple: "A matrix is a box of numbers arranged in rows and columns — like a spreadsheet block. Its ORDER is (rows × columns): a 2×3 matrix has 2 rows, 3 columns (18 rows, 3 columns — rows first, always). Each number is an ENTRY named by position: aᵢⱼ = row i, column j — so a₂₃ is row 2, column 3. Special types: a row matrix (1 × n) is one row; a column matrix (m × 1) is one column; a square matrix has equal rows and columns (n × n — 'order n'); the zero matrix O has all entries 0 (any size); the identity Iₙ is the square matrix with 1s on the main diagonal (top-left to bottom-right) and 0s elsewhere — the 'number 1' of matrix world. Equality: two matrices are equal iff same order AND every matching entry equal — so [x+1, 3; 2, y−2] = [4, 3; 2, 5] gives x = 3, y = 7. Why care? Matrices STORE structured data: a shop's stock of 3 items across 2 branches is a 2×3 matrix; a timetable, a pixel grid, a game board — anything with two indexing directions fits. The notation is just bookkeeping for rectangular data.",
  detailed: "<p><b>Formal view.</b> An m × n matrix A = [aᵢⱼ] is a function from {1..m} × {1..n} to ℝ — the entry is the value at position (i, j). Written with brackets: A = ⎡a₁₁ a₁₂⎤ ⎣a₂₁ a₂₂⎦. The main diagonal of a square matrix: entries a₁₁, a₂₂, …, aₙₙ; the secondary (anti-)diagonal runs top-right to bottom-left. Diagonal matrices: zero off the main diagonal; scalar matrices: diagonal entries all equal k·I.</p><p><b>Special matrices.</b> Row (1×n) and column (m×1) matrices are vectors — a data record or a point's coordinates. Square n×n: the ones with the richest theory (determinants, inverses — Units 3–4). Zero matrix O: additive identity (A + O = A). Identity Iₙ: multiplicative identity (AI = IA = A) — the matrix doing what 1 does for numbers. Upper/lower triangular: all entries below/above the diagonal zero — they appear in Gaussian elimination (t4).</p><p><b>Equality as equations.</b> A = B requires identical orders and aᵢⱼ = bᵢⱼ for every cell — turning a matrix statement into a system of small equations (the exam use). Transpose preview: Aᵀ swaps rows/columns (aᵢⱼ → aⱼᵢ) — a 2×3 becomes 3×2 (covered in t2's operations).</p><p><b>Data storage.</b> Rows = categories, columns = variants (or vice versa — declare the convention!). Inventory: branches × products; grades: students × subjects; adjacency: node-to-node connections in networks (the 1/0 matrix of a social graph). Matrix arithmetic (next topics) is then structured calculation over whole tables at once — one multiplication can update every cell.</p>",
  keyTerms: [
    { term: "Matrix", def: "rectangular array of numbers (rows × columns)" },
    { term: "Order", def: "m × n — rows then columns" },
    { term: "Entry aᵢⱼ", def: "number in row i, column j" },
    { term: "Identity Iₙ", def: "1s on diagonal, 0s elsewhere" },
    { term: "Square matrix", def: "m = n (order n)" },
    { term: "Matrix equality", def: "same order + all entries match" }
  ],
  workedExamples: [
    {
      problem: "Give the order of A = [3 1 7; 0 2 5] and find a₁₃, a₂₂.",
      given: "2 rows, 3 columns",
      formula: "position reading",
      substitution: "order 2×3; a₁₃ = row 1 col 3 = 7; a₂₂ = 2",
      calculation: "read off",
      answer: "2×3; a₁₃ = 7, a₂₂ = 2"
    },
    {
      problem: "Solve for x, y: [2x, y+1; 5, 3] = [6, 4; 5, 3].",
      given: "equality",
      formula: "entry matching",
      substitution: "2x = 6 → x = 3; y + 1 = 4 → y = 3",
      calculation: "x = y = 3",
      answer: "x = 3, y = 3"
    },
    {
      problem: "A shop has branches B₁, B₂ stocking teff (120, 90), honey (40, 55), coffee (30, 30) kg. Write the matrix and its order.",
      given: "data",
      formula: "rows = branches, cols = products",
      substitution: "M = [120 40 30; 90 55 30]",
      calculation: "2×3",
      answer: "2×3 matrix (declare: rows = branch, columns = product)"
    },
    {
      problem: "Write the 3×3 identity and a 3×2 zero matrix.",
      given: "definitions",
      formula: "patterns",
      substitution: "I₃ = [1 0 0; 0 1 0; 0 0 1]; O₃ₓ₂ = [0 0; 0 0; 0 0]",
      calculation: "diagonal vs all-zero",
      answer: "I₃ has 1s on the main diagonal; O is all zeros"
    },
    {
      problem: "Can a 2×3 matrix equal a 3×2 matrix? Can two matrices with the same entries in different positions be equal?",
      given: "equality rules",
      formula: "order + position",
      substitution: "no — equality requires identical order; no — a₁₂ must match a₁₂, position matters",
      calculation: "both no",
      answer: "Equality is strict: same shape AND same entry in every cell"
    }
  ],
  commonMistakes: [
    "Swapping the order convention — it's rows × columns (RC, like 'Royal Command')",
    "Reading aᵢⱼ as column-then-row — i is the row, j the column",
    "Thinking the identity can be any size — Iₙ is square by definition",
    "Equal matrices with different orders — impossible, check shape first",
    "Confusing a zero matrix with a 'missing' entry — every cell holds 0",
    "Forgetting to declare the row/column meaning when storing data"
  ],
  applications: [
    "Spreadsheets ARE matrices — every table of numbers",
    "Computer graphics: pixel grids and transformation matrices (Unit 6's transformations)",
    "Networks: adjacency matrices of roads, social links, the internet",
    "Economics: input-output tables of sectors",
    "Schools: mark tables (students × subjects) processed by matrix formulas"
  ],
  summary: "A matrix is a rectangular number array of order m×n (rows first). Entries aᵢⱼ are addressed by row then column. Special forms: row/column matrices, square matrices, the zero matrix O (additive identity) and identity Iₙ (multiplicative identity). Equality demands matching order and every matching entry — the gateway to solving for unknowns. Matrices store two-dimensional data: inventories, grades, networks — the bookkeeping behind all matrix arithmetic.",
  visuals: [
    { type: "flowChart", config: { title: "Matrix anatomy", steps: [{ label: "Order", detail: "rows × cols" }, { label: "Entry", detail: "aᵢⱼ = row i, col j" }, { label: "Diagonal", detail: "a₁₁, a₂₂…" }, { label: "Special", detail: "O, Iₙ" }] } }
  ],
  questions: [
    { type: "mcq", q: "A 3×2 matrix has:", options: ["3 cols 2 rows", "3 rows 2 cols", "6 diagonals", "3 entries"], answer: 1, difficulty: 1, explanation: "Rows first" },
    { type: "mcq", q: "The identity matrix is:", options: ["all 1s", "1s on diagonal, 0s else", "all 0s", "square of 1s"], answer: 1, difficulty: 1, explanation: "Diagonal of ones" },
    { type: "mcq", q: "a₃₂ is the entry in:", options: ["row 2 col 3", "row 3 col 2", "diagonal", "last row"], answer: 1, difficulty: 2, explanation: "Row 3, column 2" },
    { type: "mcq", q: "Which must be square?", options: ["row matrix", "identity", "column matrix", "zero matrix"], answer: 1, difficulty: 2, explanation: "Iₙ is n×n" },
    { type: "tf", q: "A 2×2 zero matrix and a 2×3 zero matrix are equal.", answer: false, difficulty: 2, explanation: "Different orders" },
    { type: "tf", q: "Every square matrix is an identity matrix.", answer: false, difficulty: 1, explanation: "Only the one with 1s on diagonal" },
    { type: "short", q: "The order of a matrix with 4 rows and 1 column:", answer: "4x1", difficulty: 1, explanation: "4×1 (column matrix)" },
    { type: "short", q: "The entries a₁₁, a₂₂, a₃₃ form the:", answer: "main diagonal", difficulty: 1, explanation: "Main diagonal" },
    { type: "calc", q: "[x+y, 2; 3, x−y] = [4, 2; 3, 0]. Find x, y.", answer: "x=2,y=2", difficulty: 2, explanation: "x+y=4, x−y=0 → x=y=2" },
    { type: "concept", q: "Why is 'rows × columns' the natural order for storing a class mark table?", answer: "students|subjects|convention", difficulty: 2, explanation: "Convention declares one axis (e.g. rows = students, columns = subjects); the order statement tells any reader the shape so positions mean the same thing to everyone — communication, not magic" }
  ]
};

Lessons["g11-mathematics-um3-t2"] = {
  overview: "Matrix arithmetic: addition and subtraction (entrywise, same order), scalar multiplication, and matrix multiplication (row-by-column dot products) with its dimension rules and properties — including the shock that AB ≠ BA in general.",
  objectives: [
    "Add/subtract matrices of equal order",
    "Multiply a matrix by a scalar",
    "Compute AB when inner dimensions match",
    "State properties: associative, distributive; NOT commutative",
    "Find the transpose and use (AB)ᵀ = BᵀAᵀ"
  ],
  simple: "Addition: same size required, add matching entries — A + B = [aᵢⱼ + bᵢⱼ]. Subtraction the same. Scalar multiplication: k·A multiplies EVERY entry by k (stretch the whole table). Matrix multiplication is the new one: AB is defined only when A's column-count = B's row-count (inner numbers must match: (m×n)(n×p) → m×p result). Entry (AB)ᵢⱼ = dot product of row i of A with column j of B: multiply pairs, add them up. Worked: [1 2; 3 4]·[5 6; 7 8] = [1·5+2·7, 1·6+2·8; 3·5+4·7, 3·6+4·8] = [19 22; 43 50]. The surprise: AB ≠ BA usually — try the same matrices reversed: [5 6;7 8]·[1 2;3 4] = [23 34; 31 46] — different! Numbers commute; matrices don't (they're transformations — order of actions matters). Also: AB = O with neither A nor B zero (zero divisors — another break from arithmetic), and cancellation fails (AB = AC doesn't force B = C). Transpose Aᵀ: flip rows↔columns; (A+B)ᵀ = Aᵀ+Bᵀ, (kA)ᵀ = kAᵀ, (AB)ᵀ = BᵀAᵀ (reverse the order — socks/shoes again). Valid laws: A+B = B+A, associativity of +, ×, distributivity A(B+C) = AB + AC, AI = A.",
  detailed: "<p><b>Product mechanics.</b> (AB)ᵢⱼ = Σₖ aᵢₖbₖⱼ — row i of A sweeps column j of B. Dimension check first: (m×n)(n×p) = m×p; if inner mismatch, the product is UNDEFINED (a favorite exam trap). Cost: m·n·p multiply-adds. Interpretations: (1) composition of linear maps (A after B — why AB ≠ BA); (2) structured counting: if A = connections between layers 1–2 and B between layers 2–3, AB counts paths through layer 2 (network/adjacency powers).</p><p><b>Properties.</b> Commutative: addition only. Associative: (A+B)+C, (AB)C = A(BC) — products chain safely. Distributive: A(B+C) = AB+AC and (A+B)C = AC+BC. Identities: A + O = A, AI = IA = A. NOT true: commutativity of multiplication; cancellation; zero-product property (AB = O ⇏ A = O or B = O — e.g. [1 0;0 0][0 0;0 1] = O). Powers: Aⁿ = A·A···A (square matrices only) — A² of an adjacency matrix counts 2-step walks.</p><p><b>Transpose.</b> Aᵀ: (i,j) → (j,i); (Aᵀ)ᵀ = A; symmetric matrices satisfy Aᵀ = A (equal across the diagonal). The reversal law (AB)ᵀ = BᵀAᵀ extends to (ABC)ᵀ = CᵀBᵀAᵀ — proof by entry chasing or by viewing transpose as reflecting the product.</p><p><b>Why non-commutativity is natural.</b> Matrices act on space (next units: transformations). 'Rotate then stretch' ≠ 'stretch then rotate' — the matrices inherit the order-dependence of the actions. Multiplication is defined precisely so that AB represents 'do B, then do A'.</p>",
  keyTerms: [
    { term: "Matrix addition", def: "entrywise, equal orders only" },
    { term: "Scalar multiplication", def: "k times every entry" },
    { term: "Matrix product", def: "(m×n)(n×p) = m×p, row·column sums" },
    { term: "Non-commutative", def: "AB ≠ BA in general" },
    { term: "Transpose Aᵀ", def: "rows and columns swapped" },
    { term: "Symmetric", def: "Aᵀ = A" }
  ],
  workedExamples: [
    {
      problem: "A = [2 1; 0 3], B = [1 4; 2 1]. Find A + B, 3A, A − B.",
      given: "2×2s",
      formula: "entrywise",
      substitution: "A+B = [3 5; 2 4]; 3A = [6 3; 0 9]; A−B = [1 −3; −2 2]",
      calculation: "cell by cell",
      answer: "as computed — same order required"
    },
    {
      problem: "Multiply [1 2] · [3; 4] (1×2 times 2×1).",
      given: "inner match 2 = 2",
      formula: "dot product",
      substitution: "1·3 + 2·4 = 11",
      calculation: "1×1 result",
      answer: "[11] — a scalar-like 1×1 matrix"
    },
    {
      problem: "Compute AB and BA for A = [1 2; 3 4], B = [0 1; 1 0].",
      given: "both 2×2",
      formula: "row × column",
      substitution: "AB = [2 1; 4 3]; BA = [3 4; 1 2]",
      calculation: "AB ≠ BA",
      answer: "Different products — multiplication is not commutative"
    },
    {
      problem: "Is [1 2; 3 4]·[5 6] defined? What about [5 6]·[1 2; 3 4]?",
      given: "dimension check",
      formula: "inner numbers",
      substitution: "(2×2)(2×1): inner 2=2 ✓ → 2×1 = [17 39]; wait [5 6] is 1×2: (2×2)(1×2) inner 2≠1 ✗ undefined; (1×2)(2×2) inner 2=2 ✓ → [11 14]",
      calculation: "one direction only",
      answer: "First undefined, second = [11 14] — dimensions can block one order"
    },
    {
      problem: "Find A² for A = [1 1; 0 1], and predict Aⁿ.",
      given: "powers",
      formula: "pattern",
      substitution: "A² = [1 2; 0 1]; A³ = [1 3; 0 1] → Aⁿ = [1 n; 0 1]",
      calculation: "shear adds n",
      answer: "Aⁿ = [1 n; 0 1] — a shear matrix accumulates linearly"
    }
  ],
  commonMistakes: [
    "Multiplying corresponding entries for AB — that's the Hadamard product, not matrix multiplication",
    "Skipping the dimension check — inner mismatch means UNDEFINED, not 'zero'",
    "Assuming AB = BA — test with numbers when unsure",
    "Forgetting to reverse order in (AB)ᵀ = BᵀAᵀ",
    "Cancelling: AB = AC does NOT imply B = C (no cancellation law)",
    "Believing AB = O forces a zero factor — zero divisors exist",
    "Adding matrices of different orders — undefined, not 'pad with zeros'"
  ],
  applications: [
    "Computer graphics: composing transformations = multiplying matrices (Unit 6)",
    "Networks: adjacency powers count paths between nodes",
    "Economics: input-output models — production across sectors as matrix products",
    "Cryptography: Hill cipher encodes letters via matrix multiplication",
    "Physics: inertia tensors and rotation matrices"
  ],
  summary: "Matrix addition is entrywise (equal orders); scalar multiplication scales every entry. The product AB uses row i of A against column j of B, defined when inner dimensions match: (m×n)(n×p) → m×p. Addition commutes; multiplication does NOT (AB ≠ BA), cancellation and zero-product fail, but associativity and distributivity hold, and I is the multiplicative identity. Transpose flips rows/columns with (AB)ᵀ = BᵀAᵀ. Matrix multiplication is composition — order matters because actions do.",
  visuals: [
    { type: "flowChart", config: { title: "AB entry recipe", steps: [{ label: "Row i of A", detail: "take" }, { label: "Col j of B", detail: "pair with" }, { label: "Multiply & sum", detail: "dot product" }, { label: "Place at (i,j)", detail: "of AB" }] } }
  ],
  questions: [
    { type: "mcq", q: "For A(2×3), B must be ___ for AB to exist:", options: ["2×3", "3×n", "2×n", "any"], answer: 1, difficulty: 2, explanation: "Inner dims: 3 rows" },
    { type: "mcq", q: "[1 2;0 1]·[3;4] =", options: ["[11 4]", "[11]", "[3 8]", "undefined"], answer: 0, difficulty: 2, explanation: "(2×2)(2×1)→2×1: [11;4]" },
    { type: "mcq", q: "(AB)ᵀ =", options: ["AᵀBᵀ", "BᵀAᵀ", "AB", "BA"], answer: 1, difficulty: 2, explanation: "Reverse the order" },
    { type: "mcq", q: "Which law FAILS for matrices?", options: ["associative ×", "distributive", "commutative ×", "A+O=A"], answer: 2, difficulty: 2, explanation: "AB ≠ BA generally" },
    { type: "tf", q: "AB = O implies A = O or B = O.", answer: false, difficulty: 3, explanation: "Zero divisors exist" },
    { type: "tf", q: "A + B = B + A for same-order matrices.", answer: true, difficulty: 1, explanation: "Addition commutes" },
    { type: "short", q: "The order of (3×2)(2×5) product:", answer: "3x5", difficulty: 2, explanation: "Outer dimensions" },
    { type: "short", q: "A matrix equal to its transpose is called:", answer: "symmetric", difficulty: 2, explanation: "Symmetric" },
    { type: "calc", q: "A = [2 0; 1 3], find 2A − Aᵀ.", answer: "[2 0;0 3]", difficulty: 3, explanation: "[4 0;2 6]−[2 1;0 3]=[2 −1... recompute: [4−2, 0−1; 2−0, 6−3] = [2 −1; 2 3]" },
    { type: "concept", q: "Explain via transformations why AB and BA usually differ.", answer: "order of actions|compose|non-commute", difficulty: 3, explanation: "AB means 'apply B then A'; swapping the order applies the actions differently — rotating then stretching a shape gives a different result than stretching then rotating; matrix multiplication inherits this order-dependence" }
  ]
};

Lessons["g11-mathematics-um3-t3"] = {
  overview: "Special matrix types in depth: square, diagonal, scalar, identity, zero, triangular (upper/lower), symmetric/skew-symmetric, and elementary matrices — the cast whose properties power elimination, determinants and inverses.",
  objectives: [
    "Classify matrices by type from their patterns",
    "Work with upper/lower triangular matrices",
    "Test symmetry: Aᵀ = A vs Aᵀ = −A",
    "Use identity/zero/diagonal/scalar properties",
    "Recognize elementary matrices from row operations"
  ],
  simple: "Matrix types are patterns with superpowers. Diagonal: everything off the main diagonal is 0 — multiply = scale rows/columns; powers are easy ([2 0;0 3]ⁿ = [2ⁿ 0;0 3ⁿ]). Scalar: diagonal with all-equal entries = k·I. Identity: the 1 of matrix multiplication. Zero: the 0. Triangular: upper (zeros BELOW the diagonal — staircase up) or lower (zeros above) — they come out of Gaussian elimination, and multiplying triangulars stays triangular; determinants are just the diagonal product (next unit). Symmetric: Aᵀ = A — the mirror across the diagonal (distance tables are symmetric). Skew-symmetric: Aᵀ = −A — mirror with sign flip, forcing all diagonal entries to 0 (aᵢᵢ = −aᵢᵢ → aᵢᵢ = 0). Every square matrix splits as symmetric + skew: A = ½(A + Aᵀ) + ½(A − Aᵀ) — the matrix version of even + odd functions. Elementary matrices: identity with ONE row operation applied — they ARE row operations in matrix clothing (E·A performs the operation on A) — the bridge between 'do row ops' and 'multiply by a matrix'. Spotting types fast is half of many exam questions.",
  detailed: "<p><b>Triangular algebra.</b> Upper triangular U: uᵢⱼ = 0 for i > j. Products of upper triangulars are upper triangular; diagonal entries multiply (U₁U₂'s diagonal = products of diagonals); inverses of triangular (with nonzero diagonal) stay triangular — the engine of back-substitution. Unit triangular: diagonal all 1s.</p><p><b>Symmetry decomposition.</b> Given square A: S = ½(A + Aᵀ) is symmetric (Sᵀ = ½(Aᵀ + A) = S), K = ½(A − Aᵀ) is skew (Kᵀ = −K), and A = S + K uniquely — proof: if A = S′ + K′, transpose and solve the 2×2 system. Skew-symmetric diagonals: a = −a → a = 0 (odd-order skew matrices always have det 0 — a determinant-unit preview).</p><p><b>Elementary matrices.</b> Three kinds matching the row operations (t4): E₁ swap rows i,j of I; E₂ scale row i by k ≠ 0; E₃ add k·row j to row i. Left-multiplying E·A applies the operation; each E is invertible with E⁻¹ the reverse operation — the reason invertible matrices are products of elementary matrices (t6's inverse theory). Example: E = [1 0; 3 1] adds 3×row 1 to row 2 of any 2×2 A.</p><p><b>Idempotent/involutory (recognition extras).</b> A² = A (projection — e.g. [1 0;0 0]); A² = I (involution — e.g. [0 1;1 0] swaps coordinates). These appear in true/false classification questions.</p>",
  keyTerms: [
    { term: "Diagonal matrix", def: "nonzero only on the main diagonal" },
    { term: "Triangular", def: "zeros below (upper) or above (lower) the diagonal" },
    { term: "Symmetric", def: "Aᵀ = A" },
    { term: "Skew-symmetric", def: "Aᵀ = −A; zero diagonal" },
    { term: "Elementary matrix", def: "identity + one row operation" },
    { term: "Unit triangular", def: "triangular with 1s on diagonal" }
  ],
  workedExamples: [
    {
      problem: "Classify: [4 0 0; 0 1 0; 0 0 7], [1 2 3; 0 4 5; 0 0 6], [2 −3; 3 5].",
      given: "patterns",
      formula: "definitions",
      substitution: "first: diagonal; second: upper triangular; third: symmetric (mirror across diagonal: −3 vs 3? NO — a₁₂ = −3, a₂₁ = 3 → a₂₁ = −a₁₂ → skew-symmetric? diagonal 2,5 ≠ 0 → neither!)",
      calculation: "careful reading",
      answer: "Diagonal; upper triangular; neither (symmetric needs a₁₂ = a₂₁)"
    },
    {
      problem: "Show A = [1 4; −2 3] splits into symmetric + skew parts.",
      given: "decomposition",
      formula: "½(A+Aᵀ), ½(A−Aᵀ)",
      substitution: "Aᵀ = [1 −2; 4 3]; S = [1 1; 1 3]; K = [0 3; −3 0]",
      calculation: "S + K = [1 4; −2 3] ✓",
      answer: "A = [1 1;1 3] + [0 3;−3 0]"
    },
    {
      problem: "What elementary matrix adds 5×row 1 to row 2 of a 2×2?",
      given: "operation",
      formula: "apply to I₂",
      substitution: "I₂ = [1 0; 0 1] → [1 0; 5 1]",
      calculation: "check on A = [a b; c d]: [a b; 5a+c 5b+d] ✓",
      answer: "E = [1 0; 5 1]"
    },
    {
      problem: "Compute D⁵ for D = [2 0; 0 3] without multiplying out.",
      given: "diagonal power",
      formula: "entries power separately",
      substitution: "[2⁵ 0; 0 3⁵]",
      calculation: "[32 0; 0 243]",
      answer: "Diagonal matrices exponentiate entrywise"
    },
    {
      problem: "Prove a skew-symmetric 2×2 has form [0 a; −a 0].",
      given: "Aᵀ = −A",
      formula: "entry equations",
      substitution: "a₁₁ = −a₁₁ → 0; a₂₂ = 0; a₂₁ = −a₁₂ — set a₁₂ = a",
      calculation: "forced shape",
      answer: "Only one free parameter — the pattern [0 a; −a 0]"
    }
  ],
  commonMistakes: [
    "Calling [2 −3; 3 5] symmetric — check a₁₂ = a₂₁ exactly (signs!)",
    "Forgetting skew-symmetric diagonals MUST be 0",
    "Thinking triangular means 'has zeros' — the zeros must be all on one side of the diagonal",
    "Applying elementary matrices on the wrong side (E·A = row ops; A·E = column ops)",
    "Assuming diagonal matrices commute with everything — they don't (only with same-basis ones)",
    "Confusing scalar matrix k·I with the scalar k itself"
  ],
  applications: [
    "Distance/similarity tables are symmetric matrices",
    "Markov chains use stochastic matrices (rows summing to 1) — powers model long-run behavior",
    "Physics: inertia and stress tensors are symmetric; rotations' generators are skew",
    "Computer science: triangular systems solve in O(n²) — the speed of elimination",
    "Graphics: shear matrices are unit triangular"
  ],
  summary: "The special-matrix cast: diagonal (easy powers), scalar k·I, identity and zero (the identities), triangular (elimination's output; determinant = diagonal product), symmetric Aᵀ = A and skew-symmetric Aᵀ = −A (zero diagonal; every square matrix = symmetric + skew), and elementary matrices — row operations wearing matrix clothes (E·A applies the op). Classification is pattern-matching: read the zeros, test the mirror.",
  visuals: [
    { type: "comparison", config: { title: "Symmetric vs skew", left: { name: "Aᵀ = A", items: ["mirror equal", "free diagonal", "distance tables"] }, right: { name: "Aᵀ = −A", items: ["mirror flipped", "zero diagonal", "rotation generators"] } } }
  ],
  questions: [
    { type: "mcq", q: "Which has all zero diagonal forced?", options: ["symmetric", "skew-symmetric", "triangular", "identity"], answer: 1, difficulty: 2, explanation: "a = −a → a = 0" },
    { type: "mcq", q: "[1 0;5 1] is:", options: ["diagonal", "lower triangular", "symmetric", "scalar"], answer: 1, difficulty: 2, explanation: "Zeros above diagonal" },
    { type: "mcq", q: "The product of two upper triangular matrices is:", options: ["diagonal", "upper triangular", "symmetric", "identity"], answer: 1, difficulty: 3, explanation: "The staircase shape is preserved" },
    { type: "mcq", q: "½(A − Aᵀ) is always:", options: ["symmetric", "skew-symmetric", "zero", "identity"], answer: 1, difficulty: 3, explanation: "Transpose flips its sign" },
    { type: "tf", q: "Every identity matrix is diagonal.", answer: true, difficulty: 1, explanation: "Off-diagonal entries are 0" },
    { type: "tf", q: "Elementary matrices are never invertible.", answer: false, difficulty: 2, explanation: "Each has a reverse operation" },
    { type: "short", q: "A² = A matrices are called:", answer: "idempotent", difficulty: 3, explanation: "Idempotent" },
    { type: "short", q: "The diagonal of [0 7; −7 0] (skew type) contains:", answer: "zeros", difficulty: 2, explanation: "Skew forces 0s" },
    { type: "calc", q: "Find [3 0; 0 2]³.", answer: "[27 0;0 8]", difficulty: 2, explanation: "Cube each diagonal entry" },
    { type: "concept", q: "Why is the identity matrix the right '1' for matrix multiplication?", answer: "AI=A|preserves|basis", difficulty: 2, explanation: "I's rows pick out each row of A unchanged (AI = A) and its columns pick A's columns (IA = A) — it performs no transformation, exactly like multiplying numbers by 1" }
  ]
};

Lessons["g11-mathematics-um3-t4"] = {
  overview: "Elementary row operations (swap, scale, add-multiple) and row-echelon form: the mechanics of Gaussian elimination that turn any matrix into a triangular staircase — the universal solver for linear systems (next topic).",
  objectives: [
    "Perform the three row operations (R↔, kR, R+kR)",
    "Recognize row-echelon form (REF) conditions",
    "Reduce a matrix to REF by elimination",
    "Explain why row operations preserve solution sets",
    "Distinguish REF from reduced row-echelon form (RREF)"
  ],
  simple: "Three legal moves on rows — the only tools you need: (1) SWAP two rows (R₁ ↔ R₂); (2) MULTIPLY a row by a nonzero number (2R₁ → R₁); (3) ADD a multiple of one row to another (R₂ + 3R₁ → R₂). Never multiply the whole matrix by a scalar (that changes it), and never 'add a row to itself'. Goal: row-echelon form — a staircase: zero rows at the bottom, each nonzero row's first nonzero entry (the LEADING entry) is 1 (in REF convention: leading 1), each leading 1 sits to the RIGHT of the one above, and everything BELOW each leading 1 is 0. Recipe (Gaussian elimination): work column by column — get a 1 on top (swap if needed), use row-add to zero everything below it, move to the next column/row, repeat. Example: [1 2; 3 4] → R₂ − 3R₁ → [1 2; 0 −2] → −½R₂ → [1 2; 0 1] — REF done (back-substitution reads the answer). Why legal: row operations mirror equation operations (swap equations, scale an equation, add equations) — they never change the solution set. RREF goes further: leading 1s with zeros ABOVE too (Gauss-Jordan) — the answer reads off directly.",
  detailed: "<p><b>Notation discipline.</b> Write the operation on the arrow: R₂ → R₂ − 3R₁ (replace row 2 by itself minus 3×row 1). The forbidden 'whole-matrix scaling' changes the system; row scaling is fine because it scales one EQUATION. Each operation is reversible (swap back, divide by k, subtract the multiple) — reversibility = same solution set, the theoretical guarantee.</p><p><b>REF algorithm.</b> For column j (left to right), pivot row i: (1) if aᵢⱼ = 0, swap a lower nonzero row up; (2) if all entries below are 0, move to the next column (no pivot here — a free variable signal); (3) scale the pivot row to make the leading entry 1; (4) for every row below, add a multiple of the pivot row to zero the column. Result: staircase. Rank = number of nonzero REF rows (pivots). RREF: continue upward — zero ABOVE each leading 1 as well; the RREF is UNIQUE for a given matrix (REF isn't — operation order varies it).</p><p><b>Connection to elementary matrices.</b> Each row operation = left-multiplication by an elementary matrix (t3): swapping rows = permutation matrix; scaling = diagonal with k; add-multiple = unit triangular with k. A sequence of operations reducing A to REF is Eₖ…E₂E₁A = U — the LU-decomposition seed (Grade 12+).</p><p><b>Pitfalls as features.</b> A zero row at the top of the staircase means a dependent/redundant equation; a column with no pivot means a free variable (infinitely many solutions — t5's classification). Fractions are normal — keep them exact (decimals drift).</p>",
  keyTerms: [
    { term: "Row operation", def: "swap / scale / add-multiple of rows" },
    { term: "Leading entry", def: "first nonzero of a row" },
    { term: "REF", def: "staircase: zeros below leading 1s, rightward steps" },
    { term: "RREF", def: "REF + zeros above leading 1s (unique)" },
    { term: "Pivot", def: "the leading 1 position used to clear a column" },
    { term: "Rank", def: "number of nonzero rows in REF" }
  ],
  workedExamples: [
    {
      problem: "Reduce [2 4; 6 5] to REF.",
      given: "2×2",
      formula: "algorithm",
      substitution: "½R₁ → [1 2; 6 5]; R₂ − 6R₁ → [1 2; 0 −7]; −(1/7)R₂ → [1 2; 0 1]",
      calculation: "staircase reached",
      answer: "REF = [1 2; 0 1] (rank 2)"
    },
    {
      problem: "Reduce [1 3 2; 2 6 4; 1 2 1].",
      given: "3×3 with a dependent row",
      formula: "eliminate",
      substitution: "R₂ − 2R₁ → [0 0 0]; R₃ − R₁ → [0 −1 −1]; swap R₂↔R₃; −R₂ → [1 3 2; 0 1 1; 0 0 0]",
      calculation: "zero row at bottom",
      answer: "REF with rank 2 — one redundant equation"
    },
    {
      problem: "Which is a VALID operation: R₂ → R₂ + R₁, R₂ → 3R₂, R₂ → R₂ + 3, R₂ → R₂ − 5R₁?",
      given: "notation",
      formula: "three moves",
      substitution: "add-multiple ✓; scale ✓; adding the NUMBER 3 to a row — not a row operation ✗; add-multiple ✓",
      calculation: "three valid",
      answer: "All except 'R₂ + 3' — you add rows to rows, not scalars"
    },
    {
      problem: "From REF [1 2 3; 0 1 2; 0 0 0], state rank and pivot columns.",
      given: "staircase",
      formula: "read pivots",
      substitution: "nonzero rows = 2; leading 1s at columns 1 and 2",
      calculation: "col 3 has no pivot",
      answer: "Rank 2; pivots in cols 1–2; x₃ would be a free variable"
    },
    {
      problem: "Continue the previous REF to RREF.",
      given: "[1 2 3; 0 1 2; 0 0 0]",
      formula: "clear above",
      substitution: "R₁ − 2R₂ → [1 0 −1; 0 1 2; 0 0 0]",
      calculation: "zeros above each leading 1",
      answer: "RREF = [1 0 −1; 0 1 2; 0 0 0]"
    }
  ],
  commonMistakes: [
    "Scaling the ENTIRE matrix (or an equation's both sides inconsistently) — scale ONE row",
    "Adding a row to itself or mixing 'R₂ + 3R₁' with 'R₂ → 3R₁' (the latter erases information)",
    "Leaving a nonzero below a leading 1 — REF requires the staircase clean",
    "Forgetting to swap a zero pivot row with a nonzero one below",
    "Using decimals and losing exactness — keep fractions",
    "Thinking REF is unique — only RREF is"
  ],
  applications: [
    "Solving any linear system — the engine of t5 and Cramer's alternative",
    "Finding inverses (t6): row-reduce [A | I] to [I | A⁻¹]",
    "Computer algebra: every CAS solves systems by elimination",
    "Economics: equilibrium of many markets solved by elimination",
    "Engineering: structural load networks reduce to triangular form"
  ],
  summary: "Elementary row operations — swap, nonzero scale, add-multiple — are equation operations that preserve solution sets (each is reversible). Gaussian elimination drives a matrix to row-echelon form: zero rows bottom, leading 1s stepping right, zeros below each pivot; rank = nonzero rows; missing pivots flag free variables. Gauss-Jordan continues to the unique RREF (zeros above too). Row operations are elementary-matrix multiplication in disguise — the workhorse behind inverses and systems.",
  visuals: [
    { type: "flowChart", config: { title: "Elimination loop", steps: [{ label: "Pivot column", detail: "left to right" }, { label: "1 on top", detail: "scale/swap" }, { label: "Zero below", detail: "add multiples" }, { label: "Next row", detail: "staircase down" }] } }
  ],
  questions: [
    { type: "mcq", q: "Which is NOT an elementary row operation?", options: ["swap rows", "scale a row by 3", "add column to row", "add 2R₁ to R₂"], answer: 2, difficulty: 1, explanation: "Columns aren't touched in row ops" },
    { type: "mcq", q: "In REF, all entries below a leading 1 are:", options: ["1", "0", "unchanged", "negative"], answer: 1, difficulty: 1, explanation: "The staircase clears below" },
    { type: "mcq", q: "The rank of a matrix equals:", options: ["rows total", "nonzero REF rows", "columns", "diagonal sum"], answer: 1, difficulty: 2, explanation: "Pivot count" },
    { type: "mcq", q: "RREF additionally requires:", options: ["zeros above pivots", "square shape", "integers", "det ≠ 0"], answer: 0, difficulty: 2, explanation: "Gauss-Jordan clears upward" },
    { type: "tf", q: "Row operations can change a system's solution set.", answer: false, difficulty: 2, explanation: "They're reversible equation ops" },
    { type: "tf", q: "Every matrix has exactly one REF.", answer: false, difficulty: 3, explanation: "REF varies with choices; RREF is unique" },
    { type: "short", q: "The first nonzero entry of a row is the ___ entry:", answer: "leading", difficulty: 1, explanation: "Leading" },
    { type: "short", q: "Operation notation 'R₃ → R₃ − 2R₁' means:", answer: "add -2 times row1 to row3", difficulty: 2, explanation: "Replace R₃ by R₃ − 2R₁" },
    { type: "calc", q: "Reduce [1 1; 3 4] to REF and give the rank.", answer: "[1 1;0 1], rank 2", difficulty: 2, explanation: "R₂−3R₁ → [0 1]" },
    { type: "concept", q: "Why does a zero row in the REF of a system's coefficient matrix signal dependence?", answer: "redundant equation|combination|no new info", difficulty: 3, explanation: "Elimination combines the original equations; a zero row means one equation was a combination of the others — it carried no independent constraint, so the equations are linearly dependent (rank < count)" }
  ]
};

Lessons["g11-mathematics-um3-t5"] = {
  overview: "Systems of linear equations solved by matrices: writing Ax = b, Gaussian elimination on the augmented matrix, and classifying solutions — unique, none (inconsistent), or infinitely many (dependent) — with the geometry of planes.",
  objectives: [
    "Encode a linear system as an augmented matrix [A | b]",
    "Solve 2×2 and 3×3 systems by elimination",
    "Classify: unique / no solution / infinitely many",
    "Interpret results geometrically (lines/planes)",
    "Check solutions in the original equations"
  ],
  simple: "A linear system — 2x + y = 5, x − y = 1 — becomes one augmented matrix: [2 1 | 5; 1 −1 | 1]. Row-reduce it (previous topic) and read the answer: [1 0 | 2; 0 1 | 1] → x = 2, y = 1. Three outcomes, always: (1) UNIQUE — a pivot for every variable (the staircase completes) — lines/planes meet at one point; (2) NONE — a row like [0 0 | 5] ('0 = 5' — absurd) — inconsistent, parallel lines that never meet; (3) INFINITELY MANY — a row of all zeros [0 0 | 0] with fewer pivots than variables — the equations repeat each other (dependent); free variables parameterize the family (x = 3 − 2t, y = t). Geometry: two equations = two lines in the plane (cross once / parallel / same line); three = three planes (point / no common point / a shared line). Word problems (prices, mixtures, angles) become systems: define variables, write equations, matrix, eliminate, interpret. Always plug the solution back — 10 seconds that saves the whole problem.",
  detailed: "<p><b>Matrix form.</b> Ax = b: A = coefficients (m×n), x = unknown column (n×1), b = constants (m×1). The augmented matrix [A | b] carries everything; row operations on it are operations on the equations — solution-preserving. Coefficient-only reduction (A alone) tells rank; the comparison rank(A) vs rank([A|b]) classifies: rank(A) < rank([A|b]) ⇔ inconsistent (a pivot appeared in the b column).</p><p><b>The solution trichotomy (n variables).</b> Unique: rank(A) = rank([A|b]) = n. Infinitely many: ranks equal but < n → (n − rank) free parameters. None: ranks unequal. For 2×2/3×3 square systems this matches the determinant test (Unit 4): det ≠ 0 → unique; det = 0 → none or infinitely many (elimination distinguishes them).</p><p><b>Worked elimination pattern (3×3).</b> Example: x + y + z = 6; 2x + 3z = 11; x + 2y − z = 0. Augment → R₂ − 2R₁, R₃ − R₁ → eliminate y from R₃ → back-substitute (or push to RREF). Keep the b-column in every operation — dropping it is the classic slip. Fractions: multiply rows to clear them when convenient.</p><p><b>Parameterizing infinite solutions.</b> From RREF [1 0 −2 | 1; 0 1 3 | 4; 0 0 0 | 0]: x = 1 + 2t, y = 4 − 3t, z = t (t ∈ ℝ) — the line of solutions; geometrically two coincident-ish planes cutting in a line. 'No solution' geometry: [0 0 | 3] row — parallel planes with no common point; or three planes forming a triangular prism (pairwise meet, no triple point).</p><p><b>Modeling.</b> Angle problems (sum + relations), digit problems (place values), mixture/ticket/stamp systems, cost from bundles — the recipe: variables with units → equations → matrix → classify → answer the QUESTION (not just x, y, z).</p>",
  keyTerms: [
    { term: "Augmented matrix", def: "[A | b] — coefficients + constants" },
    { term: "Consistent", def: "has at least one solution" },
    { term: "Inconsistent", def: "no solution (0 = nonzero row)" },
    { term: "Dependent", def: "infinitely many (redundant equations)" },
    { term: "Free variable", def: "non-pivot variable — carries a parameter" }
  ],
  workedExamples: [
    {
      problem: "Solve by elimination: 2x + y = 5; x − y = 1.",
      given: "2×2",
      formula: "augmented matrix",
      substitution: "[2 1|5; 1 −1|1] → R₁↔R₂ → [1 −1|1; 2 1|5] → R₂−2R₁ → [1 −1|1; 0 3|3] → ⅓R₂ → [1 −1|1; 0 1|1] → R₁+R₂ → [1 0|2; 0 1|1]",
      calculation: "x = 2, y = 1",
      answer: "(2, 1) — check: 4+1 = 5 ✓, 2−1 = 1 ✓"
    },
    {
      problem: "Classify: x + y = 3; 2x + 2y = 7.",
      given: "parallel lines",
      formula: "eliminate",
      substitution: "[1 1|3; 2 2|7] → R₂ − 2R₁ → [0 0|1] — '0 = 1'",
      calculation: "absurd row",
      answer: "Inconsistent — no solution (parallel lines)"
    },
    {
      problem: "Classify & solve: x + 2y = 4; 2x + 4y = 8.",
      given: "same line twice",
      formula: "eliminate",
      substitution: "R₂ − 2R₁ → [0 0|0]; RREF [1 2|4; 0 0|0]",
      calculation: "one pivot, two variables",
      answer: "Infinitely many: y = t, x = 4 − 2t"
    },
    {
      problem: "Solve: x + y + z = 6; x − z = 0; y + z = 4.",
      given: "3×3",
      formula: "augmented elimination",
      substitution: "[1 1 1|6; 1 0 −1|0; 0 1 1|4] → R₂−R₁ → [0 −1 −2|−6]; R₃−R₂' → [0 0 −1|−2] → z = 2, y = 2, x = 2",
      calculation: "back-substitute",
      answer: "(2, 2, 2)"
    },
    {
      problem: "A 3-variable system's RREF is [1 0 2|5; 0 1 −1|3; 0 0 0|0]. Describe the solutions.",
      given: "RREF",
      formula: "free parameter",
      substitution: "x = 5 − 2t, y = 3 + t, z = t",
      calculation: "one-parameter family",
      answer: "Infinitely many — a line of solutions (rank 2 < 3 variables)"
    }
  ],
  commonMistakes: [
    "Forgetting to apply row operations to the b-column (the vertical bar is part of the matrix!)",
    "Declaring 'infinitely many' from ANY zero row — check: [0 0 | 5] is NONE, [0 0 | 0] is dependent",
    "Stopping at REF and misreading — back-substitute carefully or finish to RREF",
    "Swapping x, y, z values when writing the answer",
    "Not checking in the ORIGINAL equations (arithmetic slips survive elimination)",
    "In word problems, answering x instead of the asked quantity (e.g. 'how many coffee kg?')"
  ],
  applications: [
    "Budgeting: three-item purchases with bundle totals → 3×3 system",
    "Chemistry: balancing equations = solving a homogeneous system",
    "Traffic flow: junction conservation laws form linear systems",
    "Economics: multi-market equilibrium",
    "Navigation: GPS trilateration solves sphere-intersection systems"
  ],
  summary: "Linear systems live in the augmented matrix [A | b]; elimination solves them without touching equation algebra. Outcomes: unique (full staircase of pivots), none (a [0…0 | c] absurd row), or infinitely many (zero row + free variables, parameterized solutions). Rank comparison decides; geometry reads it as lines/planes meeting, missing, or coinciding. Always verify in the original equations.",
  visuals: [
    { type: "flowChart", config: { title: "Read the REF", steps: [{ label: "[0 0|c≠0]?", detail: "no solution" }, { label: "pivot per var?", detail: "unique" }, { label: "zero row + free?", detail: "∞ many" }] } }
  ],
  questions: [
    { type: "mcq", q: "A row [0 0 | 7] in the augmented matrix means:", options: ["x = 7", "infinitely many", "no solution", "y = 7"], answer: 2, difficulty: 2, explanation: "0 = 7 is impossible" },
    { type: "mcq", q: "A consistent dependent system has:", options: ["one solution", "none", "infinitely many", "exactly two"], answer: 2, difficulty: 1, explanation: "Redundant equations" },
    { type: "mcq", q: "The augmented matrix for x + 2y = 1; 3x − y = 2 is:", options: ["[1 2|1; 3 −1|2]", "[1 2; 3 −1]", "[1 3|2 1]", "x y"], answer: 0, difficulty: 2, explanation: "Coefficients + constants" },
    { type: "mcq", q: "Three planes meeting in a single point = system with:", options: ["no solution", "unique solution", "∞ solutions", "2 solutions"], answer: 1, difficulty: 2, explanation: "One common point" },
    { type: "tf", q: "A system can have exactly two solutions.", answer: false, difficulty: 3, explanation: "Linear: 0, 1, or ∞" },
    { type: "tf", q: "Row operations preserve the solution set.", answer: true, difficulty: 1, explanation: "They're reversible equation ops" },
    { type: "short", q: "The free variable in RREF [1 0 3|2; 0 1 −1|4] is:", answer: "z", difficulty: 2, explanation: "Column 3 has no pivot" },
    { type: "short", q: "The form [A | b] is called the ___ matrix:", answer: "augmented", difficulty: 1, explanation: "Augmented" },
    { type: "calc", q: "Solve: x + y = 10; x − y = 4.", answer: "7 and 3", difficulty: 1, explanation: "Add: 2x=14 → x=7, y=3" },
    { type: "concept", q: "Explain why equal rank(A) = rank([A|b]) < n gives infinitely many solutions.", answer: "consistent|free variables|parameters", difficulty: 3, explanation: "Equal ranks ⇒ no absurd row ⇒ consistent; fewer pivots than unknowns ⇒ at least one free variable, and every parameter value yields a valid solution — an infinite family" }
  ]
};

Lessons["g11-mathematics-um3-t6"] = {
  overview: "The inverse of a square matrix: A⁻¹ satisfies AA⁻¹ = A⁻¹A = I; which matrices have one (non-singular, det ≠ 0), how to find it by row reduction ([A|I] → [I|A⁻¹]) or the adjoint formula, and using inverses to solve systems.",
  objectives: [
    "Define the matrix inverse and its uniqueness",
    "Determine invertibility (non-zero determinant)",
    "Compute A⁻¹ via [A | I] row reduction",
    "Verify AA⁻¹ = I",
    "Solve Ax = b as x = A⁻¹b"
  ],
  simple: "The inverse A⁻¹ undoes A: AA⁻¹ = A⁻¹A = I (the matrix '1'). Like numbers: 4⁻¹ = ¼, and only nonzero numbers invert — for matrices, only NON-SINGULAR ones (det ≠ 0 — next unit's tool). Not every square matrix has one: [1 2; 2 4] can't (its rows are proportional — it squashes the plane onto a line; nothing un-squashes). Finding it: augment A with the identity — [A | I] — and row-reduce until the left side becomes I; the right side IS A⁻¹: [A|I] → [I|A⁻¹]. Worked: A = [2 1; 5 3]: [2 1|1 0; 5 3|0 1] → R₂−2R₁... → [1 0|3 −1; 0 1|−5 2] → A⁻¹ = [3 −1; −5 2]. Verify: [2 1;5 3][3 −1;−5 2] = [1 0;0 1] ✓. Properties: (A⁻¹)⁻¹ = A; (AB)⁻¹ = B⁻¹A⁻¹ (reverse order — socks/shoes); (Aᵀ)⁻¹ = (A⁻¹)ᵀ; (kA)⁻¹ = (1/k)A⁻¹. Use: solve Ax = b by x = A⁻¹b — one inverse handles MANY b's (same prices, different baskets).",
  detailed: "<p><b>Existence & uniqueness.</b> A⁻¹ exists iff A is row-equivalent to I (invertible matrix theorem — equivalently rank = n, det ≠ 0, columns independent, Ax = b always uniquely solvable). Uniqueness: if B and C both invert A, B = B(AC) = (BA)C = C. Singular matrices fail: proportional rows/columns or a zero row make the staircase incomplete — [A|I] reduction hits a zero row on the left → STOP, no inverse.</p><p><b>The reduction algorithm.</b> Write [A | Iₙ]; apply row ops to the WHOLE augmented block; goal left side = I. If the left reaches I, the right is A⁻¹. Sanity check by multiplying both ways (AA⁻¹ and A⁻¹A — one direction can hide arithmetic slips). The 2×2 shortcut (Unit 4 formalizes): [a b; c d]⁻¹ = 1/(ad−bc)·[d −b; −c a] — swap diagonal, negate off-diagonal, divide by det.</p><p><b>Adjoint formula preview.</b> A⁻¹ = adj(A)/det(A) — adjugate = transpose of the cofactor matrix (Unit 4's minors). For 2×2 it collapses to the shortcut; conceptually it shows det = 0 ⇔ no inverse (division by zero).</p><p><b>Solving systems.</b> Ax = b → x = A⁻¹b (multiply left by A⁻¹). Efficient when one A serves many b (same system, different constants). For a single big system, elimination is cheaper than inverting. The inverse also decodes: encryption matrices (Hill cipher) decode by A⁻¹ mod 26.</p>",
  keyTerms: [
    { term: "Inverse A⁻¹", def: "AA⁻¹ = A⁻¹A = I" },
    { term: "Singular", def: "no inverse (det = 0)" },
    { term: "Non-singular", def: "invertible" },
    { term: "[A|I] method", def: "reduce to [I|A⁻¹]" },
    { term: "Reversal law", def: "(AB)⁻¹ = B⁻¹A⁻¹" }
  ],
  workedExamples: [
    {
      problem: "Find A⁻¹ for A = [2 1; 5 3] by reduction.",
      given: "2×2",
      formula: "[A|I] → [I|A⁻¹]",
      substitution: "[2 1|1 0; 5 3|0 1] → R₂−2R₁... → ½R₁ → R₁−R₂ → [1 0|3 −1; 0 1|−5 2]",
      calculation: "verify AA⁻¹ = I",
      answer: "A⁻¹ = [3 −1; −5 2]"
    },
    {
      problem: "Show [1 2; 3 6] has no inverse.",
      given: "singular",
      formula: "det or reduction",
      substitution: "det = 1·6 − 2·3 = 0; or reduce: R₂ − 3R₁ → [0 0] left row — never reaches I",
      calculation: "proportional rows",
      answer: "Singular — rows are multiples (the matrix collapses the plane)"
    },
    {
      problem: "Use the 2×2 shortcut on A = [4 7; 2 6].",
      given: "formula",
      formula: "1/(ad−bc)[d −b; −c a]",
      substitution: "det = 24 − 14 = 10 → A⁻¹ = ⅕... [6 −7; −2 4]/10",
      calculation: "[0.6 −0.7; −0.2 0.4]",
      answer: "A⁻¹ = [3/5 −7/10; −1/5 2/5]"
    },
    {
      problem: "Solve 2x + y = 7; 5x + 3y = 16 using A⁻¹ = [3 −1; −5 2].",
      given: "matrix system",
      formula: "x = A⁻¹b",
      substitution: "[3 −1; −5 2][7; 16] = [21 − 16; −35 + 32] = [5; −3]",
      calculation: "x = 5, y = −3",
      answer: "(5, −3) — check: 10 − 3 = 7 ✓, 25 − 9 = 16 ✓"
    },
    {
      problem: "If A⁻¹ = [1 2; 0 3], find (2A)⁻¹ and (A⁻¹)⁻¹.",
      given: "properties",
      formula: "(kA)⁻¹ = (1/k)A⁻¹; (A⁻¹)⁻¹ = A",
      substitution: "(2A)⁻¹ = ½[1 2; 0 3] = [0.5 1; 0 1.5]; (A⁻¹)⁻¹ = A = (A⁻¹)⁻¹ — compute inverse of [1 2;0 3]: det 3 → [3 −2; 0 1]/3",
      calculation: "two laws",
      answer: "(2A)⁻¹ = [½ 1; 0 3/2]; A = [1 −2/3; 0 1/3]"
    }
  ],
  commonMistakes: [
    "Trying to invert non-square matrices — inverses are square-only",
    "Forgetting to reverse order in (AB)⁻¹ = B⁻¹A⁻¹",
    "Stopping the [A|I] reduction when the left isn't I yet — or not noticing a zero row means 'singular'",
    "'Inverting' by flipping each entry (1/a, 1/b…) — that's not it",
    "Skipping the AA⁻¹ = I verification — the cheapest insurance",
    "Solving x = bA⁻¹ instead of x = A⁻¹b — side matters (non-commutativity!)"
  ],
  applications: [
    "Cryptography: Hill cipher decryption = multiplying by A⁻¹",
    "Economics: Leontief input-output — output vector = (I − M)⁻¹ demand",
    "Engineering: stiffness matrices — displacement = K⁻¹ force",
    "Statistics: covariance matrices and least-squares (β = (XᵀX)⁻¹Xᵀy)",
    "Computer graphics: undoing transformations with inverse matrices"
  ],
  summary: "A⁻¹ undoes A (AA⁻¹ = I); it exists exactly for non-singular matrices (det ≠ 0, full rank) and is unique. Compute by row-reducing [A | I] to [I | A⁻¹] (or the 2×2 swap-negate-divide shortcut). Laws: (AB)⁻¹ = B⁻¹A⁻¹ (reverse), (Aᵀ)⁻¹ = (A⁻¹)ᵀ, (kA)⁻¹ = A⁻¹/k. Systems solve as x = A⁻¹b — one inverse, many right-hand sides. Singular = information-destroying = unundoable.",
  visuals: [
    { type: "flowChart", config: { title: "Inverse by reduction", steps: [{ label: "[A | I]", detail: "augment" }, { label: "Row ops", detail: "both sides" }, { label: "[I | A⁻¹]", detail: "left done?" }, { label: "Verify", detail: "AA⁻¹ = I" }] } }
  ],
  questions: [
    { type: "mcq", q: "AA⁻¹ equals:", options: ["A", "0", "I", "Aᵀ"], answer: 2, difficulty: 1, explanation: "Identity" },
    { type: "mcq", q: "(AB)⁻¹ =", options: ["A⁻¹B⁻¹", "B⁻¹A⁻¹", "AB", "B A"], answer: 1, difficulty: 2, explanation: "Reverse order" },
    { type: "mcq", q: "Which is singular?", options: ["[1 0;0 2]", "[2 2;4 4]", "[0 1;1 0]", "[3 1;1 1]"], answer: 1, difficulty: 2, explanation: "Proportional rows, det 0" },
    { type: "mcq", q: "[A|I] reduced to [I|B]: B is:", options: ["Aᵀ", "A⁻¹", "2A", "undefined"], answer: 1, difficulty: 1, explanation: "The reduction's purpose" },
    { type: "tf", q: "Every square matrix has an inverse.", answer: false, difficulty: 1, explanation: "Only non-singular ones" },
    { type: "tf", q: "(A⁻¹)⁻¹ = A.", answer: true, difficulty: 2, explanation: "Undoing the undo" },
    { type: "short", q: "The 2×2 inverse of [a b; c d] divides by:", answer: "ad-bc", difficulty: 2, explanation: "The determinant ad−bc" },
    { type: "short", q: "Solving Ax = b: x =", answer: "A⁻¹b", difficulty: 1, explanation: "Left-multiply by A⁻¹" },
    { type: "calc", q: "Find the inverse of [1 2; 3 4].", answer: "[-2 1; 1.5 -0.5]", difficulty: 3, explanation: "det = −2 → [4 −2;−3 1]/(−2)" },
    { type: "concept", q: "Explain geometrically why a singular matrix has no inverse.", answer: "collapse|area zero|many-to-one", difficulty: 3, explanation: "A singular matrix squashes the plane onto a line or point (zero area scale) — many inputs share one output, so no function can undo it; information is destroyed, and an inverse would need to guess" }
  ]
};

Lessons["g11-mathematics-um3-t7"] = {
  overview: "Matrices in action: encoding and solving real problems — mixtures, costs, geometry, networks — plus transformation matrices (scaling, reflection, shear) acting on points, previewing Unit 6.",
  objectives: [
    "Translate word problems into matrix equations",
    "Solve via Ax = b with inverses or elimination",
    "Apply transformation matrices to points",
    "Use matrices for data aggregation (prices × quantities)",
    "Interpret matrix products in context"
  ],
  simple: "Matrices earn their keep on real problems. Pattern 1 — bundles and prices: 3 coffees + 2 teas = 110 Birr; 1 coffee + 4 teas = 120 → [3 2; 1 4][c; t] = [110; 120] → solve (inverse or elimination): c = 20, t = 25. Pattern 2 — data aggregation: quantities matrix × prices matrix = totals (the spreadsheet SUMPRODUCT). Pattern 3 — geometry: angle relations, digit place-values, perimeter systems → same Ax = b. Pattern 4 — transformations: a matrix acts on a point (x, y) by multiplication: [k 0; 0 k] scales by k; [−1 0; 0 1] reflects in the y-axis; [1 0; 0 −1] in the x-axis; [0 1; 1 0] reflects in y = x; [1 k; 0 1] shears horizontally. Apply to a shape's vertices one by one — the image's corners. Pattern 5 — networks: adjacency matrices; A² counts 2-step routes. The workflow: define variables with units → build A, x, b → solve → interpret and CHECK against the story (negative prices = model error).",
  detailed: "<p><b>System modeling.</b> Multi-item purchase problems: rows = transactions, columns = items, unknowns = unit prices — x = A⁻¹b when A is square non-singular; when there are more transactions than items (overdetermined), elimination exposes inconsistency (bad data) or confirms. Mixture: mass and component balances give two equations (total mass, solute mass). Digit problems: a 2-digit number = 10t + u — relations on t, u form a linear system.</p><p><b>Aggregation products.</b> Q (branches × products) times P (products × 1 price) = totals per branch — matrix multiplication as 'structured sum-of-products'; swapping the order (P as row × Q) gives per-product totals across branches. Interpretation questions ask exactly this: what does entry (i,j) of the product MEAN in the story?</p><p><b>Transformation matrices (2D).</b> Acting on column vectors [x; y]: scaling diag(a, b); reflections (axes, origin [−1 0;0 −1], line y = x [0 1;1 0]); shears [1 k;0 1] (x-shear: y fixed, x += ky); rotation by θ = [cosθ −sinθ; sinθ cosθ] (Unit 6's full tour). Composition = product: doing R then S = matrix S·R (rightmost first — the composition convention from Unit 1). Determinant = area scale factor (Unit 4): |det| = 2 means areas double; det < 0 flips orientation (reflections).</p><p><b>Networks & powers.</b> Adjacency A (aᵢⱼ = 1 if i→j edge): (Aⁿ)ᵢⱼ = number of n-step walks i → j — 'how many 2-stop routes?' is an entry of A². Markov-style: rows summing to 1 move quantities between states; long-run = powers converging (the 'steady state' of traffic or brand switching).</p>",
  keyTerms: [
    { term: "Ax = b model", def: "coefficients × unknowns = totals" },
    { term: "Aggregation", def: "product of matrices = structured totals" },
    { term: "Transformation matrix", def: "acts on points to move shapes" },
    { term: "Shear", def: "slide parallel to an axis" },
    { term: "Adjacency matrix", def: "network connections as 0/1" }
  ],
  workedExamples: [
    {
      problem: "3 pens + 2 books = 260 Birr; 1 pen + 4 books = 280 Birr. Find prices by matrices.",
      given: "two purchases",
      formula: "x = A⁻¹b",
      substitution: "A = [3 2; 1 4], det = 10, A⁻¹ = [0.4 −0.2; −0.1 0.3]; x = A⁻¹[260; 280] = [104 − 56; −26 + 84]",
      calculation: "pen 48, book 58",
      answer: "Pen 48 Birr, book 58 Birr (check: 144 + 116 = 260 ✓)"
    },
    {
      problem: "Stock S = [10 5; 8 12] (branches × items), prices p = [20; 15]. Find branch totals and item totals.",
      given: "data",
      formula: "products",
      substitution: "S·p = [10·20+5·15; 8·20+12·15] = [275; 340] per branch; pᵀ... item totals = [10 5;8 12]ᵀp → [2·... = [296; 259]? compute: item1: 10·20 + 8·20 = 360; item2: 5·15 + 12·15 = 255",
      calculation: "rows vs columns",
      answer: "Branch totals [275, 340]; item totals [360, 255] — same data, two readings"
    },
    {
      problem: "Apply [0 −1; 1 0] to (2, 1). What transformation is it?",
      given: "matrix × point",
      formula: "multiply",
      substitution: "[0 −1; 1 0][2; 1] = [−1; 2] — matches rotation 90° CCW formula (cos90 = 0, sin90 = 1)",
      calculation: "(2,1) → (−1,2)",
      answer: "90° counterclockwise rotation about the origin"
    },
    {
      problem: "Triangle (0,0), (4,0), (0,2) under shear [1 2; 0 1]. Find image vertices and area change.",
      given: "shear",
      formula: "x' = x + 2y",
      substitution: "(0,0)→(0,0); (4,0)→(4,0); (0,2)→(4,2); det = 1 → area preserved",
      calculation: "same base, same height",
      answer: "Image (0,0),(4,0),(4,2); area unchanged (shears preserve area)"
    },
    {
      problem: "Network A = [0 1 0; 1 0 1; 0 1 0]. How many 2-step walks from node 1 to node 3?",
      given: "adjacency",
      formula: "A² entry (1,3)",
      substitution: "A² = [1 0 1; 0 2 0; 1 0 1]; entry (1,3) = 1",
      calculation: "path 1→2→3",
      answer: "One 2-step walk (via node 2)"
    }
  ],
  commonMistakes: [
    "Mismatching rows/columns when building A (declare: rows = transactions, columns = items)",
    "Multiplying A·x on the wrong side (x = A⁻¹b, left-multiplied)",
    "Applying transformation matrices to (x, y) as a row instead of a column",
    "Reading product entries without context — (i,j) means row-i story × column-j story",
    "Forgetting units in the answer (Birr, kg, degrees)",
    "Assuming a solution with negative prices is valid — reject and re-check the model"
  ],
  applications: [
    "Market research: cross-tabulation tables are matrix products",
    "Logistics: route counting via adjacency powers",
    "Graphics/games: every sprite move is a matrix acting on coordinates",
    "Chemistry: balancing equations as homogeneous systems",
    "Finance: portfolio returns = weights × asset returns"
  ],
  summary: "Applied matrices: word problems become Ax = b (prices, mixtures, digits, angles) solved by inverse or elimination; products aggregate data (quantities × prices); transformation matrices move points — scale, reflect, shear, rotate — with composition as matrix multiplication (rightmost first) and |det| as the area scale; adjacency powers count network walks. The discipline: declare the layout, keep units, check the story.",
  visuals: [
    { type: "flowChart", config: { title: "Model → solve", steps: [{ label: "Variables", detail: "with units" }, { label: "Build A, b", detail: "rows = stories" }, { label: "Solve", detail: "x = A⁻¹b" }, { label: "Check", detail: "in the story" }] } }
  ],
  questions: [
    { type: "mcq", q: "The matrix [−1 0; 0 1] performs:", options: ["x-axis reflection", "y-axis reflection", "rotation", "shear"], answer: 1, difficulty: 2, explanation: "x → −x" },
    { type: "mcq", q: "Doing transformation P then Q is the matrix:", options: ["PQ", "QP", "P+Q", "P⁻¹Q"], answer: 1, difficulty: 3, explanation: "Rightmost acts first: QP" },
    { type: "mcq", q: "A² of an adjacency matrix counts:", options: ["nodes", "1-step edges", "2-step walks", "areas"], answer: 2, difficulty: 3, explanation: "Two-edge paths" },
    { type: "mcq", q: "Shear matrices have determinant:", options: ["0", "1", "−1", "k"], answer: 1, difficulty: 3, explanation: "Area-preserving" },
    { type: "tf", q: "A price system's solution with negative values is acceptable if the algebra is right.", answer: false, difficulty: 2, explanation: "Reality vetoes it — re-model" },
    { type: "tf", q: "Scaling by [2 0; 0 2] doubles areas.", answer: false, difficulty: 3, explanation: "Lengths double → areas ×4 (det = 4)" },
    { type: "short", q: "The image of (3, 1) under [1 0; 0 −1]:", answer: "(3,-1)", difficulty: 2, explanation: "x-axis reflection" },
    { type: "short", q: "In Ax = b, x is the vector of:", answer: "unknowns", difficulty: 1, explanation: "Unknowns" },
    { type: "calc", q: "2 notebooks + 3 pens = 170; 1 notebook + 1 pen = 65. Solve by matrices.", answer: "n=50,p=15", difficulty: 3, explanation: "A=[2 3;1 1], det −1 → n = 50, p = 15" },
    { type: "concept", q: "Explain what entry (1,2) of (quantities × prices) means when rows = branches, cols = products, and the second matrix is products × costs.", answer: "branch|product|contribution", difficulty: 3, explanation: "It sums over the shared index: branch 1's quantity of each product times that product's cost-attribute 2 — the total cost-type-2 contribution of branch 1; the product's entries are always 'row-story combined with column-story' through the shared middle index" }
  ]
};
